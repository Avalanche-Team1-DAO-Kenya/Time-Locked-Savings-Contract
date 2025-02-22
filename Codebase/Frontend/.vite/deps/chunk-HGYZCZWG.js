import {
  esm_exports,
  require_lodash
} from "./chunk-LDYBCKWB.js";
import {
  W3mFrameHelpers,
  W3mFrameRpcConstants
} from "./chunk-FAF7M4S3.js";
import {
  require_chacha20poly1305,
  require_cjs,
  require_cjs2,
  require_cjs3,
  require_hkdf,
  require_query_string,
  require_random,
  require_sha256,
  require_x25519
} from "./chunk-2PYUBLP3.js";
import {
  LitElement,
  _$LH,
  css,
  html,
  nothing,
  property,
  state
} from "./chunk-UOQSISIW.js";
import {
  AccountController,
  ApiController,
  AssetController,
  AssetUtil,
  BlockchainApiController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  ConstantsUtil2,
  CoreHelperUtil,
  DateUtil,
  EnsController,
  EventsController,
  InputUtil,
  MathUtil,
  ModalController,
  NavigationUtil,
  NetworkController,
  NumberUtil,
  OnRampController,
  OptionsController,
  PublicStateController,
  RouterController,
  RouterUtil,
  SendController,
  SnackController,
  StorageUtil,
  SwapController,
  ThemeController,
  TooltipController,
  TransactionUtil,
  TransactionsController,
  UiHelperUtil,
  customElement,
  getW3mThemeVariables,
  setColorTheme,
  setThemeVariables
} from "./chunk-5RGLIFIF.js";
import {
  require_events
} from "./chunk-WMH57NS6.js";
import {
  http
} from "./chunk-QRKWAH57.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-GIZG7J7H.js";

// node_modules/unfetch/dist/unfetch.module.js
var unfetch_module_exports = {};
__export(unfetch_module_exports, {
  default: () => unfetch_module_default
});
function unfetch_module_default(e, n2) {
  return n2 = n2 || {}, new Promise(function(t, r2) {
    var s = new XMLHttpRequest(), o2 = [], u2 = [], i3 = {}, a2 = function() {
      return { ok: 2 == (s.status / 100 | 0), statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: a2, headers: { keys: function() {
        return o2;
      }, entries: function() {
        return u2;
      }, get: function(e2) {
        return i3[e2.toLowerCase()];
      }, has: function(e2) {
        return e2.toLowerCase() in i3;
      } } };
    };
    for (var l in s.open(n2.method || "get", e, true), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n3, t2) {
        o2.push(n3 = n3.toLowerCase()), u2.push([n3, t2]), i3[n3] = i3[n3] ? i3[n3] + "," + t2 : t2;
      }), t(a2());
    }, s.onerror = r2, s.withCredentials = "include" == n2.credentials, n2.headers)
      s.setRequestHeader(l, n2.headers[l]);
    s.send(n2.body || null);
  });
}
var init_unfetch_module = __esm({
  "node_modules/unfetch/dist/unfetch.module.js"() {
  }
});

// node_modules/isomorphic-unfetch/browser.js
var require_browser = __commonJS({
  "node_modules/isomorphic-unfetch/browser.js"(exports, module) {
    module.exports = self.fetch || (self.fetch = (init_unfetch_module(), __toCommonJS(unfetch_module_exports)).default || (init_unfetch_module(), __toCommonJS(unfetch_module_exports)));
  }
});

// node_modules/@web3modal/scaffold-utils/dist/esm/src/ConstantsUtil.js
var ConstantsUtil3 = {
  WALLET_CONNECT_CONNECTOR_ID: "walletConnect",
  INJECTED_CONNECTOR_ID: "injected",
  COINBASE_CONNECTOR_ID: "coinbaseWallet",
  COINBASE_SDK_CONNECTOR_ID: "coinbaseWalletSDK",
  SAFE_CONNECTOR_ID: "safe",
  LEDGER_CONNECTOR_ID: "ledger",
  EIP6963_CONNECTOR_ID: "eip6963",
  AUTH_CONNECTOR_ID: "w3mAuth",
  EIP155: "eip155",
  ADD_CHAIN_METHOD: "wallet_addEthereumChain",
  EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
  EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
  CONNECTOR_RDNS_MAP: {
    coinbaseWallet: "com.coinbase.wallet"
  },
  VERSION: "4.2.3"
};

// node_modules/@web3modal/scaffold-utils/dist/esm/src/PresetsUtil.js
var PresetsUtil = {
  ConnectorExplorerIds: {
    [ConstantsUtil3.COINBASE_CONNECTOR_ID]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [ConstantsUtil3.SAFE_CONNECTOR_ID]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    [ConstantsUtil3.LEDGER_CONNECTOR_ID]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"
  },
  EIP155NetworkImageIds: {
    1: "692ed6ba-e569-459a-556a-776476829e00",
    42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    1313161554: "3ff73439-a619-4894-9262-4470c773a100",
    2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
    "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
    EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700"
  },
  ConnectorImageIds: {
    [ConstantsUtil3.COINBASE_CONNECTOR_ID]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [ConstantsUtil3.SAFE_CONNECTOR_ID]: "461db637-8616-43ce-035a-d89b8a1d5800",
    [ConstantsUtil3.LEDGER_CONNECTOR_ID]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
    [ConstantsUtil3.WALLET_CONNECT_CONNECTOR_ID]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
    [ConstantsUtil3.INJECTED_CONNECTOR_ID]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
  },
  ConnectorNamesMap: {
    [ConstantsUtil3.INJECTED_CONNECTOR_ID]: "Browser Wallet",
    [ConstantsUtil3.WALLET_CONNECT_CONNECTOR_ID]: "WalletConnect",
    [ConstantsUtil3.COINBASE_CONNECTOR_ID]: "Coinbase",
    [ConstantsUtil3.COINBASE_SDK_CONNECTOR_ID]: "Coinbase",
    [ConstantsUtil3.LEDGER_CONNECTOR_ID]: "Ledger",
    [ConstantsUtil3.SAFE_CONNECTOR_ID]: "Safe"
  },
  ConnectorTypesMap: {
    [ConstantsUtil3.INJECTED_CONNECTOR_ID]: "INJECTED",
    [ConstantsUtil3.WALLET_CONNECT_CONNECTOR_ID]: "WALLET_CONNECT",
    [ConstantsUtil3.EIP6963_CONNECTOR_ID]: "ANNOUNCED",
    [ConstantsUtil3.AUTH_CONNECTOR_ID]: "AUTH"
  },
  WalletConnectRpcChainIds: [
    1,
    5,
    11155111,
    10,
    420,
    42161,
    421613,
    137,
    80001,
    42220,
    1313161554,
    1313161555,
    56,
    97,
    43114,
    43113,
    100,
    8453,
    84531,
    7777777,
    999,
    324,
    280
  ]
};

// node_modules/@web3modal/scaffold-utils/dist/esm/src/HelpersUtil.js
var HelpersUtil = {
  getCaipTokens(tokens) {
    if (!tokens) {
      return void 0;
    }
    const caipTokens = {};
    Object.entries(tokens).forEach(([id, token]) => {
      caipTokens[`${ConstantsUtil3.EIP155}:${id}`] = token;
    });
    return caipTokens;
  }
};

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var import_events6 = __toESM(require_events());

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/utils/dist/index.es.js
var import_time = __toESM(require_cjs());
var import_window_getters = __toESM(require_cjs2());
var import_window_metadata = __toESM(require_cjs3());
var Nr = __toESM(require_query_string());
var import_chacha20poly1305 = __toESM(require_chacha20poly1305());
var import_hkdf = __toESM(require_hkdf());
var import_random = __toESM(require_random());
var import_sha256 = __toESM(require_sha256());
var cn = __toESM(require_x25519());
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r2 = function() {
      return t.apply(this, arguments);
    };
    r2.prototype = t.prototype;
  } else
    r2 = {};
  return Object.defineProperty(r2, "__esModule", { value: true }), Object.keys(e).forEach(function(i3) {
    var n2 = Object.getOwnPropertyDescriptor(e, i3);
    Object.defineProperty(r2, i3, n2.get ? n2 : { enumerable: true, get: function() {
      return e[i3];
    } });
  }), r2;
}
var Pn = { exports: {} };
(function(e) {
  (function() {
    var t = "input is invalid type", r2 = "finalize already called", i3 = typeof window == "object", n2 = i3 ? window : {};
    n2.JS_SHA3_NO_WINDOW && (i3 = false);
    var o2 = !i3 && typeof self == "object", h3 = !n2.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h3 ? n2 = On : o2 && (n2 = self);
    var p2 = !n2.JS_SHA3_NO_COMMON_JS && true && e.exports, b2 = !n2.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m = "0123456789abcdef".split(""), w2 = [31, 7936, 2031616, 520093696], y5 = [4, 1024, 262144, 67108864], S2 = [1, 256, 65536, 16777216], I = [6, 1536, 393216, 100663296], N = [0, 8, 16, 24], C3 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], F = [224, 256, 384, 512], U3 = [128, 256], J2 = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt = { 128: 168, 256: 136 };
    (n2.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u2) {
      return Object.prototype.toString.call(u2) === "[object Array]";
    }), b2 && (n2.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u2) {
      return typeof u2 == "object" && u2.buffer && u2.buffer.constructor === ArrayBuffer;
    });
    for (var G = function(u2, E3, _) {
      return function(B) {
        return new s(u2, E3, u2).update(B)[_]();
      };
    }, H = function(u2, E3, _) {
      return function(B, R2) {
        return new s(u2, E3, R2).update(B)[_]();
      };
    }, z3 = function(u2, E3, _) {
      return function(B, R2, T2, P) {
        return f4["cshake" + u2].update(B, R2, T2, P)[_]();
      };
    }, Pt = function(u2, E3, _) {
      return function(B, R2, T2, P) {
        return f4["kmac" + u2].update(B, R2, T2, P)[_]();
      };
    }, W2 = function(u2, E3, _, B) {
      for (var R2 = 0; R2 < J2.length; ++R2) {
        var T2 = J2[R2];
        u2[T2] = E3(_, B, T2);
      }
      return u2;
    }, Rt = function(u2, E3) {
      var _ = G(u2, E3, "hex");
      return _.create = function() {
        return new s(u2, E3, u2);
      }, _.update = function(B) {
        return _.create().update(B);
      }, W2(_, G, u2, E3);
    }, Yt = function(u2, E3) {
      var _ = H(u2, E3, "hex");
      return _.create = function(B) {
        return new s(u2, E3, B);
      }, _.update = function(B, R2) {
        return _.create(R2).update(B);
      }, W2(_, H, u2, E3);
    }, Y = function(u2, E3) {
      var _ = Bt[u2], B = z3(u2, E3, "hex");
      return B.create = function(R2, T2, P) {
        return !T2 && !P ? f4["shake" + u2].create(R2) : new s(u2, E3, R2).bytepad([T2, P], _);
      }, B.update = function(R2, T2, P, O) {
        return B.create(T2, P, O).update(R2);
      }, W2(B, z3, u2, E3);
    }, Vt2 = function(u2, E3) {
      var _ = Bt[u2], B = Pt(u2, E3, "hex");
      return B.create = function(R2, T2, P) {
        return new v2(u2, E3, T2).bytepad(["KMAC", P], _).bytepad([R2], _);
      }, B.update = function(R2, T2, P, O) {
        return B.create(R2, P, O).update(T2);
      }, W2(B, Pt, u2, E3);
    }, A4 = [{ name: "keccak", padding: S2, bits: F, createMethod: Rt }, { name: "sha3", padding: I, bits: F, createMethod: Rt }, { name: "shake", padding: w2, bits: U3, createMethod: Yt }, { name: "cshake", padding: y5, bits: U3, createMethod: Y }, { name: "kmac", padding: y5, bits: U3, createMethod: Vt2 }], f4 = {}, a2 = [], c2 = 0; c2 < A4.length; ++c2)
      for (var d2 = A4[c2], g2 = d2.bits, x = 0; x < g2.length; ++x) {
        var M2 = d2.name + "_" + g2[x];
        if (a2.push(M2), f4[M2] = d2.createMethod(g2[x], d2.padding), d2.name !== "sha3") {
          var l = d2.name + g2[x];
          a2.push(l), f4[l] = f4[M2];
        }
      }
    function s(u2, E3, _) {
      this.blocks = [], this.s = [], this.padding = E3, this.outputBits = _, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u2 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _ >> 5, this.extraBytes = (_ & 31) >> 3;
      for (var B = 0; B < 50; ++B)
        this.s[B] = 0;
    }
    s.prototype.update = function(u2) {
      if (this.finalized)
        throw new Error(r2);
      var E3, _ = typeof u2;
      if (_ !== "string") {
        if (_ === "object") {
          if (u2 === null)
            throw new Error(t);
          if (b2 && u2.constructor === ArrayBuffer)
            u2 = new Uint8Array(u2);
          else if (!Array.isArray(u2) && (!b2 || !ArrayBuffer.isView(u2)))
            throw new Error(t);
        } else
          throw new Error(t);
        E3 = true;
      }
      for (var B = this.blocks, R2 = this.byteCount, T2 = u2.length, P = this.blockCount, O = 0, Ct2 = this.s, D, q2; O < T2; ) {
        if (this.reset)
          for (this.reset = false, B[0] = this.block, D = 1; D < P + 1; ++D)
            B[D] = 0;
        if (E3)
          for (D = this.start; O < T2 && D < R2; ++O)
            B[D >> 2] |= u2[O] << N[D++ & 3];
        else
          for (D = this.start; O < T2 && D < R2; ++O)
            q2 = u2.charCodeAt(O), q2 < 128 ? B[D >> 2] |= q2 << N[D++ & 3] : q2 < 2048 ? (B[D >> 2] |= (192 | q2 >> 6) << N[D++ & 3], B[D >> 2] |= (128 | q2 & 63) << N[D++ & 3]) : q2 < 55296 || q2 >= 57344 ? (B[D >> 2] |= (224 | q2 >> 12) << N[D++ & 3], B[D >> 2] |= (128 | q2 >> 6 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q2 & 63) << N[D++ & 3]) : (q2 = 65536 + ((q2 & 1023) << 10 | u2.charCodeAt(++O) & 1023), B[D >> 2] |= (240 | q2 >> 18) << N[D++ & 3], B[D >> 2] |= (128 | q2 >> 12 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q2 >> 6 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q2 & 63) << N[D++ & 3]);
        if (this.lastByteIndex = D, D >= R2) {
          for (this.start = D - R2, this.block = B[P], D = 0; D < P; ++D)
            Ct2[D] ^= B[D];
          k2(Ct2), this.reset = true;
        } else
          this.start = D;
      }
      return this;
    }, s.prototype.encode = function(u2, E3) {
      var _ = u2 & 255, B = 1, R2 = [_];
      for (u2 = u2 >> 8, _ = u2 & 255; _ > 0; )
        R2.unshift(_), u2 = u2 >> 8, _ = u2 & 255, ++B;
      return E3 ? R2.push(B) : R2.unshift(B), this.update(R2), R2.length;
    }, s.prototype.encodeString = function(u2) {
      var E3, _ = typeof u2;
      if (_ !== "string") {
        if (_ === "object") {
          if (u2 === null)
            throw new Error(t);
          if (b2 && u2.constructor === ArrayBuffer)
            u2 = new Uint8Array(u2);
          else if (!Array.isArray(u2) && (!b2 || !ArrayBuffer.isView(u2)))
            throw new Error(t);
        } else
          throw new Error(t);
        E3 = true;
      }
      var B = 0, R2 = u2.length;
      if (E3)
        B = R2;
      else
        for (var T2 = 0; T2 < u2.length; ++T2) {
          var P = u2.charCodeAt(T2);
          P < 128 ? B += 1 : P < 2048 ? B += 2 : P < 55296 || P >= 57344 ? B += 3 : (P = 65536 + ((P & 1023) << 10 | u2.charCodeAt(++T2) & 1023), B += 4);
        }
      return B += this.encode(B * 8), this.update(u2), B;
    }, s.prototype.bytepad = function(u2, E3) {
      for (var _ = this.encode(E3), B = 0; B < u2.length; ++B)
        _ += this.encodeString(u2[B]);
      var R2 = E3 - _ % E3, T2 = [];
      return T2.length = R2, this.update(T2), this;
    }, s.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u2 = this.blocks, E3 = this.lastByteIndex, _ = this.blockCount, B = this.s;
        if (u2[E3 >> 2] |= this.padding[E3 & 3], this.lastByteIndex === this.byteCount)
          for (u2[0] = u2[_], E3 = 1; E3 < _ + 1; ++E3)
            u2[E3] = 0;
        for (u2[_ - 1] |= 2147483648, E3 = 0; E3 < _; ++E3)
          B[E3] ^= u2[E3];
        k2(B);
      }
    }, s.prototype.toString = s.prototype.hex = function() {
      this.finalize();
      for (var u2 = this.blockCount, E3 = this.s, _ = this.outputBlocks, B = this.extraBytes, R2 = 0, T2 = 0, P = "", O; T2 < _; ) {
        for (R2 = 0; R2 < u2 && T2 < _; ++R2, ++T2)
          O = E3[R2], P += m[O >> 4 & 15] + m[O & 15] + m[O >> 12 & 15] + m[O >> 8 & 15] + m[O >> 20 & 15] + m[O >> 16 & 15] + m[O >> 28 & 15] + m[O >> 24 & 15];
        T2 % u2 === 0 && (k2(E3), R2 = 0);
      }
      return B && (O = E3[R2], P += m[O >> 4 & 15] + m[O & 15], B > 1 && (P += m[O >> 12 & 15] + m[O >> 8 & 15]), B > 2 && (P += m[O >> 20 & 15] + m[O >> 16 & 15])), P;
    }, s.prototype.arrayBuffer = function() {
      this.finalize();
      var u2 = this.blockCount, E3 = this.s, _ = this.outputBlocks, B = this.extraBytes, R2 = 0, T2 = 0, P = this.outputBits >> 3, O;
      B ? O = new ArrayBuffer(_ + 1 << 2) : O = new ArrayBuffer(P);
      for (var Ct2 = new Uint32Array(O); T2 < _; ) {
        for (R2 = 0; R2 < u2 && T2 < _; ++R2, ++T2)
          Ct2[T2] = E3[R2];
        T2 % u2 === 0 && k2(E3);
      }
      return B && (Ct2[R2] = E3[R2], O = O.slice(0, P)), O;
    }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
      this.finalize();
      for (var u2 = this.blockCount, E3 = this.s, _ = this.outputBlocks, B = this.extraBytes, R2 = 0, T2 = 0, P = [], O, Ct2; T2 < _; ) {
        for (R2 = 0; R2 < u2 && T2 < _; ++R2, ++T2)
          O = T2 << 2, Ct2 = E3[R2], P[O] = Ct2 & 255, P[O + 1] = Ct2 >> 8 & 255, P[O + 2] = Ct2 >> 16 & 255, P[O + 3] = Ct2 >> 24 & 255;
        T2 % u2 === 0 && k2(E3);
      }
      return B && (O = T2 << 2, Ct2 = E3[R2], P[O] = Ct2 & 255, B > 1 && (P[O + 1] = Ct2 >> 8 & 255), B > 2 && (P[O + 2] = Ct2 >> 16 & 255)), P;
    };
    function v2(u2, E3, _) {
      s.call(this, u2, E3, _);
    }
    v2.prototype = new s(), v2.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s.prototype.finalize.call(this);
    };
    var k2 = function(u2) {
      var E3, _, B, R2, T2, P, O, Ct2, D, q2, De2, X3, Z2, Fe2, $3, tt, Te, et, rt, Ue2, it, nt, ke2, ft, ot, qe2, st, at, Ke3, ut, ht, He3, ct2, lt, ze2, dt, pt, Le2, vt, mt, je2, gt, At, Qe, bt2, yt, Je2, wt, xt, Ge3, Mt, Et2, Ye2, St, Nt, Ve2, It, _t, Me3, Ee2, Se3, Ne, Ie;
      for (B = 0; B < 48; B += 2)
        R2 = u2[0] ^ u2[10] ^ u2[20] ^ u2[30] ^ u2[40], T2 = u2[1] ^ u2[11] ^ u2[21] ^ u2[31] ^ u2[41], P = u2[2] ^ u2[12] ^ u2[22] ^ u2[32] ^ u2[42], O = u2[3] ^ u2[13] ^ u2[23] ^ u2[33] ^ u2[43], Ct2 = u2[4] ^ u2[14] ^ u2[24] ^ u2[34] ^ u2[44], D = u2[5] ^ u2[15] ^ u2[25] ^ u2[35] ^ u2[45], q2 = u2[6] ^ u2[16] ^ u2[26] ^ u2[36] ^ u2[46], De2 = u2[7] ^ u2[17] ^ u2[27] ^ u2[37] ^ u2[47], X3 = u2[8] ^ u2[18] ^ u2[28] ^ u2[38] ^ u2[48], Z2 = u2[9] ^ u2[19] ^ u2[29] ^ u2[39] ^ u2[49], E3 = X3 ^ (P << 1 | O >>> 31), _ = Z2 ^ (O << 1 | P >>> 31), u2[0] ^= E3, u2[1] ^= _, u2[10] ^= E3, u2[11] ^= _, u2[20] ^= E3, u2[21] ^= _, u2[30] ^= E3, u2[31] ^= _, u2[40] ^= E3, u2[41] ^= _, E3 = R2 ^ (Ct2 << 1 | D >>> 31), _ = T2 ^ (D << 1 | Ct2 >>> 31), u2[2] ^= E3, u2[3] ^= _, u2[12] ^= E3, u2[13] ^= _, u2[22] ^= E3, u2[23] ^= _, u2[32] ^= E3, u2[33] ^= _, u2[42] ^= E3, u2[43] ^= _, E3 = P ^ (q2 << 1 | De2 >>> 31), _ = O ^ (De2 << 1 | q2 >>> 31), u2[4] ^= E3, u2[5] ^= _, u2[14] ^= E3, u2[15] ^= _, u2[24] ^= E3, u2[25] ^= _, u2[34] ^= E3, u2[35] ^= _, u2[44] ^= E3, u2[45] ^= _, E3 = Ct2 ^ (X3 << 1 | Z2 >>> 31), _ = D ^ (Z2 << 1 | X3 >>> 31), u2[6] ^= E3, u2[7] ^= _, u2[16] ^= E3, u2[17] ^= _, u2[26] ^= E3, u2[27] ^= _, u2[36] ^= E3, u2[37] ^= _, u2[46] ^= E3, u2[47] ^= _, E3 = q2 ^ (R2 << 1 | T2 >>> 31), _ = De2 ^ (T2 << 1 | R2 >>> 31), u2[8] ^= E3, u2[9] ^= _, u2[18] ^= E3, u2[19] ^= _, u2[28] ^= E3, u2[29] ^= _, u2[38] ^= E3, u2[39] ^= _, u2[48] ^= E3, u2[49] ^= _, Fe2 = u2[0], $3 = u2[1], yt = u2[11] << 4 | u2[10] >>> 28, Je2 = u2[10] << 4 | u2[11] >>> 28, at = u2[20] << 3 | u2[21] >>> 29, Ke3 = u2[21] << 3 | u2[20] >>> 29, Ee2 = u2[31] << 9 | u2[30] >>> 23, Se3 = u2[30] << 9 | u2[31] >>> 23, gt = u2[40] << 18 | u2[41] >>> 14, At = u2[41] << 18 | u2[40] >>> 14, lt = u2[2] << 1 | u2[3] >>> 31, ze2 = u2[3] << 1 | u2[2] >>> 31, tt = u2[13] << 12 | u2[12] >>> 20, Te = u2[12] << 12 | u2[13] >>> 20, wt = u2[22] << 10 | u2[23] >>> 22, xt = u2[23] << 10 | u2[22] >>> 22, ut = u2[33] << 13 | u2[32] >>> 19, ht = u2[32] << 13 | u2[33] >>> 19, Ne = u2[42] << 2 | u2[43] >>> 30, Ie = u2[43] << 2 | u2[42] >>> 30, St = u2[5] << 30 | u2[4] >>> 2, Nt = u2[4] << 30 | u2[5] >>> 2, dt = u2[14] << 6 | u2[15] >>> 26, pt = u2[15] << 6 | u2[14] >>> 26, et = u2[25] << 11 | u2[24] >>> 21, rt = u2[24] << 11 | u2[25] >>> 21, Ge3 = u2[34] << 15 | u2[35] >>> 17, Mt = u2[35] << 15 | u2[34] >>> 17, He3 = u2[45] << 29 | u2[44] >>> 3, ct2 = u2[44] << 29 | u2[45] >>> 3, ft = u2[6] << 28 | u2[7] >>> 4, ot = u2[7] << 28 | u2[6] >>> 4, Ve2 = u2[17] << 23 | u2[16] >>> 9, It = u2[16] << 23 | u2[17] >>> 9, Le2 = u2[26] << 25 | u2[27] >>> 7, vt = u2[27] << 25 | u2[26] >>> 7, Ue2 = u2[36] << 21 | u2[37] >>> 11, it = u2[37] << 21 | u2[36] >>> 11, Et2 = u2[47] << 24 | u2[46] >>> 8, Ye2 = u2[46] << 24 | u2[47] >>> 8, Qe = u2[8] << 27 | u2[9] >>> 5, bt2 = u2[9] << 27 | u2[8] >>> 5, qe2 = u2[18] << 20 | u2[19] >>> 12, st = u2[19] << 20 | u2[18] >>> 12, _t = u2[29] << 7 | u2[28] >>> 25, Me3 = u2[28] << 7 | u2[29] >>> 25, mt = u2[38] << 8 | u2[39] >>> 24, je2 = u2[39] << 8 | u2[38] >>> 24, nt = u2[48] << 14 | u2[49] >>> 18, ke2 = u2[49] << 14 | u2[48] >>> 18, u2[0] = Fe2 ^ ~tt & et, u2[1] = $3 ^ ~Te & rt, u2[10] = ft ^ ~qe2 & at, u2[11] = ot ^ ~st & Ke3, u2[20] = lt ^ ~dt & Le2, u2[21] = ze2 ^ ~pt & vt, u2[30] = Qe ^ ~yt & wt, u2[31] = bt2 ^ ~Je2 & xt, u2[40] = St ^ ~Ve2 & _t, u2[41] = Nt ^ ~It & Me3, u2[2] = tt ^ ~et & Ue2, u2[3] = Te ^ ~rt & it, u2[12] = qe2 ^ ~at & ut, u2[13] = st ^ ~Ke3 & ht, u2[22] = dt ^ ~Le2 & mt, u2[23] = pt ^ ~vt & je2, u2[32] = yt ^ ~wt & Ge3, u2[33] = Je2 ^ ~xt & Mt, u2[42] = Ve2 ^ ~_t & Ee2, u2[43] = It ^ ~Me3 & Se3, u2[4] = et ^ ~Ue2 & nt, u2[5] = rt ^ ~it & ke2, u2[14] = at ^ ~ut & He3, u2[15] = Ke3 ^ ~ht & ct2, u2[24] = Le2 ^ ~mt & gt, u2[25] = vt ^ ~je2 & At, u2[34] = wt ^ ~Ge3 & Et2, u2[35] = xt ^ ~Mt & Ye2, u2[44] = _t ^ ~Ee2 & Ne, u2[45] = Me3 ^ ~Se3 & Ie, u2[6] = Ue2 ^ ~nt & Fe2, u2[7] = it ^ ~ke2 & $3, u2[16] = ut ^ ~He3 & ft, u2[17] = ht ^ ~ct2 & ot, u2[26] = mt ^ ~gt & lt, u2[27] = je2 ^ ~At & ze2, u2[36] = Ge3 ^ ~Et2 & Qe, u2[37] = Mt ^ ~Ye2 & bt2, u2[46] = Ee2 ^ ~Ne & St, u2[47] = Se3 ^ ~Ie & Nt, u2[8] = nt ^ ~Fe2 & tt, u2[9] = ke2 ^ ~$3 & Te, u2[18] = He3 ^ ~ft & qe2, u2[19] = ct2 ^ ~ot & st, u2[28] = gt ^ ~lt & dt, u2[29] = At ^ ~ze2 & pt, u2[38] = Et2 ^ ~Qe & yt, u2[39] = Ye2 ^ ~bt2 & Je2, u2[48] = Ne ^ ~St & Ve2, u2[49] = Ie ^ ~Nt & It, u2[0] ^= C3[B], u2[1] ^= C3[B + 1];
    };
    if (p2)
      e.exports = f4;
    else
      for (c2 = 0; c2 < a2.length; ++c2)
        n2[a2[c2]] = f4[a2[c2]];
  })();
})(Pn);
var b0 = Pn.exports;
var y0 = "logger/5.7.0";
var Dn = false;
var Fn = false;
var Cr = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
var Tn = Cr.default;
var gi = null;
function w0() {
  try {
    const e = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
      try {
        if ("test".normalize(t) !== "test")
          throw new Error("bad normalize");
      } catch {
        e.push(t);
      }
    }), e.length)
      throw new Error("missing " + e.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
      throw new Error("broken implementation");
  } catch (e) {
    return e.message;
  }
  return null;
}
var Un = w0();
var Ai;
(function(e) {
  e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ai || (Ai = {}));
var re;
(function(e) {
  e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
var kn = "0123456789abcdef";
var L = class _L {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r2) {
    const i3 = t.toLowerCase();
    Cr[i3] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn > Cr[i3]) && console.log.apply(console, r2);
  }
  debug(...t) {
    this._log(_L.levels.DEBUG, t);
  }
  info(...t) {
    this._log(_L.levels.INFO, t);
  }
  warn(...t) {
    this._log(_L.levels.WARNING, t);
  }
  makeError(t, r2, i3) {
    if (Fn)
      return this.makeError("censored error", r2, {});
    r2 || (r2 = _L.errors.UNKNOWN_ERROR), i3 || (i3 = {});
    const n2 = [];
    Object.keys(i3).forEach((b2) => {
      const m = i3[b2];
      try {
        if (m instanceof Uint8Array) {
          let w2 = "";
          for (let y5 = 0; y5 < m.length; y5++)
            w2 += kn[m[y5] >> 4], w2 += kn[m[y5] & 15];
          n2.push(b2 + "=Uint8Array(0x" + w2 + ")");
        } else
          n2.push(b2 + "=" + JSON.stringify(m));
      } catch {
        n2.push(b2 + "=" + JSON.stringify(i3[b2].toString()));
      }
    }), n2.push(`code=${r2}`), n2.push(`version=${this.version}`);
    const o2 = t;
    let h3 = "";
    switch (r2) {
      case re.NUMERIC_FAULT: {
        h3 = "NUMERIC_FAULT";
        const b2 = t;
        switch (b2) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h3 += "-" + b2;
            break;
          case "negative-power":
          case "negative-width":
            h3 += "-unsupported";
            break;
          case "unbound-bitwise-result":
            h3 += "-unbound-result";
            break;
        }
        break;
      }
      case re.CALL_EXCEPTION:
      case re.INSUFFICIENT_FUNDS:
      case re.MISSING_NEW:
      case re.NONCE_EXPIRED:
      case re.REPLACEMENT_UNDERPRICED:
      case re.TRANSACTION_REPLACED:
      case re.UNPREDICTABLE_GAS_LIMIT:
        h3 = r2;
        break;
    }
    h3 && (t += " [ See: https://links.ethers.org/v5-errors-" + h3 + " ]"), n2.length && (t += " (" + n2.join(", ") + ")");
    const p2 = new Error(t);
    return p2.reason = o2, p2.code = r2, Object.keys(i3).forEach(function(b2) {
      p2[b2] = i3[b2];
    }), p2;
  }
  throwError(t, r2, i3) {
    throw this.makeError(t, r2, i3);
  }
  throwArgumentError(t, r2, i3) {
    return this.throwError(t, _L.errors.INVALID_ARGUMENT, { argument: r2, value: i3 });
  }
  assert(t, r2, i3, n2) {
    t || this.throwError(r2, i3, n2);
  }
  assertArgument(t, r2, i3, n2) {
    t || this.throwArgumentError(r2, i3, n2);
  }
  checkNormalize(t) {
    Un && this.throwError("platform missing String.prototype.normalize", _L.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Un });
  }
  checkSafeUint53(t, r2) {
    typeof t == "number" && (r2 == null && (r2 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r2, _L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r2, _L.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r2, i3) {
    i3 ? i3 = ": " + i3 : i3 = "", t < r2 && this.throwError("missing argument" + i3, _L.errors.MISSING_ARGUMENT, { count: t, expectedCount: r2 }), t > r2 && this.throwError("too many arguments" + i3, _L.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r2 });
  }
  checkNew(t, r2) {
    (t === Object || t == null) && this.throwError("missing new", _L.errors.MISSING_NEW, { name: r2.name });
  }
  checkAbstract(t, r2) {
    t === r2 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r2.name) + " directly; use a sub-class", _L.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", _L.errors.MISSING_NEW, { name: r2.name });
  }
  static globalLogger() {
    return gi || (gi = new _L(y0)), gi;
  }
  static setCensorship(t, r2) {
    if (!t && r2 && this.globalLogger().throwError("cannot permanently disable censorship", _L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Dn) {
      if (!t)
        return;
      this.globalLogger().throwError("error censorship permanent", _L.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    Fn = !!t, Dn = !!r2;
  }
  static setLogLevel(t) {
    const r2 = Cr[t.toLowerCase()];
    if (r2 == null) {
      _L.globalLogger().warn("invalid log level - " + t);
      return;
    }
    Tn = r2;
  }
  static from(t) {
    return new _L(t);
  }
};
L.errors = re, L.levels = Ai;
var x0 = "bytes/5.7.0";
var Dt = new L(x0);
function qn(e) {
  return !!e.toHexString;
}
function rr(e) {
  return e.slice || (e.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return rr(new Uint8Array(Array.prototype.slice.apply(e, t)));
  }), e;
}
function Kn(e) {
  return typeof e == "number" && e == e && e % 1 === 0;
}
function ir(e) {
  if (e == null)
    return false;
  if (e.constructor === Uint8Array)
    return true;
  if (typeof e == "string" || !Kn(e.length) || e.length < 0)
    return false;
  for (let t = 0; t < e.length; t++) {
    const r2 = e[t];
    if (!Kn(r2) || r2 < 0 || r2 >= 256)
      return false;
  }
  return true;
}
function Ot(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt.checkSafeUint53(e, "invalid arrayify value");
    const r2 = [];
    for (; e; )
      r2.unshift(e & 255), e = parseInt(String(e / 256));
    return r2.length === 0 && r2.push(0), rr(new Uint8Array(r2));
  }
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e) && (e = e.toHexString()), Qt(e)) {
    let r2 = e.substring(2);
    r2.length % 2 && (t.hexPad === "left" ? r2 = "0" + r2 : t.hexPad === "right" ? r2 += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e));
    const i3 = [];
    for (let n2 = 0; n2 < r2.length; n2 += 2)
      i3.push(parseInt(r2.substring(n2, n2 + 2), 16));
    return rr(new Uint8Array(i3));
  }
  return ir(e) ? rr(new Uint8Array(e)) : Dt.throwArgumentError("invalid arrayify value", "value", e);
}
function Qt(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t);
}
var bi = "0123456789abcdef";
function Kt(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Dt.checkSafeUint53(e, "invalid hexlify value");
    let r2 = "";
    for (; e; )
      r2 = bi[e & 15] + r2, e = Math.floor(e / 16);
    return r2.length ? (r2.length % 2 && (r2 = "0" + r2), "0x" + r2) : "0x00";
  }
  if (typeof e == "bigint")
    return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e))
    return e.toHexString();
  if (Qt(e))
    return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
  if (ir(e)) {
    let r2 = "0x";
    for (let i3 = 0; i3 < e.length; i3++) {
      let n2 = e[i3];
      r2 += bi[(n2 & 240) >> 4] + bi[n2 & 15];
    }
    return r2;
  }
  return Dt.throwArgumentError("invalid hexlify value", "value", e);
}
function oe(e, t) {
  for (typeof e != "string" ? e = Kt(e) : Qt(e) || Dt.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Dt.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2; )
    e = "0x0" + e.substring(2);
  return e;
}
var Ln = { exports: {} };
var I0 = {};
var _0 = Object.freeze({ __proto__: null, default: I0 });
var B0 = A0(_0);
(function(e) {
  (function(t, r2) {
    function i3(A4, f4) {
      if (!A4)
        throw new Error(f4 || "Assertion failed");
    }
    function n2(A4, f4) {
      A4.super_ = f4;
      var a2 = function() {
      };
      a2.prototype = f4.prototype, A4.prototype = new a2(), A4.prototype.constructor = A4;
    }
    function o2(A4, f4, a2) {
      if (o2.isBN(A4))
        return A4;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, A4 !== null && ((f4 === "le" || f4 === "be") && (a2 = f4, f4 = 10), this._init(A4 || 0, f4 || 10, a2 || "be"));
    }
    typeof t == "object" ? t.exports = o2 : r2.BN = o2, o2.BN = o2, o2.wordSize = 26;
    var h3;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h3 = window.Buffer : h3 = B0.Buffer;
    } catch {
    }
    o2.isBN = function(f4) {
      return f4 instanceof o2 ? true : f4 !== null && typeof f4 == "object" && f4.constructor.wordSize === o2.wordSize && Array.isArray(f4.words);
    }, o2.max = function(f4, a2) {
      return f4.cmp(a2) > 0 ? f4 : a2;
    }, o2.min = function(f4, a2) {
      return f4.cmp(a2) < 0 ? f4 : a2;
    }, o2.prototype._init = function(f4, a2, c2) {
      if (typeof f4 == "number")
        return this._initNumber(f4, a2, c2);
      if (typeof f4 == "object")
        return this._initArray(f4, a2, c2);
      a2 === "hex" && (a2 = 16), i3(a2 === (a2 | 0) && a2 >= 2 && a2 <= 36), f4 = f4.toString().replace(/\s+/g, "");
      var d2 = 0;
      f4[0] === "-" && (d2++, this.negative = 1), d2 < f4.length && (a2 === 16 ? this._parseHex(f4, d2, c2) : (this._parseBase(f4, a2, d2), c2 === "le" && this._initArray(this.toArray(), a2, c2)));
    }, o2.prototype._initNumber = function(f4, a2, c2) {
      f4 < 0 && (this.negative = 1, f4 = -f4), f4 < 67108864 ? (this.words = [f4 & 67108863], this.length = 1) : f4 < 4503599627370496 ? (this.words = [f4 & 67108863, f4 / 67108864 & 67108863], this.length = 2) : (i3(f4 < 9007199254740992), this.words = [f4 & 67108863, f4 / 67108864 & 67108863, 1], this.length = 3), c2 === "le" && this._initArray(this.toArray(), a2, c2);
    }, o2.prototype._initArray = function(f4, a2, c2) {
      if (i3(typeof f4.length == "number"), f4.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f4.length / 3), this.words = new Array(this.length);
      for (var d2 = 0; d2 < this.length; d2++)
        this.words[d2] = 0;
      var g2, x, M2 = 0;
      if (c2 === "be")
        for (d2 = f4.length - 1, g2 = 0; d2 >= 0; d2 -= 3)
          x = f4[d2] | f4[d2 - 1] << 8 | f4[d2 - 2] << 16, this.words[g2] |= x << M2 & 67108863, this.words[g2 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g2++);
      else if (c2 === "le")
        for (d2 = 0, g2 = 0; d2 < f4.length; d2 += 3)
          x = f4[d2] | f4[d2 + 1] << 8 | f4[d2 + 2] << 16, this.words[g2] |= x << M2 & 67108863, this.words[g2 + 1] = x >>> 26 - M2 & 67108863, M2 += 24, M2 >= 26 && (M2 -= 26, g2++);
      return this._strip();
    };
    function p2(A4, f4) {
      var a2 = A4.charCodeAt(f4);
      if (a2 >= 48 && a2 <= 57)
        return a2 - 48;
      if (a2 >= 65 && a2 <= 70)
        return a2 - 55;
      if (a2 >= 97 && a2 <= 102)
        return a2 - 87;
      i3(false, "Invalid character in " + A4);
    }
    function b2(A4, f4, a2) {
      var c2 = p2(A4, a2);
      return a2 - 1 >= f4 && (c2 |= p2(A4, a2 - 1) << 4), c2;
    }
    o2.prototype._parseHex = function(f4, a2, c2) {
      this.length = Math.ceil((f4.length - a2) / 6), this.words = new Array(this.length);
      for (var d2 = 0; d2 < this.length; d2++)
        this.words[d2] = 0;
      var g2 = 0, x = 0, M2;
      if (c2 === "be")
        for (d2 = f4.length - 1; d2 >= a2; d2 -= 2)
          M2 = b2(f4, a2, d2) << g2, this.words[x] |= M2 & 67108863, g2 >= 18 ? (g2 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g2 += 8;
      else {
        var l = f4.length - a2;
        for (d2 = l % 2 === 0 ? a2 + 1 : a2; d2 < f4.length; d2 += 2)
          M2 = b2(f4, a2, d2) << g2, this.words[x] |= M2 & 67108863, g2 >= 18 ? (g2 -= 18, x += 1, this.words[x] |= M2 >>> 26) : g2 += 8;
      }
      this._strip();
    };
    function m(A4, f4, a2, c2) {
      for (var d2 = 0, g2 = 0, x = Math.min(A4.length, a2), M2 = f4; M2 < x; M2++) {
        var l = A4.charCodeAt(M2) - 48;
        d2 *= c2, l >= 49 ? g2 = l - 49 + 10 : l >= 17 ? g2 = l - 17 + 10 : g2 = l, i3(l >= 0 && g2 < c2, "Invalid character"), d2 += g2;
      }
      return d2;
    }
    o2.prototype._parseBase = function(f4, a2, c2) {
      this.words = [0], this.length = 1;
      for (var d2 = 0, g2 = 1; g2 <= 67108863; g2 *= a2)
        d2++;
      d2--, g2 = g2 / a2 | 0;
      for (var x = f4.length - c2, M2 = x % d2, l = Math.min(x, x - M2) + c2, s = 0, v2 = c2; v2 < l; v2 += d2)
        s = m(f4, v2, v2 + d2, a2), this.imuln(g2), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      if (M2 !== 0) {
        var k2 = 1;
        for (s = m(f4, v2, f4.length, a2), v2 = 0; v2 < M2; v2++)
          k2 *= a2;
        this.imuln(k2), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      }
      this._strip();
    }, o2.prototype.copy = function(f4) {
      f4.words = new Array(this.length);
      for (var a2 = 0; a2 < this.length; a2++)
        f4.words[a2] = this.words[a2];
      f4.length = this.length, f4.negative = this.negative, f4.red = this.red;
    };
    function w2(A4, f4) {
      A4.words = f4.words, A4.length = f4.length, A4.negative = f4.negative, A4.red = f4.red;
    }
    if (o2.prototype._move = function(f4) {
      w2(f4, this);
    }, o2.prototype.clone = function() {
      var f4 = new o2(null);
      return this.copy(f4), f4;
    }, o2.prototype._expand = function(f4) {
      for (; this.length < f4; )
        this.words[this.length++] = 0;
      return this;
    }, o2.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, o2.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        o2.prototype[Symbol.for("nodejs.util.inspect.custom")] = y5;
      } catch {
        o2.prototype.inspect = y5;
      }
    else
      o2.prototype.inspect = y5;
    function y5() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var S2 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], I = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], N = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o2.prototype.toString = function(f4, a2) {
      f4 = f4 || 10, a2 = a2 | 0 || 1;
      var c2;
      if (f4 === 16 || f4 === "hex") {
        c2 = "";
        for (var d2 = 0, g2 = 0, x = 0; x < this.length; x++) {
          var M2 = this.words[x], l = ((M2 << d2 | g2) & 16777215).toString(16);
          g2 = M2 >>> 24 - d2 & 16777215, d2 += 2, d2 >= 26 && (d2 -= 26, x--), g2 !== 0 || x !== this.length - 1 ? c2 = S2[6 - l.length] + l + c2 : c2 = l + c2;
        }
        for (g2 !== 0 && (c2 = g2.toString(16) + c2); c2.length % a2 !== 0; )
          c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      if (f4 === (f4 | 0) && f4 >= 2 && f4 <= 36) {
        var s = I[f4], v2 = N[f4];
        c2 = "";
        var k2 = this.clone();
        for (k2.negative = 0; !k2.isZero(); ) {
          var u2 = k2.modrn(v2).toString(f4);
          k2 = k2.idivn(v2), k2.isZero() ? c2 = u2 + c2 : c2 = S2[s - u2.length] + u2 + c2;
        }
        for (this.isZero() && (c2 = "0" + c2); c2.length % a2 !== 0; )
          c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      i3(false, "Base should be between 2 and 36");
    }, o2.prototype.toNumber = function() {
      var f4 = this.words[0];
      return this.length === 2 ? f4 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f4 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i3(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f4 : f4;
    }, o2.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h3 && (o2.prototype.toBuffer = function(f4, a2) {
      return this.toArrayLike(h3, f4, a2);
    }), o2.prototype.toArray = function(f4, a2) {
      return this.toArrayLike(Array, f4, a2);
    };
    var C3 = function(f4, a2) {
      return f4.allocUnsafe ? f4.allocUnsafe(a2) : new f4(a2);
    };
    o2.prototype.toArrayLike = function(f4, a2, c2) {
      this._strip();
      var d2 = this.byteLength(), g2 = c2 || Math.max(1, d2);
      i3(d2 <= g2, "byte array longer than desired length"), i3(g2 > 0, "Requested array length <= 0");
      var x = C3(f4, g2), M2 = a2 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M2](x, d2), x;
    }, o2.prototype._toArrayLikeLE = function(f4, a2) {
      for (var c2 = 0, d2 = 0, g2 = 0, x = 0; g2 < this.length; g2++) {
        var M2 = this.words[g2] << x | d2;
        f4[c2++] = M2 & 255, c2 < f4.length && (f4[c2++] = M2 >> 8 & 255), c2 < f4.length && (f4[c2++] = M2 >> 16 & 255), x === 6 ? (c2 < f4.length && (f4[c2++] = M2 >> 24 & 255), d2 = 0, x = 0) : (d2 = M2 >>> 24, x += 2);
      }
      if (c2 < f4.length)
        for (f4[c2++] = d2; c2 < f4.length; )
          f4[c2++] = 0;
    }, o2.prototype._toArrayLikeBE = function(f4, a2) {
      for (var c2 = f4.length - 1, d2 = 0, g2 = 0, x = 0; g2 < this.length; g2++) {
        var M2 = this.words[g2] << x | d2;
        f4[c2--] = M2 & 255, c2 >= 0 && (f4[c2--] = M2 >> 8 & 255), c2 >= 0 && (f4[c2--] = M2 >> 16 & 255), x === 6 ? (c2 >= 0 && (f4[c2--] = M2 >> 24 & 255), d2 = 0, x = 0) : (d2 = M2 >>> 24, x += 2);
      }
      if (c2 >= 0)
        for (f4[c2--] = d2; c2 >= 0; )
          f4[c2--] = 0;
    }, Math.clz32 ? o2.prototype._countBits = function(f4) {
      return 32 - Math.clz32(f4);
    } : o2.prototype._countBits = function(f4) {
      var a2 = f4, c2 = 0;
      return a2 >= 4096 && (c2 += 13, a2 >>>= 13), a2 >= 64 && (c2 += 7, a2 >>>= 7), a2 >= 8 && (c2 += 4, a2 >>>= 4), a2 >= 2 && (c2 += 2, a2 >>>= 2), c2 + a2;
    }, o2.prototype._zeroBits = function(f4) {
      if (f4 === 0)
        return 26;
      var a2 = f4, c2 = 0;
      return a2 & 8191 || (c2 += 13, a2 >>>= 13), a2 & 127 || (c2 += 7, a2 >>>= 7), a2 & 15 || (c2 += 4, a2 >>>= 4), a2 & 3 || (c2 += 2, a2 >>>= 2), a2 & 1 || c2++, c2;
    }, o2.prototype.bitLength = function() {
      var f4 = this.words[this.length - 1], a2 = this._countBits(f4);
      return (this.length - 1) * 26 + a2;
    };
    function F(A4) {
      for (var f4 = new Array(A4.bitLength()), a2 = 0; a2 < f4.length; a2++) {
        var c2 = a2 / 26 | 0, d2 = a2 % 26;
        f4[a2] = A4.words[c2] >>> d2 & 1;
      }
      return f4;
    }
    o2.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var f4 = 0, a2 = 0; a2 < this.length; a2++) {
        var c2 = this._zeroBits(this.words[a2]);
        if (f4 += c2, c2 !== 26)
          break;
      }
      return f4;
    }, o2.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o2.prototype.toTwos = function(f4) {
      return this.negative !== 0 ? this.abs().inotn(f4).iaddn(1) : this.clone();
    }, o2.prototype.fromTwos = function(f4) {
      return this.testn(f4 - 1) ? this.notn(f4).iaddn(1).ineg() : this.clone();
    }, o2.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o2.prototype.neg = function() {
      return this.clone().ineg();
    }, o2.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o2.prototype.iuor = function(f4) {
      for (; this.length < f4.length; )
        this.words[this.length++] = 0;
      for (var a2 = 0; a2 < f4.length; a2++)
        this.words[a2] = this.words[a2] | f4.words[a2];
      return this._strip();
    }, o2.prototype.ior = function(f4) {
      return i3((this.negative | f4.negative) === 0), this.iuor(f4);
    }, o2.prototype.or = function(f4) {
      return this.length > f4.length ? this.clone().ior(f4) : f4.clone().ior(this);
    }, o2.prototype.uor = function(f4) {
      return this.length > f4.length ? this.clone().iuor(f4) : f4.clone().iuor(this);
    }, o2.prototype.iuand = function(f4) {
      var a2;
      this.length > f4.length ? a2 = f4 : a2 = this;
      for (var c2 = 0; c2 < a2.length; c2++)
        this.words[c2] = this.words[c2] & f4.words[c2];
      return this.length = a2.length, this._strip();
    }, o2.prototype.iand = function(f4) {
      return i3((this.negative | f4.negative) === 0), this.iuand(f4);
    }, o2.prototype.and = function(f4) {
      return this.length > f4.length ? this.clone().iand(f4) : f4.clone().iand(this);
    }, o2.prototype.uand = function(f4) {
      return this.length > f4.length ? this.clone().iuand(f4) : f4.clone().iuand(this);
    }, o2.prototype.iuxor = function(f4) {
      var a2, c2;
      this.length > f4.length ? (a2 = this, c2 = f4) : (a2 = f4, c2 = this);
      for (var d2 = 0; d2 < c2.length; d2++)
        this.words[d2] = a2.words[d2] ^ c2.words[d2];
      if (this !== a2)
        for (; d2 < a2.length; d2++)
          this.words[d2] = a2.words[d2];
      return this.length = a2.length, this._strip();
    }, o2.prototype.ixor = function(f4) {
      return i3((this.negative | f4.negative) === 0), this.iuxor(f4);
    }, o2.prototype.xor = function(f4) {
      return this.length > f4.length ? this.clone().ixor(f4) : f4.clone().ixor(this);
    }, o2.prototype.uxor = function(f4) {
      return this.length > f4.length ? this.clone().iuxor(f4) : f4.clone().iuxor(this);
    }, o2.prototype.inotn = function(f4) {
      i3(typeof f4 == "number" && f4 >= 0);
      var a2 = Math.ceil(f4 / 26) | 0, c2 = f4 % 26;
      this._expand(a2), c2 > 0 && a2--;
      for (var d2 = 0; d2 < a2; d2++)
        this.words[d2] = ~this.words[d2] & 67108863;
      return c2 > 0 && (this.words[d2] = ~this.words[d2] & 67108863 >> 26 - c2), this._strip();
    }, o2.prototype.notn = function(f4) {
      return this.clone().inotn(f4);
    }, o2.prototype.setn = function(f4, a2) {
      i3(typeof f4 == "number" && f4 >= 0);
      var c2 = f4 / 26 | 0, d2 = f4 % 26;
      return this._expand(c2 + 1), a2 ? this.words[c2] = this.words[c2] | 1 << d2 : this.words[c2] = this.words[c2] & ~(1 << d2), this._strip();
    }, o2.prototype.iadd = function(f4) {
      var a2;
      if (this.negative !== 0 && f4.negative === 0)
        return this.negative = 0, a2 = this.isub(f4), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f4.negative !== 0)
        return f4.negative = 0, a2 = this.isub(f4), f4.negative = 1, a2._normSign();
      var c2, d2;
      this.length > f4.length ? (c2 = this, d2 = f4) : (c2 = f4, d2 = this);
      for (var g2 = 0, x = 0; x < d2.length; x++)
        a2 = (c2.words[x] | 0) + (d2.words[x] | 0) + g2, this.words[x] = a2 & 67108863, g2 = a2 >>> 26;
      for (; g2 !== 0 && x < c2.length; x++)
        a2 = (c2.words[x] | 0) + g2, this.words[x] = a2 & 67108863, g2 = a2 >>> 26;
      if (this.length = c2.length, g2 !== 0)
        this.words[this.length] = g2, this.length++;
      else if (c2 !== this)
        for (; x < c2.length; x++)
          this.words[x] = c2.words[x];
      return this;
    }, o2.prototype.add = function(f4) {
      var a2;
      return f4.negative !== 0 && this.negative === 0 ? (f4.negative = 0, a2 = this.sub(f4), f4.negative ^= 1, a2) : f4.negative === 0 && this.negative !== 0 ? (this.negative = 0, a2 = f4.sub(this), this.negative = 1, a2) : this.length > f4.length ? this.clone().iadd(f4) : f4.clone().iadd(this);
    }, o2.prototype.isub = function(f4) {
      if (f4.negative !== 0) {
        f4.negative = 0;
        var a2 = this.iadd(f4);
        return f4.negative = 1, a2._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(f4), this.negative = 1, this._normSign();
      var c2 = this.cmp(f4);
      if (c2 === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d2, g2;
      c2 > 0 ? (d2 = this, g2 = f4) : (d2 = f4, g2 = this);
      for (var x = 0, M2 = 0; M2 < g2.length; M2++)
        a2 = (d2.words[M2] | 0) - (g2.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      for (; x !== 0 && M2 < d2.length; M2++)
        a2 = (d2.words[M2] | 0) + x, x = a2 >> 26, this.words[M2] = a2 & 67108863;
      if (x === 0 && M2 < d2.length && d2 !== this)
        for (; M2 < d2.length; M2++)
          this.words[M2] = d2.words[M2];
      return this.length = Math.max(this.length, M2), d2 !== this && (this.negative = 1), this._strip();
    }, o2.prototype.sub = function(f4) {
      return this.clone().isub(f4);
    };
    function U3(A4, f4, a2) {
      a2.negative = f4.negative ^ A4.negative;
      var c2 = A4.length + f4.length | 0;
      a2.length = c2, c2 = c2 - 1 | 0;
      var d2 = A4.words[0] | 0, g2 = f4.words[0] | 0, x = d2 * g2, M2 = x & 67108863, l = x / 67108864 | 0;
      a2.words[0] = M2;
      for (var s = 1; s < c2; s++) {
        for (var v2 = l >>> 26, k2 = l & 67108863, u2 = Math.min(s, f4.length - 1), E3 = Math.max(0, s - A4.length + 1); E3 <= u2; E3++) {
          var _ = s - E3 | 0;
          d2 = A4.words[_] | 0, g2 = f4.words[E3] | 0, x = d2 * g2 + k2, v2 += x / 67108864 | 0, k2 = x & 67108863;
        }
        a2.words[s] = k2 | 0, l = v2 | 0;
      }
      return l !== 0 ? a2.words[s] = l | 0 : a2.length--, a2._strip();
    }
    var J2 = function(f4, a2, c2) {
      var d2 = f4.words, g2 = a2.words, x = c2.words, M2 = 0, l, s, v2, k2 = d2[0] | 0, u2 = k2 & 8191, E3 = k2 >>> 13, _ = d2[1] | 0, B = _ & 8191, R2 = _ >>> 13, T2 = d2[2] | 0, P = T2 & 8191, O = T2 >>> 13, Ct2 = d2[3] | 0, D = Ct2 & 8191, q2 = Ct2 >>> 13, De2 = d2[4] | 0, X3 = De2 & 8191, Z2 = De2 >>> 13, Fe2 = d2[5] | 0, $3 = Fe2 & 8191, tt = Fe2 >>> 13, Te = d2[6] | 0, et = Te & 8191, rt = Te >>> 13, Ue2 = d2[7] | 0, it = Ue2 & 8191, nt = Ue2 >>> 13, ke2 = d2[8] | 0, ft = ke2 & 8191, ot = ke2 >>> 13, qe2 = d2[9] | 0, st = qe2 & 8191, at = qe2 >>> 13, Ke3 = g2[0] | 0, ut = Ke3 & 8191, ht = Ke3 >>> 13, He3 = g2[1] | 0, ct2 = He3 & 8191, lt = He3 >>> 13, ze2 = g2[2] | 0, dt = ze2 & 8191, pt = ze2 >>> 13, Le2 = g2[3] | 0, vt = Le2 & 8191, mt = Le2 >>> 13, je2 = g2[4] | 0, gt = je2 & 8191, At = je2 >>> 13, Qe = g2[5] | 0, bt2 = Qe & 8191, yt = Qe >>> 13, Je2 = g2[6] | 0, wt = Je2 & 8191, xt = Je2 >>> 13, Ge3 = g2[7] | 0, Mt = Ge3 & 8191, Et2 = Ge3 >>> 13, Ye2 = g2[8] | 0, St = Ye2 & 8191, Nt = Ye2 >>> 13, Ve2 = g2[9] | 0, It = Ve2 & 8191, _t = Ve2 >>> 13;
      c2.negative = f4.negative ^ a2.negative, c2.length = 19, l = Math.imul(u2, ut), s = Math.imul(u2, ht), s = s + Math.imul(E3, ut) | 0, v2 = Math.imul(E3, ht);
      var Me3 = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Me3 >>> 26) | 0, Me3 &= 67108863, l = Math.imul(B, ut), s = Math.imul(B, ht), s = s + Math.imul(R2, ut) | 0, v2 = Math.imul(R2, ht), l = l + Math.imul(u2, ct2) | 0, s = s + Math.imul(u2, lt) | 0, s = s + Math.imul(E3, ct2) | 0, v2 = v2 + Math.imul(E3, lt) | 0;
      var Ee2 = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l = Math.imul(P, ut), s = Math.imul(P, ht), s = s + Math.imul(O, ut) | 0, v2 = Math.imul(O, ht), l = l + Math.imul(B, ct2) | 0, s = s + Math.imul(B, lt) | 0, s = s + Math.imul(R2, ct2) | 0, v2 = v2 + Math.imul(R2, lt) | 0, l = l + Math.imul(u2, dt) | 0, s = s + Math.imul(u2, pt) | 0, s = s + Math.imul(E3, dt) | 0, v2 = v2 + Math.imul(E3, pt) | 0;
      var Se3 = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Se3 >>> 26) | 0, Se3 &= 67108863, l = Math.imul(D, ut), s = Math.imul(D, ht), s = s + Math.imul(q2, ut) | 0, v2 = Math.imul(q2, ht), l = l + Math.imul(P, ct2) | 0, s = s + Math.imul(P, lt) | 0, s = s + Math.imul(O, ct2) | 0, v2 = v2 + Math.imul(O, lt) | 0, l = l + Math.imul(B, dt) | 0, s = s + Math.imul(B, pt) | 0, s = s + Math.imul(R2, dt) | 0, v2 = v2 + Math.imul(R2, pt) | 0, l = l + Math.imul(u2, vt) | 0, s = s + Math.imul(u2, mt) | 0, s = s + Math.imul(E3, vt) | 0, v2 = v2 + Math.imul(E3, mt) | 0;
      var Ne = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l = Math.imul(X3, ut), s = Math.imul(X3, ht), s = s + Math.imul(Z2, ut) | 0, v2 = Math.imul(Z2, ht), l = l + Math.imul(D, ct2) | 0, s = s + Math.imul(D, lt) | 0, s = s + Math.imul(q2, ct2) | 0, v2 = v2 + Math.imul(q2, lt) | 0, l = l + Math.imul(P, dt) | 0, s = s + Math.imul(P, pt) | 0, s = s + Math.imul(O, dt) | 0, v2 = v2 + Math.imul(O, pt) | 0, l = l + Math.imul(B, vt) | 0, s = s + Math.imul(B, mt) | 0, s = s + Math.imul(R2, vt) | 0, v2 = v2 + Math.imul(R2, mt) | 0, l = l + Math.imul(u2, gt) | 0, s = s + Math.imul(u2, At) | 0, s = s + Math.imul(E3, gt) | 0, v2 = v2 + Math.imul(E3, At) | 0;
      var Ie = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l = Math.imul($3, ut), s = Math.imul($3, ht), s = s + Math.imul(tt, ut) | 0, v2 = Math.imul(tt, ht), l = l + Math.imul(X3, ct2) | 0, s = s + Math.imul(X3, lt) | 0, s = s + Math.imul(Z2, ct2) | 0, v2 = v2 + Math.imul(Z2, lt) | 0, l = l + Math.imul(D, dt) | 0, s = s + Math.imul(D, pt) | 0, s = s + Math.imul(q2, dt) | 0, v2 = v2 + Math.imul(q2, pt) | 0, l = l + Math.imul(P, vt) | 0, s = s + Math.imul(P, mt) | 0, s = s + Math.imul(O, vt) | 0, v2 = v2 + Math.imul(O, mt) | 0, l = l + Math.imul(B, gt) | 0, s = s + Math.imul(B, At) | 0, s = s + Math.imul(R2, gt) | 0, v2 = v2 + Math.imul(R2, At) | 0, l = l + Math.imul(u2, bt2) | 0, s = s + Math.imul(u2, yt) | 0, s = s + Math.imul(E3, bt2) | 0, v2 = v2 + Math.imul(E3, yt) | 0;
      var Wr = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l = Math.imul(et, ut), s = Math.imul(et, ht), s = s + Math.imul(rt, ut) | 0, v2 = Math.imul(rt, ht), l = l + Math.imul($3, ct2) | 0, s = s + Math.imul($3, lt) | 0, s = s + Math.imul(tt, ct2) | 0, v2 = v2 + Math.imul(tt, lt) | 0, l = l + Math.imul(X3, dt) | 0, s = s + Math.imul(X3, pt) | 0, s = s + Math.imul(Z2, dt) | 0, v2 = v2 + Math.imul(Z2, pt) | 0, l = l + Math.imul(D, vt) | 0, s = s + Math.imul(D, mt) | 0, s = s + Math.imul(q2, vt) | 0, v2 = v2 + Math.imul(q2, mt) | 0, l = l + Math.imul(P, gt) | 0, s = s + Math.imul(P, At) | 0, s = s + Math.imul(O, gt) | 0, v2 = v2 + Math.imul(O, At) | 0, l = l + Math.imul(B, bt2) | 0, s = s + Math.imul(B, yt) | 0, s = s + Math.imul(R2, bt2) | 0, v2 = v2 + Math.imul(R2, yt) | 0, l = l + Math.imul(u2, wt) | 0, s = s + Math.imul(u2, xt) | 0, s = s + Math.imul(E3, wt) | 0, v2 = v2 + Math.imul(E3, xt) | 0;
      var Xr = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l = Math.imul(it, ut), s = Math.imul(it, ht), s = s + Math.imul(nt, ut) | 0, v2 = Math.imul(nt, ht), l = l + Math.imul(et, ct2) | 0, s = s + Math.imul(et, lt) | 0, s = s + Math.imul(rt, ct2) | 0, v2 = v2 + Math.imul(rt, lt) | 0, l = l + Math.imul($3, dt) | 0, s = s + Math.imul($3, pt) | 0, s = s + Math.imul(tt, dt) | 0, v2 = v2 + Math.imul(tt, pt) | 0, l = l + Math.imul(X3, vt) | 0, s = s + Math.imul(X3, mt) | 0, s = s + Math.imul(Z2, vt) | 0, v2 = v2 + Math.imul(Z2, mt) | 0, l = l + Math.imul(D, gt) | 0, s = s + Math.imul(D, At) | 0, s = s + Math.imul(q2, gt) | 0, v2 = v2 + Math.imul(q2, At) | 0, l = l + Math.imul(P, bt2) | 0, s = s + Math.imul(P, yt) | 0, s = s + Math.imul(O, bt2) | 0, v2 = v2 + Math.imul(O, yt) | 0, l = l + Math.imul(B, wt) | 0, s = s + Math.imul(B, xt) | 0, s = s + Math.imul(R2, wt) | 0, v2 = v2 + Math.imul(R2, xt) | 0, l = l + Math.imul(u2, Mt) | 0, s = s + Math.imul(u2, Et2) | 0, s = s + Math.imul(E3, Mt) | 0, v2 = v2 + Math.imul(E3, Et2) | 0;
      var Zr = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l = Math.imul(ft, ut), s = Math.imul(ft, ht), s = s + Math.imul(ot, ut) | 0, v2 = Math.imul(ot, ht), l = l + Math.imul(it, ct2) | 0, s = s + Math.imul(it, lt) | 0, s = s + Math.imul(nt, ct2) | 0, v2 = v2 + Math.imul(nt, lt) | 0, l = l + Math.imul(et, dt) | 0, s = s + Math.imul(et, pt) | 0, s = s + Math.imul(rt, dt) | 0, v2 = v2 + Math.imul(rt, pt) | 0, l = l + Math.imul($3, vt) | 0, s = s + Math.imul($3, mt) | 0, s = s + Math.imul(tt, vt) | 0, v2 = v2 + Math.imul(tt, mt) | 0, l = l + Math.imul(X3, gt) | 0, s = s + Math.imul(X3, At) | 0, s = s + Math.imul(Z2, gt) | 0, v2 = v2 + Math.imul(Z2, At) | 0, l = l + Math.imul(D, bt2) | 0, s = s + Math.imul(D, yt) | 0, s = s + Math.imul(q2, bt2) | 0, v2 = v2 + Math.imul(q2, yt) | 0, l = l + Math.imul(P, wt) | 0, s = s + Math.imul(P, xt) | 0, s = s + Math.imul(O, wt) | 0, v2 = v2 + Math.imul(O, xt) | 0, l = l + Math.imul(B, Mt) | 0, s = s + Math.imul(B, Et2) | 0, s = s + Math.imul(R2, Mt) | 0, v2 = v2 + Math.imul(R2, Et2) | 0, l = l + Math.imul(u2, St) | 0, s = s + Math.imul(u2, Nt) | 0, s = s + Math.imul(E3, St) | 0, v2 = v2 + Math.imul(E3, Nt) | 0;
      var $r = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + ($r >>> 26) | 0, $r &= 67108863, l = Math.imul(st, ut), s = Math.imul(st, ht), s = s + Math.imul(at, ut) | 0, v2 = Math.imul(at, ht), l = l + Math.imul(ft, ct2) | 0, s = s + Math.imul(ft, lt) | 0, s = s + Math.imul(ot, ct2) | 0, v2 = v2 + Math.imul(ot, lt) | 0, l = l + Math.imul(it, dt) | 0, s = s + Math.imul(it, pt) | 0, s = s + Math.imul(nt, dt) | 0, v2 = v2 + Math.imul(nt, pt) | 0, l = l + Math.imul(et, vt) | 0, s = s + Math.imul(et, mt) | 0, s = s + Math.imul(rt, vt) | 0, v2 = v2 + Math.imul(rt, mt) | 0, l = l + Math.imul($3, gt) | 0, s = s + Math.imul($3, At) | 0, s = s + Math.imul(tt, gt) | 0, v2 = v2 + Math.imul(tt, At) | 0, l = l + Math.imul(X3, bt2) | 0, s = s + Math.imul(X3, yt) | 0, s = s + Math.imul(Z2, bt2) | 0, v2 = v2 + Math.imul(Z2, yt) | 0, l = l + Math.imul(D, wt) | 0, s = s + Math.imul(D, xt) | 0, s = s + Math.imul(q2, wt) | 0, v2 = v2 + Math.imul(q2, xt) | 0, l = l + Math.imul(P, Mt) | 0, s = s + Math.imul(P, Et2) | 0, s = s + Math.imul(O, Mt) | 0, v2 = v2 + Math.imul(O, Et2) | 0, l = l + Math.imul(B, St) | 0, s = s + Math.imul(B, Nt) | 0, s = s + Math.imul(R2, St) | 0, v2 = v2 + Math.imul(R2, Nt) | 0, l = l + Math.imul(u2, It) | 0, s = s + Math.imul(u2, _t) | 0, s = s + Math.imul(E3, It) | 0, v2 = v2 + Math.imul(E3, _t) | 0;
      var ti = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l = Math.imul(st, ct2), s = Math.imul(st, lt), s = s + Math.imul(at, ct2) | 0, v2 = Math.imul(at, lt), l = l + Math.imul(ft, dt) | 0, s = s + Math.imul(ft, pt) | 0, s = s + Math.imul(ot, dt) | 0, v2 = v2 + Math.imul(ot, pt) | 0, l = l + Math.imul(it, vt) | 0, s = s + Math.imul(it, mt) | 0, s = s + Math.imul(nt, vt) | 0, v2 = v2 + Math.imul(nt, mt) | 0, l = l + Math.imul(et, gt) | 0, s = s + Math.imul(et, At) | 0, s = s + Math.imul(rt, gt) | 0, v2 = v2 + Math.imul(rt, At) | 0, l = l + Math.imul($3, bt2) | 0, s = s + Math.imul($3, yt) | 0, s = s + Math.imul(tt, bt2) | 0, v2 = v2 + Math.imul(tt, yt) | 0, l = l + Math.imul(X3, wt) | 0, s = s + Math.imul(X3, xt) | 0, s = s + Math.imul(Z2, wt) | 0, v2 = v2 + Math.imul(Z2, xt) | 0, l = l + Math.imul(D, Mt) | 0, s = s + Math.imul(D, Et2) | 0, s = s + Math.imul(q2, Mt) | 0, v2 = v2 + Math.imul(q2, Et2) | 0, l = l + Math.imul(P, St) | 0, s = s + Math.imul(P, Nt) | 0, s = s + Math.imul(O, St) | 0, v2 = v2 + Math.imul(O, Nt) | 0, l = l + Math.imul(B, It) | 0, s = s + Math.imul(B, _t) | 0, s = s + Math.imul(R2, It) | 0, v2 = v2 + Math.imul(R2, _t) | 0;
      var ei = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l = Math.imul(st, dt), s = Math.imul(st, pt), s = s + Math.imul(at, dt) | 0, v2 = Math.imul(at, pt), l = l + Math.imul(ft, vt) | 0, s = s + Math.imul(ft, mt) | 0, s = s + Math.imul(ot, vt) | 0, v2 = v2 + Math.imul(ot, mt) | 0, l = l + Math.imul(it, gt) | 0, s = s + Math.imul(it, At) | 0, s = s + Math.imul(nt, gt) | 0, v2 = v2 + Math.imul(nt, At) | 0, l = l + Math.imul(et, bt2) | 0, s = s + Math.imul(et, yt) | 0, s = s + Math.imul(rt, bt2) | 0, v2 = v2 + Math.imul(rt, yt) | 0, l = l + Math.imul($3, wt) | 0, s = s + Math.imul($3, xt) | 0, s = s + Math.imul(tt, wt) | 0, v2 = v2 + Math.imul(tt, xt) | 0, l = l + Math.imul(X3, Mt) | 0, s = s + Math.imul(X3, Et2) | 0, s = s + Math.imul(Z2, Mt) | 0, v2 = v2 + Math.imul(Z2, Et2) | 0, l = l + Math.imul(D, St) | 0, s = s + Math.imul(D, Nt) | 0, s = s + Math.imul(q2, St) | 0, v2 = v2 + Math.imul(q2, Nt) | 0, l = l + Math.imul(P, It) | 0, s = s + Math.imul(P, _t) | 0, s = s + Math.imul(O, It) | 0, v2 = v2 + Math.imul(O, _t) | 0;
      var ri = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l = Math.imul(st, vt), s = Math.imul(st, mt), s = s + Math.imul(at, vt) | 0, v2 = Math.imul(at, mt), l = l + Math.imul(ft, gt) | 0, s = s + Math.imul(ft, At) | 0, s = s + Math.imul(ot, gt) | 0, v2 = v2 + Math.imul(ot, At) | 0, l = l + Math.imul(it, bt2) | 0, s = s + Math.imul(it, yt) | 0, s = s + Math.imul(nt, bt2) | 0, v2 = v2 + Math.imul(nt, yt) | 0, l = l + Math.imul(et, wt) | 0, s = s + Math.imul(et, xt) | 0, s = s + Math.imul(rt, wt) | 0, v2 = v2 + Math.imul(rt, xt) | 0, l = l + Math.imul($3, Mt) | 0, s = s + Math.imul($3, Et2) | 0, s = s + Math.imul(tt, Mt) | 0, v2 = v2 + Math.imul(tt, Et2) | 0, l = l + Math.imul(X3, St) | 0, s = s + Math.imul(X3, Nt) | 0, s = s + Math.imul(Z2, St) | 0, v2 = v2 + Math.imul(Z2, Nt) | 0, l = l + Math.imul(D, It) | 0, s = s + Math.imul(D, _t) | 0, s = s + Math.imul(q2, It) | 0, v2 = v2 + Math.imul(q2, _t) | 0;
      var ii = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l = Math.imul(st, gt), s = Math.imul(st, At), s = s + Math.imul(at, gt) | 0, v2 = Math.imul(at, At), l = l + Math.imul(ft, bt2) | 0, s = s + Math.imul(ft, yt) | 0, s = s + Math.imul(ot, bt2) | 0, v2 = v2 + Math.imul(ot, yt) | 0, l = l + Math.imul(it, wt) | 0, s = s + Math.imul(it, xt) | 0, s = s + Math.imul(nt, wt) | 0, v2 = v2 + Math.imul(nt, xt) | 0, l = l + Math.imul(et, Mt) | 0, s = s + Math.imul(et, Et2) | 0, s = s + Math.imul(rt, Mt) | 0, v2 = v2 + Math.imul(rt, Et2) | 0, l = l + Math.imul($3, St) | 0, s = s + Math.imul($3, Nt) | 0, s = s + Math.imul(tt, St) | 0, v2 = v2 + Math.imul(tt, Nt) | 0, l = l + Math.imul(X3, It) | 0, s = s + Math.imul(X3, _t) | 0, s = s + Math.imul(Z2, It) | 0, v2 = v2 + Math.imul(Z2, _t) | 0;
      var ni = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l = Math.imul(st, bt2), s = Math.imul(st, yt), s = s + Math.imul(at, bt2) | 0, v2 = Math.imul(at, yt), l = l + Math.imul(ft, wt) | 0, s = s + Math.imul(ft, xt) | 0, s = s + Math.imul(ot, wt) | 0, v2 = v2 + Math.imul(ot, xt) | 0, l = l + Math.imul(it, Mt) | 0, s = s + Math.imul(it, Et2) | 0, s = s + Math.imul(nt, Mt) | 0, v2 = v2 + Math.imul(nt, Et2) | 0, l = l + Math.imul(et, St) | 0, s = s + Math.imul(et, Nt) | 0, s = s + Math.imul(rt, St) | 0, v2 = v2 + Math.imul(rt, Nt) | 0, l = l + Math.imul($3, It) | 0, s = s + Math.imul($3, _t) | 0, s = s + Math.imul(tt, It) | 0, v2 = v2 + Math.imul(tt, _t) | 0;
      var fi = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l = Math.imul(st, wt), s = Math.imul(st, xt), s = s + Math.imul(at, wt) | 0, v2 = Math.imul(at, xt), l = l + Math.imul(ft, Mt) | 0, s = s + Math.imul(ft, Et2) | 0, s = s + Math.imul(ot, Mt) | 0, v2 = v2 + Math.imul(ot, Et2) | 0, l = l + Math.imul(it, St) | 0, s = s + Math.imul(it, Nt) | 0, s = s + Math.imul(nt, St) | 0, v2 = v2 + Math.imul(nt, Nt) | 0, l = l + Math.imul(et, It) | 0, s = s + Math.imul(et, _t) | 0, s = s + Math.imul(rt, It) | 0, v2 = v2 + Math.imul(rt, _t) | 0;
      var oi = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l = Math.imul(st, Mt), s = Math.imul(st, Et2), s = s + Math.imul(at, Mt) | 0, v2 = Math.imul(at, Et2), l = l + Math.imul(ft, St) | 0, s = s + Math.imul(ft, Nt) | 0, s = s + Math.imul(ot, St) | 0, v2 = v2 + Math.imul(ot, Nt) | 0, l = l + Math.imul(it, It) | 0, s = s + Math.imul(it, _t) | 0, s = s + Math.imul(nt, It) | 0, v2 = v2 + Math.imul(nt, _t) | 0;
      var si = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l = Math.imul(st, St), s = Math.imul(st, Nt), s = s + Math.imul(at, St) | 0, v2 = Math.imul(at, Nt), l = l + Math.imul(ft, It) | 0, s = s + Math.imul(ft, _t) | 0, s = s + Math.imul(ot, It) | 0, v2 = v2 + Math.imul(ot, _t) | 0;
      var ai = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      M2 = (v2 + (s >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l = Math.imul(st, It), s = Math.imul(st, _t), s = s + Math.imul(at, It) | 0, v2 = Math.imul(at, _t);
      var ui = (M2 + l | 0) + ((s & 8191) << 13) | 0;
      return M2 = (v2 + (s >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x[0] = Me3, x[1] = Ee2, x[2] = Se3, x[3] = Ne, x[4] = Ie, x[5] = Wr, x[6] = Xr, x[7] = Zr, x[8] = $r, x[9] = ti, x[10] = ei, x[11] = ri, x[12] = ii, x[13] = ni, x[14] = fi, x[15] = oi, x[16] = si, x[17] = ai, x[18] = ui, M2 !== 0 && (x[19] = M2, c2.length++), c2;
    };
    Math.imul || (J2 = U3);
    function Bt(A4, f4, a2) {
      a2.negative = f4.negative ^ A4.negative, a2.length = A4.length + f4.length;
      for (var c2 = 0, d2 = 0, g2 = 0; g2 < a2.length - 1; g2++) {
        var x = d2;
        d2 = 0;
        for (var M2 = c2 & 67108863, l = Math.min(g2, f4.length - 1), s = Math.max(0, g2 - A4.length + 1); s <= l; s++) {
          var v2 = g2 - s, k2 = A4.words[v2] | 0, u2 = f4.words[s] | 0, E3 = k2 * u2, _ = E3 & 67108863;
          x = x + (E3 / 67108864 | 0) | 0, _ = _ + M2 | 0, M2 = _ & 67108863, x = x + (_ >>> 26) | 0, d2 += x >>> 26, x &= 67108863;
        }
        a2.words[g2] = M2, c2 = x, x = d2;
      }
      return c2 !== 0 ? a2.words[g2] = c2 : a2.length--, a2._strip();
    }
    function G(A4, f4, a2) {
      return Bt(A4, f4, a2);
    }
    o2.prototype.mulTo = function(f4, a2) {
      var c2, d2 = this.length + f4.length;
      return this.length === 10 && f4.length === 10 ? c2 = J2(this, f4, a2) : d2 < 63 ? c2 = U3(this, f4, a2) : d2 < 1024 ? c2 = Bt(this, f4, a2) : c2 = G(this, f4, a2), c2;
    }, o2.prototype.mul = function(f4) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f4.length), this.mulTo(f4, a2);
    }, o2.prototype.mulf = function(f4) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f4.length), G(this, f4, a2);
    }, o2.prototype.imul = function(f4) {
      return this.clone().mulTo(f4, this);
    }, o2.prototype.imuln = function(f4) {
      var a2 = f4 < 0;
      a2 && (f4 = -f4), i3(typeof f4 == "number"), i3(f4 < 67108864);
      for (var c2 = 0, d2 = 0; d2 < this.length; d2++) {
        var g2 = (this.words[d2] | 0) * f4, x = (g2 & 67108863) + (c2 & 67108863);
        c2 >>= 26, c2 += g2 / 67108864 | 0, c2 += x >>> 26, this.words[d2] = x & 67108863;
      }
      return c2 !== 0 && (this.words[d2] = c2, this.length++), a2 ? this.ineg() : this;
    }, o2.prototype.muln = function(f4) {
      return this.clone().imuln(f4);
    }, o2.prototype.sqr = function() {
      return this.mul(this);
    }, o2.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o2.prototype.pow = function(f4) {
      var a2 = F(f4);
      if (a2.length === 0)
        return new o2(1);
      for (var c2 = this, d2 = 0; d2 < a2.length && a2[d2] === 0; d2++, c2 = c2.sqr())
        ;
      if (++d2 < a2.length)
        for (var g2 = c2.sqr(); d2 < a2.length; d2++, g2 = g2.sqr())
          a2[d2] !== 0 && (c2 = c2.mul(g2));
      return c2;
    }, o2.prototype.iushln = function(f4) {
      i3(typeof f4 == "number" && f4 >= 0);
      var a2 = f4 % 26, c2 = (f4 - a2) / 26, d2 = 67108863 >>> 26 - a2 << 26 - a2, g2;
      if (a2 !== 0) {
        var x = 0;
        for (g2 = 0; g2 < this.length; g2++) {
          var M2 = this.words[g2] & d2, l = (this.words[g2] | 0) - M2 << a2;
          this.words[g2] = l | x, x = M2 >>> 26 - a2;
        }
        x && (this.words[g2] = x, this.length++);
      }
      if (c2 !== 0) {
        for (g2 = this.length - 1; g2 >= 0; g2--)
          this.words[g2 + c2] = this.words[g2];
        for (g2 = 0; g2 < c2; g2++)
          this.words[g2] = 0;
        this.length += c2;
      }
      return this._strip();
    }, o2.prototype.ishln = function(f4) {
      return i3(this.negative === 0), this.iushln(f4);
    }, o2.prototype.iushrn = function(f4, a2, c2) {
      i3(typeof f4 == "number" && f4 >= 0);
      var d2;
      a2 ? d2 = (a2 - a2 % 26) / 26 : d2 = 0;
      var g2 = f4 % 26, x = Math.min((f4 - g2) / 26, this.length), M2 = 67108863 ^ 67108863 >>> g2 << g2, l = c2;
      if (d2 -= x, d2 = Math.max(0, d2), l) {
        for (var s = 0; s < x; s++)
          l.words[s] = this.words[s];
        l.length = x;
      }
      if (x !== 0)
        if (this.length > x)
          for (this.length -= x, s = 0; s < this.length; s++)
            this.words[s] = this.words[s + x];
        else
          this.words[0] = 0, this.length = 1;
      var v2 = 0;
      for (s = this.length - 1; s >= 0 && (v2 !== 0 || s >= d2); s--) {
        var k2 = this.words[s] | 0;
        this.words[s] = v2 << 26 - g2 | k2 >>> g2, v2 = k2 & M2;
      }
      return l && v2 !== 0 && (l.words[l.length++] = v2), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o2.prototype.ishrn = function(f4, a2, c2) {
      return i3(this.negative === 0), this.iushrn(f4, a2, c2);
    }, o2.prototype.shln = function(f4) {
      return this.clone().ishln(f4);
    }, o2.prototype.ushln = function(f4) {
      return this.clone().iushln(f4);
    }, o2.prototype.shrn = function(f4) {
      return this.clone().ishrn(f4);
    }, o2.prototype.ushrn = function(f4) {
      return this.clone().iushrn(f4);
    }, o2.prototype.testn = function(f4) {
      i3(typeof f4 == "number" && f4 >= 0);
      var a2 = f4 % 26, c2 = (f4 - a2) / 26, d2 = 1 << a2;
      if (this.length <= c2)
        return false;
      var g2 = this.words[c2];
      return !!(g2 & d2);
    }, o2.prototype.imaskn = function(f4) {
      i3(typeof f4 == "number" && f4 >= 0);
      var a2 = f4 % 26, c2 = (f4 - a2) / 26;
      if (i3(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c2)
        return this;
      if (a2 !== 0 && c2++, this.length = Math.min(c2, this.length), a2 !== 0) {
        var d2 = 67108863 ^ 67108863 >>> a2 << a2;
        this.words[this.length - 1] &= d2;
      }
      return this._strip();
    }, o2.prototype.maskn = function(f4) {
      return this.clone().imaskn(f4);
    }, o2.prototype.iaddn = function(f4) {
      return i3(typeof f4 == "number"), i3(f4 < 67108864), f4 < 0 ? this.isubn(-f4) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f4 ? (this.words[0] = f4 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f4), this.negative = 1, this) : this._iaddn(f4);
    }, o2.prototype._iaddn = function(f4) {
      this.words[0] += f4;
      for (var a2 = 0; a2 < this.length && this.words[a2] >= 67108864; a2++)
        this.words[a2] -= 67108864, a2 === this.length - 1 ? this.words[a2 + 1] = 1 : this.words[a2 + 1]++;
      return this.length = Math.max(this.length, a2 + 1), this;
    }, o2.prototype.isubn = function(f4) {
      if (i3(typeof f4 == "number"), i3(f4 < 67108864), f4 < 0)
        return this.iaddn(-f4);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(f4), this.negative = 1, this;
      if (this.words[0] -= f4, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var a2 = 0; a2 < this.length && this.words[a2] < 0; a2++)
          this.words[a2] += 67108864, this.words[a2 + 1] -= 1;
      return this._strip();
    }, o2.prototype.addn = function(f4) {
      return this.clone().iaddn(f4);
    }, o2.prototype.subn = function(f4) {
      return this.clone().isubn(f4);
    }, o2.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o2.prototype.abs = function() {
      return this.clone().iabs();
    }, o2.prototype._ishlnsubmul = function(f4, a2, c2) {
      var d2 = f4.length + c2, g2;
      this._expand(d2);
      var x, M2 = 0;
      for (g2 = 0; g2 < f4.length; g2++) {
        x = (this.words[g2 + c2] | 0) + M2;
        var l = (f4.words[g2] | 0) * a2;
        x -= l & 67108863, M2 = (x >> 26) - (l / 67108864 | 0), this.words[g2 + c2] = x & 67108863;
      }
      for (; g2 < this.length - c2; g2++)
        x = (this.words[g2 + c2] | 0) + M2, M2 = x >> 26, this.words[g2 + c2] = x & 67108863;
      if (M2 === 0)
        return this._strip();
      for (i3(M2 === -1), M2 = 0, g2 = 0; g2 < this.length; g2++)
        x = -(this.words[g2] | 0) + M2, M2 = x >> 26, this.words[g2] = x & 67108863;
      return this.negative = 1, this._strip();
    }, o2.prototype._wordDiv = function(f4, a2) {
      var c2 = this.length - f4.length, d2 = this.clone(), g2 = f4, x = g2.words[g2.length - 1] | 0, M2 = this._countBits(x);
      c2 = 26 - M2, c2 !== 0 && (g2 = g2.ushln(c2), d2.iushln(c2), x = g2.words[g2.length - 1] | 0);
      var l = d2.length - g2.length, s;
      if (a2 !== "mod") {
        s = new o2(null), s.length = l + 1, s.words = new Array(s.length);
        for (var v2 = 0; v2 < s.length; v2++)
          s.words[v2] = 0;
      }
      var k2 = d2.clone()._ishlnsubmul(g2, 1, l);
      k2.negative === 0 && (d2 = k2, s && (s.words[l] = 1));
      for (var u2 = l - 1; u2 >= 0; u2--) {
        var E3 = (d2.words[g2.length + u2] | 0) * 67108864 + (d2.words[g2.length + u2 - 1] | 0);
        for (E3 = Math.min(E3 / x | 0, 67108863), d2._ishlnsubmul(g2, E3, u2); d2.negative !== 0; )
          E3--, d2.negative = 0, d2._ishlnsubmul(g2, 1, u2), d2.isZero() || (d2.negative ^= 1);
        s && (s.words[u2] = E3);
      }
      return s && s._strip(), d2._strip(), a2 !== "div" && c2 !== 0 && d2.iushrn(c2), { div: s || null, mod: d2 };
    }, o2.prototype.divmod = function(f4, a2, c2) {
      if (i3(!f4.isZero()), this.isZero())
        return { div: new o2(0), mod: new o2(0) };
      var d2, g2, x;
      return this.negative !== 0 && f4.negative === 0 ? (x = this.neg().divmod(f4, a2), a2 !== "mod" && (d2 = x.div.neg()), a2 !== "div" && (g2 = x.mod.neg(), c2 && g2.negative !== 0 && g2.iadd(f4)), { div: d2, mod: g2 }) : this.negative === 0 && f4.negative !== 0 ? (x = this.divmod(f4.neg(), a2), a2 !== "mod" && (d2 = x.div.neg()), { div: d2, mod: x.mod }) : this.negative & f4.negative ? (x = this.neg().divmod(f4.neg(), a2), a2 !== "div" && (g2 = x.mod.neg(), c2 && g2.negative !== 0 && g2.isub(f4)), { div: x.div, mod: g2 }) : f4.length > this.length || this.cmp(f4) < 0 ? { div: new o2(0), mod: this } : f4.length === 1 ? a2 === "div" ? { div: this.divn(f4.words[0]), mod: null } : a2 === "mod" ? { div: null, mod: new o2(this.modrn(f4.words[0])) } : { div: this.divn(f4.words[0]), mod: new o2(this.modrn(f4.words[0])) } : this._wordDiv(f4, a2);
    }, o2.prototype.div = function(f4) {
      return this.divmod(f4, "div", false).div;
    }, o2.prototype.mod = function(f4) {
      return this.divmod(f4, "mod", false).mod;
    }, o2.prototype.umod = function(f4) {
      return this.divmod(f4, "mod", true).mod;
    }, o2.prototype.divRound = function(f4) {
      var a2 = this.divmod(f4);
      if (a2.mod.isZero())
        return a2.div;
      var c2 = a2.div.negative !== 0 ? a2.mod.isub(f4) : a2.mod, d2 = f4.ushrn(1), g2 = f4.andln(1), x = c2.cmp(d2);
      return x < 0 || g2 === 1 && x === 0 ? a2.div : a2.div.negative !== 0 ? a2.div.isubn(1) : a2.div.iaddn(1);
    }, o2.prototype.modrn = function(f4) {
      var a2 = f4 < 0;
      a2 && (f4 = -f4), i3(f4 <= 67108863);
      for (var c2 = (1 << 26) % f4, d2 = 0, g2 = this.length - 1; g2 >= 0; g2--)
        d2 = (c2 * d2 + (this.words[g2] | 0)) % f4;
      return a2 ? -d2 : d2;
    }, o2.prototype.modn = function(f4) {
      return this.modrn(f4);
    }, o2.prototype.idivn = function(f4) {
      var a2 = f4 < 0;
      a2 && (f4 = -f4), i3(f4 <= 67108863);
      for (var c2 = 0, d2 = this.length - 1; d2 >= 0; d2--) {
        var g2 = (this.words[d2] | 0) + c2 * 67108864;
        this.words[d2] = g2 / f4 | 0, c2 = g2 % f4;
      }
      return this._strip(), a2 ? this.ineg() : this;
    }, o2.prototype.divn = function(f4) {
      return this.clone().idivn(f4);
    }, o2.prototype.egcd = function(f4) {
      i3(f4.negative === 0), i3(!f4.isZero());
      var a2 = this, c2 = f4.clone();
      a2.negative !== 0 ? a2 = a2.umod(f4) : a2 = a2.clone();
      for (var d2 = new o2(1), g2 = new o2(0), x = new o2(0), M2 = new o2(1), l = 0; a2.isEven() && c2.isEven(); )
        a2.iushrn(1), c2.iushrn(1), ++l;
      for (var s = c2.clone(), v2 = a2.clone(); !a2.isZero(); ) {
        for (var k2 = 0, u2 = 1; !(a2.words[0] & u2) && k2 < 26; ++k2, u2 <<= 1)
          ;
        if (k2 > 0)
          for (a2.iushrn(k2); k2-- > 0; )
            (d2.isOdd() || g2.isOdd()) && (d2.iadd(s), g2.isub(v2)), d2.iushrn(1), g2.iushrn(1);
        for (var E3 = 0, _ = 1; !(c2.words[0] & _) && E3 < 26; ++E3, _ <<= 1)
          ;
        if (E3 > 0)
          for (c2.iushrn(E3); E3-- > 0; )
            (x.isOdd() || M2.isOdd()) && (x.iadd(s), M2.isub(v2)), x.iushrn(1), M2.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d2.isub(x), g2.isub(M2)) : (c2.isub(a2), x.isub(d2), M2.isub(g2));
      }
      return { a: x, b: M2, gcd: c2.iushln(l) };
    }, o2.prototype._invmp = function(f4) {
      i3(f4.negative === 0), i3(!f4.isZero());
      var a2 = this, c2 = f4.clone();
      a2.negative !== 0 ? a2 = a2.umod(f4) : a2 = a2.clone();
      for (var d2 = new o2(1), g2 = new o2(0), x = c2.clone(); a2.cmpn(1) > 0 && c2.cmpn(1) > 0; ) {
        for (var M2 = 0, l = 1; !(a2.words[0] & l) && M2 < 26; ++M2, l <<= 1)
          ;
        if (M2 > 0)
          for (a2.iushrn(M2); M2-- > 0; )
            d2.isOdd() && d2.iadd(x), d2.iushrn(1);
        for (var s = 0, v2 = 1; !(c2.words[0] & v2) && s < 26; ++s, v2 <<= 1)
          ;
        if (s > 0)
          for (c2.iushrn(s); s-- > 0; )
            g2.isOdd() && g2.iadd(x), g2.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d2.isub(g2)) : (c2.isub(a2), g2.isub(d2));
      }
      var k2;
      return a2.cmpn(1) === 0 ? k2 = d2 : k2 = g2, k2.cmpn(0) < 0 && k2.iadd(f4), k2;
    }, o2.prototype.gcd = function(f4) {
      if (this.isZero())
        return f4.abs();
      if (f4.isZero())
        return this.abs();
      var a2 = this.clone(), c2 = f4.clone();
      a2.negative = 0, c2.negative = 0;
      for (var d2 = 0; a2.isEven() && c2.isEven(); d2++)
        a2.iushrn(1), c2.iushrn(1);
      do {
        for (; a2.isEven(); )
          a2.iushrn(1);
        for (; c2.isEven(); )
          c2.iushrn(1);
        var g2 = a2.cmp(c2);
        if (g2 < 0) {
          var x = a2;
          a2 = c2, c2 = x;
        } else if (g2 === 0 || c2.cmpn(1) === 0)
          break;
        a2.isub(c2);
      } while (true);
      return c2.iushln(d2);
    }, o2.prototype.invm = function(f4) {
      return this.egcd(f4).a.umod(f4);
    }, o2.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o2.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o2.prototype.andln = function(f4) {
      return this.words[0] & f4;
    }, o2.prototype.bincn = function(f4) {
      i3(typeof f4 == "number");
      var a2 = f4 % 26, c2 = (f4 - a2) / 26, d2 = 1 << a2;
      if (this.length <= c2)
        return this._expand(c2 + 1), this.words[c2] |= d2, this;
      for (var g2 = d2, x = c2; g2 !== 0 && x < this.length; x++) {
        var M2 = this.words[x] | 0;
        M2 += g2, g2 = M2 >>> 26, M2 &= 67108863, this.words[x] = M2;
      }
      return g2 !== 0 && (this.words[x] = g2, this.length++), this;
    }, o2.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o2.prototype.cmpn = function(f4) {
      var a2 = f4 < 0;
      if (this.negative !== 0 && !a2)
        return -1;
      if (this.negative === 0 && a2)
        return 1;
      this._strip();
      var c2;
      if (this.length > 1)
        c2 = 1;
      else {
        a2 && (f4 = -f4), i3(f4 <= 67108863, "Number is too big");
        var d2 = this.words[0] | 0;
        c2 = d2 === f4 ? 0 : d2 < f4 ? -1 : 1;
      }
      return this.negative !== 0 ? -c2 | 0 : c2;
    }, o2.prototype.cmp = function(f4) {
      if (this.negative !== 0 && f4.negative === 0)
        return -1;
      if (this.negative === 0 && f4.negative !== 0)
        return 1;
      var a2 = this.ucmp(f4);
      return this.negative !== 0 ? -a2 | 0 : a2;
    }, o2.prototype.ucmp = function(f4) {
      if (this.length > f4.length)
        return 1;
      if (this.length < f4.length)
        return -1;
      for (var a2 = 0, c2 = this.length - 1; c2 >= 0; c2--) {
        var d2 = this.words[c2] | 0, g2 = f4.words[c2] | 0;
        if (d2 !== g2) {
          d2 < g2 ? a2 = -1 : d2 > g2 && (a2 = 1);
          break;
        }
      }
      return a2;
    }, o2.prototype.gtn = function(f4) {
      return this.cmpn(f4) === 1;
    }, o2.prototype.gt = function(f4) {
      return this.cmp(f4) === 1;
    }, o2.prototype.gten = function(f4) {
      return this.cmpn(f4) >= 0;
    }, o2.prototype.gte = function(f4) {
      return this.cmp(f4) >= 0;
    }, o2.prototype.ltn = function(f4) {
      return this.cmpn(f4) === -1;
    }, o2.prototype.lt = function(f4) {
      return this.cmp(f4) === -1;
    }, o2.prototype.lten = function(f4) {
      return this.cmpn(f4) <= 0;
    }, o2.prototype.lte = function(f4) {
      return this.cmp(f4) <= 0;
    }, o2.prototype.eqn = function(f4) {
      return this.cmpn(f4) === 0;
    }, o2.prototype.eq = function(f4) {
      return this.cmp(f4) === 0;
    }, o2.red = function(f4) {
      return new Y(f4);
    }, o2.prototype.toRed = function(f4) {
      return i3(!this.red, "Already a number in reduction context"), i3(this.negative === 0, "red works only with positives"), f4.convertTo(this)._forceRed(f4);
    }, o2.prototype.fromRed = function() {
      return i3(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o2.prototype._forceRed = function(f4) {
      return this.red = f4, this;
    }, o2.prototype.forceRed = function(f4) {
      return i3(!this.red, "Already a number in reduction context"), this._forceRed(f4);
    }, o2.prototype.redAdd = function(f4) {
      return i3(this.red, "redAdd works only with red numbers"), this.red.add(this, f4);
    }, o2.prototype.redIAdd = function(f4) {
      return i3(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f4);
    }, o2.prototype.redSub = function(f4) {
      return i3(this.red, "redSub works only with red numbers"), this.red.sub(this, f4);
    }, o2.prototype.redISub = function(f4) {
      return i3(this.red, "redISub works only with red numbers"), this.red.isub(this, f4);
    }, o2.prototype.redShl = function(f4) {
      return i3(this.red, "redShl works only with red numbers"), this.red.shl(this, f4);
    }, o2.prototype.redMul = function(f4) {
      return i3(this.red, "redMul works only with red numbers"), this.red._verify2(this, f4), this.red.mul(this, f4);
    }, o2.prototype.redIMul = function(f4) {
      return i3(this.red, "redMul works only with red numbers"), this.red._verify2(this, f4), this.red.imul(this, f4);
    }, o2.prototype.redSqr = function() {
      return i3(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o2.prototype.redISqr = function() {
      return i3(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o2.prototype.redSqrt = function() {
      return i3(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o2.prototype.redInvm = function() {
      return i3(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o2.prototype.redNeg = function() {
      return i3(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o2.prototype.redPow = function(f4) {
      return i3(this.red && !f4.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f4);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function z3(A4, f4) {
      this.name = A4, this.p = new o2(f4, 16), this.n = this.p.bitLength(), this.k = new o2(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    z3.prototype._tmp = function() {
      var f4 = new o2(null);
      return f4.words = new Array(Math.ceil(this.n / 13)), f4;
    }, z3.prototype.ireduce = function(f4) {
      var a2 = f4, c2;
      do
        this.split(a2, this.tmp), a2 = this.imulK(a2), a2 = a2.iadd(this.tmp), c2 = a2.bitLength();
      while (c2 > this.n);
      var d2 = c2 < this.n ? -1 : a2.ucmp(this.p);
      return d2 === 0 ? (a2.words[0] = 0, a2.length = 1) : d2 > 0 ? a2.isub(this.p) : a2.strip !== void 0 ? a2.strip() : a2._strip(), a2;
    }, z3.prototype.split = function(f4, a2) {
      f4.iushrn(this.n, 0, a2);
    }, z3.prototype.imulK = function(f4) {
      return f4.imul(this.k);
    };
    function Pt() {
      z3.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n2(Pt, z3), Pt.prototype.split = function(f4, a2) {
      for (var c2 = 4194303, d2 = Math.min(f4.length, 9), g2 = 0; g2 < d2; g2++)
        a2.words[g2] = f4.words[g2];
      if (a2.length = d2, f4.length <= 9) {
        f4.words[0] = 0, f4.length = 1;
        return;
      }
      var x = f4.words[9];
      for (a2.words[a2.length++] = x & c2, g2 = 10; g2 < f4.length; g2++) {
        var M2 = f4.words[g2] | 0;
        f4.words[g2 - 10] = (M2 & c2) << 4 | x >>> 22, x = M2;
      }
      x >>>= 22, f4.words[g2 - 10] = x, x === 0 && f4.length > 10 ? f4.length -= 10 : f4.length -= 9;
    }, Pt.prototype.imulK = function(f4) {
      f4.words[f4.length] = 0, f4.words[f4.length + 1] = 0, f4.length += 2;
      for (var a2 = 0, c2 = 0; c2 < f4.length; c2++) {
        var d2 = f4.words[c2] | 0;
        a2 += d2 * 977, f4.words[c2] = a2 & 67108863, a2 = d2 * 64 + (a2 / 67108864 | 0);
      }
      return f4.words[f4.length - 1] === 0 && (f4.length--, f4.words[f4.length - 1] === 0 && f4.length--), f4;
    };
    function W2() {
      z3.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n2(W2, z3);
    function Rt() {
      z3.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n2(Rt, z3);
    function Yt() {
      z3.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n2(Yt, z3), Yt.prototype.imulK = function(f4) {
      for (var a2 = 0, c2 = 0; c2 < f4.length; c2++) {
        var d2 = (f4.words[c2] | 0) * 19 + a2, g2 = d2 & 67108863;
        d2 >>>= 26, f4.words[c2] = g2, a2 = d2;
      }
      return a2 !== 0 && (f4.words[f4.length++] = a2), f4;
    }, o2._prime = function(f4) {
      if (H[f4])
        return H[f4];
      var a2;
      if (f4 === "k256")
        a2 = new Pt();
      else if (f4 === "p224")
        a2 = new W2();
      else if (f4 === "p192")
        a2 = new Rt();
      else if (f4 === "p25519")
        a2 = new Yt();
      else
        throw new Error("Unknown prime " + f4);
      return H[f4] = a2, a2;
    };
    function Y(A4) {
      if (typeof A4 == "string") {
        var f4 = o2._prime(A4);
        this.m = f4.p, this.prime = f4;
      } else
        i3(A4.gtn(1), "modulus must be greater than 1"), this.m = A4, this.prime = null;
    }
    Y.prototype._verify1 = function(f4) {
      i3(f4.negative === 0, "red works only with positives"), i3(f4.red, "red works only with red numbers");
    }, Y.prototype._verify2 = function(f4, a2) {
      i3((f4.negative | a2.negative) === 0, "red works only with positives"), i3(f4.red && f4.red === a2.red, "red works only with red numbers");
    }, Y.prototype.imod = function(f4) {
      return this.prime ? this.prime.ireduce(f4)._forceRed(this) : (w2(f4, f4.umod(this.m)._forceRed(this)), f4);
    }, Y.prototype.neg = function(f4) {
      return f4.isZero() ? f4.clone() : this.m.sub(f4)._forceRed(this);
    }, Y.prototype.add = function(f4, a2) {
      this._verify2(f4, a2);
      var c2 = f4.add(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2._forceRed(this);
    }, Y.prototype.iadd = function(f4, a2) {
      this._verify2(f4, a2);
      var c2 = f4.iadd(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2;
    }, Y.prototype.sub = function(f4, a2) {
      this._verify2(f4, a2);
      var c2 = f4.sub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2._forceRed(this);
    }, Y.prototype.isub = function(f4, a2) {
      this._verify2(f4, a2);
      var c2 = f4.isub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2;
    }, Y.prototype.shl = function(f4, a2) {
      return this._verify1(f4), this.imod(f4.ushln(a2));
    }, Y.prototype.imul = function(f4, a2) {
      return this._verify2(f4, a2), this.imod(f4.imul(a2));
    }, Y.prototype.mul = function(f4, a2) {
      return this._verify2(f4, a2), this.imod(f4.mul(a2));
    }, Y.prototype.isqr = function(f4) {
      return this.imul(f4, f4.clone());
    }, Y.prototype.sqr = function(f4) {
      return this.mul(f4, f4);
    }, Y.prototype.sqrt = function(f4) {
      if (f4.isZero())
        return f4.clone();
      var a2 = this.m.andln(3);
      if (i3(a2 % 2 === 1), a2 === 3) {
        var c2 = this.m.add(new o2(1)).iushrn(2);
        return this.pow(f4, c2);
      }
      for (var d2 = this.m.subn(1), g2 = 0; !d2.isZero() && d2.andln(1) === 0; )
        g2++, d2.iushrn(1);
      i3(!d2.isZero());
      var x = new o2(1).toRed(this), M2 = x.redNeg(), l = this.m.subn(1).iushrn(1), s = this.m.bitLength();
      for (s = new o2(2 * s * s).toRed(this); this.pow(s, l).cmp(M2) !== 0; )
        s.redIAdd(M2);
      for (var v2 = this.pow(s, d2), k2 = this.pow(f4, d2.addn(1).iushrn(1)), u2 = this.pow(f4, d2), E3 = g2; u2.cmp(x) !== 0; ) {
        for (var _ = u2, B = 0; _.cmp(x) !== 0; B++)
          _ = _.redSqr();
        i3(B < E3);
        var R2 = this.pow(v2, new o2(1).iushln(E3 - B - 1));
        k2 = k2.redMul(R2), v2 = R2.redSqr(), u2 = u2.redMul(v2), E3 = B;
      }
      return k2;
    }, Y.prototype.invm = function(f4) {
      var a2 = f4._invmp(this.m);
      return a2.negative !== 0 ? (a2.negative = 0, this.imod(a2).redNeg()) : this.imod(a2);
    }, Y.prototype.pow = function(f4, a2) {
      if (a2.isZero())
        return new o2(1).toRed(this);
      if (a2.cmpn(1) === 0)
        return f4.clone();
      var c2 = 4, d2 = new Array(1 << c2);
      d2[0] = new o2(1).toRed(this), d2[1] = f4;
      for (var g2 = 2; g2 < d2.length; g2++)
        d2[g2] = this.mul(d2[g2 - 1], f4);
      var x = d2[0], M2 = 0, l = 0, s = a2.bitLength() % 26;
      for (s === 0 && (s = 26), g2 = a2.length - 1; g2 >= 0; g2--) {
        for (var v2 = a2.words[g2], k2 = s - 1; k2 >= 0; k2--) {
          var u2 = v2 >> k2 & 1;
          if (x !== d2[0] && (x = this.sqr(x)), u2 === 0 && M2 === 0) {
            l = 0;
            continue;
          }
          M2 <<= 1, M2 |= u2, l++, !(l !== c2 && (g2 !== 0 || k2 !== 0)) && (x = this.mul(x, d2[M2]), l = 0, M2 = 0);
        }
        s = 26;
      }
      return x;
    }, Y.prototype.convertTo = function(f4) {
      var a2 = f4.umod(this.m);
      return a2 === f4 ? a2.clone() : a2;
    }, Y.prototype.convertFrom = function(f4) {
      var a2 = f4.clone();
      return a2.red = null, a2;
    }, o2.mont = function(f4) {
      return new Vt2(f4);
    };
    function Vt2(A4) {
      Y.call(this, A4), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o2(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n2(Vt2, Y), Vt2.prototype.convertTo = function(f4) {
      return this.imod(f4.ushln(this.shift));
    }, Vt2.prototype.convertFrom = function(f4) {
      var a2 = this.imod(f4.mul(this.rinv));
      return a2.red = null, a2;
    }, Vt2.prototype.imul = function(f4, a2) {
      if (f4.isZero() || a2.isZero())
        return f4.words[0] = 0, f4.length = 1, f4;
      var c2 = f4.imul(a2), d2 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g2 = c2.isub(d2).iushrn(this.shift), x = g2;
      return g2.cmp(this.m) >= 0 ? x = g2.isub(this.m) : g2.cmpn(0) < 0 && (x = g2.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.mul = function(f4, a2) {
      if (f4.isZero() || a2.isZero())
        return new o2(0)._forceRed(this);
      var c2 = f4.mul(a2), d2 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g2 = c2.isub(d2).iushrn(this.shift), x = g2;
      return g2.cmp(this.m) >= 0 ? x = g2.isub(this.m) : g2.cmpn(0) < 0 && (x = g2.iadd(this.m)), x._forceRed(this);
    }, Vt2.prototype.invm = function(f4) {
      var a2 = this.imod(f4._invmp(this.m).mul(this.r2));
      return a2._forceRed(this);
    };
  })(e, On);
})(Ln);
var K = Ln.exports;
var jn = "bignumber/5.7.0";
var Rr = K.BN;
var Ae = new L(jn);
var wi = {};
var Qn = 9007199254740991;
function C0(e) {
  return e != null && (V.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Qt(e) || typeof e == "bigint" || ir(e));
}
var Jn = false;
var V = class _V {
  constructor(t, r2) {
    t !== wi && Ae.throwError("cannot call constructor directly; use BigNumber.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r2, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return Lt(j(this).fromTwos(t));
  }
  toTwos(t) {
    return Lt(j(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? _V.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return Lt(j(this).add(j(t)));
  }
  sub(t) {
    return Lt(j(this).sub(j(t)));
  }
  div(t) {
    return _V.from(t).isZero() && Wt("division-by-zero", "div"), Lt(j(this).div(j(t)));
  }
  mul(t) {
    return Lt(j(this).mul(j(t)));
  }
  mod(t) {
    const r2 = j(t);
    return r2.isNeg() && Wt("division-by-zero", "mod"), Lt(j(this).umod(r2));
  }
  pow(t) {
    const r2 = j(t);
    return r2.isNeg() && Wt("negative-power", "pow"), Lt(j(this).pow(r2));
  }
  and(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && Wt("unbound-bitwise-result", "and"), Lt(j(this).and(r2));
  }
  or(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && Wt("unbound-bitwise-result", "or"), Lt(j(this).or(r2));
  }
  xor(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && Wt("unbound-bitwise-result", "xor"), Lt(j(this).xor(r2));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "mask"), Lt(j(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "shl"), Lt(j(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && Wt("negative-width", "shr"), Lt(j(this).shrn(t));
  }
  eq(t) {
    return j(this).eq(j(t));
  }
  lt(t) {
    return j(this).lt(j(t));
  }
  lte(t) {
    return j(this).lte(j(t));
  }
  gt(t) {
    return j(this).gt(j(t));
  }
  gte(t) {
    return j(this).gte(j(t));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return j(this).isZero();
  }
  toNumber() {
    try {
      return j(this).toNumber();
    } catch {
      Wt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae.throwError("this platform does not support BigInt", L.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? Jn || (Jn = true, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", L.errors.UNEXPECTED_ARGUMENT, {})), j(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(t) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(t) {
    if (t instanceof _V)
      return t;
    if (typeof t == "string")
      return t.match(/^-?0x[0-9a-f]+$/i) ? new _V(wi, vr(t)) : t.match(/^-?[0-9]+$/) ? new _V(wi, vr(new Rr(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number")
      return t % 1 && Wt("underflow", "BigNumber.from", t), (t >= Qn || t <= -Qn) && Wt("overflow", "BigNumber.from", t), _V.from(String(t));
    const r2 = t;
    if (typeof r2 == "bigint")
      return _V.from(r2.toString());
    if (ir(r2))
      return _V.from(Kt(r2));
    if (r2)
      if (r2.toHexString) {
        const i3 = r2.toHexString();
        if (typeof i3 == "string")
          return _V.from(i3);
      } else {
        let i3 = r2._hex;
        if (i3 == null && r2.type === "BigNumber" && (i3 = r2.hex), typeof i3 == "string" && (Qt(i3) || i3[0] === "-" && Qt(i3.substring(1))))
          return _V.from(i3);
      }
    return Ae.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
};
function vr(e) {
  if (typeof e != "string")
    return vr(e.toString(16));
  if (e[0] === "-")
    return e = e.substring(1), e[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e), e = vr(e), e === "0x00" ? e : "-" + e;
  if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x")
    return "0x00";
  for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00"; )
    e = "0x" + e.substring(4);
  return e;
}
function Lt(e) {
  return V.from(vr(e));
}
function j(e) {
  const t = V.from(e).toHexString();
  return t[0] === "-" ? new Rr("-" + t.substring(3), 16) : new Rr(t.substring(2), 16);
}
function Wt(e, t, r2) {
  const i3 = { fault: e, operation: t };
  return r2 != null && (i3.value = r2), Ae.throwError(e, L.errors.NUMERIC_FAULT, i3);
}
var Ht = new L(jn);
var mr = {};
var Gn = V.from(0);
var Yn = V.from(-1);
function Vn(e, t, r2, i3) {
  const n2 = { fault: t, operation: r2 };
  return i3 !== void 0 && (n2.value = i3), Ht.throwError(e, L.errors.NUMERIC_FAULT, n2);
}
var gr = "0";
for (; gr.length < 256; )
  gr += gr;
function xi(e) {
  if (typeof e != "number")
    try {
      e = V.from(e).toNumber();
    } catch {
    }
  return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + gr.substring(0, e) : Ht.throwArgumentError("invalid decimal size", "decimals", e);
}
function Mi(e, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  e = V.from(e);
  const i3 = e.lt(Gn);
  i3 && (e = e.mul(Yn));
  let n2 = e.mod(r2).toString();
  for (; n2.length < r2.length - 1; )
    n2 = "0" + n2;
  n2 = n2.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o2 = e.div(r2).toString();
  return r2.length === 1 ? e = o2 : e = o2 + "." + n2, i3 && (e = "-" + e), e;
}
function be(e, t) {
  t == null && (t = 0);
  const r2 = xi(t);
  (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht.throwArgumentError("invalid decimal value", "value", e);
  const i3 = e.substring(0, 1) === "-";
  i3 && (e = e.substring(1)), e === "." && Ht.throwArgumentError("missing value", "value", e);
  const n2 = e.split(".");
  n2.length > 2 && Ht.throwArgumentError("too many decimal points", "value", e);
  let o2 = n2[0], h3 = n2[1];
  for (o2 || (o2 = "0"), h3 || (h3 = "0"); h3[h3.length - 1] === "0"; )
    h3 = h3.substring(0, h3.length - 1);
  for (h3.length > r2.length - 1 && Vn("fractional component exceeds decimals", "underflow", "parseFixed"), h3 === "" && (h3 = "0"); h3.length < r2.length - 1; )
    h3 += "0";
  const p2 = V.from(o2), b2 = V.from(h3);
  let m = p2.mul(r2).add(b2);
  return i3 && (m = m.mul(Yn)), m;
}
var dr = class _dr {
  constructor(t, r2, i3, n2) {
    t !== mr && Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r2, this.width = i3, this.decimals = n2, this.name = (r2 ? "" : "u") + "fixed" + String(i3) + "x" + String(n2), this._multiplier = xi(n2), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof _dr)
      return t;
    typeof t == "number" && (t = `fixed128x${t}`);
    let r2 = true, i3 = 128, n2 = 18;
    if (typeof t == "string") {
      if (t !== "fixed")
        if (t === "ufixed")
          r2 = false;
        else {
          const o2 = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          o2 || Ht.throwArgumentError("invalid fixed format", "format", t), r2 = o2[1] !== "u", i3 = parseInt(o2[2]), n2 = parseInt(o2[3]);
        }
    } else if (t) {
      const o2 = (h3, p2, b2) => t[h3] == null ? b2 : (typeof t[h3] !== p2 && Ht.throwArgumentError("invalid fixed format (" + h3 + " not " + p2 + ")", "format." + h3, t[h3]), t[h3]);
      r2 = o2("signed", "boolean", r2), i3 = o2("width", "number", i3), n2 = o2("decimals", "number", n2);
    }
    return i3 % 8 && Ht.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i3), n2 > 80 && Ht.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n2), new _dr(mr, r2, i3, n2);
  }
};
var Ut = class _Ut {
  constructor(t, r2, i3, n2) {
    t !== mr && Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n2, this._hex = r2, this._value = i3, this._isFixedNumber = true, Object.freeze(this);
  }
  _checkFormat(t) {
    this.format.name !== t.format.name && Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
  }
  addUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i3 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r2.add(i3), this.format.decimals, this.format);
  }
  subUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i3 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r2.sub(i3), this.format.decimals, this.format);
  }
  mulUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i3 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r2.mul(i3).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(t) {
    this._checkFormat(t);
    const r2 = be(this._value, this.format.decimals), i3 = be(t._value, t.format.decimals);
    return _Ut.fromValue(r2.mul(this.format._multiplier).div(i3), this.format.decimals, this.format);
  }
  floor() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = _Ut.from(t[0], this.format);
    const i3 = !t[1].match(/^(0*)$/);
    return this.isNegative() && i3 && (r2 = r2.subUnsafe(Wn.toFormat(r2.format))), r2;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = _Ut.from(t[0], this.format);
    const i3 = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i3 && (r2 = r2.addUnsafe(Wn.toFormat(r2.format))), r2;
  }
  round(t) {
    t == null && (t = 0);
    const r2 = this.toString().split(".");
    if (r2.length === 1 && r2.push("0"), (t < 0 || t > 80 || t % 1) && Ht.throwArgumentError("invalid decimal count", "decimals", t), r2[1].length <= t)
      return this;
    const i3 = _Ut.from("1" + gr.substring(0, t), this.format), n2 = O0.toFormat(this.format);
    return this.mulUnsafe(i3).addUnsafe(n2).floor().divUnsafe(i3);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(t) {
    if (t == null)
      return this._hex;
    t % 8 && Ht.throwArgumentError("invalid byte width", "width", t);
    const r2 = V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
    return oe(r2, t / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(t) {
    return _Ut.fromString(this._value, t);
  }
  static fromValue(t, r2, i3) {
    return i3 == null && r2 != null && !C0(r2) && (i3 = r2, r2 = null), r2 == null && (r2 = 0), i3 == null && (i3 = "fixed"), _Ut.fromString(Mi(t, r2), dr.from(i3));
  }
  static fromString(t, r2) {
    r2 == null && (r2 = "fixed");
    const i3 = dr.from(r2), n2 = be(t, i3.decimals);
    !i3.signed && n2.lt(Gn) && Vn("unsigned value cannot be negative", "overflow", "value", t);
    let o2 = null;
    i3.signed ? o2 = n2.toTwos(i3.width).toHexString() : (o2 = n2.toHexString(), o2 = oe(o2, i3.width / 8));
    const h3 = Mi(n2, i3.decimals);
    return new _Ut(mr, o2, h3, i3);
  }
  static fromBytes(t, r2) {
    r2 == null && (r2 = "fixed");
    const i3 = dr.from(r2);
    if (Ot(t).length > i3.width / 8)
      throw new Error("overflow");
    let n2 = V.from(t);
    i3.signed && (n2 = n2.fromTwos(i3.width));
    const o2 = n2.toTwos((i3.signed ? 0 : 1) + i3.width).toHexString(), h3 = Mi(n2, i3.decimals);
    return new _Ut(mr, o2, h3, i3);
  }
  static from(t, r2) {
    if (typeof t == "string")
      return _Ut.fromString(t, r2);
    if (ir(t))
      return _Ut.fromBytes(t, r2);
    try {
      return _Ut.fromValue(t, 0, r2);
    } catch (i3) {
      if (i3.code !== L.errors.INVALID_ARGUMENT)
        throw i3;
    }
    return Ht.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
};
var Wn = Ut.from(1);
var O0 = Ut.from("0.5");
var P0 = "strings/5.7.0";
var Xn = new L(P0);
var Or;
(function(e) {
  e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Or || (Or = {}));
var nr;
(function(e) {
  e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(nr || (nr = {}));
function D0(e, t, r2, i3, n2) {
  return Xn.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r2);
}
function Zn(e, t, r2, i3, n2) {
  if (e === nr.BAD_PREFIX || e === nr.UNEXPECTED_CONTINUE) {
    let o2 = 0;
    for (let h3 = t + 1; h3 < r2.length && r2[h3] >> 6 === 2; h3++)
      o2++;
    return o2;
  }
  return e === nr.OVERRUN ? r2.length - t - 1 : 0;
}
function F0(e, t, r2, i3, n2) {
  return e === nr.OVERLONG ? (i3.push(n2), 0) : (i3.push(65533), Zn(e, t, r2));
}
Object.freeze({ error: D0, ignore: Zn, replace: F0 });
function T0(e) {
  if (e.length % 4 !== 0)
    throw new Error("bad data");
  let t = [];
  for (let r2 = 0; r2 < e.length; r2 += 4)
    t.push(parseInt(e.substring(r2, r2 + 4), 16));
  return t;
}
function Si(e, t) {
  t || (t = function(n2) {
    return [parseInt(n2, 16)];
  });
  let r2 = 0, i3 = {};
  return e.split(",").forEach((n2) => {
    let o2 = n2.split(":");
    r2 += parseInt(o2[0], 16), i3[r2] = t(o2[1]);
  }), i3;
}
function $n(e) {
  let t = 0;
  return e.split(",").map((r2) => {
    let i3 = r2.split("-");
    i3.length === 1 ? i3[1] = "0" : i3[1] === "" && (i3[1] = "1");
    let n2 = t + parseInt(i3[0], 16);
    return t = parseInt(i3[1], 16), { l: n2, h: t };
  });
}
$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)), Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0), $n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
var tf = "hash/5.7.0";
function U0(e) {
  e = atob(e);
  const t = [];
  for (let r2 = 0; r2 < e.length; r2++)
    t.push(e.charCodeAt(r2));
  return Ot(t);
}
function ef(e, t) {
  t == null && (t = 1);
  const r2 = [], i3 = r2.forEach, n2 = function(o2, h3) {
    i3.call(o2, function(p2) {
      h3 > 0 && Array.isArray(p2) ? n2(p2, h3 - 1) : r2.push(p2);
    });
  };
  return n2(e, t), r2;
}
function k0(e) {
  const t = {};
  for (let r2 = 0; r2 < e.length; r2++) {
    const i3 = e[r2];
    t[i3[0]] = i3[1];
  }
  return t;
}
function q0(e) {
  let t = 0;
  function r2() {
    return e[t++] << 8 | e[t++];
  }
  let i3 = r2(), n2 = 1, o2 = [0, 1];
  for (let H = 1; H < i3; H++)
    o2.push(n2 += r2());
  let h3 = r2(), p2 = t;
  t += h3;
  let b2 = 0, m = 0;
  function w2() {
    return b2 == 0 && (m = m << 8 | e[t++], b2 = 8), m >> --b2 & 1;
  }
  const y5 = 31, S2 = Math.pow(2, y5), I = S2 >>> 1, N = I >> 1, C3 = S2 - 1;
  let F = 0;
  for (let H = 0; H < y5; H++)
    F = F << 1 | w2();
  let U3 = [], J2 = 0, Bt = S2;
  for (; ; ) {
    let H = Math.floor(((F - J2 + 1) * n2 - 1) / Bt), z3 = 0, Pt = i3;
    for (; Pt - z3 > 1; ) {
      let Yt = z3 + Pt >>> 1;
      H < o2[Yt] ? Pt = Yt : z3 = Yt;
    }
    if (z3 == 0)
      break;
    U3.push(z3);
    let W2 = J2 + Math.floor(Bt * o2[z3] / n2), Rt = J2 + Math.floor(Bt * o2[z3 + 1] / n2) - 1;
    for (; !((W2 ^ Rt) & I); )
      F = F << 1 & C3 | w2(), W2 = W2 << 1 & C3, Rt = Rt << 1 & C3 | 1;
    for (; W2 & ~Rt & N; )
      F = F & I | F << 1 & C3 >>> 1 | w2(), W2 = W2 << 1 ^ I, Rt = (Rt ^ I) << 1 | I | 1;
    J2 = W2, Bt = 1 + Rt - W2;
  }
  let G = i3 - 4;
  return U3.map((H) => {
    switch (H - G) {
      case 3:
        return G + 65792 + (e[p2++] << 16 | e[p2++] << 8 | e[p2++]);
      case 2:
        return G + 256 + (e[p2++] << 8 | e[p2++]);
      case 1:
        return G + e[p2++];
      default:
        return H - 1;
    }
  });
}
function K0(e) {
  let t = 0;
  return () => e[t++];
}
function H0(e) {
  return K0(q0(e));
}
function z0(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function L0(e, t) {
  let r2 = Array(e);
  for (let i3 = 0; i3 < e; i3++)
    r2[i3] = 1 + t();
  return r2;
}
function rf(e, t) {
  let r2 = Array(e);
  for (let i3 = 0, n2 = -1; i3 < e; i3++)
    r2[i3] = n2 += 1 + t();
  return r2;
}
function j0(e, t) {
  let r2 = Array(e);
  for (let i3 = 0, n2 = 0; i3 < e; i3++)
    r2[i3] = n2 += z0(t());
  return r2;
}
function Pr(e, t) {
  let r2 = rf(e(), e), i3 = e(), n2 = rf(i3, e), o2 = L0(i3, e);
  for (let h3 = 0; h3 < i3; h3++)
    for (let p2 = 0; p2 < o2[h3]; p2++)
      r2.push(n2[h3] + p2);
  return t ? r2.map((h3) => t[h3]) : r2;
}
function Q0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0)
      break;
    t.push(G0(r2, e));
  }
  for (; ; ) {
    let r2 = e() - 1;
    if (r2 < 0)
      break;
    t.push(Y0(r2, e));
  }
  return k0(ef(t));
}
function J0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0)
      break;
    t.push(r2);
  }
  return t;
}
function nf(e, t, r2) {
  let i3 = Array(e).fill(void 0).map(() => []);
  for (let n2 = 0; n2 < t; n2++)
    j0(e, r2).forEach((o2, h3) => i3[h3].push(o2));
  return i3;
}
function G0(e, t) {
  let r2 = 1 + t(), i3 = t(), n2 = J0(t), o2 = nf(n2.length, 1 + e, t);
  return ef(o2.map((h3, p2) => {
    const b2 = h3[0], m = h3.slice(1);
    return Array(n2[p2]).fill(void 0).map((w2, y5) => {
      let S2 = y5 * i3;
      return [b2 + y5 * r2, m.map((I) => I + S2)];
    });
  }));
}
function Y0(e, t) {
  let r2 = 1 + t();
  return nf(r2, 1 + e, t).map((n2) => [n2[0], n2.slice(1)]);
}
function V0(e) {
  let t = Pr(e).sort((i3, n2) => i3 - n2);
  return r2();
  function r2() {
    let i3 = [];
    for (; ; ) {
      let m = Pr(e, t);
      if (m.length == 0)
        break;
      i3.push({ set: new Set(m), node: r2() });
    }
    i3.sort((m, w2) => w2.set.size - m.set.size);
    let n2 = e(), o2 = n2 % 3;
    n2 = n2 / 3 | 0;
    let h3 = !!(n2 & 1);
    n2 >>= 1;
    let p2 = n2 == 1, b2 = n2 == 2;
    return { branches: i3, valid: o2, fe0f: h3, save: p2, check: b2 };
  }
}
function W0() {
  return H0(U0("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
var Dr = W0();
new Set(Pr(Dr)), new Set(Pr(Dr)), Q0(Dr), V0(Dr), new L(tf);
var X0 = new Uint8Array(32);
X0.fill(0);
var $0 = "rlp/5.7.0";
new L($0);
var ts = "address/5.7.0";
var Ar = new L(ts);
var es = 9007199254740991;
function rs(e) {
  return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
}
var Ni = {};
for (let e = 0; e < 10; e++)
  Ni[String(e)] = String(e);
for (let e = 0; e < 26; e++)
  Ni[String.fromCharCode(65 + e)] = String(10 + e);
var sf = Math.floor(rs(es));
var fs = "properties/5.7.0";
new L(fs);
new L(tf);
var os = new Uint8Array(32);
os.fill(0), V.from(-1);
var ss = V.from(0);
var as = V.from(1);
V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(as.toHexString(), 32), oe(ss.toHexString(), 32);
var se = {};
var Q = {};
var yr = af;
function af(e, t) {
  if (!e)
    throw new Error(t || "Assertion failed");
}
af.equal = function(t, r2, i3) {
  if (t != r2)
    throw new Error(i3 || "Assertion failed: " + t + " != " + r2);
};
var Ii = { exports: {} };
typeof Object.create == "function" ? Ii.exports = function(t, r2) {
  r2 && (t.super_ = r2, t.prototype = Object.create(r2.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Ii.exports = function(t, r2) {
  if (r2) {
    t.super_ = r2;
    var i3 = function() {
    };
    i3.prototype = r2.prototype, t.prototype = new i3(), t.prototype.constructor = t;
  }
};
var us = yr;
var hs = Ii.exports;
Q.inherits = hs;
function cs(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? false : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function ls(e, t) {
  if (Array.isArray(e))
    return e.slice();
  if (!e)
    return [];
  var r2 = [];
  if (typeof e == "string")
    if (t) {
      if (t === "hex")
        for (e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), n2 = 0; n2 < e.length; n2 += 2)
          r2.push(parseInt(e[n2] + e[n2 + 1], 16));
    } else
      for (var i3 = 0, n2 = 0; n2 < e.length; n2++) {
        var o2 = e.charCodeAt(n2);
        o2 < 128 ? r2[i3++] = o2 : o2 < 2048 ? (r2[i3++] = o2 >> 6 | 192, r2[i3++] = o2 & 63 | 128) : cs(e, n2) ? (o2 = 65536 + ((o2 & 1023) << 10) + (e.charCodeAt(++n2) & 1023), r2[i3++] = o2 >> 18 | 240, r2[i3++] = o2 >> 12 & 63 | 128, r2[i3++] = o2 >> 6 & 63 | 128, r2[i3++] = o2 & 63 | 128) : (r2[i3++] = o2 >> 12 | 224, r2[i3++] = o2 >> 6 & 63 | 128, r2[i3++] = o2 & 63 | 128);
      }
  else
    for (n2 = 0; n2 < e.length; n2++)
      r2[n2] = e[n2] | 0;
  return r2;
}
Q.toArray = ls;
function ds(e) {
  for (var t = "", r2 = 0; r2 < e.length; r2++)
    t += hf(e[r2].toString(16));
  return t;
}
Q.toHex = ds;
function uf(e) {
  var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
  return t >>> 0;
}
Q.htonl = uf;
function ps(e, t) {
  for (var r2 = "", i3 = 0; i3 < e.length; i3++) {
    var n2 = e[i3];
    t === "little" && (n2 = uf(n2)), r2 += cf(n2.toString(16));
  }
  return r2;
}
Q.toHex32 = ps;
function hf(e) {
  return e.length === 1 ? "0" + e : e;
}
Q.zero2 = hf;
function cf(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q.zero8 = cf;
function vs(e, t, r2, i3) {
  var n2 = r2 - t;
  us(n2 % 4 === 0);
  for (var o2 = new Array(n2 / 4), h3 = 0, p2 = t; h3 < o2.length; h3++, p2 += 4) {
    var b2;
    i3 === "big" ? b2 = e[p2] << 24 | e[p2 + 1] << 16 | e[p2 + 2] << 8 | e[p2 + 3] : b2 = e[p2 + 3] << 24 | e[p2 + 2] << 16 | e[p2 + 1] << 8 | e[p2], o2[h3] = b2 >>> 0;
  }
  return o2;
}
Q.join32 = vs;
function ms(e, t) {
  for (var r2 = new Array(e.length * 4), i3 = 0, n2 = 0; i3 < e.length; i3++, n2 += 4) {
    var o2 = e[i3];
    t === "big" ? (r2[n2] = o2 >>> 24, r2[n2 + 1] = o2 >>> 16 & 255, r2[n2 + 2] = o2 >>> 8 & 255, r2[n2 + 3] = o2 & 255) : (r2[n2 + 3] = o2 >>> 24, r2[n2 + 2] = o2 >>> 16 & 255, r2[n2 + 1] = o2 >>> 8 & 255, r2[n2] = o2 & 255);
  }
  return r2;
}
Q.split32 = ms;
function gs(e, t) {
  return e >>> t | e << 32 - t;
}
Q.rotr32 = gs;
function As(e, t) {
  return e << t | e >>> 32 - t;
}
Q.rotl32 = As;
function bs(e, t) {
  return e + t >>> 0;
}
Q.sum32 = bs;
function ys(e, t, r2) {
  return e + t + r2 >>> 0;
}
Q.sum32_3 = ys;
function ws(e, t, r2, i3) {
  return e + t + r2 + i3 >>> 0;
}
Q.sum32_4 = ws;
function xs(e, t, r2, i3, n2) {
  return e + t + r2 + i3 + n2 >>> 0;
}
Q.sum32_5 = xs;
function Ms(e, t, r2, i3) {
  var n2 = e[t], o2 = e[t + 1], h3 = i3 + o2 >>> 0, p2 = (h3 < i3 ? 1 : 0) + r2 + n2;
  e[t] = p2 >>> 0, e[t + 1] = h3;
}
Q.sum64 = Ms;
function Es(e, t, r2, i3) {
  var n2 = t + i3 >>> 0, o2 = (n2 < t ? 1 : 0) + e + r2;
  return o2 >>> 0;
}
Q.sum64_hi = Es;
function Ss(e, t, r2, i3) {
  var n2 = t + i3;
  return n2 >>> 0;
}
Q.sum64_lo = Ss;
function Ns(e, t, r2, i3, n2, o2, h3, p2) {
  var b2 = 0, m = t;
  m = m + i3 >>> 0, b2 += m < t ? 1 : 0, m = m + o2 >>> 0, b2 += m < o2 ? 1 : 0, m = m + p2 >>> 0, b2 += m < p2 ? 1 : 0;
  var w2 = e + r2 + n2 + h3 + b2;
  return w2 >>> 0;
}
Q.sum64_4_hi = Ns;
function Is(e, t, r2, i3, n2, o2, h3, p2) {
  var b2 = t + i3 + o2 + p2;
  return b2 >>> 0;
}
Q.sum64_4_lo = Is;
function _s(e, t, r2, i3, n2, o2, h3, p2, b2, m) {
  var w2 = 0, y5 = t;
  y5 = y5 + i3 >>> 0, w2 += y5 < t ? 1 : 0, y5 = y5 + o2 >>> 0, w2 += y5 < o2 ? 1 : 0, y5 = y5 + p2 >>> 0, w2 += y5 < p2 ? 1 : 0, y5 = y5 + m >>> 0, w2 += y5 < m ? 1 : 0;
  var S2 = e + r2 + n2 + h3 + b2 + w2;
  return S2 >>> 0;
}
Q.sum64_5_hi = _s;
function Bs(e, t, r2, i3, n2, o2, h3, p2, b2, m) {
  var w2 = t + i3 + o2 + p2 + m;
  return w2 >>> 0;
}
Q.sum64_5_lo = Bs;
function Cs(e, t, r2) {
  var i3 = t << 32 - r2 | e >>> r2;
  return i3 >>> 0;
}
Q.rotr64_hi = Cs;
function Rs(e, t, r2) {
  var i3 = e << 32 - r2 | t >>> r2;
  return i3 >>> 0;
}
Q.rotr64_lo = Rs;
function Os(e, t, r2) {
  return e >>> r2;
}
Q.shr64_hi = Os;
function Ps(e, t, r2) {
  var i3 = e << 32 - r2 | t >>> r2;
  return i3 >>> 0;
}
Q.shr64_lo = Ps;
var fr = {};
var lf = Q;
var Ds = yr;
function Fr() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr.BlockHash = Fr, Fr.prototype.update = function(t, r2) {
  if (t = lf.toArray(t, r2), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i3 = t.length % this._delta8;
    this.pending = t.slice(t.length - i3, t.length), this.pending.length === 0 && (this.pending = null), t = lf.join32(t, 0, t.length - i3, this.endian);
    for (var n2 = 0; n2 < t.length; n2 += this._delta32)
      this._update(t, n2, n2 + this._delta32);
  }
  return this;
}, Fr.prototype.digest = function(t) {
  return this.update(this._pad()), Ds(this.pending === null), this._digest(t);
}, Fr.prototype._pad = function() {
  var t = this.pendingTotal, r2 = this._delta8, i3 = r2 - (t + this.padLength) % r2, n2 = new Array(i3 + this.padLength);
  n2[0] = 128;
  for (var o2 = 1; o2 < i3; o2++)
    n2[o2] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var h3 = 8; h3 < this.padLength; h3++)
      n2[o2++] = 0;
    n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = t >>> 24 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t & 255;
  } else
    for (n2[o2++] = t & 255, n2[o2++] = t >>> 8 & 255, n2[o2++] = t >>> 16 & 255, n2[o2++] = t >>> 24 & 255, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, n2[o2++] = 0, h3 = 8; h3 < this.padLength; h3++)
      n2[o2++] = 0;
  return n2;
};
var or = {};
var ae = {};
var Fs = Q;
var ue = Fs.rotr32;
function Ts(e, t, r2, i3) {
  if (e === 0)
    return df(t, r2, i3);
  if (e === 1 || e === 3)
    return vf(t, r2, i3);
  if (e === 2)
    return pf(t, r2, i3);
}
ae.ft_1 = Ts;
function df(e, t, r2) {
  return e & t ^ ~e & r2;
}
ae.ch32 = df;
function pf(e, t, r2) {
  return e & t ^ e & r2 ^ t & r2;
}
ae.maj32 = pf;
function vf(e, t, r2) {
  return e ^ t ^ r2;
}
ae.p32 = vf;
function Us(e) {
  return ue(e, 2) ^ ue(e, 13) ^ ue(e, 22);
}
ae.s0_256 = Us;
function ks(e) {
  return ue(e, 6) ^ ue(e, 11) ^ ue(e, 25);
}
ae.s1_256 = ks;
function qs(e) {
  return ue(e, 7) ^ ue(e, 18) ^ e >>> 3;
}
ae.g0_256 = qs;
function Ks(e) {
  return ue(e, 17) ^ ue(e, 19) ^ e >>> 10;
}
ae.g1_256 = Ks;
var sr = Q;
var Hs = fr;
var zs = ae;
var _i = sr.rotl32;
var wr = sr.sum32;
var Ls = sr.sum32_5;
var js = zs.ft_1;
var mf = Hs.BlockHash;
var Qs = [1518500249, 1859775393, 2400959708, 3395469782];
function he() {
  if (!(this instanceof he))
    return new he();
  mf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
sr.inherits(he, mf);
var Js = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r2) {
  for (var i3 = this.W, n2 = 0; n2 < 16; n2++)
    i3[n2] = t[r2 + n2];
  for (; n2 < i3.length; n2++)
    i3[n2] = _i(i3[n2 - 3] ^ i3[n2 - 8] ^ i3[n2 - 14] ^ i3[n2 - 16], 1);
  var o2 = this.h[0], h3 = this.h[1], p2 = this.h[2], b2 = this.h[3], m = this.h[4];
  for (n2 = 0; n2 < i3.length; n2++) {
    var w2 = ~~(n2 / 20), y5 = Ls(_i(o2, 5), js(w2, h3, p2, b2), m, i3[n2], Qs[w2]);
    m = b2, b2 = p2, p2 = _i(h3, 30), h3 = o2, o2 = y5;
  }
  this.h[0] = wr(this.h[0], o2), this.h[1] = wr(this.h[1], h3), this.h[2] = wr(this.h[2], p2), this.h[3] = wr(this.h[3], b2), this.h[4] = wr(this.h[4], m);
}, he.prototype._digest = function(t) {
  return t === "hex" ? sr.toHex32(this.h, "big") : sr.split32(this.h, "big");
};
var ar = Q;
var Gs = fr;
var ur = ae;
var Ys = yr;
var ie = ar.sum32;
var Vs = ar.sum32_4;
var Ws = ar.sum32_5;
var Xs = ur.ch32;
var Zs = ur.maj32;
var $s = ur.s0_256;
var ta = ur.s1_256;
var ea = ur.g0_256;
var ra = ur.g1_256;
var gf = Gs.BlockHash;
var ia = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce() {
  if (!(this instanceof ce))
    return new ce();
  gf.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ia, this.W = new Array(64);
}
ar.inherits(ce, gf);
var Af = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r2) {
  for (var i3 = this.W, n2 = 0; n2 < 16; n2++)
    i3[n2] = t[r2 + n2];
  for (; n2 < i3.length; n2++)
    i3[n2] = Vs(ra(i3[n2 - 2]), i3[n2 - 7], ea(i3[n2 - 15]), i3[n2 - 16]);
  var o2 = this.h[0], h3 = this.h[1], p2 = this.h[2], b2 = this.h[3], m = this.h[4], w2 = this.h[5], y5 = this.h[6], S2 = this.h[7];
  for (Ys(this.k.length === i3.length), n2 = 0; n2 < i3.length; n2++) {
    var I = Ws(S2, ta(m), Xs(m, w2, y5), this.k[n2], i3[n2]), N = ie($s(o2), Zs(o2, h3, p2));
    S2 = y5, y5 = w2, w2 = m, m = ie(b2, I), b2 = p2, p2 = h3, h3 = o2, o2 = ie(I, N);
  }
  this.h[0] = ie(this.h[0], o2), this.h[1] = ie(this.h[1], h3), this.h[2] = ie(this.h[2], p2), this.h[3] = ie(this.h[3], b2), this.h[4] = ie(this.h[4], m), this.h[5] = ie(this.h[5], w2), this.h[6] = ie(this.h[6], y5), this.h[7] = ie(this.h[7], S2);
}, ce.prototype._digest = function(t) {
  return t === "hex" ? ar.toHex32(this.h, "big") : ar.split32(this.h, "big");
};
var Bi = Q;
var bf = Af;
function ye() {
  if (!(this instanceof ye))
    return new ye();
  bf.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Bi.inherits(ye, bf);
var na = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
  return t === "hex" ? Bi.toHex32(this.h.slice(0, 7), "big") : Bi.split32(this.h.slice(0, 7), "big");
};
var jt = Q;
var fa = fr;
var oa = yr;
var le = jt.rotr64_hi;
var de = jt.rotr64_lo;
var yf = jt.shr64_hi;
var wf = jt.shr64_lo;
var Be = jt.sum64;
var Ci = jt.sum64_hi;
var Ri = jt.sum64_lo;
var sa = jt.sum64_4_hi;
var aa = jt.sum64_4_lo;
var ua = jt.sum64_5_hi;
var ha = jt.sum64_5_lo;
var xf = fa.BlockHash;
var ca = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne() {
  if (!(this instanceof ne))
    return new ne();
  xf.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = ca, this.W = new Array(160);
}
jt.inherits(ne, xf);
var Mf = ne;
ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t, r2) {
  for (var i3 = this.W, n2 = 0; n2 < 32; n2++)
    i3[n2] = t[r2 + n2];
  for (; n2 < i3.length; n2 += 2) {
    var o2 = xa(i3[n2 - 4], i3[n2 - 3]), h3 = Ma(i3[n2 - 4], i3[n2 - 3]), p2 = i3[n2 - 14], b2 = i3[n2 - 13], m = ya(i3[n2 - 30], i3[n2 - 29]), w2 = wa(i3[n2 - 30], i3[n2 - 29]), y5 = i3[n2 - 32], S2 = i3[n2 - 31];
    i3[n2] = sa(o2, h3, p2, b2, m, w2, y5, S2), i3[n2 + 1] = aa(o2, h3, p2, b2, m, w2, y5, S2);
  }
}, ne.prototype._update = function(t, r2) {
  this._prepareBlock(t, r2);
  var i3 = this.W, n2 = this.h[0], o2 = this.h[1], h3 = this.h[2], p2 = this.h[3], b2 = this.h[4], m = this.h[5], w2 = this.h[6], y5 = this.h[7], S2 = this.h[8], I = this.h[9], N = this.h[10], C3 = this.h[11], F = this.h[12], U3 = this.h[13], J2 = this.h[14], Bt = this.h[15];
  oa(this.k.length === i3.length);
  for (var G = 0; G < i3.length; G += 2) {
    var H = J2, z3 = Bt, Pt = Aa(S2, I), W2 = ba(S2, I), Rt = la(S2, I, N, C3, F), Yt = da(S2, I, N, C3, F, U3), Y = this.k[G], Vt2 = this.k[G + 1], A4 = i3[G], f4 = i3[G + 1], a2 = ua(H, z3, Pt, W2, Rt, Yt, Y, Vt2, A4, f4), c2 = ha(H, z3, Pt, W2, Rt, Yt, Y, Vt2, A4, f4);
    H = ma(n2, o2), z3 = ga(n2, o2), Pt = pa(n2, o2, h3, p2, b2), W2 = va(n2, o2, h3, p2, b2, m);
    var d2 = Ci(H, z3, Pt, W2), g2 = Ri(H, z3, Pt, W2);
    J2 = F, Bt = U3, F = N, U3 = C3, N = S2, C3 = I, S2 = Ci(w2, y5, a2, c2), I = Ri(y5, y5, a2, c2), w2 = b2, y5 = m, b2 = h3, m = p2, h3 = n2, p2 = o2, n2 = Ci(a2, c2, d2, g2), o2 = Ri(a2, c2, d2, g2);
  }
  Be(this.h, 0, n2, o2), Be(this.h, 2, h3, p2), Be(this.h, 4, b2, m), Be(this.h, 6, w2, y5), Be(this.h, 8, S2, I), Be(this.h, 10, N, C3), Be(this.h, 12, F, U3), Be(this.h, 14, J2, Bt);
}, ne.prototype._digest = function(t) {
  return t === "hex" ? jt.toHex32(this.h, "big") : jt.split32(this.h, "big");
};
function la(e, t, r2, i3, n2) {
  var o2 = e & r2 ^ ~e & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function da(e, t, r2, i3, n2, o2) {
  var h3 = t & i3 ^ ~t & o2;
  return h3 < 0 && (h3 += 4294967296), h3;
}
function pa(e, t, r2, i3, n2) {
  var o2 = e & r2 ^ e & n2 ^ r2 & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function va(e, t, r2, i3, n2, o2) {
  var h3 = t & i3 ^ t & o2 ^ i3 & o2;
  return h3 < 0 && (h3 += 4294967296), h3;
}
function ma(e, t) {
  var r2 = le(e, t, 28), i3 = le(t, e, 2), n2 = le(t, e, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ga(e, t) {
  var r2 = de(e, t, 28), i3 = de(t, e, 2), n2 = de(t, e, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Aa(e, t) {
  var r2 = le(e, t, 14), i3 = le(e, t, 18), n2 = le(t, e, 9), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ba(e, t) {
  var r2 = de(e, t, 14), i3 = de(e, t, 18), n2 = de(t, e, 9), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function ya(e, t) {
  var r2 = le(e, t, 1), i3 = le(e, t, 8), n2 = yf(e, t, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function wa(e, t) {
  var r2 = de(e, t, 1), i3 = de(e, t, 8), n2 = wf(e, t, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function xa(e, t) {
  var r2 = le(e, t, 19), i3 = le(t, e, 29), n2 = yf(e, t, 6), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ma(e, t) {
  var r2 = de(e, t, 19), i3 = de(t, e, 29), n2 = wf(e, t, 6), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
var Oi = Q;
var Ef = Mf;
function we() {
  if (!(this instanceof we))
    return new we();
  Ef.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
Oi.inherits(we, Ef);
var Ea = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
  return t === "hex" ? Oi.toHex32(this.h.slice(0, 12), "big") : Oi.split32(this.h.slice(0, 12), "big");
}, or.sha1 = Js, or.sha224 = na, or.sha256 = Af, or.sha384 = Ea, or.sha512 = Mf;
var Sf = {};
var Xe = Q;
var Sa = fr;
var Tr = Xe.rotl32;
var Nf = Xe.sum32;
var xr = Xe.sum32_3;
var If = Xe.sum32_4;
var _f = Sa.BlockHash;
function pe() {
  if (!(this instanceof pe))
    return new pe();
  _f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe.inherits(pe, _f), Sf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, r2) {
  for (var i3 = this.h[0], n2 = this.h[1], o2 = this.h[2], h3 = this.h[3], p2 = this.h[4], b2 = i3, m = n2, w2 = o2, y5 = h3, S2 = p2, I = 0; I < 80; I++) {
    var N = Nf(Tr(If(i3, Bf(I, n2, o2, h3), t[_a[I] + r2], Na(I)), Ca[I]), p2);
    i3 = p2, p2 = h3, h3 = Tr(o2, 10), o2 = n2, n2 = N, N = Nf(Tr(If(b2, Bf(79 - I, m, w2, y5), t[Ba[I] + r2], Ia(I)), Ra[I]), S2), b2 = S2, S2 = y5, y5 = Tr(w2, 10), w2 = m, m = N;
  }
  N = xr(this.h[1], o2, y5), this.h[1] = xr(this.h[2], h3, S2), this.h[2] = xr(this.h[3], p2, b2), this.h[3] = xr(this.h[4], i3, m), this.h[4] = xr(this.h[0], n2, w2), this.h[0] = N;
}, pe.prototype._digest = function(t) {
  return t === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Bf(e, t, r2, i3) {
  return e <= 15 ? t ^ r2 ^ i3 : e <= 31 ? t & r2 | ~t & i3 : e <= 47 ? (t | ~r2) ^ i3 : e <= 63 ? t & i3 | r2 & ~i3 : t ^ (r2 | ~i3);
}
function Na(e) {
  return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function Ia(e) {
  return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var _a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
var Ba = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
var Ca = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
var Ra = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
var Oa = Q;
var Pa = yr;
function hr(e, t, r2) {
  if (!(this instanceof hr))
    return new hr(e, t, r2);
  this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(Oa.toArray(t, r2));
}
var Da = hr;
hr.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa(t.length <= this.blockSize);
  for (var r2 = t.length; r2 < this.blockSize; r2++)
    t.push(0);
  for (r2 = 0; r2 < t.length; r2++)
    t[r2] ^= 54;
  for (this.inner = new this.Hash().update(t), r2 = 0; r2 < t.length; r2++)
    t[r2] ^= 106;
  this.outer = new this.Hash().update(t);
}, hr.prototype.update = function(t, r2) {
  return this.inner.update(t, r2), this;
}, hr.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
  var t = e;
  t.utils = Q, t.common = fr, t.sha = or, t.ripemd = Sf, t.hmac = Da, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function cr(e, t, r2) {
  return r2 = { path: t, exports: {}, require: function(i3, n2) {
    return Fa(i3, n2 ?? r2.path);
  } }, e(r2, r2.exports), r2.exports;
}
function Fa() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi = Cf;
function Cf(e, t) {
  if (!e)
    throw new Error(t || "Assertion failed");
}
Cf.equal = function(t, r2, i3) {
  if (t != r2)
    throw new Error(i3 || "Assertion failed: " + t + " != " + r2);
};
var fe = cr(function(e, t) {
  var r2 = t;
  function i3(h3, p2) {
    if (Array.isArray(h3))
      return h3.slice();
    if (!h3)
      return [];
    var b2 = [];
    if (typeof h3 != "string") {
      for (var m = 0; m < h3.length; m++)
        b2[m] = h3[m] | 0;
      return b2;
    }
    if (p2 === "hex") {
      h3 = h3.replace(/[^a-z0-9]+/ig, ""), h3.length % 2 !== 0 && (h3 = "0" + h3);
      for (var m = 0; m < h3.length; m += 2)
        b2.push(parseInt(h3[m] + h3[m + 1], 16));
    } else
      for (var m = 0; m < h3.length; m++) {
        var w2 = h3.charCodeAt(m), y5 = w2 >> 8, S2 = w2 & 255;
        y5 ? b2.push(y5, S2) : b2.push(S2);
      }
    return b2;
  }
  r2.toArray = i3;
  function n2(h3) {
    return h3.length === 1 ? "0" + h3 : h3;
  }
  r2.zero2 = n2;
  function o2(h3) {
    for (var p2 = "", b2 = 0; b2 < h3.length; b2++)
      p2 += n2(h3[b2].toString(16));
    return p2;
  }
  r2.toHex = o2, r2.encode = function(p2, b2) {
    return b2 === "hex" ? o2(p2) : p2;
  };
});
var Jt = cr(function(e, t) {
  var r2 = t;
  r2.assert = Pi, r2.toArray = fe.toArray, r2.zero2 = fe.zero2, r2.toHex = fe.toHex, r2.encode = fe.encode;
  function i3(b2, m, w2) {
    var y5 = new Array(Math.max(b2.bitLength(), w2) + 1);
    y5.fill(0);
    for (var S2 = 1 << m + 1, I = b2.clone(), N = 0; N < y5.length; N++) {
      var C3, F = I.andln(S2 - 1);
      I.isOdd() ? (F > (S2 >> 1) - 1 ? C3 = (S2 >> 1) - F : C3 = F, I.isubn(C3)) : C3 = 0, y5[N] = C3, I.iushrn(1);
    }
    return y5;
  }
  r2.getNAF = i3;
  function n2(b2, m) {
    var w2 = [[], []];
    b2 = b2.clone(), m = m.clone();
    for (var y5 = 0, S2 = 0, I; b2.cmpn(-y5) > 0 || m.cmpn(-S2) > 0; ) {
      var N = b2.andln(3) + y5 & 3, C3 = m.andln(3) + S2 & 3;
      N === 3 && (N = -1), C3 === 3 && (C3 = -1);
      var F;
      N & 1 ? (I = b2.andln(7) + y5 & 7, (I === 3 || I === 5) && C3 === 2 ? F = -N : F = N) : F = 0, w2[0].push(F);
      var U3;
      C3 & 1 ? (I = m.andln(7) + S2 & 7, (I === 3 || I === 5) && N === 2 ? U3 = -C3 : U3 = C3) : U3 = 0, w2[1].push(U3), 2 * y5 === F + 1 && (y5 = 1 - y5), 2 * S2 === U3 + 1 && (S2 = 1 - S2), b2.iushrn(1), m.iushrn(1);
    }
    return w2;
  }
  r2.getJSF = n2;
  function o2(b2, m, w2) {
    var y5 = "_" + m;
    b2.prototype[m] = function() {
      return this[y5] !== void 0 ? this[y5] : this[y5] = w2.call(this);
    };
  }
  r2.cachedProperty = o2;
  function h3(b2) {
    return typeof b2 == "string" ? r2.toArray(b2, "hex") : b2;
  }
  r2.parseBytes = h3;
  function p2(b2) {
    return new K(b2, "hex", "le");
  }
  r2.intFromLE = p2;
});
var Ur = Jt.getNAF;
var Ta = Jt.getJSF;
var kr = Jt.assert;
function Ce(e, t) {
  this.type = e, this.p = new K(t.p, 16), this.red = t.prime ? K.red(t.prime) : K.mont(this.p), this.zero = new K(0).toRed(this.red), this.one = new K(1).toRed(this.red), this.two = new K(2).toRed(this.red), this.n = t.n && new K(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r2 = this.n && this.p.div(this.n);
  !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var Ze = Ce;
Ce.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r2) {
  kr(t.precomputed);
  var i3 = t._getDoubles(), n2 = Ur(r2, 1, this._bitLength), o2 = (1 << i3.step + 1) - (i3.step % 2 === 0 ? 2 : 1);
  o2 /= 3;
  var h3 = [], p2, b2;
  for (p2 = 0; p2 < n2.length; p2 += i3.step) {
    b2 = 0;
    for (var m = p2 + i3.step - 1; m >= p2; m--)
      b2 = (b2 << 1) + n2[m];
    h3.push(b2);
  }
  for (var w2 = this.jpoint(null, null, null), y5 = this.jpoint(null, null, null), S2 = o2; S2 > 0; S2--) {
    for (p2 = 0; p2 < h3.length; p2++)
      b2 = h3[p2], b2 === S2 ? y5 = y5.mixedAdd(i3.points[p2]) : b2 === -S2 && (y5 = y5.mixedAdd(i3.points[p2].neg()));
    w2 = w2.add(y5);
  }
  return w2.toP();
}, Ce.prototype._wnafMul = function(t, r2) {
  var i3 = 4, n2 = t._getNAFPoints(i3);
  i3 = n2.wnd;
  for (var o2 = n2.points, h3 = Ur(r2, i3, this._bitLength), p2 = this.jpoint(null, null, null), b2 = h3.length - 1; b2 >= 0; b2--) {
    for (var m = 0; b2 >= 0 && h3[b2] === 0; b2--)
      m++;
    if (b2 >= 0 && m++, p2 = p2.dblp(m), b2 < 0)
      break;
    var w2 = h3[b2];
    kr(w2 !== 0), t.type === "affine" ? w2 > 0 ? p2 = p2.mixedAdd(o2[w2 - 1 >> 1]) : p2 = p2.mixedAdd(o2[-w2 - 1 >> 1].neg()) : w2 > 0 ? p2 = p2.add(o2[w2 - 1 >> 1]) : p2 = p2.add(o2[-w2 - 1 >> 1].neg());
  }
  return t.type === "affine" ? p2.toP() : p2;
}, Ce.prototype._wnafMulAdd = function(t, r2, i3, n2, o2) {
  var h3 = this._wnafT1, p2 = this._wnafT2, b2 = this._wnafT3, m = 0, w2, y5, S2;
  for (w2 = 0; w2 < n2; w2++) {
    S2 = r2[w2];
    var I = S2._getNAFPoints(t);
    h3[w2] = I.wnd, p2[w2] = I.points;
  }
  for (w2 = n2 - 1; w2 >= 1; w2 -= 2) {
    var N = w2 - 1, C3 = w2;
    if (h3[N] !== 1 || h3[C3] !== 1) {
      b2[N] = Ur(i3[N], h3[N], this._bitLength), b2[C3] = Ur(i3[C3], h3[C3], this._bitLength), m = Math.max(b2[N].length, m), m = Math.max(b2[C3].length, m);
      continue;
    }
    var F = [r2[N], null, null, r2[C3]];
    r2[N].y.cmp(r2[C3].y) === 0 ? (F[1] = r2[N].add(r2[C3]), F[2] = r2[N].toJ().mixedAdd(r2[C3].neg())) : r2[N].y.cmp(r2[C3].y.redNeg()) === 0 ? (F[1] = r2[N].toJ().mixedAdd(r2[C3]), F[2] = r2[N].add(r2[C3].neg())) : (F[1] = r2[N].toJ().mixedAdd(r2[C3]), F[2] = r2[N].toJ().mixedAdd(r2[C3].neg()));
    var U3 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J2 = Ta(i3[N], i3[C3]);
    for (m = Math.max(J2[0].length, m), b2[N] = new Array(m), b2[C3] = new Array(m), y5 = 0; y5 < m; y5++) {
      var Bt = J2[0][y5] | 0, G = J2[1][y5] | 0;
      b2[N][y5] = U3[(Bt + 1) * 3 + (G + 1)], b2[C3][y5] = 0, p2[N] = F;
    }
  }
  var H = this.jpoint(null, null, null), z3 = this._wnafT4;
  for (w2 = m; w2 >= 0; w2--) {
    for (var Pt = 0; w2 >= 0; ) {
      var W2 = true;
      for (y5 = 0; y5 < n2; y5++)
        z3[y5] = b2[y5][w2] | 0, z3[y5] !== 0 && (W2 = false);
      if (!W2)
        break;
      Pt++, w2--;
    }
    if (w2 >= 0 && Pt++, H = H.dblp(Pt), w2 < 0)
      break;
    for (y5 = 0; y5 < n2; y5++) {
      var Rt = z3[y5];
      Rt !== 0 && (Rt > 0 ? S2 = p2[y5][Rt - 1 >> 1] : Rt < 0 && (S2 = p2[y5][-Rt - 1 >> 1].neg()), S2.type === "affine" ? H = H.mixedAdd(S2) : H = H.add(S2));
    }
  }
  for (w2 = 0; w2 < n2; w2++)
    p2[w2] = null;
  return o2 ? H : H.toP();
};
function Xt(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Xt, Xt.prototype.eq = function() {
  throw new Error("Not implemented");
}, Xt.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r2) {
  t = Jt.toArray(t, r2);
  var i3 = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i3) {
    t[0] === 6 ? kr(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr(t[t.length - 1] % 2 === 1);
    var n2 = this.point(t.slice(1, 1 + i3), t.slice(1 + i3, 1 + 2 * i3));
    return n2;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i3)
    return this.pointFromX(t.slice(1, 1 + i3), t[0] === 3);
  throw new Error("Unknown point format");
}, Xt.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Xt.prototype._encode = function(t) {
  var r2 = this.curve.p.byteLength(), i3 = this.getX().toArray("be", r2);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i3) : [4].concat(i3, this.getY().toArray("be", r2));
}, Xt.prototype.encode = function(t, r2) {
  return Jt.encode(this._encode(r2), t);
}, Xt.prototype.precompute = function(t) {
  if (this.precomputed)
    return this;
  var r2 = { doubles: null, naf: null, beta: null };
  return r2.naf = this._getNAFPoints(8), r2.doubles = this._getDoubles(4, t), r2.beta = this._getBeta(), this.precomputed = r2, this;
}, Xt.prototype._hasDoubles = function(t) {
  if (!this.precomputed)
    return false;
  var r2 = this.precomputed.doubles;
  return r2 ? r2.points.length >= Math.ceil((t.bitLength() + 1) / r2.step) : false;
}, Xt.prototype._getDoubles = function(t, r2) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var i3 = [this], n2 = this, o2 = 0; o2 < r2; o2 += t) {
    for (var h3 = 0; h3 < t; h3++)
      n2 = n2.dbl();
    i3.push(n2);
  }
  return { step: t, points: i3 };
}, Xt.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var r2 = [this], i3 = (1 << t) - 1, n2 = i3 === 1 ? null : this.dbl(), o2 = 1; o2 < i3; o2++)
    r2[o2] = r2[o2 - 1].add(n2);
  return { wnd: t, points: r2 };
}, Xt.prototype._getBeta = function() {
  return null;
}, Xt.prototype.dblp = function(t) {
  for (var r2 = this, i3 = 0; i3 < t; i3++)
    r2 = r2.dbl();
  return r2;
};
var Di = cr(function(e) {
  typeof Object.create == "function" ? e.exports = function(r2, i3) {
    i3 && (r2.super_ = i3, r2.prototype = Object.create(i3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }));
  } : e.exports = function(r2, i3) {
    if (i3) {
      r2.super_ = i3;
      var n2 = function() {
      };
      n2.prototype = i3.prototype, r2.prototype = new n2(), r2.prototype.constructor = r2;
    }
  };
});
var Ua = Jt.assert;
function Zt(e) {
  Ze.call(this, "short", e), this.a = new K(e.a, 16).toRed(this.red), this.b = new K(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di(Zt, Ze);
var ka = Zt;
Zt.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r2, i3;
    if (t.beta)
      r2 = new K(t.beta, 16).toRed(this.red);
    else {
      var n2 = this._getEndoRoots(this.p);
      r2 = n2[0].cmp(n2[1]) < 0 ? n2[0] : n2[1], r2 = r2.toRed(this.red);
    }
    if (t.lambda)
      i3 = new K(t.lambda, 16);
    else {
      var o2 = this._getEndoRoots(this.n);
      this.g.mul(o2[0]).x.cmp(this.g.x.redMul(r2)) === 0 ? i3 = o2[0] : (i3 = o2[1], Ua(this.g.mul(i3).x.cmp(this.g.x.redMul(r2)) === 0));
    }
    var h3;
    return t.basis ? h3 = t.basis.map(function(p2) {
      return { a: new K(p2.a, 16), b: new K(p2.b, 16) };
    }) : h3 = this._getEndoBasis(i3), { beta: r2, lambda: i3, basis: h3 };
  }
}, Zt.prototype._getEndoRoots = function(t) {
  var r2 = t === this.p ? this.red : K.mont(t), i3 = new K(2).toRed(r2).redInvm(), n2 = i3.redNeg(), o2 = new K(3).toRed(r2).redNeg().redSqrt().redMul(i3), h3 = n2.redAdd(o2).fromRed(), p2 = n2.redSub(o2).fromRed();
  return [h3, p2];
}, Zt.prototype._getEndoBasis = function(t) {
  for (var r2 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i3 = t, n2 = this.n.clone(), o2 = new K(1), h3 = new K(0), p2 = new K(0), b2 = new K(1), m, w2, y5, S2, I, N, C3, F = 0, U3, J2; i3.cmpn(0) !== 0; ) {
    var Bt = n2.div(i3);
    U3 = n2.sub(Bt.mul(i3)), J2 = p2.sub(Bt.mul(o2));
    var G = b2.sub(Bt.mul(h3));
    if (!y5 && U3.cmp(r2) < 0)
      m = C3.neg(), w2 = o2, y5 = U3.neg(), S2 = J2;
    else if (y5 && ++F === 2)
      break;
    C3 = U3, n2 = i3, i3 = U3, p2 = o2, o2 = J2, b2 = h3, h3 = G;
  }
  I = U3.neg(), N = J2;
  var H = y5.sqr().add(S2.sqr()), z3 = I.sqr().add(N.sqr());
  return z3.cmp(H) >= 0 && (I = m, N = w2), y5.negative && (y5 = y5.neg(), S2 = S2.neg()), I.negative && (I = I.neg(), N = N.neg()), [{ a: y5, b: S2 }, { a: I, b: N }];
}, Zt.prototype._endoSplit = function(t) {
  var r2 = this.endo.basis, i3 = r2[0], n2 = r2[1], o2 = n2.b.mul(t).divRound(this.n), h3 = i3.b.neg().mul(t).divRound(this.n), p2 = o2.mul(i3.a), b2 = h3.mul(n2.a), m = o2.mul(i3.b), w2 = h3.mul(n2.b), y5 = t.sub(p2).sub(b2), S2 = m.add(w2).neg();
  return { k1: y5, k2: S2 };
}, Zt.prototype.pointFromX = function(t, r2) {
  t = new K(t, 16), t.red || (t = t.toRed(this.red));
  var i3 = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n2 = i3.redSqrt();
  if (n2.redSqr().redSub(i3).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var o2 = n2.fromRed().isOdd();
  return (r2 && !o2 || !r2 && o2) && (n2 = n2.redNeg()), this.point(t, n2);
}, Zt.prototype.validate = function(t) {
  if (t.inf)
    return true;
  var r2 = t.x, i3 = t.y, n2 = this.a.redMul(r2), o2 = r2.redSqr().redMul(r2).redIAdd(n2).redIAdd(this.b);
  return i3.redSqr().redISub(o2).cmpn(0) === 0;
}, Zt.prototype._endoWnafMulAdd = function(t, r2, i3) {
  for (var n2 = this._endoWnafT1, o2 = this._endoWnafT2, h3 = 0; h3 < t.length; h3++) {
    var p2 = this._endoSplit(r2[h3]), b2 = t[h3], m = b2._getBeta();
    p2.k1.negative && (p2.k1.ineg(), b2 = b2.neg(true)), p2.k2.negative && (p2.k2.ineg(), m = m.neg(true)), n2[h3 * 2] = b2, n2[h3 * 2 + 1] = m, o2[h3 * 2] = p2.k1, o2[h3 * 2 + 1] = p2.k2;
  }
  for (var w2 = this._wnafMulAdd(1, n2, o2, h3 * 2, i3), y5 = 0; y5 < h3 * 2; y5++)
    n2[y5] = null, o2[y5] = null;
  return w2;
};
function Ft(e, t, r2, i3) {
  Ze.BasePoint.call(this, e, "affine"), t === null && r2 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K(t, 16), this.y = new K(r2, 16), i3 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Di(Ft, Ze.BasePoint), Zt.prototype.point = function(t, r2, i3) {
  return new Ft(this, t, r2, i3);
}, Zt.prototype.pointFromJSON = function(t, r2) {
  return Ft.fromJSON(this, t, r2);
}, Ft.prototype._getBeta = function() {
  if (this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta)
      return t.beta;
    var r2 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var i3 = this.curve, n2 = function(o2) {
        return i3.point(o2.x.redMul(i3.endo.beta), o2.y);
      };
      t.beta = r2, r2.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n2) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n2) } };
    }
    return r2;
  }
}, Ft.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Ft.fromJSON = function(t, r2, i3) {
  typeof r2 == "string" && (r2 = JSON.parse(r2));
  var n2 = t.point(r2[0], r2[1], i3);
  if (!r2[2])
    return n2;
  function o2(p2) {
    return t.point(p2[0], p2[1], i3);
  }
  var h3 = r2[2];
  return n2.precomputed = { beta: null, doubles: h3.doubles && { step: h3.doubles.step, points: [n2].concat(h3.doubles.points.map(o2)) }, naf: h3.naf && { wnd: h3.naf.wnd, points: [n2].concat(h3.naf.points.map(o2)) } }, n2;
}, Ft.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
  return this.inf;
}, Ft.prototype.add = function(t) {
  if (this.inf)
    return t;
  if (t.inf)
    return this;
  if (this.eq(t))
    return this.dbl();
  if (this.neg().eq(t))
    return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0)
    return this.curve.point(null, null);
  var r2 = this.y.redSub(t.y);
  r2.cmpn(0) !== 0 && (r2 = r2.redMul(this.x.redSub(t.x).redInvm()));
  var i3 = r2.redSqr().redISub(this.x).redISub(t.x), n2 = r2.redMul(this.x.redSub(i3)).redISub(this.y);
  return this.curve.point(i3, n2);
}, Ft.prototype.dbl = function() {
  if (this.inf)
    return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0)
    return this.curve.point(null, null);
  var r2 = this.curve.a, i3 = this.x.redSqr(), n2 = t.redInvm(), o2 = i3.redAdd(i3).redIAdd(i3).redIAdd(r2).redMul(n2), h3 = o2.redSqr().redISub(this.x.redAdd(this.x)), p2 = o2.redMul(this.x.redSub(h3)).redISub(this.y);
  return this.curve.point(h3, p2);
}, Ft.prototype.getX = function() {
  return this.x.fromRed();
}, Ft.prototype.getY = function() {
  return this.y.fromRed();
}, Ft.prototype.mul = function(t) {
  return t = new K(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Ft.prototype.mulAdd = function(t, r2, i3) {
  var n2 = [this, r2], o2 = [t, i3];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2) : this.curve._wnafMulAdd(1, n2, o2, 2);
}, Ft.prototype.jmulAdd = function(t, r2, i3) {
  var n2 = [this, r2], o2 = [t, i3];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2, true) : this.curve._wnafMulAdd(1, n2, o2, 2, true);
}, Ft.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft.prototype.neg = function(t) {
  if (this.inf)
    return this;
  var r2 = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var i3 = this.precomputed, n2 = function(o2) {
      return o2.neg();
    };
    r2.precomputed = { naf: i3.naf && { wnd: i3.naf.wnd, points: i3.naf.points.map(n2) }, doubles: i3.doubles && { step: i3.doubles.step, points: i3.doubles.points.map(n2) } };
  }
  return r2;
}, Ft.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Tt(e, t, r2, i3) {
  Ze.BasePoint.call(this, e, "jacobian"), t === null && r2 === null && i3 === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K(0)) : (this.x = new K(t, 16), this.y = new K(r2, 16), this.z = new K(i3, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di(Tt, Ze.BasePoint), Zt.prototype.jpoint = function(t, r2, i3) {
  return new Tt(this, t, r2, i3);
}, Tt.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var t = this.z.redInvm(), r2 = t.redSqr(), i3 = this.x.redMul(r2), n2 = this.y.redMul(r2).redMul(t);
  return this.curve.point(i3, n2);
}, Tt.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt.prototype.add = function(t) {
  if (this.isInfinity())
    return t;
  if (t.isInfinity())
    return this;
  var r2 = t.z.redSqr(), i3 = this.z.redSqr(), n2 = this.x.redMul(r2), o2 = t.x.redMul(i3), h3 = this.y.redMul(r2.redMul(t.z)), p2 = t.y.redMul(i3.redMul(this.z)), b2 = n2.redSub(o2), m = h3.redSub(p2);
  if (b2.cmpn(0) === 0)
    return m.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w2 = b2.redSqr(), y5 = w2.redMul(b2), S2 = n2.redMul(w2), I = m.redSqr().redIAdd(y5).redISub(S2).redISub(S2), N = m.redMul(S2.redISub(I)).redISub(h3.redMul(y5)), C3 = this.z.redMul(t.z).redMul(b2);
  return this.curve.jpoint(I, N, C3);
}, Tt.prototype.mixedAdd = function(t) {
  if (this.isInfinity())
    return t.toJ();
  if (t.isInfinity())
    return this;
  var r2 = this.z.redSqr(), i3 = this.x, n2 = t.x.redMul(r2), o2 = this.y, h3 = t.y.redMul(r2).redMul(this.z), p2 = i3.redSub(n2), b2 = o2.redSub(h3);
  if (p2.cmpn(0) === 0)
    return b2.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m = p2.redSqr(), w2 = m.redMul(p2), y5 = i3.redMul(m), S2 = b2.redSqr().redIAdd(w2).redISub(y5).redISub(y5), I = b2.redMul(y5.redISub(S2)).redISub(o2.redMul(w2)), N = this.z.redMul(p2);
  return this.curve.jpoint(S2, I, N);
}, Tt.prototype.dblp = function(t) {
  if (t === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!t)
    return this.dbl();
  var r2;
  if (this.curve.zeroA || this.curve.threeA) {
    var i3 = this;
    for (r2 = 0; r2 < t; r2++)
      i3 = i3.dbl();
    return i3;
  }
  var n2 = this.curve.a, o2 = this.curve.tinv, h3 = this.x, p2 = this.y, b2 = this.z, m = b2.redSqr().redSqr(), w2 = p2.redAdd(p2);
  for (r2 = 0; r2 < t; r2++) {
    var y5 = h3.redSqr(), S2 = w2.redSqr(), I = S2.redSqr(), N = y5.redAdd(y5).redIAdd(y5).redIAdd(n2.redMul(m)), C3 = h3.redMul(S2), F = N.redSqr().redISub(C3.redAdd(C3)), U3 = C3.redISub(F), J2 = N.redMul(U3);
    J2 = J2.redIAdd(J2).redISub(I);
    var Bt = w2.redMul(b2);
    r2 + 1 < t && (m = m.redMul(I)), h3 = F, b2 = Bt, w2 = J2;
  }
  return this.curve.jpoint(h3, w2.redMul(o2), b2);
}, Tt.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt.prototype._zeroDbl = function() {
  var t, r2, i3;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h3 = o2.redSqr(), p2 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h3);
    p2 = p2.redIAdd(p2);
    var b2 = n2.redAdd(n2).redIAdd(n2), m = b2.redSqr().redISub(p2).redISub(p2), w2 = h3.redIAdd(h3);
    w2 = w2.redIAdd(w2), w2 = w2.redIAdd(w2), t = m, r2 = b2.redMul(p2.redISub(m)).redISub(w2), i3 = this.y.redAdd(this.y);
  } else {
    var y5 = this.x.redSqr(), S2 = this.y.redSqr(), I = S2.redSqr(), N = this.x.redAdd(S2).redSqr().redISub(y5).redISub(I);
    N = N.redIAdd(N);
    var C3 = y5.redAdd(y5).redIAdd(y5), F = C3.redSqr(), U3 = I.redIAdd(I);
    U3 = U3.redIAdd(U3), U3 = U3.redIAdd(U3), t = F.redISub(N).redISub(N), r2 = C3.redMul(N.redISub(t)).redISub(U3), i3 = this.y.redMul(this.z), i3 = i3.redIAdd(i3);
  }
  return this.curve.jpoint(t, r2, i3);
}, Tt.prototype._threeDbl = function() {
  var t, r2, i3;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h3 = o2.redSqr(), p2 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h3);
    p2 = p2.redIAdd(p2);
    var b2 = n2.redAdd(n2).redIAdd(n2).redIAdd(this.curve.a), m = b2.redSqr().redISub(p2).redISub(p2);
    t = m;
    var w2 = h3.redIAdd(h3);
    w2 = w2.redIAdd(w2), w2 = w2.redIAdd(w2), r2 = b2.redMul(p2.redISub(m)).redISub(w2), i3 = this.y.redAdd(this.y);
  } else {
    var y5 = this.z.redSqr(), S2 = this.y.redSqr(), I = this.x.redMul(S2), N = this.x.redSub(y5).redMul(this.x.redAdd(y5));
    N = N.redAdd(N).redIAdd(N);
    var C3 = I.redIAdd(I);
    C3 = C3.redIAdd(C3);
    var F = C3.redAdd(C3);
    t = N.redSqr().redISub(F), i3 = this.y.redAdd(this.z).redSqr().redISub(S2).redISub(y5);
    var U3 = S2.redSqr();
    U3 = U3.redIAdd(U3), U3 = U3.redIAdd(U3), U3 = U3.redIAdd(U3), r2 = N.redMul(C3.redISub(t)).redISub(U3);
  }
  return this.curve.jpoint(t, r2, i3);
}, Tt.prototype._dbl = function() {
  var t = this.curve.a, r2 = this.x, i3 = this.y, n2 = this.z, o2 = n2.redSqr().redSqr(), h3 = r2.redSqr(), p2 = i3.redSqr(), b2 = h3.redAdd(h3).redIAdd(h3).redIAdd(t.redMul(o2)), m = r2.redAdd(r2);
  m = m.redIAdd(m);
  var w2 = m.redMul(p2), y5 = b2.redSqr().redISub(w2.redAdd(w2)), S2 = w2.redISub(y5), I = p2.redSqr();
  I = I.redIAdd(I), I = I.redIAdd(I), I = I.redIAdd(I);
  var N = b2.redMul(S2).redISub(I), C3 = i3.redAdd(i3).redMul(n2);
  return this.curve.jpoint(y5, N, C3);
}, Tt.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var t = this.x.redSqr(), r2 = this.y.redSqr(), i3 = this.z.redSqr(), n2 = r2.redSqr(), o2 = t.redAdd(t).redIAdd(t), h3 = o2.redSqr(), p2 = this.x.redAdd(r2).redSqr().redISub(t).redISub(n2);
  p2 = p2.redIAdd(p2), p2 = p2.redAdd(p2).redIAdd(p2), p2 = p2.redISub(h3);
  var b2 = p2.redSqr(), m = n2.redIAdd(n2);
  m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m);
  var w2 = o2.redIAdd(p2).redSqr().redISub(h3).redISub(b2).redISub(m), y5 = r2.redMul(w2);
  y5 = y5.redIAdd(y5), y5 = y5.redIAdd(y5);
  var S2 = this.x.redMul(b2).redISub(y5);
  S2 = S2.redIAdd(S2), S2 = S2.redIAdd(S2);
  var I = this.y.redMul(w2.redMul(m.redISub(w2)).redISub(p2.redMul(b2)));
  I = I.redIAdd(I), I = I.redIAdd(I), I = I.redIAdd(I);
  var N = this.z.redAdd(p2).redSqr().redISub(i3).redISub(b2);
  return this.curve.jpoint(S2, I, N);
}, Tt.prototype.mul = function(t, r2) {
  return t = new K(t, r2), this.curve._wnafMul(this, t);
}, Tt.prototype.eq = function(t) {
  if (t.type === "affine")
    return this.eq(t.toJ());
  if (this === t)
    return true;
  var r2 = this.z.redSqr(), i3 = t.z.redSqr();
  if (this.x.redMul(i3).redISub(t.x.redMul(r2)).cmpn(0) !== 0)
    return false;
  var n2 = r2.redMul(this.z), o2 = i3.redMul(t.z);
  return this.y.redMul(o2).redISub(t.y.redMul(n2)).cmpn(0) === 0;
}, Tt.prototype.eqXToP = function(t) {
  var r2 = this.z.redSqr(), i3 = t.toRed(this.curve.red).redMul(r2);
  if (this.x.cmp(i3) === 0)
    return true;
  for (var n2 = t.clone(), o2 = this.curve.redN.redMul(r2); ; ) {
    if (n2.iadd(this.curve.n), n2.cmp(this.curve.p) >= 0)
      return false;
    if (i3.redIAdd(o2), this.x.cmp(i3) === 0)
      return true;
  }
}, Tt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var qr = cr(function(e, t) {
  var r2 = t;
  r2.base = Ze, r2.short = ka, r2.mont = null, r2.edwards = null;
});
var Kr = cr(function(e, t) {
  var r2 = t, i3 = Jt.assert;
  function n2(p2) {
    p2.type === "short" ? this.curve = new qr.short(p2) : p2.type === "edwards" ? this.curve = new qr.edwards(p2) : this.curve = new qr.mont(p2), this.g = this.curve.g, this.n = this.curve.n, this.hash = p2.hash, i3(this.g.validate(), "Invalid curve"), i3(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r2.PresetCurve = n2;
  function o2(p2, b2) {
    Object.defineProperty(r2, p2, { configurable: true, enumerable: true, get: function() {
      var m = new n2(b2);
      return Object.defineProperty(r2, p2, { configurable: true, enumerable: true, value: m }), m;
    } });
  }
  o2("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: se.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), o2("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: se.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), o2("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: se.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), o2("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: se.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), o2("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: se.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), o2("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["9"] }), o2("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: se.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
  var h3;
  try {
    h3 = null.crash();
  } catch {
    h3 = void 0;
  }
  o2("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: se.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", h3] });
});
function Re(e) {
  if (!(this instanceof Re))
    return new Re(e);
  this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = fe.toArray(e.entropy, e.entropyEnc || "hex"), r2 = fe.toArray(e.nonce, e.nonceEnc || "hex"), i3 = fe.toArray(e.pers, e.persEnc || "hex");
  Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r2, i3);
}
var Rf = Re;
Re.prototype._init = function(t, r2, i3) {
  var n2 = t.concat(r2).concat(i3);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var o2 = 0; o2 < this.V.length; o2++)
    this.K[o2] = 0, this.V[o2] = 1;
  this._update(n2), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re.prototype._hmac = function() {
  return new se.hmac(this.hash, this.K);
}, Re.prototype._update = function(t) {
  var r2 = this._hmac().update(this.V).update([0]);
  t && (r2 = r2.update(t)), this.K = r2.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re.prototype.reseed = function(t, r2, i3, n2) {
  typeof r2 != "string" && (n2 = i3, i3 = r2, r2 = null), t = fe.toArray(t, r2), i3 = fe.toArray(i3, n2), Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i3 || [])), this._reseed = 1;
}, Re.prototype.generate = function(t, r2, i3, n2) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof r2 != "string" && (n2 = i3, i3 = r2, r2 = null), i3 && (i3 = fe.toArray(i3, n2 || "hex"), this._update(i3));
  for (var o2 = []; o2.length < t; )
    this.V = this._hmac().update(this.V).digest(), o2 = o2.concat(this.V);
  var h3 = o2.slice(0, t);
  return this._update(i3), this._reseed++, fe.encode(h3, r2);
};
var Fi = Jt.assert;
function kt(e, t) {
  this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti = kt;
kt.fromPublic = function(t, r2, i3) {
  return r2 instanceof kt ? r2 : new kt(t, { pub: r2, pubEnc: i3 });
}, kt.fromPrivate = function(t, r2, i3) {
  return r2 instanceof kt ? r2 : new kt(t, { priv: r2, privEnc: i3 });
}, kt.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: false, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
}, kt.prototype.getPublic = function(t, r2) {
  return typeof t == "string" && (r2 = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r2 ? this.pub.encode(r2, t) : this.pub;
}, kt.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt.prototype._importPrivate = function(t, r2) {
  this.priv = new K(t, r2 || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt.prototype._importPublic = function(t, r2) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? Fi(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r2);
}, kt.prototype.derive = function(t) {
  return t.validate() || Fi(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt.prototype.sign = function(t, r2, i3) {
  return this.ec.sign(t, this, r2, i3);
}, kt.prototype.verify = function(t, r2) {
  return this.ec.verify(t, r2, this);
}, kt.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa = Jt.assert;
function Hr(e, t) {
  if (e instanceof Hr)
    return e;
  this._importDER(e, t) || (qa(e.r && e.s, "Signature without r or s"), this.r = new K(e.r, 16), this.s = new K(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var zr = Hr;
function Ka() {
  this.place = 0;
}
function Ui(e, t) {
  var r2 = e[t.place++];
  if (!(r2 & 128))
    return r2;
  var i3 = r2 & 15;
  if (i3 === 0 || i3 > 4)
    return false;
  for (var n2 = 0, o2 = 0, h3 = t.place; o2 < i3; o2++, h3++)
    n2 <<= 8, n2 |= e[h3], n2 >>>= 0;
  return n2 <= 127 ? false : (t.place = h3, n2);
}
function Of(e) {
  for (var t = 0, r2 = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r2; )
    t++;
  return t === 0 ? e : e.slice(t);
}
Hr.prototype._importDER = function(t, r2) {
  t = Jt.toArray(t, r2);
  var i3 = new Ka();
  if (t[i3.place++] !== 48)
    return false;
  var n2 = Ui(t, i3);
  if (n2 === false || n2 + i3.place !== t.length || t[i3.place++] !== 2)
    return false;
  var o2 = Ui(t, i3);
  if (o2 === false)
    return false;
  var h3 = t.slice(i3.place, o2 + i3.place);
  if (i3.place += o2, t[i3.place++] !== 2)
    return false;
  var p2 = Ui(t, i3);
  if (p2 === false || t.length !== p2 + i3.place)
    return false;
  var b2 = t.slice(i3.place, p2 + i3.place);
  if (h3[0] === 0)
    if (h3[1] & 128)
      h3 = h3.slice(1);
    else
      return false;
  if (b2[0] === 0)
    if (b2[1] & 128)
      b2 = b2.slice(1);
    else
      return false;
  return this.r = new K(h3), this.s = new K(b2), this.recoveryParam = null, true;
};
function ki(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r2 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e.push(r2 | 128); --r2; )
    e.push(t >>> (r2 << 3) & 255);
  e.push(t);
}
Hr.prototype.toDER = function(t) {
  var r2 = this.r.toArray(), i3 = this.s.toArray();
  for (r2[0] & 128 && (r2 = [0].concat(r2)), i3[0] & 128 && (i3 = [0].concat(i3)), r2 = Of(r2), i3 = Of(i3); !i3[0] && !(i3[1] & 128); )
    i3 = i3.slice(1);
  var n2 = [2];
  ki(n2, r2.length), n2 = n2.concat(r2), n2.push(2), ki(n2, i3.length);
  var o2 = n2.concat(i3), h3 = [48];
  return ki(h3, o2.length), h3 = h3.concat(o2), Jt.encode(h3, t);
};
var Ha = function() {
  throw new Error("unsupported");
};
var Pf = Jt.assert;
function $t(e) {
  if (!(this instanceof $t))
    return new $t(e);
  typeof e == "string" && (Pf(Object.prototype.hasOwnProperty.call(Kr, e), "Unknown curve " + e), e = Kr[e]), e instanceof Kr.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var za = $t;
$t.prototype.keyPair = function(t) {
  return new Ti(this, t);
}, $t.prototype.keyFromPrivate = function(t, r2) {
  return Ti.fromPrivate(this, t, r2);
}, $t.prototype.keyFromPublic = function(t, r2) {
  return Ti.fromPublic(this, t, r2);
}, $t.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r2 = new Rf({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || Ha(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i3 = this.n.byteLength(), n2 = this.n.sub(new K(2)); ; ) {
    var o2 = new K(r2.generate(i3));
    if (!(o2.cmp(n2) > 0))
      return o2.iaddn(1), this.keyFromPrivate(o2);
  }
}, $t.prototype._truncateToN = function(t, r2) {
  var i3 = t.byteLength() * 8 - this.n.bitLength();
  return i3 > 0 && (t = t.ushrn(i3)), !r2 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t.prototype.sign = function(t, r2, i3, n2) {
  typeof i3 == "object" && (n2 = i3, i3 = null), n2 || (n2 = {}), r2 = this.keyFromPrivate(r2, i3), t = this._truncateToN(new K(t, 16));
  for (var o2 = this.n.byteLength(), h3 = r2.getPrivate().toArray("be", o2), p2 = t.toArray("be", o2), b2 = new Rf({ hash: this.hash, entropy: h3, nonce: p2, pers: n2.pers, persEnc: n2.persEnc || "utf8" }), m = this.n.sub(new K(1)), w2 = 0; ; w2++) {
    var y5 = n2.k ? n2.k(w2) : new K(b2.generate(this.n.byteLength()));
    if (y5 = this._truncateToN(y5, true), !(y5.cmpn(1) <= 0 || y5.cmp(m) >= 0)) {
      var S2 = this.g.mul(y5);
      if (!S2.isInfinity()) {
        var I = S2.getX(), N = I.umod(this.n);
        if (N.cmpn(0) !== 0) {
          var C3 = y5.invm(this.n).mul(N.mul(r2.getPrivate()).iadd(t));
          if (C3 = C3.umod(this.n), C3.cmpn(0) !== 0) {
            var F = (S2.getY().isOdd() ? 1 : 0) | (I.cmp(N) !== 0 ? 2 : 0);
            return n2.canonical && C3.cmp(this.nh) > 0 && (C3 = this.n.sub(C3), F ^= 1), new zr({ r: N, s: C3, recoveryParam: F });
          }
        }
      }
    }
  }
}, $t.prototype.verify = function(t, r2, i3, n2) {
  t = this._truncateToN(new K(t, 16)), i3 = this.keyFromPublic(i3, n2), r2 = new zr(r2, "hex");
  var o2 = r2.r, h3 = r2.s;
  if (o2.cmpn(1) < 0 || o2.cmp(this.n) >= 0 || h3.cmpn(1) < 0 || h3.cmp(this.n) >= 0)
    return false;
  var p2 = h3.invm(this.n), b2 = p2.mul(t).umod(this.n), m = p2.mul(o2).umod(this.n), w2;
  return this.curve._maxwellTrick ? (w2 = this.g.jmulAdd(b2, i3.getPublic(), m), w2.isInfinity() ? false : w2.eqXToP(o2)) : (w2 = this.g.mulAdd(b2, i3.getPublic(), m), w2.isInfinity() ? false : w2.getX().umod(this.n).cmp(o2) === 0);
}, $t.prototype.recoverPubKey = function(e, t, r2, i3) {
  Pf((3 & r2) === r2, "The recovery param is more than two bits"), t = new zr(t, i3);
  var n2 = this.n, o2 = new K(e), h3 = t.r, p2 = t.s, b2 = r2 & 1, m = r2 >> 1;
  if (h3.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m)
    throw new Error("Unable to find sencond key candinate");
  m ? h3 = this.curve.pointFromX(h3.add(this.curve.n), b2) : h3 = this.curve.pointFromX(h3, b2);
  var w2 = t.r.invm(n2), y5 = n2.sub(o2).mul(w2).umod(n2), S2 = p2.mul(w2).umod(n2);
  return this.g.mulAdd(y5, h3, S2);
}, $t.prototype.getKeyRecoveryParam = function(e, t, r2, i3) {
  if (t = new zr(t, i3), t.recoveryParam !== null)
    return t.recoveryParam;
  for (var n2 = 0; n2 < 4; n2++) {
    var o2;
    try {
      o2 = this.recoverPubKey(e, t, n2);
    } catch {
      continue;
    }
    if (o2.eq(r2))
      return n2;
  }
  throw new Error("Unable to find valid recovery factor");
};
var La = cr(function(e, t) {
  var r2 = t;
  r2.version = "6.5.4", r2.utils = Jt, r2.rand = function() {
    throw new Error("unsupported");
  }, r2.curve = qr, r2.curves = Kr, r2.ec = za, r2.eddsa = null;
});
var ja = La.ec;
var Qa = "signing-key/5.7.0";
var qi = new L(Qa);
var Ya = "transactions/5.7.0";
new L(Ya);
var Ff;
(function(e) {
  e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(Ff || (Ff = {}));

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/core/dist/index.es.js
var import_events3 = __toESM(require_events());

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/types/dist/index.es.js
var import_events2 = __toESM(require_events());

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/core/dist/index.es.js
var import_time2 = __toESM(require_cjs());
var import_lodash = __toESM(require_lodash());
var import_isomorphic_unfetch = __toESM(require_browser());
function Hi(o2, e) {
  if (o2.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i3 = 0; i3 < t.length; i3++)
    t[i3] = 255;
  for (var s = 0; s < o2.length; s++) {
    var r2 = o2.charAt(s), n2 = r2.charCodeAt(0);
    if (t[n2] !== 255)
      throw new TypeError(r2 + " is ambiguous");
    t[n2] = s;
  }
  var a2 = o2.length, h3 = o2.charAt(0), l = Math.log(a2) / Math.log(256), d2 = Math.log(256) / Math.log(a2);
  function g2(u2) {
    if (u2 instanceof Uint8Array || (ArrayBuffer.isView(u2) ? u2 = new Uint8Array(u2.buffer, u2.byteOffset, u2.byteLength) : Array.isArray(u2) && (u2 = Uint8Array.from(u2))), !(u2 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (u2.length === 0)
      return "";
    for (var p2 = 0, T2 = 0, D = 0, P = u2.length; D !== P && u2[D] === 0; )
      D++, p2++;
    for (var x = (P - D) * d2 + 1 >>> 0, w2 = new Uint8Array(x); D !== P; ) {
      for (var O = u2[D], N = 0, _ = x - 1; (O !== 0 || N < T2) && _ !== -1; _--, N++)
        O += 256 * w2[_] >>> 0, w2[_] = O % a2 >>> 0, O = O / a2 >>> 0;
      if (O !== 0)
        throw new Error("Non-zero carry");
      T2 = N, D++;
    }
    for (var A4 = x - T2; A4 !== x && w2[A4] === 0; )
      A4++;
    for (var G = h3.repeat(p2); A4 < x; ++A4)
      G += o2.charAt(w2[A4]);
    return G;
  }
  function m(u2) {
    if (typeof u2 != "string")
      throw new TypeError("Expected String");
    if (u2.length === 0)
      return new Uint8Array();
    var p2 = 0;
    if (u2[p2] !== " ") {
      for (var T2 = 0, D = 0; u2[p2] === h3; )
        T2++, p2++;
      for (var P = (u2.length - p2) * l + 1 >>> 0, x = new Uint8Array(P); u2[p2]; ) {
        var w2 = t[u2.charCodeAt(p2)];
        if (w2 === 255)
          return;
        for (var O = 0, N = P - 1; (w2 !== 0 || O < D) && N !== -1; N--, O++)
          w2 += a2 * x[N] >>> 0, x[N] = w2 % 256 >>> 0, w2 = w2 / 256 >>> 0;
        if (w2 !== 0)
          throw new Error("Non-zero carry");
        D = O, p2++;
      }
      if (u2[p2] !== " ") {
        for (var _ = P - D; _ !== P && x[_] === 0; )
          _++;
        for (var A4 = new Uint8Array(T2 + (P - _)), G = T2; _ !== P; )
          A4[G++] = x[_++];
        return A4;
      }
    }
  }
  function L2(u2) {
    var p2 = m(u2);
    if (p2)
      return p2;
    throw new Error(`Non-${e} character`);
  }
  return { encode: g2, decodeUnsafe: m, decode: L2 };
}
var Ji = Hi;
var Xi2 = Ji;
var Ue = (o2) => {
  if (o2 instanceof Uint8Array && o2.constructor.name === "Uint8Array")
    return o2;
  if (o2 instanceof ArrayBuffer)
    return new Uint8Array(o2);
  if (ArrayBuffer.isView(o2))
    return new Uint8Array(o2.buffer, o2.byteOffset, o2.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Wi = (o2) => new TextEncoder().encode(o2);
var Qi = (o2) => new TextDecoder().decode(o2);
var Zi = class {
  constructor(e, t, i3) {
    this.name = e, this.prefix = t, this.baseEncode = i3;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var es2 = class {
  constructor(e, t, i3) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i3;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Fe(this, e);
  }
};
var ts2 = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Fe(this, e);
  }
  decode(e) {
    const t = e[0], i3 = this.decoders[t];
    if (i3)
      return i3.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Fe = (o2, e) => new ts2({ ...o2.decoders || { [o2.prefix]: o2 }, ...e.decoders || { [e.prefix]: e } });
var is = class {
  constructor(e, t, i3, s) {
    this.name = e, this.prefix = t, this.baseEncode = i3, this.baseDecode = s, this.encoder = new Zi(e, t, i3), this.decoder = new es2(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var Q2 = ({ name: o2, prefix: e, encode: t, decode: i3 }) => new is(o2, e, t, i3);
var V2 = ({ prefix: o2, name: e, alphabet: t }) => {
  const { encode: i3, decode: s } = Xi2(t, e);
  return Q2({ prefix: o2, name: e, encode: i3, decode: (r2) => Ue(s(r2)) });
};
var ss2 = (o2, e, t, i3) => {
  const s = {};
  for (let d2 = 0; d2 < e.length; ++d2)
    s[e[d2]] = d2;
  let r2 = o2.length;
  for (; o2[r2 - 1] === "="; )
    --r2;
  const n2 = new Uint8Array(r2 * t / 8 | 0);
  let a2 = 0, h3 = 0, l = 0;
  for (let d2 = 0; d2 < r2; ++d2) {
    const g2 = s[o2[d2]];
    if (g2 === void 0)
      throw new SyntaxError(`Non-${i3} character`);
    h3 = h3 << t | g2, a2 += t, a2 >= 8 && (a2 -= 8, n2[l++] = 255 & h3 >> a2);
  }
  if (a2 >= t || 255 & h3 << 8 - a2)
    throw new SyntaxError("Unexpected end of data");
  return n2;
};
var rs2 = (o2, e, t) => {
  const i3 = e[e.length - 1] === "=", s = (1 << t) - 1;
  let r2 = "", n2 = 0, a2 = 0;
  for (let h3 = 0; h3 < o2.length; ++h3)
    for (a2 = a2 << 8 | o2[h3], n2 += 8; n2 > t; )
      n2 -= t, r2 += e[s & a2 >> n2];
  if (n2 && (r2 += e[s & a2 << t - n2]), i3)
    for (; r2.length * t & 7; )
      r2 += "=";
  return r2;
};
var y3 = ({ name: o2, prefix: e, bitsPerChar: t, alphabet: i3 }) => Q2({ prefix: e, name: o2, encode(s) {
  return rs2(s, i3, t);
}, decode(s) {
  return ss2(s, i3, t, o2);
} });
var ns = Q2({ prefix: "\0", name: "identity", encode: (o2) => Qi(o2), decode: (o2) => Wi(o2) });
var os2 = Object.freeze({ __proto__: null, identity: ns });
var as2 = y3({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hs2 = Object.freeze({ __proto__: null, base2: as2 });
var cs2 = y3({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ls2 = Object.freeze({ __proto__: null, base8: cs2 });
var us2 = V2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ds2 = Object.freeze({ __proto__: null, base10: us2 });
var gs2 = y3({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var ps2 = y3({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ds2 = Object.freeze({ __proto__: null, base16: gs2, base16upper: ps2 });
var ys2 = y3({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var ms2 = y3({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var bs2 = y3({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var fs2 = y3({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var Es2 = y3({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var ws2 = y3({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var vs2 = y3({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var Is2 = y3({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var Cs2 = y3({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Ts2 = Object.freeze({ __proto__: null, base32: ys2, base32upper: ms2, base32pad: bs2, base32padupper: fs2, base32hex: Es2, base32hexupper: ws2, base32hexpad: vs2, base32hexpadupper: Is2, base32z: Cs2 });
var _s2 = V2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Rs2 = V2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ss2 = Object.freeze({ __proto__: null, base36: _s2, base36upper: Rs2 });
var Ps2 = V2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var xs2 = V2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Os2 = Object.freeze({ __proto__: null, base58btc: Ps2, base58flickr: xs2 });
var As2 = y3({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var zs2 = y3({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Ns2 = y3({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Ls2 = y3({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Us2 = Object.freeze({ __proto__: null, base64: As2, base64pad: zs2, base64url: Ns2, base64urlpad: Ls2 });
var $e = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Fs2 = $e.reduce((o2, e, t) => (o2[t] = e, o2), []);
var $s2 = $e.reduce((o2, e, t) => (o2[e.codePointAt(0)] = t, o2), []);
function Bs2(o2) {
  return o2.reduce((e, t) => (e += Fs2[t], e), "");
}
function Ms2(o2) {
  const e = [];
  for (const t of o2) {
    const i3 = $s2[t.codePointAt(0)];
    if (i3 === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i3);
  }
  return new Uint8Array(e);
}
var ks2 = Q2({ prefix: "🚀", name: "base256emoji", encode: Bs2, decode: Ms2 });
var Ks2 = Object.freeze({ __proto__: null, base256emoji: ks2 });
var Vs2 = Me;
var Be2 = 128;
var qs2 = 127;
var js2 = ~qs2;
var Gs2 = Math.pow(2, 31);
function Me(o2, e, t) {
  e = e || [], t = t || 0;
  for (var i3 = t; o2 >= Gs2; )
    e[t++] = o2 & 255 | Be2, o2 /= 128;
  for (; o2 & js2; )
    e[t++] = o2 & 255 | Be2, o2 >>>= 7;
  return e[t] = o2 | 0, Me.bytes = t - i3 + 1, e;
}
var Ys2 = de2;
var Hs2 = 128;
var ke = 127;
function de2(o2, i3) {
  var t = 0, i3 = i3 || 0, s = 0, r2 = i3, n2, a2 = o2.length;
  do {
    if (r2 >= a2)
      throw de2.bytes = 0, new RangeError("Could not decode varint");
    n2 = o2[r2++], t += s < 28 ? (n2 & ke) << s : (n2 & ke) * Math.pow(2, s), s += 7;
  } while (n2 >= Hs2);
  return de2.bytes = r2 - i3, t;
}
var Js2 = Math.pow(2, 7);
var Xs2 = Math.pow(2, 14);
var Ws2 = Math.pow(2, 21);
var Qs2 = Math.pow(2, 28);
var Zs2 = Math.pow(2, 35);
var er2 = Math.pow(2, 42);
var tr2 = Math.pow(2, 49);
var ir2 = Math.pow(2, 56);
var sr2 = Math.pow(2, 63);
var rr2 = function(o2) {
  return o2 < Js2 ? 1 : o2 < Xs2 ? 2 : o2 < Ws2 ? 3 : o2 < Qs2 ? 4 : o2 < Zs2 ? 5 : o2 < er2 ? 6 : o2 < tr2 ? 7 : o2 < ir2 ? 8 : o2 < sr2 ? 9 : 10;
};
var nr2 = { encode: Vs2, decode: Ys2, encodingLength: rr2 };
var Ke = nr2;
var Ve = (o2, e, t = 0) => (Ke.encode(o2, e, t), e);
var qe = (o2) => Ke.encodingLength(o2);
var ge = (o2, e) => {
  const t = e.byteLength, i3 = qe(o2), s = i3 + qe(t), r2 = new Uint8Array(s + t);
  return Ve(o2, r2, 0), Ve(t, r2, i3), r2.set(e, s), new or2(o2, t, e, r2);
};
var or2 = class {
  constructor(e, t, i3, s) {
    this.code = e, this.size = t, this.digest = i3, this.bytes = s;
  }
};
var je = ({ name: o2, code: e, encode: t }) => new ar2(o2, e, t);
var ar2 = class {
  constructor(e, t, i3) {
    this.name = e, this.code = t, this.encode = i3;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? ge(this.code, t) : t.then((i3) => ge(this.code, i3));
    } else
      throw Error("Unknown type, must be binary type");
  }
};
var Ge = (o2) => async (e) => new Uint8Array(await crypto.subtle.digest(o2, e));
var hr2 = je({ name: "sha2-256", code: 18, encode: Ge("SHA-256") });
var cr2 = je({ name: "sha2-512", code: 19, encode: Ge("SHA-512") });
var lr2 = Object.freeze({ __proto__: null, sha256: hr2, sha512: cr2 });
var Ye = 0;
var ur2 = "identity";
var He = Ue;
var dr2 = (o2) => ge(Ye, He(o2));
var gr2 = { code: Ye, name: ur2, encode: He, digest: dr2 };
var pr2 = Object.freeze({ __proto__: null, identity: gr2 });
new TextEncoder(), new TextDecoder();
var Je = { ...os2, ...hs2, ...ls2, ...ds2, ...Ds2, ...Ts2, ...Ss2, ...Os2, ...Us2, ...Ks2 };
({ ...lr2, ...pr2 });
function Dr2(o2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(o2) : new Uint8Array(o2);
}
function Xe2(o2, e, t, i3) {
  return { name: o2, prefix: e, encoder: { name: o2, prefix: e, encode: t }, decoder: { decode: i3 } };
}
var We = Xe2("utf8", "u", (o2) => "u" + new TextDecoder("utf8").decode(o2), (o2) => new TextEncoder().encode(o2.substring(1)));
var pe2 = Xe2("ascii", "a", (o2) => {
  let e = "a";
  for (let t = 0; t < o2.length; t++)
    e += String.fromCharCode(o2[t]);
  return e;
}, (o2) => {
  o2 = o2.substring(1);
  const e = Dr2(o2.length);
  for (let t = 0; t < o2.length; t++)
    e[t] = o2.charCodeAt(t);
  return e;
});
var yr2 = { utf8: We, "utf-8": We, hex: Je.base16, latin1: pe2, ascii: pe2, binary: pe2, ...Je };
var De = "wc";
var Z = "core";
var z = `${De}@2:${Z}:`;
var Et = import_time2.FIVE_SECONDS * 1e3;

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/sign-client/dist/index.es.js
var import_events4 = __toESM(require_events());
var import_time3 = __toESM(require_cjs());
var Re2 = "wc";
var Ee = 2;
var Se2 = "client";
var ie2 = `${Re2}@${Ee}:${Se2}:`;
var ze = "wc";
var He2 = "auth";
var X2 = `${ze}@${1.5}:${He2}:`;
var J = `${X2}:PUB_KEY`;

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events5 = __toESM(require_events());
var qg = "wc";
var Bg = "universal_provider";
var Ea2 = `${qg}@2:${Bg}:`;
var ge3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Ui2 = { exports: {} };
(function(A4, u2) {
  (function() {
    var i3, p2 = "4.17.21", w2 = 200, b2 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", D = "Expected a function", En = "Invalid `variable` option passed into `_.template`", zt2 = "__lodash_hash_undefined__", pr3 = 500, It = "__lodash_placeholder__", Ln2 = 1, Fn2 = 2, xt = 4, Et2 = 1, ve = 2, vn = 1, ct2 = 2, Bi2 = 4, Dn2 = 8, yt = 16, Nn = 32, St = 64, Mn = 128, Kt3 = 256, dr3 = 512, Na2 = 30, Ha2 = "...", $a = 800, Ua2 = 16, Gi2 = 1, Wa = 2, Fa2 = 3, ht = 1 / 0, kn2 = 9007199254740991, Ma2 = 17976931348623157e292, _e = 0 / 0, Hn = 4294967295, qa2 = Hn - 1, Ba2 = Hn >>> 1, Ga = [["ary", Mn], ["bind", vn], ["bindKey", ct2], ["curry", Dn2], ["curryRight", yt], ["flip", dr3], ["partial", Nn], ["partialRight", St], ["rearg", Kt3]], Ot2 = "[object Arguments]", me = "[object Array]", za2 = "[object AsyncFunction]", Yt = "[object Boolean]", Zt2 = "[object Date]", Ka2 = "[object DOMException]", we2 = "[object Error]", Pe3 = "[object Function]", zi = "[object GeneratorFunction]", yn = "[object Map]", Jt2 = "[object Number]", Ya2 = "[object Null]", qn2 = "[object Object]", Ki = "[object Promise]", Za = "[object Proxy]", Xt2 = "[object RegExp]", Sn = "[object Set]", Qt2 = "[object String]", Ae2 = "[object Symbol]", Ja = "[object Undefined]", Vt2 = "[object WeakMap]", Xa = "[object WeakSet]", kt2 = "[object ArrayBuffer]", Rt = "[object DataView]", gr3 = "[object Float32Array]", vr2 = "[object Float64Array]", _r = "[object Int8Array]", mr2 = "[object Int16Array]", wr2 = "[object Int32Array]", Pr2 = "[object Uint8Array]", Ar2 = "[object Uint8ClampedArray]", Cr2 = "[object Uint16Array]", Ir = "[object Uint32Array]", Qa2 = /\b__p \+= '';/g, Va = /\b(__p \+=) '' \+/g, ka2 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yi2 = /&(?:amp|lt|gt|quot|#39);/g, Zi3 = /[&<>"']/g, ja2 = RegExp(Yi2.source), no = RegExp(Zi3.source), to = /<%-([\s\S]+?)%>/g, eo2 = /<%([\s\S]+?)%>/g, Ji2 = /<%=([\s\S]+?)%>/g, ro = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, io = /^\w*$/, so = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr2 = /[\\^$.*+?()[\]{}|]/g, uo = RegExp(xr2.source), Er2 = /^\s+/, ao = /\s/, oo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, fo = /\{\n\/\* \[wrapped with (.+)\] \*/, co = /,? & /, ho = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lo = /[()=,{}\[\]\/\s]/, po = /\\(\\)?/g, go = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Xi3 = /\w*$/, vo2 = /^[-+]0x[0-9a-f]+$/i, _o = /^0b[01]+$/i, mo = /^\[object .+?Constructor\]$/, wo = /^0o[0-7]+$/i, Po = /^(?:0|[1-9]\d*)$/, Ao = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce2 = /($^)/, Co = /['\n\r\u2028\u2029\\]/g, Ie = "\\ud800-\\udfff", Io2 = "\\u0300-\\u036f", xo = "\\ufe20-\\ufe2f", Eo = "\\u20d0-\\u20ff", Qi2 = Io2 + xo + Eo, Vi = "\\u2700-\\u27bf", ki3 = "a-z\\xdf-\\xf6\\xf8-\\xff", yo = "\\xac\\xb1\\xd7\\xf7", So2 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Oo = "\\u2000-\\u206f", Ro = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ji = "A-Z\\xc0-\\xd6\\xd8-\\xde", ns2 = "\\ufe0e\\ufe0f", ts3 = yo + So2 + Oo + Ro, yr3 = "['’]", bo = "[" + Ie + "]", es3 = "[" + ts3 + "]", xe2 = "[" + Qi2 + "]", rs3 = "\\d+", To2 = "[" + Vi + "]", is2 = "[" + ki3 + "]", ss3 = "[^" + Ie + ts3 + rs3 + Vi + ki3 + ji + "]", Sr = "\\ud83c[\\udffb-\\udfff]", Lo = "(?:" + xe2 + "|" + Sr + ")", us3 = "[^" + Ie + "]", Or2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt2 = "[" + ji + "]", as3 = "\\u200d", os3 = "(?:" + is2 + "|" + ss3 + ")", Do = "(?:" + bt2 + "|" + ss3 + ")", fs3 = "(?:" + yr3 + "(?:d|ll|m|re|s|t|ve))?", cs3 = "(?:" + yr3 + "(?:D|LL|M|RE|S|T|VE))?", hs3 = Lo + "?", ls3 = "[" + ns2 + "]?", No2 = "(?:" + as3 + "(?:" + [us3, Or2, Rr2].join("|") + ")" + ls3 + hs3 + ")*", Ho = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $o2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ps3 = ls3 + hs3 + No2, Uo2 = "(?:" + [To2, Or2, Rr2].join("|") + ")" + ps3, Wo2 = "(?:" + [us3 + xe2 + "?", xe2, Or2, Rr2, bo].join("|") + ")", Fo2 = RegExp(yr3, "g"), Mo = RegExp(xe2, "g"), br = RegExp(Sr + "(?=" + Sr + ")|" + Wo2 + ps3, "g"), qo = RegExp([bt2 + "?" + is2 + "+" + fs3 + "(?=" + [es3, bt2, "$"].join("|") + ")", Do + "+" + cs3 + "(?=" + [es3, bt2 + os3, "$"].join("|") + ")", bt2 + "?" + os3 + "+" + fs3, bt2 + "+" + cs3, $o2, Ho, rs3, Uo2].join("|"), "g"), Bo = RegExp("[" + as3 + Ie + Qi2 + ns2 + "]"), Go = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zo2 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ko = -1, B = {};
    B[gr3] = B[vr2] = B[_r] = B[mr2] = B[wr2] = B[Pr2] = B[Ar2] = B[Cr2] = B[Ir] = true, B[Ot2] = B[me] = B[kt2] = B[Yt] = B[Rt] = B[Zt2] = B[we2] = B[Pe3] = B[yn] = B[Jt2] = B[qn2] = B[Xt2] = B[Sn] = B[Qt2] = B[Vt2] = false;
    var q2 = {};
    q2[Ot2] = q2[me] = q2[kt2] = q2[Rt] = q2[Yt] = q2[Zt2] = q2[gr3] = q2[vr2] = q2[_r] = q2[mr2] = q2[wr2] = q2[yn] = q2[Jt2] = q2[qn2] = q2[Xt2] = q2[Sn] = q2[Qt2] = q2[Ae2] = q2[Pr2] = q2[Ar2] = q2[Cr2] = q2[Ir] = true, q2[we2] = q2[Pe3] = q2[Vt2] = false;
    var Yo = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Zo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Jo = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Xo2 = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Qo = parseFloat, Vo = parseInt, ds3 = typeof ge3 == "object" && ge3 && ge3.Object === Object && ge3, ko2 = typeof self == "object" && self && self.Object === Object && self, k2 = ds3 || ko2 || Function("return this")(), Tr2 = u2 && !u2.nodeType && u2, lt = Tr2 && true && A4 && !A4.nodeType && A4, gs3 = lt && lt.exports === Tr2, Lr = gs3 && ds3.process, _n = function() {
      try {
        var h3 = lt && lt.require && lt.require("util").types;
        return h3 || Lr && Lr.binding && Lr.binding("util");
      } catch {
      }
    }(), vs3 = _n && _n.isArrayBuffer, _s3 = _n && _n.isDate, ms3 = _n && _n.isMap, ws3 = _n && _n.isRegExp, Ps3 = _n && _n.isSet, As3 = _n && _n.isTypedArray;
    function cn2(h3, g2, d2) {
      switch (d2.length) {
        case 0:
          return h3.call(g2);
        case 1:
          return h3.call(g2, d2[0]);
        case 2:
          return h3.call(g2, d2[0], d2[1]);
        case 3:
          return h3.call(g2, d2[0], d2[1], d2[2]);
      }
      return h3.apply(g2, d2);
    }
    function jo(h3, g2, d2, C3) {
      for (var S2 = -1, U3 = h3 == null ? 0 : h3.length; ++S2 < U3; ) {
        var X3 = h3[S2];
        g2(C3, X3, d2(X3), h3);
      }
      return C3;
    }
    function mn(h3, g2) {
      for (var d2 = -1, C3 = h3 == null ? 0 : h3.length; ++d2 < C3 && g2(h3[d2], d2, h3) !== false; )
        ;
      return h3;
    }
    function nf2(h3, g2) {
      for (var d2 = h3 == null ? 0 : h3.length; d2-- && g2(h3[d2], d2, h3) !== false; )
        ;
      return h3;
    }
    function Cs3(h3, g2) {
      for (var d2 = -1, C3 = h3 == null ? 0 : h3.length; ++d2 < C3; )
        if (!g2(h3[d2], d2, h3))
          return false;
      return true;
    }
    function jn2(h3, g2) {
      for (var d2 = -1, C3 = h3 == null ? 0 : h3.length, S2 = 0, U3 = []; ++d2 < C3; ) {
        var X3 = h3[d2];
        g2(X3, d2, h3) && (U3[S2++] = X3);
      }
      return U3;
    }
    function Ee2(h3, g2) {
      var d2 = h3 == null ? 0 : h3.length;
      return !!d2 && Tt2(h3, g2, 0) > -1;
    }
    function Dr3(h3, g2, d2) {
      for (var C3 = -1, S2 = h3 == null ? 0 : h3.length; ++C3 < S2; )
        if (d2(g2, h3[C3]))
          return true;
      return false;
    }
    function G(h3, g2) {
      for (var d2 = -1, C3 = h3 == null ? 0 : h3.length, S2 = Array(C3); ++d2 < C3; )
        S2[d2] = g2(h3[d2], d2, h3);
      return S2;
    }
    function nt(h3, g2) {
      for (var d2 = -1, C3 = g2.length, S2 = h3.length; ++d2 < C3; )
        h3[S2 + d2] = g2[d2];
      return h3;
    }
    function Nr2(h3, g2, d2, C3) {
      var S2 = -1, U3 = h3 == null ? 0 : h3.length;
      for (C3 && U3 && (d2 = h3[++S2]); ++S2 < U3; )
        d2 = g2(d2, h3[S2], S2, h3);
      return d2;
    }
    function tf2(h3, g2, d2, C3) {
      var S2 = h3 == null ? 0 : h3.length;
      for (C3 && S2 && (d2 = h3[--S2]); S2--; )
        d2 = g2(d2, h3[S2], S2, h3);
      return d2;
    }
    function Hr2(h3, g2) {
      for (var d2 = -1, C3 = h3 == null ? 0 : h3.length; ++d2 < C3; )
        if (g2(h3[d2], d2, h3))
          return true;
      return false;
    }
    var ef2 = $r("length");
    function rf2(h3) {
      return h3.split("");
    }
    function sf2(h3) {
      return h3.match(ho) || [];
    }
    function Is3(h3, g2, d2) {
      var C3;
      return d2(h3, function(S2, U3, X3) {
        if (g2(S2, U3, X3))
          return C3 = U3, false;
      }), C3;
    }
    function ye2(h3, g2, d2, C3) {
      for (var S2 = h3.length, U3 = d2 + (C3 ? 1 : -1); C3 ? U3-- : ++U3 < S2; )
        if (g2(h3[U3], U3, h3))
          return U3;
      return -1;
    }
    function Tt2(h3, g2, d2) {
      return g2 === g2 ? _f2(h3, g2, d2) : ye2(h3, xs3, d2);
    }
    function uf2(h3, g2, d2, C3) {
      for (var S2 = d2 - 1, U3 = h3.length; ++S2 < U3; )
        if (C3(h3[S2], g2))
          return S2;
      return -1;
    }
    function xs3(h3) {
      return h3 !== h3;
    }
    function Es3(h3, g2) {
      var d2 = h3 == null ? 0 : h3.length;
      return d2 ? Wr(h3, g2) / d2 : _e;
    }
    function $r(h3) {
      return function(g2) {
        return g2 == null ? i3 : g2[h3];
      };
    }
    function Ur2(h3) {
      return function(g2) {
        return h3 == null ? i3 : h3[g2];
      };
    }
    function ys3(h3, g2, d2, C3, S2) {
      return S2(h3, function(U3, X3, M2) {
        d2 = C3 ? (C3 = false, U3) : g2(d2, U3, X3, M2);
      }), d2;
    }
    function af2(h3, g2) {
      var d2 = h3.length;
      for (h3.sort(g2); d2--; )
        h3[d2] = h3[d2].value;
      return h3;
    }
    function Wr(h3, g2) {
      for (var d2, C3 = -1, S2 = h3.length; ++C3 < S2; ) {
        var U3 = g2(h3[C3]);
        U3 !== i3 && (d2 = d2 === i3 ? U3 : d2 + U3);
      }
      return d2;
    }
    function Fr2(h3, g2) {
      for (var d2 = -1, C3 = Array(h3); ++d2 < h3; )
        C3[d2] = g2(d2);
      return C3;
    }
    function of(h3, g2) {
      return G(g2, function(d2) {
        return [d2, h3[d2]];
      });
    }
    function Ss3(h3) {
      return h3 && h3.slice(0, Ts3(h3) + 1).replace(Er2, "");
    }
    function hn2(h3) {
      return function(g2) {
        return h3(g2);
      };
    }
    function Mr2(h3, g2) {
      return G(g2, function(d2) {
        return h3[d2];
      });
    }
    function jt2(h3, g2) {
      return h3.has(g2);
    }
    function Os3(h3, g2) {
      for (var d2 = -1, C3 = h3.length; ++d2 < C3 && Tt2(g2, h3[d2], 0) > -1; )
        ;
      return d2;
    }
    function Rs3(h3, g2) {
      for (var d2 = h3.length; d2-- && Tt2(g2, h3[d2], 0) > -1; )
        ;
      return d2;
    }
    function ff(h3, g2) {
      for (var d2 = h3.length, C3 = 0; d2--; )
        h3[d2] === g2 && ++C3;
      return C3;
    }
    var cf2 = Ur2(Yo), hf2 = Ur2(Zo);
    function lf2(h3) {
      return "\\" + Xo2[h3];
    }
    function pf2(h3, g2) {
      return h3 == null ? i3 : h3[g2];
    }
    function Lt2(h3) {
      return Bo.test(h3);
    }
    function df2(h3) {
      return Go.test(h3);
    }
    function gf2(h3) {
      for (var g2, d2 = []; !(g2 = h3.next()).done; )
        d2.push(g2.value);
      return d2;
    }
    function qr2(h3) {
      var g2 = -1, d2 = Array(h3.size);
      return h3.forEach(function(C3, S2) {
        d2[++g2] = [S2, C3];
      }), d2;
    }
    function bs3(h3, g2) {
      return function(d2) {
        return h3(g2(d2));
      };
    }
    function tt(h3, g2) {
      for (var d2 = -1, C3 = h3.length, S2 = 0, U3 = []; ++d2 < C3; ) {
        var X3 = h3[d2];
        (X3 === g2 || X3 === It) && (h3[d2] = It, U3[S2++] = d2);
      }
      return U3;
    }
    function Se3(h3) {
      var g2 = -1, d2 = Array(h3.size);
      return h3.forEach(function(C3) {
        d2[++g2] = C3;
      }), d2;
    }
    function vf2(h3) {
      var g2 = -1, d2 = Array(h3.size);
      return h3.forEach(function(C3) {
        d2[++g2] = [C3, C3];
      }), d2;
    }
    function _f2(h3, g2, d2) {
      for (var C3 = d2 - 1, S2 = h3.length; ++C3 < S2; )
        if (h3[C3] === g2)
          return C3;
      return -1;
    }
    function mf2(h3, g2, d2) {
      for (var C3 = d2 + 1; C3--; )
        if (h3[C3] === g2)
          return C3;
      return C3;
    }
    function Dt2(h3) {
      return Lt2(h3) ? Pf2(h3) : ef2(h3);
    }
    function On2(h3) {
      return Lt2(h3) ? Af2(h3) : rf2(h3);
    }
    function Ts3(h3) {
      for (var g2 = h3.length; g2-- && ao.test(h3.charAt(g2)); )
        ;
      return g2;
    }
    var wf2 = Ur2(Jo);
    function Pf2(h3) {
      for (var g2 = br.lastIndex = 0; br.test(h3); )
        ++g2;
      return g2;
    }
    function Af2(h3) {
      return h3.match(br) || [];
    }
    function Cf2(h3) {
      return h3.match(qo) || [];
    }
    var If2 = function h3(g2) {
      g2 = g2 == null ? k2 : Nt.defaults(k2.Object(), g2, Nt.pick(k2, zo2));
      var d2 = g2.Array, C3 = g2.Date, S2 = g2.Error, U3 = g2.Function, X3 = g2.Math, M2 = g2.Object, Br2 = g2.RegExp, xf2 = g2.String, wn = g2.TypeError, Oe = d2.prototype, Ef2 = U3.prototype, Ht2 = M2.prototype, Re3 = g2["__core-js_shared__"], be2 = Ef2.toString, F = Ht2.hasOwnProperty, yf2 = 0, Ls3 = function() {
        var n2 = /[^.]+$/.exec(Re3 && Re3.keys && Re3.keys.IE_PROTO || "");
        return n2 ? "Symbol(src)_1." + n2 : "";
      }(), Te = Ht2.toString, Sf2 = be2.call(M2), Of2 = k2._, Rf2 = Br2("^" + be2.call(F).replace(xr2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le2 = gs3 ? g2.Buffer : i3, et = g2.Symbol, De2 = g2.Uint8Array, Ds3 = Le2 ? Le2.allocUnsafe : i3, Ne = bs3(M2.getPrototypeOf, M2), Ns3 = M2.create, Hs3 = Ht2.propertyIsEnumerable, He3 = Oe.splice, $s3 = et ? et.isConcatSpreadable : i3, ne2 = et ? et.iterator : i3, pt = et ? et.toStringTag : i3, $e2 = function() {
        try {
          var n2 = mt(M2, "defineProperty");
          return n2({}, "", {}), n2;
        } catch {
        }
      }(), bf2 = g2.clearTimeout !== k2.clearTimeout && g2.clearTimeout, Tf = C3 && C3.now !== k2.Date.now && C3.now, Lf = g2.setTimeout !== k2.setTimeout && g2.setTimeout, Ue2 = X3.ceil, We2 = X3.floor, Gr = M2.getOwnPropertySymbols, Df = Le2 ? Le2.isBuffer : i3, Us3 = g2.isFinite, Nf2 = Oe.join, Hf = bs3(M2.keys, M2), Q3 = X3.max, nn2 = X3.min, $f = C3.now, Uf = g2.parseInt, Ws3 = X3.random, Wf = Oe.reverse, zr2 = mt(g2, "DataView"), te = mt(g2, "Map"), Kr2 = mt(g2, "Promise"), $t3 = mt(g2, "Set"), ee = mt(g2, "WeakMap"), re2 = mt(M2, "create"), Fe2 = ee && new ee(), Ut2 = {}, Ff2 = wt(zr2), Mf2 = wt(te), qf = wt(Kr2), Bf2 = wt($t3), Gf = wt(ee), Me3 = et ? et.prototype : i3, ie3 = Me3 ? Me3.valueOf : i3, Fs3 = Me3 ? Me3.toString : i3;
      function a2(n2) {
        if (Y(n2) && !O(n2) && !(n2 instanceof H)) {
          if (n2 instanceof Pn2)
            return n2;
          if (F.call(n2, "__wrapped__"))
            return Mu2(n2);
        }
        return new Pn2(n2);
      }
      var Wt3 = function() {
        function n2() {
        }
        return function(t) {
          if (!K2(t))
            return {};
          if (Ns3)
            return Ns3(t);
          n2.prototype = t;
          var e = new n2();
          return n2.prototype = i3, e;
        };
      }();
      function qe2() {
      }
      function Pn2(n2, t) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i3;
      }
      a2.templateSettings = { escape: to, evaluate: eo2, interpolate: Ji2, variable: "", imports: { _: a2 } }, a2.prototype = qe2.prototype, a2.prototype.constructor = a2, Pn2.prototype = Wt3(qe2.prototype), Pn2.prototype.constructor = Pn2;
      function H(n2) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Hn, this.__views__ = [];
      }
      function zf2() {
        var n2 = new H(this.__wrapped__);
        return n2.__actions__ = un2(this.__actions__), n2.__dir__ = this.__dir__, n2.__filtered__ = this.__filtered__, n2.__iteratees__ = un2(this.__iteratees__), n2.__takeCount__ = this.__takeCount__, n2.__views__ = un2(this.__views__), n2;
      }
      function Kf() {
        if (this.__filtered__) {
          var n2 = new H(this);
          n2.__dir__ = -1, n2.__filtered__ = true;
        } else
          n2 = this.clone(), n2.__dir__ *= -1;
        return n2;
      }
      function Yf() {
        var n2 = this.__wrapped__.value(), t = this.__dir__, e = O(n2), r2 = t < 0, s = e ? n2.length : 0, o2 = ih2(0, s, this.__views__), f4 = o2.start, c2 = o2.end, l = c2 - f4, v2 = r2 ? c2 : f4 - 1, _ = this.__iteratees__, m = _.length, P = 0, I = nn2(l, this.__takeCount__);
        if (!e || !r2 && s == l && I == l)
          return fu2(n2, this.__actions__);
        var E3 = [];
        n:
          for (; l-- && P < I; ) {
            v2 += t;
            for (var T2 = -1, y5 = n2[v2]; ++T2 < m; ) {
              var N = _[T2], $3 = N.iteratee, dn2 = N.type, sn2 = $3(y5);
              if (dn2 == Wa)
                y5 = sn2;
              else if (!sn2) {
                if (dn2 == Gi2)
                  continue n;
                break n;
              }
            }
            E3[P++] = y5;
          }
        return E3;
      }
      H.prototype = Wt3(qe2.prototype), H.prototype.constructor = H;
      function dt(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n2[t];
          this.set(r2[0], r2[1]);
        }
      }
      function Zf() {
        this.__data__ = re2 ? re2(null) : {}, this.size = 0;
      }
      function Jf(n2) {
        var t = this.has(n2) && delete this.__data__[n2];
        return this.size -= t ? 1 : 0, t;
      }
      function Xf(n2) {
        var t = this.__data__;
        if (re2) {
          var e = t[n2];
          return e === zt2 ? i3 : e;
        }
        return F.call(t, n2) ? t[n2] : i3;
      }
      function Qf(n2) {
        var t = this.__data__;
        return re2 ? t[n2] !== i3 : F.call(t, n2);
      }
      function Vf(n2, t) {
        var e = this.__data__;
        return this.size += this.has(n2) ? 0 : 1, e[n2] = re2 && t === i3 ? zt2 : t, this;
      }
      dt.prototype.clear = Zf, dt.prototype.delete = Jf, dt.prototype.get = Xf, dt.prototype.has = Qf, dt.prototype.set = Vf;
      function Bn(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n2[t];
          this.set(r2[0], r2[1]);
        }
      }
      function kf() {
        this.__data__ = [], this.size = 0;
      }
      function jf(n2) {
        var t = this.__data__, e = Be3(t, n2);
        if (e < 0)
          return false;
        var r2 = t.length - 1;
        return e == r2 ? t.pop() : He3.call(t, e, 1), --this.size, true;
      }
      function nc(n2) {
        var t = this.__data__, e = Be3(t, n2);
        return e < 0 ? i3 : t[e][1];
      }
      function tc(n2) {
        return Be3(this.__data__, n2) > -1;
      }
      function ec(n2, t) {
        var e = this.__data__, r2 = Be3(e, n2);
        return r2 < 0 ? (++this.size, e.push([n2, t])) : e[r2][1] = t, this;
      }
      Bn.prototype.clear = kf, Bn.prototype.delete = jf, Bn.prototype.get = nc, Bn.prototype.has = tc, Bn.prototype.set = ec;
      function Gn2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r2 = n2[t];
          this.set(r2[0], r2[1]);
        }
      }
      function rc() {
        this.size = 0, this.__data__ = { hash: new dt(), map: new (te || Bn)(), string: new dt() };
      }
      function ic(n2) {
        var t = nr3(this, n2).delete(n2);
        return this.size -= t ? 1 : 0, t;
      }
      function sc(n2) {
        return nr3(this, n2).get(n2);
      }
      function uc(n2) {
        return nr3(this, n2).has(n2);
      }
      function ac(n2, t) {
        var e = nr3(this, n2), r2 = e.size;
        return e.set(n2, t), this.size += e.size == r2 ? 0 : 1, this;
      }
      Gn2.prototype.clear = rc, Gn2.prototype.delete = ic, Gn2.prototype.get = sc, Gn2.prototype.has = uc, Gn2.prototype.set = ac;
      function gt(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.__data__ = new Gn2(); ++t < e; )
          this.add(n2[t]);
      }
      function oc(n2) {
        return this.__data__.set(n2, zt2), this;
      }
      function fc(n2) {
        return this.__data__.has(n2);
      }
      gt.prototype.add = gt.prototype.push = oc, gt.prototype.has = fc;
      function Rn(n2) {
        var t = this.__data__ = new Bn(n2);
        this.size = t.size;
      }
      function cc() {
        this.__data__ = new Bn(), this.size = 0;
      }
      function hc(n2) {
        var t = this.__data__, e = t.delete(n2);
        return this.size = t.size, e;
      }
      function lc(n2) {
        return this.__data__.get(n2);
      }
      function pc(n2) {
        return this.__data__.has(n2);
      }
      function dc(n2, t) {
        var e = this.__data__;
        if (e instanceof Bn) {
          var r2 = e.__data__;
          if (!te || r2.length < w2 - 1)
            return r2.push([n2, t]), this.size = ++e.size, this;
          e = this.__data__ = new Gn2(r2);
        }
        return e.set(n2, t), this.size = e.size, this;
      }
      Rn.prototype.clear = cc, Rn.prototype.delete = hc, Rn.prototype.get = lc, Rn.prototype.has = pc, Rn.prototype.set = dc;
      function Ms3(n2, t) {
        var e = O(n2), r2 = !e && Pt(n2), s = !e && !r2 && at(n2), o2 = !e && !r2 && !s && Bt(n2), f4 = e || r2 || s || o2, c2 = f4 ? Fr2(n2.length, xf2) : [], l = c2.length;
        for (var v2 in n2)
          (t || F.call(n2, v2)) && !(f4 && (v2 == "length" || s && (v2 == "offset" || v2 == "parent") || o2 && (v2 == "buffer" || v2 == "byteLength" || v2 == "byteOffset") || Zn2(v2, l))) && c2.push(v2);
        return c2;
      }
      function qs3(n2) {
        var t = n2.length;
        return t ? n2[ei(0, t - 1)] : i3;
      }
      function gc(n2, t) {
        return tr3(un2(n2), vt(t, 0, n2.length));
      }
      function vc(n2) {
        return tr3(un2(n2));
      }
      function Yr2(n2, t, e) {
        (e !== i3 && !bn(n2[t], e) || e === i3 && !(t in n2)) && zn(n2, t, e);
      }
      function se2(n2, t, e) {
        var r2 = n2[t];
        (!(F.call(n2, t) && bn(r2, e)) || e === i3 && !(t in n2)) && zn(n2, t, e);
      }
      function Be3(n2, t) {
        for (var e = n2.length; e--; )
          if (bn(n2[e][0], t))
            return e;
        return -1;
      }
      function _c(n2, t, e, r2) {
        return rt(n2, function(s, o2, f4) {
          t(r2, s, e(s), f4);
        }), r2;
      }
      function Bs3(n2, t) {
        return n2 && Un2(t, V4(t), n2);
      }
      function mc(n2, t) {
        return n2 && Un2(t, on2(t), n2);
      }
      function zn(n2, t, e) {
        t == "__proto__" && $e2 ? $e2(n2, t, { configurable: true, enumerable: true, value: e, writable: true }) : n2[t] = e;
      }
      function Zr(n2, t) {
        for (var e = -1, r2 = t.length, s = d2(r2), o2 = n2 == null; ++e < r2; )
          s[e] = o2 ? i3 : Si2(n2, t[e]);
        return s;
      }
      function vt(n2, t, e) {
        return n2 === n2 && (e !== i3 && (n2 = n2 <= e ? n2 : e), t !== i3 && (n2 = n2 >= t ? n2 : t)), n2;
      }
      function An(n2, t, e, r2, s, o2) {
        var f4, c2 = t & Ln2, l = t & Fn2, v2 = t & xt;
        if (e && (f4 = s ? e(n2, r2, s, o2) : e(n2)), f4 !== i3)
          return f4;
        if (!K2(n2))
          return n2;
        var _ = O(n2);
        if (_) {
          if (f4 = uh2(n2), !c2)
            return un2(n2, f4);
        } else {
          var m = tn(n2), P = m == Pe3 || m == zi;
          if (at(n2))
            return lu2(n2, c2);
          if (m == qn2 || m == Ot2 || P && !s) {
            if (f4 = l || P ? {} : Tu(n2), !c2)
              return l ? Xc(n2, mc(f4, n2)) : Jc(n2, Bs3(f4, n2));
          } else {
            if (!q2[m])
              return s ? n2 : {};
            f4 = ah(n2, m, c2);
          }
        }
        o2 || (o2 = new Rn());
        var I = o2.get(n2);
        if (I)
          return I;
        o2.set(n2, f4), ua2(n2) ? n2.forEach(function(y5) {
          f4.add(An(y5, t, e, y5, n2, o2));
        }) : ia2(n2) && n2.forEach(function(y5, N) {
          f4.set(N, An(y5, t, e, N, n2, o2));
        });
        var E3 = v2 ? l ? pi2 : li : l ? on2 : V4, T2 = _ ? i3 : E3(n2);
        return mn(T2 || n2, function(y5, N) {
          T2 && (N = y5, y5 = n2[N]), se2(f4, N, An(y5, t, e, N, n2, o2));
        }), f4;
      }
      function wc(n2) {
        var t = V4(n2);
        return function(e) {
          return Gs3(e, n2, t);
        };
      }
      function Gs3(n2, t, e) {
        var r2 = e.length;
        if (n2 == null)
          return !r2;
        for (n2 = M2(n2); r2--; ) {
          var s = e[r2], o2 = t[s], f4 = n2[s];
          if (f4 === i3 && !(s in n2) || !o2(f4))
            return false;
        }
        return true;
      }
      function zs3(n2, t, e) {
        if (typeof n2 != "function")
          throw new wn(D);
        return le3(function() {
          n2.apply(i3, e);
        }, t);
      }
      function ue3(n2, t, e, r2) {
        var s = -1, o2 = Ee2, f4 = true, c2 = n2.length, l = [], v2 = t.length;
        if (!c2)
          return l;
        e && (t = G(t, hn2(e))), r2 ? (o2 = Dr3, f4 = false) : t.length >= w2 && (o2 = jt2, f4 = false, t = new gt(t));
        n:
          for (; ++s < c2; ) {
            var _ = n2[s], m = e == null ? _ : e(_);
            if (_ = r2 || _ !== 0 ? _ : 0, f4 && m === m) {
              for (var P = v2; P--; )
                if (t[P] === m)
                  continue n;
              l.push(_);
            } else
              o2(t, m, r2) || l.push(_);
          }
        return l;
      }
      var rt = _u($n2), Ks3 = _u(Xr, true);
      function Pc(n2, t) {
        var e = true;
        return rt(n2, function(r2, s, o2) {
          return e = !!t(r2, s, o2), e;
        }), e;
      }
      function Ge3(n2, t, e) {
        for (var r2 = -1, s = n2.length; ++r2 < s; ) {
          var o2 = n2[r2], f4 = t(o2);
          if (f4 != null && (c2 === i3 ? f4 === f4 && !pn(f4) : e(f4, c2)))
            var c2 = f4, l = o2;
        }
        return l;
      }
      function Ac(n2, t, e, r2) {
        var s = n2.length;
        for (e = R2(e), e < 0 && (e = -e > s ? 0 : s + e), r2 = r2 === i3 || r2 > s ? s : R2(r2), r2 < 0 && (r2 += s), r2 = e > r2 ? 0 : oa2(r2); e < r2; )
          n2[e++] = t;
        return n2;
      }
      function Ys3(n2, t) {
        var e = [];
        return rt(n2, function(r2, s, o2) {
          t(r2, s, o2) && e.push(r2);
        }), e;
      }
      function j2(n2, t, e, r2, s) {
        var o2 = -1, f4 = n2.length;
        for (e || (e = fh2), s || (s = []); ++o2 < f4; ) {
          var c2 = n2[o2];
          t > 0 && e(c2) ? t > 1 ? j2(c2, t - 1, e, r2, s) : nt(s, c2) : r2 || (s[s.length] = c2);
        }
        return s;
      }
      var Jr = mu2(), Zs3 = mu2(true);
      function $n2(n2, t) {
        return n2 && Jr(n2, t, V4);
      }
      function Xr(n2, t) {
        return n2 && Zs3(n2, t, V4);
      }
      function ze2(n2, t) {
        return jn2(t, function(e) {
          return Jn2(n2[e]);
        });
      }
      function _t(n2, t) {
        t = st(t, n2);
        for (var e = 0, r2 = t.length; n2 != null && e < r2; )
          n2 = n2[Wn2(t[e++])];
        return e && e == r2 ? n2 : i3;
      }
      function Js3(n2, t, e) {
        var r2 = t(n2);
        return O(n2) ? r2 : nt(r2, e(n2));
      }
      function en(n2) {
        return n2 == null ? n2 === i3 ? Ja : Ya2 : pt && pt in M2(n2) ? rh2(n2) : vh(n2);
      }
      function Qr2(n2, t) {
        return n2 > t;
      }
      function Cc(n2, t) {
        return n2 != null && F.call(n2, t);
      }
      function Ic(n2, t) {
        return n2 != null && t in M2(n2);
      }
      function xc(n2, t, e) {
        return n2 >= nn2(t, e) && n2 < Q3(t, e);
      }
      function Vr(n2, t, e) {
        for (var r2 = e ? Dr3 : Ee2, s = n2[0].length, o2 = n2.length, f4 = o2, c2 = d2(o2), l = 1 / 0, v2 = []; f4--; ) {
          var _ = n2[f4];
          f4 && t && (_ = G(_, hn2(t))), l = nn2(_.length, l), c2[f4] = !e && (t || s >= 120 && _.length >= 120) ? new gt(f4 && _) : i3;
        }
        _ = n2[0];
        var m = -1, P = c2[0];
        n:
          for (; ++m < s && v2.length < l; ) {
            var I = _[m], E3 = t ? t(I) : I;
            if (I = e || I !== 0 ? I : 0, !(P ? jt2(P, E3) : r2(v2, E3, e))) {
              for (f4 = o2; --f4; ) {
                var T2 = c2[f4];
                if (!(T2 ? jt2(T2, E3) : r2(n2[f4], E3, e)))
                  continue n;
              }
              P && P.push(E3), v2.push(I);
            }
          }
        return v2;
      }
      function Ec(n2, t, e, r2) {
        return $n2(n2, function(s, o2, f4) {
          t(r2, e(s), o2, f4);
        }), r2;
      }
      function ae2(n2, t, e) {
        t = st(t, n2), n2 = Hu(n2, t);
        var r2 = n2 == null ? n2 : n2[Wn2(In(t))];
        return r2 == null ? i3 : cn2(r2, n2, e);
      }
      function Xs3(n2) {
        return Y(n2) && en(n2) == Ot2;
      }
      function yc(n2) {
        return Y(n2) && en(n2) == kt2;
      }
      function Sc(n2) {
        return Y(n2) && en(n2) == Zt2;
      }
      function oe3(n2, t, e, r2, s) {
        return n2 === t ? true : n2 == null || t == null || !Y(n2) && !Y(t) ? n2 !== n2 && t !== t : Oc(n2, t, e, r2, oe3, s);
      }
      function Oc(n2, t, e, r2, s, o2) {
        var f4 = O(n2), c2 = O(t), l = f4 ? me : tn(n2), v2 = c2 ? me : tn(t);
        l = l == Ot2 ? qn2 : l, v2 = v2 == Ot2 ? qn2 : v2;
        var _ = l == qn2, m = v2 == qn2, P = l == v2;
        if (P && at(n2)) {
          if (!at(t))
            return false;
          f4 = true, _ = false;
        }
        if (P && !_)
          return o2 || (o2 = new Rn()), f4 || Bt(n2) ? Ou(n2, t, e, r2, s, o2) : th2(n2, t, l, e, r2, s, o2);
        if (!(e & Et2)) {
          var I = _ && F.call(n2, "__wrapped__"), E3 = m && F.call(t, "__wrapped__");
          if (I || E3) {
            var T2 = I ? n2.value() : n2, y5 = E3 ? t.value() : t;
            return o2 || (o2 = new Rn()), s(T2, y5, e, r2, o2);
          }
        }
        return P ? (o2 || (o2 = new Rn()), eh2(n2, t, e, r2, s, o2)) : false;
      }
      function Rc(n2) {
        return Y(n2) && tn(n2) == yn;
      }
      function kr2(n2, t, e, r2) {
        var s = e.length, o2 = s, f4 = !r2;
        if (n2 == null)
          return !o2;
        for (n2 = M2(n2); s--; ) {
          var c2 = e[s];
          if (f4 && c2[2] ? c2[1] !== n2[c2[0]] : !(c2[0] in n2))
            return false;
        }
        for (; ++s < o2; ) {
          c2 = e[s];
          var l = c2[0], v2 = n2[l], _ = c2[1];
          if (f4 && c2[2]) {
            if (v2 === i3 && !(l in n2))
              return false;
          } else {
            var m = new Rn();
            if (r2)
              var P = r2(v2, _, l, n2, t, m);
            if (!(P === i3 ? oe3(_, v2, Et2 | ve, r2, m) : P))
              return false;
          }
        }
        return true;
      }
      function Qs3(n2) {
        if (!K2(n2) || hh2(n2))
          return false;
        var t = Jn2(n2) ? Rf2 : mo;
        return t.test(wt(n2));
      }
      function bc(n2) {
        return Y(n2) && en(n2) == Xt2;
      }
      function Tc(n2) {
        return Y(n2) && tn(n2) == Sn;
      }
      function Lc(n2) {
        return Y(n2) && ar3(n2.length) && !!B[en(n2)];
      }
      function Vs3(n2) {
        return typeof n2 == "function" ? n2 : n2 == null ? fn2 : typeof n2 == "object" ? O(n2) ? nu(n2[0], n2[1]) : js3(n2) : wa2(n2);
      }
      function jr(n2) {
        if (!he2(n2))
          return Hf(n2);
        var t = [];
        for (var e in M2(n2))
          F.call(n2, e) && e != "constructor" && t.push(e);
        return t;
      }
      function Dc(n2) {
        if (!K2(n2))
          return gh(n2);
        var t = he2(n2), e = [];
        for (var r2 in n2)
          r2 == "constructor" && (t || !F.call(n2, r2)) || e.push(r2);
        return e;
      }
      function ni(n2, t) {
        return n2 < t;
      }
      function ks3(n2, t) {
        var e = -1, r2 = an2(n2) ? d2(n2.length) : [];
        return rt(n2, function(s, o2, f4) {
          r2[++e] = t(s, o2, f4);
        }), r2;
      }
      function js3(n2) {
        var t = gi2(n2);
        return t.length == 1 && t[0][2] ? Du2(t[0][0], t[0][1]) : function(e) {
          return e === n2 || kr2(e, n2, t);
        };
      }
      function nu(n2, t) {
        return _i2(n2) && Lu(t) ? Du2(Wn2(n2), t) : function(e) {
          var r2 = Si2(e, n2);
          return r2 === i3 && r2 === t ? Oi2(e, n2) : oe3(t, r2, Et2 | ve);
        };
      }
      function Ke3(n2, t, e, r2, s) {
        n2 !== t && Jr(t, function(o2, f4) {
          if (s || (s = new Rn()), K2(o2))
            Nc(n2, t, f4, e, Ke3, r2, s);
          else {
            var c2 = r2 ? r2(wi2(n2, f4), o2, f4 + "", n2, t, s) : i3;
            c2 === i3 && (c2 = o2), Yr2(n2, f4, c2);
          }
        }, on2);
      }
      function Nc(n2, t, e, r2, s, o2, f4) {
        var c2 = wi2(n2, e), l = wi2(t, e), v2 = f4.get(l);
        if (v2) {
          Yr2(n2, e, v2);
          return;
        }
        var _ = o2 ? o2(c2, l, e + "", n2, t, f4) : i3, m = _ === i3;
        if (m) {
          var P = O(l), I = !P && at(l), E3 = !P && !I && Bt(l);
          _ = l, P || I || E3 ? O(c2) ? _ = c2 : Z2(c2) ? _ = un2(c2) : I ? (m = false, _ = lu2(l, true)) : E3 ? (m = false, _ = pu2(l, true)) : _ = [] : pe3(l) || Pt(l) ? (_ = c2, Pt(c2) ? _ = fa2(c2) : (!K2(c2) || Jn2(c2)) && (_ = Tu(l))) : m = false;
        }
        m && (f4.set(l, _), s(_, l, r2, o2, f4), f4.delete(l)), Yr2(n2, e, _);
      }
      function tu(n2, t) {
        var e = n2.length;
        if (e)
          return t += t < 0 ? e : 0, Zn2(t, e) ? n2[t] : i3;
      }
      function eu(n2, t, e) {
        t.length ? t = G(t, function(o2) {
          return O(o2) ? function(f4) {
            return _t(f4, o2.length === 1 ? o2[0] : o2);
          } : o2;
        }) : t = [fn2];
        var r2 = -1;
        t = G(t, hn2(x()));
        var s = ks3(n2, function(o2, f4, c2) {
          var l = G(t, function(v2) {
            return v2(o2);
          });
          return { criteria: l, index: ++r2, value: o2 };
        });
        return af2(s, function(o2, f4) {
          return Zc(o2, f4, e);
        });
      }
      function Hc(n2, t) {
        return ru(n2, t, function(e, r2) {
          return Oi2(n2, r2);
        });
      }
      function ru(n2, t, e) {
        for (var r2 = -1, s = t.length, o2 = {}; ++r2 < s; ) {
          var f4 = t[r2], c2 = _t(n2, f4);
          e(c2, f4) && fe2(o2, st(f4, n2), c2);
        }
        return o2;
      }
      function $c(n2) {
        return function(t) {
          return _t(t, n2);
        };
      }
      function ti(n2, t, e, r2) {
        var s = r2 ? uf2 : Tt2, o2 = -1, f4 = t.length, c2 = n2;
        for (n2 === t && (t = un2(t)), e && (c2 = G(n2, hn2(e))); ++o2 < f4; )
          for (var l = 0, v2 = t[o2], _ = e ? e(v2) : v2; (l = s(c2, _, l, r2)) > -1; )
            c2 !== n2 && He3.call(c2, l, 1), He3.call(n2, l, 1);
        return n2;
      }
      function iu(n2, t) {
        for (var e = n2 ? t.length : 0, r2 = e - 1; e--; ) {
          var s = t[e];
          if (e == r2 || s !== o2) {
            var o2 = s;
            Zn2(s) ? He3.call(n2, s, 1) : si(n2, s);
          }
        }
        return n2;
      }
      function ei(n2, t) {
        return n2 + We2(Ws3() * (t - n2 + 1));
      }
      function Uc(n2, t, e, r2) {
        for (var s = -1, o2 = Q3(Ue2((t - n2) / (e || 1)), 0), f4 = d2(o2); o2--; )
          f4[r2 ? o2 : ++s] = n2, n2 += e;
        return f4;
      }
      function ri(n2, t) {
        var e = "";
        if (!n2 || t < 1 || t > kn2)
          return e;
        do
          t % 2 && (e += n2), t = We2(t / 2), t && (n2 += n2);
        while (t);
        return e;
      }
      function L2(n2, t) {
        return Pi2(Nu2(n2, t, fn2), n2 + "");
      }
      function Wc(n2) {
        return qs3(Gt2(n2));
      }
      function Fc(n2, t) {
        var e = Gt2(n2);
        return tr3(e, vt(t, 0, e.length));
      }
      function fe2(n2, t, e, r2) {
        if (!K2(n2))
          return n2;
        t = st(t, n2);
        for (var s = -1, o2 = t.length, f4 = o2 - 1, c2 = n2; c2 != null && ++s < o2; ) {
          var l = Wn2(t[s]), v2 = e;
          if (l === "__proto__" || l === "constructor" || l === "prototype")
            return n2;
          if (s != f4) {
            var _ = c2[l];
            v2 = r2 ? r2(_, l, c2) : i3, v2 === i3 && (v2 = K2(_) ? _ : Zn2(t[s + 1]) ? [] : {});
          }
          se2(c2, l, v2), c2 = c2[l];
        }
        return n2;
      }
      var su = Fe2 ? function(n2, t) {
        return Fe2.set(n2, t), n2;
      } : fn2, Mc = $e2 ? function(n2, t) {
        return $e2(n2, "toString", { configurable: true, enumerable: false, value: bi2(t), writable: true });
      } : fn2;
      function qc(n2) {
        return tr3(Gt2(n2));
      }
      function Cn(n2, t, e) {
        var r2 = -1, s = n2.length;
        t < 0 && (t = -t > s ? 0 : s + t), e = e > s ? s : e, e < 0 && (e += s), s = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o2 = d2(s); ++r2 < s; )
          o2[r2] = n2[r2 + t];
        return o2;
      }
      function Bc(n2, t) {
        var e;
        return rt(n2, function(r2, s, o2) {
          return e = t(r2, s, o2), !e;
        }), !!e;
      }
      function Ye2(n2, t, e) {
        var r2 = 0, s = n2 == null ? r2 : n2.length;
        if (typeof t == "number" && t === t && s <= Ba2) {
          for (; r2 < s; ) {
            var o2 = r2 + s >>> 1, f4 = n2[o2];
            f4 !== null && !pn(f4) && (e ? f4 <= t : f4 < t) ? r2 = o2 + 1 : s = o2;
          }
          return s;
        }
        return ii(n2, t, fn2, e);
      }
      function ii(n2, t, e, r2) {
        var s = 0, o2 = n2 == null ? 0 : n2.length;
        if (o2 === 0)
          return 0;
        t = e(t);
        for (var f4 = t !== t, c2 = t === null, l = pn(t), v2 = t === i3; s < o2; ) {
          var _ = We2((s + o2) / 2), m = e(n2[_]), P = m !== i3, I = m === null, E3 = m === m, T2 = pn(m);
          if (f4)
            var y5 = r2 || E3;
          else
            v2 ? y5 = E3 && (r2 || P) : c2 ? y5 = E3 && P && (r2 || !I) : l ? y5 = E3 && P && !I && (r2 || !T2) : I || T2 ? y5 = false : y5 = r2 ? m <= t : m < t;
          y5 ? s = _ + 1 : o2 = _;
        }
        return nn2(o2, qa2);
      }
      function uu(n2, t) {
        for (var e = -1, r2 = n2.length, s = 0, o2 = []; ++e < r2; ) {
          var f4 = n2[e], c2 = t ? t(f4) : f4;
          if (!e || !bn(c2, l)) {
            var l = c2;
            o2[s++] = f4 === 0 ? 0 : f4;
          }
        }
        return o2;
      }
      function au(n2) {
        return typeof n2 == "number" ? n2 : pn(n2) ? _e : +n2;
      }
      function ln(n2) {
        if (typeof n2 == "string")
          return n2;
        if (O(n2))
          return G(n2, ln) + "";
        if (pn(n2))
          return Fs3 ? Fs3.call(n2) : "";
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ht ? "-0" : t;
      }
      function it(n2, t, e) {
        var r2 = -1, s = Ee2, o2 = n2.length, f4 = true, c2 = [], l = c2;
        if (e)
          f4 = false, s = Dr3;
        else if (o2 >= w2) {
          var v2 = t ? null : jc(n2);
          if (v2)
            return Se3(v2);
          f4 = false, s = jt2, l = new gt();
        } else
          l = t ? [] : c2;
        n:
          for (; ++r2 < o2; ) {
            var _ = n2[r2], m = t ? t(_) : _;
            if (_ = e || _ !== 0 ? _ : 0, f4 && m === m) {
              for (var P = l.length; P--; )
                if (l[P] === m)
                  continue n;
              t && l.push(m), c2.push(_);
            } else
              s(l, m, e) || (l !== c2 && l.push(m), c2.push(_));
          }
        return c2;
      }
      function si(n2, t) {
        return t = st(t, n2), n2 = Hu(n2, t), n2 == null || delete n2[Wn2(In(t))];
      }
      function ou2(n2, t, e, r2) {
        return fe2(n2, t, e(_t(n2, t)), r2);
      }
      function Ze2(n2, t, e, r2) {
        for (var s = n2.length, o2 = r2 ? s : -1; (r2 ? o2-- : ++o2 < s) && t(n2[o2], o2, n2); )
          ;
        return e ? Cn(n2, r2 ? 0 : o2, r2 ? o2 + 1 : s) : Cn(n2, r2 ? o2 + 1 : 0, r2 ? s : o2);
      }
      function fu2(n2, t) {
        var e = n2;
        return e instanceof H && (e = e.value()), Nr2(t, function(r2, s) {
          return s.func.apply(s.thisArg, nt([r2], s.args));
        }, e);
      }
      function ui(n2, t, e) {
        var r2 = n2.length;
        if (r2 < 2)
          return r2 ? it(n2[0]) : [];
        for (var s = -1, o2 = d2(r2); ++s < r2; )
          for (var f4 = n2[s], c2 = -1; ++c2 < r2; )
            c2 != s && (o2[s] = ue3(o2[s] || f4, n2[c2], t, e));
        return it(j2(o2, 1), t, e);
      }
      function cu2(n2, t, e) {
        for (var r2 = -1, s = n2.length, o2 = t.length, f4 = {}; ++r2 < s; ) {
          var c2 = r2 < o2 ? t[r2] : i3;
          e(f4, n2[r2], c2);
        }
        return f4;
      }
      function ai(n2) {
        return Z2(n2) ? n2 : [];
      }
      function oi(n2) {
        return typeof n2 == "function" ? n2 : fn2;
      }
      function st(n2, t) {
        return O(n2) ? n2 : _i2(n2, t) ? [n2] : Fu(W2(n2));
      }
      var Gc = L2;
      function ut(n2, t, e) {
        var r2 = n2.length;
        return e = e === i3 ? r2 : e, !t && e >= r2 ? n2 : Cn(n2, t, e);
      }
      var hu = bf2 || function(n2) {
        return k2.clearTimeout(n2);
      };
      function lu2(n2, t) {
        if (t)
          return n2.slice();
        var e = n2.length, r2 = Ds3 ? Ds3(e) : new n2.constructor(e);
        return n2.copy(r2), r2;
      }
      function fi(n2) {
        var t = new n2.constructor(n2.byteLength);
        return new De2(t).set(new De2(n2)), t;
      }
      function zc(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.byteLength);
      }
      function Kc(n2) {
        var t = new n2.constructor(n2.source, Xi3.exec(n2));
        return t.lastIndex = n2.lastIndex, t;
      }
      function Yc(n2) {
        return ie3 ? M2(ie3.call(n2)) : {};
      }
      function pu2(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.length);
      }
      function du2(n2, t) {
        if (n2 !== t) {
          var e = n2 !== i3, r2 = n2 === null, s = n2 === n2, o2 = pn(n2), f4 = t !== i3, c2 = t === null, l = t === t, v2 = pn(t);
          if (!c2 && !v2 && !o2 && n2 > t || o2 && f4 && l && !c2 && !v2 || r2 && f4 && l || !e && l || !s)
            return 1;
          if (!r2 && !o2 && !v2 && n2 < t || v2 && e && s && !r2 && !o2 || c2 && e && s || !f4 && s || !l)
            return -1;
        }
        return 0;
      }
      function Zc(n2, t, e) {
        for (var r2 = -1, s = n2.criteria, o2 = t.criteria, f4 = s.length, c2 = e.length; ++r2 < f4; ) {
          var l = du2(s[r2], o2[r2]);
          if (l) {
            if (r2 >= c2)
              return l;
            var v2 = e[r2];
            return l * (v2 == "desc" ? -1 : 1);
          }
        }
        return n2.index - t.index;
      }
      function gu2(n2, t, e, r2) {
        for (var s = -1, o2 = n2.length, f4 = e.length, c2 = -1, l = t.length, v2 = Q3(o2 - f4, 0), _ = d2(l + v2), m = !r2; ++c2 < l; )
          _[c2] = t[c2];
        for (; ++s < f4; )
          (m || s < o2) && (_[e[s]] = n2[s]);
        for (; v2--; )
          _[c2++] = n2[s++];
        return _;
      }
      function vu(n2, t, e, r2) {
        for (var s = -1, o2 = n2.length, f4 = -1, c2 = e.length, l = -1, v2 = t.length, _ = Q3(o2 - c2, 0), m = d2(_ + v2), P = !r2; ++s < _; )
          m[s] = n2[s];
        for (var I = s; ++l < v2; )
          m[I + l] = t[l];
        for (; ++f4 < c2; )
          (P || s < o2) && (m[I + e[f4]] = n2[s++]);
        return m;
      }
      function un2(n2, t) {
        var e = -1, r2 = n2.length;
        for (t || (t = d2(r2)); ++e < r2; )
          t[e] = n2[e];
        return t;
      }
      function Un2(n2, t, e, r2) {
        var s = !e;
        e || (e = {});
        for (var o2 = -1, f4 = t.length; ++o2 < f4; ) {
          var c2 = t[o2], l = r2 ? r2(e[c2], n2[c2], c2, e, n2) : i3;
          l === i3 && (l = n2[c2]), s ? zn(e, c2, l) : se2(e, c2, l);
        }
        return e;
      }
      function Jc(n2, t) {
        return Un2(n2, vi(n2), t);
      }
      function Xc(n2, t) {
        return Un2(n2, Ru(n2), t);
      }
      function Je2(n2, t) {
        return function(e, r2) {
          var s = O(e) ? jo : _c, o2 = t ? t() : {};
          return s(e, n2, x(r2, 2), o2);
        };
      }
      function Ft2(n2) {
        return L2(function(t, e) {
          var r2 = -1, s = e.length, o2 = s > 1 ? e[s - 1] : i3, f4 = s > 2 ? e[2] : i3;
          for (o2 = n2.length > 3 && typeof o2 == "function" ? (s--, o2) : i3, f4 && rn(e[0], e[1], f4) && (o2 = s < 3 ? i3 : o2, s = 1), t = M2(t); ++r2 < s; ) {
            var c2 = e[r2];
            c2 && n2(t, c2, r2, o2);
          }
          return t;
        });
      }
      function _u(n2, t) {
        return function(e, r2) {
          if (e == null)
            return e;
          if (!an2(e))
            return n2(e, r2);
          for (var s = e.length, o2 = t ? s : -1, f4 = M2(e); (t ? o2-- : ++o2 < s) && r2(f4[o2], o2, f4) !== false; )
            ;
          return e;
        };
      }
      function mu2(n2) {
        return function(t, e, r2) {
          for (var s = -1, o2 = M2(t), f4 = r2(t), c2 = f4.length; c2--; ) {
            var l = f4[n2 ? c2 : ++s];
            if (e(o2[l], l, o2) === false)
              break;
          }
          return t;
        };
      }
      function Qc(n2, t, e) {
        var r2 = t & vn, s = ce2(n2);
        function o2() {
          var f4 = this && this !== k2 && this instanceof o2 ? s : n2;
          return f4.apply(r2 ? e : this, arguments);
        }
        return o2;
      }
      function wu2(n2) {
        return function(t) {
          t = W2(t);
          var e = Lt2(t) ? On2(t) : i3, r2 = e ? e[0] : t.charAt(0), s = e ? ut(e, 1).join("") : t.slice(1);
          return r2[n2]() + s;
        };
      }
      function Mt(n2) {
        return function(t) {
          return Nr2(_a3(va2(t).replace(Fo2, "")), n2, "");
        };
      }
      function ce2(n2) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n2();
            case 1:
              return new n2(t[0]);
            case 2:
              return new n2(t[0], t[1]);
            case 3:
              return new n2(t[0], t[1], t[2]);
            case 4:
              return new n2(t[0], t[1], t[2], t[3]);
            case 5:
              return new n2(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = Wt3(n2.prototype), r2 = n2.apply(e, t);
          return K2(r2) ? r2 : e;
        };
      }
      function Vc(n2, t, e) {
        var r2 = ce2(n2);
        function s() {
          for (var o2 = arguments.length, f4 = d2(o2), c2 = o2, l = qt(s); c2--; )
            f4[c2] = arguments[c2];
          var v2 = o2 < 3 && f4[0] !== l && f4[o2 - 1] !== l ? [] : tt(f4, l);
          if (o2 -= v2.length, o2 < e)
            return xu2(n2, t, Xe3, s.placeholder, i3, f4, v2, i3, i3, e - o2);
          var _ = this && this !== k2 && this instanceof s ? r2 : n2;
          return cn2(_, this, f4);
        }
        return s;
      }
      function Pu2(n2) {
        return function(t, e, r2) {
          var s = M2(t);
          if (!an2(t)) {
            var o2 = x(e, 3);
            t = V4(t), e = function(c2) {
              return o2(s[c2], c2, s);
            };
          }
          var f4 = n2(t, e, r2);
          return f4 > -1 ? s[o2 ? t[f4] : f4] : i3;
        };
      }
      function Au2(n2) {
        return Yn2(function(t) {
          var e = t.length, r2 = e, s = Pn2.prototype.thru;
          for (n2 && t.reverse(); r2--; ) {
            var o2 = t[r2];
            if (typeof o2 != "function")
              throw new wn(D);
            if (s && !f4 && je2(o2) == "wrapper")
              var f4 = new Pn2([], true);
          }
          for (r2 = f4 ? r2 : e; ++r2 < e; ) {
            o2 = t[r2];
            var c2 = je2(o2), l = c2 == "wrapper" ? di(o2) : i3;
            l && mi(l[0]) && l[1] == (Mn | Dn2 | Nn | Kt3) && !l[4].length && l[9] == 1 ? f4 = f4[je2(l[0])].apply(f4, l[3]) : f4 = o2.length == 1 && mi(o2) ? f4[c2]() : f4.thru(o2);
          }
          return function() {
            var v2 = arguments, _ = v2[0];
            if (f4 && v2.length == 1 && O(_))
              return f4.plant(_).value();
            for (var m = 0, P = e ? t[m].apply(this, v2) : _; ++m < e; )
              P = t[m].call(this, P);
            return P;
          };
        });
      }
      function Xe3(n2, t, e, r2, s, o2, f4, c2, l, v2) {
        var _ = t & Mn, m = t & vn, P = t & ct2, I = t & (Dn2 | yt), E3 = t & dr3, T2 = P ? i3 : ce2(n2);
        function y5() {
          for (var N = arguments.length, $3 = d2(N), dn2 = N; dn2--; )
            $3[dn2] = arguments[dn2];
          if (I)
            var sn2 = qt(y5), gn = ff($3, sn2);
          if (r2 && ($3 = gu2($3, r2, s, I)), o2 && ($3 = vu($3, o2, f4, I)), N -= gn, I && N < v2) {
            var J2 = tt($3, sn2);
            return xu2(n2, t, Xe3, y5.placeholder, e, $3, J2, c2, l, v2 - N);
          }
          var Tn2 = m ? e : this, Qn2 = P ? Tn2[n2] : n2;
          return N = $3.length, c2 ? $3 = _h($3, c2) : E3 && N > 1 && $3.reverse(), _ && l < N && ($3.length = l), this && this !== k2 && this instanceof y5 && (Qn2 = T2 || ce2(Qn2)), Qn2.apply(Tn2, $3);
        }
        return y5;
      }
      function Cu(n2, t) {
        return function(e, r2) {
          return Ec(e, n2, t(r2), {});
        };
      }
      function Qe(n2, t) {
        return function(e, r2) {
          var s;
          if (e === i3 && r2 === i3)
            return t;
          if (e !== i3 && (s = e), r2 !== i3) {
            if (s === i3)
              return r2;
            typeof e == "string" || typeof r2 == "string" ? (e = ln(e), r2 = ln(r2)) : (e = au(e), r2 = au(r2)), s = n2(e, r2);
          }
          return s;
        };
      }
      function ci(n2) {
        return Yn2(function(t) {
          return t = G(t, hn2(x())), L2(function(e) {
            var r2 = this;
            return n2(t, function(s) {
              return cn2(s, r2, e);
            });
          });
        });
      }
      function Ve2(n2, t) {
        t = t === i3 ? " " : ln(t);
        var e = t.length;
        if (e < 2)
          return e ? ri(t, n2) : t;
        var r2 = ri(t, Ue2(n2 / Dt2(t)));
        return Lt2(t) ? ut(On2(r2), 0, n2).join("") : r2.slice(0, n2);
      }
      function kc(n2, t, e, r2) {
        var s = t & vn, o2 = ce2(n2);
        function f4() {
          for (var c2 = -1, l = arguments.length, v2 = -1, _ = r2.length, m = d2(_ + l), P = this && this !== k2 && this instanceof f4 ? o2 : n2; ++v2 < _; )
            m[v2] = r2[v2];
          for (; l--; )
            m[v2++] = arguments[++c2];
          return cn2(P, s ? e : this, m);
        }
        return f4;
      }
      function Iu(n2) {
        return function(t, e, r2) {
          return r2 && typeof r2 != "number" && rn(t, e, r2) && (e = r2 = i3), t = Xn2(t), e === i3 ? (e = t, t = 0) : e = Xn2(e), r2 = r2 === i3 ? t < e ? 1 : -1 : Xn2(r2), Uc(t, e, r2, n2);
        };
      }
      function ke2(n2) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = xn(t), e = xn(e)), n2(t, e);
        };
      }
      function xu2(n2, t, e, r2, s, o2, f4, c2, l, v2) {
        var _ = t & Dn2, m = _ ? f4 : i3, P = _ ? i3 : f4, I = _ ? o2 : i3, E3 = _ ? i3 : o2;
        t |= _ ? Nn : St, t &= ~(_ ? St : Nn), t & Bi2 || (t &= ~(vn | ct2));
        var T2 = [n2, t, s, I, m, E3, P, c2, l, v2], y5 = e.apply(i3, T2);
        return mi(n2) && $u2(y5, T2), y5.placeholder = r2, Uu(y5, n2, t);
      }
      function hi2(n2) {
        var t = X3[n2];
        return function(e, r2) {
          if (e = xn(e), r2 = r2 == null ? 0 : nn2(R2(r2), 292), r2 && Us3(e)) {
            var s = (W2(e) + "e").split("e"), o2 = t(s[0] + "e" + (+s[1] + r2));
            return s = (W2(o2) + "e").split("e"), +(s[0] + "e" + (+s[1] - r2));
          }
          return t(e);
        };
      }
      var jc = $t3 && 1 / Se3(new $t3([, -0]))[1] == ht ? function(n2) {
        return new $t3(n2);
      } : Di2;
      function Eu2(n2) {
        return function(t) {
          var e = tn(t);
          return e == yn ? qr2(t) : e == Sn ? vf2(t) : of(t, n2(t));
        };
      }
      function Kn2(n2, t, e, r2, s, o2, f4, c2) {
        var l = t & ct2;
        if (!l && typeof n2 != "function")
          throw new wn(D);
        var v2 = r2 ? r2.length : 0;
        if (v2 || (t &= ~(Nn | St), r2 = s = i3), f4 = f4 === i3 ? f4 : Q3(R2(f4), 0), c2 = c2 === i3 ? c2 : R2(c2), v2 -= s ? s.length : 0, t & St) {
          var _ = r2, m = s;
          r2 = s = i3;
        }
        var P = l ? i3 : di(n2), I = [n2, t, e, r2, s, _, m, o2, f4, c2];
        if (P && dh(I, P), n2 = I[0], t = I[1], e = I[2], r2 = I[3], s = I[4], c2 = I[9] = I[9] === i3 ? l ? 0 : n2.length : Q3(I[9] - v2, 0), !c2 && t & (Dn2 | yt) && (t &= ~(Dn2 | yt)), !t || t == vn)
          var E3 = Qc(n2, t, e);
        else
          t == Dn2 || t == yt ? E3 = Vc(n2, t, c2) : (t == Nn || t == (vn | Nn)) && !s.length ? E3 = kc(n2, t, e, r2) : E3 = Xe3.apply(i3, I);
        var T2 = P ? su : $u2;
        return Uu(T2(E3, I), n2, t);
      }
      function yu2(n2, t, e, r2) {
        return n2 === i3 || bn(n2, Ht2[e]) && !F.call(r2, e) ? t : n2;
      }
      function Su2(n2, t, e, r2, s, o2) {
        return K2(n2) && K2(t) && (o2.set(t, n2), Ke3(n2, t, i3, Su2, o2), o2.delete(t)), n2;
      }
      function nh2(n2) {
        return pe3(n2) ? i3 : n2;
      }
      function Ou(n2, t, e, r2, s, o2) {
        var f4 = e & Et2, c2 = n2.length, l = t.length;
        if (c2 != l && !(f4 && l > c2))
          return false;
        var v2 = o2.get(n2), _ = o2.get(t);
        if (v2 && _)
          return v2 == t && _ == n2;
        var m = -1, P = true, I = e & ve ? new gt() : i3;
        for (o2.set(n2, t), o2.set(t, n2); ++m < c2; ) {
          var E3 = n2[m], T2 = t[m];
          if (r2)
            var y5 = f4 ? r2(T2, E3, m, t, n2, o2) : r2(E3, T2, m, n2, t, o2);
          if (y5 !== i3) {
            if (y5)
              continue;
            P = false;
            break;
          }
          if (I) {
            if (!Hr2(t, function(N, $3) {
              if (!jt2(I, $3) && (E3 === N || s(E3, N, e, r2, o2)))
                return I.push($3);
            })) {
              P = false;
              break;
            }
          } else if (!(E3 === T2 || s(E3, T2, e, r2, o2))) {
            P = false;
            break;
          }
        }
        return o2.delete(n2), o2.delete(t), P;
      }
      function th2(n2, t, e, r2, s, o2, f4) {
        switch (e) {
          case Rt:
            if (n2.byteLength != t.byteLength || n2.byteOffset != t.byteOffset)
              return false;
            n2 = n2.buffer, t = t.buffer;
          case kt2:
            return !(n2.byteLength != t.byteLength || !o2(new De2(n2), new De2(t)));
          case Yt:
          case Zt2:
          case Jt2:
            return bn(+n2, +t);
          case we2:
            return n2.name == t.name && n2.message == t.message;
          case Xt2:
          case Qt2:
            return n2 == t + "";
          case yn:
            var c2 = qr2;
          case Sn:
            var l = r2 & Et2;
            if (c2 || (c2 = Se3), n2.size != t.size && !l)
              return false;
            var v2 = f4.get(n2);
            if (v2)
              return v2 == t;
            r2 |= ve, f4.set(n2, t);
            var _ = Ou(c2(n2), c2(t), r2, s, o2, f4);
            return f4.delete(n2), _;
          case Ae2:
            if (ie3)
              return ie3.call(n2) == ie3.call(t);
        }
        return false;
      }
      function eh2(n2, t, e, r2, s, o2) {
        var f4 = e & Et2, c2 = li(n2), l = c2.length, v2 = li(t), _ = v2.length;
        if (l != _ && !f4)
          return false;
        for (var m = l; m--; ) {
          var P = c2[m];
          if (!(f4 ? P in t : F.call(t, P)))
            return false;
        }
        var I = o2.get(n2), E3 = o2.get(t);
        if (I && E3)
          return I == t && E3 == n2;
        var T2 = true;
        o2.set(n2, t), o2.set(t, n2);
        for (var y5 = f4; ++m < l; ) {
          P = c2[m];
          var N = n2[P], $3 = t[P];
          if (r2)
            var dn2 = f4 ? r2($3, N, P, t, n2, o2) : r2(N, $3, P, n2, t, o2);
          if (!(dn2 === i3 ? N === $3 || s(N, $3, e, r2, o2) : dn2)) {
            T2 = false;
            break;
          }
          y5 || (y5 = P == "constructor");
        }
        if (T2 && !y5) {
          var sn2 = n2.constructor, gn = t.constructor;
          sn2 != gn && "constructor" in n2 && "constructor" in t && !(typeof sn2 == "function" && sn2 instanceof sn2 && typeof gn == "function" && gn instanceof gn) && (T2 = false);
        }
        return o2.delete(n2), o2.delete(t), T2;
      }
      function Yn2(n2) {
        return Pi2(Nu2(n2, i3, Gu2), n2 + "");
      }
      function li(n2) {
        return Js3(n2, V4, vi);
      }
      function pi2(n2) {
        return Js3(n2, on2, Ru);
      }
      var di = Fe2 ? function(n2) {
        return Fe2.get(n2);
      } : Di2;
      function je2(n2) {
        for (var t = n2.name + "", e = Ut2[t], r2 = F.call(Ut2, t) ? e.length : 0; r2--; ) {
          var s = e[r2], o2 = s.func;
          if (o2 == null || o2 == n2)
            return s.name;
        }
        return t;
      }
      function qt(n2) {
        var t = F.call(a2, "placeholder") ? a2 : n2;
        return t.placeholder;
      }
      function x() {
        var n2 = a2.iteratee || Ti2;
        return n2 = n2 === Ti2 ? Vs3 : n2, arguments.length ? n2(arguments[0], arguments[1]) : n2;
      }
      function nr3(n2, t) {
        var e = n2.__data__;
        return ch2(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function gi2(n2) {
        for (var t = V4(n2), e = t.length; e--; ) {
          var r2 = t[e], s = n2[r2];
          t[e] = [r2, s, Lu(s)];
        }
        return t;
      }
      function mt(n2, t) {
        var e = pf2(n2, t);
        return Qs3(e) ? e : i3;
      }
      function rh2(n2) {
        var t = F.call(n2, pt), e = n2[pt];
        try {
          n2[pt] = i3;
          var r2 = true;
        } catch {
        }
        var s = Te.call(n2);
        return r2 && (t ? n2[pt] = e : delete n2[pt]), s;
      }
      var vi = Gr ? function(n2) {
        return n2 == null ? [] : (n2 = M2(n2), jn2(Gr(n2), function(t) {
          return Hs3.call(n2, t);
        }));
      } : Ni2, Ru = Gr ? function(n2) {
        for (var t = []; n2; )
          nt(t, vi(n2)), n2 = Ne(n2);
        return t;
      } : Ni2, tn = en;
      (zr2 && tn(new zr2(new ArrayBuffer(1))) != Rt || te && tn(new te()) != yn || Kr2 && tn(Kr2.resolve()) != Ki || $t3 && tn(new $t3()) != Sn || ee && tn(new ee()) != Vt2) && (tn = function(n2) {
        var t = en(n2), e = t == qn2 ? n2.constructor : i3, r2 = e ? wt(e) : "";
        if (r2)
          switch (r2) {
            case Ff2:
              return Rt;
            case Mf2:
              return yn;
            case qf:
              return Ki;
            case Bf2:
              return Sn;
            case Gf:
              return Vt2;
          }
        return t;
      });
      function ih2(n2, t, e) {
        for (var r2 = -1, s = e.length; ++r2 < s; ) {
          var o2 = e[r2], f4 = o2.size;
          switch (o2.type) {
            case "drop":
              n2 += f4;
              break;
            case "dropRight":
              t -= f4;
              break;
            case "take":
              t = nn2(t, n2 + f4);
              break;
            case "takeRight":
              n2 = Q3(n2, t - f4);
              break;
          }
        }
        return { start: n2, end: t };
      }
      function sh(n2) {
        var t = n2.match(fo);
        return t ? t[1].split(co) : [];
      }
      function bu2(n2, t, e) {
        t = st(t, n2);
        for (var r2 = -1, s = t.length, o2 = false; ++r2 < s; ) {
          var f4 = Wn2(t[r2]);
          if (!(o2 = n2 != null && e(n2, f4)))
            break;
          n2 = n2[f4];
        }
        return o2 || ++r2 != s ? o2 : (s = n2 == null ? 0 : n2.length, !!s && ar3(s) && Zn2(f4, s) && (O(n2) || Pt(n2)));
      }
      function uh2(n2) {
        var t = n2.length, e = new n2.constructor(t);
        return t && typeof n2[0] == "string" && F.call(n2, "index") && (e.index = n2.index, e.input = n2.input), e;
      }
      function Tu(n2) {
        return typeof n2.constructor == "function" && !he2(n2) ? Wt3(Ne(n2)) : {};
      }
      function ah(n2, t, e) {
        var r2 = n2.constructor;
        switch (t) {
          case kt2:
            return fi(n2);
          case Yt:
          case Zt2:
            return new r2(+n2);
          case Rt:
            return zc(n2, e);
          case gr3:
          case vr2:
          case _r:
          case mr2:
          case wr2:
          case Pr2:
          case Ar2:
          case Cr2:
          case Ir:
            return pu2(n2, e);
          case yn:
            return new r2();
          case Jt2:
          case Qt2:
            return new r2(n2);
          case Xt2:
            return Kc(n2);
          case Sn:
            return new r2();
          case Ae2:
            return Yc(n2);
        }
      }
      function oh2(n2, t) {
        var e = t.length;
        if (!e)
          return n2;
        var r2 = e - 1;
        return t[r2] = (e > 1 ? "& " : "") + t[r2], t = t.join(e > 2 ? ", " : " "), n2.replace(oo, `{
/* [wrapped with ` + t + `] */
`);
      }
      function fh2(n2) {
        return O(n2) || Pt(n2) || !!($s3 && n2 && n2[$s3]);
      }
      function Zn2(n2, t) {
        var e = typeof n2;
        return t = t ?? kn2, !!t && (e == "number" || e != "symbol" && Po.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < t;
      }
      function rn(n2, t, e) {
        if (!K2(e))
          return false;
        var r2 = typeof t;
        return (r2 == "number" ? an2(e) && Zn2(t, e.length) : r2 == "string" && t in e) ? bn(e[t], n2) : false;
      }
      function _i2(n2, t) {
        if (O(n2))
          return false;
        var e = typeof n2;
        return e == "number" || e == "symbol" || e == "boolean" || n2 == null || pn(n2) ? true : io.test(n2) || !ro.test(n2) || t != null && n2 in M2(t);
      }
      function ch2(n2) {
        var t = typeof n2;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n2 !== "__proto__" : n2 === null;
      }
      function mi(n2) {
        var t = je2(n2), e = a2[t];
        if (typeof e != "function" || !(t in H.prototype))
          return false;
        if (n2 === e)
          return true;
        var r2 = di(e);
        return !!r2 && n2 === r2[0];
      }
      function hh2(n2) {
        return !!Ls3 && Ls3 in n2;
      }
      var lh2 = Re3 ? Jn2 : Hi2;
      function he2(n2) {
        var t = n2 && n2.constructor, e = typeof t == "function" && t.prototype || Ht2;
        return n2 === e;
      }
      function Lu(n2) {
        return n2 === n2 && !K2(n2);
      }
      function Du2(n2, t) {
        return function(e) {
          return e == null ? false : e[n2] === t && (t !== i3 || n2 in M2(e));
        };
      }
      function ph(n2) {
        var t = sr3(n2, function(r2) {
          return e.size === pr3 && e.clear(), r2;
        }), e = t.cache;
        return t;
      }
      function dh(n2, t) {
        var e = n2[1], r2 = t[1], s = e | r2, o2 = s < (vn | ct2 | Mn), f4 = r2 == Mn && e == Dn2 || r2 == Mn && e == Kt3 && n2[7].length <= t[8] || r2 == (Mn | Kt3) && t[7].length <= t[8] && e == Dn2;
        if (!(o2 || f4))
          return n2;
        r2 & vn && (n2[2] = t[2], s |= e & vn ? 0 : Bi2);
        var c2 = t[3];
        if (c2) {
          var l = n2[3];
          n2[3] = l ? gu2(l, c2, t[4]) : c2, n2[4] = l ? tt(n2[3], It) : t[4];
        }
        return c2 = t[5], c2 && (l = n2[5], n2[5] = l ? vu(l, c2, t[6]) : c2, n2[6] = l ? tt(n2[5], It) : t[6]), c2 = t[7], c2 && (n2[7] = c2), r2 & Mn && (n2[8] = n2[8] == null ? t[8] : nn2(n2[8], t[8])), n2[9] == null && (n2[9] = t[9]), n2[0] = t[0], n2[1] = s, n2;
      }
      function gh(n2) {
        var t = [];
        if (n2 != null)
          for (var e in M2(n2))
            t.push(e);
        return t;
      }
      function vh(n2) {
        return Te.call(n2);
      }
      function Nu2(n2, t, e) {
        return t = Q3(t === i3 ? n2.length - 1 : t, 0), function() {
          for (var r2 = arguments, s = -1, o2 = Q3(r2.length - t, 0), f4 = d2(o2); ++s < o2; )
            f4[s] = r2[t + s];
          s = -1;
          for (var c2 = d2(t + 1); ++s < t; )
            c2[s] = r2[s];
          return c2[t] = e(f4), cn2(n2, this, c2);
        };
      }
      function Hu(n2, t) {
        return t.length < 2 ? n2 : _t(n2, Cn(t, 0, -1));
      }
      function _h(n2, t) {
        for (var e = n2.length, r2 = nn2(t.length, e), s = un2(n2); r2--; ) {
          var o2 = t[r2];
          n2[r2] = Zn2(o2, e) ? s[o2] : i3;
        }
        return n2;
      }
      function wi2(n2, t) {
        if (!(t === "constructor" && typeof n2[t] == "function") && t != "__proto__")
          return n2[t];
      }
      var $u2 = Wu2(su), le3 = Lf || function(n2, t) {
        return k2.setTimeout(n2, t);
      }, Pi2 = Wu2(Mc);
      function Uu(n2, t, e) {
        var r2 = t + "";
        return Pi2(n2, oh2(r2, mh(sh(r2), e)));
      }
      function Wu2(n2) {
        var t = 0, e = 0;
        return function() {
          var r2 = $f(), s = Ua2 - (r2 - e);
          if (e = r2, s > 0) {
            if (++t >= $a)
              return arguments[0];
          } else
            t = 0;
          return n2.apply(i3, arguments);
        };
      }
      function tr3(n2, t) {
        var e = -1, r2 = n2.length, s = r2 - 1;
        for (t = t === i3 ? r2 : t; ++e < t; ) {
          var o2 = ei(e, s), f4 = n2[o2];
          n2[o2] = n2[e], n2[e] = f4;
        }
        return n2.length = t, n2;
      }
      var Fu = ph(function(n2) {
        var t = [];
        return n2.charCodeAt(0) === 46 && t.push(""), n2.replace(so, function(e, r2, s, o2) {
          t.push(s ? o2.replace(po, "$1") : r2 || e);
        }), t;
      });
      function Wn2(n2) {
        if (typeof n2 == "string" || pn(n2))
          return n2;
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ht ? "-0" : t;
      }
      function wt(n2) {
        if (n2 != null) {
          try {
            return be2.call(n2);
          } catch {
          }
          try {
            return n2 + "";
          } catch {
          }
        }
        return "";
      }
      function mh(n2, t) {
        return mn(Ga, function(e) {
          var r2 = "_." + e[0];
          t & e[1] && !Ee2(n2, r2) && n2.push(r2);
        }), n2.sort();
      }
      function Mu2(n2) {
        if (n2 instanceof H)
          return n2.clone();
        var t = new Pn2(n2.__wrapped__, n2.__chain__);
        return t.__actions__ = un2(n2.__actions__), t.__index__ = n2.__index__, t.__values__ = n2.__values__, t;
      }
      function wh(n2, t, e) {
        (e ? rn(n2, t, e) : t === i3) ? t = 1 : t = Q3(R2(t), 0);
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2 || t < 1)
          return [];
        for (var s = 0, o2 = 0, f4 = d2(Ue2(r2 / t)); s < r2; )
          f4[o2++] = Cn(n2, s, s += t);
        return f4;
      }
      function Ph(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r2 = 0, s = []; ++t < e; ) {
          var o2 = n2[t];
          o2 && (s[r2++] = o2);
        }
        return s;
      }
      function Ah() {
        var n2 = arguments.length;
        if (!n2)
          return [];
        for (var t = d2(n2 - 1), e = arguments[0], r2 = n2; r2--; )
          t[r2 - 1] = arguments[r2];
        return nt(O(e) ? un2(e) : [e], j2(t, 1));
      }
      var Ch = L2(function(n2, t) {
        return Z2(n2) ? ue3(n2, j2(t, 1, Z2, true)) : [];
      }), Ih = L2(function(n2, t) {
        var e = In(t);
        return Z2(e) && (e = i3), Z2(n2) ? ue3(n2, j2(t, 1, Z2, true), x(e, 2)) : [];
      }), xh = L2(function(n2, t) {
        var e = In(t);
        return Z2(e) && (e = i3), Z2(n2) ? ue3(n2, j2(t, 1, Z2, true), i3, e) : [];
      });
      function Eh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (t = e || t === i3 ? 1 : R2(t), Cn(n2, t < 0 ? 0 : t, r2)) : [];
      }
      function yh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (t = e || t === i3 ? 1 : R2(t), t = r2 - t, Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function Sh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3), true, true) : [];
      }
      function Oh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3), true) : [];
      }
      function Rh(n2, t, e, r2) {
        var s = n2 == null ? 0 : n2.length;
        return s ? (e && typeof e != "number" && rn(n2, t, e) && (e = 0, r2 = s), Ac(n2, t, e, r2)) : [];
      }
      function qu(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2)
          return -1;
        var s = e == null ? 0 : R2(e);
        return s < 0 && (s = Q3(r2 + s, 0)), ye2(n2, x(t, 3), s);
      }
      function Bu(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2)
          return -1;
        var s = r2 - 1;
        return e !== i3 && (s = R2(e), s = e < 0 ? Q3(r2 + s, 0) : nn2(s, r2 - 1)), ye2(n2, x(t, 3), s, true);
      }
      function Gu2(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, 1) : [];
      }
      function bh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, ht) : [];
      }
      function Th(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        return e ? (t = t === i3 ? 1 : R2(t), j2(n2, t)) : [];
      }
      function Lh(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r2 = {}; ++t < e; ) {
          var s = n2[t];
          r2[s[0]] = s[1];
        }
        return r2;
      }
      function zu(n2) {
        return n2 && n2.length ? n2[0] : i3;
      }
      function Dh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2)
          return -1;
        var s = e == null ? 0 : R2(e);
        return s < 0 && (s = Q3(r2 + s, 0)), Tt2(n2, t, s);
      }
      function Nh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 0, -1) : [];
      }
      var Hh = L2(function(n2) {
        var t = G(n2, ai);
        return t.length && t[0] === n2[0] ? Vr(t) : [];
      }), $h = L2(function(n2) {
        var t = In(n2), e = G(n2, ai);
        return t === In(e) ? t = i3 : e.pop(), e.length && e[0] === n2[0] ? Vr(e, x(t, 2)) : [];
      }), Uh = L2(function(n2) {
        var t = In(n2), e = G(n2, ai);
        return t = typeof t == "function" ? t : i3, t && e.pop(), e.length && e[0] === n2[0] ? Vr(e, i3, t) : [];
      });
      function Wh(n2, t) {
        return n2 == null ? "" : Nf2.call(n2, t);
      }
      function In(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? n2[t - 1] : i3;
      }
      function Fh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        if (!r2)
          return -1;
        var s = r2;
        return e !== i3 && (s = R2(e), s = s < 0 ? Q3(r2 + s, 0) : nn2(s, r2 - 1)), t === t ? mf2(n2, t, s) : ye2(n2, xs3, s, true);
      }
      function Mh(n2, t) {
        return n2 && n2.length ? tu(n2, R2(t)) : i3;
      }
      var qh = L2(Ku);
      function Ku(n2, t) {
        return n2 && n2.length && t && t.length ? ti(n2, t) : n2;
      }
      function Bh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, x(e, 2)) : n2;
      }
      function Gh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, i3, e) : n2;
      }
      var zh = Yn2(function(n2, t) {
        var e = n2 == null ? 0 : n2.length, r2 = Zr(n2, t);
        return iu(n2, G(t, function(s) {
          return Zn2(s, e) ? +s : s;
        }).sort(du2)), r2;
      });
      function Kh(n2, t) {
        var e = [];
        if (!(n2 && n2.length))
          return e;
        var r2 = -1, s = [], o2 = n2.length;
        for (t = x(t, 3); ++r2 < o2; ) {
          var f4 = n2[r2];
          t(f4, r2, n2) && (e.push(f4), s.push(r2));
        }
        return iu(n2, s), e;
      }
      function Ai2(n2) {
        return n2 == null ? n2 : Wf.call(n2);
      }
      function Yh(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (e && typeof e != "number" && rn(n2, t, e) ? (t = 0, e = r2) : (t = t == null ? 0 : R2(t), e = e === i3 ? r2 : R2(e)), Cn(n2, t, e)) : [];
      }
      function Zh(n2, t) {
        return Ye2(n2, t);
      }
      function Jh(n2, t, e) {
        return ii(n2, t, x(e, 2));
      }
      function Xh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r2 = Ye2(n2, t);
          if (r2 < e && bn(n2[r2], t))
            return r2;
        }
        return -1;
      }
      function Qh(n2, t) {
        return Ye2(n2, t, true);
      }
      function Vh(n2, t, e) {
        return ii(n2, t, x(e, 2), true);
      }
      function kh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r2 = Ye2(n2, t, true) - 1;
          if (bn(n2[r2], t))
            return r2;
        }
        return -1;
      }
      function jh(n2) {
        return n2 && n2.length ? uu(n2) : [];
      }
      function nl(n2, t) {
        return n2 && n2.length ? uu(n2, x(t, 2)) : [];
      }
      function tl(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 1, t) : [];
      }
      function el(n2, t, e) {
        return n2 && n2.length ? (t = e || t === i3 ? 1 : R2(t), Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function rl(n2, t, e) {
        var r2 = n2 == null ? 0 : n2.length;
        return r2 ? (t = e || t === i3 ? 1 : R2(t), t = r2 - t, Cn(n2, t < 0 ? 0 : t, r2)) : [];
      }
      function il(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3), false, true) : [];
      }
      function sl(n2, t) {
        return n2 && n2.length ? Ze2(n2, x(t, 3)) : [];
      }
      var ul = L2(function(n2) {
        return it(j2(n2, 1, Z2, true));
      }), al = L2(function(n2) {
        var t = In(n2);
        return Z2(t) && (t = i3), it(j2(n2, 1, Z2, true), x(t, 2));
      }), ol = L2(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i3, it(j2(n2, 1, Z2, true), i3, t);
      });
      function fl(n2) {
        return n2 && n2.length ? it(n2) : [];
      }
      function cl(n2, t) {
        return n2 && n2.length ? it(n2, x(t, 2)) : [];
      }
      function hl(n2, t) {
        return t = typeof t == "function" ? t : i3, n2 && n2.length ? it(n2, i3, t) : [];
      }
      function Ci2(n2) {
        if (!(n2 && n2.length))
          return [];
        var t = 0;
        return n2 = jn2(n2, function(e) {
          if (Z2(e))
            return t = Q3(e.length, t), true;
        }), Fr2(t, function(e) {
          return G(n2, $r(e));
        });
      }
      function Yu2(n2, t) {
        if (!(n2 && n2.length))
          return [];
        var e = Ci2(n2);
        return t == null ? e : G(e, function(r2) {
          return cn2(t, i3, r2);
        });
      }
      var ll = L2(function(n2, t) {
        return Z2(n2) ? ue3(n2, t) : [];
      }), pl = L2(function(n2) {
        return ui(jn2(n2, Z2));
      }), dl = L2(function(n2) {
        var t = In(n2);
        return Z2(t) && (t = i3), ui(jn2(n2, Z2), x(t, 2));
      }), gl = L2(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i3, ui(jn2(n2, Z2), i3, t);
      }), vl = L2(Ci2);
      function _l(n2, t) {
        return cu2(n2 || [], t || [], se2);
      }
      function ml(n2, t) {
        return cu2(n2 || [], t || [], fe2);
      }
      var wl = L2(function(n2) {
        var t = n2.length, e = t > 1 ? n2[t - 1] : i3;
        return e = typeof e == "function" ? (n2.pop(), e) : i3, Yu2(n2, e);
      });
      function Zu2(n2) {
        var t = a2(n2);
        return t.__chain__ = true, t;
      }
      function Pl(n2, t) {
        return t(n2), n2;
      }
      function er3(n2, t) {
        return t(n2);
      }
      var Al = Yn2(function(n2) {
        var t = n2.length, e = t ? n2[0] : 0, r2 = this.__wrapped__, s = function(o2) {
          return Zr(o2, n2);
        };
        return t > 1 || this.__actions__.length || !(r2 instanceof H) || !Zn2(e) ? this.thru(s) : (r2 = r2.slice(e, +e + (t ? 1 : 0)), r2.__actions__.push({ func: er3, args: [s], thisArg: i3 }), new Pn2(r2, this.__chain__).thru(function(o2) {
          return t && !o2.length && o2.push(i3), o2;
        }));
      });
      function Cl() {
        return Zu2(this);
      }
      function Il() {
        return new Pn2(this.value(), this.__chain__);
      }
      function xl() {
        this.__values__ === i3 && (this.__values__ = aa2(this.value()));
        var n2 = this.__index__ >= this.__values__.length, t = n2 ? i3 : this.__values__[this.__index__++];
        return { done: n2, value: t };
      }
      function El() {
        return this;
      }
      function yl(n2) {
        for (var t, e = this; e instanceof qe2; ) {
          var r2 = Mu2(e);
          r2.__index__ = 0, r2.__values__ = i3, t ? s.__wrapped__ = r2 : t = r2;
          var s = r2;
          e = e.__wrapped__;
        }
        return s.__wrapped__ = n2, t;
      }
      function Sl() {
        var n2 = this.__wrapped__;
        if (n2 instanceof H) {
          var t = n2;
          return this.__actions__.length && (t = new H(this)), t = t.reverse(), t.__actions__.push({ func: er3, args: [Ai2], thisArg: i3 }), new Pn2(t, this.__chain__);
        }
        return this.thru(Ai2);
      }
      function Ol() {
        return fu2(this.__wrapped__, this.__actions__);
      }
      var Rl = Je2(function(n2, t, e) {
        F.call(n2, e) ? ++n2[e] : zn(n2, e, 1);
      });
      function bl(n2, t, e) {
        var r2 = O(n2) ? Cs3 : Pc;
        return e && rn(n2, t, e) && (t = i3), r2(n2, x(t, 3));
      }
      function Tl(n2, t) {
        var e = O(n2) ? jn2 : Ys3;
        return e(n2, x(t, 3));
      }
      var Ll = Pu2(qu), Dl = Pu2(Bu);
      function Nl(n2, t) {
        return j2(rr3(n2, t), 1);
      }
      function Hl(n2, t) {
        return j2(rr3(n2, t), ht);
      }
      function $l(n2, t, e) {
        return e = e === i3 ? 1 : R2(e), j2(rr3(n2, t), e);
      }
      function Ju2(n2, t) {
        var e = O(n2) ? mn : rt;
        return e(n2, x(t, 3));
      }
      function Xu2(n2, t) {
        var e = O(n2) ? nf2 : Ks3;
        return e(n2, x(t, 3));
      }
      var Ul = Je2(function(n2, t, e) {
        F.call(n2, e) ? n2[e].push(t) : zn(n2, e, [t]);
      });
      function Wl(n2, t, e, r2) {
        n2 = an2(n2) ? n2 : Gt2(n2), e = e && !r2 ? R2(e) : 0;
        var s = n2.length;
        return e < 0 && (e = Q3(s + e, 0)), or3(n2) ? e <= s && n2.indexOf(t, e) > -1 : !!s && Tt2(n2, t, e) > -1;
      }
      var Fl = L2(function(n2, t, e) {
        var r2 = -1, s = typeof t == "function", o2 = an2(n2) ? d2(n2.length) : [];
        return rt(n2, function(f4) {
          o2[++r2] = s ? cn2(t, f4, e) : ae2(f4, t, e);
        }), o2;
      }), Ml = Je2(function(n2, t, e) {
        zn(n2, e, t);
      });
      function rr3(n2, t) {
        var e = O(n2) ? G : ks3;
        return e(n2, x(t, 3));
      }
      function ql(n2, t, e, r2) {
        return n2 == null ? [] : (O(t) || (t = t == null ? [] : [t]), e = r2 ? i3 : e, O(e) || (e = e == null ? [] : [e]), eu(n2, t, e));
      }
      var Bl = Je2(function(n2, t, e) {
        n2[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Gl(n2, t, e) {
        var r2 = O(n2) ? Nr2 : ys3, s = arguments.length < 3;
        return r2(n2, x(t, 4), e, s, rt);
      }
      function zl(n2, t, e) {
        var r2 = O(n2) ? tf2 : ys3, s = arguments.length < 3;
        return r2(n2, x(t, 4), e, s, Ks3);
      }
      function Kl(n2, t) {
        var e = O(n2) ? jn2 : Ys3;
        return e(n2, ur3(x(t, 3)));
      }
      function Yl(n2) {
        var t = O(n2) ? qs3 : Wc;
        return t(n2);
      }
      function Zl(n2, t, e) {
        (e ? rn(n2, t, e) : t === i3) ? t = 1 : t = R2(t);
        var r2 = O(n2) ? gc : Fc;
        return r2(n2, t);
      }
      function Jl(n2) {
        var t = O(n2) ? vc : qc;
        return t(n2);
      }
      function Xl(n2) {
        if (n2 == null)
          return 0;
        if (an2(n2))
          return or3(n2) ? Dt2(n2) : n2.length;
        var t = tn(n2);
        return t == yn || t == Sn ? n2.size : jr(n2).length;
      }
      function Ql(n2, t, e) {
        var r2 = O(n2) ? Hr2 : Bc;
        return e && rn(n2, t, e) && (t = i3), r2(n2, x(t, 3));
      }
      var Vl = L2(function(n2, t) {
        if (n2 == null)
          return [];
        var e = t.length;
        return e > 1 && rn(n2, t[0], t[1]) ? t = [] : e > 2 && rn(t[0], t[1], t[2]) && (t = [t[0]]), eu(n2, j2(t, 1), []);
      }), ir3 = Tf || function() {
        return k2.Date.now();
      };
      function kl(n2, t) {
        if (typeof t != "function")
          throw new wn(D);
        return n2 = R2(n2), function() {
          if (--n2 < 1)
            return t.apply(this, arguments);
        };
      }
      function Qu2(n2, t, e) {
        return t = e ? i3 : t, t = n2 && t == null ? n2.length : t, Kn2(n2, Mn, i3, i3, i3, i3, t);
      }
      function Vu2(n2, t) {
        var e;
        if (typeof t != "function")
          throw new wn(D);
        return n2 = R2(n2), function() {
          return --n2 > 0 && (e = t.apply(this, arguments)), n2 <= 1 && (t = i3), e;
        };
      }
      var Ii2 = L2(function(n2, t, e) {
        var r2 = vn;
        if (e.length) {
          var s = tt(e, qt(Ii2));
          r2 |= Nn;
        }
        return Kn2(n2, r2, t, e, s);
      }), ku = L2(function(n2, t, e) {
        var r2 = vn | ct2;
        if (e.length) {
          var s = tt(e, qt(ku));
          r2 |= Nn;
        }
        return Kn2(t, r2, n2, e, s);
      });
      function ju2(n2, t, e) {
        t = e ? i3 : t;
        var r2 = Kn2(n2, Dn2, i3, i3, i3, i3, i3, t);
        return r2.placeholder = ju2.placeholder, r2;
      }
      function na2(n2, t, e) {
        t = e ? i3 : t;
        var r2 = Kn2(n2, yt, i3, i3, i3, i3, i3, t);
        return r2.placeholder = na2.placeholder, r2;
      }
      function ta2(n2, t, e) {
        var r2, s, o2, f4, c2, l, v2 = 0, _ = false, m = false, P = true;
        if (typeof n2 != "function")
          throw new wn(D);
        t = xn(t) || 0, K2(e) && (_ = !!e.leading, m = "maxWait" in e, o2 = m ? Q3(xn(e.maxWait) || 0, t) : o2, P = "trailing" in e ? !!e.trailing : P);
        function I(J2) {
          var Tn2 = r2, Qn2 = s;
          return r2 = s = i3, v2 = J2, f4 = n2.apply(Qn2, Tn2), f4;
        }
        function E3(J2) {
          return v2 = J2, c2 = le3(N, t), _ ? I(J2) : f4;
        }
        function T2(J2) {
          var Tn2 = J2 - l, Qn2 = J2 - v2, Pa2 = t - Tn2;
          return m ? nn2(Pa2, o2 - Qn2) : Pa2;
        }
        function y5(J2) {
          var Tn2 = J2 - l, Qn2 = J2 - v2;
          return l === i3 || Tn2 >= t || Tn2 < 0 || m && Qn2 >= o2;
        }
        function N() {
          var J2 = ir3();
          if (y5(J2))
            return $3(J2);
          c2 = le3(N, T2(J2));
        }
        function $3(J2) {
          return c2 = i3, P && r2 ? I(J2) : (r2 = s = i3, f4);
        }
        function dn2() {
          c2 !== i3 && hu(c2), v2 = 0, r2 = l = s = c2 = i3;
        }
        function sn2() {
          return c2 === i3 ? f4 : $3(ir3());
        }
        function gn() {
          var J2 = ir3(), Tn2 = y5(J2);
          if (r2 = arguments, s = this, l = J2, Tn2) {
            if (c2 === i3)
              return E3(l);
            if (m)
              return hu(c2), c2 = le3(N, t), I(l);
          }
          return c2 === i3 && (c2 = le3(N, t)), f4;
        }
        return gn.cancel = dn2, gn.flush = sn2, gn;
      }
      var jl = L2(function(n2, t) {
        return zs3(n2, 1, t);
      }), np = L2(function(n2, t, e) {
        return zs3(n2, xn(t) || 0, e);
      });
      function tp(n2) {
        return Kn2(n2, dr3);
      }
      function sr3(n2, t) {
        if (typeof n2 != "function" || t != null && typeof t != "function")
          throw new wn(D);
        var e = function() {
          var r2 = arguments, s = t ? t.apply(this, r2) : r2[0], o2 = e.cache;
          if (o2.has(s))
            return o2.get(s);
          var f4 = n2.apply(this, r2);
          return e.cache = o2.set(s, f4) || o2, f4;
        };
        return e.cache = new (sr3.Cache || Gn2)(), e;
      }
      sr3.Cache = Gn2;
      function ur3(n2) {
        if (typeof n2 != "function")
          throw new wn(D);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n2.call(this);
            case 1:
              return !n2.call(this, t[0]);
            case 2:
              return !n2.call(this, t[0], t[1]);
            case 3:
              return !n2.call(this, t[0], t[1], t[2]);
          }
          return !n2.apply(this, t);
        };
      }
      function ep(n2) {
        return Vu2(2, n2);
      }
      var rp = Gc(function(n2, t) {
        t = t.length == 1 && O(t[0]) ? G(t[0], hn2(x())) : G(j2(t, 1), hn2(x()));
        var e = t.length;
        return L2(function(r2) {
          for (var s = -1, o2 = nn2(r2.length, e); ++s < o2; )
            r2[s] = t[s].call(this, r2[s]);
          return cn2(n2, this, r2);
        });
      }), xi2 = L2(function(n2, t) {
        var e = tt(t, qt(xi2));
        return Kn2(n2, Nn, i3, t, e);
      }), ea2 = L2(function(n2, t) {
        var e = tt(t, qt(ea2));
        return Kn2(n2, St, i3, t, e);
      }), ip = Yn2(function(n2, t) {
        return Kn2(n2, Kt3, i3, i3, i3, t);
      });
      function sp(n2, t) {
        if (typeof n2 != "function")
          throw new wn(D);
        return t = t === i3 ? t : R2(t), L2(n2, t);
      }
      function up(n2, t) {
        if (typeof n2 != "function")
          throw new wn(D);
        return t = t == null ? 0 : Q3(R2(t), 0), L2(function(e) {
          var r2 = e[t], s = ut(e, 0, t);
          return r2 && nt(s, r2), cn2(n2, this, s);
        });
      }
      function ap(n2, t, e) {
        var r2 = true, s = true;
        if (typeof n2 != "function")
          throw new wn(D);
        return K2(e) && (r2 = "leading" in e ? !!e.leading : r2, s = "trailing" in e ? !!e.trailing : s), ta2(n2, t, { leading: r2, maxWait: t, trailing: s });
      }
      function op(n2) {
        return Qu2(n2, 1);
      }
      function fp(n2, t) {
        return xi2(oi(t), n2);
      }
      function cp() {
        if (!arguments.length)
          return [];
        var n2 = arguments[0];
        return O(n2) ? n2 : [n2];
      }
      function hp(n2) {
        return An(n2, xt);
      }
      function lp(n2, t) {
        return t = typeof t == "function" ? t : i3, An(n2, xt, t);
      }
      function pp(n2) {
        return An(n2, Ln2 | xt);
      }
      function dp(n2, t) {
        return t = typeof t == "function" ? t : i3, An(n2, Ln2 | xt, t);
      }
      function gp(n2, t) {
        return t == null || Gs3(n2, t, V4(t));
      }
      function bn(n2, t) {
        return n2 === t || n2 !== n2 && t !== t;
      }
      var vp = ke2(Qr2), _p = ke2(function(n2, t) {
        return n2 >= t;
      }), Pt = Xs3(function() {
        return arguments;
      }()) ? Xs3 : function(n2) {
        return Y(n2) && F.call(n2, "callee") && !Hs3.call(n2, "callee");
      }, O = d2.isArray, mp = vs3 ? hn2(vs3) : yc;
      function an2(n2) {
        return n2 != null && ar3(n2.length) && !Jn2(n2);
      }
      function Z2(n2) {
        return Y(n2) && an2(n2);
      }
      function wp(n2) {
        return n2 === true || n2 === false || Y(n2) && en(n2) == Yt;
      }
      var at = Df || Hi2, Pp = _s3 ? hn2(_s3) : Sc;
      function Ap(n2) {
        return Y(n2) && n2.nodeType === 1 && !pe3(n2);
      }
      function Cp(n2) {
        if (n2 == null)
          return true;
        if (an2(n2) && (O(n2) || typeof n2 == "string" || typeof n2.splice == "function" || at(n2) || Bt(n2) || Pt(n2)))
          return !n2.length;
        var t = tn(n2);
        if (t == yn || t == Sn)
          return !n2.size;
        if (he2(n2))
          return !jr(n2).length;
        for (var e in n2)
          if (F.call(n2, e))
            return false;
        return true;
      }
      function Ip(n2, t) {
        return oe3(n2, t);
      }
      function xp(n2, t, e) {
        e = typeof e == "function" ? e : i3;
        var r2 = e ? e(n2, t) : i3;
        return r2 === i3 ? oe3(n2, t, i3, e) : !!r2;
      }
      function Ei(n2) {
        if (!Y(n2))
          return false;
        var t = en(n2);
        return t == we2 || t == Ka2 || typeof n2.message == "string" && typeof n2.name == "string" && !pe3(n2);
      }
      function Ep(n2) {
        return typeof n2 == "number" && Us3(n2);
      }
      function Jn2(n2) {
        if (!K2(n2))
          return false;
        var t = en(n2);
        return t == Pe3 || t == zi || t == za2 || t == Za;
      }
      function ra2(n2) {
        return typeof n2 == "number" && n2 == R2(n2);
      }
      function ar3(n2) {
        return typeof n2 == "number" && n2 > -1 && n2 % 1 == 0 && n2 <= kn2;
      }
      function K2(n2) {
        var t = typeof n2;
        return n2 != null && (t == "object" || t == "function");
      }
      function Y(n2) {
        return n2 != null && typeof n2 == "object";
      }
      var ia2 = ms3 ? hn2(ms3) : Rc;
      function yp(n2, t) {
        return n2 === t || kr2(n2, t, gi2(t));
      }
      function Sp(n2, t, e) {
        return e = typeof e == "function" ? e : i3, kr2(n2, t, gi2(t), e);
      }
      function Op(n2) {
        return sa2(n2) && n2 != +n2;
      }
      function Rp(n2) {
        if (lh2(n2))
          throw new S2(b2);
        return Qs3(n2);
      }
      function bp(n2) {
        return n2 === null;
      }
      function Tp(n2) {
        return n2 == null;
      }
      function sa2(n2) {
        return typeof n2 == "number" || Y(n2) && en(n2) == Jt2;
      }
      function pe3(n2) {
        if (!Y(n2) || en(n2) != qn2)
          return false;
        var t = Ne(n2);
        if (t === null)
          return true;
        var e = F.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && be2.call(e) == Sf2;
      }
      var yi = ws3 ? hn2(ws3) : bc;
      function Lp(n2) {
        return ra2(n2) && n2 >= -kn2 && n2 <= kn2;
      }
      var ua2 = Ps3 ? hn2(Ps3) : Tc;
      function or3(n2) {
        return typeof n2 == "string" || !O(n2) && Y(n2) && en(n2) == Qt2;
      }
      function pn(n2) {
        return typeof n2 == "symbol" || Y(n2) && en(n2) == Ae2;
      }
      var Bt = As3 ? hn2(As3) : Lc;
      function Dp(n2) {
        return n2 === i3;
      }
      function Np(n2) {
        return Y(n2) && tn(n2) == Vt2;
      }
      function Hp(n2) {
        return Y(n2) && en(n2) == Xa;
      }
      var $p = ke2(ni), Up = ke2(function(n2, t) {
        return n2 <= t;
      });
      function aa2(n2) {
        if (!n2)
          return [];
        if (an2(n2))
          return or3(n2) ? On2(n2) : un2(n2);
        if (ne2 && n2[ne2])
          return gf2(n2[ne2]());
        var t = tn(n2), e = t == yn ? qr2 : t == Sn ? Se3 : Gt2;
        return e(n2);
      }
      function Xn2(n2) {
        if (!n2)
          return n2 === 0 ? n2 : 0;
        if (n2 = xn(n2), n2 === ht || n2 === -ht) {
          var t = n2 < 0 ? -1 : 1;
          return t * Ma2;
        }
        return n2 === n2 ? n2 : 0;
      }
      function R2(n2) {
        var t = Xn2(n2), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function oa2(n2) {
        return n2 ? vt(R2(n2), 0, Hn) : 0;
      }
      function xn(n2) {
        if (typeof n2 == "number")
          return n2;
        if (pn(n2))
          return _e;
        if (K2(n2)) {
          var t = typeof n2.valueOf == "function" ? n2.valueOf() : n2;
          n2 = K2(t) ? t + "" : t;
        }
        if (typeof n2 != "string")
          return n2 === 0 ? n2 : +n2;
        n2 = Ss3(n2);
        var e = _o.test(n2);
        return e || wo.test(n2) ? Vo(n2.slice(2), e ? 2 : 8) : vo2.test(n2) ? _e : +n2;
      }
      function fa2(n2) {
        return Un2(n2, on2(n2));
      }
      function Wp(n2) {
        return n2 ? vt(R2(n2), -kn2, kn2) : n2 === 0 ? n2 : 0;
      }
      function W2(n2) {
        return n2 == null ? "" : ln(n2);
      }
      var Fp = Ft2(function(n2, t) {
        if (he2(t) || an2(t)) {
          Un2(t, V4(t), n2);
          return;
        }
        for (var e in t)
          F.call(t, e) && se2(n2, e, t[e]);
      }), ca2 = Ft2(function(n2, t) {
        Un2(t, on2(t), n2);
      }), fr2 = Ft2(function(n2, t, e, r2) {
        Un2(t, on2(t), n2, r2);
      }), Mp = Ft2(function(n2, t, e, r2) {
        Un2(t, V4(t), n2, r2);
      }), qp = Yn2(Zr);
      function Bp(n2, t) {
        var e = Wt3(n2);
        return t == null ? e : Bs3(e, t);
      }
      var Gp = L2(function(n2, t) {
        n2 = M2(n2);
        var e = -1, r2 = t.length, s = r2 > 2 ? t[2] : i3;
        for (s && rn(t[0], t[1], s) && (r2 = 1); ++e < r2; )
          for (var o2 = t[e], f4 = on2(o2), c2 = -1, l = f4.length; ++c2 < l; ) {
            var v2 = f4[c2], _ = n2[v2];
            (_ === i3 || bn(_, Ht2[v2]) && !F.call(n2, v2)) && (n2[v2] = o2[v2]);
          }
        return n2;
      }), zp = L2(function(n2) {
        return n2.push(i3, Su2), cn2(ha2, i3, n2);
      });
      function Kp(n2, t) {
        return Is3(n2, x(t, 3), $n2);
      }
      function Yp(n2, t) {
        return Is3(n2, x(t, 3), Xr);
      }
      function Zp(n2, t) {
        return n2 == null ? n2 : Jr(n2, x(t, 3), on2);
      }
      function Jp(n2, t) {
        return n2 == null ? n2 : Zs3(n2, x(t, 3), on2);
      }
      function Xp(n2, t) {
        return n2 && $n2(n2, x(t, 3));
      }
      function Qp(n2, t) {
        return n2 && Xr(n2, x(t, 3));
      }
      function Vp(n2) {
        return n2 == null ? [] : ze2(n2, V4(n2));
      }
      function kp(n2) {
        return n2 == null ? [] : ze2(n2, on2(n2));
      }
      function Si2(n2, t, e) {
        var r2 = n2 == null ? i3 : _t(n2, t);
        return r2 === i3 ? e : r2;
      }
      function jp(n2, t) {
        return n2 != null && bu2(n2, t, Cc);
      }
      function Oi2(n2, t) {
        return n2 != null && bu2(n2, t, Ic);
      }
      var nd = Cu(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te.call(t)), n2[t] = e;
      }, bi2(fn2)), td = Cu(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te.call(t)), F.call(n2, t) ? n2[t].push(e) : n2[t] = [e];
      }, x), ed = L2(ae2);
      function V4(n2) {
        return an2(n2) ? Ms3(n2) : jr(n2);
      }
      function on2(n2) {
        return an2(n2) ? Ms3(n2, true) : Dc(n2);
      }
      function rd(n2, t) {
        var e = {};
        return t = x(t, 3), $n2(n2, function(r2, s, o2) {
          zn(e, t(r2, s, o2), r2);
        }), e;
      }
      function id(n2, t) {
        var e = {};
        return t = x(t, 3), $n2(n2, function(r2, s, o2) {
          zn(e, s, t(r2, s, o2));
        }), e;
      }
      var sd = Ft2(function(n2, t, e) {
        Ke3(n2, t, e);
      }), ha2 = Ft2(function(n2, t, e, r2) {
        Ke3(n2, t, e, r2);
      }), ud = Yn2(function(n2, t) {
        var e = {};
        if (n2 == null)
          return e;
        var r2 = false;
        t = G(t, function(o2) {
          return o2 = st(o2, n2), r2 || (r2 = o2.length > 1), o2;
        }), Un2(n2, pi2(n2), e), r2 && (e = An(e, Ln2 | Fn2 | xt, nh2));
        for (var s = t.length; s--; )
          si(e, t[s]);
        return e;
      });
      function ad(n2, t) {
        return la2(n2, ur3(x(t)));
      }
      var od = Yn2(function(n2, t) {
        return n2 == null ? {} : Hc(n2, t);
      });
      function la2(n2, t) {
        if (n2 == null)
          return {};
        var e = G(pi2(n2), function(r2) {
          return [r2];
        });
        return t = x(t), ru(n2, e, function(r2, s) {
          return t(r2, s[0]);
        });
      }
      function fd(n2, t, e) {
        t = st(t, n2);
        var r2 = -1, s = t.length;
        for (s || (s = 1, n2 = i3); ++r2 < s; ) {
          var o2 = n2 == null ? i3 : n2[Wn2(t[r2])];
          o2 === i3 && (r2 = s, o2 = e), n2 = Jn2(o2) ? o2.call(n2) : o2;
        }
        return n2;
      }
      function cd(n2, t, e) {
        return n2 == null ? n2 : fe2(n2, t, e);
      }
      function hd(n2, t, e, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, n2 == null ? n2 : fe2(n2, t, e, r2);
      }
      var pa2 = Eu2(V4), da2 = Eu2(on2);
      function ld(n2, t, e) {
        var r2 = O(n2), s = r2 || at(n2) || Bt(n2);
        if (t = x(t, 4), e == null) {
          var o2 = n2 && n2.constructor;
          s ? e = r2 ? new o2() : [] : K2(n2) ? e = Jn2(o2) ? Wt3(Ne(n2)) : {} : e = {};
        }
        return (s ? mn : $n2)(n2, function(f4, c2, l) {
          return t(e, f4, c2, l);
        }), e;
      }
      function pd(n2, t) {
        return n2 == null ? true : si(n2, t);
      }
      function dd(n2, t, e) {
        return n2 == null ? n2 : ou2(n2, t, oi(e));
      }
      function gd(n2, t, e, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, n2 == null ? n2 : ou2(n2, t, oi(e), r2);
      }
      function Gt2(n2) {
        return n2 == null ? [] : Mr2(n2, V4(n2));
      }
      function vd(n2) {
        return n2 == null ? [] : Mr2(n2, on2(n2));
      }
      function _d(n2, t, e) {
        return e === i3 && (e = t, t = i3), e !== i3 && (e = xn(e), e = e === e ? e : 0), t !== i3 && (t = xn(t), t = t === t ? t : 0), vt(xn(n2), t, e);
      }
      function md(n2, t, e) {
        return t = Xn2(t), e === i3 ? (e = t, t = 0) : e = Xn2(e), n2 = xn(n2), xc(n2, t, e);
      }
      function wd(n2, t, e) {
        if (e && typeof e != "boolean" && rn(n2, t, e) && (t = e = i3), e === i3 && (typeof t == "boolean" ? (e = t, t = i3) : typeof n2 == "boolean" && (e = n2, n2 = i3)), n2 === i3 && t === i3 ? (n2 = 0, t = 1) : (n2 = Xn2(n2), t === i3 ? (t = n2, n2 = 0) : t = Xn2(t)), n2 > t) {
          var r2 = n2;
          n2 = t, t = r2;
        }
        if (e || n2 % 1 || t % 1) {
          var s = Ws3();
          return nn2(n2 + s * (t - n2 + Qo("1e-" + ((s + "").length - 1))), t);
        }
        return ei(n2, t);
      }
      var Pd = Mt(function(n2, t, e) {
        return t = t.toLowerCase(), n2 + (e ? ga2(t) : t);
      });
      function ga2(n2) {
        return Ri2(W2(n2).toLowerCase());
      }
      function va2(n2) {
        return n2 = W2(n2), n2 && n2.replace(Ao, cf2).replace(Mo, "");
      }
      function Ad(n2, t, e) {
        n2 = W2(n2), t = ln(t);
        var r2 = n2.length;
        e = e === i3 ? r2 : vt(R2(e), 0, r2);
        var s = e;
        return e -= t.length, e >= 0 && n2.slice(e, s) == t;
      }
      function Cd(n2) {
        return n2 = W2(n2), n2 && no.test(n2) ? n2.replace(Zi3, hf2) : n2;
      }
      function Id(n2) {
        return n2 = W2(n2), n2 && uo.test(n2) ? n2.replace(xr2, "\\$&") : n2;
      }
      var xd = Mt(function(n2, t, e) {
        return n2 + (e ? "-" : "") + t.toLowerCase();
      }), Ed = Mt(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toLowerCase();
      }), yd = wu2("toLowerCase");
      function Sd(n2, t, e) {
        n2 = W2(n2), t = R2(t);
        var r2 = t ? Dt2(n2) : 0;
        if (!t || r2 >= t)
          return n2;
        var s = (t - r2) / 2;
        return Ve2(We2(s), e) + n2 + Ve2(Ue2(s), e);
      }
      function Od(n2, t, e) {
        n2 = W2(n2), t = R2(t);
        var r2 = t ? Dt2(n2) : 0;
        return t && r2 < t ? n2 + Ve2(t - r2, e) : n2;
      }
      function Rd(n2, t, e) {
        n2 = W2(n2), t = R2(t);
        var r2 = t ? Dt2(n2) : 0;
        return t && r2 < t ? Ve2(t - r2, e) + n2 : n2;
      }
      function bd(n2, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), Uf(W2(n2).replace(Er2, ""), t || 0);
      }
      function Td(n2, t, e) {
        return (e ? rn(n2, t, e) : t === i3) ? t = 1 : t = R2(t), ri(W2(n2), t);
      }
      function Ld() {
        var n2 = arguments, t = W2(n2[0]);
        return n2.length < 3 ? t : t.replace(n2[1], n2[2]);
      }
      var Dd = Mt(function(n2, t, e) {
        return n2 + (e ? "_" : "") + t.toLowerCase();
      });
      function Nd(n2, t, e) {
        return e && typeof e != "number" && rn(n2, t, e) && (t = e = i3), e = e === i3 ? Hn : e >>> 0, e ? (n2 = W2(n2), n2 && (typeof t == "string" || t != null && !yi(t)) && (t = ln(t), !t && Lt2(n2)) ? ut(On2(n2), 0, e) : n2.split(t, e)) : [];
      }
      var Hd = Mt(function(n2, t, e) {
        return n2 + (e ? " " : "") + Ri2(t);
      });
      function $d(n2, t, e) {
        return n2 = W2(n2), e = e == null ? 0 : vt(R2(e), 0, n2.length), t = ln(t), n2.slice(e, e + t.length) == t;
      }
      function Ud(n2, t, e) {
        var r2 = a2.templateSettings;
        e && rn(n2, t, e) && (t = i3), n2 = W2(n2), t = fr2({}, t, r2, yu2);
        var s = fr2({}, t.imports, r2.imports, yu2), o2 = V4(s), f4 = Mr2(s, o2), c2, l, v2 = 0, _ = t.interpolate || Ce2, m = "__p += '", P = Br2((t.escape || Ce2).source + "|" + _.source + "|" + (_ === Ji2 ? go : Ce2).source + "|" + (t.evaluate || Ce2).source + "|$", "g"), I = "//# sourceURL=" + (F.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ko + "]") + `
`;
        n2.replace(P, function(y5, N, $3, dn2, sn2, gn) {
          return $3 || ($3 = dn2), m += n2.slice(v2, gn).replace(Co, lf2), N && (c2 = true, m += `' +
__e(` + N + `) +
'`), sn2 && (l = true, m += `';
` + sn2 + `;
__p += '`), $3 && (m += `' +
((__t = (` + $3 + `)) == null ? '' : __t) +
'`), v2 = gn + y5.length, y5;
        }), m += `';
`;
        var E3 = F.call(t, "variable") && t.variable;
        if (!E3)
          m = `with (obj) {
` + m + `
}
`;
        else if (lo.test(E3))
          throw new S2(En);
        m = (l ? m.replace(Qa2, "") : m).replace(Va, "$1").replace(ka2, "$1;"), m = "function(" + (E3 || "obj") + `) {
` + (E3 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c2 ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m + `return __p
}`;
        var T2 = ma2(function() {
          return U3(o2, I + "return " + m).apply(i3, f4);
        });
        if (T2.source = m, Ei(T2))
          throw T2;
        return T2;
      }
      function Wd(n2) {
        return W2(n2).toLowerCase();
      }
      function Fd(n2) {
        return W2(n2).toUpperCase();
      }
      function Md(n2, t, e) {
        if (n2 = W2(n2), n2 && (e || t === i3))
          return Ss3(n2);
        if (!n2 || !(t = ln(t)))
          return n2;
        var r2 = On2(n2), s = On2(t), o2 = Os3(r2, s), f4 = Rs3(r2, s) + 1;
        return ut(r2, o2, f4).join("");
      }
      function qd(n2, t, e) {
        if (n2 = W2(n2), n2 && (e || t === i3))
          return n2.slice(0, Ts3(n2) + 1);
        if (!n2 || !(t = ln(t)))
          return n2;
        var r2 = On2(n2), s = Rs3(r2, On2(t)) + 1;
        return ut(r2, 0, s).join("");
      }
      function Bd(n2, t, e) {
        if (n2 = W2(n2), n2 && (e || t === i3))
          return n2.replace(Er2, "");
        if (!n2 || !(t = ln(t)))
          return n2;
        var r2 = On2(n2), s = Os3(r2, On2(t));
        return ut(r2, s).join("");
      }
      function Gd(n2, t) {
        var e = Na2, r2 = Ha2;
        if (K2(t)) {
          var s = "separator" in t ? t.separator : s;
          e = "length" in t ? R2(t.length) : e, r2 = "omission" in t ? ln(t.omission) : r2;
        }
        n2 = W2(n2);
        var o2 = n2.length;
        if (Lt2(n2)) {
          var f4 = On2(n2);
          o2 = f4.length;
        }
        if (e >= o2)
          return n2;
        var c2 = e - Dt2(r2);
        if (c2 < 1)
          return r2;
        var l = f4 ? ut(f4, 0, c2).join("") : n2.slice(0, c2);
        if (s === i3)
          return l + r2;
        if (f4 && (c2 += l.length - c2), yi(s)) {
          if (n2.slice(c2).search(s)) {
            var v2, _ = l;
            for (s.global || (s = Br2(s.source, W2(Xi3.exec(s)) + "g")), s.lastIndex = 0; v2 = s.exec(_); )
              var m = v2.index;
            l = l.slice(0, m === i3 ? c2 : m);
          }
        } else if (n2.indexOf(ln(s), c2) != c2) {
          var P = l.lastIndexOf(s);
          P > -1 && (l = l.slice(0, P));
        }
        return l + r2;
      }
      function zd(n2) {
        return n2 = W2(n2), n2 && ja2.test(n2) ? n2.replace(Yi2, wf2) : n2;
      }
      var Kd = Mt(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toUpperCase();
      }), Ri2 = wu2("toUpperCase");
      function _a3(n2, t, e) {
        return n2 = W2(n2), t = e ? i3 : t, t === i3 ? df2(n2) ? Cf2(n2) : sf2(n2) : n2.match(t) || [];
      }
      var ma2 = L2(function(n2, t) {
        try {
          return cn2(n2, i3, t);
        } catch (e) {
          return Ei(e) ? e : new S2(e);
        }
      }), Yd = Yn2(function(n2, t) {
        return mn(t, function(e) {
          e = Wn2(e), zn(n2, e, Ii2(n2[e], n2));
        }), n2;
      });
      function Zd(n2) {
        var t = n2 == null ? 0 : n2.length, e = x();
        return n2 = t ? G(n2, function(r2) {
          if (typeof r2[1] != "function")
            throw new wn(D);
          return [e(r2[0]), r2[1]];
        }) : [], L2(function(r2) {
          for (var s = -1; ++s < t; ) {
            var o2 = n2[s];
            if (cn2(o2[0], this, r2))
              return cn2(o2[1], this, r2);
          }
        });
      }
      function Jd(n2) {
        return wc(An(n2, Ln2));
      }
      function bi2(n2) {
        return function() {
          return n2;
        };
      }
      function Xd(n2, t) {
        return n2 == null || n2 !== n2 ? t : n2;
      }
      var Qd = Au2(), Vd = Au2(true);
      function fn2(n2) {
        return n2;
      }
      function Ti2(n2) {
        return Vs3(typeof n2 == "function" ? n2 : An(n2, Ln2));
      }
      function kd(n2) {
        return js3(An(n2, Ln2));
      }
      function jd(n2, t) {
        return nu(n2, An(t, Ln2));
      }
      var ng = L2(function(n2, t) {
        return function(e) {
          return ae2(e, n2, t);
        };
      }), tg = L2(function(n2, t) {
        return function(e) {
          return ae2(n2, e, t);
        };
      });
      function Li2(n2, t, e) {
        var r2 = V4(t), s = ze2(t, r2);
        e == null && !(K2(t) && (s.length || !r2.length)) && (e = t, t = n2, n2 = this, s = ze2(t, V4(t)));
        var o2 = !(K2(e) && "chain" in e) || !!e.chain, f4 = Jn2(n2);
        return mn(s, function(c2) {
          var l = t[c2];
          n2[c2] = l, f4 && (n2.prototype[c2] = function() {
            var v2 = this.__chain__;
            if (o2 || v2) {
              var _ = n2(this.__wrapped__), m = _.__actions__ = un2(this.__actions__);
              return m.push({ func: l, args: arguments, thisArg: n2 }), _.__chain__ = v2, _;
            }
            return l.apply(n2, nt([this.value()], arguments));
          });
        }), n2;
      }
      function eg() {
        return k2._ === this && (k2._ = Of2), this;
      }
      function Di2() {
      }
      function rg(n2) {
        return n2 = R2(n2), L2(function(t) {
          return tu(t, n2);
        });
      }
      var ig = ci(G), sg = ci(Cs3), ug = ci(Hr2);
      function wa2(n2) {
        return _i2(n2) ? $r(Wn2(n2)) : $c(n2);
      }
      function ag(n2) {
        return function(t) {
          return n2 == null ? i3 : _t(n2, t);
        };
      }
      var og = Iu(), fg = Iu(true);
      function Ni2() {
        return [];
      }
      function Hi2() {
        return false;
      }
      function cg() {
        return {};
      }
      function hg() {
        return "";
      }
      function lg() {
        return true;
      }
      function pg(n2, t) {
        if (n2 = R2(n2), n2 < 1 || n2 > kn2)
          return [];
        var e = Hn, r2 = nn2(n2, Hn);
        t = x(t), n2 -= Hn;
        for (var s = Fr2(r2, t); ++e < n2; )
          t(e);
        return s;
      }
      function dg(n2) {
        return O(n2) ? G(n2, Wn2) : pn(n2) ? [n2] : un2(Fu(W2(n2)));
      }
      function gg(n2) {
        var t = ++yf2;
        return W2(n2) + t;
      }
      var vg = Qe(function(n2, t) {
        return n2 + t;
      }, 0), _g = hi2("ceil"), mg = Qe(function(n2, t) {
        return n2 / t;
      }, 1), wg = hi2("floor");
      function Pg(n2) {
        return n2 && n2.length ? Ge3(n2, fn2, Qr2) : i3;
      }
      function Ag(n2, t) {
        return n2 && n2.length ? Ge3(n2, x(t, 2), Qr2) : i3;
      }
      function Cg(n2) {
        return Es3(n2, fn2);
      }
      function Ig(n2, t) {
        return Es3(n2, x(t, 2));
      }
      function xg(n2) {
        return n2 && n2.length ? Ge3(n2, fn2, ni) : i3;
      }
      function Eg(n2, t) {
        return n2 && n2.length ? Ge3(n2, x(t, 2), ni) : i3;
      }
      var yg = Qe(function(n2, t) {
        return n2 * t;
      }, 1), Sg = hi2("round"), Og = Qe(function(n2, t) {
        return n2 - t;
      }, 0);
      function Rg(n2) {
        return n2 && n2.length ? Wr(n2, fn2) : 0;
      }
      function bg(n2, t) {
        return n2 && n2.length ? Wr(n2, x(t, 2)) : 0;
      }
      return a2.after = kl, a2.ary = Qu2, a2.assign = Fp, a2.assignIn = ca2, a2.assignInWith = fr2, a2.assignWith = Mp, a2.at = qp, a2.before = Vu2, a2.bind = Ii2, a2.bindAll = Yd, a2.bindKey = ku, a2.castArray = cp, a2.chain = Zu2, a2.chunk = wh, a2.compact = Ph, a2.concat = Ah, a2.cond = Zd, a2.conforms = Jd, a2.constant = bi2, a2.countBy = Rl, a2.create = Bp, a2.curry = ju2, a2.curryRight = na2, a2.debounce = ta2, a2.defaults = Gp, a2.defaultsDeep = zp, a2.defer = jl, a2.delay = np, a2.difference = Ch, a2.differenceBy = Ih, a2.differenceWith = xh, a2.drop = Eh, a2.dropRight = yh, a2.dropRightWhile = Sh, a2.dropWhile = Oh, a2.fill = Rh, a2.filter = Tl, a2.flatMap = Nl, a2.flatMapDeep = Hl, a2.flatMapDepth = $l, a2.flatten = Gu2, a2.flattenDeep = bh, a2.flattenDepth = Th, a2.flip = tp, a2.flow = Qd, a2.flowRight = Vd, a2.fromPairs = Lh, a2.functions = Vp, a2.functionsIn = kp, a2.groupBy = Ul, a2.initial = Nh, a2.intersection = Hh, a2.intersectionBy = $h, a2.intersectionWith = Uh, a2.invert = nd, a2.invertBy = td, a2.invokeMap = Fl, a2.iteratee = Ti2, a2.keyBy = Ml, a2.keys = V4, a2.keysIn = on2, a2.map = rr3, a2.mapKeys = rd, a2.mapValues = id, a2.matches = kd, a2.matchesProperty = jd, a2.memoize = sr3, a2.merge = sd, a2.mergeWith = ha2, a2.method = ng, a2.methodOf = tg, a2.mixin = Li2, a2.negate = ur3, a2.nthArg = rg, a2.omit = ud, a2.omitBy = ad, a2.once = ep, a2.orderBy = ql, a2.over = ig, a2.overArgs = rp, a2.overEvery = sg, a2.overSome = ug, a2.partial = xi2, a2.partialRight = ea2, a2.partition = Bl, a2.pick = od, a2.pickBy = la2, a2.property = wa2, a2.propertyOf = ag, a2.pull = qh, a2.pullAll = Ku, a2.pullAllBy = Bh, a2.pullAllWith = Gh, a2.pullAt = zh, a2.range = og, a2.rangeRight = fg, a2.rearg = ip, a2.reject = Kl, a2.remove = Kh, a2.rest = sp, a2.reverse = Ai2, a2.sampleSize = Zl, a2.set = cd, a2.setWith = hd, a2.shuffle = Jl, a2.slice = Yh, a2.sortBy = Vl, a2.sortedUniq = jh, a2.sortedUniqBy = nl, a2.split = Nd, a2.spread = up, a2.tail = tl, a2.take = el, a2.takeRight = rl, a2.takeRightWhile = il, a2.takeWhile = sl, a2.tap = Pl, a2.throttle = ap, a2.thru = er3, a2.toArray = aa2, a2.toPairs = pa2, a2.toPairsIn = da2, a2.toPath = dg, a2.toPlainObject = fa2, a2.transform = ld, a2.unary = op, a2.union = ul, a2.unionBy = al, a2.unionWith = ol, a2.uniq = fl, a2.uniqBy = cl, a2.uniqWith = hl, a2.unset = pd, a2.unzip = Ci2, a2.unzipWith = Yu2, a2.update = dd, a2.updateWith = gd, a2.values = Gt2, a2.valuesIn = vd, a2.without = ll, a2.words = _a3, a2.wrap = fp, a2.xor = pl, a2.xorBy = dl, a2.xorWith = gl, a2.zip = vl, a2.zipObject = _l, a2.zipObjectDeep = ml, a2.zipWith = wl, a2.entries = pa2, a2.entriesIn = da2, a2.extend = ca2, a2.extendWith = fr2, Li2(a2, a2), a2.add = vg, a2.attempt = ma2, a2.camelCase = Pd, a2.capitalize = ga2, a2.ceil = _g, a2.clamp = _d, a2.clone = hp, a2.cloneDeep = pp, a2.cloneDeepWith = dp, a2.cloneWith = lp, a2.conformsTo = gp, a2.deburr = va2, a2.defaultTo = Xd, a2.divide = mg, a2.endsWith = Ad, a2.eq = bn, a2.escape = Cd, a2.escapeRegExp = Id, a2.every = bl, a2.find = Ll, a2.findIndex = qu, a2.findKey = Kp, a2.findLast = Dl, a2.findLastIndex = Bu, a2.findLastKey = Yp, a2.floor = wg, a2.forEach = Ju2, a2.forEachRight = Xu2, a2.forIn = Zp, a2.forInRight = Jp, a2.forOwn = Xp, a2.forOwnRight = Qp, a2.get = Si2, a2.gt = vp, a2.gte = _p, a2.has = jp, a2.hasIn = Oi2, a2.head = zu, a2.identity = fn2, a2.includes = Wl, a2.indexOf = Dh, a2.inRange = md, a2.invoke = ed, a2.isArguments = Pt, a2.isArray = O, a2.isArrayBuffer = mp, a2.isArrayLike = an2, a2.isArrayLikeObject = Z2, a2.isBoolean = wp, a2.isBuffer = at, a2.isDate = Pp, a2.isElement = Ap, a2.isEmpty = Cp, a2.isEqual = Ip, a2.isEqualWith = xp, a2.isError = Ei, a2.isFinite = Ep, a2.isFunction = Jn2, a2.isInteger = ra2, a2.isLength = ar3, a2.isMap = ia2, a2.isMatch = yp, a2.isMatchWith = Sp, a2.isNaN = Op, a2.isNative = Rp, a2.isNil = Tp, a2.isNull = bp, a2.isNumber = sa2, a2.isObject = K2, a2.isObjectLike = Y, a2.isPlainObject = pe3, a2.isRegExp = yi, a2.isSafeInteger = Lp, a2.isSet = ua2, a2.isString = or3, a2.isSymbol = pn, a2.isTypedArray = Bt, a2.isUndefined = Dp, a2.isWeakMap = Np, a2.isWeakSet = Hp, a2.join = Wh, a2.kebabCase = xd, a2.last = In, a2.lastIndexOf = Fh, a2.lowerCase = Ed, a2.lowerFirst = yd, a2.lt = $p, a2.lte = Up, a2.max = Pg, a2.maxBy = Ag, a2.mean = Cg, a2.meanBy = Ig, a2.min = xg, a2.minBy = Eg, a2.stubArray = Ni2, a2.stubFalse = Hi2, a2.stubObject = cg, a2.stubString = hg, a2.stubTrue = lg, a2.multiply = yg, a2.nth = Mh, a2.noConflict = eg, a2.noop = Di2, a2.now = ir3, a2.pad = Sd, a2.padEnd = Od, a2.padStart = Rd, a2.parseInt = bd, a2.random = wd, a2.reduce = Gl, a2.reduceRight = zl, a2.repeat = Td, a2.replace = Ld, a2.result = fd, a2.round = Sg, a2.runInContext = h3, a2.sample = Yl, a2.size = Xl, a2.snakeCase = Dd, a2.some = Ql, a2.sortedIndex = Zh, a2.sortedIndexBy = Jh, a2.sortedIndexOf = Xh, a2.sortedLastIndex = Qh, a2.sortedLastIndexBy = Vh, a2.sortedLastIndexOf = kh, a2.startCase = Hd, a2.startsWith = $d, a2.subtract = Og, a2.sum = Rg, a2.sumBy = bg, a2.template = Ud, a2.times = pg, a2.toFinite = Xn2, a2.toInteger = R2, a2.toLength = oa2, a2.toLower = Wd, a2.toNumber = xn, a2.toSafeInteger = Wp, a2.toString = W2, a2.toUpper = Fd, a2.trim = Md, a2.trimEnd = qd, a2.trimStart = Bd, a2.truncate = Gd, a2.unescape = zd, a2.uniqueId = gg, a2.upperCase = Kd, a2.upperFirst = Ri2, a2.each = Ju2, a2.eachRight = Xu2, a2.first = zu, Li2(a2, function() {
        var n2 = {};
        return $n2(a2, function(t, e) {
          F.call(a2.prototype, e) || (n2[e] = t);
        }), n2;
      }(), { chain: false }), a2.VERSION = p2, mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n2) {
        a2[n2].placeholder = a2;
      }), mn(["drop", "take"], function(n2, t) {
        H.prototype[n2] = function(e) {
          e = e === i3 ? 1 : Q3(R2(e), 0);
          var r2 = this.__filtered__ && !t ? new H(this) : this.clone();
          return r2.__filtered__ ? r2.__takeCount__ = nn2(e, r2.__takeCount__) : r2.__views__.push({ size: nn2(e, Hn), type: n2 + (r2.__dir__ < 0 ? "Right" : "") }), r2;
        }, H.prototype[n2 + "Right"] = function(e) {
          return this.reverse()[n2](e).reverse();
        };
      }), mn(["filter", "map", "takeWhile"], function(n2, t) {
        var e = t + 1, r2 = e == Gi2 || e == Fa2;
        H.prototype[n2] = function(s) {
          var o2 = this.clone();
          return o2.__iteratees__.push({ iteratee: x(s, 3), type: e }), o2.__filtered__ = o2.__filtered__ || r2, o2;
        };
      }), mn(["head", "last"], function(n2, t) {
        var e = "take" + (t ? "Right" : "");
        H.prototype[n2] = function() {
          return this[e](1).value()[0];
        };
      }), mn(["initial", "tail"], function(n2, t) {
        var e = "drop" + (t ? "" : "Right");
        H.prototype[n2] = function() {
          return this.__filtered__ ? new H(this) : this[e](1);
        };
      }), H.prototype.compact = function() {
        return this.filter(fn2);
      }, H.prototype.find = function(n2) {
        return this.filter(n2).head();
      }, H.prototype.findLast = function(n2) {
        return this.reverse().find(n2);
      }, H.prototype.invokeMap = L2(function(n2, t) {
        return typeof n2 == "function" ? new H(this) : this.map(function(e) {
          return ae2(e, n2, t);
        });
      }), H.prototype.reject = function(n2) {
        return this.filter(ur3(x(n2)));
      }, H.prototype.slice = function(n2, t) {
        n2 = R2(n2);
        var e = this;
        return e.__filtered__ && (n2 > 0 || t < 0) ? new H(e) : (n2 < 0 ? e = e.takeRight(-n2) : n2 && (e = e.drop(n2)), t !== i3 && (t = R2(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n2)), e);
      }, H.prototype.takeRightWhile = function(n2) {
        return this.reverse().takeWhile(n2).reverse();
      }, H.prototype.toArray = function() {
        return this.take(Hn);
      }, $n2(H.prototype, function(n2, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r2 = /^(?:head|last)$/.test(t), s = a2[r2 ? "take" + (t == "last" ? "Right" : "") : t], o2 = r2 || /^find/.test(t);
        s && (a2.prototype[t] = function() {
          var f4 = this.__wrapped__, c2 = r2 ? [1] : arguments, l = f4 instanceof H, v2 = c2[0], _ = l || O(f4), m = function(N) {
            var $3 = s.apply(a2, nt([N], c2));
            return r2 && P ? $3[0] : $3;
          };
          _ && e && typeof v2 == "function" && v2.length != 1 && (l = _ = false);
          var P = this.__chain__, I = !!this.__actions__.length, E3 = o2 && !P, T2 = l && !I;
          if (!o2 && _) {
            f4 = T2 ? f4 : new H(this);
            var y5 = n2.apply(f4, c2);
            return y5.__actions__.push({ func: er3, args: [m], thisArg: i3 }), new Pn2(y5, P);
          }
          return E3 && T2 ? n2.apply(this, c2) : (y5 = this.thru(m), E3 ? r2 ? y5.value()[0] : y5.value() : y5);
        });
      }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n2) {
        var t = Oe[n2], e = /^(?:push|sort|unshift)$/.test(n2) ? "tap" : "thru", r2 = /^(?:pop|shift)$/.test(n2);
        a2.prototype[n2] = function() {
          var s = arguments;
          if (r2 && !this.__chain__) {
            var o2 = this.value();
            return t.apply(O(o2) ? o2 : [], s);
          }
          return this[e](function(f4) {
            return t.apply(O(f4) ? f4 : [], s);
          });
        };
      }), $n2(H.prototype, function(n2, t) {
        var e = a2[t];
        if (e) {
          var r2 = e.name + "";
          F.call(Ut2, r2) || (Ut2[r2] = []), Ut2[r2].push({ name: t, func: e });
        }
      }), Ut2[Xe3(i3, ct2).name] = [{ name: "wrapper", func: i3 }], H.prototype.clone = zf2, H.prototype.reverse = Kf, H.prototype.value = Yf, a2.prototype.at = Al, a2.prototype.chain = Cl, a2.prototype.commit = Il, a2.prototype.next = xl, a2.prototype.plant = yl, a2.prototype.reverse = Sl, a2.prototype.toJSON = a2.prototype.valueOf = a2.prototype.value = Ol, a2.prototype.first = a2.prototype.head, ne2 && (a2.prototype[ne2] = El), a2;
    }, Nt = If2();
    lt ? ((lt.exports = Nt)._ = Nt, Tr2._ = Nt) : k2._ = Nt;
  }).call(ge3);
})(Ui2, Ui2.exports);

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var T = "wc";
var S = "ethereum_provider";
var $2 = `${T}@2:${S}:`;
var y4 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"];

// node_modules/@web3modal/scaffold/dist/esm/src/client.js
var isInitialized = false;
var Web3ModalScaffold = class {
  constructor(options) {
    this.initPromise = void 0;
    this.setIsConnected = (isConnected) => {
      AccountController.setIsConnected(isConnected);
    };
    this.getIsConnectedState = () => AccountController.state.isConnected;
    this.setCaipAddress = (caipAddress) => {
      AccountController.setCaipAddress(caipAddress);
    };
    this.setBalance = (balance, balanceSymbol) => {
      AccountController.setBalance(balance, balanceSymbol);
    };
    this.setProfileName = (profileName) => {
      AccountController.setProfileName(profileName);
    };
    this.setProfileImage = (profileImage) => {
      AccountController.setProfileImage(profileImage);
    };
    this.resetAccount = () => {
      AccountController.resetAccount();
    };
    this.setCaipNetwork = (caipNetwork) => {
      NetworkController.setCaipNetwork(caipNetwork);
    };
    this.getCaipNetwork = () => NetworkController.state.caipNetwork;
    this.setRequestedCaipNetworks = (requestedCaipNetworks) => {
      NetworkController.setRequestedCaipNetworks(requestedCaipNetworks);
    };
    this.getApprovedCaipNetworksData = () => NetworkController.getApprovedCaipNetworksData();
    this.resetNetwork = () => {
      NetworkController.resetNetwork();
    };
    this.setConnectors = (connectors) => {
      ConnectorController.setConnectors(connectors);
    };
    this.addConnector = (connector) => {
      ConnectorController.addConnector(connector);
    };
    this.getConnectors = () => ConnectorController.getConnectors();
    this.resetWcConnection = () => {
      ConnectionController.resetWcConnection();
    };
    this.fetchIdentity = (request) => BlockchainApiController.fetchIdentity(request);
    this.setAddressExplorerUrl = (addressExplorerUrl) => {
      AccountController.setAddressExplorerUrl(addressExplorerUrl);
    };
    this.setSmartAccountDeployed = (isDeployed) => {
      AccountController.setSmartAccountDeployed(isDeployed);
    };
    this.setConnectedWalletInfo = (connectedWalletInfo) => {
      AccountController.setConnectedWalletInfo(connectedWalletInfo);
    };
    this.setSmartAccountEnabledNetworks = (smartAccountEnabledNetworks) => {
      NetworkController.setSmartAccountEnabledNetworks(smartAccountEnabledNetworks);
    };
    this.setPreferredAccountType = (preferredAccountType) => {
      AccountController.setPreferredAccountType(preferredAccountType);
    };
    this.getWalletConnectName = (address) => {
      return EnsController.getNamesForAddress(address);
    };
    this.resolveWalletConnectName = async (name) => {
      var _a3;
      const trimmedName = name.replace(ConstantsUtil2.WC_NAME_SUFFIX, "");
      const wcNameAddress = await EnsController.resolveName(trimmedName);
      const networkNameAddresses = Object.values(wcNameAddress == null ? void 0 : wcNameAddress.addresses) || [];
      return ((_a3 = networkNameAddresses[0]) == null ? void 0 : _a3.address) || false;
    };
    this.initControllers(options);
    this.initOrContinue();
  }
  async open(options) {
    await this.initOrContinue();
    ModalController.open(options);
  }
  async close() {
    await this.initOrContinue();
    ModalController.close();
  }
  setLoading(loading) {
    ModalController.setLoading(loading);
  }
  getThemeMode() {
    return ThemeController.state.themeMode;
  }
  getThemeVariables() {
    return ThemeController.state.themeVariables;
  }
  setThemeMode(themeMode) {
    ThemeController.setThemeMode(themeMode);
    setColorTheme(ThemeController.state.themeMode);
  }
  setThemeVariables(themeVariables) {
    ThemeController.setThemeVariables(themeVariables);
    setThemeVariables(ThemeController.state.themeVariables);
  }
  subscribeTheme(callback) {
    return ThemeController.subscribe(callback);
  }
  getWalletInfo() {
    return AccountController.state.connectedWalletInfo;
  }
  subscribeWalletInfo(callback) {
    return AccountController.subscribeKey("connectedWalletInfo", callback);
  }
  getState() {
    return PublicStateController.state;
  }
  subscribeState(callback) {
    return PublicStateController.subscribe(callback);
  }
  showErrorMessage(message) {
    SnackController.showError(message);
  }
  showSuccessMessage(message) {
    SnackController.showSuccess(message);
  }
  getEvent() {
    return { ...EventsController.state };
  }
  subscribeEvents(callback) {
    return EventsController.subscribe(callback);
  }
  replace(route) {
    RouterController.replace(route);
  }
  redirect(route) {
    RouterController.push(route);
  }
  popTransactionStack(cancel) {
    RouterController.popTransactionStack(cancel);
  }
  isOpen() {
    return ModalController.state.open;
  }
  isTransactionStackEmpty() {
    return RouterController.state.transactionStack.length === 0;
  }
  isTransactionShouldReplaceView() {
    var _a3;
    return (_a3 = RouterController.state.transactionStack[RouterController.state.transactionStack.length - 1]) == null ? void 0 : _a3.replace;
  }
  async initControllers(options) {
    NetworkController.setClient(options.networkControllerClient);
    NetworkController.setDefaultCaipNetwork(options.defaultChain);
    OptionsController.setProjectId(options.projectId);
    OptionsController.setAllWallets(options.allWallets);
    OptionsController.setIncludeWalletIds(options.includeWalletIds);
    OptionsController.setExcludeWalletIds(options.excludeWalletIds);
    OptionsController.setFeaturedWalletIds(options.featuredWalletIds);
    OptionsController.setTokens(options.tokens);
    OptionsController.setTermsConditionsUrl(options.termsConditionsUrl);
    OptionsController.setPrivacyPolicyUrl(options.privacyPolicyUrl);
    OptionsController.setCustomWallets(options.customWallets);
    OptionsController.setEnableAnalytics(options.enableAnalytics);
    OptionsController.setSdkVersion(options._sdkVersion);
    if (options.metadata) {
      OptionsController.setMetadata(options.metadata);
    }
    if (options.themeMode) {
      ThemeController.setThemeMode(options.themeMode);
    }
    if (options.themeVariables) {
      ThemeController.setThemeVariables(options.themeVariables);
    }
    if (options.enableOnramp) {
      OptionsController.setOnrampEnabled(Boolean(options.enableOnramp));
    }
    if (options.enableWalletFeatures) {
      OptionsController.setWalletFeaturesEnabled(Boolean(options.enableWalletFeatures));
    }
    if (options.allowUnsupportedChain) {
      NetworkController.setAllowUnsupportedChain(options.allowUnsupportedChain);
    }
    if (options.siweControllerClient) {
      const { SIWEController } = await import("./exports-FKYSPIPU.js");
      SIWEController.setSIWEClient(options.siweControllerClient);
    }
    ConnectionController.setClient(options.connectionControllerClient);
  }
  async initOrContinue() {
    if (!this.initPromise && !isInitialized && CoreHelperUtil.isClient()) {
      isInitialized = true;
      this.initPromise = new Promise(async (resolve) => {
        await Promise.all([import("./esm-SMPXOZRR.js"), import("./w3m-modal-3D4WBKHL.js")]);
        const modal = document.createElement("w3m-modal");
        document.body.insertAdjacentElement("beforeend", modal);
        resolve();
      });
    }
    return this.initPromise;
  }
};

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directives/if-defined.js
var ifDefined = (value) => value ?? nothing;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-account-button/index.js
var __decorate = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountButton = class W3mAccountButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = "show";
    this.charsStart = 4;
    this.charsEnd = 6;
    this.address = AccountController.state.address;
    this.balanceVal = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.profileName = AccountController.state.profileName;
    this.profileImage = AccountController.state.profileImage;
    this.network = NetworkController.state.caipNetwork;
    this.isUnsupportedChain = NetworkController.state.isUnsupportedChain;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          this.address = val.address;
          this.balanceVal = val.balance;
          this.profileName = val.profileName;
          this.profileImage = val.profileImage;
          this.balanceSymbol = val.balanceSymbol;
        } else {
          this.address = "";
          this.balanceVal = "";
          this.profileName = "";
          this.profileImage = "";
          this.balanceSymbol = "";
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => this.network = val),
      NetworkController.subscribeKey("isUnsupportedChain", (val) => this.isUnsupportedChain = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const networkImage = AssetUtil.getNetworkImage(this.network);
    const showBalance = this.balance === "show";
    return html`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${ifDefined(this.address)}
        profileName=${ifDefined(this.profileName)}
        networkSrc=${ifDefined(networkImage)}
        avatarSrc=${ifDefined(this.profileImage)}
        balance=${showBalance ? CoreHelperUtil.formatBalance(this.balanceVal, this.balanceSymbol) : ""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `;
  }
  onClick() {
    if (this.isUnsupportedChain) {
      ModalController.open({ view: "UnsupportedChain" });
    } else {
      ModalController.open();
    }
  }
};
__decorate([
  property({ type: Boolean })
], W3mAccountButton.prototype, "disabled", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "balance", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "charsStart", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "charsEnd", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "address", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceVal", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceSymbol", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileName", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileImage", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "network", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "isUnsupportedChain", void 0);
W3mAccountButton = __decorate([
  customElement("w3m-account-button")
], W3mAccountButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-button/styles.js
var styles_default = css`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-button/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mButton = class W3mButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = void 0;
    this.size = void 0;
    this.label = void 0;
    this.loadingLabel = void 0;
    this.charsStart = 4;
    this.charsEnd = 6;
    this.isAccount = AccountController.state.isConnected;
    this.isLoading = ModalController.state.loading;
    this.unsubscribe.push(AccountController.subscribeKey("isConnected", (val) => {
      this.isAccount = val;
    }), ModalController.subscribeKey("loading", (val) => {
      this.isLoading = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return this.isAccount && !this.isLoading ? html`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${ifDefined(this.balance)}
            .charsStart=${ifDefined(this.charsStart)}
            .charsEnd=${ifDefined(this.charsEnd)}
          >
          </w3m-account-button>
        ` : html`
          <w3m-connect-button
            size=${ifDefined(this.size)}
            label=${ifDefined(this.label)}
            loadingLabel=${ifDefined(this.loadingLabel)}
          ></w3m-connect-button>
        `;
  }
};
W3mButton.styles = styles_default;
__decorate2([
  property({ type: Boolean })
], W3mButton.prototype, "disabled", void 0);
__decorate2([
  property()
], W3mButton.prototype, "balance", void 0);
__decorate2([
  property()
], W3mButton.prototype, "size", void 0);
__decorate2([
  property()
], W3mButton.prototype, "label", void 0);
__decorate2([
  property()
], W3mButton.prototype, "loadingLabel", void 0);
__decorate2([
  property()
], W3mButton.prototype, "charsStart", void 0);
__decorate2([
  property()
], W3mButton.prototype, "charsEnd", void 0);
__decorate2([
  state()
], W3mButton.prototype, "isAccount", void 0);
__decorate2([
  state()
], W3mButton.prototype, "isLoading", void 0);
W3mButton = __decorate2([
  customElement("w3m-button")
], W3mButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-connect-button/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectButton = class W3mConnectButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.size = "md";
    this.label = "Connect Wallet";
    this.loadingLabel = "Connecting...";
    this.open = ModalController.state.open;
    this.loading = ModalController.state.loading;
    this.unsubscribe.push(ModalController.subscribe((val) => {
      this.open = val.open;
      this.loading = val.loading;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const isLoading = this.loading || this.open;
    return html`
      <wui-connect-button
        size=${ifDefined(this.size)}
        .loading=${isLoading}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${isLoading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    if (this.open) {
      ModalController.close();
    } else if (!this.loading) {
      ModalController.open();
    }
  }
};
__decorate3([
  property()
], W3mConnectButton.prototype, "size", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "label", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "loadingLabel", void 0);
__decorate3([
  state()
], W3mConnectButton.prototype, "open", void 0);
__decorate3([
  state()
], W3mConnectButton.prototype, "loading", void 0);
W3mConnectButton = __decorate3([
  customElement("w3m-connect-button")
], W3mConnectButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-network-button/styles.js
var styles_default2 = css`
  :host {
    display: block;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-network-button/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mNetworkButton = class W3mNetworkButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.network = NetworkController.state.caipNetwork;
    this.connected = AccountController.state.isConnected;
    this.loading = ModalController.state.loading;
    this.isUnsupportedChain = NetworkController.state.isUnsupportedChain;
    this.unsubscribe.push(...[
      NetworkController.subscribeKey("caipNetwork", (val) => this.network = val),
      AccountController.subscribeKey("isConnected", (val) => this.connected = val),
      ModalController.subscribeKey("loading", (val) => this.loading = val),
      NetworkController.subscribeKey("isUnsupportedChain", (val) => this.isUnsupportedChain = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3;
    return html`
      <wui-network-button
        .disabled=${Boolean(this.disabled || this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain ? "Switch Network" : ((_a3 = this.network) == null ? void 0 : _a3.name) ?? (this.connected ? "Unknown Network" : "Select Network")}
      </wui-network-button>
    `;
  }
  onClick() {
    if (!this.loading) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      ModalController.open({ view: "Networks" });
    }
  }
};
W3mNetworkButton.styles = styles_default2;
__decorate4([
  property({ type: Boolean })
], W3mNetworkButton.prototype, "disabled", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "network", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "connected", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "loading", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "isUnsupportedChain", void 0);
W3mNetworkButton = __decorate4([
  customElement("w3m-network-button")
], W3mNetworkButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-router/styles.js
var styles_default3 = css`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-router/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mRouter = class W3mRouter2 extends LitElement {
  constructor() {
    super();
    this.resizeObserver = void 0;
    this.prevHeight = "0px";
    this.prevHistoryLength = 1;
    this.unsubscribe = [];
    this.view = RouterController.state.view;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => this.onViewChange(val)));
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(async ([content]) => {
      const height = `${content == null ? void 0 : content.contentRect.height}px`;
      if (this.prevHeight !== "0px") {
        await this.animate([{ height: this.prevHeight }, { height }], {
          duration: 150,
          easing: "ease",
          fill: "forwards"
        }).finished;
        this.style.height = "auto";
      }
      this.prevHeight = height;
    });
    this.resizeObserver.observe(this.getWrapper());
  }
  disconnectedCallback() {
    var _a3;
    (_a3 = this.resizeObserver) == null ? void 0 : _a3.unobserve(this.getWrapper());
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`<div>${this.viewTemplate()}</div>`;
  }
  viewTemplate() {
    switch (this.view) {
      case "Account":
        return html`<w3m-account-view></w3m-account-view>`;
      case "AccountSettings":
        return html`<w3m-account-settings-view></w3m-account-settings-view>`;
      case "AllWallets":
        return html`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "ApproveTransaction":
        return html`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
      case "BuyInProgress":
        return html`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
      case "ChooseAccountName":
        return html`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
      case "Connect":
        return html`<w3m-connect-view></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingExternal":
        return html`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "ConnectWallets":
        return html`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
      case "ConnectSocials":
        return html`<w3m-connect-socials-view></w3m-connect-socials-view>`;
      case "ConnectingSocial":
        return html`<w3m-connecting-social-view></w3m-connecting-social-view>`;
      case "Downloads":
        return html`<w3m-downloads-view></w3m-downloads-view>`;
      case "EmailVerifyOtp":
        return html`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
      case "EmailVerifyDevice":
        return html`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
      case "Networks":
        return html`<w3m-networks-view></w3m-networks-view>`;
      case "RegisterAccountName":
        return html`<w3m-register-account-name-view></w3m-register-account-name-view>`;
      case "RegisterAccountNameSuccess":
        return html`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
      case "SwitchNetwork":
        return html`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "GetWallet":
        return html`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Transactions":
        return html`<w3m-transactions-view></w3m-transactions-view>`;
      case "OnRampProviders":
        return html`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
      case "OnRampActivity":
        return html`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
      case "OnRampTokenSelect":
        return html`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
      case "OnRampFiatSelect":
        return html`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
      case "UpgradeEmailWallet":
        return html`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
      case "UpgradeToSmartAccount":
        return html`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;
      case "UpdateEmailWallet":
        return html`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
      case "UpdateEmailPrimaryOtp":
        return html`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
      case "UpdateEmailSecondaryOtp":
        return html`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
      case "UnsupportedChain":
        return html`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
      case "WalletReceive":
        return html`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
      case "WalletCompatibleNetworks":
        return html`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
      case "Swap":
        return html`<w3m-swap-view></w3m-swap-view>`;
      case "SwapSelectToken":
        return html`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
      case "SwapPreview":
        return html`<w3m-swap-preview-view></w3m-swap-preview-view>`;
      case "WalletSend":
        return html`<w3m-wallet-send-view></w3m-wallet-send-view>`;
      case "WalletSendSelectToken":
        return html`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
      case "WalletSendPreview":
        return html`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
      case "WhatIsABuy":
        return html`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
      case "WhatIsANetwork":
        return html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "WhatIsAWallet":
        return html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      default:
        return html`<w3m-connect-view></w3m-connect-view>`;
    }
  }
  async onViewChange(newView) {
    TooltipController.hide();
    const { history } = RouterController.state;
    let xOut = -10;
    let xIn = 10;
    if (history.length < this.prevHistoryLength) {
      xOut = 10;
      xIn = -10;
    }
    this.prevHistoryLength = history.length;
    await this.animate([
      { opacity: 1, transform: "translateX(0px)" },
      { opacity: 0, transform: `translateX(${xOut}px)` }
    ], { duration: 150, easing: "ease", fill: "forwards" }).finished;
    this.view = newView;
    await this.animate([
      { opacity: 0, transform: `translateX(${xIn}px)` },
      { opacity: 1, transform: "translateX(0px)" }
    ], { duration: 150, easing: "ease", fill: "forwards", delay: 50 }).finished;
  }
  getWrapper() {
    var _a3;
    return (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("div");
  }
};
W3mRouter.styles = styles_default3;
__decorate5([
  state()
], W3mRouter.prototype, "view", void 0);
W3mRouter = __decorate5([
  customElement("w3m-router")
], W3mRouter);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-onramp-widget/styles.js
var styles_default4 = css`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-onramp-widget/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var PAYMENT_CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£"
};
var BUY_PRESET_AMOUNTS = [100, 250, 500, 1e3];
var W3mOnrampWidget = class W3mOnrampWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.connected = AccountController.state.isConnected;
    this.loading = ModalController.state.loading;
    this.paymentCurrency = OnRampController.state.paymentCurrency;
    this.paymentAmount = OnRampController.state.paymentAmount;
    this.purchaseAmount = OnRampController.state.purchaseAmount;
    this.quoteLoading = OnRampController.state.quotesLoading;
    this.unsubscribe.push(...[
      AccountController.subscribeKey("isConnected", (val) => {
        this.connected = val;
      }),
      ModalController.subscribeKey("loading", (val) => {
        this.loading = val;
      }),
      OnRampController.subscribe((val) => {
        this.paymentCurrency = val.paymentCurrency;
        this.paymentAmount = val.paymentAmount;
        this.purchaseAmount = val.purchaseAmount;
        this.quoteLoading = val.quotesLoading;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${BUY_PRESET_AMOUNTS.map((amount) => {
      var _a3;
      return html`<wui-button
                  variant=${this.paymentAmount === amount ? "accent" : "neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${() => this.selectPresetAmount(amount)}
                  >${`${PAYMENT_CURRENCY_SYMBOLS[((_a3 = this.paymentCurrency) == null ? void 0 : _a3.id) || "USD"]} ${amount}`}</wui-button
                >`;
    })}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
  }
  templateButton() {
    return this.connected ? html`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>` : html`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
  }
  getQuotes() {
    if (!this.loading) {
      ModalController.open({ view: "OnRampProviders" });
    }
  }
  openModal() {
    ModalController.open({ view: "Connect" });
  }
  async onPaymentAmountChange(event) {
    OnRampController.setPaymentAmount(Number(event.detail));
    await OnRampController.getQuote();
  }
  async selectPresetAmount(amount) {
    OnRampController.setPaymentAmount(amount);
    await OnRampController.getQuote();
  }
};
W3mOnrampWidget.styles = styles_default4;
__decorate6([
  property({ type: Boolean })
], W3mOnrampWidget.prototype, "disabled", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "connected", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "loading", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "paymentCurrency", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "paymentAmount", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "purchaseAmount", void 0);
__decorate6([
  state()
], W3mOnrampWidget.prototype, "quoteLoading", void 0);
W3mOnrampWidget = __decorate6([
  customElement("w3m-onramp-widget")
], W3mOnrampWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-settings-view/styles.js
var styles_default5 = css`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-settings-view/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountSettingsView = class W3mAccountSettingsView2 extends LitElement {
  constructor() {
    super();
    this.usubscribe = [];
    this.networkImages = AssetController.state.networkImages;
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.disconnecting = false;
    this.loading = false;
    this.switched = false;
    this.text = "";
    this.usubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          ModalController.close();
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => {
        if (val == null ? void 0 : val.id) {
          this.network = val;
        }
      })
    ]);
  }
  disconnectedCallback() {
    this.usubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3, _b2;
    if (!this.address) {
      throw new Error("w3m-account-settings-view: No account provided");
    }
    const networkImage = this.networkImages[((_a3 = this.network) == null ? void 0 : _a3.imageId) ?? ""];
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["0", "xl", "m", "xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          .imageSrc=${this.profileImage || ""}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${UiHelperUtil.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0", "xl", "m", "xl"]}>
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${networkImage ? "image" : "icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${ifDefined(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((_b2 = this.network) == null ? void 0 : _b2.name) ?? "Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  chooseNameButtonTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    const isAllowed = EnsController.isAllowedToRegisterName();
    if (!authConnector || type !== "AUTH" || this.profileName || !isAllowed) {
      return null;
    }
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${true}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `;
  }
  isAllowedNetworkSwitch() {
    const { requestedCaipNetworks } = NetworkController.state;
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a3;
      return id === ((_a3 = this.network) == null ? void 0 : _a3.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  togglePreferredAccountBtnTemplate() {
    const networkEnabled = NetworkController.checkIfSmartAccountEnabled();
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector || type !== "AUTH" || !networkEnabled) {
      return null;
    }
    if (!this.switched) {
      this.text = this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT ? "Switch to your EOA" : "Switch to your smart account";
    }
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${true}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `;
  }
  onChooseName() {
    RouterController.push("ChooseAccountName");
  }
  async changePreferredAccountType() {
    const smartAccountEnabled = NetworkController.checkIfSmartAccountEnabled();
    const accountTypeTarget = this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT || !smartAccountEnabled ? W3mFrameRpcConstants.ACCOUNT_TYPES.EOA : W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT;
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    this.loading = true;
    ModalController.setLoading(true);
    await (authConnector == null ? void 0 : authConnector.provider.setPreferredAccount(accountTypeTarget));
    await ConnectionController.reconnectExternal(authConnector);
    ModalController.setLoading(false);
    this.text = accountTypeTarget === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT ? "Switch to your EOA" : "Switch to your smart account";
    this.switched = true;
    SendController.resetSend();
    this.loading = false;
    this.requestUpdate();
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      RouterController.push("Networks");
    }
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
};
W3mAccountSettingsView.styles = styles_default5;
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "address", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "profileImage", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "profileName", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "network", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "preferredAccountType", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "disconnecting", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "loading", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "switched", void 0);
__decorate7([
  state()
], W3mAccountSettingsView.prototype, "text", void 0);
W3mAccountSettingsView = __decorate7([
  customElement("w3m-account-settings-view")
], W3mAccountSettingsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-view/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountView = class W3mAccountView2 extends LitElement {
  render() {
    const type = StorageUtil.getConnectedConnector();
    return html`
      ${OptionsController.state.enableWalletFeatures && type === "AUTH" ? this.walletFeaturesTemplate() : this.defaultTemplate()}
    `;
  }
  walletFeaturesTemplate() {
    return html`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
  }
  defaultTemplate() {
    return html`<w3m-account-default-widget></w3m-account-default-widget>`;
  }
};
W3mAccountView = __decorate8([
  customElement("w3m-account-view")
], W3mAccountView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-all-wallets-view/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAllWalletsView = class W3mAllWalletsView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
  }
  render() {
    const isSearch = this.search.length >= 2;
    return html`
      <wui-flex .padding=${["0", "s", "s", "s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch ? html`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>` : html`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  qrButtonTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return html`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  onWalletConnectQr() {
    RouterController.push("ConnectingWalletConnect");
  }
};
__decorate9([
  state()
], W3mAllWalletsView.prototype, "search", void 0);
W3mAllWalletsView = __decorate9([
  customElement("w3m-all-wallets-view")
], W3mAllWalletsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-buy-in-progress-view/styles.js
var styles_default6 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-buy-in-progress-view/index.js
var __decorate10 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mBuyInProgressView = class W3mBuyInProgressView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.uri = ConnectionController.state.wcUri;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.error = false;
    this.startTime = null;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      })
    ]);
    this.watchTransactions();
  }
  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  render() {
    var _a3, _b2;
    let label = "Continue in external window";
    if (this.error) {
      label = "Buy failed";
    } else if (this.selectedOnRampProvider) {
      label = `Buy in ${(_a3 = this.selectedOnRampProvider) == null ? void 0 : _a3.label}`;
    }
    const subLabel = this.error ? "Buy can be declined from your side or due to and error on the provider app" : `We’ll notify you once your Buy is processed`;
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${ifDefined((_b2 = this.selectedOnRampProvider) == null ? void 0 : _b2.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        ${this.error ? this.tryAgainTemplate() : null}
      </wui-flex>

      <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `;
  }
  watchTransactions() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    switch (this.selectedOnRampProvider.name) {
      case "coinbase":
        this.startTime = Date.now();
        this.initializeCoinbaseTransactions();
        break;
      default:
        break;
    }
  }
  async initializeCoinbaseTransactions() {
    await this.watchCoinbaseTransactions();
    this.intervalId = setInterval(() => this.watchCoinbaseTransactions(), 4e3);
  }
  async watchCoinbaseTransactions() {
    try {
      const address = AccountController.state.address;
      const projectId = OptionsController.state.projectId;
      if (!address) {
        throw new Error("No address found");
      }
      const coinbaseResponse = await BlockchainApiController.fetchTransactions({
        account: address,
        onramp: "coinbase",
        projectId
      });
      const newTransactions = coinbaseResponse.data.filter((tx) => new Date(tx.metadata.minedAt) > new Date(this.startTime) || tx.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
      if (newTransactions.length) {
        clearInterval(this.intervalId);
        RouterController.replace("OnRampActivity");
      } else if (this.startTime && Date.now() - this.startTime >= 18e4) {
        clearInterval(this.intervalId);
        this.error = true;
      }
    } catch (error) {
      SnackController.showError(error);
    }
  }
  onTryAgain() {
    if (!this.selectedOnRampProvider) {
      return;
    }
    this.error = false;
    CoreHelperUtil.openHref(this.selectedOnRampProvider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
  }
  tryAgainTemplate() {
    var _a3;
    if (!((_a3 = this.selectedOnRampProvider) == null ? void 0 : _a3.url)) {
      return null;
    }
    return html`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    var _a3;
    if (!((_a3 = this.selectedOnRampProvider) == null ? void 0 : _a3.url)) {
      SnackController.showError("No link found");
      RouterController.goBack();
      return;
    }
    try {
      CoreHelperUtil.copyToClopboard(this.selectedOnRampProvider.url);
      SnackController.showSuccess("Link copied");
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mBuyInProgressView.styles = styles_default6;
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "intervalId", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "selectedOnRampProvider", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "uri", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "ready", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "showRetry", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "buffering", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "error", void 0);
__decorate10([
  state()
], W3mBuyInProgressView.prototype, "startTime", void 0);
__decorate10([
  property({ type: Boolean })
], W3mBuyInProgressView.prototype, "isMobile", void 0);
__decorate10([
  property()
], W3mBuyInProgressView.prototype, "onRetry", void 0);
W3mBuyInProgressView = __decorate10([
  customElement("w3m-buy-in-progress-view")
], W3mBuyInProgressView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-view/styles.js
var styles_default7 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-view/index.js
var __decorate11 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectView = class W3mConnectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["3xs", "s", "s", "s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  walletListTemplate() {
    const authConnector = this.connectors.find((c2) => c2.type === "AUTH");
    if (authConnector == null ? void 0 : authConnector.socials) {
      if (authConnector == null ? void 0 : authConnector.showWallets) {
        return html`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs", "0", "0", "0"]}>
            <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
            <w3m-connect-recent-widget></w3m-connect-recent-widget>
            <w3m-connect-announced-widget></w3m-connect-announced-widget>
            <w3m-connect-injected-widget></w3m-connect-injected-widget>
            <w3m-connect-coinbase-widget></w3m-connect-coinbase-widget>
            <w3m-connect-custom-widget></w3m-connect-custom-widget>
            <w3m-connect-recommended-widget></w3m-connect-recommended-widget>
            <wui-flex class="all-wallets" .margin=${["xs", "0", "0", "0"]}>
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `;
      }
      return html` <wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`;
    }
    return html`<w3m-wallet-login-list></w3m-wallet-login-list>`;
  }
  onContinueWalletClick() {
    RouterController.push("ConnectWallets");
  }
};
W3mConnectView.styles = styles_default7;
__decorate11([
  state()
], W3mConnectView.prototype, "connectors", void 0);
W3mConnectView = __decorate11([
  customElement("w3m-connect-view")
], W3mConnectView);

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/styles.js
var styles_default8 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/index.js
var __decorate12 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWidget = class extends LitElement {
  constructor() {
    var _a3, _b2, _c, _d;
    super();
    this.wallet = (_a3 = RouterController.state.data) == null ? void 0 : _a3.wallet;
    this.connector = (_b2 = RouterController.state.data) == null ? void 0 : _b2.connector;
    this.timeout = void 0;
    this.secondaryBtnLabel = "Try again";
    this.secondaryBtnIcon = "refresh";
    this.secondaryLabel = "Accept connection request in the wallet";
    this.onConnect = void 0;
    this.onRender = void 0;
    this.onAutoConnect = void 0;
    this.isWalletConnect = true;
    this.unsubscribe = [];
    this.imageSrc = AssetUtil.getWalletImage(this.wallet) ?? AssetUtil.getConnectorImage(this.connector);
    this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet";
    this.isRetrying = false;
    this.uri = ConnectionController.state.wcUri;
    this.error = ConnectionController.state.wcError;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      ConnectionController.subscribeKey("wcUri", (val) => {
        var _a4;
        this.uri = val;
        if (this.isRetrying && this.onRetry) {
          this.isRetrying = false;
          (_a4 = this.onConnect) == null ? void 0 : _a4.call(this);
        }
      }),
      ConnectionController.subscribeKey("wcError", (val) => this.error = val),
      ConnectionController.subscribeKey("buffering", (val) => this.buffering = val)
    ]);
  }
  firstUpdated() {
    var _a3;
    (_a3 = this.onAutoConnect) == null ? void 0 : _a3.call(this);
    this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearTimeout(this.timeout);
  }
  render() {
    var _a3;
    (_a3 = this.onRender) == null ? void 0 : _a3.call(this);
    this.onShowRetry();
    const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let label = `Continue in ${this.name}`;
    if (this.buffering) {
      label = "Connecting...";
    }
    if (this.error) {
      label = "Connection declined";
    }
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ifDefined(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error && this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect ? html`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var _a3;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onTryAgain() {
    var _a3, _b2;
    if (!this.buffering) {
      ConnectionController.setWcError(false);
      if (this.onRetry) {
        this.isRetrying = true;
        (_a3 = this.onRetry) == null ? void 0 : _a3.call(this);
      } else {
        (_b2 = this.onConnect) == null ? void 0 : _b2.call(this);
      }
    }
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      if (this.uri) {
        CoreHelperUtil.copyToClopboard(this.uri);
        SnackController.showSuccess("Link copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mConnectingWidget.styles = styles_default8;
__decorate12([
  state()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate12([
  state()
], W3mConnectingWidget.prototype, "buffering", void 0);
__decorate12([
  property({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate12([
  property()
], W3mConnectingWidget.prototype, "onRetry", void 0);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-external-view/index.js
var __decorate13 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingExternalView = class W3mConnectingExternalView2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.connector) {
      throw new Error("w3m-connecting-view: No connector provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.connector.name ?? "Unknown",
        platform: "browser"
      }
    });
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    this.isWalletConnect = false;
  }
  async onConnectProxy() {
    try {
      this.error = false;
      if (this.connector) {
        if (this.connector.imageUrl) {
          StorageUtil.setConnectedWalletImageUrl(this.connector.imageUrl);
        }
        await ConnectionController.connectExternal(this.connector);
        if (OptionsController.state.isSiweEnabled) {
          RouterController.push("ConnectingSiwe");
        } else {
          ModalController.close();
        }
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          properties: { method: "browser", name: this.connector.name || "Unknown" }
        });
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingExternalView = __decorate13([
  customElement("w3m-connecting-external-view")
], W3mConnectingExternalView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-wc-view/index.js
var __decorate14 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWcView = class W3mConnectingWcView2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.interval = void 0;
    this.lastRetry = Date.now();
    this.wallet = (_a3 = RouterController.state.data) == null ? void 0 : _a3.wallet;
    this.platform = void 0;
    this.platforms = [];
    this.initializeConnection();
    this.interval = setInterval(this.initializeConnection.bind(this), ConstantsUtil.TEN_SEC_MS);
  }
  disconnectedCallback() {
    clearTimeout(this.interval);
  }
  render() {
    if (!this.wallet) {
      return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
    }
    this.determinePlatforms();
    return html`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `;
  }
  async initializeConnection(retry = false) {
    try {
      const { wcPairingExpiry } = ConnectionController.state;
      if (retry || CoreHelperUtil.isPairingExpired(wcPairingExpiry)) {
        ConnectionController.connectWalletConnect();
        if (this.wallet) {
          const url = AssetUtil.getWalletImage(this.wallet);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        } else {
          const connectors = ConnectorController.state.connectors;
          const connector = connectors.find((c2) => c2.type === "WALLET_CONNECT");
          const url = AssetUtil.getConnectorImage(connector);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        }
        await ConnectionController.state.wcPromise;
        this.finalizeConnection();
        if (OptionsController.state.isSiweEnabled) {
          const { SIWEController } = await import("./exports-FKYSPIPU.js");
          if (SIWEController.state.status === "success") {
            ModalController.close();
          } else {
            RouterController.push("ConnectingSiwe");
          }
        } else {
          ModalController.close();
        }
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      ConnectionController.setWcError(true);
      if (CoreHelperUtil.isAllowedRetry(this.lastRetry)) {
        SnackController.showError("Declined");
        this.lastRetry = Date.now();
        this.initializeConnection(true);
      }
    }
  }
  finalizeConnection() {
    var _a3;
    const { wcLinking, recentWallet } = ConnectionController.state;
    if (wcLinking) {
      StorageUtil.setWalletConnectDeepLink(wcLinking);
    }
    if (recentWallet) {
      StorageUtil.setWeb3ModalRecent(recentWallet);
    }
    EventsController.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: wcLinking ? "mobile" : "qrcode",
        name: ((_a3 = this.wallet) == null ? void 0 : _a3.name) || "Unknown"
      }
    });
  }
  determinePlatforms() {
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");
    }
    if (this.platform) {
      return;
    }
    const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
    const injectedIds = injected == null ? void 0 : injected.map(({ injected_id }) => injected_id).filter(Boolean);
    const browserIds = rdns ? [rdns] : injectedIds ?? [];
    const isBrowser = browserIds.length;
    const isMobileWc = mobile_link;
    const isWebWc = webapp_link;
    const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
    const isBrowserWc = isBrowser && isBrowserInstalled;
    const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
    if (isBrowserWc) {
      this.platforms.push("browser");
    }
    if (isMobileWc) {
      this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
    }
    if (isWebWc) {
      this.platforms.push("web");
    }
    if (isDesktopWc) {
      this.platforms.push("desktop");
    }
    if (!isBrowserWc && isBrowser) {
      this.platforms.push("unsupported");
    }
    this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "desktop":
        return html`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "web":
        return html`
          <w3m-connecting-wc-web .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-web>
        `;
      case "mobile":
        return html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    const multiPlatform = this.platforms.length > 1;
    if (!multiPlatform) {
      return null;
    }
    return html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
  }
  async onSelectPlatform(platform) {
    var _a3;
    const container = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("div");
    if (container) {
      await container.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.platform = platform;
      container.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
__decorate14([
  state()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate14([
  state()
], W3mConnectingWcView.prototype, "platforms", void 0);
W3mConnectingWcView = __decorate14([
  customElement("w3m-connecting-wc-view")
], W3mConnectingWcView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-choose-account-name-view/styles.js
var styles_default9 = css`
  .continue-button-container {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-choose-account-name-view/index.js
var __decorate15 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mChooseAccountNameView = class W3mChooseAccountNameView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.loading = false;
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
      CoreHelperUtil.openHref(NavigationUtil.URLS.FAQ, "_blank");
    }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html`<wui-flex
      .padding=${["0", "2l", "0", "2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${() => RouterController.push("RegisterAccountName")}
        >Choose name
      </wui-button>
    </wui-flex>`;
  }
};
W3mChooseAccountNameView.styles = styles_default9;
__decorate15([
  state()
], W3mChooseAccountNameView.prototype, "loading", void 0);
W3mChooseAccountNameView = __decorate15([
  customElement("w3m-choose-account-name-view")
], W3mChooseAccountNameView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-downloads-view/index.js
var __decorate16 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mDownloadsView = class W3mDownloadsView2 extends LitElement {
  constructor() {
    var _a3;
    super(...arguments);
    this.wallet = (_a3 = RouterController.state.data) == null ? void 0 : _a3.wallet;
  }
  render() {
    if (!this.wallet) {
      throw new Error("w3m-downloads-view");
    }
    return html`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a3;
    if (!((_a3 = this.wallet) == null ? void 0 : _a3.chrome_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`;
  }
  iosTemplate() {
    var _a3;
    if (!((_a3 = this.wallet) == null ? void 0 : _a3.app_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`;
  }
  androidTemplate() {
    var _a3;
    if (!((_a3 = this.wallet) == null ? void 0 : _a3.play_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`;
  }
  homepageTemplate() {
    var _a3;
    if (!((_a3 = this.wallet) == null ? void 0 : _a3.homepage)) {
      return null;
    }
    return html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `;
  }
  onChromeStore() {
    var _a3;
    if ((_a3 = this.wallet) == null ? void 0 : _a3.chrome_store) {
      CoreHelperUtil.openHref(this.wallet.chrome_store, "_blank");
    }
  }
  onAppStore() {
    var _a3;
    if ((_a3 = this.wallet) == null ? void 0 : _a3.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a3;
    if ((_a3 = this.wallet) == null ? void 0 : _a3.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a3;
    if ((_a3 = this.wallet) == null ? void 0 : _a3.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mDownloadsView = __decorate16([
  customElement("w3m-downloads-view")
], W3mDownloadsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-get-wallet-view/index.js
var __decorate17 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var EXPLORER = "https://walletconnect.com/explorer";
var W3mGetWalletView = class W3mGetWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
      CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet", "_blank");
    }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended, featured } = ApiController.state;
    const { customWallets } = OptionsController.state;
    const wallets = [...featured, ...customWallets ?? [], ...recommended].slice(0, 4);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          name=${wallet.name ?? "Unknown"}
          tagVariant="main"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          @click=${() => {
      CoreHelperUtil.openHref(wallet.homepage ?? EXPLORER, "_blank");
    }}
        ></wui-list-wallet>
      `);
  }
};
W3mGetWalletView = __decorate17([
  customElement("w3m-get-wallet-view")
], W3mGetWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-register-account-name-view/styles.js
var styles_default10 = css`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directive-helpers.js
var { _ChildPart: ChildPart } = _$LH;
var ENABLE_SHADYDOM_NOPATCH = true;
var _a2, _b;
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_a2 = window.ShadyDOM) == null ? void 0 : _a2.inUse) && ((_b = window.ShadyDOM) == null ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : (node) => node;
var isSingleExpression = (part) => part.strings === void 0;

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directive.js
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
var directive = (c2) => (...values) => ({
  // This property needs to remain unminified.
  ["_$litDirective$"]: c2,
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

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/async-directive.js
var DEV_MODE = true;
var notifyChildrenConnectedChanged = (parent, isConnected) => {
  var _a3;
  const children = parent._$disconnectableChildren;
  if (children === void 0) {
    return false;
  }
  for (const obj of children) {
    (_a3 = obj["_$notifyDirectiveConnectionChanged"]) == null ? void 0 : _a3.call(obj, isConnected, false);
    notifyChildrenConnectedChanged(obj, isConnected);
  }
  return true;
};
var removeDisconnectableFromParent = (obj) => {
  let parent, children;
  do {
    if ((parent = obj._$parent) === void 0) {
      break;
    }
    children = parent._$disconnectableChildren;
    children.delete(obj);
    obj = parent;
  } while ((children == null ? void 0 : children.size) === 0);
};
var addDisconnectableToParent = (obj) => {
  for (let parent; parent = obj._$parent; obj = parent) {
    let children = parent._$disconnectableChildren;
    if (children === void 0) {
      parent._$disconnectableChildren = children = /* @__PURE__ */ new Set();
    } else if (children.has(obj)) {
      break;
    }
    children.add(obj);
    installDisconnectAPI(parent);
  }
};
function reparentDisconnectables(newParent) {
  if (this._$disconnectableChildren !== void 0) {
    removeDisconnectableFromParent(this);
    this._$parent = newParent;
    addDisconnectableToParent(this);
  } else {
    this._$parent = newParent;
  }
}
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
  const value = this._$committedValue;
  const children = this._$disconnectableChildren;
  if (children === void 0 || children.size === 0) {
    return;
  }
  if (isClearingValue) {
    if (Array.isArray(value)) {
      for (let i3 = fromPartIndex; i3 < value.length; i3++) {
        notifyChildrenConnectedChanged(value[i3], false);
        removeDisconnectableFromParent(value[i3]);
      }
    } else if (value != null) {
      notifyChildrenConnectedChanged(value, false);
      removeDisconnectableFromParent(value);
    }
  } else {
    notifyChildrenConnectedChanged(this, isConnected);
  }
}
var installDisconnectAPI = (obj) => {
  if (obj.type == PartType.CHILD) {
    obj._$notifyConnectionChanged ?? (obj._$notifyConnectionChanged = notifyChildPartConnectedChanged);
    obj._$reparentDisconnectables ?? (obj._$reparentDisconnectables = reparentDisconnectables);
  }
};
var AsyncDirective = class extends Directive {
  constructor() {
    super(...arguments);
    this._$disconnectableChildren = void 0;
  }
  /**
   * Initialize the part with internal fields
   * @param part
   * @param parent
   * @param attributeIndex
   */
  _$initialize(part, parent, attributeIndex) {
    super._$initialize(part, parent, attributeIndex);
    addDisconnectableToParent(this);
    this.isConnected = part._$isConnected;
  }
  // This property needs to remain unminified.
  /**
   * Called from the core code when a directive is going away from a part (in
   * which case `shouldRemoveFromParent` should be true), and from the
   * `setChildrenConnected` helper function when recursively changing the
   * connection state of a tree (in which case `shouldRemoveFromParent` should
   * be false).
   *
   * @param isConnected
   * @param isClearingDirective - True when the directive itself is being
   *     removed; false when the tree is being disconnected
   * @internal
   */
  ["_$notifyDirectiveConnectionChanged"](isConnected, isClearingDirective = true) {
    var _a3, _b2;
    if (isConnected !== this.isConnected) {
      this.isConnected = isConnected;
      if (isConnected) {
        (_a3 = this.reconnected) == null ? void 0 : _a3.call(this);
      } else {
        (_b2 = this.disconnected) == null ? void 0 : _b2.call(this);
      }
    }
    if (isClearingDirective) {
      notifyChildrenConnectedChanged(this, isConnected);
      removeDisconnectableFromParent(this);
    }
  }
  /**
   * Sets the value of the directive's Part outside the normal `update`/`render`
   * lifecycle of a directive.
   *
   * This method should not be called synchronously from a directive's `update`
   * or `render`.
   *
   * @param directive The directive to update
   * @param value The value to set
   */
  setValue(value) {
    if (isSingleExpression(this.__part)) {
      this.__part._$setValue(value, this);
    } else {
      if (DEV_MODE && this.__attributeIndex === void 0) {
        throw new Error(`Expected this.__attributeIndex to be a number`);
      }
      const newValues = [...this.__part._$committedValue];
      newValues[this.__attributeIndex] = value;
      this.__part._$setValue(newValues, this, 0);
    }
  }
  /**
   * User callbacks for implementing logic to release any resources/subscriptions
   * that may have been retained by this directive. Since directives may also be
   * re-connected, `reconnected` should also be implemented to restore the
   * working state of the directive prior to the next render.
   */
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directives/ref.js
var createRef = () => new Ref();
var Ref = class {
};
var lastElementForContextAndCallback = /* @__PURE__ */ new WeakMap();
var RefDirective = class extends AsyncDirective {
  render(_ref) {
    return nothing;
  }
  update(part, [ref2]) {
    var _a3;
    const refChanged = ref2 !== this._ref;
    if (refChanged && this._ref !== void 0) {
      this._updateRefValue(void 0);
    }
    if (refChanged || this._lastElementForRef !== this._element) {
      this._ref = ref2;
      this._context = (_a3 = part.options) == null ? void 0 : _a3.host;
      this._updateRefValue(this._element = part.element);
    }
    return nothing;
  }
  _updateRefValue(element) {
    if (!this.isConnected) {
      element = void 0;
    }
    if (typeof this._ref === "function") {
      const context = this._context ?? globalThis;
      let lastElementForCallback = lastElementForContextAndCallback.get(context);
      if (lastElementForCallback === void 0) {
        lastElementForCallback = /* @__PURE__ */ new WeakMap();
        lastElementForContextAndCallback.set(context, lastElementForCallback);
      }
      if (lastElementForCallback.get(this._ref) !== void 0) {
        this._ref.call(this._context, void 0);
      }
      lastElementForCallback.set(this._ref, element);
      if (element !== void 0) {
        this._ref.call(this._context, element);
      }
    } else {
      this._ref.value = element;
    }
  }
  get _lastElementForRef() {
    var _a3, _b2;
    return typeof this._ref === "function" ? (_a3 = lastElementForContextAndCallback.get(this._context ?? globalThis)) == null ? void 0 : _a3.get(this._ref) : (_b2 = this._ref) == null ? void 0 : _b2.value;
  }
  disconnected() {
    if (this._lastElementForRef === this._element) {
      this._updateRefValue(void 0);
    }
  }
  reconnected() {
    this._updateRefValue(this._element);
  }
};
var ref = directive(RefDirective);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-register-account-name-view/index.js
var __decorate18 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mRegisterAccountNameView = class W3mRegisterAccountNameView2 extends LitElement {
  constructor() {
    super();
    this.formRef = createRef();
    this.usubscribe = [];
    this.name = "";
    this.error = "";
    this.loading = EnsController.state.loading;
    this.suggestions = EnsController.state.suggestions;
    this.registered = false;
    this.onDebouncedNameInputChange = CoreHelperUtil.debounce((value) => {
      if (EnsController.validateName(value)) {
        this.error = "";
        this.name = value;
        EnsController.getSuggestions(value);
        EnsController.isNameRegistered(value).then((registered) => {
          this.registered = registered;
        });
      } else if (value.length < 4) {
        this.error = "Name must be at least 4 characters long";
      } else {
        this.error = "Can only contain letters, numbers and - characters";
      }
    });
    this.usubscribe.push(...[
      EnsController.subscribe((val) => {
        this.suggestions = val.suggestions;
        this.loading = val.loading;
      })
    ]);
  }
  firstUpdated() {
    var _a3;
    (_a3 = this.formRef.value) == null ? void 0 : _a3.addEventListener("keydown", this.onEnterKey.bind(this));
  }
  disconnectedCallback() {
    var _a3;
    super.disconnectedCallback();
    this.usubscribe.forEach((unsub) => unsub());
    (_a3 = this.formRef.value) == null ? void 0 : _a3.removeEventListener("keydown", this.onEnterKey.bind(this));
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0", "s", "m", "s"]}
      >
        <form ${ref(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `;
  }
  submitButtonTemplate() {
    const showSubmit = this.isAllowedToSubmit();
    return showSubmit ? html`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        ` : null;
  }
  onSelectSuggestion(name) {
    return () => {
      this.name = name;
      this.registered = false;
      this.requestUpdate();
    };
  }
  onNameInputChange(event) {
    this.onDebouncedNameInputChange(event.detail);
  }
  nameSuggestionTagTemplate() {
    if (this.loading) {
      return html`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`;
    }
    return this.registered ? html`<wui-tag variant="shade" size="lg">Registered</wui-tag>` : html`<wui-tag variant="success" size="lg">Available</wui-tag>`;
  }
  templateSuggestions() {
    if (!this.name || this.name.length < 4 || this.error) {
      return null;
    }
    const suggestions = this.registered ? this.suggestions.filter((s) => s.name !== this.name) : [];
    return html`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        .padding=${["m", "m", "m", "m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${suggestions.map((suggestion) => this.availableNameTemplate(suggestion.name))}
    </wui-flex>`;
  }
  availableNameTemplate(suggestion) {
    return html` <wui-flex
      .padding=${["m", "m", "m", "m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(suggestion)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${suggestion}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`;
  }
  isAllowedToSubmit() {
    return !this.loading && !this.registered && !this.error && EnsController.validateName(this.name);
  }
  async onSubmitName() {
    try {
      if (!this.isAllowedToSubmit()) {
        return;
      }
      await EnsController.registerName(this.name);
    } catch (error) {
      SnackController.showError(error.message);
    }
  }
  onEnterKey(event) {
    if (event.key === "Enter" && this.isAllowedToSubmit()) {
      this.onSubmitName();
    }
  }
};
W3mRegisterAccountNameView.styles = styles_default10;
__decorate18([
  property()
], W3mRegisterAccountNameView.prototype, "errorMessage", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "name", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "error", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "loading", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "suggestions", void 0);
__decorate18([
  state()
], W3mRegisterAccountNameView.prototype, "registered", void 0);
W3mRegisterAccountNameView = __decorate18([
  customElement("w3m-register-account-name-view")
], W3mRegisterAccountNameView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-register-account-name-success-view/styles.js
var styles_default11 = css`
  .continue-button-container {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-register-account-name-success-view/index.js
var __decorate19 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mRegisterAccountNameSuccess = class W3mRegisterAccountNameSuccess2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
      CoreHelperUtil.openHref(NavigationUtil.URLS.FAQ, "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html`<wui-flex
      .padding=${["0", "2l", "0", "2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`;
  }
  redirectToAccount() {
    RouterController.replace("Account");
  }
};
W3mRegisterAccountNameSuccess.styles = styles_default11;
W3mRegisterAccountNameSuccess = __decorate19([
  customElement("w3m-register-account-name-success-view")
], W3mRegisterAccountNameSuccess);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-network-switch-view/styles.js
var styles_default12 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-network-switch-view/index.js
var __decorate20 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mNetworkSwitchView = class W3mNetworkSwitchView2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.network = (_a3 = RouterController.state.data) == null ? void 0 : _a3.network;
    this.unsubscribe = [];
    this.showRetry = false;
    this.error = false;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network) {
      throw new Error("w3m-network-switch-view: No network provided");
    }
    this.onShowRetry();
    const label = this.getLabel();
    const subLabel = this.getSubLabel();
    return html`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : html`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  getSubLabel() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector && type === "AUTH") {
      return "";
    }
    return this.error ? "Switch can be declined if chain is not supported by a wallet or previous request is still active" : "Accept connection request in your wallet";
  }
  getLabel() {
    var _a3;
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector && type === "AUTH") {
      return `Switching to ${((_a3 = this.network) == null ? void 0 : _a3.name) ?? "Unknown"} network...`;
    }
    return this.error ? "Switch declined" : "Approve in wallet";
  }
  onShowRetry() {
    var _a3;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("wui-button");
      retryButton == null ? void 0 : retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onSwitchNetwork() {
    try {
      this.error = false;
      if (this.network) {
        await NetworkController.switchActiveNetwork(this.network);
        if (!OptionsController.state.isSiweEnabled) {
          RouterUtil.navigateAfterNetworkSwitch();
        }
      }
    } catch {
      this.error = true;
    }
  }
};
W3mNetworkSwitchView.styles = styles_default12;
__decorate20([
  state()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
__decorate20([
  state()
], W3mNetworkSwitchView.prototype, "error", void 0);
W3mNetworkSwitchView = __decorate20([
  customElement("w3m-network-switch-view")
], W3mNetworkSwitchView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-networks-view/styles.js
var styles_default13 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-networks-view/index.js
var __decorate21 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mNetworksView = class W3mNetworksView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.unsubscribe.push(NetworkController.subscribeKey("caipNetwork", (val) => this.caipNetwork = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
  }
  onNetworkHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" });
    RouterController.push("WhatIsANetwork");
  }
  networksTemplate() {
    const { approvedCaipNetworkIds, requestedCaipNetworks, supportsAllNetworks } = NetworkController.state;
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    return sortedNetworks == null ? void 0 : sortedNetworks.map((network) => {
      var _a3;
      return html`
        <wui-card-select
          .selected=${((_a3 = this.caipNetwork) == null ? void 0 : _a3.id) === network.id}
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          type="network"
          name=${network.name ?? network.id}
          @click=${() => this.onSwitchNetwork(network)}
          .disabled=${!supportsAllNetworks && !(approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id))}
          data-testid=${`w3m-network-switch-${network.name ?? network.id}`}
        ></wui-card-select>
      `;
    });
  }
  async onSwitchNetwork(network) {
    const { isConnected } = AccountController.state;
    const { approvedCaipNetworkIds, supportsAllNetworks, caipNetwork } = NetworkController.state;
    const { data: data3 } = RouterController.state;
    if (isConnected && (caipNetwork == null ? void 0 : caipNetwork.id) !== network.id) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id)) {
        await NetworkController.switchActiveNetwork(network);
        RouterUtil.navigateAfterNetworkSwitch();
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { ...data3, network });
      }
    } else if (!isConnected) {
      NetworkController.setCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
W3mNetworksView.styles = styles_default13;
__decorate21([
  state()
], W3mNetworksView.prototype, "caipNetwork", void 0);
W3mNetworksView = __decorate21([
  customElement("w3m-networks-view")
], W3mNetworksView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-activity-view/styles.js
var styles_default14 = css`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-activity-view/index.js
var __decorate22 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var LOADING_ITEM_COUNT = 7;
var W3mOnRampActivityView = class W3mOnRampActivityView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedOnRampProvider = OnRampController.state.selectedProvider;
    this.loading = false;
    this.coinbaseTransactions = TransactionsController.state.coinbaseTransactions;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("selectedProvider", (val) => {
        this.selectedOnRampProvider = val;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val),
      () => {
        clearTimeout(this.refetchTimeout);
      },
      TransactionsController.subscribe((val) => {
        this.coinbaseTransactions = { ...val.coinbaseTransactions };
      })
    ]);
    TransactionsController.clearCursor();
    this.fetchTransactions();
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.loading ? this.templateLoading() : this.templateTransactionsByYear()}
      </wui-flex>
    `;
  }
  templateTransactions(transactions) {
    return transactions == null ? void 0 : transactions.map((transaction) => {
      var _a3, _b2, _c;
      const date = DateUtil.formatDate((_a3 = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a3.minedAt);
      const transfer = transaction.transfers[0];
      const fungibleInfo = transfer == null ? void 0 : transfer.fungible_info;
      if (!fungibleInfo) {
        return null;
      }
      const icon = ((_b2 = fungibleInfo == null ? void 0 : fungibleInfo.icon) == null ? void 0 : _b2.url) || ((_c = this.tokenImages) == null ? void 0 : _c[fungibleInfo.symbol || ""]);
      return html`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${ifDefined(fungibleInfo.symbol)}
          purchaseValue=${transfer.quantity.numeric}
          date=${date}
          icon=${ifDefined(icon)}
          symbol=${ifDefined(fungibleInfo.symbol)}
        ></wui-onramp-activity-item>
      `;
    });
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.coinbaseTransactions).sort().reverse();
    return sortedYearKeys.map((year) => {
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => idx).reverse();
      return sortedMonthIndexes.map((month) => {
        var _a3;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, month);
        const transactions = (_a3 = this.coinbaseTransactions[yearInt]) == null ? void 0 : _a3[month];
        if (!transactions) {
          return null;
        }
        return html`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  async fetchTransactions() {
    const provider = "coinbase";
    if (provider === "coinbase") {
      await this.fetchCoinbaseTransactions();
    }
  }
  async fetchCoinbaseTransactions() {
    const address = AccountController.state.address;
    const projectId = OptionsController.state.projectId;
    if (!address) {
      throw new Error("No address found");
    }
    if (!projectId) {
      throw new Error("No projectId found");
    }
    this.loading = true;
    await TransactionsController.fetchTransactions(address, "coinbase");
    this.loading = false;
    this.refetchLoadingTransactions();
  }
  refetchLoadingTransactions() {
    var _a3;
    const today = /* @__PURE__ */ new Date();
    const currentMonthTxs = ((_a3 = this.coinbaseTransactions[today.getFullYear()]) == null ? void 0 : _a3[today.getMonth()]) || [];
    const loadingTransactions = currentMonthTxs.filter((transaction) => transaction.metadata.status === "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS");
    if (loadingTransactions.length === 0) {
      clearTimeout(this.refetchTimeout);
      return;
    }
    this.refetchTimeout = setTimeout(async () => {
      const address = AccountController.state.address;
      await TransactionsController.fetchTransactions(address, "coinbase");
      this.refetchLoadingTransactions();
    }, 3e3);
  }
  templateLoading() {
    return Array(LOADING_ITEM_COUNT).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
  }
};
W3mOnRampActivityView.styles = styles_default14;
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "selectedOnRampProvider", void 0);
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "loading", void 0);
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "coinbaseTransactions", void 0);
__decorate22([
  state()
], W3mOnRampActivityView.prototype, "tokenImages", void 0);
W3mOnRampActivityView = __decorate22([
  customElement("w3m-onramp-activity-view")
], W3mOnRampActivityView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-fiat-select-view/styles.js
var styles_default15 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-fiat-select-view/index.js
var __decorate23 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mOnrampFiatSelectView = class W3mOnrampFiatSelectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.paymentCurrency;
    this.currencies = OnRampController.state.paymentCurrencies;
    this.currencyImages = AssetController.state.currencyImages;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.paymentCurrency;
        this.currencies = val.paymentCurrencies;
      }),
      AssetController.subscribeKey("currencyImages", (val) => this.currencyImages = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate() {
    return this.currencies.map((currency) => {
      var _a3;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a3 = this.currencyImages) == null ? void 0 : _a3[currency.id])}
          @click=${() => this.selectCurrency(currency)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${currency.id}</wui-text>
        </wui-list-item>
      `;
    });
  }
  selectCurrency(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPaymentCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampFiatSelectView.styles = styles_default15;
__decorate23([
  state()
], W3mOnrampFiatSelectView.prototype, "selectedCurrency", void 0);
__decorate23([
  state()
], W3mOnrampFiatSelectView.prototype, "currencies", void 0);
__decorate23([
  state()
], W3mOnrampFiatSelectView.prototype, "currencyImages", void 0);
W3mOnrampFiatSelectView = __decorate23([
  customElement("w3m-onramp-fiat-select-view")
], W3mOnrampFiatSelectView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-providers-view/index.js
var __decorate24 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mOnRampProvidersView = class W3mOnRampProvidersView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.providers = OnRampController.state.providers;
    this.unsubscribe.push(...[
      OnRampController.subscribeKey("providers", (val) => {
        this.providers = val;
      })
    ]);
  }
  firstUpdated() {
    const urlPromises = this.providers.map(async (provider) => {
      if (provider.name === "coinbase") {
        return await this.getCoinbaseOnRampURL();
      }
      return Promise.resolve(provider == null ? void 0 : provider.url);
    });
    Promise.all(urlPromises).then((urls) => {
      this.providers = this.providers.map((provider, index) => ({
        ...provider,
        url: urls[index] || ""
      }));
    });
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `;
  }
  onRampProvidersTemplate() {
    return this.providers.map((provider) => html`
        <wui-onramp-provider-item
          label=${provider.label}
          name=${provider.name}
          feeRange=${provider.feeRange}
          @click=${() => {
      this.onClickProvider(provider);
    }}
          ?disabled=${!provider.url}
        ></wui-onramp-provider-item>
      `);
  }
  onClickProvider(provider) {
    OnRampController.setSelectedProvider(provider);
    RouterController.push("BuyInProgress");
    CoreHelperUtil.openHref(provider.url, "popupWindow", "width=600,height=800,scrollbars=yes");
  }
  async getCoinbaseOnRampURL() {
    const address = AccountController.state.address;
    const network = NetworkController.state.caipNetwork;
    if (!address) {
      throw new Error("No address found");
    }
    if (!(network == null ? void 0 : network.name)) {
      throw new Error("No network found");
    }
    const defaultNetwork = ConstantsUtil.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[network.name] ?? ConstantsUtil.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN;
    const purchaseCurrency = OnRampController.state.purchaseCurrency;
    const assets = purchaseCurrency ? [purchaseCurrency.symbol] : OnRampController.state.purchaseCurrencies.map((currency) => currency.symbol);
    return await BlockchainApiController.generateOnRampURL({
      defaultNetwork,
      destinationWallets: [
        { address, blockchains: ConstantsUtil.WC_COINBASE_PAY_SDK_CHAINS, assets }
      ],
      partnerUserId: address,
      purchaseAmount: OnRampController.state.purchaseAmount
    });
  }
};
__decorate24([
  state()
], W3mOnRampProvidersView.prototype, "providers", void 0);
W3mOnRampProvidersView = __decorate24([
  customElement("w3m-onramp-providers-view")
], W3mOnRampProvidersView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-tokens-select-view/styles.js
var styles_default16 = css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-onramp-tokens-select-view/index.js
var __decorate25 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mOnrampTokensView = class W3mOnrampTokensView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.selectedCurrency = OnRampController.state.purchaseCurrencies;
    this.tokens = OnRampController.state.purchaseCurrencies;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(...[
      OnRampController.subscribe((val) => {
        this.selectedCurrency = val.purchaseCurrencies;
        this.tokens = val.purchaseCurrencies;
      }),
      AssetController.subscribeKey("tokenImages", (val) => this.tokenImages = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "s", "s", "s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  currenciesTemplate() {
    return this.tokens.map((token) => {
      var _a3;
      return html`
        <wui-list-item
          imageSrc=${ifDefined((_a3 = this.tokenImages) == null ? void 0 : _a3[token.symbol])}
          @click=${() => this.selectToken(token)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${token.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${token.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `;
    });
  }
  selectToken(currency) {
    if (!currency) {
      return;
    }
    OnRampController.setPurchaseCurrency(currency);
    ModalController.close();
  }
};
W3mOnrampTokensView.styles = styles_default16;
__decorate25([
  state()
], W3mOnrampTokensView.prototype, "selectedCurrency", void 0);
__decorate25([
  state()
], W3mOnrampTokensView.prototype, "tokens", void 0);
__decorate25([
  state()
], W3mOnrampTokensView.prototype, "tokenImages", void 0);
W3mOnrampTokensView = __decorate25([
  customElement("w3m-onramp-token-select-view")
], W3mOnrampTokensView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-swap-view/styles.js
var styles_default17 = css`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-swap-view/index.js
var __decorate26 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mSwapView = class W3mSwapView2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.unsubscribe = [];
    this.detailsOpen = false;
    this.caipNetworkId = (_a3 = NetworkController.state.caipNetwork) == null ? void 0 : _a3.id;
    this.initialized = SwapController.state.initialized;
    this.loading = SwapController.state.loading;
    this.loadingPrices = SwapController.state.loadingPrices;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount;
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount;
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.inputError = SwapController.state.inputError;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.transactionLoading = SwapController.state.transactionLoading;
    this.fetchError = SwapController.state.fetchError;
    this.onDebouncedGetSwapCalldata = CoreHelperUtil.debounce(async () => {
      await SwapController.swapTokens();
    }, 200);
    NetworkController.subscribeKey("caipNetwork", (newCaipNetwork) => {
      if (this.caipNetworkId !== (newCaipNetwork == null ? void 0 : newCaipNetwork.id)) {
        this.caipNetworkId = newCaipNetwork == null ? void 0 : newCaipNetwork.id;
        SwapController.resetState();
        SwapController.initializeState();
      }
    });
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (isOpen) => {
        if (!isOpen) {
          SwapController.resetState();
        }
      }),
      RouterController.subscribeKey("view", (newRoute) => {
        if (!newRoute.includes("Swap")) {
          SwapController.resetValues();
        }
      }),
      SwapController.subscribe((newState) => {
        this.initialized = newState.initialized;
        this.loading = newState.loading;
        this.loadingPrices = newState.loadingPrices;
        this.transactionLoading = newState.transactionLoading;
        this.sourceToken = newState.sourceToken;
        this.sourceTokenAmount = newState.sourceTokenAmount;
        this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
        this.toToken = newState.toToken;
        this.toTokenAmount = newState.toTokenAmount;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.inputError = newState.inputError;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.fetchError = newState.fetchError;
      })
    ]);
  }
  firstUpdated() {
    SwapController.initializeState();
    this.watchTokensAndValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe == null ? void 0 : unsubscribe());
    clearInterval(this.interval);
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]} gap="s">
        ${this.initialized ? this.templateSwap() : this.templateLoading()}
      </wui-flex>
    `;
  }
  watchTokensAndValues() {
    this.interval = setInterval(() => {
      SwapController.getNetworkTokenPrice();
      SwapController.getMyTokensWithBalance();
      SwapController.swapTokens();
    }, 1e4);
  }
  templateSwap() {
    return html`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken", this.sourceToken)}
          ${this.templateTokenInput("toToken", this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `;
  }
  actionButtonLabel() {
    if (this.fetchError) {
      return "Swap";
    }
    if (!this.sourceToken || !this.toToken) {
      return "Select token";
    }
    if (!this.sourceTokenAmount) {
      return "Enter amount";
    }
    if (!this.initialized) {
      return "Swap";
    }
    if (this.inputError) {
      return this.inputError;
    }
    return "Review swap";
  }
  templateReplaceTokensButton() {
    return html`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `;
  }
  templateLoading() {
    return html`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `;
  }
  templateTokenInput(target, token) {
    var _a3, _b2;
    const myToken = (_a3 = SwapController.state.myTokensWithBalance) == null ? void 0 : _a3.find((ct2) => (ct2 == null ? void 0 : ct2.address) === (token == null ? void 0 : token.address));
    const amount = target === "toToken" ? this.toTokenAmount : this.sourceTokenAmount;
    const price = target === "toToken" ? this.toTokenPriceInUSD : this.sourceTokenPriceInUSD;
    let value = parseFloat(amount) * price;
    if (target === "toToken") {
      value -= this.gasPriceInUSD || 0;
    }
    return html`<w3m-swap-input
      .value=${target === "toToken" ? this.toTokenAmount : this.sourceTokenAmount}
      ?disabled=${this.loading && target === "toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${target}
      .token=${token}
      .balance=${(_b2 = myToken == null ? void 0 : myToken.quantity) == null ? void 0 : _b2.numeric}
      .price=${myToken == null ? void 0 : myToken.price}
      .marketValue=${value}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`;
  }
  onSetMaxValue(target, balance) {
    const token = target === "sourceToken" ? this.sourceToken : this.toToken;
    const isNetworkToken = (token == null ? void 0 : token.address) === ConstantsUtil.NATIVE_TOKEN_ADDRESS;
    let value = "0";
    if (!balance) {
      value = "0";
      this.handleChangeAmount(target, value);
      return;
    }
    if (!this.gasPriceInUSD) {
      value = balance;
      this.handleChangeAmount(target, value);
      return;
    }
    const amountOfTokenGasRequires = NumberUtil.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD);
    const maxValue = isNetworkToken ? NumberUtil.bigNumber(balance).minus(amountOfTokenGasRequires) : NumberUtil.bigNumber(balance);
    this.handleChangeAmount(target, maxValue.isGreaterThan(0) ? maxValue.toFixed(20) : "0");
  }
  templateDetails() {
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    return html`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
  }
  handleChangeAmount(target, value) {
    SwapController.clearError();
    if (target === "sourceToken") {
      SwapController.setSourceTokenAmount(value);
    } else {
      SwapController.setToTokenAmount(value);
    }
    this.onDebouncedGetSwapCalldata();
  }
  templateActionButton() {
    const haveNoTokenSelected = !this.toToken || !this.sourceToken;
    const haveNoAmount = !this.sourceTokenAmount;
    const loading = this.loading || this.loadingPrices || this.transactionLoading;
    const disabled = loading || haveNoTokenSelected || haveNoAmount || this.inputError;
    return html` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${haveNoTokenSelected ? "neutral" : "main"}
        .loading=${loading}
        .disabled=${disabled}
        @click=${this.onSwapPreview}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`;
  }
  onSwitchTokens() {
    SwapController.switchTokens();
  }
  onSwapPreview() {
    if (this.fetchError) {
      SwapController.swapTokens();
      return;
    }
    RouterController.push("SwapPreview");
  }
};
W3mSwapView.styles = styles_default17;
__decorate26([
  state()
], W3mSwapView.prototype, "interval", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "detailsOpen", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "caipNetworkId", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "initialized", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "loading", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "loadingPrices", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "sourceToken", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "sourceTokenAmount", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "sourceTokenPriceInUSD", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "toToken", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "toTokenAmount", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "toTokenPriceInUSD", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "inputError", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "gasPriceInUSD", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "transactionLoading", void 0);
__decorate26([
  state()
], W3mSwapView.prototype, "fetchError", void 0);
W3mSwapView = __decorate26([
  customElement("w3m-swap-view")
], W3mSwapView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-swap-preview-view/styles.js
var styles_default18 = css`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-swap-preview-view/index.js
var __decorate27 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mSwapPreviewView = class W3mSwapPreviewView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.detailsOpen = true;
    this.approvalTransaction = SwapController.state.approvalTransaction;
    this.swapTransaction = SwapController.state.swapTransaction;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount ?? "";
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount ?? "";
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.transactionLoading = SwapController.state.transactionLoading;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.inputError = SwapController.state.inputError;
    this.loading = SwapController.state.loading;
    this.unsubscribe.push(...[
      AccountController.subscribeKey("balanceSymbol", (newBalanceSymbol) => {
        if (this.balanceSymbol !== newBalanceSymbol) {
          RouterController.goBack();
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (newCaipNetwork) => {
        if (this.caipNetwork !== newCaipNetwork) {
          this.caipNetwork = newCaipNetwork;
        }
      }),
      SwapController.subscribe((newState) => {
        this.approvalTransaction = newState.approvalTransaction;
        this.swapTransaction = newState.swapTransaction;
        this.sourceToken = newState.sourceToken;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.toToken = newState.toToken;
        this.transactionLoading = newState.transactionLoading;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.sourceTokenAmount = newState.sourceTokenAmount ?? "";
        this.toTokenAmount = newState.toTokenAmount ?? "";
        this.inputError = newState.inputError;
        this.loading = newState.loading;
      })
    ]);
  }
  firstUpdated() {
    SwapController.getTransaction();
    this.refreshTransaction();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe == null ? void 0 : unsubscribe());
    clearInterval(this.interval);
  }
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `;
  }
  refreshTransaction() {
    this.interval = setInterval(() => {
      SwapController.getTransaction();
    }, 1e4);
  }
  templateSwap() {
    var _a3, _b2, _c, _d;
    const sourceTokenText = `${UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(_a3 = this.sourceToken) == null ? void 0 : _a3.symbol}`;
    const toTokenText = `${UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(_b2 = this.toToken) == null ? void 0 : _b2.symbol}`;
    const sourceTokenValue = parseFloat(this.sourceTokenAmount) * this.sourceTokenPriceInUSD;
    const toTokenValue = parseFloat(this.toTokenAmount) * this.toTokenPriceInUSD - (this.gasPriceInUSD || 0);
    const sentPrice = UiHelperUtil.formatNumberToLocalString(sourceTokenValue);
    const receivePrice = UiHelperUtil.formatNumberToLocalString(toTokenValue);
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${sentPrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${sourceTokenText}
              imageSrc=${(_c = this.sourceToken) == null ? void 0 : _c.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${receivePrice}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${toTokenText}
              imageSrc=${(_d = this.toToken) == null ? void 0 : _d.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${this.loading}
            ?disabled=${this.transactionLoading}
            @click=${this.onSendTransaction.bind(this)}
          >
            ${this.transactionLoading ? html`<wui-loading-spinner color="inverse-100"></wui-loading-spinner>` : html`<wui-text variant="paragraph-600" color="inverse-100">
                  ${this.actionButtonLabel()}
                </wui-text>`}
          </wui-button>
        </wui-flex>
      </wui-flex>
    `;
  }
  templateDetails() {
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    return html`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`;
  }
  actionButtonLabel() {
    if (this.approvalTransaction) {
      return "Approve";
    }
    return "Swap";
  }
  onCancelTransaction() {
    RouterController.goBack();
  }
  onSendTransaction() {
    if (this.approvalTransaction) {
      SwapController.sendTransactionForApproval(this.approvalTransaction);
    } else {
      SwapController.sendTransactionForSwap(this.swapTransaction);
    }
  }
};
W3mSwapPreviewView.styles = styles_default18;
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "interval", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "detailsOpen", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "approvalTransaction", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "swapTransaction", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "sourceToken", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "sourceTokenAmount", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "sourceTokenPriceInUSD", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "toToken", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "toTokenAmount", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "toTokenPriceInUSD", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "caipNetwork", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "transactionLoading", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "balanceSymbol", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "gasPriceInUSD", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "inputError", void 0);
__decorate27([
  state()
], W3mSwapPreviewView.prototype, "loading", void 0);
W3mSwapPreviewView = __decorate27([
  customElement("w3m-swap-preview-view")
], W3mSwapPreviewView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-swap-select-token-view/styles.js
var styles_default19 = css`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-swap-select-token-view/index.js
var __decorate28 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mSwapSelectTokenView = class W3mSwapSelectTokenView2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.unsubscribe = [];
    this.targetToken = (_a3 = RouterController.state.data) == null ? void 0 : _a3.target;
    this.sourceToken = SwapController.state.sourceToken;
    this.sourceTokenAmount = SwapController.state.sourceTokenAmount;
    this.toToken = SwapController.state.toToken;
    this.myTokensWithBalance = SwapController.state.myTokensWithBalance;
    this.popularTokens = SwapController.state.popularTokens;
    this.searchValue = "";
    this.unsubscribe.push(...[
      SwapController.subscribe((newState) => {
        this.sourceToken = newState.sourceToken;
        this.toToken = newState.toToken;
        this.myTokensWithBalance = newState.myTokensWithBalance;
      })
    ]);
  }
  updated() {
    var _a3, _b2;
    const suggestedTokensContainer = (_a3 = this.renderRoot) == null ? void 0 : _a3.querySelector(".suggested-tokens-container");
    suggestedTokensContainer == null ? void 0 : suggestedTokensContainer.addEventListener("scroll", this.handleSuggestedTokensScroll.bind(this));
    const tokensList = (_b2 = this.renderRoot) == null ? void 0 : _b2.querySelector(".tokens");
    tokensList == null ? void 0 : tokensList.addEventListener("scroll", this.handleTokenListScroll.bind(this));
  }
  disconnectedCallback() {
    var _a3, _b2;
    super.disconnectedCallback();
    const suggestedTokensContainer = (_a3 = this.renderRoot) == null ? void 0 : _a3.querySelector(".suggested-tokens-container");
    const tokensList = (_b2 = this.renderRoot) == null ? void 0 : _b2.querySelector(".tokens");
    suggestedTokensContainer == null ? void 0 : suggestedTokensContainer.removeEventListener("scroll", this.handleSuggestedTokensScroll.bind(this));
    tokensList == null ? void 0 : tokensList.removeEventListener("scroll", this.handleTokenListScroll.bind(this));
    clearInterval(this.interval);
  }
  render() {
    return html`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `;
  }
  onSelectToken(token) {
    if (this.targetToken === "sourceToken") {
      SwapController.setSourceToken(token);
    } else {
      SwapController.setToToken(token);
      if (this.sourceToken && this.sourceTokenAmount) {
        SwapController.swapTokens();
      }
    }
    RouterController.goBack();
  }
  templateSearchInput() {
    return html`
      <wui-flex .padding=${["0", "s", "0", "s"]} gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `;
  }
  templateTokens() {
    const yourTokens = this.myTokensWithBalance ? Object.values(this.myTokensWithBalance) : [];
    const tokens = this.popularTokens ? this.popularTokens : [];
    const filteredYourTokens = this.filterTokensWithText(yourTokens, this.searchValue);
    const filteredTokens = this.filterTokensWithText(tokens, this.searchValue);
    return html`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0", "s", "s", "s"]} flexDirection="column">
          ${(filteredYourTokens == null ? void 0 : filteredYourTokens.length) > 0 ? html`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${filteredYourTokens.map((token) => {
      var _a3, _b2, _c;
      const selected = token.symbol === ((_a3 = this.sourceToken) == null ? void 0 : _a3.symbol) || token.symbol === ((_b2 = this.toToken) == null ? void 0 : _b2.symbol);
      return html`
                    <wui-token-list-item
                      name=${token.name}
                      ?disabled=${selected}
                      symbol=${token.symbol}
                      price=${token == null ? void 0 : token.price}
                      amount=${(_c = token == null ? void 0 : token.quantity) == null ? void 0 : _c.numeric}
                      imageSrc=${token.logoUri}
                      @click=${() => {
        if (!selected) {
          this.onSelectToken(token);
        }
      }}
                    >
                    </wui-token-list-item>
                  `;
    })}
              ` : null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Popular tokens</wui-text>
          </wui-flex>
          ${(filteredTokens == null ? void 0 : filteredTokens.length) > 0 ? filteredTokens.map((token) => html`
                  <wui-token-list-item
                    name=${token.name}
                    symbol=${token.symbol}
                    imageSrc=${token.logoUri}
                    @click=${() => this.onSelectToken(token)}
                  >
                  </wui-token-list-item>
                `) : null}
        </wui-flex>
      </wui-flex>
    `;
  }
  templateSuggestedTokens() {
    const tokens = SwapController.state.suggestedTokens ? SwapController.state.suggestedTokens.slice(0, 8) : null;
    if (!tokens) {
      return null;
    }
    return html`
      <wui-flex class="suggested-tokens-container" .padding=${["0", "s", "0", "s"]} gap="xs">
        ${tokens.map((token) => html`
            <wui-token-button
              text=${token.symbol}
              imageSrc=${token.logoUri}
              @click=${() => this.onSelectToken(token)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `;
  }
  onSearchInputChange(event) {
    this.searchValue = event.detail;
  }
  handleSuggestedTokensScroll() {
    var _a3;
    const container = (_a3 = this.renderRoot) == null ? void 0 : _a3.querySelector(".suggested-tokens-container");
    if (!container) {
      return;
    }
    container.style.setProperty("--suggested-tokens-scroll--left-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollLeft).toString());
    container.style.setProperty("--suggested-tokens-scroll--right-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollWidth - container.scrollLeft - container.offsetWidth).toString());
  }
  handleTokenListScroll() {
    var _a3;
    const container = (_a3 = this.renderRoot) == null ? void 0 : _a3.querySelector(".tokens");
    if (!container) {
      return;
    }
    container.style.setProperty("--tokens-scroll--top-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollTop).toString());
    container.style.setProperty("--tokens-scroll--bottom-opacity", MathUtil.interpolate([0, 100], [0, 1], container.scrollHeight - container.scrollTop - container.offsetHeight).toString());
  }
  filterTokensWithText(tokens, text) {
    return tokens.filter((token) => `${token.symbol} ${token.name} ${token.address}`.toLowerCase().includes(text.toLowerCase()));
  }
};
W3mSwapSelectTokenView.styles = styles_default19;
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "interval", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "targetToken", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "sourceToken", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "sourceTokenAmount", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "toToken", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "myTokensWithBalance", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "popularTokens", void 0);
__decorate28([
  state()
], W3mSwapSelectTokenView.prototype, "searchValue", void 0);
W3mSwapSelectTokenView = __decorate28([
  customElement("w3m-swap-select-token-view")
], W3mSwapSelectTokenView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-transactions-view/styles.js
var styles_default20 = css`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-transactions-view/index.js
var __decorate29 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mTransactionsView = class W3mTransactionsView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" .padding=${["0", "m", "m", "m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `;
  }
};
W3mTransactionsView.styles = styles_default20;
W3mTransactionsView = __decorate29([
  customElement("w3m-transactions-view")
], W3mTransactionsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-network-view/index.js
var __decorate30 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var data = [
  {
    images: ["network", "layers", "system"],
    title: "The system’s nuts and bolts",
    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."
  },
  {
    images: ["noun", "defiAlt", "dao"],
    title: "Designed for different uses",
    text: "Each network is designed differently, and may therefore suit certain apps and experiences."
  }
];
var W3mWhatIsANetworkView = class W3mWhatIsANetworkView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${() => {
      CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/", "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsANetworkView = __decorate30([
  customElement("w3m-what-is-a-network-view")
], W3mWhatIsANetworkView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-wallet-view/index.js
var __decorate31 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var data2 = [
  {
    images: ["login", "profile", "lock"],
    title: "One login for all of web3",
    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
  },
  {
    images: ["defi", "nft", "eth"],
    title: "A home for your digital assets",
    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
  },
  {
    images: ["browser", "noun", "dao"],
    title: "Your gateway to a new web",
    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
  }
];
var W3mWhatIsAWalletView = class W3mWhatIsAWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data2}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    EventsController.sendEvent({ type: "track", event: "CLICK_GET_WALLET" });
    RouterController.push("GetWallet");
  }
};
W3mWhatIsAWalletView = __decorate31([
  customElement("w3m-what-is-a-wallet-view")
], W3mWhatIsAWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-buy-view/index.js
var __decorate32 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mWhatIsABuyView = class W3mWhatIsABuyView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "3xl", "xl", "3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsABuyView = __decorate32([
  customElement("w3m-what-is-a-buy-view")
], W3mWhatIsABuyView);

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-email-otp-widget/styles.js
var styles_default21 = css`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-email-otp-widget/index.js
var __decorate33 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var OTP_LENGTH = 6;
var W3mEmailOtpWidget = class W3mEmailOtpWidget2 extends LitElement {
  firstUpdated() {
    this.startOTPTimeout();
  }
  disconnectedCallback() {
    clearTimeout(this.OTPTimeout);
  }
  constructor() {
    var _a3;
    super();
    this.loading = false;
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.error = "";
    this.otp = "";
    this.email = (_a3 = RouterController.state.data) == null ? void 0 : _a3.email;
    this.authConnector = ConnectorController.getAuthConnector();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-otp-widget: No email provided");
    }
    const isResendDisabled = Boolean(this.timeoutTimeLeft);
    const footerLabels = this.getFooterLabels(isResendDisabled);
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l", "0", "l", "0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading ? html`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>` : html` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error ? html`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  ` : null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${footerLabels.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${isResendDisabled}>
            ${footerLabels.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `;
  }
  startOTPTimeout() {
    this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
    this.OTPTimeout = setInterval(() => {
      if (this.timeoutTimeLeft > 0) {
        this.timeoutTimeLeft = W3mFrameHelpers.getTimeToNextEmailLogin();
      } else {
        clearInterval(this.OTPTimeout);
      }
    }, 1e3);
  }
  async onOtpInputChange(event) {
    var _a3;
    try {
      if (!this.loading) {
        this.otp = event.detail;
        if (this.authConnector && this.otp.length === OTP_LENGTH) {
          this.loading = true;
          await ((_a3 = this.onOtpSubmit) == null ? void 0 : _a3.call(this, this.otp));
        }
      }
    } catch (error) {
      this.error = CoreHelperUtil.parseError(error);
      this.loading = false;
    }
  }
  async onResendCode() {
    try {
      if (this.onOtpResend) {
        if (!this.loading && !this.timeoutTimeLeft) {
          this.error = "";
          this.otp = "";
          const authConnector = ConnectorController.getAuthConnector();
          if (!authConnector || !this.email) {
            throw new Error("w3m-email-otp-widget: Unable to resend email");
          }
          this.loading = true;
          await this.onOtpResend(this.email);
          this.startOTPTimeout();
          SnackController.showSuccess("Code email resent");
        }
      } else if (this.onStartOver) {
        this.onStartOver();
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
  getFooterLabels(isResendDisabled) {
    if (this.onStartOver) {
      return {
        title: "Something wrong?",
        action: `Try again ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : ""}`
      };
    }
    return {
      title: `Didn't receive it?`,
      action: `Resend ${isResendDisabled ? `in ${this.timeoutTimeLeft}s` : "Code"}`
    };
  }
};
W3mEmailOtpWidget.styles = styles_default21;
__decorate33([
  state()
], W3mEmailOtpWidget.prototype, "loading", void 0);
__decorate33([
  state()
], W3mEmailOtpWidget.prototype, "timeoutTimeLeft", void 0);
__decorate33([
  state()
], W3mEmailOtpWidget.prototype, "error", void 0);
W3mEmailOtpWidget = __decorate33([
  customElement("w3m-email-otp-widget")
], W3mEmailOtpWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-email-verify-otp-view/index.js
var __decorate34 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mEmailVerifyOtpView = class W3mEmailVerifyOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    super();
    this.unsubscribe = [];
    this.smartAccountDeployed = AccountController.state.smartAccountDeployed;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          const smartAccountEnabled = NetworkController.checkIfSmartAccountEnabled();
          await this.authConnector.provider.connectOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          await ConnectionController.connectExternal(this.authConnector);
          EventsController.sendEvent({
            type: "track",
            event: "CONNECT_SUCCESS",
            properties: { method: "email", name: this.authConnector.name || "Unknown" }
          });
          if (smartAccountEnabled && !this.smartAccountDeployed) {
            RouterController.push("UpgradeToSmartAccount");
          } else {
            ModalController.close();
          }
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onOtpResend = async (email) => {
      if (this.authConnector) {
        await this.authConnector.provider.connectEmail({ email });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
      }
    };
    this.unsubscribe.push(AccountController.subscribeKey("smartAccountDeployed", (val) => {
      this.smartAccountDeployed = val;
    }));
  }
};
__decorate34([
  state()
], W3mEmailVerifyOtpView.prototype, "smartAccountDeployed", void 0);
W3mEmailVerifyOtpView = __decorate34([
  customElement("w3m-email-verify-otp-view")
], W3mEmailVerifyOtpView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-email-verify-device-view/styles.js
var styles_default22 = css`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-email-verify-device-view/index.js
var __decorate35 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mEmailVerifyDeviceView = class W3mEmailVerifyDeviceView2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.email = (_a3 = RouterController.state.data) == null ? void 0 : _a3.email;
    this.authConnector = ConnectorController.getAuthConnector();
    this.loading = false;
    this.listenForDeviceApproval();
  }
  render() {
    if (!this.email) {
      throw new Error("w3m-email-verify-device-view: No email provided");
    }
    if (!this.authConnector) {
      throw new Error("w3m-email-verify-device-view: No auth connector provided");
    }
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl", "s", "xxl", "s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `;
  }
  async listenForDeviceApproval() {
    if (this.authConnector) {
      try {
        await this.authConnector.provider.connectDevice();
        EventsController.sendEvent({ type: "track", event: "DEVICE_REGISTERED_FOR_EMAIL" });
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.replace("EmailVerifyOtp", { email: this.email });
      } catch (error) {
        RouterController.goBack();
      }
    }
  }
  async onResendCode() {
    try {
      if (!this.loading) {
        if (!this.authConnector || !this.email) {
          throw new Error("w3m-email-login-widget: Unable to resend email");
        }
        this.loading = true;
        await this.authConnector.provider.connectEmail({ email: this.email });
        this.listenForDeviceApproval();
        SnackController.showSuccess("Code email resent");
      }
    } catch (error) {
      SnackController.showError(error);
    } finally {
      this.loading = false;
    }
  }
};
W3mEmailVerifyDeviceView.styles = styles_default22;
__decorate35([
  state()
], W3mEmailVerifyDeviceView.prototype, "loading", void 0);
W3mEmailVerifyDeviceView = __decorate35([
  customElement("w3m-email-verify-device-view")
], W3mEmailVerifyDeviceView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-approve-transaction-view/styles.js
var styles_default23 = css`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-approve-transaction-view/index.js
var __decorate36 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var PAGE_HEIGHT = 400;
var PAGE_WIDTH = 360;
var HEADER_HEIGHT = 64;
var W3mApproveTransactionView = class W3mApproveTransactionView2 extends LitElement {
  constructor() {
    super();
    this.bodyObserver = void 0;
    this.unsubscribe = [];
    this.iframe = document.getElementById("w3m-iframe");
    this.ready = false;
    this.unsubscribe.push(...[
      ModalController.subscribeKey("open", (isOpen) => {
        if (!isOpen) {
          this.onHideIframe();
          RouterController.popTransactionStack();
        }
      })
    ]);
  }
  disconnectedCallback() {
    var _a3;
    this.onHideIframe();
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a3 = this.bodyObserver) == null ? void 0 : _a3.unobserve(window.document.body);
  }
  async firstUpdated() {
    await this.syncTheme();
    this.iframe.style.display = "block";
    this.bodyObserver = new ResizeObserver((entries) => {
      var _a3, _b2;
      const contentBoxSize = (_a3 = entries == null ? void 0 : entries[0]) == null ? void 0 : _a3.contentBoxSize;
      const width = (_b2 = contentBoxSize == null ? void 0 : contentBoxSize[0]) == null ? void 0 : _b2.inlineSize;
      this.iframe.style.height = `${PAGE_HEIGHT}px`;
      if (width && width <= 430) {
        this.iframe.style.width = "100%";
        this.iframe.style.left = "0px";
        this.iframe.style.bottom = "0px";
        this.iframe.style.top = "unset";
      } else {
        this.iframe.style.width = `${PAGE_WIDTH}px`;
        this.iframe.style.left = `calc(50% - ${PAGE_WIDTH / 2}px)`;
        this.iframe.style.top = `calc(50% - ${PAGE_HEIGHT / 2}px + ${HEADER_HEIGHT / 2}px)`;
        this.iframe.style.bottom = "unset";
      }
      this.ready = true;
    });
    this.bodyObserver.observe(window.document.body);
  }
  render() {
    if (this.ready) {
      this.onShowIframe();
    }
    return html`<div data-ready=${this.ready}></div>`;
  }
  onShowIframe() {
    const isMobile = window.innerWidth <= 430;
    this.iframe.animate([
      { opacity: 0, transform: isMobile ? "translateY(50px)" : "scale(.95)" },
      { opacity: 1, transform: isMobile ? "translateY(0)" : "scale(1)" }
    ], { duration: 200, easing: "ease", fill: "forwards" });
  }
  async onHideIframe() {
    this.iframe.style.display = "none";
    await this.iframe.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      easing: "ease",
      fill: "forwards"
    }).finished;
  }
  async syncTheme() {
    const authConnector = ConnectorController.getAuthConnector();
    if (authConnector) {
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      await authConnector.provider.syncTheme({
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
    }
  }
};
W3mApproveTransactionView.styles = styles_default23;
__decorate36([
  state()
], W3mApproveTransactionView.prototype, "ready", void 0);
W3mApproveTransactionView = __decorate36([
  customElement("w3m-approve-transaction-view")
], W3mApproveTransactionView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-upgrade-wallet-view/index.js
var __decorate37 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mUpgradeWalletView = class W3mUpgradeWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${ConstantsUtil.SECURE_SITE_DASHBOARD}
          imageSrc=${ConstantsUtil.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `;
  }
};
W3mUpgradeWalletView = __decorate37([
  customElement("w3m-upgrade-wallet-view")
], W3mUpgradeWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-upgrade-to-smart-account-view/index.js
var __decorate38 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mUpgradeToSmartAccountView = class W3mUpgradeToSmartAccountView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.authConnector = ConnectorController.getAuthConnector();
    this.loading = false;
    this.setPreferSmartAccount = async () => {
      if (this.authConnector) {
        try {
          this.loading = true;
          ModalController.setLoading(true);
          await this.authConnector.provider.setPreferredAccount(W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT);
          await ConnectionController.reconnectExternal(this.authConnector);
          ModalController.setLoading(false);
          this.loading = false;
          RouterUtil.navigateAfterPreferredAccountTypeSelect();
        } catch (e) {
          SnackController.showError("Error upgrading to smart account");
        }
      }
    };
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
      CoreHelperUtil.openHref(NavigationUtil.URLS.FAQ, "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return html`<wui-flex .padding=${["0", "2l", "0", "2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`;
  }
  redirectToAccount() {
    RouterController.push("Account");
  }
};
__decorate38([
  state()
], W3mUpgradeToSmartAccountView.prototype, "authConnector", void 0);
__decorate38([
  state()
], W3mUpgradeToSmartAccountView.prototype, "loading", void 0);
W3mUpgradeToSmartAccountView = __decorate38([
  customElement("w3m-upgrade-to-smart-account-view")
], W3mUpgradeToSmartAccountView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-wallet-view/styles.js
var styles_default24 = css`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-wallet-view/index.js
var __decorate39 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mUpdateEmailWalletView = class W3mUpdateEmailWalletView2 extends LitElement {
  constructor() {
    var _a3;
    super(...arguments);
    this.formRef = createRef();
    this.initialEmail = ((_a3 = RouterController.state.data) == null ? void 0 : _a3.email) ?? "";
    this.email = "";
    this.loading = false;
  }
  firstUpdated() {
    var _a3;
    (_a3 = this.formRef.value) == null ? void 0 : _a3.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.onSubmitEmail(event);
      }
    });
  }
  render() {
    const showSubmit = !this.loading && this.email.length > 3 && this.email !== this.initialEmail;
    return html`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!showSubmit}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `;
  }
  onEmailInputChange(event) {
    this.email = event.detail;
  }
  async onSubmitEmail(event) {
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const authConnector = ConnectorController.getAuthConnector();
      if (!authConnector) {
        throw new Error("w3m-update-email-wallet: Auth connector not found");
      }
      const response = await authConnector.provider.updateEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_EDIT" });
      if (response.action === "VERIFY_SECONDARY_OTP") {
        RouterController.push("UpdateEmailSecondaryOtp", {
          email: this.initialEmail,
          newEmail: this.email
        });
      } else {
        RouterController.push("UpdateEmailPrimaryOtp", {
          email: this.initialEmail,
          newEmail: this.email
        });
      }
    } catch (error) {
      SnackController.showError(error);
      this.loading = false;
    }
  }
};
W3mUpdateEmailWalletView.styles = styles_default24;
__decorate39([
  state()
], W3mUpdateEmailWalletView.prototype, "email", void 0);
__decorate39([
  state()
], W3mUpdateEmailWalletView.prototype, "loading", void 0);
W3mUpdateEmailWalletView = __decorate39([
  customElement("w3m-update-email-wallet-view")
], W3mUpdateEmailWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-primary-otp-view/index.js
var __decorate40 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mUpdateEmailPrimaryOtpView = class W3mUpdateEmailPrimaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a3;
    super();
    this.email = (_a3 = RouterController.state.data) == null ? void 0 : _a3.email;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          await this.authConnector.provider.updateEmailPrimaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          RouterController.replace("UpdateEmailSecondaryOtp", RouterController.state.data);
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailPrimaryOtpView = __decorate40([
  customElement("w3m-update-email-primary-otp-view")
], W3mUpdateEmailPrimaryOtpView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-update-email-secondary-otp-view/index.js
var __decorate41 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mUpdateEmailSecondaryOtpView = class W3mUpdateEmailSecondaryOtpView2 extends W3mEmailOtpWidget {
  constructor() {
    var _a3;
    super();
    this.email = (_a3 = RouterController.state.data) == null ? void 0 : _a3.newEmail;
    this.onOtpSubmit = async (otp) => {
      try {
        if (this.authConnector) {
          await this.authConnector.provider.updateEmailSecondaryOtp({ otp });
          EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_PASS" });
          RouterController.reset("Account");
        }
      } catch (error) {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_FAIL" });
        throw error;
      }
    };
    this.onStartOver = () => {
      RouterController.replace("UpdateEmailWallet", RouterController.state.data);
    };
  }
};
W3mUpdateEmailSecondaryOtpView = __decorate41([
  customElement("w3m-update-email-secondary-otp-view")
], W3mUpdateEmailSecondaryOtpView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-unsupported-chain-view/styles.js
var styles_default25 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-unsupported-chain-view/index.js
var __decorate42 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mUnsupportedChainView = class W3mUnsupportedChainView2 extends LitElement {
  constructor() {
    var _a3;
    super(...arguments);
    this.swapUnsupportedChain = (_a3 = RouterController.state.data) == null ? void 0 : _a3.swapUnsupportedChain;
    this.disconecting = false;
  }
  render() {
    return html`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m", "xl", "xs", "xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  descriptionTemplate() {
    if (this.swapUnsupportedChain) {
      return html`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `;
    }
    return html`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
  }
  networksTemplate() {
    const { approvedCaipNetworkIds, requestedCaipNetworks } = NetworkController.state;
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    const filteredNetworks = this.swapUnsupportedChain ? sortedNetworks.filter((network) => ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(network.id)) : sortedNetworks;
    return filteredNetworks.map((network) => html`
        <wui-list-network
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          @click=${() => this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `);
  }
  async onDisconnect() {
    try {
      this.disconecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({
        type: "track",
        event: "DISCONNECT_SUCCESS"
      });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconecting = false;
    }
  }
  async onSwitchNetwork(network) {
    const { isConnected } = AccountController.state;
    const { approvedCaipNetworkIds, supportsAllNetworks, caipNetwork } = NetworkController.state;
    const { data: data3 } = RouterController.state;
    if (isConnected && (caipNetwork == null ? void 0 : caipNetwork.id) !== network.id) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id)) {
        await NetworkController.switchActiveNetwork(network);
        RouterUtil.navigateAfterNetworkSwitch();
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { ...data3, network });
      }
    } else if (!isConnected) {
      NetworkController.setCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
W3mUnsupportedChainView.styles = styles_default25;
__decorate42([
  state()
], W3mUnsupportedChainView.prototype, "disconecting", void 0);
W3mUnsupportedChainView = __decorate42([
  customElement("w3m-unsupported-chain-view")
], W3mUnsupportedChainView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-receive-view/styles.js
var styles_default26 = css`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-receive-view/index.js
var __decorate43 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mWalletReceiveView = class W3mWalletReceiveView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileName = val.profileName;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          SnackController.showError("Account not found");
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-wallet-receive-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html` <wui-flex
      flexDirection="column"
      .padding=${["0", "l", "l", "l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${UiHelperUtil.getTruncateString({
      string: this.profileName || this.address || "",
      charsStart: this.profileName ? 18 : 4,
      charsEnd: this.profileName ? 0 : 4,
      truncate: this.profileName ? "end" : "middle"
    })}
        icon="copy"
        size="sm"
        imageSrc=${networkImage ? networkImage : ""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l", "0", "0", "0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${true}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    var _a3;
    const networks = NetworkController.getRequestedCaipNetworks();
    const isNetworkEnabledForSmartAccounts = NetworkController.checkIfSmartAccountEnabled();
    const caipNetwork = NetworkController.state.caipNetwork;
    if (this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT && isNetworkEnabledForSmartAccounts) {
      if (!caipNetwork) {
        return null;
      }
      return html`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[AssetUtil.getNetworkImage(caipNetwork) ?? ""]}
      ></wui-compatible-network>`;
    }
    const slicedNetworks = (_a3 = networks == null ? void 0 : networks.filter((network) => network == null ? void 0 : network.imageId)) == null ? void 0 : _a3.slice(0, 5);
    const imagesArray = slicedNetworks.map(AssetUtil.getNetworkImage).filter(Boolean);
    return html`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${imagesArray}
    ></wui-compatible-network>`;
  }
  onReceiveClick() {
    RouterController.push("WalletCompatibleNetworks");
  }
  onCopyClick() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mWalletReceiveView.styles = styles_default26;
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "address", void 0);
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "profileName", void 0);
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "network", void 0);
__decorate43([
  state()
], W3mWalletReceiveView.prototype, "preferredAccountType", void 0);
W3mWalletReceiveView = __decorate43([
  customElement("w3m-wallet-receive-view")
], W3mWalletReceiveView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-compatible-networks-view/styles.js
var styles_default27 = css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-compatible-networks-view/index.js
var __decorate44 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mWalletCompatibleNetworksView = class W3mWalletCompatibleNetworksView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(AccountController.subscribeKey("preferredAccountType", (val) => {
      this.preferredAccountType = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html` <wui-flex
      flexDirection="column"
      .padding=${["xs", "s", "m", "s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    const { approvedCaipNetworkIds, requestedCaipNetworks, caipNetwork } = NetworkController.state;
    const isNetworkEnabledForSmartAccounts = NetworkController.checkIfSmartAccountEnabled();
    let sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
    if (isNetworkEnabledForSmartAccounts && this.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT) {
      if (!caipNetwork) {
        return null;
      }
      sortedNetworks = [caipNetwork];
    }
    return sortedNetworks.map((network) => html`
        <wui-list-network
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? "Unknown"}
          ?transparent=${true}
        >
        </wui-list-network>
      `);
  }
};
W3mWalletCompatibleNetworksView.styles = styles_default27;
__decorate44([
  state()
], W3mWalletCompatibleNetworksView.prototype, "preferredAccountType", void 0);
W3mWalletCompatibleNetworksView = __decorate44([
  customElement("w3m-wallet-compatible-networks-view")
], W3mWalletCompatibleNetworksView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-send-view/styles.js
var styles_default28 = css`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-send-view/index.js
var __decorate45 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mWalletSendView = class W3mWalletSendView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.token = SendController.state.token;
    this.sendTokenAmount = SendController.state.sendTokenAmount;
    this.receiverAddress = SendController.state.receiverAddress;
    this.receiverProfileName = SendController.state.receiverProfileName;
    this.loading = SendController.state.loading;
    this.gasPriceInUSD = SendController.state.gasPriceInUSD;
    this.message = "Preview Send";
    this.fetchNetworkPrice();
    this.unsubscribe.push(...[
      SendController.subscribe((val) => {
        this.token = val.token;
        this.sendTokenAmount = val.sendTokenAmount;
        this.receiverAddress = val.receiverAddress;
        this.gasPriceInUSD = val.gasPriceInUSD;
        this.receiverProfileName = val.receiverProfileName;
        this.loading = val.loading;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    this.getMessage();
    return html` <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName ? this.receiverProfileName : this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l", "0", "0", "0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`;
  }
  async fetchNetworkPrice() {
    await SwapController.getNetworkTokenPrice();
    const gas = await SwapController.getInitialGasPrice();
    if ((gas == null ? void 0 : gas.gasPrice) && (gas == null ? void 0 : gas.gasPriceInUSD)) {
      SendController.setGasPrice(gas.gasPrice);
      SendController.setGasPriceInUsd(gas.gasPriceInUSD);
    }
  }
  onButtonClick() {
    RouterController.push("WalletSendPreview");
  }
  getMessage() {
    var _a3;
    this.message = "Preview Send";
    if (this.receiverAddress && !CoreHelperUtil.isAddress(this.receiverAddress)) {
      this.message = "Invalid Address";
    }
    if (!this.receiverAddress) {
      this.message = "Add Address";
    }
    if (this.sendTokenAmount && this.token && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
      this.message = "Insufficient Funds";
    }
    if (!this.sendTokenAmount) {
      this.message = "Add Amount";
    }
    if (this.sendTokenAmount && ((_a3 = this.token) == null ? void 0 : _a3.price)) {
      const value = this.sendTokenAmount * this.token.price;
      if (!value) {
        this.message = "Incorrect Value";
      }
    }
    if (!this.token) {
      this.message = "Select Token";
    }
  }
};
W3mWalletSendView.styles = styles_default28;
__decorate45([
  state()
], W3mWalletSendView.prototype, "token", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "sendTokenAmount", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "receiverAddress", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "receiverProfileName", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "loading", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "gasPriceInUSD", void 0);
__decorate45([
  state()
], W3mWalletSendView.prototype, "message", void 0);
W3mWalletSendView = __decorate45([
  customElement("w3m-wallet-send-view")
], W3mWalletSendView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-send-select-token-view/styles.js
var styles_default29 = css`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-send-select-token-view/index.js
var __decorate46 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mSendSelectTokenView = class W3mSendSelectTokenView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tokenBalance = AccountController.state.tokenBalance;
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        this.tokenBalance = val.tokenBalance;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `;
  }
  templateSearchInput() {
    return html`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
  }
  templateTokens() {
    var _a3, _b2;
    this.tokens = (_a3 = this.tokenBalance) == null ? void 0 : _a3.filter((token) => {
      var _a4;
      return token.chainId === ((_a4 = NetworkController.state.caipNetwork) == null ? void 0 : _a4.id);
    });
    if (this.search) {
      this.filteredTokens = (_b2 = this.tokenBalance) == null ? void 0 : _b2.filter((token) => token.name.toLowerCase().includes(this.search.toLowerCase()));
    } else {
      this.filteredTokens = this.tokens;
    }
    return html`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0", "s", "0", "s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m", "s", "s", "s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens && this.filteredTokens.length > 0 ? this.filteredTokens.map((token) => html`<wui-list-token
                    @click=${this.handleTokenClick.bind(this, token)}
                    ?clickable=${true}
                    tokenName=${token.name}
                    tokenImageUrl=${token.iconUrl}
                    tokenAmount=${token.quantity.numeric}
                    tokenValue=${token.value}
                    tokenCurrency=${token.symbol}
                  ></wui-list-token>`) : html`<wui-flex
                .padding=${["4xl", "0", "0", "0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `;
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  handleTokenClick(token) {
    SendController.setToken(token);
    SendController.setTokenAmount(void 0);
    RouterController.goBack();
  }
};
W3mSendSelectTokenView.styles = styles_default29;
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "tokenBalance", void 0);
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "tokens", void 0);
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "filteredTokens", void 0);
__decorate46([
  state()
], W3mSendSelectTokenView.prototype, "search", void 0);
W3mSendSelectTokenView = __decorate46([
  customElement("w3m-wallet-send-select-token-view")
], W3mSendSelectTokenView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-send-preview-view/styles.js
var styles_default30 = css`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-wallet-send-preview-view/index.js
var __decorate47 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mWalletSendPreviewView = class W3mWalletSendPreviewView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.token = SendController.state.token;
    this.sendTokenAmount = SendController.state.sendTokenAmount;
    this.receiverAddress = SendController.state.receiverAddress;
    this.receiverProfileName = SendController.state.receiverProfileName;
    this.receiverProfileImageUrl = SendController.state.receiverProfileImageUrl;
    this.gasPriceInUSD = SendController.state.gasPriceInUSD;
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.unsubscribe.push(...[
      SendController.subscribe((val) => {
        this.token = val.token;
        this.sendTokenAmount = val.sendTokenAmount;
        this.receiverAddress = val.receiverAddress;
        this.gasPriceInUSD = val.gasPriceInUSD;
        this.receiverProfileName = val.receiverProfileName;
        this.receiverProfileImageUrl = val.receiverProfileImageUrl;
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => this.caipNetwork = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3, _b2;
    return html` <wui-flex flexDirection="column" .padding=${["0", "l", "l", "l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0", "xs", "0", "xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount ? UiHelperUtil.roundNumber(this.sendTokenAmount, 6, 5) : "unknown"} ${(_a3 = this.token) == null ? void 0 : _a3.symbol}"
            .imageSrc=${(_b2 = this.token) == null ? void 0 : _b2.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName ? UiHelperUtil.getTruncateString({
      string: this.receiverProfileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.receiverAddress ? this.receiverAddress : "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}"
            address=${this.receiverAddress ?? ""}
            .imageSrc=${this.receiverProfileImageUrl ?? void 0}
            .isAddress=${true}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl", "0", "0", "0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s", "0", "0", "0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l", "0", "0", "0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`;
  }
  sendValueTemplate() {
    if (this.token && this.sendTokenAmount) {
      const price = this.token.price;
      const totalValue = price * this.sendTokenAmount;
      return html`<wui-text variant="paragraph-400" color="fg-100"
        >$${totalValue.toFixed(2)}</wui-text
      >`;
    }
    return null;
  }
  onSendClick() {
    SendController.sendToken();
  }
  onCancelClick() {
    RouterController.goBack();
  }
};
W3mWalletSendPreviewView.styles = styles_default30;
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "token", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "sendTokenAmount", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "receiverAddress", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "receiverProfileName", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "receiverProfileImageUrl", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "gasPriceInUSD", void 0);
__decorate47([
  state()
], W3mWalletSendPreviewView.prototype, "caipNetwork", void 0);
W3mWalletSendPreviewView = __decorate47([
  customElement("w3m-wallet-send-preview-view")
], W3mWalletSendPreviewView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-wallets-view/styles.js
var styles_default31 = css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-wallets-view/index.js
var __decorate48 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectWalletsView = class W3mConnectWalletsView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
W3mConnectWalletsView.styles = styles_default31;
W3mConnectWalletsView = __decorate48([
  customElement("w3m-connect-wallets-view")
], W3mConnectWalletsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-socials-view/styles.js
var styles_default32 = css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-socials-view/index.js
var __decorate49 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectSocialsView = class W3mConnectSocialsView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
W3mConnectSocialsView.styles = styles_default32;
W3mConnectSocialsView = __decorate49([
  customElement("w3m-connect-socials-view")
], W3mConnectSocialsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-social-view/styles.js
var styles_default33 = css`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil4 = {
  ACCOUNT_TABS: [{ label: "Tokens" }, { label: "NFTs" }, { label: "Activity" }],
  SECURE_SITE_ORIGIN: process.env["NEXT_PUBLIC_SECURE_SITE_ORIGIN"] || "https://secure.walletconnect.com"
};

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-social-view/index.js
var __decorate50 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingSocialView = class W3mConnectingSocialView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.socialProvider = AccountController.state.socialProvider;
    this.socialWindow = AccountController.state.socialWindow;
    this.error = false;
    this.connecting = false;
    this.message = "Connect in the provider window";
    this.authConnector = ConnectorController.getAuthConnector();
    this.handleSocialConnection = async (event) => {
      var _a3;
      if ((_a3 = event.data) == null ? void 0 : _a3.resultUri) {
        if (event.origin === ConstantsUtil4.SECURE_SITE_ORIGIN) {
          window.removeEventListener("message", this.handleSocialConnection, false);
          try {
            if (this.authConnector && !this.connecting) {
              if (this.socialWindow) {
                this.socialWindow.close();
                AccountController.setSocialWindow(void 0);
              }
              this.connecting = true;
              this.updateMessage();
              const uri = event.data.resultUri;
              await this.authConnector.provider.connectSocial(uri);
              if (this.socialProvider) {
                StorageUtil.setConnectedSocialProvider(this.socialProvider);
              }
              await ConnectionController.connectExternal(this.authConnector);
            }
          } catch (error) {
            this.error = true;
            this.updateMessage();
          }
        } else {
          RouterController.goBack();
          SnackController.showError("Untrusted Origin");
        }
      }
    };
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.socialProvider) {
          this.socialProvider = val.socialProvider;
        }
        if (val.socialWindow) {
          this.socialWindow = val.socialWindow;
        }
        if (val.address) {
          if (ModalController.state.open) {
            ModalController.close();
          }
        }
      })
    ]);
    if (this.authConnector) {
      this.connectSocial();
    }
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    window.removeEventListener("message", this.handleSocialConnection, false);
  }
  render() {
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${ifDefined(this.socialProvider)}></wui-logo>
          ${this.error ? null : this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider ?? "Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error ? "error-100" : "fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `;
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  connectSocial() {
    window.addEventListener("message", this.handleSocialConnection, false);
  }
  updateMessage() {
    if (this.error) {
      this.message = "Something went wrong";
    } else if (this.connecting) {
      this.message = "Retrieving user data";
    } else {
      this.message = "Connect in the provider window";
    }
  }
};
W3mConnectingSocialView.styles = styles_default33;
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "socialProvider", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "socialWindow", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "error", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "connecting", void 0);
__decorate50([
  state()
], W3mConnectingSocialView.prototype, "message", void 0);
W3mConnectingSocialView = __decorate50([
  customElement("w3m-connecting-social-view")
], W3mConnectingSocialView);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-list/styles.js
var styles_default34 = css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/markWalletsAsInstalled.js
function markWalletsAsInstalled(wallets) {
  const { connectors } = ConnectorController.state;
  const installedConnectors = connectors.filter((c2) => c2.type === "ANNOUNCED").reduce((acum, val) => {
    var _a3;
    if (!((_a3 = val.info) == null ? void 0 : _a3.rdns)) {
      return acum;
    }
    acum[val.info.rdns] = true;
    return acum;
  }, {});
  const walletsWithInstalled = wallets.map((wallet) => ({
    ...wallet,
    installed: Boolean(wallet.rdns) && Boolean(installedConnectors[wallet.rdns ?? ""])
  }));
  const sortedWallets = walletsWithInstalled.sort((a2, b2) => Number(b2.installed) - Number(a2.installed));
  return sortedWallets;
}

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-list/index.js
var __decorate51 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var PAGINATOR_ID = "local-paginator";
var W3mAllWalletsList = class W3mAllWalletsList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.initial = !ApiController.state.wallets.length;
    this.wallets = ApiController.state.wallets;
    this.recommended = ApiController.state.recommended;
    this.featured = ApiController.state.featured;
    this.unsubscribe.push(...[
      ApiController.subscribeKey("wallets", (val) => this.wallets = val),
      ApiController.subscribeKey("recommended", (val) => this.recommended = val),
      ApiController.subscribeKey("featured", (val) => this.featured = val)
    ]);
  }
  firstUpdated() {
    this.initialFetch();
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a3;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a3 = this.paginationObserver) == null ? void 0 : _a3.disconnect();
  }
  render() {
    return html`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a3;
    const gridEl = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("wui-grid");
    if (this.initial && gridEl) {
      await ApiController.fetchWallets({ page: 1 });
      await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.initial = false;
      gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  shimmerTemplate(items, id) {
    return [...Array(items)].map(() => html`
        <wui-card-select-loader type="wallet" id=${ifDefined(id)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    const wallets = [...this.featured, ...this.recommended, ...this.wallets];
    const walletsWithInstalled = markWalletsAsInstalled(wallets);
    return walletsWithInstalled.map((wallet) => html`
        <wui-card-select
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          type="wallet"
          name=${wallet.name}
          @click=${() => this.onConnectWallet(wallet)}
          .installed=${wallet.installed}
        ></wui-card-select>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets, recommended, featured, count } = ApiController.state;
    const columns = window.innerWidth < 352 ? 3 : 4;
    const currentWallets = wallets.length + recommended.length;
    const minimumRows = Math.ceil(currentWallets / columns);
    let shimmerCount = minimumRows * columns - currentWallets + columns;
    shimmerCount -= wallets.length ? featured.length % columns : 0;
    if (count === 0 && featured.length > 0) {
      return null;
    }
    if (count === 0 || [...featured, ...wallets, ...recommended].length < count) {
      return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
    }
    return null;
  }
  createPaginationObserver() {
    var _a3;
    const loaderEl = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector(`#${PAGINATOR_ID}`);
    if (loaderEl) {
      this.paginationObserver = new IntersectionObserver(([element]) => {
        if ((element == null ? void 0 : element.isIntersecting) && !this.initial) {
          const { page, count, wallets } = ApiController.state;
          if (wallets.length < count) {
            ApiController.fetchWallets({ page: page + 1 });
          }
        }
      });
      this.paginationObserver.observe(loaderEl);
    }
  }
  onConnectWallet(wallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsList.styles = styles_default34;
__decorate51([
  state()
], W3mAllWalletsList.prototype, "initial", void 0);
__decorate51([
  state()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate51([
  state()
], W3mAllWalletsList.prototype, "recommended", void 0);
__decorate51([
  state()
], W3mAllWalletsList.prototype, "featured", void 0);
W3mAllWalletsList = __decorate51([
  customElement("w3m-all-wallets-list")
], W3mAllWalletsList);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-search/styles.js
var styles_default35 = css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-search/index.js
var __decorate52 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAllWalletsSearch = class W3mAllWalletsSearch2 extends LitElement {
  constructor() {
    super(...arguments);
    this.prevQuery = "";
    this.loading = true;
    this.query = "";
  }
  render() {
    this.onSearch();
    return this.loading ? html`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    if (this.query.trim() !== this.prevQuery.trim()) {
      this.prevQuery = this.query;
      this.loading = true;
      await ApiController.searchWallet({ search: this.query });
      this.loading = false;
    }
  }
  walletsTemplate() {
    const { search } = ApiController.state;
    const wallets = markWalletsAsInstalled(search);
    if (!search.length) {
      return html`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `;
    }
    return html`
      <wui-grid
        .padding=${["0", "s", "s", "s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${wallets.map((wallet) => html`
            <wui-card-select
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              type="wallet"
              name=${wallet.name}
              @click=${() => this.onConnectWallet(wallet)}
              .installed=${wallet.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `;
  }
  onConnectWallet(wallet) {
    const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsSearch.styles = styles_default35;
__decorate52([
  state()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate52([
  property()
], W3mAllWalletsSearch.prototype, "query", void 0);
W3mAllWalletsSearch = __decorate52([
  customElement("w3m-all-wallets-search")
], W3mAllWalletsSearch);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-header/index.js
var __decorate53 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingHeader = class W3mConnectingHeader2 extends LitElement {
  constructor() {
    super();
    this.platformTabs = [];
    this.unsubscribe = [];
    this.platforms = [];
    this.onSelectPlatfrom = void 0;
    this.buffering = false;
    this.unsubscribe.push(ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const tabs = this.generateTabs();
    return html`
      <wui-flex justifyContent="center" .padding=${["0", "0", "l", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${tabs}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const tabs = this.platforms.map((platform) => {
      if (platform === "browser") {
        return { label: "Browser", icon: "extension", platform: "browser" };
      } else if (platform === "mobile") {
        return { label: "Mobile", icon: "mobile", platform: "mobile" };
      } else if (platform === "qrcode") {
        return { label: "Mobile", icon: "mobile", platform: "qrcode" };
      } else if (platform === "web") {
        return { label: "Webapp", icon: "browser", platform: "web" };
      } else if (platform === "desktop") {
        return { label: "Desktop", icon: "desktop", platform: "desktop" };
      }
      return { label: "Browser", icon: "extension", platform: "unsupported" };
    });
    this.platformTabs = tabs.map(({ platform }) => platform);
    return tabs;
  }
  onTabChange(index) {
    var _a3;
    const tab = this.platformTabs[index];
    if (tab) {
      (_a3 = this.onSelectPlatfrom) == null ? void 0 : _a3.call(this, tab);
    }
  }
};
__decorate53([
  property({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate53([
  property()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
__decorate53([
  state()
], W3mConnectingHeader.prototype, "buffering", void 0);
W3mConnectingHeader = __decorate53([
  customElement("w3m-connecting-header")
], W3mConnectingHeader);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var __decorate54 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWcBrowser = class W3mConnectingWcBrowser2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  async onConnectProxy() {
    var _a3;
    try {
      this.error = false;
      const { connectors } = ConnectorController.state;
      const announcedConnector = connectors.find((c2) => {
        var _a4, _b2;
        return c2.type === "ANNOUNCED" && ((_a4 = c2.info) == null ? void 0 : _a4.rdns) === ((_b2 = this.wallet) == null ? void 0 : _b2.rdns);
      });
      const injectedConnector = connectors.find((c2) => c2.type === "INJECTED");
      if (announcedConnector) {
        await ConnectionController.connectExternal(announcedConnector);
      } else if (injectedConnector) {
        await ConnectionController.connectExternal(injectedConnector);
      }
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "browser", name: ((_a3 = this.wallet) == null ? void 0 : _a3.name) || "Unknown" }
      });
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingWcBrowser = __decorate54([
  customElement("w3m-connecting-wc-browser")
], W3mConnectingWcBrowser);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var __decorate55 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWcDesktop = class W3mConnectingWcDesktop2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "desktop" }
    });
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.ready = true;
      this.timeout = setTimeout(() => {
        var _a3;
        (_a3 = this.onConnect) == null ? void 0 : _a3.call(this);
      }, 200);
    }
  }
  onConnectProxy() {
    var _a3;
    if (((_a3 = this.wallet) == null ? void 0 : _a3.desktop_link) && this.uri) {
      try {
        this.error = false;
        const { desktop_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcDesktop = __decorate55([
  customElement("w3m-connecting-wc-desktop")
], W3mConnectingWcDesktop);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var __decorate56 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWcMobile = class W3mConnectingWcMobile2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    document.addEventListener("visibilitychange", this.onBuffering.bind(this));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "mobile" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("visibilitychange", this.onBuffering.bind(this));
  }
  onRenderProxy() {
    var _a3;
    if (!this.ready && this.uri) {
      this.ready = true;
      (_a3 = this.onConnect) == null ? void 0 : _a3.call(this);
    }
  }
  onConnectProxy() {
    var _a3;
    if (((_a3 = this.wallet) == null ? void 0 : _a3.mobile_link) && this.uri) {
      try {
        this.error = false;
        const { mobile_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(mobile_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_self");
      } catch {
        this.error = true;
      }
    }
  }
  onBuffering() {
    const isIos = CoreHelperUtil.isIos();
    if ((document == null ? void 0 : document.visibilityState) === "visible" && !this.error && isIos) {
      ConnectionController.setBuffering(true);
      setTimeout(() => {
        ConnectionController.setBuffering(false);
      }, 5e3);
    }
  }
};
W3mConnectingWcMobile = __decorate56([
  customElement("w3m-connecting-wc-mobile")
], W3mConnectingWcMobile);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js
var styles_default36 = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var __decorate57 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWcQrcode = class W3mConnectingWcQrcode2 extends W3mConnectingWidget {
  constructor() {
    var _a3;
    super();
    this.forceUpdate = () => {
      this.requestUpdate();
    };
    window.addEventListener("resize", this.forceUpdate);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: ((_a3 = this.wallet) == null ? void 0 : _a3.name) ?? "WalletConnect", platform: "qrcode" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    this.onRenderProxy();
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.timeout = setTimeout(() => {
        this.ready = true;
      }, 200);
    }
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) {
      return null;
    }
    const size = this.getBoundingClientRect().width - 40;
    const alt = this.wallet ? this.wallet.name : void 0;
    ConnectionController.setWcLinking(void 0);
    ConnectionController.setRecentWallet(this.wallet);
    return html` <wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
      alt=${ifDefined(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const inactive = !this.uri || !this.ready;
    return html`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
  }
};
W3mConnectingWcQrcode.styles = styles_default36;
W3mConnectingWcQrcode = __decorate57([
  customElement("w3m-connecting-wc-qrcode")
], W3mConnectingWcQrcode);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var __decorate58 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.wallet = (_a3 = RouterController.state.data) == null ? void 0 : _a3.wallet;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
W3mConnectingWcUnsupported = __decorate58([
  customElement("w3m-connecting-wc-unsupported")
], W3mConnectingWcUnsupported);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var __decorate59 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectingWcWeb = class W3mConnectingWcWeb2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.secondaryBtnLabel = "Open";
    this.secondaryLabel = "Open and continue in a new browser tab";
    this.secondaryBtnIcon = "externalLink";
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "web" }
    });
  }
  onConnectProxy() {
    var _a3;
    if (((_a3 = this.wallet) == null ? void 0 : _a3.webapp_link) && this.uri) {
      try {
        this.error = false;
        const { webapp_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcWeb = __decorate59([
  customElement("w3m-connecting-wc-web")
], W3mConnectingWcWeb);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-details/styles.js
var styles_default37 = css`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-details/index.js
var __decorate60 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var slippageRate = ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE;
var WuiSwapDetails = class WuiSwapDetails2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.unsubscribe = [];
    this.networkName = (_a3 = NetworkController.state.caipNetwork) == null ? void 0 : _a3.name;
    this.detailsOpen = false;
    this.sourceToken = SwapController.state.sourceToken;
    this.toToken = SwapController.state.toToken;
    this.toTokenAmount = SwapController.state.toTokenAmount;
    this.sourceTokenPriceInUSD = SwapController.state.sourceTokenPriceInUSD;
    this.toTokenPriceInUSD = SwapController.state.toTokenPriceInUSD;
    this.gasPriceInUSD = SwapController.state.gasPriceInUSD;
    this.priceImpact = SwapController.state.priceImpact;
    this.maxSlippage = SwapController.state.maxSlippage;
    this.networkTokenSymbol = SwapController.state.networkTokenSymbol;
    this.inputError = SwapController.state.inputError;
    this.unsubscribe.push(...[
      SwapController.subscribe((newState) => {
        this.sourceToken = newState.sourceToken;
        this.toToken = newState.toToken;
        this.toTokenAmount = newState.toTokenAmount;
        this.gasPriceInUSD = newState.gasPriceInUSD;
        this.priceImpact = newState.priceImpact;
        this.maxSlippage = newState.maxSlippage;
        this.sourceTokenPriceInUSD = newState.sourceTokenPriceInUSD;
        this.toTokenPriceInUSD = newState.toTokenPriceInUSD;
        this.inputError = newState.inputError;
      })
    ]);
  }
  render() {
    const minReceivedAmount = this.toTokenAmount && this.maxSlippage ? NumberUtil.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString() : null;
    if (!this.sourceToken || !this.toToken || this.inputError) {
      return null;
    }
    const toTokenSwappedAmount = this.sourceTokenPriceInUSD && this.toTokenPriceInUSD ? 1 / this.toTokenPriceInUSD * this.sourceTokenPriceInUSD : 0;
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0", "xs", "0", "xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${UiHelperUtil.formatNumberToLocalString(toTokenSwappedAmount, 3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen ? html`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD, 3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact ? html` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${UiHelperUtil.formatNumberToLocalString(this.priceImpact, 3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>` : null}
                  ${this.maxSlippage && this.sourceToken.symbol ? html`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${minReceivedAmount ? `Transaction will be reversed if you receive less than ${UiHelperUtil.formatNumberToLocalString(minReceivedAmount, 6)} ${this.toToken.symbol} due to price changes.` : ""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${UiHelperUtil.formatNumberToLocalString(this.maxSlippage, 6)}
                              ${this.toToken.symbol} ${slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>` : null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              ` : null}
        </wui-flex>
      </wui-flex>
    `;
  }
  toggleDetails() {
    this.detailsOpen = !this.detailsOpen;
  }
};
WuiSwapDetails.styles = [styles_default37];
__decorate60([
  state()
], WuiSwapDetails.prototype, "networkName", void 0);
__decorate60([
  property()
], WuiSwapDetails.prototype, "detailsOpen", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "sourceToken", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "toToken", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "toTokenAmount", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "sourceTokenPriceInUSD", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "toTokenPriceInUSD", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "gasPriceInUSD", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "priceImpact", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "maxSlippage", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "networkTokenSymbol", void 0);
__decorate60([
  state()
], WuiSwapDetails.prototype, "inputError", void 0);
WuiSwapDetails = __decorate60([
  customElement("w3m-swap-details")
], WuiSwapDetails);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-input/styles.js
var styles_default38 = css`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-input/index.js
var __decorate61 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var MINIMUM_USD_VALUE_TO_CONVERT = 5e-5;
var W3mSwapInput = class W3mSwapInput2 extends LitElement {
  constructor() {
    super(...arguments);
    this.focused = false;
    this.price = 0;
    this.target = "sourceToken";
    this.onSetAmount = null;
    this.onSetMaxValue = null;
  }
  render() {
    const marketValue = this.marketValue || "0";
    const isMarketValueGreaterThanZero = NumberUtil.bigNumber(marketValue).isGreaterThan("0");
    return html`
      <wui-flex class="${this.focused ? "focus" : ""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${() => this.onFocusChange(true)}
            @focusout=${() => this.onFocusChange(false)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${isMarketValueGreaterThanZero ? `$${UiHelperUtil.formatNumberToLocalString(this.marketValue, 3)}` : null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
  }
  handleKeydown(event) {
    return InputUtil.numericInputKeyDown(event, this.value, (value) => {
      var _a3;
      return (_a3 = this.onSetAmount) == null ? void 0 : _a3.call(this, this.target, value);
    });
  }
  dispatchInputChangeEvent(event) {
    if (!this.onSetAmount) {
      return;
    }
    const value = event.target.value.replace(/[^0-9.]/gu, "");
    if (value === "," || value === ".") {
      this.onSetAmount(this.target, "0.");
    } else if (value.endsWith(",")) {
      this.onSetAmount(this.target, value.replace(",", "."));
    } else {
      this.onSetAmount(this.target, value);
    }
  }
  setMaxValueToInput() {
    var _a3;
    (_a3 = this.onSetMaxValue) == null ? void 0 : _a3.call(this, this.target, this.balance);
  }
  templateTokenSelectButton() {
    if (!this.token) {
      return html` <wui-button
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;
    }
    return html`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `;
  }
  tokenBalanceTemplate() {
    const balanceValueInUSD = NumberUtil.multiply(this.balance, this.price);
    const haveBalance = balanceValueInUSD ? balanceValueInUSD == null ? void 0 : balanceValueInUSD.isGreaterThan(MINIMUM_USD_VALUE_TO_CONVERT) : false;
    return html`
      ${haveBalance ? html`<wui-text variant="small-400" color="fg-200">
            ${UiHelperUtil.formatNumberToLocalString(this.balance, 3)}
          </wui-text>` : null}
      ${this.target === "sourceToken" ? this.tokenActionButtonTemplate(haveBalance) : null}
    `;
  }
  tokenActionButtonTemplate(haveBalance) {
    if (haveBalance) {
      return html` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`;
    }
    return html` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`;
  }
  onFocusChange(state2) {
    this.focused = state2;
  }
  onSelectToken() {
    EventsController.sendEvent({ type: "track", event: "CLICK_SELECT_TOKEN_TO_SWAP" });
    RouterController.push("SwapSelectToken", {
      target: this.target
    });
  }
  onBuyToken() {
    RouterController.push("OnRampProviders");
  }
};
W3mSwapInput.styles = [styles_default38];
__decorate61([
  property()
], W3mSwapInput.prototype, "focused", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "balance", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "value", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "price", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "marketValue", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "disabled", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "target", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "token", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "onSetAmount", void 0);
__decorate61([
  property()
], W3mSwapInput.prototype, "onSetMaxValue", void 0);
W3mSwapInput = __decorate61([
  customElement("w3m-swap-input")
], W3mSwapInput);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-input-skeleton/styles.js
var styles_default39 = css`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-swap-input-skeleton/index.js
var __decorate62 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mSwapInputSkeleton = class W3mSwapInputSkeleton2 extends LitElement {
  constructor() {
    super(...arguments);
    this.target = "sourceToken";
  }
  render() {
    return html`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `;
  }
  templateTokenSelectButton() {
    return html`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `;
  }
};
W3mSwapInputSkeleton.styles = [styles_default39];
__decorate62([
  property()
], W3mSwapInputSkeleton.prototype, "target", void 0);
W3mSwapInputSkeleton = __decorate62([
  customElement("w3m-swap-input-skeleton")
], W3mSwapInputSkeleton);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-header/styles.js
var styles_default40 = css`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-header/index.js
var __decorate63 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var BETA_SCREENS = ["Swap", "SwapSelectToken", "SwapPreview"];
function headings() {
  var _a3, _b2, _c, _d, _e, _f2, _g;
  const connectorName = (_b2 = (_a3 = RouterController.state.data) == null ? void 0 : _a3.connector) == null ? void 0 : _b2.name;
  const walletName = (_d = (_c = RouterController.state.data) == null ? void 0 : _c.wallet) == null ? void 0 : _d.name;
  const networkName = (_f2 = (_e = RouterController.state.data) == null ? void 0 : _e.network) == null ? void 0 : _f2.name;
  const name = walletName ?? connectorName;
  const connectors = ConnectorController.getConnectors();
  const isEmail = connectors.length === 1 && ((_g = connectors[0]) == null ? void 0 : _g.id) === "w3m-email";
  return {
    Connect: `Connect ${isEmail ? "Email" : ""} Wallet`,
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    ConnectingExternal: name ?? "Connect Wallet",
    ConnectingWalletConnect: name ?? "WalletConnect",
    ConnectingSiwe: "Sign In",
    Networks: "Choose Network",
    SwitchNetwork: networkName ?? "Switch Network",
    AllWallets: "All Wallets",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a wallet?",
    GetWallet: "Get a wallet",
    Downloads: name ? `Get ${name}` : "Downloads",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    ApproveTransaction: "Approve Transaction",
    Transactions: "Activity",
    UpgradeEmailWallet: "Upgrade your Wallet",
    UpgradeToSmartAccount: void 0,
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    UnsupportedChain: "Switch Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    WhatIsABuy: "What is Buy?",
    BuyInProgress: "Buy",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    RegisterAccountName: "Choose name",
    RegisterAccountNameSuccess: "",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks",
    Swap: "Swap",
    SwapSelectToken: "Select token",
    SwapPreview: "Preview swap",
    WalletSend: "Send",
    WalletSendPreview: "Review send",
    WalletSendSelectToken: "Select Token",
    ConnectWallets: "Connect wallet",
    ConnectSocials: "All socials",
    ConnectingSocial: AccountController.state.socialProvider ? AccountController.state.socialProvider : "Connect Social"
  };
}
var W3mHeader = class W3mHeader2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.heading = headings()[RouterController.state.view];
    this.buffering = false;
    this.showBack = false;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => {
      this.onViewChange(val);
      this.onHistoryChange();
    }), ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
    `;
  }
  onWalletHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" });
    RouterController.push("WhatIsAWallet");
  }
  async onClose() {
    if (OptionsController.state.isSiweEnabled) {
      const { SIWEController } = await import("./exports-FKYSPIPU.js");
      if (SIWEController.state.status !== "success") {
        await ConnectionController.disconnect();
      }
    }
    ModalController.close();
  }
  titleTemplate() {
    const isBeta = BETA_SCREENS.includes(RouterController.state.view);
    return html`
      <wui-flex class="w3m-header-title" alignItems="center" gap="xs">
        <wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>
        ${isBeta ? html`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  dynamicButtonTemplate() {
    const { view } = RouterController.state;
    const isConnectHelp = view === "Connect";
    const isApproveTransaction = view === "ApproveTransaction";
    const isUpgradeToSmartAccounts = view === "UpgradeToSmartAccount";
    const isConnectingSIWEView = view === "ConnectingSiwe";
    const shouldHideBack = isApproveTransaction || isUpgradeToSmartAccounts || isConnectingSIWEView;
    if (this.showBack && !shouldHideBack) {
      return html`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`;
    }
    return html`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  getPadding() {
    if (this.heading) {
      return ["l", "2l", "l", "2l"];
    }
    return ["l", "2l", "0", "2l"];
  }
  async onViewChange(view) {
    var _a3;
    const headingEl = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("wui-flex.w3m-header-title");
    if (headingEl) {
      const preset = headings()[view];
      await headingEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.heading = preset;
      headingEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onHistoryChange() {
    var _a3;
    const { history } = RouterController.state;
    const buttonEl = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("#dynamic");
    if (history.length > 1 && !this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = true;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    } else if (history.length <= 1 && this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = false;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onGoBack() {
    RouterController.goBack();
  }
};
W3mHeader.styles = [styles_default40];
__decorate63([
  state()
], W3mHeader.prototype, "heading", void 0);
__decorate63([
  state()
], W3mHeader.prototype, "buffering", void 0);
__decorate63([
  state()
], W3mHeader.prototype, "showBack", void 0);
W3mHeader = __decorate63([
  customElement("w3m-header")
], W3mHeader);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-help-widget/index.js
var __decorate64 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mHelpWidget = class W3mHelpWidget2 extends LitElement {
  constructor() {
    super(...arguments);
    this.data = [];
  }
  render() {
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((item) => html`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${item.images.map((image) => html`<wui-visual name=${image}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${item.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${item.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
__decorate64([
  property({ type: Array })
], W3mHelpWidget.prototype, "data", void 0);
W3mHelpWidget = __decorate64([
  customElement("w3m-help-widget")
], W3mHelpWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-onramp-input/styles.js
var styles_default41 = css`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-onramp-input/index.js
var __decorate65 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mInputCurrency = class W3mInputCurrency2 extends LitElement {
  constructor() {
    var _a3;
    super();
    this.unsubscribe = [];
    this.type = "Token";
    this.value = 0;
    this.currencies = [];
    this.selectedCurrency = (_a3 = this.currencies) == null ? void 0 : _a3[0];
    this.currencyImages = AssetController.state.currencyImages;
    this.tokenImages = AssetController.state.tokenImages;
    this.unsubscribe.push(OnRampController.subscribeKey("purchaseCurrency", (val) => {
      if (!val || this.type === "Fiat") {
        return;
      }
      this.selectedCurrency = this.formatPurchaseCurrency(val);
    }), OnRampController.subscribeKey("paymentCurrency", (val) => {
      if (!val || this.type === "Token") {
        return;
      }
      this.selectedCurrency = this.formatPaymentCurrency(val);
    }), OnRampController.subscribe((val) => {
      if (this.type === "Fiat") {
        this.currencies = val.purchaseCurrencies.map(this.formatPurchaseCurrency);
      } else {
        this.currencies = val.paymentCurrencies.map(this.formatPaymentCurrency);
      }
    }), AssetController.subscribe((val) => {
      this.currencyImages = { ...val.currencyImages };
      this.tokenImages = { ...val.tokenImages };
    }));
  }
  firstUpdated() {
    OnRampController.getAvailableCurrencies();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3;
    const symbol = ((_a3 = this.selectedCurrency) == null ? void 0 : _a3.symbol) || "";
    const image = this.currencyImages[symbol] || this.tokenImages[symbol];
    return html`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency ? html` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${() => ModalController.open({ view: `OnRamp${this.type}Select` })}
          >
            <wui-image src=${ifDefined(image)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>` : html`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`;
  }
  formatPaymentCurrency(currency) {
    return {
      name: currency.id,
      symbol: currency.id
    };
  }
  formatPurchaseCurrency(currency) {
    return {
      name: currency.name,
      symbol: currency.symbol
    };
  }
};
W3mInputCurrency.styles = styles_default41;
__decorate65([
  property({ type: String })
], W3mInputCurrency.prototype, "type", void 0);
__decorate65([
  property({ type: Number })
], W3mInputCurrency.prototype, "value", void 0);
__decorate65([
  state()
], W3mInputCurrency.prototype, "currencies", void 0);
__decorate65([
  state()
], W3mInputCurrency.prototype, "selectedCurrency", void 0);
__decorate65([
  state()
], W3mInputCurrency.prototype, "currencyImages", void 0);
__decorate65([
  state()
], W3mInputCurrency.prototype, "tokenImages", void 0);
W3mInputCurrency = __decorate65([
  customElement("w3m-onramp-input")
], W3mInputCurrency);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-legal-footer/styles.js
var styles_default42 = css`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-legal-footer/index.js
var __decorate66 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mLegalFooter = class W3mLegalFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return html`<a href=${termsConditionsUrl}>Terms of Service</a>`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return html`<a href=${privacyPolicyUrl}>Privacy Policy</a>`;
  }
};
W3mLegalFooter.styles = [styles_default42];
W3mLegalFooter = __decorate66([
  customElement("w3m-legal-footer")
], W3mLegalFooter);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-mobile-download-links/styles.js
var styles_default43 = css`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-mobile-download-links/index.js
var __decorate67 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mMobileDownloadLinks = class W3mMobileDownloadLinks2 extends LitElement {
  constructor() {
    super(...arguments);
    this.wallet = void 0;
  }
  render() {
    if (!this.wallet) {
      this.style.display = "none";
      return null;
    }
    const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
    const isMobile = CoreHelperUtil.isMobile();
    const isIos = CoreHelperUtil.isIos();
    const isAndroid = CoreHelperUtil.isAndroid();
    const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
    const shortName = UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 12,
      charsEnd: 0,
      truncate: "end"
    });
    if (isMultiple && !isMobile) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
    }
    if (!isMultiple && homepage) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (app_store && isIos) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (play_store && isAndroid) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    this.style.display = "none";
    return null;
  }
  onAppStore() {
    var _a3;
    if ((_a3 = this.wallet) == null ? void 0 : _a3.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a3;
    if ((_a3 = this.wallet) == null ? void 0 : _a3.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a3;
    if ((_a3 = this.wallet) == null ? void 0 : _a3.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mMobileDownloadLinks.styles = [styles_default43];
__decorate67([
  property({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate67([
  customElement("w3m-mobile-download-links")
], W3mMobileDownloadLinks);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-onramp-providers-footer/styles.js
var styles_default44 = css`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-onramp-providers-footer/index.js
var __decorate68 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex
        .padding=${["m", "s", "s", "s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `;
  }
  howDoesItWorkTemplate() {
    return html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
  }
  onWhatIsBuy() {
    RouterController.push("WhatIsABuy");
  }
};
W3mOnRampProvidersFooter.styles = [styles_default44];
W3mOnRampProvidersFooter = __decorate68([
  customElement("w3m-onramp-providers-footer")
], W3mOnRampProvidersFooter);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-snackbar/styles.js
var styles_default45 = css`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-snackbar/index.js
var __decorate69 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var presets = {
  success: {
    backgroundColor: "success-100",
    iconColor: "success-100",
    icon: "checkmark"
  },
  error: {
    backgroundColor: "error-100",
    iconColor: "error-100",
    icon: "close"
  }
};
var W3mSnackBar = class W3mSnackBar2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.open = SnackController.state.open;
    this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = SnackController.state;
    const preset = presets[variant];
    return html`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset.backgroundColor}
        iconColor=${preset.iconColor}
        icon=${preset.icon}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout);
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.timeout = setTimeout(() => SnackController.hide(), 2500);
    } else {
      this.animate([
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mSnackBar.styles = styles_default45;
__decorate69([
  state()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate69([
  customElement("w3m-snackbar")
], W3mSnackBar);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-email-login-widget/styles.js
var styles_default46 = css`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-email-login-widget/index.js
var __decorate70 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mEmailLoginWidget = class W3mEmailLoginWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.formRef = createRef();
    this.connectors = ConnectorController.state.connectors;
    this.email = "";
    this.loading = false;
    this.error = "";
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    var _a3;
    (_a3 = this.formRef.value) == null ? void 0 : _a3.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.onSubmitEmail(event);
      }
    });
  }
  render() {
    const connector = this.connectors.find((c2) => c2.type === "AUTH");
    const multipleConnectors = this.connectors.length > 1;
    if (!(connector == null ? void 0 : connector.email)) {
      return null;
    }
    return html`
      <form ${ref(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${connector.socials || !multipleConnectors ? null : html`<wui-flex .padding=${["xxs", "0", "0", "0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `;
  }
  submitButtonTemplate() {
    const showSubmit = !this.loading && this.email.length > 3;
    return showSubmit ? html`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        ` : null;
  }
  loadingTemplate() {
    return this.loading ? html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>` : null;
  }
  onEmailInputChange(event) {
    this.email = event.detail.trim();
    this.error = "";
  }
  async onSubmitEmail(event) {
    try {
      if (this.loading) {
        return;
      }
      this.loading = true;
      event.preventDefault();
      const authConnector = ConnectorController.getAuthConnector();
      if (!authConnector) {
        throw new Error("w3m-email-login-widget: Auth connector not found");
      }
      const { action } = await authConnector.provider.connectEmail({ email: this.email });
      EventsController.sendEvent({ type: "track", event: "EMAIL_SUBMITTED" });
      if (action === "VERIFY_OTP") {
        EventsController.sendEvent({ type: "track", event: "EMAIL_VERIFICATION_CODE_SENT" });
        RouterController.push("EmailVerifyOtp", { email: this.email });
      } else if (action === "VERIFY_DEVICE") {
        RouterController.push("EmailVerifyDevice", { email: this.email });
      }
    } catch (error) {
      const parsedError = CoreHelperUtil.parseError(error);
      if (parsedError == null ? void 0 : parsedError.includes("Invalid email")) {
        this.error = "Invalid email. Try again.";
      } else {
        SnackController.showError(error);
      }
    } finally {
      this.loading = false;
    }
  }
  onFocusEvent() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_LOGIN_SELECTED" });
  }
};
W3mEmailLoginWidget.styles = styles_default46;
__decorate70([
  state()
], W3mEmailLoginWidget.prototype, "connectors", void 0);
__decorate70([
  state()
], W3mEmailLoginWidget.prototype, "email", void 0);
__decorate70([
  state()
], W3mEmailLoginWidget.prototype, "loading", void 0);
__decorate70([
  state()
], W3mEmailLoginWidget.prototype, "error", void 0);
W3mEmailLoginWidget = __decorate70([
  customElement("w3m-email-login-widget")
], W3mEmailLoginWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-default-widget/styles.js
var styles_default47 = css`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-default-widget/index.js
var __decorate71 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountDefaultWidget = class W3mAccountDefaultWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.network = NetworkController.state.caipNetwork;
    this.disconnecting = false;
    this.balance = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.balance = val.balance;
          this.balanceSymbol = val.balanceSymbol;
        } else if (!this.disconnecting) {
          SnackController.showError("Account not found");
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3;
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html`<wui-flex
        flexDirection="column"
        .padding=${["0", "xl", "m", "xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${ifDefined(this.address)}
          address=${ifDefined(this.address)}
          imageSrc=${ifDefined(this.profileImage === null ? void 0 : this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName ? UiHelperUtil.getTruncateString({
      string: this.profileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address ? this.address : "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${CoreHelperUtil.formatBalance(this.balance, this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0", "s", "s", "s"]}>
        ${this.emailCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>

        <wui-list-item
          .variant=${networkImage ? "image" : "icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ifDefined(networkImage)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((_a3 = this.network) == null ? void 0 : _a3.name) ?? "Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${true}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${false}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
  }
  onrampTemplate() {
    const { enableOnramp } = OptionsController.state;
    if (!enableOnramp) {
      return null;
    }
    return html`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${true}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `;
  }
  emailCardTemplate() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    const { origin } = location;
    if (!authConnector || type !== "AUTH" || origin.includes(ConstantsUtil.SECURE_SITE)) {
      return null;
    }
    return html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  handleClickPay() {
    RouterController.push("OnRampProviders");
  }
  explorerBtnTemplate() {
    const { addressExplorerUrl } = AccountController.state;
    if (!addressExplorerUrl) {
      return null;
    }
    return html`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `;
  }
  isAllowedNetworkSwitch() {
    const { requestedCaipNetworks } = NetworkController.state;
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a3;
      return id === ((_a3 = this.network) == null ? void 0 : _a3.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      EventsController.sendEvent({ type: "track", event: "CLICK_NETWORKS" });
      RouterController.push("Networks");
    }
  }
  onTransactions() {
    EventsController.sendEvent({ type: "track", event: "CLICK_TRANSACTIONS" });
    RouterController.push("Transactions");
  }
  async onDisconnect() {
    try {
      this.disconnecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconnecting = false;
    }
  }
  onExplorer() {
    const { addressExplorerUrl } = AccountController.state;
    if (addressExplorerUrl) {
      CoreHelperUtil.openHref(addressExplorerUrl, "_blank");
    }
  }
  onGoToUpgradeView() {
    EventsController.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" });
    RouterController.push("UpgradeEmailWallet");
  }
};
W3mAccountDefaultWidget.styles = styles_default47;
__decorate71([
  state()
], W3mAccountDefaultWidget.prototype, "address", void 0);
__decorate71([
  state()
], W3mAccountDefaultWidget.prototype, "profileImage", void 0);
__decorate71([
  state()
], W3mAccountDefaultWidget.prototype, "profileName", void 0);
__decorate71([
  state()
], W3mAccountDefaultWidget.prototype, "network", void 0);
__decorate71([
  state()
], W3mAccountDefaultWidget.prototype, "disconnecting", void 0);
__decorate71([
  state()
], W3mAccountDefaultWidget.prototype, "balance", void 0);
__decorate71([
  state()
], W3mAccountDefaultWidget.prototype, "balanceSymbol", void 0);
W3mAccountDefaultWidget = __decorate71([
  customElement("w3m-account-default-widget")
], W3mAccountDefaultWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-wallet-features-widget/styles.js
var styles_default48 = css`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-wallet-features-widget/index.js
var __decorate72 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var TABS = 3;
var TABS_PADDING = 48;
var MODAL_MOBILE_VIEW_PX = 430;
var W3mAccountWalletFeaturesWidget = class W3mAccountWalletFeaturesWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.smartAccountDeployed = AccountController.state.smartAccountDeployed;
    this.network = NetworkController.state.caipNetwork;
    this.currentTab = AccountController.state.currentTab;
    this.tokenBalance = AccountController.state.tokenBalance;
    this.preferredAccountType = AccountController.state.preferredAccountType;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.currentTab = val.currentTab;
          this.tokenBalance = val.tokenBalance;
          this.smartAccountDeployed = val.smartAccountDeployed;
          this.preferredAccountType = val.preferredAccountType;
        } else {
          ModalController.close();
        }
      })
    ], NetworkController.subscribe((val) => {
      this.network = val.caipNetwork;
    }));
    this.watchSwapValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearInterval(this.watchTokenBalance);
  }
  firstUpdated() {
    AccountController.fetchTokenBalance();
  }
  render() {
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const networkImage = AssetUtil.getNetworkImage(this.network);
    return html`<wui-flex
      flexDirection="column"
      .padding=${["0", "xl", "m", "xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${ifDefined(this.address)}
        networkSrc=${ifDefined(networkImage)}
        icon="chevronBottom"
        avatarSrc=${ifDefined(this.profileImage ? this.profileImage : void 0)}
        profileName=${this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button @click=${this.onBuyClick.bind(this)} icon="card"></wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Swap">
          <wui-icon-button @click=${this.onSwapClick.bind(this)} icon="recycleHorizontal">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button @click=${this.onReceiveClick.bind(this)} icon="arrowBottomCircle">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button @click=${this.onSendClick.bind(this)} icon="send"></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${CoreHelperUtil.isMobile() && window.innerWidth < MODAL_MOBILE_VIEW_PX ? `${(window.innerWidth - TABS_PADDING) / TABS}px` : "104px"}
        .tabs=${ConstantsUtil4.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`;
  }
  watchSwapValues() {
    this.watchTokenBalance = setInterval(() => AccountController.fetchTokenBalance(), 1e4);
  }
  listContentTemplate() {
    if (this.currentTab === 0) {
      return html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
    }
    if (this.currentTab === 1) {
      return html`<w3m-account-nfts-widget></w3m-account-nfts-widget>`;
    }
    if (this.currentTab === 2) {
      return html`<w3m-account-activity-widget></w3m-account-activity-widget>`;
    }
    return html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
  }
  tokenBalanceTemplate() {
    var _a3;
    if (this.tokenBalance && ((_a3 = this.tokenBalance) == null ? void 0 : _a3.length) >= 0) {
      const value = CoreHelperUtil.calculateBalance(this.tokenBalance);
      const { dollars = "0", pennies = "00" } = CoreHelperUtil.formatTokenBalance(value);
      return html`<wui-balance dollars=${dollars} pennies=${pennies}></wui-balance>`;
    }
    return html`<wui-balance dollars="0" pennies="00"></wui-balance>`;
  }
  activateAccountTemplate() {
    const smartAccountEnabled = NetworkController.checkIfSmartAccountEnabled();
    if (!smartAccountEnabled || this.preferredAccountType !== W3mFrameRpcConstants.ACCOUNT_TYPES.EOA || this.smartAccountDeployed) {
      return null;
    }
    return html` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`;
  }
  onTabChange(index) {
    AccountController.setCurrentTab(index);
  }
  onProfileButtonClick() {
    RouterController.push("AccountSettings");
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
  onSwapClick() {
    var _a3, _b2;
    if (((_a3 = this.network) == null ? void 0 : _a3.id) && !ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes((_b2 = this.network) == null ? void 0 : _b2.id)) {
      RouterController.push("UnsupportedChain", {
        swapUnsupportedChain: true
      });
    } else {
      RouterController.push("Swap");
    }
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  onSendClick() {
    RouterController.push("WalletSend");
  }
  onUpdateToSmartAccount() {
    RouterController.push("UpgradeToSmartAccount");
  }
};
W3mAccountWalletFeaturesWidget.styles = styles_default48;
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "watchTokenBalance", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "address", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileImage", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "profileName", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "smartAccountDeployed", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "network", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "currentTab", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "tokenBalance", void 0);
__decorate72([
  state()
], W3mAccountWalletFeaturesWidget.prototype, "preferredAccountType", void 0);
W3mAccountWalletFeaturesWidget = __decorate72([
  customElement("w3m-account-wallet-features-widget")
], W3mAccountWalletFeaturesWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-activity-widget/styles.js
var styles_default49 = css`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-activity-widget/index.js
var __decorate73 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountActivityWidget = class W3mAccountActivityWidget2 extends LitElement {
  render() {
    return html`<w3m-activity-list page="account"></w3m-activity-list>`;
  }
};
W3mAccountActivityWidget.styles = styles_default49;
W3mAccountActivityWidget = __decorate73([
  customElement("w3m-account-activity-widget")
], W3mAccountActivityWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-nfts-widget/styles.js
var styles_default50 = css`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-nfts-widget/index.js
var __decorate74 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountNftsWidget = class W3mAccountNftsWidget2 extends LitElement {
  render() {
    return html`${this.nftTemplate()}`;
  }
  nftTemplate() {
    return html` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
};
W3mAccountNftsWidget.styles = styles_default50;
W3mAccountNftsWidget = __decorate74([
  customElement("w3m-account-nfts-widget")
], W3mAccountNftsWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-tokens-widget/styles.js
var styles_default51 = css`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-tokens-widget/index.js
var __decorate75 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountTokensWidget = class W3mAccountTokensWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.tokenBalance = AccountController.state.tokenBalance;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        this.tokenBalance = val.tokenBalance;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`${this.tokenTemplate()}`;
  }
  tokenTemplate() {
    var _a3;
    if (this.tokenBalance && ((_a3 = this.tokenBalance) == null ? void 0 : _a3.length) > 0) {
      return html`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`;
    }
    return html` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`;
  }
  tokenItemTemplate() {
    var _a3;
    return (_a3 = this.tokenBalance) == null ? void 0 : _a3.map((token) => html`<wui-list-token
          tokenName=${token.name}
          tokenImageUrl=${token.iconUrl}
          tokenAmount=${token.quantity.numeric}
          tokenValue=${token.value}
          tokenCurrency=${token.symbol}
        ></wui-list-token>`);
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
};
W3mAccountTokensWidget.styles = styles_default51;
__decorate75([
  state()
], W3mAccountTokensWidget.prototype, "tokenBalance", void 0);
W3mAccountTokensWidget = __decorate75([
  customElement("w3m-account-tokens-widget")
], W3mAccountTokensWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-activity-list/styles.js
var styles_default52 = css`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-activity-list/index.js
var __decorate76 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var PAGINATOR_ID2 = "last-transaction";
var LOADING_ITEM_COUNT2 = 7;
var W3mActivityList = class W3mActivityList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.page = "activity";
    this.address = AccountController.state.address;
    this.transactionsByYear = TransactionsController.state.transactionsByYear;
    this.loading = TransactionsController.state.loading;
    this.empty = TransactionsController.state.empty;
    this.next = TransactionsController.state.next;
    TransactionsController.clearCursor();
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          if (this.address !== val.address) {
            this.address = val.address;
            TransactionsController.resetTransactions();
            TransactionsController.fetchTransactions(val.address);
          }
        }
      }),
      TransactionsController.subscribe((val) => {
        this.transactionsByYear = val.transactionsByYear;
        this.loading = val.loading;
        this.empty = val.empty;
        this.next = val.next;
      })
    ]);
  }
  firstUpdated() {
    TransactionsController.fetchTransactions(this.address);
    this.createPaginationObserver();
  }
  updated() {
    this.setPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html` ${this.empty ? null : this.templateTransactionsByYear()}
    ${this.loading ? this.templateLoading() : null}
    ${!this.loading && this.empty ? this.templateEmpty() : null}`;
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.transactionsByYear).sort().reverse();
    return sortedYearKeys.map((year, index) => {
      const isLastGroup = index === sortedYearKeys.length - 1;
      const yearInt = parseInt(year, 10);
      const sortedMonthIndexes = new Array(12).fill(null).map((_, idx) => idx).reverse();
      return sortedMonthIndexes.map((month) => {
        var _a3;
        const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt, month);
        const transactions = (_a3 = this.transactionsByYear[yearInt]) == null ? void 0 : _a3[month];
        if (!transactions) {
          return null;
        }
        return html`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(transactions, isLastGroup)}
            </wui-flex>
          </wui-flex>
        `;
      });
    });
  }
  templateRenderTransaction(transaction, isLastTransaction) {
    const { date, descriptions, direction, isAllNFT, images, status, transfers, type } = this.getTransactionListItemProps(transaction);
    const haveMultipleTransfers = (transfers == null ? void 0 : transfers.length) > 1;
    const haveTwoTransfers = (transfers == null ? void 0 : transfers.length) === 2;
    if (haveTwoTransfers && !isAllNFT) {
      return html`
        <wui-transaction-list-item
          date=${date}
          .direction=${direction}
          id=${isLastTransaction && this.next ? PAGINATOR_ID2 : ""}
          status=${status}
          type=${type}
          .images=${images}
          .descriptions=${descriptions}
        ></wui-transaction-list-item>
      `;
    }
    if (haveMultipleTransfers) {
      return transfers.map((transfer, index) => {
        const description = TransactionUtil.getTransferDescription(transfer);
        const isLastTransfer = isLastTransaction && index === transfers.length - 1;
        return html` <wui-transaction-list-item
          date=${date}
          direction=${transfer.direction}
          id=${isLastTransfer && this.next ? PAGINATOR_ID2 : ""}
          status=${status}
          type=${type}
          .onlyDirectionIcon=${true}
          .images=${[images[index]]}
          .descriptions=${[description]}
        ></wui-transaction-list-item>`;
      });
    }
    return html`
      <wui-transaction-list-item
        date=${date}
        .direction=${direction}
        id=${isLastTransaction && this.next ? PAGINATOR_ID2 : ""}
        status=${status}
        type=${type}
        .images=${images}
        .descriptions=${descriptions}
      ></wui-transaction-list-item>
    `;
  }
  templateTransactions(transactions, isLastGroup) {
    return transactions.map((transaction, index) => {
      const isLastTransaction = isLastGroup && index === transactions.length - 1;
      return html`${this.templateRenderTransaction(transaction, isLastTransaction)}`;
    });
  }
  emptyStateActivity() {
    return html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl", "xl", "3xl", "xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${true}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`;
  }
  emptyStateAccount() {
    return html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`;
  }
  templateEmpty() {
    if (this.page === "account") {
      return html`${this.emptyStateAccount()}`;
    }
    return html`${this.emptyStateActivity()}`;
  }
  templateLoading() {
    if (this.page === "activity") {
      return Array(LOADING_ITEM_COUNT2).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
    }
    return null;
  }
  onReceiveClick() {
    RouterController.push("WalletReceive");
  }
  createPaginationObserver() {
    const { projectId } = OptionsController.state;
    this.paginationObserver = new IntersectionObserver(([element]) => {
      if ((element == null ? void 0 : element.isIntersecting) && !this.loading) {
        TransactionsController.fetchTransactions(this.address);
        EventsController.sendEvent({
          type: "track",
          event: "LOAD_MORE_TRANSACTIONS",
          properties: {
            address: this.address,
            projectId,
            cursor: this.next
          }
        });
      }
    }, {});
    this.setPaginationObserver();
  }
  setPaginationObserver() {
    var _a3, _b2, _c;
    (_a3 = this.paginationObserver) == null ? void 0 : _a3.disconnect();
    const lastItem = (_b2 = this.shadowRoot) == null ? void 0 : _b2.querySelector(`#${PAGINATOR_ID2}`);
    if (lastItem) {
      (_c = this.paginationObserver) == null ? void 0 : _c.observe(lastItem);
    }
  }
  getTransactionListItemProps(transaction) {
    var _a3, _b2, _c, _d, _e;
    const date = DateUtil.formatDate((_a3 = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a3.minedAt);
    const descriptions = TransactionUtil.getTransactionDescriptions(transaction);
    const transfers = transaction == null ? void 0 : transaction.transfers;
    const transfer = (_b2 = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _b2[0];
    const isAllNFT = Boolean(transfer) && ((_c = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _c.every((item) => Boolean(item.nft_info)));
    const images = TransactionUtil.getTransactionImages(transfers);
    return {
      date,
      direction: transfer == null ? void 0 : transfer.direction,
      descriptions,
      isAllNFT,
      images,
      status: (_d = transaction.metadata) == null ? void 0 : _d.status,
      transfers,
      type: (_e = transaction.metadata) == null ? void 0 : _e.operationType
    };
  }
};
W3mActivityList.styles = styles_default52;
__decorate76([
  property()
], W3mActivityList.prototype, "page", void 0);
__decorate76([
  state()
], W3mActivityList.prototype, "address", void 0);
__decorate76([
  state()
], W3mActivityList.prototype, "transactionsByYear", void 0);
__decorate76([
  state()
], W3mActivityList.prototype, "loading", void 0);
__decorate76([
  state()
], W3mActivityList.prototype, "empty", void 0);
__decorate76([
  state()
], W3mActivityList.prototype, "next", void 0);
W3mActivityList = __decorate76([
  customElement("w3m-activity-list")
], W3mActivityList);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-input-token/styles.js
var styles_default53 = css`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-input-token/index.js
var __decorate77 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mInputToken = class W3mInputToken2 extends LitElement {
  render() {
    return html` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl", "s", "l", "l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token && true}
          .value=${this.sendTokenAmount ? String(this.sendTokenAmount) : ""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`;
  }
  buttonTemplate() {
    if (this.token) {
      return html`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`;
    }
    return html`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`;
  }
  handleSelectButtonClick() {
    RouterController.push("WalletSendSelectToken");
  }
  sendValueTemplate() {
    if (this.token && this.sendTokenAmount) {
      const price = this.token.price;
      const totalValue = price * this.sendTokenAmount;
      return html`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${totalValue ? `$${UiHelperUtil.formatNumberToLocalString(totalValue, 2)}` : "Incorrect value"}</wui-text
      >`;
    }
    return null;
  }
  maxAmountTemplate() {
    if (this.token) {
      if (this.sendTokenAmount && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
        return html` <wui-text variant="small-400" color="error-100">
          ${UiHelperUtil.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
        </wui-text>`;
      }
      return html` <wui-text variant="small-400" color="fg-200">
        ${UiHelperUtil.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
      </wui-text>`;
    }
    return null;
  }
  actionTemplate() {
    if (this.token) {
      if (this.sendTokenAmount && this.sendTokenAmount > Number(this.token.quantity.numeric)) {
        return html`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`;
      }
      return html`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`;
    }
    return null;
  }
  onInputChange(event) {
    SendController.setTokenAmount(event.detail);
  }
  onMaxClick() {
    if (this.token && this.gasPriceInUSD) {
      const amountOfTokenGasRequires = NumberUtil.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.token.price);
      const isNetworkToken = this.token.address === void 0;
      const maxValue = isNetworkToken ? NumberUtil.bigNumber(this.token.quantity.numeric).minus(amountOfTokenGasRequires) : NumberUtil.bigNumber(this.token.quantity.numeric);
      SendController.setTokenAmount(Number(maxValue.toFixed(20)));
    }
  }
  onBuyClick() {
    RouterController.push("OnRampProviders");
  }
};
W3mInputToken.styles = styles_default53;
__decorate77([
  property({ type: Object })
], W3mInputToken.prototype, "token", void 0);
__decorate77([
  property({ type: Number })
], W3mInputToken.prototype, "sendTokenAmount", void 0);
__decorate77([
  property({ type: Number })
], W3mInputToken.prototype, "gasPriceInUSD", void 0);
W3mInputToken = __decorate77([
  customElement("w3m-input-token")
], W3mInputToken);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-input-address/styles.js
var styles_default54 = css`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-input-address/index.js
var __decorate78 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mInputAddress = class W3mInputAddress2 extends LitElement {
  constructor() {
    super(...arguments);
    this.inputElementRef = createRef();
    this.instructionElementRef = createRef();
    this.instructionHidden = Boolean(this.value);
    this.pasting = false;
    this.onDebouncedSearch = CoreHelperUtil.debounce(async (value) => {
      const address = await ConnectionController.getEnsAddress(value);
      SendController.setLoading(false);
      if (address) {
        SendController.setReceiverProfileName(value);
        SendController.setReceiverAddress(address);
        const avatar = await ConnectionController.getEnsAvatar(value);
        if (avatar) {
          SendController.setReceiverProfileImageUrl(avatar);
        }
      } else {
        SendController.setReceiverAddress(value);
        SendController.setReceiverProfileName(void 0);
        SendController.setReceiverProfileImageUrl(void 0);
      }
    });
  }
  firstUpdated() {
    if (this.value) {
      this.instructionHidden = true;
    }
    this.checkHidden();
  }
  render() {
    return html` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl", "l", "xl", "l"]}
    >
      <wui-text
        ${ref(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${ref(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value ?? ""}
        autocomplete="off"
      >
${this.value ?? ""}</textarea
      >
    </wui-flex>`;
  }
  async focusInput() {
    var _a3;
    if (this.instructionElementRef.value) {
      this.instructionHidden = true;
      await this.toggleInstructionFocus(false);
      this.instructionElementRef.value.style.pointerEvents = "none";
      (_a3 = this.inputElementRef.value) == null ? void 0 : _a3.focus();
      if (this.inputElementRef.value) {
        this.inputElementRef.value.selectionStart = this.inputElementRef.value.selectionEnd = this.inputElementRef.value.value.length;
      }
    }
  }
  async focusInstruction() {
    var _a3;
    if (this.instructionElementRef.value) {
      this.instructionHidden = false;
      await this.toggleInstructionFocus(true);
      this.instructionElementRef.value.style.pointerEvents = "auto";
      (_a3 = this.inputElementRef.value) == null ? void 0 : _a3.blur();
    }
  }
  async toggleInstructionFocus(focus) {
    if (this.instructionElementRef.value) {
      await this.instructionElementRef.value.animate([{ opacity: focus ? 0 : 1 }, { opacity: focus ? 1 : 0 }], {
        duration: 100,
        easing: "ease",
        fill: "forwards"
      }).finished;
    }
  }
  onBoxClick() {
    if (!this.value && !this.instructionHidden) {
      this.focusInput();
    }
  }
  onBlur() {
    if (!this.value && this.instructionHidden && !this.pasting) {
      this.focusInstruction();
    }
  }
  checkHidden() {
    if (this.instructionHidden) {
      this.focusInput();
    }
  }
  async onPasteClick() {
    this.pasting = true;
    const text = await navigator.clipboard.readText();
    SendController.setReceiverAddress(text);
    this.focusInput();
  }
  onInputChange(e) {
    this.pasting = false;
    const element = e.target;
    if (element.value && !this.instructionHidden) {
      this.focusInput();
    }
    SendController.setLoading(true);
    this.onDebouncedSearch(element.value);
  }
};
W3mInputAddress.styles = styles_default54;
__decorate78([
  property()
], W3mInputAddress.prototype, "value", void 0);
__decorate78([
  state()
], W3mInputAddress.prototype, "instructionHidden", void 0);
__decorate78([
  state()
], W3mInputAddress.prototype, "pasting", void 0);
W3mInputAddress = __decorate78([
  customElement("w3m-input-address")
], W3mInputAddress);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-wallet-send-details/styles.js
var styles_default55 = css`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-wallet-send-details/index.js
var __decorate79 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mWalletSendDetails = class W3mWalletSendDetails2 extends LitElement {
  render() {
    return html` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${ifDefined(UiHelperUtil.formatNumberToLocalString(this.networkFee, 2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${UiHelperUtil.getTruncateString({
      string: this.receiverAddress ?? "",
      charsStart: 4,
      charsEnd: 4,
      truncate: "middle"
    })}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`;
  }
  networkTemplate() {
    var _a3;
    if ((_a3 = this.caipNetwork) == null ? void 0 : _a3.name) {
      return html` <wui-list-content
        @click=${() => this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`;
    }
    return null;
  }
  onNetworkClick(network) {
    if (network) {
      RouterController.push("Networks", { network });
    }
  }
};
W3mWalletSendDetails.styles = styles_default55;
__decorate79([
  property()
], W3mWalletSendDetails.prototype, "receiverAddress", void 0);
__decorate79([
  property({ type: Object })
], W3mWalletSendDetails.prototype, "caipNetwork", void 0);
__decorate79([
  property({ type: Number })
], W3mWalletSendDetails.prototype, "networkFee", void 0);
W3mWalletSendDetails = __decorate79([
  customElement("w3m-wallet-send-details")
], W3mWalletSendDetails);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-tooltip/styles.js
var styles_default56 = css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-tooltip/index.js
var __decorate80 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mTooltip = class W3mTooltip2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.open = TooltipController.state.open;
    this.message = TooltipController.state.message;
    this.triggerRect = TooltipController.state.triggerRect;
    this.variant = TooltipController.state.variant;
    this.unsubscribe.push(...[
      TooltipController.subscribe((newState) => {
        this.open = newState.open;
        this.message = newState.message;
        this.triggerRect = newState.triggerRect;
        this.variant = newState.variant;
      })
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    this.dataset["variant"] = this.variant;
    const topValue = this.triggerRect.top;
    const leftValue = this.triggerRect.left;
    this.style.cssText = `
    --w3m-tooltip-top: ${topValue}px;
    --w3m-tooltip-left: ${leftValue}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `;
    return html`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`;
  }
};
W3mTooltip.styles = [styles_default56];
__decorate80([
  state()
], W3mTooltip.prototype, "open", void 0);
__decorate80([
  state()
], W3mTooltip.prototype, "message", void 0);
__decorate80([
  state()
], W3mTooltip.prototype, "triggerRect", void 0);
__decorate80([
  state()
], W3mTooltip.prototype, "variant", void 0);
W3mTooltip = __decorate80([
  customElement("w3m-tooltip")
], W3mTooltip);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-tooltip-trigger/styles.js
var styles_default57 = css`
  :host {
    width: 100%;
    display: block;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-tooltip-trigger/index.js
var __decorate81 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var WuiTooltipTrigger = class WuiTooltipTrigger2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.text = "";
    this.open = TooltipController.state.open;
    this.unsubscribe.push(RouterController.subscribeKey("view", () => {
      TooltipController.hide();
    }), ModalController.subscribeKey("open", (modalOpen) => {
      if (!modalOpen) {
        TooltipController.hide();
      }
    }), TooltipController.subscribeKey("open", (tooltipOpen) => {
      this.open = tooltipOpen;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    TooltipController.hide();
  }
  render() {
    return html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `;
  }
  renderChildren() {
    return html`<slot></slot> `;
  }
  onMouseEnter() {
    const rect = this.getBoundingClientRect();
    if (!this.open) {
      TooltipController.showTooltip({
        message: this.text,
        triggerRect: {
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top
        },
        variant: "shade"
      });
    }
  }
  onMouseLeave(event) {
    if (!this.contains(event.relatedTarget)) {
      TooltipController.hide();
    }
  }
};
WuiTooltipTrigger.styles = [styles_default57];
__decorate81([
  property()
], WuiTooltipTrigger.prototype, "text", void 0);
__decorate81([
  state()
], WuiTooltipTrigger.prototype, "open", void 0);
WuiTooltipTrigger = __decorate81([
  customElement("w3m-tooltip-trigger")
], WuiTooltipTrigger);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-social-login-widget/styles.js
var styles_default58 = css`
  wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-social-login-widget/index.js
var __decorate82 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var MAX_TOP_VIEW = 2;
var MAXIMUM_LENGTH = 6;
var W3mSocialLoginWidget = class W3mSocialLoginWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.connector = this.connectors.find((c2) => c2.type === "AUTH");
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.connector = this.connectors.find((c2) => c2.type === "AUTH");
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3;
    if (!((_a3 = this.connector) == null ? void 0 : _a3.socials)) {
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs" .padding=${["0", "0", "xs", "0"]}>
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `;
  }
  topViewTemplate() {
    var _a3, _b2, _c;
    if (!((_a3 = this.connector) == null ? void 0 : _a3.socials)) {
      return null;
    }
    if (this.connector.socials.length === 2) {
      return html` <wui-flex gap="xs">
        ${this.connector.socials.slice(0, MAX_TOP_VIEW).map((social) => html`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
        this.onSocialClick(social);
      }}
              logo=${social}
            ></wui-logo-select>`)}
      </wui-flex>`;
    }
    return html` <wui-list-social
      data-testid=${`social-selector-${(_c = (_b2 = this.connector) == null ? void 0 : _b2.socials) == null ? void 0 : _c[0]}`}
      @click=${() => {
      var _a4, _b3;
      this.onSocialClick((_b3 = (_a4 = this.connector) == null ? void 0 : _a4.socials) == null ? void 0 : _b3[0]);
    }}
      logo=${ifDefined(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`;
  }
  bottomViewTemplate() {
    var _a3, _b2, _c;
    if (!((_a3 = this.connector) == null ? void 0 : _a3.socials)) {
      return null;
    }
    if (((_b2 = this.connector) == null ? void 0 : _b2.socials.length) <= MAX_TOP_VIEW) {
      return null;
    }
    if (((_c = this.connector) == null ? void 0 : _c.socials.length) > MAXIMUM_LENGTH) {
      return html`<wui-flex gap="xs">
        ${this.connector.socials.slice(1, MAXIMUM_LENGTH - 1).map((social) => html`<wui-logo-select
              data-testid=${`social-selector-${social}`}
              @click=${() => {
        this.onSocialClick(social);
      }}
              logo=${social}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`;
    }
    return html`<wui-flex gap="xs">
      ${this.connector.socials.slice(1, this.connector.socials.length).map((social) => html`<wui-logo-select
            data-testid=${`social-selector-${social}`}
            @click=${() => {
      this.onSocialClick(social);
    }}
            logo=${social}
          ></wui-logo-select>`)}
    </wui-flex>`;
  }
  separatorTemplate() {
    const walletConnectConnector = this.connectors.find((c2) => c2.type === "WALLET_CONNECT");
    if (walletConnectConnector) {
      return html`<wui-separator text="or"></wui-separator>`;
    }
    return null;
  }
  onMoreSocialsClick() {
    RouterController.push("ConnectSocials");
  }
  async onSocialClick(socialProvider) {
    const authConnector = ConnectorController.getAuthConnector();
    try {
      if (authConnector && socialProvider) {
        const { uri } = await authConnector.provider.getSocialRedirectUri({
          provider: socialProvider
        });
        AccountController.setSocialProvider(socialProvider);
        setTimeout(() => {
          const newWindow = CoreHelperUtil.returnOpenHref(uri, "popupWindow", "width=600,height=800,scrollbars=yes");
          if (newWindow) {
            AccountController.setSocialWindow(newWindow);
          }
        });
        RouterController.push("ConnectingSocial");
      }
    } catch (error) {
      SnackController.showError("Something went wrong");
    }
  }
};
W3mSocialLoginWidget.styles = styles_default58;
__decorate82([
  state()
], W3mSocialLoginWidget.prototype, "connectors", void 0);
W3mSocialLoginWidget = __decorate82([
  customElement("w3m-social-login-widget")
], W3mSocialLoginWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-wallet-login-list/styles.js
var styles_default59 = css`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-wallet-login-list/index.js
var __decorate83 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mWalletLoginList = class W3mWalletLoginList2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        <w3m-connect-recent-widget></w3m-connect-recent-widget>
        <w3m-connect-announced-widget></w3m-connect-announced-widget>
        <w3m-connect-injected-widget></w3m-connect-injected-widget>
        <w3m-connect-custom-widget></w3m-connect-custom-widget>
        <w3m-connect-recommended-widget></w3m-connect-recommended-widget>
        <w3m-connect-external-widget></w3m-connect-external-widget>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `;
  }
};
W3mWalletLoginList.styles = styles_default59;
W3mWalletLoginList = __decorate83([
  customElement("w3m-wallet-login-list")
], W3mWalletLoginList);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-social-login-list/styles.js
var styles_default60 = css`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-social-login-list/index.js
var __decorate84 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mSocialLoginList = class W3mSocialLoginList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.connector = this.connectors.find((c2) => c2.type === "AUTH");
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => {
      this.connectors = val;
      this.connector = this.connectors.find((c2) => c2.type === "AUTH");
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3;
    if (!((_a3 = this.connector) == null ? void 0 : _a3.socials)) {
      return null;
    }
    return html` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map((social) => html`<wui-list-social name=${social} logo=${social}></wui-list-social>`)}
    </wui-flex>`;
  }
};
W3mSocialLoginList.styles = styles_default60;
__decorate84([
  state()
], W3mSocialLoginList.prototype, "connectors", void 0);
W3mSocialLoginList = __decorate84([
  customElement("w3m-social-login-list")
], W3mSocialLoginList);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-announced-widget/index.js
var __decorate85 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectAnnouncedWidget = class W3mConnectAnnouncedWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const announcedConnectors = this.connectors.filter((connector) => connector.type === "ANNOUNCED");
    if (!(announcedConnectors == null ? void 0 : announcedConnectors.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${announcedConnectors.map((connector) => {
      return html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
              name=${connector.name ?? "Unknown"}
              @click=${() => this.onConnector(connector)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${connector.id}`}
              .installed=${true}
            >
            </wui-list-wallet>
          `;
    })}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    if (connector.type === "WALLET_CONNECT") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", { connector });
    }
  }
};
__decorate85([
  state()
], W3mConnectAnnouncedWidget.prototype, "connectors", void 0);
W3mConnectAnnouncedWidget = __decorate85([
  customElement("w3m-connect-announced-widget")
], W3mConnectAnnouncedWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-custom-widget/index.js
var __decorate86 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectCustomWidget = class W3mConnectCustomWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { customWallets } = OptionsController.state;
    if (!(customWallets == null ? void 0 : customWallets.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(customWallets);
    return html`<wui-flex flexDirection="column" gap="xs">
      ${wallets.map((wallet) => {
      return html`
          <wui-list-wallet
            imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
            name=${wallet.name ?? "Unknown"}
            @click=${() => this.onConnectWallet(wallet)}
            data-testid=${`wallet-selector-${wallet.id}`}
          >
          </wui-list-wallet>
        `;
    })}
    </wui-flex>`;
  }
  filterOutDuplicateWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = this.connectors.map((connector) => {
      var _a3;
      return (_a3 = connector.info) == null ? void 0 : _a3.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
__decorate86([
  state()
], W3mConnectCustomWidget.prototype, "connectors", void 0);
W3mConnectCustomWidget = __decorate86([
  customElement("w3m-connect-custom-widget")
], W3mConnectCustomWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-external-widget/index.js
var __decorate87 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectExternalWidget = class W3mConnectExternalWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const externalConnectors = this.connectors.filter((connector) => !["WALLET_CONNECT", "INJECTED", "ANNOUNCED", "AUTH"].includes(connector.type));
    if (!(externalConnectors == null ? void 0 : externalConnectors.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${externalConnectors.map((connector) => html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
              name=${connector.name ?? "Unknown"}
              @click=${() => this.onConnector(connector)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    RouterController.push("ConnectingExternal", { connector });
  }
};
__decorate87([
  state()
], W3mConnectExternalWidget.prototype, "connectors", void 0);
W3mConnectExternalWidget = __decorate87([
  customElement("w3m-connect-external-widget")
], W3mConnectExternalWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-featured-widget/index.js
var __decorate88 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectFeaturedWidget = class W3mConnectFeaturedWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { featured } = ApiController.state;
    if (!featured.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(featured);
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${wallets.map((wallet) => html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  filterOutDuplicateWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = this.connectors.map((connector) => {
      var _a3;
      return (_a3 = connector.info) == null ? void 0 : _a3.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
__decorate88([
  state()
], W3mConnectFeaturedWidget.prototype, "connectors", void 0);
W3mConnectFeaturedWidget = __decorate88([
  customElement("w3m-connect-featured-widget")
], W3mConnectFeaturedWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-injected-widget/index.js
var __decorate89 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectInjectedWidget = class W3mConnectInjectedWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a3;
    const injectedConnectors = this.connectors.filter((connector) => connector.type === "INJECTED");
    if (!(injectedConnectors == null ? void 0 : injectedConnectors.length) || injectedConnectors.length === 1 && ((_a3 = injectedConnectors[0]) == null ? void 0 : _a3.name) === "Browser Wallet" && !CoreHelperUtil.isMobile()) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${injectedConnectors.map((connector) => {
      if (!CoreHelperUtil.isMobile() && connector.name === "Browser Wallet") {
        return null;
      }
      if (!ConnectionController.checkInstalled()) {
        return null;
      }
      return html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${() => this.onConnector(connector)}
            >
            </wui-list-wallet>
          `;
    })}
      </wui-flex>
    `;
  }
  onConnector(connector) {
    RouterController.push("ConnectingExternal", { connector });
  }
};
__decorate89([
  state()
], W3mConnectInjectedWidget.prototype, "connectors", void 0);
W3mConnectInjectedWidget = __decorate89([
  customElement("w3m-connect-injected-widget")
], W3mConnectInjectedWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-coinbase-widget/index.js
var __decorate90 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectCoinbaseWidget = class W3mConnectCoinbaseWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const coinbaseConnector = this.connectors.find((connector) => connector.id === "coinbaseWalletSDK");
    if (!coinbaseConnector) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(coinbaseConnector))}
          .installed=${true}
          name=${ifDefined(coinbaseConnector.name)}
          data-testid=${`wallet-selector-${coinbaseConnector.id}`}
          @click=${() => this.onConnector(coinbaseConnector)}
        >
        </wui-list-wallet>
      </wui-flex>
    `;
  }
  onConnector(connector) {
    RouterController.push("ConnectingExternal", { connector });
  }
};
__decorate90([
  state()
], W3mConnectCoinbaseWidget.prototype, "connectors", void 0);
W3mConnectCoinbaseWidget = __decorate90([
  customElement("w3m-connect-coinbase-widget")
], W3mConnectCoinbaseWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-recent-widget/index.js
var __decorate91 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectRecentWidget = class W3mConnectRecentWidget2 extends LitElement {
  render() {
    const recent = StorageUtil.getRecentWallets();
    if (!(recent == null ? void 0 : recent.length)) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${recent.map((wallet) => {
      return html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `;
    })}
      </wui-flex>
    `;
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
W3mConnectRecentWidget = __decorate91([
  customElement("w3m-connect-recent-widget")
], W3mConnectRecentWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-recommended-widget/index.js
var __decorate92 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectRecommendedWidget = class W3mConnectRecommendedWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const connector = this.connectors.find((c2) => c2.type === "WALLET_CONNECT");
    if (!connector) {
      return null;
    }
    const { recommended } = ApiController.state;
    const { customWallets, featuredWalletIds } = OptionsController.state;
    const { connectors } = ConnectorController.state;
    const recent = StorageUtil.getRecentWallets();
    const injected = connectors.filter((c2) => c2.type === "INJECTED" || c2.type === "ANNOUNCED");
    const injectedWallets = injected.filter((i3) => i3.name !== "Browser Wallet");
    if (featuredWalletIds || customWallets || !recommended.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    const overrideLength = injectedWallets.length + recent.length;
    const maxRecommended = Math.max(0, 2 - overrideLength);
    const wallets = this.filterOutDuplicateWallets(recommended).slice(0, maxRecommended);
    if (!wallets.length) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-flex flexDirection="column" gap="xs">
        ${wallets.map((wallet) => html`
            <wui-list-wallet
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              name=${(wallet == null ? void 0 : wallet.name) ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
  }
  filterOutDuplicateWallets(wallets) {
    const recent = StorageUtil.getRecentWallets();
    const connectorRDNSs = this.connectors.map((connector) => {
      var _a3;
      return (_a3 = connector.info) == null ? void 0 : _a3.rdns;
    }).filter(Boolean);
    const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
    const allRDNSs = connectorRDNSs.concat(recentRDNSs);
    if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
      const index = allRDNSs.indexOf("io.metamask.mobile");
      allRDNSs[index] = "io.metamask";
    }
    const filtered = wallets.filter((wallet) => !allRDNSs.includes(String(wallet == null ? void 0 : wallet.rdns)));
    return filtered;
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
__decorate92([
  state()
], W3mConnectRecommendedWidget.prototype, "connectors", void 0);
W3mConnectRecommendedWidget = __decorate92([
  customElement("w3m-connect-recommended-widget")
], W3mConnectRecommendedWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connect-walletconnect-widget/index.js
var __decorate93 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mConnectWalletConnectWidget = class W3mConnectWalletConnectWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    if (CoreHelperUtil.isMobile()) {
      this.style.cssText = `display: none`;
      return null;
    }
    const connector = this.connectors.find((c2) => c2.type === "WALLET_CONNECT");
    if (!connector) {
      this.style.cssText = `display: none`;
      return null;
    }
    return html`
      <wui-list-wallet
        imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
        name=${connector.name ?? "Unknown"}
        @click=${() => this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
  }
  onConnector(connector) {
    if (connector.type === "WALLET_CONNECT") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", { connector });
    }
  }
};
__decorate93([
  state()
], W3mConnectWalletConnectWidget.prototype, "connectors", void 0);
W3mConnectWalletConnectWidget = __decorate93([
  customElement("w3m-connect-walletconnect-widget")
], W3mConnectWalletConnectWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-widget/index.js
var __decorate94 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAllWalletsWidget = class W3mAllWalletsWidget2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.count = ApiController.state.count;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("count", (val) => this.count = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const connector = this.connectors.find((c2) => c2.type === "WALLET_CONNECT");
    const { allWallets } = OptionsController.state;
    if (!connector || allWallets === "HIDE") {
      return null;
    }
    if (allWallets === "ONLY_MOBILE" && !CoreHelperUtil.isMobile()) {
      return null;
    }
    const featuredCount = ApiController.state.featured.length;
    const rawCount = this.count + featuredCount;
    const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
    const tagLabel = roundedCount < rawCount ? `${roundedCount}+` : `${roundedCount}`;
    return html`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `;
  }
  onAllWallets() {
    EventsController.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" });
    RouterController.push("AllWallets");
  }
};
__decorate94([
  state()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate94([
  state()
], W3mAllWalletsWidget.prototype, "count", void 0);
W3mAllWalletsWidget = __decorate94([
  customElement("w3m-all-wallets-widget")
], W3mAllWalletsWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-account-auth-button/index.js
var __decorate95 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d2 = decorators[i3])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var W3mAccountAuthButton = class W3mAccountAuthButton2 extends LitElement {
  render() {
    const type = StorageUtil.getConnectedConnector();
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector || type !== "AUTH") {
      this.style.cssText = `display: none`;
      return null;
    }
    const email = authConnector.provider.getEmail() ?? "";
    const socialProvider = StorageUtil.getConnectedSocialProvider();
    const socialUsername = StorageUtil.getConnectedSocialUsername();
    return html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${socialProvider ?? "mail"}
        iconSize=${socialProvider ? "xxl" : "sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!socialProvider}
        @click=${() => {
      this.onGoToUpdateEmail(email, socialProvider);
    }}
      >
        <wui-text variant="paragraph-500" color="fg-100">${socialUsername ?? email}</wui-text>
      </wui-list-item>
    `;
  }
  onGoToUpdateEmail(email, socialProvider) {
    if (!socialProvider) {
      RouterController.push("UpdateEmailWallet", { email });
    }
  }
};
W3mAccountAuthButton = __decorate95([
  customElement("w3m-account-auth-button")
], W3mAccountAuthButton);

// node_modules/@web3modal/wagmi/dist/esm/src/utils/helpers.js
function getCaipDefaultChain(chain) {
  if (!chain) {
    return void 0;
  }
  return {
    id: `${ConstantsUtil3.EIP155}:${chain.id}`,
    name: chain.name,
    imageId: PresetsUtil.EIP155NetworkImageIds[chain.id]
  };
}
async function getWalletConnectCaipNetworks(connector) {
  var _a3, _b2, _c, _d;
  if (!connector) {
    throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
  }
  const provider = await (connector == null ? void 0 : connector.getProvider());
  const ns2 = (_b2 = (_a3 = provider == null ? void 0 : provider.signer) == null ? void 0 : _a3.session) == null ? void 0 : _b2.namespaces;
  const nsMethods = (_c = ns2 == null ? void 0 : ns2[ConstantsUtil3.EIP155]) == null ? void 0 : _c.methods;
  const nsChains = (_d = ns2 == null ? void 0 : ns2[ConstantsUtil3.EIP155]) == null ? void 0 : _d.chains;
  return {
    supportsAllNetworks: Boolean(nsMethods == null ? void 0 : nsMethods.includes(ConstantsUtil3.ADD_CHAIN_METHOD)),
    approvedCaipNetworkIds: nsChains
  };
}
function getEmailCaipNetworks() {
  return {
    supportsAllNetworks: false,
    approvedCaipNetworkIds: PresetsUtil.WalletConnectRpcChainIds.map((id) => `${ConstantsUtil3.EIP155}:${id}`)
  };
}
function getTransport({ chainId, projectId }) {
  const RPC_URL = CoreHelperUtil.getBlockchainApiUrl();
  if (!PresetsUtil.WalletConnectRpcChainIds.includes(chainId)) {
    return http();
  }
  return http(`${RPC_URL}/v1/?chainId=${ConstantsUtil3.EIP155}:${chainId}&projectId=${projectId}`);
}

export {
  y4 as y,
  Web3ModalScaffold,
  ConstantsUtil3 as ConstantsUtil,
  PresetsUtil,
  HelpersUtil,
  getCaipDefaultChain,
  getWalletConnectCaipNetworks,
  getEmailCaipNetworks,
  getTransport
};
/*! Bundled license information:

@walletconnect/utils/dist/index.es.js:
  (**
  * [js-sha3]{@link https://github.com/emn178/js-sha3}
  *
  * @version 0.8.0
  * @author Chen, Yi-Cyuan [emn178@gmail.com]
  * @copyright Chen, Yi-Cyuan 2015-2018
  * @license MIT
  *)

@walletconnect/universal-provider/dist/index.es.js:
  (**
  * @license
  * Lodash <https://lodash.com/>
  * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
  * Released under MIT license <https://lodash.com/license>
  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  *)

lit-html/development/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-HGYZCZWG.js.map
