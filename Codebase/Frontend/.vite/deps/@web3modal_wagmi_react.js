import {
  Hash,
  HashMD,
  abytes as abytes2,
  aexists,
  ahash,
  anumber,
  aoutput,
  byteSwap32,
  bytesToHex as bytesToHex2,
  checkOpts,
  concatBytes as concatBytes2,
  createView,
  hexToBytes as hexToBytes2,
  isLE,
  randomBytes,
  rotl,
  sha256,
  toBytes as toBytes2,
  u32,
  utf8ToBytes as utf8ToBytes2,
  wrapConstructor,
  wrapXOFConstructorWithOpts
} from "./chunk-JFPLZTL4.js";
import {
  mainnet
} from "./chunk-BOLLABVS.js";
import {
  ConstantsUtil as ConstantsUtil2,
  HelpersUtil,
  PresetsUtil,
  Web3ModalScaffold,
  getCaipDefaultChain,
  getEmailCaipNetworks,
  getWalletConnectCaipNetworks,
  y
} from "./chunk-HGYZCZWG.js";
import "./chunk-LDYBCKWB.js";
import {
  W3mFrameConstants,
  W3mFrameHelpers,
  W3mFrameRpcConstants
} from "./chunk-FAF7M4S3.js";
import "./chunk-2PYUBLP3.js";
import "./chunk-UOQSISIW.js";
import {
  ConstantsUtil2 as ConstantsUtil,
  NetworkUtil
} from "./chunk-5RGLIFIF.js";
import "./chunk-6ZROGB7D.js";
import "./chunk-RZICIBFF.js";
import "./chunk-WMH57NS6.js";
import "./chunk-HRQFO3FK.js";
import {
  connect,
  disconnect,
  estimateGas,
  getAccount,
  getBalance,
  getEnsAddress,
  getEnsAvatar,
  getEnsName,
  prepareTransactionRequest,
  reconnect,
  sendTransaction,
  signMessage,
  switchChain,
  waitForTransactionReceipt,
  watchAccount,
  watchConnectors,
  writeContract
} from "./chunk-5KAHHIA3.js";
import {
  BaseError,
  BlockOverrides_exports,
  Bytes_exports,
  Errors_exports,
  Hex_exports,
  IntegerOutOfRangeError,
  InvalidLengthError,
  Json_exports,
  Withdrawal_exports,
  aInRange,
  abool,
  abytes,
  bitGet,
  bitLen,
  bitMask,
  bytesToHex,
  bytesToNumberBE,
  bytesToNumberLE,
  concat,
  concat2,
  concatBytes,
  createHmacDrbg,
  ensureBytes,
  from,
  from2,
  fromArray,
  fromBoolean,
  fromBytes,
  fromHex,
  fromNumber,
  fromNumber2,
  fromRpc,
  fromString,
  fromString2,
  getUrl,
  hexToBytes,
  inRange,
  isBytes,
  memoized,
  notImplemented,
  numberToBytesBE,
  numberToBytesLE,
  numberToHexUnpadded,
  padLeft,
  padLeft2,
  padRight,
  parseUnits,
  prettyPrint,
  random,
  size,
  size2,
  slice,
  slice2,
  stringify,
  toBigInt,
  toBoolean,
  toBytes,
  toHex,
  toNumber,
  toNumber2,
  toRpc,
  toString,
  toString2,
  trimLeft,
  trimLeft2,
  utf8ToBytes,
  utils_exports,
  validate,
  validate2,
  validateObject
} from "./chunk-QRKWAH57.js";
import "./chunk-RD5623SA.js";
import "./chunk-A2QNBEI4.js";
import "./chunk-UIMCO67C.js";
import {
  formatAbi,
  formatAbiItem2 as formatAbiItem,
  formatAbiParameters,
  formatUnits,
  parseAbi,
  parseAbiItem,
  parseAbiParameters
} from "./chunk-K5GJ5XQN.js";
import {
  require_react
} from "./chunk-CRFN57AP.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-GIZG7J7H.js";

// node_modules/ox/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/ox/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/@web3modal/scaffold-react/dist/esm/index.js
var import_react = __toESM(require_react());
var modal = void 0;
function getWeb3Modal(web3modal) {
  if (web3modal) {
    modal = web3modal;
  }
}
function useWeb3ModalTheme() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');
  }
  function setThemeMode(themeMode2) {
    modal == null ? void 0 : modal.setThemeMode(themeMode2);
  }
  function setThemeVariables(themeVariables2) {
    modal == null ? void 0 : modal.setThemeVariables(themeVariables2);
  }
  const [themeMode, setInternalThemeMode] = (0, import_react.useState)(modal.getThemeMode());
  const [themeVariables, setInternalThemeVariables] = (0, import_react.useState)(modal.getThemeVariables());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeTheme((state) => {
      setInternalThemeMode(state.themeMode);
      setInternalThemeVariables(state.themeVariables);
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return {
    themeMode,
    themeVariables,
    setThemeMode,
    setThemeVariables
  };
}
function useWeb3Modal() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');
  }
  async function open(options) {
    await (modal == null ? void 0 : modal.open(options));
  }
  async function close() {
    await (modal == null ? void 0 : modal.close());
  }
  return { open, close };
}
function useWalletInfo() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');
  }
  const walletInfo = (0, import_react.useSyncExternalStore)(modal.subscribeWalletInfo, modal.getWalletInfo, modal.getWalletInfo);
  return { walletInfo };
}
function useWeb3ModalState() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
  }
  const [state, setState] = (0, import_react.useState)(modal.getState());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeState((newState) => {
      setState({ ...newState });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return state;
}
function useWeb3ModalEvents() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
  }
  const [event, setEvents] = (0, import_react.useState)(modal.getEvent());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeEvents((newEvent) => {
      setEvents({ ...newEvent });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return event;
}

// node_modules/ox/_esm/core/Ens.js
var Ens_exports = {};
__export(Ens_exports, {
  labelhash: () => labelhash,
  namehash: () => namehash,
  normalize: () => normalize3
});

// node_modules/@adraffy/ens-normalize/dist/index.mjs
var COMPRESSED$1 = "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";
var FENCED = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]);
var NSM_MAX = 4;
function decode_arithmetic(bytes) {
  let pos = 0;
  function u16() {
    return bytes[pos++] << 8 | bytes[pos++];
  }
  let symbol_count = u16();
  let total = 1;
  let acc = [0, 1];
  for (let i = 1; i < symbol_count; i++) {
    acc.push(total += u16());
  }
  let skip = u16();
  let pos_payload = pos;
  pos += skip;
  let read_width = 0;
  let read_buffer = 0;
  function read_bit() {
    if (read_width == 0) {
      read_buffer = read_buffer << 8 | bytes[pos++];
      read_width = 8;
    }
    return read_buffer >> --read_width & 1;
  }
  const N = 31;
  const FULL = 2 ** N;
  const HALF = FULL >>> 1;
  const QRTR = HALF >> 1;
  const MASK = FULL - 1;
  let register = 0;
  for (let i = 0; i < N; i++)
    register = register << 1 | read_bit();
  let symbols = [];
  let low = 0;
  let range = FULL;
  while (true) {
    let value = Math.floor(((register - low + 1) * total - 1) / range);
    let start = 0;
    let end = symbol_count;
    while (end - start > 1) {
      let mid = start + end >>> 1;
      if (value < acc[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    }
    if (start == 0)
      break;
    symbols.push(start);
    let a = low + Math.floor(range * acc[start] / total);
    let b = low + Math.floor(range * acc[start + 1] / total) - 1;
    while (((a ^ b) & HALF) == 0) {
      register = register << 1 & MASK | read_bit();
      a = a << 1 & MASK;
      b = b << 1 & MASK | 1;
    }
    while (a & ~b & QRTR) {
      register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
      a = a << 1 ^ HALF;
      b = (b ^ HALF) << 1 | HALF | 1;
    }
    low = a;
    range = 1 + b - a;
  }
  let offset = symbol_count - 4;
  return symbols.map((x) => {
    switch (x - offset) {
      case 3:
        return offset + 65792 + (bytes[pos_payload++] << 16 | bytes[pos_payload++] << 8 | bytes[pos_payload++]);
      case 2:
        return offset + 256 + (bytes[pos_payload++] << 8 | bytes[pos_payload++]);
      case 1:
        return offset + bytes[pos_payload++];
      default:
        return x - 1;
    }
  });
}
function read_payload(v) {
  let pos = 0;
  return () => v[pos++];
}
function read_compressed_payload(s) {
  return read_payload(decode_arithmetic(unsafe_atob(s)));
}
function unsafe_atob(s) {
  let lookup = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((c, i) => lookup[c.charCodeAt(0)] = i);
  let n = s.length;
  let ret = new Uint8Array(6 * n >> 3);
  for (let i = 0, pos = 0, width = 0, carry = 0; i < n; i++) {
    carry = carry << 6 | lookup[s.charCodeAt(i)];
    width += 6;
    if (width >= 8) {
      ret[pos++] = carry >> (width -= 8);
    }
  }
  return ret;
}
function signed(i) {
  return i & 1 ? ~i >> 1 : i >> 1;
}
function read_deltas(n, next) {
  let v = Array(n);
  for (let i = 0, x = 0; i < n; i++)
    v[i] = x += signed(next());
  return v;
}
function read_sorted(next, prev = 0) {
  let ret = [];
  while (true) {
    let x = next();
    let n = next();
    if (!n)
      break;
    prev += x;
    for (let i = 0; i < n; i++) {
      ret.push(prev + i);
    }
    prev += n + 1;
  }
  return ret;
}
function read_sorted_arrays(next) {
  return read_array_while(() => {
    let v = read_sorted(next);
    if (v.length)
      return v;
  });
}
function read_mapped(next) {
  let ret = [];
  while (true) {
    let w = next();
    if (w == 0)
      break;
    ret.push(read_linear_table(w, next));
  }
  while (true) {
    let w = next() - 1;
    if (w < 0)
      break;
    ret.push(read_replacement_table(w, next));
  }
  return ret.flat();
}
function read_array_while(next) {
  let v = [];
  while (true) {
    let x = next(v.length);
    if (!x)
      break;
    v.push(x);
  }
  return v;
}
function read_transposed(n, w, next) {
  let m = Array(n).fill().map(() => []);
  for (let i = 0; i < w; i++) {
    read_deltas(n, next).forEach((x, j) => m[j].push(x));
  }
  return m;
}
function read_linear_table(w, next) {
  let dx = 1 + next();
  let dy = next();
  let vN = read_array_while(next);
  let m = read_transposed(vN.length, 1 + w, next);
  return m.flatMap((v, i) => {
    let [x, ...ys] = v;
    return Array(vN[i]).fill().map((_, j) => {
      let j_dy = j * dy;
      return [x + j * dx, ys.map((y2) => y2 + j_dy)];
    });
  });
}
function read_replacement_table(w, next) {
  let n = 1 + next();
  let m = read_transposed(n, 1 + w, next);
  return m.map((v) => [v[0], v.slice(1)]);
}
function read_trie(next) {
  let ret = [];
  let sorted = read_sorted(next);
  expand(decode5([]), []);
  return ret;
  function decode5(Q) {
    let S = next();
    let B = read_array_while(() => {
      let cps = read_sorted(next).map((i) => sorted[i]);
      if (cps.length)
        return decode5(cps);
    });
    return { S, B, Q };
  }
  function expand({ S, B }, cps, saved) {
    if (S & 4 && saved === cps[cps.length - 1])
      return;
    if (S & 2)
      saved = cps[cps.length - 1];
    if (S & 1)
      ret.push(cps);
    for (let br of B) {
      for (let cp of br.Q) {
        expand(br, [...cps, cp], saved);
      }
    }
  }
}
function hex_cp(cp) {
  return cp.toString(16).toUpperCase().padStart(2, "0");
}
function quote_cp(cp) {
  return `{${hex_cp(cp)}}`;
}
function explode_cp(s) {
  let cps = [];
  for (let pos = 0, len = s.length; pos < len; ) {
    let cp = s.codePointAt(pos);
    pos += cp < 65536 ? 1 : 2;
    cps.push(cp);
  }
  return cps;
}
function str_from_cps(cps) {
  const chunk = 4096;
  let len = cps.length;
  if (len < chunk)
    return String.fromCodePoint(...cps);
  let buf = [];
  for (let i = 0; i < len; ) {
    buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
  }
  return buf.join("");
}
function compare_arrays(a, b) {
  let n = a.length;
  let c = n - b.length;
  for (let i = 0; c == 0 && i < n; i++)
    c = a[i] - b[i];
  return c;
}
var COMPRESSED = "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";
var S0 = 44032;
var L0 = 4352;
var V0 = 4449;
var T0 = 4519;
var L_COUNT = 19;
var V_COUNT = 21;
var T_COUNT = 28;
var N_COUNT = V_COUNT * T_COUNT;
var S_COUNT = L_COUNT * N_COUNT;
var S1 = S0 + S_COUNT;
var L1 = L0 + L_COUNT;
var V1 = V0 + V_COUNT;
var T1 = T0 + T_COUNT;
function unpack_cc(packed) {
  return packed >> 24 & 255;
}
function unpack_cp(packed) {
  return packed & 16777215;
}
var SHIFTED_RANK;
var EXCLUSIONS;
var DECOMP;
var RECOMP;
function init$1() {
  let r = read_compressed_payload(COMPRESSED);
  SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i) => v.map((x) => [x, i + 1 << 24])));
  EXCLUSIONS = new Set(read_sorted(r));
  DECOMP = /* @__PURE__ */ new Map();
  RECOMP = /* @__PURE__ */ new Map();
  for (let [cp, cps] of read_mapped(r)) {
    if (!EXCLUSIONS.has(cp) && cps.length == 2) {
      let [a, b] = cps;
      let bucket = RECOMP.get(a);
      if (!bucket) {
        bucket = /* @__PURE__ */ new Map();
        RECOMP.set(a, bucket);
      }
      bucket.set(b, cp);
    }
    DECOMP.set(cp, cps.reverse());
  }
}
function is_hangul(cp) {
  return cp >= S0 && cp < S1;
}
function compose_pair(a, b) {
  if (a >= L0 && a < L1 && b >= V0 && b < V1) {
    return S0 + (a - L0) * N_COUNT + (b - V0) * T_COUNT;
  } else if (is_hangul(a) && b > T0 && b < T1 && (a - S0) % T_COUNT == 0) {
    return a + (b - T0);
  } else {
    let recomp = RECOMP.get(a);
    if (recomp) {
      recomp = recomp.get(b);
      if (recomp) {
        return recomp;
      }
    }
    return -1;
  }
}
function decomposed(cps) {
  if (!SHIFTED_RANK)
    init$1();
  let ret = [];
  let buf = [];
  let check_order = false;
  function add2(cp) {
    let cc = SHIFTED_RANK.get(cp);
    if (cc) {
      check_order = true;
      cp |= cc;
    }
    ret.push(cp);
  }
  for (let cp of cps) {
    while (true) {
      if (cp < 128) {
        ret.push(cp);
      } else if (is_hangul(cp)) {
        let s_index = cp - S0;
        let l_index = s_index / N_COUNT | 0;
        let v_index = s_index % N_COUNT / T_COUNT | 0;
        let t_index = s_index % T_COUNT;
        add2(L0 + l_index);
        add2(V0 + v_index);
        if (t_index > 0)
          add2(T0 + t_index);
      } else {
        let mapped = DECOMP.get(cp);
        if (mapped) {
          buf.push(...mapped);
        } else {
          add2(cp);
        }
      }
      if (!buf.length)
        break;
      cp = buf.pop();
    }
  }
  if (check_order && ret.length > 1) {
    let prev_cc = unpack_cc(ret[0]);
    for (let i = 1; i < ret.length; i++) {
      let cc = unpack_cc(ret[i]);
      if (cc == 0 || prev_cc <= cc) {
        prev_cc = cc;
        continue;
      }
      let j = i - 1;
      while (true) {
        let tmp = ret[j + 1];
        ret[j + 1] = ret[j];
        ret[j] = tmp;
        if (!j)
          break;
        prev_cc = unpack_cc(ret[--j]);
        if (prev_cc <= cc)
          break;
      }
      prev_cc = unpack_cc(ret[i]);
    }
  }
  return ret;
}
function composed_from_decomposed(v) {
  let ret = [];
  let stack = [];
  let prev_cp = -1;
  let prev_cc = 0;
  for (let packed of v) {
    let cc = unpack_cc(packed);
    let cp = unpack_cp(packed);
    if (prev_cp == -1) {
      if (cc == 0) {
        prev_cp = cp;
      } else {
        ret.push(cp);
      }
    } else if (prev_cc > 0 && prev_cc >= cc) {
      if (cc == 0) {
        ret.push(prev_cp, ...stack);
        stack.length = 0;
        prev_cp = cp;
      } else {
        stack.push(cp);
      }
      prev_cc = cc;
    } else {
      let composed = compose_pair(prev_cp, cp);
      if (composed >= 0) {
        prev_cp = composed;
      } else if (prev_cc == 0 && cc == 0) {
        ret.push(prev_cp);
        prev_cp = cp;
      } else {
        stack.push(cp);
        prev_cc = cc;
      }
    }
  }
  if (prev_cp >= 0) {
    ret.push(prev_cp, ...stack);
  }
  return ret;
}
function nfd(cps) {
  return decomposed(cps).map(unpack_cp);
}
function nfc(cps) {
  return composed_from_decomposed(decomposed(cps));
}
var HYPHEN = 45;
var STOP_CH = ".";
var FE0F = 65039;
var UNIQUE_PH = 1;
var Array_from = (x) => Array.from(x);
function group_has_cp(g, cp) {
  return g.P.has(cp) || g.Q.has(cp);
}
var Emoji = class extends Array {
  get is_emoji() {
    return true;
  }
  // free tagging system
};
var MAPPED;
var IGNORED;
var CM;
var NSM;
var ESCAPE;
var NFC_CHECK;
var GROUPS;
var WHOLE_VALID;
var WHOLE_MAP;
var VALID;
var EMOJI_LIST;
var EMOJI_ROOT;
function init() {
  if (MAPPED)
    return;
  let r = read_compressed_payload(COMPRESSED$1);
  const read_sorted_array = () => read_sorted(r);
  const read_sorted_set = () => new Set(read_sorted_array());
  const set_add_many = (set, v) => v.forEach((x) => set.add(x));
  MAPPED = new Map(read_mapped(r));
  IGNORED = read_sorted_set();
  CM = read_sorted_array();
  NSM = new Set(read_sorted_array().map((i) => CM[i]));
  CM = new Set(CM);
  ESCAPE = read_sorted_set();
  NFC_CHECK = read_sorted_set();
  let chunks = read_sorted_arrays(r);
  let unrestricted = r();
  const read_chunked = () => {
    let set = /* @__PURE__ */ new Set();
    read_sorted_array().forEach((i) => set_add_many(set, chunks[i]));
    set_add_many(set, read_sorted_array());
    return set;
  };
  GROUPS = read_array_while((i) => {
    let N = read_array_while(r).map((x) => x + 96);
    if (N.length) {
      let R = i >= unrestricted;
      N[0] -= 32;
      N = str_from_cps(N);
      if (R)
        N = `Restricted[${N}]`;
      let P = read_chunked();
      let Q = read_chunked();
      let M = !r();
      return { N, P, Q, M, R };
    }
  });
  WHOLE_VALID = read_sorted_set();
  WHOLE_MAP = /* @__PURE__ */ new Map();
  let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a, b) => a - b);
  wholes.forEach((cp, i) => {
    let d = r();
    let w = wholes[i] = d ? wholes[i - d] : { V: [], M: /* @__PURE__ */ new Map() };
    w.V.push(cp);
    if (!WHOLE_VALID.has(cp)) {
      WHOLE_MAP.set(cp, w);
    }
  });
  for (let { V, M } of new Set(WHOLE_MAP.values())) {
    let recs = [];
    for (let cp of V) {
      let gs = GROUPS.filter((g) => group_has_cp(g, cp));
      let rec = recs.find(({ G }) => gs.some((g) => G.has(g)));
      if (!rec) {
        rec = { G: /* @__PURE__ */ new Set(), V: [] };
        recs.push(rec);
      }
      rec.V.push(cp);
      set_add_many(rec.G, gs);
    }
    let union = recs.flatMap((x) => Array_from(x.G));
    for (let { G, V: V2 } of recs) {
      let complement = new Set(union.filter((g) => !G.has(g)));
      for (let cp of V2) {
        M.set(cp, complement);
      }
    }
  }
  VALID = /* @__PURE__ */ new Set();
  let multi = /* @__PURE__ */ new Set();
  const add_to_union = (cp) => VALID.has(cp) ? multi.add(cp) : VALID.add(cp);
  for (let g of GROUPS) {
    for (let cp of g.P)
      add_to_union(cp);
    for (let cp of g.Q)
      add_to_union(cp);
  }
  for (let cp of VALID) {
    if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
      WHOLE_MAP.set(cp, UNIQUE_PH);
    }
  }
  set_add_many(VALID, nfd(VALID));
  EMOJI_LIST = read_trie(r).map((v) => Emoji.from(v)).sort(compare_arrays);
  EMOJI_ROOT = /* @__PURE__ */ new Map();
  for (let cps of EMOJI_LIST) {
    let prev = [EMOJI_ROOT];
    for (let cp of cps) {
      let next = prev.map((node) => {
        let child = node.get(cp);
        if (!child) {
          child = /* @__PURE__ */ new Map();
          node.set(cp, child);
        }
        return child;
      });
      if (cp === FE0F) {
        prev.push(...next);
      } else {
        prev = next;
      }
    }
    for (let x of prev) {
      x.V = cps;
    }
  }
}
function quoted_cp(cp) {
  return (should_escape(cp) ? "" : `${bidi_qq(safe_str_from_cps([cp]))} `) + quote_cp(cp);
}
function bidi_qq(s) {
  return `"${s}"‎`;
}
function check_label_extension(cps) {
  if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
    throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`);
  }
}
function check_leading_underscore(cps) {
  const UNDERSCORE = 95;
  for (let i = cps.lastIndexOf(UNDERSCORE); i > 0; ) {
    if (cps[--i] !== UNDERSCORE) {
      throw new Error("underscore allowed only at start");
    }
  }
}
function check_fenced(cps) {
  let cp = cps[0];
  let prev = FENCED.get(cp);
  if (prev)
    throw error_placement(`leading ${prev}`);
  let n = cps.length;
  let last = -1;
  for (let i = 1; i < n; i++) {
    cp = cps[i];
    let match = FENCED.get(cp);
    if (match) {
      if (last == i)
        throw error_placement(`${prev} + ${match}`);
      last = i + 1;
      prev = match;
    }
  }
  if (last == n)
    throw error_placement(`trailing ${prev}`);
}
function safe_str_from_cps(cps, max = Infinity, quoter = quote_cp) {
  let buf = [];
  if (is_combining_mark(cps[0]))
    buf.push("◌");
  if (cps.length > max) {
    max >>= 1;
    cps = [...cps.slice(0, max), 8230, ...cps.slice(-max)];
  }
  let prev = 0;
  let n = cps.length;
  for (let i = 0; i < n; i++) {
    let cp = cps[i];
    if (should_escape(cp)) {
      buf.push(str_from_cps(cps.slice(prev, i)));
      buf.push(quoter(cp));
      prev = i + 1;
    }
  }
  buf.push(str_from_cps(cps.slice(prev, n)));
  return buf.join("");
}
function is_combining_mark(cp, only_nsm) {
  init();
  return only_nsm ? NSM.has(cp) : CM.has(cp);
}
function should_escape(cp) {
  init();
  return ESCAPE.has(cp);
}
function ens_normalize(name) {
  return flatten(split(name, nfc, filter_fe0f));
}
function split(name, nf, ef) {
  if (!name)
    return [];
  init();
  let offset = 0;
  return name.split(STOP_CH).map((label) => {
    let input = explode_cp(label);
    let info = {
      input,
      offset
      // codepoint, not substring!
    };
    offset += input.length + 1;
    try {
      let tokens = info.tokens = tokens_from_str(input, nf, ef);
      let token_count = tokens.length;
      let type6;
      if (!token_count) {
        throw new Error(`empty label`);
      }
      let norm = info.output = tokens.flat();
      check_leading_underscore(norm);
      let emoji = info.emoji = token_count > 1 || tokens[0].is_emoji;
      if (!emoji && norm.every((cp) => cp < 128)) {
        check_label_extension(norm);
        type6 = "ASCII";
      } else {
        let chars = tokens.flatMap((x) => x.is_emoji ? [] : x);
        if (!chars.length) {
          type6 = "Emoji";
        } else {
          if (CM.has(norm[0]))
            throw error_placement("leading combining mark");
          for (let i = 1; i < token_count; i++) {
            let cps = tokens[i];
            if (!cps.is_emoji && CM.has(cps[0])) {
              throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i - 1])} + ${safe_str_from_cps([cps[0]])}"`);
            }
          }
          check_fenced(norm);
          let unique = Array_from(new Set(chars));
          let [g] = determine_group(unique);
          check_group(g, chars);
          check_whole(g, unique);
          type6 = g.N;
        }
      }
      info.type = type6;
    } catch (err) {
      info.error = err;
    }
    return info;
  });
}
function check_whole(group, unique) {
  let maker;
  let shared = [];
  for (let cp of unique) {
    let whole = WHOLE_MAP.get(cp);
    if (whole === UNIQUE_PH)
      return;
    if (whole) {
      let set = whole.M.get(cp);
      maker = maker ? maker.filter((g) => set.has(g)) : Array_from(set);
      if (!maker.length)
        return;
    } else {
      shared.push(cp);
    }
  }
  if (maker) {
    for (let g of maker) {
      if (shared.every((cp) => group_has_cp(g, cp))) {
        throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
      }
    }
  }
}
function determine_group(unique) {
  let groups = GROUPS;
  for (let cp of unique) {
    let gs = groups.filter((g) => group_has_cp(g, cp));
    if (!gs.length) {
      if (!GROUPS.some((g) => group_has_cp(g, cp))) {
        throw error_disallowed(cp);
      } else {
        throw error_group_member(groups[0], cp);
      }
    }
    groups = gs;
    if (gs.length == 1)
      break;
  }
  return groups;
}
function flatten(split3) {
  return split3.map(({ input, error, output }) => {
    if (error) {
      let msg = error.message;
      throw new Error(split3.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input, 63))}: ${msg}`);
    }
    return str_from_cps(output);
  }).join(STOP_CH);
}
function error_disallowed(cp) {
  return new Error(`disallowed character: ${quoted_cp(cp)}`);
}
function error_group_member(g, cp) {
  let quoted = quoted_cp(cp);
  let gg = GROUPS.find((g2) => g2.P.has(cp));
  if (gg) {
    quoted = `${gg.N} ${quoted}`;
  }
  return new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
  return new Error(`illegal placement: ${where}`);
}
function check_group(g, cps) {
  for (let cp of cps) {
    if (!group_has_cp(g, cp)) {
      throw error_group_member(g, cp);
    }
  }
  if (g.M) {
    let decomposed2 = nfd(cps);
    for (let i = 1, e = decomposed2.length; i < e; i++) {
      if (NSM.has(decomposed2[i])) {
        let j = i + 1;
        for (let cp; j < e && NSM.has(cp = decomposed2[j]); j++) {
          for (let k = i; k < j; k++) {
            if (decomposed2[k] == cp) {
              throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
            }
          }
        }
        if (j - i > NSM_MAX) {
          throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed2.slice(i - 1, j)))} (${j - i}/${NSM_MAX})`);
        }
        i = j;
      }
    }
  }
}
function tokens_from_str(input, nf, ef) {
  let ret = [];
  let chars = [];
  input = input.slice().reverse();
  while (input.length) {
    let emoji = consume_emoji_reversed(input);
    if (emoji) {
      if (chars.length) {
        ret.push(nf(chars));
        chars = [];
      }
      ret.push(ef(emoji));
    } else {
      let cp = input.pop();
      if (VALID.has(cp)) {
        chars.push(cp);
      } else {
        let cps = MAPPED.get(cp);
        if (cps) {
          chars.push(...cps);
        } else if (!IGNORED.has(cp)) {
          throw error_disallowed(cp);
        }
      }
    }
  }
  if (chars.length) {
    ret.push(nf(chars));
  }
  return ret;
}
function filter_fe0f(cps) {
  return cps.filter((cp) => cp != FE0F);
}
function consume_emoji_reversed(cps, eaten) {
  let node = EMOJI_ROOT;
  let emoji;
  let pos = cps.length;
  while (pos) {
    node = node.get(cps[--pos]);
    if (!node)
      break;
    let { V } = node;
    if (V) {
      emoji = V;
      if (eaten)
        eaten.push(...cps.slice(pos).reverse());
      cps.length = pos;
    }
  }
  return emoji;
}

// node_modules/ox/_esm/core/Hash.js
var Hash_exports = {};
__export(Hash_exports, {
  keccak256: () => keccak256,
  ripemd160: () => ripemd1602,
  sha256: () => sha2562,
  validate: () => validate3
});

// node_modules/@noble/hashes/esm/ripemd160.js
var Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = new Uint8Array(new Array(16).fill(0).map((_, i) => i));
var Pi = Id.map((i) => (9 * i + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j of [idxL, idxR])
    j.push(j[i].map((k) => Rho[k]));
var shifts = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
var shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
var shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
var Kl = new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr = new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function f(group, x, y2, z2) {
  if (group === 0)
    return x ^ y2 ^ z2;
  else if (group === 1)
    return x & y2 | ~x & z2;
  else if (group === 2)
    return (x | ~y2) ^ z2;
  else if (group === 3)
    return x & z2 | y2 & ~z2;
  else
    return x ^ (y2 | ~z2);
}
var R_BUF = new Uint32Array(16);
var RIPEMD160 = class extends HashMD {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      R_BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + R_BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + f(rGroup, br, cr, dr) + R_BUF[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    R_BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = wrapConstructor(() => new RIPEMD160());

// node_modules/@noble/hashes/esm/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split2(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
var shrSH = (h, _l, s) => h >>> s;
var shrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
var rotr32H = (_h, l) => l;
var rotr32L = (h, _l) => h;
var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
var u64 = {
  fromBig,
  split: split2,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
var u64_default = u64;

// node_modules/@noble/hashes/esm/sha3.js
var SHA3_PI = [];
var SHA3_ROTL = [];
var _SHA3_IOTA = [];
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var _7n = BigInt(7);
var _256n = BigInt(256);
var _0x71n = BigInt(113);
for (let round = 0, R = _1n, x = 1, y2 = 0; round < 24; round++) {
  [x, y2] = [y2, (2 * x + 3 * y2) % 5];
  SHA3_PI.push(2 * (5 * y2 + x));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t = _0n;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n)
      t ^= _1n << (_1n << BigInt(j)) - _1n;
  }
  _SHA3_IOTA.push(t);
}
var [SHA3_IOTA_H, SHA3_IOTA_L] = split2(_SHA3_IOTA, true);
var rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
var rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y2 = 0; y2 < 50; y2 += 10) {
        s[x + y2] ^= Th;
        s[x + y2 + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y2 = 0; y2 < 50; y2 += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y2 + x];
      for (let x = 0; x < 10; x++)
        s[y2 + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var Keccak = class _Keccak extends Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    anumber(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    if (!isLE)
      byteSwap32(this.state32);
    keccakP(this.state32, this.rounds);
    if (!isLE)
      byteSwap32(this.state32);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    aexists(this);
    const { blockLen, state } = this;
    data = toBytes2(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    aexists(this, false);
    abytes2(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes) {
    anumber(bytes);
    return this.xofInto(new Uint8Array(bytes));
  }
  digestInto(out) {
    aoutput(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to3) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to3 || (to3 = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to3.state32.set(this.state32);
    to3.pos = this.pos;
    to3.posOut = this.posOut;
    to3.finished = this.finished;
    to3.rounds = rounds;
    to3.suffix = suffix;
    to3.outputLen = outputLen;
    to3.enableXOF = enableXOF;
    to3.destroyed = this.destroyed;
    return to3;
  }
};
var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
var sha3_224 = gen(6, 144, 224 / 8);
var sha3_256 = gen(6, 136, 256 / 8);
var sha3_384 = gen(6, 104, 384 / 8);
var sha3_512 = gen(6, 72, 512 / 8);
var keccak_224 = gen(1, 144, 224 / 8);
var keccak_256 = gen(1, 136, 256 / 8);
var keccak_384 = gen(1, 104, 384 / 8);
var keccak_512 = gen(1, 72, 512 / 8);
var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
var shake128 = genShake(31, 168, 128 / 8);
var shake256 = genShake(31, 136, 256 / 8);

// node_modules/ox/_esm/core/Hash.js
function keccak256(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = keccak_256(from(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}
function ripemd1602(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = ripemd160(from(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}
function sha2562(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = sha256(from(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}
function validate3(value) {
  return validate2(value) && size2(value) === 32;
}

// node_modules/ox/_esm/core/Abi.js
var Abi_exports = {};
__export(Abi_exports, {
  format: () => format,
  from: () => from3
});

// node_modules/ox/_esm/core/internal/abi.js
function isSignatures(value) {
  for (const item of value) {
    if (typeof item !== "string")
      return false;
  }
  return true;
}

// node_modules/ox/_esm/core/Abi.js
function format(abi) {
  return formatAbi(abi);
}
function from3(abi) {
  if (isSignatures(abi))
    return parseAbi(abi);
  return abi;
}

// node_modules/ox/_esm/core/AbiConstructor.js
var AbiConstructor_exports = {};
__export(AbiConstructor_exports, {
  decode: () => decode2,
  encode: () => encode3,
  format: () => format4,
  from: () => from8,
  fromAbi: () => fromAbi2
});

// node_modules/ox/_esm/core/AbiItem.js
var AbiItem_exports = {};
__export(AbiItem_exports, {
  AmbiguityError: () => AmbiguityError,
  InvalidSelectorSizeError: () => InvalidSelectorSizeError,
  NotFoundError: () => NotFoundError,
  format: () => format2,
  from: () => from6,
  fromAbi: () => fromAbi,
  getSelector: () => getSelector,
  getSignature: () => getSignature,
  getSignatureHash: () => getSignatureHash
});

// node_modules/ox/_esm/core/Address.js
var Address_exports = {};
__export(Address_exports, {
  InvalidAddressError: () => InvalidAddressError,
  InvalidChecksumError: () => InvalidChecksumError,
  InvalidInputError: () => InvalidInputError,
  assert: () => assert2,
  checksum: () => checksum2,
  from: () => from5,
  fromPublicKey: () => fromPublicKey,
  isEqual: () => isEqual,
  validate: () => validate5
});

// node_modules/ox/_esm/core/Caches.js
var Caches_exports = {};
__export(Caches_exports, {
  checksum: () => checksum,
  clear: () => clear
});

// node_modules/ox/_esm/core/internal/lru.js
var LruMap = class extends Map {
  constructor(size4) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size4;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
};

// node_modules/ox/_esm/core/Caches.js
var caches = {
  checksum: new LruMap(8192)
};
var checksum = caches.checksum;
function clear() {
  for (const cache of Object.values(caches))
    cache.clear();
}

// node_modules/ox/_esm/core/PublicKey.js
var PublicKey_exports = {};
__export(PublicKey_exports, {
  InvalidCompressedPrefixError: () => InvalidCompressedPrefixError,
  InvalidError: () => InvalidError,
  InvalidPrefixError: () => InvalidPrefixError,
  InvalidSerializedSizeError: () => InvalidSerializedSizeError,
  InvalidUncompressedPrefixError: () => InvalidUncompressedPrefixError,
  assert: () => assert,
  compress: () => compress,
  from: () => from4,
  fromBytes: () => fromBytes2,
  fromHex: () => fromHex2,
  toBytes: () => toBytes3,
  toHex: () => toHex2,
  validate: () => validate4
});
function assert(publicKey, options = {}) {
  const { compressed } = options;
  const { prefix, x, y: y2 } = publicKey;
  if (compressed === false || typeof x === "bigint" && typeof y2 === "bigint") {
    if (prefix !== 4)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidUncompressedPrefixError()
      });
    return;
  }
  if (compressed === true || typeof x === "bigint" && typeof y2 === "undefined") {
    if (prefix !== 3 && prefix !== 2)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidCompressedPrefixError()
      });
    return;
  }
  throw new InvalidError({ publicKey });
}
function compress(publicKey) {
  const { x, y: y2 } = publicKey;
  return {
    prefix: y2 % 2n === 0n ? 2 : 3,
    x
  };
}
function from4(value) {
  const publicKey = (() => {
    if (validate2(value))
      return fromHex2(value);
    if (validate(value))
      return fromBytes2(value);
    const { prefix, x, y: y2 } = value;
    if (typeof x === "bigint" && typeof y2 === "bigint")
      return { prefix: prefix ?? 4, x, y: y2 };
    return { prefix, x };
  })();
  assert(publicKey);
  return publicKey;
}
function fromBytes2(publicKey) {
  return fromHex2(fromBytes(publicKey));
}
function fromHex2(publicKey) {
  if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68)
    throw new InvalidSerializedSizeError({ publicKey });
  if (publicKey.length === 130) {
    const x2 = BigInt(slice2(publicKey, 0, 32));
    const y2 = BigInt(slice2(publicKey, 32, 64));
    return {
      prefix: 4,
      x: x2,
      y: y2
    };
  }
  if (publicKey.length === 132) {
    const prefix2 = Number(slice2(publicKey, 0, 1));
    const x2 = BigInt(slice2(publicKey, 1, 33));
    const y2 = BigInt(slice2(publicKey, 33, 65));
    return {
      prefix: prefix2,
      x: x2,
      y: y2
    };
  }
  const prefix = Number(slice2(publicKey, 0, 1));
  const x = BigInt(slice2(publicKey, 1, 33));
  return {
    prefix,
    x
  };
}
function toBytes3(publicKey, options = {}) {
  return fromHex(toHex2(publicKey, options));
}
function toHex2(publicKey, options = {}) {
  assert(publicKey);
  const { prefix, x, y: y2 } = publicKey;
  const { includePrefix = true } = options;
  const publicKey_ = concat2(
    includePrefix ? fromNumber2(prefix, { size: 1 }) : "0x",
    fromNumber2(x, { size: 32 }),
    // If the public key is not compressed, add the y coordinate.
    typeof y2 === "bigint" ? fromNumber2(y2, { size: 32 }) : "0x"
  );
  return publicKey_;
}
function validate4(publicKey, options = {}) {
  try {
    assert(publicKey, options);
    return true;
  } catch (error) {
    return false;
  }
}
var InvalidError = class extends BaseError {
  constructor({ publicKey }) {
    super(`Value \`${stringify(publicKey)}\` is not a valid public key.`, {
      metaMessages: [
        "Public key must contain:",
        "- an `x` and `prefix` value (compressed)",
        "- an `x`, `y`, and `prefix` value (uncompressed)"
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidError"
    });
  }
};
var InvalidPrefixError = class extends BaseError {
  constructor({ prefix, cause }) {
    super(`Prefix "${prefix}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidPrefixError"
    });
  }
};
var InvalidCompressedPrefixError = class extends BaseError {
  constructor() {
    super("Prefix must be 2 or 3 for compressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidCompressedPrefixError"
    });
  }
};
var InvalidUncompressedPrefixError = class extends BaseError {
  constructor() {
    super("Prefix must be 4 for uncompressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidUncompressedPrefixError"
    });
  }
};
var InvalidSerializedSizeError = class extends BaseError {
  constructor({ publicKey }) {
    super(`Value \`${publicKey}\` is an invalid public key size.`, {
      metaMessages: [
        "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
        `Received ${size2(from2(publicKey))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidSerializedSizeError"
    });
  }
};

// node_modules/ox/_esm/core/Address.js
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert2(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError({
      address: value,
      cause: new InvalidInputError()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum2(value) !== value)
      throw new InvalidAddressError({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
function checksum2(address) {
  if (checksum.has(address))
    return checksum.get(address);
  assert2(address, { strict: false });
  const hexAddress = address.substring(2).toLowerCase();
  const hash7 = keccak256(fromString(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash7[i >> 1] >> 4 >= 8 && characters[i]) {
      characters[i] = characters[i].toUpperCase();
    }
    if ((hash7[i >> 1] & 15) >= 8 && characters[i + 1]) {
      characters[i + 1] = characters[i + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum.set(address, result);
  return result;
}
function from5(address, options = {}) {
  const { checksum: checksumVal = false } = options;
  assert2(address);
  if (checksumVal)
    return checksum2(address);
  return address;
}
function fromPublicKey(publicKey, options = {}) {
  const address = keccak256(`0x${toHex2(publicKey).slice(4)}`).substring(26);
  return from5(`0x${address}`, options);
}
function isEqual(addressA, addressB) {
  assert2(addressA, { strict: false });
  assert2(addressB, { strict: false });
  return addressA.toLowerCase() === addressB.toLowerCase();
}
function validate5(address, options = {}) {
  const { strict = true } = options ?? {};
  try {
    assert2(address, { strict });
    return true;
  } catch {
    return false;
  }
}
var InvalidAddressError = class extends BaseError {
  constructor({ address, cause }) {
    super(`Address "${address}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
};
var InvalidInputError = class extends BaseError {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
};
var InvalidChecksumError = class extends BaseError {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
};

// node_modules/ox/_esm/core/internal/abiItem.js
function normalizeSignature(signature) {
  let active = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i = 0; i < signature.length; i++) {
    const char = signature[i];
    if (["(", ")", ","].includes(char))
      active = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", "error", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError("Unable to normalize signature.");
  return result;
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return validate5(arg, { strict: false });
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index2) => {
          return isArgOfType(Object.values(arg)[index2], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types.includes("address") && types.includes("bytes20"))
        return true;
      if (types.includes("address") && types.includes("string"))
        return validate5(args[parameterIndex], {
          strict: false
        });
      if (types.includes("address") && types.includes("bytes"))
        return validate5(args[parameterIndex], {
          strict: false
        });
      return false;
    })();
    if (ambiguous)
      return types;
  }
  return;
}

// node_modules/ox/_esm/core/AbiItem.js
function format2(abiItem) {
  return formatAbiItem(abiItem);
}
function from6(abiItem, options = {}) {
  const { prepare = true } = options;
  const item = (() => {
    if (Array.isArray(abiItem))
      return parseAbiItem(abiItem);
    if (typeof abiItem === "string")
      return parseAbiItem(abiItem);
    return abiItem;
  })();
  return {
    ...item,
    ...prepare ? { hash: getSignatureHash(item) } : {}
  };
}
function fromAbi(abi, name, options) {
  const { args = [], prepare = true } = options ?? {};
  const isSelector = validate2(name, { strict: false });
  const abiItems = abi.filter((abiItem2) => {
    if (isSelector) {
      if (abiItem2.type === "function" || abiItem2.type === "error")
        return getSelector(abiItem2) === slice2(name, 0, 4);
      if (abiItem2.type === "event")
        return getSignatureHash(abiItem2) === name;
      return false;
    }
    return "name" in abiItem2 && abiItem2.name === name;
  });
  if (abiItems.length === 0)
    throw new NotFoundError({ name });
  if (abiItems.length === 1)
    return {
      ...abiItems[0],
      ...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
    };
  let matchedAbiItem = void 0;
  for (const abiItem2 of abiItems) {
    if (!("inputs" in abiItem2))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem2.inputs || abiItem2.inputs.length === 0)
        return {
          ...abiItem2,
          ...prepare ? { hash: getSignatureHash(abiItem2) } : {}
        };
      continue;
    }
    if (!abiItem2.inputs)
      continue;
    if (abiItem2.inputs.length === 0)
      continue;
    if (abiItem2.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index2) => {
      const abiParameter = "inputs" in abiItem2 && abiItem2.inputs[index2];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem2.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AmbiguityError({
            abiItem: abiItem2,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem2;
    }
  }
  const abiItem = (() => {
    if (matchedAbiItem)
      return matchedAbiItem;
    const [abiItem2, ...overloads] = abiItems;
    return { ...abiItem2, overloads };
  })();
  if (!abiItem)
    throw new NotFoundError({ name });
  return {
    ...abiItem,
    ...prepare ? { hash: getSignatureHash(abiItem) } : {}
  };
}
function getSelector(abiItem) {
  return slice2(getSignatureHash(abiItem), 0, 4);
}
function getSignature(abiItem) {
  const signature = (() => {
    if (typeof abiItem === "string")
      return abiItem;
    return formatAbiItem(abiItem);
  })();
  return normalizeSignature(signature);
}
function getSignatureHash(abiItem) {
  if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash)
    return abiItem.hash;
  return keccak256(fromString2(getSignature(abiItem)));
}
var AmbiguityError = class extends BaseError {
  constructor(x, y2) {
    super("Found ambiguous types in overloaded ABI Items.", {
      metaMessages: [
        // TODO: abitype to add support for signature-formatted ABI items.
        `\`${x.type}\` in \`${normalizeSignature(formatAbiItem(x.abiItem))}\`, and`,
        `\`${y2.type}\` in \`${normalizeSignature(formatAbiItem(y2.abiItem))}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.AmbiguityError"
    });
  }
};
var NotFoundError = class extends BaseError {
  constructor({ name, data, type: type6 = "item" }) {
    const selector = (() => {
      if (name)
        return ` with name "${name}"`;
      if (data)
        return ` with data "${data}"`;
      return "";
    })();
    super(`ABI ${type6}${selector} not found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.NotFoundError"
    });
  }
};
var InvalidSelectorSizeError = class extends BaseError {
  constructor({ data }) {
    super(`Selector size is invalid. Expected 4 bytes. Received ${size2(data)} bytes ("${data}").`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.InvalidSelectorSizeError"
    });
  }
};

// node_modules/ox/_esm/core/AbiParameters.js
var AbiParameters_exports = {};
__export(AbiParameters_exports, {
  ArrayLengthMismatchError: () => ArrayLengthMismatchError,
  BytesSizeMismatchError: () => BytesSizeMismatchError,
  DataSizeTooSmallError: () => DataSizeTooSmallError,
  InvalidArrayError: () => InvalidArrayError,
  InvalidTypeError: () => InvalidTypeError,
  LengthMismatchError: () => LengthMismatchError,
  ZeroDataError: () => ZeroDataError,
  decode: () => decode,
  encode: () => encode2,
  encodePacked: () => encodePacked,
  format: () => format3,
  from: () => from7
});

// node_modules/ox/_esm/core/Solidity.js
var Solidity_exports = {};
__export(Solidity_exports, {
  arrayRegex: () => arrayRegex,
  bytesRegex: () => bytesRegex,
  integerRegex: () => integerRegex,
  maxInt104: () => maxInt104,
  maxInt112: () => maxInt112,
  maxInt120: () => maxInt120,
  maxInt128: () => maxInt128,
  maxInt136: () => maxInt136,
  maxInt144: () => maxInt144,
  maxInt152: () => maxInt152,
  maxInt16: () => maxInt16,
  maxInt160: () => maxInt160,
  maxInt168: () => maxInt168,
  maxInt176: () => maxInt176,
  maxInt184: () => maxInt184,
  maxInt192: () => maxInt192,
  maxInt200: () => maxInt200,
  maxInt208: () => maxInt208,
  maxInt216: () => maxInt216,
  maxInt224: () => maxInt224,
  maxInt232: () => maxInt232,
  maxInt24: () => maxInt24,
  maxInt240: () => maxInt240,
  maxInt248: () => maxInt248,
  maxInt256: () => maxInt256,
  maxInt32: () => maxInt32,
  maxInt40: () => maxInt40,
  maxInt48: () => maxInt48,
  maxInt56: () => maxInt56,
  maxInt64: () => maxInt64,
  maxInt72: () => maxInt72,
  maxInt8: () => maxInt8,
  maxInt80: () => maxInt80,
  maxInt88: () => maxInt88,
  maxInt96: () => maxInt96,
  maxUint104: () => maxUint104,
  maxUint112: () => maxUint112,
  maxUint120: () => maxUint120,
  maxUint128: () => maxUint128,
  maxUint136: () => maxUint136,
  maxUint144: () => maxUint144,
  maxUint152: () => maxUint152,
  maxUint16: () => maxUint16,
  maxUint160: () => maxUint160,
  maxUint168: () => maxUint168,
  maxUint176: () => maxUint176,
  maxUint184: () => maxUint184,
  maxUint192: () => maxUint192,
  maxUint200: () => maxUint200,
  maxUint208: () => maxUint208,
  maxUint216: () => maxUint216,
  maxUint224: () => maxUint224,
  maxUint232: () => maxUint232,
  maxUint24: () => maxUint24,
  maxUint240: () => maxUint240,
  maxUint248: () => maxUint248,
  maxUint256: () => maxUint256,
  maxUint32: () => maxUint32,
  maxUint40: () => maxUint40,
  maxUint48: () => maxUint48,
  maxUint56: () => maxUint56,
  maxUint64: () => maxUint64,
  maxUint72: () => maxUint72,
  maxUint8: () => maxUint8,
  maxUint80: () => maxUint80,
  maxUint88: () => maxUint88,
  maxUint96: () => maxUint96,
  minInt104: () => minInt104,
  minInt112: () => minInt112,
  minInt120: () => minInt120,
  minInt128: () => minInt128,
  minInt136: () => minInt136,
  minInt144: () => minInt144,
  minInt152: () => minInt152,
  minInt16: () => minInt16,
  minInt160: () => minInt160,
  minInt168: () => minInt168,
  minInt176: () => minInt176,
  minInt184: () => minInt184,
  minInt192: () => minInt192,
  minInt200: () => minInt200,
  minInt208: () => minInt208,
  minInt216: () => minInt216,
  minInt224: () => minInt224,
  minInt232: () => minInt232,
  minInt24: () => minInt24,
  minInt240: () => minInt240,
  minInt248: () => minInt248,
  minInt256: () => minInt256,
  minInt32: () => minInt32,
  minInt40: () => minInt40,
  minInt48: () => minInt48,
  minInt56: () => minInt56,
  minInt64: () => minInt64,
  minInt72: () => minInt72,
  minInt8: () => minInt8,
  minInt80: () => minInt80,
  minInt88: () => minInt88,
  minInt96: () => minInt96
});
var arrayRegex = /^(.*)\[([0-9]*)\]$/;
var bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint256 = 2n ** 256n - 1n;

// node_modules/ox/_esm/core/internal/abiParameters.js
function decodeParameter(cursor, param, options) {
  const { checksumAddress, staticPosition } = options;
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type6] = arrayComponents;
    return decodeArray(cursor, { ...param, type: type6 }, { checksumAddress, length, staticPosition });
  }
  if (param.type === "tuple")
    return decodeTuple(cursor, param, {
      checksumAddress,
      staticPosition
    });
  if (param.type === "address")
    return decodeAddress(cursor, { checksum: checksumAddress });
  if (param.type === "bool")
    return decodeBool(cursor);
  if (param.type.startsWith("bytes"))
    return decodeBytes(cursor, param, { staticPosition });
  if (param.type.startsWith("uint") || param.type.startsWith("int"))
    return decodeNumber(cursor, param);
  if (param.type === "string")
    return decodeString(cursor, { staticPosition });
  throw new InvalidTypeError(param.type);
}
var sizeOfLength = 32;
var sizeOfOffset = 32;
function decodeAddress(cursor, options = {}) {
  const { checksum: checksum4 = false } = options;
  const value = cursor.readBytes(32);
  const wrap = (address) => checksum4 ? checksum2(address) : address;
  return [wrap(fromBytes(slice(value, -20))), 32];
}
function decodeArray(cursor, param, options) {
  const { checksumAddress, length, staticPosition } = options;
  if (!length) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const startOfData = start + sizeOfLength;
    cursor.setPosition(start);
    const length2 = toNumber(cursor.readBytes(sizeOfLength));
    const dynamicChild = hasDynamicChild(param);
    let consumed2 = 0;
    const value2 = [];
    for (let i = 0; i < length2; ++i) {
      cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed2));
      const [data, consumed_] = decodeParameter(cursor, param, {
        checksumAddress,
        staticPosition: startOfData
      });
      consumed2 += consumed_;
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  if (hasDynamicChild(param)) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const value2 = [];
    for (let i = 0; i < length; ++i) {
      cursor.setPosition(start + i * 32);
      const [data] = decodeParameter(cursor, param, {
        checksumAddress,
        staticPosition: start
      });
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  let consumed = 0;
  const value = [];
  for (let i = 0; i < length; ++i) {
    const [data, consumed_] = decodeParameter(cursor, param, {
      checksumAddress,
      staticPosition: staticPosition + consumed
    });
    consumed += consumed_;
    value.push(data);
  }
  return [value, consumed];
}
function decodeBool(cursor) {
  return [toBoolean(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
  const [_, size4] = param.type.split("bytes");
  if (!size4) {
    const offset = toNumber(cursor.readBytes(32));
    cursor.setPosition(staticPosition + offset);
    const length = toNumber(cursor.readBytes(32));
    if (length === 0) {
      cursor.setPosition(staticPosition + 32);
      return ["0x", 32];
    }
    const data = cursor.readBytes(length);
    cursor.setPosition(staticPosition + 32);
    return [fromBytes(data), 32];
  }
  const value = fromBytes(cursor.readBytes(Number.parseInt(size4), 32));
  return [value, 32];
}
function decodeNumber(cursor, param) {
  const signed2 = param.type.startsWith("int");
  const size4 = Number.parseInt(param.type.split("int")[1] || "256");
  const value = cursor.readBytes(32);
  return [
    size4 > 48 ? toBigInt(value, { signed: signed2 }) : toNumber(value, { signed: signed2 }),
    32
  ];
}
function decodeTuple(cursor, param, options) {
  const { checksumAddress, staticPosition } = options;
  const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
  const value = hasUnnamedChild ? [] : {};
  let consumed = 0;
  if (hasDynamicChild(param)) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    for (let i = 0; i < param.components.length; ++i) {
      const component = param.components[i];
      cursor.setPosition(start + consumed);
      const [data, consumed_] = decodeParameter(cursor, component, {
        checksumAddress,
        staticPosition: start
      });
      consumed += consumed_;
      value[hasUnnamedChild ? i : component == null ? void 0 : component.name] = data;
    }
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
  }
  for (let i = 0; i < param.components.length; ++i) {
    const component = param.components[i];
    const [data, consumed_] = decodeParameter(cursor, component, {
      checksumAddress,
      staticPosition
    });
    value[hasUnnamedChild ? i : component == null ? void 0 : component.name] = data;
    consumed += consumed_;
  }
  return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
  const offset = toNumber(cursor.readBytes(32));
  const start = staticPosition + offset;
  cursor.setPosition(start);
  const length = toNumber(cursor.readBytes(32));
  if (length === 0) {
    cursor.setPosition(staticPosition + 32);
    return ["", 32];
  }
  const data = cursor.readBytes(length, 32);
  const value = toString(trimLeft(data));
  cursor.setPosition(staticPosition + 32);
  return [value, 32];
}
function prepareParameters({ checksumAddress, parameters, values }) {
  const preparedParameters = [];
  for (let i = 0; i < parameters.length; i++) {
    preparedParameters.push(prepareParameter({
      checksumAddress,
      parameter: parameters[i],
      value: values[i]
    }));
  }
  return preparedParameters;
}
function prepareParameter({ checksumAddress = false, parameter: parameter_, value }) {
  const parameter = parameter_;
  const arrayComponents = getArrayComponents(parameter.type);
  if (arrayComponents) {
    const [length, type6] = arrayComponents;
    return encodeArray(value, {
      checksumAddress,
      length,
      parameter: {
        ...parameter,
        type: type6
      }
    });
  }
  if (parameter.type === "tuple") {
    return encodeTuple(value, {
      checksumAddress,
      parameter
    });
  }
  if (parameter.type === "address") {
    return encodeAddress(value, {
      checksum: checksumAddress
    });
  }
  if (parameter.type === "bool") {
    return encodeBoolean(value);
  }
  if (parameter.type.startsWith("uint") || parameter.type.startsWith("int")) {
    const signed2 = parameter.type.startsWith("int");
    const [, , size4 = "256"] = integerRegex.exec(parameter.type) ?? [];
    return encodeNumber(value, {
      signed: signed2,
      size: Number(size4)
    });
  }
  if (parameter.type.startsWith("bytes")) {
    return encodeBytes(value, { type: parameter.type });
  }
  if (parameter.type === "string") {
    return encodeString(value);
  }
  throw new InvalidTypeError(parameter.type);
}
function encode(preparedParameters) {
  let staticSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size2(encoded);
  }
  const staticParameters = [];
  const dynamicParameters = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic) {
      staticParameters.push(fromNumber2(staticSize + dynamicSize, { size: 32 }));
      dynamicParameters.push(encoded);
      dynamicSize += size2(encoded);
    } else {
      staticParameters.push(encoded);
    }
  }
  return concat2(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
  const { checksum: checksum4 = false } = options;
  assert2(value, { strict: checksum4 });
  return {
    dynamic: false,
    encoded: padLeft2(value.toLowerCase())
  };
}
function encodeArray(value, options) {
  const { checksumAddress, length, parameter } = options;
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new ArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${parameter.type}[${length}]`
    });
  let dynamicChild = false;
  const preparedParameters = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParameter({
      checksumAddress,
      parameter,
      value: value[i]
    });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParameters.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encode(preparedParameters);
    if (dynamic) {
      const length2 = fromNumber2(preparedParameters.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParameters.length > 0 ? concat2(length2, data) : length2
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concat2(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { type: type6 }) {
  const [, parametersize] = type6.split("bytes");
  const bytesSize = size2(value);
  if (!parametersize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padRight(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
    return {
      dynamic: true,
      encoded: concat2(padLeft2(fromNumber2(bytesSize, { size: 32 })), value_)
    };
  }
  if (bytesSize !== Number.parseInt(parametersize))
    throw new BytesSizeMismatchError({
      expectedSize: Number.parseInt(parametersize),
      value
    });
  return { dynamic: false, encoded: padRight(value) };
}
function encodeBoolean(value) {
  if (typeof value !== "boolean")
    throw new BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padLeft2(fromBoolean(value)) };
}
function encodeNumber(value, { signed: signed2, size: size4 }) {
  if (typeof size4 === "number") {
    const max = 2n ** (BigInt(size4) - (signed2 ? 1n : 0n)) - 1n;
    const min = signed2 ? -max - 1n : 0n;
    if (value > max || value < min)
      throw new IntegerOutOfRangeError({
        max: max.toString(),
        min: min.toString(),
        signed: signed2,
        size: size4 / 8,
        value: value.toString()
      });
  }
  return {
    dynamic: false,
    encoded: fromNumber2(value, {
      size: 32,
      signed: signed2
    })
  };
}
function encodeString(value) {
  const hexValue = fromString2(value);
  const partsLength = Math.ceil(size2(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padRight(slice2(hexValue, i * 32, (i + 1) * 32)));
  }
  return {
    dynamic: true,
    encoded: concat2(padRight(fromNumber2(size2(hexValue), { size: 32 })), ...parts)
  };
}
function encodeTuple(value, options) {
  const { checksumAddress, parameter } = options;
  let dynamic = false;
  const preparedParameters = [];
  for (let i = 0; i < parameter.components.length; i++) {
    const param_ = parameter.components[i];
    const index2 = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParameter({
      checksumAddress,
      parameter: param_,
      value: value[index2]
    });
    preparedParameters.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encode(preparedParameters) : concat2(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type6) {
  const matches = type6.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
function hasDynamicChild(param) {
  var _a;
  const { type: type6 } = param;
  if (type6 === "string")
    return true;
  if (type6 === "bytes")
    return true;
  if (type6.endsWith("[]"))
    return true;
  if (type6 === "tuple")
    return (_a = param.components) == null ? void 0 : _a.some(hasDynamicChild);
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents && hasDynamicChild({
    ...param,
    type: arrayComponents[1]
  }))
    return true;
  return false;
}

// node_modules/ox/_esm/core/internal/cursor.js
var staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RecursiveReadLimitExceededError({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  getReadCount(position) {
    return this.positionReadCount.get(position || this.position) || 0;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length - 1);
    return this.bytes.subarray(position, position + length);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes) {
    this.assertPosition(this.position + bytes.length - 1);
    this.bytes.set(bytes, this.position);
    this.position += bytes.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & ~4294967040);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length, size4) {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectBytes(length);
    this.position += size4 ?? length;
    return value;
  },
  readUint8() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(position) {
    const oldPosition = this.position;
    this.assertPosition(position);
    this.position = position;
    return () => this.position = oldPosition;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const count = this.getReadCount();
    this.positionReadCount.set(this.position, count + 1);
    if (count > 0)
      this.recursiveReadCount++;
  }
};
function create(bytes, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes;
  cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  cursor.positionReadCount = /* @__PURE__ */ new Map();
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
var NegativeOffsetError = class extends BaseError {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.NegativeOffsetError"
    });
  }
};
var PositionOutOfBoundsError = class extends BaseError {
  constructor({ length, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
};
var RecursiveReadLimitExceededError = class extends BaseError {
  constructor({ count, limit }) {
    super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
};

// node_modules/ox/_esm/core/AbiParameters.js
function decode(parameters, data, options = {}) {
  const { as = "Array", checksumAddress = false } = options;
  const bytes = typeof data === "string" ? fromHex(data) : data;
  const cursor = create(bytes);
  if (size(bytes) === 0 && parameters.length > 0)
    throw new ZeroDataError();
  if (size(bytes) && size(bytes) < 32)
    throw new DataSizeTooSmallError({
      data: typeof data === "string" ? data : fromBytes(data),
      parameters,
      size: size(bytes)
    });
  let consumed = 0;
  const values = as === "Array" ? [] : {};
  for (let i = 0; i < parameters.length; ++i) {
    const param = parameters[i];
    cursor.setPosition(consumed);
    const [data2, consumed_] = decodeParameter(cursor, param, {
      checksumAddress,
      staticPosition: 0
    });
    consumed += consumed_;
    if (as === "Array")
      values.push(data2);
    else
      values[param.name ?? i] = data2;
  }
  return values;
}
function encode2(parameters, values, options) {
  const { checksumAddress = false } = options ?? {};
  if (parameters.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: parameters.length,
      givenLength: values.length
    });
  const preparedParameters = prepareParameters({
    checksumAddress,
    parameters,
    values
  });
  const data = encode(preparedParameters);
  if (data.length === 0)
    return "0x";
  return data;
}
function encodePacked(types, values) {
  if (types.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i = 0; i < types.length; i++) {
    const type6 = types[i];
    const value = values[i];
    data.push(encodePacked.encode(type6, value));
  }
  return concat2(...data);
}
(function(encodePacked2) {
  function encode9(type6, value, isArray = false) {
    if (type6 === "address") {
      const address = value;
      assert2(address);
      return padLeft2(address.toLowerCase(), isArray ? 32 : 0);
    }
    if (type6 === "string")
      return fromString2(value);
    if (type6 === "bytes")
      return value;
    if (type6 === "bool")
      return padLeft2(fromBoolean(value), isArray ? 32 : 1);
    const intMatch = type6.match(integerRegex);
    if (intMatch) {
      const [_type, baseType, bits = "256"] = intMatch;
      const size4 = Number.parseInt(bits) / 8;
      return fromNumber2(value, {
        size: isArray ? 32 : size4,
        signed: baseType === "int"
      });
    }
    const bytesMatch = type6.match(bytesRegex);
    if (bytesMatch) {
      const [_type, size4] = bytesMatch;
      if (Number.parseInt(size4) !== (value.length - 2) / 2)
        throw new BytesSizeMismatchError({
          expectedSize: Number.parseInt(size4),
          value
        });
      return padRight(value, isArray ? 32 : 0);
    }
    const arrayMatch = type6.match(arrayRegex);
    if (arrayMatch && Array.isArray(value)) {
      const [_type, childType] = arrayMatch;
      const data = [];
      for (let i = 0; i < value.length; i++) {
        data.push(encode9(childType, value[i], true));
      }
      if (data.length === 0)
        return "0x";
      return concat2(...data);
    }
    throw new InvalidTypeError(type6);
  }
  encodePacked2.encode = encode9;
})(encodePacked || (encodePacked = {}));
function format3(parameters) {
  return formatAbiParameters(parameters);
}
function from7(parameters) {
  if (Array.isArray(parameters) && typeof parameters[0] === "string")
    return parseAbiParameters(parameters);
  if (typeof parameters === "string")
    return parseAbiParameters(parameters);
  return parameters;
}
var DataSizeTooSmallError = class extends BaseError {
  constructor({ data, parameters, size: size4 }) {
    super(`Data size of ${size4} bytes is too small for given parameters.`, {
      metaMessages: [
        `Params: (${formatAbiParameters(parameters)})`,
        `Data:   ${data} (${size4} bytes)`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.DataSizeTooSmallError"
    });
  }
};
var ZeroDataError = class extends BaseError {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.');
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ZeroDataError"
    });
  }
};
var ArrayLengthMismatchError = class extends BaseError {
  constructor({ expectedLength, givenLength, type: type6 }) {
    super(`Array length mismatch for type \`${type6}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ArrayLengthMismatchError"
    });
  }
};
var BytesSizeMismatchError = class extends BaseError {
  constructor({ expectedSize, value }) {
    super(`Size of bytes "${value}" (bytes${size2(value)}) does not match expected size (bytes${expectedSize}).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
};
var LengthMismatchError = class extends BaseError {
  constructor({ expectedLength, givenLength }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${expectedLength}`,
      `Given length (values): ${givenLength}`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.LengthMismatchError"
    });
  }
};
var InvalidArrayError = class extends BaseError {
  constructor(value) {
    super(`Value \`${value}\` is not a valid array.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidArrayError"
    });
  }
};
var InvalidTypeError = class extends BaseError {
  constructor(type6) {
    super(`Type \`${type6}\` is not a valid ABI Type.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidTypeError"
    });
  }
};

// node_modules/ox/_esm/core/AbiConstructor.js
function decode2(abiConstructor, options) {
  const { bytecode } = options;
  if (abiConstructor.inputs.length === 0)
    return void 0;
  const data = options.data.replace(bytecode, "0x");
  return decode(abiConstructor.inputs, data);
}
function encode3(abiConstructor, options) {
  var _a;
  const { bytecode, args } = options;
  return concat2(bytecode, ((_a = abiConstructor.inputs) == null ? void 0 : _a.length) && (args == null ? void 0 : args.length) ? encode2(abiConstructor.inputs, args) : "0x");
}
function format4(abiConstructor) {
  return formatAbiItem(abiConstructor);
}
function from8(abiConstructor) {
  return from6(abiConstructor);
}
function fromAbi2(abi) {
  const item = abi.find((item2) => item2.type === "constructor");
  if (!item)
    throw new NotFoundError({ name: "constructor" });
  return item;
}

// node_modules/ox/_esm/core/AbiError.js
var AbiError_exports = {};
__export(AbiError_exports, {
  decode: () => decode3,
  encode: () => encode4,
  format: () => format5,
  from: () => from9,
  fromAbi: () => fromAbi3,
  getSelector: () => getSelector2,
  panicReasons: () => panicReasons,
  solidityError: () => solidityError,
  solidityErrorSelector: () => solidityErrorSelector,
  solidityPanic: () => solidityPanic,
  solidityPanicSelector: () => solidityPanicSelector
});
function decode3(abiError, data, options = {}) {
  if (size2(data) < 4)
    throw new InvalidSelectorSizeError({ data });
  if (abiError.inputs.length === 0)
    return void 0;
  const values = decode(abiError.inputs, slice2(data, 4), options);
  if (values && Object.keys(values).length === 1) {
    if (Array.isArray(values))
      return values[0];
    return Object.values(values)[0];
  }
  return values;
}
function encode4(abiError, ...args) {
  const selector = getSelector2(abiError);
  const data = args.length > 0 ? encode2(abiError.inputs, args[0]) : void 0;
  return data ? concat2(selector, data) : selector;
}
function format5(abiError) {
  return formatAbiItem(abiError);
}
function from9(abiError, options = {}) {
  return from6(abiError, options);
}
function fromAbi3(abi, name, options) {
  if (name === "Error")
    return solidityError;
  if (name === "Panic")
    return solidityPanic;
  if (validate2(name, { strict: false })) {
    const selector = slice2(name, 0, 4);
    if (selector === solidityErrorSelector)
      return solidityError;
    if (selector === solidityPanicSelector)
      return solidityPanic;
  }
  const item = fromAbi(abi, name, options);
  if (item.type !== "error")
    throw new NotFoundError({ name, type: "error" });
  return item;
}
function getSelector2(abiItem) {
  return getSelector(abiItem);
}
var panicReasons = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
};
var solidityError = from9({
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
});
var solidityErrorSelector = "0x08c379a0";
var solidityPanic = from9({
  inputs: [
    {
      name: "reason",
      type: "uint8"
    }
  ],
  name: "Panic",
  type: "error"
});
var solidityPanicSelector = "0x4e487b71";

// node_modules/ox/_esm/core/AbiEvent.js
var AbiEvent_exports = {};
__export(AbiEvent_exports, {
  ArgsMismatchError: () => ArgsMismatchError,
  DataMismatchError: () => DataMismatchError,
  FilterTypeNotSupportedError: () => FilterTypeNotSupportedError,
  InputNotFoundError: () => InputNotFoundError,
  SelectorTopicMismatchError: () => SelectorTopicMismatchError,
  TopicsMismatchError: () => TopicsMismatchError,
  assertArgs: () => assertArgs,
  decode: () => decode4,
  encode: () => encode5,
  format: () => format6,
  from: () => from10,
  fromAbi: () => fromAbi4,
  getSelector: () => getSelector3
});
function assertArgs(abiEvent, args, matchArgs) {
  if (!args || !matchArgs)
    throw new ArgsMismatchError({
      abiEvent,
      expected: args,
      given: matchArgs
    });
  function isEqual2(input, value, arg) {
    if (input.type === "address")
      return isEqual(value, arg);
    if (input.type === "string")
      return keccak256(fromString(value)) === arg;
    if (input.type === "bytes")
      return keccak256(value) === arg;
    return value === arg;
  }
  if (Array.isArray(args) && Array.isArray(matchArgs)) {
    for (const [index2, value] of matchArgs.entries()) {
      if (value === null || value === void 0)
        continue;
      const input = abiEvent.inputs[index2];
      if (!input)
        throw new InputNotFoundError({
          abiEvent,
          name: `${index2}`
        });
      const value_ = Array.isArray(value) ? value : [value];
      let equal = false;
      for (const value2 of value_) {
        if (isEqual2(input, value2, args[index2]))
          equal = true;
      }
      if (!equal)
        throw new ArgsMismatchError({
          abiEvent,
          expected: args,
          given: matchArgs
        });
    }
  }
  if (typeof args === "object" && !Array.isArray(args) && typeof matchArgs === "object" && !Array.isArray(matchArgs))
    for (const [key, value] of Object.entries(matchArgs)) {
      if (value === null || value === void 0)
        continue;
      const input = abiEvent.inputs.find((input2) => input2.name === key);
      if (!input)
        throw new InputNotFoundError({ abiEvent, name: key });
      const value_ = Array.isArray(value) ? value : [value];
      let equal = false;
      for (const value2 of value_) {
        if (isEqual2(input, value2, args[key]))
          equal = true;
      }
      if (!equal)
        throw new ArgsMismatchError({
          abiEvent,
          expected: args,
          given: matchArgs
        });
    }
}
function decode4(abiEvent, log) {
  const { data, topics } = log;
  const [selector_, ...argTopics] = topics;
  const selector = getSelector3(abiEvent);
  if (selector_ !== selector)
    throw new SelectorTopicMismatchError({
      abiEvent,
      actual: selector_,
      expected: selector
    });
  const { inputs } = abiEvent;
  const isUnnamed = inputs == null ? void 0 : inputs.every((x) => !("name" in x && x.name));
  let args = isUnnamed ? [] : {};
  const indexedInputs = inputs.filter((x) => "indexed" in x && x.indexed);
  for (let i = 0; i < indexedInputs.length; i++) {
    const param = indexedInputs[i];
    const topic = argTopics[i];
    if (!topic)
      throw new TopicsMismatchError({
        abiEvent,
        param
      });
    args[isUnnamed ? i : param.name || i] = (() => {
      if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
        return topic;
      const decoded = decode([param], topic) || [];
      return decoded[0];
    })();
  }
  const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
  if (nonIndexedInputs.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = decode(nonIndexedInputs, data);
        if (decodedData) {
          if (isUnnamed)
            args = [...args, ...decodedData];
          else {
            for (let i = 0; i < nonIndexedInputs.length; i++) {
              const index2 = inputs.indexOf(nonIndexedInputs[i]);
              args[nonIndexedInputs[i].name || index2] = decodedData[i];
            }
          }
        }
      } catch (err) {
        if (err instanceof DataSizeTooSmallError || err instanceof PositionOutOfBoundsError)
          throw new DataMismatchError({
            abiEvent,
            data,
            parameters: nonIndexedInputs,
            size: size2(data)
          });
        throw err;
      }
    } else {
      throw new DataMismatchError({
        abiEvent,
        data: "0x",
        parameters: nonIndexedInputs,
        size: 0
      });
    }
  }
  return Object.values(args).length > 0 ? args : void 0;
}
function encode5(abiEvent, ...[args]) {
  let topics = [];
  if (args && abiEvent.inputs) {
    const indexedInputs = abiEvent.inputs.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? (indexedInputs == null ? void 0 : indexedInputs.map((x, i) => args[x.name ?? i])) ?? [] : [];
    if (args_.length > 0) {
      const encode9 = (param, value) => {
        if (param.type === "string")
          return keccak256(fromString2(value));
        if (param.type === "bytes")
          return keccak256(value);
        if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
          throw new FilterTypeNotSupportedError(param.type);
        return encode2([param], [value]);
      };
      topics = (indexedInputs == null ? void 0 : indexedInputs.map((param, i) => {
        if (Array.isArray(args_[i]))
          return args_[i].map((_, j) => encode9(param, args_[i][j]));
        return args_[i] ? encode9(param, args_[i]) : null;
      })) ?? [];
    }
  }
  const selector = (() => {
    if (abiEvent.hash)
      return abiEvent.hash;
    return getSelector3(abiEvent);
  })();
  return { topics: [selector, ...topics] };
}
function format6(abiEvent) {
  return formatAbiItem(abiEvent);
}
function from10(abiEvent, options = {}) {
  return from6(abiEvent, options);
}
function fromAbi4(abi, name, options) {
  const item = fromAbi(abi, name, options);
  if (item.type !== "event")
    throw new NotFoundError({ name, type: "event" });
  return item;
}
function getSelector3(abiItem) {
  return getSignatureHash(abiItem);
}
var ArgsMismatchError = class extends BaseError {
  constructor({ abiEvent, expected, given }) {
    super("Given arguments do not match the expected arguments.", {
      metaMessages: [
        `Event: ${format6(abiEvent)}`,
        `Expected Arguments: ${!expected ? "None" : ""}`,
        expected ? prettyPrint(expected) : void 0,
        `Given Arguments: ${!given ? "None" : ""}`,
        given ? prettyPrint(given) : void 0
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.ArgsMismatchError"
    });
  }
};
var InputNotFoundError = class extends BaseError {
  constructor({ abiEvent, name }) {
    super(`Parameter "${name}" not found on \`${format6(abiEvent)}\`.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.InputNotFoundError"
    });
  }
};
var DataMismatchError = class extends BaseError {
  constructor({ abiEvent, data, parameters, size: size4 }) {
    super([
      `Data size of ${size4} bytes is too small for non-indexed event parameters.`
    ].join("\n"), {
      metaMessages: [
        `Non-indexed Parameters: (${format3(parameters)})`,
        `Data:   ${data} (${size4} bytes)`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.DataMismatchError"
    });
    Object.defineProperty(this, "abiEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "parameters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "size", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.abiEvent = abiEvent;
    this.data = data;
    this.parameters = parameters;
    this.size = size4;
  }
};
var TopicsMismatchError = class extends BaseError {
  constructor({ abiEvent, param }) {
    super([
      `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ""} for "${format6(abiEvent)}".`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.TopicsMismatchError"
    });
    Object.defineProperty(this, "abiEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.abiEvent = abiEvent;
  }
};
var SelectorTopicMismatchError = class extends BaseError {
  constructor({ abiEvent, actual, expected }) {
    super(`topics[0]="${actual}" does not match the expected topics[0]="${expected}".`, {
      metaMessages: [`Event: ${format6(abiEvent)}`, `Selector: ${expected}`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.SelectorTopicMismatchError"
    });
  }
};
var FilterTypeNotSupportedError = class extends BaseError {
  constructor(type6) {
    super(`Filter type "${type6}" is not supported.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiEvent.FilterTypeNotSupportedError"
    });
  }
};

// node_modules/ox/_esm/core/AbiFunction.js
var AbiFunction_exports = {};
__export(AbiFunction_exports, {
  decodeData: () => decodeData,
  decodeResult: () => decodeResult,
  encodeData: () => encodeData,
  encodeResult: () => encodeResult,
  format: () => format7,
  from: () => from11,
  fromAbi: () => fromAbi5,
  getSelector: () => getSelector4
});
function decodeData(abiFunction, data) {
  const { overloads } = abiFunction;
  if (size2(data) < 4)
    throw new InvalidSelectorSizeError({ data });
  if (abiFunction.inputs.length === 0)
    return void 0;
  const item = overloads ? fromAbi5([abiFunction, ...overloads], data) : abiFunction;
  if (size2(data) <= 4)
    return void 0;
  return decode(item.inputs, slice2(data, 4));
}
function decodeResult(abiFunction, data, options = {}) {
  const values = decode(abiFunction.outputs, data, options);
  if (values && Object.keys(values).length === 0)
    return void 0;
  if (values && Object.keys(values).length === 1) {
    if (Array.isArray(values))
      return values[0];
    return Object.values(values)[0];
  }
  return values;
}
function encodeData(abiFunction, ...args) {
  const { overloads } = abiFunction;
  const item = overloads ? fromAbi5([abiFunction, ...overloads], abiFunction.name, {
    args: args[0]
  }) : abiFunction;
  const selector = getSelector4(item);
  const data = args.length > 0 ? encode2(item.inputs, args[0]) : void 0;
  return data ? concat2(selector, data) : selector;
}
function encodeResult(abiFunction, output, options = {}) {
  const { as = "Array" } = options;
  const values = (() => {
    if (abiFunction.outputs.length === 1)
      return [output];
    if (Array.isArray(output))
      return output;
    if (as === "Object")
      return Object.values(output);
    return [output];
  })();
  return encode2(abiFunction.outputs, values);
}
function format7(abiFunction) {
  return formatAbiItem(abiFunction);
}
function from11(abiFunction, options = {}) {
  return from6(abiFunction, options);
}
function fromAbi5(abi, name, options) {
  const item = fromAbi(abi, name, options);
  if (item.type !== "function")
    throw new NotFoundError({ name, type: "function" });
  return item;
}
function getSelector4(abiItem) {
  return getSelector(abiItem);
}

// node_modules/ox/_esm/core/AccessList.js
var AccessList_exports = {};
__export(AccessList_exports, {
  InvalidStorageKeySizeError: () => InvalidStorageKeySizeError,
  fromTupleList: () => fromTupleList,
  toTupleList: () => toTupleList
});
function fromTupleList(accessList) {
  const list = [];
  for (let i = 0; i < accessList.length; i++) {
    const [address, storageKeys] = accessList[i];
    if (address)
      assert2(address, { strict: false });
    list.push({
      address,
      storageKeys: storageKeys.map((key) => validate3(key) ? key : trimLeft2(key))
    });
  }
  return list;
}
function toTupleList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const tuple = [];
  for (const { address, storageKeys } of accessList) {
    for (let j = 0; j < storageKeys.length; j++)
      if (size2(storageKeys[j]) !== 32)
        throw new InvalidStorageKeySizeError({
          storageKey: storageKeys[j]
        });
    if (address)
      assert2(address, { strict: false });
    tuple.push([address, storageKeys]);
  }
  return tuple;
}
var InvalidStorageKeySizeError = class extends BaseError {
  constructor({ storageKey }) {
    super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${size2(storageKey)} bytes.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AccessList.InvalidStorageKeySizeError"
    });
  }
};

// node_modules/ox/_esm/core/AccountProof.js
var AccountProof_exports = {};

// node_modules/ox/_esm/core/AesGcm.js
var AesGcm_exports = {};
__export(AesGcm_exports, {
  decrypt: () => decrypt,
  encrypt: () => encrypt,
  getKey: () => getKey,
  ivLength: () => ivLength,
  randomSalt: () => randomSalt
});
var ivLength = 16;
async function decrypt(value, key, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const encrypted = from(value);
  const iv = encrypted.slice(0, ivLength);
  const data = encrypted.slice(ivLength);
  const decrypted = await globalThis.crypto.subtle.decrypt({
    name: "AES-GCM",
    iv
  }, key, from(data));
  const result = new Uint8Array(decrypted);
  if (as === "Bytes")
    return result;
  return from2(result);
}
async function encrypt(value, key, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const iv = random(ivLength);
  const encrypted = await globalThis.crypto.subtle.encrypt({
    name: "AES-GCM",
    iv
  }, key, from(value));
  const result = concat(iv, new Uint8Array(encrypted));
  if (as === "Bytes")
    return result;
  return from2(result);
}
async function getKey(options) {
  const { iterations = 9e5, password, salt = randomSalt(32) } = options;
  const baseKey = await globalThis.crypto.subtle.importKey("raw", fromString(password), { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
  const key = await globalThis.crypto.subtle.deriveKey({
    name: "PBKDF2",
    salt,
    iterations,
    hash: "SHA-256"
  }, baseKey, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  return key;
}
function randomSalt(size4 = 32) {
  return random(size4);
}

// node_modules/ox/_esm/core/Authorization.js
var Authorization_exports = {};
__export(Authorization_exports, {
  from: () => from14,
  fromRpc: () => fromRpc3,
  fromRpcList: () => fromRpcList,
  fromTuple: () => fromTuple2,
  fromTupleList: () => fromTupleList2,
  getSignPayload: () => getSignPayload,
  hash: () => hash,
  toRpc: () => toRpc3,
  toRpcList: () => toRpcList,
  toTuple: () => toTuple2,
  toTupleList: () => toTupleList2
});

// node_modules/ox/_esm/core/Rlp.js
var Rlp_exports = {};
__export(Rlp_exports, {
  decodeRlpCursor: () => decodeRlpCursor,
  from: () => from12,
  fromBytes: () => fromBytes3,
  fromHex: () => fromHex3,
  readLength: () => readLength,
  readList: () => readList,
  to: () => to,
  toBytes: () => toBytes4,
  toHex: () => toHex3
});
function toBytes4(value) {
  return to(value, "Bytes");
}
function toHex3(value) {
  return to(value, "Hex");
}
function to(value, to3) {
  const to_ = to3 ?? (typeof value === "string" ? "Hex" : "Bytes");
  const bytes = (() => {
    if (typeof value === "string") {
      if (value.length > 3 && value.length % 2 !== 0)
        throw new InvalidLengthError(value);
      return fromHex(value);
    }
    return value;
  })();
  const cursor = create(bytes, {
    recursiveReadLimit: Number.POSITIVE_INFINITY
  });
  const result = decodeRlpCursor(cursor, to_);
  return result;
}
function decodeRlpCursor(cursor, to3 = "Hex") {
  if (cursor.bytes.length === 0)
    return to3 === "Hex" ? fromBytes(cursor.bytes) : cursor.bytes;
  const prefix = cursor.readByte();
  if (prefix < 128)
    cursor.decrementPosition(1);
  if (prefix < 192) {
    const length2 = readLength(cursor, prefix, 128);
    const bytes = cursor.readBytes(length2);
    return to3 === "Hex" ? fromBytes(bytes) : bytes;
  }
  const length = readLength(cursor, prefix, 192);
  return readList(cursor, length, to3);
}
function readLength(cursor, prefix, offset) {
  if (offset === 128 && prefix < 128)
    return 1;
  if (prefix <= offset + 55)
    return prefix - offset;
  if (prefix === offset + 55 + 1)
    return cursor.readUint8();
  if (prefix === offset + 55 + 2)
    return cursor.readUint16();
  if (prefix === offset + 55 + 3)
    return cursor.readUint24();
  if (prefix === offset + 55 + 4)
    return cursor.readUint32();
  throw new BaseError("Invalid RLP prefix");
}
function readList(cursor, length, to3) {
  const position = cursor.position;
  const value = [];
  while (cursor.position - position < length)
    value.push(decodeRlpCursor(cursor, to3));
  return value;
}
function from12(value, options) {
  const { as } = options;
  const encodable = getEncodable(value);
  const cursor = create(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (as === "Hex")
    return fromBytes(cursor.bytes);
  return cursor.bytes;
}
function fromBytes3(bytes, options = {}) {
  const { as = "Bytes" } = options;
  return from12(bytes, { as });
}
function fromHex3(hex2, options = {}) {
  const { as = "Hex" } = options;
  return from12(hex2, { as });
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode: encode9 } of list) {
        encode9(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? fromHex(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/ox/_esm/core/Signature.js
var Signature_exports = {};
__export(Signature_exports, {
  InvalidRError: () => InvalidRError,
  InvalidSError: () => InvalidSError,
  InvalidSerializedSizeError: () => InvalidSerializedSizeError2,
  InvalidVError: () => InvalidVError,
  InvalidYParityError: () => InvalidYParityError,
  MissingPropertiesError: () => MissingPropertiesError,
  assert: () => assert3,
  extract: () => extract,
  from: () => from13,
  fromBytes: () => fromBytes4,
  fromDerBytes: () => fromDerBytes,
  fromDerHex: () => fromDerHex,
  fromHex: () => fromHex4,
  fromLegacy: () => fromLegacy,
  fromRpc: () => fromRpc2,
  fromTuple: () => fromTuple,
  toBytes: () => toBytes5,
  toDerBytes: () => toDerBytes,
  toDerHex: () => toDerHex,
  toHex: () => toHex4,
  toLegacy: () => toLegacy,
  toRpc: () => toRpc2,
  toTuple: () => toTuple,
  vToYParity: () => vToYParity,
  validate: () => validate6,
  yParityToV: () => yParityToV
});

// node_modules/@noble/hashes/esm/hmac.js
var HMAC = class extends Hash {
  constructor(hash7, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    ahash(hash7);
    const key = toBytes2(_key);
    this.iHash = hash7.create();
    if (typeof this.iHash.update !== "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > blockLen ? hash7.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash7.create();
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54 ^ 92;
    this.oHash.update(pad);
    pad.fill(0);
  }
  update(buf) {
    aexists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    aexists(this);
    abytes2(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to3) {
    to3 || (to3 = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to3 = to3;
    to3.finished = finished;
    to3.destroyed = destroyed;
    to3.blockLen = blockLen;
    to3.outputLen = outputLen;
    to3.oHash = oHash._cloneInto(to3.oHash);
    to3.iHash = iHash._cloneInto(to3.iHash);
    return to3;
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
var hmac = (hash7, key, message) => new HMAC(hash7, key).update(message).digest();
hmac.create = (hash7, key) => new HMAC(hash7, key);

// node_modules/@noble/curves/esm/abstract/modular.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
var _3n = BigInt(3);
var _4n = BigInt(4);
var _5n = BigInt(5);
var _8n = BigInt(8);
var _9n = BigInt(9);
var _16n = BigInt(16);
function mod(a, b) {
  const result = a % b;
  return result >= _0n2 ? result : b + result;
}
function pow(num2, power, modulo) {
  if (power < _0n2)
    throw new Error("invalid exponent, negatives unsupported");
  if (modulo <= _0n2)
    throw new Error("invalid modulus");
  if (modulo === _1n2)
    return _0n2;
  let res = _1n2;
  while (power > _0n2) {
    if (power & _1n2)
      res = res * num2 % modulo;
    num2 = num2 * num2 % modulo;
    power >>= _1n2;
  }
  return res;
}
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n2) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n2)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n2)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a = mod(number, modulo);
  let b = modulo;
  let x = _0n2, y2 = _1n2, u = _1n2, v = _0n2;
  while (a !== _0n2) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y2 - v * q;
    b = a, a = r, x = u, y2 = v, u = m, v = n;
  }
  const gcd2 = b;
  if (gcd2 !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function tonelliShanks(P) {
  const legendreC = (P - _1n2) / _2n2;
  let Q, S, Z;
  for (Q = P - _1n2, S = 0; Q % _2n2 === _0n2; Q /= _2n2, S++)
    ;
  for (Z = _2n2; Z < P && pow(Z, legendreC, P) !== P - _1n2; Z++) {
    if (Z > 1e3)
      throw new Error("Cannot find square root: likely non-prime P");
  }
  if (S === 1) {
    const p1div4 = (P + _1n2) / _4n;
    return function tonelliFast(Fp3, n) {
      const root = Fp3.pow(n, p1div4);
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q + _1n2) / _2n2;
  return function tonelliSlow(Fp3, n) {
    if (Fp3.pow(n, legendreC) === Fp3.neg(Fp3.ONE))
      throw new Error("Cannot find square root");
    let r = S;
    let g = Fp3.pow(Fp3.mul(Fp3.ONE, Z), Q);
    let x = Fp3.pow(n, Q1div2);
    let b = Fp3.pow(n, Q);
    while (!Fp3.eql(b, Fp3.ONE)) {
      if (Fp3.eql(b, Fp3.ZERO))
        return Fp3.ZERO;
      let m = 1;
      for (let t2 = Fp3.sqr(b); m < r; m++) {
        if (Fp3.eql(t2, Fp3.ONE))
          break;
        t2 = Fp3.sqr(t2);
      }
      const ge = Fp3.pow(g, _1n2 << BigInt(r - m - 1));
      g = Fp3.sqr(ge);
      x = Fp3.mul(x, ge);
      b = Fp3.mul(b, g);
      r = m;
    }
    return x;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n) {
    const p1div4 = (P + _1n2) / _4n;
    return function sqrt3mod4(Fp3, n) {
      const root = Fp3.pow(n, p1div4);
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _8n === _5n) {
    const c1 = (P - _5n) / _8n;
    return function sqrt5mod8(Fp3, n) {
      const n2 = Fp3.mul(n, _2n2);
      const v = Fp3.pow(n2, c1);
      const nv = Fp3.mul(n, v);
      const i = Fp3.mul(Fp3.mul(nv, _2n2), v);
      const root = Fp3.mul(nv, Fp3.sub(i, Fp3.ONE));
      if (!Fp3.eql(Fp3.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _16n === _9n) {
  }
  return tonelliShanks(P);
}
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(f2, num2, power) {
  if (power < _0n2)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n2)
    return f2.ONE;
  if (power === _1n2)
    return num2;
  let p = f2.ONE;
  let d = num2;
  while (power > _0n2) {
    if (power & _1n2)
      p = f2.mul(p, d);
    d = f2.sqr(d);
    power >>= _1n2;
  }
  return p;
}
function FpInvertBatch(f2, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num2, i) => {
    if (f2.is0(num2))
      return acc;
    tmp[i] = acc;
    return f2.mul(acc, num2);
  }, f2.ONE);
  const inverted = f2.inv(lastMultiplied);
  nums.reduceRight((acc, num2, i) => {
    if (f2.is0(num2))
      return acc;
    tmp[i] = f2.mul(acc, tmp[i]);
    return f2.mul(acc, num2);
  }, inverted);
  return tmp;
}
function FpLegendre(order) {
  const legendreConst = (order - _1n2) / _2n2;
  return (f2, x) => f2.pow(x, legendreConst);
}
function nLength(n, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE2 = false, redef = {}) {
  if (ORDER <= _0n2)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f2 = Object.freeze({
    ORDER,
    isLE: isLE2,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n2,
    ONE: _1n2,
    create: (num2) => mod(num2, ORDER),
    isValid: (num2) => {
      if (typeof num2 !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num2);
      return _0n2 <= num2 && num2 < ORDER;
    },
    is0: (num2) => num2 === _0n2,
    isOdd: (num2) => (num2 & _1n2) === _1n2,
    neg: (num2) => mod(-num2, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num2) => mod(num2 * num2, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num2, power) => FpPow(f2, num2, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num2) => num2 * num2,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num2) => invert(num2, ORDER),
    sqrt: redef.sqrt || ((n) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f2, n);
    }),
    invertBatch: (lst) => FpInvertBatch(f2, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a, b, c) => c ? b : a,
    toBytes: (num2) => isLE2 ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
    fromBytes: (bytes) => {
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      return isLE2 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    }
  });
  return Object.freeze(f2);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE2 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num2 = isLE2 ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num2, fieldOrder - _1n2) + _1n2;
  return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/@noble/curves/esm/abstract/curve.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
function validateW(W, bits) {
  if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts(W, bits) {
  validateW(W, bits);
  const windows = Math.ceil(bits / W) + 1;
  const windowSize = 2 ** (W - 1);
  return { windows, windowSize };
}
function validateMSMPoints(points, c) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p, i) => {
    if (!(p instanceof c))
      throw new Error("invalid point at index " + i);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s, i) => {
    if (!field.isValid(s))
      throw new Error("invalid scalar at index " + i);
  });
}
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var pointWindowSizes = /* @__PURE__ */ new WeakMap();
function getW(P) {
  return pointWindowSizes.get(P) || 1;
}
function wNAF(c, bits) {
  return {
    constTimeNegate,
    hasPrecomputes(elm) {
      return getW(elm) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(elm, n, p = c.ZERO) {
      let d = elm;
      while (n > _0n3) {
        if (n & _1n3)
          p = p.add(d);
        d = d.double();
        n >>= _1n3;
      }
      return p;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W) {
      const { windows, windowSize } = calcWOpts(W, bits);
      const points = [];
      let p = elm;
      let base = p;
      for (let window2 = 0; window2 < windows; window2++) {
        base = p;
        points.push(base);
        for (let i = 1; i < windowSize; i++) {
          base = base.add(p);
          points.push(base);
        }
        p = base.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n) {
      const { windows, windowSize } = calcWOpts(W, bits);
      let p = c.ZERO;
      let f2 = c.BASE;
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n3;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window2 % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p, f: f2 };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
      const { windows, windowSize } = calcWOpts(W, bits);
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        if (n === _0n3)
          break;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n3;
        }
        if (wbits === 0)
          continue;
        let curr = precomputes[offset + Math.abs(wbits) - 1];
        if (wbits < 0)
          curr = curr.negate();
        acc = acc.add(curr);
      }
      return acc;
    },
    getPrecomputes(W, P, transform) {
      let comp = pointPrecomputes.get(P);
      if (!comp) {
        comp = this.precomputeWindow(P, W);
        if (W !== 1)
          pointPrecomputes.set(P, transform(comp));
      }
      return comp;
    },
    wNAFCached(P, n, transform) {
      const W = getW(P);
      return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
    },
    wNAFCachedUnsafe(P, n, transform, prev) {
      const W = getW(P);
      if (W === 1)
        return this.unsafeLadder(P, n, prev);
      return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(P, W) {
      validateW(W, bits);
      pointWindowSizes.set(P, W);
      pointPrecomputes.delete(P);
    }
  };
}
function pippenger(c, fieldN, points, scalars) {
  validateMSMPoints(points, c);
  validateMSMScalars(scalars, fieldN);
  if (points.length !== scalars.length)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c.ZERO;
  const wbits = bitLen(BigInt(points.length));
  const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1;
  const MASK = (1 << windowSize) - 1;
  const buckets = new Array(MASK + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i = lastBits; i >= 0; i -= windowSize) {
    buckets.fill(zero);
    for (let j = 0; j < scalars.length; j++) {
      const scalar = scalars[j];
      const wbits2 = Number(scalar >> BigInt(i) & BigInt(MASK));
      buckets[wbits2] = buckets[wbits2].add(points[j]);
    }
    let resI = zero;
    for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
      sumI = sumI.add(buckets[j]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i !== 0)
      for (let j = 0; j < windowSize; j++)
        sum = sum.double();
  }
  return sum;
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}

// node_modules/@noble/curves/esm/abstract/weierstrass.js
function validateSigVerOpts(opts) {
  if (opts.lowS !== void 0)
    abool("lowS", opts.lowS);
  if (opts.prehash !== void 0)
    abool("prehash", opts.prehash);
}
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo, Fp: Fp3, a } = opts;
  if (endo) {
    if (!Fp3.eql(a, Fp3.ZERO)) {
      throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
    }
  }
  return Object.freeze({ ...opts });
}
var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports;
var DERErr = class extends Error {
  constructor(m = "") {
    super(m);
  }
};
var DER = {
  // asn.1 DER encoding utils
  Err: DERErr,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (tag, data) => {
      const { Err: E } = DER;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length & 1)
        throw new E("tlv.encode: unpadded data");
      const dataLen = data.length / 2;
      const len = numberToHexUnpadded(dataLen);
      if (len.length / 2 & 128)
        throw new E("tlv.encode: long form length too big");
      const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
      const t = numberToHexUnpadded(tag);
      return t + lenLen + len + data;
    },
    // v - value, l - left bytes (unparsed)
    decode(tag, data) {
      const { Err: E } = DER;
      let pos = 0;
      if (tag < 0 || tag > 256)
        throw new E("tlv.encode: wrong tag");
      if (data.length < 2 || data[pos++] !== tag)
        throw new E("tlv.decode: wrong tlv");
      const first = data[pos++];
      const isLong = !!(first & 128);
      let length = 0;
      if (!isLong)
        length = first;
      else {
        const lenLen = first & 127;
        if (!lenLen)
          throw new E("tlv.decode(long): indefinite length not supported");
        if (lenLen > 4)
          throw new E("tlv.decode(long): byte length is too big");
        const lengthBytes = data.subarray(pos, pos + lenLen);
        if (lengthBytes.length !== lenLen)
          throw new E("tlv.decode: length bytes not complete");
        if (lengthBytes[0] === 0)
          throw new E("tlv.decode(long): zero leftmost byte");
        for (const b of lengthBytes)
          length = length << 8 | b;
        pos += lenLen;
        if (length < 128)
          throw new E("tlv.decode(long): not minimal encoding");
      }
      const v = data.subarray(pos, pos + length);
      if (v.length !== length)
        throw new E("tlv.decode: wrong value length");
      return { v, l: data.subarray(pos + length) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(num2) {
      const { Err: E } = DER;
      if (num2 < _0n4)
        throw new E("integer: negative integers are not allowed");
      let hex2 = numberToHexUnpadded(num2);
      if (Number.parseInt(hex2[0], 16) & 8)
        hex2 = "00" + hex2;
      if (hex2.length & 1)
        throw new E("unexpected DER parsing assertion: unpadded hex");
      return hex2;
    },
    decode(data) {
      const { Err: E } = DER;
      if (data[0] & 128)
        throw new E("invalid signature integer: negative");
      if (data[0] === 0 && !(data[1] & 128))
        throw new E("invalid signature integer: unnecessary leading zero");
      return b2n(data);
    }
  },
  toSig(hex2) {
    const { Err: E, _int: int, _tlv: tlv } = DER;
    const data = typeof hex2 === "string" ? h2b(hex2) : hex2;
    abytes(data);
    const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
    if (seqLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
    const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
    if (sLeftBytes.length)
      throw new E("invalid signature: left bytes after parsing");
    return { r: int.decode(rBytes), s: int.decode(sBytes) };
  },
  hexFromSig(sig) {
    const { _tlv: tlv, _int: int } = DER;
    const rs = tlv.encode(2, int.encode(sig.r));
    const ss = tlv.encode(2, int.encode(sig.s));
    const seq = rs + ss;
    return tlv.encode(48, seq);
  }
};
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
var _2n3 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp: Fp3 } = CURVE;
  const Fn = Field(CURVE.n, CURVE.nBitLength);
  const toBytes10 = CURVE.toBytes || ((_c, point, _isCompressed) => {
    const a = point.toAffine();
    return concatBytes(Uint8Array.from([4]), Fp3.toBytes(a.x), Fp3.toBytes(a.y));
  });
  const fromBytes8 = CURVE.fromBytes || ((bytes) => {
    const tail = bytes.subarray(1);
    const x = Fp3.fromBytes(tail.subarray(0, Fp3.BYTES));
    const y2 = Fp3.fromBytes(tail.subarray(Fp3.BYTES, 2 * Fp3.BYTES));
    return { x, y: y2 };
  });
  function weierstrassEquation(x) {
    const { a, b } = CURVE;
    const x2 = Fp3.sqr(x);
    const x3 = Fp3.mul(x2, x);
    return Fp3.add(Fp3.add(x3, Fp3.mul(x, a)), b);
  }
  if (!Fp3.eql(Fp3.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
    throw new Error("bad generator point: equation left != right");
  function isWithinCurveOrder(num2) {
    return inRange(num2, _1n4, CURVE.n);
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (isBytes(key))
        key = bytesToHex(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("invalid private key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num2;
    try {
      num2 = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
    }
    if (wrapPrivateKey)
      num2 = mod(num2, N);
    aInRange("private key", num2, _1n4, N);
    return num2;
  }
  function assertPrjPoint(other) {
    if (!(other instanceof Point3))
      throw new Error("ProjectivePoint expected");
  }
  const toAffineMemo = memoized((p, iz) => {
    const { px: x, py: y2, pz: z2 } = p;
    if (Fp3.eql(z2, Fp3.ONE))
      return { x, y: y2 };
    const is0 = p.is0();
    if (iz == null)
      iz = is0 ? Fp3.ONE : Fp3.inv(z2);
    const ax = Fp3.mul(x, iz);
    const ay = Fp3.mul(y2, iz);
    const zz = Fp3.mul(z2, iz);
    if (is0)
      return { x: Fp3.ZERO, y: Fp3.ZERO };
    if (!Fp3.eql(zz, Fp3.ONE))
      throw new Error("invZ was invalid");
    return { x: ax, y: ay };
  });
  const assertValidMemo = memoized((p) => {
    if (p.is0()) {
      if (CURVE.allowInfinityPoint && !Fp3.is0(p.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x, y: y2 } = p.toAffine();
    if (!Fp3.isValid(x) || !Fp3.isValid(y2))
      throw new Error("bad point: x or y not FE");
    const left = Fp3.sqr(y2);
    const right = weierstrassEquation(x);
    if (!Fp3.eql(left, right))
      throw new Error("bad point: equation left != right");
    if (!p.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class Point3 {
    constructor(px, py, pz) {
      this.px = px;
      this.py = py;
      this.pz = pz;
      if (px == null || !Fp3.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp3.isValid(py))
        throw new Error("y required");
      if (pz == null || !Fp3.isValid(pz))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x, y: y2 } = p || {};
      if (!p || !Fp3.isValid(x) || !Fp3.isValid(y2))
        throw new Error("invalid affine point");
      if (p instanceof Point3)
        throw new Error("projective point not allowed");
      const is0 = (i) => Fp3.eql(i, Fp3.ZERO);
      if (is0(x) && is0(y2))
        return Point3.ZERO;
      return new Point3(x, y2, Fp3.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = Fp3.invertBatch(points.map((p) => p.pz));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point3.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex2) {
      const P = Point3.fromAffine(fromBytes8(ensureBytes("pointHex", hex2)));
      P.assertValidity();
      return P;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point3.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // Multiscalar Multiplication
    static msm(points, scalars) {
      return pippenger(Point3, Fn, points, scalars);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      wnaf.setWindowSize(this, windowSize);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y: y2 } = this.toAffine();
      if (Fp3.isOdd)
        return !Fp3.isOdd(y2);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      const U1 = Fp3.eql(Fp3.mul(X1, Z2), Fp3.mul(X2, Z1));
      const U2 = Fp3.eql(Fp3.mul(Y1, Z2), Fp3.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point3(this.px, Fp3.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b } = CURVE;
      const b3 = Fp3.mul(b, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X3 = Fp3.ZERO, Y3 = Fp3.ZERO, Z3 = Fp3.ZERO;
      let t0 = Fp3.mul(X1, X1);
      let t1 = Fp3.mul(Y1, Y1);
      let t2 = Fp3.mul(Z1, Z1);
      let t3 = Fp3.mul(X1, Y1);
      t3 = Fp3.add(t3, t3);
      Z3 = Fp3.mul(X1, Z1);
      Z3 = Fp3.add(Z3, Z3);
      X3 = Fp3.mul(a, Z3);
      Y3 = Fp3.mul(b3, t2);
      Y3 = Fp3.add(X3, Y3);
      X3 = Fp3.sub(t1, Y3);
      Y3 = Fp3.add(t1, Y3);
      Y3 = Fp3.mul(X3, Y3);
      X3 = Fp3.mul(t3, X3);
      Z3 = Fp3.mul(b3, Z3);
      t2 = Fp3.mul(a, t2);
      t3 = Fp3.sub(t0, t2);
      t3 = Fp3.mul(a, t3);
      t3 = Fp3.add(t3, Z3);
      Z3 = Fp3.add(t0, t0);
      t0 = Fp3.add(Z3, t0);
      t0 = Fp3.add(t0, t2);
      t0 = Fp3.mul(t0, t3);
      Y3 = Fp3.add(Y3, t0);
      t2 = Fp3.mul(Y1, Z1);
      t2 = Fp3.add(t2, t2);
      t0 = Fp3.mul(t2, t3);
      X3 = Fp3.sub(X3, t0);
      Z3 = Fp3.mul(t2, t1);
      Z3 = Fp3.add(Z3, Z3);
      Z3 = Fp3.add(Z3, Z3);
      return new Point3(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      let X3 = Fp3.ZERO, Y3 = Fp3.ZERO, Z3 = Fp3.ZERO;
      const a = CURVE.a;
      const b3 = Fp3.mul(CURVE.b, _3n2);
      let t0 = Fp3.mul(X1, X2);
      let t1 = Fp3.mul(Y1, Y2);
      let t2 = Fp3.mul(Z1, Z2);
      let t3 = Fp3.add(X1, Y1);
      let t4 = Fp3.add(X2, Y2);
      t3 = Fp3.mul(t3, t4);
      t4 = Fp3.add(t0, t1);
      t3 = Fp3.sub(t3, t4);
      t4 = Fp3.add(X1, Z1);
      let t5 = Fp3.add(X2, Z2);
      t4 = Fp3.mul(t4, t5);
      t5 = Fp3.add(t0, t2);
      t4 = Fp3.sub(t4, t5);
      t5 = Fp3.add(Y1, Z1);
      X3 = Fp3.add(Y2, Z2);
      t5 = Fp3.mul(t5, X3);
      X3 = Fp3.add(t1, t2);
      t5 = Fp3.sub(t5, X3);
      Z3 = Fp3.mul(a, t4);
      X3 = Fp3.mul(b3, t2);
      Z3 = Fp3.add(X3, Z3);
      X3 = Fp3.sub(t1, Z3);
      Z3 = Fp3.add(t1, Z3);
      Y3 = Fp3.mul(X3, Z3);
      t1 = Fp3.add(t0, t0);
      t1 = Fp3.add(t1, t0);
      t2 = Fp3.mul(a, t2);
      t4 = Fp3.mul(b3, t4);
      t1 = Fp3.add(t1, t2);
      t2 = Fp3.sub(t0, t2);
      t2 = Fp3.mul(a, t2);
      t4 = Fp3.add(t4, t2);
      t0 = Fp3.mul(t1, t4);
      Y3 = Fp3.add(Y3, t0);
      t0 = Fp3.mul(t5, t4);
      X3 = Fp3.mul(t3, X3);
      X3 = Fp3.sub(X3, t0);
      t0 = Fp3.mul(t3, t1);
      Z3 = Fp3.mul(t5, Z3);
      Z3 = Fp3.add(Z3, t0);
      return new Point3(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point3.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, n, Point3.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc) {
      const { endo, n: N } = CURVE;
      aInRange("scalar", sc, _0n4, N);
      const I = Point3.ZERO;
      if (sc === _0n4)
        return I;
      if (this.is0() || sc === _1n4)
        return this;
      if (!endo || wnaf.hasPrecomputes(this))
        return wnaf.wNAFCachedUnsafe(this, sc, Point3.normalizeZ);
      let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
      let k1p = I;
      let k2p = I;
      let d = this;
      while (k1 > _0n4 || k2 > _0n4) {
        if (k1 & _1n4)
          k1p = k1p.add(d);
        if (k2 & _1n4)
          k2p = k2p.add(d);
        d = d.double();
        k1 >>= _1n4;
        k2 >>= _1n4;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point3(Fp3.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo, n: N } = CURVE;
      aInRange("scalar", scalar, _1n4, N);
      let point, fake;
      if (endo) {
        const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point3(Fp3.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p, f: f2 } = this.wNAF(scalar);
        point = p;
        fake = f2;
      }
      return Point3.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a, b) {
      const G = Point3.BASE;
      const mul = (P, a2) => a2 === _0n4 || a2 === _1n4 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
      const sum = mul(this, a).add(mul(Q, b));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      return toAffineMemo(this, iz);
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n4)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point3, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n4)
        return this;
      if (clearCofactor)
        return clearCofactor(Point3, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      abool("isCompressed", isCompressed);
      this.assertValidity();
      return toBytes10(Point3, this, isCompressed);
    }
    toHex(isCompressed = true) {
      abool("isCompressed", isCompressed);
      return bytesToHex(this.toRawBytes(isCompressed));
    }
  }
  Point3.BASE = new Point3(CURVE.Gx, CURVE.Gy, Fp3.ONE);
  Point3.ZERO = new Point3(Fp3.ZERO, Fp3.ONE, Fp3.ZERO);
  const _bits = CURVE.nBitLength;
  const wnaf = wNAF(Point3, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
  return {
    CURVE,
    ProjectivePoint: Point3,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { Fp: Fp3, n: CURVE_ORDER } = CURVE;
  const compressedLen = Fp3.BYTES + 1;
  const uncompressedLen = 2 * Fp3.BYTES + 1;
  function modN2(a) {
    return mod(a, CURVE_ORDER);
  }
  function invN(a) {
    return invert(a, CURVE_ORDER);
  }
  const { ProjectivePoint: Point3, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c, point, isCompressed) {
      const a = point.toAffine();
      const x = Fp3.toBytes(a.x);
      const cat = concatBytes;
      abool("isCompressed", isCompressed);
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
      } else {
        return cat(Uint8Array.from([4]), x, Fp3.toBytes(a.y));
      }
    },
    fromBytes(bytes) {
      const len = bytes.length;
      const head = bytes[0];
      const tail = bytes.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x = bytesToNumberBE(tail);
        if (!inRange(x, _1n4, Fp3.ORDER))
          throw new Error("Point is not on curve");
        const y2 = weierstrassEquation(x);
        let y3;
        try {
          y3 = Fp3.sqrt(y2);
        } catch (sqrtError) {
          const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("Point is not on curve" + suffix);
        }
        const isYOdd = (y3 & _1n4) === _1n4;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y3 = Fp3.neg(y3);
        return { x, y: y3 };
      } else if (len === uncompressedLen && head === 4) {
        const x = Fp3.fromBytes(tail.subarray(0, Fp3.BYTES));
        const y2 = Fp3.fromBytes(tail.subarray(Fp3.BYTES, 2 * Fp3.BYTES));
        return { x, y: y2 };
      } else {
        const cl = compressedLen;
        const ul = uncompressedLen;
        throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
      }
    }
  });
  const numToNByteStr = (num2) => bytesToHex(numberToBytesBE(num2, CURVE.nByteLength));
  function isBiggerThanHalfOrder(number) {
    const HALF = CURVE_ORDER >> _1n4;
    return number > HALF;
  }
  function normalizeS(s) {
    return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
  }
  const slcNum = (b, from29, to3) => bytesToNumberBE(b.slice(from29, to3));
  class Signature {
    constructor(r, s, recovery) {
      this.r = r;
      this.s = s;
      this.recovery = recovery;
      this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex2) {
      const l = CURVE.nByteLength;
      hex2 = ensureBytes("compactSignature", hex2, l * 2);
      return new Signature(slcNum(hex2, 0, l), slcNum(hex2, l, 2 * l));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex2) {
      const { r, s } = DER.toSig(ensureBytes("DER", hex2));
      return new Signature(r, s);
    }
    assertValidity() {
      aInRange("r", this.r, _1n4, CURVE_ORDER);
      aInRange("s", this.s, _1n4, CURVE_ORDER);
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r, s, recovery: rec } = this;
      const h = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
      if (radj >= Fp3.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R = Point3.fromHex(prefix + numToNByteStr(radj));
      const ir = invN(radj);
      const u1 = modN2(-h * ir);
      const u2 = modN2(s * ir);
      const Q = Point3.BASE.multiplyAndAddUnsafe(R, u1, u2);
      if (!Q)
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
      return numToNByteStr(this.r) + numToNByteStr(this.s);
    }
  }
  const utils2 = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const length = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point3.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey4(privateKey, isCompressed = true) {
    return Point3.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    const arr = isBytes(item);
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr)
      return len === compressedLen || len === uncompressedLen;
    if (str)
      return len === 2 * compressedLen || len === 2 * uncompressedLen;
    if (item instanceof Point3)
      return true;
    return false;
  }
  function getSharedSecret(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA))
      throw new Error("first arg must be private key");
    if (!isProbPub(publicB))
      throw new Error("second arg must be public key");
    const b = Point3.fromHex(publicB);
    return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    const num2 = bytesToNumberBE(bytes);
    const delta = bytes.length * 8 - CURVE.nBitLength;
    return delta > 0 ? num2 >> BigInt(delta) : num2;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
    return modN2(bits2int(bytes));
  };
  const ORDER_MASK = bitMask(CURVE.nBitLength);
  function int2octets(num2) {
    aInRange("num < 2^" + CURVE.nBitLength, num2, _0n4, ORDER_MASK);
    return numberToBytesBE(num2, CURVE.nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    const { hash: hash7, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    validateSigVerOpts(opts);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash7(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d), int2octets(h1int)];
    if (ent != null && ent !== false) {
      const e = ent === true ? randomBytes2(Fp3.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e));
    }
    const seed = concatBytes(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k = bits2int(kBytes);
      if (!isWithinCurveOrder(k))
        return;
      const ik = invN(k);
      const q = Point3.BASE.multiply(k).toAffine();
      const r = modN2(q.x);
      if (r === _0n4)
        return;
      const s = modN2(ik * modN2(m + r * d));
      if (s === _0n4)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n4);
      let normS = s;
      if (lowS && isBiggerThanHalfOrder(s)) {
        normS = normalizeS(s);
        recovery ^= 1;
      }
      return new Signature(r, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign6(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const C = CURVE;
    const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
    return drbg(seed, k2sig);
  }
  Point3.BASE._setWindowSize(8);
  function verify6(signature, msgHash, publicKey, opts = defaultVerOpts) {
    var _a;
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    const { lowS, prehash, format: format9 } = opts;
    validateSigVerOpts(opts);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    if (format9 !== void 0 && format9 !== "compact" && format9 !== "der")
      throw new Error("format must be compact or der");
    const isHex = typeof sg === "string" || isBytes(sg);
    const isObj = !isHex && !format9 && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let _sig = void 0;
    let P;
    try {
      if (isObj)
        _sig = new Signature(sg.r, sg.s);
      if (isHex) {
        try {
          if (format9 !== "compact")
            _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
        }
        if (!_sig && format9 !== "der")
          _sig = Signature.fromCompact(sg);
      }
      P = Point3.fromHex(publicKey);
    } catch (error) {
      return false;
    }
    if (!_sig)
      return false;
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r, s } = _sig;
    const h = bits2int_modN(msgHash);
    const is = invN(s);
    const u1 = modN2(h * is);
    const u2 = modN2(r * is);
    const R = (_a = Point3.BASE.multiplyAndAddUnsafe(P, u1, u2)) == null ? void 0 : _a.toAffine();
    if (!R)
      return false;
    const v = modN2(R.x);
    return v === r;
  }
  return {
    CURVE,
    getPublicKey: getPublicKey4,
    getSharedSecret,
    sign: sign6,
    verify: verify6,
    ProjectivePoint: Point3,
    Signature,
    utils: utils2
  };
}
function SWUFpSqrtRatio(Fp3, Z) {
  const q = Fp3.ORDER;
  let l = _0n4;
  for (let o = q - _1n4; o % _2n3 === _0n4; o /= _2n3)
    l += _1n4;
  const c1 = l;
  const _2n_pow_c1_1 = _2n3 << c1 - _1n4 - _1n4;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n3;
  const c2 = (q - _1n4) / _2n_pow_c1;
  const c3 = (c2 - _1n4) / _2n3;
  const c4 = _2n_pow_c1 - _1n4;
  const c5 = _2n_pow_c1_1;
  const c6 = Fp3.pow(Z, c2);
  const c7 = Fp3.pow(Z, (c2 + _1n4) / _2n3);
  let sqrtRatio = (u, v) => {
    let tv1 = c6;
    let tv2 = Fp3.pow(v, c4);
    let tv3 = Fp3.sqr(tv2);
    tv3 = Fp3.mul(tv3, v);
    let tv5 = Fp3.mul(u, tv3);
    tv5 = Fp3.pow(tv5, c3);
    tv5 = Fp3.mul(tv5, tv2);
    tv2 = Fp3.mul(tv5, v);
    tv3 = Fp3.mul(tv5, u);
    let tv4 = Fp3.mul(tv3, tv2);
    tv5 = Fp3.pow(tv4, c5);
    let isQR = Fp3.eql(tv5, Fp3.ONE);
    tv2 = Fp3.mul(tv3, c7);
    tv5 = Fp3.mul(tv4, tv1);
    tv3 = Fp3.cmov(tv2, tv3, isQR);
    tv4 = Fp3.cmov(tv5, tv4, isQR);
    for (let i = c1; i > _1n4; i--) {
      let tv52 = i - _2n3;
      tv52 = _2n3 << tv52 - _1n4;
      let tvv5 = Fp3.pow(tv4, tv52);
      const e1 = Fp3.eql(tvv5, Fp3.ONE);
      tv2 = Fp3.mul(tv3, tv1);
      tv1 = Fp3.mul(tv1, tv1);
      tvv5 = Fp3.mul(tv4, tv1);
      tv3 = Fp3.cmov(tv2, tv3, e1);
      tv4 = Fp3.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp3.ORDER % _4n2 === _3n2) {
    const c12 = (Fp3.ORDER - _3n2) / _4n2;
    const c22 = Fp3.sqrt(Fp3.neg(Z));
    sqrtRatio = (u, v) => {
      let tv1 = Fp3.sqr(v);
      const tv2 = Fp3.mul(u, v);
      tv1 = Fp3.mul(tv1, tv2);
      let y1 = Fp3.pow(tv1, c12);
      y1 = Fp3.mul(y1, tv2);
      const y2 = Fp3.mul(y1, c22);
      const tv3 = Fp3.mul(Fp3.sqr(y1), v);
      const isQR = Fp3.eql(tv3, u);
      let y3 = Fp3.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y3 };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp3, opts) {
  validateField(Fp3);
  if (!Fp3.isValid(opts.A) || !Fp3.isValid(opts.B) || !Fp3.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp3, opts.Z);
  if (!Fp3.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x, y2;
    tv1 = Fp3.sqr(u);
    tv1 = Fp3.mul(tv1, opts.Z);
    tv2 = Fp3.sqr(tv1);
    tv2 = Fp3.add(tv2, tv1);
    tv3 = Fp3.add(tv2, Fp3.ONE);
    tv3 = Fp3.mul(tv3, opts.B);
    tv4 = Fp3.cmov(opts.Z, Fp3.neg(tv2), !Fp3.eql(tv2, Fp3.ZERO));
    tv4 = Fp3.mul(tv4, opts.A);
    tv2 = Fp3.sqr(tv3);
    tv6 = Fp3.sqr(tv4);
    tv5 = Fp3.mul(tv6, opts.A);
    tv2 = Fp3.add(tv2, tv5);
    tv2 = Fp3.mul(tv2, tv3);
    tv6 = Fp3.mul(tv6, tv4);
    tv5 = Fp3.mul(tv6, opts.B);
    tv2 = Fp3.add(tv2, tv5);
    x = Fp3.mul(tv1, tv3);
    const { isValid, value } = sqrtRatio(tv2, tv6);
    y2 = Fp3.mul(tv1, u);
    y2 = Fp3.mul(y2, value);
    x = Fp3.cmov(x, tv3, isValid);
    y2 = Fp3.cmov(y2, value, isValid);
    const e1 = Fp3.isOdd(u) === Fp3.isOdd(y2);
    y2 = Fp3.cmov(Fp3.neg(y2), y2, e1);
    x = Fp3.div(x, tv4);
    return { x, y: y2 };
  };
}

// node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash7) {
  return {
    hash: hash7,
    hmac: (key, ...msgs) => hmac(hash7, key, concatBytes2(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create3 = (hash7) => weierstrass({ ...curveDef, ...getHash(hash7) });
  return { ...create3(defHash), create: create3 };
}

// node_modules/@noble/curves/esm/abstract/hash-to-curve.js
var os2ip = bytesToNumberBE;
function i2osp(value, length) {
  anum(value);
  anum(length);
  if (value < 0 || value >= 1 << 8 * length)
    throw new Error("invalid I2OSP input: " + value);
  const res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    res[i] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a, b) {
  const arr = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    arr[i] = a[i] ^ b[i];
  }
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255)
    DST = H(concatBytes(utf8ToBytes("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (lenInBytes > 65535 || ell > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const DST_prime = concatBytes(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b = new Array(ell);
  const b_0 = H(concatBytes(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b[0] = H(concatBytes(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i <= ell; i++) {
    const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
    b[i] = H(concatBytes(...args));
  }
  const pseudo_random_bytes = concatBytes(...b);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k / 8);
    DST = H.create({ dkLen }).update(utf8ToBytes("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p, k, m, hash: hash7, expand, DST: _DST } = options;
  abytes(msg);
  anum(count);
  const DST = typeof _DST === "string" ? utf8ToBytes(_DST) : _DST;
  const log2p = p.toString(2).length;
  const L = Math.ceil((log2p + k) / 8);
  const len_in_bytes = count * m * L;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash7);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k, hash7);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u = new Array(count);
  for (let i = 0; i < count; i++) {
    const e = new Array(m);
    for (let j = 0; j < m; j++) {
      const elm_offset = L * (j + i * m);
      const tv = prb.subarray(elm_offset, elm_offset + L);
      e[j] = mod(os2ip(tv), p);
    }
    u[i] = e;
  }
  return u;
}
function isogenyMap(field, map) {
  const COEFF = map.map((i) => Array.from(i).reverse());
  return (x, y2) => {
    const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
    x = field.div(xNum, xDen);
    y2 = field.mul(y2, field.div(yNum, yDen));
    return { x, y: y2 };
  };
}
function createHasher(Point3, mapToCurve, def) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(msg, options) {
      const u = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
      const u0 = Point3.fromAffine(mapToCurve(u[0]));
      const u1 = Point3.fromAffine(mapToCurve(u[1]));
      const P = u0.add(u1).clearCofactor();
      P.assertValidity();
      return P;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(msg, options) {
      const u = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
      const P = Point3.fromAffine(mapToCurve(u[0])).clearCofactor();
      P.assertValidity();
      return P;
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(scalars) {
      if (!Array.isArray(scalars))
        throw new Error("mapToCurve: expected array of bigints");
      for (const i of scalars)
        if (typeof i !== "bigint")
          throw new Error("mapToCurve: expected array of bigints");
      const P = Point3.fromAffine(mapToCurve(scalars)).clearCofactor();
      P.assertValidity();
      return P;
    }
  };
}

// node_modules/@noble/curves/esm/secp256k1.js
var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var _1n5 = BigInt(1);
var _2n4 = BigInt(2);
var divNearest = (a, b) => (a + b / _2n4) / b;
function sqrtMod(y2) {
  const P = secp256k1P;
  const _3n6 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y2 * y2 * y2 % P;
  const b3 = b2 * b2 * y2 % P;
  const b6 = pow2(b3, _3n6, P) * b3 % P;
  const b9 = pow2(b6, _3n6, P) * b3 % P;
  const b11 = pow2(b9, _2n4, P) * b2 % P;
  const b22 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b22, _22n, P) * b22 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n6, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b22 % P;
  const t2 = pow2(t1, _6n, P) * b2 % P;
  const root = pow2(t2, _2n4, P);
  if (!Fpk1.eql(Fpk1.sqr(root), y2))
    throw new Error("Cannot find square root");
  return root;
}
var Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
var secp256k1 = createCurve({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  Fp: Fpk1,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: secp256k1N,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: true,
  // Allow only low-S signatures by default in sign() and verify()
  endo: {
    // Endomorphism, see above
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (k) => {
      const n = secp256k1N;
      const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
      const b1 = -_1n5 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
      const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
      const b2 = a1;
      const POW_2_128 = BigInt("0x100000000000000000000000000000000");
      const c1 = divNearest(b2 * k, n);
      const c2 = divNearest(-b1 * k, n);
      let k1 = mod(k - c1 * a1 - c2 * a2, n);
      let k2 = mod(-c1 * b1 - c2 * b2, n);
      const k1neg = k1 > POW_2_128;
      const k2neg = k2 > POW_2_128;
      if (k1neg)
        k1 = n - k1;
      if (k2neg)
        k2 = n - k2;
      if (k1 > POW_2_128 || k2 > POW_2_128) {
        throw new Error("splitScalar: Endomorphism failed, k=" + k);
      }
      return { k1neg, k1, k2neg, k2 };
    }
  }
}, sha256);
var _0n5 = BigInt(0);
var TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
    tagP = concatBytes(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256(concatBytes(tagP, ...messages));
}
var pointToBytes = (point) => point.toRawBytes(true).slice(1);
var numTo32b = (n) => numberToBytesBE(n, 32);
var modP = (x) => mod(x, secp256k1P);
var modN = (x) => mod(x, secp256k1N);
var Point = secp256k1.ProjectivePoint;
var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
function schnorrGetExtPubKey(priv) {
  let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
  let p = Point.fromPrivateKey(d_);
  const scalar = p.hasEvenY() ? d_ : modN(-d_);
  return { scalar, bytes: pointToBytes(p) };
}
function lift_x(x) {
  aInRange("x", x, _1n5, secp256k1P);
  const xx = modP(x * x);
  const c = modP(xx * x + BigInt(7));
  let y2 = sqrtMod(c);
  if (y2 % _2n4 !== _0n5)
    y2 = modP(-y2);
  const p = new Point(x, y2, _1n5);
  p.assertValidity();
  return p;
}
var num = bytesToNumberBE;
function challenge(...args) {
  return modN(num(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(privateKey) {
  return schnorrGetExtPubKey(privateKey).bytes;
}
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
  const m = ensureBytes("message", message);
  const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
  const a = ensureBytes("auxRand", auxRand, 32);
  const t = numTo32b(d ^ num(taggedHash("BIP0340/aux", a)));
  const rand = taggedHash("BIP0340/nonce", t, px, m);
  const k_ = modN(num(rand));
  if (k_ === _0n5)
    throw new Error("sign failed: k is zero");
  const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
  const e = challenge(rx, px, m);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(numTo32b(modN(k + e * d)), 32);
  if (!schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const sig = ensureBytes("signature", signature, 64);
  const m = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P = lift_x(num(pub));
    const r = num(sig.subarray(0, 32));
    if (!inRange(r, _1n5, secp256k1P))
      return false;
    const s = num(sig.subarray(32, 64));
    if (!inRange(s, _1n5, secp256k1N))
      return false;
    const e = challenge(numTo32b(r), pointToBytes(P), m);
    const R = GmulAdd(P, s, modN(-e));
    if (!R || !R.hasEvenY() || R.toAffine().x !== r)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
var schnorr = (() => ({
  getPublicKey: schnorrGetPublicKey,
  sign: schnorrSign,
  verify: schnorrVerify,
  utils: {
    randomPrivateKey: secp256k1.utils.randomPrivateKey,
    lift_x,
    pointToBytes,
    numberToBytesBE,
    bytesToNumberBE,
    taggedHash,
    mod
  }
}))();
var isoMap = (() => isogenyMap(Fpk1, [
  // xNum
  [
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
    "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
    "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
  ],
  // xDen
  [
    "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
    "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
    "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
    "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
    "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
  ],
  // yDen
  [
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
    "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
    "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j) => BigInt(j)))))();
var mapSWU = (() => mapToCurveSimpleSWU(Fpk1, {
  A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
  B: BigInt("1771"),
  Z: Fpk1.create(BigInt("-11"))
}))();
var htf = (() => createHasher(secp256k1.ProjectivePoint, (scalars) => {
  const { x, y: y2 } = mapSWU(Fpk1.create(scalars[0]));
  return isoMap(x, y2);
}, {
  DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
  encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
  p: Fpk1.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha256
}))();
var hashToCurve = (() => htf.hashToCurve)();
var encodeToCurve = (() => htf.encodeToCurve)();

// node_modules/ox/_esm/core/Signature.js
function assert3(signature, options = {}) {
  const { recovered } = options;
  if (typeof signature.r === "undefined")
    throw new MissingPropertiesError({ signature });
  if (typeof signature.s === "undefined")
    throw new MissingPropertiesError({ signature });
  if (recovered && typeof signature.yParity === "undefined")
    throw new MissingPropertiesError({ signature });
  if (signature.r < 0n || signature.r > maxUint256)
    throw new InvalidRError({ value: signature.r });
  if (signature.s < 0n || signature.s > maxUint256)
    throw new InvalidSError({ value: signature.s });
  if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
    throw new InvalidYParityError({ value: signature.yParity });
}
function fromBytes4(signature) {
  return fromHex4(fromBytes(signature));
}
function fromHex4(signature) {
  if (signature.length !== 130 && signature.length !== 132)
    throw new InvalidSerializedSizeError2({ signature });
  const r = BigInt(slice2(signature, 0, 32));
  const s = BigInt(slice2(signature, 32, 64));
  const yParity = (() => {
    const yParity2 = Number(`0x${signature.slice(130)}`);
    if (Number.isNaN(yParity2))
      return void 0;
    try {
      return vToYParity(yParity2);
    } catch {
      throw new InvalidYParityError({ value: yParity2 });
    }
  })();
  if (typeof yParity === "undefined")
    return {
      r,
      s
    };
  return {
    r,
    s,
    yParity
  };
}
function extract(value) {
  if (typeof value.r === "undefined")
    return void 0;
  if (typeof value.s === "undefined")
    return void 0;
  return from13(value);
}
function from13(signature) {
  const signature_ = (() => {
    if (typeof signature === "string")
      return fromHex4(signature);
    if (signature instanceof Uint8Array)
      return fromBytes4(signature);
    if (typeof signature.r === "string")
      return fromRpc2(signature);
    if (signature.v)
      return fromLegacy(signature);
    return {
      r: signature.r,
      s: signature.s,
      ...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
    };
  })();
  assert3(signature_);
  return signature_;
}
function fromDerBytes(signature) {
  return fromDerHex(fromBytes(signature));
}
function fromDerHex(signature) {
  const { r, s } = secp256k1.Signature.fromDER(from2(signature).slice(2));
  return { r, s };
}
function fromLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    yParity: vToYParity(signature.v)
  };
}
function fromRpc2(signature) {
  const yParity = (() => {
    const v = signature.v ? Number(signature.v) : void 0;
    let yParity2 = signature.yParity ? Number(signature.yParity) : void 0;
    if (typeof v === "number" && typeof yParity2 !== "number")
      yParity2 = vToYParity(v);
    if (typeof yParity2 !== "number")
      throw new InvalidYParityError({ value: signature.yParity });
    return yParity2;
  })();
  return {
    r: BigInt(signature.r),
    s: BigInt(signature.s),
    yParity
  };
}
function fromTuple(tuple) {
  const [yParity, r, s] = tuple;
  return from13({
    r: r === "0x" ? 0n : BigInt(r),
    s: s === "0x" ? 0n : BigInt(s),
    yParity: yParity === "0x" ? 0 : Number(yParity)
  });
}
function toBytes5(signature) {
  return fromHex(toHex4(signature));
}
function toHex4(signature) {
  assert3(signature);
  const r = signature.r;
  const s = signature.s;
  const signature_ = concat2(
    fromNumber2(r, { size: 32 }),
    fromNumber2(s, { size: 32 }),
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === "number" ? fromNumber2(yParityToV(signature.yParity), { size: 1 }) : "0x"
  );
  return signature_;
}
function toDerBytes(signature) {
  const sig = new secp256k1.Signature(signature.r, signature.s);
  return sig.toDERRawBytes();
}
function toDerHex(signature) {
  const sig = new secp256k1.Signature(signature.r, signature.s);
  return `0x${sig.toDERHex()}`;
}
function toLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    v: yParityToV(signature.yParity)
  };
}
function toRpc2(signature) {
  const { r, s, yParity } = signature;
  return {
    r: fromNumber2(r, { size: 32 }),
    s: fromNumber2(s, { size: 32 }),
    yParity: yParity === 0 ? "0x0" : "0x1"
  };
}
function toTuple(signature) {
  const { r, s, yParity } = signature;
  return [
    yParity ? "0x01" : "0x",
    r === 0n ? "0x" : trimLeft2(fromNumber2(r)),
    s === 0n ? "0x" : trimLeft2(fromNumber2(s))
  ];
}
function validate6(signature, options = {}) {
  try {
    assert3(signature, options);
    return true;
  } catch {
    return false;
  }
}
function vToYParity(v) {
  if (v === 0 || v === 27)
    return 0;
  if (v === 1 || v === 28)
    return 1;
  if (v >= 35)
    return v % 2 === 0 ? 1 : 0;
  throw new InvalidVError({ value: v });
}
function yParityToV(yParity) {
  if (yParity === 0)
    return 27;
  if (yParity === 1)
    return 28;
  throw new InvalidYParityError({ value: yParity });
}
var InvalidSerializedSizeError2 = class extends BaseError {
  constructor({ signature }) {
    super(`Value \`${signature}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${size2(from2(signature))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
};
var MissingPropertiesError = class extends BaseError {
  constructor({ signature }) {
    super(`Signature \`${stringify(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.MissingPropertiesError"
    });
  }
};
var InvalidRError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidRError"
    });
  }
};
var InvalidSError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSError"
    });
  }
};
var InvalidYParityError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidYParityError"
    });
  }
};
var InvalidVError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidVError"
    });
  }
};

// node_modules/ox/_esm/core/Authorization.js
function from14(authorization, options = {}) {
  if (typeof authorization.chainId === "string")
    return fromRpc3(authorization);
  return { ...authorization, ...options.signature };
}
function fromRpc3(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return {
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  };
}
function fromRpcList(authorizationList) {
  return authorizationList.map(fromRpc3);
}
function fromTuple2(tuple) {
  const [chainId, address, nonce, yParity, r, s] = tuple;
  const signature = yParity && r && s ? fromTuple([yParity, r, s]) : void 0;
  return from14({
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  });
}
function fromTupleList2(tupleList) {
  const list = [];
  for (const tuple of tupleList)
    list.push(fromTuple2(tuple));
  return list;
}
function getSignPayload(authorization) {
  return hash(authorization);
}
function hash(authorization) {
  return keccak256(concat2("0x05", fromHex3(toTuple2(authorization))));
}
function toRpc3(authorization) {
  const { address, chainId, nonce, ...signature } = authorization;
  return {
    address,
    chainId: fromNumber2(chainId),
    nonce: fromNumber2(nonce),
    ...toRpc2(signature)
  };
}
function toRpcList(authorizationList) {
  return authorizationList.map(toRpc3);
}
function toTuple2(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract(authorization);
  return [
    chainId ? fromNumber2(chainId) : "0x",
    address,
    nonce ? fromNumber2(nonce) : "0x",
    ...signature ? toTuple(signature) : []
  ];
}
function toTupleList2(list) {
  if (!list || list.length === 0)
    return [];
  const tupleList = [];
  for (const authorization of list)
    tupleList.push(toTuple2(authorization));
  return tupleList;
}

// node_modules/ox/_esm/core/Base58.js
var Base58_exports = {};
__export(Base58_exports, {
  fromBytes: () => fromBytes5,
  fromHex: () => fromHex5,
  fromString: () => fromString3,
  toBytes: () => toBytes6,
  toHex: () => toHex5,
  toString: () => toString3
});

// node_modules/ox/_esm/core/internal/base58.js
var integerToAlphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var alphabetToInteger = (
  /* __PURE__ */
  Object.freeze({
    1: 0n,
    2: 1n,
    3: 2n,
    4: 3n,
    5: 4n,
    6: 5n,
    7: 6n,
    8: 7n,
    9: 8n,
    A: 9n,
    B: 10n,
    C: 11n,
    D: 12n,
    E: 13n,
    F: 14n,
    G: 15n,
    H: 16n,
    J: 17n,
    K: 18n,
    L: 19n,
    M: 20n,
    N: 21n,
    P: 22n,
    Q: 23n,
    R: 24n,
    S: 25n,
    T: 26n,
    U: 27n,
    V: 28n,
    W: 29n,
    X: 30n,
    Y: 31n,
    Z: 32n,
    a: 33n,
    b: 34n,
    c: 35n,
    d: 36n,
    e: 37n,
    f: 38n,
    g: 39n,
    h: 40n,
    i: 41n,
    j: 42n,
    k: 43n,
    m: 44n,
    n: 45n,
    o: 46n,
    p: 47n,
    q: 48n,
    r: 49n,
    s: 50n,
    t: 51n,
    u: 52n,
    v: 53n,
    w: 54n,
    x: 55n,
    y: 56n,
    z: 57n
  })
);
function from15(value) {
  let bytes = from(value);
  let integer = (() => {
    let hex2 = value;
    if (value instanceof Uint8Array)
      hex2 = fromBytes(bytes);
    return BigInt(hex2);
  })();
  let result = "";
  while (integer > 0n) {
    const remainder = Number(integer % 58n);
    integer = integer / 58n;
    result = integerToAlphabet[remainder] + result;
  }
  while (bytes.length > 1 && bytes[0] === 0) {
    result = "1" + result;
    bytes = bytes.slice(1);
  }
  return result;
}

// node_modules/ox/_esm/core/Base58.js
function fromBytes5(value) {
  return from15(value);
}
function fromHex5(value) {
  return from15(value);
}
function fromString3(value) {
  return from15(fromString(value));
}
function toBytes6(value) {
  return fromHex(toHex5(value));
}
function toHex5(value) {
  let integer = BigInt(0);
  let pad = 0;
  let checkPad = true;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (checkPad && char === "1")
      pad++;
    else
      checkPad = false;
    if (typeof alphabetToInteger[char] !== "bigint")
      throw new Error("invalid base58 character: " + char);
    integer = integer * 58n;
    integer = integer + alphabetToInteger[char];
  }
  if (!pad)
    return `0x${integer.toString(16)}`;
  return `0x${"0".repeat(pad * 2)}${integer.toString(16)}`;
}
function toString3(value) {
  return toString2(toHex5(value));
}

// node_modules/ox/_esm/core/Base64.js
var Base64_exports = {};
__export(Base64_exports, {
  fromBytes: () => fromBytes6,
  fromHex: () => fromHex6,
  fromString: () => fromString4,
  toBytes: () => toBytes7,
  toHex: () => toHex6,
  toString: () => toString4
});
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var integerToCharacter = Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [i, a.charCodeAt(0)]));
var characterToInteger = {
  ...Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [a.charCodeAt(0), i])),
  ["=".charCodeAt(0)]: 0,
  ["-".charCodeAt(0)]: 62,
  ["_".charCodeAt(0)]: 63
};
function fromBytes6(value, options = {}) {
  const { pad = true, url = false } = options;
  const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
  for (let i = 0, j = 0; j < value.length; i += 4, j += 3) {
    const y2 = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
    encoded[i] = integerToCharacter[y2 >> 18];
    encoded[i + 1] = integerToCharacter[y2 >> 12 & 63];
    encoded[i + 2] = integerToCharacter[y2 >> 6 & 63];
    encoded[i + 3] = integerToCharacter[y2 & 63];
  }
  const k = value.length % 3;
  const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
  let base642 = decoder.decode(new Uint8Array(encoded.buffer, 0, end));
  if (pad && k === 1)
    base642 += "==";
  if (pad && k === 2)
    base642 += "=";
  if (url)
    base642 = base642.replaceAll("+", "-").replaceAll("/", "_");
  return base642;
}
function fromHex6(value, options = {}) {
  return fromBytes6(fromHex(value), options);
}
function fromString4(value, options = {}) {
  return fromBytes6(fromString(value), options);
}
function toBytes7(value) {
  const base642 = value.replace(/=+$/, "");
  const size4 = base642.length;
  const decoded = new Uint8Array(size4 + 3);
  encoder.encodeInto(base642 + "===", decoded);
  for (let i = 0, j = 0; i < base642.length; i += 4, j += 3) {
    const x = (characterToInteger[decoded[i]] << 18) + (characterToInteger[decoded[i + 1]] << 12) + (characterToInteger[decoded[i + 2]] << 6) + characterToInteger[decoded[i + 3]];
    decoded[j] = x >> 16;
    decoded[j + 1] = x >> 8 & 255;
    decoded[j + 2] = x & 255;
  }
  const decodedSize = (size4 >> 2) * 3 + (size4 % 4 && size4 % 4 - 1);
  return new Uint8Array(decoded.buffer, 0, decodedSize);
}
function toHex6(value) {
  return fromBytes(toBytes7(value));
}
function toString4(value) {
  return toString(toBytes7(value));
}

// node_modules/ox/_esm/core/Blobs.js
var Blobs_exports = {};
__export(Blobs_exports, {
  BlobSizeTooLargeError: () => BlobSizeTooLargeError,
  EmptyBlobError: () => EmptyBlobError,
  EmptyBlobVersionedHashesError: () => EmptyBlobVersionedHashesError,
  InvalidVersionedHashSizeError: () => InvalidVersionedHashSizeError,
  InvalidVersionedHashVersionError: () => InvalidVersionedHashVersionError,
  bytesPerBlob: () => bytesPerBlob,
  bytesPerFieldElement: () => bytesPerFieldElement,
  commitmentToVersionedHash: () => commitmentToVersionedHash,
  commitmentsToVersionedHashes: () => commitmentsToVersionedHashes,
  fieldElementsPerBlob: () => fieldElementsPerBlob,
  from: () => from17,
  maxBytesPerTransaction: () => maxBytesPerTransaction,
  sidecarsToVersionedHashes: () => sidecarsToVersionedHashes,
  to: () => to2,
  toBytes: () => toBytes8,
  toCommitments: () => toCommitments,
  toHex: () => toHex7,
  toProofs: () => toProofs,
  toSidecars: () => toSidecars,
  toVersionedHashes: () => toVersionedHashes
});

// node_modules/ox/_esm/core/Kzg.js
var Kzg_exports = {};
__export(Kzg_exports, {
  from: () => from16,
  versionedHashVersion: () => versionedHashVersion
});
var versionedHashVersion = 1;
function from16(value) {
  const { blobToKzgCommitment, computeBlobKzgProof } = value;
  return {
    blobToKzgCommitment,
    computeBlobKzgProof
  };
}

// node_modules/ox/_esm/core/Blobs.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;
function commitmentsToVersionedHashes(commitments, options = {}) {
  const { version } = options;
  const as = options.as ?? (typeof commitments[0] === "string" ? "Hex" : "Bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash(commitment, {
      as,
      version
    }));
  }
  return hashes;
}
function commitmentToVersionedHash(commitment, options = {}) {
  const { version = 1 } = options;
  const as = options.as ?? (typeof commitment === "string" ? "Hex" : "Bytes");
  const versionedHash = sha2562(commitment, { as: "Bytes" });
  versionedHash.set([version], 0);
  return as === "Bytes" ? versionedHash : fromBytes(versionedHash);
}
function from17(data, options = {}) {
  const as = options.as ?? (typeof data === "string" ? "Hex" : "Bytes");
  const data_ = typeof data === "string" ? fromHex(data) : data;
  const size_ = size(data_);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active = true;
  let position = 0;
  while (active) {
    const blob = create(new Uint8Array(bytesPerBlob));
    let size4 = 0;
    while (size4 < fieldElementsPerBlob) {
      const bytes = data_.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes);
      if (bytes.length < 31) {
        blob.pushByte(128);
        active = false;
        break;
      }
      size4++;
      position += 31;
    }
    blobs.push(blob);
  }
  return as === "Bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => fromBytes(x.bytes));
}
function sidecarsToVersionedHashes(sidecars, options = {}) {
  const { version } = options;
  const as = options.as ?? (typeof sidecars[0].blob === "string" ? "Hex" : "Bytes");
  const hashes = [];
  for (const { commitment } of sidecars) {
    hashes.push(commitmentToVersionedHash(commitment, {
      as,
      version
    }));
  }
  return hashes;
}
function to2(blobs, to3) {
  const to_ = to3 ?? (typeof blobs[0] === "string" ? "Hex" : "Bytes");
  const blobs_ = typeof blobs[0] === "string" ? blobs.map((x) => fromHex(x)) : blobs;
  const length = blobs_.reduce((length2, blob) => length2 + blob.length, 0);
  const data = create(new Uint8Array(length));
  let active = true;
  for (const blob of blobs_) {
    const cursor = create(blob);
    while (active && cursor.position < blob.length) {
      cursor.incrementPosition(1);
      let consume = 31;
      if (blob.length - cursor.position < 31)
        consume = blob.length - cursor.position;
      for (const _ in Array.from({ length: consume })) {
        const byte = cursor.readByte();
        const isTerminator = byte === 128 && !cursor.inspectBytes(cursor.remaining).includes(128);
        if (isTerminator) {
          active = false;
          break;
        }
        data.pushByte(byte);
      }
    }
  }
  const trimmedData = data.bytes.slice(0, data.position);
  return to_ === "Hex" ? fromBytes(trimmedData) : trimmedData;
}
function toHex7(blobs) {
  return to2(blobs, "Hex");
}
function toBytes8(blobs) {
  return to2(blobs, "Bytes");
}
function toCommitments(blobs, options) {
  const { kzg } = options;
  const as = options.as ?? (typeof blobs[0] === "string" ? "Hex" : "Bytes");
  const blobs_ = typeof blobs[0] === "string" ? blobs.map((x) => fromHex(x)) : blobs;
  const commitments = [];
  for (const blob of blobs_)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return as === "Bytes" ? commitments : commitments.map((x) => fromBytes(x));
}
function toProofs(blobs, options) {
  const { kzg } = options;
  const as = options.as ?? (typeof blobs[0] === "string" ? "Hex" : "Bytes");
  const blobs_ = typeof blobs[0] === "string" ? blobs.map((x) => fromHex(x)) : blobs;
  const commitments = typeof options.commitments[0] === "string" ? options.commitments.map((x) => fromHex(x)) : options.commitments;
  const proofs = [];
  for (let i = 0; i < blobs_.length; i++) {
    const blob = blobs_[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return as === "Bytes" ? proofs : proofs.map((x) => fromBytes(x));
}
function toSidecars(blobs, options) {
  const { kzg } = options;
  const commitments = options.commitments ?? toCommitments(blobs, { kzg });
  const proofs = options.proofs ?? toProofs(blobs, { commitments, kzg });
  const sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}
function toVersionedHashes(blobs, options) {
  const commitments = toCommitments(blobs, options);
  return commitmentsToVersionedHashes(commitments, options);
}
var BlobSizeTooLargeError = class extends BaseError {
  constructor({ maxSize, size: size4 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size4} bytes`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.BlobSizeTooLargeError"
    });
  }
};
var EmptyBlobError = class extends BaseError {
  constructor() {
    super("Blob data must not be empty.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.EmptyBlobError"
    });
  }
};
var EmptyBlobVersionedHashesError = class extends BaseError {
  constructor() {
    super("Blob versioned hashes must not be empty.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.EmptyBlobVersionedHashesError"
    });
  }
};
var InvalidVersionedHashSizeError = class extends BaseError {
  constructor({ hash: hash7, size: size4 }) {
    super(`Versioned hash "${hash7}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${size4}`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.InvalidVersionedHashSizeError"
    });
  }
};
var InvalidVersionedHashVersionError = class extends BaseError {
  constructor({ hash: hash7, version }) {
    super(`Versioned hash "${hash7}" version is invalid.`, {
      metaMessages: [
        `Expected: ${versionedHashVersion}`,
        `Received: ${version}`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Blobs.InvalidVersionedHashVersionError"
    });
  }
};

// node_modules/ox/_esm/core/Block.js
var Block_exports = {};
__export(Block_exports, {
  fromRpc: () => fromRpc5,
  toRpc: () => toRpc5
});

// node_modules/ox/_esm/core/Transaction.js
var Transaction_exports = {};
__export(Transaction_exports, {
  fromRpc: () => fromRpc4,
  fromRpcType: () => fromRpcType,
  toRpc: () => toRpc4,
  toRpcType: () => toRpcType
});
var toRpcType = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
var fromRpcType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function fromRpc4(transaction, _options = {}) {
  if (!transaction)
    return null;
  const signature = extract(transaction);
  const transaction_ = {
    ...transaction,
    ...signature
  };
  transaction_.blockNumber = transaction.blockNumber ? BigInt(transaction.blockNumber) : null;
  transaction_.data = transaction.input;
  transaction_.gas = BigInt(transaction.gas ?? 0n);
  transaction_.nonce = BigInt(transaction.nonce ?? 0n);
  transaction_.transactionIndex = transaction.transactionIndex ? Number(transaction.transactionIndex) : null;
  transaction_.value = BigInt(transaction.value ?? 0n);
  if (transaction.authorizationList)
    transaction_.authorizationList = fromRpcList(transaction.authorizationList);
  if (transaction.chainId)
    transaction_.chainId = Number(transaction.chainId);
  if (transaction.gasPrice)
    transaction_.gasPrice = BigInt(transaction.gasPrice);
  if (transaction.maxFeePerBlobGas)
    transaction_.maxFeePerBlobGas = BigInt(transaction.maxFeePerBlobGas);
  if (transaction.maxFeePerGas)
    transaction_.maxFeePerGas = BigInt(transaction.maxFeePerGas);
  if (transaction.maxPriorityFeePerGas)
    transaction_.maxPriorityFeePerGas = BigInt(transaction.maxPriorityFeePerGas);
  if (transaction.type)
    transaction_.type = fromRpcType[transaction.type] ?? transaction.type;
  if (signature)
    transaction_.v = yParityToV(signature.yParity);
  return transaction_;
}
function toRpc4(transaction, _options) {
  const rpc = {};
  rpc.blockHash = transaction.blockHash;
  rpc.blockNumber = typeof transaction.blockNumber === "bigint" ? fromNumber2(transaction.blockNumber) : null;
  rpc.from = transaction.from;
  rpc.gas = fromNumber2(transaction.gas ?? 0n);
  rpc.hash = transaction.hash;
  rpc.input = transaction.input;
  rpc.nonce = fromNumber2(transaction.nonce ?? 0n);
  rpc.to = transaction.to;
  rpc.transactionIndex = transaction.transactionIndex ? fromNumber2(transaction.transactionIndex) : null;
  rpc.type = toRpcType[transaction.type] ?? transaction.type;
  rpc.value = fromNumber2(transaction.value ?? 0n);
  if (transaction.accessList)
    rpc.accessList = transaction.accessList;
  if (transaction.authorizationList)
    rpc.authorizationList = toRpcList(transaction.authorizationList);
  if (transaction.blobVersionedHashes)
    rpc.blobVersionedHashes = transaction.blobVersionedHashes;
  if (transaction.chainId)
    rpc.chainId = fromNumber2(transaction.chainId);
  if (typeof transaction.gasPrice === "bigint")
    rpc.gasPrice = fromNumber2(transaction.gasPrice);
  if (typeof transaction.maxFeePerBlobGas === "bigint")
    rpc.maxFeePerBlobGas = fromNumber2(transaction.maxFeePerBlobGas);
  if (typeof transaction.maxFeePerGas === "bigint")
    rpc.maxFeePerGas = fromNumber2(transaction.maxFeePerGas);
  if (typeof transaction.maxPriorityFeePerGas === "bigint")
    rpc.maxPriorityFeePerGas = fromNumber2(transaction.maxPriorityFeePerGas);
  if (typeof transaction.r === "bigint")
    rpc.r = fromNumber2(transaction.r, { size: 32 });
  if (typeof transaction.s === "bigint")
    rpc.s = fromNumber2(transaction.s, { size: 32 });
  if (typeof transaction.v === "number")
    rpc.v = fromNumber2(transaction.v, { size: 1 });
  if (typeof transaction.yParity === "number")
    rpc.yParity = transaction.yParity === 0 ? "0x0" : "0x1";
  return rpc;
}

// node_modules/ox/_esm/core/Block.js
function toRpc5(block, _options = {}) {
  var _a;
  const transactions = block.transactions.map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return toRpc4(transaction);
  });
  return {
    baseFeePerGas: typeof block.baseFeePerGas === "bigint" ? fromNumber2(block.baseFeePerGas) : void 0,
    blobGasUsed: typeof block.blobGasUsed === "bigint" ? fromNumber2(block.blobGasUsed) : void 0,
    excessBlobGas: typeof block.excessBlobGas === "bigint" ? fromNumber2(block.excessBlobGas) : void 0,
    extraData: block.extraData,
    difficulty: typeof block.difficulty === "bigint" ? fromNumber2(block.difficulty) : void 0,
    gasLimit: fromNumber2(block.gasLimit),
    gasUsed: fromNumber2(block.gasUsed),
    hash: block.hash,
    logsBloom: block.logsBloom,
    miner: block.miner,
    mixHash: block.mixHash,
    nonce: block.nonce,
    number: typeof block.number === "bigint" ? fromNumber2(block.number) : null,
    parentBeaconBlockRoot: block.parentBeaconBlockRoot,
    parentHash: block.parentHash,
    receiptsRoot: block.receiptsRoot,
    sealFields: block.sealFields,
    sha3Uncles: block.sha3Uncles,
    size: fromNumber2(block.size),
    stateRoot: block.stateRoot,
    timestamp: fromNumber2(block.timestamp),
    totalDifficulty: typeof block.totalDifficulty === "bigint" ? fromNumber2(block.totalDifficulty) : void 0,
    transactions,
    transactionsRoot: block.transactionsRoot,
    uncles: block.uncles,
    withdrawals: (_a = block.withdrawals) == null ? void 0 : _a.map(toRpc),
    withdrawalsRoot: block.withdrawalsRoot
  };
}
function fromRpc5(block, _options = {}) {
  var _a;
  if (!block)
    return null;
  const transactions = block.transactions.map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return fromRpc4(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : void 0,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: BigInt(block.gasLimit ?? 0n),
    gasUsed: BigInt(block.gasUsed ?? 0n),
    number: block.number ? BigInt(block.number) : null,
    size: BigInt(block.size ?? 0n),
    stateRoot: block.stateRoot,
    timestamp: BigInt(block.timestamp ?? 0n),
    totalDifficulty: BigInt(block.totalDifficulty ?? 0n),
    transactions,
    withdrawals: (_a = block.withdrawals) == null ? void 0 : _a.map(fromRpc)
  };
}

// node_modules/ox/_esm/core/Bloom.js
var Bloom_exports = {};
__export(Bloom_exports, {
  contains: () => contains,
  validate: () => validate7
});
function contains(bloom, input) {
  const filter = fromHex(bloom);
  const hash7 = keccak256(input, { as: "Bytes" });
  for (const i of [0, 2, 4]) {
    const bit = hash7[i + 1] + (hash7[i] << 8) & 2047;
    if ((filter[256 - 1 - Math.floor(bit / 8)] & 1 << bit % 8) === 0)
      return false;
  }
  return true;
}
function validate7(value) {
  return validate2(value) && size2(value) === 256;
}

// node_modules/ox/_esm/core/Bls.js
var Bls_exports = {};
__export(Bls_exports, {
  aggregate: () => aggregate,
  getPublicKey: () => getPublicKey,
  noble: () => noble,
  randomPrivateKey: () => randomPrivateKey,
  sign: () => sign,
  verify: () => verify
});

// node_modules/@noble/curves/esm/abstract/bls.js
var _0n6 = BigInt(0);
var _1n6 = BigInt(1);
var _2n5 = BigInt(2);
var _3n3 = BigInt(3);
function NAfDecomposition(a) {
  const res = [];
  for (; a > _1n6; a >>= _1n6) {
    if ((a & _1n6) === _0n6)
      res.unshift(0);
    else if ((a & _3n3) === _3n3) {
      res.unshift(-1);
      a += _1n6;
    } else
      res.unshift(1);
  }
  return res;
}
function bls(CURVE) {
  const { Fp: Fp3, Fr: Fr2, Fp2: Fp22, Fp6: Fp62, Fp12: Fp122 } = CURVE.fields;
  const BLS_X_IS_NEGATIVE = CURVE.params.xNegative;
  const TWIST = CURVE.params.twistType;
  const G1_ = weierstrassPoints({ n: Fr2.ORDER, ...CURVE.G1 });
  const G1 = Object.assign(G1_, createHasher(G1_.ProjectivePoint, CURVE.G1.mapToCurve, {
    ...CURVE.htfDefaults,
    ...CURVE.G1.htfDefaults
  }));
  const G2_ = weierstrassPoints({ n: Fr2.ORDER, ...CURVE.G2 });
  const G2 = Object.assign(G2_, createHasher(G2_.ProjectivePoint, CURVE.G2.mapToCurve, {
    ...CURVE.htfDefaults,
    ...CURVE.G2.htfDefaults
  }));
  let lineFunction;
  if (TWIST === "multiplicative") {
    lineFunction = (c0, c1, c2, f2, Px, Py) => Fp122.mul014(f2, c0, Fp22.mul(c1, Px), Fp22.mul(c2, Py));
  } else if (TWIST === "divisive") {
    lineFunction = (c0, c1, c2, f2, Px, Py) => Fp122.mul034(f2, Fp22.mul(c2, Py), Fp22.mul(c1, Px), c0);
  } else
    throw new Error("bls: unknown twist type");
  const Fp2div2 = Fp22.div(Fp22.ONE, Fp22.mul(Fp22.ONE, _2n5));
  function pointDouble(ell, Rx, Ry, Rz) {
    const t0 = Fp22.sqr(Ry);
    const t1 = Fp22.sqr(Rz);
    const t2 = Fp22.mulByB(Fp22.mul(t1, _3n3));
    const t3 = Fp22.mul(t2, _3n3);
    const t4 = Fp22.sub(Fp22.sub(Fp22.sqr(Fp22.add(Ry, Rz)), t1), t0);
    const c0 = Fp22.sub(t2, t0);
    const c1 = Fp22.mul(Fp22.sqr(Rx), _3n3);
    const c2 = Fp22.neg(t4);
    ell.push([c0, c1, c2]);
    Rx = Fp22.mul(Fp22.mul(Fp22.mul(Fp22.sub(t0, t3), Rx), Ry), Fp2div2);
    Ry = Fp22.sub(Fp22.sqr(Fp22.mul(Fp22.add(t0, t3), Fp2div2)), Fp22.mul(Fp22.sqr(t2), _3n3));
    Rz = Fp22.mul(t0, t4);
    return { Rx, Ry, Rz };
  }
  function pointAdd(ell, Rx, Ry, Rz, Qx, Qy) {
    const t0 = Fp22.sub(Ry, Fp22.mul(Qy, Rz));
    const t1 = Fp22.sub(Rx, Fp22.mul(Qx, Rz));
    const c0 = Fp22.sub(Fp22.mul(t0, Qx), Fp22.mul(t1, Qy));
    const c1 = Fp22.neg(t0);
    const c2 = t1;
    ell.push([c0, c1, c2]);
    const t2 = Fp22.sqr(t1);
    const t3 = Fp22.mul(t2, t1);
    const t4 = Fp22.mul(t2, Rx);
    const t5 = Fp22.add(Fp22.sub(t3, Fp22.mul(t4, _2n5)), Fp22.mul(Fp22.sqr(t0), Rz));
    Rx = Fp22.mul(t1, t5);
    Ry = Fp22.sub(Fp22.mul(Fp22.sub(t4, t5), t0), Fp22.mul(t3, Ry));
    Rz = Fp22.mul(Rz, t3);
    return { Rx, Ry, Rz };
  }
  const ATE_NAF = NAfDecomposition(CURVE.params.ateLoopSize);
  const calcPairingPrecomputes = memoized((point) => {
    const p = point;
    const { x, y: y2 } = p.toAffine();
    const Qx = x, Qy = y2, negQy = Fp22.neg(y2);
    let Rx = Qx, Ry = Qy, Rz = Fp22.ONE;
    const ell = [];
    for (const bit of ATE_NAF) {
      const cur = [];
      ({ Rx, Ry, Rz } = pointDouble(cur, Rx, Ry, Rz));
      if (bit)
        ({ Rx, Ry, Rz } = pointAdd(cur, Rx, Ry, Rz, Qx, bit === -1 ? negQy : Qy));
      ell.push(cur);
    }
    if (CURVE.postPrecompute) {
      const last = ell[ell.length - 1];
      CURVE.postPrecompute(Rx, Ry, Rz, Qx, Qy, pointAdd.bind(null, last));
    }
    return ell;
  });
  function millerLoopBatch(pairs, withFinalExponent = false) {
    let f12 = Fp122.ONE;
    if (pairs.length) {
      const ellLen = pairs[0][0].length;
      for (let i = 0; i < ellLen; i++) {
        f12 = Fp122.sqr(f12);
        for (const [ell, Px, Py] of pairs) {
          for (const [c0, c1, c2] of ell[i])
            f12 = lineFunction(c0, c1, c2, f12, Px, Py);
        }
      }
    }
    if (BLS_X_IS_NEGATIVE)
      f12 = Fp122.conjugate(f12);
    return withFinalExponent ? Fp122.finalExponentiate(f12) : f12;
  }
  function pairingBatch(pairs, withFinalExponent = true) {
    const res = [];
    G1.ProjectivePoint.normalizeZ(pairs.map(({ g1 }) => g1));
    G2.ProjectivePoint.normalizeZ(pairs.map(({ g2 }) => g2));
    for (const { g1, g2 } of pairs) {
      if (g1.equals(G1.ProjectivePoint.ZERO) || g2.equals(G2.ProjectivePoint.ZERO))
        throw new Error("pairing is not available for ZERO point");
      g1.assertValidity();
      g2.assertValidity();
      const Qa = g1.toAffine();
      res.push([calcPairingPrecomputes(g2), Qa.x, Qa.y]);
    }
    return millerLoopBatch(res, withFinalExponent);
  }
  function pairing(Q, P, withFinalExponent = true) {
    return pairingBatch([{ g1: Q, g2: P }], withFinalExponent);
  }
  const utils2 = {
    randomPrivateKey: () => {
      const length = getMinHashLength(Fr2.ORDER);
      return mapHashToField(CURVE.randomBytes(length), Fr2.ORDER);
    },
    calcPairingPrecomputes
  };
  const { ShortSignature } = CURVE.G1;
  const { Signature } = CURVE.G2;
  function normP1(point) {
    return point instanceof G1.ProjectivePoint ? point : G1.ProjectivePoint.fromHex(point);
  }
  function normP1Hash(point, htfOpts) {
    return point instanceof G1.ProjectivePoint ? point : G1.hashToCurve(ensureBytes("point", point), htfOpts);
  }
  function normP2(point) {
    return point instanceof G2.ProjectivePoint ? point : Signature.fromHex(point);
  }
  function normP2Hash(point, htfOpts) {
    return point instanceof G2.ProjectivePoint ? point : G2.hashToCurve(ensureBytes("point", point), htfOpts);
  }
  function getPublicKey4(privateKey) {
    return G1.ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(true);
  }
  function getPublicKeyForShortSignatures(privateKey) {
    return G2.ProjectivePoint.fromPrivateKey(privateKey).toRawBytes(true);
  }
  function sign6(message, privateKey, htfOpts) {
    const msgPoint = normP2Hash(message, htfOpts);
    msgPoint.assertValidity();
    const sigPoint = msgPoint.multiply(G1.normPrivateKeyToScalar(privateKey));
    if (message instanceof G2.ProjectivePoint)
      return sigPoint;
    return Signature.toRawBytes(sigPoint);
  }
  function signShortSignature(message, privateKey, htfOpts) {
    const msgPoint = normP1Hash(message, htfOpts);
    msgPoint.assertValidity();
    const sigPoint = msgPoint.multiply(G1.normPrivateKeyToScalar(privateKey));
    if (message instanceof G1.ProjectivePoint)
      return sigPoint;
    return ShortSignature.toRawBytes(sigPoint);
  }
  function verify6(signature, message, publicKey, htfOpts) {
    const P = normP1(publicKey);
    const Hm = normP2Hash(message, htfOpts);
    const G = G1.ProjectivePoint.BASE;
    const S = normP2(signature);
    const exp = pairingBatch([
      { g1: P.negate(), g2: Hm },
      // ePHM = pairing(P.negate(), Hm, false);
      { g1: G, g2: S }
      // eGS = pairing(G, S, false);
    ]);
    return Fp122.eql(exp, Fp122.ONE);
  }
  function verifyShortSignature(signature, message, publicKey, htfOpts) {
    const P = normP2(publicKey);
    const Hm = normP1Hash(message, htfOpts);
    const G = G2.ProjectivePoint.BASE;
    const S = normP1(signature);
    const exp = pairingBatch([
      { g1: Hm, g2: P },
      // eHmP = pairing(Hm, P, false);
      { g1: S, g2: G.negate() }
      // eSG = pairing(S, G.negate(), false);
    ]);
    return Fp122.eql(exp, Fp122.ONE);
  }
  function aNonEmpty(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
      throw new Error("expected non-empty array");
  }
  function aggregatePublicKeys(publicKeys) {
    aNonEmpty(publicKeys);
    const agg = publicKeys.map(normP1).reduce((sum, p) => sum.add(p), G1.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (publicKeys[0] instanceof G1.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return aggAffine.toRawBytes(true);
  }
  function aggregateSignatures(signatures) {
    aNonEmpty(signatures);
    const agg = signatures.map(normP2).reduce((sum, s) => sum.add(s), G2.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (signatures[0] instanceof G2.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return Signature.toRawBytes(aggAffine);
  }
  function aggregateShortSignatures(signatures) {
    aNonEmpty(signatures);
    const agg = signatures.map(normP1).reduce((sum, s) => sum.add(s), G1.ProjectivePoint.ZERO);
    const aggAffine = agg;
    if (signatures[0] instanceof G1.ProjectivePoint) {
      aggAffine.assertValidity();
      return aggAffine;
    }
    return ShortSignature.toRawBytes(aggAffine);
  }
  function verifyBatch(signature, messages, publicKeys, htfOpts) {
    aNonEmpty(messages);
    if (publicKeys.length !== messages.length)
      throw new Error("amount of public keys and messages should be equal");
    const sig = normP2(signature);
    const nMessages = messages.map((i) => normP2Hash(i, htfOpts));
    const nPublicKeys = publicKeys.map(normP1);
    const messagePubKeyMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < nPublicKeys.length; i++) {
      const pub = nPublicKeys[i];
      const msg = nMessages[i];
      let keys = messagePubKeyMap.get(msg);
      if (keys === void 0) {
        keys = [];
        messagePubKeyMap.set(msg, keys);
      }
      keys.push(pub);
    }
    const paired = [];
    try {
      for (const [msg, keys] of messagePubKeyMap) {
        const groupPublicKey = keys.reduce((acc, msg2) => acc.add(msg2));
        paired.push({ g1: groupPublicKey, g2: msg });
      }
      paired.push({ g1: G1.ProjectivePoint.BASE.negate(), g2: sig });
      return Fp122.eql(pairingBatch(paired), Fp122.ONE);
    } catch {
      return false;
    }
  }
  G1.ProjectivePoint.BASE._setWindowSize(4);
  return {
    getPublicKey: getPublicKey4,
    getPublicKeyForShortSignatures,
    sign: sign6,
    signShortSignature,
    verify: verify6,
    verifyBatch,
    verifyShortSignature,
    aggregatePublicKeys,
    aggregateSignatures,
    aggregateShortSignatures,
    millerLoopBatch,
    pairing,
    pairingBatch,
    G1,
    G2,
    Signature,
    ShortSignature,
    fields: {
      Fr: Fr2,
      Fp: Fp3,
      Fp2: Fp22,
      Fp6: Fp62,
      Fp12: Fp122
    },
    params: {
      ateLoopSize: CURVE.params.ateLoopSize,
      r: CURVE.params.r,
      G1b: CURVE.G1.b,
      G2b: CURVE.G2.b
    },
    utils: utils2
  };
}

// node_modules/@noble/curves/esm/abstract/tower.js
var _0n7 = BigInt(0);
var _1n7 = BigInt(1);
var _2n6 = BigInt(2);
var _3n4 = BigInt(3);
function calcFrobeniusCoefficients(Fp3, nonResidue, modulus, degree, num2 = 1, divisor) {
  const _divisor = BigInt(divisor === void 0 ? degree : divisor);
  const towerModulus = modulus ** BigInt(degree);
  const res = [];
  for (let i = 0; i < num2; i++) {
    const a = BigInt(i + 1);
    const powers2 = [];
    for (let j = 0, qPower = _1n7; j < degree; j++) {
      const power = (a * qPower - a) / _divisor % towerModulus;
      powers2.push(Fp3.pow(nonResidue, power));
      qPower *= modulus;
    }
    res.push(powers2);
  }
  return res;
}
function psiFrobenius(Fp3, Fp22, base) {
  const PSI_X = Fp22.pow(base, (Fp3.ORDER - _1n7) / _3n4);
  const PSI_Y = Fp22.pow(base, (Fp3.ORDER - _1n7) / _2n6);
  function psi(x, y2) {
    const x2 = Fp22.mul(Fp22.frobeniusMap(x, 1), PSI_X);
    const y22 = Fp22.mul(Fp22.frobeniusMap(y2, 1), PSI_Y);
    return [x2, y22];
  }
  const PSI2_X = Fp22.pow(base, (Fp3.ORDER ** _2n6 - _1n7) / _3n4);
  const PSI2_Y = Fp22.pow(base, (Fp3.ORDER ** _2n6 - _1n7) / _2n6);
  if (!Fp22.eql(PSI2_Y, Fp22.neg(Fp22.ONE)))
    throw new Error("psiFrobenius: PSI2_Y!==-1");
  function psi2(x, y2) {
    return [Fp22.mul(x, PSI2_X), Fp22.neg(y2)];
  }
  const mapAffine = (fn) => (c, P) => {
    const affine = P.toAffine();
    const p = fn(affine.x, affine.y);
    return c.fromAffine({ x: p[0], y: p[1] });
  };
  const G2psi3 = mapAffine(psi);
  const G2psi22 = mapAffine(psi2);
  return { psi, psi2, G2psi: G2psi3, G2psi2: G2psi22, PSI_X, PSI_Y, PSI2_X, PSI2_Y };
}
function tower12(opts) {
  const { ORDER } = opts;
  const Fp3 = Field(ORDER);
  const FpNONRESIDUE = Fp3.create(opts.NONRESIDUE || BigInt(-1));
  const FpLegendre2 = FpLegendre(ORDER);
  const Fpdiv2 = Fp3.div(Fp3.ONE, _2n6);
  const FP2_FROBENIUS_COEFFICIENTS = calcFrobeniusCoefficients(Fp3, FpNONRESIDUE, Fp3.ORDER, 2)[0];
  const Fp2Add = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp3.add(c0, r0),
    c1: Fp3.add(c1, r1)
  });
  const Fp2Subtract = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp3.sub(c0, r0),
    c1: Fp3.sub(c1, r1)
  });
  const Fp2Multiply = ({ c0, c1 }, rhs) => {
    if (typeof rhs === "bigint")
      return { c0: Fp3.mul(c0, rhs), c1: Fp3.mul(c1, rhs) };
    const { c0: r0, c1: r1 } = rhs;
    let t1 = Fp3.mul(c0, r0);
    let t2 = Fp3.mul(c1, r1);
    const o0 = Fp3.sub(t1, t2);
    const o1 = Fp3.sub(Fp3.mul(Fp3.add(c0, c1), Fp3.add(r0, r1)), Fp3.add(t1, t2));
    return { c0: o0, c1: o1 };
  };
  const Fp2Square = ({ c0, c1 }) => {
    const a = Fp3.add(c0, c1);
    const b = Fp3.sub(c0, c1);
    const c = Fp3.add(c0, c0);
    return { c0: Fp3.mul(a, b), c1: Fp3.mul(c, c1) };
  };
  const Fp2fromBigTuple = (tuple) => {
    if (tuple.length !== 2)
      throw new Error("invalid tuple");
    const fps = tuple.map((n) => Fp3.create(n));
    return { c0: fps[0], c1: fps[1] };
  };
  const FP2_ORDER = ORDER * ORDER;
  const Fp2Nonresidue = Fp2fromBigTuple(opts.FP2_NONRESIDUE);
  const Fp22 = {
    ORDER: FP2_ORDER,
    isLE: Fp3.isLE,
    NONRESIDUE: Fp2Nonresidue,
    BITS: bitLen(FP2_ORDER),
    BYTES: Math.ceil(bitLen(FP2_ORDER) / 8),
    MASK: bitMask(bitLen(FP2_ORDER)),
    ZERO: { c0: Fp3.ZERO, c1: Fp3.ZERO },
    ONE: { c0: Fp3.ONE, c1: Fp3.ZERO },
    create: (num2) => num2,
    isValid: ({ c0, c1 }) => typeof c0 === "bigint" && typeof c1 === "bigint",
    is0: ({ c0, c1 }) => Fp3.is0(c0) && Fp3.is0(c1),
    eql: ({ c0, c1 }, { c0: r0, c1: r1 }) => Fp3.eql(c0, r0) && Fp3.eql(c1, r1),
    neg: ({ c0, c1 }) => ({ c0: Fp3.neg(c0), c1: Fp3.neg(c1) }),
    pow: (num2, power) => FpPow(Fp22, num2, power),
    invertBatch: (nums) => FpInvertBatch(Fp22, nums),
    // Normalized
    add: Fp2Add,
    sub: Fp2Subtract,
    mul: Fp2Multiply,
    sqr: Fp2Square,
    // NonNormalized stuff
    addN: Fp2Add,
    subN: Fp2Subtract,
    mulN: Fp2Multiply,
    sqrN: Fp2Square,
    // Why inversion for bigint inside Fp instead of Fp2? it is even used in that context?
    div: (lhs, rhs) => Fp22.mul(lhs, typeof rhs === "bigint" ? Fp3.inv(Fp3.create(rhs)) : Fp22.inv(rhs)),
    inv: ({ c0: a, c1: b }) => {
      const factor = Fp3.inv(Fp3.create(a * a + b * b));
      return { c0: Fp3.mul(factor, Fp3.create(a)), c1: Fp3.mul(factor, Fp3.create(-b)) };
    },
    sqrt: (num2) => {
      if (opts.Fp2sqrt)
        return opts.Fp2sqrt(num2);
      const { c0, c1 } = num2;
      if (Fp3.is0(c1)) {
        if (Fp3.eql(FpLegendre2(Fp3, c0), Fp3.ONE))
          return Fp22.create({ c0: Fp3.sqrt(c0), c1: Fp3.ZERO });
        else
          return Fp22.create({ c0: Fp3.ZERO, c1: Fp3.sqrt(Fp3.div(c0, FpNONRESIDUE)) });
      }
      const a = Fp3.sqrt(Fp3.sub(Fp3.sqr(c0), Fp3.mul(Fp3.sqr(c1), FpNONRESIDUE)));
      let d = Fp3.mul(Fp3.add(a, c0), Fpdiv2);
      const legendre = FpLegendre2(Fp3, d);
      if (!Fp3.is0(legendre) && !Fp3.eql(legendre, Fp3.ONE))
        d = Fp3.sub(d, a);
      const a0 = Fp3.sqrt(d);
      const candidateSqrt = Fp22.create({ c0: a0, c1: Fp3.div(Fp3.mul(c1, Fpdiv2), a0) });
      if (!Fp22.eql(Fp22.sqr(candidateSqrt), num2))
        throw new Error("Cannot find square root");
      const x1 = candidateSqrt;
      const x2 = Fp22.neg(x1);
      const { re: re1, im: im1 } = Fp22.reim(x1);
      const { re: re2, im: im2 } = Fp22.reim(x2);
      if (im1 > im2 || im1 === im2 && re1 > re2)
        return x1;
      return x2;
    },
    // Same as sgn0_m_eq_2 in RFC 9380
    isOdd: (x) => {
      const { re: x0, im: x1 } = Fp22.reim(x);
      const sign_0 = x0 % _2n6;
      const zero_0 = x0 === _0n7;
      const sign_1 = x1 % _2n6;
      return BigInt(sign_0 || zero_0 && sign_1) == _1n7;
    },
    // Bytes util
    fromBytes(b) {
      if (b.length !== Fp22.BYTES)
        throw new Error("fromBytes invalid length=" + b.length);
      return { c0: Fp3.fromBytes(b.subarray(0, Fp3.BYTES)), c1: Fp3.fromBytes(b.subarray(Fp3.BYTES)) };
    },
    toBytes: ({ c0, c1 }) => concatBytes(Fp3.toBytes(c0), Fp3.toBytes(c1)),
    cmov: ({ c0, c1 }, { c0: r0, c1: r1 }, c) => ({
      c0: Fp3.cmov(c0, r0, c),
      c1: Fp3.cmov(c1, r1, c)
    }),
    reim: ({ c0, c1 }) => ({ re: c0, im: c1 }),
    // multiply by u + 1
    mulByNonresidue: ({ c0, c1 }) => Fp22.mul({ c0, c1 }, Fp2Nonresidue),
    mulByB: opts.Fp2mulByB,
    fromBigTuple: Fp2fromBigTuple,
    frobeniusMap: ({ c0, c1 }, power) => ({
      c0,
      c1: Fp3.mul(c1, FP2_FROBENIUS_COEFFICIENTS[power % 2])
    })
  };
  const Fp6Add = ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => ({
    c0: Fp22.add(c0, r0),
    c1: Fp22.add(c1, r1),
    c2: Fp22.add(c2, r2)
  });
  const Fp6Subtract = ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => ({
    c0: Fp22.sub(c0, r0),
    c1: Fp22.sub(c1, r1),
    c2: Fp22.sub(c2, r2)
  });
  const Fp6Multiply = ({ c0, c1, c2 }, rhs) => {
    if (typeof rhs === "bigint") {
      return {
        c0: Fp22.mul(c0, rhs),
        c1: Fp22.mul(c1, rhs),
        c2: Fp22.mul(c2, rhs)
      };
    }
    const { c0: r0, c1: r1, c2: r2 } = rhs;
    const t0 = Fp22.mul(c0, r0);
    const t1 = Fp22.mul(c1, r1);
    const t2 = Fp22.mul(c2, r2);
    return {
      // t0 + (c1 + c2) * (r1 * r2) - (T1 + T2) * (u + 1)
      c0: Fp22.add(t0, Fp22.mulByNonresidue(Fp22.sub(Fp22.mul(Fp22.add(c1, c2), Fp22.add(r1, r2)), Fp22.add(t1, t2)))),
      // (c0 + c1) * (r0 + r1) - (T0 + T1) + T2 * (u + 1)
      c1: Fp22.add(Fp22.sub(Fp22.mul(Fp22.add(c0, c1), Fp22.add(r0, r1)), Fp22.add(t0, t1)), Fp22.mulByNonresidue(t2)),
      // T1 + (c0 + c2) * (r0 + r2) - T0 + T2
      c2: Fp22.sub(Fp22.add(t1, Fp22.mul(Fp22.add(c0, c2), Fp22.add(r0, r2))), Fp22.add(t0, t2))
    };
  };
  const Fp6Square = ({ c0, c1, c2 }) => {
    let t0 = Fp22.sqr(c0);
    let t1 = Fp22.mul(Fp22.mul(c0, c1), _2n6);
    let t3 = Fp22.mul(Fp22.mul(c1, c2), _2n6);
    let t4 = Fp22.sqr(c2);
    return {
      c0: Fp22.add(Fp22.mulByNonresidue(t3), t0),
      // T3 * (u + 1) + T0
      c1: Fp22.add(Fp22.mulByNonresidue(t4), t1),
      // T4 * (u + 1) + T1
      // T1 + (c0 - c1 + c2)² + T3 - T0 - T4
      c2: Fp22.sub(Fp22.sub(Fp22.add(Fp22.add(t1, Fp22.sqr(Fp22.add(Fp22.sub(c0, c1), c2))), t3), t0), t4)
    };
  };
  const [FP6_FROBENIUS_COEFFICIENTS_1, FP6_FROBENIUS_COEFFICIENTS_2] = calcFrobeniusCoefficients(Fp22, Fp2Nonresidue, Fp3.ORDER, 6, 2, 3);
  const Fp62 = {
    ORDER: Fp22.ORDER,
    // TODO: unused, but need to verify
    isLE: Fp22.isLE,
    BITS: 3 * Fp22.BITS,
    BYTES: 3 * Fp22.BYTES,
    MASK: bitMask(3 * Fp22.BITS),
    ZERO: { c0: Fp22.ZERO, c1: Fp22.ZERO, c2: Fp22.ZERO },
    ONE: { c0: Fp22.ONE, c1: Fp22.ZERO, c2: Fp22.ZERO },
    create: (num2) => num2,
    isValid: ({ c0, c1, c2 }) => Fp22.isValid(c0) && Fp22.isValid(c1) && Fp22.isValid(c2),
    is0: ({ c0, c1, c2 }) => Fp22.is0(c0) && Fp22.is0(c1) && Fp22.is0(c2),
    neg: ({ c0, c1, c2 }) => ({ c0: Fp22.neg(c0), c1: Fp22.neg(c1), c2: Fp22.neg(c2) }),
    eql: ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }) => Fp22.eql(c0, r0) && Fp22.eql(c1, r1) && Fp22.eql(c2, r2),
    sqrt: notImplemented,
    // Do we need division by bigint at all? Should be done via order:
    div: (lhs, rhs) => Fp62.mul(lhs, typeof rhs === "bigint" ? Fp3.inv(Fp3.create(rhs)) : Fp62.inv(rhs)),
    pow: (num2, power) => FpPow(Fp62, num2, power),
    invertBatch: (nums) => FpInvertBatch(Fp62, nums),
    // Normalized
    add: Fp6Add,
    sub: Fp6Subtract,
    mul: Fp6Multiply,
    sqr: Fp6Square,
    // NonNormalized stuff
    addN: Fp6Add,
    subN: Fp6Subtract,
    mulN: Fp6Multiply,
    sqrN: Fp6Square,
    inv: ({ c0, c1, c2 }) => {
      let t0 = Fp22.sub(Fp22.sqr(c0), Fp22.mulByNonresidue(Fp22.mul(c2, c1)));
      let t1 = Fp22.sub(Fp22.mulByNonresidue(Fp22.sqr(c2)), Fp22.mul(c0, c1));
      let t2 = Fp22.sub(Fp22.sqr(c1), Fp22.mul(c0, c2));
      let t4 = Fp22.inv(Fp22.add(Fp22.mulByNonresidue(Fp22.add(Fp22.mul(c2, t1), Fp22.mul(c1, t2))), Fp22.mul(c0, t0)));
      return { c0: Fp22.mul(t4, t0), c1: Fp22.mul(t4, t1), c2: Fp22.mul(t4, t2) };
    },
    // Bytes utils
    fromBytes: (b) => {
      if (b.length !== Fp62.BYTES)
        throw new Error("fromBytes invalid length=" + b.length);
      return {
        c0: Fp22.fromBytes(b.subarray(0, Fp22.BYTES)),
        c1: Fp22.fromBytes(b.subarray(Fp22.BYTES, 2 * Fp22.BYTES)),
        c2: Fp22.fromBytes(b.subarray(2 * Fp22.BYTES))
      };
    },
    toBytes: ({ c0, c1, c2 }) => concatBytes(Fp22.toBytes(c0), Fp22.toBytes(c1), Fp22.toBytes(c2)),
    cmov: ({ c0, c1, c2 }, { c0: r0, c1: r1, c2: r2 }, c) => ({
      c0: Fp22.cmov(c0, r0, c),
      c1: Fp22.cmov(c1, r1, c),
      c2: Fp22.cmov(c2, r2, c)
    }),
    fromBigSix: (t) => {
      if (!Array.isArray(t) || t.length !== 6)
        throw new Error("invalid Fp6 usage");
      return {
        c0: Fp22.fromBigTuple(t.slice(0, 2)),
        c1: Fp22.fromBigTuple(t.slice(2, 4)),
        c2: Fp22.fromBigTuple(t.slice(4, 6))
      };
    },
    frobeniusMap: ({ c0, c1, c2 }, power) => ({
      c0: Fp22.frobeniusMap(c0, power),
      c1: Fp22.mul(Fp22.frobeniusMap(c1, power), FP6_FROBENIUS_COEFFICIENTS_1[power % 6]),
      c2: Fp22.mul(Fp22.frobeniusMap(c2, power), FP6_FROBENIUS_COEFFICIENTS_2[power % 6])
    }),
    mulByFp2: ({ c0, c1, c2 }, rhs) => ({
      c0: Fp22.mul(c0, rhs),
      c1: Fp22.mul(c1, rhs),
      c2: Fp22.mul(c2, rhs)
    }),
    mulByNonresidue: ({ c0, c1, c2 }) => ({ c0: Fp22.mulByNonresidue(c2), c1: c0, c2: c1 }),
    // Sparse multiplication
    mul1: ({ c0, c1, c2 }, b1) => ({
      c0: Fp22.mulByNonresidue(Fp22.mul(c2, b1)),
      c1: Fp22.mul(c0, b1),
      c2: Fp22.mul(c1, b1)
    }),
    // Sparse multiplication
    mul01({ c0, c1, c2 }, b0, b1) {
      let t0 = Fp22.mul(c0, b0);
      let t1 = Fp22.mul(c1, b1);
      return {
        // ((c1 + c2) * b1 - T1) * (u + 1) + T0
        c0: Fp22.add(Fp22.mulByNonresidue(Fp22.sub(Fp22.mul(Fp22.add(c1, c2), b1), t1)), t0),
        // (b0 + b1) * (c0 + c1) - T0 - T1
        c1: Fp22.sub(Fp22.sub(Fp22.mul(Fp22.add(b0, b1), Fp22.add(c0, c1)), t0), t1),
        // (c0 + c2) * b0 - T0 + T1
        c2: Fp22.add(Fp22.sub(Fp22.mul(Fp22.add(c0, c2), b0), t0), t1)
      };
    }
  };
  const FP12_FROBENIUS_COEFFICIENTS = calcFrobeniusCoefficients(Fp22, Fp2Nonresidue, Fp3.ORDER, 12, 1, 6)[0];
  const Fp12Add = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp62.add(c0, r0),
    c1: Fp62.add(c1, r1)
  });
  const Fp12Subtract = ({ c0, c1 }, { c0: r0, c1: r1 }) => ({
    c0: Fp62.sub(c0, r0),
    c1: Fp62.sub(c1, r1)
  });
  const Fp12Multiply = ({ c0, c1 }, rhs) => {
    if (typeof rhs === "bigint")
      return { c0: Fp62.mul(c0, rhs), c1: Fp62.mul(c1, rhs) };
    let { c0: r0, c1: r1 } = rhs;
    let t1 = Fp62.mul(c0, r0);
    let t2 = Fp62.mul(c1, r1);
    return {
      c0: Fp62.add(t1, Fp62.mulByNonresidue(t2)),
      // T1 + T2 * v
      // (c0 + c1) * (r0 + r1) - (T1 + T2)
      c1: Fp62.sub(Fp62.mul(Fp62.add(c0, c1), Fp62.add(r0, r1)), Fp62.add(t1, t2))
    };
  };
  const Fp12Square = ({ c0, c1 }) => {
    let ab = Fp62.mul(c0, c1);
    return {
      // (c1 * v + c0) * (c0 + c1) - AB - AB * v
      c0: Fp62.sub(Fp62.sub(Fp62.mul(Fp62.add(Fp62.mulByNonresidue(c1), c0), Fp62.add(c0, c1)), ab), Fp62.mulByNonresidue(ab)),
      c1: Fp62.add(ab, ab)
    };
  };
  function Fp4Square2(a, b) {
    const a2 = Fp22.sqr(a);
    const b2 = Fp22.sqr(b);
    return {
      first: Fp22.add(Fp22.mulByNonresidue(b2), a2),
      // b² * Nonresidue + a²
      second: Fp22.sub(Fp22.sub(Fp22.sqr(Fp22.add(a, b)), a2), b2)
      // (a + b)² - a² - b²
    };
  }
  const Fp122 = {
    ORDER: Fp22.ORDER,
    // TODO: unused, but need to verify
    isLE: Fp62.isLE,
    BITS: 2 * Fp22.BITS,
    BYTES: 2 * Fp22.BYTES,
    MASK: bitMask(2 * Fp22.BITS),
    ZERO: { c0: Fp62.ZERO, c1: Fp62.ZERO },
    ONE: { c0: Fp62.ONE, c1: Fp62.ZERO },
    create: (num2) => num2,
    isValid: ({ c0, c1 }) => Fp62.isValid(c0) && Fp62.isValid(c1),
    is0: ({ c0, c1 }) => Fp62.is0(c0) && Fp62.is0(c1),
    neg: ({ c0, c1 }) => ({ c0: Fp62.neg(c0), c1: Fp62.neg(c1) }),
    eql: ({ c0, c1 }, { c0: r0, c1: r1 }) => Fp62.eql(c0, r0) && Fp62.eql(c1, r1),
    sqrt: notImplemented,
    inv: ({ c0, c1 }) => {
      let t = Fp62.inv(Fp62.sub(Fp62.sqr(c0), Fp62.mulByNonresidue(Fp62.sqr(c1))));
      return { c0: Fp62.mul(c0, t), c1: Fp62.neg(Fp62.mul(c1, t)) };
    },
    div: (lhs, rhs) => Fp122.mul(lhs, typeof rhs === "bigint" ? Fp3.inv(Fp3.create(rhs)) : Fp122.inv(rhs)),
    pow: (num2, power) => FpPow(Fp122, num2, power),
    invertBatch: (nums) => FpInvertBatch(Fp122, nums),
    // Normalized
    add: Fp12Add,
    sub: Fp12Subtract,
    mul: Fp12Multiply,
    sqr: Fp12Square,
    // NonNormalized stuff
    addN: Fp12Add,
    subN: Fp12Subtract,
    mulN: Fp12Multiply,
    sqrN: Fp12Square,
    // Bytes utils
    fromBytes: (b) => {
      if (b.length !== Fp122.BYTES)
        throw new Error("fromBytes invalid length=" + b.length);
      return {
        c0: Fp62.fromBytes(b.subarray(0, Fp62.BYTES)),
        c1: Fp62.fromBytes(b.subarray(Fp62.BYTES))
      };
    },
    toBytes: ({ c0, c1 }) => concatBytes(Fp62.toBytes(c0), Fp62.toBytes(c1)),
    cmov: ({ c0, c1 }, { c0: r0, c1: r1 }, c) => ({
      c0: Fp62.cmov(c0, r0, c),
      c1: Fp62.cmov(c1, r1, c)
    }),
    // Utils
    // toString() {
    //   return '' + 'Fp12(' + this.c0 + this.c1 + '* w');
    // },
    // fromTuple(c: [Fp6, Fp6]) {
    //   return new Fp12(...c);
    // }
    fromBigTwelve: (t) => ({
      c0: Fp62.fromBigSix(t.slice(0, 6)),
      c1: Fp62.fromBigSix(t.slice(6, 12))
    }),
    // Raises to q**i -th power
    frobeniusMap(lhs, power) {
      const { c0, c1, c2 } = Fp62.frobeniusMap(lhs.c1, power);
      const coeff = FP12_FROBENIUS_COEFFICIENTS[power % 12];
      return {
        c0: Fp62.frobeniusMap(lhs.c0, power),
        c1: Fp62.create({
          c0: Fp22.mul(c0, coeff),
          c1: Fp22.mul(c1, coeff),
          c2: Fp22.mul(c2, coeff)
        })
      };
    },
    mulByFp2: ({ c0, c1 }, rhs) => ({
      c0: Fp62.mulByFp2(c0, rhs),
      c1: Fp62.mulByFp2(c1, rhs)
    }),
    conjugate: ({ c0, c1 }) => ({ c0, c1: Fp62.neg(c1) }),
    // Sparse multiplication
    mul014: ({ c0, c1 }, o0, o1, o4) => {
      let t0 = Fp62.mul01(c0, o0, o1);
      let t1 = Fp62.mul1(c1, o4);
      return {
        c0: Fp62.add(Fp62.mulByNonresidue(t1), t0),
        // T1 * v + T0
        // (c1 + c0) * [o0, o1+o4] - T0 - T1
        c1: Fp62.sub(Fp62.sub(Fp62.mul01(Fp62.add(c1, c0), o0, Fp22.add(o1, o4)), t0), t1)
      };
    },
    mul034: ({ c0, c1 }, o0, o3, o4) => {
      const a = Fp62.create({
        c0: Fp22.mul(c0.c0, o0),
        c1: Fp22.mul(c0.c1, o0),
        c2: Fp22.mul(c0.c2, o0)
      });
      const b = Fp62.mul01(c1, o3, o4);
      const e = Fp62.mul01(Fp62.add(c0, c1), Fp22.add(o0, o3), o4);
      return {
        c0: Fp62.add(Fp62.mulByNonresidue(b), a),
        c1: Fp62.sub(e, Fp62.add(a, b))
      };
    },
    // A cyclotomic group is a subgroup of Fp^n defined by
    //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
    // The result of any pairing is in a cyclotomic subgroup
    // https://eprint.iacr.org/2009/565.pdf
    _cyclotomicSquare: opts.Fp12cyclotomicSquare,
    _cyclotomicExp: opts.Fp12cyclotomicExp,
    // https://eprint.iacr.org/2010/354.pdf
    // https://eprint.iacr.org/2009/565.pdf
    finalExponentiate: opts.Fp12finalExponentiate
  };
  return { Fp: Fp3, Fp2: Fp22, Fp6: Fp62, Fp4Square: Fp4Square2, Fp12: Fp122 };
}

// node_modules/@noble/curves/esm/bls12-381.js
var _0n8 = BigInt(0);
var _1n8 = BigInt(1);
var _2n7 = BigInt(2);
var _3n5 = BigInt(3);
var _4n3 = BigInt(4);
var BLS_X = BigInt("0xd201000000010000");
var BLS_X_LEN = bitLen(BLS_X);
var { Fp, Fp2, Fp6, Fp4Square, Fp12 } = tower12({
  // Order of Fp
  ORDER: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  // Finite extension field over irreducible polynominal.
  // Fp(u) / (u² - β) where β = -1
  FP2_NONRESIDUE: [_1n8, _1n8],
  Fp2mulByB: ({ c0, c1 }) => {
    const t0 = Fp.mul(c0, _4n3);
    const t1 = Fp.mul(c1, _4n3);
    return { c0: Fp.sub(t0, t1), c1: Fp.add(t0, t1) };
  },
  // Fp12
  // A cyclotomic group is a subgroup of Fp^n defined by
  //   GΦₙ(p) = {α ∈ Fpⁿ : α^Φₙ(p) = 1}
  // The result of any pairing is in a cyclotomic subgroup
  // https://eprint.iacr.org/2009/565.pdf
  Fp12cyclotomicSquare: ({ c0, c1 }) => {
    const { c0: c0c0, c1: c0c1, c2: c0c2 } = c0;
    const { c0: c1c0, c1: c1c1, c2: c1c2 } = c1;
    const { first: t3, second: t4 } = Fp4Square(c0c0, c1c1);
    const { first: t5, second: t6 } = Fp4Square(c1c0, c0c2);
    const { first: t7, second: t8 } = Fp4Square(c0c1, c1c2);
    const t9 = Fp2.mulByNonresidue(t8);
    return {
      c0: Fp6.create({
        c0: Fp2.add(Fp2.mul(Fp2.sub(t3, c0c0), _2n7), t3),
        // 2 * (T3 - c0c0)  + T3
        c1: Fp2.add(Fp2.mul(Fp2.sub(t5, c0c1), _2n7), t5),
        // 2 * (T5 - c0c1)  + T5
        c2: Fp2.add(Fp2.mul(Fp2.sub(t7, c0c2), _2n7), t7)
      }),
      // 2 * (T7 - c0c2)  + T7
      c1: Fp6.create({
        c0: Fp2.add(Fp2.mul(Fp2.add(t9, c1c0), _2n7), t9),
        // 2 * (T9 + c1c0) + T9
        c1: Fp2.add(Fp2.mul(Fp2.add(t4, c1c1), _2n7), t4),
        // 2 * (T4 + c1c1) + T4
        c2: Fp2.add(Fp2.mul(Fp2.add(t6, c1c2), _2n7), t6)
      })
    };
  },
  Fp12cyclotomicExp(num2, n) {
    let z2 = Fp12.ONE;
    for (let i = BLS_X_LEN - 1; i >= 0; i--) {
      z2 = Fp12._cyclotomicSquare(z2);
      if (bitGet(n, i))
        z2 = Fp12.mul(z2, num2);
    }
    return z2;
  },
  // https://eprint.iacr.org/2010/354.pdf
  // https://eprint.iacr.org/2009/565.pdf
  Fp12finalExponentiate: (num2) => {
    const x = BLS_X;
    const t0 = Fp12.div(Fp12.frobeniusMap(num2, 6), num2);
    const t1 = Fp12.mul(Fp12.frobeniusMap(t0, 2), t0);
    const t2 = Fp12.conjugate(Fp12._cyclotomicExp(t1, x));
    const t3 = Fp12.mul(Fp12.conjugate(Fp12._cyclotomicSquare(t1)), t2);
    const t4 = Fp12.conjugate(Fp12._cyclotomicExp(t3, x));
    const t5 = Fp12.conjugate(Fp12._cyclotomicExp(t4, x));
    const t6 = Fp12.mul(Fp12.conjugate(Fp12._cyclotomicExp(t5, x)), Fp12._cyclotomicSquare(t2));
    const t7 = Fp12.conjugate(Fp12._cyclotomicExp(t6, x));
    const t2_t5_pow_q2 = Fp12.frobeniusMap(Fp12.mul(t2, t5), 2);
    const t4_t1_pow_q3 = Fp12.frobeniusMap(Fp12.mul(t4, t1), 3);
    const t6_t1c_pow_q1 = Fp12.frobeniusMap(Fp12.mul(t6, Fp12.conjugate(t1)), 1);
    const t7_t3c_t1 = Fp12.mul(Fp12.mul(t7, Fp12.conjugate(t3)), t1);
    return Fp12.mul(Fp12.mul(Fp12.mul(t2_t5_pow_q2, t4_t1_pow_q3), t6_t1c_pow_q1), t7_t3c_t1);
  }
});
var Fr = Field(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"));
var isogenyMapG2 = isogenyMap(Fp2, [
  // xNum
  [
    [
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"
    ],
    [
      "0x0",
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"
    ],
    [
      "0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1",
      "0x0"
    ]
  ],
  // xDen
  [
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"
    ],
    [
      "0xc",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ],
  // yNum
  [
    [
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706",
      "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"
    ],
    [
      "0x0",
      "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"
    ],
    [
      "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c",
      "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"
    ],
    [
      "0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10",
      "0x0"
    ]
  ],
  // yDen
  [
    [
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"
    ],
    [
      "0x0",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"
    ],
    [
      "0x12",
      "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"
    ],
    ["0x1", "0x0"]
    // LAST 1
  ]
].map((i) => i.map((pair) => Fp2.fromBigTuple(pair.map(BigInt)))));
var isogenyMapG1 = isogenyMap(Fp, [
  // xNum
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  // xDen
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  // yDen
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j) => BigInt(j))));
var G2_SWU = mapToCurveSimpleSWU(Fp2, {
  A: Fp2.create({ c0: Fp.create(_0n8), c1: Fp.create(BigInt(240)) }),
  // A' = 240 * I
  B: Fp2.create({ c0: Fp.create(BigInt(1012)), c1: Fp.create(BigInt(1012)) }),
  // B' = 1012 * (1 + I)
  Z: Fp2.create({ c0: Fp.create(BigInt(-2)), c1: Fp.create(BigInt(-1)) })
  // Z: -(2 + I)
});
var G1_SWU = mapToCurveSimpleSWU(Fp, {
  A: Fp.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: Fp.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: Fp.create(BigInt(11))
});
var { G2psi, G2psi2 } = psiFrobenius(Fp, Fp2, Fp2.div(Fp2.ONE, Fp2.NONRESIDUE));
var htfDefaults = Object.freeze({
  // DST: a domain separation tag
  // defined in section 2.2.5
  // Use utils.getDSTLabel(), utils.setDSTLabel(value)
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  // p: the characteristic of F
  //    where F is a finite field of characteristic p and order q = p^m
  p: Fp.ORDER,
  // m: the extension degree of F, m >= 1
  //     where F is a finite field of characteristic p and order q = p^m
  m: 2,
  // k: the target security level for the suite in bits
  // defined in section 5.1
  k: 128,
  // option to use a message that has already been processed by
  // expand_message_xmd
  expand: "xmd",
  // Hash functions for: expand_message_xmd is appropriate for use with a
  // wide range of hash functions, including SHA-2, SHA-3, BLAKE2, and others.
  // BBS+ uses blake2: https://github.com/hyperledger/aries-framework-go/issues/2247
  hash: sha256
});
var COMPRESSED_ZERO = setMask(Fp.toBytes(_0n8), { infinity: true, compressed: true });
function parseMask(bytes) {
  bytes = bytes.slice();
  const mask = bytes[0] & 224;
  const compressed = !!(mask >> 7 & 1);
  const infinity = !!(mask >> 6 & 1);
  const sort = !!(mask >> 5 & 1);
  bytes[0] &= 31;
  return { compressed, infinity, sort, value: bytes };
}
function setMask(bytes, mask) {
  if (bytes[0] & 224)
    throw new Error("setMask: non-empty mask");
  if (mask.compressed)
    bytes[0] |= 128;
  if (mask.infinity)
    bytes[0] |= 64;
  if (mask.sort)
    bytes[0] |= 32;
  return bytes;
}
function signatureG1ToRawBytes(point) {
  point.assertValidity();
  const isZero = point.equals(bls12_381.G1.ProjectivePoint.ZERO);
  const { x, y: y2 } = point.toAffine();
  if (isZero)
    return COMPRESSED_ZERO.slice();
  const P = Fp.ORDER;
  const sort = Boolean(y2 * _2n7 / P);
  return setMask(numberToBytesBE(x, Fp.BYTES), { compressed: true, sort });
}
function signatureG2ToRawBytes(point) {
  point.assertValidity();
  const len = Fp.BYTES;
  if (point.equals(bls12_381.G2.ProjectivePoint.ZERO))
    return concatBytes(COMPRESSED_ZERO, numberToBytesBE(_0n8, len));
  const { x, y: y2 } = point.toAffine();
  const { re: x0, im: x1 } = Fp2.reim(x);
  const { re: y0, im: y1 } = Fp2.reim(y2);
  const tmp = y1 > _0n8 ? y1 * _2n7 : y0 * _2n7;
  const sort = Boolean(tmp / Fp.ORDER & _1n8);
  const z2 = x0;
  return concatBytes(setMask(numberToBytesBE(x1, len), { sort, compressed: true }), numberToBytesBE(z2, len));
}
var bls12_381 = bls({
  // Fields
  fields: {
    Fp,
    Fp2,
    Fp6,
    Fp12,
    Fr
  },
  // G1 is the order-q subgroup of E1(Fp) : y² = x³ + 4, #E1(Fp) = h1q, where
  // characteristic; z + (z⁴ - z² + 1)(z - 1)²/3
  G1: {
    Fp,
    // cofactor; (z - 1)²/3
    h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
    // generator's coordinates
    // x = 3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507
    // y = 1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569
    Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
    Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),
    a: Fp.ZERO,
    b: _4n3,
    htfDefaults: { ...htfDefaults, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" },
    wrapPrivateKey: true,
    allowInfinityPoint: true,
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (c, point) => {
      const cubicRootOfUnityModP = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe");
      const phi = new c(Fp.mul(point.px, cubicRootOfUnityModP), point.py, point.pz);
      const xP = point.multiplyUnsafe(BLS_X).negate();
      const u2P = xP.multiplyUnsafe(BLS_X);
      return u2P.equals(phi);
    },
    // Clear cofactor of G1
    // https://eprint.iacr.org/2019/403
    clearCofactor: (_c, point) => {
      return point.multiplyUnsafe(BLS_X).add(point);
    },
    mapToCurve: (scalars) => {
      const { x, y: y2 } = G1_SWU(Fp.create(scalars[0]));
      return isogenyMapG1(x, y2);
    },
    fromBytes: (bytes) => {
      const { compressed, infinity, sort, value } = parseMask(bytes);
      if (value.length === 48 && compressed) {
        const P = Fp.ORDER;
        const compressedValue = bytesToNumberBE(value);
        const x = Fp.create(compressedValue & Fp.MASK);
        if (infinity) {
          if (x !== _0n8)
            throw new Error("G1: non-empty compressed point at infinity");
          return { x: _0n8, y: _0n8 };
        }
        const right = Fp.add(Fp.pow(x, _3n5), Fp.create(bls12_381.params.G1b));
        let y2 = Fp.sqrt(right);
        if (!y2)
          throw new Error("invalid compressed G1 point");
        if (y2 * _2n7 / P !== BigInt(sort))
          y2 = Fp.neg(y2);
        return { x: Fp.create(x), y: Fp.create(y2) };
      } else if (value.length === 96 && !compressed) {
        const x = bytesToNumberBE(value.subarray(0, Fp.BYTES));
        const y2 = bytesToNumberBE(value.subarray(Fp.BYTES));
        if (infinity) {
          if (x !== _0n8 || y2 !== _0n8)
            throw new Error("G1: non-empty point at infinity");
          return bls12_381.G1.ProjectivePoint.ZERO.toAffine();
        }
        return { x: Fp.create(x), y: Fp.create(y2) };
      } else {
        throw new Error("invalid point G1, expected 48/96 bytes");
      }
    },
    toBytes: (c, point, isCompressed) => {
      const isZero = point.equals(c.ZERO);
      const { x, y: y2 } = point.toAffine();
      if (isCompressed) {
        if (isZero)
          return COMPRESSED_ZERO.slice();
        const P = Fp.ORDER;
        const sort = Boolean(y2 * _2n7 / P);
        return setMask(numberToBytesBE(x, Fp.BYTES), { compressed: true, sort });
      } else {
        if (isZero) {
          const x2 = concatBytes(new Uint8Array([64]), new Uint8Array(2 * Fp.BYTES - 1));
          return x2;
        } else {
          return concatBytes(numberToBytesBE(x, Fp.BYTES), numberToBytesBE(y2, Fp.BYTES));
        }
      }
    },
    ShortSignature: {
      fromHex(hex2) {
        const { infinity, sort, value } = parseMask(ensureBytes("signatureHex", hex2, 48));
        const P = Fp.ORDER;
        const compressedValue = bytesToNumberBE(value);
        if (infinity)
          return bls12_381.G1.ProjectivePoint.ZERO;
        const x = Fp.create(compressedValue & Fp.MASK);
        const right = Fp.add(Fp.pow(x, _3n5), Fp.create(bls12_381.params.G1b));
        let y2 = Fp.sqrt(right);
        if (!y2)
          throw new Error("invalid compressed G1 point");
        const aflag = BigInt(sort);
        if (y2 * _2n7 / P !== aflag)
          y2 = Fp.neg(y2);
        const point = bls12_381.G1.ProjectivePoint.fromAffine({ x, y: y2 });
        point.assertValidity();
        return point;
      },
      toRawBytes(point) {
        return signatureG1ToRawBytes(point);
      },
      toHex(point) {
        return bytesToHex(signatureG1ToRawBytes(point));
      }
    }
  },
  // G2 is the order-q subgroup of E2(Fp²) : y² = x³+4(1+√−1),
  // where Fp2 is Fp[√−1]/(x2+1). #E2(Fp2 ) = h2q, where
  // G² - 1
  // h2q
  G2: {
    Fp: Fp2,
    // cofactor
    h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
    Gx: Fp2.fromBigTuple([
      BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),
      BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")
    ]),
    // y =
    // 927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582,
    // 1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905
    Gy: Fp2.fromBigTuple([
      BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),
      BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")
    ]),
    a: Fp2.ZERO,
    b: Fp2.fromBigTuple([_4n3, _4n3]),
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...htfDefaults },
    wrapPrivateKey: true,
    allowInfinityPoint: true,
    mapToCurve: (scalars) => {
      const { x, y: y2 } = G2_SWU(Fp2.fromBigTuple(scalars));
      return isogenyMapG2(x, y2);
    },
    // Checks is the point resides in prime-order subgroup.
    // point.isTorsionFree() should return true for valid points
    // It returns false for shitty points.
    // https://eprint.iacr.org/2021/1130.pdf
    isTorsionFree: (c, P) => {
      return P.multiplyUnsafe(BLS_X).negate().equals(G2psi(c, P));
    },
    // Maps the point into the prime-order subgroup G2.
    // clear_cofactor_bls12381_g2 from cfrg-hash-to-curve-11
    // https://eprint.iacr.org/2017/419.pdf
    // prettier-ignore
    clearCofactor: (c, P) => {
      const x = BLS_X;
      let t1 = P.multiplyUnsafe(x).negate();
      let t2 = G2psi(c, P);
      let t3 = P.double();
      t3 = G2psi2(c, t3);
      t3 = t3.subtract(t2);
      t2 = t1.add(t2);
      t2 = t2.multiplyUnsafe(x).negate();
      t3 = t3.add(t2);
      t3 = t3.subtract(t1);
      const Q = t3.subtract(P);
      return Q;
    },
    fromBytes: (bytes) => {
      const { compressed, infinity, sort, value } = parseMask(bytes);
      if (!compressed && !infinity && sort || // 00100000
      !compressed && infinity && sort || // 01100000
      sort && infinity && compressed) {
        throw new Error("invalid encoding flag: " + (bytes[0] & 224));
      }
      const L = Fp.BYTES;
      const slc = (b, from29, to3) => bytesToNumberBE(b.slice(from29, to3));
      if (value.length === 96 && compressed) {
        const b = bls12_381.params.G2b;
        const P = Fp.ORDER;
        if (infinity) {
          if (value.reduce((p, c) => p !== 0 ? c + 1 : c, 0) > 0) {
            throw new Error("invalid compressed G2 point");
          }
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        }
        const x_1 = slc(value, 0, L);
        const x_0 = slc(value, L, 2 * L);
        const x = Fp2.create({ c0: Fp.create(x_0), c1: Fp.create(x_1) });
        const right = Fp2.add(Fp2.pow(x, _3n5), b);
        let y2 = Fp2.sqrt(right);
        const Y_bit = y2.c1 === _0n8 ? y2.c0 * _2n7 / P : y2.c1 * _2n7 / P ? _1n8 : _0n8;
        y2 = sort && Y_bit > 0 ? y2 : Fp2.neg(y2);
        return { x, y: y2 };
      } else if (value.length === 192 && !compressed) {
        if (infinity) {
          if (value.reduce((p, c) => p !== 0 ? c + 1 : c, 0) > 0) {
            throw new Error("invalid uncompressed G2 point");
          }
          return { x: Fp2.ZERO, y: Fp2.ZERO };
        }
        const x1 = slc(value, 0, L);
        const x0 = slc(value, L, 2 * L);
        const y1 = slc(value, 2 * L, 3 * L);
        const y0 = slc(value, 3 * L, 4 * L);
        return { x: Fp2.fromBigTuple([x0, x1]), y: Fp2.fromBigTuple([y0, y1]) };
      } else {
        throw new Error("invalid point G2, expected 96/192 bytes");
      }
    },
    toBytes: (c, point, isCompressed) => {
      const { BYTES: len, ORDER: P } = Fp;
      const isZero = point.equals(c.ZERO);
      const { x, y: y2 } = point.toAffine();
      if (isCompressed) {
        if (isZero)
          return concatBytes(COMPRESSED_ZERO, numberToBytesBE(_0n8, len));
        const flag = Boolean(y2.c1 === _0n8 ? y2.c0 * _2n7 / P : y2.c1 * _2n7 / P);
        return concatBytes(setMask(numberToBytesBE(x.c1, len), { compressed: true, sort: flag }), numberToBytesBE(x.c0, len));
      } else {
        if (isZero)
          return concatBytes(new Uint8Array([64]), new Uint8Array(4 * len - 1));
        const { re: x0, im: x1 } = Fp2.reim(x);
        const { re: y0, im: y1 } = Fp2.reim(y2);
        return concatBytes(numberToBytesBE(x1, len), numberToBytesBE(x0, len), numberToBytesBE(y1, len), numberToBytesBE(y0, len));
      }
    },
    Signature: {
      // TODO: Optimize, it's very slow because of sqrt.
      fromHex(hex2) {
        const { infinity, sort, value } = parseMask(ensureBytes("signatureHex", hex2));
        const P = Fp.ORDER;
        const half = value.length / 2;
        if (half !== 48 && half !== 96)
          throw new Error("invalid compressed signature length, must be 96 or 192");
        const z1 = bytesToNumberBE(value.slice(0, half));
        const z2 = bytesToNumberBE(value.slice(half));
        if (infinity)
          return bls12_381.G2.ProjectivePoint.ZERO;
        const x1 = Fp.create(z1 & Fp.MASK);
        const x2 = Fp.create(z2);
        const x = Fp2.create({ c0: x2, c1: x1 });
        const y2 = Fp2.add(Fp2.pow(x, _3n5), bls12_381.params.G2b);
        let y3 = Fp2.sqrt(y2);
        if (!y3)
          throw new Error("Failed to find a square root");
        const { re: y0, im: y1 } = Fp2.reim(y3);
        const aflag1 = BigInt(sort);
        const isGreater = y1 > _0n8 && y1 * _2n7 / P !== aflag1;
        const isZero = y1 === _0n8 && y0 * _2n7 / P !== aflag1;
        if (isGreater || isZero)
          y3 = Fp2.neg(y3);
        const point = bls12_381.G2.ProjectivePoint.fromAffine({ x, y: y3 });
        point.assertValidity();
        return point;
      },
      toRawBytes(point) {
        return signatureG2ToRawBytes(point);
      },
      toHex(point) {
        return bytesToHex(signatureG2ToRawBytes(point));
      }
    }
  },
  params: {
    ateLoopSize: BLS_X,
    // The BLS parameter x for BLS12-381
    r: Fr.ORDER,
    // order; z⁴ − z² + 1; CURVE.n from other curves
    xNegative: true,
    twistType: "multiplicative"
  },
  htfDefaults,
  hash: sha256,
  randomBytes
});

// node_modules/ox/_esm/core/Bls.js
var noble = bls12_381;
function aggregate(points) {
  var _a;
  const group = typeof ((_a = points[0]) == null ? void 0 : _a.x) === "bigint" ? bls12_381.G1 : bls12_381.G2;
  const point = points.reduce((acc, point2) => acc.add(new group.ProjectivePoint(point2.x, point2.y, point2.z)), group.ProjectivePoint.ZERO);
  return {
    x: point.px,
    y: point.py,
    z: point.pz
  };
}
function getPublicKey(options) {
  const { privateKey, size: size4 = "short-key:long-sig" } = options;
  const group = size4 === "short-key:long-sig" ? bls12_381.G1 : bls12_381.G2;
  const { px, py, pz } = group.ProjectivePoint.fromPrivateKey(from2(privateKey).slice(2));
  return { x: px, y: py, z: pz };
}
function randomPrivateKey(options = {}) {
  const { as = "Hex" } = options;
  const bytes = bls12_381.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function sign(options) {
  const { payload, privateKey, suite, size: size4 = "short-key:long-sig" } = options;
  const payloadGroup = size4 === "short-key:long-sig" ? bls12_381.G2 : bls12_381.G1;
  const payloadPoint = payloadGroup.hashToCurve(from(payload), suite ? { DST: fromString(suite) } : void 0);
  const privateKeyGroup = size4 === "short-key:long-sig" ? bls12_381.G1 : bls12_381.G2;
  const signature = payloadPoint.multiply(privateKeyGroup.normPrivateKeyToScalar(privateKey.slice(2)));
  return {
    x: signature.px,
    y: signature.py,
    z: signature.pz
  };
}
function verify(options) {
  const { payload, suite } = options;
  const publicKey = options.publicKey;
  const signature = options.signature;
  const isShortSig = typeof signature.x === "bigint";
  const group = isShortSig ? bls12_381.G1 : bls12_381.G2;
  const payloadPoint = group.hashToCurve(from(payload), suite ? { DST: fromString(suite) } : void 0);
  const shortSigPairing = () => bls12_381.pairingBatch([
    {
      g1: payloadPoint,
      g2: new bls12_381.G2.ProjectivePoint(publicKey.x, publicKey.y, publicKey.z)
    },
    {
      g1: new bls12_381.G1.ProjectivePoint(signature.x, signature.y, signature.z),
      g2: bls12_381.G2.ProjectivePoint.BASE.negate()
    }
  ]);
  const longSigPairing = () => bls12_381.pairingBatch([
    {
      g1: new bls12_381.G1.ProjectivePoint(publicKey.x, publicKey.y, publicKey.z).negate(),
      g2: payloadPoint
    },
    {
      g1: bls12_381.G1.ProjectivePoint.BASE,
      g2: new bls12_381.G2.ProjectivePoint(signature.x, signature.y, signature.z)
    }
  ]);
  return bls12_381.fields.Fp12.eql(isShortSig ? shortSigPairing() : longSigPairing(), bls12_381.fields.Fp12.ONE);
}

// node_modules/ox/_esm/core/BlsPoint.js
var BlsPoint_exports = {};
__export(BlsPoint_exports, {
  fromBytes: () => fromBytes7,
  fromHex: () => fromHex7,
  toBytes: () => toBytes9,
  toHex: () => toHex8
});
function toBytes9(point) {
  const group = typeof point.z === "bigint" ? bls12_381.G1 : bls12_381.G2;
  return new group.ProjectivePoint(point.x, point.y, point.z).toRawBytes();
}
function toHex8(point) {
  return fromBytes(toBytes9(point));
}
function fromBytes7(bytes) {
  const group = bytes.length === 48 ? bls12_381.G1 : bls12_381.G2;
  const point = group.ProjectivePoint.fromHex(bytes);
  return {
    x: point.px,
    y: point.py,
    z: point.pz
  };
}
function fromHex7(hex2, group) {
  return fromBytes7(toBytes(hex2), group);
}

// node_modules/ox/_esm/core/ContractAddress.js
var ContractAddress_exports = {};
__export(ContractAddress_exports, {
  from: () => from18,
  fromCreate: () => fromCreate,
  fromCreate2: () => fromCreate2
});
function from18(options) {
  if (options.salt)
    return fromCreate2(options);
  return fromCreate(options);
}
function fromCreate(options) {
  const from29 = fromHex(from5(options.from));
  let nonce = fromNumber(options.nonce);
  if (nonce[0] === 0)
    nonce = new Uint8Array([]);
  return from5(`0x${keccak256(fromBytes3([from29, nonce], { as: "Hex" })).slice(26)}`);
}
function fromCreate2(options) {
  const from29 = fromHex(from5(options.from));
  const salt = padLeft(validate(options.salt) ? options.salt : fromHex(options.salt), 32);
  const bytecodeHash = (() => {
    if ("bytecodeHash" in options) {
      if (validate(options.bytecodeHash))
        return options.bytecodeHash;
      return fromHex(options.bytecodeHash);
    }
    return keccak256(options.bytecode, { as: "Bytes" });
  })();
  return from5(slice2(keccak256(concat(fromHex("0xff"), from29, salt, bytecodeHash), { as: "Hex" }), 12));
}

// node_modules/ox/_esm/core/Filter.js
var Filter_exports = {};
__export(Filter_exports, {
  fromRpc: () => fromRpc6,
  toRpc: () => toRpc6
});
function fromRpc6(filter) {
  const { fromBlock, toBlock } = filter;
  return {
    ...filter,
    ...fromBlock && {
      fromBlock: validate2(fromBlock, { strict: false }) ? BigInt(fromBlock) : fromBlock
    },
    ...toBlock && {
      toBlock: validate2(toBlock, { strict: false }) ? BigInt(toBlock) : toBlock
    }
  };
}
function toRpc6(filter) {
  const { address, topics, fromBlock, toBlock } = filter;
  return {
    ...address && { address },
    ...topics && { topics },
    ...typeof fromBlock !== "undefined" ? {
      fromBlock: typeof fromBlock === "bigint" ? fromNumber2(fromBlock) : fromBlock
    } : {},
    ...typeof toBlock !== "undefined" ? {
      toBlock: typeof toBlock === "bigint" ? fromNumber2(toBlock) : toBlock
    } : {}
  };
}

// node_modules/ox/_esm/core/HdKey.js
var HdKey_exports = {};
__export(HdKey_exports, {
  fromExtendedKey: () => fromExtendedKey,
  fromJson: () => fromJson,
  fromSeed: () => fromSeed,
  path: () => path
});

// node_modules/@noble/hashes/esm/sha512.js
var [SHA512_Kh, SHA512_Kl] = (() => u64_default.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_W_H = new Uint32Array(80);
var SHA512_W_L = new Uint32Array(80);
var SHA512 = class extends HashMD {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
      const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
      const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
      const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
      const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
      const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64_default.add3L(T1l, sigma0l, MAJl);
      Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var SHA512_224 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 2352822216 | 0;
    this.Al = 424955298 | 0;
    this.Bh = 1944164710 | 0;
    this.Bl = 2312950998 | 0;
    this.Ch = 502970286 | 0;
    this.Cl = 855612546 | 0;
    this.Dh = 1738396948 | 0;
    this.Dl = 1479516111 | 0;
    this.Eh = 258812777 | 0;
    this.El = 2077511080 | 0;
    this.Fh = 2011393907 | 0;
    this.Fl = 79989058 | 0;
    this.Gh = 1067287976 | 0;
    this.Gl = 1780299464 | 0;
    this.Hh = 286451373 | 0;
    this.Hl = 2446758561 | 0;
    this.outputLen = 28;
  }
};
var SHA512_256 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 573645204 | 0;
    this.Al = 4230739756 | 0;
    this.Bh = 2673172387 | 0;
    this.Bl = 3360449730 | 0;
    this.Ch = 596883563 | 0;
    this.Cl = 1867755857 | 0;
    this.Dh = 2520282905 | 0;
    this.Dl = 1497426621 | 0;
    this.Eh = 2519219938 | 0;
    this.El = 2827943907 | 0;
    this.Fh = 3193839141 | 0;
    this.Fl = 1401305490 | 0;
    this.Gh = 721525244 | 0;
    this.Gl = 746961066 | 0;
    this.Hh = 246885852 | 0;
    this.Hl = 2177182882 | 0;
    this.outputLen = 32;
  }
};
var SHA384 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 3418070365 | 0;
    this.Al = 3238371032 | 0;
    this.Bh = 1654270250 | 0;
    this.Bl = 914150663 | 0;
    this.Ch = 2438529370 | 0;
    this.Cl = 812702999 | 0;
    this.Dh = 355462360 | 0;
    this.Dl = 4144912697 | 0;
    this.Eh = 1731405415 | 0;
    this.El = 4290775857 | 0;
    this.Fh = 2394180231 | 0;
    this.Fl = 1750603025 | 0;
    this.Gh = 3675008525 | 0;
    this.Gl = 1694076839 | 0;
    this.Hh = 1203062813 | 0;
    this.Hl = 3204075428 | 0;
    this.outputLen = 48;
  }
};
var sha512 = wrapConstructor(() => new SHA512());
var sha512_224 = wrapConstructor(() => new SHA512_224());
var sha512_256 = wrapConstructor(() => new SHA512_256());
var sha384 = wrapConstructor(() => new SHA384());

// node_modules/@scure/base/lib/esm/index.js
function isBytes2(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function isArrayOf(isString, arr) {
  if (!Array.isArray(arr))
    return false;
  if (arr.length === 0)
    return true;
  if (isString) {
    return arr.every((item) => typeof item === "string");
  } else {
    return arr.every((item) => Number.isSafeInteger(item));
  }
}
function afn(input) {
  if (typeof input !== "function")
    throw new Error("function expected");
  return true;
}
function astr(label, input) {
  if (typeof input !== "string")
    throw new Error(`${label}: string expected`);
  return true;
}
function anumber2(n) {
  if (!Number.isSafeInteger(n))
    throw new Error(`invalid integer: ${n}`);
}
function aArr(input) {
  if (!Array.isArray(input))
    throw new Error("array expected");
}
function astrArr(label, input) {
  if (!isArrayOf(true, input))
    throw new Error(`${label}: array of strings expected`);
}
function anumArr(label, input) {
  if (!isArrayOf(false, input))
    throw new Error(`${label}: array of numbers expected`);
}
function chain(...args) {
  const id = (a) => a;
  const wrap = (a, b) => (c) => a(b(c));
  const encode9 = args.map((x) => x.encode).reduceRight(wrap, id);
  const decode5 = args.map((x) => x.decode).reduce(wrap, id);
  return { encode: encode9, decode: decode5 };
}
function alphabet(letters) {
  const lettersA = typeof letters === "string" ? letters.split("") : letters;
  const len = lettersA.length;
  astrArr("alphabet", lettersA);
  const indexes = new Map(lettersA.map((l, i) => [l, i]));
  return {
    encode: (digits) => {
      aArr(digits);
      return digits.map((i) => {
        if (!Number.isSafeInteger(i) || i < 0 || i >= len)
          throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
        return lettersA[i];
      });
    },
    decode: (input) => {
      aArr(input);
      return input.map((letter) => {
        astr("alphabet.decode", letter);
        const i = indexes.get(letter);
        if (i === void 0)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
        return i;
      });
    }
  };
}
function join(separator = "") {
  astr("join", separator);
  return {
    encode: (from29) => {
      astrArr("join.decode", from29);
      return from29.join(separator);
    },
    decode: (to3) => {
      astr("join.decode", to3);
      return to3.split(separator);
    }
  };
}
function padding(bits, chr = "=") {
  anumber2(bits);
  astr("padding", chr);
  return {
    encode(data) {
      astrArr("padding.encode", data);
      while (data.length * bits % 8)
        data.push(chr);
      return data;
    },
    decode(input) {
      astrArr("padding.decode", input);
      let end = input.length;
      if (end * bits % 8)
        throw new Error("padding: invalid, string should have whole number of bytes");
      for (; end > 0 && input[end - 1] === chr; end--) {
        const last = end - 1;
        const byte = last * bits;
        if (byte % 8 === 0)
          throw new Error("padding: invalid, string has too much padding");
      }
      return input.slice(0, end);
    }
  };
}
function normalize(fn) {
  afn(fn);
  return { encode: (from29) => from29, decode: (to3) => fn(to3) };
}
function convertRadix(data, from29, to3) {
  if (from29 < 2)
    throw new Error(`convertRadix: invalid from=${from29}, base cannot be less than 2`);
  if (to3 < 2)
    throw new Error(`convertRadix: invalid to=${to3}, base cannot be less than 2`);
  aArr(data);
  if (!data.length)
    return [];
  let pos = 0;
  const res = [];
  const digits = Array.from(data, (d) => {
    anumber2(d);
    if (d < 0 || d >= from29)
      throw new Error(`invalid integer: ${d}`);
    return d;
  });
  const dlen = digits.length;
  while (true) {
    let carry = 0;
    let done = true;
    for (let i = pos; i < dlen; i++) {
      const digit = digits[i];
      const fromCarry = from29 * carry;
      const digitBase = fromCarry + digit;
      if (!Number.isSafeInteger(digitBase) || fromCarry / from29 !== carry || digitBase - digit !== fromCarry) {
        throw new Error("convertRadix: carry overflow");
      }
      const div = digitBase / to3;
      carry = digitBase % to3;
      const rounded = Math.floor(div);
      digits[i] = rounded;
      if (!Number.isSafeInteger(rounded) || rounded * to3 + carry !== digitBase)
        throw new Error("convertRadix: carry overflow");
      if (!done)
        continue;
      else if (!rounded)
        pos = i;
      else
        done = false;
    }
    res.push(carry);
    if (done)
      break;
  }
  for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
    res.push(0);
  return res.reverse();
}
var gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
var radix2carry = (from29, to3) => from29 + (to3 - gcd(from29, to3));
var powers = (() => {
  let res = [];
  for (let i = 0; i < 40; i++)
    res.push(2 ** i);
  return res;
})();
function convertRadix2(data, from29, to3, padding2) {
  aArr(data);
  if (from29 <= 0 || from29 > 32)
    throw new Error(`convertRadix2: wrong from=${from29}`);
  if (to3 <= 0 || to3 > 32)
    throw new Error(`convertRadix2: wrong to=${to3}`);
  if (radix2carry(from29, to3) > 32) {
    throw new Error(`convertRadix2: carry overflow from=${from29} to=${to3} carryBits=${radix2carry(from29, to3)}`);
  }
  let carry = 0;
  let pos = 0;
  const max = powers[from29];
  const mask = powers[to3] - 1;
  const res = [];
  for (const n of data) {
    anumber2(n);
    if (n >= max)
      throw new Error(`convertRadix2: invalid data word=${n} from=${from29}`);
    carry = carry << from29 | n;
    if (pos + from29 > 32)
      throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from29}`);
    pos += from29;
    for (; pos >= to3; pos -= to3)
      res.push((carry >> pos - to3 & mask) >>> 0);
    const pow3 = powers[pos];
    if (pow3 === void 0)
      throw new Error("invalid carry");
    carry &= pow3 - 1;
  }
  carry = carry << to3 - pos & mask;
  if (!padding2 && pos >= from29)
    throw new Error("Excess padding");
  if (!padding2 && carry > 0)
    throw new Error(`Non-zero padding: ${carry}`);
  if (padding2 && pos > 0)
    res.push(carry >>> 0);
  return res;
}
function radix(num2) {
  anumber2(num2);
  const _256 = 2 ** 8;
  return {
    encode: (bytes) => {
      if (!isBytes2(bytes))
        throw new Error("radix.encode input should be Uint8Array");
      return convertRadix(Array.from(bytes), _256, num2);
    },
    decode: (digits) => {
      anumArr("radix.decode", digits);
      return Uint8Array.from(convertRadix(digits, num2, _256));
    }
  };
}
function radix2(bits, revPadding = false) {
  anumber2(bits);
  if (bits <= 0 || bits > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (bytes) => {
      if (!isBytes2(bytes))
        throw new Error("radix2.encode input should be Uint8Array");
      return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
    },
    decode: (digits) => {
      anumArr("radix2.decode", digits);
      return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
    }
  };
}
function unsafeWrapper(fn) {
  afn(fn);
  return function(...args) {
    try {
      return fn.apply(null, args);
    } catch (e) {
    }
  };
}
function checksum3(len, fn) {
  anumber2(len);
  afn(fn);
  return {
    encode(data) {
      if (!isBytes2(data))
        throw new Error("checksum.encode: input should be Uint8Array");
      const sum = fn(data).slice(0, len);
      const res = new Uint8Array(data.length + len);
      res.set(data);
      res.set(sum, data.length);
      return res;
    },
    decode(data) {
      if (!isBytes2(data))
        throw new Error("checksum.decode: input should be Uint8Array");
      const payload = data.slice(0, -len);
      const oldChecksum = data.slice(-len);
      const newChecksum = fn(payload).slice(0, len);
      for (let i = 0; i < len; i++)
        if (newChecksum[i] !== oldChecksum[i])
          throw new Error("Invalid checksum");
      return payload;
    }
  };
}
var utils = {
  alphabet,
  chain,
  checksum: checksum3,
  convertRadix,
  convertRadix2,
  radix,
  radix2,
  join,
  padding
};
var base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
var base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
var base32nopad = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), join(""));
var base32hex = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
var base32hexnopad = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), join(""));
var base32crockford = chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
var base64 = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
var base64nopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), join(""));
var base64url = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
var base64urlnopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), join(""));
var genBase58 = (abc) => chain(radix(58), alphabet(abc), join(""));
var base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var base58flickr = genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
var base58xrp = genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
var createBase58check = (sha2563) => chain(checksum3(4, (data) => sha2563(sha2563(data))), base58);
var BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
function bech32Polymod(pre) {
  const b = pre >> 25;
  let chk = (pre & 33554431) << 5;
  for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
    if ((b >> i & 1) === 1)
      chk ^= POLYMOD_GENERATORS[i];
  }
  return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
  const len = prefix.length;
  let chk = 1;
  for (let i = 0; i < len; i++) {
    const c = prefix.charCodeAt(i);
    if (c < 33 || c > 126)
      throw new Error(`Invalid prefix (${prefix})`);
    chk = bech32Polymod(chk) ^ c >> 5;
  }
  chk = bech32Polymod(chk);
  for (let i = 0; i < len; i++)
    chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
  for (let v of words)
    chk = bech32Polymod(chk) ^ v;
  for (let i = 0; i < 6; i++)
    chk = bech32Polymod(chk);
  chk ^= encodingConst;
  return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
}
function genBech32(encoding) {
  const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
  const _words = radix2(5);
  const fromWords = _words.decode;
  const toWords = _words.encode;
  const fromWordsUnsafe = unsafeWrapper(fromWords);
  function encode9(prefix, words, limit = 90) {
    astr("bech32.encode prefix", prefix);
    if (isBytes2(words))
      words = Array.from(words);
    anumArr("bech32.encode", words);
    const plen = prefix.length;
    if (plen === 0)
      throw new TypeError(`Invalid prefix length ${plen}`);
    const actualLength = plen + 7 + words.length;
    if (limit !== false && actualLength > limit)
      throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
    const lowered = prefix.toLowerCase();
    const sum = bechChecksum(lowered, words, ENCODING_CONST);
    return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
  }
  function decode5(str, limit = 90) {
    astr("bech32.decode input", str);
    const slen = str.length;
    if (slen < 8 || limit !== false && slen > limit)
      throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
    const lowered = str.toLowerCase();
    if (str !== lowered && str !== str.toUpperCase())
      throw new Error(`String must be lowercase or uppercase`);
    const sepIndex = lowered.lastIndexOf("1");
    if (sepIndex === 0 || sepIndex === -1)
      throw new Error(`Letter "1" must be present between prefix and data only`);
    const prefix = lowered.slice(0, sepIndex);
    const data = lowered.slice(sepIndex + 1);
    if (data.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const words = BECH_ALPHABET.decode(data).slice(0, -6);
    const sum = bechChecksum(prefix, words, ENCODING_CONST);
    if (!data.endsWith(sum))
      throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
    return { prefix, words };
  }
  const decodeUnsafe = unsafeWrapper(decode5);
  function decodeToBytes(str) {
    const { prefix, words } = decode5(str, false);
    return { prefix, words, bytes: fromWords(words) };
  }
  function encodeFromBytes(prefix, bytes) {
    return encode9(prefix, toWords(bytes));
  }
  return {
    encode: encode9,
    decode: decode5,
    encodeFromBytes,
    decodeToBytes,
    decodeUnsafe,
    fromWords,
    fromWordsUnsafe,
    toWords
  };
}
var bech32 = genBech32("bech32");
var bech32m = genBech32("bech32m");
var hex = chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s) => {
  if (typeof s !== "string" || s.length % 2 !== 0)
    throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
  return s.toLowerCase();
}));

// node_modules/ox/node_modules/@scure/bip32/lib/esm/index.js
var Point2 = secp256k1.ProjectivePoint;
var base58check = createBase58check(sha256);
function bytesToNumber(bytes) {
  abytes2(bytes);
  const h = bytes.length === 0 ? "0" : bytesToHex2(bytes);
  return BigInt("0x" + h);
}
function numberToBytes(num2) {
  if (typeof num2 !== "bigint")
    throw new Error("bigint expected");
  return hexToBytes2(num2.toString(16).padStart(64, "0"));
}
var MASTER_SECRET = utf8ToBytes2("Bitcoin seed");
var BITCOIN_VERSIONS = { private: 76066276, public: 76067358 };
var HARDENED_OFFSET = 2147483648;
var hash160 = (data) => ripemd160(sha256(data));
var fromU32 = (data) => createView(data).getUint32(0, false);
var toU32 = (n) => {
  if (!Number.isSafeInteger(n) || n < 0 || n > 2 ** 32 - 1) {
    throw new Error("invalid number, should be from 0 to 2**32-1, got " + n);
  }
  const buf = new Uint8Array(4);
  createView(buf).setUint32(0, n, false);
  return buf;
};
var HDKey = class _HDKey {
  get fingerprint() {
    if (!this.pubHash) {
      throw new Error("No publicKey set!");
    }
    return fromU32(this.pubHash);
  }
  get identifier() {
    return this.pubHash;
  }
  get pubKeyHash() {
    return this.pubHash;
  }
  get privateKey() {
    return this.privKeyBytes || null;
  }
  get publicKey() {
    return this.pubKey || null;
  }
  get privateExtendedKey() {
    const priv = this.privateKey;
    if (!priv) {
      throw new Error("No private key");
    }
    return base58check.encode(this.serialize(this.versions.private, concatBytes2(new Uint8Array([0]), priv)));
  }
  get publicExtendedKey() {
    if (!this.pubKey) {
      throw new Error("No public key");
    }
    return base58check.encode(this.serialize(this.versions.public, this.pubKey));
  }
  static fromMasterSeed(seed, versions = BITCOIN_VERSIONS) {
    abytes2(seed);
    if (8 * seed.length < 128 || 8 * seed.length > 512) {
      throw new Error("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got " + seed.length);
    }
    const I = hmac(sha512, MASTER_SECRET, seed);
    return new _HDKey({
      versions,
      chainCode: I.slice(32),
      privateKey: I.slice(0, 32)
    });
  }
  static fromExtendedKey(base58key, versions = BITCOIN_VERSIONS) {
    const keyBuffer = base58check.decode(base58key);
    const keyView = createView(keyBuffer);
    const version = keyView.getUint32(0, false);
    const opt = {
      versions,
      depth: keyBuffer[4],
      parentFingerprint: keyView.getUint32(5, false),
      index: keyView.getUint32(9, false),
      chainCode: keyBuffer.slice(13, 45)
    };
    const key = keyBuffer.slice(45);
    const isPriv = key[0] === 0;
    if (version !== versions[isPriv ? "private" : "public"]) {
      throw new Error("Version mismatch");
    }
    if (isPriv) {
      return new _HDKey({ ...opt, privateKey: key.slice(1) });
    } else {
      return new _HDKey({ ...opt, publicKey: key });
    }
  }
  static fromJSON(json) {
    return _HDKey.fromExtendedKey(json.xpriv);
  }
  constructor(opt) {
    this.depth = 0;
    this.index = 0;
    this.chainCode = null;
    this.parentFingerprint = 0;
    if (!opt || typeof opt !== "object") {
      throw new Error("HDKey.constructor must not be called directly");
    }
    this.versions = opt.versions || BITCOIN_VERSIONS;
    this.depth = opt.depth || 0;
    this.chainCode = opt.chainCode || null;
    this.index = opt.index || 0;
    this.parentFingerprint = opt.parentFingerprint || 0;
    if (!this.depth) {
      if (this.parentFingerprint || this.index) {
        throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");
      }
    }
    if (opt.publicKey && opt.privateKey) {
      throw new Error("HDKey: publicKey and privateKey at same time.");
    }
    if (opt.privateKey) {
      if (!secp256k1.utils.isValidPrivateKey(opt.privateKey)) {
        throw new Error("Invalid private key");
      }
      this.privKey = typeof opt.privateKey === "bigint" ? opt.privateKey : bytesToNumber(opt.privateKey);
      this.privKeyBytes = numberToBytes(this.privKey);
      this.pubKey = secp256k1.getPublicKey(opt.privateKey, true);
    } else if (opt.publicKey) {
      this.pubKey = Point2.fromHex(opt.publicKey).toRawBytes(true);
    } else {
      throw new Error("HDKey: no public or private key provided");
    }
    this.pubHash = hash160(this.pubKey);
  }
  derive(path2) {
    if (!/^[mM]'?/.test(path2)) {
      throw new Error('Path must start with "m" or "M"');
    }
    if (/^[mM]'?$/.test(path2)) {
      return this;
    }
    const parts = path2.replace(/^[mM]'?\//, "").split("/");
    let child = this;
    for (const c of parts) {
      const m = /^(\d+)('?)$/.exec(c);
      const m1 = m && m[1];
      if (!m || m.length !== 3 || typeof m1 !== "string")
        throw new Error("invalid child index: " + c);
      let idx = +m1;
      if (!Number.isSafeInteger(idx) || idx >= HARDENED_OFFSET) {
        throw new Error("Invalid index");
      }
      if (m[2] === "'") {
        idx += HARDENED_OFFSET;
      }
      child = child.deriveChild(idx);
    }
    return child;
  }
  deriveChild(index2) {
    if (!this.pubKey || !this.chainCode) {
      throw new Error("No publicKey or chainCode set");
    }
    let data = toU32(index2);
    if (index2 >= HARDENED_OFFSET) {
      const priv = this.privateKey;
      if (!priv) {
        throw new Error("Could not derive hardened child key");
      }
      data = concatBytes2(new Uint8Array([0]), priv, data);
    } else {
      data = concatBytes2(this.pubKey, data);
    }
    const I = hmac(sha512, this.chainCode, data);
    const childTweak = bytesToNumber(I.slice(0, 32));
    const chainCode = I.slice(32);
    if (!secp256k1.utils.isValidPrivateKey(childTweak)) {
      throw new Error("Tweak bigger than curve order");
    }
    const opt = {
      versions: this.versions,
      chainCode,
      depth: this.depth + 1,
      parentFingerprint: this.fingerprint,
      index: index2
    };
    try {
      if (this.privateKey) {
        const added = mod(this.privKey + childTweak, secp256k1.CURVE.n);
        if (!secp256k1.utils.isValidPrivateKey(added)) {
          throw new Error("The tweak was out of range or the resulted private key is invalid");
        }
        opt.privateKey = added;
      } else {
        const added = Point2.fromHex(this.pubKey).add(Point2.fromPrivateKey(childTweak));
        if (added.equals(Point2.ZERO)) {
          throw new Error("The tweak was equal to negative P, which made the result key invalid");
        }
        opt.publicKey = added.toRawBytes(true);
      }
      return new _HDKey(opt);
    } catch (err) {
      return this.deriveChild(index2 + 1);
    }
  }
  sign(hash7) {
    if (!this.privateKey) {
      throw new Error("No privateKey set!");
    }
    abytes2(hash7, 32);
    return secp256k1.sign(hash7, this.privKey).toCompactRawBytes();
  }
  verify(hash7, signature) {
    abytes2(hash7, 32);
    abytes2(signature, 64);
    if (!this.publicKey) {
      throw new Error("No publicKey set!");
    }
    let sig;
    try {
      sig = secp256k1.Signature.fromCompact(signature);
    } catch (error) {
      return false;
    }
    return secp256k1.verify(sig, hash7, this.publicKey);
  }
  wipePrivateData() {
    this.privKey = void 0;
    if (this.privKeyBytes) {
      this.privKeyBytes.fill(0);
      this.privKeyBytes = void 0;
    }
    return this;
  }
  toJSON() {
    return {
      xpriv: this.privateExtendedKey,
      xpub: this.publicExtendedKey
    };
  }
  serialize(version, key) {
    if (!this.chainCode) {
      throw new Error("No chainCode set");
    }
    abytes2(key, 33);
    return concatBytes2(toU32(version), new Uint8Array([this.depth]), toU32(this.parentFingerprint), toU32(this.index), this.chainCode, key);
  }
};

// node_modules/ox/_esm/core/Secp256k1.js
var Secp256k1_exports = {};
__export(Secp256k1_exports, {
  getPublicKey: () => getPublicKey2,
  noble: () => noble2,
  randomPrivateKey: () => randomPrivateKey2,
  recoverAddress: () => recoverAddress,
  recoverPublicKey: () => recoverPublicKey,
  sign: () => sign2,
  verify: () => verify2
});

// node_modules/ox/_esm/core/internal/entropy.js
var extraEntropy = false;

// node_modules/ox/_esm/core/Secp256k1.js
var noble2 = secp256k1;
function getPublicKey2(options) {
  const { privateKey } = options;
  const point = secp256k1.ProjectivePoint.fromPrivateKey(from2(privateKey).slice(2));
  return from4(point);
}
function randomPrivateKey2(options = {}) {
  const { as = "Hex" } = options;
  const bytes = secp256k1.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function recoverAddress(options) {
  return fromPublicKey(recoverPublicKey(options));
}
function recoverPublicKey(options) {
  const { payload, signature } = options;
  const { r, s, yParity } = signature;
  const signature_ = new secp256k1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
  const point = signature_.recoverPublicKey(from2(payload).substring(2));
  return from4(point);
}
function sign2(options) {
  const { extraEntropy: extraEntropy2 = extraEntropy, hash: hash7, payload, privateKey } = options;
  const { r, s, recovery } = secp256k1.sign(from(payload), from(privateKey), {
    extraEntropy: typeof extraEntropy2 === "boolean" ? extraEntropy2 : from2(extraEntropy2).slice(2),
    lowS: true,
    ...hash7 ? { prehash: true } : {}
  });
  return {
    r,
    s,
    yParity: recovery
  };
}
function verify2(options) {
  const { address, hash: hash7, payload, publicKey, signature } = options;
  if (address)
    return isEqual(address, recoverAddress({ payload, signature }));
  return secp256k1.verify(signature, from(payload), toBytes3(publicKey), ...hash7 ? [{ prehash: true, lowS: true }] : []);
}

// node_modules/ox/_esm/core/internal/hdKey.js
function fromScure(key) {
  return {
    derive: (path2) => fromScure(key.derive(path2)),
    depth: key.depth,
    identifier: fromBytes(key.identifier),
    index: key.index,
    privateKey: fromBytes(key.privateKey),
    privateExtendedKey: key.privateExtendedKey,
    publicKey: getPublicKey2({ privateKey: key.privateKey }),
    publicExtendedKey: key.publicExtendedKey,
    versions: key.versions
  };
}

// node_modules/ox/_esm/core/HdKey.js
function fromExtendedKey(extendedKey) {
  const key = HDKey.fromExtendedKey(extendedKey);
  return fromScure(key);
}
function fromJson(json) {
  return fromScure(HDKey.fromJSON(json));
}
function fromSeed(seed, options = {}) {
  const { versions } = options;
  const key = HDKey.fromMasterSeed(from(seed), versions);
  return fromScure(key);
}
function path(options = {}) {
  const { account = 0, change = 0, index: index2 = 0 } = options;
  return `m/44'/60'/${account}'/${change}/${index2}`;
}

// node_modules/ox/_esm/core/Fee.js
var Fee_exports = {};

// node_modules/ox/_esm/core/Log.js
var Log_exports = {};
__export(Log_exports, {
  fromRpc: () => fromRpc7,
  toRpc: () => toRpc7
});
function fromRpc7(log, _options = {}) {
  return {
    ...log,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null
  };
}
function toRpc7(log, _options = {}) {
  return {
    address: log.address,
    blockHash: log.blockHash,
    blockNumber: typeof log.blockNumber === "bigint" ? fromNumber2(log.blockNumber) : null,
    data: log.data,
    logIndex: typeof log.logIndex === "number" ? fromNumber2(log.logIndex) : null,
    topics: log.topics,
    transactionHash: log.transactionHash,
    transactionIndex: typeof log.transactionIndex === "number" ? fromNumber2(log.transactionIndex) : null,
    removed: log.removed
  };
}

// node_modules/ox/_esm/core/Mnemonic.js
var Mnemonic_exports = {};
__export(Mnemonic_exports, {
  czech: () => wordlist,
  english: () => wordlist2,
  french: () => wordlist3,
  italian: () => wordlist4,
  japanese: () => wordlist5,
  korean: () => wordlist6,
  path: () => path,
  portuguese: () => wordlist7,
  random: () => random2,
  simplifiedChinese: () => wordlist8,
  spanish: () => wordlist9,
  toHdKey: () => toHdKey,
  toPrivateKey: () => toPrivateKey,
  toSeed: () => toSeed,
  traditionalChinese: () => wordlist10,
  validate: () => validate8
});

// node_modules/@noble/hashes/esm/pbkdf2.js
function pbkdf2Init(hash7, _password, _salt, _opts) {
  ahash(hash7);
  const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
  const { c, dkLen, asyncTick } = opts;
  anumber(c);
  anumber(dkLen);
  anumber(asyncTick);
  if (c < 1)
    throw new Error("PBKDF2: iterations (c) should be >= 1");
  const password = toBytes2(_password);
  const salt = toBytes2(_salt);
  const DK = new Uint8Array(dkLen);
  const PRF = hmac.create(hash7, password);
  const PRFSalt = PRF._cloneInto().update(salt);
  return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
  PRF.destroy();
  PRFSalt.destroy();
  if (prfW)
    prfW.destroy();
  u.fill(0);
  return DK;
}
function pbkdf2(hash7, password, salt, opts) {
  const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash7, password, salt, opts);
  let prfW;
  const arr = new Uint8Array(4);
  const view = createView(arr);
  const u = new Uint8Array(PRF.outputLen);
  for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
    const Ti = DK.subarray(pos, pos + PRF.outputLen);
    view.setInt32(0, ti, false);
    (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
    Ti.set(u.subarray(0, Ti.length));
    for (let ui = 1; ui < c; ui++) {
      PRF._cloneInto(prfW).update(u).digestInto(u);
      for (let i = 0; i < Ti.length; i++)
        Ti[i] ^= u[i];
    }
  }
  return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}

// node_modules/ox/node_modules/@scure/bip39/esm/index.js
var isJapanese = (wordlist11) => wordlist11[0] === "あいこくしん";
function nfkd(str) {
  if (typeof str !== "string")
    throw new TypeError("invalid mnemonic type: " + typeof str);
  return str.normalize("NFKD");
}
function normalize2(str) {
  const norm = nfkd(str);
  const words = norm.split(" ");
  if (![12, 15, 18, 21, 24].includes(words.length))
    throw new Error("Invalid mnemonic");
  return { nfkd: norm, words };
}
function aentropy(ent) {
  abytes2(ent, 16, 20, 24, 28, 32);
}
function generateMnemonic(wordlist11, strength = 128) {
  anumber(strength);
  if (strength % 32 !== 0 || strength > 256)
    throw new TypeError("Invalid entropy");
  return entropyToMnemonic(randomBytes(strength / 8), wordlist11);
}
var calcChecksum = (entropy) => {
  const bitsLeft = 8 - entropy.length / 4;
  return new Uint8Array([sha256(entropy)[0] >> bitsLeft << bitsLeft]);
};
function getCoder(wordlist11) {
  if (!Array.isArray(wordlist11) || wordlist11.length !== 2048 || typeof wordlist11[0] !== "string")
    throw new Error("Wordlist: expected array of 2048 strings");
  wordlist11.forEach((i) => {
    if (typeof i !== "string")
      throw new Error("wordlist: non-string element: " + i);
  });
  return utils.chain(utils.checksum(1, calcChecksum), utils.radix2(11, true), utils.alphabet(wordlist11));
}
function mnemonicToEntropy(mnemonic, wordlist11) {
  const { words } = normalize2(mnemonic);
  const entropy = getCoder(wordlist11).decode(words);
  aentropy(entropy);
  return entropy;
}
function entropyToMnemonic(entropy, wordlist11) {
  aentropy(entropy);
  const words = getCoder(wordlist11).encode(entropy);
  return words.join(isJapanese(wordlist11) ? "　" : " ");
}
function validateMnemonic(mnemonic, wordlist11) {
  try {
    mnemonicToEntropy(mnemonic, wordlist11);
  } catch (e) {
    return false;
  }
  return true;
}
var psalt = (passphrase) => nfkd("mnemonic" + passphrase);
function mnemonicToSeedSync(mnemonic, passphrase = "") {
  return pbkdf2(sha512, normalize2(mnemonic).nfkd, psalt(passphrase), { c: 2048, dkLen: 64 });
}

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/czech.js
var wordlist = `abdikace
abeceda
adresa
agrese
akce
aktovka
alej
alkohol
amputace
ananas
andulka
anekdota
anketa
antika
anulovat
archa
arogance
asfalt
asistent
aspirace
astma
astronom
atlas
atletika
atol
autobus
azyl
babka
bachor
bacil
baculka
badatel
bageta
bagr
bahno
bakterie
balada
baletka
balkon
balonek
balvan
balza
bambus
bankomat
barbar
baret
barman
baroko
barva
baterka
batoh
bavlna
bazalka
bazilika
bazuka
bedna
beran
beseda
bestie
beton
bezinka
bezmoc
beztak
bicykl
bidlo
biftek
bikiny
bilance
biograf
biolog
bitva
bizon
blahobyt
blatouch
blecha
bledule
blesk
blikat
blizna
blokovat
bloudit
blud
bobek
bobr
bodlina
bodnout
bohatost
bojkot
bojovat
bokorys
bolest
borec
borovice
bota
boubel
bouchat
bouda
boule
bourat
boxer
bradavka
brambora
branka
bratr
brepta
briketa
brko
brloh
bronz
broskev
brunetka
brusinka
brzda
brzy
bublina
bubnovat
buchta
buditel
budka
budova
bufet
bujarost
bukvice
buldok
bulva
bunda
bunkr
burza
butik
buvol
buzola
bydlet
bylina
bytovka
bzukot
capart
carevna
cedr
cedule
cejch
cejn
cela
celer
celkem
celnice
cenina
cennost
cenovka
centrum
cenzor
cestopis
cetka
chalupa
chapadlo
charita
chata
chechtat
chemie
chichot
chirurg
chlad
chleba
chlubit
chmel
chmura
chobot
chochol
chodba
cholera
chomout
chopit
choroba
chov
chrapot
chrlit
chrt
chrup
chtivost
chudina
chutnat
chvat
chvilka
chvost
chyba
chystat
chytit
cibule
cigareta
cihelna
cihla
cinkot
cirkus
cisterna
citace
citrus
cizinec
cizost
clona
cokoliv
couvat
ctitel
ctnost
cudnost
cuketa
cukr
cupot
cvaknout
cval
cvik
cvrkot
cyklista
daleko
dareba
datel
datum
dcera
debata
dechovka
decibel
deficit
deflace
dekl
dekret
demokrat
deprese
derby
deska
detektiv
dikobraz
diktovat
dioda
diplom
disk
displej
divadlo
divoch
dlaha
dlouho
dluhopis
dnes
dobro
dobytek
docent
dochutit
dodnes
dohled
dohoda
dohra
dojem
dojnice
doklad
dokola
doktor
dokument
dolar
doleva
dolina
doma
dominant
domluvit
domov
donutit
dopad
dopis
doplnit
doposud
doprovod
dopustit
dorazit
dorost
dort
dosah
doslov
dostatek
dosud
dosyta
dotaz
dotek
dotknout
doufat
doutnat
dovozce
dozadu
doznat
dozorce
drahota
drak
dramatik
dravec
draze
drdol
drobnost
drogerie
drozd
drsnost
drtit
drzost
duben
duchovno
dudek
duha
duhovka
dusit
dusno
dutost
dvojice
dvorec
dynamit
ekolog
ekonomie
elektron
elipsa
email
emise
emoce
empatie
epizoda
epocha
epopej
epos
esej
esence
eskorta
eskymo
etiketa
euforie
evoluce
exekuce
exkurze
expedice
exploze
export
extrakt
facka
fajfka
fakulta
fanatik
fantazie
farmacie
favorit
fazole
federace
fejeton
fenka
fialka
figurant
filozof
filtr
finance
finta
fixace
fjord
flanel
flirt
flotila
fond
fosfor
fotbal
fotka
foton
frakce
freska
fronta
fukar
funkce
fyzika
galeje
garant
genetika
geolog
gilotina
glazura
glejt
golem
golfista
gotika
graf
gramofon
granule
grep
gril
grog
groteska
guma
hadice
hadr
hala
halenka
hanba
hanopis
harfa
harpuna
havran
hebkost
hejkal
hejno
hejtman
hektar
helma
hematom
herec
herna
heslo
hezky
historik
hladovka
hlasivky
hlava
hledat
hlen
hlodavec
hloh
hloupost
hltat
hlubina
hluchota
hmat
hmota
hmyz
hnis
hnojivo
hnout
hoblina
hoboj
hoch
hodiny
hodlat
hodnota
hodovat
hojnost
hokej
holinka
holka
holub
homole
honitba
honorace
horal
horda
horizont
horko
horlivec
hormon
hornina
horoskop
horstvo
hospoda
hostina
hotovost
houba
houf
houpat
houska
hovor
hradba
hranice
hravost
hrazda
hrbolek
hrdina
hrdlo
hrdost
hrnek
hrobka
hromada
hrot
hrouda
hrozen
hrstka
hrubost
hryzat
hubenost
hubnout
hudba
hukot
humr
husita
hustota
hvozd
hybnost
hydrant
hygiena
hymna
hysterik
idylka
ihned
ikona
iluze
imunita
infekce
inflace
inkaso
inovace
inspekce
internet
invalida
investor
inzerce
ironie
jablko
jachta
jahoda
jakmile
jakost
jalovec
jantar
jarmark
jaro
jasan
jasno
jatka
javor
jazyk
jedinec
jedle
jednatel
jehlan
jekot
jelen
jelito
jemnost
jenom
jepice
jeseter
jevit
jezdec
jezero
jinak
jindy
jinoch
jiskra
jistota
jitrnice
jizva
jmenovat
jogurt
jurta
kabaret
kabel
kabinet
kachna
kadet
kadidlo
kahan
kajak
kajuta
kakao
kaktus
kalamita
kalhoty
kalibr
kalnost
kamera
kamkoliv
kamna
kanibal
kanoe
kantor
kapalina
kapela
kapitola
kapka
kaple
kapota
kapr
kapusta
kapybara
karamel
karotka
karton
kasa
katalog
katedra
kauce
kauza
kavalec
kazajka
kazeta
kazivost
kdekoliv
kdesi
kedluben
kemp
keramika
kino
klacek
kladivo
klam
klapot
klasika
klaun
klec
klenba
klepat
klesnout
klid
klima
klisna
klobouk
klokan
klopa
kloub
klubovna
klusat
kluzkost
kmen
kmitat
kmotr
kniha
knot
koalice
koberec
kobka
kobliha
kobyla
kocour
kohout
kojenec
kokos
koktejl
kolaps
koleda
kolize
kolo
komando
kometa
komik
komnata
komora
kompas
komunita
konat
koncept
kondice
konec
konfese
kongres
konina
konkurs
kontakt
konzerva
kopanec
kopie
kopnout
koprovka
korbel
korektor
kormidlo
koroptev
korpus
koruna
koryto
korzet
kosatec
kostka
kotel
kotleta
kotoul
koukat
koupelna
kousek
kouzlo
kovboj
koza
kozoroh
krabice
krach
krajina
kralovat
krasopis
kravata
kredit
krejcar
kresba
kreveta
kriket
kritik
krize
krkavec
krmelec
krmivo
krocan
krok
kronika
kropit
kroupa
krovka
krtek
kruhadlo
krupice
krutost
krvinka
krychle
krypta
krystal
kryt
kudlanka
kufr
kujnost
kukla
kulajda
kulich
kulka
kulomet
kultura
kuna
kupodivu
kurt
kurzor
kutil
kvalita
kvasinka
kvestor
kynolog
kyselina
kytara
kytice
kytka
kytovec
kyvadlo
labrador
lachtan
ladnost
laik
lakomec
lamela
lampa
lanovka
lasice
laso
lastura
latinka
lavina
lebka
leckdy
leden
lednice
ledovka
ledvina
legenda
legie
legrace
lehce
lehkost
lehnout
lektvar
lenochod
lentilka
lepenka
lepidlo
letadlo
letec
letmo
letokruh
levhart
levitace
levobok
libra
lichotka
lidojed
lidskost
lihovina
lijavec
lilek
limetka
linie
linka
linoleum
listopad
litina
litovat
lobista
lodivod
logika
logoped
lokalita
loket
lomcovat
lopata
lopuch
lord
losos
lotr
loudal
louh
louka
louskat
lovec
lstivost
lucerna
lucifer
lump
lusk
lustrace
lvice
lyra
lyrika
lysina
madam
madlo
magistr
mahagon
majetek
majitel
majorita
makak
makovice
makrela
malba
malina
malovat
malvice
maminka
mandle
manko
marnost
masakr
maskot
masopust
matice
matrika
maturita
mazanec
mazivo
mazlit
mazurka
mdloba
mechanik
meditace
medovina
melasa
meloun
mentolka
metla
metoda
metr
mezera
migrace
mihnout
mihule
mikina
mikrofon
milenec
milimetr
milost
mimika
mincovna
minibar
minomet
minulost
miska
mistr
mixovat
mladost
mlha
mlhovina
mlok
mlsat
mluvit
mnich
mnohem
mobil
mocnost
modelka
modlitba
mohyla
mokro
molekula
momentka
monarcha
monokl
monstrum
montovat
monzun
mosaz
moskyt
most
motivace
motorka
motyka
moucha
moudrost
mozaika
mozek
mozol
mramor
mravenec
mrkev
mrtvola
mrzet
mrzutost
mstitel
mudrc
muflon
mulat
mumie
munice
muset
mutace
muzeum
muzikant
myslivec
mzda
nabourat
nachytat
nadace
nadbytek
nadhoz
nadobro
nadpis
nahlas
nahnat
nahodile
nahradit
naivita
najednou
najisto
najmout
naklonit
nakonec
nakrmit
nalevo
namazat
namluvit
nanometr
naoko
naopak
naostro
napadat
napevno
naplnit
napnout
naposled
naprosto
narodit
naruby
narychlo
nasadit
nasekat
naslepo
nastat
natolik
navenek
navrch
navzdory
nazvat
nebe
nechat
necky
nedaleko
nedbat
neduh
negace
nehet
nehoda
nejen
nejprve
neklid
nelibost
nemilost
nemoc
neochota
neonka
nepokoj
nerost
nerv
nesmysl
nesoulad
netvor
neuron
nevina
nezvykle
nicota
nijak
nikam
nikdy
nikl
nikterak
nitro
nocleh
nohavice
nominace
nora
norek
nositel
nosnost
nouze
noviny
novota
nozdra
nuda
nudle
nuget
nutit
nutnost
nutrie
nymfa
obal
obarvit
obava
obdiv
obec
obehnat
obejmout
obezita
obhajoba
obilnice
objasnit
objekt
obklopit
oblast
oblek
obliba
obloha
obluda
obnos
obohatit
obojek
obout
obrazec
obrna
obruba
obrys
obsah
obsluha
obstarat
obuv
obvaz
obvinit
obvod
obvykle
obyvatel
obzor
ocas
ocel
ocenit
ochladit
ochota
ochrana
ocitnout
odboj
odbyt
odchod
odcizit
odebrat
odeslat
odevzdat
odezva
odhadce
odhodit
odjet
odjinud
odkaz
odkoupit
odliv
odluka
odmlka
odolnost
odpad
odpis
odplout
odpor
odpustit
odpykat
odrazka
odsoudit
odstup
odsun
odtok
odtud
odvaha
odveta
odvolat
odvracet
odznak
ofina
ofsajd
ohlas
ohnisko
ohrada
ohrozit
ohryzek
okap
okenice
oklika
okno
okouzlit
okovy
okrasa
okres
okrsek
okruh
okupant
okurka
okusit
olejnina
olizovat
omak
omeleta
omezit
omladina
omlouvat
omluva
omyl
onehdy
opakovat
opasek
operace
opice
opilost
opisovat
opora
opozice
opravdu
oproti
orbital
orchestr
orgie
orlice
orloj
ortel
osada
oschnout
osika
osivo
oslava
oslepit
oslnit
oslovit
osnova
osoba
osolit
ospalec
osten
ostraha
ostuda
ostych
osvojit
oteplit
otisk
otop
otrhat
otrlost
otrok
otruby
otvor
ovanout
ovar
oves
ovlivnit
ovoce
oxid
ozdoba
pachatel
pacient
padouch
pahorek
pakt
palanda
palec
palivo
paluba
pamflet
pamlsek
panenka
panika
panna
panovat
panstvo
pantofle
paprika
parketa
parodie
parta
paruka
paryba
paseka
pasivita
pastelka
patent
patrona
pavouk
pazneht
pazourek
pecka
pedagog
pejsek
peklo
peloton
penalta
pendrek
penze
periskop
pero
pestrost
petarda
petice
petrolej
pevnina
pexeso
pianista
piha
pijavice
pikle
piknik
pilina
pilnost
pilulka
pinzeta
pipeta
pisatel
pistole
pitevna
pivnice
pivovar
placenta
plakat
plamen
planeta
plastika
platit
plavidlo
plaz
plech
plemeno
plenta
ples
pletivo
plevel
plivat
plnit
plno
plocha
plodina
plomba
plout
pluk
plyn
pobavit
pobyt
pochod
pocit
poctivec
podat
podcenit
podepsat
podhled
podivit
podklad
podmanit
podnik
podoba
podpora
podraz
podstata
podvod
podzim
poezie
pohanka
pohnutka
pohovor
pohroma
pohyb
pointa
pojistka
pojmout
pokazit
pokles
pokoj
pokrok
pokuta
pokyn
poledne
polibek
polknout
poloha
polynom
pomalu
pominout
pomlka
pomoc
pomsta
pomyslet
ponechat
ponorka
ponurost
popadat
popel
popisek
poplach
poprosit
popsat
popud
poradce
porce
porod
porucha
poryv
posadit
posed
posila
poskok
poslanec
posoudit
pospolu
postava
posudek
posyp
potah
potkan
potlesk
potomek
potrava
potupa
potvora
poukaz
pouto
pouzdro
povaha
povidla
povlak
povoz
povrch
povstat
povyk
povzdech
pozdrav
pozemek
poznatek
pozor
pozvat
pracovat
prahory
praktika
prales
praotec
praporek
prase
pravda
princip
prkno
probudit
procento
prodej
profese
prohra
projekt
prolomit
promile
pronikat
propad
prorok
prosba
proton
proutek
provaz
prskavka
prsten
prudkost
prut
prvek
prvohory
psanec
psovod
pstruh
ptactvo
puberta
puch
pudl
pukavec
puklina
pukrle
pult
pumpa
punc
pupen
pusa
pusinka
pustina
putovat
putyka
pyramida
pysk
pytel
racek
rachot
radiace
radnice
radon
raft
ragby
raketa
rakovina
rameno
rampouch
rande
rarach
rarita
rasovna
rastr
ratolest
razance
razidlo
reagovat
reakce
recept
redaktor
referent
reflex
rejnok
reklama
rekord
rekrut
rektor
reputace
revize
revma
revolver
rezerva
riskovat
riziko
robotika
rodokmen
rohovka
rokle
rokoko
romaneto
ropovod
ropucha
rorejs
rosol
rostlina
rotmistr
rotoped
rotunda
roubenka
roucho
roup
roura
rovina
rovnice
rozbor
rozchod
rozdat
rozeznat
rozhodce
rozinka
rozjezd
rozkaz
rozloha
rozmar
rozpad
rozruch
rozsah
roztok
rozum
rozvod
rubrika
ruchadlo
rukavice
rukopis
ryba
rybolov
rychlost
rydlo
rypadlo
rytina
ryzost
sadista
sahat
sako
samec
samizdat
samota
sanitka
sardinka
sasanka
satelit
sazba
sazenice
sbor
schovat
sebranka
secese
sedadlo
sediment
sedlo
sehnat
sejmout
sekera
sekta
sekunda
sekvoje
semeno
seno
servis
sesadit
seshora
seskok
seslat
sestra
sesuv
sesypat
setba
setina
setkat
setnout
setrvat
sever
seznam
shoda
shrnout
sifon
silnice
sirka
sirotek
sirup
situace
skafandr
skalisko
skanzen
skaut
skeptik
skica
skladba
sklenice
sklo
skluz
skoba
skokan
skoro
skripta
skrz
skupina
skvost
skvrna
slabika
sladidlo
slanina
slast
slavnost
sledovat
slepec
sleva
slezina
slib
slina
sliznice
slon
sloupek
slovo
sluch
sluha
slunce
slupka
slza
smaragd
smetana
smilstvo
smlouva
smog
smrad
smrk
smrtka
smutek
smysl
snad
snaha
snob
sobota
socha
sodovka
sokol
sopka
sotva
souboj
soucit
soudce
souhlas
soulad
soumrak
souprava
soused
soutok
souviset
spalovna
spasitel
spis
splav
spodek
spojenec
spolu
sponzor
spornost
spousta
sprcha
spustit
sranda
sraz
srdce
srna
srnec
srovnat
srpen
srst
srub
stanice
starosta
statika
stavba
stehno
stezka
stodola
stolek
stopa
storno
stoupat
strach
stres
strhnout
strom
struna
studna
stupnice
stvol
styk
subjekt
subtropy
suchar
sudost
sukno
sundat
sunout
surikata
surovina
svah
svalstvo
svetr
svatba
svazek
svisle
svitek
svoboda
svodidlo
svorka
svrab
sykavka
sykot
synek
synovec
sypat
sypkost
syrovost
sysel
sytost
tabletka
tabule
tahoun
tajemno
tajfun
tajga
tajit
tajnost
taktika
tamhle
tampon
tancovat
tanec
tanker
tapeta
tavenina
tazatel
technika
tehdy
tekutina
telefon
temnota
tendence
tenista
tenor
teplota
tepna
teprve
terapie
termoska
textil
ticho
tiskopis
titulek
tkadlec
tkanina
tlapka
tleskat
tlukot
tlupa
tmel
toaleta
topinka
topol
torzo
touha
toulec
tradice
traktor
tramp
trasa
traverza
trefit
trest
trezor
trhavina
trhlina
trochu
trojice
troska
trouba
trpce
trpitel
trpkost
trubec
truchlit
truhlice
trus
trvat
tudy
tuhnout
tuhost
tundra
turista
turnaj
tuzemsko
tvaroh
tvorba
tvrdost
tvrz
tygr
tykev
ubohost
uboze
ubrat
ubrousek
ubrus
ubytovna
ucho
uctivost
udivit
uhradit
ujednat
ujistit
ujmout
ukazatel
uklidnit
uklonit
ukotvit
ukrojit
ulice
ulita
ulovit
umyvadlo
unavit
uniforma
uniknout
upadnout
uplatnit
uplynout
upoutat
upravit
uran
urazit
usednout
usilovat
usmrtit
usnadnit
usnout
usoudit
ustlat
ustrnout
utahovat
utkat
utlumit
utonout
utopenec
utrousit
uvalit
uvolnit
uvozovka
uzdravit
uzel
uzenina
uzlina
uznat
vagon
valcha
valoun
vana
vandal
vanilka
varan
varhany
varovat
vcelku
vchod
vdova
vedro
vegetace
vejce
velbloud
veletrh
velitel
velmoc
velryba
venkov
veranda
verze
veselka
veskrze
vesnice
vespodu
vesta
veterina
veverka
vibrace
vichr
videohra
vidina
vidle
vila
vinice
viset
vitalita
vize
vizitka
vjezd
vklad
vkus
vlajka
vlak
vlasec
vlevo
vlhkost
vliv
vlnovka
vloupat
vnucovat
vnuk
voda
vodivost
vodoznak
vodstvo
vojensky
vojna
vojsko
volant
volba
volit
volno
voskovka
vozidlo
vozovna
vpravo
vrabec
vracet
vrah
vrata
vrba
vrcholek
vrhat
vrstva
vrtule
vsadit
vstoupit
vstup
vtip
vybavit
vybrat
vychovat
vydat
vydra
vyfotit
vyhledat
vyhnout
vyhodit
vyhradit
vyhubit
vyjasnit
vyjet
vyjmout
vyklopit
vykonat
vylekat
vymazat
vymezit
vymizet
vymyslet
vynechat
vynikat
vynutit
vypadat
vyplatit
vypravit
vypustit
vyrazit
vyrovnat
vyrvat
vyslovit
vysoko
vystavit
vysunout
vysypat
vytasit
vytesat
vytratit
vyvinout
vyvolat
vyvrhel
vyzdobit
vyznat
vzadu
vzbudit
vzchopit
vzdor
vzduch
vzdychat
vzestup
vzhledem
vzkaz
vzlykat
vznik
vzorek
vzpoura
vztah
vztek
xylofon
zabrat
zabydlet
zachovat
zadarmo
zadusit
zafoukat
zahltit
zahodit
zahrada
zahynout
zajatec
zajet
zajistit
zaklepat
zakoupit
zalepit
zamezit
zamotat
zamyslet
zanechat
zanikat
zaplatit
zapojit
zapsat
zarazit
zastavit
zasunout
zatajit
zatemnit
zatknout
zaujmout
zavalit
zavelet
zavinit
zavolat
zavrtat
zazvonit
zbavit
zbrusu
zbudovat
zbytek
zdaleka
zdarma
zdatnost
zdivo
zdobit
zdroj
zdvih
zdymadlo
zelenina
zeman
zemina
zeptat
zezadu
zezdola
zhatit
zhltnout
zhluboka
zhotovit
zhruba
zima
zimnice
zjemnit
zklamat
zkoumat
zkratka
zkumavka
zlato
zlehka
zloba
zlom
zlost
zlozvyk
zmapovat
zmar
zmatek
zmije
zmizet
zmocnit
zmodrat
zmrzlina
zmutovat
znak
znalost
znamenat
znovu
zobrazit
zotavit
zoubek
zoufale
zplodit
zpomalit
zprava
zprostit
zprudka
zprvu
zrada
zranit
zrcadlo
zrnitost
zrno
zrovna
zrychlit
zrzavost
zticha
ztratit
zubovina
zubr
zvednout
zvenku
zvesela
zvon
zvrat
zvukovod
zvyk`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/english.js
var wordlist2 = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/french.js
var wordlist3 = `abaisser
abandon
abdiquer
abeille
abolir
aborder
aboutir
aboyer
abrasif
abreuver
abriter
abroger
abrupt
absence
absolu
absurde
abusif
abyssal
académie
acajou
acarien
accabler
accepter
acclamer
accolade
accroche
accuser
acerbe
achat
acheter
aciduler
acier
acompte
acquérir
acronyme
acteur
actif
actuel
adepte
adéquat
adhésif
adjectif
adjuger
admettre
admirer
adopter
adorer
adoucir
adresse
adroit
adulte
adverbe
aérer
aéronef
affaire
affecter
affiche
affreux
affubler
agacer
agencer
agile
agiter
agrafer
agréable
agrume
aider
aiguille
ailier
aimable
aisance
ajouter
ajuster
alarmer
alchimie
alerte
algèbre
algue
aliéner
aliment
alléger
alliage
allouer
allumer
alourdir
alpaga
altesse
alvéole
amateur
ambigu
ambre
aménager
amertume
amidon
amiral
amorcer
amour
amovible
amphibie
ampleur
amusant
analyse
anaphore
anarchie
anatomie
ancien
anéantir
angle
angoisse
anguleux
animal
annexer
annonce
annuel
anodin
anomalie
anonyme
anormal
antenne
antidote
anxieux
apaiser
apéritif
aplanir
apologie
appareil
appeler
apporter
appuyer
aquarium
aqueduc
arbitre
arbuste
ardeur
ardoise
argent
arlequin
armature
armement
armoire
armure
arpenter
arracher
arriver
arroser
arsenic
artériel
article
aspect
asphalte
aspirer
assaut
asservir
assiette
associer
assurer
asticot
astre
astuce
atelier
atome
atrium
atroce
attaque
attentif
attirer
attraper
aubaine
auberge
audace
audible
augurer
aurore
automne
autruche
avaler
avancer
avarice
avenir
averse
aveugle
aviateur
avide
avion
aviser
avoine
avouer
avril
axial
axiome
badge
bafouer
bagage
baguette
baignade
balancer
balcon
baleine
balisage
bambin
bancaire
bandage
banlieue
bannière
banquier
barbier
baril
baron
barque
barrage
bassin
bastion
bataille
bateau
batterie
baudrier
bavarder
belette
bélier
belote
bénéfice
berceau
berger
berline
bermuda
besace
besogne
bétail
beurre
biberon
bicycle
bidule
bijou
bilan
bilingue
billard
binaire
biologie
biopsie
biotype
biscuit
bison
bistouri
bitume
bizarre
blafard
blague
blanchir
blessant
blinder
blond
bloquer
blouson
bobard
bobine
boire
boiser
bolide
bonbon
bondir
bonheur
bonifier
bonus
bordure
borne
botte
boucle
boueux
bougie
boulon
bouquin
bourse
boussole
boutique
boxeur
branche
brasier
brave
brebis
brèche
breuvage
bricoler
brigade
brillant
brioche
brique
brochure
broder
bronzer
brousse
broyeur
brume
brusque
brutal
bruyant
buffle
buisson
bulletin
bureau
burin
bustier
butiner
butoir
buvable
buvette
cabanon
cabine
cachette
cadeau
cadre
caféine
caillou
caisson
calculer
calepin
calibre
calmer
calomnie
calvaire
camarade
caméra
camion
campagne
canal
caneton
canon
cantine
canular
capable
caporal
caprice
capsule
capter
capuche
carabine
carbone
caresser
caribou
carnage
carotte
carreau
carton
cascade
casier
casque
cassure
causer
caution
cavalier
caverne
caviar
cédille
ceinture
céleste
cellule
cendrier
censurer
central
cercle
cérébral
cerise
cerner
cerveau
cesser
chagrin
chaise
chaleur
chambre
chance
chapitre
charbon
chasseur
chaton
chausson
chavirer
chemise
chenille
chéquier
chercher
cheval
chien
chiffre
chignon
chimère
chiot
chlorure
chocolat
choisir
chose
chouette
chrome
chute
cigare
cigogne
cimenter
cinéma
cintrer
circuler
cirer
cirque
citerne
citoyen
citron
civil
clairon
clameur
claquer
classe
clavier
client
cligner
climat
clivage
cloche
clonage
cloporte
cobalt
cobra
cocasse
cocotier
coder
codifier
coffre
cogner
cohésion
coiffer
coincer
colère
colibri
colline
colmater
colonel
combat
comédie
commande
compact
concert
conduire
confier
congeler
connoter
consonne
contact
convexe
copain
copie
corail
corbeau
cordage
corniche
corpus
correct
cortège
cosmique
costume
coton
coude
coupure
courage
couteau
couvrir
coyote
crabe
crainte
cravate
crayon
créature
créditer
crémeux
creuser
crevette
cribler
crier
cristal
critère
croire
croquer
crotale
crucial
cruel
crypter
cubique
cueillir
cuillère
cuisine
cuivre
culminer
cultiver
cumuler
cupide
curatif
curseur
cyanure
cycle
cylindre
cynique
daigner
damier
danger
danseur
dauphin
débattre
débiter
déborder
débrider
débutant
décaler
décembre
déchirer
décider
déclarer
décorer
décrire
décupler
dédale
déductif
déesse
défensif
défiler
défrayer
dégager
dégivrer
déglutir
dégrafer
déjeuner
délice
déloger
demander
demeurer
démolir
dénicher
dénouer
dentelle
dénuder
départ
dépenser
déphaser
déplacer
déposer
déranger
dérober
désastre
descente
désert
désigner
désobéir
dessiner
destrier
détacher
détester
détourer
détresse
devancer
devenir
deviner
devoir
diable
dialogue
diamant
dicter
différer
digérer
digital
digne
diluer
dimanche
diminuer
dioxyde
directif
diriger
discuter
disposer
dissiper
distance
divertir
diviser
docile
docteur
dogme
doigt
domaine
domicile
dompter
donateur
donjon
donner
dopamine
dortoir
dorure
dosage
doseur
dossier
dotation
douanier
double
douceur
douter
doyen
dragon
draper
dresser
dribbler
droiture
duperie
duplexe
durable
durcir
dynastie
éblouir
écarter
écharpe
échelle
éclairer
éclipse
éclore
écluse
école
économie
écorce
écouter
écraser
écrémer
écrivain
écrou
écume
écureuil
édifier
éduquer
effacer
effectif
effigie
effort
effrayer
effusion
égaliser
égarer
éjecter
élaborer
élargir
électron
élégant
éléphant
élève
éligible
élitisme
éloge
élucider
éluder
emballer
embellir
embryon
émeraude
émission
emmener
émotion
émouvoir
empereur
employer
emporter
emprise
émulsion
encadrer
enchère
enclave
encoche
endiguer
endosser
endroit
enduire
énergie
enfance
enfermer
enfouir
engager
engin
englober
énigme
enjamber
enjeu
enlever
ennemi
ennuyeux
enrichir
enrobage
enseigne
entasser
entendre
entier
entourer
entraver
énumérer
envahir
enviable
envoyer
enzyme
éolien
épaissir
épargne
épatant
épaule
épicerie
épidémie
épier
épilogue
épine
épisode
épitaphe
époque
épreuve
éprouver
épuisant
équerre
équipe
ériger
érosion
erreur
éruption
escalier
espadon
espèce
espiègle
espoir
esprit
esquiver
essayer
essence
essieu
essorer
estime
estomac
estrade
étagère
étaler
étanche
étatique
éteindre
étendoir
éternel
éthanol
éthique
ethnie
étirer
étoffer
étoile
étonnant
étourdir
étrange
étroit
étude
euphorie
évaluer
évasion
éventail
évidence
éviter
évolutif
évoquer
exact
exagérer
exaucer
exceller
excitant
exclusif
excuse
exécuter
exemple
exercer
exhaler
exhorter
exigence
exiler
exister
exotique
expédier
explorer
exposer
exprimer
exquis
extensif
extraire
exulter
fable
fabuleux
facette
facile
facture
faiblir
falaise
fameux
famille
farceur
farfelu
farine
farouche
fasciner
fatal
fatigue
faucon
fautif
faveur
favori
fébrile
féconder
fédérer
félin
femme
fémur
fendoir
féodal
fermer
féroce
ferveur
festival
feuille
feutre
février
fiasco
ficeler
fictif
fidèle
figure
filature
filetage
filière
filleul
filmer
filou
filtrer
financer
finir
fiole
firme
fissure
fixer
flairer
flamme
flasque
flatteur
fléau
flèche
fleur
flexion
flocon
flore
fluctuer
fluide
fluvial
folie
fonderie
fongible
fontaine
forcer
forgeron
formuler
fortune
fossile
foudre
fougère
fouiller
foulure
fourmi
fragile
fraise
franchir
frapper
frayeur
frégate
freiner
frelon
frémir
frénésie
frère
friable
friction
frisson
frivole
froid
fromage
frontal
frotter
fruit
fugitif
fuite
fureur
furieux
furtif
fusion
futur
gagner
galaxie
galerie
gambader
garantir
gardien
garnir
garrigue
gazelle
gazon
géant
gélatine
gélule
gendarme
général
génie
genou
gentil
géologie
géomètre
géranium
germe
gestuel
geyser
gibier
gicler
girafe
givre
glace
glaive
glisser
globe
gloire
glorieux
golfeur
gomme
gonfler
gorge
gorille
goudron
gouffre
goulot
goupille
gourmand
goutte
graduel
graffiti
graine
grand
grappin
gratuit
gravir
grenat
griffure
griller
grimper
grogner
gronder
grotte
groupe
gruger
grutier
gruyère
guépard
guerrier
guide
guimauve
guitare
gustatif
gymnaste
gyrostat
habitude
hachoir
halte
hameau
hangar
hanneton
haricot
harmonie
harpon
hasard
hélium
hématome
herbe
hérisson
hermine
héron
hésiter
heureux
hiberner
hibou
hilarant
histoire
hiver
homard
hommage
homogène
honneur
honorer
honteux
horde
horizon
horloge
hormone
horrible
houleux
housse
hublot
huileux
humain
humble
humide
humour
hurler
hydromel
hygiène
hymne
hypnose
idylle
ignorer
iguane
illicite
illusion
image
imbiber
imiter
immense
immobile
immuable
impact
impérial
implorer
imposer
imprimer
imputer
incarner
incendie
incident
incliner
incolore
indexer
indice
inductif
inédit
ineptie
inexact
infini
infliger
informer
infusion
ingérer
inhaler
inhiber
injecter
injure
innocent
inoculer
inonder
inscrire
insecte
insigne
insolite
inspirer
instinct
insulter
intact
intense
intime
intrigue
intuitif
inutile
invasion
inventer
inviter
invoquer
ironique
irradier
irréel
irriter
isoler
ivoire
ivresse
jaguar
jaillir
jambe
janvier
jardin
jauger
jaune
javelot
jetable
jeton
jeudi
jeunesse
joindre
joncher
jongler
joueur
jouissif
journal
jovial
joyau
joyeux
jubiler
jugement
junior
jupon
juriste
justice
juteux
juvénile
kayak
kimono
kiosque
label
labial
labourer
lacérer
lactose
lagune
laine
laisser
laitier
lambeau
lamelle
lampe
lanceur
langage
lanterne
lapin
largeur
larme
laurier
lavabo
lavoir
lecture
légal
léger
légume
lessive
lettre
levier
lexique
lézard
liasse
libérer
libre
licence
licorne
liège
lièvre
ligature
ligoter
ligue
limer
limite
limonade
limpide
linéaire
lingot
lionceau
liquide
lisière
lister
lithium
litige
littoral
livreur
logique
lointain
loisir
lombric
loterie
louer
lourd
loutre
louve
loyal
lubie
lucide
lucratif
lueur
lugubre
luisant
lumière
lunaire
lundi
luron
lutter
luxueux
machine
magasin
magenta
magique
maigre
maillon
maintien
mairie
maison
majorer
malaxer
maléfice
malheur
malice
mallette
mammouth
mandater
maniable
manquant
manteau
manuel
marathon
marbre
marchand
mardi
maritime
marqueur
marron
marteler
mascotte
massif
matériel
matière
matraque
maudire
maussade
mauve
maximal
méchant
méconnu
médaille
médecin
méditer
méduse
meilleur
mélange
mélodie
membre
mémoire
menacer
mener
menhir
mensonge
mentor
mercredi
mérite
merle
messager
mesure
métal
météore
méthode
métier
meuble
miauler
microbe
miette
mignon
migrer
milieu
million
mimique
mince
minéral
minimal
minorer
minute
miracle
miroiter
missile
mixte
mobile
moderne
moelleux
mondial
moniteur
monnaie
monotone
monstre
montagne
monument
moqueur
morceau
morsure
mortier
moteur
motif
mouche
moufle
moulin
mousson
mouton
mouvant
multiple
munition
muraille
murène
murmure
muscle
muséum
musicien
mutation
muter
mutuel
myriade
myrtille
mystère
mythique
nageur
nappe
narquois
narrer
natation
nation
nature
naufrage
nautique
navire
nébuleux
nectar
néfaste
négation
négliger
négocier
neige
nerveux
nettoyer
neurone
neutron
neveu
niche
nickel
nitrate
niveau
noble
nocif
nocturne
noirceur
noisette
nomade
nombreux
nommer
normatif
notable
notifier
notoire
nourrir
nouveau
novateur
novembre
novice
nuage
nuancer
nuire
nuisible
numéro
nuptial
nuque
nutritif
obéir
objectif
obliger
obscur
observer
obstacle
obtenir
obturer
occasion
occuper
océan
octobre
octroyer
octupler
oculaire
odeur
odorant
offenser
officier
offrir
ogive
oiseau
oisillon
olfactif
olivier
ombrage
omettre
onctueux
onduler
onéreux
onirique
opale
opaque
opérer
opinion
opportun
opprimer
opter
optique
orageux
orange
orbite
ordonner
oreille
organe
orgueil
orifice
ornement
orque
ortie
osciller
osmose
ossature
otarie
ouragan
ourson
outil
outrager
ouvrage
ovation
oxyde
oxygène
ozone
paisible
palace
palmarès
palourde
palper
panache
panda
pangolin
paniquer
panneau
panorama
pantalon
papaye
papier
papoter
papyrus
paradoxe
parcelle
paresse
parfumer
parler
parole
parrain
parsemer
partager
parure
parvenir
passion
pastèque
paternel
patience
patron
pavillon
pavoiser
payer
paysage
peigne
peintre
pelage
pélican
pelle
pelouse
peluche
pendule
pénétrer
pénible
pensif
pénurie
pépite
péplum
perdrix
perforer
période
permuter
perplexe
persil
perte
peser
pétale
petit
pétrir
peuple
pharaon
phobie
phoque
photon
phrase
physique
piano
pictural
pièce
pierre
pieuvre
pilote
pinceau
pipette
piquer
pirogue
piscine
piston
pivoter
pixel
pizza
placard
plafond
plaisir
planer
plaque
plastron
plateau
pleurer
plexus
pliage
plomb
plonger
pluie
plumage
pochette
poésie
poète
pointe
poirier
poisson
poivre
polaire
policier
pollen
polygone
pommade
pompier
ponctuel
pondérer
poney
portique
position
posséder
posture
potager
poteau
potion
pouce
poulain
poumon
pourpre
poussin
pouvoir
prairie
pratique
précieux
prédire
préfixe
prélude
prénom
présence
prétexte
prévoir
primitif
prince
prison
priver
problème
procéder
prodige
profond
progrès
proie
projeter
prologue
promener
propre
prospère
protéger
prouesse
proverbe
prudence
pruneau
psychose
public
puceron
puiser
pulpe
pulsar
punaise
punitif
pupitre
purifier
puzzle
pyramide
quasar
querelle
question
quiétude
quitter
quotient
racine
raconter
radieux
ragondin
raideur
raisin
ralentir
rallonge
ramasser
rapide
rasage
ratisser
ravager
ravin
rayonner
réactif
réagir
réaliser
réanimer
recevoir
réciter
réclamer
récolter
recruter
reculer
recycler
rédiger
redouter
refaire
réflexe
réformer
refrain
refuge
régalien
région
réglage
régulier
réitérer
rejeter
rejouer
relatif
relever
relief
remarque
remède
remise
remonter
remplir
remuer
renard
renfort
renifler
renoncer
rentrer
renvoi
replier
reporter
reprise
reptile
requin
réserve
résineux
résoudre
respect
rester
résultat
rétablir
retenir
réticule
retomber
retracer
réunion
réussir
revanche
revivre
révolte
révulsif
richesse
rideau
rieur
rigide
rigoler
rincer
riposter
risible
risque
rituel
rival
rivière
rocheux
romance
rompre
ronce
rondin
roseau
rosier
rotatif
rotor
rotule
rouge
rouille
rouleau
routine
royaume
ruban
rubis
ruche
ruelle
rugueux
ruiner
ruisseau
ruser
rustique
rythme
sabler
saboter
sabre
sacoche
safari
sagesse
saisir
salade
salive
salon
saluer
samedi
sanction
sanglier
sarcasme
sardine
saturer
saugrenu
saumon
sauter
sauvage
savant
savonner
scalpel
scandale
scélérat
scénario
sceptre
schéma
science
scinder
score
scrutin
sculpter
séance
sécable
sécher
secouer
sécréter
sédatif
séduire
seigneur
séjour
sélectif
semaine
sembler
semence
séminal
sénateur
sensible
sentence
séparer
séquence
serein
sergent
sérieux
serrure
sérum
service
sésame
sévir
sevrage
sextuple
sidéral
siècle
siéger
siffler
sigle
signal
silence
silicium
simple
sincère
sinistre
siphon
sirop
sismique
situer
skier
social
socle
sodium
soigneux
soldat
soleil
solitude
soluble
sombre
sommeil
somnoler
sonde
songeur
sonnette
sonore
sorcier
sortir
sosie
sottise
soucieux
soudure
souffle
soulever
soupape
source
soutirer
souvenir
spacieux
spatial
spécial
sphère
spiral
stable
station
sternum
stimulus
stipuler
strict
studieux
stupeur
styliste
sublime
substrat
subtil
subvenir
succès
sucre
suffixe
suggérer
suiveur
sulfate
superbe
supplier
surface
suricate
surmener
surprise
sursaut
survie
suspect
syllabe
symbole
symétrie
synapse
syntaxe
système
tabac
tablier
tactile
tailler
talent
talisman
talonner
tambour
tamiser
tangible
tapis
taquiner
tarder
tarif
tartine
tasse
tatami
tatouage
taupe
taureau
taxer
témoin
temporel
tenaille
tendre
teneur
tenir
tension
terminer
terne
terrible
tétine
texte
thème
théorie
thérapie
thorax
tibia
tiède
timide
tirelire
tiroir
tissu
titane
titre
tituber
toboggan
tolérant
tomate
tonique
tonneau
toponyme
torche
tordre
tornade
torpille
torrent
torse
tortue
totem
toucher
tournage
tousser
toxine
traction
trafic
tragique
trahir
train
trancher
travail
trèfle
tremper
trésor
treuil
triage
tribunal
tricoter
trilogie
triomphe
tripler
triturer
trivial
trombone
tronc
tropical
troupeau
tuile
tulipe
tumulte
tunnel
turbine
tuteur
tutoyer
tuyau
tympan
typhon
typique
tyran
ubuesque
ultime
ultrason
unanime
unifier
union
unique
unitaire
univers
uranium
urbain
urticant
usage
usine
usuel
usure
utile
utopie
vacarme
vaccin
vagabond
vague
vaillant
vaincre
vaisseau
valable
valise
vallon
valve
vampire
vanille
vapeur
varier
vaseux
vassal
vaste
vecteur
vedette
végétal
véhicule
veinard
véloce
vendredi
vénérer
venger
venimeux
ventouse
verdure
vérin
vernir
verrou
verser
vertu
veston
vétéran
vétuste
vexant
vexer
viaduc
viande
victoire
vidange
vidéo
vignette
vigueur
vilain
village
vinaigre
violon
vipère
virement
virtuose
virus
visage
viseur
vision
visqueux
visuel
vital
vitesse
viticole
vitrine
vivace
vivipare
vocation
voguer
voile
voisin
voiture
volaille
volcan
voltiger
volume
vorace
vortex
voter
vouloir
voyage
voyelle
wagon
xénon
yacht
zèbre
zénith
zeste
zoologie`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/italian.js
var wordlist4 = `abaco
abbaglio
abbinato
abete
abisso
abolire
abrasivo
abrogato
accadere
accenno
accusato
acetone
achille
acido
acqua
acre
acrilico
acrobata
acuto
adagio
addebito
addome
adeguato
aderire
adipe
adottare
adulare
affabile
affetto
affisso
affranto
aforisma
afoso
africano
agave
agente
agevole
aggancio
agire
agitare
agonismo
agricolo
agrumeto
aguzzo
alabarda
alato
albatro
alberato
albo
albume
alce
alcolico
alettone
alfa
algebra
aliante
alibi
alimento
allagato
allegro
allievo
allodola
allusivo
almeno
alogeno
alpaca
alpestre
altalena
alterno
alticcio
altrove
alunno
alveolo
alzare
amalgama
amanita
amarena
ambito
ambrato
ameba
america
ametista
amico
ammasso
ammenda
ammirare
ammonito
amore
ampio
ampliare
amuleto
anacardo
anagrafe
analista
anarchia
anatra
anca
ancella
ancora
andare
andrea
anello
angelo
angolare
angusto
anima
annegare
annidato
anno
annuncio
anonimo
anticipo
anzi
apatico
apertura
apode
apparire
appetito
appoggio
approdo
appunto
aprile
arabica
arachide
aragosta
araldica
arancio
aratura
arazzo
arbitro
archivio
ardito
arenile
argento
argine
arguto
aria
armonia
arnese
arredato
arringa
arrosto
arsenico
arso
artefice
arzillo
asciutto
ascolto
asepsi
asettico
asfalto
asino
asola
aspirato
aspro
assaggio
asse
assoluto
assurdo
asta
astenuto
astice
astratto
atavico
ateismo
atomico
atono
attesa
attivare
attorno
attrito
attuale
ausilio
austria
autista
autonomo
autunno
avanzato
avere
avvenire
avviso
avvolgere
azione
azoto
azzimo
azzurro
babele
baccano
bacino
baco
badessa
badilata
bagnato
baita
balcone
baldo
balena
ballata
balzano
bambino
bandire
baraonda
barbaro
barca
baritono
barlume
barocco
basilico
basso
batosta
battuto
baule
bava
bavosa
becco
beffa
belgio
belva
benda
benevole
benigno
benzina
bere
berlina
beta
bibita
bici
bidone
bifido
biga
bilancia
bimbo
binocolo
biologo
bipede
bipolare
birbante
birra
biscotto
bisesto
bisnonno
bisonte
bisturi
bizzarro
blando
blatta
bollito
bonifico
bordo
bosco
botanico
bottino
bozzolo
braccio
bradipo
brama
branca
bravura
bretella
brevetto
brezza
briglia
brillante
brindare
broccolo
brodo
bronzina
brullo
bruno
bubbone
buca
budino
buffone
buio
bulbo
buono
burlone
burrasca
bussola
busta
cadetto
caduco
calamaro
calcolo
calesse
calibro
calmo
caloria
cambusa
camerata
camicia
cammino
camola
campale
canapa
candela
cane
canino
canotto
cantina
capace
capello
capitolo
capogiro
cappero
capra
capsula
carapace
carcassa
cardo
carisma
carovana
carretto
cartolina
casaccio
cascata
caserma
caso
cassone
castello
casuale
catasta
catena
catrame
cauto
cavillo
cedibile
cedrata
cefalo
celebre
cellulare
cena
cenone
centesimo
ceramica
cercare
certo
cerume
cervello
cesoia
cespo
ceto
chela
chiaro
chicca
chiedere
chimera
china
chirurgo
chitarra
ciao
ciclismo
cifrare
cigno
cilindro
ciottolo
circa
cirrosi
citrico
cittadino
ciuffo
civetta
civile
classico
clinica
cloro
cocco
codardo
codice
coerente
cognome
collare
colmato
colore
colposo
coltivato
colza
coma
cometa
commando
comodo
computer
comune
conciso
condurre
conferma
congelare
coniuge
connesso
conoscere
consumo
continuo
convegno
coperto
copione
coppia
copricapo
corazza
cordata
coricato
cornice
corolla
corpo
corredo
corsia
cortese
cosmico
costante
cottura
covato
cratere
cravatta
creato
credere
cremoso
crescita
creta
criceto
crinale
crisi
critico
croce
cronaca
crostata
cruciale
crusca
cucire
cuculo
cugino
cullato
cupola
curatore
cursore
curvo
cuscino
custode
dado
daino
dalmata
damerino
daniela
dannoso
danzare
datato
davanti
davvero
debutto
decennio
deciso
declino
decollo
decreto
dedicato
definito
deforme
degno
delegare
delfino
delirio
delta
demenza
denotato
dentro
deposito
derapata
derivare
deroga
descritto
deserto
desiderio
desumere
detersivo
devoto
diametro
dicembre
diedro
difeso
diffuso
digerire
digitale
diluvio
dinamico
dinnanzi
dipinto
diploma
dipolo
diradare
dire
dirotto
dirupo
disagio
discreto
disfare
disgelo
disposto
distanza
disumano
dito
divano
divelto
dividere
divorato
doblone
docente
doganale
dogma
dolce
domato
domenica
dominare
dondolo
dono
dormire
dote
dottore
dovuto
dozzina
drago
druido
dubbio
dubitare
ducale
duna
duomo
duplice
duraturo
ebano
eccesso
ecco
eclissi
economia
edera
edicola
edile
editoria
educare
egemonia
egli
egoismo
egregio
elaborato
elargire
elegante
elencato
eletto
elevare
elfico
elica
elmo
elsa
eluso
emanato
emblema
emesso
emiro
emotivo
emozione
empirico
emulo
endemico
enduro
energia
enfasi
enoteca
entrare
enzima
epatite
epilogo
episodio
epocale
eppure
equatore
erario
erba
erboso
erede
eremita
erigere
ermetico
eroe
erosivo
errante
esagono
esame
esanime
esaudire
esca
esempio
esercito
esibito
esigente
esistere
esito
esofago
esortato
esoso
espanso
espresso
essenza
esso
esteso
estimare
estonia
estroso
esultare
etilico
etnico
etrusco
etto
euclideo
europa
evaso
evidenza
evitato
evoluto
evviva
fabbrica
faccenda
fachiro
falco
famiglia
fanale
fanfara
fango
fantasma
fare
farfalla
farinoso
farmaco
fascia
fastoso
fasullo
faticare
fato
favoloso
febbre
fecola
fede
fegato
felpa
feltro
femmina
fendere
fenomeno
fermento
ferro
fertile
fessura
festivo
fetta
feudo
fiaba
fiducia
fifa
figurato
filo
finanza
finestra
finire
fiore
fiscale
fisico
fiume
flacone
flamenco
flebo
flemma
florido
fluente
fluoro
fobico
focaccia
focoso
foderato
foglio
folata
folclore
folgore
fondente
fonetico
fonia
fontana
forbito
forchetta
foresta
formica
fornaio
foro
fortezza
forzare
fosfato
fosso
fracasso
frana
frassino
fratello
freccetta
frenata
fresco
frigo
frollino
fronde
frugale
frutta
fucilata
fucsia
fuggente
fulmine
fulvo
fumante
fumetto
fumoso
fune
funzione
fuoco
furbo
furgone
furore
fuso
futile
gabbiano
gaffe
galateo
gallina
galoppo
gambero
gamma
garanzia
garbo
garofano
garzone
gasdotto
gasolio
gastrico
gatto
gaudio
gazebo
gazzella
geco
gelatina
gelso
gemello
gemmato
gene
genitore
gennaio
genotipo
gergo
ghepardo
ghiaccio
ghisa
giallo
gilda
ginepro
giocare
gioiello
giorno
giove
girato
girone
gittata
giudizio
giurato
giusto
globulo
glutine
gnomo
gobba
golf
gomito
gommone
gonfio
gonna
governo
gracile
grado
grafico
grammo
grande
grattare
gravoso
grazia
greca
gregge
grifone
grigio
grinza
grotta
gruppo
guadagno
guaio
guanto
guardare
gufo
guidare
ibernato
icona
identico
idillio
idolo
idra
idrico
idrogeno
igiene
ignaro
ignorato
ilare
illeso
illogico
illudere
imballo
imbevuto
imbocco
imbuto
immane
immerso
immolato
impacco
impeto
impiego
importo
impronta
inalare
inarcare
inattivo
incanto
incendio
inchino
incisivo
incluso
incontro
incrocio
incubo
indagine
india
indole
inedito
infatti
infilare
inflitto
ingaggio
ingegno
inglese
ingordo
ingrosso
innesco
inodore
inoltrare
inondato
insano
insetto
insieme
insonnia
insulina
intasato
intero
intonaco
intuito
inumidire
invalido
invece
invito
iperbole
ipnotico
ipotesi
ippica
iride
irlanda
ironico
irrigato
irrorare
isolato
isotopo
isterico
istituto
istrice
italia
iterare
labbro
labirinto
lacca
lacerato
lacrima
lacuna
laddove
lago
lampo
lancetta
lanterna
lardoso
larga
laringe
lastra
latenza
latino
lattuga
lavagna
lavoro
legale
leggero
lembo
lentezza
lenza
leone
lepre
lesivo
lessato
lesto
letterale
leva
levigato
libero
lido
lievito
lilla
limatura
limitare
limpido
lineare
lingua
liquido
lira
lirica
lisca
lite
litigio
livrea
locanda
lode
logica
lombare
londra
longevo
loquace
lorenzo
loto
lotteria
luce
lucidato
lumaca
luminoso
lungo
lupo
luppolo
lusinga
lusso
lutto
macabro
macchina
macero
macinato
madama
magico
maglia
magnete
magro
maiolica
malafede
malgrado
malinteso
malsano
malto
malumore
mana
mancia
mandorla
mangiare
manifesto
mannaro
manovra
mansarda
mantide
manubrio
mappa
maratona
marcire
maretta
marmo
marsupio
maschera
massaia
mastino
materasso
matricola
mattone
maturo
mazurca
meandro
meccanico
mecenate
medesimo
meditare
mega
melassa
melis
melodia
meninge
meno
mensola
mercurio
merenda
merlo
meschino
mese
messere
mestolo
metallo
metodo
mettere
miagolare
mica
micelio
michele
microbo
midollo
miele
migliore
milano
milite
mimosa
minerale
mini
minore
mirino
mirtillo
miscela
missiva
misto
misurare
mitezza
mitigare
mitra
mittente
mnemonico
modello
modifica
modulo
mogano
mogio
mole
molosso
monastero
monco
mondina
monetario
monile
monotono
monsone
montato
monviso
mora
mordere
morsicato
mostro
motivato
motosega
motto
movenza
movimento
mozzo
mucca
mucosa
muffa
mughetto
mugnaio
mulatto
mulinello
multiplo
mummia
munto
muovere
murale
musa
muscolo
musica
mutevole
muto
nababbo
nafta
nanometro
narciso
narice
narrato
nascere
nastrare
naturale
nautica
naviglio
nebulosa
necrosi
negativo
negozio
nemmeno
neofita
neretto
nervo
nessuno
nettuno
neutrale
neve
nevrotico
nicchia
ninfa
nitido
nobile
nocivo
nodo
nome
nomina
nordico
normale
norvegese
nostrano
notare
notizia
notturno
novella
nucleo
nulla
numero
nuovo
nutrire
nuvola
nuziale
oasi
obbedire
obbligo
obelisco
oblio
obolo
obsoleto
occasione
occhio
occidente
occorrere
occultare
ocra
oculato
odierno
odorare
offerta
offrire
offuscato
oggetto
oggi
ognuno
olandese
olfatto
oliato
oliva
ologramma
oltre
omaggio
ombelico
ombra
omega
omissione
ondoso
onere
onice
onnivoro
onorevole
onta
operato
opinione
opposto
oracolo
orafo
ordine
orecchino
orefice
orfano
organico
origine
orizzonte
orma
ormeggio
ornativo
orologio
orrendo
orribile
ortensia
ortica
orzata
orzo
osare
oscurare
osmosi
ospedale
ospite
ossa
ossidare
ostacolo
oste
otite
otre
ottagono
ottimo
ottobre
ovale
ovest
ovino
oviparo
ovocito
ovunque
ovviare
ozio
pacchetto
pace
pacifico
padella
padrone
paese
paga
pagina
palazzina
palesare
pallido
palo
palude
pandoro
pannello
paolo
paonazzo
paprica
parabola
parcella
parere
pargolo
pari
parlato
parola
partire
parvenza
parziale
passivo
pasticca
patacca
patologia
pattume
pavone
peccato
pedalare
pedonale
peggio
peloso
penare
pendice
penisola
pennuto
penombra
pensare
pentola
pepe
pepita
perbene
percorso
perdonato
perforare
pergamena
periodo
permesso
perno
perplesso
persuaso
pertugio
pervaso
pesatore
pesista
peso
pestifero
petalo
pettine
petulante
pezzo
piacere
pianta
piattino
piccino
picozza
piega
pietra
piffero
pigiama
pigolio
pigro
pila
pilifero
pillola
pilota
pimpante
pineta
pinna
pinolo
pioggia
piombo
piramide
piretico
pirite
pirolisi
pitone
pizzico
placebo
planare
plasma
platano
plenario
pochezza
poderoso
podismo
poesia
poggiare
polenta
poligono
pollice
polmonite
polpetta
polso
poltrona
polvere
pomice
pomodoro
ponte
popoloso
porfido
poroso
porpora
porre
portata
posa
positivo
possesso
postulato
potassio
potere
pranzo
prassi
pratica
precluso
predica
prefisso
pregiato
prelievo
premere
prenotare
preparato
presenza
pretesto
prevalso
prima
principe
privato
problema
procura
produrre
profumo
progetto
prolunga
promessa
pronome
proposta
proroga
proteso
prova
prudente
prugna
prurito
psiche
pubblico
pudica
pugilato
pugno
pulce
pulito
pulsante
puntare
pupazzo
pupilla
puro
quadro
qualcosa
quasi
querela
quota
raccolto
raddoppio
radicale
radunato
raffica
ragazzo
ragione
ragno
ramarro
ramingo
ramo
randagio
rantolare
rapato
rapina
rappreso
rasatura
raschiato
rasente
rassegna
rastrello
rata
ravveduto
reale
recepire
recinto
recluta
recondito
recupero
reddito
redimere
regalato
registro
regola
regresso
relazione
remare
remoto
renna
replica
reprimere
reputare
resa
residente
responso
restauro
rete
retina
retorica
rettifica
revocato
riassunto
ribadire
ribelle
ribrezzo
ricarica
ricco
ricevere
riciclato
ricordo
ricreduto
ridicolo
ridurre
rifasare
riflesso
riforma
rifugio
rigare
rigettato
righello
rilassato
rilevato
rimanere
rimbalzo
rimedio
rimorchio
rinascita
rincaro
rinforzo
rinnovo
rinomato
rinsavito
rintocco
rinuncia
rinvenire
riparato
ripetuto
ripieno
riportare
ripresa
ripulire
risata
rischio
riserva
risibile
riso
rispetto
ristoro
risultato
risvolto
ritardo
ritegno
ritmico
ritrovo
riunione
riva
riverso
rivincita
rivolto
rizoma
roba
robotico
robusto
roccia
roco
rodaggio
rodere
roditore
rogito
rollio
romantico
rompere
ronzio
rosolare
rospo
rotante
rotondo
rotula
rovescio
rubizzo
rubrica
ruga
rullino
rumine
rumoroso
ruolo
rupe
russare
rustico
sabato
sabbiare
sabotato
sagoma
salasso
saldatura
salgemma
salivare
salmone
salone
saltare
saluto
salvo
sapere
sapido
saporito
saraceno
sarcasmo
sarto
sassoso
satellite
satira
satollo
saturno
savana
savio
saziato
sbadiglio
sbalzo
sbancato
sbarra
sbattere
sbavare
sbendare
sbirciare
sbloccato
sbocciato
sbrinare
sbruffone
sbuffare
scabroso
scadenza
scala
scambiare
scandalo
scapola
scarso
scatenare
scavato
scelto
scenico
scettro
scheda
schiena
sciarpa
scienza
scindere
scippo
sciroppo
scivolo
sclerare
scodella
scolpito
scomparto
sconforto
scoprire
scorta
scossone
scozzese
scriba
scrollare
scrutinio
scuderia
scultore
scuola
scuro
scusare
sdebitare
sdoganare
seccatura
secondo
sedano
seggiola
segnalato
segregato
seguito
selciato
selettivo
sella
selvaggio
semaforo
sembrare
seme
seminato
sempre
senso
sentire
sepolto
sequenza
serata
serbato
sereno
serio
serpente
serraglio
servire
sestina
setola
settimana
sfacelo
sfaldare
sfamato
sfarzoso
sfaticato
sfera
sfida
sfilato
sfinge
sfocato
sfoderare
sfogo
sfoltire
sforzato
sfratto
sfruttato
sfuggito
sfumare
sfuso
sgabello
sgarbato
sgonfiare
sgorbio
sgrassato
sguardo
sibilo
siccome
sierra
sigla
signore
silenzio
sillaba
simbolo
simpatico
simulato
sinfonia
singolo
sinistro
sino
sintesi
sinusoide
sipario
sisma
sistole
situato
slitta
slogatura
sloveno
smarrito
smemorato
smentito
smeraldo
smilzo
smontare
smottato
smussato
snellire
snervato
snodo
sobbalzo
sobrio
soccorso
sociale
sodale
soffitto
sogno
soldato
solenne
solido
sollazzo
solo
solubile
solvente
somatico
somma
sonda
sonetto
sonnifero
sopire
soppeso
sopra
sorgere
sorpasso
sorriso
sorso
sorteggio
sorvolato
sospiro
sosta
sottile
spada
spalla
spargere
spatola
spavento
spazzola
specie
spedire
spegnere
spelatura
speranza
spessore
spettrale
spezzato
spia
spigoloso
spillato
spinoso
spirale
splendido
sportivo
sposo
spranga
sprecare
spronato
spruzzo
spuntino
squillo
sradicare
srotolato
stabile
stacco
staffa
stagnare
stampato
stantio
starnuto
stasera
statuto
stelo
steppa
sterzo
stiletto
stima
stirpe
stivale
stizzoso
stonato
storico
strappo
stregato
stridulo
strozzare
strutto
stuccare
stufo
stupendo
subentro
succoso
sudore
suggerito
sugo
sultano
suonare
superbo
supporto
surgelato
surrogato
sussurro
sutura
svagare
svedese
sveglio
svelare
svenuto
svezia
sviluppo
svista
svizzera
svolta
svuotare
tabacco
tabulato
tacciare
taciturno
tale
talismano
tampone
tannino
tara
tardivo
targato
tariffa
tarpare
tartaruga
tasto
tattico
taverna
tavolata
tazza
teca
tecnico
telefono
temerario
tempo
temuto
tendone
tenero
tensione
tentacolo
teorema
terme
terrazzo
terzetto
tesi
tesserato
testato
tetro
tettoia
tifare
tigella
timbro
tinto
tipico
tipografo
tiraggio
tiro
titanio
titolo
titubante
tizio
tizzone
toccare
tollerare
tolto
tombola
tomo
tonfo
tonsilla
topazio
topologia
toppa
torba
tornare
torrone
tortora
toscano
tossire
tostatura
totano
trabocco
trachea
trafila
tragedia
tralcio
tramonto
transito
trapano
trarre
trasloco
trattato
trave
treccia
tremolio
trespolo
tributo
tricheco
trifoglio
trillo
trincea
trio
tristezza
triturato
trivella
tromba
trono
troppo
trottola
trovare
truccato
tubatura
tuffato
tulipano
tumulto
tunisia
turbare
turchino
tuta
tutela
ubicato
uccello
uccisore
udire
uditivo
uffa
ufficio
uguale
ulisse
ultimato
umano
umile
umorismo
uncinetto
ungere
ungherese
unicorno
unificato
unisono
unitario
unte
uovo
upupa
uragano
urgenza
urlo
usanza
usato
uscito
usignolo
usuraio
utensile
utilizzo
utopia
vacante
vaccinato
vagabondo
vagliato
valanga
valgo
valico
valletta
valoroso
valutare
valvola
vampata
vangare
vanitoso
vano
vantaggio
vanvera
vapore
varano
varcato
variante
vasca
vedetta
vedova
veduto
vegetale
veicolo
velcro
velina
velluto
veloce
venato
vendemmia
vento
verace
verbale
vergogna
verifica
vero
verruca
verticale
vescica
vessillo
vestale
veterano
vetrina
vetusto
viandante
vibrante
vicenda
vichingo
vicinanza
vidimare
vigilia
vigneto
vigore
vile
villano
vimini
vincitore
viola
vipera
virgola
virologo
virulento
viscoso
visione
vispo
vissuto
visura
vita
vitello
vittima
vivanda
vivido
viziare
voce
voga
volatile
volere
volpe
voragine
vulcano
zampogna
zanna
zappato
zattera
zavorra
zefiro
zelante
zelo
zenzero
zerbino
zibetto
zinco
zircone
zitto
zolla
zotico
zucchero
zufolo
zulu
zuppa`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/japanese.js
var wordlist5 = `あいこくしん
あいさつ
あいだ
あおぞら
あかちゃん
あきる
あけがた
あける
あこがれる
あさい
あさひ
あしあと
あじわう
あずかる
あずき
あそぶ
あたえる
あたためる
あたりまえ
あたる
あつい
あつかう
あっしゅく
あつまり
あつめる
あてな
あてはまる
あひる
あぶら
あぶる
あふれる
あまい
あまど
あまやかす
あまり
あみもの
あめりか
あやまる
あゆむ
あらいぐま
あらし
あらすじ
あらためる
あらゆる
あらわす
ありがとう
あわせる
あわてる
あんい
あんがい
あんこ
あんぜん
あんてい
あんない
あんまり
いいだす
いおん
いがい
いがく
いきおい
いきなり
いきもの
いきる
いくじ
いくぶん
いけばな
いけん
いこう
いこく
いこつ
いさましい
いさん
いしき
いじゅう
いじょう
いじわる
いずみ
いずれ
いせい
いせえび
いせかい
いせき
いぜん
いそうろう
いそがしい
いだい
いだく
いたずら
いたみ
いたりあ
いちおう
いちじ
いちど
いちば
いちぶ
いちりゅう
いつか
いっしゅん
いっせい
いっそう
いったん
いっち
いってい
いっぽう
いてざ
いてん
いどう
いとこ
いない
いなか
いねむり
いのち
いのる
いはつ
いばる
いはん
いびき
いひん
いふく
いへん
いほう
いみん
いもうと
いもたれ
いもり
いやがる
いやす
いよかん
いよく
いらい
いらすと
いりぐち
いりょう
いれい
いれもの
いれる
いろえんぴつ
いわい
いわう
いわかん
いわば
いわゆる
いんげんまめ
いんさつ
いんしょう
いんよう
うえき
うえる
うおざ
うがい
うかぶ
うかべる
うきわ
うくらいな
うくれれ
うけたまわる
うけつけ
うけとる
うけもつ
うける
うごかす
うごく
うこん
うさぎ
うしなう
うしろがみ
うすい
うすぎ
うすぐらい
うすめる
うせつ
うちあわせ
うちがわ
うちき
うちゅう
うっかり
うつくしい
うったえる
うつる
うどん
うなぎ
うなじ
うなずく
うなる
うねる
うのう
うぶげ
うぶごえ
うまれる
うめる
うもう
うやまう
うよく
うらがえす
うらぐち
うらない
うりあげ
うりきれ
うるさい
うれしい
うれゆき
うれる
うろこ
うわき
うわさ
うんこう
うんちん
うんてん
うんどう
えいえん
えいが
えいきょう
えいご
えいせい
えいぶん
えいよう
えいわ
えおり
えがお
えがく
えきたい
えくせる
えしゃく
えすて
えつらん
えのぐ
えほうまき
えほん
えまき
えもじ
えもの
えらい
えらぶ
えりあ
えんえん
えんかい
えんぎ
えんげき
えんしゅう
えんぜつ
えんそく
えんちょう
えんとつ
おいかける
おいこす
おいしい
おいつく
おうえん
おうさま
おうじ
おうせつ
おうたい
おうふく
おうべい
おうよう
おえる
おおい
おおう
おおどおり
おおや
おおよそ
おかえり
おかず
おがむ
おかわり
おぎなう
おきる
おくさま
おくじょう
おくりがな
おくる
おくれる
おこす
おこなう
おこる
おさえる
おさない
おさめる
おしいれ
おしえる
おじぎ
おじさん
おしゃれ
おそらく
おそわる
おたがい
おたく
おだやか
おちつく
おっと
おつり
おでかけ
おとしもの
おとなしい
おどり
おどろかす
おばさん
おまいり
おめでとう
おもいで
おもう
おもたい
おもちゃ
おやつ
おやゆび
およぼす
おらんだ
おろす
おんがく
おんけい
おんしゃ
おんせん
おんだん
おんちゅう
おんどけい
かあつ
かいが
がいき
がいけん
がいこう
かいさつ
かいしゃ
かいすいよく
かいぜん
かいぞうど
かいつう
かいてん
かいとう
かいふく
がいへき
かいほう
かいよう
がいらい
かいわ
かえる
かおり
かかえる
かがく
かがし
かがみ
かくご
かくとく
かざる
がぞう
かたい
かたち
がちょう
がっきゅう
がっこう
がっさん
がっしょう
かなざわし
かのう
がはく
かぶか
かほう
かほご
かまう
かまぼこ
かめれおん
かゆい
かようび
からい
かるい
かろう
かわく
かわら
がんか
かんけい
かんこう
かんしゃ
かんそう
かんたん
かんち
がんばる
きあい
きあつ
きいろ
ぎいん
きうい
きうん
きえる
きおう
きおく
きおち
きおん
きかい
きかく
きかんしゃ
ききて
きくばり
きくらげ
きけんせい
きこう
きこえる
きこく
きさい
きさく
きさま
きさらぎ
ぎじかがく
ぎしき
ぎじたいけん
ぎじにってい
ぎじゅつしゃ
きすう
きせい
きせき
きせつ
きそう
きぞく
きぞん
きたえる
きちょう
きつえん
ぎっちり
きつつき
きつね
きてい
きどう
きどく
きない
きなが
きなこ
きぬごし
きねん
きのう
きのした
きはく
きびしい
きひん
きふく
きぶん
きぼう
きほん
きまる
きみつ
きむずかしい
きめる
きもだめし
きもち
きもの
きゃく
きやく
ぎゅうにく
きよう
きょうりゅう
きらい
きらく
きりん
きれい
きれつ
きろく
ぎろん
きわめる
ぎんいろ
きんかくじ
きんじょ
きんようび
ぐあい
くいず
くうかん
くうき
くうぐん
くうこう
ぐうせい
くうそう
ぐうたら
くうふく
くうぼ
くかん
くきょう
くげん
ぐこう
くさい
くさき
くさばな
くさる
くしゃみ
くしょう
くすのき
くすりゆび
くせげ
くせん
ぐたいてき
くださる
くたびれる
くちこみ
くちさき
くつした
ぐっすり
くつろぐ
くとうてん
くどく
くなん
くねくね
くのう
くふう
くみあわせ
くみたてる
くめる
くやくしょ
くらす
くらべる
くるま
くれる
くろう
くわしい
ぐんかん
ぐんしょく
ぐんたい
ぐんて
けあな
けいかく
けいけん
けいこ
けいさつ
げいじゅつ
けいたい
げいのうじん
けいれき
けいろ
けおとす
けおりもの
げきか
げきげん
げきだん
げきちん
げきとつ
げきは
げきやく
げこう
げこくじょう
げざい
けさき
げざん
けしき
けしごむ
けしょう
げすと
けたば
けちゃっぷ
けちらす
けつあつ
けつい
けつえき
けっこん
けつじょ
けっせき
けってい
けつまつ
げつようび
げつれい
けつろん
げどく
けとばす
けとる
けなげ
けなす
けなみ
けぬき
げねつ
けねん
けはい
げひん
けぶかい
げぼく
けまり
けみかる
けむし
けむり
けもの
けらい
けろけろ
けわしい
けんい
けんえつ
けんお
けんか
げんき
けんげん
けんこう
けんさく
けんしゅう
けんすう
げんそう
けんちく
けんてい
けんとう
けんない
けんにん
げんぶつ
けんま
けんみん
けんめい
けんらん
けんり
こあくま
こいぬ
こいびと
ごうい
こうえん
こうおん
こうかん
ごうきゅう
ごうけい
こうこう
こうさい
こうじ
こうすい
ごうせい
こうそく
こうたい
こうちゃ
こうつう
こうてい
こうどう
こうない
こうはい
ごうほう
ごうまん
こうもく
こうりつ
こえる
こおり
ごかい
ごがつ
ごかん
こくご
こくさい
こくとう
こくない
こくはく
こぐま
こけい
こける
ここのか
こころ
こさめ
こしつ
こすう
こせい
こせき
こぜん
こそだて
こたい
こたえる
こたつ
こちょう
こっか
こつこつ
こつばん
こつぶ
こてい
こてん
ことがら
ことし
ことば
ことり
こなごな
こねこね
このまま
このみ
このよ
ごはん
こひつじ
こふう
こふん
こぼれる
ごまあぶら
こまかい
ごますり
こまつな
こまる
こむぎこ
こもじ
こもち
こもの
こもん
こやく
こやま
こゆう
こゆび
こよい
こよう
こりる
これくしょん
ころっけ
こわもて
こわれる
こんいん
こんかい
こんき
こんしゅう
こんすい
こんだて
こんとん
こんなん
こんびに
こんぽん
こんまけ
こんや
こんれい
こんわく
ざいえき
さいかい
さいきん
ざいげん
ざいこ
さいしょ
さいせい
ざいたく
ざいちゅう
さいてき
ざいりょう
さうな
さかいし
さがす
さかな
さかみち
さがる
さぎょう
さくし
さくひん
さくら
さこく
さこつ
さずかる
ざせき
さたん
さつえい
ざつおん
ざっか
ざつがく
さっきょく
ざっし
さつじん
ざっそう
さつたば
さつまいも
さてい
さといも
さとう
さとおや
さとし
さとる
さのう
さばく
さびしい
さべつ
さほう
さほど
さます
さみしい
さみだれ
さむけ
さめる
さやえんどう
さゆう
さよう
さよく
さらだ
ざるそば
さわやか
さわる
さんいん
さんか
さんきゃく
さんこう
さんさい
ざんしょ
さんすう
さんせい
さんそ
さんち
さんま
さんみ
さんらん
しあい
しあげ
しあさって
しあわせ
しいく
しいん
しうち
しえい
しおけ
しかい
しかく
じかん
しごと
しすう
じだい
したうけ
したぎ
したて
したみ
しちょう
しちりん
しっかり
しつじ
しつもん
してい
してき
してつ
じてん
じどう
しなぎれ
しなもの
しなん
しねま
しねん
しのぐ
しのぶ
しはい
しばかり
しはつ
しはらい
しはん
しひょう
しふく
じぶん
しへい
しほう
しほん
しまう
しまる
しみん
しむける
じむしょ
しめい
しめる
しもん
しゃいん
しゃうん
しゃおん
じゃがいも
しやくしょ
しゃくほう
しゃけん
しゃこ
しゃざい
しゃしん
しゃせん
しゃそう
しゃたい
しゃちょう
しゃっきん
じゃま
しゃりん
しゃれい
じゆう
じゅうしょ
しゅくはく
じゅしん
しゅっせき
しゅみ
しゅらば
じゅんばん
しょうかい
しょくたく
しょっけん
しょどう
しょもつ
しらせる
しらべる
しんか
しんこう
じんじゃ
しんせいじ
しんちく
しんりん
すあげ
すあし
すあな
ずあん
すいえい
すいか
すいとう
ずいぶん
すいようび
すうがく
すうじつ
すうせん
すおどり
すきま
すくう
すくない
すける
すごい
すこし
ずさん
すずしい
すすむ
すすめる
すっかり
ずっしり
ずっと
すてき
すてる
すねる
すのこ
すはだ
すばらしい
ずひょう
ずぶぬれ
すぶり
すふれ
すべて
すべる
ずほう
すぼん
すまい
すめし
すもう
すやき
すらすら
するめ
すれちがう
すろっと
すわる
すんぜん
すんぽう
せあぶら
せいかつ
せいげん
せいじ
せいよう
せおう
せかいかん
せきにん
せきむ
せきゆ
せきらんうん
せけん
せこう
せすじ
せたい
せたけ
せっかく
せっきゃく
ぜっく
せっけん
せっこつ
せっさたくま
せつぞく
せつだん
せつでん
せっぱん
せつび
せつぶん
せつめい
せつりつ
せなか
せのび
せはば
せびろ
せぼね
せまい
せまる
せめる
せもたれ
せりふ
ぜんあく
せんい
せんえい
せんか
せんきょ
せんく
せんげん
ぜんご
せんさい
せんしゅ
せんすい
せんせい
せんぞ
せんたく
せんちょう
せんてい
せんとう
せんぬき
せんねん
せんぱい
ぜんぶ
ぜんぽう
せんむ
せんめんじょ
せんもん
せんやく
せんゆう
せんよう
ぜんら
ぜんりゃく
せんれい
せんろ
そあく
そいとげる
そいね
そうがんきょう
そうき
そうご
そうしん
そうだん
そうなん
そうび
そうめん
そうり
そえもの
そえん
そがい
そげき
そこう
そこそこ
そざい
そしな
そせい
そせん
そそぐ
そだてる
そつう
そつえん
そっかん
そつぎょう
そっけつ
そっこう
そっせん
そっと
そとがわ
そとづら
そなえる
そなた
そふぼ
そぼく
そぼろ
そまつ
そまる
そむく
そむりえ
そめる
そもそも
そよかぜ
そらまめ
そろう
そんかい
そんけい
そんざい
そんしつ
そんぞく
そんちょう
ぞんび
ぞんぶん
そんみん
たあい
たいいん
たいうん
たいえき
たいおう
だいがく
たいき
たいぐう
たいけん
たいこ
たいざい
だいじょうぶ
だいすき
たいせつ
たいそう
だいたい
たいちょう
たいてい
だいどころ
たいない
たいねつ
たいのう
たいはん
だいひょう
たいふう
たいへん
たいほ
たいまつばな
たいみんぐ
たいむ
たいめん
たいやき
たいよう
たいら
たいりょく
たいる
たいわん
たうえ
たえる
たおす
たおる
たおれる
たかい
たかね
たきび
たくさん
たこく
たこやき
たさい
たしざん
だじゃれ
たすける
たずさわる
たそがれ
たたかう
たたく
ただしい
たたみ
たちばな
だっかい
だっきゃく
だっこ
だっしゅつ
だったい
たてる
たとえる
たなばた
たにん
たぬき
たのしみ
たはつ
たぶん
たべる
たぼう
たまご
たまる
だむる
ためいき
ためす
ためる
たもつ
たやすい
たよる
たらす
たりきほんがん
たりょう
たりる
たると
たれる
たれんと
たろっと
たわむれる
だんあつ
たんい
たんおん
たんか
たんき
たんけん
たんご
たんさん
たんじょうび
だんせい
たんそく
たんたい
だんち
たんてい
たんとう
だんな
たんにん
だんねつ
たんのう
たんぴん
だんぼう
たんまつ
たんめい
だんれつ
だんろ
だんわ
ちあい
ちあん
ちいき
ちいさい
ちえん
ちかい
ちから
ちきゅう
ちきん
ちけいず
ちけん
ちこく
ちさい
ちしき
ちしりょう
ちせい
ちそう
ちたい
ちたん
ちちおや
ちつじょ
ちてき
ちてん
ちぬき
ちぬり
ちのう
ちひょう
ちへいせん
ちほう
ちまた
ちみつ
ちみどろ
ちめいど
ちゃんこなべ
ちゅうい
ちゆりょく
ちょうし
ちょさくけん
ちらし
ちらみ
ちりがみ
ちりょう
ちるど
ちわわ
ちんたい
ちんもく
ついか
ついたち
つうか
つうじょう
つうはん
つうわ
つかう
つかれる
つくね
つくる
つけね
つける
つごう
つたえる
つづく
つつじ
つつむ
つとめる
つながる
つなみ
つねづね
つのる
つぶす
つまらない
つまる
つみき
つめたい
つもり
つもる
つよい
つるぼ
つるみく
つわもの
つわり
てあし
てあて
てあみ
ていおん
ていか
ていき
ていけい
ていこく
ていさつ
ていし
ていせい
ていたい
ていど
ていねい
ていひょう
ていへん
ていぼう
てうち
ておくれ
てきとう
てくび
でこぼこ
てさぎょう
てさげ
てすり
てそう
てちがい
てちょう
てつがく
てつづき
でっぱ
てつぼう
てつや
でぬかえ
てぬき
てぬぐい
てのひら
てはい
てぶくろ
てふだ
てほどき
てほん
てまえ
てまきずし
てみじか
てみやげ
てらす
てれび
てわけ
てわたし
でんあつ
てんいん
てんかい
てんき
てんぐ
てんけん
てんごく
てんさい
てんし
てんすう
でんち
てんてき
てんとう
てんない
てんぷら
てんぼうだい
てんめつ
てんらんかい
でんりょく
でんわ
どあい
といれ
どうかん
とうきゅう
どうぐ
とうし
とうむぎ
とおい
とおか
とおく
とおす
とおる
とかい
とかす
ときおり
ときどき
とくい
とくしゅう
とくてん
とくに
とくべつ
とけい
とける
とこや
とさか
としょかん
とそう
とたん
とちゅう
とっきゅう
とっくん
とつぜん
とつにゅう
とどける
ととのえる
とない
となえる
となり
とのさま
とばす
どぶがわ
とほう
とまる
とめる
ともだち
ともる
どようび
とらえる
とんかつ
どんぶり
ないかく
ないこう
ないしょ
ないす
ないせん
ないそう
なおす
ながい
なくす
なげる
なこうど
なさけ
なたでここ
なっとう
なつやすみ
ななおし
なにごと
なにもの
なにわ
なのか
なふだ
なまいき
なまえ
なまみ
なみだ
なめらか
なめる
なやむ
ならう
ならび
ならぶ
なれる
なわとび
なわばり
にあう
にいがた
にうけ
におい
にかい
にがて
にきび
にくしみ
にくまん
にげる
にさんかたんそ
にしき
にせもの
にちじょう
にちようび
にっか
にっき
にっけい
にっこう
にっさん
にっしょく
にっすう
にっせき
にってい
になう
にほん
にまめ
にもつ
にやり
にゅういん
にりんしゃ
にわとり
にんい
にんか
にんき
にんげん
にんしき
にんずう
にんそう
にんたい
にんち
にんてい
にんにく
にんぷ
にんまり
にんむ
にんめい
にんよう
ぬいくぎ
ぬかす
ぬぐいとる
ぬぐう
ぬくもり
ぬすむ
ぬまえび
ぬめり
ぬらす
ぬんちゃく
ねあげ
ねいき
ねいる
ねいろ
ねぐせ
ねくたい
ねくら
ねこぜ
ねこむ
ねさげ
ねすごす
ねそべる
ねだん
ねつい
ねっしん
ねつぞう
ねったいぎょ
ねぶそく
ねふだ
ねぼう
ねほりはほり
ねまき
ねまわし
ねみみ
ねむい
ねむたい
ねもと
ねらう
ねわざ
ねんいり
ねんおし
ねんかん
ねんきん
ねんぐ
ねんざ
ねんし
ねんちゃく
ねんど
ねんぴ
ねんぶつ
ねんまつ
ねんりょう
ねんれい
のいず
のおづま
のがす
のきなみ
のこぎり
のこす
のこる
のせる
のぞく
のぞむ
のたまう
のちほど
のっく
のばす
のはら
のべる
のぼる
のみもの
のやま
のらいぬ
のらねこ
のりもの
のりゆき
のれん
のんき
ばあい
はあく
ばあさん
ばいか
ばいく
はいけん
はいご
はいしん
はいすい
はいせん
はいそう
はいち
ばいばい
はいれつ
はえる
はおる
はかい
ばかり
はかる
はくしゅ
はけん
はこぶ
はさみ
はさん
はしご
ばしょ
はしる
はせる
ぱそこん
はそん
はたん
はちみつ
はつおん
はっかく
はづき
はっきり
はっくつ
はっけん
はっこう
はっさん
はっしん
はったつ
はっちゅう
はってん
はっぴょう
はっぽう
はなす
はなび
はにかむ
はぶらし
はみがき
はむかう
はめつ
はやい
はやし
はらう
はろうぃん
はわい
はんい
はんえい
はんおん
はんかく
はんきょう
ばんぐみ
はんこ
はんしゃ
はんすう
はんだん
ぱんち
ぱんつ
はんてい
はんとし
はんのう
はんぱ
はんぶん
はんぺん
はんぼうき
はんめい
はんらん
はんろん
ひいき
ひうん
ひえる
ひかく
ひかり
ひかる
ひかん
ひくい
ひけつ
ひこうき
ひこく
ひさい
ひさしぶり
ひさん
びじゅつかん
ひしょ
ひそか
ひそむ
ひたむき
ひだり
ひたる
ひつぎ
ひっこし
ひっし
ひつじゅひん
ひっす
ひつぜん
ぴったり
ぴっちり
ひつよう
ひてい
ひとごみ
ひなまつり
ひなん
ひねる
ひはん
ひびく
ひひょう
ひほう
ひまわり
ひまん
ひみつ
ひめい
ひめじし
ひやけ
ひやす
ひよう
びょうき
ひらがな
ひらく
ひりつ
ひりょう
ひるま
ひるやすみ
ひれい
ひろい
ひろう
ひろき
ひろゆき
ひんかく
ひんけつ
ひんこん
ひんしゅ
ひんそう
ぴんち
ひんぱん
びんぼう
ふあん
ふいうち
ふうけい
ふうせん
ぷうたろう
ふうとう
ふうふ
ふえる
ふおん
ふかい
ふきん
ふくざつ
ふくぶくろ
ふこう
ふさい
ふしぎ
ふじみ
ふすま
ふせい
ふせぐ
ふそく
ぶたにく
ふたん
ふちょう
ふつう
ふつか
ふっかつ
ふっき
ふっこく
ぶどう
ふとる
ふとん
ふのう
ふはい
ふひょう
ふへん
ふまん
ふみん
ふめつ
ふめん
ふよう
ふりこ
ふりる
ふるい
ふんいき
ぶんがく
ぶんぐ
ふんしつ
ぶんせき
ふんそう
ぶんぽう
へいあん
へいおん
へいがい
へいき
へいげん
へいこう
へいさ
へいしゃ
へいせつ
へいそ
へいたく
へいてん
へいねつ
へいわ
へきが
へこむ
べにいろ
べにしょうが
へらす
へんかん
べんきょう
べんごし
へんさい
へんたい
べんり
ほあん
ほいく
ぼうぎょ
ほうこく
ほうそう
ほうほう
ほうもん
ほうりつ
ほえる
ほおん
ほかん
ほきょう
ぼきん
ほくろ
ほけつ
ほけん
ほこう
ほこる
ほしい
ほしつ
ほしゅ
ほしょう
ほせい
ほそい
ほそく
ほたて
ほたる
ぽちぶくろ
ほっきょく
ほっさ
ほったん
ほとんど
ほめる
ほんい
ほんき
ほんけ
ほんしつ
ほんやく
まいにち
まかい
まかせる
まがる
まける
まこと
まさつ
まじめ
ますく
まぜる
まつり
まとめ
まなぶ
まぬけ
まねく
まほう
まもる
まゆげ
まよう
まろやか
まわす
まわり
まわる
まんが
まんきつ
まんぞく
まんなか
みいら
みうち
みえる
みがく
みかた
みかん
みけん
みこん
みじかい
みすい
みすえる
みせる
みっか
みつかる
みつける
みてい
みとめる
みなと
みなみかさい
みねらる
みのう
みのがす
みほん
みもと
みやげ
みらい
みりょく
みわく
みんか
みんぞく
むいか
むえき
むえん
むかい
むかう
むかえ
むかし
むぎちゃ
むける
むげん
むさぼる
むしあつい
むしば
むじゅん
むしろ
むすう
むすこ
むすぶ
むすめ
むせる
むせん
むちゅう
むなしい
むのう
むやみ
むよう
むらさき
むりょう
むろん
めいあん
めいうん
めいえん
めいかく
めいきょく
めいさい
めいし
めいそう
めいぶつ
めいれい
めいわく
めぐまれる
めざす
めした
めずらしい
めだつ
めまい
めやす
めんきょ
めんせき
めんどう
もうしあげる
もうどうけん
もえる
もくし
もくてき
もくようび
もちろん
もどる
もらう
もんく
もんだい
やおや
やける
やさい
やさしい
やすい
やすたろう
やすみ
やせる
やそう
やたい
やちん
やっと
やっぱり
やぶる
やめる
ややこしい
やよい
やわらかい
ゆうき
ゆうびんきょく
ゆうべ
ゆうめい
ゆけつ
ゆしゅつ
ゆせん
ゆそう
ゆたか
ゆちゃく
ゆでる
ゆにゅう
ゆびわ
ゆらい
ゆれる
ようい
ようか
ようきゅう
ようじ
ようす
ようちえん
よかぜ
よかん
よきん
よくせい
よくぼう
よけい
よごれる
よさん
よしゅう
よそう
よそく
よっか
よてい
よどがわく
よねつ
よやく
よゆう
よろこぶ
よろしい
らいう
らくがき
らくご
らくさつ
らくだ
らしんばん
らせん
らぞく
らたい
らっか
られつ
りえき
りかい
りきさく
りきせつ
りくぐん
りくつ
りけん
りこう
りせい
りそう
りそく
りてん
りねん
りゆう
りゅうがく
りよう
りょうり
りょかん
りょくちゃ
りょこう
りりく
りれき
りろん
りんご
るいけい
るいさい
るいじ
るいせき
るすばん
るりがわら
れいかん
れいぎ
れいせい
れいぞうこ
れいとう
れいぼう
れきし
れきだい
れんあい
れんけい
れんこん
れんさい
れんしゅう
れんぞく
れんらく
ろうか
ろうご
ろうじん
ろうそく
ろくが
ろこつ
ろじうら
ろしゅつ
ろせん
ろてん
ろめん
ろれつ
ろんぎ
ろんぱ
ろんぶん
ろんり
わかす
わかめ
わかやま
わかれる
わしつ
わじまし
わすれもの
わらう
われる`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/korean.js
var wordlist6 = `가격
가끔
가난
가능
가득
가르침
가뭄
가방
가상
가슴
가운데
가을
가이드
가입
가장
가정
가족
가죽
각오
각자
간격
간부
간섭
간장
간접
간판
갈등
갈비
갈색
갈증
감각
감기
감소
감수성
감자
감정
갑자기
강남
강당
강도
강력히
강변
강북
강사
강수량
강아지
강원도
강의
강제
강조
같이
개구리
개나리
개방
개별
개선
개성
개인
객관적
거실
거액
거울
거짓
거품
걱정
건강
건물
건설
건조
건축
걸음
검사
검토
게시판
게임
겨울
견해
결과
결국
결론
결석
결승
결심
결정
결혼
경계
경고
경기
경력
경복궁
경비
경상도
경영
경우
경쟁
경제
경주
경찰
경치
경향
경험
계곡
계단
계란
계산
계속
계약
계절
계층
계획
고객
고구려
고궁
고급
고등학생
고무신
고민
고양이
고장
고전
고집
고춧가루
고통
고향
곡식
골목
골짜기
골프
공간
공개
공격
공군
공급
공기
공동
공무원
공부
공사
공식
공업
공연
공원
공장
공짜
공책
공통
공포
공항
공휴일
과목
과일
과장
과정
과학
관객
관계
관광
관념
관람
관련
관리
관습
관심
관점
관찰
광경
광고
광장
광주
괴로움
굉장히
교과서
교문
교복
교실
교양
교육
교장
교직
교통
교환
교훈
구경
구름
구멍
구별
구분
구석
구성
구속
구역
구입
구청
구체적
국가
국기
국내
국립
국물
국민
국수
국어
국왕
국적
국제
국회
군대
군사
군인
궁극적
권리
권위
권투
귀국
귀신
규정
규칙
균형
그날
그냥
그늘
그러나
그룹
그릇
그림
그제서야
그토록
극복
극히
근거
근교
근래
근로
근무
근본
근원
근육
근처
글씨
글자
금강산
금고
금년
금메달
금액
금연
금요일
금지
긍정적
기간
기관
기념
기능
기독교
기둥
기록
기름
기법
기본
기분
기쁨
기숙사
기술
기억
기업
기온
기운
기원
기적
기준
기침
기혼
기획
긴급
긴장
길이
김밥
김치
김포공항
깍두기
깜빡
깨달음
깨소금
껍질
꼭대기
꽃잎
나들이
나란히
나머지
나물
나침반
나흘
낙엽
난방
날개
날씨
날짜
남녀
남대문
남매
남산
남자
남편
남학생
낭비
낱말
내년
내용
내일
냄비
냄새
냇물
냉동
냉면
냉방
냉장고
넥타이
넷째
노동
노란색
노력
노인
녹음
녹차
녹화
논리
논문
논쟁
놀이
농구
농담
농민
농부
농업
농장
농촌
높이
눈동자
눈물
눈썹
뉴욕
느낌
늑대
능동적
능력
다방
다양성
다음
다이어트
다행
단계
단골
단독
단맛
단순
단어
단위
단점
단체
단추
단편
단풍
달걀
달러
달력
달리
닭고기
담당
담배
담요
담임
답변
답장
당근
당분간
당연히
당장
대규모
대낮
대단히
대답
대도시
대략
대량
대륙
대문
대부분
대신
대응
대장
대전
대접
대중
대책
대출
대충
대통령
대학
대한민국
대합실
대형
덩어리
데이트
도대체
도덕
도둑
도망
도서관
도심
도움
도입
도자기
도저히
도전
도중
도착
독감
독립
독서
독일
독창적
동화책
뒷모습
뒷산
딸아이
마누라
마늘
마당
마라톤
마련
마무리
마사지
마약
마요네즈
마을
마음
마이크
마중
마지막
마찬가지
마찰
마흔
막걸리
막내
막상
만남
만두
만세
만약
만일
만점
만족
만화
많이
말기
말씀
말투
맘대로
망원경
매년
매달
매력
매번
매스컴
매일
매장
맥주
먹이
먼저
먼지
멀리
메일
며느리
며칠
면담
멸치
명단
명령
명예
명의
명절
명칭
명함
모금
모니터
모델
모든
모범
모습
모양
모임
모조리
모집
모퉁이
목걸이
목록
목사
목소리
목숨
목적
목표
몰래
몸매
몸무게
몸살
몸속
몸짓
몸통
몹시
무관심
무궁화
무더위
무덤
무릎
무슨
무엇
무역
무용
무조건
무지개
무척
문구
문득
문법
문서
문제
문학
문화
물가
물건
물결
물고기
물론
물리학
물음
물질
물체
미국
미디어
미사일
미술
미역
미용실
미움
미인
미팅
미혼
민간
민족
민주
믿음
밀가루
밀리미터
밑바닥
바가지
바구니
바나나
바늘
바닥
바닷가
바람
바이러스
바탕
박물관
박사
박수
반대
반드시
반말
반발
반성
반응
반장
반죽
반지
반찬
받침
발가락
발걸음
발견
발달
발레
발목
발바닥
발생
발음
발자국
발전
발톱
발표
밤하늘
밥그릇
밥맛
밥상
밥솥
방금
방면
방문
방바닥
방법
방송
방식
방안
방울
방지
방학
방해
방향
배경
배꼽
배달
배드민턴
백두산
백색
백성
백인
백제
백화점
버릇
버섯
버튼
번개
번역
번지
번호
벌금
벌레
벌써
범위
범인
범죄
법률
법원
법적
법칙
베이징
벨트
변경
변동
변명
변신
변호사
변화
별도
별명
별일
병실
병아리
병원
보관
보너스
보라색
보람
보름
보상
보안
보자기
보장
보전
보존
보통
보편적
보험
복도
복사
복숭아
복습
볶음
본격적
본래
본부
본사
본성
본인
본질
볼펜
봉사
봉지
봉투
부근
부끄러움
부담
부동산
부문
부분
부산
부상
부엌
부인
부작용
부장
부정
부족
부지런히
부친
부탁
부품
부회장
북부
북한
분노
분량
분리
분명
분석
분야
분위기
분필
분홍색
불고기
불과
불교
불꽃
불만
불법
불빛
불안
불이익
불행
브랜드
비극
비난
비닐
비둘기
비디오
비로소
비만
비명
비밀
비바람
비빔밥
비상
비용
비율
비중
비타민
비판
빌딩
빗물
빗방울
빗줄기
빛깔
빨간색
빨래
빨리
사건
사계절
사나이
사냥
사람
사랑
사립
사모님
사물
사방
사상
사생활
사설
사슴
사실
사업
사용
사월
사장
사전
사진
사촌
사춘기
사탕
사투리
사흘
산길
산부인과
산업
산책
살림
살인
살짝
삼계탕
삼국
삼십
삼월
삼촌
상관
상금
상대
상류
상반기
상상
상식
상업
상인
상자
상점
상처
상추
상태
상표
상품
상황
새벽
색깔
색연필
생각
생명
생물
생방송
생산
생선
생신
생일
생활
서랍
서른
서명
서민
서비스
서양
서울
서적
서점
서쪽
서클
석사
석유
선거
선물
선배
선생
선수
선원
선장
선전
선택
선풍기
설거지
설날
설렁탕
설명
설문
설사
설악산
설치
설탕
섭씨
성공
성당
성명
성별
성인
성장
성적
성질
성함
세금
세미나
세상
세월
세종대왕
세탁
센터
센티미터
셋째
소규모
소극적
소금
소나기
소년
소득
소망
소문
소설
소속
소아과
소용
소원
소음
소중히
소지품
소질
소풍
소형
속담
속도
속옷
손가락
손길
손녀
손님
손등
손목
손뼉
손실
손질
손톱
손해
솔직히
솜씨
송아지
송이
송편
쇠고기
쇼핑
수건
수년
수단
수돗물
수동적
수면
수명
수박
수상
수석
수술
수시로
수업
수염
수영
수입
수준
수집
수출
수컷
수필
수학
수험생
수화기
숙녀
숙소
숙제
순간
순서
순수
순식간
순위
숟가락
술병
술집
숫자
스님
스물
스스로
스승
스웨터
스위치
스케이트
스튜디오
스트레스
스포츠
슬쩍
슬픔
습관
습기
승객
승리
승부
승용차
승진
시각
시간
시골
시금치
시나리오
시댁
시리즈
시멘트
시민
시부모
시선
시설
시스템
시아버지
시어머니
시월
시인
시일
시작
시장
시절
시점
시중
시즌
시집
시청
시합
시험
식구
식기
식당
식량
식료품
식물
식빵
식사
식생활
식초
식탁
식품
신고
신규
신념
신문
신발
신비
신사
신세
신용
신제품
신청
신체
신화
실감
실내
실력
실례
실망
실수
실습
실시
실장
실정
실질적
실천
실체
실컷
실태
실패
실험
실현
심리
심부름
심사
심장
심정
심판
쌍둥이
씨름
씨앗
아가씨
아나운서
아드님
아들
아쉬움
아스팔트
아시아
아울러
아저씨
아줌마
아직
아침
아파트
아프리카
아픔
아홉
아흔
악기
악몽
악수
안개
안경
안과
안내
안녕
안동
안방
안부
안주
알루미늄
알코올
암시
암컷
압력
앞날
앞문
애인
애정
액수
앨범
야간
야단
야옹
약간
약국
약속
약수
약점
약품
약혼녀
양념
양력
양말
양배추
양주
양파
어둠
어려움
어른
어젯밤
어쨌든
어쩌다가
어쩐지
언니
언덕
언론
언어
얼굴
얼른
얼음
얼핏
엄마
업무
업종
업체
엉덩이
엉망
엉터리
엊그제
에너지
에어컨
엔진
여건
여고생
여관
여군
여권
여대생
여덟
여동생
여든
여론
여름
여섯
여성
여왕
여인
여전히
여직원
여학생
여행
역사
역시
역할
연결
연구
연극
연기
연락
연설
연세
연속
연습
연애
연예인
연인
연장
연주
연출
연필
연합
연휴
열기
열매
열쇠
열심히
열정
열차
열흘
염려
엽서
영국
영남
영상
영양
영역
영웅
영원히
영하
영향
영혼
영화
옆구리
옆방
옆집
예감
예금
예방
예산
예상
예선
예술
예습
예식장
예약
예전
예절
예정
예컨대
옛날
오늘
오락
오랫동안
오렌지
오로지
오른발
오븐
오십
오염
오월
오전
오직
오징어
오페라
오피스텔
오히려
옥상
옥수수
온갖
온라인
온몸
온종일
온통
올가을
올림픽
올해
옷차림
와이셔츠
와인
완성
완전
왕비
왕자
왜냐하면
왠지
외갓집
외국
외로움
외삼촌
외출
외침
외할머니
왼발
왼손
왼쪽
요금
요일
요즘
요청
용기
용서
용어
우산
우선
우승
우연히
우정
우체국
우편
운동
운명
운반
운전
운행
울산
울음
움직임
웃어른
웃음
워낙
원고
원래
원서
원숭이
원인
원장
원피스
월급
월드컵
월세
월요일
웨이터
위반
위법
위성
위원
위험
위협
윗사람
유난히
유럽
유명
유물
유산
유적
유치원
유학
유행
유형
육군
육상
육십
육체
은행
음력
음료
음반
음성
음식
음악
음주
의견
의논
의문
의복
의식
의심
의외로
의욕
의원
의학
이것
이곳
이념
이놈
이달
이대로
이동
이렇게
이력서
이론적
이름
이민
이발소
이별
이불
이빨
이상
이성
이슬
이야기
이용
이웃
이월
이윽고
이익
이전
이중
이튿날
이틀
이혼
인간
인격
인공
인구
인근
인기
인도
인류
인물
인생
인쇄
인연
인원
인재
인종
인천
인체
인터넷
인하
인형
일곱
일기
일단
일대
일등
일반
일본
일부
일상
일생
일손
일요일
일월
일정
일종
일주일
일찍
일체
일치
일행
일회용
임금
임무
입대
입력
입맛
입사
입술
입시
입원
입장
입학
자가용
자격
자극
자동
자랑
자부심
자식
자신
자연
자원
자율
자전거
자정
자존심
자판
작가
작년
작성
작업
작용
작은딸
작품
잔디
잔뜩
잔치
잘못
잠깐
잠수함
잠시
잠옷
잠자리
잡지
장관
장군
장기간
장래
장례
장르
장마
장면
장모
장미
장비
장사
장소
장식
장애인
장인
장점
장차
장학금
재능
재빨리
재산
재생
재작년
재정
재채기
재판
재학
재활용
저것
저고리
저곳
저녁
저런
저렇게
저번
저울
저절로
저축
적극
적당히
적성
적용
적응
전개
전공
전기
전달
전라도
전망
전문
전반
전부
전세
전시
전용
전자
전쟁
전주
전철
전체
전통
전혀
전후
절대
절망
절반
절약
절차
점검
점수
점심
점원
점점
점차
접근
접시
접촉
젓가락
정거장
정도
정류장
정리
정말
정면
정문
정반대
정보
정부
정비
정상
정성
정오
정원
정장
정지
정치
정확히
제공
제과점
제대로
제목
제발
제법
제삿날
제안
제일
제작
제주도
제출
제품
제한
조각
조건
조금
조깅
조명
조미료
조상
조선
조용히
조절
조정
조직
존댓말
존재
졸업
졸음
종교
종로
종류
종소리
종업원
종종
종합
좌석
죄인
주관적
주름
주말
주머니
주먹
주문
주민
주방
주변
주식
주인
주일
주장
주전자
주택
준비
줄거리
줄기
줄무늬
중간
중계방송
중국
중년
중단
중독
중반
중부
중세
중소기업
중순
중앙
중요
중학교
즉석
즉시
즐거움
증가
증거
증권
증상
증세
지각
지갑
지경
지극히
지금
지급
지능
지름길
지리산
지방
지붕
지식
지역
지우개
지원
지적
지점
지진
지출
직선
직업
직원
직장
진급
진동
진로
진료
진리
진짜
진찰
진출
진통
진행
질문
질병
질서
짐작
집단
집안
집중
짜증
찌꺼기
차남
차라리
차량
차림
차별
차선
차츰
착각
찬물
찬성
참가
참기름
참새
참석
참여
참외
참조
찻잔
창가
창고
창구
창문
창밖
창작
창조
채널
채점
책가방
책방
책상
책임
챔피언
처벌
처음
천국
천둥
천장
천재
천천히
철도
철저히
철학
첫날
첫째
청년
청바지
청소
청춘
체계
체력
체온
체육
체중
체험
초등학생
초반
초밥
초상화
초순
초여름
초원
초저녁
초점
초청
초콜릿
촛불
총각
총리
총장
촬영
최근
최상
최선
최신
최악
최종
추석
추억
추진
추천
추측
축구
축소
축제
축하
출근
출발
출산
출신
출연
출입
출장
출판
충격
충고
충돌
충분히
충청도
취업
취직
취향
치약
친구
친척
칠십
칠월
칠판
침대
침묵
침실
칫솔
칭찬
카메라
카운터
칼국수
캐릭터
캠퍼스
캠페인
커튼
컨디션
컬러
컴퓨터
코끼리
코미디
콘서트
콜라
콤플렉스
콩나물
쾌감
쿠데타
크림
큰길
큰딸
큰소리
큰아들
큰어머니
큰일
큰절
클래식
클럽
킬로
타입
타자기
탁구
탁자
탄생
태권도
태양
태풍
택시
탤런트
터널
터미널
테니스
테스트
테이블
텔레비전
토론
토마토
토요일
통계
통과
통로
통신
통역
통일
통장
통제
통증
통합
통화
퇴근
퇴원
퇴직금
튀김
트럭
특급
특별
특성
특수
특징
특히
튼튼히
티셔츠
파란색
파일
파출소
판결
판단
판매
판사
팔십
팔월
팝송
패션
팩스
팩시밀리
팬티
퍼센트
페인트
편견
편의
편지
편히
평가
평균
평생
평소
평양
평일
평화
포스터
포인트
포장
포함
표면
표정
표준
표현
품목
품질
풍경
풍속
풍습
프랑스
프린터
플라스틱
피곤
피망
피아노
필름
필수
필요
필자
필통
핑계
하느님
하늘
하드웨어
하룻밤
하반기
하숙집
하순
하여튼
하지만
하천
하품
하필
학과
학교
학급
학기
학년
학력
학번
학부모
학비
학생
학술
학습
학용품
학원
학위
학자
학점
한계
한글
한꺼번에
한낮
한눈
한동안
한때
한라산
한마디
한문
한번
한복
한식
한여름
한쪽
할머니
할아버지
할인
함께
함부로
합격
합리적
항공
항구
항상
항의
해결
해군
해답
해당
해물
해석
해설
해수욕장
해안
핵심
핸드백
햄버거
햇볕
햇살
행동
행복
행사
행운
행위
향기
향상
향수
허락
허용
헬기
현관
현금
현대
현상
현실
현장
현재
현지
혈액
협력
형부
형사
형수
형식
형제
형태
형편
혜택
호기심
호남
호랑이
호박
호텔
호흡
혹시
홀로
홈페이지
홍보
홍수
홍차
화면
화분
화살
화요일
화장
화학
확보
확인
확장
확정
환갑
환경
환영
환율
환자
활기
활동
활발히
활용
활짝
회견
회관
회복
회색
회원
회장
회전
횟수
횡단보도
효율적
후반
후춧가루
훈련
훨씬
휴식
휴일
흉내
흐름
흑백
흑인
흔적
흔히
흥미
흥분
희곡
희망
희생
흰색
힘껏`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/portuguese.js
var wordlist7 = `abacate
abaixo
abalar
abater
abduzir
abelha
aberto
abismo
abotoar
abranger
abreviar
abrigar
abrupto
absinto
absoluto
absurdo
abutre
acabado
acalmar
acampar
acanhar
acaso
aceitar
acelerar
acenar
acervo
acessar
acetona
achatar
acidez
acima
acionado
acirrar
aclamar
aclive
acolhida
acomodar
acoplar
acordar
acumular
acusador
adaptar
adega
adentro
adepto
adequar
aderente
adesivo
adeus
adiante
aditivo
adjetivo
adjunto
admirar
adorar
adquirir
adubo
adverso
advogado
aeronave
afastar
aferir
afetivo
afinador
afivelar
aflito
afluente
afrontar
agachar
agarrar
agasalho
agenciar
agilizar
agiota
agitado
agora
agradar
agreste
agrupar
aguardar
agulha
ajoelhar
ajudar
ajustar
alameda
alarme
alastrar
alavanca
albergue
albino
alcatra
aldeia
alecrim
alegria
alertar
alface
alfinete
algum
alheio
aliar
alicate
alienar
alinhar
aliviar
almofada
alocar
alpiste
alterar
altitude
alucinar
alugar
aluno
alusivo
alvo
amaciar
amador
amarelo
amassar
ambas
ambiente
ameixa
amenizar
amido
amistoso
amizade
amolador
amontoar
amoroso
amostra
amparar
ampliar
ampola
anagrama
analisar
anarquia
anatomia
andaime
anel
anexo
angular
animar
anjo
anomalia
anotado
ansioso
anterior
anuidade
anunciar
anzol
apagador
apalpar
apanhado
apego
apelido
apertada
apesar
apetite
apito
aplauso
aplicada
apoio
apontar
aposta
aprendiz
aprovar
aquecer
arame
aranha
arara
arcada
ardente
areia
arejar
arenito
aresta
argiloso
argola
arma
arquivo
arraial
arrebate
arriscar
arroba
arrumar
arsenal
arterial
artigo
arvoredo
asfaltar
asilado
aspirar
assador
assinar
assoalho
assunto
astral
atacado
atadura
atalho
atarefar
atear
atender
aterro
ateu
atingir
atirador
ativo
atoleiro
atracar
atrevido
atriz
atual
atum
auditor
aumentar
aura
aurora
autismo
autoria
autuar
avaliar
avante
avaria
avental
avesso
aviador
avisar
avulso
axila
azarar
azedo
azeite
azulejo
babar
babosa
bacalhau
bacharel
bacia
bagagem
baiano
bailar
baioneta
bairro
baixista
bajular
baleia
baliza
balsa
banal
bandeira
banho
banir
banquete
barato
barbado
baronesa
barraca
barulho
baseado
bastante
batata
batedor
batida
batom
batucar
baunilha
beber
beijo
beirada
beisebol
beldade
beleza
belga
beliscar
bendito
bengala
benzer
berimbau
berlinda
berro
besouro
bexiga
bezerro
bico
bicudo
bienal
bifocal
bifurcar
bigorna
bilhete
bimestre
bimotor
biologia
biombo
biosfera
bipolar
birrento
biscoito
bisneto
bispo
bissexto
bitola
bizarro
blindado
bloco
bloquear
boato
bobagem
bocado
bocejo
bochecha
boicotar
bolada
boletim
bolha
bolo
bombeiro
bonde
boneco
bonita
borbulha
borda
boreal
borracha
bovino
boxeador
branco
brasa
braveza
breu
briga
brilho
brincar
broa
brochura
bronzear
broto
bruxo
bucha
budismo
bufar
bule
buraco
busca
busto
buzina
cabana
cabelo
cabide
cabo
cabrito
cacau
cacetada
cachorro
cacique
cadastro
cadeado
cafezal
caiaque
caipira
caixote
cajado
caju
calafrio
calcular
caldeira
calibrar
calmante
calota
camada
cambista
camisa
camomila
campanha
camuflar
canavial
cancelar
caneta
canguru
canhoto
canivete
canoa
cansado
cantar
canudo
capacho
capela
capinar
capotar
capricho
captador
capuz
caracol
carbono
cardeal
careca
carimbar
carneiro
carpete
carreira
cartaz
carvalho
casaco
casca
casebre
castelo
casulo
catarata
cativar
caule
causador
cautelar
cavalo
caverna
cebola
cedilha
cegonha
celebrar
celular
cenoura
censo
centeio
cercar
cerrado
certeiro
cerveja
cetim
cevada
chacota
chaleira
chamado
chapada
charme
chatice
chave
chefe
chegada
cheiro
cheque
chicote
chifre
chinelo
chocalho
chover
chumbo
chutar
chuva
cicatriz
ciclone
cidade
cidreira
ciente
cigana
cimento
cinto
cinza
ciranda
circuito
cirurgia
citar
clareza
clero
clicar
clone
clube
coado
coagir
cobaia
cobertor
cobrar
cocada
coelho
coentro
coeso
cogumelo
coibir
coifa
coiote
colar
coleira
colher
colidir
colmeia
colono
coluna
comando
combinar
comentar
comitiva
comover
complexo
comum
concha
condor
conectar
confuso
congelar
conhecer
conjugar
consumir
contrato
convite
cooperar
copeiro
copiador
copo
coquetel
coragem
cordial
corneta
coronha
corporal
correio
cortejo
coruja
corvo
cosseno
costela
cotonete
couro
couve
covil
cozinha
cratera
cravo
creche
credor
creme
crer
crespo
criada
criminal
crioulo
crise
criticar
crosta
crua
cruzeiro
cubano
cueca
cuidado
cujo
culatra
culminar
culpar
cultura
cumprir
cunhado
cupido
curativo
curral
cursar
curto
cuspir
custear
cutelo
damasco
datar
debater
debitar
deboche
debulhar
decalque
decimal
declive
decote
decretar
dedal
dedicado
deduzir
defesa
defumar
degelo
degrau
degustar
deitado
deixar
delator
delegado
delinear
delonga
demanda
demitir
demolido
dentista
depenado
depilar
depois
depressa
depurar
deriva
derramar
desafio
desbotar
descanso
desenho
desfiado
desgaste
desigual
deslize
desmamar
desova
despesa
destaque
desviar
detalhar
detentor
detonar
detrito
deusa
dever
devido
devotado
dezena
diagrama
dialeto
didata
difuso
digitar
dilatado
diluente
diminuir
dinastia
dinheiro
diocese
direto
discreta
disfarce
disparo
disquete
dissipar
distante
ditador
diurno
diverso
divisor
divulgar
dizer
dobrador
dolorido
domador
dominado
donativo
donzela
dormente
dorsal
dosagem
dourado
doutor
drenagem
drible
drogaria
duelar
duende
dueto
duplo
duquesa
durante
duvidoso
eclodir
ecoar
ecologia
edificar
edital
educado
efeito
efetivar
ejetar
elaborar
eleger
eleitor
elenco
elevador
eliminar
elogiar
embargo
embolado
embrulho
embutido
emenda
emergir
emissor
empatia
empenho
empinado
empolgar
emprego
empurrar
emulador
encaixe
encenado
enchente
encontro
endeusar
endossar
enfaixar
enfeite
enfim
engajado
engenho
englobar
engomado
engraxar
enguia
enjoar
enlatar
enquanto
enraizar
enrolado
enrugar
ensaio
enseada
ensino
ensopado
entanto
enteado
entidade
entortar
entrada
entulho
envergar
enviado
envolver
enxame
enxerto
enxofre
enxuto
epiderme
equipar
ereto
erguido
errata
erva
ervilha
esbanjar
esbelto
escama
escola
escrita
escuta
esfinge
esfolar
esfregar
esfumado
esgrima
esmalte
espanto
espelho
espiga
esponja
espreita
espumar
esquerda
estaca
esteira
esticar
estofado
estrela
estudo
esvaziar
etanol
etiqueta
euforia
europeu
evacuar
evaporar
evasivo
eventual
evidente
evoluir
exagero
exalar
examinar
exato
exausto
excesso
excitar
exclamar
executar
exemplo
exibir
exigente
exonerar
expandir
expelir
expirar
explanar
exposto
expresso
expulsar
externo
extinto
extrato
fabricar
fabuloso
faceta
facial
fada
fadiga
faixa
falar
falta
familiar
fandango
fanfarra
fantoche
fardado
farelo
farinha
farofa
farpa
fartura
fatia
fator
favorita
faxina
fazenda
fechado
feijoada
feirante
felino
feminino
fenda
feno
fera
feriado
ferrugem
ferver
festejar
fetal
feudal
fiapo
fibrose
ficar
ficheiro
figurado
fileira
filho
filme
filtrar
firmeza
fisgada
fissura
fita
fivela
fixador
fixo
flacidez
flamingo
flanela
flechada
flora
flutuar
fluxo
focal
focinho
fofocar
fogo
foguete
foice
folgado
folheto
forjar
formiga
forno
forte
fosco
fossa
fragata
fralda
frango
frasco
fraterno
freira
frente
fretar
frieza
friso
fritura
fronha
frustrar
fruteira
fugir
fulano
fuligem
fundar
fungo
funil
furador
furioso
futebol
gabarito
gabinete
gado
gaiato
gaiola
gaivota
galega
galho
galinha
galocha
ganhar
garagem
garfo
gargalo
garimpo
garoupa
garrafa
gasoduto
gasto
gata
gatilho
gaveta
gazela
gelado
geleia
gelo
gemada
gemer
gemido
generoso
gengiva
genial
genoma
genro
geologia
gerador
germinar
gesso
gestor
ginasta
gincana
gingado
girafa
girino
glacial
glicose
global
glorioso
goela
goiaba
golfe
golpear
gordura
gorjeta
gorro
gostoso
goteira
governar
gracejo
gradual
grafite
gralha
grampo
granada
gratuito
graveto
graxa
grego
grelhar
greve
grilo
grisalho
gritaria
grosso
grotesco
grudado
grunhido
gruta
guache
guarani
guaxinim
guerrear
guiar
guincho
guisado
gula
guloso
guru
habitar
harmonia
haste
haver
hectare
herdar
heresia
hesitar
hiato
hibernar
hidratar
hiena
hino
hipismo
hipnose
hipoteca
hoje
holofote
homem
honesto
honrado
hormonal
hospedar
humorado
iate
ideia
idoso
ignorado
igreja
iguana
ileso
ilha
iludido
iluminar
ilustrar
imagem
imediato
imenso
imersivo
iminente
imitador
imortal
impacto
impedir
implante
impor
imprensa
impune
imunizar
inalador
inapto
inativo
incenso
inchar
incidir
incluir
incolor
indeciso
indireto
indutor
ineficaz
inerente
infantil
infestar
infinito
inflamar
informal
infrator
ingerir
inibido
inicial
inimigo
injetar
inocente
inodoro
inovador
inox
inquieto
inscrito
inseto
insistir
inspetor
instalar
insulto
intacto
integral
intimar
intocado
intriga
invasor
inverno
invicto
invocar
iogurte
iraniano
ironizar
irreal
irritado
isca
isento
isolado
isqueiro
italiano
janeiro
jangada
janta
jararaca
jardim
jarro
jasmim
jato
javali
jazida
jejum
joaninha
joelhada
jogador
joia
jornal
jorrar
jovem
juba
judeu
judoca
juiz
julgador
julho
jurado
jurista
juro
justa
labareda
laboral
lacre
lactante
ladrilho
lagarta
lagoa
laje
lamber
lamentar
laminar
lampejo
lanche
lapidar
lapso
laranja
lareira
largura
lasanha
lastro
lateral
latido
lavanda
lavoura
lavrador
laxante
lazer
lealdade
lebre
legado
legendar
legista
leigo
leiloar
leitura
lembrete
leme
lenhador
lentilha
leoa
lesma
leste
letivo
letreiro
levar
leveza
levitar
liberal
libido
liderar
ligar
ligeiro
limitar
limoeiro
limpador
linda
linear
linhagem
liquidez
listagem
lisura
litoral
livro
lixa
lixeira
locador
locutor
lojista
lombo
lona
longe
lontra
lorde
lotado
loteria
loucura
lousa
louvar
luar
lucidez
lucro
luneta
lustre
lutador
luva
macaco
macete
machado
macio
madeira
madrinha
magnata
magreza
maior
mais
malandro
malha
malote
maluco
mamilo
mamoeiro
mamute
manada
mancha
mandato
manequim
manhoso
manivela
manobrar
mansa
manter
manusear
mapeado
maquinar
marcador
maresia
marfim
margem
marinho
marmita
maroto
marquise
marreco
martelo
marujo
mascote
masmorra
massagem
mastigar
matagal
materno
matinal
matutar
maxilar
medalha
medida
medusa
megafone
meiga
melancia
melhor
membro
memorial
menino
menos
mensagem
mental
merecer
mergulho
mesada
mesclar
mesmo
mesquita
mestre
metade
meteoro
metragem
mexer
mexicano
micro
migalha
migrar
milagre
milenar
milhar
mimado
minerar
minhoca
ministro
minoria
miolo
mirante
mirtilo
misturar
mocidade
moderno
modular
moeda
moer
moinho
moita
moldura
moleza
molho
molinete
molusco
montanha
moqueca
morango
morcego
mordomo
morena
mosaico
mosquete
mostarda
motel
motim
moto
motriz
muda
muito
mulata
mulher
multar
mundial
munido
muralha
murcho
muscular
museu
musical
nacional
nadador
naja
namoro
narina
narrado
nascer
nativa
natureza
navalha
navegar
navio
neblina
nebuloso
negativa
negociar
negrito
nervoso
neta
neural
nevasca
nevoeiro
ninar
ninho
nitidez
nivelar
nobreza
noite
noiva
nomear
nominal
nordeste
nortear
notar
noticiar
noturno
novelo
novilho
novo
nublado
nudez
numeral
nupcial
nutrir
nuvem
obcecado
obedecer
objetivo
obrigado
obscuro
obstetra
obter
obturar
ocidente
ocioso
ocorrer
oculista
ocupado
ofegante
ofensiva
oferenda
oficina
ofuscado
ogiva
olaria
oleoso
olhar
oliveira
ombro
omelete
omisso
omitir
ondulado
oneroso
ontem
opcional
operador
oponente
oportuno
oposto
orar
orbitar
ordem
ordinal
orfanato
orgasmo
orgulho
oriental
origem
oriundo
orla
ortodoxo
orvalho
oscilar
ossada
osso
ostentar
otimismo
ousadia
outono
outubro
ouvido
ovelha
ovular
oxidar
oxigenar
pacato
paciente
pacote
pactuar
padaria
padrinho
pagar
pagode
painel
pairar
paisagem
palavra
palestra
palheta
palito
palmada
palpitar
pancada
panela
panfleto
panqueca
pantanal
papagaio
papelada
papiro
parafina
parcial
pardal
parede
partida
pasmo
passado
pastel
patamar
patente
patinar
patrono
paulada
pausar
peculiar
pedalar
pedestre
pediatra
pedra
pegada
peitoral
peixe
pele
pelicano
penca
pendurar
peneira
penhasco
pensador
pente
perceber
perfeito
pergunta
perito
permitir
perna
perplexo
persiana
pertence
peruca
pescado
pesquisa
pessoa
petiscar
piada
picado
piedade
pigmento
pilastra
pilhado
pilotar
pimenta
pincel
pinguim
pinha
pinote
pintar
pioneiro
pipoca
piquete
piranha
pires
pirueta
piscar
pistola
pitanga
pivete
planta
plaqueta
platina
plebeu
plumagem
pluvial
pneu
poda
poeira
poetisa
polegada
policiar
poluente
polvilho
pomar
pomba
ponderar
pontaria
populoso
porta
possuir
postal
pote
poupar
pouso
povoar
praia
prancha
prato
praxe
prece
predador
prefeito
premiar
prensar
preparar
presilha
pretexto
prevenir
prezar
primata
princesa
prisma
privado
processo
produto
profeta
proibido
projeto
prometer
propagar
prosa
protetor
provador
publicar
pudim
pular
pulmonar
pulseira
punhal
punir
pupilo
pureza
puxador
quadra
quantia
quarto
quase
quebrar
queda
queijo
quente
querido
quimono
quina
quiosque
rabanada
rabisco
rachar
racionar
radial
raiar
rainha
raio
raiva
rajada
ralado
ramal
ranger
ranhura
rapadura
rapel
rapidez
raposa
raquete
raridade
rasante
rascunho
rasgar
raspador
rasteira
rasurar
ratazana
ratoeira
realeza
reanimar
reaver
rebaixar
rebelde
rebolar
recado
recente
recheio
recibo
recordar
recrutar
recuar
rede
redimir
redonda
reduzida
reenvio
refinar
refletir
refogar
refresco
refugiar
regalia
regime
regra
reinado
reitor
rejeitar
relativo
remador
remendo
remorso
renovado
reparo
repelir
repleto
repolho
represa
repudiar
requerer
resenha
resfriar
resgatar
residir
resolver
respeito
ressaca
restante
resumir
retalho
reter
retirar
retomada
retratar
revelar
revisor
revolta
riacho
rica
rigidez
rigoroso
rimar
ringue
risada
risco
risonho
robalo
rochedo
rodada
rodeio
rodovia
roedor
roleta
romano
roncar
rosado
roseira
rosto
rota
roteiro
rotina
rotular
rouco
roupa
roxo
rubro
rugido
rugoso
ruivo
rumo
rupestre
russo
sabor
saciar
sacola
sacudir
sadio
safira
saga
sagrada
saibro
salada
saleiro
salgado
saliva
salpicar
salsicha
saltar
salvador
sambar
samurai
sanar
sanfona
sangue
sanidade
sapato
sarda
sargento
sarjeta
saturar
saudade
saxofone
sazonal
secar
secular
seda
sedento
sediado
sedoso
sedutor
segmento
segredo
segundo
seiva
seleto
selvagem
semanal
semente
senador
senhor
sensual
sentado
separado
sereia
seringa
serra
servo
setembro
setor
sigilo
silhueta
silicone
simetria
simpatia
simular
sinal
sincero
singular
sinopse
sintonia
sirene
siri
situado
soberano
sobra
socorro
sogro
soja
solda
soletrar
solteiro
sombrio
sonata
sondar
sonegar
sonhador
sono
soprano
soquete
sorrir
sorteio
sossego
sotaque
soterrar
sovado
sozinho
suavizar
subida
submerso
subsolo
subtrair
sucata
sucesso
suco
sudeste
sufixo
sugador
sugerir
sujeito
sulfato
sumir
suor
superior
suplicar
suposto
suprimir
surdina
surfista
surpresa
surreal
surtir
suspiro
sustento
tabela
tablete
tabuada
tacho
tagarela
talher
talo
talvez
tamanho
tamborim
tampa
tangente
tanto
tapar
tapioca
tardio
tarefa
tarja
tarraxa
tatuagem
taurino
taxativo
taxista
teatral
tecer
tecido
teclado
tedioso
teia
teimar
telefone
telhado
tempero
tenente
tensor
tentar
termal
terno
terreno
tese
tesoura
testado
teto
textura
texugo
tiara
tigela
tijolo
timbrar
timidez
tingido
tinteiro
tiragem
titular
toalha
tocha
tolerar
tolice
tomada
tomilho
tonel
tontura
topete
tora
torcido
torneio
torque
torrada
torto
tostar
touca
toupeira
toxina
trabalho
tracejar
tradutor
trafegar
trajeto
trama
trancar
trapo
traseiro
tratador
travar
treino
tremer
trepidar
trevo
triagem
tribo
triciclo
tridente
trilogia
trindade
triplo
triturar
triunfal
trocar
trombeta
trova
trunfo
truque
tubular
tucano
tudo
tulipa
tupi
turbo
turma
turquesa
tutelar
tutorial
uivar
umbigo
unha
unidade
uniforme
urologia
urso
urtiga
urubu
usado
usina
usufruir
vacina
vadiar
vagaroso
vaidoso
vala
valente
validade
valores
vantagem
vaqueiro
varanda
vareta
varrer
vascular
vasilha
vassoura
vazar
vazio
veado
vedar
vegetar
veicular
veleiro
velhice
veludo
vencedor
vendaval
venerar
ventre
verbal
verdade
vereador
vergonha
vermelho
verniz
versar
vertente
vespa
vestido
vetorial
viaduto
viagem
viajar
viatura
vibrador
videira
vidraria
viela
viga
vigente
vigiar
vigorar
vilarejo
vinco
vinheta
vinil
violeta
virada
virtude
visitar
visto
vitral
viveiro
vizinho
voador
voar
vogal
volante
voleibol
voltagem
volumoso
vontade
vulto
vuvuzela
xadrez
xarope
xeque
xeretar
xerife
xingar
zangado
zarpar
zebu
zelador
zombar
zoologia
zumbido`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/simplified-chinese.js
var wordlist8 = `的
一
是
在
不
了
有
和
人
这
中
大
为
上
个
国
我
以
要
他
时
来
用
们
生
到
作
地
于
出
就
分
对
成
会
可
主
发
年
动
同
工
也
能
下
过
子
说
产
种
面
而
方
后
多
定
行
学
法
所
民
得
经
十
三
之
进
着
等
部
度
家
电
力
里
如
水
化
高
自
二
理
起
小
物
现
实
加
量
都
两
体
制
机
当
使
点
从
业
本
去
把
性
好
应
开
它
合
还
因
由
其
些
然
前
外
天
政
四
日
那
社
义
事
平
形
相
全
表
间
样
与
关
各
重
新
线
内
数
正
心
反
你
明
看
原
又
么
利
比
或
但
质
气
第
向
道
命
此
变
条
只
没
结
解
问
意
建
月
公
无
系
军
很
情
者
最
立
代
想
已
通
并
提
直
题
党
程
展
五
果
料
象
员
革
位
入
常
文
总
次
品
式
活
设
及
管
特
件
长
求
老
头
基
资
边
流
路
级
少
图
山
统
接
知
较
将
组
见
计
别
她
手
角
期
根
论
运
农
指
几
九
区
强
放
决
西
被
干
做
必
战
先
回
则
任
取
据
处
队
南
给
色
光
门
即
保
治
北
造
百
规
热
领
七
海
口
东
导
器
压
志
世
金
增
争
济
阶
油
思
术
极
交
受
联
什
认
六
共
权
收
证
改
清
美
再
采
转
更
单
风
切
打
白
教
速
花
带
安
场
身
车
例
真
务
具
万
每
目
至
达
走
积
示
议
声
报
斗
完
类
八
离
华
名
确
才
科
张
信
马
节
话
米
整
空
元
况
今
集
温
传
土
许
步
群
广
石
记
需
段
研
界
拉
林
律
叫
且
究
观
越
织
装
影
算
低
持
音
众
书
布
复
容
儿
须
际
商
非
验
连
断
深
难
近
矿
千
周
委
素
技
备
半
办
青
省
列
习
响
约
支
般
史
感
劳
便
团
往
酸
历
市
克
何
除
消
构
府
称
太
准
精
值
号
率
族
维
划
选
标
写
存
候
毛
亲
快
效
斯
院
查
江
型
眼
王
按
格
养
易
置
派
层
片
始
却
专
状
育
厂
京
识
适
属
圆
包
火
住
调
满
县
局
照
参
红
细
引
听
该
铁
价
严
首
底
液
官
德
随
病
苏
失
尔
死
讲
配
女
黄
推
显
谈
罪
神
艺
呢
席
含
企
望
密
批
营
项
防
举
球
英
氧
势
告
李
台
落
木
帮
轮
破
亚
师
围
注
远
字
材
排
供
河
态
封
另
施
减
树
溶
怎
止
案
言
士
均
武
固
叶
鱼
波
视
仅
费
紧
爱
左
章
早
朝
害
续
轻
服
试
食
充
兵
源
判
护
司
足
某
练
差
致
板
田
降
黑
犯
负
击
范
继
兴
似
余
坚
曲
输
修
故
城
夫
够
送
笔
船
占
右
财
吃
富
春
职
觉
汉
画
功
巴
跟
虽
杂
飞
检
吸
助
升
阳
互
初
创
抗
考
投
坏
策
古
径
换
未
跑
留
钢
曾
端
责
站
简
述
钱
副
尽
帝
射
草
冲
承
独
令
限
阿
宣
环
双
请
超
微
让
控
州
良
轴
找
否
纪
益
依
优
顶
础
载
倒
房
突
坐
粉
敌
略
客
袁
冷
胜
绝
析
块
剂
测
丝
协
诉
念
陈
仍
罗
盐
友
洋
错
苦
夜
刑
移
频
逐
靠
混
母
短
皮
终
聚
汽
村
云
哪
既
距
卫
停
烈
央
察
烧
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
游
久
菜
味
旧
模
湖
货
损
预
阻
毫
普
稳
乙
妈
植
息
扩
银
语
挥
酒
守
拿
序
纸
医
缺
雨
吗
针
刘
啊
急
唱
误
训
愿
审
附
获
茶
鲜
粮
斤
孩
脱
硫
肥
善
龙
演
父
渐
血
欢
械
掌
歌
沙
刚
攻
谓
盾
讨
晚
粒
乱
燃
矛
乎
杀
药
宁
鲁
贵
钟
煤
读
班
伯
香
介
迫
句
丰
培
握
兰
担
弦
蛋
沉
假
穿
执
答
乐
谁
顺
烟
缩
征
脸
喜
松
脚
困
异
免
背
星
福
买
染
井
概
慢
怕
磁
倍
祖
皇
促
静
补
评
翻
肉
践
尼
衣
宽
扬
棉
希
伤
操
垂
秋
宜
氢
套
督
振
架
亮
末
宪
庆
编
牛
触
映
雷
销
诗
座
居
抓
裂
胞
呼
娘
景
威
绿
晶
厚
盟
衡
鸡
孙
延
危
胶
屋
乡
临
陆
顾
掉
呀
灯
岁
措
束
耐
剧
玉
赵
跳
哥
季
课
凯
胡
额
款
绍
卷
齐
伟
蒸
殖
永
宗
苗
川
炉
岩
弱
零
杨
奏
沿
露
杆
探
滑
镇
饭
浓
航
怀
赶
库
夺
伊
灵
税
途
灭
赛
归
召
鼓
播
盘
裁
险
康
唯
录
菌
纯
借
糖
盖
横
符
私
努
堂
域
枪
润
幅
哈
竟
熟
虫
泽
脑
壤
碳
欧
遍
侧
寨
敢
彻
虑
斜
薄
庭
纳
弹
饲
伸
折
麦
湿
暗
荷
瓦
塞
床
筑
恶
户
访
塔
奇
透
梁
刀
旋
迹
卡
氯
遇
份
毒
泥
退
洗
摆
灰
彩
卖
耗
夏
择
忙
铜
献
硬
予
繁
圈
雪
函
亦
抽
篇
阵
阴
丁
尺
追
堆
雄
迎
泛
爸
楼
避
谋
吨
野
猪
旗
累
偏
典
馆
索
秦
脂
潮
爷
豆
忽
托
惊
塑
遗
愈
朱
替
纤
粗
倾
尚
痛
楚
谢
奋
购
磨
君
池
旁
碎
骨
监
捕
弟
暴
割
贯
殊
释
词
亡
壁
顿
宝
午
尘
闻
揭
炮
残
冬
桥
妇
警
综
招
吴
付
浮
遭
徐
您
摇
谷
赞
箱
隔
订
男
吹
园
纷
唐
败
宋
玻
巨
耕
坦
荣
闭
湾
键
凡
驻
锅
救
恩
剥
凝
碱
齿
截
炼
麻
纺
禁
废
盛
版
缓
净
睛
昌
婚
涉
筒
嘴
插
岸
朗
庄
街
藏
姑
贸
腐
奴
啦
惯
乘
伙
恢
匀
纱
扎
辩
耳
彪
臣
亿
璃
抵
脉
秀
萨
俄
网
舞
店
喷
纵
寸
汗
挂
洪
贺
闪
柬
爆
烯
津
稻
墙
软
勇
像
滚
厘
蒙
芳
肯
坡
柱
荡
腿
仪
旅
尾
轧
冰
贡
登
黎
削
钻
勒
逃
障
氨
郭
峰
币
港
伏
轨
亩
毕
擦
莫
刺
浪
秘
援
株
健
售
股
岛
甘
泡
睡
童
铸
汤
阀
休
汇
舍
牧
绕
炸
哲
磷
绩
朋
淡
尖
启
陷
柴
呈
徒
颜
泪
稍
忘
泵
蓝
拖
洞
授
镜
辛
壮
锋
贫
虚
弯
摩
泰
幼
廷
尊
窗
纲
弄
隶
疑
氏
宫
姐
震
瑞
怪
尤
琴
循
描
膜
违
夹
腰
缘
珠
穷
森
枝
竹
沟
催
绳
忆
邦
剩
幸
浆
栏
拥
牙
贮
礼
滤
钠
纹
罢
拍
咱
喊
袖
埃
勤
罚
焦
潜
伍
墨
欲
缝
姓
刊
饱
仿
奖
铝
鬼
丽
跨
默
挖
链
扫
喝
袋
炭
污
幕
诸
弧
励
梅
奶
洁
灾
舟
鉴
苯
讼
抱
毁
懂
寒
智
埔
寄
届
跃
渡
挑
丹
艰
贝
碰
拔
爹
戴
码
梦
芽
熔
赤
渔
哭
敬
颗
奔
铅
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
仓
魏
锐
晓
氮
兼
隐
碍
赫
拨
忠
肃
缸
牵
抢
博
巧
壳
兄
杜
讯
诚
碧
祥
柯
页
巡
矩
悲
灌
龄
伦
票
寻
桂
铺
圣
恐
恰
郑
趣
抬
荒
腾
贴
柔
滴
猛
阔
辆
妻
填
撤
储
签
闹
扰
紫
砂
递
戏
吊
陶
伐
喂
疗
瓶
婆
抚
臂
摸
忍
虾
蜡
邻
胸
巩
挤
偶
弃
槽
劲
乳
邓
吉
仁
烂
砖
租
乌
舰
伴
瓜
浅
丙
暂
燥
橡
柳
迷
暖
牌
秧
胆
详
簧
踏
瓷
谱
呆
宾
糊
洛
辉
愤
竞
隙
怒
粘
乃
绪
肩
籍
敏
涂
熙
皆
侦
悬
掘
享
纠
醒
狂
锁
淀
恨
牲
霸
爬
赏
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鸭
趋
凤
晨
畜
辈
秩
卵
署
梯
炎
滩
棋
驱
筛
峡
冒
啥
寿
译
浸
泉
帽
迟
硅
疆
贷
漏
稿
冠
嫩
胁
芯
牢
叛
蚀
奥
鸣
岭
羊
凭
串
塘
绘
酵
融
盆
锡
庙
筹
冻
辅
摄
袭
筋
拒
僚
旱
钾
鸟
漆
沈
眉
疏
添
棒
穗
硝
韩
逼
扭
侨
凉
挺
碗
栽
炒
杯
患
馏
劝
豪
辽
勃
鸿
旦
吏
拜
狗
埋
辊
掩
饮
搬
骂
辞
勾
扣
估
蒋
绒
雾
丈
朵
姆
拟
宇
辑
陕
雕
偿
蓄
崇
剪
倡
厅
咬
驶
薯
刷
斥
番
赋
奉
佛
浇
漫
曼
扇
钙
桃
扶
仔
返
俗
亏
腔
鞋
棱
覆
框
悄
叔
撞
骗
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
胀
谐
抛
霉
桑
岗
嘛
衰
盗
渗
脏
赖
涌
甜
曹
阅
肌
哩
厉
烃
纬
毅
昨
伪
症
煮
叹
钉
搭
茎
笼
酷
偷
弓
锥
恒
杰
坑
鼻
翼
纶
叙
狱
逮
罐
络
棚
抑
膨
蔬
寺
骤
穆
冶
枯
册
尸
凸
绅
坯
牺
焰
轰
欣
晋
瘦
御
锭
锦
丧
旬
锻
垄
搜
扑
邀
亭
酯
迈
舒
脆
酶
闲
忧
酚
顽
羽
涨
卸
仗
陪
辟
惩
杭
姚
肚
捉
飘
漂
昆
欺
吾
郎
烷
汁
呵
饰
萧
雅
邮
迁
燕
撒
姻
赴
宴
烦
债
帐
斑
铃
旨
醇
董
饼
雏
姿
拌
傅
腹
妥
揉
贤
拆
歪
葡
胺
丢
浩
徽
昂
垫
挡
览
贪
慰
缴
汪
慌
冯
诺
姜
谊
凶
劣
诬
耀
昏
躺
盈
骑
乔
溪
丛
卢
抹
闷
咨
刮
驾
缆
悟
摘
铒
掷
颇
幻
柄
惠
惨
佳
仇
腊
窝
涤
剑
瞧
堡
泼
葱
罩
霍
捞
胎
苍
滨
俩
捅
湘
砍
霞
邵
萄
疯
淮
遂
熊
粪
烘
宿
档
戈
驳
嫂
裕
徙
箭
捐
肠
撑
晒
辨
殿
莲
摊
搅
酱
屏
疫
哀
蔡
堵
沫
皱
畅
叠
阁
莱
敲
辖
钩
痕
坝
巷
饿
祸
丘
玄
溜
曰
逻
彭
尝
卿
妨
艇
吞
韦
怨
矮
歇`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/spanish.js
var wordlist9 = `ábaco
abdomen
abeja
abierto
abogado
abono
aborto
abrazo
abrir
abuelo
abuso
acabar
academia
acceso
acción
aceite
acelga
acento
aceptar
ácido
aclarar
acné
acoger
acoso
activo
acto
actriz
actuar
acudir
acuerdo
acusar
adicto
admitir
adoptar
adorno
aduana
adulto
aéreo
afectar
afición
afinar
afirmar
ágil
agitar
agonía
agosto
agotar
agregar
agrio
agua
agudo
águila
aguja
ahogo
ahorro
aire
aislar
ajedrez
ajeno
ajuste
alacrán
alambre
alarma
alba
álbum
alcalde
aldea
alegre
alejar
alerta
aleta
alfiler
alga
algodón
aliado
aliento
alivio
alma
almeja
almíbar
altar
alteza
altivo
alto
altura
alumno
alzar
amable
amante
amapola
amargo
amasar
ámbar
ámbito
ameno
amigo
amistad
amor
amparo
amplio
ancho
anciano
ancla
andar
andén
anemia
ángulo
anillo
ánimo
anís
anotar
antena
antiguo
antojo
anual
anular
anuncio
añadir
añejo
año
apagar
aparato
apetito
apio
aplicar
apodo
aporte
apoyo
aprender
aprobar
apuesta
apuro
arado
araña
arar
árbitro
árbol
arbusto
archivo
arco
arder
ardilla
arduo
área
árido
aries
armonía
arnés
aroma
arpa
arpón
arreglo
arroz
arruga
arte
artista
asa
asado
asalto
ascenso
asegurar
aseo
asesor
asiento
asilo
asistir
asno
asombro
áspero
astilla
astro
astuto
asumir
asunto
atajo
ataque
atar
atento
ateo
ático
atleta
átomo
atraer
atroz
atún
audaz
audio
auge
aula
aumento
ausente
autor
aval
avance
avaro
ave
avellana
avena
avestruz
avión
aviso
ayer
ayuda
ayuno
azafrán
azar
azote
azúcar
azufre
azul
baba
babor
bache
bahía
baile
bajar
balanza
balcón
balde
bambú
banco
banda
baño
barba
barco
barniz
barro
báscula
bastón
basura
batalla
batería
batir
batuta
baúl
bazar
bebé
bebida
bello
besar
beso
bestia
bicho
bien
bingo
blanco
bloque
blusa
boa
bobina
bobo
boca
bocina
boda
bodega
boina
bola
bolero
bolsa
bomba
bondad
bonito
bono
bonsái
borde
borrar
bosque
bote
botín
bóveda
bozal
bravo
brazo
brecha
breve
brillo
brinco
brisa
broca
broma
bronce
brote
bruja
brusco
bruto
buceo
bucle
bueno
buey
bufanda
bufón
búho
buitre
bulto
burbuja
burla
burro
buscar
butaca
buzón
caballo
cabeza
cabina
cabra
cacao
cadáver
cadena
caer
café
caída
caimán
caja
cajón
cal
calamar
calcio
caldo
calidad
calle
calma
calor
calvo
cama
cambio
camello
camino
campo
cáncer
candil
canela
canguro
canica
canto
caña
cañón
caoba
caos
capaz
capitán
capote
captar
capucha
cara
carbón
cárcel
careta
carga
cariño
carne
carpeta
carro
carta
casa
casco
casero
caspa
castor
catorce
catre
caudal
causa
cazo
cebolla
ceder
cedro
celda
célebre
celoso
célula
cemento
ceniza
centro
cerca
cerdo
cereza
cero
cerrar
certeza
césped
cetro
chacal
chaleco
champú
chancla
chapa
charla
chico
chiste
chivo
choque
choza
chuleta
chupar
ciclón
ciego
cielo
cien
cierto
cifra
cigarro
cima
cinco
cine
cinta
ciprés
circo
ciruela
cisne
cita
ciudad
clamor
clan
claro
clase
clave
cliente
clima
clínica
cobre
cocción
cochino
cocina
coco
código
codo
cofre
coger
cohete
cojín
cojo
cola
colcha
colegio
colgar
colina
collar
colmo
columna
combate
comer
comida
cómodo
compra
conde
conejo
conga
conocer
consejo
contar
copa
copia
corazón
corbata
corcho
cordón
corona
correr
coser
cosmos
costa
cráneo
cráter
crear
crecer
creído
crema
cría
crimen
cripta
crisis
cromo
crónica
croqueta
crudo
cruz
cuadro
cuarto
cuatro
cubo
cubrir
cuchara
cuello
cuento
cuerda
cuesta
cueva
cuidar
culebra
culpa
culto
cumbre
cumplir
cuna
cuneta
cuota
cupón
cúpula
curar
curioso
curso
curva
cutis
dama
danza
dar
dardo
dátil
deber
débil
década
decir
dedo
defensa
definir
dejar
delfín
delgado
delito
demora
denso
dental
deporte
derecho
derrota
desayuno
deseo
desfile
desnudo
destino
desvío
detalle
detener
deuda
día
diablo
diadema
diamante
diana
diario
dibujo
dictar
diente
dieta
diez
difícil
digno
dilema
diluir
dinero
directo
dirigir
disco
diseño
disfraz
diva
divino
doble
doce
dolor
domingo
don
donar
dorado
dormir
dorso
dos
dosis
dragón
droga
ducha
duda
duelo
dueño
dulce
dúo
duque
durar
dureza
duro
ébano
ebrio
echar
eco
ecuador
edad
edición
edificio
editor
educar
efecto
eficaz
eje
ejemplo
elefante
elegir
elemento
elevar
elipse
élite
elixir
elogio
eludir
embudo
emitir
emoción
empate
empeño
empleo
empresa
enano
encargo
enchufe
encía
enemigo
enero
enfado
enfermo
engaño
enigma
enlace
enorme
enredo
ensayo
enseñar
entero
entrar
envase
envío
época
equipo
erizo
escala
escena
escolar
escribir
escudo
esencia
esfera
esfuerzo
espada
espejo
espía
esposa
espuma
esquí
estar
este
estilo
estufa
etapa
eterno
ética
etnia
evadir
evaluar
evento
evitar
exacto
examen
exceso
excusa
exento
exigir
exilio
existir
éxito
experto
explicar
exponer
extremo
fábrica
fábula
fachada
fácil
factor
faena
faja
falda
fallo
falso
faltar
fama
familia
famoso
faraón
farmacia
farol
farsa
fase
fatiga
fauna
favor
fax
febrero
fecha
feliz
feo
feria
feroz
fértil
fervor
festín
fiable
fianza
fiar
fibra
ficción
ficha
fideo
fiebre
fiel
fiera
fiesta
figura
fijar
fijo
fila
filete
filial
filtro
fin
finca
fingir
finito
firma
flaco
flauta
flecha
flor
flota
fluir
flujo
flúor
fobia
foca
fogata
fogón
folio
folleto
fondo
forma
forro
fortuna
forzar
fosa
foto
fracaso
frágil
franja
frase
fraude
freír
freno
fresa
frío
frito
fruta
fuego
fuente
fuerza
fuga
fumar
función
funda
furgón
furia
fusil
fútbol
futuro
gacela
gafas
gaita
gajo
gala
galería
gallo
gamba
ganar
gancho
ganga
ganso
garaje
garza
gasolina
gastar
gato
gavilán
gemelo
gemir
gen
género
genio
gente
geranio
gerente
germen
gesto
gigante
gimnasio
girar
giro
glaciar
globo
gloria
gol
golfo
goloso
golpe
goma
gordo
gorila
gorra
gota
goteo
gozar
grada
gráfico
grano
grasa
gratis
grave
grieta
grillo
gripe
gris
grito
grosor
grúa
grueso
grumo
grupo
guante
guapo
guardia
guerra
guía
guiño
guion
guiso
guitarra
gusano
gustar
haber
hábil
hablar
hacer
hacha
hada
hallar
hamaca
harina
haz
hazaña
hebilla
hebra
hecho
helado
helio
hembra
herir
hermano
héroe
hervir
hielo
hierro
hígado
higiene
hijo
himno
historia
hocico
hogar
hoguera
hoja
hombre
hongo
honor
honra
hora
hormiga
horno
hostil
hoyo
hueco
huelga
huerta
hueso
huevo
huida
huir
humano
húmedo
humilde
humo
hundir
huracán
hurto
icono
ideal
idioma
ídolo
iglesia
iglú
igual
ilegal
ilusión
imagen
imán
imitar
impar
imperio
imponer
impulso
incapaz
índice
inerte
infiel
informe
ingenio
inicio
inmenso
inmune
innato
insecto
instante
interés
íntimo
intuir
inútil
invierno
ira
iris
ironía
isla
islote
jabalí
jabón
jamón
jarabe
jardín
jarra
jaula
jazmín
jefe
jeringa
jinete
jornada
joroba
joven
joya
juerga
jueves
juez
jugador
jugo
juguete
juicio
junco
jungla
junio
juntar
júpiter
jurar
justo
juvenil
juzgar
kilo
koala
labio
lacio
lacra
lado
ladrón
lagarto
lágrima
laguna
laico
lamer
lámina
lámpara
lana
lancha
langosta
lanza
lápiz
largo
larva
lástima
lata
látex
latir
laurel
lavar
lazo
leal
lección
leche
lector
leer
legión
legumbre
lejano
lengua
lento
leña
león
leopardo
lesión
letal
letra
leve
leyenda
libertad
libro
licor
líder
lidiar
lienzo
liga
ligero
lima
límite
limón
limpio
lince
lindo
línea
lingote
lino
linterna
líquido
liso
lista
litera
litio
litro
llaga
llama
llanto
llave
llegar
llenar
llevar
llorar
llover
lluvia
lobo
loción
loco
locura
lógica
logro
lombriz
lomo
lonja
lote
lucha
lucir
lugar
lujo
luna
lunes
lupa
lustro
luto
luz
maceta
macho
madera
madre
maduro
maestro
mafia
magia
mago
maíz
maldad
maleta
malla
malo
mamá
mambo
mamut
manco
mando
manejar
manga
maniquí
manjar
mano
manso
manta
mañana
mapa
máquina
mar
marco
marea
marfil
margen
marido
mármol
marrón
martes
marzo
masa
máscara
masivo
matar
materia
matiz
matriz
máximo
mayor
mazorca
mecha
medalla
medio
médula
mejilla
mejor
melena
melón
memoria
menor
mensaje
mente
menú
mercado
merengue
mérito
mes
mesón
meta
meter
método
metro
mezcla
miedo
miel
miembro
miga
mil
milagro
militar
millón
mimo
mina
minero
mínimo
minuto
miope
mirar
misa
miseria
misil
mismo
mitad
mito
mochila
moción
moda
modelo
moho
mojar
molde
moler
molino
momento
momia
monarca
moneda
monja
monto
moño
morada
morder
moreno
morir
morro
morsa
mortal
mosca
mostrar
motivo
mover
móvil
mozo
mucho
mudar
mueble
muela
muerte
muestra
mugre
mujer
mula
muleta
multa
mundo
muñeca
mural
muro
músculo
museo
musgo
música
muslo
nácar
nación
nadar
naipe
naranja
nariz
narrar
nasal
natal
nativo
natural
náusea
naval
nave
navidad
necio
néctar
negar
negocio
negro
neón
nervio
neto
neutro
nevar
nevera
nicho
nido
niebla
nieto
niñez
niño
nítido
nivel
nobleza
noche
nómina
noria
norma
norte
nota
noticia
novato
novela
novio
nube
nuca
núcleo
nudillo
nudo
nuera
nueve
nuez
nulo
número
nutria
oasis
obeso
obispo
objeto
obra
obrero
observar
obtener
obvio
oca
ocaso
océano
ochenta
ocho
ocio
ocre
octavo
octubre
oculto
ocupar
ocurrir
odiar
odio
odisea
oeste
ofensa
oferta
oficio
ofrecer
ogro
oído
oír
ojo
ola
oleada
olfato
olivo
olla
olmo
olor
olvido
ombligo
onda
onza
opaco
opción
ópera
opinar
oponer
optar
óptica
opuesto
oración
orador
oral
órbita
orca
orden
oreja
órgano
orgía
orgullo
oriente
origen
orilla
oro
orquesta
oruga
osadía
oscuro
osezno
oso
ostra
otoño
otro
oveja
óvulo
óxido
oxígeno
oyente
ozono
pacto
padre
paella
página
pago
país
pájaro
palabra
palco
paleta
pálido
palma
paloma
palpar
pan
panal
pánico
pantera
pañuelo
papá
papel
papilla
paquete
parar
parcela
pared
parir
paro
párpado
parque
párrafo
parte
pasar
paseo
pasión
paso
pasta
pata
patio
patria
pausa
pauta
pavo
payaso
peatón
pecado
pecera
pecho
pedal
pedir
pegar
peine
pelar
peldaño
pelea
peligro
pellejo
pelo
peluca
pena
pensar
peñón
peón
peor
pepino
pequeño
pera
percha
perder
pereza
perfil
perico
perla
permiso
perro
persona
pesa
pesca
pésimo
pestaña
pétalo
petróleo
pez
pezuña
picar
pichón
pie
piedra
pierna
pieza
pijama
pilar
piloto
pimienta
pino
pintor
pinza
piña
piojo
pipa
pirata
pisar
piscina
piso
pista
pitón
pizca
placa
plan
plata
playa
plaza
pleito
pleno
plomo
pluma
plural
pobre
poco
poder
podio
poema
poesía
poeta
polen
policía
pollo
polvo
pomada
pomelo
pomo
pompa
poner
porción
portal
posada
poseer
posible
poste
potencia
potro
pozo
prado
precoz
pregunta
premio
prensa
preso
previo
primo
príncipe
prisión
privar
proa
probar
proceso
producto
proeza
profesor
programa
prole
promesa
pronto
propio
próximo
prueba
público
puchero
pudor
pueblo
puerta
puesto
pulga
pulir
pulmón
pulpo
pulso
puma
punto
puñal
puño
pupa
pupila
puré
quedar
queja
quemar
querer
queso
quieto
química
quince
quitar
rábano
rabia
rabo
ración
radical
raíz
rama
rampa
rancho
rango
rapaz
rápido
rapto
rasgo
raspa
rato
rayo
raza
razón
reacción
realidad
rebaño
rebote
recaer
receta
rechazo
recoger
recreo
recto
recurso
red
redondo
reducir
reflejo
reforma
refrán
refugio
regalo
regir
regla
regreso
rehén
reino
reír
reja
relato
relevo
relieve
relleno
reloj
remar
remedio
remo
rencor
rendir
renta
reparto
repetir
reposo
reptil
res
rescate
resina
respeto
resto
resumen
retiro
retorno
retrato
reunir
revés
revista
rey
rezar
rico
riego
rienda
riesgo
rifa
rígido
rigor
rincón
riñón
río
riqueza
risa
ritmo
rito
rizo
roble
roce
rociar
rodar
rodeo
rodilla
roer
rojizo
rojo
romero
romper
ron
ronco
ronda
ropa
ropero
rosa
rosca
rostro
rotar
rubí
rubor
rudo
rueda
rugir
ruido
ruina
ruleta
rulo
rumbo
rumor
ruptura
ruta
rutina
sábado
saber
sabio
sable
sacar
sagaz
sagrado
sala
saldo
salero
salir
salmón
salón
salsa
salto
salud
salvar
samba
sanción
sandía
sanear
sangre
sanidad
sano
santo
sapo
saque
sardina
sartén
sastre
satán
sauna
saxofón
sección
seco
secreto
secta
sed
seguir
seis
sello
selva
semana
semilla
senda
sensor
señal
señor
separar
sepia
sequía
ser
serie
sermón
servir
sesenta
sesión
seta
setenta
severo
sexo
sexto
sidra
siesta
siete
siglo
signo
sílaba
silbar
silencio
silla
símbolo
simio
sirena
sistema
sitio
situar
sobre
socio
sodio
sol
solapa
soldado
soledad
sólido
soltar
solución
sombra
sondeo
sonido
sonoro
sonrisa
sopa
soplar
soporte
sordo
sorpresa
sorteo
sostén
sótano
suave
subir
suceso
sudor
suegra
suelo
sueño
suerte
sufrir
sujeto
sultán
sumar
superar
suplir
suponer
supremo
sur
surco
sureño
surgir
susto
sutil
tabaco
tabique
tabla
tabú
taco
tacto
tajo
talar
talco
talento
talla
talón
tamaño
tambor
tango
tanque
tapa
tapete
tapia
tapón
taquilla
tarde
tarea
tarifa
tarjeta
tarot
tarro
tarta
tatuaje
tauro
taza
tazón
teatro
techo
tecla
técnica
tejado
tejer
tejido
tela
teléfono
tema
temor
templo
tenaz
tender
tener
tenis
tenso
teoría
terapia
terco
término
ternura
terror
tesis
tesoro
testigo
tetera
texto
tez
tibio
tiburón
tiempo
tienda
tierra
tieso
tigre
tijera
tilde
timbre
tímido
timo
tinta
tío
típico
tipo
tira
tirón
titán
títere
título
tiza
toalla
tobillo
tocar
tocino
todo
toga
toldo
tomar
tono
tonto
topar
tope
toque
tórax
torero
tormenta
torneo
toro
torpedo
torre
torso
tortuga
tos
tosco
toser
tóxico
trabajo
tractor
traer
tráfico
trago
traje
tramo
trance
trato
trauma
trazar
trébol
tregua
treinta
tren
trepar
tres
tribu
trigo
tripa
triste
triunfo
trofeo
trompa
tronco
tropa
trote
trozo
truco
trueno
trufa
tubería
tubo
tuerto
tumba
tumor
túnel
túnica
turbina
turismo
turno
tutor
ubicar
úlcera
umbral
unidad
unir
universo
uno
untar
uña
urbano
urbe
urgente
urna
usar
usuario
útil
utopía
uva
vaca
vacío
vacuna
vagar
vago
vaina
vajilla
vale
válido
valle
valor
válvula
vampiro
vara
variar
varón
vaso
vecino
vector
vehículo
veinte
vejez
vela
velero
veloz
vena
vencer
venda
veneno
vengar
venir
venta
venus
ver
verano
verbo
verde
vereda
verja
verso
verter
vía
viaje
vibrar
vicio
víctima
vida
vídeo
vidrio
viejo
viernes
vigor
vil
villa
vinagre
vino
viñedo
violín
viral
virgo
virtud
visor
víspera
vista
vitamina
viudo
vivaz
vivero
vivir
vivo
volcán
volumen
volver
voraz
votar
voto
voz
vuelo
vulgar
yacer
yate
yegua
yema
yerno
yeso
yodo
yoga
yogur
zafiro
zanja
zapato
zarza
zona
zorro
zumo
zurdo`.split("\n");

// node_modules/ox/node_modules/@scure/bip39/esm/wordlists/traditional-chinese.js
var wordlist10 = `的
一
是
在
不
了
有
和
人
這
中
大
為
上
個
國
我
以
要
他
時
來
用
們
生
到
作
地
於
出
就
分
對
成
會
可
主
發
年
動
同
工
也
能
下
過
子
說
產
種
面
而
方
後
多
定
行
學
法
所
民
得
經
十
三
之
進
著
等
部
度
家
電
力
裡
如
水
化
高
自
二
理
起
小
物
現
實
加
量
都
兩
體
制
機
當
使
點
從
業
本
去
把
性
好
應
開
它
合
還
因
由
其
些
然
前
外
天
政
四
日
那
社
義
事
平
形
相
全
表
間
樣
與
關
各
重
新
線
內
數
正
心
反
你
明
看
原
又
麼
利
比
或
但
質
氣
第
向
道
命
此
變
條
只
沒
結
解
問
意
建
月
公
無
系
軍
很
情
者
最
立
代
想
已
通
並
提
直
題
黨
程
展
五
果
料
象
員
革
位
入
常
文
總
次
品
式
活
設
及
管
特
件
長
求
老
頭
基
資
邊
流
路
級
少
圖
山
統
接
知
較
將
組
見
計
別
她
手
角
期
根
論
運
農
指
幾
九
區
強
放
決
西
被
幹
做
必
戰
先
回
則
任
取
據
處
隊
南
給
色
光
門
即
保
治
北
造
百
規
熱
領
七
海
口
東
導
器
壓
志
世
金
增
爭
濟
階
油
思
術
極
交
受
聯
什
認
六
共
權
收
證
改
清
美
再
採
轉
更
單
風
切
打
白
教
速
花
帶
安
場
身
車
例
真
務
具
萬
每
目
至
達
走
積
示
議
聲
報
鬥
完
類
八
離
華
名
確
才
科
張
信
馬
節
話
米
整
空
元
況
今
集
溫
傳
土
許
步
群
廣
石
記
需
段
研
界
拉
林
律
叫
且
究
觀
越
織
裝
影
算
低
持
音
眾
書
布
复
容
兒
須
際
商
非
驗
連
斷
深
難
近
礦
千
週
委
素
技
備
半
辦
青
省
列
習
響
約
支
般
史
感
勞
便
團
往
酸
歷
市
克
何
除
消
構
府
稱
太
準
精
值
號
率
族
維
劃
選
標
寫
存
候
毛
親
快
效
斯
院
查
江
型
眼
王
按
格
養
易
置
派
層
片
始
卻
專
狀
育
廠
京
識
適
屬
圓
包
火
住
調
滿
縣
局
照
參
紅
細
引
聽
該
鐵
價
嚴
首
底
液
官
德
隨
病
蘇
失
爾
死
講
配
女
黃
推
顯
談
罪
神
藝
呢
席
含
企
望
密
批
營
項
防
舉
球
英
氧
勢
告
李
台
落
木
幫
輪
破
亞
師
圍
注
遠
字
材
排
供
河
態
封
另
施
減
樹
溶
怎
止
案
言
士
均
武
固
葉
魚
波
視
僅
費
緊
愛
左
章
早
朝
害
續
輕
服
試
食
充
兵
源
判
護
司
足
某
練
差
致
板
田
降
黑
犯
負
擊
范
繼
興
似
餘
堅
曲
輸
修
故
城
夫
夠
送
筆
船
佔
右
財
吃
富
春
職
覺
漢
畫
功
巴
跟
雖
雜
飛
檢
吸
助
昇
陽
互
初
創
抗
考
投
壞
策
古
徑
換
未
跑
留
鋼
曾
端
責
站
簡
述
錢
副
盡
帝
射
草
衝
承
獨
令
限
阿
宣
環
雙
請
超
微
讓
控
州
良
軸
找
否
紀
益
依
優
頂
礎
載
倒
房
突
坐
粉
敵
略
客
袁
冷
勝
絕
析
塊
劑
測
絲
協
訴
念
陳
仍
羅
鹽
友
洋
錯
苦
夜
刑
移
頻
逐
靠
混
母
短
皮
終
聚
汽
村
雲
哪
既
距
衛
停
烈
央
察
燒
迅
境
若
印
洲
刻
括
激
孔
搞
甚
室
待
核
校
散
侵
吧
甲
遊
久
菜
味
舊
模
湖
貨
損
預
阻
毫
普
穩
乙
媽
植
息
擴
銀
語
揮
酒
守
拿
序
紙
醫
缺
雨
嗎
針
劉
啊
急
唱
誤
訓
願
審
附
獲
茶
鮮
糧
斤
孩
脫
硫
肥
善
龍
演
父
漸
血
歡
械
掌
歌
沙
剛
攻
謂
盾
討
晚
粒
亂
燃
矛
乎
殺
藥
寧
魯
貴
鐘
煤
讀
班
伯
香
介
迫
句
豐
培
握
蘭
擔
弦
蛋
沉
假
穿
執
答
樂
誰
順
煙
縮
徵
臉
喜
松
腳
困
異
免
背
星
福
買
染
井
概
慢
怕
磁
倍
祖
皇
促
靜
補
評
翻
肉
踐
尼
衣
寬
揚
棉
希
傷
操
垂
秋
宜
氫
套
督
振
架
亮
末
憲
慶
編
牛
觸
映
雷
銷
詩
座
居
抓
裂
胞
呼
娘
景
威
綠
晶
厚
盟
衡
雞
孫
延
危
膠
屋
鄉
臨
陸
顧
掉
呀
燈
歲
措
束
耐
劇
玉
趙
跳
哥
季
課
凱
胡
額
款
紹
卷
齊
偉
蒸
殖
永
宗
苗
川
爐
岩
弱
零
楊
奏
沿
露
桿
探
滑
鎮
飯
濃
航
懷
趕
庫
奪
伊
靈
稅
途
滅
賽
歸
召
鼓
播
盤
裁
險
康
唯
錄
菌
純
借
糖
蓋
橫
符
私
努
堂
域
槍
潤
幅
哈
竟
熟
蟲
澤
腦
壤
碳
歐
遍
側
寨
敢
徹
慮
斜
薄
庭
納
彈
飼
伸
折
麥
濕
暗
荷
瓦
塞
床
築
惡
戶
訪
塔
奇
透
梁
刀
旋
跡
卡
氯
遇
份
毒
泥
退
洗
擺
灰
彩
賣
耗
夏
擇
忙
銅
獻
硬
予
繁
圈
雪
函
亦
抽
篇
陣
陰
丁
尺
追
堆
雄
迎
泛
爸
樓
避
謀
噸
野
豬
旗
累
偏
典
館
索
秦
脂
潮
爺
豆
忽
托
驚
塑
遺
愈
朱
替
纖
粗
傾
尚
痛
楚
謝
奮
購
磨
君
池
旁
碎
骨
監
捕
弟
暴
割
貫
殊
釋
詞
亡
壁
頓
寶
午
塵
聞
揭
炮
殘
冬
橋
婦
警
綜
招
吳
付
浮
遭
徐
您
搖
谷
贊
箱
隔
訂
男
吹
園
紛
唐
敗
宋
玻
巨
耕
坦
榮
閉
灣
鍵
凡
駐
鍋
救
恩
剝
凝
鹼
齒
截
煉
麻
紡
禁
廢
盛
版
緩
淨
睛
昌
婚
涉
筒
嘴
插
岸
朗
莊
街
藏
姑
貿
腐
奴
啦
慣
乘
夥
恢
勻
紗
扎
辯
耳
彪
臣
億
璃
抵
脈
秀
薩
俄
網
舞
店
噴
縱
寸
汗
掛
洪
賀
閃
柬
爆
烯
津
稻
牆
軟
勇
像
滾
厘
蒙
芳
肯
坡
柱
盪
腿
儀
旅
尾
軋
冰
貢
登
黎
削
鑽
勒
逃
障
氨
郭
峰
幣
港
伏
軌
畝
畢
擦
莫
刺
浪
秘
援
株
健
售
股
島
甘
泡
睡
童
鑄
湯
閥
休
匯
舍
牧
繞
炸
哲
磷
績
朋
淡
尖
啟
陷
柴
呈
徒
顏
淚
稍
忘
泵
藍
拖
洞
授
鏡
辛
壯
鋒
貧
虛
彎
摩
泰
幼
廷
尊
窗
綱
弄
隸
疑
氏
宮
姐
震
瑞
怪
尤
琴
循
描
膜
違
夾
腰
緣
珠
窮
森
枝
竹
溝
催
繩
憶
邦
剩
幸
漿
欄
擁
牙
貯
禮
濾
鈉
紋
罷
拍
咱
喊
袖
埃
勤
罰
焦
潛
伍
墨
欲
縫
姓
刊
飽
仿
獎
鋁
鬼
麗
跨
默
挖
鏈
掃
喝
袋
炭
污
幕
諸
弧
勵
梅
奶
潔
災
舟
鑑
苯
訟
抱
毀
懂
寒
智
埔
寄
屆
躍
渡
挑
丹
艱
貝
碰
拔
爹
戴
碼
夢
芽
熔
赤
漁
哭
敬
顆
奔
鉛
仲
虎
稀
妹
乏
珍
申
桌
遵
允
隆
螺
倉
魏
銳
曉
氮
兼
隱
礙
赫
撥
忠
肅
缸
牽
搶
博
巧
殼
兄
杜
訊
誠
碧
祥
柯
頁
巡
矩
悲
灌
齡
倫
票
尋
桂
鋪
聖
恐
恰
鄭
趣
抬
荒
騰
貼
柔
滴
猛
闊
輛
妻
填
撤
儲
簽
鬧
擾
紫
砂
遞
戲
吊
陶
伐
餵
療
瓶
婆
撫
臂
摸
忍
蝦
蠟
鄰
胸
鞏
擠
偶
棄
槽
勁
乳
鄧
吉
仁
爛
磚
租
烏
艦
伴
瓜
淺
丙
暫
燥
橡
柳
迷
暖
牌
秧
膽
詳
簧
踏
瓷
譜
呆
賓
糊
洛
輝
憤
競
隙
怒
粘
乃
緒
肩
籍
敏
塗
熙
皆
偵
懸
掘
享
糾
醒
狂
鎖
淀
恨
牲
霸
爬
賞
逆
玩
陵
祝
秒
浙
貌
役
彼
悉
鴨
趨
鳳
晨
畜
輩
秩
卵
署
梯
炎
灘
棋
驅
篩
峽
冒
啥
壽
譯
浸
泉
帽
遲
矽
疆
貸
漏
稿
冠
嫩
脅
芯
牢
叛
蝕
奧
鳴
嶺
羊
憑
串
塘
繪
酵
融
盆
錫
廟
籌
凍
輔
攝
襲
筋
拒
僚
旱
鉀
鳥
漆
沈
眉
疏
添
棒
穗
硝
韓
逼
扭
僑
涼
挺
碗
栽
炒
杯
患
餾
勸
豪
遼
勃
鴻
旦
吏
拜
狗
埋
輥
掩
飲
搬
罵
辭
勾
扣
估
蔣
絨
霧
丈
朵
姆
擬
宇
輯
陝
雕
償
蓄
崇
剪
倡
廳
咬
駛
薯
刷
斥
番
賦
奉
佛
澆
漫
曼
扇
鈣
桃
扶
仔
返
俗
虧
腔
鞋
棱
覆
框
悄
叔
撞
騙
勘
旺
沸
孤
吐
孟
渠
屈
疾
妙
惜
仰
狠
脹
諧
拋
黴
桑
崗
嘛
衰
盜
滲
臟
賴
湧
甜
曹
閱
肌
哩
厲
烴
緯
毅
昨
偽
症
煮
嘆
釘
搭
莖
籠
酷
偷
弓
錐
恆
傑
坑
鼻
翼
綸
敘
獄
逮
罐
絡
棚
抑
膨
蔬
寺
驟
穆
冶
枯
冊
屍
凸
紳
坯
犧
焰
轟
欣
晉
瘦
禦
錠
錦
喪
旬
鍛
壟
搜
撲
邀
亭
酯
邁
舒
脆
酶
閒
憂
酚
頑
羽
漲
卸
仗
陪
闢
懲
杭
姚
肚
捉
飄
漂
昆
欺
吾
郎
烷
汁
呵
飾
蕭
雅
郵
遷
燕
撒
姻
赴
宴
煩
債
帳
斑
鈴
旨
醇
董
餅
雛
姿
拌
傅
腹
妥
揉
賢
拆
歪
葡
胺
丟
浩
徽
昂
墊
擋
覽
貪
慰
繳
汪
慌
馮
諾
姜
誼
兇
劣
誣
耀
昏
躺
盈
騎
喬
溪
叢
盧
抹
悶
諮
刮
駕
纜
悟
摘
鉺
擲
頗
幻
柄
惠
慘
佳
仇
臘
窩
滌
劍
瞧
堡
潑
蔥
罩
霍
撈
胎
蒼
濱
倆
捅
湘
砍
霞
邵
萄
瘋
淮
遂
熊
糞
烘
宿
檔
戈
駁
嫂
裕
徙
箭
捐
腸
撐
曬
辨
殿
蓮
攤
攪
醬
屏
疫
哀
蔡
堵
沫
皺
暢
疊
閣
萊
敲
轄
鉤
痕
壩
巷
餓
禍
丘
玄
溜
曰
邏
彭
嘗
卿
妨
艇
吞
韋
怨
矮
歇`.split("\n");

// node_modules/ox/_esm/core/Mnemonic.js
function random2(wordlist11, options = {}) {
  const { strength = 128 } = options;
  return generateMnemonic(wordlist11, strength);
}
function toHdKey(mnemonic, options = {}) {
  const { passphrase } = options;
  const seed = toSeed(mnemonic, { passphrase });
  return fromSeed(seed);
}
function toPrivateKey(mnemonic, options = {}) {
  const { path: path2 = path(), passphrase } = options;
  const hdKey = toHdKey(mnemonic, { passphrase }).derive(path2);
  if (options.as === "Bytes")
    return from(hdKey.privateKey);
  return hdKey.privateKey;
}
function toSeed(mnemonic, options = {}) {
  const { passphrase } = options;
  const seed = mnemonicToSeedSync(mnemonic, passphrase);
  if (options.as === "Hex")
    return toHex(seed);
  return seed;
}
function validate8(mnemonic, wordlist11) {
  return validateMnemonic(mnemonic, wordlist11);
}

// node_modules/ox/_esm/core/PersonalMessage.js
var PersonalMessage_exports = {};
__export(PersonalMessage_exports, {
  encode: () => encode6,
  getSignPayload: () => getSignPayload2
});
function encode6(data) {
  const message = from2(data);
  return concat2(
    // Personal Sign Format: `0x19 ‖ "Ethereum Signed Message:\n" ‖ message.length ‖ message`
    "0x19",
    fromString2("Ethereum Signed Message:\n" + size2(message)),
    message
  );
}
function getSignPayload2(data) {
  return keccak256(encode6(data));
}

// node_modules/ox/_esm/core/Provider.js
var Provider_exports = {};
__export(Provider_exports, {
  ChainDisconnectedError: () => ChainDisconnectedError,
  DisconnectedError: () => DisconnectedError,
  IsUndefinedError: () => IsUndefinedError,
  ProviderRpcError: () => ProviderRpcError,
  UnauthorizedError: () => UnauthorizedError,
  UnsupportedMethodError: () => UnsupportedMethodError,
  UserRejectedRequestError: () => UserRejectedRequestError,
  createEmitter: () => createEmitter,
  from: () => from20,
  parseError: () => parseError2
});

// node_modules/ox/node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);

// node_modules/ox/_esm/core/RpcResponse.js
var RpcResponse_exports = {};
__export(RpcResponse_exports, {
  BaseError: () => BaseError2,
  InternalError: () => InternalError,
  InvalidInputError: () => InvalidInputError2,
  InvalidParamsError: () => InvalidParamsError,
  InvalidRequestError: () => InvalidRequestError,
  LimitExceededError: () => LimitExceededError,
  MethodNotFoundError: () => MethodNotFoundError,
  MethodNotSupportedError: () => MethodNotSupportedError,
  ParseError: () => ParseError,
  ResourceNotFoundError: () => ResourceNotFoundError,
  ResourceUnavailableError: () => ResourceUnavailableError,
  TransactionRejectedError: () => TransactionRejectedError,
  VersionNotSupportedError: () => VersionNotSupportedError,
  from: () => from19,
  parse: () => parse,
  parseError: () => parseError
});
function from19(response, options = {}) {
  const { request } = options;
  return {
    ...response,
    id: response.id ?? (request == null ? void 0 : request.id),
    jsonrpc: response.jsonrpc ?? request.jsonrpc
  };
}
function parse(response, options = {}) {
  const { raw = false } = options;
  const response_ = response;
  if (raw)
    return response;
  if (response_.error)
    throw parseError(response_.error);
  return response_.result;
}
function parseError(errorObject) {
  const errorObject_ = errorObject;
  const { code } = errorObject_;
  if (code === InternalError.code)
    return new InternalError(errorObject_);
  if (code === InvalidInputError2.code)
    return new InvalidInputError2(errorObject_);
  if (code === InvalidParamsError.code)
    return new InvalidParamsError(errorObject_);
  if (code === InvalidRequestError.code)
    return new InvalidRequestError(errorObject_);
  if (code === LimitExceededError.code)
    return new LimitExceededError(errorObject_);
  if (code === MethodNotFoundError.code)
    return new MethodNotFoundError(errorObject_);
  if (code === MethodNotSupportedError.code)
    return new MethodNotSupportedError(errorObject_);
  if (code === ParseError.code)
    return new ParseError(errorObject_);
  if (code === ResourceNotFoundError.code)
    return new ResourceNotFoundError(errorObject_);
  if (code === ResourceUnavailableError.code)
    return new ResourceUnavailableError(errorObject_);
  if (code === TransactionRejectedError.code)
    return new TransactionRejectedError(errorObject_);
  if (code === VersionNotSupportedError.code)
    return new VersionNotSupportedError(errorObject_);
  return new InternalError({
    data: errorObject_,
    message: errorObject_.message
  });
}
var BaseError2 = class extends Error {
  constructor(errorObject) {
    const { code, message, data } = errorObject;
    super(message);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.BaseError"
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.code = code;
    this.data = data;
  }
};
var InvalidInputError2 = class _InvalidInputError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _InvalidInputError.code,
      data: parameters.data,
      message: parameters.message ?? "Missing or invalid parameters."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32e3
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidInputError"
    });
  }
};
Object.defineProperty(InvalidInputError2, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32e3
});
var ResourceNotFoundError = class _ResourceNotFoundError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _ResourceNotFoundError.code,
      data: parameters.data,
      message: parameters.message ?? "Requested resource not found."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32001
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceNotFoundError"
    });
  }
};
Object.defineProperty(ResourceNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32001
});
var ResourceUnavailableError = class _ResourceUnavailableError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _ResourceUnavailableError.code,
      data: parameters.data,
      message: parameters.message ?? "Requested resource not available."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32002
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ResourceUnavailableError"
    });
  }
};
Object.defineProperty(ResourceUnavailableError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32002
});
var TransactionRejectedError = class _TransactionRejectedError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _TransactionRejectedError.code,
      data: parameters.data,
      message: parameters.message ?? "Transaction creation failed."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32003
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.TransactionRejectedError"
    });
  }
};
Object.defineProperty(TransactionRejectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32003
});
var MethodNotSupportedError = class _MethodNotSupportedError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _MethodNotSupportedError.code,
      data: parameters.data,
      message: parameters.message ?? "Method is not implemented."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32004
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotSupportedError"
    });
  }
};
Object.defineProperty(MethodNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32004
});
var LimitExceededError = class _LimitExceededError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _LimitExceededError.code,
      data: parameters.data,
      message: parameters.message ?? "Rate limit exceeded."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32005
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.LimitExceededError"
    });
  }
};
Object.defineProperty(LimitExceededError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32005
});
var VersionNotSupportedError = class _VersionNotSupportedError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _VersionNotSupportedError.code,
      data: parameters.data,
      message: parameters.message ?? "JSON-RPC version not supported."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32006
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.VersionNotSupportedError"
    });
  }
};
Object.defineProperty(VersionNotSupportedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32006
});
var InvalidRequestError = class _InvalidRequestError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _InvalidRequestError.code,
      data: parameters.data,
      message: parameters.message ?? "Input is not a valid JSON-RPC request."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32600
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidRequestError"
    });
  }
};
Object.defineProperty(InvalidRequestError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32600
});
var MethodNotFoundError = class _MethodNotFoundError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _MethodNotFoundError.code,
      data: parameters.data,
      message: parameters.message ?? "Method does not exist."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32601
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.MethodNotFoundError"
    });
  }
};
Object.defineProperty(MethodNotFoundError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32601
});
var InvalidParamsError = class _InvalidParamsError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _InvalidParamsError.code,
      data: parameters.data,
      message: parameters.message ?? "Invalid method parameters."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32602
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InvalidParamsError"
    });
  }
};
Object.defineProperty(InvalidParamsError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32602
});
var InternalError = class _InternalError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _InternalError.code,
      data: parameters.data,
      message: parameters.message ?? "Internal JSON-RPC error."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32603
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.InternalError"
    });
  }
};
Object.defineProperty(InternalError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32603
});
var ParseError = class _ParseError extends BaseError2 {
  constructor(parameters = {}) {
    super({
      code: _ParseError.code,
      data: parameters.data,
      message: parameters.message ?? "Failed to parse JSON-RPC response."
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32700
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcResponse.ParseError"
    });
  }
};
Object.defineProperty(ParseError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: -32700
});

// node_modules/ox/_esm/core/Provider.js
var ProviderRpcError = class extends Error {
  constructor(code, message) {
    super(message);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ProviderRpcError"
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.code = code;
    this.details = message;
  }
};
var UserRejectedRequestError = class extends ProviderRpcError {
  constructor({ message = "The user rejected the request." } = {}) {
    super(4001, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4001
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UserRejectedRequestError"
    });
  }
};
Object.defineProperty(UserRejectedRequestError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4001
});
var UnauthorizedError = class extends ProviderRpcError {
  constructor({ message = "The requested method and/or account has not been authorized by the user." } = {}) {
    super(4100, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4100
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnauthorizedError"
    });
  }
};
Object.defineProperty(UnauthorizedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4100
});
var UnsupportedMethodError = class extends ProviderRpcError {
  constructor({ message = "The provider does not support the requested method." } = {}) {
    super(4200, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4200
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.UnsupportedMethodError"
    });
  }
};
Object.defineProperty(UnsupportedMethodError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4200
});
var DisconnectedError = class extends ProviderRpcError {
  constructor({ message = "The provider is disconnected from all chains." } = {}) {
    super(4900, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4900
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.DisconnectedError"
    });
  }
};
Object.defineProperty(DisconnectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4900
});
var ChainDisconnectedError = class extends ProviderRpcError {
  constructor({ message = "The provider is not connected to the requested chain." } = {}) {
    super(4901, message);
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4901
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.ChainDisconnectedError"
    });
  }
};
Object.defineProperty(ChainDisconnectedError, "code", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 4901
});
function createEmitter() {
  const emitter = new import_index.default();
  return {
    get eventNames() {
      return emitter.eventNames.bind(emitter);
    },
    get listenerCount() {
      return emitter.listenerCount.bind(emitter);
    },
    get listeners() {
      return emitter.listeners.bind(emitter);
    },
    addListener: emitter.addListener.bind(emitter),
    emit: emitter.emit.bind(emitter),
    off: emitter.off.bind(emitter),
    on: emitter.on.bind(emitter),
    once: emitter.once.bind(emitter),
    removeAllListeners: emitter.removeAllListeners.bind(emitter),
    removeListener: emitter.removeListener.bind(emitter)
  };
}
function from20(provider, options = {}) {
  var _a, _b;
  const { includeEvents = true } = options;
  if (!provider)
    throw new IsUndefinedError();
  return {
    ...includeEvents ? {
      on: (_a = provider.on) == null ? void 0 : _a.bind(provider),
      removeListener: (_b = provider.removeListener) == null ? void 0 : _b.bind(provider)
    } : {},
    async request(args) {
      try {
        const result = await provider.request(args);
        if (result && typeof result === "object" && "jsonrpc" in result)
          return parse(result);
        return result;
      } catch (error) {
        throw parseError2(error);
      }
    }
  };
}
function parseError2(errorObject) {
  const errorObject_ = errorObject;
  const error = parseError(errorObject_);
  if (error instanceof InternalError) {
    if (!error.data)
      return error;
    const { code } = error.data;
    if (code === DisconnectedError.code)
      return new DisconnectedError(errorObject_);
    if (code === ChainDisconnectedError.code)
      return new ChainDisconnectedError(errorObject_);
    if (code === UserRejectedRequestError.code)
      return new UserRejectedRequestError(errorObject_);
    if (code === UnauthorizedError.code)
      return new UnauthorizedError(errorObject_);
    if (code === UnsupportedMethodError.code)
      return new UnsupportedMethodError(errorObject_);
  }
  return error;
}
var IsUndefinedError = class extends BaseError {
  constructor() {
    super("`provider` is undefined.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Provider.IsUndefinedError"
    });
  }
};

// node_modules/ox/_esm/core/RpcSchema.js
var RpcSchema_exports = {};
__export(RpcSchema_exports, {
  from: () => from21
});
function from21() {
  return null;
}

// node_modules/ox/_esm/core/RpcRequest.js
var RpcRequest_exports = {};
__export(RpcRequest_exports, {
  createStore: () => createStore,
  from: () => from22
});
function createStore(options = {}) {
  let id = options.id ?? 0;
  return {
    prepare(options2) {
      return from22({
        id: id++,
        ...options2
      });
    },
    get id() {
      return id;
    }
  };
}
function from22(options) {
  return {
    ...options,
    jsonrpc: "2.0"
  };
}

// node_modules/ox/_esm/core/RpcTransport.js
var RpcTransport_exports = {};
__export(RpcTransport_exports, {
  HttpError: () => HttpError,
  MalformedResponseError: () => MalformedResponseError,
  fromHttp: () => fromHttp
});

// node_modules/ox/_esm/core/internal/promise.js
function withTimeout(fn, options) {
  const { errorInstance = new TimeoutError(), timeout, signal } = options;
  return new Promise((resolve, reject) => {
    ;
    (async () => {
      let timeoutId;
      try {
        const controller = new AbortController();
        if (timeout > 0)
          timeoutId = setTimeout(() => {
            if (signal) {
              controller.abort();
            } else {
              reject(errorInstance);
            }
          }, timeout);
        resolve(await fn({ signal: controller.signal }));
      } catch (err) {
        if ((err == null ? void 0 : err.name) === "AbortError")
          reject(errorInstance);
        reject(err);
      } finally {
        clearTimeout(timeoutId);
      }
    })();
  });
}
var TimeoutError = class extends BaseError {
  constructor() {
    super("Operation timed out.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Promise.TimeoutError"
    });
  }
};

// node_modules/ox/_esm/core/internal/rpcTransport.js
function create2(transport, options_root) {
  const requestStore = createStore();
  return {
    request: async ({ method, params }, options = {}) => {
      const body = requestStore.prepare({ method, params });
      const data = await transport.request(body, options);
      return parse(data, {
        raw: options.raw ?? (options_root == null ? void 0 : options_root.raw)
      });
    }
  };
}

// node_modules/ox/_esm/core/RpcTransport.js
function fromHttp(url, options = {}) {
  return create2({
    async request(body_, options_) {
      const { fetchFn = options.fetchFn ?? fetch, fetchOptions: fetchOptions_ = options.fetchOptions, timeout = options.timeout ?? 1e4 } = options_;
      const body = JSON.stringify(body_);
      const fetchOptions = typeof fetchOptions_ === "function" ? await fetchOptions_(body_) : fetchOptions_;
      const response = await withTimeout(({ signal }) => {
        const init2 = {
          ...fetchOptions,
          body,
          headers: {
            "Content-Type": "application/json",
            ...fetchOptions == null ? void 0 : fetchOptions.headers
          },
          method: (fetchOptions == null ? void 0 : fetchOptions.method) ?? "POST",
          signal: (fetchOptions == null ? void 0 : fetchOptions.signal) ?? (timeout > 0 ? signal : null)
        };
        const request = new Request(url, init2);
        return fetchFn(request);
      }, {
        timeout,
        signal: true
      });
      const data = await (async () => {
        var _a;
        if ((_a = response.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json"))
          return response.json();
        return response.text().then((data2) => {
          try {
            return JSON.parse(data2 || "{}");
          } catch (err) {
            if (response.ok)
              throw new MalformedResponseError({
                response: data2
              });
            return { error: data2 };
          }
        });
      })();
      if (!response.ok)
        throw new HttpError({
          body,
          details: JSON.stringify(data.error) ?? response.statusText,
          response,
          url
        });
      return data;
    }
  }, { raw: options.raw });
}
var HttpError = class extends BaseError {
  constructor({ body, details, response, url }) {
    super("HTTP request failed.", {
      details,
      metaMessages: [
        `Status: ${response.status}`,
        `URL: ${getUrl(url)}`,
        body ? `Body: ${JSON.stringify(body)}` : void 0
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcTransport.HttpError"
    });
  }
};
var MalformedResponseError = class extends BaseError {
  constructor({ response }) {
    super("HTTP Response could not be parsed as JSON.", {
      metaMessages: [`Response: ${response}`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "RpcTransport.MalformedResponseError"
    });
  }
};

// node_modules/ox/_esm/core/P256.js
var P256_exports = {};
__export(P256_exports, {
  getPublicKey: () => getPublicKey3,
  noble: () => noble3,
  randomPrivateKey: () => randomPrivateKey3,
  recoverPublicKey: () => recoverPublicKey2,
  sign: () => sign3,
  verify: () => verify3
});

// node_modules/@noble/curves/esm/p256.js
var Fp256 = Field(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"));
var CURVE_A = Fp256.create(BigInt("-3"));
var CURVE_B = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b");
var p256 = createCurve({
  a: CURVE_A,
  // Equation params: a, b
  b: CURVE_B,
  Fp: Fp256,
  // Field: 2n**224n * (2n**32n-1n) + 2n**192n + 2n**96n-1n
  // Curve order, total count of valid points in the field
  n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
  // Base (generator) point (x, y)
  Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
  Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
  h: BigInt(1),
  lowS: false
}, sha256);
var secp256r1 = p256;
var mapSWU2 = (() => mapToCurveSimpleSWU(Fp256, {
  A: CURVE_A,
  B: CURVE_B,
  Z: Fp256.create(BigInt("-10"))
}))();
var htf2 = (() => createHasher(secp256r1.ProjectivePoint, (scalars) => mapSWU2(scalars[0]), {
  DST: "P256_XMD:SHA-256_SSWU_RO_",
  encodeDST: "P256_XMD:SHA-256_SSWU_NU_",
  p: Fp256.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha256
}))();
var hashToCurve2 = (() => htf2.hashToCurve)();
var encodeToCurve2 = (() => htf2.encodeToCurve)();

// node_modules/ox/_esm/core/P256.js
var noble3 = secp256r1;
function getPublicKey3(options) {
  const { privateKey } = options;
  const point = secp256r1.ProjectivePoint.fromPrivateKey(typeof privateKey === "string" ? privateKey.slice(2) : fromBytes(privateKey).slice(2));
  return from4(point);
}
function randomPrivateKey3(options = {}) {
  const { as = "Hex" } = options;
  const bytes = secp256r1.utils.randomPrivateKey();
  if (as === "Hex")
    return fromBytes(bytes);
  return bytes;
}
function recoverPublicKey2(options) {
  const { payload, signature } = options;
  const { r, s, yParity } = signature;
  const signature_ = new secp256r1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
  const payload_ = payload instanceof Uint8Array ? fromBytes(payload) : payload;
  const point = signature_.recoverPublicKey(payload_.substring(2));
  return from4(point);
}
function sign3(options) {
  const { extraEntropy: extraEntropy2 = extraEntropy, hash: hash7, payload, privateKey } = options;
  const { r, s, recovery } = secp256r1.sign(payload instanceof Uint8Array ? payload : fromHex(payload), privateKey instanceof Uint8Array ? privateKey : fromHex(privateKey), {
    extraEntropy: typeof extraEntropy2 === "boolean" ? extraEntropy2 : from2(extraEntropy2).slice(2),
    lowS: true,
    ...hash7 ? { prehash: true } : {}
  });
  return {
    r,
    s,
    yParity: recovery
  };
}
function verify3(options) {
  const { hash: hash7, payload, publicKey, signature } = options;
  return secp256r1.verify(signature, payload instanceof Uint8Array ? payload : fromHex(payload), toHex2(publicKey).substring(2), ...hash7 ? [{ prehash: true, lowS: true }] : []);
}

// node_modules/ox/_esm/core/Siwe.js
var Siwe_exports = {};
__export(Siwe_exports, {
  InvalidMessageFieldError: () => InvalidMessageFieldError,
  createMessage: () => createMessage,
  domainRegex: () => domainRegex,
  generateNonce: () => generateNonce,
  ipRegex: () => ipRegex,
  isUri: () => isUri,
  localhostRegex: () => localhostRegex,
  nonceRegex: () => nonceRegex,
  parseMessage: () => parseMessage,
  prefixRegex: () => prefixRegex,
  schemeRegex: () => schemeRegex,
  suffixRegex: () => suffixRegex,
  validateMessage: () => validateMessage
});

// node_modules/ox/_esm/core/internal/uid.js
var size3 = 256;
var index = size3;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size3 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size3; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/ox/_esm/core/Siwe.js
var domainRegex = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/;
var ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/;
var localhostRegex = /^localhost(:[0-9]{1,5})?$/;
var nonceRegex = /^[a-zA-Z0-9]{8,}$/;
var schemeRegex = /^([a-zA-Z][a-zA-Z0-9+-.]*)$/;
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
var suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function createMessage(value) {
  const { chainId, domain, expirationTime, issuedAt = /* @__PURE__ */ new Date(), nonce, notBefore, requestId, resources, scheme, uri, version } = value;
  {
    if (chainId !== Math.floor(chainId))
      throw new InvalidMessageFieldError({
        field: "chainId",
        metaMessages: [
          "- Chain ID must be a EIP-155 chain ID.",
          "- See https://eips.ethereum.org/EIPS/eip-155",
          "",
          `Provided value: ${chainId}`
        ]
      });
    if (!(domainRegex.test(domain) || ipRegex.test(domain) || localhostRegex.test(domain)))
      throw new InvalidMessageFieldError({
        field: "domain",
        metaMessages: [
          "- Domain must be an RFC 3986 authority.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${domain}`
        ]
      });
    if (!nonceRegex.test(nonce))
      throw new InvalidMessageFieldError({
        field: "nonce",
        metaMessages: [
          "- Nonce must be at least 8 characters.",
          "- Nonce must be alphanumeric.",
          "",
          `Provided value: ${nonce}`
        ]
      });
    if (!isUri(uri))
      throw new InvalidMessageFieldError({
        field: "uri",
        metaMessages: [
          "- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.",
          "- See https://www.rfc-editor.org/rfc/rfc3986",
          "",
          `Provided value: ${uri}`
        ]
      });
    if (version !== "1")
      throw new InvalidMessageFieldError({
        field: "version",
        metaMessages: [
          "- Version must be '1'.",
          "",
          `Provided value: ${version}`
        ]
      });
    if (scheme && !schemeRegex.test(scheme))
      throw new InvalidMessageFieldError({
        field: "scheme",
        metaMessages: [
          "- Scheme must be an RFC 3986 URI scheme.",
          "- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1",
          "",
          `Provided value: ${scheme}`
        ]
      });
    const statement2 = value.statement;
    if (statement2 == null ? void 0 : statement2.includes("\n"))
      throw new InvalidMessageFieldError({
        field: "statement",
        metaMessages: [
          "- Statement must not include '\\n'.",
          "",
          `Provided value: ${statement2}`
        ]
      });
  }
  const address = from5(value.address, { checksum: true });
  const origin = (() => {
    if (scheme)
      return `${scheme}://${domain}`;
    return domain;
  })();
  const statement = (() => {
    if (!value.statement)
      return "";
    return `${value.statement}
`;
  })();
  const prefix = `${origin} wants you to sign in with your Ethereum account:
${address}

${statement}`;
  let suffix = `URI: ${uri}
Version: ${version}
Chain ID: ${chainId}
Nonce: ${nonce}
Issued At: ${issuedAt.toISOString()}`;
  if (expirationTime)
    suffix += `
Expiration Time: ${expirationTime.toISOString()}`;
  if (notBefore)
    suffix += `
Not Before: ${notBefore.toISOString()}`;
  if (requestId)
    suffix += `
Request ID: ${requestId}`;
  if (resources) {
    let content = "\nResources:";
    for (const resource of resources) {
      if (!isUri(resource))
        throw new InvalidMessageFieldError({
          field: "resources",
          metaMessages: [
            "- Every resource must be a RFC 3986 URI.",
            "- See https://www.rfc-editor.org/rfc/rfc3986",
            "",
            `Provided value: ${resource}`
          ]
        });
      content += `
- ${resource}`;
    }
    suffix += content;
  }
  return `${prefix}
${suffix}`;
}
function generateNonce() {
  return uid(96);
}
function isUri(value) {
  if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value))
    return false;
  if (/%[^0-9a-f]/i.test(value))
    return false;
  if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value))
    return false;
  const splitted = splitUri(value);
  const scheme = splitted[1];
  const authority = splitted[2];
  const path2 = splitted[3];
  const query = splitted[4];
  const fragment = splitted[5];
  if (!((scheme == null ? void 0 : scheme.length) && path2 && path2.length >= 0))
    return false;
  if (authority == null ? void 0 : authority.length) {
    if (!(path2.length === 0 || /^\//.test(path2)))
      return false;
  } else {
    if (/^\/\//.test(path2))
      return false;
  }
  if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))
    return false;
  let out = "";
  out += `${scheme}:`;
  if (authority == null ? void 0 : authority.length)
    out += `//${authority}`;
  out += path2;
  if (query == null ? void 0 : query.length)
    out += `?${query}`;
  if (fragment == null ? void 0 : fragment.length)
    out += `#${fragment}`;
  return out;
}
function splitUri(value) {
  return value.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
}
function parseMessage(message) {
  var _a, _b, _c;
  const { scheme, statement, ...prefix } = ((_a = message.match(prefixRegex)) == null ? void 0 : _a.groups) ?? {};
  const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = ((_b = message.match(suffixRegex)) == null ? void 0 : _b.groups) ?? {};
  const resources = (_c = message.split("Resources:")[1]) == null ? void 0 : _c.split("\n- ").slice(1);
  return {
    ...prefix,
    ...suffix,
    ...chainId ? { chainId: Number(chainId) } : {},
    ...expirationTime ? { expirationTime: new Date(expirationTime) } : {},
    ...issuedAt ? { issuedAt: new Date(issuedAt) } : {},
    ...notBefore ? { notBefore: new Date(notBefore) } : {},
    ...requestId ? { requestId } : {},
    ...resources ? { resources } : {},
    ...scheme ? { scheme } : {},
    ...statement ? { statement } : {}
  };
}
function validateMessage(value) {
  const { address, domain, message, nonce, scheme, time = /* @__PURE__ */ new Date() } = value;
  if (domain && message.domain !== domain)
    return false;
  if (nonce && message.nonce !== nonce)
    return false;
  if (scheme && message.scheme !== scheme)
    return false;
  if (message.expirationTime && time >= message.expirationTime)
    return false;
  if (message.notBefore && time < message.notBefore)
    return false;
  try {
    if (!message.address)
      return false;
    if (address && !isEqual(message.address, address))
      return false;
  } catch {
    return false;
  }
  return true;
}
var InvalidMessageFieldError = class extends BaseError {
  constructor(parameters) {
    const { field, metaMessages } = parameters;
    super(`Invalid Sign-In with Ethereum message field "${field}".`, {
      metaMessages
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Siwe.InvalidMessageFieldError"
    });
  }
};

// node_modules/ox/_esm/core/StateOverrides.js
var StateOverrides_exports = {};
__export(StateOverrides_exports, {
  fromRpc: () => fromRpc8,
  toRpc: () => toRpc8
});
function fromRpc8(rpcStateOverrides) {
  const stateOverrides = {};
  for (const [address, accountOverridesRpc] of Object.entries(rpcStateOverrides)) {
    const accountOverrides = {};
    if (accountOverridesRpc.balance)
      accountOverrides.balance = BigInt(accountOverridesRpc.balance);
    if (accountOverridesRpc.code)
      accountOverrides.code = accountOverridesRpc.code;
    if (accountOverridesRpc.movePrecompileToAddress)
      accountOverrides.movePrecompileToAddress = accountOverridesRpc.movePrecompileToAddress;
    if (accountOverridesRpc.nonce)
      accountOverrides.nonce = BigInt(accountOverridesRpc.nonce);
    if (accountOverridesRpc.state)
      accountOverrides.state = accountOverridesRpc.state;
    if (accountOverridesRpc.stateDiff)
      accountOverrides.stateDiff = accountOverridesRpc.stateDiff;
    stateOverrides[address] = accountOverrides;
  }
  return stateOverrides;
}
function toRpc8(stateOverrides) {
  const rpcStateOverrides = {};
  for (const [address, accountOverrides] of Object.entries(stateOverrides)) {
    const accountOverridesRpc = {};
    if (typeof accountOverrides.balance === "bigint")
      accountOverridesRpc.balance = fromNumber2(accountOverrides.balance);
    if (accountOverrides.code)
      accountOverridesRpc.code = accountOverrides.code;
    if (accountOverrides.movePrecompileToAddress)
      accountOverridesRpc.movePrecompileToAddress = accountOverrides.movePrecompileToAddress;
    if (typeof accountOverrides.nonce === "bigint")
      accountOverridesRpc.nonce = fromNumber2(accountOverrides.nonce);
    if (accountOverrides.state)
      accountOverridesRpc.state = accountOverrides.state;
    if (accountOverrides.stateDiff)
      accountOverridesRpc.stateDiff = accountOverrides.stateDiff;
    rpcStateOverrides[address] = accountOverridesRpc;
  }
  return rpcStateOverrides;
}

// node_modules/ox/_esm/core/TransactionEnvelope.js
var TransactionEnvelope_exports = {};
__export(TransactionEnvelope_exports, {
  FeeCapTooHighError: () => FeeCapTooHighError,
  GasPriceTooHighError: () => GasPriceTooHighError,
  InvalidChainIdError: () => InvalidChainIdError,
  InvalidSerializedError: () => InvalidSerializedError,
  TipAboveFeeCapError: () => TipAboveFeeCapError
});

// node_modules/ox/_esm/core/Value.js
var Value_exports = {};
__export(Value_exports, {
  InvalidDecimalNumberError: () => InvalidDecimalNumberError,
  exponents: () => exponents,
  format: () => format8,
  formatEther: () => formatEther,
  formatGwei: () => formatGwei,
  from: () => from23,
  fromEther: () => fromEther,
  fromGwei: () => fromGwei
});
var exponents = {
  wei: 0,
  gwei: 9,
  szabo: 12,
  finney: 15,
  ether: 18
};
function format8(value, decimals = 0) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
function formatEther(wei, unit = "wei") {
  return format8(wei, exponents.ether - exponents[unit]);
}
function formatGwei(wei, unit = "wei") {
  return format8(wei, exponents.gwei - exponents[unit]);
}
function from23(value, decimals = 0) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value))
    throw new InvalidDecimalNumberError({ value });
  let [integer = "", fraction = "0"] = value.split(".");
  const negative = integer.startsWith("-");
  if (negative)
    integer = integer.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}
function fromEther(ether, unit = "wei") {
  return from23(ether, exponents.ether - exponents[unit]);
}
function fromGwei(gwei, unit = "wei") {
  return from23(gwei, exponents.gwei - exponents[unit]);
}
var InvalidDecimalNumberError = class extends BaseError {
  constructor({ value }) {
    super(`Value \`${value}\` is not a valid decimal number.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Value.InvalidDecimalNumberError"
    });
  }
};

// node_modules/ox/_esm/core/TransactionEnvelope.js
var FeeCapTooHighError = class extends BaseError {
  constructor({ feeCap } = {}) {
    super(`The fee cap (\`maxFeePerGas\`/\`maxPriorityFeePerGas\`${feeCap ? ` = ${formatGwei(feeCap)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.FeeCapTooHighError"
    });
  }
};
var GasPriceTooHighError = class extends BaseError {
  constructor({ gasPrice } = {}) {
    super(`The gas price (\`gasPrice\`${gasPrice ? ` = ${formatGwei(gasPrice)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.GasPriceTooHighError"
    });
  }
};
var InvalidChainIdError = class extends BaseError {
  constructor({ chainId }) {
    super(typeof chainId !== "undefined" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.InvalidChainIdError"
    });
  }
};
var InvalidSerializedError = class extends BaseError {
  constructor({ attributes, serialized, type: type6 }) {
    const missing = Object.entries(attributes).map(([key, value]) => typeof value === "undefined" ? key : void 0).filter(Boolean);
    super(`Invalid serialized transaction of type "${type6}" was provided.`, {
      metaMessages: [
        `Serialized Transaction: "${serialized}"`,
        missing.length > 0 ? `Missing Attributes: ${missing.join(", ")}` : ""
      ].filter(Boolean)
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.InvalidSerializedError"
    });
  }
};
var TipAboveFeeCapError = class extends BaseError {
  constructor({ maxPriorityFeePerGas, maxFeePerGas } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TransactionEnvelope.TipAboveFeeCapError"
    });
  }
};

// node_modules/ox/_esm/core/TransactionEnvelopeLegacy.js
var TransactionEnvelopeLegacy_exports = {};
__export(TransactionEnvelopeLegacy_exports, {
  assert: () => assert4,
  deserialize: () => deserialize,
  from: () => from24,
  getSignPayload: () => getSignPayload3,
  hash: () => hash2,
  serialize: () => serialize,
  toRpc: () => toRpc9,
  type: () => type,
  validate: () => validate9
});
var type = "legacy";
function assert4(envelope) {
  const { chainId, gasPrice, to: to3 } = envelope;
  if (to3)
    assert2(to3, { strict: false });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (gasPrice && BigInt(gasPrice) > 2n ** 256n - 1n)
    throw new GasPriceTooHighError({ gasPrice });
}
function deserialize(serialized) {
  const tuple = toHex3(serialized);
  const [nonce, gasPrice, gas, to3, value, data, chainIdOrV_, r, s] = tuple;
  if (!(tuple.length === 6 || tuple.length === 9))
    throw new InvalidSerializedError({
      attributes: {
        nonce,
        gasPrice,
        gas,
        to: to3,
        value,
        data,
        ...tuple.length > 6 ? {
          v: chainIdOrV_,
          r,
          s
        } : {}
      },
      serialized,
      type
    });
  const transaction = {
    type
  };
  if (validate2(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate2(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate2(data) && data !== "0x")
    transaction.data = data;
  if (validate2(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate2(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate2(gasPrice) && gasPrice !== "0x")
    transaction.gasPrice = BigInt(gasPrice);
  if (tuple.length === 6)
    return transaction;
  const chainIdOrV = validate2(chainIdOrV_) && chainIdOrV_ !== "0x" ? Number(chainIdOrV_) : 0;
  if (s === "0x" && r === "0x") {
    if (chainIdOrV > 0)
      transaction.chainId = Number(chainIdOrV);
    return transaction;
  }
  const v = chainIdOrV;
  const chainId = Math.floor((v - 35) / 2);
  if (chainId > 0)
    transaction.chainId = chainId;
  else if (v !== 27 && v !== 28)
    throw new InvalidVError({ value: v });
  transaction.yParity = vToYParity(v);
  transaction.v = v;
  transaction.s = s === "0x" ? 0n : BigInt(s);
  transaction.r = r === "0x" ? 0n : BigInt(r);
  assert4(transaction);
  return transaction;
}
function from24(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize(envelope) : envelope;
  assert4(envelope_);
  const signature_ = (() => {
    if (!signature)
      return {};
    const s = from13(signature);
    s.v = yParityToV(s.yParity);
    return s;
  })();
  return {
    ...envelope_,
    ...signature_,
    type: "legacy"
  };
}
function getSignPayload3(envelope) {
  return hash2(envelope, { presign: true });
}
function hash2(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
function serialize(envelope, options = {}) {
  const { chainId = 0, gas, data, input, nonce, to: to3, value, gasPrice } = envelope;
  assert4(envelope);
  let serialized = [
    nonce ? fromNumber2(nonce) : "0x",
    gasPrice ? fromNumber2(gasPrice) : "0x",
    gas ? fromNumber2(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber2(value) : "0x",
    data ?? input ?? "0x"
  ];
  const signature = (() => {
    if (options.signature)
      return {
        r: options.signature.r,
        s: options.signature.s,
        v: yParityToV(options.signature.yParity)
      };
    if (typeof envelope.r === "undefined" || typeof envelope.s === "undefined")
      return void 0;
    return {
      r: envelope.r,
      s: envelope.s,
      v: envelope.v
    };
  })();
  if (signature) {
    const v = (() => {
      if (signature.v >= 35) {
        const inferredChainId = Math.floor((signature.v - 35) / 2);
        if (inferredChainId > 0)
          return signature.v;
        return 27 + (signature.v === 35 ? 0 : 1);
      }
      if (chainId > 0)
        return chainId * 2 + 35 + signature.v - 27;
      const v2 = 27 + (signature.v === 27 ? 0 : 1);
      if (signature.v !== v2)
        throw new InvalidVError({ value: signature.v });
      return v2;
    })();
    serialized = [
      ...serialized,
      fromNumber2(v),
      signature.r === 0n ? "0x" : trimLeft2(fromNumber2(signature.r)),
      signature.s === 0n ? "0x" : trimLeft2(fromNumber2(signature.s))
    ];
  } else if (chainId > 0)
    serialized = [...serialized, fromNumber2(chainId), "0x", "0x"];
  return fromHex3(serialized);
}
function toRpc9(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: typeof envelope.chainId === "number" ? fromNumber2(envelope.chainId) : void 0,
    data: envelope.data ?? envelope.input,
    type: "0x0",
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber2(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber2(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber2(envelope.value) } : {},
    ...typeof envelope.gasPrice === "bigint" ? { gasPrice: fromNumber2(envelope.gasPrice) } : {},
    ...signature ? {
      ...toRpc2(signature),
      v: signature.yParity === 0 ? "0x1b" : "0x1c"
    } : {}
  };
}
function validate9(envelope) {
  try {
    assert4(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionEnvelopeEip1559.js
var TransactionEnvelopeEip1559_exports = {};
__export(TransactionEnvelopeEip1559_exports, {
  assert: () => assert5,
  deserialize: () => deserialize2,
  from: () => from25,
  getSignPayload: () => getSignPayload4,
  hash: () => hash3,
  serialize: () => serialize2,
  serializedType: () => serializedType,
  toRpc: () => toRpc10,
  type: () => type2,
  validate: () => validate10
});
var serializedType = "0x02";
var type2 = "eip1559";
function assert5(envelope) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to: to3 } = envelope;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to3)
    assert2(to3, { strict: false });
  if (maxFeePerGas && BigInt(maxFeePerGas) > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ feeCap: maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({
      maxFeePerGas,
      maxPriorityFeePerGas
    });
}
function deserialize2(serialized) {
  const transactionArray = toHex3(slice2(serialized, 1));
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to3, value, data, accessList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 9 || transactionArray.length === 12))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to3,
        value,
        data,
        accessList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type2
    });
  let transaction = {
    chainId: Number(chainId),
    type: type2
  };
  if (validate2(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate2(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate2(data) && data !== "0x")
    transaction.data = data;
  if (validate2(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate2(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate2(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate2(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert5(transaction);
  return transaction;
}
function from25(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize2(envelope) : envelope;
  assert5(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip1559"
  };
}
function getSignPayload4(envelope) {
  return hash3(envelope, { presign: true });
}
function hash3(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize2({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
function serialize2(envelope, options = {}) {
  const { chainId, gas, nonce, to: to3, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, input } = envelope;
  assert5(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber2(chainId),
    nonce ? fromNumber2(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber2(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber2(maxFeePerGas) : "0x",
    gas ? fromNumber2(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber2(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat2(serializedType, fromHex3(serialized));
}
function toRpc10(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber2(envelope.chainId),
    data: envelope.data ?? envelope.input,
    type: "0x2",
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber2(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber2(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber2(envelope.value) } : {},
    ...typeof envelope.maxFeePerGas === "bigint" ? { maxFeePerGas: fromNumber2(envelope.maxFeePerGas) } : {},
    ...typeof envelope.maxPriorityFeePerGas === "bigint" ? {
      maxPriorityFeePerGas: fromNumber2(envelope.maxPriorityFeePerGas)
    } : {},
    ...signature ? toRpc2(signature) : {}
  };
}
function validate10(envelope) {
  try {
    assert5(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionEnvelopeEip2930.js
var TransactionEnvelopeEip2930_exports = {};
__export(TransactionEnvelopeEip2930_exports, {
  assert: () => assert6,
  deserialize: () => deserialize3,
  from: () => from26,
  getSignPayload: () => getSignPayload5,
  hash: () => hash4,
  serialize: () => serialize3,
  serializedType: () => serializedType2,
  toRpc: () => toRpc11,
  type: () => type3,
  validate: () => validate11
});
var serializedType2 = "0x01";
var type3 = "eip2930";
function assert6(envelope) {
  const { chainId, gasPrice, to: to3 } = envelope;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to3)
    assert2(to3, { strict: false });
  if (gasPrice && BigInt(gasPrice) > 2n ** 256n - 1n)
    throw new GasPriceTooHighError({ gasPrice });
}
function deserialize3(serialized) {
  const transactionArray = toHex3(slice2(serialized, 1));
  const [chainId, nonce, gasPrice, gas, to3, value, data, accessList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 8 || transactionArray.length === 11))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        gasPrice,
        gas,
        to: to3,
        value,
        data,
        accessList,
        ...transactionArray.length > 8 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type3
    });
  let transaction = {
    chainId: Number(chainId),
    type: type3
  };
  if (validate2(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate2(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate2(data) && data !== "0x")
    transaction.data = data;
  if (validate2(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate2(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate2(gasPrice) && gasPrice !== "0x")
    transaction.gasPrice = BigInt(gasPrice);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert6(transaction);
  return transaction;
}
function from26(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize3(envelope) : envelope;
  assert6(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip2930"
  };
}
function getSignPayload5(envelope) {
  return hash4(envelope, { presign: true });
}
function hash4(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize3({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
function serialize3(envelope, options = {}) {
  const { chainId, gas, data, input, nonce, to: to3, value, accessList, gasPrice } = envelope;
  assert6(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber2(chainId),
    nonce ? fromNumber2(nonce) : "0x",
    gasPrice ? fromNumber2(gasPrice) : "0x",
    gas ? fromNumber2(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber2(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat2("0x01", fromHex3(serialized));
}
function toRpc11(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber2(envelope.chainId),
    data: envelope.data ?? envelope.input,
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber2(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber2(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber2(envelope.value) } : {},
    ...typeof envelope.gasPrice === "bigint" ? { gasPrice: fromNumber2(envelope.gasPrice) } : {},
    type: "0x1",
    ...signature ? toRpc2(signature) : {}
  };
}
function validate11(envelope) {
  try {
    assert6(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionEnvelopeEip4844.js
var TransactionEnvelopeEip4844_exports = {};
__export(TransactionEnvelopeEip4844_exports, {
  assert: () => assert7,
  deserialize: () => deserialize4,
  from: () => from27,
  getSignPayload: () => getSignPayload6,
  hash: () => hash5,
  serialize: () => serialize4,
  serializedType: () => serializedType3,
  toRpc: () => toRpc12,
  type: () => type4,
  validate: () => validate12
});
var serializedType3 = "0x03";
var type4 = "eip4844";
function assert7(envelope) {
  const { blobVersionedHashes } = envelope;
  if (blobVersionedHashes) {
    if (blobVersionedHashes.length === 0)
      throw new EmptyBlobVersionedHashesError();
    for (const hash7 of blobVersionedHashes) {
      const size4 = size2(hash7);
      const version = toNumber2(slice2(hash7, 0, 1));
      if (size4 !== 32)
        throw new InvalidVersionedHashSizeError({ hash: hash7, size: size4 });
      if (version !== versionedHashVersion)
        throw new InvalidVersionedHashVersionError({
          hash: hash7,
          version
        });
    }
  }
  assert5(envelope);
}
function deserialize4(serialized) {
  const transactionOrWrapperArray = toHex3(slice2(serialized, 1));
  const hasNetworkWrapper = transactionOrWrapperArray.length === 4;
  const transactionArray = hasNetworkWrapper ? transactionOrWrapperArray[0] : transactionOrWrapperArray;
  const wrapperArray = hasNetworkWrapper ? transactionOrWrapperArray.slice(1) : [];
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to3, value, data, accessList, maxFeePerBlobGas, blobVersionedHashes, yParity, r, s] = transactionArray;
  const [blobs, commitments, proofs] = wrapperArray;
  if (!(transactionArray.length === 11 || transactionArray.length === 14))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to3,
        value,
        data,
        accessList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type4
    });
  let transaction = {
    blobVersionedHashes,
    chainId: Number(chainId),
    type: type4
  };
  if (validate2(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate2(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate2(data) && data !== "0x")
    transaction.data = data;
  if (validate2(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate2(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate2(maxFeePerBlobGas) && maxFeePerBlobGas !== "0x")
    transaction.maxFeePerBlobGas = BigInt(maxFeePerBlobGas);
  if (validate2(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate2(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if ((accessList == null ? void 0 : accessList.length) !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  if (blobs && commitments && proofs)
    transaction.sidecars = toSidecars(blobs, {
      commitments,
      proofs
    });
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert7(transaction);
  return transaction;
}
function from27(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize4(envelope) : envelope;
  assert7(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip4844"
  };
}
function getSignPayload6(envelope) {
  return hash5(envelope, { presign: true });
}
function hash5(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize4({
    ...envelope,
    ...presign ? {
      sidecars: void 0,
      r: void 0,
      s: void 0,
      yParity: void 0,
      v: void 0
    } : {}
  }));
}
function serialize4(envelope, options = {}) {
  const { blobVersionedHashes, chainId, gas, nonce, to: to3, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = envelope;
  assert7(envelope);
  const accessTupleList = toTupleList(accessList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber2(chainId),
    nonce ? fromNumber2(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber2(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber2(maxFeePerGas) : "0x",
    gas ? fromNumber2(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber2(value) : "0x",
    data ?? "0x",
    accessTupleList,
    maxFeePerBlobGas ? fromNumber2(maxFeePerBlobGas) : "0x",
    blobVersionedHashes ?? [],
    ...signature ? toTuple(signature) : []
  ];
  const sidecars = options.sidecars || envelope.sidecars;
  const blobs = [];
  const commitments = [];
  const proofs = [];
  if (sidecars)
    for (let i = 0; i < sidecars.length; i++) {
      const { blob, commitment, proof } = sidecars[i];
      blobs.push(blob);
      commitments.push(commitment);
      proofs.push(proof);
    }
  return concat2("0x03", sidecars ? (
    // If sidecars are provided, envelope turns into a "network wrapper":
    fromHex3([serialized, blobs, commitments, proofs])
  ) : (
    // Otherwise, standard envelope is used:
    fromHex3(serialized)
  ));
}
function toRpc12(envelope) {
  const signature = extract(envelope);
  return {
    ...envelope,
    chainId: fromNumber2(envelope.chainId),
    data: envelope.data ?? envelope.input,
    ...typeof envelope.gas === "bigint" ? { gas: fromNumber2(envelope.gas) } : {},
    ...typeof envelope.nonce === "bigint" ? { nonce: fromNumber2(envelope.nonce) } : {},
    ...typeof envelope.value === "bigint" ? { value: fromNumber2(envelope.value) } : {},
    ...typeof envelope.maxFeePerBlobGas === "bigint" ? { maxFeePerBlobGas: fromNumber2(envelope.maxFeePerBlobGas) } : {},
    ...typeof envelope.maxFeePerGas === "bigint" ? { maxFeePerGas: fromNumber2(envelope.maxFeePerGas) } : {},
    ...typeof envelope.maxPriorityFeePerGas === "bigint" ? { maxPriorityFeePerGas: fromNumber2(envelope.maxPriorityFeePerGas) } : {},
    type: "0x3",
    ...signature ? toRpc2(signature) : {}
  };
}
function validate12(envelope) {
  try {
    assert7(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionEnvelopeEip7702.js
var TransactionEnvelopeEip7702_exports = {};
__export(TransactionEnvelopeEip7702_exports, {
  assert: () => assert8,
  deserialize: () => deserialize5,
  from: () => from28,
  getSignPayload: () => getSignPayload7,
  hash: () => hash6,
  serialize: () => serialize5,
  serializedType: () => serializedType4,
  type: () => type5,
  validate: () => validate13
});
var serializedType4 = "0x04";
var type5 = "eip7702";
function assert8(envelope) {
  const { authorizationList } = envelope;
  if (authorizationList) {
    for (const authorization of authorizationList) {
      const { address, chainId } = authorization;
      if (address)
        assert2(address, { strict: false });
      if (Number(chainId) < 0)
        throw new InvalidChainIdError({ chainId });
    }
  }
  assert5(envelope);
}
function deserialize5(serialized) {
  const transactionArray = toHex3(slice2(serialized, 1));
  const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to3, value, data, accessList, authorizationList, yParity, r, s] = transactionArray;
  if (!(transactionArray.length === 10 || transactionArray.length === 13))
    throw new InvalidSerializedError({
      attributes: {
        chainId,
        nonce,
        maxPriorityFeePerGas,
        maxFeePerGas,
        gas,
        to: to3,
        value,
        data,
        accessList,
        authorizationList,
        ...transactionArray.length > 9 ? {
          yParity,
          r,
          s
        } : {}
      },
      serialized,
      type: type5
    });
  let transaction = {
    chainId: Number(chainId),
    type: type5
  };
  if (validate2(to3) && to3 !== "0x")
    transaction.to = to3;
  if (validate2(gas) && gas !== "0x")
    transaction.gas = BigInt(gas);
  if (validate2(data) && data !== "0x")
    transaction.data = data;
  if (validate2(nonce) && nonce !== "0x")
    transaction.nonce = BigInt(nonce);
  if (validate2(value) && value !== "0x")
    transaction.value = BigInt(value);
  if (validate2(maxFeePerGas) && maxFeePerGas !== "0x")
    transaction.maxFeePerGas = BigInt(maxFeePerGas);
  if (validate2(maxPriorityFeePerGas) && maxPriorityFeePerGas !== "0x")
    transaction.maxPriorityFeePerGas = BigInt(maxPriorityFeePerGas);
  if (accessList.length !== 0 && accessList !== "0x")
    transaction.accessList = fromTupleList(accessList);
  if (authorizationList !== "0x")
    transaction.authorizationList = fromTupleList2(authorizationList);
  const signature = r && s && yParity ? fromTuple([yParity, r, s]) : void 0;
  if (signature)
    transaction = {
      ...transaction,
      ...signature
    };
  assert8(transaction);
  return transaction;
}
function from28(envelope, options = {}) {
  const { signature } = options;
  const envelope_ = typeof envelope === "string" ? deserialize5(envelope) : envelope;
  assert8(envelope_);
  return {
    ...envelope_,
    ...signature ? from13(signature) : {},
    type: "eip7702"
  };
}
function getSignPayload7(envelope) {
  return hash6(envelope, { presign: true });
}
function hash6(envelope, options = {}) {
  const { presign } = options;
  return keccak256(serialize5({
    ...envelope,
    ...presign ? {
      r: void 0,
      s: void 0,
      yParity: void 0
    } : {}
  }));
}
function serialize5(envelope, options = {}) {
  const { authorizationList, chainId, gas, nonce, to: to3, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, input } = envelope;
  assert8(envelope);
  const accessTupleList = toTupleList(accessList);
  const authorizationTupleList = toTupleList2(authorizationList);
  const signature = extract(options.signature || envelope);
  const serialized = [
    fromNumber2(chainId),
    nonce ? fromNumber2(nonce) : "0x",
    maxPriorityFeePerGas ? fromNumber2(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? fromNumber2(maxFeePerGas) : "0x",
    gas ? fromNumber2(gas) : "0x",
    to3 ?? "0x",
    value ? fromNumber2(value) : "0x",
    data ?? input ?? "0x",
    accessTupleList,
    authorizationTupleList,
    ...signature ? toTuple(signature) : []
  ];
  return concat2(serializedType4, fromHex3(serialized));
}
function validate13(envelope) {
  try {
    assert8(envelope);
    return true;
  } catch {
    return false;
  }
}

// node_modules/ox/_esm/core/TransactionReceipt.js
var TransactionReceipt_exports = {};
__export(TransactionReceipt_exports, {
  fromRpc: () => fromRpc9,
  fromRpcStatus: () => fromRpcStatus,
  fromRpcType: () => fromRpcType2,
  toRpc: () => toRpc13,
  toRpcStatus: () => toRpcStatus,
  toRpcType: () => toRpcType2
});
var fromRpcStatus = {
  "0x0": "reverted",
  "0x1": "success"
};
var toRpcStatus = {
  reverted: "0x0",
  success: "0x1"
};
var fromRpcType2 = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
var toRpcType2 = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function fromRpc9(receipt) {
  if (!receipt)
    return null;
  return {
    ...receipt,
    blobGasPrice: receipt.blobGasPrice ? BigInt(receipt.blobGasPrice) : void 0,
    blobGasUsed: receipt.blobGasUsed ? BigInt(receipt.blobGasUsed) : void 0,
    blockNumber: BigInt(receipt.blockNumber ?? 0n),
    cumulativeGasUsed: BigInt(receipt.cumulativeGasUsed ?? 0n),
    effectiveGasPrice: BigInt(receipt.effectiveGasPrice ?? 0n),
    gasUsed: BigInt(receipt.gasUsed ?? 0n),
    logs: receipt.logs.map((log) => fromRpc7(log, { pending: false })),
    status: fromRpcStatus[receipt.status],
    transactionIndex: Number(receipt.transactionIndex ?? 0),
    type: fromRpcType2[receipt.type] || receipt.type
  };
}
function toRpc13(receipt) {
  return {
    blobGasPrice: receipt.blobGasPrice ? fromNumber2(receipt.blobGasPrice) : void 0,
    blobGasUsed: receipt.blobGasUsed ? fromNumber2(receipt.blobGasUsed) : void 0,
    blockHash: receipt.blockHash,
    blockNumber: fromNumber2(receipt.blockNumber),
    contractAddress: receipt.contractAddress,
    cumulativeGasUsed: fromNumber2(receipt.cumulativeGasUsed),
    effectiveGasPrice: fromNumber2(receipt.effectiveGasPrice),
    from: receipt.from,
    gasUsed: fromNumber2(receipt.gasUsed),
    logs: receipt.logs.map(toRpc7),
    logsBloom: receipt.logsBloom,
    root: receipt.root,
    status: toRpcStatus[receipt.status],
    to: receipt.to,
    transactionHash: receipt.transactionHash,
    transactionIndex: fromNumber2(receipt.transactionIndex),
    type: toRpcType2[receipt.type] ?? receipt.type
  };
}

// node_modules/ox/_esm/core/TransactionRequest.js
var TransactionRequest_exports = {};
__export(TransactionRequest_exports, {
  toRpc: () => toRpc14
});
function toRpc14(request) {
  const request_rpc = {};
  if (typeof request.accessList !== "undefined")
    request_rpc.accessList = request.accessList;
  if (typeof request.authorizationList !== "undefined")
    request_rpc.authorizationList = toRpcList(request.authorizationList);
  if (typeof request.blobVersionedHashes !== "undefined")
    request_rpc.blobVersionedHashes = request.blobVersionedHashes;
  if (typeof request.blobs !== "undefined")
    request_rpc.blobs = request.blobs;
  if (typeof request.chainId !== "undefined")
    request_rpc.chainId = fromNumber2(request.chainId);
  if (typeof request.data !== "undefined") {
    request_rpc.data = request.data;
    request_rpc.input = request.data;
  } else if (typeof request.input !== "undefined") {
    request_rpc.data = request.input;
    request_rpc.input = request.input;
  }
  if (typeof request.from !== "undefined")
    request_rpc.from = request.from;
  if (typeof request.gas !== "undefined")
    request_rpc.gas = fromNumber2(request.gas);
  if (typeof request.gasPrice !== "undefined")
    request_rpc.gasPrice = fromNumber2(request.gasPrice);
  if (typeof request.maxFeePerBlobGas !== "undefined")
    request_rpc.maxFeePerBlobGas = fromNumber2(request.maxFeePerBlobGas);
  if (typeof request.maxFeePerGas !== "undefined")
    request_rpc.maxFeePerGas = fromNumber2(request.maxFeePerGas);
  if (typeof request.maxPriorityFeePerGas !== "undefined")
    request_rpc.maxPriorityFeePerGas = fromNumber2(request.maxPriorityFeePerGas);
  if (typeof request.maxPriorityFeePerGas !== "undefined")
    request_rpc.maxPriorityFeePerGas = fromNumber2(request.maxPriorityFeePerGas);
  if (typeof request.nonce !== "undefined")
    request_rpc.nonce = fromNumber2(request.nonce);
  if (typeof request.to !== "undefined")
    request_rpc.to = request.to;
  if (typeof request.type !== "undefined")
    request_rpc.type = request.type;
  if (typeof request.value !== "undefined")
    request_rpc.value = fromNumber2(request.value);
  return request_rpc;
}

// node_modules/ox/_esm/core/TypedData.js
var TypedData_exports = {};
__export(TypedData_exports, {
  BytesSizeMismatchError: () => BytesSizeMismatchError2,
  InvalidDomainError: () => InvalidDomainError,
  InvalidPrimaryTypeError: () => InvalidPrimaryTypeError,
  InvalidStructTypeError: () => InvalidStructTypeError,
  assert: () => assert9,
  domainSeparator: () => domainSeparator,
  encode: () => encode7,
  encodeData: () => encodeData2,
  encodeField: () => encodeField,
  encodeType: () => encodeType,
  extractEip712DomainTypes: () => extractEip712DomainTypes,
  findTypeDependencies: () => findTypeDependencies,
  getSignPayload: () => getSignPayload8,
  hashDomain: () => hashDomain,
  hashStruct: () => hashStruct,
  hashType: () => hashType,
  serialize: () => serialize6,
  validate: () => validate14
});
function assert9(value) {
  const { domain, message, primaryType, types } = value;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type: type6 } = param;
      const value2 = data[name];
      const integerMatch = type6.match(integerRegex);
      if (integerMatch && (typeof value2 === "number" || typeof value2 === "bigint")) {
        const [, base, size_] = integerMatch;
        fromNumber2(value2, {
          signed: base === "int",
          size: Number.parseInt(size_ ?? "") / 8
        });
      }
      if (type6 === "address" && typeof value2 === "string" && !validate5(value2))
        throw new InvalidAddressError({
          address: value2,
          cause: new InvalidInputError()
        });
      const bytesMatch = type6.match(bytesRegex);
      if (bytesMatch) {
        const [, size4] = bytesMatch;
        if (size4 && size2(value2) !== Number.parseInt(size4))
          throw new BytesSizeMismatchError2({
            expectedSize: Number.parseInt(size4),
            givenSize: size2(value2)
          });
      }
      const struct2 = types[type6];
      if (struct2) {
        validateReference(type6);
        validateData(struct2, value2);
      }
    }
  };
  if (types.EIP712Domain && domain) {
    if (typeof domain !== "object")
      throw new InvalidDomainError({ domain });
    validateData(types.EIP712Domain, domain);
  }
  if (primaryType !== "EIP712Domain") {
    if (types[primaryType])
      validateData(types[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types });
  }
}
function domainSeparator(domain) {
  return hashDomain({
    domain
  });
}
function encode7(value) {
  const { domain = {}, message, primaryType } = value;
  const types = {
    EIP712Domain: extractEip712DomainTypes(domain),
    ...value.types
  };
  assert9({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x19", "0x01"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain")
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  return concat2(...parts);
}
function encodeType(value) {
  const { primaryType, types } = value;
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type6 of deps) {
    result += `${type6}(${(types[type6] ?? []).map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function extractEip712DomainTypes(domain) {
  return [
    typeof (domain == null ? void 0 : domain.name) === "string" && { name: "name", type: "string" },
    (domain == null ? void 0 : domain.version) && { name: "version", type: "string" },
    typeof (domain == null ? void 0 : domain.chainId) === "number" && {
      name: "chainId",
      type: "uint256"
    },
    (domain == null ? void 0 : domain.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (domain == null ? void 0 : domain.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function getSignPayload8(value) {
  return keccak256(encode7(value));
}
function hashDomain(value) {
  const { domain, types } = value;
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types: {
      ...types,
      EIP712Domain: (types == null ? void 0 : types.EIP712Domain) || extractEip712DomainTypes(domain)
    }
  });
}
function hashStruct(value) {
  const { data, primaryType, types } = value;
  const encoded = encodeData2({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
function serialize6(value) {
  const { domain: domain_, message: message_, primaryType, types } = value;
  const normalizeData = (struct, value2) => {
    const data = { ...value2 };
    for (const param of struct) {
      const { name, type: type6 } = param;
      if (type6 === "address")
        data[name] = data[name].toLowerCase();
    }
    return data;
  };
  const domain = (() => {
    if (!domain_)
      return {};
    const type6 = types.EIP712Domain ?? extractEip712DomainTypes(domain_);
    return normalizeData(type6, domain_);
  })();
  const message = (() => {
    if (primaryType === "EIP712Domain")
      return void 0;
    if (!types[primaryType])
      return {};
    return normalizeData(types[primaryType], message_);
  })();
  return stringify({ domain, message, primaryType, types }, (_, value2) => {
    if (typeof value2 === "bigint")
      return value2.toString();
    return value2;
  });
}
function validate14(value) {
  try {
    assert9(value);
    return true;
  } catch {
    return false;
  }
}
var BytesSizeMismatchError2 = class extends BaseError {
  constructor({ expectedSize, givenSize }) {
    super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.BytesSizeMismatchError"
    });
  }
};
var InvalidDomainError = class extends BaseError {
  constructor({ domain }) {
    super(`Invalid domain "${stringify(domain)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidDomainError"
    });
  }
};
var InvalidPrimaryTypeError = class extends BaseError {
  constructor({ primaryType, types }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidPrimaryTypeError"
    });
  }
};
var InvalidStructTypeError = class extends BaseError {
  constructor({ type: type6 }) {
    super(`Struct type "${type6}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "TypedData.InvalidStructTypeError"
    });
  }
};
function encodeData2(value) {
  const { data, primaryType, types } = value;
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType] ?? []) {
    const [type6, value2] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type6);
    encodedValues.push(value2);
  }
  return encode2(encodedTypes, encodedValues);
}
function hashType(value) {
  const { primaryType, types } = value;
  const encodedHashType = fromString2(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeField(properties) {
  let { types, name, type: type6, value } = properties;
  if (types[type6] !== void 0)
    return [
      { type: "bytes32" },
      keccak256(encodeData2({ data: value, primaryType: type6, types }))
    ];
  if (type6 === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value, { as: "Hex" })];
  }
  if (type6 === "string")
    return [
      { type: "bytes32" },
      keccak256(fromString(value), { as: "Hex" })
    ];
  if (type6.lastIndexOf("]") === type6.length - 1) {
    const parsedType = type6.slice(0, type6.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encode2(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type: type6 }, value];
}
function findTypeDependencies(value, results = /* @__PURE__ */ new Set()) {
  const { primaryType: primaryType_, types } = value;
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match == null ? void 0 : match[0];
  if (results.has(primaryType) || types[primaryType] === void 0)
    return results;
  results.add(primaryType);
  for (const field of types[primaryType])
    findTypeDependencies({ primaryType: field.type, types }, results);
  return results;
}
function validateReference(type6) {
  if (type6 === "address" || type6 === "bool" || type6 === "string" || type6.startsWith("bytes") || type6.startsWith("uint") || type6.startsWith("int"))
    throw new InvalidStructTypeError({ type: type6 });
}

// node_modules/ox/_esm/core/ValidatorData.js
var ValidatorData_exports = {};
__export(ValidatorData_exports, {
  encode: () => encode8,
  getSignPayload: () => getSignPayload9
});
function encode8(value) {
  const { data, validator } = value;
  return concat2(
    // Validator Data Format: `0x19 ‖ 0x00 ‖ <intended validator address> ‖ <data to sign>`
    "0x19",
    "0x00",
    validator,
    from2(data)
  );
}
function getSignPayload9(value) {
  return keccak256(encode8(value));
}

// node_modules/ox/_esm/core/WebAuthnP256.js
var WebAuthnP256_exports = {};
__export(WebAuthnP256_exports, {
  CredentialCreationFailedError: () => CredentialCreationFailedError,
  CredentialRequestFailedError: () => CredentialRequestFailedError,
  createChallenge: () => createChallenge,
  createCredential: () => createCredential,
  getAuthenticatorData: () => getAuthenticatorData,
  getClientDataJSON: () => getClientDataJSON,
  getCredentialCreationOptions: () => getCredentialCreationOptions,
  getCredentialRequestOptions: () => getCredentialRequestOptions,
  getSignPayload: () => getSignPayload10,
  sign: () => sign4,
  verify: () => verify4
});

// node_modules/ox/_esm/core/internal/webauthn.js
function parseAsn1Signature(bytes) {
  const r_start = bytes[4] === 0 ? 5 : 4;
  const r_end = r_start + 32;
  const s_start = bytes[r_end + 2] === 0 ? r_end + 3 : r_end + 2;
  const r = BigInt(fromBytes(bytes.slice(r_start, r_end)));
  const s = BigInt(fromBytes(bytes.slice(s_start)));
  return {
    r,
    s: s > p256.CURVE.n / 2n ? p256.CURVE.n - s : s
  };
}
async function parseCredentialPublicKey(response) {
  try {
    const publicKeyBuffer = response.getPublicKey();
    if (!publicKeyBuffer)
      throw new CredentialCreationFailedError();
    const publicKeyBytes = new Uint8Array(publicKeyBuffer);
    const cryptoKey = await crypto.subtle.importKey("spki", new Uint8Array(publicKeyBytes), {
      name: "ECDSA",
      namedCurve: "P-256",
      hash: "SHA-256"
    }, true, ["verify"]);
    const publicKey = new Uint8Array(await crypto.subtle.exportKey("raw", cryptoKey));
    return from4(publicKey);
  } catch (error) {
    if (error.message !== "Permission denied to access object")
      throw error;
    const data = new Uint8Array(response.attestationObject);
    const coordinateLength = 32;
    const cborPrefix = 88;
    const findStart = (key) => {
      const coordinate = new Uint8Array([key, cborPrefix, coordinateLength]);
      for (let i = 0; i < data.length - coordinate.length; i++)
        if (coordinate.every((byte, j) => data[i + j] === byte))
          return i + coordinate.length;
      throw new CredentialCreationFailedError();
    };
    const xStart = findStart(33);
    const yStart = findStart(34);
    return from4(new Uint8Array([
      4,
      ...data.slice(xStart, xStart + coordinateLength),
      ...data.slice(yStart, yStart + coordinateLength)
    ]));
  }
}

// node_modules/ox/_esm/core/WebAuthnP256.js
var createChallenge = Uint8Array.from([
  105,
  171,
  180,
  181,
  160,
  222,
  75,
  198,
  42,
  42,
  32,
  31,
  141,
  37,
  186,
  233
]);
async function createCredential(options) {
  const { createFn = window.navigator.credentials.create.bind(window.navigator.credentials), ...rest } = options;
  const creationOptions = getCredentialCreationOptions(rest);
  try {
    const credential = await createFn(creationOptions);
    if (!credential)
      throw new CredentialCreationFailedError();
    const response = credential.response;
    const publicKey = await parseCredentialPublicKey(response);
    return {
      id: credential.id,
      publicKey,
      raw: credential
    };
  } catch (error) {
    throw new CredentialCreationFailedError({
      cause: error
    });
  }
}
function getAuthenticatorData(options = {}) {
  const { flag = 5, rpId = window.location.hostname, signCount = 0 } = options;
  const rpIdHash = sha2562(fromString2(rpId));
  const flag_bytes = fromNumber2(flag, { size: 1 });
  const signCount_bytes = fromNumber2(signCount, { size: 4 });
  return concat2(rpIdHash, flag_bytes, signCount_bytes);
}
function getClientDataJSON(options) {
  const { challenge: challenge2, crossOrigin = false, extraClientData, origin = window.location.origin } = options;
  return JSON.stringify({
    type: "webauthn.get",
    challenge: fromHex6(challenge2, { url: true, pad: false }),
    origin,
    crossOrigin,
    ...extraClientData
  });
}
function getCredentialCreationOptions(options) {
  const { attestation = "none", authenticatorSelection = {
    residentKey: "preferred",
    requireResidentKey: false,
    userVerification: "required"
  }, challenge: challenge2 = createChallenge, excludeCredentialIds, name: name_, rp = {
    id: window.location.hostname,
    name: window.document.title
  }, user, extensions } = options;
  const name = (user == null ? void 0 : user.name) ?? name_;
  return {
    publicKey: {
      attestation,
      authenticatorSelection,
      challenge: challenge2,
      ...excludeCredentialIds ? {
        excludeCredentials: excludeCredentialIds == null ? void 0 : excludeCredentialIds.map((id) => ({
          id: toBytes7(id),
          type: "public-key"
        }))
      } : {},
      pubKeyCredParams: [
        {
          type: "public-key",
          alg: -7
          // p256
        }
      ],
      rp,
      user: {
        id: (user == null ? void 0 : user.id) ?? keccak256(fromString(name), { as: "Bytes" }),
        name,
        displayName: (user == null ? void 0 : user.displayName) ?? name
      },
      extensions
    }
  };
}
function getCredentialRequestOptions(options) {
  const { credentialId, challenge: challenge2, rpId = window.location.hostname, userVerification = "required" } = options;
  return {
    publicKey: {
      ...credentialId ? {
        allowCredentials: [
          {
            id: toBytes7(credentialId),
            type: "public-key"
          }
        ]
      } : {},
      challenge: fromHex(challenge2),
      rpId,
      userVerification
    }
  };
}
function getSignPayload10(options) {
  const { challenge: challenge2, crossOrigin, extraClientData, flag, origin, rpId, signCount, userVerification = "required" } = options;
  const authenticatorData = getAuthenticatorData({
    flag,
    rpId,
    signCount
  });
  const clientDataJSON = getClientDataJSON({
    challenge: challenge2,
    crossOrigin,
    extraClientData,
    origin
  });
  const clientDataJSONHash = sha2562(fromString2(clientDataJSON));
  const challengeIndex = clientDataJSON.indexOf('"challenge"');
  const typeIndex = clientDataJSON.indexOf('"type"');
  const metadata = {
    authenticatorData,
    clientDataJSON,
    challengeIndex,
    typeIndex,
    userVerificationRequired: userVerification === "required"
  };
  const payload = concat2(authenticatorData, clientDataJSONHash);
  return { metadata, payload };
}
async function sign4(options) {
  const { getFn = window.navigator.credentials.get.bind(window.navigator.credentials), ...rest } = options;
  const requestOptions = getCredentialRequestOptions(rest);
  try {
    const credential = await getFn(requestOptions);
    if (!credential)
      throw new CredentialRequestFailedError();
    const response = credential.response;
    const clientDataJSON = String.fromCharCode(...new Uint8Array(response.clientDataJSON));
    const challengeIndex = clientDataJSON.indexOf('"challenge"');
    const typeIndex = clientDataJSON.indexOf('"type"');
    const signature = parseAsn1Signature(new Uint8Array(response.signature));
    return {
      metadata: {
        authenticatorData: fromBytes(new Uint8Array(response.authenticatorData)),
        clientDataJSON,
        challengeIndex,
        typeIndex,
        userVerificationRequired: requestOptions.publicKey.userVerification === "required"
      },
      signature,
      raw: credential
    };
  } catch (error) {
    throw new CredentialRequestFailedError({
      cause: error
    });
  }
}
function verify4(options) {
  const { challenge: challenge2, hash: hash7 = true, metadata, publicKey, signature } = options;
  const { authenticatorData, challengeIndex, clientDataJSON, typeIndex, userVerificationRequired } = metadata;
  const authenticatorDataBytes = fromHex(authenticatorData);
  if (authenticatorDataBytes.length < 37)
    return false;
  const flag = authenticatorDataBytes[32];
  if ((flag & 1) !== 1)
    return false;
  if (userVerificationRequired && (flag & 4) !== 4)
    return false;
  if ((flag & 8) !== 8 && (flag & 16) === 16)
    return false;
  const type6 = '"type":"webauthn.get"';
  if (type6 !== clientDataJSON.slice(Number(typeIndex), type6.length + 1))
    return false;
  const match = clientDataJSON.slice(Number(challengeIndex)).match(/^"challenge":"(.*?)"/);
  if (!match)
    return false;
  const [_, challenge_extracted] = match;
  if (fromBytes(toBytes7(challenge_extracted)) !== challenge2)
    return false;
  const clientDataJSONHash = sha2562(fromString(clientDataJSON), {
    as: "Bytes"
  });
  const payload = concat(authenticatorDataBytes, clientDataJSONHash);
  return verify3({
    hash: hash7,
    payload,
    publicKey,
    signature
  });
}
var CredentialCreationFailedError = class extends BaseError {
  constructor({ cause } = {}) {
    super("Failed to create credential.", {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WebAuthnP256.CredentialCreationFailedError"
    });
  }
};
var CredentialRequestFailedError = class extends BaseError {
  constructor({ cause } = {}) {
    super("Failed to request credential.", {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WebAuthnP256.CredentialRequestFailedError"
    });
  }
};

// node_modules/ox/_esm/core/WebCryptoP256.js
var WebCryptoP256_exports = {};
__export(WebCryptoP256_exports, {
  createKeyPair: () => createKeyPair,
  sign: () => sign5,
  verify: () => verify5
});
async function createKeyPair(options = {}) {
  const { extractable = false } = options;
  const keypair = await globalThis.crypto.subtle.generateKey({
    name: "ECDSA",
    namedCurve: "P-256"
  }, extractable, ["sign", "verify"]);
  const publicKey_raw = await globalThis.crypto.subtle.exportKey("raw", keypair.publicKey);
  const publicKey = from4(new Uint8Array(publicKey_raw));
  return {
    privateKey: keypair.privateKey,
    publicKey
  };
}
async function sign5(options) {
  const { payload, privateKey } = options;
  const signature = await globalThis.crypto.subtle.sign({
    name: "ECDSA",
    hash: "SHA-256"
  }, privateKey, from(payload));
  const signature_bytes = fromArray(new Uint8Array(signature));
  const r = toBigInt(slice(signature_bytes, 0, 32));
  let s = toBigInt(slice(signature_bytes, 32, 64));
  if (s > p256.CURVE.n / 2n)
    s = p256.CURVE.n - s;
  return { r, s };
}
async function verify5(options) {
  const { payload, signature } = options;
  const publicKey = await globalThis.crypto.subtle.importKey("raw", toBytes3(options.publicKey), { name: "ECDSA", namedCurve: "P-256" }, true, ["verify"]);
  return await globalThis.crypto.subtle.verify({
    name: "ECDSA",
    hash: "SHA-256"
  }, publicKey, concat(fromNumber(signature.r), fromNumber(signature.s)), from(payload));
}

// node_modules/ox/_esm/core/internal/ens.js
function unwrapLabelhash(label) {
  if (label.length !== 66)
    return null;
  if (label.indexOf("[") !== 0)
    return null;
  if (label.indexOf("]") !== 65)
    return null;
  const hash7 = `0x${label.slice(1, 65)}`;
  if (!validate2(hash7, { strict: true }))
    return null;
  return hash7;
}

// node_modules/ox/_esm/core/Ens.js
function labelhash(label) {
  const result = new Uint8Array(32).fill(0);
  if (!label)
    return fromBytes(result);
  return unwrapLabelhash(label) || keccak256(fromString2(label));
}
function namehash(name) {
  let result = new Uint8Array(32).fill(0);
  if (!name)
    return fromBytes(result);
  const labels = name.split(".");
  for (let i = labels.length - 1; i >= 0; i -= 1) {
    const hashFromEncodedLabel = unwrapLabelhash(labels[i]);
    const hashed = hashFromEncodedLabel ? fromHex(hashFromEncodedLabel) : keccak256(fromString(labels[i]), { as: "Bytes" });
    result = keccak256(concat(result, hashed), { as: "Bytes" });
  }
  return fromBytes(result);
}
function normalize3(name) {
  return ens_normalize(name);
}

// node_modules/viem/_esm/utils/ens/normalize.js
function normalize4(name) {
  return normalize3(name);
}

// node_modules/@web3modal/wagmi/dist/esm/src/client.js
var Web3Modal = class extends Web3ModalScaffold {
  constructor(options) {
    const { wagmiConfig, siweConfig, defaultChain, tokens, _sdkVersion, ...w3mOptions } = options;
    if (!wagmiConfig) {
      throw new Error("web3modal:constructor - wagmiConfig is undefined");
    }
    if (!w3mOptions.projectId) {
      throw new Error("web3modal:constructor - projectId is undefined");
    }
    const networkControllerClient = {
      switchCaipNetwork: async (caipNetwork) => {
        const chainId = NetworkUtil.caipNetworkIdToNumber(caipNetwork == null ? void 0 : caipNetwork.id);
        if (chainId) {
          await switchChain(this.wagmiConfig, { chainId });
        }
      },
      getApprovedCaipNetworksData: async () => new Promise((resolve) => {
        var _a, _b;
        const connections = new Map(wagmiConfig.state.connections);
        const connection = connections.get(wagmiConfig.state.current || "");
        if (((_a = connection == null ? void 0 : connection.connector) == null ? void 0 : _a.id) === ConstantsUtil2.AUTH_CONNECTOR_ID) {
          resolve(getEmailCaipNetworks());
        } else if (((_b = connection == null ? void 0 : connection.connector) == null ? void 0 : _b.id) === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID) {
          const connector = wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID);
          resolve(getWalletConnectCaipNetworks(connector));
        }
        resolve({ approvedCaipNetworkIds: void 0, supportsAllNetworks: true });
      })
    };
    const connectionControllerClient = {
      connectWalletConnect: async (onUri) => {
        var _a, _b, _c;
        const connector = wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID);
        if (!connector) {
          throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");
        }
        const provider = await connector.getProvider();
        provider.on("display_uri", (data) => {
          onUri(data);
        });
        const chainId = NetworkUtil.caipNetworkIdToNumber((_a = this.getCaipNetwork()) == null ? void 0 : _a.id);
        if (((_b = siweConfig == null ? void 0 : siweConfig.options) == null ? void 0 : _b.enabled) && typeof (provider == null ? void 0 : provider.authenticate) === "function") {
          const { SIWEController, getDidChainId, getDidAddress } = await import("./exports-FKYSPIPU.js");
          const siweParams = await siweConfig.getMessageParams();
          await connector.setRequestedChainsIds(siweParams.chains);
          const result = await provider.authenticate({
            nonce: await siweConfig.getNonce(),
            methods: [...y],
            ...siweParams
          });
          const signedCacao = (_c = result == null ? void 0 : result.auths) == null ? void 0 : _c[0];
          if (signedCacao) {
            const { p, s } = signedCacao;
            const cacaoChainId = getDidChainId(p.iss) || "";
            const address = getDidAddress(p.iss);
            if (address && cacaoChainId) {
              SIWEController.setSession({
                address,
                chainId: parseInt(cacaoChainId, 10)
              });
            }
            try {
              const message = provider.signer.client.formatAuthMessage({
                request: p,
                iss: p.iss
              });
              await SIWEController.verifyMessage({
                message,
                signature: s.s,
                cacao: signedCacao
              });
            } catch (error) {
              console.error("Error verifying message", error);
              await provider.disconnect().catch(console.error);
              await SIWEController.signOut().catch(console.error);
              throw error;
            }
            this.wagmiConfig.state.current = "";
          }
        }
        await connect(this.wagmiConfig, { connector, chainId });
      },
      connectExternal: async ({ id, provider, info }) => {
        var _a, _b;
        const connector = wagmiConfig.connectors.find((c) => c.id === id);
        if (!connector) {
          throw new Error("connectionControllerClient:connectExternal - connector is undefined");
        }
        if (provider && info && connector.id === ConstantsUtil2.EIP6963_CONNECTOR_ID) {
          (_a = connector.setEip6963Wallet) == null ? void 0 : _a.call(connector, { provider, info });
        }
        const chainId = NetworkUtil.caipNetworkIdToNumber((_b = this.getCaipNetwork()) == null ? void 0 : _b.id);
        await connect(this.wagmiConfig, { connector, chainId });
      },
      reconnectExternal: async ({ id }) => {
        const connector = wagmiConfig.connectors.find((c) => c.id === id);
        if (!connector) {
          throw new Error("connectionControllerClient:connectExternal - connector is undefined");
        }
        await reconnect(this.wagmiConfig, { connectors: [connector] });
      },
      checkInstalled: (ids) => {
        const injectedConnector = this.getConnectors().find((c) => c.type === "INJECTED");
        if (!ids) {
          return Boolean(window.ethereum);
        }
        if (injectedConnector) {
          if (!(window == null ? void 0 : window.ethereum)) {
            return false;
          }
          return ids.some((id) => {
            var _a;
            return Boolean((_a = window.ethereum) == null ? void 0 : _a[String(id)]);
          });
        }
        return false;
      },
      disconnect: async () => {
        var _a;
        await disconnect(this.wagmiConfig);
        if ((_a = siweConfig == null ? void 0 : siweConfig.options) == null ? void 0 : _a.signOutOnDisconnect) {
          const { SIWEController } = await import("./exports-FKYSPIPU.js");
          await SIWEController.signOut();
        }
      },
      signMessage: async (message) => signMessage(this.wagmiConfig, { message }),
      estimateGas: async (args) => {
        try {
          return await estimateGas(this.wagmiConfig, {
            account: args.address,
            to: args.to,
            data: args.data,
            type: "legacy"
          });
        } catch (error) {
          return 0n;
        }
      },
      sendTransaction: async (data) => {
        const { chainId } = getAccount(this.wagmiConfig);
        const txParams = {
          account: data.address,
          to: data.to,
          value: data.value,
          gas: data.gas,
          gasPrice: data.gasPrice,
          data: data.data,
          chainId,
          type: "legacy"
        };
        await prepareTransactionRequest(this.wagmiConfig, txParams);
        const tx = await sendTransaction(this.wagmiConfig, txParams);
        await waitForTransactionReceipt(this.wagmiConfig, { hash: tx, timeout: 25e3 });
        return tx;
      },
      writeContract: async (data) => {
        var _a;
        const chainId = NetworkUtil.caipNetworkIdToNumber((_a = this.getCaipNetwork()) == null ? void 0 : _a.id);
        const tx = await writeContract(wagmiConfig, {
          chainId,
          address: data.tokenAddress,
          abi: data.abi,
          functionName: data.method,
          args: [data.receiverAddress, data.tokenAmount]
        });
        return tx;
      },
      getEnsAddress: async (value) => {
        var _a;
        try {
          const chainId = NetworkUtil.caipNetworkIdToNumber((_a = this.getCaipNetwork()) == null ? void 0 : _a.id);
          let ensName = false;
          let wcName = false;
          if (value == null ? void 0 : value.endsWith(ConstantsUtil.WC_NAME_SUFFIX)) {
            wcName = await this.resolveWalletConnectName(value);
          }
          if (chainId === mainnet.id) {
            ensName = await getEnsAddress(this.wagmiConfig, {
              name: normalize4(value),
              chainId
            });
          }
          return ensName || wcName || false;
        } catch {
          return false;
        }
      },
      getEnsAvatar: async (value) => {
        var _a;
        const chainId = NetworkUtil.caipNetworkIdToNumber((_a = this.getCaipNetwork()) == null ? void 0 : _a.id);
        if (chainId !== mainnet.id) {
          return false;
        }
        const avatar = await getEnsAvatar(this.wagmiConfig, {
          name: normalize4(value),
          chainId
        });
        return avatar || false;
      },
      parseUnits,
      formatUnits
    };
    super({
      networkControllerClient,
      connectionControllerClient,
      siweControllerClient: siweConfig,
      defaultChain: getCaipDefaultChain(defaultChain),
      tokens: HelpersUtil.getCaipTokens(tokens),
      _sdkVersion: _sdkVersion ?? `html-wagmi-${ConstantsUtil2.VERSION}`,
      ...w3mOptions
    });
    this.hasSyncedConnectedAccount = false;
    this.options = void 0;
    this.options = options;
    this.wagmiConfig = wagmiConfig;
    this.syncRequestedNetworks([...wagmiConfig.chains]);
    this.syncConnectors([...wagmiConfig.connectors]);
    this.initAuthConnectorListeners([...wagmiConfig.connectors]);
    watchConnectors(this.wagmiConfig, {
      onChange: (connectors) => this.syncConnectors(connectors)
    });
    watchAccount(this.wagmiConfig, {
      onChange: (accountData) => this.syncAccount({ ...accountData })
    });
  }
  getState() {
    const state = super.getState();
    return {
      ...state,
      selectedNetworkId: NetworkUtil.caipNetworkIdToNumber(state.selectedNetworkId)
    };
  }
  subscribeState(callback) {
    return super.subscribeState((state) => callback({
      ...state,
      selectedNetworkId: NetworkUtil.caipNetworkIdToNumber(state.selectedNetworkId)
    }));
  }
  syncRequestedNetworks(chains) {
    const requestedCaipNetworks = chains == null ? void 0 : chains.map((chain2) => {
      var _a, _b;
      return {
        id: `${ConstantsUtil2.EIP155}:${chain2.id}`,
        name: chain2.name,
        imageId: PresetsUtil.EIP155NetworkImageIds[chain2.id],
        imageUrl: (_b = (_a = this.options) == null ? void 0 : _a.chainImages) == null ? void 0 : _b[chain2.id]
      };
    });
    this.setRequestedCaipNetworks(requestedCaipNetworks ?? []);
  }
  async syncAccount({ address, isConnected, chainId, connector }) {
    this.resetAccount();
    this.syncNetwork(address, chainId, isConnected);
    if (isConnected && address && chainId) {
      const caipAddress = `${ConstantsUtil2.EIP155}:${chainId}:${address}`;
      this.setIsConnected(isConnected);
      this.setCaipAddress(caipAddress);
      await Promise.all([
        this.syncProfile(address, chainId),
        this.syncBalance(address, chainId),
        this.syncConnectedWalletInfo(connector),
        this.getApprovedCaipNetworksData()
      ]);
      this.hasSyncedConnectedAccount = true;
    } else if (!isConnected && this.hasSyncedConnectedAccount) {
      this.resetWcConnection();
      this.resetNetwork();
    }
  }
  async syncNetwork(address, chainId, isConnected) {
    var _a, _b, _c, _d;
    const chain2 = this.wagmiConfig.chains.find((c) => c.id === chainId);
    if (chain2 || chainId) {
      const name = (chain2 == null ? void 0 : chain2.name) ?? (chainId == null ? void 0 : chainId.toString());
      const id = Number((chain2 == null ? void 0 : chain2.id) ?? chainId);
      const caipChainId = `${ConstantsUtil2.EIP155}:${id}`;
      this.setCaipNetwork({
        id: caipChainId,
        name,
        imageId: PresetsUtil.EIP155NetworkImageIds[id],
        imageUrl: (_b = (_a = this.options) == null ? void 0 : _a.chainImages) == null ? void 0 : _b[id]
      });
      if (isConnected && address && chainId) {
        const caipAddress = `${ConstantsUtil2.EIP155}:${id}:${address}`;
        this.setCaipAddress(caipAddress);
        if ((_d = (_c = chain2 == null ? void 0 : chain2.blockExplorers) == null ? void 0 : _c.default) == null ? void 0 : _d.url) {
          const url = `${chain2.blockExplorers.default.url}/address/${address}`;
          this.setAddressExplorerUrl(url);
        } else {
          this.setAddressExplorerUrl(void 0);
        }
        if (this.hasSyncedConnectedAccount) {
          await this.syncProfile(address, chainId);
          await this.syncBalance(address, chainId);
        }
      }
    }
  }
  async syncWalletConnectName(address) {
    try {
      const registeredWcNames = await this.getWalletConnectName(address);
      if (registeredWcNames[0]) {
        const wcName = registeredWcNames[0];
        this.setProfileName(wcName.name);
      } else {
        this.setProfileName(null);
      }
    } catch {
      this.setProfileName(null);
    }
  }
  async syncProfile(address, chainId) {
    try {
      const { name, avatar } = await this.fetchIdentity({
        address
      });
      this.setProfileName(name);
      this.setProfileImage(avatar);
      if (!name) {
        await this.syncWalletConnectName(address);
      }
    } catch {
      if (chainId === mainnet.id) {
        const profileName = await getEnsName(this.wagmiConfig, { address, chainId });
        if (profileName) {
          this.setProfileName(profileName);
          const profileImage = await getEnsAvatar(this.wagmiConfig, {
            name: profileName,
            chainId
          });
          if (profileImage) {
            this.setProfileImage(profileImage);
          }
        } else {
          await this.syncWalletConnectName(address);
          this.setProfileImage(null);
        }
      } else {
        await this.syncWalletConnectName(address);
        this.setProfileImage(null);
      }
    }
  }
  async syncBalance(address, chainId) {
    var _a, _b, _c;
    const chain2 = this.wagmiConfig.chains.find((c) => c.id === chainId);
    if (chain2) {
      const balance = await getBalance(this.wagmiConfig, {
        address,
        chainId: chain2.id,
        token: (_c = (_b = (_a = this.options) == null ? void 0 : _a.tokens) == null ? void 0 : _b[chain2.id]) == null ? void 0 : _c.address
      });
      this.setBalance(balance.formatted, balance.symbol);
      return;
    }
    this.setBalance(void 0, void 0);
  }
  async syncConnectedWalletInfo(connector) {
    var _a;
    if (!connector) {
      throw Error("syncConnectedWalletInfo - connector is undefined");
    }
    if (connector.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID && connector.getProvider) {
      const walletConnectProvider = await connector.getProvider();
      if (walletConnectProvider.session) {
        this.setConnectedWalletInfo({
          ...walletConnectProvider.session.peer.metadata,
          name: walletConnectProvider.session.peer.metadata.name,
          icon: (_a = walletConnectProvider.session.peer.metadata.icons) == null ? void 0 : _a[0]
        });
      }
    } else {
      this.setConnectedWalletInfo({ name: connector.name, icon: connector.icon });
    }
  }
  syncConnectors(connectors) {
    const uniqueIds = /* @__PURE__ */ new Set();
    const filteredConnectors = connectors.filter((item) => !uniqueIds.has(item.id) && uniqueIds.add(item.id));
    const w3mConnectors = [];
    const coinbaseSDKId = ConstantsUtil2.COINBASE_SDK_CONNECTOR_ID;
    const coinbaseConnector = filteredConnectors.find((c) => c.id === coinbaseSDKId);
    filteredConnectors.forEach(({ id, name, type: type6, icon }) => {
      var _a, _b;
      const isCoinbaseRepeated = coinbaseConnector && id === ConstantsUtil2.CONNECTOR_RDNS_MAP[ConstantsUtil2.COINBASE_CONNECTOR_ID];
      const shouldSkip = isCoinbaseRepeated || ConstantsUtil2.AUTH_CONNECTOR_ID === id;
      if (!shouldSkip) {
        w3mConnectors.push({
          id,
          explorerId: PresetsUtil.ConnectorExplorerIds[id],
          imageUrl: ((_b = (_a = this.options) == null ? void 0 : _a.connectorImages) == null ? void 0 : _b[id]) ?? icon,
          name: PresetsUtil.ConnectorNamesMap[id] ?? name,
          imageId: PresetsUtil.ConnectorImageIds[id],
          type: PresetsUtil.ConnectorTypesMap[type6] ?? "EXTERNAL",
          info: {
            rdns: id
          }
        });
      }
    });
    this.setConnectors(w3mConnectors);
    this.syncAuthConnector(filteredConnectors);
  }
  async syncAuthConnector(connectors) {
    const authConnector = connectors.find(({ id }) => id === ConstantsUtil2.AUTH_CONNECTOR_ID);
    if (authConnector) {
      const provider = await authConnector.getProvider();
      this.addConnector({
        id: ConstantsUtil2.AUTH_CONNECTOR_ID,
        type: "AUTH",
        name: "Auth",
        provider,
        email: authConnector.email,
        socials: authConnector.socials,
        showWallets: (authConnector == null ? void 0 : authConnector.showWallets) === void 0 ? true : authConnector.showWallets
      });
    }
  }
  async initAuthConnectorListeners(connectors) {
    const authConnector = connectors.find(({ id }) => id === ConstantsUtil2.AUTH_CONNECTOR_ID);
    if (authConnector) {
      await this.listenAuthConnector(authConnector);
      await this.listenModal(authConnector);
    }
  }
  async listenAuthConnector(connector) {
    if (typeof window !== "undefined" && connector) {
      super.setLoading(true);
      const provider = await connector.getProvider();
      const isLoginEmailUsed = provider.getLoginEmailUsed();
      super.setLoading(isLoginEmailUsed);
      if (isLoginEmailUsed) {
        this.setIsConnected(false);
      }
      provider.onRpcRequest((request) => {
        if (W3mFrameHelpers.checkIfRequestExists(request)) {
          if (!W3mFrameHelpers.checkIfRequestIsAllowed(request)) {
            if (super.isOpen()) {
              if (super.isTransactionStackEmpty()) {
                return;
              }
              if (super.isTransactionShouldReplaceView()) {
                super.replace("ApproveTransaction");
              } else {
                super.redirect("ApproveTransaction");
              }
            } else {
              super.open({ view: "ApproveTransaction" });
            }
          }
        } else {
          super.open();
          const method = W3mFrameHelpers.getRequestMethod(request);
          console.error(W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_MESSAGE, { method });
          setTimeout(() => {
            this.showErrorMessage(W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
          }, 300);
          provider.rejectRpcRequest();
        }
      });
      provider.onRpcResponse((response) => {
        const responseType = W3mFrameHelpers.getResponseType(response);
        switch (responseType) {
          case W3mFrameConstants.RPC_RESPONSE_TYPE_ERROR: {
            const isModalOpen = super.isOpen();
            if (isModalOpen) {
              if (super.isTransactionStackEmpty()) {
                super.close();
              } else {
                super.popTransactionStack(true);
              }
            }
            break;
          }
          case W3mFrameConstants.RPC_RESPONSE_TYPE_TX: {
            if (super.isTransactionStackEmpty()) {
              super.close();
            } else {
              super.popTransactionStack();
            }
            break;
          }
          default:
            break;
        }
      });
      provider.onNotConnected(() => {
        const isConnected = this.getIsConnectedState();
        if (!isConnected) {
          this.setIsConnected(false);
          super.setLoading(false);
        }
      });
      provider.onIsConnected((req) => {
        this.setIsConnected(true);
        this.setSmartAccountDeployed(Boolean(req.smartAccountDeployed));
        this.setPreferredAccountType(req.preferredAccountType);
        super.setLoading(false);
      });
      provider.onGetSmartAccountEnabledNetworks((networks) => {
        this.setSmartAccountEnabledNetworks(networks);
      });
      provider.onSetPreferredAccount(({ address, type: type6 }) => {
        var _a;
        if (!address) {
          return;
        }
        const chainId = NetworkUtil.caipNetworkIdToNumber((_a = this.getCaipNetwork()) == null ? void 0 : _a.id);
        this.syncAccount({
          address,
          chainId,
          isConnected: true,
          connector
        }).then(() => this.setPreferredAccountType(type6));
      });
    }
  }
  async listenModal(connector) {
    const provider = await connector.getProvider();
    this.subscribeState((val) => {
      if (!val.open) {
        provider.rejectRpcRequest();
      }
    });
  }
};

// node_modules/@web3modal/wagmi/dist/esm/exports/react/index.js
var modal2 = void 0;
function createWeb3Modal(options) {
  if (!modal2) {
    modal2 = new Web3Modal({ ...options, _sdkVersion: `react-wagmi-${ConstantsUtil2.VERSION}` });
    getWeb3Modal(modal2);
  }
  return modal2;
}
export {
  createWeb3Modal,
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme
};
/*! Bundled license information:

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/bls.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/tower.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/bls12-381.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/bip32/lib/esm/index.js:
  (*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)

@scure/bip39/esm/index.js:
  (*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)

@noble/curves/esm/p256.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=@web3modal_wagmi_react.js.map
