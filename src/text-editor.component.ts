import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("text-editor")
class TextEditorComponent extends LitElement {
  @property()
  public id = "";

  @property({ reflect: true })
  public value = "";

  /**
   * @remarks
   * The `<code>` tag **must** begin on the same line as the closing `>` in
   * `<pre>`. Otherwise the newline is interpreted literally and causes the
   * text not to line up correctly.
   */
  render() {
    const lines = this.value.split("\n\n");
    return html`
      <div
        class="text-editor-wrap"
        id="${this.id}"
        @input=${(e: Event): void => {
          this.value = (e.target as HTMLInputElement).value;
        }}
      >
        <textarea
          class="plain"
          spellcheck="false"
          .value=${this.value}
          @scroll=${this.syncScroll}
          @input=${this.syncScroll}
        ></textarea>
        <pre
          class="fancy"
          aria-hidden="true"
        ><code class="fancy-content">${lines
          .map((p) => p.split("\n").map((line) => html`<span>${line} </span>`))
          .map(
            (p, i) =>
              html`${p}${i < lines.length - 1
                ? html`<span>&nbsp;</span>`
                : null}`
          )}
          </code>
        </pre>
        <slot class="editorslot" @slotchange=${this.initFromSlotText}></slot>
      </div>
    `;
  }

  updated() {
    const slot = this.renderRoot.querySelector("slot");
    if (null !== slot) {
      slot.textContent = this.value;
    }
  }

  /**
   * Ensures the textarea and `<pre>` tag are scrolled the same amount along
   * both axes.
   */
  protected syncScroll(e: Event): void {
    const plain = e.target as HTMLElement;
    const fancy = this.renderRoot.querySelector(".fancy");
    if (null === fancy) {
      return;
    }
    fancy.scrollTop = plain.scrollTop;
    fancy.scrollLeft = plain.scrollLeft;
  }

  /**
   * Captures any child text content that may exist in the literal markup.
   */
  protected initFromSlotText(): void {
    const slot = this.renderRoot.querySelector("slot");
    if (null === slot) {
      return;
    }
    const textContents = slot.assignedNodes({
      flatten: true
    });
    if (null === textContents || 0 === textContents.length) {
      return;
    }
    const text = textContents[0];
    if ("string" === typeof text.textContent) {
      this.value = text.textContent.trim();
    }
  }

  static styles = css`
    :host {
      background-color: inherit;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      color: transparent;
      padding: 1rem;
    }

    @media screen and (min-device-width: 800px) {
      .text-editor-wrap {
        flex: 3;
      }
    }

    .text-editor-wrap {
      display: block;
      box-sizing: border-box;
      flex: 2;
      position: relative;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0rem;
      background-color: inherit;
      border-radius: 4px;
    }

    .plain,
    .fancy {
      box-sizing: border-box;
      margin: 0rem;
      border-top: 1rem;
      border-bottom: 1rem;
      border-right: 1rem;
      border-left: 1rem;
      padding: 0;
      position: absolute;
      top: 0rem;
      left: 0rem;
      height: 100%;
      width: 100%;
      overflow: auto;
      white-space: pre-wrap;
    }

    .plain,
    .fancy,
    .fancy * {
      font-size: inherit;
      font-family: inherit, monospace;
      line-height: inherit;
    }

    textarea.plain {
      z-index: 1;
      background: transparent;
      outline: none;
      color: transparent;
      caret-color: white;
      resize: none;
      scrollbar-color: transparent;
      scrollbar-width: thin;
      padding-left: 5ch;
    }

    .fancy {
      color: inherit;
      z-index: 0;
      scrollbar-color: transparent;
      scrollbar-width: none;
    }

    .fancy-content {
      counter-reset: line;
    }

    .fancy-content span {
      position: relative;
      display: block;
      line-height: inherit;
      counter-increment: line;
      padding-left: 5ch;
    }

    .fancy-content span:before {
      position: absolute;
      left: 0;
      content: counter(line);
      font-size: 9pt;
      color: #b9b9b9;
    }

    .editorslot {
      color: transparent;
    }
  `;
}

export { TextEditorComponent };
