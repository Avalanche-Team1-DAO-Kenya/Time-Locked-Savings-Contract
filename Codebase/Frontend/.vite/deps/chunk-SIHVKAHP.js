import {
  __rest,
  init_tslib_es6
} from "./chunk-7QPJQKPF.js";

// node_modules/@lit/reactive-element/development/css-tag.js
var NODE_MODE = false;
var global = NODE_MODE ? globalThis : window;
var supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === void 0 || global.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var cssTagCache = /* @__PURE__ */ new WeakMap();
var CSSResult = class {
  constructor(cssText, strings, safeToken) {
    this["_$cssResult$"] = true;
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  get styleSheet() {
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === void 0) {
      const cacheable = strings !== void 0 && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === void 0) {
        (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
};
var textFromCSSResult = (value) => {
  if (value["_$cssResult$"] === true) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`);
  }
};
var unsafeCSS = (value) => new CSSResult(typeof value === "string" ? value : String(value), void 0, constructionToken);
var css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
var adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  } else {
    styles.forEach((s) => {
      const style2 = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== void 0) {
        style2.setAttribute("nonce", nonce);
      }
      style2.textContent = s.cssText;
      renderRoot.appendChild(style2);
    });
  }
};
var cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
var getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === void 0 ? (s) => s : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;

// node_modules/lit-html/development/lit-html.js
var _a;
var _b;
var _c;
var _d;
var DEV_MODE = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE2 = false;
var global2 = NODE_MODE2 ? globalThis : window;
var debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global2.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global2.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var debugLogRenderId = 0;
var issueWarning;
if (DEV_MODE) {
  (_a = global2.litIssuedWarnings) !== null && _a !== void 0 ? _a : global2.litIssuedWarnings = /* @__PURE__ */ new Set();
  issueWarning = (code, warning2) => {
    warning2 += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global2.litIssuedWarnings.has(warning2)) {
      console.warn(warning2);
      global2.litIssuedWarnings.add(warning2);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
}
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_b = global2.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) && ((_c = global2.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true ? global2.ShadyDOM.wrap : (node) => node;
var trustedTypes = global2.trustedTypes;
var policy = trustedTypes ? trustedTypes.createPolicy("lit-html", {
  createHTML: (s) => s
}) : void 0;
var identityFunction = (value) => value;
var noopSanitizer = (_node, _name, _type) => identityFunction;
var setSanitizer = (newSanitizer) => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
};
var boundAttributeSuffix = "$lit$";
var marker = `lit$${String(Math.random()).slice(9)}$`;
var markerMatch = "?" + marker;
var nodeMarker = `<${markerMatch}>`;
var d = NODE_MODE2 && global2.document === void 0 ? {
  createTreeWalker() {
    return {};
  }
} : document;
var createMarker = () => d.createComment("");
var isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
var isArray = Array.isArray;
var isIterable = (value) => isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === "function";
var SPACE_CHAR = `[ 	
\f\r]`;
var ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`;
var NAME_CHAR = `[^\\s"'>=/]`;
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
var comment2EndRegex = />/g;
var tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g");
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
var rawTextElement = /^(?:script|style|textarea|title)$/i;
var HTML_RESULT = 1;
var SVG_RESULT = 2;
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
var tag = (type) => (strings, ...values) => {
  if (DEV_MODE && strings.some((s) => s === void 0)) {
    console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences.");
  }
  return {
    // This property needs to remain unminified.
    ["_$litType$"]: type,
    strings,
    values
  };
};
var html = tag(HTML_RESULT);
var svg = tag(SVG_RESULT);
var noChange = Symbol.for("lit-noChange");
var nothing = Symbol.for("lit-nothing");
var templateCache = /* @__PURE__ */ new WeakMap();
var walker = d.createTreeWalker(d, 129, null, false);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!Array.isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    if (DEV_MODE) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, "\n");
    }
    throw new Error(message);
  }
  return policy !== void 0 ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
var getTemplateHtml = (strings, type) => {
  const l = strings.length - 1;
  const attrNames = [];
  let html2 = type === SVG_RESULT ? "<svg>" : "";
  let rawTextEndRegex;
  let regex = textEndRegex;
  for (let i = 0; i < l; i++) {
    const s = strings[i];
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    while (lastIndex < s.length) {
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === "!--") {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== void 0) {
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== void 0) {
          if (rawTextElement.test(match[TAG_NAME])) {
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g");
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== void 0) {
          if (DEV_MODE) {
            throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === ">") {
          regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === void 0) {
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === void 0 ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        regex = tagEndRegex;
        rawTextEndRegex = void 0;
      }
    }
    if (DEV_MODE) {
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    }
    const end = regex === tagEndRegex && strings[i + 1].startsWith("/>") ? " " : "";
    html2 += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? (attrNames.push(void 0), i) : end);
  }
  const htmlResult = html2 + (strings[l] || "<?>") + (type === SVG_RESULT ? "</svg>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
var Template = class _Template {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    const [html2, attrNames] = getTemplateHtml(strings, type);
    this.el = _Template.createElement(html2, options);
    walker.currentNode = this.el.content;
    if (type === SVG_RESULT) {
      const content = this.el.content;
      const svgElement = content.firstChild;
      svgElement.remove();
      content.append(...svgElement.childNodes);
    }
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          const tag2 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag2) && node.innerHTML.includes(marker)) {
            const m = `Expressions are not supported inside \`${tag2}\` elements. See https://lit.dev/msg/expression-in-${tag2} for more information.`;
            if (tag2 === "template") {
              throw new Error(m);
            } else
              issueWarning("", m);
          }
        }
        if (node.hasAttributes()) {
          const attrsToRemove = [];
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix) || name.startsWith(marker)) {
              const realName = attrNames[attrNameIndex++];
              attrsToRemove.push(name);
              if (realName !== void 0) {
                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                const statics = value.split(marker);
                const m = /([.?@])?(.*)/.exec(realName);
                parts.push({
                  type: ATTRIBUTE_PART,
                  index: nodeIndex,
                  name: m[2],
                  strings: statics,
                  ctor: m[1] === "." ? PropertyPart : m[1] === "?" ? BooleanAttributePart : m[1] === "@" ? EventPart : AttributePart
                });
              } else {
                parts.push({
                  type: ELEMENT_PART,
                  index: nodeIndex
                });
              }
            }
          }
          for (const name of attrsToRemove) {
            node.removeAttribute(name);
          }
        }
        if (rawTextElement.test(node.tagName)) {
          const strings2 = node.textContent.split(marker);
          const lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : "";
            for (let i = 0; i < lastIndex; i++) {
              node.append(strings2[i], createMarker());
              walker.nextNode();
              parts.push({ type: CHILD_PART, index: ++nodeIndex });
            }
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data2 = node.data;
        if (data2 === markerMatch) {
          parts.push({ type: CHILD_PART, index: nodeIndex });
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            parts.push({ type: COMMENT_PART, index: nodeIndex });
            i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "template prep",
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  static createElement(html2, _options) {
    const el = d.createElement("template");
    el.innerHTML = html2;
    return el;
  }
};
function resolveDirective(part, value, parent = part, attributeIndex) {
  var _a5, _b4, _c4;
  var _d3;
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== void 0 ? (_a5 = parent.__directives) === null || _a5 === void 0 ? void 0 : _a5[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? void 0 : (
    // This property needs to remain unminified.
    value["_$litDirective$"]
  );
  if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
    (_b4 = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective["_$notifyDirectiveConnectionChanged"]) === null || _b4 === void 0 ? void 0 : _b4.call(currentDirective, false);
    if (nextDirectiveConstructor === void 0) {
      currentDirective = void 0;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== void 0) {
      ((_c4 = (_d3 = parent).__directives) !== null && _c4 !== void 0 ? _c4 : _d3.__directives = [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== void 0) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
var TemplateInstance = class {
  constructor(template, parent) {
    this._$parts = [];
    this._$disconnectableChildren = void 0;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  get parentNode() {
    return this._$parent.parentNode;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _clone(options) {
    var _a5;
    const { el: { content }, parts } = this._$template;
    const fragment = ((_a5 = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a5 !== void 0 ? _a5 : d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== void 0) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i = 0;
    for (const part of this._$parts) {
      if (part !== void 0) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: "set part",
          part,
          value: values[i],
          valueIndex: i,
          values,
          templateInstance: this
        });
        if (part.strings !== void 0) {
          part._$setValue(values, part, i);
          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }
      i++;
    }
  }
};
var ChildPart = class _ChildPart {
  constructor(startNode, endNode, parent, options) {
    var _a5;
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = (_a5 = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a5 !== void 0 ? _a5 : true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = void 0;
    }
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    var _a5, _b4;
    return (_b4 = (_a5 = this._$parent) === null || _a5 === void 0 ? void 0 : _a5._$isConnected) !== null && _b4 !== void 0 ? _b4 : this.__isConnected;
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== void 0 && (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 11) {
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */
  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    var _a5;
    if (DEV_MODE && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing || value == null || value === "") {
        if (this._$committedValue !== nothing) {
          debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: "commit nothing to child",
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
    } else if (value["_$litType$"] !== void 0) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== void 0) {
      if (DEV_MODE && ((_a5 = this.options) === null || _a5 === void 0 ? void 0 : _a5.host) === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself (commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    var _a5;
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = (_a5 = this._$startNode.parentNode) === null || _a5 === void 0 ? void 0 : _a5.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          if (DEV_MODE) {
            if (parentNodeName === "STYLE") {
              message = `Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css\`...\` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "commit node",
        start: this._$startNode,
        parent: this._$parent,
        value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(node, "data", "property");
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "commit text",
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode("");
        this._commitNode(textNode);
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(textNode, "data", "property");
        }
        value = this._textSanitizer(value);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: "commit text",
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    var _a5;
    const { values, ["_$litType$"]: type } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (((_a5 = this._$committedValue) === null || _a5 === void 0 ? void 0 : _a5._$template) === template) {
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "template updating",
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "template instantiated and updated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === void 0) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        itemParts.push(itemPart = new _ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    var _a5;
    (_a5 = this._$notifyConnectionChanged) === null || _a5 === void 0 ? void 0 : _a5.call(this, false, true, from);
    while (start && start !== this._$endNode) {
      const n = wrap(start).nextSibling;
      wrap(start).remove();
      start = n;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this metod
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */
  setConnected(isConnected) {
    var _a5;
    if (this._$parent === void 0) {
      this.__isConnected = isConnected;
      (_a5 = this._$notifyConnectionChanged) === null || _a5 === void 0 ? void 0 : _a5.call(this, isConnected);
    } else if (DEV_MODE) {
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
    }
  }
};
var AttributePart = class {
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== "" || strings[1] !== "") {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = void 0;
    }
  }
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    let change = false;
    if (strings === void 0) {
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      const values = value;
      value = strings[0];
      let i, v;
      for (i = 0; i < strings.length - 1; i++) {
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
        if (v === noChange) {
          v = this._$committedValue[i];
        }
        change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
        if (v === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v !== null && v !== void 0 ? v : "") + strings[i + 1];
        }
        this._$committedValue[i] = v;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */
  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === void 0) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "attribute");
        }
        value = this._sanitizer(value !== null && value !== void 0 ? value : "");
      }
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value !== null && value !== void 0 ? value : "");
    }
  }
};
var PropertyPart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === void 0) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "property");
      }
      value = this._sanitizer(value);
    }
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing ? void 0 : value;
  }
};
var emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
var BooleanAttributePart = class extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    if (value && value !== nothing) {
      wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
    } else {
      wrap(this.element).removeAttribute(this.name);
    }
  }
};
var EventPart = class extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE && this.strings !== void 0) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
    }
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _$setValue(newListener, directiveParent = this) {
    var _a5;
    newListener = (_a5 = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a5 !== void 0 ? _a5 : nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit event listener",
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    var _a5, _b4;
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call((_b4 = (_a5 = this.options) === null || _a5 === void 0 ? void 0 : _a5.host) !== null && _b4 !== void 0 ? _b4 : this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
};
var ElementPart = class {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    this._$disconnectableChildren = void 0;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit to element binding",
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
};
var polyfillSupport = DEV_MODE ? global2.litHtmlPolyfillSupportDevMode : global2.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
((_d = global2.litHtmlVersions) !== null && _d !== void 0 ? _d : global2.litHtmlVersions = []).push("2.8.0");
if (DEV_MODE && global2.litHtmlVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}
var render = (value, container, options) => {
  var _a5, _b4;
  if (DEV_MODE && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE ? debugLogRenderId++ : 0;
  const partOwnerNode = (_a5 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a5 !== void 0 ? _a5 : container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === void 0) {
    const endNode = (_b4 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b4 !== void 0 ? _b4 : null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, void 0, options !== null && options !== void 0 ? options : {});
  }
  part._$setValue(value);
  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
    kind: "end render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

// node_modules/@lit/reactive-element/development/reactive-element.js
var _a2;
var _b2;
var _c2;
var _d2;
var _e;
var NODE_MODE3 = false;
var global3 = NODE_MODE3 ? globalThis : window;
if (NODE_MODE3) {
  (_a2 = global3.customElements) !== null && _a2 !== void 0 ? _a2 : global3.customElements = customElements;
}
var DEV_MODE2 = true;
var requestUpdateThenable;
var issueWarning2;
var trustedTypes2 = global3.trustedTypes;
var emptyStringForBooleanAttribute2 = trustedTypes2 ? trustedTypes2.emptyScript : "";
var polyfillSupport2 = DEV_MODE2 ? global3.reactiveElementPolyfillSupportDevMode : global3.reactiveElementPolyfillSupport;
if (DEV_MODE2) {
  const issuedWarnings = (_b2 = global3.litIssuedWarnings) !== null && _b2 !== void 0 ? _b2 : global3.litIssuedWarnings = /* @__PURE__ */ new Set();
  issueWarning2 = (code, warning2) => {
    warning2 += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning2)) {
      console.warn(warning2);
      issuedWarnings.add(warning2);
    }
  };
  issueWarning2("dev-mode", `Lit is in dev mode. Not recommended for production!`);
  if (((_c2 = global3.ShadyDOM) === null || _c2 === void 0 ? void 0 : _c2.inUse) && polyfillSupport2 === void 0) {
    issueWarning2("polyfill-support-missing", `Shadow DOM is being polyfilled via \`ShadyDOM\` but the \`polyfill-support\` module has not been loaded.`);
  }
  requestUpdateThenable = (name) => ({
    then: (onfulfilled, _onrejected) => {
      issueWarning2("request-update-promise", `The \`requestUpdate\` method should no longer return a Promise but does so on \`${name}\`. Use \`updateComplete\` instead.`);
      if (onfulfilled !== void 0) {
        onfulfilled(false);
      }
    }
  });
}
var debugLogEvent2 = DEV_MODE2 ? (event) => {
  const shouldEmit = global3.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global3.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
var JSCompiler_renameProperty = (prop, _obj) => prop;
var defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute2 : null;
        break;
      case Object:
      case Array:
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute(value, type) {
    let fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        try {
          fromValue = JSON.parse(value);
        } catch (e) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
var notEqual = (value, old) => {
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var finalized = "finalized";
var ReactiveElement = class extends HTMLElement {
  constructor() {
    super();
    this.__instanceProperties = /* @__PURE__ */ new Map();
    this.isUpdatePending = false;
    this.hasUpdated = false;
    this.__reflectingProperty = null;
    this.__initialize();
  }
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */
  static addInitializer(initializer) {
    var _a5;
    this.finalize();
    ((_a5 = this._initializers) !== null && _a5 !== void 0 ? _a5 : this._initializers = []).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */
  static get observedAttributes() {
    this.finalize();
    const attributes = [];
    this.elementProperties.forEach((v, p) => {
      const attr = this.__attributeNameForProperty(p, v);
      if (attr !== void 0) {
        this.__attributeToPropertyMap.set(attr, p);
        attributes.push(attr);
      }
    });
    return attributes;
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static createProperty(name, options = defaultPropertyDeclaration) {
    var _a5;
    if (options.state) {
      options.attribute = false;
    }
    this.finalize();
    this.elementProperties.set(name, options);
    if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
      const key = typeof name === "symbol" ? Symbol() : `__${name}`;
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== void 0) {
        Object.defineProperty(this.prototype, name, descriptor);
        if (DEV_MODE2) {
          if (!this.hasOwnProperty("__reactivePropertyKeys")) {
            this.__reactivePropertyKeys = new Set((_a5 = this.__reactivePropertyKeys) !== null && _a5 !== void 0 ? _a5 : []);
          }
          this.__reactivePropertyKeys.add(name);
        }
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static getPropertyDescriptor(name, key, options) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get() {
        return this[key];
      },
      set(value) {
        const oldValue = this[name];
        this[key] = value;
        this.requestUpdate(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */
  static getPropertyOptions(name) {
    return this.elementProperties.get(name) || defaultPropertyDeclaration;
  }
  /**
   * Creates property accessors for registered properties, sets up element
   * styling, and ensures any superclasses are also finalized. Returns true if
   * the element was finalized.
   * @nocollapse
   */
  static finalize() {
    if (this.hasOwnProperty(finalized)) {
      return false;
    }
    this[finalized] = true;
    const superCtor = Object.getPrototypeOf(this);
    superCtor.finalize();
    if (superCtor._initializers !== void 0) {
      this._initializers = [...superCtor._initializers];
    }
    this.elementProperties = new Map(superCtor.elementProperties);
    this.__attributeToPropertyMap = /* @__PURE__ */ new Map();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...Object.getOwnPropertyNames(props),
        ...Object.getOwnPropertySymbols(props)
      ];
      for (const p of propKeys) {
        this.createProperty(p, props[p]);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE2) {
      const warnRemovedOrRenamed = (name, renamed = false) => {
        if (this.prototype.hasOwnProperty(name)) {
          issueWarning2(renamed ? "renamed-api" : "removed-api", `\`${name}\` is implemented on class ${this.name}. It has been ${renamed ? "renamed" : "removed"} in this version of LitElement.`);
        }
      };
      warnRemovedOrRenamed("initialize");
      warnRemovedOrRenamed("requestUpdateInternal");
      warnRemovedOrRenamed("_getUpdateComplete", true);
    }
    return true;
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */
  static finalizeStyles(styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
      const set = new Set(styles.flat(Infinity).reverse());
      for (const s of set) {
        elementStyles.unshift(getCompatibleStyle(s));
      }
    } else if (styles !== void 0) {
      elementStyles.push(getCompatibleStyle(styles));
    }
    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static __attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : void 0;
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  __initialize() {
    var _a5;
    this.__updatePromise = new Promise((res) => this.enableUpdating = res);
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.__saveInstanceProperties();
    this.requestUpdate();
    (_a5 = this.constructor._initializers) === null || _a5 === void 0 ? void 0 : _a5.forEach((i) => i(this));
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */
  addController(controller) {
    var _a5, _b4;
    ((_a5 = this.__controllers) !== null && _a5 !== void 0 ? _a5 : this.__controllers = []).push(controller);
    if (this.renderRoot !== void 0 && this.isConnected) {
      (_b4 = controller.hostConnected) === null || _b4 === void 0 ? void 0 : _b4.call(controller);
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */
  removeController(controller) {
    var _a5;
    (_a5 = this.__controllers) === null || _a5 === void 0 ? void 0 : _a5.splice(this.__controllers.indexOf(controller) >>> 0, 1);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  __saveInstanceProperties() {
    this.constructor.elementProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        this.__instanceProperties.set(p, this[p]);
        delete this[p];
      }
    });
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */
  createRenderRoot() {
    var _a5;
    const renderRoot = (_a5 = this.shadowRoot) !== null && _a5 !== void 0 ? _a5 : this.attachShadow(this.constructor.shadowRootOptions);
    adoptStyles(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */
  connectedCallback() {
    var _a5;
    if (this.renderRoot === void 0) {
      this.renderRoot = this.createRenderRoot();
    }
    this.enableUpdating(true);
    (_a5 = this.__controllers) === null || _a5 === void 0 ? void 0 : _a5.forEach((c) => {
      var _a6;
      return (_a6 = c.hostConnected) === null || _a6 === void 0 ? void 0 : _a6.call(c);
    });
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */
  enableUpdating(_requestedUpdate) {
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */
  disconnectedCallback() {
    var _a5;
    (_a5 = this.__controllers) === null || _a5 === void 0 ? void 0 : _a5.forEach((c) => {
      var _a6;
      return (_a6 = c.hostDisconnected) === null || _a6 === void 0 ? void 0 : _a6.call(c);
    });
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */
  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }
  __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    var _a5;
    const attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== void 0 && options.reflect === true) {
      const converter = ((_a5 = options.converter) === null || _a5 === void 0 ? void 0 : _a5.toAttribute) !== void 0 ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE2 && this.constructor.enabledWarnings.indexOf("migration") >= 0 && attrValue === void 0) {
        issueWarning2("undefined-attribute-value", `The attribute value for the ${name} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);
      }
      this.__reflectingProperty = name;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this.__reflectingProperty = null;
    }
  }
  /** @internal */
  _$attributeToProperty(name, value) {
    var _a5;
    const ctor = this.constructor;
    const propName = ctor.__attributeToPropertyMap.get(name);
    if (propName !== void 0 && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === "function" ? { fromAttribute: options.converter } : ((_a5 = options.converter) === null || _a5 === void 0 ? void 0 : _a5.fromAttribute) !== void 0 ? options.converter : defaultConverter;
      this.__reflectingProperty = propName;
      this[propName] = converter.fromAttribute(
        value,
        options.type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      );
      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @category updates
   */
  requestUpdate(name, oldValue, options) {
    let shouldRequestUpdate = true;
    if (name !== void 0) {
      options = options || this.constructor.getPropertyOptions(name);
      const hasChanged2 = options.hasChanged || notEqual;
      if (hasChanged2(this[name], oldValue)) {
        if (!this._$changedProperties.has(name)) {
          this._$changedProperties.set(name, oldValue);
        }
        if (options.reflect === true && this.__reflectingProperty !== name) {
          if (this.__reflectingProperties === void 0) {
            this.__reflectingProperties = /* @__PURE__ */ new Map();
          }
          this.__reflectingProperties.set(name, options);
        }
      } else {
        shouldRequestUpdate = false;
      }
    }
    if (!this.isUpdatePending && shouldRequestUpdate) {
      this.__updatePromise = this.__enqueueUpdate();
    }
    return DEV_MODE2 ? requestUpdateThenable(this.localName) : void 0;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async __enqueueUpdate() {
    this.isUpdatePending = true;
    try {
      await this.__updatePromise;
    } catch (e) {
      Promise.reject(e);
    }
    const result = this.scheduleUpdate();
    if (result != null) {
      await result;
    }
    return !this.isUpdatePending;
  }
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */
  scheduleUpdate() {
    return this.performUpdate();
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * Note: To ensure `performUpdate()` synchronously completes a pending update,
   * it should not be overridden. In LitElement 2.x it was suggested to override
   * `performUpdate()` to also customizing update scheduling. Instead, you should now
   * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
   * scheduling updates via `performUpdate()` continues to work, but will make
   * also calling `performUpdate()` to synchronously process updates difficult.
   *
   * @category updates
   */
  performUpdate() {
    var _a5, _b4;
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent2 === null || debugLogEvent2 === void 0 ? void 0 : debugLogEvent2({ kind: "update" });
    if (!this.hasUpdated) {
      if (DEV_MODE2) {
        const shadowedProperties = [];
        (_a5 = this.constructor.__reactivePropertyKeys) === null || _a5 === void 0 ? void 0 : _a5.forEach((p) => {
          var _a6;
          if (this.hasOwnProperty(p) && !((_a6 = this.__instanceProperties) === null || _a6 === void 0 ? void 0 : _a6.has(p))) {
            shadowedProperties.push(p);
          }
        });
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${shadowedProperties.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`);
        }
      }
    }
    if (this.__instanceProperties) {
      this.__instanceProperties.forEach((v, p) => this[p] = v);
      this.__instanceProperties = void 0;
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        (_b4 = this.__controllers) === null || _b4 === void 0 ? void 0 : _b4.forEach((c) => {
          var _a6;
          return (_a6 = c.hostUpdate) === null || _a6 === void 0 ? void 0 : _a6.call(c);
        });
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e) {
      shouldUpdate = false;
      this.__markUpdated();
      throw e;
    }
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */
  willUpdate(_changedProperties) {
  }
  // Note, this is an override point for polyfill-support.
  // @internal
  _$didUpdate(changedProperties) {
    var _a5;
    (_a5 = this.__controllers) === null || _a5 === void 0 ? void 0 : _a5.forEach((c) => {
      var _a6;
      return (_a6 = c.hostUpdated) === null || _a6 === void 0 ? void 0 : _a6.call(c);
    });
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE2 && this.isUpdatePending && this.constructor.enabledWarnings.indexOf("change-in-update") >= 0) {
      issueWarning2("change-in-update", `Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`);
    }
  }
  __markUpdated() {
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  get updateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  update(_changedProperties) {
    if (this.__reflectingProperties !== void 0) {
      this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
      this.__reflectingProperties = void 0;
    }
    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  updated(_changedProperties) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  firstUpdated(_changedProperties) {
  }
};
_e = finalized;
ReactiveElement[_e] = true;
ReactiveElement.elementProperties = /* @__PURE__ */ new Map();
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = { mode: "open" };
polyfillSupport2 === null || polyfillSupport2 === void 0 ? void 0 : polyfillSupport2({ ReactiveElement });
if (DEV_MODE2) {
  ReactiveElement.enabledWarnings = ["change-in-update"];
  const ensureOwnWarnings = function(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings", ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function(warning2) {
    ensureOwnWarnings(this);
    if (this.enabledWarnings.indexOf(warning2) < 0) {
      this.enabledWarnings.push(warning2);
    }
  };
  ReactiveElement.disableWarning = function(warning2) {
    ensureOwnWarnings(this);
    const i = this.enabledWarnings.indexOf(warning2);
    if (i >= 0) {
      this.enabledWarnings.splice(i, 1);
    }
  };
}
((_d2 = global3.reactiveElementVersions) !== null && _d2 !== void 0 ? _d2 : global3.reactiveElementVersions = []).push("1.6.3");
if (DEV_MODE2 && global3.reactiveElementVersions.length > 1) {
  issueWarning2("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}

// node_modules/lit-element/development/lit-element.js
var _a3;
var _b3;
var _c3;
var DEV_MODE3 = true;
var issueWarning3;
if (DEV_MODE3) {
  const issuedWarnings = (_a3 = globalThis.litIssuedWarnings) !== null && _a3 !== void 0 ? _a3 : globalThis.litIssuedWarnings = /* @__PURE__ */ new Set();
  issueWarning3 = (code, warning2) => {
    warning2 += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning2)) {
      console.warn(warning2);
      issuedWarnings.add(warning2);
    }
  };
}
var LitElement = class extends ReactiveElement {
  constructor() {
    super(...arguments);
    this.renderOptions = { host: this };
    this.__childPart = void 0;
  }
  /**
   * @category rendering
   */
  createRenderRoot() {
    var _a5;
    var _b4;
    const renderRoot = super.createRenderRoot();
    (_a5 = (_b4 = this.renderOptions).renderBefore) !== null && _a5 !== void 0 ? _a5 : _b4.renderBefore = renderRoot.firstChild;
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */
  update(changedProperties) {
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = render(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */
  connectedCallback() {
    var _a5;
    super.connectedCallback();
    (_a5 = this.__childPart) === null || _a5 === void 0 ? void 0 : _a5.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */
  disconnectedCallback() {
    var _a5;
    super.disconnectedCallback();
    (_a5 = this.__childPart) === null || _a5 === void 0 ? void 0 : _a5.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */
  render() {
    return noChange;
  }
};
LitElement["finalized"] = true;
LitElement["_$litElement$"] = true;
(_b3 = globalThis.litElementHydrateSupport) === null || _b3 === void 0 ? void 0 : _b3.call(globalThis, { LitElement });
var polyfillSupport3 = DEV_MODE3 ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport3 === null || polyfillSupport3 === void 0 ? void 0 : polyfillSupport3({ LitElement });
if (DEV_MODE3) {
  LitElement["finalize"] = function() {
    const finalized2 = ReactiveElement.finalize.call(this);
    if (!finalized2) {
      return false;
    }
    const warnRemovedOrRenamed = (obj, name, renamed = false) => {
      if (obj.hasOwnProperty(name)) {
        const ctorName = (typeof obj === "function" ? obj : obj.constructor).name;
        issueWarning3(renamed ? "renamed-api" : "removed-api", `\`${name}\` is implemented on class ${ctorName}. It has been ${renamed ? "renamed" : "removed"} in this version of LitElement.`);
      }
    };
    warnRemovedOrRenamed(this, "render");
    warnRemovedOrRenamed(this, "getStyles", true);
    warnRemovedOrRenamed(this.prototype, "adoptStyles");
    return true;
  };
}
((_c3 = globalThis.litElementVersions) !== null && _c3 !== void 0 ? _c3 : globalThis.litElementVersions = []).push("3.3.3");
if (DEV_MODE3 && globalThis.litElementVersions.length > 1) {
  issueWarning3("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}

// node_modules/@lit/reactive-element/development/decorators/custom-element.js
var legacyCustomElement = (tagName, clazz) => {
  customElements.define(tagName, clazz);
  return clazz;
};
var standardCustomElement = (tagName, descriptor) => {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    // This callback is called once the class is otherwise fully defined
    finisher(clazz) {
      customElements.define(tagName, clazz);
    }
  };
};
var customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);

// node_modules/@lit/reactive-element/development/decorators/property.js
var standardProperty = (options, element) => {
  if (element.kind === "method" && element.descriptor && !("value" in element.descriptor)) {
    return {
      ...element,
      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  } else {
    return {
      kind: "field",
      key: Symbol(),
      placement: "own",
      descriptor: {},
      // store the original key so subsequent decorators have access to it.
      originalKey: element.key,
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer() {
        if (typeof element.initializer === "function") {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};
var legacyProperty = (options, proto, name) => {
  proto.constructor.createProperty(name, options);
};
function property(options) {
  return (protoOrDescriptor, name) => name !== void 0 ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
}

// node_modules/@lit/reactive-element/development/decorators/state.js
function state(options) {
  return property({
    ...options,
    state: true
  });
}

// node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js
var _a4;
var NODE_MODE4 = false;
var global4 = NODE_MODE4 ? globalThis : window;
var slotAssignedElements = ((_a4 = global4.HTMLSlotElement) === null || _a4 === void 0 ? void 0 : _a4.prototype.assignedElements) != null ? (slot, opts) => slot.assignedElements(opts) : (slot, opts) => slot.assignedNodes(opts).filter((node) => node.nodeType === Node.ELEMENT_NODE);

// node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c) => (...values) => ({
  // This property needs to remain unminified.
  ["_$litDirective$"]: c,
  values
});
var Directive = class {
  constructor(_partInfo) {
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
};

// node_modules/lit-html/development/directives/class-map.js
var ClassMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a5;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "class" || ((_a5 = partInfo.strings) === null || _a5 === void 0 ? void 0 : _a5.length) > 2) {
      throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
  }
  render(classInfo) {
    return " " + Object.keys(classInfo).filter((key) => classInfo[key]).join(" ") + " ";
  }
  update(part, [classInfo]) {
    var _a5, _b4;
    if (this._previousClasses === void 0) {
      this._previousClasses = /* @__PURE__ */ new Set();
      if (part.strings !== void 0) {
        this._staticClasses = new Set(part.strings.join(" ").split(/\s/).filter((s) => s !== ""));
      }
      for (const name in classInfo) {
        if (classInfo[name] && !((_a5 = this._staticClasses) === null || _a5 === void 0 ? void 0 : _a5.has(name))) {
          this._previousClasses.add(name);
        }
      }
      return this.render(classInfo);
    }
    const classList = part.element.classList;
    this._previousClasses.forEach((name) => {
      if (!(name in classInfo)) {
        classList.remove(name);
        this._previousClasses.delete(name);
      }
    });
    for (const name in classInfo) {
      const value = !!classInfo[name];
      if (value !== this._previousClasses.has(name) && !((_b4 = this._staticClasses) === null || _b4 === void 0 ? void 0 : _b4.has(name))) {
        if (value) {
          classList.add(name);
          this._previousClasses.add(name);
        } else {
          classList.remove(name);
          this._previousClasses.delete(name);
        }
      }
    }
    return noChange;
  }
};
var classMap = directive(ClassMapDirective);

// node_modules/@motionone/utils/dist/array.es.js
function addUniqueItem(array, item) {
  array.indexOf(item) === -1 && array.push(item);
}

// node_modules/@motionone/utils/dist/clamp.es.js
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// node_modules/@motionone/utils/dist/defaults.es.js
var defaults = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};

// node_modules/@motionone/utils/dist/is-number.es.js
var isNumber = (value) => typeof value === "number";

// node_modules/@motionone/utils/dist/is-easing-list.es.js
var isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);

// node_modules/@motionone/utils/dist/wrap.es.js
var wrap2 = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/@motionone/utils/dist/easing.es.js
function getEasingForSegment(easing, i) {
  return isEasingList(easing) ? easing[wrap2(0, easing.length, i)] : easing;
}

// node_modules/@motionone/utils/dist/mix.es.js
var mix = (min, max, progress2) => -progress2 * min + progress2 * max + min;

// node_modules/@motionone/utils/dist/noop.es.js
var noop = () => {
};
var noopReturn = (v) => v;

// node_modules/@motionone/utils/dist/progress.es.js
var progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

// node_modules/@motionone/utils/dist/offset.es.js
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}
function defaultOffset(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}

// node_modules/@motionone/utils/dist/interpolate.es.js
function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
  const length = output.length;
  const remainder = length - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return (t) => {
    let i = 0;
    for (; i < length - 2; i++) {
      if (t < input[i + 1])
        break;
    }
    let progressInRange = clamp(0, 1, progress(input[i], input[i + 1], t));
    const segmentEasing = getEasingForSegment(easing, i);
    progressInRange = segmentEasing(progressInRange);
    return mix(output[i], output[i + 1], progressInRange);
  };
}

// node_modules/@motionone/utils/dist/is-cubic-bezier.es.js
var isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);

// node_modules/@motionone/utils/dist/is-easing-generator.es.js
var isEasingGenerator = (easing) => typeof easing === "object" && Boolean(easing.createAnimation);

// node_modules/@motionone/utils/dist/is-function.es.js
var isFunction = (value) => typeof value === "function";

// node_modules/@motionone/utils/dist/is-string.es.js
var isString = (value) => typeof value === "string";

// node_modules/@motionone/utils/dist/time.es.js
var time = {
  ms: (seconds) => seconds * 1e3,
  s: (milliseconds) => milliseconds / 1e3
};

// node_modules/@motionone/utils/dist/velocity.es.js
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/@motionone/easing/dist/cubic-bezier.es.js
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noopReturn;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/@motionone/easing/dist/steps.es.js
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};

// node_modules/@motionone/animation/dist/utils/easing.es.js
var namedEasings = {
  ease: cubicBezier(0.25, 0.1, 0.25, 1),
  "ease-in": cubicBezier(0.42, 0, 1, 1),
  "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
  "ease-out": cubicBezier(0, 0, 0.58, 1)
};
var functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
  if (isFunction(definition))
    return definition;
  if (isCubicBezier(definition))
    return cubicBezier(...definition);
  const namedEasing = namedEasings[definition];
  if (namedEasing)
    return namedEasing;
  if (definition.startsWith("steps")) {
    const args = functionArgsRegex.exec(definition);
    if (args) {
      const argsArray = args[1].split(",");
      return steps(parseFloat(argsArray[0]), argsArray[1].trim());
    }
  }
  return noopReturn;
}

// node_modules/@motionone/animation/dist/Animation.es.js
var Animation = class {
  constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal", autoplay = true } = {}) {
    this.startTime = null;
    this.rate = 1;
    this.t = 0;
    this.cancelTimestamp = null;
    this.easing = noopReturn;
    this.duration = 0;
    this.totalDuration = 0;
    this.repeat = 0;
    this.playState = "idle";
    this.finished = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    easing = easing || defaults.easing;
    if (isEasingGenerator(easing)) {
      const custom = easing.createAnimation(keyframes);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      initialDuration = custom.duration || initialDuration;
    }
    this.repeat = repeat;
    this.easing = isEasingList(easing) ? noopReturn : getEasingFunction(easing);
    this.updateDuration(initialDuration);
    const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(getEasingFunction) : noopReturn);
    this.tick = (timestamp) => {
      var _a5;
      delay = delay;
      let t = 0;
      if (this.pauseTime !== void 0) {
        t = this.pauseTime;
      } else {
        t = (timestamp - this.startTime) * this.rate;
      }
      this.t = t;
      t /= 1e3;
      t = Math.max(t - delay, 0);
      if (this.playState === "finished" && this.pauseTime === void 0) {
        t = this.totalDuration;
      }
      const progress2 = t / this.duration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      const iterationIsOdd = currentIteration % 2;
      if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
        iterationProgress = 1 - iterationProgress;
      }
      const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
      const latest = interpolate$1(this.easing(p));
      output(latest);
      const isAnimationFinished = this.pauseTime === void 0 && (this.playState === "finished" || t >= this.totalDuration + endDelay);
      if (isAnimationFinished) {
        this.playState = "finished";
        (_a5 = this.resolve) === null || _a5 === void 0 ? void 0 : _a5.call(this, latest);
      } else if (this.playState !== "idle") {
        this.frameRequestId = requestAnimationFrame(this.tick);
      }
    };
    if (autoplay)
      this.play();
  }
  play() {
    const now = performance.now();
    this.playState = "running";
    if (this.pauseTime !== void 0) {
      this.startTime = now - this.pauseTime;
    } else if (!this.startTime) {
      this.startTime = now;
    }
    this.cancelTimestamp = this.startTime;
    this.pauseTime = void 0;
    this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused";
    this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished";
    this.tick(0);
  }
  stop() {
    var _a5;
    this.playState = "idle";
    if (this.frameRequestId !== void 0) {
      cancelAnimationFrame(this.frameRequestId);
    }
    (_a5 = this.reject) === null || _a5 === void 0 ? void 0 : _a5.call(this, false);
  }
  cancel() {
    this.stop();
    this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(duration) {
    this.duration = duration;
    this.totalDuration = duration * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    if (this.pauseTime !== void 0 || this.rate === 0) {
      this.pauseTime = t;
    } else {
      this.startTime = performance.now() - t / this.rate;
    }
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(rate) {
    this.rate = rate;
  }
};

// node_modules/hey-listen/dist/hey-listen.es.js
var warning = function() {
};
var invariant = function() {
};
if (true) {
  warning = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/@motionone/types/dist/MotionValue.es.js
var MotionValue = class {
  setAnimation(animation) {
    this.animation = animation;
    animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};

// node_modules/@motionone/dom/dist/animate/data.es.js
var data = /* @__PURE__ */ new WeakMap();
function getAnimationData(element) {
  if (!data.has(element)) {
    data.set(element, {
      transforms: [],
      values: /* @__PURE__ */ new Map()
    });
  }
  return data.get(element);
}
function getMotionValue(motionValues, name) {
  if (!motionValues.has(name)) {
    motionValues.set(name, new MotionValue());
  }
  return motionValues.get(name);
}

// node_modules/@motionone/dom/dist/animate/utils/transforms.es.js
var axes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
var rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (v) => v + "deg"
};
var baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (v) => v + "px"
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: noopReturn
  },
  skew: rotation
};
var transformDefinitions = /* @__PURE__ */ new Map();
var asTransformCssVar = (name) => `--motion-${name}`;
var transforms = ["x", "y", "z"];
order.forEach((name) => {
  axes.forEach((axis) => {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
var compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
var transformLookup = new Set(transforms);
var isTransform = (name) => transformLookup.has(name);
var addTransformToElement = (element, name) => {
  if (transformAlias[name])
    name = transformAlias[name];
  const { transforms: transforms2 } = getAnimationData(element);
  addUniqueItem(transforms2, name);
  element.style.transform = buildTransformTemplate(transforms2);
};
var buildTransformTemplate = (transforms2) => transforms2.sort(compareTransformOrder).reduce(transformListToString, "").trim();
var transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;

// node_modules/@motionone/dom/dist/animate/utils/css-var.es.js
var isCssVar = (name) => name.startsWith("--");
var registeredProperties = /* @__PURE__ */ new Set();
function registerCssVariable(name) {
  if (registeredProperties.has(name))
    return;
  registeredProperties.add(name);
  try {
    const { syntax, initialValue } = transformDefinitions.has(name) ? transformDefinitions.get(name) : {};
    CSS.registerProperty({
      name,
      inherits: false,
      syntax,
      initialValue
    });
  } catch (e) {
  }
}

// node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js
var testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
var featureTests = {
  cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({ opacity: [1] });
    } catch (e) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 1e-3 }).finished),
  linearEasing: () => {
    try {
      testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return false;
    }
    return true;
  }
};
var results = {};
var supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === void 0)
      results[key] = featureTests[key]();
    return results[key];
  };
}

// node_modules/@motionone/dom/dist/animate/utils/easing.es.js
var resolution = 0.015;
var generateLinearEasingPoints = (easing, duration) => {
  let points = "";
  const numPoints = Math.round(duration / resolution);
  for (let i = 0; i < numPoints; i++) {
    points += easing(progress(0, numPoints - 1, i)) + ", ";
  }
  return points.substring(0, points.length - 2);
};
var convertEasing = (easing, duration) => {
  if (isFunction(easing)) {
    return supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : defaults.easing;
  } else {
    return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
  }
};
var cubicBezierAsString = ([a, b, c, d2]) => `cubic-bezier(${a}, ${b}, ${c}, ${d2})`;

// node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js
function hydrateKeyframes(keyframes, readInitialValue) {
  for (let i = 0; i < keyframes.length; i++) {
    if (keyframes[i] === null) {
      keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
    }
  }
  return keyframes;
}
var keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];

// node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js
function getStyleName(key) {
  if (transformAlias[key])
    key = transformAlias[key];
  return isTransform(key) ? asTransformCssVar(key) : key;
}

// node_modules/@motionone/dom/dist/animate/style.es.js
var style = {
  get: (element, name) => {
    name = getStyleName(name);
    let value = isCssVar(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
    if (!value && value !== 0) {
      const definition = transformDefinitions.get(name);
      if (definition)
        value = definition.initialValue;
    }
    return value;
  },
  set: (element, name, value) => {
    name = getStyleName(name);
    if (isCssVar(name)) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  }
};

// node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js
function stopAnimation(animation, needsCommit = true) {
  if (!animation || animation.playState === "finished")
    return;
  try {
    if (animation.stop) {
      animation.stop();
    } else {
      needsCommit && animation.commitStyles();
      animation.cancel();
    }
  } catch (e) {
  }
}

// node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js
function getUnitConverter(keyframes, definition) {
  var _a5;
  let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
  const finalKeyframe = keyframes[keyframes.length - 1];
  if (isString(finalKeyframe)) {
    const unit = ((_a5 = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a5 === void 0 ? void 0 : _a5[2]) || "";
    if (unit)
      toUnit = (value) => value + unit;
  }
  return toUnit;
}

// node_modules/@motionone/dom/dist/animate/animate-style.es.js
function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
  const record = getDevToolsRecord();
  const isRecording = options.record !== false && record;
  let animation;
  let { duration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false, autoplay = true } = options;
  const data2 = getAnimationData(element);
  const valueIsTransform = isTransform(key);
  let canAnimateNatively = supports.waapi();
  valueIsTransform && addTransformToElement(element, key);
  const name = getStyleName(key);
  const motionValue = getMotionValue(data2.values, name);
  const definition = transformDefinitions.get(name);
  stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) && options.record !== false);
  return () => {
    const readInitialValue = () => {
      var _a5, _b4;
      return (_b4 = (_a5 = style.get(element, name)) !== null && _a5 !== void 0 ? _a5 : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b4 !== void 0 ? _b4 : 0;
    };
    let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
    const toUnit = getUnitConverter(keyframes, definition);
    if (isEasingGenerator(easing)) {
      const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      duration = custom.duration || duration;
    }
    if (isCssVar(name)) {
      if (supports.cssRegisterProperty()) {
        registerCssVariable(name);
      } else {
        canAnimateNatively = false;
      }
    }
    if (valueIsTransform && !supports.linearEasing() && (isFunction(easing) || isEasingList(easing) && easing.some(isFunction))) {
      canAnimateNatively = false;
    }
    if (canAnimateNatively) {
      if (definition) {
        keyframes = keyframes.map((value) => isNumber(value) ? definition.toDefaultUnit(value) : value);
      }
      if (keyframes.length === 1 && (!supports.partialKeyframes() || isRecording)) {
        keyframes.unshift(readInitialValue());
      }
      const animationOptions = {
        delay: time.ms(delay),
        duration: time.ms(duration),
        endDelay: time.ms(endDelay),
        easing: !isEasingList(easing) ? convertEasing(easing, duration) : void 0,
        direction,
        iterations: repeat + 1,
        fill: "both"
      };
      animation = element.animate({
        [name]: keyframes,
        offset,
        easing: isEasingList(easing) ? easing.map((thisEasing) => convertEasing(thisEasing, duration)) : void 0
      }, animationOptions);
      if (!animation.finished) {
        animation.finished = new Promise((resolve, reject) => {
          animation.onfinish = resolve;
          animation.oncancel = reject;
        });
      }
      const target = keyframes[keyframes.length - 1];
      animation.finished.then(() => {
        if (persist)
          return;
        style.set(element, name, target);
        animation.cancel();
      }).catch(noop);
      if (!allowWebkitAcceleration)
        animation.playbackRate = 1.000001;
    } else if (AnimationPolyfill && valueIsTransform) {
      keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
      if (keyframes.length === 1) {
        keyframes.unshift(parseFloat(readInitialValue()));
      }
      animation = new AnimationPolyfill((latest) => {
        style.set(element, name, toUnit ? toUnit(latest) : latest);
      }, keyframes, Object.assign(Object.assign({}, options), {
        duration,
        easing
      }));
    } else {
      const target = keyframes[keyframes.length - 1];
      style.set(element, name, definition && isNumber(target) ? definition.toDefaultUnit(target) : target);
    }
    if (isRecording) {
      record(element, key, keyframes, {
        duration,
        delay,
        easing,
        repeat,
        offset
      }, "motion-one");
    }
    motionValue.setAnimation(animation);
    if (animation && !autoplay)
      animation.pause();
    return animation;
  };
}

// node_modules/@motionone/dom/dist/animate/utils/options.es.js
var getOptions = (options, key) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options)
);

// node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
function resolveElements(elements, selectorCache) {
  var _a5;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a5 = selectorCache[elements]) !== null && _a5 !== void 0 ? _a5 : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// node_modules/@motionone/dom/dist/animate/utils/controls.es.js
var createAnimation = (factory) => factory();
var withControls = (animationFactory, options, duration = defaults.duration) => {
  return new Proxy({
    animations: animationFactory.map(createAnimation).filter(Boolean),
    duration,
    options
  }, controls);
};
var getActiveAnimation = (state2) => state2.animations[0];
var controls = {
  get: (target, key) => {
    const activeAnimation = getActiveAnimation(target);
    switch (key) {
      case "duration":
        return target.duration;
      case "currentTime":
        return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
      case "playbackRate":
      case "playState":
        return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
      case "finished":
        if (!target.finished) {
          target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
        }
        return target.finished;
      case "stop":
        return () => {
          target.animations.forEach((animation) => stopAnimation(animation));
        };
      case "forEachNative":
        return (callback) => {
          target.animations.forEach((animation) => callback(animation, target));
        };
      default:
        return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? void 0 : () => target.animations.forEach((animation) => animation[key]());
    }
  },
  set: (target, key, value) => {
    switch (key) {
      case "currentTime":
        value = time.ms(value);
      case "playbackRate":
        for (let i = 0; i < target.animations.length; i++) {
          target.animations[i][key] = value;
        }
        return true;
    }
    return false;
  }
};
var selectFinished = (animation) => animation.finished;

// node_modules/@motionone/dom/dist/utils/stagger.es.js
function resolveOption(option, i, total) {
  return isFunction(option) ? option(i, total) : option;
}

// node_modules/@motionone/dom/dist/animate/create-animate.es.js
function createAnimate(AnimatePolyfill) {
  return function animate3(elements, keyframes, options = {}) {
    elements = resolveElements(elements);
    const numElements = elements.length;
    invariant(Boolean(numElements), "No valid element provided.");
    invariant(Boolean(keyframes), "No keyframes defined.");
    const animationFactories = [];
    for (let i = 0; i < numElements; i++) {
      const element = elements[i];
      for (const key in keyframes) {
        const valueOptions = getOptions(options, key);
        valueOptions.delay = resolveOption(valueOptions.delay, i, numElements);
        const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
        animationFactories.push(animation);
      }
    }
    return withControls(
      animationFactories,
      options,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      options.duration
    );
  };
}

// node_modules/@motionone/dom/dist/animate/index.es.js
var animate = createAnimate(Animation);

// node_modules/@motionone/dom/dist/timeline/index.es.js
init_tslib_es6();

// node_modules/@motionone/generators/dist/utils/velocity.es.js
var sampleT = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - sampleT, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/@motionone/generators/dist/spring/defaults.es.js
var defaults2 = {
  stiffness: 100,
  damping: 10,
  mass: 1
};

// node_modules/@motionone/generators/dist/spring/utils.es.js
var calcDampingRatio = (stiffness = defaults2.stiffness, damping = defaults2.damping, mass = defaults2.mass) => damping / (2 * Math.sqrt(stiffness * mass));

// node_modules/@motionone/generators/dist/utils/has-reached-target.es.js
function hasReachedTarget(origin, target, current) {
  return origin < target && current >= target || origin > target && current <= target;
}

// node_modules/@motionone/generators/dist/spring/index.es.js
var spring = ({ stiffness = defaults2.stiffness, damping = defaults2.damping, mass = defaults2.mass, from = 0, to = 1, velocity = 0, restSpeed, restDistance } = {}) => {
  velocity = velocity ? time.s(velocity) : 0;
  const state2 = {
    done: false,
    hasReachedTarget: false,
    current: from,
    target: to
  };
  const initialDelta = to - from;
  const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
  const dampingRatio = calcDampingRatio(stiffness, damping, mass);
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDistance || (restDistance = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
    resolveSpring = (t) => to - Math.exp(-dampingRatio * undampedAngularFreq * t) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
  } else {
    resolveSpring = (t) => {
      return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t);
    };
  }
  return (t) => {
    state2.current = resolveSpring(t);
    const currentVelocity = t === 0 ? velocity : calcGeneratorVelocity(resolveSpring, t, state2.current);
    const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - state2.current) <= restDistance;
    state2.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
    state2.hasReachedTarget = hasReachedTarget(from, to, state2.current);
    return state2;
  };
};

// node_modules/@motionone/generators/dist/glide/index.es.js
var glide = ({ from = 0, velocity = 0, power = 0.8, decay = 0.325, bounceDamping, bounceStiffness, changeTarget, min, max, restDistance = 0.5, restSpeed }) => {
  decay = time.ms(decay);
  const state2 = {
    hasReachedTarget: false,
    done: false,
    current: from,
    target: from
  };
  const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = (v) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = changeTarget === void 0 ? ideal : changeTarget(ideal);
  state2.target = target;
  if (target !== ideal)
    amplitude = target - from;
  const calcDelta = (t) => -amplitude * Math.exp(-t / decay);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state2.done = Math.abs(delta) <= restDistance;
    state2.current = state2.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state2.current))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      from: state2.current,
      to: nearestBoundary(state2.current),
      velocity: calcGeneratorVelocity(calcLatest, t, state2.current),
      // TODO: This should be passing * 1000
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDistance,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return (t) => {
    let hasUpdatedFrame = false;
    if (!spring$1 && timeReachedBoundary === void 0) {
      hasUpdatedFrame = true;
      applyFriction(t);
      checkCatchBoundary(t);
    }
    if (timeReachedBoundary !== void 0 && t > timeReachedBoundary) {
      state2.hasReachedTarget = true;
      return spring$1(t - timeReachedBoundary);
    } else {
      state2.hasReachedTarget = false;
      !hasUpdatedFrame && applyFriction(t);
      return state2;
    }
  };
};

// node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js
var timeStep = 10;
var maxDuration = 1e4;
function pregenerateKeyframes(generator, toUnit = noopReturn) {
  let overshootDuration = void 0;
  let timestamp = timeStep;
  let state2 = generator(0);
  const keyframes = [toUnit(state2.current)];
  while (!state2.done && timestamp < maxDuration) {
    state2 = generator(timestamp);
    keyframes.push(toUnit(state2.done ? state2.target : state2.current));
    if (overshootDuration === void 0 && state2.hasReachedTarget) {
      overshootDuration = timestamp;
    }
    timestamp += timeStep;
  }
  const duration = timestamp - timeStep;
  if (keyframes.length === 1)
    keyframes.push(state2.current);
  return {
    keyframes,
    duration: duration / 1e3,
    overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1e3
  };
}

// node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js
function canGenerate(value) {
  return isNumber(value) && !isNaN(value);
}
function getAsNumber(value) {
  return isString(value) ? parseFloat(value) : value;
}
function createGeneratorEasing(createGenerator) {
  const keyframesCache = /* @__PURE__ */ new WeakMap();
  return (options = {}) => {
    const generatorCache = /* @__PURE__ */ new Map();
    const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false) => {
      const key = `${from}-${to}-${velocity}-${isScale}`;
      if (!generatorCache.has(key)) {
        generatorCache.set(key, createGenerator(Object.assign({
          from,
          to,
          velocity
        }, options)));
      }
      return generatorCache.get(key);
    };
    const getKeyframes = (generator, toUnit) => {
      if (!keyframesCache.has(generator)) {
        keyframesCache.set(generator, pregenerateKeyframes(generator, toUnit));
      }
      return keyframesCache.get(generator);
    };
    return {
      createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue) => {
        let settings;
        let origin;
        let target;
        let velocity = 0;
        let toUnit = noopReturn;
        const numKeyframes = keyframes.length;
        if (shouldGenerate) {
          toUnit = getUnitConverter(keyframes, name ? transformDefinitions.get(getStyleName(name)) : void 0);
          const targetDefinition = keyframes[numKeyframes - 1];
          target = getAsNumber(targetDefinition);
          if (numKeyframes > 1 && keyframes[0] !== null) {
            origin = getAsNumber(keyframes[0]);
          } else {
            const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
            if (prevGenerator) {
              const { animation, generatorStartTime } = motionValue;
              const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
              const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
              const prevGeneratorCurrent = prevGenerator(currentTime).current;
              origin = prevGeneratorCurrent;
              velocity = calcGeneratorVelocity((t) => prevGenerator(t).current, currentTime, prevGeneratorCurrent);
            } else if (getOrigin) {
              origin = getAsNumber(getOrigin());
            }
          }
        }
        if (canGenerate(origin) && canGenerate(target)) {
          const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
          settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), { easing: "linear" });
          if (motionValue) {
            motionValue.generator = generator;
            motionValue.generatorStartTime = performance.now();
          }
        }
        if (!settings) {
          const keyframesMetadata = getKeyframes(getGenerator(0, 100));
          settings = {
            easing: "ease",
            duration: keyframesMetadata.overshootDuration
          };
        }
        return settings;
      }
    };
  };
}

// node_modules/@motionone/dom/dist/easing/spring/index.es.js
var spring2 = createGeneratorEasing(spring);

// node_modules/@motionone/dom/dist/easing/glide/index.es.js
var glide2 = createGeneratorEasing(glide);

// node_modules/@motionone/dom/dist/gestures/in-view.es.js
var thresholds = {
  any: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "any" } = {}) {
  if (typeof IntersectionObserver === "undefined") {
    return () => {
    };
  }
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (isFunction(newOnEnd)) {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}

// node_modules/@motionone/dom/dist/gestures/scroll/index.es.js
init_tslib_es6();

// node_modules/@motionone/dom/dist/state/index.es.js
init_tslib_es6();

// node_modules/@motionone/dom/dist/state/gestures/in-view.es.js
init_tslib_es6();

// node_modules/@motionone/dom/dist/state/utils/events.es.js
function dispatchPointerEvent(element, name, event) {
  element.dispatchEvent(new CustomEvent(name, { detail: { originalEvent: event } }));
}
function dispatchViewEvent(element, name, entry) {
  element.dispatchEvent(new CustomEvent(name, { detail: { originalEntry: entry } }));
}

// node_modules/@motionone/dom/dist/state/gestures/in-view.es.js
var inView2 = {
  isActive: (options) => Boolean(options.inView),
  subscribe: (element, { enable, disable }, { inViewOptions = {} }) => {
    const { once } = inViewOptions, viewOptions = __rest(inViewOptions, ["once"]);
    return inView(element, (enterEntry) => {
      enable();
      dispatchViewEvent(element, "viewenter", enterEntry);
      if (!once) {
        return (leaveEntry) => {
          disable();
          dispatchViewEvent(element, "viewleave", leaveEntry);
        };
      }
    }, viewOptions);
  }
};

// node_modules/@motionone/dom/dist/state/gestures/hover.es.js
var mouseEvent = (element, name, action) => (event) => {
  if (event.pointerType && event.pointerType !== "mouse")
    return;
  action();
  dispatchPointerEvent(element, name, event);
};
var hover = {
  isActive: (options) => Boolean(options.hover),
  subscribe: (element, { enable, disable }) => {
    const onEnter = mouseEvent(element, "hoverstart", enable);
    const onLeave = mouseEvent(element, "hoverend", disable);
    element.addEventListener("pointerenter", onEnter);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      element.removeEventListener("pointerenter", onEnter);
      element.removeEventListener("pointerleave", onLeave);
    };
  }
};

// node_modules/@motionone/dom/dist/state/gestures/press.es.js
var press = {
  isActive: (options) => Boolean(options.press),
  subscribe: (element, { enable, disable }) => {
    const onPointerUp = (event) => {
      disable();
      dispatchPointerEvent(element, "pressend", event);
      window.removeEventListener("pointerup", onPointerUp);
    };
    const onPointerDown = (event) => {
      enable();
      dispatchPointerEvent(element, "pressstart", event);
      window.addEventListener("pointerup", onPointerUp);
    };
    element.addEventListener("pointerdown", onPointerDown);
    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }
};

// node_modules/@motionone/dom/dist/state/index.es.js
var gestures = { inView: inView2, hover, press };
var stateTypes = ["initial", "animate", ...Object.keys(gestures), "exit"];

// node_modules/motion/dist/animate.es.js
function animateProgress(target, options = {}) {
  return withControls([
    () => {
      const animation = new Animation(target, [0, 1], options);
      animation.finished.catch(() => {
      });
      return animation;
    }
  ], options, options.duration);
}
function animate2(target, keyframesOrOptions, options) {
  const factory = isFunction(target) ? animateProgress : animate;
  return factory(target, keyframesOrOptions, options);
}

// node_modules/lit-html/development/directives/if-defined.js
var ifDefined = (value) => value !== null && value !== void 0 ? value : nothing;

export {
  css,
  html,
  svg,
  LitElement,
  customElement,
  property,
  state,
  classMap,
  animate2 as animate,
  ifDefined
};
/*! Bundled license information:

@lit/reactive-element/development/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/development/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/development/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-SIHVKAHP.js.map
