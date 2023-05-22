/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class e{constructor(t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=s.get(this.cssText);return t&&void 0===i&&(s.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const r=window.trustedTypes,l=r?r.emptyScript:"",h=window.reactiveElementPolyfillSupport,a={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,i)=>i!==t&&(i==i||t==t),d={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=d){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=d){var e,n;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:a.toAttribute)(i,s.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,i){var s,e,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==n?n:a.fromAttribute;this._$Ei=r,this[r]=h(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:u}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.2");const p=globalThis.trustedTypes,f=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,g="?"+b,y=`<${g}>`,w=document,m=(t="")=>w.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,A=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,T=/"/g,E=/^(?:script|style|textarea|title)$/i,U=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),O=new WeakMap,j=w.createTreeWalker(w,129,null,!1),N=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",r=x;for(let i=0;i<s;i++){const s=t[i];let l,h,a=-1,c=0;for(;c<s.length&&(r.lastIndex=c,h=r.exec(s),null!==h);)c=r.lastIndex,r===x?"!--"===h[1]?r=C:void 0!==h[1]?r=A:void 0!==h[2]?(E.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=_):void 0!==h[3]&&(r=_):r===_?">"===h[0]?(r=null!=n?n:x,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?_:'"'===h[3]?T:k):r===T||r===k?r=_:r===C||r===A?r=x:(r=_,n=void 0);const d=r===_&&t[i+1].startsWith("/>")?" ":"";o+=r===x?s+y:a>=0?(e.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+b+d):s+b+(-2===a?(e.push(void 0),i):d)}const l=o+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,e]};class R{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=N(t,i);if(this.el=R.createElement(h,s),j.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=j.nextNode())&&l.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(b)){const s=a[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(b),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?D:"?"===i[1]?J:"@"===i[1]?K:B})}else l.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(E.test(e.tagName)){const t=e.textContent.split(b),i=t.length-1;if(i>0){e.textContent=p?p.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],m()),j.nextNode(),l.push({type:2,index:++n});e.append(t[i],m())}}}else if(8===e.nodeType)if(e.data===g)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(b,t+1));)l.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,i){const s=w.createElement("template");return s.innerHTML=t,s}}function I(t,i,s=t,e){var n,o,r,l;if(i===z)return i;let h=void 0!==e?null===(n=s._$Cl)||void 0===n?void 0:n[e]:s._$Cu;const a=$(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,e)),void 0!==e?(null!==(r=(l=s)._$Cl)&&void 0!==r?r:l._$Cl=[])[e]=h:s._$Cu=h),void 0!==h&&(i=I(t,h._$AS(t,i.values),h,e)),i}class P{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:w).importNode(s,!0);j.currentNode=n;let o=j.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new L(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new Z(o,this,t)),this.v.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(o=j.nextNode(),r++)}return n}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class L{constructor(t,i,s,e){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=I(this,t,i),$(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var i;return S(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==M&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(w.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=R.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(s);else{const t=new P(n,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=O.get(t.strings);return void 0===i&&O.set(t.strings,i=new R(t)),i}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new L(this.M(m()),this.M(m()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class B{constructor(t,i,s,e,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,i,0),o=!$(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{const e=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=I(this,e[s+r],i,r),l===z&&(l=this._$AH[r]),o||(o=!$(l)||l!==this._$AH[r]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!e&&this.C(t)}C(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===M?void 0:t}}const H=p?p.emptyScript:"";class J extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==M?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class K extends B{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=I(this,t,i,0))&&void 0!==s?s:M)===z)return;const e=this._$AH,n=t===M&&e!==M||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==M&&(e===M||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,V;null==q||q(R,L),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.3");class W extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new L(i.insertBefore(m(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}}W.finalized=!0,W._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:W});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:W}),(null!==(V=globalThis.litElementVersions)&&void 0!==V?V:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):Q(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var Y;null===(Y=window.HTMLSlotElement)||void 0===Y||Y.prototype.assignedElements;var tt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let it=class extends W{constructor(){super(...arguments),this.id="",this.value=""}render(){const t=this.value.split("\n\n");return U`
      <div
        class="text-editor-wrap"
        id="${this.id}"
        @input=${t=>{this.value=t.target.value}}
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
        ><code class="fancy-content">${t.map((t=>t.split("\n").map((t=>U`<span>${t} </span>`)))).map(((i,s)=>U`${i}${s<t.length-1?U`<span>&nbsp;</span>`:null}`))}
          </code>
        </pre>
        <slot class="editorslot" @slotchange=${this.initFromSlotText}></slot>
      </div>
    `}updated(){const t=this.renderRoot.querySelector("slot");null!==t&&(t.textContent=this.value)}syncScroll(t){const i=t.target,s=this.renderRoot.querySelector(".fancy");null!==s&&(s.scrollTop=i.scrollTop,s.scrollLeft=i.scrollLeft)}initFromSlotText(){const t=this.renderRoot.querySelector("slot");if(null===t)return;const i=t.assignedNodes({flatten:!0});if(null===i||0===i.length)return;const s=i[0];"string"==typeof s.textContent&&(this.value=s.textContent.trim())}};it.styles=((t,...s)=>{const n=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(n,i)})`
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
  `,tt([X()],it.prototype,"id",void 0),tt([X()],it.prototype,"value",void 0),it=tt([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i))("text-editor")],it);export{it as TextEditorComponent};
