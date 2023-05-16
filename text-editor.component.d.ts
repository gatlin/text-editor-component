import { LitElement } from "lit";
declare class TextEditorComponent extends LitElement {
    id: string;
    value: string;
    /**
     * @remarks
     * The `<code>` tag **must** begin on the same line as the closing `>` in
     * `<pre>`. Otherwise the newline is interpreted literally and causes the
     * text not to line up correctly.
     */
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
    /**
     * Ensures the textarea and `<pre>` tag are scrolled the same amount along
     * both axes.
     */
    protected syncScroll(e: Event): void;
    /**
     * Captures any child text content that may exist in the literal markup.
     */
    protected initFromSlotText(): void;
    static styles: import("lit").CSSResult;
}
export { TextEditorComponent };
//# sourceMappingURL=text-editor.component.d.ts.map