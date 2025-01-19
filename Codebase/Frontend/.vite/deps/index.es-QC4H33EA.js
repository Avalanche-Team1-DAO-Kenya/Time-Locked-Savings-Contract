import {
  C
} from "./chunk-EVFSU4EW.js";
import {
  require_buffer,
  require_inherits_browser
} from "./chunk-5CLE3IWL.js";
import {
  A,
  E,
  IEvents,
  decodeJWT,
  encodeIss,
  esm_exports,
  f,
  f2,
  formatJsonRpcError,
  formatJsonRpcRequest,
  formatJsonRpcResult,
  generateKeyPair,
  getBigIntRpcId,
  h,
  i,
  import_pino,
  isJsonRpcError,
  isJsonRpcRequest,
  isJsonRpcResponse,
  isJsonRpcResult,
  k,
  o,
  payloadId,
  r,
  require_lodash,
  safeJsonParse,
  safeJsonStringify,
  signJWT,
  y
} from "./chunk-LDYBCKWB.js";
import {
  concat,
  detect,
  fromString,
  require_chacha20poly1305,
  require_cjs,
  require_cjs2,
  require_cjs3,
  require_crypto,
  require_hkdf,
  require_query_string,
  require_random,
  require_sha256,
  require_x25519,
  toString
} from "./chunk-2PYUBLP3.js";
import {
  require_events
} from "./chunk-WMH57NS6.js";
import {
  __commonJS,
  __toESM
} from "./chunk-GIZG7J7H.js";

// node_modules/elliptic/package.json
var require_package = __commonJS({
  "node_modules/elliptic/package.json"(exports, module) {
    module.exports = {
      name: "elliptic",
      version: "6.6.1",
      description: "EC cryptography",
      main: "lib/elliptic.js",
      files: [
        "lib"
      ],
      scripts: {
        lint: "eslint lib test",
        "lint:fix": "npm run lint -- --fix",
        unit: "istanbul test _mocha --reporter=spec test/index.js",
        test: "npm run lint && npm run unit",
        version: "grunt dist && git add dist/"
      },
      repository: {
        type: "git",
        url: "git@github.com:indutny/elliptic"
      },
      keywords: [
        "EC",
        "Elliptic",
        "curve",
        "Cryptography"
      ],
      author: "Fedor Indutny <fedor@indutny.com>",
      license: "MIT",
      bugs: {
        url: "https://github.com/indutny/elliptic/issues"
      },
      homepage: "https://github.com/indutny/elliptic",
      devDependencies: {
        brfs: "^2.0.2",
        coveralls: "^3.1.0",
        eslint: "^7.6.0",
        grunt: "^1.2.1",
        "grunt-browserify": "^5.3.0",
        "grunt-cli": "^1.3.2",
        "grunt-contrib-connect": "^3.0.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-uglify": "^5.0.0",
        "grunt-mocha-istanbul": "^5.0.2",
        "grunt-saucelabs": "^9.0.1",
        istanbul: "^0.4.5",
        mocha: "^8.0.1"
      },
      dependencies: {
        "bn.js": "^4.11.9",
        brorand: "^1.1.0",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.1",
        inherits: "^2.0.4",
        "minimalistic-assert": "^1.0.1",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    };
  }
});

// node_modules/elliptic/node_modules/bn.js/lib/bn.js
var require_bn = __commonJS({
  "node_modules/elliptic/node_modules/bn.js/lib/bn.js"(exports, module) {
    (function(module2, exports2) {
      "use strict";
      function assert(val, msg) {
        if (!val)
          throw new Error(msg || "Assertion failed");
      }
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN(number, base, endian) {
        if (BN.isBN(number)) {
          return number;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number || 0, base || 10, endian || "be");
        }
      }
      if (typeof module2 === "object") {
        module2.exports = BN;
      } else {
        exports2.BN = BN;
      }
      BN.BN = BN;
      BN.wordSize = 26;
      var Buffer2;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer2 = window.Buffer;
        } else {
          Buffer2 = require_buffer().Buffer;
        }
      } catch (e) {
      }
      BN.isBN = function isBN(num) {
        if (num instanceof BN) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
      };
      BN.max = function max(left, right) {
        if (left.cmp(right) > 0)
          return left;
        return right;
      };
      BN.min = function min(left, right) {
        if (left.cmp(right) < 0)
          return left;
        return right;
      };
      BN.prototype._init = function init(number, base, endian) {
        if (typeof number === "number") {
          return this._initNumber(number, base, endian);
        }
        if (typeof number === "object") {
          return this._initArray(number, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, "");
        var start = 0;
        if (number[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number.length) {
          if (base === 16) {
            this._parseHex(number, start, endian);
          } else {
            this._parseBase(number, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      };
      BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }
        if (number < 67108864) {
          this.words = [number & 67108863];
          this.length = 1;
        } else if (number < 4503599627370496) {
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert(number < 9007199254740992);
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le")
          return;
        this._initArray(this.toArray(), base, endian);
      };
      BN.prototype._initArray = function _initArray(number, base, endian) {
        assert(typeof number.length === "number");
        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for (var i3 = 0; i3 < this.length; i3++) {
          this.words[i3] = 0;
        }
        var j4, w2;
        var off = 0;
        if (endian === "be") {
          for (i3 = number.length - 1, j4 = 0; i3 >= 0; i3 -= 3) {
            w2 = number[i3] | number[i3 - 1] << 8 | number[i3 - 2] << 16;
            this.words[j4] |= w2 << off & 67108863;
            this.words[j4 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j4++;
            }
          }
        } else if (endian === "le") {
          for (i3 = 0, j4 = 0; i3 < number.length; i3 += 3) {
            w2 = number[i3] | number[i3 + 1] << 8 | number[i3 + 2] << 16;
            this.words[j4] |= w2 << off & 67108863;
            this.words[j4 + 1] = w2 >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j4++;
            }
          }
        }
        return this.strip();
      };
      function parseHex4Bits(string, index) {
        var c2 = string.charCodeAt(index);
        if (c2 >= 65 && c2 <= 70) {
          return c2 - 55;
        } else if (c2 >= 97 && c2 <= 102) {
          return c2 - 87;
        } else {
          return c2 - 48 & 15;
        }
      }
      function parseHexByte(string, lowerBound, index) {
        var r2 = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) {
          r2 |= parseHex4Bits(string, index - 1) << 4;
        }
        return r2;
      }
      BN.prototype._parseHex = function _parseHex(number, start, endian) {
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for (var i3 = 0; i3 < this.length; i3++) {
          this.words[i3] = 0;
        }
        var off = 0;
        var j4 = 0;
        var w2;
        if (endian === "be") {
          for (i3 = number.length - 1; i3 >= start; i3 -= 2) {
            w2 = parseHexByte(number, start, i3) << off;
            this.words[j4] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j4 += 1;
              this.words[j4] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number.length - start;
          for (i3 = parseLength % 2 === 0 ? start + 1 : start; i3 < number.length; i3 += 2) {
            w2 = parseHexByte(number, start, i3) << off;
            this.words[j4] |= w2 & 67108863;
            if (off >= 18) {
              off -= 18;
              j4 += 1;
              this.words[j4] |= w2 >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this.strip();
      };
      function parseBase(str, start, end, mul) {
        var r2 = 0;
        var len = Math.min(str.length, end);
        for (var i3 = start; i3 < len; i3++) {
          var c2 = str.charCodeAt(i3) - 48;
          r2 *= mul;
          if (c2 >= 49) {
            r2 += c2 - 49 + 10;
          } else if (c2 >= 17) {
            r2 += c2 - 17 + 10;
          } else {
            r2 += c2;
          }
        }
        return r2;
      }
      BN.prototype._parseBase = function _parseBase(number, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for (var i3 = start; i3 < end; i3 += limbLen) {
          word = parseBase(number, i3, i3 + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number, i3, number.length, base);
          for (i3 = 0; i3 < mod; i3++) {
            pow *= base;
          }
          this.imuln(pow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this.strip();
      };
      BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i3 = 0; i3 < this.length; i3++) {
          dest.words[i3] = this.words[i3];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      BN.prototype.clone = function clone() {
        var r2 = new BN(null);
        this.copy(r2);
        return r2;
      };
      BN.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN.prototype.strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      BN.prototype.inspect = function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN.prototype.toString = function toString2(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i3 = 0; i3 < this.length; i3++) {
            var w2 = this.words[i3];
            var word = ((w2 << off | carry) & 16777215).toString(16);
            carry = w2 >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i3--;
            }
            if (carry !== 0 || i3 !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c2 = this.clone();
          c2.negative = 0;
          while (!c2.isZero()) {
            var r2 = c2.modn(groupBase).toString(base);
            c2 = c2.idivn(groupBase);
            if (!c2.isZero()) {
              out = zeros[groupSize - r2.length] + r2 + out;
            } else {
              out = r2 + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert(false, "Base should be between 2 and 36");
      };
      BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
      };
      BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer2 !== "undefined");
        return this.toArrayLike(Buffer2, endian, length);
      };
      BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, "byte array longer than desired length");
        assert(reqLength > 0, "Requested array length <= 0");
        this.strip();
        var littleEndian = endian === "le";
        var res = new ArrayType(reqLength);
        var b3, i3;
        var q3 = this.clone();
        if (!littleEndian) {
          for (i3 = 0; i3 < reqLength - byteLength; i3++) {
            res[i3] = 0;
          }
          for (i3 = 0; !q3.isZero(); i3++) {
            b3 = q3.andln(255);
            q3.iushrn(8);
            res[reqLength - i3 - 1] = b3;
          }
        } else {
          for (i3 = 0; !q3.isZero(); i3++) {
            b3 = q3.andln(255);
            q3.iushrn(8);
            res[i3] = b3;
          }
          for (; i3 < reqLength; i3++) {
            res[i3] = 0;
          }
        }
        return res;
      };
      if (Math.clz32) {
        BN.prototype._countBits = function _countBits(w2) {
          return 32 - Math.clz32(w2);
        };
      } else {
        BN.prototype._countBits = function _countBits(w2) {
          var t = w2;
          var r2 = 0;
          if (t >= 4096) {
            r2 += 13;
            t >>>= 13;
          }
          if (t >= 64) {
            r2 += 7;
            t >>>= 7;
          }
          if (t >= 8) {
            r2 += 4;
            t >>>= 4;
          }
          if (t >= 2) {
            r2 += 2;
            t >>>= 2;
          }
          return r2 + t;
        };
      }
      BN.prototype._zeroBits = function _zeroBits(w2) {
        if (w2 === 0)
          return 26;
        var t = w2;
        var r2 = 0;
        if ((t & 8191) === 0) {
          r2 += 13;
          t >>>= 13;
        }
        if ((t & 127) === 0) {
          r2 += 7;
          t >>>= 7;
        }
        if ((t & 15) === 0) {
          r2 += 4;
          t >>>= 4;
        }
        if ((t & 3) === 0) {
          r2 += 2;
          t >>>= 2;
        }
        if ((t & 1) === 0) {
          r2++;
        }
        return r2;
      };
      BN.prototype.bitLength = function bitLength() {
        var w2 = this.words[this.length - 1];
        var hi2 = this._countBits(w2);
        return (this.length - 1) * 26 + hi2;
      };
      function toBitArray(num) {
        var w2 = new Array(num.bitLength());
        for (var bit = 0; bit < w2.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w2[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }
        return w2;
      }
      BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero())
          return 0;
        var r2 = 0;
        for (var i3 = 0; i3 < this.length; i3++) {
          var b3 = this._zeroBits(this.words[i3]);
          r2 += b3;
          if (b3 !== 26)
            break;
        }
        return r2;
      };
      BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i3 = 0; i3 < num.length; i3++) {
          this.words[i3] = this.words[i3] | num.words[i3];
        }
        return this.strip();
      };
      BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN.prototype.or = function or3(num) {
        if (this.length > num.length)
          return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN.prototype.uor = function uor(num) {
        if (this.length > num.length)
          return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN.prototype.iuand = function iuand(num) {
        var b3;
        if (this.length > num.length) {
          b3 = num;
        } else {
          b3 = this;
        }
        for (var i3 = 0; i3 < b3.length; i3++) {
          this.words[i3] = this.words[i3] & num.words[i3];
        }
        this.length = b3.length;
        return this.strip();
      };
      BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN.prototype.and = function and(num) {
        if (this.length > num.length)
          return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN.prototype.uand = function uand(num) {
        if (this.length > num.length)
          return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN.prototype.iuxor = function iuxor(num) {
        var a2;
        var b3;
        if (this.length > num.length) {
          a2 = this;
          b3 = num;
        } else {
          a2 = num;
          b3 = this;
        }
        for (var i3 = 0; i3 < b3.length; i3++) {
          this.words[i3] = a2.words[i3] ^ b3.words[i3];
        }
        if (this !== a2) {
          for (; i3 < a2.length; i3++) {
            this.words[i3] = a2.words[i3];
          }
        }
        this.length = a2.length;
        return this.strip();
      };
      BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN.prototype.xor = function xor(num) {
        if (this.length > num.length)
          return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length)
          return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN.prototype.inotn = function inotn(width) {
        assert(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i3 = 0; i3 < bytesNeeded; i3++) {
          this.words[i3] = ~this.words[i3] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i3] = ~this.words[i3] & 67108863 >> 26 - bitsLeft;
        }
        return this.strip();
      };
      BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this.strip();
      };
      BN.prototype.iadd = function iadd(num) {
        var r2;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r2 = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r2 = this.isub(num);
          num.negative = 1;
          return r2._normSign();
        }
        var a2, b3;
        if (this.length > num.length) {
          a2 = this;
          b3 = num;
        } else {
          a2 = num;
          b3 = this;
        }
        var carry = 0;
        for (var i3 = 0; i3 < b3.length; i3++) {
          r2 = (a2.words[i3] | 0) + (b3.words[i3] | 0) + carry;
          this.words[i3] = r2 & 67108863;
          carry = r2 >>> 26;
        }
        for (; carry !== 0 && i3 < a2.length; i3++) {
          r2 = (a2.words[i3] | 0) + carry;
          this.words[i3] = r2 & 67108863;
          carry = r2 >>> 26;
        }
        this.length = a2.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a2 !== this) {
          for (; i3 < a2.length; i3++) {
            this.words[i3] = a2.words[i3];
          }
        }
        return this;
      };
      BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length)
          return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r2 = this.iadd(num);
          num.negative = 1;
          return r2._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a2, b3;
        if (cmp > 0) {
          a2 = this;
          b3 = num;
        } else {
          a2 = num;
          b3 = this;
        }
        var carry = 0;
        for (var i3 = 0; i3 < b3.length; i3++) {
          r2 = (a2.words[i3] | 0) - (b3.words[i3] | 0) + carry;
          carry = r2 >> 26;
          this.words[i3] = r2 & 67108863;
        }
        for (; carry !== 0 && i3 < a2.length; i3++) {
          r2 = (a2.words[i3] | 0) + carry;
          carry = r2 >> 26;
          this.words[i3] = r2 & 67108863;
        }
        if (carry === 0 && i3 < a2.length && a2 !== this) {
          for (; i3 < a2.length; i3++) {
            this.words[i3] = a2.words[i3];
          }
        }
        this.length = Math.max(this.length, i3);
        if (a2 !== this) {
          this.negative = 1;
        }
        return this.strip();
      };
      BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len = self2.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a2 = self2.words[0] | 0;
        var b3 = num.words[0] | 0;
        var r2 = a2 * b3;
        var lo2 = r2 & 67108863;
        var carry = r2 / 67108864 | 0;
        out.words[0] = lo2;
        for (var k2 = 1; k2 < len; k2++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j4 = Math.max(0, k2 - self2.length + 1); j4 <= maxJ; j4++) {
            var i3 = k2 - j4 | 0;
            a2 = self2.words[i3] | 0;
            b3 = num.words[j4] | 0;
            r2 = a2 * b3 + rword;
            ncarry += r2 / 67108864 | 0;
            rword = r2 & 67108863;
          }
          out.words[k2] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k2] = carry | 0;
        } else {
          out.length--;
        }
        return out.strip();
      }
      var comb10MulTo = function comb10MulTo2(self2, num, out) {
        var a2 = self2.words;
        var b3 = num.words;
        var o2 = out.words;
        var c2 = 0;
        var lo2;
        var mid;
        var hi2;
        var a02 = a2[0] | 0;
        var al0 = a02 & 8191;
        var ah0 = a02 >>> 13;
        var a1 = a2[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a22 = a2[2] | 0;
        var al2 = a22 & 8191;
        var ah2 = a22 >>> 13;
        var a3 = a2[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a2[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a2[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a2[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a2[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a2[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a2[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b02 = b3[0] | 0;
        var bl0 = b02 & 8191;
        var bh0 = b02 >>> 13;
        var b1 = b3[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b22 = b3[2] | 0;
        var bl2 = b22 & 8191;
        var bh2 = b22 >>> 13;
        var b32 = b3[3] | 0;
        var bl3 = b32 & 8191;
        var bh3 = b32 >>> 13;
        var b4 = b3[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b3[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b3[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b3[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b3[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b3[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo2 = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi2 = Math.imul(ah0, bh0);
        var w02 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w02 >>> 26) | 0;
        w02 &= 67108863;
        lo2 = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi2 = Math.imul(ah1, bh0);
        lo2 = lo2 + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi2 = hi2 + Math.imul(ah0, bh1) | 0;
        var w1 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo2 = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi2 = Math.imul(ah2, bh0);
        lo2 = lo2 + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi2 = hi2 + Math.imul(ah1, bh1) | 0;
        lo2 = lo2 + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi2 = hi2 + Math.imul(ah0, bh2) | 0;
        var w2 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo2 = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi2 = Math.imul(ah3, bh0);
        lo2 = lo2 + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi2 = hi2 + Math.imul(ah2, bh1) | 0;
        lo2 = lo2 + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi2 = hi2 + Math.imul(ah1, bh2) | 0;
        lo2 = lo2 + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi2 = hi2 + Math.imul(ah0, bh3) | 0;
        var w3 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo2 = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi2 = Math.imul(ah4, bh0);
        lo2 = lo2 + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi2 = hi2 + Math.imul(ah3, bh1) | 0;
        lo2 = lo2 + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi2 = hi2 + Math.imul(ah2, bh2) | 0;
        lo2 = lo2 + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi2 = hi2 + Math.imul(ah1, bh3) | 0;
        lo2 = lo2 + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi2 = hi2 + Math.imul(ah0, bh4) | 0;
        var w4 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo2 = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi2 = Math.imul(ah5, bh0);
        lo2 = lo2 + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi2 = hi2 + Math.imul(ah4, bh1) | 0;
        lo2 = lo2 + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi2 = hi2 + Math.imul(ah3, bh2) | 0;
        lo2 = lo2 + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi2 = hi2 + Math.imul(ah2, bh3) | 0;
        lo2 = lo2 + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi2 = hi2 + Math.imul(ah1, bh4) | 0;
        lo2 = lo2 + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi2 = hi2 + Math.imul(ah0, bh5) | 0;
        var w5 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo2 = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi2 = Math.imul(ah6, bh0);
        lo2 = lo2 + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi2 = hi2 + Math.imul(ah5, bh1) | 0;
        lo2 = lo2 + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi2 = hi2 + Math.imul(ah4, bh2) | 0;
        lo2 = lo2 + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi2 = hi2 + Math.imul(ah3, bh3) | 0;
        lo2 = lo2 + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi2 = hi2 + Math.imul(ah2, bh4) | 0;
        lo2 = lo2 + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi2 = hi2 + Math.imul(ah1, bh5) | 0;
        lo2 = lo2 + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi2 = hi2 + Math.imul(ah0, bh6) | 0;
        var w6 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo2 = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi2 = Math.imul(ah7, bh0);
        lo2 = lo2 + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi2 = hi2 + Math.imul(ah6, bh1) | 0;
        lo2 = lo2 + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi2 = hi2 + Math.imul(ah5, bh2) | 0;
        lo2 = lo2 + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi2 = hi2 + Math.imul(ah4, bh3) | 0;
        lo2 = lo2 + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi2 = hi2 + Math.imul(ah3, bh4) | 0;
        lo2 = lo2 + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi2 = hi2 + Math.imul(ah2, bh5) | 0;
        lo2 = lo2 + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi2 = hi2 + Math.imul(ah1, bh6) | 0;
        lo2 = lo2 + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi2 = hi2 + Math.imul(ah0, bh7) | 0;
        var w7 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo2 = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi2 = Math.imul(ah8, bh0);
        lo2 = lo2 + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi2 = hi2 + Math.imul(ah7, bh1) | 0;
        lo2 = lo2 + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi2 = hi2 + Math.imul(ah6, bh2) | 0;
        lo2 = lo2 + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi2 = hi2 + Math.imul(ah5, bh3) | 0;
        lo2 = lo2 + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi2 = hi2 + Math.imul(ah4, bh4) | 0;
        lo2 = lo2 + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi2 = hi2 + Math.imul(ah3, bh5) | 0;
        lo2 = lo2 + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi2 = hi2 + Math.imul(ah2, bh6) | 0;
        lo2 = lo2 + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi2 = hi2 + Math.imul(ah1, bh7) | 0;
        lo2 = lo2 + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi2 = hi2 + Math.imul(ah0, bh8) | 0;
        var w8 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo2 = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi2 = Math.imul(ah9, bh0);
        lo2 = lo2 + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi2 = hi2 + Math.imul(ah8, bh1) | 0;
        lo2 = lo2 + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi2 = hi2 + Math.imul(ah7, bh2) | 0;
        lo2 = lo2 + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi2 = hi2 + Math.imul(ah6, bh3) | 0;
        lo2 = lo2 + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi2 = hi2 + Math.imul(ah5, bh4) | 0;
        lo2 = lo2 + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi2 = hi2 + Math.imul(ah4, bh5) | 0;
        lo2 = lo2 + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi2 = hi2 + Math.imul(ah3, bh6) | 0;
        lo2 = lo2 + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi2 = hi2 + Math.imul(ah2, bh7) | 0;
        lo2 = lo2 + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi2 = hi2 + Math.imul(ah1, bh8) | 0;
        lo2 = lo2 + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi2 = hi2 + Math.imul(ah0, bh9) | 0;
        var w9 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo2 = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi2 = Math.imul(ah9, bh1);
        lo2 = lo2 + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi2 = hi2 + Math.imul(ah8, bh2) | 0;
        lo2 = lo2 + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi2 = hi2 + Math.imul(ah7, bh3) | 0;
        lo2 = lo2 + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi2 = hi2 + Math.imul(ah6, bh4) | 0;
        lo2 = lo2 + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi2 = hi2 + Math.imul(ah5, bh5) | 0;
        lo2 = lo2 + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi2 = hi2 + Math.imul(ah4, bh6) | 0;
        lo2 = lo2 + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi2 = hi2 + Math.imul(ah3, bh7) | 0;
        lo2 = lo2 + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi2 = hi2 + Math.imul(ah2, bh8) | 0;
        lo2 = lo2 + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi2 = hi2 + Math.imul(ah1, bh9) | 0;
        var w10 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo2 = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi2 = Math.imul(ah9, bh2);
        lo2 = lo2 + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi2 = hi2 + Math.imul(ah8, bh3) | 0;
        lo2 = lo2 + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi2 = hi2 + Math.imul(ah7, bh4) | 0;
        lo2 = lo2 + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi2 = hi2 + Math.imul(ah6, bh5) | 0;
        lo2 = lo2 + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi2 = hi2 + Math.imul(ah5, bh6) | 0;
        lo2 = lo2 + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi2 = hi2 + Math.imul(ah4, bh7) | 0;
        lo2 = lo2 + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi2 = hi2 + Math.imul(ah3, bh8) | 0;
        lo2 = lo2 + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi2 = hi2 + Math.imul(ah2, bh9) | 0;
        var w11 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo2 = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi2 = Math.imul(ah9, bh3);
        lo2 = lo2 + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi2 = hi2 + Math.imul(ah8, bh4) | 0;
        lo2 = lo2 + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi2 = hi2 + Math.imul(ah7, bh5) | 0;
        lo2 = lo2 + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi2 = hi2 + Math.imul(ah6, bh6) | 0;
        lo2 = lo2 + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi2 = hi2 + Math.imul(ah5, bh7) | 0;
        lo2 = lo2 + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi2 = hi2 + Math.imul(ah4, bh8) | 0;
        lo2 = lo2 + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi2 = hi2 + Math.imul(ah3, bh9) | 0;
        var w12 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo2 = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi2 = Math.imul(ah9, bh4);
        lo2 = lo2 + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi2 = hi2 + Math.imul(ah8, bh5) | 0;
        lo2 = lo2 + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi2 = hi2 + Math.imul(ah7, bh6) | 0;
        lo2 = lo2 + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi2 = hi2 + Math.imul(ah6, bh7) | 0;
        lo2 = lo2 + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi2 = hi2 + Math.imul(ah5, bh8) | 0;
        lo2 = lo2 + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi2 = hi2 + Math.imul(ah4, bh9) | 0;
        var w13 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo2 = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi2 = Math.imul(ah9, bh5);
        lo2 = lo2 + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi2 = hi2 + Math.imul(ah8, bh6) | 0;
        lo2 = lo2 + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi2 = hi2 + Math.imul(ah7, bh7) | 0;
        lo2 = lo2 + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi2 = hi2 + Math.imul(ah6, bh8) | 0;
        lo2 = lo2 + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi2 = hi2 + Math.imul(ah5, bh9) | 0;
        var w14 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo2 = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi2 = Math.imul(ah9, bh6);
        lo2 = lo2 + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi2 = hi2 + Math.imul(ah8, bh7) | 0;
        lo2 = lo2 + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi2 = hi2 + Math.imul(ah7, bh8) | 0;
        lo2 = lo2 + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi2 = hi2 + Math.imul(ah6, bh9) | 0;
        var w15 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo2 = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi2 = Math.imul(ah9, bh7);
        lo2 = lo2 + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi2 = hi2 + Math.imul(ah8, bh8) | 0;
        lo2 = lo2 + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi2 = hi2 + Math.imul(ah7, bh9) | 0;
        var w16 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo2 = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi2 = Math.imul(ah9, bh8);
        lo2 = lo2 + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi2 = hi2 + Math.imul(ah8, bh9) | 0;
        var w17 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo2 = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi2 = Math.imul(ah9, bh9);
        var w18 = (c2 + lo2 | 0) + ((mid & 8191) << 13) | 0;
        c2 = (hi2 + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o2[0] = w02;
        o2[1] = w1;
        o2[2] = w2;
        o2[3] = w3;
        o2[4] = w4;
        o2[5] = w5;
        o2[6] = w6;
        o2[7] = w7;
        o2[8] = w8;
        o2[9] = w9;
        o2[10] = w10;
        o2[11] = w11;
        o2[12] = w12;
        o2[13] = w13;
        o2[14] = w14;
        o2[15] = w15;
        o2[16] = w16;
        o2[17] = w17;
        o2[18] = w18;
        if (c2 !== 0) {
          o2[19] = c2;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k2 = 0; k2 < out.length - 1; k2++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k2, num.length - 1);
          for (var j4 = Math.max(0, k2 - self2.length + 1); j4 <= maxJ; j4++) {
            var i3 = k2 - j4;
            var a2 = self2.words[i3] | 0;
            var b3 = num.words[j4] | 0;
            var r2 = a2 * b3;
            var lo2 = r2 & 67108863;
            ncarry = ncarry + (r2 / 67108864 | 0) | 0;
            lo2 = lo2 + rword | 0;
            rword = lo2 & 67108863;
            ncarry = ncarry + (lo2 >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k2] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k2] = carry;
        } else {
          out.length--;
        }
        return out.strip();
      }
      function jumboMulTo(self2, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self2, num, out);
      }
      BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      function FFTM(x4, y5) {
        this.x = x4;
        this.y = y5;
      }
      FFTM.prototype.makeRBT = function makeRBT(N2) {
        var t = new Array(N2);
        var l = BN.prototype._countBits(N2) - 1;
        for (var i3 = 0; i3 < N2; i3++) {
          t[i3] = this.revBin(i3, l, N2);
        }
        return t;
      };
      FFTM.prototype.revBin = function revBin(x4, l, N2) {
        if (x4 === 0 || x4 === N2 - 1)
          return x4;
        var rb = 0;
        for (var i3 = 0; i3 < l; i3++) {
          rb |= (x4 & 1) << l - i3 - 1;
          x4 >>= 1;
        }
        return rb;
      };
      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N2) {
        for (var i3 = 0; i3 < N2; i3++) {
          rtws[i3] = rws[rbt[i3]];
          itws[i3] = iws[rbt[i3]];
        }
      };
      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N2, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N2);
        for (var s = 1; s < N2; s <<= 1) {
          var l = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l);
          var itwdf = Math.sin(2 * Math.PI / l);
          for (var p3 = 0; p3 < N2; p3 += l) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;
            for (var j4 = 0; j4 < s; j4++) {
              var re2 = rtws[p3 + j4];
              var ie2 = itws[p3 + j4];
              var ro2 = rtws[p3 + j4 + s];
              var io = itws[p3 + j4 + s];
              var rx = rtwdf_ * ro2 - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro2;
              ro2 = rx;
              rtws[p3 + j4] = re2 + ro2;
              itws[p3 + j4] = ie2 + io;
              rtws[p3 + j4 + s] = re2 - ro2;
              itws[p3 + j4 + s] = ie2 - io;
              if (j4 !== l) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };
      FFTM.prototype.guessLen13b = function guessLen13b(n2, m2) {
        var N2 = Math.max(m2, n2) | 1;
        var odd = N2 & 1;
        var i3 = 0;
        for (N2 = N2 / 2 | 0; N2; N2 = N2 >>> 1) {
          i3++;
        }
        return 1 << i3 + 1 + odd;
      };
      FFTM.prototype.conjugate = function conjugate(rws, iws, N2) {
        if (N2 <= 1)
          return;
        for (var i3 = 0; i3 < N2 / 2; i3++) {
          var t = rws[i3];
          rws[i3] = rws[N2 - i3 - 1];
          rws[N2 - i3 - 1] = t;
          t = iws[i3];
          iws[i3] = -iws[N2 - i3 - 1];
          iws[N2 - i3 - 1] = -t;
        }
      };
      FFTM.prototype.normalize13b = function normalize13b(ws3, N2) {
        var carry = 0;
        for (var i3 = 0; i3 < N2 / 2; i3++) {
          var w2 = Math.round(ws3[2 * i3 + 1] / N2) * 8192 + Math.round(ws3[2 * i3] / N2) + carry;
          ws3[i3] = w2 & 67108863;
          if (w2 < 67108864) {
            carry = 0;
          } else {
            carry = w2 / 67108864 | 0;
          }
        }
        return ws3;
      };
      FFTM.prototype.convert13b = function convert13b(ws3, len, rws, N2) {
        var carry = 0;
        for (var i3 = 0; i3 < len; i3++) {
          carry = carry + (ws3[i3] | 0);
          rws[2 * i3] = carry & 8191;
          carry = carry >>> 13;
          rws[2 * i3 + 1] = carry & 8191;
          carry = carry >>> 13;
        }
        for (i3 = 2 * len; i3 < N2; ++i3) {
          rws[i3] = 0;
        }
        assert(carry === 0);
        assert((carry & ~8191) === 0);
      };
      FFTM.prototype.stub = function stub(N2) {
        var ph2 = new Array(N2);
        for (var i3 = 0; i3 < N2; i3++) {
          ph2[i3] = 0;
        }
        return ph2;
      };
      FFTM.prototype.mulp = function mulp(x4, y5, out) {
        var N2 = 2 * this.guessLen13b(x4.length, y5.length);
        var rbt = this.makeRBT(N2);
        var _2 = this.stub(N2);
        var rws = new Array(N2);
        var rwst = new Array(N2);
        var iwst = new Array(N2);
        var nrws = new Array(N2);
        var nrwst = new Array(N2);
        var niwst = new Array(N2);
        var rmws = out.words;
        rmws.length = N2;
        this.convert13b(x4.words, x4.length, rws, N2);
        this.convert13b(y5.words, y5.length, nrws, N2);
        this.transform(rws, _2, rwst, iwst, N2, rbt);
        this.transform(nrws, _2, nrwst, niwst, N2, rbt);
        for (var i3 = 0; i3 < N2; i3++) {
          var rx = rwst[i3] * nrwst[i3] - iwst[i3] * niwst[i3];
          iwst[i3] = rwst[i3] * niwst[i3] + iwst[i3] * nrwst[i3];
          rwst[i3] = rx;
        }
        this.conjugate(rwst, iwst, N2);
        this.transform(rwst, iwst, rmws, _2, N2, rbt);
        this.conjugate(rmws, _2, N2);
        this.normalize13b(rmws, N2);
        out.negative = x4.negative ^ y5.negative;
        out.length = x4.length + y5.length;
        return out.strip();
      };
      BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN.prototype.imuln = function imuln(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        var carry = 0;
        for (var i3 = 0; i3 < this.length; i3++) {
          var w2 = (this.words[i3] | 0) * num;
          var lo2 = (w2 & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w2 / 67108864 | 0;
          carry += lo2 >>> 26;
          this.words[i3] = lo2 & 67108863;
        }
        if (carry !== 0) {
          this.words[i3] = carry;
          this.length++;
        }
        return this;
      };
      BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN.prototype.pow = function pow(num) {
        var w2 = toBitArray(num);
        if (w2.length === 0)
          return new BN(1);
        var res = this;
        for (var i3 = 0; i3 < w2.length; i3++, res = res.sqr()) {
          if (w2[i3] !== 0)
            break;
        }
        if (++i3 < w2.length) {
          for (var q3 = res.sqr(); i3 < w2.length; i3++, q3 = q3.sqr()) {
            if (w2[i3] === 0)
              continue;
            res = res.mul(q3);
          }
        }
        return res;
      };
      BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r2 = bits % 26;
        var s = (bits - r2) / 26;
        var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
        var i3;
        if (r2 !== 0) {
          var carry = 0;
          for (i3 = 0; i3 < this.length; i3++) {
            var newCarry = this.words[i3] & carryMask;
            var c2 = (this.words[i3] | 0) - newCarry << r2;
            this.words[i3] = c2 | carry;
            carry = newCarry >>> 26 - r2;
          }
          if (carry) {
            this.words[i3] = carry;
            this.length++;
          }
        }
        if (s !== 0) {
          for (i3 = this.length - 1; i3 >= 0; i3--) {
            this.words[i3 + s] = this.words[i3];
          }
          for (i3 = 0; i3 < s; i3++) {
            this.words[i3] = 0;
          }
          this.length += s;
        }
        return this.strip();
      };
      BN.prototype.ishln = function ishln(bits) {
        assert(this.negative === 0);
        return this.iushln(bits);
      };
      BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === "number" && bits >= 0);
        var h3;
        if (hint) {
          h3 = (hint - hint % 26) / 26;
        } else {
          h3 = 0;
        }
        var r2 = bits % 26;
        var s = Math.min((bits - r2) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r2 << r2;
        var maskedWords = extended;
        h3 -= s;
        h3 = Math.max(0, h3);
        if (maskedWords) {
          for (var i3 = 0; i3 < s; i3++) {
            maskedWords.words[i3] = this.words[i3];
          }
          maskedWords.length = s;
        }
        if (s === 0) {
        } else if (this.length > s) {
          this.length -= s;
          for (i3 = 0; i3 < this.length; i3++) {
            this.words[i3] = this.words[i3 + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i3 = this.length - 1; i3 >= 0 && (carry !== 0 || i3 >= h3); i3--) {
          var word = this.words[i3] | 0;
          this.words[i3] = carry << 26 - r2 | word >>> r2;
          carry = word & mask;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this.strip();
      };
      BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN.prototype.testn = function testn(bit) {
        assert(typeof bit === "number" && bit >= 0);
        var r2 = bit % 26;
        var s = (bit - r2) / 26;
        var q3 = 1 << r2;
        if (this.length <= s)
          return false;
        var w2 = this.words[s];
        return !!(w2 & q3);
      };
      BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r2 = bits % 26;
        var s = (bits - r2) / 26;
        assert(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s) {
          return this;
        }
        if (r2 !== 0) {
          s++;
        }
        this.length = Math.min(s, this.length);
        if (r2 !== 0) {
          var mask = 67108863 ^ 67108863 >>> r2 << r2;
          this.words[this.length - 1] &= mask;
        }
        return this.strip();
      };
      BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0)
          return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) < num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i3 = 0; i3 < this.length && this.words[i3] >= 67108864; i3++) {
          this.words[i3] -= 67108864;
          if (i3 === this.length - 1) {
            this.words[i3 + 1] = 1;
          } else {
            this.words[i3 + 1]++;
          }
        }
        this.length = Math.max(this.length, i3 + 1);
        return this;
      };
      BN.prototype.isubn = function isubn(num) {
        assert(typeof num === "number");
        assert(num < 67108864);
        if (num < 0)
          return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i3 = 0; i3 < this.length && this.words[i3] < 0; i3++) {
            this.words[i3] += 67108864;
            this.words[i3 + 1] -= 1;
          }
        }
        return this.strip();
      };
      BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN.prototype.abs = function abs() {
        return this.clone().iabs();
      };
      BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i3;
        this._expand(len);
        var w2;
        var carry = 0;
        for (i3 = 0; i3 < num.length; i3++) {
          w2 = (this.words[i3 + shift] | 0) + carry;
          var right = (num.words[i3] | 0) * mul;
          w2 -= right & 67108863;
          carry = (w2 >> 26) - (right / 67108864 | 0);
          this.words[i3 + shift] = w2 & 67108863;
        }
        for (; i3 < this.length - shift; i3++) {
          w2 = (this.words[i3 + shift] | 0) + carry;
          carry = w2 >> 26;
          this.words[i3 + shift] = w2 & 67108863;
        }
        if (carry === 0)
          return this.strip();
        assert(carry === -1);
        carry = 0;
        for (i3 = 0; i3 < this.length; i3++) {
          w2 = -(this.words[i3] | 0) + carry;
          carry = w2 >> 26;
          this.words[i3] = w2 & 67108863;
        }
        this.negative = 1;
        return this.strip();
      };
      BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a2 = this.clone();
        var b3 = num;
        var bhi = b3.words[b3.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b3 = b3.ushln(shift);
          a2.iushln(shift);
          bhi = b3.words[b3.length - 1] | 0;
        }
        var m2 = a2.length - b3.length;
        var q3;
        if (mode !== "mod") {
          q3 = new BN(null);
          q3.length = m2 + 1;
          q3.words = new Array(q3.length);
          for (var i3 = 0; i3 < q3.length; i3++) {
            q3.words[i3] = 0;
          }
        }
        var diff = a2.clone()._ishlnsubmul(b3, 1, m2);
        if (diff.negative === 0) {
          a2 = diff;
          if (q3) {
            q3.words[m2] = 1;
          }
        }
        for (var j4 = m2 - 1; j4 >= 0; j4--) {
          var qj = (a2.words[b3.length + j4] | 0) * 67108864 + (a2.words[b3.length + j4 - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a2._ishlnsubmul(b3, qj, j4);
          while (a2.negative !== 0) {
            qj--;
            a2.negative = 0;
            a2._ishlnsubmul(b3, 1, j4);
            if (!a2.isZero()) {
              a2.negative ^= 1;
            }
          }
          if (q3) {
            q3.words[j4] = qj;
          }
        }
        if (q3) {
          q3.strip();
        }
        a2.strip();
        if (mode !== "div" && shift !== 0) {
          a2.iushrn(shift);
        }
        return {
          div: q3 || null,
          mod: a2
        };
      };
      BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN(0),
            mod: new BN(0)
          };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }
          return {
            div,
            mod
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }
          return {
            div: res.div,
            mod
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN(this.modn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN(this.modn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN.prototype.mod = function mod(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero())
          return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0)
          return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN.prototype.modn = function modn(num) {
        assert(num <= 67108863);
        var p3 = (1 << 26) % num;
        var acc = 0;
        for (var i3 = this.length - 1; i3 >= 0; i3--) {
          acc = (p3 * acc + (this.words[i3] | 0)) % num;
        }
        return acc;
      };
      BN.prototype.idivn = function idivn(num) {
        assert(num <= 67108863);
        var carry = 0;
        for (var i3 = this.length - 1; i3 >= 0; i3--) {
          var w2 = (this.words[i3] | 0) + carry * 67108864;
          this.words[i3] = w2 / num | 0;
          carry = w2 % num;
        }
        return this.strip();
      };
      BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN.prototype.egcd = function egcd(p3) {
        assert(p3.negative === 0);
        assert(!p3.isZero());
        var x4 = this;
        var y5 = p3.clone();
        if (x4.negative !== 0) {
          x4 = x4.umod(p3);
        } else {
          x4 = x4.clone();
        }
        var A3 = new BN(1);
        var B2 = new BN(0);
        var C4 = new BN(0);
        var D3 = new BN(1);
        var g3 = 0;
        while (x4.isEven() && y5.isEven()) {
          x4.iushrn(1);
          y5.iushrn(1);
          ++g3;
        }
        var yp = y5.clone();
        var xp = x4.clone();
        while (!x4.isZero()) {
          for (var i3 = 0, im = 1; (x4.words[0] & im) === 0 && i3 < 26; ++i3, im <<= 1)
            ;
          if (i3 > 0) {
            x4.iushrn(i3);
            while (i3-- > 0) {
              if (A3.isOdd() || B2.isOdd()) {
                A3.iadd(yp);
                B2.isub(xp);
              }
              A3.iushrn(1);
              B2.iushrn(1);
            }
          }
          for (var j4 = 0, jm = 1; (y5.words[0] & jm) === 0 && j4 < 26; ++j4, jm <<= 1)
            ;
          if (j4 > 0) {
            y5.iushrn(j4);
            while (j4-- > 0) {
              if (C4.isOdd() || D3.isOdd()) {
                C4.iadd(yp);
                D3.isub(xp);
              }
              C4.iushrn(1);
              D3.iushrn(1);
            }
          }
          if (x4.cmp(y5) >= 0) {
            x4.isub(y5);
            A3.isub(C4);
            B2.isub(D3);
          } else {
            y5.isub(x4);
            C4.isub(A3);
            D3.isub(B2);
          }
        }
        return {
          a: C4,
          b: D3,
          gcd: y5.iushln(g3)
        };
      };
      BN.prototype._invmp = function _invmp(p3) {
        assert(p3.negative === 0);
        assert(!p3.isZero());
        var a2 = this;
        var b3 = p3.clone();
        if (a2.negative !== 0) {
          a2 = a2.umod(p3);
        } else {
          a2 = a2.clone();
        }
        var x1 = new BN(1);
        var x22 = new BN(0);
        var delta = b3.clone();
        while (a2.cmpn(1) > 0 && b3.cmpn(1) > 0) {
          for (var i3 = 0, im = 1; (a2.words[0] & im) === 0 && i3 < 26; ++i3, im <<= 1)
            ;
          if (i3 > 0) {
            a2.iushrn(i3);
            while (i3-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j4 = 0, jm = 1; (b3.words[0] & jm) === 0 && j4 < 26; ++j4, jm <<= 1)
            ;
          if (j4 > 0) {
            b3.iushrn(j4);
            while (j4-- > 0) {
              if (x22.isOdd()) {
                x22.iadd(delta);
              }
              x22.iushrn(1);
            }
          }
          if (a2.cmp(b3) >= 0) {
            a2.isub(b3);
            x1.isub(x22);
          } else {
            b3.isub(a2);
            x22.isub(x1);
          }
        }
        var res;
        if (a2.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x22;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p3);
        }
        return res;
      };
      BN.prototype.gcd = function gcd(num) {
        if (this.isZero())
          return num.abs();
        if (num.isZero())
          return this.abs();
        var a2 = this.clone();
        var b3 = num.clone();
        a2.negative = 0;
        b3.negative = 0;
        for (var shift = 0; a2.isEven() && b3.isEven(); shift++) {
          a2.iushrn(1);
          b3.iushrn(1);
        }
        do {
          while (a2.isEven()) {
            a2.iushrn(1);
          }
          while (b3.isEven()) {
            b3.iushrn(1);
          }
          var r2 = a2.cmp(b3);
          if (r2 < 0) {
            var t = a2;
            a2 = b3;
            b3 = t;
          } else if (r2 === 0 || b3.cmpn(1) === 0) {
            break;
          }
          a2.isub(b3);
        } while (true);
        return b3.iushln(shift);
      };
      BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === "number");
        var r2 = bit % 26;
        var s = (bit - r2) / 26;
        var q3 = 1 << r2;
        if (this.length <= s) {
          this._expand(s + 1);
          this.words[s] |= q3;
          return this;
        }
        var carry = q3;
        for (var i3 = s; carry !== 0 && i3 < this.length; i3++) {
          var w2 = this.words[i3] | 0;
          w2 += carry;
          carry = w2 >>> 26;
          w2 &= 67108863;
          this.words[i3] = w2;
        }
        if (carry !== 0) {
          this.words[i3] = carry;
          this.length++;
        }
        return this;
      };
      BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative)
          return -1;
        if (this.negative === 0 && negative)
          return 1;
        this.strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert(num <= 67108863, "Number is too big");
          var w2 = this.words[0] | 0;
          res = w2 === num ? 0 : w2 < num ? -1 : 1;
        }
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0)
          return -1;
        if (this.negative === 0 && num.negative !== 0)
          return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length)
          return 1;
        if (this.length < num.length)
          return -1;
        var res = 0;
        for (var i3 = this.length - 1; i3 >= 0; i3--) {
          var a2 = this.words[i3] | 0;
          var b3 = num.words[i3] | 0;
          if (a2 === b3)
            continue;
          if (a2 < b3) {
            res = -1;
          } else if (a2 > b3) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN.prototype.gt = function gt3(num) {
        return this.cmp(num) === 1;
      };
      BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN.prototype.lt = function lt3(num) {
        return this.cmp(num) === -1;
      };
      BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN.red = function red(num) {
        return new Red(num);
      };
      BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        assert(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN.prototype.fromRed = function fromRed() {
        assert(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN.prototype.redSub = function redSub(num) {
        assert(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN.prototype.redISub = function redISub(num) {
        assert(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN.prototype.redShl = function redShl(num) {
        assert(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN.prototype.redMul = function redMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN.prototype.redSqr = function redSqr() {
        assert(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN.prototype.redISqr = function redISqr() {
        assert(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN.prototype.redInvm = function redInvm() {
        assert(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN.prototype.redNeg = function redNeg() {
        assert(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p3) {
        this.name = name;
        this.p = new BN(p3, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r2 = num;
        var rlen;
        do {
          this.split(r2, this.tmp);
          r2 = this.imulK(r2);
          r2 = r2.iadd(this.tmp);
          rlen = r2.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
        if (cmp === 0) {
          r2.words[0] = 0;
          r2.length = 1;
        } else if (cmp > 0) {
          r2.isub(this.p);
        } else {
          if (r2.strip !== void 0) {
            r2.strip();
          } else {
            r2._strip();
          }
        }
        return r2;
      };
      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      inherits(K256, MPrime);
      K256.prototype.split = function split(input, output) {
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i3 = 0; i3 < outLen; i3++) {
          output.words[i3] = input.words[i3];
        }
        output.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for (i3 = 10; i3 < input.length; i3++) {
          var next = input.words[i3] | 0;
          input.words[i3 - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i3 - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo2 = 0;
        for (var i3 = 0; i3 < num.length; i3++) {
          var w2 = num.words[i3] | 0;
          lo2 += w2 * 977;
          num.words[i3] = lo2 & 67108863;
          lo2 = w2 * 64 + (lo2 / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      inherits(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i3 = 0; i3 < num.length; i3++) {
          var hi2 = (num.words[i3] | 0) * 19 + carry;
          var lo2 = hi2 & 67108863;
          hi2 >>>= 26;
          num.words[i3] = lo2;
          carry = hi2;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN._prime = function prime(name) {
        if (primes[name])
          return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m2) {
        if (typeof m2 === "string") {
          var prime = BN._prime(m2);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert(m2.gtn(1), "modulus must be greater than 1");
          this.m = m2;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a2) {
        assert(a2.negative === 0, "red works only with positives");
        assert(a2.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a2, b3) {
        assert((a2.negative | b3.negative) === 0, "red works only with positives");
        assert(
          a2.red && a2.red === b3.red,
          "red works only with red numbers"
        );
      };
      Red.prototype.imod = function imod(a2) {
        if (this.prime)
          return this.prime.ireduce(a2)._forceRed(this);
        return a2.umod(this.m)._forceRed(this);
      };
      Red.prototype.neg = function neg(a2) {
        if (a2.isZero()) {
          return a2.clone();
        }
        return this.m.sub(a2)._forceRed(this);
      };
      Red.prototype.add = function add(a2, b3) {
        this._verify2(a2, b3);
        var res = a2.add(b3);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a2, b3) {
        this._verify2(a2, b3);
        var res = a2.iadd(b3);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a2, b3) {
        this._verify2(a2, b3);
        var res = a2.sub(b3);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a2, b3) {
        this._verify2(a2, b3);
        var res = a2.isub(b3);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a2, num) {
        this._verify1(a2);
        return this.imod(a2.ushln(num));
      };
      Red.prototype.imul = function imul(a2, b3) {
        this._verify2(a2, b3);
        return this.imod(a2.imul(b3));
      };
      Red.prototype.mul = function mul(a2, b3) {
        this._verify2(a2, b3);
        return this.imod(a2.mul(b3));
      };
      Red.prototype.isqr = function isqr(a2) {
        return this.imul(a2, a2.clone());
      };
      Red.prototype.sqr = function sqr(a2) {
        return this.mul(a2, a2);
      };
      Red.prototype.sqrt = function sqrt(a2) {
        if (a2.isZero())
          return a2.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow = this.m.add(new BN(1)).iushrn(2);
          return this.pow(a2, pow);
        }
        var q3 = this.m.subn(1);
        var s = 0;
        while (!q3.isZero() && q3.andln(1) === 0) {
          s++;
          q3.iushrn(1);
        }
        assert(!q3.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z4 = this.m.bitLength();
        z4 = new BN(2 * z4 * z4).toRed(this);
        while (this.pow(z4, lpow).cmp(nOne) !== 0) {
          z4.redIAdd(nOne);
        }
        var c2 = this.pow(z4, q3);
        var r2 = this.pow(a2, q3.addn(1).iushrn(1));
        var t = this.pow(a2, q3);
        var m2 = s;
        while (t.cmp(one) !== 0) {
          var tmp = t;
          for (var i3 = 0; tmp.cmp(one) !== 0; i3++) {
            tmp = tmp.redSqr();
          }
          assert(i3 < m2);
          var b3 = this.pow(c2, new BN(1).iushln(m2 - i3 - 1));
          r2 = r2.redMul(b3);
          c2 = b3.redSqr();
          t = t.redMul(c2);
          m2 = i3;
        }
        return r2;
      };
      Red.prototype.invm = function invm(a2) {
        var inv = a2._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow(a2, num) {
        if (num.isZero())
          return new BN(1).toRed(this);
        if (num.cmpn(1) === 0)
          return a2.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a2;
        for (var i3 = 2; i3 < wnd.length; i3++) {
          wnd[i3] = this.mul(wnd[i3 - 1], a2);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i3 = num.length - 1; i3 >= 0; i3--) {
          var word = num.words[i3];
          for (var j4 = start - 1; j4 >= 0; j4--) {
            var bit = word >> j4 & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i3 !== 0 || j4 !== 0))
              continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r2 = num.umod(this.m);
        return r2 === num ? r2.clone() : r2;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m2) {
        Red.call(this, m2);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r2 = this.imod(num.mul(this.rinv));
        r2.red = null;
        return r2;
      };
      Mont.prototype.imul = function imul(a2, b3) {
        if (a2.isZero() || b3.isZero()) {
          a2.words[0] = 0;
          a2.length = 1;
          return a2;
        }
        var t = a2.imul(b3);
        var c2 = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u3 = t.isub(c2).iushrn(this.shift);
        var res = u3;
        if (u3.cmp(this.m) >= 0) {
          res = u3.isub(this.m);
        } else if (u3.cmpn(0) < 0) {
          res = u3.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a2, b3) {
        if (a2.isZero() || b3.isZero())
          return new BN(0)._forceRed(this);
        var t = a2.mul(b3);
        var c2 = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u3 = t.isub(c2).iushrn(this.shift);
        var res = u3;
        if (u3.cmp(this.m) >= 0) {
          res = u3.isub(this.m);
        } else if (u3.cmpn(0) < 0) {
          res = u3.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a2) {
        var res = this.imod(a2._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(typeof module === "undefined" || module, exports);
  }
});

// node_modules/minimalistic-assert/index.js
var require_minimalistic_assert = __commonJS({
  "node_modules/minimalistic-assert/index.js"(exports, module) {
    module.exports = assert;
    function assert(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    assert.equal = function assertEqual(l, r2, msg) {
      if (l != r2)
        throw new Error(msg || "Assertion failed: " + l + " != " + r2);
    };
  }
});

// node_modules/minimalistic-crypto-utils/lib/utils.js
var require_utils = __commonJS({
  "node_modules/minimalistic-crypto-utils/lib/utils.js"(exports) {
    "use strict";
    var utils = exports;
    function toArray(msg, enc) {
      if (Array.isArray(msg))
        return msg.slice();
      if (!msg)
        return [];
      var res = [];
      if (typeof msg !== "string") {
        for (var i3 = 0; i3 < msg.length; i3++)
          res[i3] = msg[i3] | 0;
        return res;
      }
      if (enc === "hex") {
        msg = msg.replace(/[^a-z0-9]+/ig, "");
        if (msg.length % 2 !== 0)
          msg = "0" + msg;
        for (var i3 = 0; i3 < msg.length; i3 += 2)
          res.push(parseInt(msg[i3] + msg[i3 + 1], 16));
      } else {
        for (var i3 = 0; i3 < msg.length; i3++) {
          var c2 = msg.charCodeAt(i3);
          var hi2 = c2 >> 8;
          var lo2 = c2 & 255;
          if (hi2)
            res.push(hi2, lo2);
          else
            res.push(lo2);
        }
      }
      return res;
    }
    utils.toArray = toArray;
    function zero2(word) {
      if (word.length === 1)
        return "0" + word;
      else
        return word;
    }
    utils.zero2 = zero2;
    function toHex(msg) {
      var res = "";
      for (var i3 = 0; i3 < msg.length; i3++)
        res += zero2(msg[i3].toString(16));
      return res;
    }
    utils.toHex = toHex;
    utils.encode = function encode(arr, enc) {
      if (enc === "hex")
        return toHex(arr);
      else
        return arr;
    };
  }
});

// node_modules/elliptic/lib/elliptic/utils.js
var require_utils2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/utils.js"(exports) {
    "use strict";
    var utils = exports;
    var BN = require_bn();
    var minAssert = require_minimalistic_assert();
    var minUtils = require_utils();
    utils.assert = minAssert;
    utils.toArray = minUtils.toArray;
    utils.zero2 = minUtils.zero2;
    utils.toHex = minUtils.toHex;
    utils.encode = minUtils.encode;
    function getNAF(num, w2, bits) {
      var naf = new Array(Math.max(num.bitLength(), bits) + 1);
      var i3;
      for (i3 = 0; i3 < naf.length; i3 += 1) {
        naf[i3] = 0;
      }
      var ws3 = 1 << w2 + 1;
      var k2 = num.clone();
      for (i3 = 0; i3 < naf.length; i3++) {
        var z4;
        var mod = k2.andln(ws3 - 1);
        if (k2.isOdd()) {
          if (mod > (ws3 >> 1) - 1)
            z4 = (ws3 >> 1) - mod;
          else
            z4 = mod;
          k2.isubn(z4);
        } else {
          z4 = 0;
        }
        naf[i3] = z4;
        k2.iushrn(1);
      }
      return naf;
    }
    utils.getNAF = getNAF;
    function getJSF(k1, k2) {
      var jsf = [
        [],
        []
      ];
      k1 = k1.clone();
      k2 = k2.clone();
      var d1 = 0;
      var d2 = 0;
      var m8;
      while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
        var m14 = k1.andln(3) + d1 & 3;
        var m24 = k2.andln(3) + d2 & 3;
        if (m14 === 3)
          m14 = -1;
        if (m24 === 3)
          m24 = -1;
        var u1;
        if ((m14 & 1) === 0) {
          u1 = 0;
        } else {
          m8 = k1.andln(7) + d1 & 7;
          if ((m8 === 3 || m8 === 5) && m24 === 2)
            u1 = -m14;
          else
            u1 = m14;
        }
        jsf[0].push(u1);
        var u22;
        if ((m24 & 1) === 0) {
          u22 = 0;
        } else {
          m8 = k2.andln(7) + d2 & 7;
          if ((m8 === 3 || m8 === 5) && m14 === 2)
            u22 = -m24;
          else
            u22 = m24;
        }
        jsf[1].push(u22);
        if (2 * d1 === u1 + 1)
          d1 = 1 - d1;
        if (2 * d2 === u22 + 1)
          d2 = 1 - d2;
        k1.iushrn(1);
        k2.iushrn(1);
      }
      return jsf;
    }
    utils.getJSF = getJSF;
    function cachedProperty(obj, name, computer) {
      var key = "_" + name;
      obj.prototype[name] = function cachedProperty2() {
        return this[key] !== void 0 ? this[key] : this[key] = computer.call(this);
      };
    }
    utils.cachedProperty = cachedProperty;
    function parseBytes(bytes) {
      return typeof bytes === "string" ? utils.toArray(bytes, "hex") : bytes;
    }
    utils.parseBytes = parseBytes;
    function intFromLE(bytes) {
      return new BN(bytes, "hex", "le");
    }
    utils.intFromLE = intFromLE;
  }
});

// node_modules/brorand/index.js
var require_brorand = __commonJS({
  "node_modules/brorand/index.js"(exports, module) {
    var r2;
    module.exports = function rand(len) {
      if (!r2)
        r2 = new Rand(null);
      return r2.generate(len);
    };
    function Rand(rand) {
      this.rand = rand;
    }
    module.exports.Rand = Rand;
    Rand.prototype.generate = function generate(len) {
      return this._rand(len);
    };
    Rand.prototype._rand = function _rand(n2) {
      if (this.rand.getBytes)
        return this.rand.getBytes(n2);
      var res = new Uint8Array(n2);
      for (var i3 = 0; i3 < res.length; i3++)
        res[i3] = this.rand.getByte();
      return res;
    };
    if (typeof self === "object") {
      if (self.crypto && self.crypto.getRandomValues) {
        Rand.prototype._rand = function _rand(n2) {
          var arr = new Uint8Array(n2);
          self.crypto.getRandomValues(arr);
          return arr;
        };
      } else if (self.msCrypto && self.msCrypto.getRandomValues) {
        Rand.prototype._rand = function _rand(n2) {
          var arr = new Uint8Array(n2);
          self.msCrypto.getRandomValues(arr);
          return arr;
        };
      } else if (typeof window === "object") {
        Rand.prototype._rand = function() {
          throw new Error("Not implemented yet");
        };
      }
    } else {
      try {
        crypto2 = require_crypto();
        if (typeof crypto2.randomBytes !== "function")
          throw new Error("Not supported");
        Rand.prototype._rand = function _rand(n2) {
          return crypto2.randomBytes(n2);
        };
      } catch (e) {
      }
    }
    var crypto2;
  }
});

// node_modules/elliptic/lib/elliptic/curve/base.js
var require_base = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/base.js"(exports, module) {
    "use strict";
    var BN = require_bn();
    var utils = require_utils2();
    var getNAF = utils.getNAF;
    var getJSF = utils.getJSF;
    var assert = utils.assert;
    function BaseCurve(type, conf) {
      this.type = type;
      this.p = new BN(conf.p, 16);
      this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);
      this.zero = new BN(0).toRed(this.red);
      this.one = new BN(1).toRed(this.red);
      this.two = new BN(2).toRed(this.red);
      this.n = conf.n && new BN(conf.n, 16);
      this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
      this._wnafT1 = new Array(4);
      this._wnafT2 = new Array(4);
      this._wnafT3 = new Array(4);
      this._wnafT4 = new Array(4);
      this._bitLength = this.n ? this.n.bitLength() : 0;
      var adjustCount = this.n && this.p.div(this.n);
      if (!adjustCount || adjustCount.cmpn(100) > 0) {
        this.redN = null;
      } else {
        this._maxwellTrick = true;
        this.redN = this.n.toRed(this.red);
      }
    }
    module.exports = BaseCurve;
    BaseCurve.prototype.point = function point() {
      throw new Error("Not implemented");
    };
    BaseCurve.prototype.validate = function validate() {
      throw new Error("Not implemented");
    };
    BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p3, k2) {
      assert(p3.precomputed);
      var doubles = p3._getDoubles();
      var naf = getNAF(k2, 1, this._bitLength);
      var I3 = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
      I3 /= 3;
      var repr = [];
      var j4;
      var nafW;
      for (j4 = 0; j4 < naf.length; j4 += doubles.step) {
        nafW = 0;
        for (var l = j4 + doubles.step - 1; l >= j4; l--)
          nafW = (nafW << 1) + naf[l];
        repr.push(nafW);
      }
      var a2 = this.jpoint(null, null, null);
      var b3 = this.jpoint(null, null, null);
      for (var i3 = I3; i3 > 0; i3--) {
        for (j4 = 0; j4 < repr.length; j4++) {
          nafW = repr[j4];
          if (nafW === i3)
            b3 = b3.mixedAdd(doubles.points[j4]);
          else if (nafW === -i3)
            b3 = b3.mixedAdd(doubles.points[j4].neg());
        }
        a2 = a2.add(b3);
      }
      return a2.toP();
    };
    BaseCurve.prototype._wnafMul = function _wnafMul(p3, k2) {
      var w2 = 4;
      var nafPoints = p3._getNAFPoints(w2);
      w2 = nafPoints.wnd;
      var wnd = nafPoints.points;
      var naf = getNAF(k2, w2, this._bitLength);
      var acc = this.jpoint(null, null, null);
      for (var i3 = naf.length - 1; i3 >= 0; i3--) {
        for (var l = 0; i3 >= 0 && naf[i3] === 0; i3--)
          l++;
        if (i3 >= 0)
          l++;
        acc = acc.dblp(l);
        if (i3 < 0)
          break;
        var z4 = naf[i3];
        assert(z4 !== 0);
        if (p3.type === "affine") {
          if (z4 > 0)
            acc = acc.mixedAdd(wnd[z4 - 1 >> 1]);
          else
            acc = acc.mixedAdd(wnd[-z4 - 1 >> 1].neg());
        } else {
          if (z4 > 0)
            acc = acc.add(wnd[z4 - 1 >> 1]);
          else
            acc = acc.add(wnd[-z4 - 1 >> 1].neg());
        }
      }
      return p3.type === "affine" ? acc.toP() : acc;
    };
    BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
      var wndWidth = this._wnafT1;
      var wnd = this._wnafT2;
      var naf = this._wnafT3;
      var max = 0;
      var i3;
      var j4;
      var p3;
      for (i3 = 0; i3 < len; i3++) {
        p3 = points[i3];
        var nafPoints = p3._getNAFPoints(defW);
        wndWidth[i3] = nafPoints.wnd;
        wnd[i3] = nafPoints.points;
      }
      for (i3 = len - 1; i3 >= 1; i3 -= 2) {
        var a2 = i3 - 1;
        var b3 = i3;
        if (wndWidth[a2] !== 1 || wndWidth[b3] !== 1) {
          naf[a2] = getNAF(coeffs[a2], wndWidth[a2], this._bitLength);
          naf[b3] = getNAF(coeffs[b3], wndWidth[b3], this._bitLength);
          max = Math.max(naf[a2].length, max);
          max = Math.max(naf[b3].length, max);
          continue;
        }
        var comb = [
          points[a2],
          /* 1 */
          null,
          /* 3 */
          null,
          /* 5 */
          points[b3]
          /* 7 */
        ];
        if (points[a2].y.cmp(points[b3].y) === 0) {
          comb[1] = points[a2].add(points[b3]);
          comb[2] = points[a2].toJ().mixedAdd(points[b3].neg());
        } else if (points[a2].y.cmp(points[b3].y.redNeg()) === 0) {
          comb[1] = points[a2].toJ().mixedAdd(points[b3]);
          comb[2] = points[a2].add(points[b3].neg());
        } else {
          comb[1] = points[a2].toJ().mixedAdd(points[b3]);
          comb[2] = points[a2].toJ().mixedAdd(points[b3].neg());
        }
        var index = [
          -3,
          /* -1 -1 */
          -1,
          /* -1 0 */
          -5,
          /* -1 1 */
          -7,
          /* 0 -1 */
          0,
          /* 0 0 */
          7,
          /* 0 1 */
          5,
          /* 1 -1 */
          1,
          /* 1 0 */
          3
          /* 1 1 */
        ];
        var jsf = getJSF(coeffs[a2], coeffs[b3]);
        max = Math.max(jsf[0].length, max);
        naf[a2] = new Array(max);
        naf[b3] = new Array(max);
        for (j4 = 0; j4 < max; j4++) {
          var ja2 = jsf[0][j4] | 0;
          var jb = jsf[1][j4] | 0;
          naf[a2][j4] = index[(ja2 + 1) * 3 + (jb + 1)];
          naf[b3][j4] = 0;
          wnd[a2] = comb;
        }
      }
      var acc = this.jpoint(null, null, null);
      var tmp = this._wnafT4;
      for (i3 = max; i3 >= 0; i3--) {
        var k2 = 0;
        while (i3 >= 0) {
          var zero = true;
          for (j4 = 0; j4 < len; j4++) {
            tmp[j4] = naf[j4][i3] | 0;
            if (tmp[j4] !== 0)
              zero = false;
          }
          if (!zero)
            break;
          k2++;
          i3--;
        }
        if (i3 >= 0)
          k2++;
        acc = acc.dblp(k2);
        if (i3 < 0)
          break;
        for (j4 = 0; j4 < len; j4++) {
          var z4 = tmp[j4];
          p3;
          if (z4 === 0)
            continue;
          else if (z4 > 0)
            p3 = wnd[j4][z4 - 1 >> 1];
          else if (z4 < 0)
            p3 = wnd[j4][-z4 - 1 >> 1].neg();
          if (p3.type === "affine")
            acc = acc.mixedAdd(p3);
          else
            acc = acc.add(p3);
        }
      }
      for (i3 = 0; i3 < len; i3++)
        wnd[i3] = null;
      if (jacobianResult)
        return acc;
      else
        return acc.toP();
    };
    function BasePoint(curve, type) {
      this.curve = curve;
      this.type = type;
      this.precomputed = null;
    }
    BaseCurve.BasePoint = BasePoint;
    BasePoint.prototype.eq = function eq() {
      throw new Error("Not implemented");
    };
    BasePoint.prototype.validate = function validate() {
      return this.curve.validate(this);
    };
    BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
      bytes = utils.toArray(bytes, enc);
      var len = this.p.byteLength();
      if ((bytes[0] === 4 || bytes[0] === 6 || bytes[0] === 7) && bytes.length - 1 === 2 * len) {
        if (bytes[0] === 6)
          assert(bytes[bytes.length - 1] % 2 === 0);
        else if (bytes[0] === 7)
          assert(bytes[bytes.length - 1] % 2 === 1);
        var res = this.point(
          bytes.slice(1, 1 + len),
          bytes.slice(1 + len, 1 + 2 * len)
        );
        return res;
      } else if ((bytes[0] === 2 || bytes[0] === 3) && bytes.length - 1 === len) {
        return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 3);
      }
      throw new Error("Unknown point format");
    };
    BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
      return this.encode(enc, true);
    };
    BasePoint.prototype._encode = function _encode(compact) {
      var len = this.curve.p.byteLength();
      var x4 = this.getX().toArray("be", len);
      if (compact)
        return [this.getY().isEven() ? 2 : 3].concat(x4);
      return [4].concat(x4, this.getY().toArray("be", len));
    };
    BasePoint.prototype.encode = function encode(enc, compact) {
      return utils.encode(this._encode(compact), enc);
    };
    BasePoint.prototype.precompute = function precompute(power) {
      if (this.precomputed)
        return this;
      var precomputed = {
        doubles: null,
        naf: null,
        beta: null
      };
      precomputed.naf = this._getNAFPoints(8);
      precomputed.doubles = this._getDoubles(4, power);
      precomputed.beta = this._getBeta();
      this.precomputed = precomputed;
      return this;
    };
    BasePoint.prototype._hasDoubles = function _hasDoubles(k2) {
      if (!this.precomputed)
        return false;
      var doubles = this.precomputed.doubles;
      if (!doubles)
        return false;
      return doubles.points.length >= Math.ceil((k2.bitLength() + 1) / doubles.step);
    };
    BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
      if (this.precomputed && this.precomputed.doubles)
        return this.precomputed.doubles;
      var doubles = [this];
      var acc = this;
      for (var i3 = 0; i3 < power; i3 += step) {
        for (var j4 = 0; j4 < step; j4++)
          acc = acc.dbl();
        doubles.push(acc);
      }
      return {
        step,
        points: doubles
      };
    };
    BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
      if (this.precomputed && this.precomputed.naf)
        return this.precomputed.naf;
      var res = [this];
      var max = (1 << wnd) - 1;
      var dbl = max === 1 ? null : this.dbl();
      for (var i3 = 1; i3 < max; i3++)
        res[i3] = res[i3 - 1].add(dbl);
      return {
        wnd,
        points: res
      };
    };
    BasePoint.prototype._getBeta = function _getBeta() {
      return null;
    };
    BasePoint.prototype.dblp = function dblp(k2) {
      var r2 = this;
      for (var i3 = 0; i3 < k2; i3++)
        r2 = r2.dbl();
      return r2;
    };
  }
});

// node_modules/elliptic/lib/elliptic/curve/short.js
var require_short = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/short.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var BN = require_bn();
    var inherits = require_inherits_browser();
    var Base = require_base();
    var assert = utils.assert;
    function ShortCurve(conf) {
      Base.call(this, "short", conf);
      this.a = new BN(conf.a, 16).toRed(this.red);
      this.b = new BN(conf.b, 16).toRed(this.red);
      this.tinv = this.two.redInvm();
      this.zeroA = this.a.fromRed().cmpn(0) === 0;
      this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
      this.endo = this._getEndomorphism(conf);
      this._endoWnafT1 = new Array(4);
      this._endoWnafT2 = new Array(4);
    }
    inherits(ShortCurve, Base);
    module.exports = ShortCurve;
    ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
      if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
        return;
      var beta;
      var lambda;
      if (conf.beta) {
        beta = new BN(conf.beta, 16).toRed(this.red);
      } else {
        var betas = this._getEndoRoots(this.p);
        beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
        beta = beta.toRed(this.red);
      }
      if (conf.lambda) {
        lambda = new BN(conf.lambda, 16);
      } else {
        var lambdas = this._getEndoRoots(this.n);
        if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
          lambda = lambdas[0];
        } else {
          lambda = lambdas[1];
          assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
        }
      }
      var basis;
      if (conf.basis) {
        basis = conf.basis.map(function(vec) {
          return {
            a: new BN(vec.a, 16),
            b: new BN(vec.b, 16)
          };
        });
      } else {
        basis = this._getEndoBasis(lambda);
      }
      return {
        beta,
        lambda,
        basis
      };
    };
    ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
      var red = num === this.p ? this.red : BN.mont(num);
      var tinv = new BN(2).toRed(red).redInvm();
      var ntinv = tinv.redNeg();
      var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);
      var l1 = ntinv.redAdd(s).fromRed();
      var l2 = ntinv.redSub(s).fromRed();
      return [l1, l2];
    };
    ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
      var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
      var u3 = lambda;
      var v4 = this.n.clone();
      var x1 = new BN(1);
      var y1 = new BN(0);
      var x22 = new BN(0);
      var y22 = new BN(1);
      var a02;
      var b02;
      var a1;
      var b1;
      var a2;
      var b22;
      var prevR;
      var i3 = 0;
      var r2;
      var x4;
      while (u3.cmpn(0) !== 0) {
        var q3 = v4.div(u3);
        r2 = v4.sub(q3.mul(u3));
        x4 = x22.sub(q3.mul(x1));
        var y5 = y22.sub(q3.mul(y1));
        if (!a1 && r2.cmp(aprxSqrt) < 0) {
          a02 = prevR.neg();
          b02 = x1;
          a1 = r2.neg();
          b1 = x4;
        } else if (a1 && ++i3 === 2) {
          break;
        }
        prevR = r2;
        v4 = u3;
        u3 = r2;
        x22 = x1;
        x1 = x4;
        y22 = y1;
        y1 = y5;
      }
      a2 = r2.neg();
      b22 = x4;
      var len1 = a1.sqr().add(b1.sqr());
      var len2 = a2.sqr().add(b22.sqr());
      if (len2.cmp(len1) >= 0) {
        a2 = a02;
        b22 = b02;
      }
      if (a1.negative) {
        a1 = a1.neg();
        b1 = b1.neg();
      }
      if (a2.negative) {
        a2 = a2.neg();
        b22 = b22.neg();
      }
      return [
        { a: a1, b: b1 },
        { a: a2, b: b22 }
      ];
    };
    ShortCurve.prototype._endoSplit = function _endoSplit(k2) {
      var basis = this.endo.basis;
      var v1 = basis[0];
      var v22 = basis[1];
      var c1 = v22.b.mul(k2).divRound(this.n);
      var c2 = v1.b.neg().mul(k2).divRound(this.n);
      var p1 = c1.mul(v1.a);
      var p22 = c2.mul(v22.a);
      var q1 = c1.mul(v1.b);
      var q22 = c2.mul(v22.b);
      var k1 = k2.sub(p1).sub(p22);
      var k22 = q1.add(q22).neg();
      return { k1, k2: k22 };
    };
    ShortCurve.prototype.pointFromX = function pointFromX(x4, odd) {
      x4 = new BN(x4, 16);
      if (!x4.red)
        x4 = x4.toRed(this.red);
      var y22 = x4.redSqr().redMul(x4).redIAdd(x4.redMul(this.a)).redIAdd(this.b);
      var y5 = y22.redSqrt();
      if (y5.redSqr().redSub(y22).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var isOdd = y5.fromRed().isOdd();
      if (odd && !isOdd || !odd && isOdd)
        y5 = y5.redNeg();
      return this.point(x4, y5);
    };
    ShortCurve.prototype.validate = function validate(point) {
      if (point.inf)
        return true;
      var x4 = point.x;
      var y5 = point.y;
      var ax = this.a.redMul(x4);
      var rhs = x4.redSqr().redMul(x4).redIAdd(ax).redIAdd(this.b);
      return y5.redSqr().redISub(rhs).cmpn(0) === 0;
    };
    ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
      var npoints = this._endoWnafT1;
      var ncoeffs = this._endoWnafT2;
      for (var i3 = 0; i3 < points.length; i3++) {
        var split = this._endoSplit(coeffs[i3]);
        var p3 = points[i3];
        var beta = p3._getBeta();
        if (split.k1.negative) {
          split.k1.ineg();
          p3 = p3.neg(true);
        }
        if (split.k2.negative) {
          split.k2.ineg();
          beta = beta.neg(true);
        }
        npoints[i3 * 2] = p3;
        npoints[i3 * 2 + 1] = beta;
        ncoeffs[i3 * 2] = split.k1;
        ncoeffs[i3 * 2 + 1] = split.k2;
      }
      var res = this._wnafMulAdd(1, npoints, ncoeffs, i3 * 2, jacobianResult);
      for (var j4 = 0; j4 < i3 * 2; j4++) {
        npoints[j4] = null;
        ncoeffs[j4] = null;
      }
      return res;
    };
    function Point(curve, x4, y5, isRed) {
      Base.BasePoint.call(this, curve, "affine");
      if (x4 === null && y5 === null) {
        this.x = null;
        this.y = null;
        this.inf = true;
      } else {
        this.x = new BN(x4, 16);
        this.y = new BN(y5, 16);
        if (isRed) {
          this.x.forceRed(this.curve.red);
          this.y.forceRed(this.curve.red);
        }
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.y.red)
          this.y = this.y.toRed(this.curve.red);
        this.inf = false;
      }
    }
    inherits(Point, Base.BasePoint);
    ShortCurve.prototype.point = function point(x4, y5, isRed) {
      return new Point(this, x4, y5, isRed);
    };
    ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
      return Point.fromJSON(this, obj, red);
    };
    Point.prototype._getBeta = function _getBeta() {
      if (!this.curve.endo)
        return;
      var pre = this.precomputed;
      if (pre && pre.beta)
        return pre.beta;
      var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (pre) {
        var curve = this.curve;
        var endoMul = function(p3) {
          return curve.point(p3.x.redMul(curve.endo.beta), p3.y);
        };
        pre.beta = beta;
        beta.precomputed = {
          beta: null,
          naf: pre.naf && {
            wnd: pre.naf.wnd,
            points: pre.naf.points.map(endoMul)
          },
          doubles: pre.doubles && {
            step: pre.doubles.step,
            points: pre.doubles.points.map(endoMul)
          }
        };
      }
      return beta;
    };
    Point.prototype.toJSON = function toJSON() {
      if (!this.precomputed)
        return [this.x, this.y];
      return [this.x, this.y, this.precomputed && {
        doubles: this.precomputed.doubles && {
          step: this.precomputed.doubles.step,
          points: this.precomputed.doubles.points.slice(1)
        },
        naf: this.precomputed.naf && {
          wnd: this.precomputed.naf.wnd,
          points: this.precomputed.naf.points.slice(1)
        }
      }];
    };
    Point.fromJSON = function fromJSON(curve, obj, red) {
      if (typeof obj === "string")
        obj = JSON.parse(obj);
      var res = curve.point(obj[0], obj[1], red);
      if (!obj[2])
        return res;
      function obj2point(obj2) {
        return curve.point(obj2[0], obj2[1], red);
      }
      var pre = obj[2];
      res.precomputed = {
        beta: null,
        doubles: pre.doubles && {
          step: pre.doubles.step,
          points: [res].concat(pre.doubles.points.map(obj2point))
        },
        naf: pre.naf && {
          wnd: pre.naf.wnd,
          points: [res].concat(pre.naf.points.map(obj2point))
        }
      };
      return res;
    };
    Point.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
    };
    Point.prototype.isInfinity = function isInfinity() {
      return this.inf;
    };
    Point.prototype.add = function add(p3) {
      if (this.inf)
        return p3;
      if (p3.inf)
        return this;
      if (this.eq(p3))
        return this.dbl();
      if (this.neg().eq(p3))
        return this.curve.point(null, null);
      if (this.x.cmp(p3.x) === 0)
        return this.curve.point(null, null);
      var c2 = this.y.redSub(p3.y);
      if (c2.cmpn(0) !== 0)
        c2 = c2.redMul(this.x.redSub(p3.x).redInvm());
      var nx = c2.redSqr().redISub(this.x).redISub(p3.x);
      var ny = c2.redMul(this.x.redSub(nx)).redISub(this.y);
      return this.curve.point(nx, ny);
    };
    Point.prototype.dbl = function dbl() {
      if (this.inf)
        return this;
      var ys1 = this.y.redAdd(this.y);
      if (ys1.cmpn(0) === 0)
        return this.curve.point(null, null);
      var a2 = this.curve.a;
      var x22 = this.x.redSqr();
      var dyinv = ys1.redInvm();
      var c2 = x22.redAdd(x22).redIAdd(x22).redIAdd(a2).redMul(dyinv);
      var nx = c2.redSqr().redISub(this.x.redAdd(this.x));
      var ny = c2.redMul(this.x.redSub(nx)).redISub(this.y);
      return this.curve.point(nx, ny);
    };
    Point.prototype.getX = function getX() {
      return this.x.fromRed();
    };
    Point.prototype.getY = function getY() {
      return this.y.fromRed();
    };
    Point.prototype.mul = function mul(k2) {
      k2 = new BN(k2, 16);
      if (this.isInfinity())
        return this;
      else if (this._hasDoubles(k2))
        return this.curve._fixedNafMul(this, k2);
      else if (this.curve.endo)
        return this.curve._endoWnafMulAdd([this], [k2]);
      else
        return this.curve._wnafMul(this, k2);
    };
    Point.prototype.mulAdd = function mulAdd(k1, p22, k2) {
      var points = [this, p22];
      var coeffs = [k1, k2];
      if (this.curve.endo)
        return this.curve._endoWnafMulAdd(points, coeffs);
      else
        return this.curve._wnafMulAdd(1, points, coeffs, 2);
    };
    Point.prototype.jmulAdd = function jmulAdd(k1, p22, k2) {
      var points = [this, p22];
      var coeffs = [k1, k2];
      if (this.curve.endo)
        return this.curve._endoWnafMulAdd(points, coeffs, true);
      else
        return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
    };
    Point.prototype.eq = function eq(p3) {
      return this === p3 || this.inf === p3.inf && (this.inf || this.x.cmp(p3.x) === 0 && this.y.cmp(p3.y) === 0);
    };
    Point.prototype.neg = function neg(_precompute) {
      if (this.inf)
        return this;
      var res = this.curve.point(this.x, this.y.redNeg());
      if (_precompute && this.precomputed) {
        var pre = this.precomputed;
        var negate = function(p3) {
          return p3.neg();
        };
        res.precomputed = {
          naf: pre.naf && {
            wnd: pre.naf.wnd,
            points: pre.naf.points.map(negate)
          },
          doubles: pre.doubles && {
            step: pre.doubles.step,
            points: pre.doubles.points.map(negate)
          }
        };
      }
      return res;
    };
    Point.prototype.toJ = function toJ() {
      if (this.inf)
        return this.curve.jpoint(null, null, null);
      var res = this.curve.jpoint(this.x, this.y, this.curve.one);
      return res;
    };
    function JPoint(curve, x4, y5, z4) {
      Base.BasePoint.call(this, curve, "jacobian");
      if (x4 === null && y5 === null && z4 === null) {
        this.x = this.curve.one;
        this.y = this.curve.one;
        this.z = new BN(0);
      } else {
        this.x = new BN(x4, 16);
        this.y = new BN(y5, 16);
        this.z = new BN(z4, 16);
      }
      if (!this.x.red)
        this.x = this.x.toRed(this.curve.red);
      if (!this.y.red)
        this.y = this.y.toRed(this.curve.red);
      if (!this.z.red)
        this.z = this.z.toRed(this.curve.red);
      this.zOne = this.z === this.curve.one;
    }
    inherits(JPoint, Base.BasePoint);
    ShortCurve.prototype.jpoint = function jpoint(x4, y5, z4) {
      return new JPoint(this, x4, y5, z4);
    };
    JPoint.prototype.toP = function toP() {
      if (this.isInfinity())
        return this.curve.point(null, null);
      var zinv = this.z.redInvm();
      var zinv2 = zinv.redSqr();
      var ax = this.x.redMul(zinv2);
      var ay = this.y.redMul(zinv2).redMul(zinv);
      return this.curve.point(ax, ay);
    };
    JPoint.prototype.neg = function neg() {
      return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    };
    JPoint.prototype.add = function add(p3) {
      if (this.isInfinity())
        return p3;
      if (p3.isInfinity())
        return this;
      var pz2 = p3.z.redSqr();
      var z22 = this.z.redSqr();
      var u1 = this.x.redMul(pz2);
      var u22 = p3.x.redMul(z22);
      var s1 = this.y.redMul(pz2.redMul(p3.z));
      var s2 = p3.y.redMul(z22.redMul(this.z));
      var h3 = u1.redSub(u22);
      var r2 = s1.redSub(s2);
      if (h3.cmpn(0) === 0) {
        if (r2.cmpn(0) !== 0)
          return this.curve.jpoint(null, null, null);
        else
          return this.dbl();
      }
      var h22 = h3.redSqr();
      var h32 = h22.redMul(h3);
      var v4 = u1.redMul(h22);
      var nx = r2.redSqr().redIAdd(h32).redISub(v4).redISub(v4);
      var ny = r2.redMul(v4.redISub(nx)).redISub(s1.redMul(h32));
      var nz = this.z.redMul(p3.z).redMul(h3);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.mixedAdd = function mixedAdd(p3) {
      if (this.isInfinity())
        return p3.toJ();
      if (p3.isInfinity())
        return this;
      var z22 = this.z.redSqr();
      var u1 = this.x;
      var u22 = p3.x.redMul(z22);
      var s1 = this.y;
      var s2 = p3.y.redMul(z22).redMul(this.z);
      var h3 = u1.redSub(u22);
      var r2 = s1.redSub(s2);
      if (h3.cmpn(0) === 0) {
        if (r2.cmpn(0) !== 0)
          return this.curve.jpoint(null, null, null);
        else
          return this.dbl();
      }
      var h22 = h3.redSqr();
      var h32 = h22.redMul(h3);
      var v4 = u1.redMul(h22);
      var nx = r2.redSqr().redIAdd(h32).redISub(v4).redISub(v4);
      var ny = r2.redMul(v4.redISub(nx)).redISub(s1.redMul(h32));
      var nz = this.z.redMul(h3);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.dblp = function dblp(pow) {
      if (pow === 0)
        return this;
      if (this.isInfinity())
        return this;
      if (!pow)
        return this.dbl();
      var i3;
      if (this.curve.zeroA || this.curve.threeA) {
        var r2 = this;
        for (i3 = 0; i3 < pow; i3++)
          r2 = r2.dbl();
        return r2;
      }
      var a2 = this.curve.a;
      var tinv = this.curve.tinv;
      var jx = this.x;
      var jy = this.y;
      var jz = this.z;
      var jz4 = jz.redSqr().redSqr();
      var jyd = jy.redAdd(jy);
      for (i3 = 0; i3 < pow; i3++) {
        var jx2 = jx.redSqr();
        var jyd2 = jyd.redSqr();
        var jyd4 = jyd2.redSqr();
        var c2 = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a2.redMul(jz4));
        var t1 = jx.redMul(jyd2);
        var nx = c2.redSqr().redISub(t1.redAdd(t1));
        var t2 = t1.redISub(nx);
        var dny = c2.redMul(t2);
        dny = dny.redIAdd(dny).redISub(jyd4);
        var nz = jyd.redMul(jz);
        if (i3 + 1 < pow)
          jz4 = jz4.redMul(jyd4);
        jx = nx;
        jz = nz;
        jyd = dny;
      }
      return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
    };
    JPoint.prototype.dbl = function dbl() {
      if (this.isInfinity())
        return this;
      if (this.curve.zeroA)
        return this._zeroDbl();
      else if (this.curve.threeA)
        return this._threeDbl();
      else
        return this._dbl();
    };
    JPoint.prototype._zeroDbl = function _zeroDbl() {
      var nx;
      var ny;
      var nz;
      if (this.zOne) {
        var xx = this.x.redSqr();
        var yy = this.y.redSqr();
        var yyyy = yy.redSqr();
        var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
        s = s.redIAdd(s);
        var m2 = xx.redAdd(xx).redIAdd(xx);
        var t = m2.redSqr().redISub(s).redISub(s);
        var yyyy8 = yyyy.redIAdd(yyyy);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        nx = t;
        ny = m2.redMul(s.redISub(t)).redISub(yyyy8);
        nz = this.y.redAdd(this.y);
      } else {
        var a2 = this.x.redSqr();
        var b3 = this.y.redSqr();
        var c2 = b3.redSqr();
        var d2 = this.x.redAdd(b3).redSqr().redISub(a2).redISub(c2);
        d2 = d2.redIAdd(d2);
        var e = a2.redAdd(a2).redIAdd(a2);
        var f3 = e.redSqr();
        var c8 = c2.redIAdd(c2);
        c8 = c8.redIAdd(c8);
        c8 = c8.redIAdd(c8);
        nx = f3.redISub(d2).redISub(d2);
        ny = e.redMul(d2.redISub(nx)).redISub(c8);
        nz = this.y.redMul(this.z);
        nz = nz.redIAdd(nz);
      }
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype._threeDbl = function _threeDbl() {
      var nx;
      var ny;
      var nz;
      if (this.zOne) {
        var xx = this.x.redSqr();
        var yy = this.y.redSqr();
        var yyyy = yy.redSqr();
        var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
        s = s.redIAdd(s);
        var m2 = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
        var t = m2.redSqr().redISub(s).redISub(s);
        nx = t;
        var yyyy8 = yyyy.redIAdd(yyyy);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        yyyy8 = yyyy8.redIAdd(yyyy8);
        ny = m2.redMul(s.redISub(t)).redISub(yyyy8);
        nz = this.y.redAdd(this.y);
      } else {
        var delta = this.z.redSqr();
        var gamma = this.y.redSqr();
        var beta = this.x.redMul(gamma);
        var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
        alpha = alpha.redAdd(alpha).redIAdd(alpha);
        var beta4 = beta.redIAdd(beta);
        beta4 = beta4.redIAdd(beta4);
        var beta8 = beta4.redAdd(beta4);
        nx = alpha.redSqr().redISub(beta8);
        nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
        var ggamma8 = gamma.redSqr();
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ggamma8 = ggamma8.redIAdd(ggamma8);
        ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
      }
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype._dbl = function _dbl() {
      var a2 = this.curve.a;
      var jx = this.x;
      var jy = this.y;
      var jz = this.z;
      var jz4 = jz.redSqr().redSqr();
      var jx2 = jx.redSqr();
      var jy2 = jy.redSqr();
      var c2 = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a2.redMul(jz4));
      var jxd4 = jx.redAdd(jx);
      jxd4 = jxd4.redIAdd(jxd4);
      var t1 = jxd4.redMul(jy2);
      var nx = c2.redSqr().redISub(t1.redAdd(t1));
      var t2 = t1.redISub(nx);
      var jyd8 = jy2.redSqr();
      jyd8 = jyd8.redIAdd(jyd8);
      jyd8 = jyd8.redIAdd(jyd8);
      jyd8 = jyd8.redIAdd(jyd8);
      var ny = c2.redMul(t2).redISub(jyd8);
      var nz = jy.redAdd(jy).redMul(jz);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.trpl = function trpl() {
      if (!this.curve.zeroA)
        return this.dbl().add(this);
      var xx = this.x.redSqr();
      var yy = this.y.redSqr();
      var zz = this.z.redSqr();
      var yyyy = yy.redSqr();
      var m2 = xx.redAdd(xx).redIAdd(xx);
      var mm = m2.redSqr();
      var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
      e = e.redIAdd(e);
      e = e.redAdd(e).redIAdd(e);
      e = e.redISub(mm);
      var ee3 = e.redSqr();
      var t = yyyy.redIAdd(yyyy);
      t = t.redIAdd(t);
      t = t.redIAdd(t);
      t = t.redIAdd(t);
      var u3 = m2.redIAdd(e).redSqr().redISub(mm).redISub(ee3).redISub(t);
      var yyu4 = yy.redMul(u3);
      yyu4 = yyu4.redIAdd(yyu4);
      yyu4 = yyu4.redIAdd(yyu4);
      var nx = this.x.redMul(ee3).redISub(yyu4);
      nx = nx.redIAdd(nx);
      nx = nx.redIAdd(nx);
      var ny = this.y.redMul(u3.redMul(t.redISub(u3)).redISub(e.redMul(ee3)));
      ny = ny.redIAdd(ny);
      ny = ny.redIAdd(ny);
      ny = ny.redIAdd(ny);
      var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee3);
      return this.curve.jpoint(nx, ny, nz);
    };
    JPoint.prototype.mul = function mul(k2, kbase) {
      k2 = new BN(k2, kbase);
      return this.curve._wnafMul(this, k2);
    };
    JPoint.prototype.eq = function eq(p3) {
      if (p3.type === "affine")
        return this.eq(p3.toJ());
      if (this === p3)
        return true;
      var z22 = this.z.redSqr();
      var pz2 = p3.z.redSqr();
      if (this.x.redMul(pz2).redISub(p3.x.redMul(z22)).cmpn(0) !== 0)
        return false;
      var z32 = z22.redMul(this.z);
      var pz3 = pz2.redMul(p3.z);
      return this.y.redMul(pz3).redISub(p3.y.redMul(z32)).cmpn(0) === 0;
    };
    JPoint.prototype.eqXToP = function eqXToP(x4) {
      var zs3 = this.z.redSqr();
      var rx = x4.toRed(this.curve.red).redMul(zs3);
      if (this.x.cmp(rx) === 0)
        return true;
      var xc = x4.clone();
      var t = this.curve.redN.redMul(zs3);
      for (; ; ) {
        xc.iadd(this.curve.n);
        if (xc.cmp(this.curve.p) >= 0)
          return false;
        rx.redIAdd(t);
        if (this.x.cmp(rx) === 0)
          return true;
      }
    };
    JPoint.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC JPoint Infinity>";
      return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
    };
    JPoint.prototype.isInfinity = function isInfinity() {
      return this.z.cmpn(0) === 0;
    };
  }
});

// node_modules/elliptic/lib/elliptic/curve/mont.js
var require_mont = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/mont.js"(exports, module) {
    "use strict";
    var BN = require_bn();
    var inherits = require_inherits_browser();
    var Base = require_base();
    var utils = require_utils2();
    function MontCurve(conf) {
      Base.call(this, "mont", conf);
      this.a = new BN(conf.a, 16).toRed(this.red);
      this.b = new BN(conf.b, 16).toRed(this.red);
      this.i4 = new BN(4).toRed(this.red).redInvm();
      this.two = new BN(2).toRed(this.red);
      this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }
    inherits(MontCurve, Base);
    module.exports = MontCurve;
    MontCurve.prototype.validate = function validate(point) {
      var x4 = point.normalize().x;
      var x22 = x4.redSqr();
      var rhs = x22.redMul(x4).redAdd(x22.redMul(this.a)).redAdd(x4);
      var y5 = rhs.redSqrt();
      return y5.redSqr().cmp(rhs) === 0;
    };
    function Point(curve, x4, z4) {
      Base.BasePoint.call(this, curve, "projective");
      if (x4 === null && z4 === null) {
        this.x = this.curve.one;
        this.z = this.curve.zero;
      } else {
        this.x = new BN(x4, 16);
        this.z = new BN(z4, 16);
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.z.red)
          this.z = this.z.toRed(this.curve.red);
      }
    }
    inherits(Point, Base.BasePoint);
    MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
      return this.point(utils.toArray(bytes, enc), 1);
    };
    MontCurve.prototype.point = function point(x4, z4) {
      return new Point(this, x4, z4);
    };
    MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
      return Point.fromJSON(this, obj);
    };
    Point.prototype.precompute = function precompute() {
    };
    Point.prototype._encode = function _encode() {
      return this.getX().toArray("be", this.curve.p.byteLength());
    };
    Point.fromJSON = function fromJSON(curve, obj) {
      return new Point(curve, obj[0], obj[1] || curve.one);
    };
    Point.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    };
    Point.prototype.isInfinity = function isInfinity() {
      return this.z.cmpn(0) === 0;
    };
    Point.prototype.dbl = function dbl() {
      var a2 = this.x.redAdd(this.z);
      var aa2 = a2.redSqr();
      var b3 = this.x.redSub(this.z);
      var bb = b3.redSqr();
      var c2 = aa2.redSub(bb);
      var nx = aa2.redMul(bb);
      var nz = c2.redMul(bb.redAdd(this.curve.a24.redMul(c2)));
      return this.curve.point(nx, nz);
    };
    Point.prototype.add = function add() {
      throw new Error("Not supported on Montgomery curve");
    };
    Point.prototype.diffAdd = function diffAdd(p3, diff) {
      var a2 = this.x.redAdd(this.z);
      var b3 = this.x.redSub(this.z);
      var c2 = p3.x.redAdd(p3.z);
      var d2 = p3.x.redSub(p3.z);
      var da2 = d2.redMul(a2);
      var cb = c2.redMul(b3);
      var nx = diff.z.redMul(da2.redAdd(cb).redSqr());
      var nz = diff.x.redMul(da2.redISub(cb).redSqr());
      return this.curve.point(nx, nz);
    };
    Point.prototype.mul = function mul(k2) {
      var t = k2.clone();
      var a2 = this;
      var b3 = this.curve.point(null, null);
      var c2 = this;
      for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
        bits.push(t.andln(1));
      for (var i3 = bits.length - 1; i3 >= 0; i3--) {
        if (bits[i3] === 0) {
          a2 = a2.diffAdd(b3, c2);
          b3 = b3.dbl();
        } else {
          b3 = a2.diffAdd(b3, c2);
          a2 = a2.dbl();
        }
      }
      return b3;
    };
    Point.prototype.mulAdd = function mulAdd() {
      throw new Error("Not supported on Montgomery curve");
    };
    Point.prototype.jumlAdd = function jumlAdd() {
      throw new Error("Not supported on Montgomery curve");
    };
    Point.prototype.eq = function eq(other) {
      return this.getX().cmp(other.getX()) === 0;
    };
    Point.prototype.normalize = function normalize() {
      this.x = this.x.redMul(this.z.redInvm());
      this.z = this.curve.one;
      return this;
    };
    Point.prototype.getX = function getX() {
      this.normalize();
      return this.x.fromRed();
    };
  }
});

// node_modules/elliptic/lib/elliptic/curve/edwards.js
var require_edwards = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/edwards.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var BN = require_bn();
    var inherits = require_inherits_browser();
    var Base = require_base();
    var assert = utils.assert;
    function EdwardsCurve(conf) {
      this.twisted = (conf.a | 0) !== 1;
      this.mOneA = this.twisted && (conf.a | 0) === -1;
      this.extended = this.mOneA;
      Base.call(this, "edwards", conf);
      this.a = new BN(conf.a, 16).umod(this.red.m);
      this.a = this.a.toRed(this.red);
      this.c = new BN(conf.c, 16).toRed(this.red);
      this.c2 = this.c.redSqr();
      this.d = new BN(conf.d, 16).toRed(this.red);
      this.dd = this.d.redAdd(this.d);
      assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
      this.oneC = (conf.c | 0) === 1;
    }
    inherits(EdwardsCurve, Base);
    module.exports = EdwardsCurve;
    EdwardsCurve.prototype._mulA = function _mulA(num) {
      if (this.mOneA)
        return num.redNeg();
      else
        return this.a.redMul(num);
    };
    EdwardsCurve.prototype._mulC = function _mulC(num) {
      if (this.oneC)
        return num;
      else
        return this.c.redMul(num);
    };
    EdwardsCurve.prototype.jpoint = function jpoint(x4, y5, z4, t) {
      return this.point(x4, y5, z4, t);
    };
    EdwardsCurve.prototype.pointFromX = function pointFromX(x4, odd) {
      x4 = new BN(x4, 16);
      if (!x4.red)
        x4 = x4.toRed(this.red);
      var x22 = x4.redSqr();
      var rhs = this.c2.redSub(this.a.redMul(x22));
      var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x22));
      var y22 = rhs.redMul(lhs.redInvm());
      var y5 = y22.redSqrt();
      if (y5.redSqr().redSub(y22).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      var isOdd = y5.fromRed().isOdd();
      if (odd && !isOdd || !odd && isOdd)
        y5 = y5.redNeg();
      return this.point(x4, y5);
    };
    EdwardsCurve.prototype.pointFromY = function pointFromY(y5, odd) {
      y5 = new BN(y5, 16);
      if (!y5.red)
        y5 = y5.toRed(this.red);
      var y22 = y5.redSqr();
      var lhs = y22.redSub(this.c2);
      var rhs = y22.redMul(this.d).redMul(this.c2).redSub(this.a);
      var x22 = lhs.redMul(rhs.redInvm());
      if (x22.cmp(this.zero) === 0) {
        if (odd)
          throw new Error("invalid point");
        else
          return this.point(this.zero, y5);
      }
      var x4 = x22.redSqrt();
      if (x4.redSqr().redSub(x22).cmp(this.zero) !== 0)
        throw new Error("invalid point");
      if (x4.fromRed().isOdd() !== odd)
        x4 = x4.redNeg();
      return this.point(x4, y5);
    };
    EdwardsCurve.prototype.validate = function validate(point) {
      if (point.isInfinity())
        return true;
      point.normalize();
      var x22 = point.x.redSqr();
      var y22 = point.y.redSqr();
      var lhs = x22.redMul(this.a).redAdd(y22);
      var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x22).redMul(y22)));
      return lhs.cmp(rhs) === 0;
    };
    function Point(curve, x4, y5, z4, t) {
      Base.BasePoint.call(this, curve, "projective");
      if (x4 === null && y5 === null && z4 === null) {
        this.x = this.curve.zero;
        this.y = this.curve.one;
        this.z = this.curve.one;
        this.t = this.curve.zero;
        this.zOne = true;
      } else {
        this.x = new BN(x4, 16);
        this.y = new BN(y5, 16);
        this.z = z4 ? new BN(z4, 16) : this.curve.one;
        this.t = t && new BN(t, 16);
        if (!this.x.red)
          this.x = this.x.toRed(this.curve.red);
        if (!this.y.red)
          this.y = this.y.toRed(this.curve.red);
        if (!this.z.red)
          this.z = this.z.toRed(this.curve.red);
        if (this.t && !this.t.red)
          this.t = this.t.toRed(this.curve.red);
        this.zOne = this.z === this.curve.one;
        if (this.curve.extended && !this.t) {
          this.t = this.x.redMul(this.y);
          if (!this.zOne)
            this.t = this.t.redMul(this.z.redInvm());
        }
      }
    }
    inherits(Point, Base.BasePoint);
    EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
      return Point.fromJSON(this, obj);
    };
    EdwardsCurve.prototype.point = function point(x4, y5, z4, t) {
      return new Point(this, x4, y5, z4, t);
    };
    Point.fromJSON = function fromJSON(curve, obj) {
      return new Point(curve, obj[0], obj[1], obj[2]);
    };
    Point.prototype.inspect = function inspect() {
      if (this.isInfinity())
        return "<EC Point Infinity>";
      return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    };
    Point.prototype.isInfinity = function isInfinity() {
      return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
    };
    Point.prototype._extDbl = function _extDbl() {
      var a2 = this.x.redSqr();
      var b3 = this.y.redSqr();
      var c2 = this.z.redSqr();
      c2 = c2.redIAdd(c2);
      var d2 = this.curve._mulA(a2);
      var e = this.x.redAdd(this.y).redSqr().redISub(a2).redISub(b3);
      var g3 = d2.redAdd(b3);
      var f3 = g3.redSub(c2);
      var h3 = d2.redSub(b3);
      var nx = e.redMul(f3);
      var ny = g3.redMul(h3);
      var nt3 = e.redMul(h3);
      var nz = f3.redMul(g3);
      return this.curve.point(nx, ny, nz, nt3);
    };
    Point.prototype._projDbl = function _projDbl() {
      var b3 = this.x.redAdd(this.y).redSqr();
      var c2 = this.x.redSqr();
      var d2 = this.y.redSqr();
      var nx;
      var ny;
      var nz;
      var e;
      var h3;
      var j4;
      if (this.curve.twisted) {
        e = this.curve._mulA(c2);
        var f3 = e.redAdd(d2);
        if (this.zOne) {
          nx = b3.redSub(c2).redSub(d2).redMul(f3.redSub(this.curve.two));
          ny = f3.redMul(e.redSub(d2));
          nz = f3.redSqr().redSub(f3).redSub(f3);
        } else {
          h3 = this.z.redSqr();
          j4 = f3.redSub(h3).redISub(h3);
          nx = b3.redSub(c2).redISub(d2).redMul(j4);
          ny = f3.redMul(e.redSub(d2));
          nz = f3.redMul(j4);
        }
      } else {
        e = c2.redAdd(d2);
        h3 = this.curve._mulC(this.z).redSqr();
        j4 = e.redSub(h3).redSub(h3);
        nx = this.curve._mulC(b3.redISub(e)).redMul(j4);
        ny = this.curve._mulC(e).redMul(c2.redISub(d2));
        nz = e.redMul(j4);
      }
      return this.curve.point(nx, ny, nz);
    };
    Point.prototype.dbl = function dbl() {
      if (this.isInfinity())
        return this;
      if (this.curve.extended)
        return this._extDbl();
      else
        return this._projDbl();
    };
    Point.prototype._extAdd = function _extAdd(p3) {
      var a2 = this.y.redSub(this.x).redMul(p3.y.redSub(p3.x));
      var b3 = this.y.redAdd(this.x).redMul(p3.y.redAdd(p3.x));
      var c2 = this.t.redMul(this.curve.dd).redMul(p3.t);
      var d2 = this.z.redMul(p3.z.redAdd(p3.z));
      var e = b3.redSub(a2);
      var f3 = d2.redSub(c2);
      var g3 = d2.redAdd(c2);
      var h3 = b3.redAdd(a2);
      var nx = e.redMul(f3);
      var ny = g3.redMul(h3);
      var nt3 = e.redMul(h3);
      var nz = f3.redMul(g3);
      return this.curve.point(nx, ny, nz, nt3);
    };
    Point.prototype._projAdd = function _projAdd(p3) {
      var a2 = this.z.redMul(p3.z);
      var b3 = a2.redSqr();
      var c2 = this.x.redMul(p3.x);
      var d2 = this.y.redMul(p3.y);
      var e = this.curve.d.redMul(c2).redMul(d2);
      var f3 = b3.redSub(e);
      var g3 = b3.redAdd(e);
      var tmp = this.x.redAdd(this.y).redMul(p3.x.redAdd(p3.y)).redISub(c2).redISub(d2);
      var nx = a2.redMul(f3).redMul(tmp);
      var ny;
      var nz;
      if (this.curve.twisted) {
        ny = a2.redMul(g3).redMul(d2.redSub(this.curve._mulA(c2)));
        nz = f3.redMul(g3);
      } else {
        ny = a2.redMul(g3).redMul(d2.redSub(c2));
        nz = this.curve._mulC(f3).redMul(g3);
      }
      return this.curve.point(nx, ny, nz);
    };
    Point.prototype.add = function add(p3) {
      if (this.isInfinity())
        return p3;
      if (p3.isInfinity())
        return this;
      if (this.curve.extended)
        return this._extAdd(p3);
      else
        return this._projAdd(p3);
    };
    Point.prototype.mul = function mul(k2) {
      if (this._hasDoubles(k2))
        return this.curve._fixedNafMul(this, k2);
      else
        return this.curve._wnafMul(this, k2);
    };
    Point.prototype.mulAdd = function mulAdd(k1, p3, k2) {
      return this.curve._wnafMulAdd(1, [this, p3], [k1, k2], 2, false);
    };
    Point.prototype.jmulAdd = function jmulAdd(k1, p3, k2) {
      return this.curve._wnafMulAdd(1, [this, p3], [k1, k2], 2, true);
    };
    Point.prototype.normalize = function normalize() {
      if (this.zOne)
        return this;
      var zi2 = this.z.redInvm();
      this.x = this.x.redMul(zi2);
      this.y = this.y.redMul(zi2);
      if (this.t)
        this.t = this.t.redMul(zi2);
      this.z = this.curve.one;
      this.zOne = true;
      return this;
    };
    Point.prototype.neg = function neg() {
      return this.curve.point(
        this.x.redNeg(),
        this.y,
        this.z,
        this.t && this.t.redNeg()
      );
    };
    Point.prototype.getX = function getX() {
      this.normalize();
      return this.x.fromRed();
    };
    Point.prototype.getY = function getY() {
      this.normalize();
      return this.y.fromRed();
    };
    Point.prototype.eq = function eq(other) {
      return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
    };
    Point.prototype.eqXToP = function eqXToP(x4) {
      var rx = x4.toRed(this.curve.red).redMul(this.z);
      if (this.x.cmp(rx) === 0)
        return true;
      var xc = x4.clone();
      var t = this.curve.redN.redMul(this.z);
      for (; ; ) {
        xc.iadd(this.curve.n);
        if (xc.cmp(this.curve.p) >= 0)
          return false;
        rx.redIAdd(t);
        if (this.x.cmp(rx) === 0)
          return true;
      }
    };
    Point.prototype.toP = Point.prototype.normalize;
    Point.prototype.mixedAdd = Point.prototype.add;
  }
});

// node_modules/elliptic/lib/elliptic/curve/index.js
var require_curve = __commonJS({
  "node_modules/elliptic/lib/elliptic/curve/index.js"(exports) {
    "use strict";
    var curve = exports;
    curve.base = require_base();
    curve.short = require_short();
    curve.mont = require_mont();
    curve.edwards = require_edwards();
  }
});

// node_modules/hash.js/lib/hash/utils.js
var require_utils3 = __commonJS({
  "node_modules/hash.js/lib/hash/utils.js"(exports) {
    "use strict";
    var assert = require_minimalistic_assert();
    var inherits = require_inherits_browser();
    exports.inherits = inherits;
    function isSurrogatePair(msg, i3) {
      if ((msg.charCodeAt(i3) & 64512) !== 55296) {
        return false;
      }
      if (i3 < 0 || i3 + 1 >= msg.length) {
        return false;
      }
      return (msg.charCodeAt(i3 + 1) & 64512) === 56320;
    }
    function toArray(msg, enc) {
      if (Array.isArray(msg))
        return msg.slice();
      if (!msg)
        return [];
      var res = [];
      if (typeof msg === "string") {
        if (!enc) {
          var p3 = 0;
          for (var i3 = 0; i3 < msg.length; i3++) {
            var c2 = msg.charCodeAt(i3);
            if (c2 < 128) {
              res[p3++] = c2;
            } else if (c2 < 2048) {
              res[p3++] = c2 >> 6 | 192;
              res[p3++] = c2 & 63 | 128;
            } else if (isSurrogatePair(msg, i3)) {
              c2 = 65536 + ((c2 & 1023) << 10) + (msg.charCodeAt(++i3) & 1023);
              res[p3++] = c2 >> 18 | 240;
              res[p3++] = c2 >> 12 & 63 | 128;
              res[p3++] = c2 >> 6 & 63 | 128;
              res[p3++] = c2 & 63 | 128;
            } else {
              res[p3++] = c2 >> 12 | 224;
              res[p3++] = c2 >> 6 & 63 | 128;
              res[p3++] = c2 & 63 | 128;
            }
          }
        } else if (enc === "hex") {
          msg = msg.replace(/[^a-z0-9]+/ig, "");
          if (msg.length % 2 !== 0)
            msg = "0" + msg;
          for (i3 = 0; i3 < msg.length; i3 += 2)
            res.push(parseInt(msg[i3] + msg[i3 + 1], 16));
        }
      } else {
        for (i3 = 0; i3 < msg.length; i3++)
          res[i3] = msg[i3] | 0;
      }
      return res;
    }
    exports.toArray = toArray;
    function toHex(msg) {
      var res = "";
      for (var i3 = 0; i3 < msg.length; i3++)
        res += zero2(msg[i3].toString(16));
      return res;
    }
    exports.toHex = toHex;
    function htonl(w2) {
      var res = w2 >>> 24 | w2 >>> 8 & 65280 | w2 << 8 & 16711680 | (w2 & 255) << 24;
      return res >>> 0;
    }
    exports.htonl = htonl;
    function toHex32(msg, endian) {
      var res = "";
      for (var i3 = 0; i3 < msg.length; i3++) {
        var w2 = msg[i3];
        if (endian === "little")
          w2 = htonl(w2);
        res += zero8(w2.toString(16));
      }
      return res;
    }
    exports.toHex32 = toHex32;
    function zero2(word) {
      if (word.length === 1)
        return "0" + word;
      else
        return word;
    }
    exports.zero2 = zero2;
    function zero8(word) {
      if (word.length === 7)
        return "0" + word;
      else if (word.length === 6)
        return "00" + word;
      else if (word.length === 5)
        return "000" + word;
      else if (word.length === 4)
        return "0000" + word;
      else if (word.length === 3)
        return "00000" + word;
      else if (word.length === 2)
        return "000000" + word;
      else if (word.length === 1)
        return "0000000" + word;
      else
        return word;
    }
    exports.zero8 = zero8;
    function join32(msg, start, end, endian) {
      var len = end - start;
      assert(len % 4 === 0);
      var res = new Array(len / 4);
      for (var i3 = 0, k2 = start; i3 < res.length; i3++, k2 += 4) {
        var w2;
        if (endian === "big")
          w2 = msg[k2] << 24 | msg[k2 + 1] << 16 | msg[k2 + 2] << 8 | msg[k2 + 3];
        else
          w2 = msg[k2 + 3] << 24 | msg[k2 + 2] << 16 | msg[k2 + 1] << 8 | msg[k2];
        res[i3] = w2 >>> 0;
      }
      return res;
    }
    exports.join32 = join32;
    function split32(msg, endian) {
      var res = new Array(msg.length * 4);
      for (var i3 = 0, k2 = 0; i3 < msg.length; i3++, k2 += 4) {
        var m2 = msg[i3];
        if (endian === "big") {
          res[k2] = m2 >>> 24;
          res[k2 + 1] = m2 >>> 16 & 255;
          res[k2 + 2] = m2 >>> 8 & 255;
          res[k2 + 3] = m2 & 255;
        } else {
          res[k2 + 3] = m2 >>> 24;
          res[k2 + 2] = m2 >>> 16 & 255;
          res[k2 + 1] = m2 >>> 8 & 255;
          res[k2] = m2 & 255;
        }
      }
      return res;
    }
    exports.split32 = split32;
    function rotr32(w2, b3) {
      return w2 >>> b3 | w2 << 32 - b3;
    }
    exports.rotr32 = rotr32;
    function rotl32(w2, b3) {
      return w2 << b3 | w2 >>> 32 - b3;
    }
    exports.rotl32 = rotl32;
    function sum32(a2, b3) {
      return a2 + b3 >>> 0;
    }
    exports.sum32 = sum32;
    function sum32_3(a2, b3, c2) {
      return a2 + b3 + c2 >>> 0;
    }
    exports.sum32_3 = sum32_3;
    function sum32_4(a2, b3, c2, d2) {
      return a2 + b3 + c2 + d2 >>> 0;
    }
    exports.sum32_4 = sum32_4;
    function sum32_5(a2, b3, c2, d2, e) {
      return a2 + b3 + c2 + d2 + e >>> 0;
    }
    exports.sum32_5 = sum32_5;
    function sum64(buf, pos, ah, al) {
      var bh2 = buf[pos];
      var bl = buf[pos + 1];
      var lo2 = al + bl >>> 0;
      var hi2 = (lo2 < al ? 1 : 0) + ah + bh2;
      buf[pos] = hi2 >>> 0;
      buf[pos + 1] = lo2;
    }
    exports.sum64 = sum64;
    function sum64_hi(ah, al, bh2, bl) {
      var lo2 = al + bl >>> 0;
      var hi2 = (lo2 < al ? 1 : 0) + ah + bh2;
      return hi2 >>> 0;
    }
    exports.sum64_hi = sum64_hi;
    function sum64_lo(ah, al, bh2, bl) {
      var lo2 = al + bl;
      return lo2 >>> 0;
    }
    exports.sum64_lo = sum64_lo;
    function sum64_4_hi(ah, al, bh2, bl, ch2, cl, dh2, dl) {
      var carry = 0;
      var lo2 = al;
      lo2 = lo2 + bl >>> 0;
      carry += lo2 < al ? 1 : 0;
      lo2 = lo2 + cl >>> 0;
      carry += lo2 < cl ? 1 : 0;
      lo2 = lo2 + dl >>> 0;
      carry += lo2 < dl ? 1 : 0;
      var hi2 = ah + bh2 + ch2 + dh2 + carry;
      return hi2 >>> 0;
    }
    exports.sum64_4_hi = sum64_4_hi;
    function sum64_4_lo(ah, al, bh2, bl, ch2, cl, dh2, dl) {
      var lo2 = al + bl + cl + dl;
      return lo2 >>> 0;
    }
    exports.sum64_4_lo = sum64_4_lo;
    function sum64_5_hi(ah, al, bh2, bl, ch2, cl, dh2, dl, eh, el) {
      var carry = 0;
      var lo2 = al;
      lo2 = lo2 + bl >>> 0;
      carry += lo2 < al ? 1 : 0;
      lo2 = lo2 + cl >>> 0;
      carry += lo2 < cl ? 1 : 0;
      lo2 = lo2 + dl >>> 0;
      carry += lo2 < dl ? 1 : 0;
      lo2 = lo2 + el >>> 0;
      carry += lo2 < el ? 1 : 0;
      var hi2 = ah + bh2 + ch2 + dh2 + eh + carry;
      return hi2 >>> 0;
    }
    exports.sum64_5_hi = sum64_5_hi;
    function sum64_5_lo(ah, al, bh2, bl, ch2, cl, dh2, dl, eh, el) {
      var lo2 = al + bl + cl + dl + el;
      return lo2 >>> 0;
    }
    exports.sum64_5_lo = sum64_5_lo;
    function rotr64_hi(ah, al, num) {
      var r2 = al << 32 - num | ah >>> num;
      return r2 >>> 0;
    }
    exports.rotr64_hi = rotr64_hi;
    function rotr64_lo(ah, al, num) {
      var r2 = ah << 32 - num | al >>> num;
      return r2 >>> 0;
    }
    exports.rotr64_lo = rotr64_lo;
    function shr64_hi(ah, al, num) {
      return ah >>> num;
    }
    exports.shr64_hi = shr64_hi;
    function shr64_lo(ah, al, num) {
      var r2 = ah << 32 - num | al >>> num;
      return r2 >>> 0;
    }
    exports.shr64_lo = shr64_lo;
  }
});

// node_modules/hash.js/lib/hash/common.js
var require_common = __commonJS({
  "node_modules/hash.js/lib/hash/common.js"(exports) {
    "use strict";
    var utils = require_utils3();
    var assert = require_minimalistic_assert();
    function BlockHash() {
      this.pending = null;
      this.pendingTotal = 0;
      this.blockSize = this.constructor.blockSize;
      this.outSize = this.constructor.outSize;
      this.hmacStrength = this.constructor.hmacStrength;
      this.padLength = this.constructor.padLength / 8;
      this.endian = "big";
      this._delta8 = this.blockSize / 8;
      this._delta32 = this.blockSize / 32;
    }
    exports.BlockHash = BlockHash;
    BlockHash.prototype.update = function update(msg, enc) {
      msg = utils.toArray(msg, enc);
      if (!this.pending)
        this.pending = msg;
      else
        this.pending = this.pending.concat(msg);
      this.pendingTotal += msg.length;
      if (this.pending.length >= this._delta8) {
        msg = this.pending;
        var r2 = msg.length % this._delta8;
        this.pending = msg.slice(msg.length - r2, msg.length);
        if (this.pending.length === 0)
          this.pending = null;
        msg = utils.join32(msg, 0, msg.length - r2, this.endian);
        for (var i3 = 0; i3 < msg.length; i3 += this._delta32)
          this._update(msg, i3, i3 + this._delta32);
      }
      return this;
    };
    BlockHash.prototype.digest = function digest(enc) {
      this.update(this._pad());
      assert(this.pending === null);
      return this._digest(enc);
    };
    BlockHash.prototype._pad = function pad() {
      var len = this.pendingTotal;
      var bytes = this._delta8;
      var k2 = bytes - (len + this.padLength) % bytes;
      var res = new Array(k2 + this.padLength);
      res[0] = 128;
      for (var i3 = 1; i3 < k2; i3++)
        res[i3] = 0;
      len <<= 3;
      if (this.endian === "big") {
        for (var t = 8; t < this.padLength; t++)
          res[i3++] = 0;
        res[i3++] = 0;
        res[i3++] = 0;
        res[i3++] = 0;
        res[i3++] = 0;
        res[i3++] = len >>> 24 & 255;
        res[i3++] = len >>> 16 & 255;
        res[i3++] = len >>> 8 & 255;
        res[i3++] = len & 255;
      } else {
        res[i3++] = len & 255;
        res[i3++] = len >>> 8 & 255;
        res[i3++] = len >>> 16 & 255;
        res[i3++] = len >>> 24 & 255;
        res[i3++] = 0;
        res[i3++] = 0;
        res[i3++] = 0;
        res[i3++] = 0;
        for (t = 8; t < this.padLength; t++)
          res[i3++] = 0;
      }
      return res;
    };
  }
});

// node_modules/hash.js/lib/hash/sha/common.js
var require_common2 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/common.js"(exports) {
    "use strict";
    var utils = require_utils3();
    var rotr32 = utils.rotr32;
    function ft_1(s, x4, y5, z4) {
      if (s === 0)
        return ch32(x4, y5, z4);
      if (s === 1 || s === 3)
        return p32(x4, y5, z4);
      if (s === 2)
        return maj32(x4, y5, z4);
    }
    exports.ft_1 = ft_1;
    function ch32(x4, y5, z4) {
      return x4 & y5 ^ ~x4 & z4;
    }
    exports.ch32 = ch32;
    function maj32(x4, y5, z4) {
      return x4 & y5 ^ x4 & z4 ^ y5 & z4;
    }
    exports.maj32 = maj32;
    function p32(x4, y5, z4) {
      return x4 ^ y5 ^ z4;
    }
    exports.p32 = p32;
    function s0_256(x4) {
      return rotr32(x4, 2) ^ rotr32(x4, 13) ^ rotr32(x4, 22);
    }
    exports.s0_256 = s0_256;
    function s1_256(x4) {
      return rotr32(x4, 6) ^ rotr32(x4, 11) ^ rotr32(x4, 25);
    }
    exports.s1_256 = s1_256;
    function g0_256(x4) {
      return rotr32(x4, 7) ^ rotr32(x4, 18) ^ x4 >>> 3;
    }
    exports.g0_256 = g0_256;
    function g1_256(x4) {
      return rotr32(x4, 17) ^ rotr32(x4, 19) ^ x4 >>> 10;
    }
    exports.g1_256 = g1_256;
  }
});

// node_modules/hash.js/lib/hash/sha/1.js
var require__ = __commonJS({
  "node_modules/hash.js/lib/hash/sha/1.js"(exports, module) {
    "use strict";
    var utils = require_utils3();
    var common = require_common();
    var shaCommon = require_common2();
    var rotl32 = utils.rotl32;
    var sum32 = utils.sum32;
    var sum32_5 = utils.sum32_5;
    var ft_1 = shaCommon.ft_1;
    var BlockHash = common.BlockHash;
    var sha1_K = [
      1518500249,
      1859775393,
      2400959708,
      3395469782
    ];
    function SHA1() {
      if (!(this instanceof SHA1))
        return new SHA1();
      BlockHash.call(this);
      this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
      ];
      this.W = new Array(80);
    }
    utils.inherits(SHA1, BlockHash);
    module.exports = SHA1;
    SHA1.blockSize = 512;
    SHA1.outSize = 160;
    SHA1.hmacStrength = 80;
    SHA1.padLength = 64;
    SHA1.prototype._update = function _update(msg, start) {
      var W = this.W;
      for (var i3 = 0; i3 < 16; i3++)
        W[i3] = msg[start + i3];
      for (; i3 < W.length; i3++)
        W[i3] = rotl32(W[i3 - 3] ^ W[i3 - 8] ^ W[i3 - 14] ^ W[i3 - 16], 1);
      var a2 = this.h[0];
      var b3 = this.h[1];
      var c2 = this.h[2];
      var d2 = this.h[3];
      var e = this.h[4];
      for (i3 = 0; i3 < W.length; i3++) {
        var s = ~~(i3 / 20);
        var t = sum32_5(rotl32(a2, 5), ft_1(s, b3, c2, d2), e, W[i3], sha1_K[s]);
        e = d2;
        d2 = c2;
        c2 = rotl32(b3, 30);
        b3 = a2;
        a2 = t;
      }
      this.h[0] = sum32(this.h[0], a2);
      this.h[1] = sum32(this.h[1], b3);
      this.h[2] = sum32(this.h[2], c2);
      this.h[3] = sum32(this.h[3], d2);
      this.h[4] = sum32(this.h[4], e);
    };
    SHA1.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha/256.js
var require__2 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/256.js"(exports, module) {
    "use strict";
    var utils = require_utils3();
    var common = require_common();
    var shaCommon = require_common2();
    var assert = require_minimalistic_assert();
    var sum32 = utils.sum32;
    var sum32_4 = utils.sum32_4;
    var sum32_5 = utils.sum32_5;
    var ch32 = shaCommon.ch32;
    var maj32 = shaCommon.maj32;
    var s0_256 = shaCommon.s0_256;
    var s1_256 = shaCommon.s1_256;
    var g0_256 = shaCommon.g0_256;
    var g1_256 = shaCommon.g1_256;
    var BlockHash = common.BlockHash;
    var sha256_K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    function SHA256() {
      if (!(this instanceof SHA256))
        return new SHA256();
      BlockHash.call(this);
      this.h = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ];
      this.k = sha256_K;
      this.W = new Array(64);
    }
    utils.inherits(SHA256, BlockHash);
    module.exports = SHA256;
    SHA256.blockSize = 512;
    SHA256.outSize = 256;
    SHA256.hmacStrength = 192;
    SHA256.padLength = 64;
    SHA256.prototype._update = function _update(msg, start) {
      var W = this.W;
      for (var i3 = 0; i3 < 16; i3++)
        W[i3] = msg[start + i3];
      for (; i3 < W.length; i3++)
        W[i3] = sum32_4(g1_256(W[i3 - 2]), W[i3 - 7], g0_256(W[i3 - 15]), W[i3 - 16]);
      var a2 = this.h[0];
      var b3 = this.h[1];
      var c2 = this.h[2];
      var d2 = this.h[3];
      var e = this.h[4];
      var f3 = this.h[5];
      var g3 = this.h[6];
      var h3 = this.h[7];
      assert(this.k.length === W.length);
      for (i3 = 0; i3 < W.length; i3++) {
        var T1 = sum32_5(h3, s1_256(e), ch32(e, f3, g3), this.k[i3], W[i3]);
        var T22 = sum32(s0_256(a2), maj32(a2, b3, c2));
        h3 = g3;
        g3 = f3;
        f3 = e;
        e = sum32(d2, T1);
        d2 = c2;
        c2 = b3;
        b3 = a2;
        a2 = sum32(T1, T22);
      }
      this.h[0] = sum32(this.h[0], a2);
      this.h[1] = sum32(this.h[1], b3);
      this.h[2] = sum32(this.h[2], c2);
      this.h[3] = sum32(this.h[3], d2);
      this.h[4] = sum32(this.h[4], e);
      this.h[5] = sum32(this.h[5], f3);
      this.h[6] = sum32(this.h[6], g3);
      this.h[7] = sum32(this.h[7], h3);
    };
    SHA256.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha/224.js
var require__3 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/224.js"(exports, module) {
    "use strict";
    var utils = require_utils3();
    var SHA256 = require__2();
    function SHA224() {
      if (!(this instanceof SHA224))
        return new SHA224();
      SHA256.call(this);
      this.h = [
        3238371032,
        914150663,
        812702999,
        4144912697,
        4290775857,
        1750603025,
        1694076839,
        3204075428
      ];
    }
    utils.inherits(SHA224, SHA256);
    module.exports = SHA224;
    SHA224.blockSize = 512;
    SHA224.outSize = 224;
    SHA224.hmacStrength = 192;
    SHA224.padLength = 64;
    SHA224.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h.slice(0, 7), "big");
      else
        return utils.split32(this.h.slice(0, 7), "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha/512.js
var require__4 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/512.js"(exports, module) {
    "use strict";
    var utils = require_utils3();
    var common = require_common();
    var assert = require_minimalistic_assert();
    var rotr64_hi = utils.rotr64_hi;
    var rotr64_lo = utils.rotr64_lo;
    var shr64_hi = utils.shr64_hi;
    var shr64_lo = utils.shr64_lo;
    var sum64 = utils.sum64;
    var sum64_hi = utils.sum64_hi;
    var sum64_lo = utils.sum64_lo;
    var sum64_4_hi = utils.sum64_4_hi;
    var sum64_4_lo = utils.sum64_4_lo;
    var sum64_5_hi = utils.sum64_5_hi;
    var sum64_5_lo = utils.sum64_5_lo;
    var BlockHash = common.BlockHash;
    var sha512_K = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    function SHA512() {
      if (!(this instanceof SHA512))
        return new SHA512();
      BlockHash.call(this);
      this.h = [
        1779033703,
        4089235720,
        3144134277,
        2227873595,
        1013904242,
        4271175723,
        2773480762,
        1595750129,
        1359893119,
        2917565137,
        2600822924,
        725511199,
        528734635,
        4215389547,
        1541459225,
        327033209
      ];
      this.k = sha512_K;
      this.W = new Array(160);
    }
    utils.inherits(SHA512, BlockHash);
    module.exports = SHA512;
    SHA512.blockSize = 1024;
    SHA512.outSize = 512;
    SHA512.hmacStrength = 192;
    SHA512.padLength = 128;
    SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
      var W = this.W;
      for (var i3 = 0; i3 < 32; i3++)
        W[i3] = msg[start + i3];
      for (; i3 < W.length; i3 += 2) {
        var c0_hi = g1_512_hi(W[i3 - 4], W[i3 - 3]);
        var c0_lo = g1_512_lo(W[i3 - 4], W[i3 - 3]);
        var c1_hi = W[i3 - 14];
        var c1_lo = W[i3 - 13];
        var c2_hi = g0_512_hi(W[i3 - 30], W[i3 - 29]);
        var c2_lo = g0_512_lo(W[i3 - 30], W[i3 - 29]);
        var c3_hi = W[i3 - 32];
        var c3_lo = W[i3 - 31];
        W[i3] = sum64_4_hi(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo
        );
        W[i3 + 1] = sum64_4_lo(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo
        );
      }
    };
    SHA512.prototype._update = function _update(msg, start) {
      this._prepareBlock(msg, start);
      var W = this.W;
      var ah = this.h[0];
      var al = this.h[1];
      var bh2 = this.h[2];
      var bl = this.h[3];
      var ch2 = this.h[4];
      var cl = this.h[5];
      var dh2 = this.h[6];
      var dl = this.h[7];
      var eh = this.h[8];
      var el = this.h[9];
      var fh = this.h[10];
      var fl = this.h[11];
      var gh2 = this.h[12];
      var gl = this.h[13];
      var hh2 = this.h[14];
      var hl = this.h[15];
      assert(this.k.length === W.length);
      for (var i3 = 0; i3 < W.length; i3 += 2) {
        var c0_hi = hh2;
        var c0_lo = hl;
        var c1_hi = s1_512_hi(eh, el);
        var c1_lo = s1_512_lo(eh, el);
        var c2_hi = ch64_hi(eh, el, fh, fl, gh2, gl);
        var c2_lo = ch64_lo(eh, el, fh, fl, gh2, gl);
        var c3_hi = this.k[i3];
        var c3_lo = this.k[i3 + 1];
        var c4_hi = W[i3];
        var c4_lo = W[i3 + 1];
        var T1_hi = sum64_5_hi(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo,
          c4_hi,
          c4_lo
        );
        var T1_lo = sum64_5_lo(
          c0_hi,
          c0_lo,
          c1_hi,
          c1_lo,
          c2_hi,
          c2_lo,
          c3_hi,
          c3_lo,
          c4_hi,
          c4_lo
        );
        c0_hi = s0_512_hi(ah, al);
        c0_lo = s0_512_lo(ah, al);
        c1_hi = maj64_hi(ah, al, bh2, bl, ch2, cl);
        c1_lo = maj64_lo(ah, al, bh2, bl, ch2, cl);
        var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
        var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
        hh2 = gh2;
        hl = gl;
        gh2 = fh;
        gl = fl;
        fh = eh;
        fl = el;
        eh = sum64_hi(dh2, dl, T1_hi, T1_lo);
        el = sum64_lo(dl, dl, T1_hi, T1_lo);
        dh2 = ch2;
        dl = cl;
        ch2 = bh2;
        cl = bl;
        bh2 = ah;
        bl = al;
        ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
        al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
      }
      sum64(this.h, 0, ah, al);
      sum64(this.h, 2, bh2, bl);
      sum64(this.h, 4, ch2, cl);
      sum64(this.h, 6, dh2, dl);
      sum64(this.h, 8, eh, el);
      sum64(this.h, 10, fh, fl);
      sum64(this.h, 12, gh2, gl);
      sum64(this.h, 14, hh2, hl);
    };
    SHA512.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "big");
      else
        return utils.split32(this.h, "big");
    };
    function ch64_hi(xh2, xl, yh2, yl, zh) {
      var r2 = xh2 & yh2 ^ ~xh2 & zh;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function ch64_lo(xh2, xl, yh2, yl, zh, zl) {
      var r2 = xl & yl ^ ~xl & zl;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function maj64_hi(xh2, xl, yh2, yl, zh) {
      var r2 = xh2 & yh2 ^ xh2 & zh ^ yh2 & zh;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function maj64_lo(xh2, xl, yh2, yl, zh, zl) {
      var r2 = xl & yl ^ xl & zl ^ yl & zl;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function s0_512_hi(xh2, xl) {
      var c0_hi = rotr64_hi(xh2, xl, 28);
      var c1_hi = rotr64_hi(xl, xh2, 2);
      var c2_hi = rotr64_hi(xl, xh2, 7);
      var r2 = c0_hi ^ c1_hi ^ c2_hi;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function s0_512_lo(xh2, xl) {
      var c0_lo = rotr64_lo(xh2, xl, 28);
      var c1_lo = rotr64_lo(xl, xh2, 2);
      var c2_lo = rotr64_lo(xl, xh2, 7);
      var r2 = c0_lo ^ c1_lo ^ c2_lo;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function s1_512_hi(xh2, xl) {
      var c0_hi = rotr64_hi(xh2, xl, 14);
      var c1_hi = rotr64_hi(xh2, xl, 18);
      var c2_hi = rotr64_hi(xl, xh2, 9);
      var r2 = c0_hi ^ c1_hi ^ c2_hi;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function s1_512_lo(xh2, xl) {
      var c0_lo = rotr64_lo(xh2, xl, 14);
      var c1_lo = rotr64_lo(xh2, xl, 18);
      var c2_lo = rotr64_lo(xl, xh2, 9);
      var r2 = c0_lo ^ c1_lo ^ c2_lo;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function g0_512_hi(xh2, xl) {
      var c0_hi = rotr64_hi(xh2, xl, 1);
      var c1_hi = rotr64_hi(xh2, xl, 8);
      var c2_hi = shr64_hi(xh2, xl, 7);
      var r2 = c0_hi ^ c1_hi ^ c2_hi;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function g0_512_lo(xh2, xl) {
      var c0_lo = rotr64_lo(xh2, xl, 1);
      var c1_lo = rotr64_lo(xh2, xl, 8);
      var c2_lo = shr64_lo(xh2, xl, 7);
      var r2 = c0_lo ^ c1_lo ^ c2_lo;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function g1_512_hi(xh2, xl) {
      var c0_hi = rotr64_hi(xh2, xl, 19);
      var c1_hi = rotr64_hi(xl, xh2, 29);
      var c2_hi = shr64_hi(xh2, xl, 6);
      var r2 = c0_hi ^ c1_hi ^ c2_hi;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
    function g1_512_lo(xh2, xl) {
      var c0_lo = rotr64_lo(xh2, xl, 19);
      var c1_lo = rotr64_lo(xl, xh2, 29);
      var c2_lo = shr64_lo(xh2, xl, 6);
      var r2 = c0_lo ^ c1_lo ^ c2_lo;
      if (r2 < 0)
        r2 += 4294967296;
      return r2;
    }
  }
});

// node_modules/hash.js/lib/hash/sha/384.js
var require__5 = __commonJS({
  "node_modules/hash.js/lib/hash/sha/384.js"(exports, module) {
    "use strict";
    var utils = require_utils3();
    var SHA512 = require__4();
    function SHA384() {
      if (!(this instanceof SHA384))
        return new SHA384();
      SHA512.call(this);
      this.h = [
        3418070365,
        3238371032,
        1654270250,
        914150663,
        2438529370,
        812702999,
        355462360,
        4144912697,
        1731405415,
        4290775857,
        2394180231,
        1750603025,
        3675008525,
        1694076839,
        1203062813,
        3204075428
      ];
    }
    utils.inherits(SHA384, SHA512);
    module.exports = SHA384;
    SHA384.blockSize = 1024;
    SHA384.outSize = 384;
    SHA384.hmacStrength = 192;
    SHA384.padLength = 128;
    SHA384.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h.slice(0, 12), "big");
      else
        return utils.split32(this.h.slice(0, 12), "big");
    };
  }
});

// node_modules/hash.js/lib/hash/sha.js
var require_sha = __commonJS({
  "node_modules/hash.js/lib/hash/sha.js"(exports) {
    "use strict";
    exports.sha1 = require__();
    exports.sha224 = require__3();
    exports.sha256 = require__2();
    exports.sha384 = require__5();
    exports.sha512 = require__4();
  }
});

// node_modules/hash.js/lib/hash/ripemd.js
var require_ripemd = __commonJS({
  "node_modules/hash.js/lib/hash/ripemd.js"(exports) {
    "use strict";
    var utils = require_utils3();
    var common = require_common();
    var rotl32 = utils.rotl32;
    var sum32 = utils.sum32;
    var sum32_3 = utils.sum32_3;
    var sum32_4 = utils.sum32_4;
    var BlockHash = common.BlockHash;
    function RIPEMD160() {
      if (!(this instanceof RIPEMD160))
        return new RIPEMD160();
      BlockHash.call(this);
      this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      this.endian = "little";
    }
    utils.inherits(RIPEMD160, BlockHash);
    exports.ripemd160 = RIPEMD160;
    RIPEMD160.blockSize = 512;
    RIPEMD160.outSize = 160;
    RIPEMD160.hmacStrength = 192;
    RIPEMD160.padLength = 64;
    RIPEMD160.prototype._update = function update(msg, start) {
      var A3 = this.h[0];
      var B2 = this.h[1];
      var C4 = this.h[2];
      var D3 = this.h[3];
      var E3 = this.h[4];
      var Ah2 = A3;
      var Bh2 = B2;
      var Ch2 = C4;
      var Dh = D3;
      var Eh2 = E3;
      for (var j4 = 0; j4 < 80; j4++) {
        var T3 = sum32(
          rotl32(
            sum32_4(A3, f3(j4, B2, C4, D3), msg[r2[j4] + start], K3(j4)),
            s[j4]
          ),
          E3
        );
        A3 = E3;
        E3 = D3;
        D3 = rotl32(C4, 10);
        C4 = B2;
        B2 = T3;
        T3 = sum32(
          rotl32(
            sum32_4(Ah2, f3(79 - j4, Bh2, Ch2, Dh), msg[rh[j4] + start], Kh(j4)),
            sh[j4]
          ),
          Eh2
        );
        Ah2 = Eh2;
        Eh2 = Dh;
        Dh = rotl32(Ch2, 10);
        Ch2 = Bh2;
        Bh2 = T3;
      }
      T3 = sum32_3(this.h[1], C4, Dh);
      this.h[1] = sum32_3(this.h[2], D3, Eh2);
      this.h[2] = sum32_3(this.h[3], E3, Ah2);
      this.h[3] = sum32_3(this.h[4], A3, Bh2);
      this.h[4] = sum32_3(this.h[0], B2, Ch2);
      this.h[0] = T3;
    };
    RIPEMD160.prototype._digest = function digest(enc) {
      if (enc === "hex")
        return utils.toHex32(this.h, "little");
      else
        return utils.split32(this.h, "little");
    };
    function f3(j4, x4, y5, z4) {
      if (j4 <= 15)
        return x4 ^ y5 ^ z4;
      else if (j4 <= 31)
        return x4 & y5 | ~x4 & z4;
      else if (j4 <= 47)
        return (x4 | ~y5) ^ z4;
      else if (j4 <= 63)
        return x4 & z4 | y5 & ~z4;
      else
        return x4 ^ (y5 | ~z4);
    }
    function K3(j4) {
      if (j4 <= 15)
        return 0;
      else if (j4 <= 31)
        return 1518500249;
      else if (j4 <= 47)
        return 1859775393;
      else if (j4 <= 63)
        return 2400959708;
      else
        return 2840853838;
    }
    function Kh(j4) {
      if (j4 <= 15)
        return 1352829926;
      else if (j4 <= 31)
        return 1548603684;
      else if (j4 <= 47)
        return 1836072691;
      else if (j4 <= 63)
        return 2053994217;
      else
        return 0;
    }
    var r2 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      7,
      4,
      13,
      1,
      10,
      6,
      15,
      3,
      12,
      0,
      9,
      5,
      2,
      14,
      11,
      8,
      3,
      10,
      14,
      4,
      9,
      15,
      8,
      1,
      2,
      7,
      0,
      6,
      13,
      11,
      5,
      12,
      1,
      9,
      11,
      10,
      0,
      8,
      12,
      4,
      13,
      3,
      7,
      15,
      14,
      5,
      6,
      2,
      4,
      0,
      5,
      9,
      7,
      12,
      2,
      10,
      14,
      1,
      3,
      8,
      11,
      6,
      15,
      13
    ];
    var rh = [
      5,
      14,
      7,
      0,
      9,
      2,
      11,
      4,
      13,
      6,
      15,
      8,
      1,
      10,
      3,
      12,
      6,
      11,
      3,
      7,
      0,
      13,
      5,
      10,
      14,
      15,
      8,
      12,
      4,
      9,
      1,
      2,
      15,
      5,
      1,
      3,
      7,
      14,
      6,
      9,
      11,
      8,
      12,
      2,
      10,
      0,
      4,
      13,
      8,
      6,
      4,
      1,
      3,
      11,
      15,
      0,
      5,
      12,
      2,
      13,
      9,
      7,
      10,
      14,
      12,
      15,
      10,
      4,
      1,
      5,
      8,
      7,
      6,
      2,
      13,
      14,
      0,
      3,
      9,
      11
    ];
    var s = [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8,
      7,
      6,
      8,
      13,
      11,
      9,
      7,
      15,
      7,
      12,
      15,
      9,
      11,
      7,
      13,
      12,
      11,
      13,
      6,
      7,
      14,
      9,
      13,
      15,
      14,
      8,
      13,
      6,
      5,
      12,
      7,
      5,
      11,
      12,
      14,
      15,
      14,
      15,
      9,
      8,
      9,
      14,
      5,
      6,
      8,
      6,
      5,
      12,
      9,
      15,
      5,
      11,
      6,
      8,
      13,
      12,
      5,
      12,
      13,
      14,
      11,
      8,
      5,
      6
    ];
    var sh = [
      8,
      9,
      9,
      11,
      13,
      15,
      15,
      5,
      7,
      7,
      8,
      11,
      14,
      14,
      12,
      6,
      9,
      13,
      15,
      7,
      12,
      8,
      9,
      11,
      7,
      7,
      12,
      7,
      6,
      15,
      13,
      11,
      9,
      7,
      15,
      11,
      8,
      6,
      6,
      14,
      12,
      13,
      5,
      14,
      13,
      13,
      7,
      5,
      15,
      5,
      8,
      11,
      14,
      14,
      6,
      14,
      6,
      9,
      12,
      9,
      12,
      5,
      15,
      8,
      8,
      5,
      12,
      9,
      12,
      5,
      14,
      6,
      8,
      13,
      6,
      5,
      15,
      13,
      11,
      11
    ];
  }
});

// node_modules/hash.js/lib/hash/hmac.js
var require_hmac = __commonJS({
  "node_modules/hash.js/lib/hash/hmac.js"(exports, module) {
    "use strict";
    var utils = require_utils3();
    var assert = require_minimalistic_assert();
    function Hmac(hash, key, enc) {
      if (!(this instanceof Hmac))
        return new Hmac(hash, key, enc);
      this.Hash = hash;
      this.blockSize = hash.blockSize / 8;
      this.outSize = hash.outSize / 8;
      this.inner = null;
      this.outer = null;
      this._init(utils.toArray(key, enc));
    }
    module.exports = Hmac;
    Hmac.prototype._init = function init(key) {
      if (key.length > this.blockSize)
        key = new this.Hash().update(key).digest();
      assert(key.length <= this.blockSize);
      for (var i3 = key.length; i3 < this.blockSize; i3++)
        key.push(0);
      for (i3 = 0; i3 < key.length; i3++)
        key[i3] ^= 54;
      this.inner = new this.Hash().update(key);
      for (i3 = 0; i3 < key.length; i3++)
        key[i3] ^= 106;
      this.outer = new this.Hash().update(key);
    };
    Hmac.prototype.update = function update(msg, enc) {
      this.inner.update(msg, enc);
      return this;
    };
    Hmac.prototype.digest = function digest(enc) {
      this.outer.update(this.inner.digest());
      return this.outer.digest(enc);
    };
  }
});

// node_modules/hash.js/lib/hash.js
var require_hash = __commonJS({
  "node_modules/hash.js/lib/hash.js"(exports) {
    var hash = exports;
    hash.utils = require_utils3();
    hash.common = require_common();
    hash.sha = require_sha();
    hash.ripemd = require_ripemd();
    hash.hmac = require_hmac();
    hash.sha1 = hash.sha.sha1;
    hash.sha256 = hash.sha.sha256;
    hash.sha224 = hash.sha.sha224;
    hash.sha384 = hash.sha.sha384;
    hash.sha512 = hash.sha.sha512;
    hash.ripemd160 = hash.ripemd.ripemd160;
  }
});

// node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js
var require_secp256k1 = __commonJS({
  "node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js"(exports, module) {
    module.exports = {
      doubles: {
        step: 4,
        points: [
          [
            "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
            "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
          ],
          [
            "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
            "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
          ],
          [
            "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
            "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
          ],
          [
            "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
            "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
          ],
          [
            "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
            "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
          ],
          [
            "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
            "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
          ],
          [
            "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
            "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
          ],
          [
            "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
            "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
          ],
          [
            "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
            "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
          ],
          [
            "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
            "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
          ],
          [
            "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
            "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
          ],
          [
            "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
            "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
          ],
          [
            "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
            "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
          ],
          [
            "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
            "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
          ],
          [
            "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
            "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
          ],
          [
            "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
            "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
          ],
          [
            "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
            "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
          ],
          [
            "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
            "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
          ],
          [
            "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
            "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
          ],
          [
            "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
            "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
          ],
          [
            "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
            "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
          ],
          [
            "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
            "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
          ],
          [
            "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
            "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
          ],
          [
            "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
            "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
          ],
          [
            "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
            "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
          ],
          [
            "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
            "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
          ],
          [
            "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
            "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
          ],
          [
            "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
            "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
          ],
          [
            "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
            "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
          ],
          [
            "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
            "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
          ],
          [
            "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
            "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
          ],
          [
            "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
            "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
          ],
          [
            "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
            "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
          ],
          [
            "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
            "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
          ],
          [
            "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
            "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
          ],
          [
            "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
            "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
          ],
          [
            "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
            "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
          ],
          [
            "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
            "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
          ],
          [
            "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
            "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
          ],
          [
            "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
            "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
          ],
          [
            "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
            "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
          ],
          [
            "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
            "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
          ],
          [
            "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
            "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
          ],
          [
            "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
            "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
          ],
          [
            "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
            "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
          ],
          [
            "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
            "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
          ],
          [
            "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
            "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
          ],
          [
            "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
            "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
          ],
          [
            "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
            "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
          ],
          [
            "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
            "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
          ],
          [
            "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
            "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
          ],
          [
            "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
            "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
          ],
          [
            "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
            "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
          ],
          [
            "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
            "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
          ],
          [
            "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
            "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
          ],
          [
            "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
            "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
          ],
          [
            "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
            "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
          ],
          [
            "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
            "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
          ],
          [
            "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
            "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
          ],
          [
            "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
            "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
          ],
          [
            "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
            "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
          ],
          [
            "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
            "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
          ],
          [
            "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
            "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
          ],
          [
            "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
            "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
          ],
          [
            "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
            "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
          ]
        ]
      },
      naf: {
        wnd: 7,
        points: [
          [
            "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
            "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
          ],
          [
            "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
            "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
          ],
          [
            "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
            "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
          ],
          [
            "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
            "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
          ],
          [
            "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
            "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
          ],
          [
            "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
            "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
          ],
          [
            "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
            "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
          ],
          [
            "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
            "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
          ],
          [
            "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
            "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
          ],
          [
            "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
            "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
          ],
          [
            "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
            "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
          ],
          [
            "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
            "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
          ],
          [
            "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
            "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
          ],
          [
            "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
            "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
          ],
          [
            "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
            "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
          ],
          [
            "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
            "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
          ],
          [
            "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
            "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
          ],
          [
            "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
            "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
          ],
          [
            "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
            "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
          ],
          [
            "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
            "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
          ],
          [
            "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
            "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
          ],
          [
            "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
            "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
          ],
          [
            "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
            "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
          ],
          [
            "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
            "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
          ],
          [
            "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
            "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
          ],
          [
            "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
            "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
          ],
          [
            "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
            "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
          ],
          [
            "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
            "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
          ],
          [
            "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
            "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
          ],
          [
            "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
            "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
          ],
          [
            "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
            "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
          ],
          [
            "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
            "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
          ],
          [
            "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
            "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
          ],
          [
            "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
            "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
          ],
          [
            "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
            "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
          ],
          [
            "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
            "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
          ],
          [
            "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
            "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
          ],
          [
            "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
            "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
          ],
          [
            "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
            "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
          ],
          [
            "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
            "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
          ],
          [
            "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
            "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
          ],
          [
            "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
            "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
          ],
          [
            "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
            "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
          ],
          [
            "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
            "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
          ],
          [
            "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
            "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
          ],
          [
            "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
            "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
          ],
          [
            "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
            "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
          ],
          [
            "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
            "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
          ],
          [
            "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
            "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
          ],
          [
            "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
            "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
          ],
          [
            "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
            "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
          ],
          [
            "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
            "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
          ],
          [
            "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
            "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
          ],
          [
            "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
            "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
          ],
          [
            "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
            "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
          ],
          [
            "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
            "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
          ],
          [
            "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
            "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
          ],
          [
            "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
            "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
          ],
          [
            "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
            "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
          ],
          [
            "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
            "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
          ],
          [
            "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
            "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
          ],
          [
            "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
            "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
          ],
          [
            "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
            "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
          ],
          [
            "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
            "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
          ],
          [
            "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
            "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
          ],
          [
            "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
            "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
          ],
          [
            "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
            "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
          ],
          [
            "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
            "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
          ],
          [
            "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
            "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
          ],
          [
            "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
            "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
          ],
          [
            "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
            "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
          ],
          [
            "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
            "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
          ],
          [
            "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
            "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
          ],
          [
            "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
            "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
          ],
          [
            "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
            "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
          ],
          [
            "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
            "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
          ],
          [
            "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
            "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
          ],
          [
            "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
            "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
          ],
          [
            "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
            "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
          ],
          [
            "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
            "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
          ],
          [
            "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
            "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
          ],
          [
            "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
            "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
          ],
          [
            "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
            "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
          ],
          [
            "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
            "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
          ],
          [
            "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
            "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
          ],
          [
            "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
            "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
          ],
          [
            "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
            "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
          ],
          [
            "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
            "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
          ],
          [
            "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
            "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
          ],
          [
            "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
            "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
          ],
          [
            "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
            "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
          ],
          [
            "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
            "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
          ],
          [
            "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
            "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
          ],
          [
            "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
            "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
          ],
          [
            "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
            "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
          ],
          [
            "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
            "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
          ],
          [
            "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
            "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
          ],
          [
            "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
            "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
          ],
          [
            "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
            "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
          ],
          [
            "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
            "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
          ],
          [
            "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
            "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
          ],
          [
            "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
            "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
          ],
          [
            "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
            "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
          ],
          [
            "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
            "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
          ],
          [
            "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
            "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
          ],
          [
            "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
            "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
          ],
          [
            "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
            "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
          ],
          [
            "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
            "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
          ],
          [
            "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
            "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
          ],
          [
            "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
            "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
          ],
          [
            "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
            "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
          ],
          [
            "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
            "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
          ],
          [
            "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
            "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
          ],
          [
            "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
            "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
          ],
          [
            "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
            "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
          ],
          [
            "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
            "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
          ],
          [
            "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
            "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
          ],
          [
            "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
            "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
          ],
          [
            "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
            "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
          ],
          [
            "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
            "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
          ],
          [
            "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
            "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
          ],
          [
            "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
            "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
          ],
          [
            "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
            "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
          ],
          [
            "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
            "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
          ],
          [
            "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
            "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
          ],
          [
            "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
            "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
          ],
          [
            "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
            "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
          ]
        ]
      }
    };
  }
});

// node_modules/elliptic/lib/elliptic/curves.js
var require_curves = __commonJS({
  "node_modules/elliptic/lib/elliptic/curves.js"(exports) {
    "use strict";
    var curves = exports;
    var hash = require_hash();
    var curve = require_curve();
    var utils = require_utils2();
    var assert = utils.assert;
    function PresetCurve(options) {
      if (options.type === "short")
        this.curve = new curve.short(options);
      else if (options.type === "edwards")
        this.curve = new curve.edwards(options);
      else
        this.curve = new curve.mont(options);
      this.g = this.curve.g;
      this.n = this.curve.n;
      this.hash = options.hash;
      assert(this.g.validate(), "Invalid curve");
      assert(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    curves.PresetCurve = PresetCurve;
    function defineCurve(name, options) {
      Object.defineProperty(curves, name, {
        configurable: true,
        enumerable: true,
        get: function() {
          var curve2 = new PresetCurve(options);
          Object.defineProperty(curves, name, {
            configurable: true,
            enumerable: true,
            value: curve2
          });
          return curve2;
        }
      });
    }
    defineCurve("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: hash.sha256,
      gRed: false,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
      ]
    });
    defineCurve("p224", {
      type: "short",
      prime: "p224",
      p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
      b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
      n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
      hash: hash.sha256,
      gRed: false,
      g: [
        "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
        "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
      ]
    });
    defineCurve("p256", {
      type: "short",
      prime: null,
      p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
      a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
      b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
      n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
      hash: hash.sha256,
      gRed: false,
      g: [
        "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
        "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
      ]
    });
    defineCurve("p384", {
      type: "short",
      prime: null,
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
      a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
      b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
      n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
      hash: hash.sha384,
      gRed: false,
      g: [
        "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
        "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
      ]
    });
    defineCurve("p521", {
      type: "short",
      prime: null,
      p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
      a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
      b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
      n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
      hash: hash.sha512,
      gRed: false,
      g: [
        "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
        "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
      ]
    });
    defineCurve("curve25519", {
      type: "mont",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "76d06",
      b: "1",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: hash.sha256,
      gRed: false,
      g: [
        "9"
      ]
    });
    defineCurve("ed25519", {
      type: "edwards",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "-1",
      c: "1",
      // -121665 * (121666^(-1)) (mod P)
      d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: hash.sha256,
      gRed: false,
      g: [
        "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
        // 4/5
        "6666666666666666666666666666666666666666666666666666666666666658"
      ]
    });
    var pre;
    try {
      pre = require_secp256k1();
    } catch (e) {
      pre = void 0;
    }
    defineCurve("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: hash.sha256,
      // Precomputed endomorphism
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3"
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15"
        }
      ],
      gRed: false,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        pre
      ]
    });
  }
});

// node_modules/hmac-drbg/lib/hmac-drbg.js
var require_hmac_drbg = __commonJS({
  "node_modules/hmac-drbg/lib/hmac-drbg.js"(exports, module) {
    "use strict";
    var hash = require_hash();
    var utils = require_utils();
    var assert = require_minimalistic_assert();
    function HmacDRBG(options) {
      if (!(this instanceof HmacDRBG))
        return new HmacDRBG(options);
      this.hash = options.hash;
      this.predResist = !!options.predResist;
      this.outLen = this.hash.outSize;
      this.minEntropy = options.minEntropy || this.hash.hmacStrength;
      this._reseed = null;
      this.reseedInterval = null;
      this.K = null;
      this.V = null;
      var entropy = utils.toArray(options.entropy, options.entropyEnc || "hex");
      var nonce = utils.toArray(options.nonce, options.nonceEnc || "hex");
      var pers = utils.toArray(options.pers, options.persEnc || "hex");
      assert(
        entropy.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      );
      this._init(entropy, nonce, pers);
    }
    module.exports = HmacDRBG;
    HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
      var seed = entropy.concat(nonce).concat(pers);
      this.K = new Array(this.outLen / 8);
      this.V = new Array(this.outLen / 8);
      for (var i3 = 0; i3 < this.V.length; i3++) {
        this.K[i3] = 0;
        this.V[i3] = 1;
      }
      this._update(seed);
      this._reseed = 1;
      this.reseedInterval = 281474976710656;
    };
    HmacDRBG.prototype._hmac = function hmac() {
      return new hash.hmac(this.hash, this.K);
    };
    HmacDRBG.prototype._update = function update(seed) {
      var kmac = this._hmac().update(this.V).update([0]);
      if (seed)
        kmac = kmac.update(seed);
      this.K = kmac.digest();
      this.V = this._hmac().update(this.V).digest();
      if (!seed)
        return;
      this.K = this._hmac().update(this.V).update([1]).update(seed).digest();
      this.V = this._hmac().update(this.V).digest();
    };
    HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
      if (typeof entropyEnc !== "string") {
        addEnc = add;
        add = entropyEnc;
        entropyEnc = null;
      }
      entropy = utils.toArray(entropy, entropyEnc);
      add = utils.toArray(add, addEnc);
      assert(
        entropy.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      );
      this._update(entropy.concat(add || []));
      this._reseed = 1;
    };
    HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
      if (this._reseed > this.reseedInterval)
        throw new Error("Reseed is required");
      if (typeof enc !== "string") {
        addEnc = add;
        add = enc;
        enc = null;
      }
      if (add) {
        add = utils.toArray(add, addEnc || "hex");
        this._update(add);
      }
      var temp = [];
      while (temp.length < len) {
        this.V = this._hmac().update(this.V).digest();
        temp = temp.concat(this.V);
      }
      var res = temp.slice(0, len);
      this._update(add);
      this._reseed++;
      return utils.encode(res, enc);
    };
  }
});

// node_modules/elliptic/lib/elliptic/ec/key.js
var require_key = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/key.js"(exports, module) {
    "use strict";
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    function KeyPair(ec, options) {
      this.ec = ec;
      this.priv = null;
      this.pub = null;
      if (options.priv)
        this._importPrivate(options.priv, options.privEnc);
      if (options.pub)
        this._importPublic(options.pub, options.pubEnc);
    }
    module.exports = KeyPair;
    KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
      if (pub instanceof KeyPair)
        return pub;
      return new KeyPair(ec, {
        pub,
        pubEnc: enc
      });
    };
    KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
      if (priv instanceof KeyPair)
        return priv;
      return new KeyPair(ec, {
        priv,
        privEnc: enc
      });
    };
    KeyPair.prototype.validate = function validate() {
      var pub = this.getPublic();
      if (pub.isInfinity())
        return { result: false, reason: "Invalid public key" };
      if (!pub.validate())
        return { result: false, reason: "Public key is not a point" };
      if (!pub.mul(this.ec.curve.n).isInfinity())
        return { result: false, reason: "Public key * N != O" };
      return { result: true, reason: null };
    };
    KeyPair.prototype.getPublic = function getPublic(compact, enc) {
      if (typeof compact === "string") {
        enc = compact;
        compact = null;
      }
      if (!this.pub)
        this.pub = this.ec.g.mul(this.priv);
      if (!enc)
        return this.pub;
      return this.pub.encode(enc, compact);
    };
    KeyPair.prototype.getPrivate = function getPrivate(enc) {
      if (enc === "hex")
        return this.priv.toString(16, 2);
      else
        return this.priv;
    };
    KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
      this.priv = new BN(key, enc || 16);
      this.priv = this.priv.umod(this.ec.curve.n);
    };
    KeyPair.prototype._importPublic = function _importPublic(key, enc) {
      if (key.x || key.y) {
        if (this.ec.curve.type === "mont") {
          assert(key.x, "Need x coordinate");
        } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
          assert(key.x && key.y, "Need both x and y coordinate");
        }
        this.pub = this.ec.curve.point(key.x, key.y);
        return;
      }
      this.pub = this.ec.curve.decodePoint(key, enc);
    };
    KeyPair.prototype.derive = function derive(pub) {
      if (!pub.validate()) {
        assert(pub.validate(), "public point not validated");
      }
      return pub.mul(this.priv).getX();
    };
    KeyPair.prototype.sign = function sign(msg, enc, options) {
      return this.ec.sign(msg, this, enc, options);
    };
    KeyPair.prototype.verify = function verify(msg, signature, options) {
      return this.ec.verify(msg, signature, this, void 0, options);
    };
    KeyPair.prototype.inspect = function inspect() {
      return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
    };
  }
});

// node_modules/elliptic/lib/elliptic/ec/signature.js
var require_signature = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/signature.js"(exports, module) {
    "use strict";
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    function Signature(options, enc) {
      if (options instanceof Signature)
        return options;
      if (this._importDER(options, enc))
        return;
      assert(options.r && options.s, "Signature without r or s");
      this.r = new BN(options.r, 16);
      this.s = new BN(options.s, 16);
      if (options.recoveryParam === void 0)
        this.recoveryParam = null;
      else
        this.recoveryParam = options.recoveryParam;
    }
    module.exports = Signature;
    function Position() {
      this.place = 0;
    }
    function getLength(buf, p3) {
      var initial = buf[p3.place++];
      if (!(initial & 128)) {
        return initial;
      }
      var octetLen = initial & 15;
      if (octetLen === 0 || octetLen > 4) {
        return false;
      }
      if (buf[p3.place] === 0) {
        return false;
      }
      var val = 0;
      for (var i3 = 0, off = p3.place; i3 < octetLen; i3++, off++) {
        val <<= 8;
        val |= buf[off];
        val >>>= 0;
      }
      if (val <= 127) {
        return false;
      }
      p3.place = off;
      return val;
    }
    function rmPadding(buf) {
      var i3 = 0;
      var len = buf.length - 1;
      while (!buf[i3] && !(buf[i3 + 1] & 128) && i3 < len) {
        i3++;
      }
      if (i3 === 0) {
        return buf;
      }
      return buf.slice(i3);
    }
    Signature.prototype._importDER = function _importDER(data, enc) {
      data = utils.toArray(data, enc);
      var p3 = new Position();
      if (data[p3.place++] !== 48) {
        return false;
      }
      var len = getLength(data, p3);
      if (len === false) {
        return false;
      }
      if (len + p3.place !== data.length) {
        return false;
      }
      if (data[p3.place++] !== 2) {
        return false;
      }
      var rlen = getLength(data, p3);
      if (rlen === false) {
        return false;
      }
      if ((data[p3.place] & 128) !== 0) {
        return false;
      }
      var r2 = data.slice(p3.place, rlen + p3.place);
      p3.place += rlen;
      if (data[p3.place++] !== 2) {
        return false;
      }
      var slen = getLength(data, p3);
      if (slen === false) {
        return false;
      }
      if (data.length !== slen + p3.place) {
        return false;
      }
      if ((data[p3.place] & 128) !== 0) {
        return false;
      }
      var s = data.slice(p3.place, slen + p3.place);
      if (r2[0] === 0) {
        if (r2[1] & 128) {
          r2 = r2.slice(1);
        } else {
          return false;
        }
      }
      if (s[0] === 0) {
        if (s[1] & 128) {
          s = s.slice(1);
        } else {
          return false;
        }
      }
      this.r = new BN(r2);
      this.s = new BN(s);
      this.recoveryParam = null;
      return true;
    };
    function constructLength(arr, len) {
      if (len < 128) {
        arr.push(len);
        return;
      }
      var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
      arr.push(octets | 128);
      while (--octets) {
        arr.push(len >>> (octets << 3) & 255);
      }
      arr.push(len);
    }
    Signature.prototype.toDER = function toDER(enc) {
      var r2 = this.r.toArray();
      var s = this.s.toArray();
      if (r2[0] & 128)
        r2 = [0].concat(r2);
      if (s[0] & 128)
        s = [0].concat(s);
      r2 = rmPadding(r2);
      s = rmPadding(s);
      while (!s[0] && !(s[1] & 128)) {
        s = s.slice(1);
      }
      var arr = [2];
      constructLength(arr, r2.length);
      arr = arr.concat(r2);
      arr.push(2);
      constructLength(arr, s.length);
      var backHalf = arr.concat(s);
      var res = [48];
      constructLength(res, backHalf.length);
      res = res.concat(backHalf);
      return utils.encode(res, enc);
    };
  }
});

// node_modules/elliptic/lib/elliptic/ec/index.js
var require_ec = __commonJS({
  "node_modules/elliptic/lib/elliptic/ec/index.js"(exports, module) {
    "use strict";
    var BN = require_bn();
    var HmacDRBG = require_hmac_drbg();
    var utils = require_utils2();
    var curves = require_curves();
    var rand = require_brorand();
    var assert = utils.assert;
    var KeyPair = require_key();
    var Signature = require_signature();
    function EC(options) {
      if (!(this instanceof EC))
        return new EC(options);
      if (typeof options === "string") {
        assert(
          Object.prototype.hasOwnProperty.call(curves, options),
          "Unknown curve " + options
        );
        options = curves[options];
      }
      if (options instanceof curves.PresetCurve)
        options = { curve: options };
      this.curve = options.curve.curve;
      this.n = this.curve.n;
      this.nh = this.n.ushrn(1);
      this.g = this.curve.g;
      this.g = options.curve.g;
      this.g.precompute(options.curve.n.bitLength() + 1);
      this.hash = options.hash || options.curve.hash;
    }
    module.exports = EC;
    EC.prototype.keyPair = function keyPair(options) {
      return new KeyPair(this, options);
    };
    EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
      return KeyPair.fromPrivate(this, priv, enc);
    };
    EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
      return KeyPair.fromPublic(this, pub, enc);
    };
    EC.prototype.genKeyPair = function genKeyPair(options) {
      if (!options)
        options = {};
      var drbg = new HmacDRBG({
        hash: this.hash,
        pers: options.pers,
        persEnc: options.persEnc || "utf8",
        entropy: options.entropy || rand(this.hash.hmacStrength),
        entropyEnc: options.entropy && options.entropyEnc || "utf8",
        nonce: this.n.toArray()
      });
      var bytes = this.n.byteLength();
      var ns2 = this.n.sub(new BN(2));
      for (; ; ) {
        var priv = new BN(drbg.generate(bytes));
        if (priv.cmp(ns2) > 0)
          continue;
        priv.iaddn(1);
        return this.keyFromPrivate(priv);
      }
    };
    EC.prototype._truncateToN = function _truncateToN(msg, truncOnly, bitLength) {
      var byteLength;
      if (BN.isBN(msg) || typeof msg === "number") {
        msg = new BN(msg, 16);
        byteLength = msg.byteLength();
      } else if (typeof msg === "object") {
        byteLength = msg.length;
        msg = new BN(msg, 16);
      } else {
        var str = msg.toString();
        byteLength = str.length + 1 >>> 1;
        msg = new BN(str, 16);
      }
      if (typeof bitLength !== "number") {
        bitLength = byteLength * 8;
      }
      var delta = bitLength - this.n.bitLength();
      if (delta > 0)
        msg = msg.ushrn(delta);
      if (!truncOnly && msg.cmp(this.n) >= 0)
        return msg.sub(this.n);
      else
        return msg;
    };
    EC.prototype.sign = function sign(msg, key, enc, options) {
      if (typeof enc === "object") {
        options = enc;
        enc = null;
      }
      if (!options)
        options = {};
      if (typeof msg !== "string" && typeof msg !== "number" && !BN.isBN(msg)) {
        assert(
          typeof msg === "object" && msg && typeof msg.length === "number",
          "Expected message to be an array-like, a hex string, or a BN instance"
        );
        assert(msg.length >>> 0 === msg.length);
        for (var i3 = 0; i3 < msg.length; i3++)
          assert((msg[i3] & 255) === msg[i3]);
      }
      key = this.keyFromPrivate(key, enc);
      msg = this._truncateToN(msg, false, options.msgBitLength);
      assert(!msg.isNeg(), "Can not sign a negative message");
      var bytes = this.n.byteLength();
      var bkey = key.getPrivate().toArray("be", bytes);
      var nonce = msg.toArray("be", bytes);
      assert(new BN(nonce).eq(msg), "Can not sign message");
      var drbg = new HmacDRBG({
        hash: this.hash,
        entropy: bkey,
        nonce,
        pers: options.pers,
        persEnc: options.persEnc || "utf8"
      });
      var ns1 = this.n.sub(new BN(1));
      for (var iter = 0; ; iter++) {
        var k2 = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
        k2 = this._truncateToN(k2, true);
        if (k2.cmpn(1) <= 0 || k2.cmp(ns1) >= 0)
          continue;
        var kp = this.g.mul(k2);
        if (kp.isInfinity())
          continue;
        var kpX = kp.getX();
        var r2 = kpX.umod(this.n);
        if (r2.cmpn(0) === 0)
          continue;
        var s = k2.invm(this.n).mul(r2.mul(key.getPrivate()).iadd(msg));
        s = s.umod(this.n);
        if (s.cmpn(0) === 0)
          continue;
        var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r2) !== 0 ? 2 : 0);
        if (options.canonical && s.cmp(this.nh) > 0) {
          s = this.n.sub(s);
          recoveryParam ^= 1;
        }
        return new Signature({ r: r2, s, recoveryParam });
      }
    };
    EC.prototype.verify = function verify(msg, signature, key, enc, options) {
      if (!options)
        options = {};
      msg = this._truncateToN(msg, false, options.msgBitLength);
      key = this.keyFromPublic(key, enc);
      signature = new Signature(signature, "hex");
      var r2 = signature.r;
      var s = signature.s;
      if (r2.cmpn(1) < 0 || r2.cmp(this.n) >= 0)
        return false;
      if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
        return false;
      var sinv = s.invm(this.n);
      var u1 = sinv.mul(msg).umod(this.n);
      var u22 = sinv.mul(r2).umod(this.n);
      var p3;
      if (!this.curve._maxwellTrick) {
        p3 = this.g.mulAdd(u1, key.getPublic(), u22);
        if (p3.isInfinity())
          return false;
        return p3.getX().umod(this.n).cmp(r2) === 0;
      }
      p3 = this.g.jmulAdd(u1, key.getPublic(), u22);
      if (p3.isInfinity())
        return false;
      return p3.eqXToP(r2);
    };
    EC.prototype.recoverPubKey = function(msg, signature, j4, enc) {
      assert((3 & j4) === j4, "The recovery param is more than two bits");
      signature = new Signature(signature, enc);
      var n2 = this.n;
      var e = new BN(msg);
      var r2 = signature.r;
      var s = signature.s;
      var isYOdd = j4 & 1;
      var isSecondKey = j4 >> 1;
      if (r2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
        throw new Error("Unable to find sencond key candinate");
      if (isSecondKey)
        r2 = this.curve.pointFromX(r2.add(this.curve.n), isYOdd);
      else
        r2 = this.curve.pointFromX(r2, isYOdd);
      var rInv = signature.r.invm(n2);
      var s1 = n2.sub(e).mul(rInv).umod(n2);
      var s2 = s.mul(rInv).umod(n2);
      return this.g.mulAdd(s1, r2, s2);
    };
    EC.prototype.getKeyRecoveryParam = function(e, signature, Q4, enc) {
      signature = new Signature(signature, enc);
      if (signature.recoveryParam !== null)
        return signature.recoveryParam;
      for (var i3 = 0; i3 < 4; i3++) {
        var Qprime;
        try {
          Qprime = this.recoverPubKey(e, signature, i3);
        } catch (e2) {
          continue;
        }
        if (Qprime.eq(Q4))
          return i3;
      }
      throw new Error("Unable to find valid recovery factor");
    };
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/key.js
var require_key2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/key.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var assert = utils.assert;
    var parseBytes = utils.parseBytes;
    var cachedProperty = utils.cachedProperty;
    function KeyPair(eddsa, params) {
      this.eddsa = eddsa;
      this._secret = parseBytes(params.secret);
      if (eddsa.isPoint(params.pub))
        this._pub = params.pub;
      else
        this._pubBytes = parseBytes(params.pub);
    }
    KeyPair.fromPublic = function fromPublic(eddsa, pub) {
      if (pub instanceof KeyPair)
        return pub;
      return new KeyPair(eddsa, { pub });
    };
    KeyPair.fromSecret = function fromSecret(eddsa, secret) {
      if (secret instanceof KeyPair)
        return secret;
      return new KeyPair(eddsa, { secret });
    };
    KeyPair.prototype.secret = function secret() {
      return this._secret;
    };
    cachedProperty(KeyPair, "pubBytes", function pubBytes() {
      return this.eddsa.encodePoint(this.pub());
    });
    cachedProperty(KeyPair, "pub", function pub() {
      if (this._pubBytes)
        return this.eddsa.decodePoint(this._pubBytes);
      return this.eddsa.g.mul(this.priv());
    });
    cachedProperty(KeyPair, "privBytes", function privBytes() {
      var eddsa = this.eddsa;
      var hash = this.hash();
      var lastIx = eddsa.encodingLength - 1;
      var a2 = hash.slice(0, eddsa.encodingLength);
      a2[0] &= 248;
      a2[lastIx] &= 127;
      a2[lastIx] |= 64;
      return a2;
    });
    cachedProperty(KeyPair, "priv", function priv() {
      return this.eddsa.decodeInt(this.privBytes());
    });
    cachedProperty(KeyPair, "hash", function hash() {
      return this.eddsa.hash().update(this.secret()).digest();
    });
    cachedProperty(KeyPair, "messagePrefix", function messagePrefix() {
      return this.hash().slice(this.eddsa.encodingLength);
    });
    KeyPair.prototype.sign = function sign(message) {
      assert(this._secret, "KeyPair can only verify");
      return this.eddsa.sign(message, this);
    };
    KeyPair.prototype.verify = function verify(message, sig) {
      return this.eddsa.verify(message, sig, this);
    };
    KeyPair.prototype.getSecret = function getSecret(enc) {
      assert(this._secret, "KeyPair is public only");
      return utils.encode(this.secret(), enc);
    };
    KeyPair.prototype.getPublic = function getPublic(enc) {
      return utils.encode(this.pubBytes(), enc);
    };
    module.exports = KeyPair;
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/signature.js
var require_signature2 = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/signature.js"(exports, module) {
    "use strict";
    var BN = require_bn();
    var utils = require_utils2();
    var assert = utils.assert;
    var cachedProperty = utils.cachedProperty;
    var parseBytes = utils.parseBytes;
    function Signature(eddsa, sig) {
      this.eddsa = eddsa;
      if (typeof sig !== "object")
        sig = parseBytes(sig);
      if (Array.isArray(sig)) {
        assert(sig.length === eddsa.encodingLength * 2, "Signature has invalid size");
        sig = {
          R: sig.slice(0, eddsa.encodingLength),
          S: sig.slice(eddsa.encodingLength)
        };
      }
      assert(sig.R && sig.S, "Signature without R or S");
      if (eddsa.isPoint(sig.R))
        this._R = sig.R;
      if (sig.S instanceof BN)
        this._S = sig.S;
      this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
      this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
    }
    cachedProperty(Signature, "S", function S2() {
      return this.eddsa.decodeInt(this.Sencoded());
    });
    cachedProperty(Signature, "R", function R3() {
      return this.eddsa.decodePoint(this.Rencoded());
    });
    cachedProperty(Signature, "Rencoded", function Rencoded() {
      return this.eddsa.encodePoint(this.R());
    });
    cachedProperty(Signature, "Sencoded", function Sencoded() {
      return this.eddsa.encodeInt(this.S());
    });
    Signature.prototype.toBytes = function toBytes() {
      return this.Rencoded().concat(this.Sencoded());
    };
    Signature.prototype.toHex = function toHex() {
      return utils.encode(this.toBytes(), "hex").toUpperCase();
    };
    module.exports = Signature;
  }
});

// node_modules/elliptic/lib/elliptic/eddsa/index.js
var require_eddsa = __commonJS({
  "node_modules/elliptic/lib/elliptic/eddsa/index.js"(exports, module) {
    "use strict";
    var hash = require_hash();
    var curves = require_curves();
    var utils = require_utils2();
    var assert = utils.assert;
    var parseBytes = utils.parseBytes;
    var KeyPair = require_key2();
    var Signature = require_signature2();
    function EDDSA(curve) {
      assert(curve === "ed25519", "only tested with ed25519 so far");
      if (!(this instanceof EDDSA))
        return new EDDSA(curve);
      curve = curves[curve].curve;
      this.curve = curve;
      this.g = curve.g;
      this.g.precompute(curve.n.bitLength() + 1);
      this.pointClass = curve.point().constructor;
      this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
      this.hash = hash.sha512;
    }
    module.exports = EDDSA;
    EDDSA.prototype.sign = function sign(message, secret) {
      message = parseBytes(message);
      var key = this.keyFromSecret(secret);
      var r2 = this.hashInt(key.messagePrefix(), message);
      var R3 = this.g.mul(r2);
      var Rencoded = this.encodePoint(R3);
      var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
      var S2 = r2.add(s_).umod(this.curve.n);
      return this.makeSignature({ R: R3, S: S2, Rencoded });
    };
    EDDSA.prototype.verify = function verify(message, sig, pub) {
      message = parseBytes(message);
      sig = this.makeSignature(sig);
      if (sig.S().gte(sig.eddsa.curve.n) || sig.S().isNeg()) {
        return false;
      }
      var key = this.keyFromPublic(pub);
      var h3 = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
      var SG = this.g.mul(sig.S());
      var RplusAh = sig.R().add(key.pub().mul(h3));
      return RplusAh.eq(SG);
    };
    EDDSA.prototype.hashInt = function hashInt() {
      var hash2 = this.hash();
      for (var i3 = 0; i3 < arguments.length; i3++)
        hash2.update(arguments[i3]);
      return utils.intFromLE(hash2.digest()).umod(this.curve.n);
    };
    EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
      return KeyPair.fromPublic(this, pub);
    };
    EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
      return KeyPair.fromSecret(this, secret);
    };
    EDDSA.prototype.makeSignature = function makeSignature(sig) {
      if (sig instanceof Signature)
        return sig;
      return new Signature(this, sig);
    };
    EDDSA.prototype.encodePoint = function encodePoint(point) {
      var enc = point.getY().toArray("le", this.encodingLength);
      enc[this.encodingLength - 1] |= point.getX().isOdd() ? 128 : 0;
      return enc;
    };
    EDDSA.prototype.decodePoint = function decodePoint(bytes) {
      bytes = utils.parseBytes(bytes);
      var lastIx = bytes.length - 1;
      var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~128);
      var xIsOdd = (bytes[lastIx] & 128) !== 0;
      var y5 = utils.intFromLE(normed);
      return this.curve.pointFromY(y5, xIsOdd);
    };
    EDDSA.prototype.encodeInt = function encodeInt(num) {
      return num.toArray("le", this.encodingLength);
    };
    EDDSA.prototype.decodeInt = function decodeInt(bytes) {
      return utils.intFromLE(bytes);
    };
    EDDSA.prototype.isPoint = function isPoint(val) {
      return val instanceof this.pointClass;
    };
  }
});

// node_modules/elliptic/lib/elliptic.js
var require_elliptic = __commonJS({
  "node_modules/elliptic/lib/elliptic.js"(exports) {
    "use strict";
    var elliptic = exports;
    elliptic.version = require_package().version;
    elliptic.utils = require_utils2();
    elliptic.rand = require_brorand();
    elliptic.curve = require_curve();
    elliptic.curves = require_curves();
    elliptic.ec = require_ec();
    elliptic.eddsa = require_eddsa();
  }
});

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var import_events6 = __toESM(require_events());

// node_modules/@walletconnect/utils/dist/index.es.js
var import_time = __toESM(require_cjs());
var import_window_getters = __toESM(require_cjs2());
var import_window_metadata = __toESM(require_cjs3());
var Br = __toESM(require_query_string());
var import_chacha20poly1305 = __toESM(require_chacha20poly1305());
var import_hkdf = __toESM(require_hkdf());
var import_random = __toESM(require_random());
var import_sha256 = __toESM(require_sha256());
var mn = __toESM(require_x25519());
var import_elliptic = __toESM(require_elliptic());
var Rr = ":";
function An(e) {
  const [t, r2] = e.split(Rr);
  return { namespace: t, reference: r2 };
}
function Wo(e, t = []) {
  const r2 = [];
  return Object.keys(e).forEach((i3) => {
    if (t.length && !t.includes(i3))
      return;
    const n2 = e[i3];
    r2.push(...n2.accounts);
  }), r2;
}
function Or(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
var Zo = Object.defineProperty;
var En = Object.getOwnPropertySymbols;
var ts = Object.prototype.hasOwnProperty;
var es = Object.prototype.propertyIsEnumerable;
var Sn = (e, t, r2) => t in e ? Zo(e, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[t] = r2;
var In = (e, t) => {
  for (var r2 in t || (t = {}))
    ts.call(t, r2) && Sn(e, r2, t[r2]);
  if (En)
    for (var r2 of En(t))
      es.call(t, r2) && Sn(e, r2, t[r2]);
  return e;
};
var Nn = "ReactNative";
var qt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var Bn = "js";
function bi() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function rr() {
  return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === Nn;
}
function gr() {
  return !bi() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
}
function We() {
  return rr() ? qt.reactNative : bi() ? qt.node : gr() ? qt.browser : qt.unknown;
}
function ns() {
  var e;
  try {
    return rr() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e = global.Application) == null ? void 0 : e.applicationId : void 0;
  } catch {
    return;
  }
}
function Cn(e, t) {
  let r2 = Br.parse(e);
  return r2 = In(In({}, r2), t), e = Br.stringify(r2), e;
}
function fs() {
  return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
}
function Rn() {
  if (We() === qt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r2, Version: i3 } = global.Platform;
    return [r2, i3].join("-");
  }
  const e = detect();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function On() {
  var e;
  const t = We();
  return t === qt.browser ? [t, ((e = (0, import_window_getters.getLocation)()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function Pn(e, t, r2) {
  const i3 = Rn(), n2 = On();
  return [[e, t].join("-"), [Bn, r2].join("-"), i3, n2].join("/");
}
function ss({ protocol: e, version: t, relayUrl: r2, sdkVersion: i3, auth: n2, projectId: o2, useOnCloseEvent: h3, bundleId: p3 }) {
  const A3 = r2.split("?"), v4 = Pn(e, t, i3), w2 = { auth: n2, ua: v4, projectId: o2, useOnCloseEvent: h3 || void 0, origin: p3 || void 0 }, y5 = Cn(A3[1] || "", w2);
  return A3[0] + "?" + y5;
}
function _e(e, t) {
  return e.filter((r2) => t.includes(r2)).length === e.length;
}
function cs(e) {
  return Object.fromEntries(e.entries());
}
function ls(e) {
  return new Map(Object.entries(e));
}
function gs(e = import_time.FIVE_MINUTES, t) {
  const r2 = (0, import_time.toMiliseconds)(e || import_time.FIVE_MINUTES);
  let i3, n2, o2;
  return { resolve: (h3) => {
    o2 && i3 && (clearTimeout(o2), i3(h3));
  }, reject: (h3) => {
    o2 && n2 && (clearTimeout(o2), n2(h3));
  }, done: () => new Promise((h3, p3) => {
    o2 = setTimeout(() => {
      p3(new Error(t));
    }, r2), i3 = h3, n2 = p3;
  }) };
}
function ms(e, t, r2) {
  return new Promise(async (i3, n2) => {
    const o2 = setTimeout(() => n2(new Error(r2)), t);
    try {
      const h3 = await e;
      i3(h3);
    } catch (h3) {
      n2(h3);
    }
    clearTimeout(o2);
  });
}
function yi(e, t) {
  if (typeof t == "string" && t.startsWith(`${e}:`))
    return t;
  if (e.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function As(e) {
  return yi("topic", e);
}
function bs(e) {
  return yi("id", e);
}
function ys(e) {
  const [t, r2] = e.split(":"), i3 = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r2 == "string")
    i3.topic = r2;
  else if (t === "id" && Number.isInteger(Number(r2)))
    i3.id = Number(r2);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r2}`);
  return i3;
}
function ws(e, t) {
  return (0, import_time.fromMiliseconds)((t || Date.now()) + (0, import_time.toMiliseconds)(e));
}
function xs(e) {
  return Date.now() >= (0, import_time.toMiliseconds)(e);
}
function Ms(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
function me(e = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e, ...t])];
}
async function Es({ id: e, topic: t, wcDeepLink: r2 }) {
  var i3;
  try {
    if (!r2)
      return;
    const n2 = typeof r2 == "string" ? JSON.parse(r2) : r2, o2 = n2 == null ? void 0 : n2.href;
    if (typeof o2 != "string")
      return;
    const h3 = Un(o2, e, t), p3 = We();
    if (p3 === qt.browser) {
      if (!((i3 = (0, import_window_getters.getDocument)()) != null && i3.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      h3.startsWith("https://") || h3.startsWith("http://") ? window.open(h3, "_blank", "noreferrer noopener") : window.open(h3, kn() ? "_blank" : "_self", "noreferrer noopener");
    } else
      p3 === qt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(h3);
  } catch (n2) {
    console.error(n2);
  }
}
function Un(e, t, r2) {
  const i3 = `requestId=${t}&sessionTopic=${r2}`;
  e.endsWith("/") && (e = e.slice(0, -1));
  let n2 = `${e}`;
  if (e.startsWith("https://t.me")) {
    const o2 = e.includes("?") ? "&startapp=" : "?startapp=";
    n2 = `${n2}${o2}${qn(i3, true)}`;
  } else
    n2 = `${n2}/wc?${i3}`;
  return n2;
}
async function Ss(e, t) {
  let r2 = "";
  try {
    if (gr() && (r2 = localStorage.getItem(t), r2))
      return r2;
    r2 = await e.getItem(t);
  } catch (i3) {
    console.error(i3);
  }
  return r2;
}
function Is(e, t) {
  if (!e.includes(t))
    return null;
  const r2 = e.split(/([&,?,=])/), i3 = r2.indexOf(t);
  return r2[i3 + 2];
}
function Ns() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function _s() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function kn() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function qn(e, t = false) {
  const r2 = Buffer.from(e).toString("base64");
  return t ? r2.replace(/[=]/g, "") : r2;
}
function xi(e) {
  return Buffer.from(e, "base64").toString("utf-8");
}
var Kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bs(e) {
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
var Hn = { exports: {} };
(function(e) {
  (function() {
    var t = "input is invalid type", r2 = "finalize already called", i3 = typeof window == "object", n2 = i3 ? window : {};
    n2.JS_SHA3_NO_WINDOW && (i3 = false);
    var o2 = !i3 && typeof self == "object", h3 = !n2.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    h3 ? n2 = Kn : o2 && (n2 = self);
    var p3 = !n2.JS_SHA3_NO_COMMON_JS && true && e.exports, A3 = !n2.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", v4 = "0123456789abcdef".split(""), w2 = [31, 7936, 2031616, 520093696], y5 = [4, 1024, 262144, 67108864], S2 = [1, 256, 65536, 16777216], N2 = [6, 1536, 393216, 100663296], I3 = [0, 8, 16, 24], C4 = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], D3 = [224, 256, 384, 512], U4 = [128, 256], J = ["hex", "buffer", "arrayBuffer", "array", "digest"], Bt2 = { 128: 168, 256: 136 };
    (n2.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u3) {
      return Object.prototype.toString.call(u3) === "[object Array]";
    }), A3 && (n2.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u3) {
      return typeof u3 == "object" && u3.buffer && u3.buffer.constructor === ArrayBuffer;
    });
    for (var G2 = function(u3, E3, _2) {
      return function(B2) {
        return new s(u3, E3, u3).update(B2)[_2]();
      };
    }, H = function(u3, E3, _2) {
      return function(B2, R3) {
        return new s(u3, E3, R3).update(B2)[_2]();
      };
    }, L2 = function(u3, E3, _2) {
      return function(B2, R3, F3, P3) {
        return f3["cshake" + u3].update(B2, R3, F3, P3)[_2]();
      };
    }, Pt2 = function(u3, E3, _2) {
      return function(B2, R3, F3, P3) {
        return f3["kmac" + u3].update(B2, R3, F3, P3)[_2]();
      };
    }, W = function(u3, E3, _2, B2) {
      for (var R3 = 0; R3 < J.length; ++R3) {
        var F3 = J[R3];
        u3[F3] = E3(_2, B2, F3);
      }
      return u3;
    }, Rt2 = function(u3, E3) {
      var _2 = G2(u3, E3, "hex");
      return _2.create = function() {
        return new s(u3, E3, u3);
      }, _2.update = function(B2) {
        return _2.create().update(B2);
      }, W(_2, G2, u3, E3);
    }, Vt2 = function(u3, E3) {
      var _2 = H(u3, E3, "hex");
      return _2.create = function(B2) {
        return new s(u3, E3, B2);
      }, _2.update = function(B2, R3) {
        return _2.create(R3).update(B2);
      }, W(_2, H, u3, E3);
    }, Y2 = function(u3, E3) {
      var _2 = Bt2[u3], B2 = L2(u3, E3, "hex");
      return B2.create = function(R3, F3, P3) {
        return !F3 && !P3 ? f3["shake" + u3].create(R3) : new s(u3, E3, R3).bytepad([F3, P3], _2);
      }, B2.update = function(R3, F3, P3, O3) {
        return B2.create(F3, P3, O3).update(R3);
      }, W(B2, L2, u3, E3);
    }, Wt2 = function(u3, E3) {
      var _2 = Bt2[u3], B2 = Pt2(u3, E3, "hex");
      return B2.create = function(R3, F3, P3) {
        return new g3(u3, E3, F3).bytepad(["KMAC", P3], _2).bytepad([R3], _2);
      }, B2.update = function(R3, F3, P3, O3) {
        return B2.create(R3, P3, O3).update(F3);
      }, W(B2, Pt2, u3, E3);
    }, b3 = [{ name: "keccak", padding: S2, bits: D3, createMethod: Rt2 }, { name: "sha3", padding: N2, bits: D3, createMethod: Rt2 }, { name: "shake", padding: w2, bits: U4, createMethod: Vt2 }, { name: "cshake", padding: y5, bits: U4, createMethod: Y2 }, { name: "kmac", padding: y5, bits: U4, createMethod: Wt2 }], f3 = {}, a2 = [], c2 = 0; c2 < b3.length; ++c2)
      for (var d2 = b3[c2], m2 = d2.bits, x4 = 0; x4 < m2.length; ++x4) {
        var M4 = d2.name + "_" + m2[x4];
        if (a2.push(M4), f3[M4] = d2.createMethod(m2[x4], d2.padding), d2.name !== "sha3") {
          var l = d2.name + m2[x4];
          a2.push(l), f3[l] = f3[M4];
        }
      }
    function s(u3, E3, _2) {
      this.blocks = [], this.s = [], this.padding = E3, this.outputBits = _2, this.reset = true, this.finalized = false, this.block = 0, this.start = 0, this.blockCount = 1600 - (u3 << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _2 >> 5, this.extraBytes = (_2 & 31) >> 3;
      for (var B2 = 0; B2 < 50; ++B2)
        this.s[B2] = 0;
    }
    s.prototype.update = function(u3) {
      if (this.finalized)
        throw new Error(r2);
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null)
            throw new Error(t);
          if (A3 && u3.constructor === ArrayBuffer)
            u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!A3 || !ArrayBuffer.isView(u3)))
            throw new Error(t);
        } else
          throw new Error(t);
        E3 = true;
      }
      for (var B2 = this.blocks, R3 = this.byteCount, F3 = u3.length, P3 = this.blockCount, O3 = 0, Ct2 = this.s, T3, q3; O3 < F3; ) {
        if (this.reset)
          for (this.reset = false, B2[0] = this.block, T3 = 1; T3 < P3 + 1; ++T3)
            B2[T3] = 0;
        if (E3)
          for (T3 = this.start; O3 < F3 && T3 < R3; ++O3)
            B2[T3 >> 2] |= u3[O3] << I3[T3++ & 3];
        else
          for (T3 = this.start; O3 < F3 && T3 < R3; ++O3)
            q3 = u3.charCodeAt(O3), q3 < 128 ? B2[T3 >> 2] |= q3 << I3[T3++ & 3] : q3 < 2048 ? (B2[T3 >> 2] |= (192 | q3 >> 6) << I3[T3++ & 3], B2[T3 >> 2] |= (128 | q3 & 63) << I3[T3++ & 3]) : q3 < 55296 || q3 >= 57344 ? (B2[T3 >> 2] |= (224 | q3 >> 12) << I3[T3++ & 3], B2[T3 >> 2] |= (128 | q3 >> 6 & 63) << I3[T3++ & 3], B2[T3 >> 2] |= (128 | q3 & 63) << I3[T3++ & 3]) : (q3 = 65536 + ((q3 & 1023) << 10 | u3.charCodeAt(++O3) & 1023), B2[T3 >> 2] |= (240 | q3 >> 18) << I3[T3++ & 3], B2[T3 >> 2] |= (128 | q3 >> 12 & 63) << I3[T3++ & 3], B2[T3 >> 2] |= (128 | q3 >> 6 & 63) << I3[T3++ & 3], B2[T3 >> 2] |= (128 | q3 & 63) << I3[T3++ & 3]);
        if (this.lastByteIndex = T3, T3 >= R3) {
          for (this.start = T3 - R3, this.block = B2[P3], T3 = 0; T3 < P3; ++T3)
            Ct2[T3] ^= B2[T3];
          k2(Ct2), this.reset = true;
        } else
          this.start = T3;
      }
      return this;
    }, s.prototype.encode = function(u3, E3) {
      var _2 = u3 & 255, B2 = 1, R3 = [_2];
      for (u3 = u3 >> 8, _2 = u3 & 255; _2 > 0; )
        R3.unshift(_2), u3 = u3 >> 8, _2 = u3 & 255, ++B2;
      return E3 ? R3.push(B2) : R3.unshift(B2), this.update(R3), R3.length;
    }, s.prototype.encodeString = function(u3) {
      var E3, _2 = typeof u3;
      if (_2 !== "string") {
        if (_2 === "object") {
          if (u3 === null)
            throw new Error(t);
          if (A3 && u3.constructor === ArrayBuffer)
            u3 = new Uint8Array(u3);
          else if (!Array.isArray(u3) && (!A3 || !ArrayBuffer.isView(u3)))
            throw new Error(t);
        } else
          throw new Error(t);
        E3 = true;
      }
      var B2 = 0, R3 = u3.length;
      if (E3)
        B2 = R3;
      else
        for (var F3 = 0; F3 < u3.length; ++F3) {
          var P3 = u3.charCodeAt(F3);
          P3 < 128 ? B2 += 1 : P3 < 2048 ? B2 += 2 : P3 < 55296 || P3 >= 57344 ? B2 += 3 : (P3 = 65536 + ((P3 & 1023) << 10 | u3.charCodeAt(++F3) & 1023), B2 += 4);
        }
      return B2 += this.encode(B2 * 8), this.update(u3), B2;
    }, s.prototype.bytepad = function(u3, E3) {
      for (var _2 = this.encode(E3), B2 = 0; B2 < u3.length; ++B2)
        _2 += this.encodeString(u3[B2]);
      var R3 = E3 - _2 % E3, F3 = [];
      return F3.length = R3, this.update(F3), this;
    }, s.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = true;
        var u3 = this.blocks, E3 = this.lastByteIndex, _2 = this.blockCount, B2 = this.s;
        if (u3[E3 >> 2] |= this.padding[E3 & 3], this.lastByteIndex === this.byteCount)
          for (u3[0] = u3[_2], E3 = 1; E3 < _2 + 1; ++E3)
            u3[E3] = 0;
        for (u3[_2 - 1] |= 2147483648, E3 = 0; E3 < _2; ++E3)
          B2[E3] ^= u3[E3];
        k2(B2);
      }
    }, s.prototype.toString = s.prototype.hex = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B2 = this.extraBytes, R3 = 0, F3 = 0, P3 = "", O3; F3 < _2; ) {
        for (R3 = 0; R3 < u3 && F3 < _2; ++R3, ++F3)
          O3 = E3[R3], P3 += v4[O3 >> 4 & 15] + v4[O3 & 15] + v4[O3 >> 12 & 15] + v4[O3 >> 8 & 15] + v4[O3 >> 20 & 15] + v4[O3 >> 16 & 15] + v4[O3 >> 28 & 15] + v4[O3 >> 24 & 15];
        F3 % u3 === 0 && (k2(E3), R3 = 0);
      }
      return B2 && (O3 = E3[R3], P3 += v4[O3 >> 4 & 15] + v4[O3 & 15], B2 > 1 && (P3 += v4[O3 >> 12 & 15] + v4[O3 >> 8 & 15]), B2 > 2 && (P3 += v4[O3 >> 20 & 15] + v4[O3 >> 16 & 15])), P3;
    }, s.prototype.arrayBuffer = function() {
      this.finalize();
      var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B2 = this.extraBytes, R3 = 0, F3 = 0, P3 = this.outputBits >> 3, O3;
      B2 ? O3 = new ArrayBuffer(_2 + 1 << 2) : O3 = new ArrayBuffer(P3);
      for (var Ct2 = new Uint32Array(O3); F3 < _2; ) {
        for (R3 = 0; R3 < u3 && F3 < _2; ++R3, ++F3)
          Ct2[F3] = E3[R3];
        F3 % u3 === 0 && k2(E3);
      }
      return B2 && (Ct2[R3] = E3[R3], O3 = O3.slice(0, P3)), O3;
    }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
      this.finalize();
      for (var u3 = this.blockCount, E3 = this.s, _2 = this.outputBlocks, B2 = this.extraBytes, R3 = 0, F3 = 0, P3 = [], O3, Ct2; F3 < _2; ) {
        for (R3 = 0; R3 < u3 && F3 < _2; ++R3, ++F3)
          O3 = F3 << 2, Ct2 = E3[R3], P3[O3] = Ct2 & 255, P3[O3 + 1] = Ct2 >> 8 & 255, P3[O3 + 2] = Ct2 >> 16 & 255, P3[O3 + 3] = Ct2 >> 24 & 255;
        F3 % u3 === 0 && k2(E3);
      }
      return B2 && (O3 = F3 << 2, Ct2 = E3[R3], P3[O3] = Ct2 & 255, B2 > 1 && (P3[O3 + 1] = Ct2 >> 8 & 255), B2 > 2 && (P3[O3 + 2] = Ct2 >> 16 & 255)), P3;
    };
    function g3(u3, E3, _2) {
      s.call(this, u3, E3, _2);
    }
    g3.prototype = new s(), g3.prototype.finalize = function() {
      return this.encode(this.outputBits, true), s.prototype.finalize.call(this);
    };
    var k2 = function(u3) {
      var E3, _2, B2, R3, F3, P3, O3, Ct2, T3, q3, Te2, X, $3, De, Z2, tt3, Fe, et3, rt3, Ue, it3, nt3, ke, ft2, ot3, qe, st3, at3, Ke, ut3, ht3, He, ct3, lt3, Le2, dt3, pt3, ze2, vt2, gt3, je, mt2, At2, Qe2, bt2, yt3, Je, wt2, xt2, Ge, Mt2, Et2, Ye, St2, It2, Ve, Nt2, _t2, Me, Ee2, Se, Ie2, Ne;
      for (B2 = 0; B2 < 48; B2 += 2)
        R3 = u3[0] ^ u3[10] ^ u3[20] ^ u3[30] ^ u3[40], F3 = u3[1] ^ u3[11] ^ u3[21] ^ u3[31] ^ u3[41], P3 = u3[2] ^ u3[12] ^ u3[22] ^ u3[32] ^ u3[42], O3 = u3[3] ^ u3[13] ^ u3[23] ^ u3[33] ^ u3[43], Ct2 = u3[4] ^ u3[14] ^ u3[24] ^ u3[34] ^ u3[44], T3 = u3[5] ^ u3[15] ^ u3[25] ^ u3[35] ^ u3[45], q3 = u3[6] ^ u3[16] ^ u3[26] ^ u3[36] ^ u3[46], Te2 = u3[7] ^ u3[17] ^ u3[27] ^ u3[37] ^ u3[47], X = u3[8] ^ u3[18] ^ u3[28] ^ u3[38] ^ u3[48], $3 = u3[9] ^ u3[19] ^ u3[29] ^ u3[39] ^ u3[49], E3 = X ^ (P3 << 1 | O3 >>> 31), _2 = $3 ^ (O3 << 1 | P3 >>> 31), u3[0] ^= E3, u3[1] ^= _2, u3[10] ^= E3, u3[11] ^= _2, u3[20] ^= E3, u3[21] ^= _2, u3[30] ^= E3, u3[31] ^= _2, u3[40] ^= E3, u3[41] ^= _2, E3 = R3 ^ (Ct2 << 1 | T3 >>> 31), _2 = F3 ^ (T3 << 1 | Ct2 >>> 31), u3[2] ^= E3, u3[3] ^= _2, u3[12] ^= E3, u3[13] ^= _2, u3[22] ^= E3, u3[23] ^= _2, u3[32] ^= E3, u3[33] ^= _2, u3[42] ^= E3, u3[43] ^= _2, E3 = P3 ^ (q3 << 1 | Te2 >>> 31), _2 = O3 ^ (Te2 << 1 | q3 >>> 31), u3[4] ^= E3, u3[5] ^= _2, u3[14] ^= E3, u3[15] ^= _2, u3[24] ^= E3, u3[25] ^= _2, u3[34] ^= E3, u3[35] ^= _2, u3[44] ^= E3, u3[45] ^= _2, E3 = Ct2 ^ (X << 1 | $3 >>> 31), _2 = T3 ^ ($3 << 1 | X >>> 31), u3[6] ^= E3, u3[7] ^= _2, u3[16] ^= E3, u3[17] ^= _2, u3[26] ^= E3, u3[27] ^= _2, u3[36] ^= E3, u3[37] ^= _2, u3[46] ^= E3, u3[47] ^= _2, E3 = q3 ^ (R3 << 1 | F3 >>> 31), _2 = Te2 ^ (F3 << 1 | R3 >>> 31), u3[8] ^= E3, u3[9] ^= _2, u3[18] ^= E3, u3[19] ^= _2, u3[28] ^= E3, u3[29] ^= _2, u3[38] ^= E3, u3[39] ^= _2, u3[48] ^= E3, u3[49] ^= _2, De = u3[0], Z2 = u3[1], yt3 = u3[11] << 4 | u3[10] >>> 28, Je = u3[10] << 4 | u3[11] >>> 28, at3 = u3[20] << 3 | u3[21] >>> 29, Ke = u3[21] << 3 | u3[20] >>> 29, Ee2 = u3[31] << 9 | u3[30] >>> 23, Se = u3[30] << 9 | u3[31] >>> 23, mt2 = u3[40] << 18 | u3[41] >>> 14, At2 = u3[41] << 18 | u3[40] >>> 14, lt3 = u3[2] << 1 | u3[3] >>> 31, Le2 = u3[3] << 1 | u3[2] >>> 31, tt3 = u3[13] << 12 | u3[12] >>> 20, Fe = u3[12] << 12 | u3[13] >>> 20, wt2 = u3[22] << 10 | u3[23] >>> 22, xt2 = u3[23] << 10 | u3[22] >>> 22, ut3 = u3[33] << 13 | u3[32] >>> 19, ht3 = u3[32] << 13 | u3[33] >>> 19, Ie2 = u3[42] << 2 | u3[43] >>> 30, Ne = u3[43] << 2 | u3[42] >>> 30, St2 = u3[5] << 30 | u3[4] >>> 2, It2 = u3[4] << 30 | u3[5] >>> 2, dt3 = u3[14] << 6 | u3[15] >>> 26, pt3 = u3[15] << 6 | u3[14] >>> 26, et3 = u3[25] << 11 | u3[24] >>> 21, rt3 = u3[24] << 11 | u3[25] >>> 21, Ge = u3[34] << 15 | u3[35] >>> 17, Mt2 = u3[35] << 15 | u3[34] >>> 17, He = u3[45] << 29 | u3[44] >>> 3, ct3 = u3[44] << 29 | u3[45] >>> 3, ft2 = u3[6] << 28 | u3[7] >>> 4, ot3 = u3[7] << 28 | u3[6] >>> 4, Ve = u3[17] << 23 | u3[16] >>> 9, Nt2 = u3[16] << 23 | u3[17] >>> 9, ze2 = u3[26] << 25 | u3[27] >>> 7, vt2 = u3[27] << 25 | u3[26] >>> 7, Ue = u3[36] << 21 | u3[37] >>> 11, it3 = u3[37] << 21 | u3[36] >>> 11, Et2 = u3[47] << 24 | u3[46] >>> 8, Ye = u3[46] << 24 | u3[47] >>> 8, Qe2 = u3[8] << 27 | u3[9] >>> 5, bt2 = u3[9] << 27 | u3[8] >>> 5, qe = u3[18] << 20 | u3[19] >>> 12, st3 = u3[19] << 20 | u3[18] >>> 12, _t2 = u3[29] << 7 | u3[28] >>> 25, Me = u3[28] << 7 | u3[29] >>> 25, gt3 = u3[38] << 8 | u3[39] >>> 24, je = u3[39] << 8 | u3[38] >>> 24, nt3 = u3[48] << 14 | u3[49] >>> 18, ke = u3[49] << 14 | u3[48] >>> 18, u3[0] = De ^ ~tt3 & et3, u3[1] = Z2 ^ ~Fe & rt3, u3[10] = ft2 ^ ~qe & at3, u3[11] = ot3 ^ ~st3 & Ke, u3[20] = lt3 ^ ~dt3 & ze2, u3[21] = Le2 ^ ~pt3 & vt2, u3[30] = Qe2 ^ ~yt3 & wt2, u3[31] = bt2 ^ ~Je & xt2, u3[40] = St2 ^ ~Ve & _t2, u3[41] = It2 ^ ~Nt2 & Me, u3[2] = tt3 ^ ~et3 & Ue, u3[3] = Fe ^ ~rt3 & it3, u3[12] = qe ^ ~at3 & ut3, u3[13] = st3 ^ ~Ke & ht3, u3[22] = dt3 ^ ~ze2 & gt3, u3[23] = pt3 ^ ~vt2 & je, u3[32] = yt3 ^ ~wt2 & Ge, u3[33] = Je ^ ~xt2 & Mt2, u3[42] = Ve ^ ~_t2 & Ee2, u3[43] = Nt2 ^ ~Me & Se, u3[4] = et3 ^ ~Ue & nt3, u3[5] = rt3 ^ ~it3 & ke, u3[14] = at3 ^ ~ut3 & He, u3[15] = Ke ^ ~ht3 & ct3, u3[24] = ze2 ^ ~gt3 & mt2, u3[25] = vt2 ^ ~je & At2, u3[34] = wt2 ^ ~Ge & Et2, u3[35] = xt2 ^ ~Mt2 & Ye, u3[44] = _t2 ^ ~Ee2 & Ie2, u3[45] = Me ^ ~Se & Ne, u3[6] = Ue ^ ~nt3 & De, u3[7] = it3 ^ ~ke & Z2, u3[16] = ut3 ^ ~He & ft2, u3[17] = ht3 ^ ~ct3 & ot3, u3[26] = gt3 ^ ~mt2 & lt3, u3[27] = je ^ ~At2 & Le2, u3[36] = Ge ^ ~Et2 & Qe2, u3[37] = Mt2 ^ ~Ye & bt2, u3[46] = Ee2 ^ ~Ie2 & St2, u3[47] = Se ^ ~Ne & It2, u3[8] = nt3 ^ ~De & tt3, u3[9] = ke ^ ~Z2 & Fe, u3[18] = He ^ ~ft2 & qe, u3[19] = ct3 ^ ~ot3 & st3, u3[28] = mt2 ^ ~lt3 & dt3, u3[29] = At2 ^ ~Le2 & pt3, u3[38] = Et2 ^ ~Qe2 & yt3, u3[39] = Ye ^ ~bt2 & Je, u3[48] = Ie2 ^ ~St2 & Ve, u3[49] = Ne ^ ~It2 & Nt2, u3[0] ^= C4[B2], u3[1] ^= C4[B2 + 1];
    };
    if (p3)
      e.exports = f3;
    else
      for (c2 = 0; c2 < a2.length; ++c2)
        n2[a2[c2]] = f3[a2[c2]];
  })();
})(Hn);
var Cs = Hn.exports;
var Rs = "logger/5.7.0";
var Ln = false;
var zn = false;
var Tr = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
var jn = Tr.default;
var Mi = null;
function Os() {
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
var Qn = Os();
var Ei;
(function(e) {
  e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ei || (Ei = {}));
var re;
(function(e) {
  e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
var Jn = "0123456789abcdef";
var z = class _z {
  constructor(t) {
    Object.defineProperty(this, "version", { enumerable: true, value: t, writable: false });
  }
  _log(t, r2) {
    const i3 = t.toLowerCase();
    Tr[i3] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(jn > Tr[i3]) && console.log.apply(console, r2);
  }
  debug(...t) {
    this._log(_z.levels.DEBUG, t);
  }
  info(...t) {
    this._log(_z.levels.INFO, t);
  }
  warn(...t) {
    this._log(_z.levels.WARNING, t);
  }
  makeError(t, r2, i3) {
    if (zn)
      return this.makeError("censored error", r2, {});
    r2 || (r2 = _z.errors.UNKNOWN_ERROR), i3 || (i3 = {});
    const n2 = [];
    Object.keys(i3).forEach((A3) => {
      const v4 = i3[A3];
      try {
        if (v4 instanceof Uint8Array) {
          let w2 = "";
          for (let y5 = 0; y5 < v4.length; y5++)
            w2 += Jn[v4[y5] >> 4], w2 += Jn[v4[y5] & 15];
          n2.push(A3 + "=Uint8Array(0x" + w2 + ")");
        } else
          n2.push(A3 + "=" + JSON.stringify(v4));
      } catch {
        n2.push(A3 + "=" + JSON.stringify(i3[A3].toString()));
      }
    }), n2.push(`code=${r2}`), n2.push(`version=${this.version}`);
    const o2 = t;
    let h3 = "";
    switch (r2) {
      case re.NUMERIC_FAULT: {
        h3 = "NUMERIC_FAULT";
        const A3 = t;
        switch (A3) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            h3 += "-" + A3;
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
    const p3 = new Error(t);
    return p3.reason = o2, p3.code = r2, Object.keys(i3).forEach(function(A3) {
      p3[A3] = i3[A3];
    }), p3;
  }
  throwError(t, r2, i3) {
    throw this.makeError(t, r2, i3);
  }
  throwArgumentError(t, r2, i3) {
    return this.throwError(t, _z.errors.INVALID_ARGUMENT, { argument: r2, value: i3 });
  }
  assert(t, r2, i3, n2) {
    t || this.throwError(r2, i3, n2);
  }
  assertArgument(t, r2, i3, n2) {
    t || this.throwArgumentError(r2, i3, n2);
  }
  checkNormalize(t) {
    Qn && this.throwError("platform missing String.prototype.normalize", _z.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: Qn });
  }
  checkSafeUint53(t, r2) {
    typeof t == "number" && (r2 == null && (r2 = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r2, _z.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }), t % 1 && this.throwError(r2, _z.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }));
  }
  checkArgumentCount(t, r2, i3) {
    i3 ? i3 = ": " + i3 : i3 = "", t < r2 && this.throwError("missing argument" + i3, _z.errors.MISSING_ARGUMENT, { count: t, expectedCount: r2 }), t > r2 && this.throwError("too many arguments" + i3, _z.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r2 });
  }
  checkNew(t, r2) {
    (t === Object || t == null) && this.throwError("missing new", _z.errors.MISSING_NEW, { name: r2.name });
  }
  checkAbstract(t, r2) {
    t === r2 ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r2.name) + " directly; use a sub-class", _z.errors.UNSUPPORTED_OPERATION, { name: t.name, operation: "new" }) : (t === Object || t == null) && this.throwError("missing new", _z.errors.MISSING_NEW, { name: r2.name });
  }
  static globalLogger() {
    return Mi || (Mi = new _z(Rs)), Mi;
  }
  static setCensorship(t, r2) {
    if (!t && r2 && this.globalLogger().throwError("cannot permanently disable censorship", _z.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), Ln) {
      if (!t)
        return;
      this.globalLogger().throwError("error censorship permanent", _z.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" });
    }
    zn = !!t, Ln = !!r2;
  }
  static setLogLevel(t) {
    const r2 = Tr[t.toLowerCase()];
    if (r2 == null) {
      _z.globalLogger().warn("invalid log level - " + t);
      return;
    }
    jn = r2;
  }
  static from(t) {
    return new _z(t);
  }
};
z.errors = re, z.levels = Ei;
var Ps = "bytes/5.7.0";
var Tt = new z(Ps);
function Gn(e) {
  return !!e.toHexString;
}
function ir(e) {
  return e.slice || (e.slice = function() {
    const t = Array.prototype.slice.call(arguments);
    return ir(new Uint8Array(Array.prototype.slice.apply(e, t)));
  }), e;
}
function Ts(e) {
  return Jt(e) && !(e.length % 2) || nr(e);
}
function Yn(e) {
  return typeof e == "number" && e == e && e % 1 === 0;
}
function nr(e) {
  if (e == null)
    return false;
  if (e.constructor === Uint8Array)
    return true;
  if (typeof e == "string" || !Yn(e.length) || e.length < 0)
    return false;
  for (let t = 0; t < e.length; t++) {
    const r2 = e[t];
    if (!Yn(r2) || r2 < 0 || r2 >= 256)
      return false;
  }
  return true;
}
function Ot(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Tt.checkSafeUint53(e, "invalid arrayify value");
    const r2 = [];
    for (; e; )
      r2.unshift(e & 255), e = parseInt(String(e / 256));
    return r2.length === 0 && r2.push(0), ir(new Uint8Array(r2));
  }
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), Gn(e) && (e = e.toHexString()), Jt(e)) {
    let r2 = e.substring(2);
    r2.length % 2 && (t.hexPad === "left" ? r2 = "0" + r2 : t.hexPad === "right" ? r2 += "0" : Tt.throwArgumentError("hex data is odd-length", "value", e));
    const i3 = [];
    for (let n2 = 0; n2 < r2.length; n2 += 2)
      i3.push(parseInt(r2.substring(n2, n2 + 2), 16));
    return ir(new Uint8Array(i3));
  }
  return nr(e) ? ir(new Uint8Array(e)) : Tt.throwArgumentError("invalid arrayify value", "value", e);
}
function Ds(e) {
  const t = e.map((n2) => Ot(n2)), r2 = t.reduce((n2, o2) => n2 + o2.length, 0), i3 = new Uint8Array(r2);
  return t.reduce((n2, o2) => (i3.set(o2, n2), n2 + o2.length), 0), ir(i3);
}
function Fs(e, t) {
  e = Ot(e), e.length > t && Tt.throwArgumentError("value out of range", "value", arguments[0]);
  const r2 = new Uint8Array(t);
  return r2.set(e, t - e.length), ir(r2);
}
function Jt(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t);
}
var Si = "0123456789abcdef";
function Kt(e, t) {
  if (t || (t = {}), typeof e == "number") {
    Tt.checkSafeUint53(e, "invalid hexlify value");
    let r2 = "";
    for (; e; )
      r2 = Si[e & 15] + r2, e = Math.floor(e / 16);
    return r2.length ? (r2.length % 2 && (r2 = "0" + r2), "0x" + r2) : "0x00";
  }
  if (typeof e == "bigint")
    return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
  if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), Gn(e))
    return e.toHexString();
  if (Jt(e))
    return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Tt.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
  if (nr(e)) {
    let r2 = "0x";
    for (let i3 = 0; i3 < e.length; i3++) {
      let n2 = e[i3];
      r2 += Si[(n2 & 240) >> 4] + Si[n2 & 15];
    }
    return r2;
  }
  return Tt.throwArgumentError("invalid hexlify value", "value", e);
}
function Us(e) {
  if (typeof e != "string")
    e = Kt(e);
  else if (!Jt(e) || e.length % 2)
    return null;
  return (e.length - 2) / 2;
}
function Vn(e, t, r2) {
  return typeof e != "string" ? e = Kt(e) : (!Jt(e) || e.length % 2) && Tt.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, r2 != null ? "0x" + e.substring(t, 2 + 2 * r2) : "0x" + e.substring(t);
}
function oe(e, t) {
  for (typeof e != "string" ? e = Kt(e) : Jt(e) || Tt.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Tt.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2; )
    e = "0x0" + e.substring(2);
  return e;
}
function Wn(e) {
  const t = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0, yParityAndS: "0x", compact: "0x" };
  if (Ts(e)) {
    let r2 = Ot(e);
    r2.length === 64 ? (t.v = 27 + (r2[32] >> 7), r2[32] &= 127, t.r = Kt(r2.slice(0, 32)), t.s = Kt(r2.slice(32, 64))) : r2.length === 65 ? (t.r = Kt(r2.slice(0, 32)), t.s = Kt(r2.slice(32, 64)), t.v = r2[64]) : Tt.throwArgumentError("invalid signature string", "signature", e), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Tt.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r2[32] |= 128), t._vs = Kt(r2.slice(32, 64));
  } else {
    if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, t._vs != null) {
      const n2 = Fs(Ot(t._vs), 32);
      t._vs = Kt(n2);
      const o2 = n2[0] >= 128 ? 1 : 0;
      t.recoveryParam == null ? t.recoveryParam = o2 : t.recoveryParam !== o2 && Tt.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), n2[0] &= 127;
      const h3 = Kt(n2);
      t.s == null ? t.s = h3 : t.s !== h3 && Tt.throwArgumentError("signature v mismatch _vs", "signature", e);
    }
    if (t.recoveryParam == null)
      t.v == null ? Tt.throwArgumentError("signature missing v and recoveryParam", "signature", e) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
    else if (t.v == null)
      t.v = 27 + t.recoveryParam;
    else {
      const n2 = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
      t.recoveryParam !== n2 && Tt.throwArgumentError("signature recoveryParam mismatch v", "signature", e);
    }
    t.r == null || !Jt(t.r) ? Tt.throwArgumentError("signature missing or invalid r", "signature", e) : t.r = oe(t.r, 32), t.s == null || !Jt(t.s) ? Tt.throwArgumentError("signature missing or invalid s", "signature", e) : t.s = oe(t.s, 32);
    const r2 = Ot(t.s);
    r2[0] >= 128 && Tt.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r2[0] |= 128);
    const i3 = Kt(r2);
    t._vs && (Jt(t._vs) || Tt.throwArgumentError("signature invalid _vs", "signature", e), t._vs = oe(t._vs, 32)), t._vs == null ? t._vs = i3 : t._vs !== i3 && Tt.throwArgumentError("signature _vs mismatch v and s", "signature", e);
  }
  return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t;
}
function Ii(e) {
  return "0x" + Cs.keccak_256(Ot(e));
}
var Xn = { exports: {} };
var ks = {};
var qs = Object.freeze({ __proto__: null, default: ks });
var Ks = Bs(qs);
(function(e) {
  (function(t, r2) {
    function i3(b3, f3) {
      if (!b3)
        throw new Error(f3 || "Assertion failed");
    }
    function n2(b3, f3) {
      b3.super_ = f3;
      var a2 = function() {
      };
      a2.prototype = f3.prototype, b3.prototype = new a2(), b3.prototype.constructor = b3;
    }
    function o2(b3, f3, a2) {
      if (o2.isBN(b3))
        return b3;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, b3 !== null && ((f3 === "le" || f3 === "be") && (a2 = f3, f3 = 10), this._init(b3 || 0, f3 || 10, a2 || "be"));
    }
    typeof t == "object" ? t.exports = o2 : r2.BN = o2, o2.BN = o2, o2.wordSize = 26;
    var h3;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? h3 = window.Buffer : h3 = Ks.Buffer;
    } catch {
    }
    o2.isBN = function(f3) {
      return f3 instanceof o2 ? true : f3 !== null && typeof f3 == "object" && f3.constructor.wordSize === o2.wordSize && Array.isArray(f3.words);
    }, o2.max = function(f3, a2) {
      return f3.cmp(a2) > 0 ? f3 : a2;
    }, o2.min = function(f3, a2) {
      return f3.cmp(a2) < 0 ? f3 : a2;
    }, o2.prototype._init = function(f3, a2, c2) {
      if (typeof f3 == "number")
        return this._initNumber(f3, a2, c2);
      if (typeof f3 == "object")
        return this._initArray(f3, a2, c2);
      a2 === "hex" && (a2 = 16), i3(a2 === (a2 | 0) && a2 >= 2 && a2 <= 36), f3 = f3.toString().replace(/\s+/g, "");
      var d2 = 0;
      f3[0] === "-" && (d2++, this.negative = 1), d2 < f3.length && (a2 === 16 ? this._parseHex(f3, d2, c2) : (this._parseBase(f3, a2, d2), c2 === "le" && this._initArray(this.toArray(), a2, c2)));
    }, o2.prototype._initNumber = function(f3, a2, c2) {
      f3 < 0 && (this.negative = 1, f3 = -f3), f3 < 67108864 ? (this.words = [f3 & 67108863], this.length = 1) : f3 < 4503599627370496 ? (this.words = [f3 & 67108863, f3 / 67108864 & 67108863], this.length = 2) : (i3(f3 < 9007199254740992), this.words = [f3 & 67108863, f3 / 67108864 & 67108863, 1], this.length = 3), c2 === "le" && this._initArray(this.toArray(), a2, c2);
    }, o2.prototype._initArray = function(f3, a2, c2) {
      if (i3(typeof f3.length == "number"), f3.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f3.length / 3), this.words = new Array(this.length);
      for (var d2 = 0; d2 < this.length; d2++)
        this.words[d2] = 0;
      var m2, x4, M4 = 0;
      if (c2 === "be")
        for (d2 = f3.length - 1, m2 = 0; d2 >= 0; d2 -= 3)
          x4 = f3[d2] | f3[d2 - 1] << 8 | f3[d2 - 2] << 16, this.words[m2] |= x4 << M4 & 67108863, this.words[m2 + 1] = x4 >>> 26 - M4 & 67108863, M4 += 24, M4 >= 26 && (M4 -= 26, m2++);
      else if (c2 === "le")
        for (d2 = 0, m2 = 0; d2 < f3.length; d2 += 3)
          x4 = f3[d2] | f3[d2 + 1] << 8 | f3[d2 + 2] << 16, this.words[m2] |= x4 << M4 & 67108863, this.words[m2 + 1] = x4 >>> 26 - M4 & 67108863, M4 += 24, M4 >= 26 && (M4 -= 26, m2++);
      return this._strip();
    };
    function p3(b3, f3) {
      var a2 = b3.charCodeAt(f3);
      if (a2 >= 48 && a2 <= 57)
        return a2 - 48;
      if (a2 >= 65 && a2 <= 70)
        return a2 - 55;
      if (a2 >= 97 && a2 <= 102)
        return a2 - 87;
      i3(false, "Invalid character in " + b3);
    }
    function A3(b3, f3, a2) {
      var c2 = p3(b3, a2);
      return a2 - 1 >= f3 && (c2 |= p3(b3, a2 - 1) << 4), c2;
    }
    o2.prototype._parseHex = function(f3, a2, c2) {
      this.length = Math.ceil((f3.length - a2) / 6), this.words = new Array(this.length);
      for (var d2 = 0; d2 < this.length; d2++)
        this.words[d2] = 0;
      var m2 = 0, x4 = 0, M4;
      if (c2 === "be")
        for (d2 = f3.length - 1; d2 >= a2; d2 -= 2)
          M4 = A3(f3, a2, d2) << m2, this.words[x4] |= M4 & 67108863, m2 >= 18 ? (m2 -= 18, x4 += 1, this.words[x4] |= M4 >>> 26) : m2 += 8;
      else {
        var l = f3.length - a2;
        for (d2 = l % 2 === 0 ? a2 + 1 : a2; d2 < f3.length; d2 += 2)
          M4 = A3(f3, a2, d2) << m2, this.words[x4] |= M4 & 67108863, m2 >= 18 ? (m2 -= 18, x4 += 1, this.words[x4] |= M4 >>> 26) : m2 += 8;
      }
      this._strip();
    };
    function v4(b3, f3, a2, c2) {
      for (var d2 = 0, m2 = 0, x4 = Math.min(b3.length, a2), M4 = f3; M4 < x4; M4++) {
        var l = b3.charCodeAt(M4) - 48;
        d2 *= c2, l >= 49 ? m2 = l - 49 + 10 : l >= 17 ? m2 = l - 17 + 10 : m2 = l, i3(l >= 0 && m2 < c2, "Invalid character"), d2 += m2;
      }
      return d2;
    }
    o2.prototype._parseBase = function(f3, a2, c2) {
      this.words = [0], this.length = 1;
      for (var d2 = 0, m2 = 1; m2 <= 67108863; m2 *= a2)
        d2++;
      d2--, m2 = m2 / a2 | 0;
      for (var x4 = f3.length - c2, M4 = x4 % d2, l = Math.min(x4, x4 - M4) + c2, s = 0, g3 = c2; g3 < l; g3 += d2)
        s = v4(f3, g3, g3 + d2, a2), this.imuln(m2), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      if (M4 !== 0) {
        var k2 = 1;
        for (s = v4(f3, g3, f3.length, a2), g3 = 0; g3 < M4; g3++)
          k2 *= a2;
        this.imuln(k2), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
      }
      this._strip();
    }, o2.prototype.copy = function(f3) {
      f3.words = new Array(this.length);
      for (var a2 = 0; a2 < this.length; a2++)
        f3.words[a2] = this.words[a2];
      f3.length = this.length, f3.negative = this.negative, f3.red = this.red;
    };
    function w2(b3, f3) {
      b3.words = f3.words, b3.length = f3.length, b3.negative = f3.negative, b3.red = f3.red;
    }
    if (o2.prototype._move = function(f3) {
      w2(f3, this);
    }, o2.prototype.clone = function() {
      var f3 = new o2(null);
      return this.copy(f3), f3;
    }, o2.prototype._expand = function(f3) {
      for (; this.length < f3; )
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
    var S2 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], N2 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], I3 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o2.prototype.toString = function(f3, a2) {
      f3 = f3 || 10, a2 = a2 | 0 || 1;
      var c2;
      if (f3 === 16 || f3 === "hex") {
        c2 = "";
        for (var d2 = 0, m2 = 0, x4 = 0; x4 < this.length; x4++) {
          var M4 = this.words[x4], l = ((M4 << d2 | m2) & 16777215).toString(16);
          m2 = M4 >>> 24 - d2 & 16777215, d2 += 2, d2 >= 26 && (d2 -= 26, x4--), m2 !== 0 || x4 !== this.length - 1 ? c2 = S2[6 - l.length] + l + c2 : c2 = l + c2;
        }
        for (m2 !== 0 && (c2 = m2.toString(16) + c2); c2.length % a2 !== 0; )
          c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      if (f3 === (f3 | 0) && f3 >= 2 && f3 <= 36) {
        var s = N2[f3], g3 = I3[f3];
        c2 = "";
        var k2 = this.clone();
        for (k2.negative = 0; !k2.isZero(); ) {
          var u3 = k2.modrn(g3).toString(f3);
          k2 = k2.idivn(g3), k2.isZero() ? c2 = u3 + c2 : c2 = S2[s - u3.length] + u3 + c2;
        }
        for (this.isZero() && (c2 = "0" + c2); c2.length % a2 !== 0; )
          c2 = "0" + c2;
        return this.negative !== 0 && (c2 = "-" + c2), c2;
      }
      i3(false, "Base should be between 2 and 36");
    }, o2.prototype.toNumber = function() {
      var f3 = this.words[0];
      return this.length === 2 ? f3 += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f3 += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i3(false, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f3 : f3;
    }, o2.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, h3 && (o2.prototype.toBuffer = function(f3, a2) {
      return this.toArrayLike(h3, f3, a2);
    }), o2.prototype.toArray = function(f3, a2) {
      return this.toArrayLike(Array, f3, a2);
    };
    var C4 = function(f3, a2) {
      return f3.allocUnsafe ? f3.allocUnsafe(a2) : new f3(a2);
    };
    o2.prototype.toArrayLike = function(f3, a2, c2) {
      this._strip();
      var d2 = this.byteLength(), m2 = c2 || Math.max(1, d2);
      i3(d2 <= m2, "byte array longer than desired length"), i3(m2 > 0, "Requested array length <= 0");
      var x4 = C4(f3, m2), M4 = a2 === "le" ? "LE" : "BE";
      return this["_toArrayLike" + M4](x4, d2), x4;
    }, o2.prototype._toArrayLikeLE = function(f3, a2) {
      for (var c2 = 0, d2 = 0, m2 = 0, x4 = 0; m2 < this.length; m2++) {
        var M4 = this.words[m2] << x4 | d2;
        f3[c2++] = M4 & 255, c2 < f3.length && (f3[c2++] = M4 >> 8 & 255), c2 < f3.length && (f3[c2++] = M4 >> 16 & 255), x4 === 6 ? (c2 < f3.length && (f3[c2++] = M4 >> 24 & 255), d2 = 0, x4 = 0) : (d2 = M4 >>> 24, x4 += 2);
      }
      if (c2 < f3.length)
        for (f3[c2++] = d2; c2 < f3.length; )
          f3[c2++] = 0;
    }, o2.prototype._toArrayLikeBE = function(f3, a2) {
      for (var c2 = f3.length - 1, d2 = 0, m2 = 0, x4 = 0; m2 < this.length; m2++) {
        var M4 = this.words[m2] << x4 | d2;
        f3[c2--] = M4 & 255, c2 >= 0 && (f3[c2--] = M4 >> 8 & 255), c2 >= 0 && (f3[c2--] = M4 >> 16 & 255), x4 === 6 ? (c2 >= 0 && (f3[c2--] = M4 >> 24 & 255), d2 = 0, x4 = 0) : (d2 = M4 >>> 24, x4 += 2);
      }
      if (c2 >= 0)
        for (f3[c2--] = d2; c2 >= 0; )
          f3[c2--] = 0;
    }, Math.clz32 ? o2.prototype._countBits = function(f3) {
      return 32 - Math.clz32(f3);
    } : o2.prototype._countBits = function(f3) {
      var a2 = f3, c2 = 0;
      return a2 >= 4096 && (c2 += 13, a2 >>>= 13), a2 >= 64 && (c2 += 7, a2 >>>= 7), a2 >= 8 && (c2 += 4, a2 >>>= 4), a2 >= 2 && (c2 += 2, a2 >>>= 2), c2 + a2;
    }, o2.prototype._zeroBits = function(f3) {
      if (f3 === 0)
        return 26;
      var a2 = f3, c2 = 0;
      return a2 & 8191 || (c2 += 13, a2 >>>= 13), a2 & 127 || (c2 += 7, a2 >>>= 7), a2 & 15 || (c2 += 4, a2 >>>= 4), a2 & 3 || (c2 += 2, a2 >>>= 2), a2 & 1 || c2++, c2;
    }, o2.prototype.bitLength = function() {
      var f3 = this.words[this.length - 1], a2 = this._countBits(f3);
      return (this.length - 1) * 26 + a2;
    };
    function D3(b3) {
      for (var f3 = new Array(b3.bitLength()), a2 = 0; a2 < f3.length; a2++) {
        var c2 = a2 / 26 | 0, d2 = a2 % 26;
        f3[a2] = b3.words[c2] >>> d2 & 1;
      }
      return f3;
    }
    o2.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var f3 = 0, a2 = 0; a2 < this.length; a2++) {
        var c2 = this._zeroBits(this.words[a2]);
        if (f3 += c2, c2 !== 26)
          break;
      }
      return f3;
    }, o2.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o2.prototype.toTwos = function(f3) {
      return this.negative !== 0 ? this.abs().inotn(f3).iaddn(1) : this.clone();
    }, o2.prototype.fromTwos = function(f3) {
      return this.testn(f3 - 1) ? this.notn(f3).iaddn(1).ineg() : this.clone();
    }, o2.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o2.prototype.neg = function() {
      return this.clone().ineg();
    }, o2.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o2.prototype.iuor = function(f3) {
      for (; this.length < f3.length; )
        this.words[this.length++] = 0;
      for (var a2 = 0; a2 < f3.length; a2++)
        this.words[a2] = this.words[a2] | f3.words[a2];
      return this._strip();
    }, o2.prototype.ior = function(f3) {
      return i3((this.negative | f3.negative) === 0), this.iuor(f3);
    }, o2.prototype.or = function(f3) {
      return this.length > f3.length ? this.clone().ior(f3) : f3.clone().ior(this);
    }, o2.prototype.uor = function(f3) {
      return this.length > f3.length ? this.clone().iuor(f3) : f3.clone().iuor(this);
    }, o2.prototype.iuand = function(f3) {
      var a2;
      this.length > f3.length ? a2 = f3 : a2 = this;
      for (var c2 = 0; c2 < a2.length; c2++)
        this.words[c2] = this.words[c2] & f3.words[c2];
      return this.length = a2.length, this._strip();
    }, o2.prototype.iand = function(f3) {
      return i3((this.negative | f3.negative) === 0), this.iuand(f3);
    }, o2.prototype.and = function(f3) {
      return this.length > f3.length ? this.clone().iand(f3) : f3.clone().iand(this);
    }, o2.prototype.uand = function(f3) {
      return this.length > f3.length ? this.clone().iuand(f3) : f3.clone().iuand(this);
    }, o2.prototype.iuxor = function(f3) {
      var a2, c2;
      this.length > f3.length ? (a2 = this, c2 = f3) : (a2 = f3, c2 = this);
      for (var d2 = 0; d2 < c2.length; d2++)
        this.words[d2] = a2.words[d2] ^ c2.words[d2];
      if (this !== a2)
        for (; d2 < a2.length; d2++)
          this.words[d2] = a2.words[d2];
      return this.length = a2.length, this._strip();
    }, o2.prototype.ixor = function(f3) {
      return i3((this.negative | f3.negative) === 0), this.iuxor(f3);
    }, o2.prototype.xor = function(f3) {
      return this.length > f3.length ? this.clone().ixor(f3) : f3.clone().ixor(this);
    }, o2.prototype.uxor = function(f3) {
      return this.length > f3.length ? this.clone().iuxor(f3) : f3.clone().iuxor(this);
    }, o2.prototype.inotn = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a2 = Math.ceil(f3 / 26) | 0, c2 = f3 % 26;
      this._expand(a2), c2 > 0 && a2--;
      for (var d2 = 0; d2 < a2; d2++)
        this.words[d2] = ~this.words[d2] & 67108863;
      return c2 > 0 && (this.words[d2] = ~this.words[d2] & 67108863 >> 26 - c2), this._strip();
    }, o2.prototype.notn = function(f3) {
      return this.clone().inotn(f3);
    }, o2.prototype.setn = function(f3, a2) {
      i3(typeof f3 == "number" && f3 >= 0);
      var c2 = f3 / 26 | 0, d2 = f3 % 26;
      return this._expand(c2 + 1), a2 ? this.words[c2] = this.words[c2] | 1 << d2 : this.words[c2] = this.words[c2] & ~(1 << d2), this._strip();
    }, o2.prototype.iadd = function(f3) {
      var a2;
      if (this.negative !== 0 && f3.negative === 0)
        return this.negative = 0, a2 = this.isub(f3), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f3.negative !== 0)
        return f3.negative = 0, a2 = this.isub(f3), f3.negative = 1, a2._normSign();
      var c2, d2;
      this.length > f3.length ? (c2 = this, d2 = f3) : (c2 = f3, d2 = this);
      for (var m2 = 0, x4 = 0; x4 < d2.length; x4++)
        a2 = (c2.words[x4] | 0) + (d2.words[x4] | 0) + m2, this.words[x4] = a2 & 67108863, m2 = a2 >>> 26;
      for (; m2 !== 0 && x4 < c2.length; x4++)
        a2 = (c2.words[x4] | 0) + m2, this.words[x4] = a2 & 67108863, m2 = a2 >>> 26;
      if (this.length = c2.length, m2 !== 0)
        this.words[this.length] = m2, this.length++;
      else if (c2 !== this)
        for (; x4 < c2.length; x4++)
          this.words[x4] = c2.words[x4];
      return this;
    }, o2.prototype.add = function(f3) {
      var a2;
      return f3.negative !== 0 && this.negative === 0 ? (f3.negative = 0, a2 = this.sub(f3), f3.negative ^= 1, a2) : f3.negative === 0 && this.negative !== 0 ? (this.negative = 0, a2 = f3.sub(this), this.negative = 1, a2) : this.length > f3.length ? this.clone().iadd(f3) : f3.clone().iadd(this);
    }, o2.prototype.isub = function(f3) {
      if (f3.negative !== 0) {
        f3.negative = 0;
        var a2 = this.iadd(f3);
        return f3.negative = 1, a2._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(f3), this.negative = 1, this._normSign();
      var c2 = this.cmp(f3);
      if (c2 === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d2, m2;
      c2 > 0 ? (d2 = this, m2 = f3) : (d2 = f3, m2 = this);
      for (var x4 = 0, M4 = 0; M4 < m2.length; M4++)
        a2 = (d2.words[M4] | 0) - (m2.words[M4] | 0) + x4, x4 = a2 >> 26, this.words[M4] = a2 & 67108863;
      for (; x4 !== 0 && M4 < d2.length; M4++)
        a2 = (d2.words[M4] | 0) + x4, x4 = a2 >> 26, this.words[M4] = a2 & 67108863;
      if (x4 === 0 && M4 < d2.length && d2 !== this)
        for (; M4 < d2.length; M4++)
          this.words[M4] = d2.words[M4];
      return this.length = Math.max(this.length, M4), d2 !== this && (this.negative = 1), this._strip();
    }, o2.prototype.sub = function(f3) {
      return this.clone().isub(f3);
    };
    function U4(b3, f3, a2) {
      a2.negative = f3.negative ^ b3.negative;
      var c2 = b3.length + f3.length | 0;
      a2.length = c2, c2 = c2 - 1 | 0;
      var d2 = b3.words[0] | 0, m2 = f3.words[0] | 0, x4 = d2 * m2, M4 = x4 & 67108863, l = x4 / 67108864 | 0;
      a2.words[0] = M4;
      for (var s = 1; s < c2; s++) {
        for (var g3 = l >>> 26, k2 = l & 67108863, u3 = Math.min(s, f3.length - 1), E3 = Math.max(0, s - b3.length + 1); E3 <= u3; E3++) {
          var _2 = s - E3 | 0;
          d2 = b3.words[_2] | 0, m2 = f3.words[E3] | 0, x4 = d2 * m2 + k2, g3 += x4 / 67108864 | 0, k2 = x4 & 67108863;
        }
        a2.words[s] = k2 | 0, l = g3 | 0;
      }
      return l !== 0 ? a2.words[s] = l | 0 : a2.length--, a2._strip();
    }
    var J = function(f3, a2, c2) {
      var d2 = f3.words, m2 = a2.words, x4 = c2.words, M4 = 0, l, s, g3, k2 = d2[0] | 0, u3 = k2 & 8191, E3 = k2 >>> 13, _2 = d2[1] | 0, B2 = _2 & 8191, R3 = _2 >>> 13, F3 = d2[2] | 0, P3 = F3 & 8191, O3 = F3 >>> 13, Ct2 = d2[3] | 0, T3 = Ct2 & 8191, q3 = Ct2 >>> 13, Te2 = d2[4] | 0, X = Te2 & 8191, $3 = Te2 >>> 13, De = d2[5] | 0, Z2 = De & 8191, tt3 = De >>> 13, Fe = d2[6] | 0, et3 = Fe & 8191, rt3 = Fe >>> 13, Ue = d2[7] | 0, it3 = Ue & 8191, nt3 = Ue >>> 13, ke = d2[8] | 0, ft2 = ke & 8191, ot3 = ke >>> 13, qe = d2[9] | 0, st3 = qe & 8191, at3 = qe >>> 13, Ke = m2[0] | 0, ut3 = Ke & 8191, ht3 = Ke >>> 13, He = m2[1] | 0, ct3 = He & 8191, lt3 = He >>> 13, Le2 = m2[2] | 0, dt3 = Le2 & 8191, pt3 = Le2 >>> 13, ze2 = m2[3] | 0, vt2 = ze2 & 8191, gt3 = ze2 >>> 13, je = m2[4] | 0, mt2 = je & 8191, At2 = je >>> 13, Qe2 = m2[5] | 0, bt2 = Qe2 & 8191, yt3 = Qe2 >>> 13, Je = m2[6] | 0, wt2 = Je & 8191, xt2 = Je >>> 13, Ge = m2[7] | 0, Mt2 = Ge & 8191, Et2 = Ge >>> 13, Ye = m2[8] | 0, St2 = Ye & 8191, It2 = Ye >>> 13, Ve = m2[9] | 0, Nt2 = Ve & 8191, _t2 = Ve >>> 13;
      c2.negative = f3.negative ^ a2.negative, c2.length = 19, l = Math.imul(u3, ut3), s = Math.imul(u3, ht3), s = s + Math.imul(E3, ut3) | 0, g3 = Math.imul(E3, ht3);
      var Me = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, l = Math.imul(B2, ut3), s = Math.imul(B2, ht3), s = s + Math.imul(R3, ut3) | 0, g3 = Math.imul(R3, ht3), l = l + Math.imul(u3, ct3) | 0, s = s + Math.imul(u3, lt3) | 0, s = s + Math.imul(E3, ct3) | 0, g3 = g3 + Math.imul(E3, lt3) | 0;
      var Ee2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (Ee2 >>> 26) | 0, Ee2 &= 67108863, l = Math.imul(P3, ut3), s = Math.imul(P3, ht3), s = s + Math.imul(O3, ut3) | 0, g3 = Math.imul(O3, ht3), l = l + Math.imul(B2, ct3) | 0, s = s + Math.imul(B2, lt3) | 0, s = s + Math.imul(R3, ct3) | 0, g3 = g3 + Math.imul(R3, lt3) | 0, l = l + Math.imul(u3, dt3) | 0, s = s + Math.imul(u3, pt3) | 0, s = s + Math.imul(E3, dt3) | 0, g3 = g3 + Math.imul(E3, pt3) | 0;
      var Se = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, l = Math.imul(T3, ut3), s = Math.imul(T3, ht3), s = s + Math.imul(q3, ut3) | 0, g3 = Math.imul(q3, ht3), l = l + Math.imul(P3, ct3) | 0, s = s + Math.imul(P3, lt3) | 0, s = s + Math.imul(O3, ct3) | 0, g3 = g3 + Math.imul(O3, lt3) | 0, l = l + Math.imul(B2, dt3) | 0, s = s + Math.imul(B2, pt3) | 0, s = s + Math.imul(R3, dt3) | 0, g3 = g3 + Math.imul(R3, pt3) | 0, l = l + Math.imul(u3, vt2) | 0, s = s + Math.imul(u3, gt3) | 0, s = s + Math.imul(E3, vt2) | 0, g3 = g3 + Math.imul(E3, gt3) | 0;
      var Ie2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (Ie2 >>> 26) | 0, Ie2 &= 67108863, l = Math.imul(X, ut3), s = Math.imul(X, ht3), s = s + Math.imul($3, ut3) | 0, g3 = Math.imul($3, ht3), l = l + Math.imul(T3, ct3) | 0, s = s + Math.imul(T3, lt3) | 0, s = s + Math.imul(q3, ct3) | 0, g3 = g3 + Math.imul(q3, lt3) | 0, l = l + Math.imul(P3, dt3) | 0, s = s + Math.imul(P3, pt3) | 0, s = s + Math.imul(O3, dt3) | 0, g3 = g3 + Math.imul(O3, pt3) | 0, l = l + Math.imul(B2, vt2) | 0, s = s + Math.imul(B2, gt3) | 0, s = s + Math.imul(R3, vt2) | 0, g3 = g3 + Math.imul(R3, gt3) | 0, l = l + Math.imul(u3, mt2) | 0, s = s + Math.imul(u3, At2) | 0, s = s + Math.imul(E3, mt2) | 0, g3 = g3 + Math.imul(E3, At2) | 0;
      var Ne = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l = Math.imul(Z2, ut3), s = Math.imul(Z2, ht3), s = s + Math.imul(tt3, ut3) | 0, g3 = Math.imul(tt3, ht3), l = l + Math.imul(X, ct3) | 0, s = s + Math.imul(X, lt3) | 0, s = s + Math.imul($3, ct3) | 0, g3 = g3 + Math.imul($3, lt3) | 0, l = l + Math.imul(T3, dt3) | 0, s = s + Math.imul(T3, pt3) | 0, s = s + Math.imul(q3, dt3) | 0, g3 = g3 + Math.imul(q3, pt3) | 0, l = l + Math.imul(P3, vt2) | 0, s = s + Math.imul(P3, gt3) | 0, s = s + Math.imul(O3, vt2) | 0, g3 = g3 + Math.imul(O3, gt3) | 0, l = l + Math.imul(B2, mt2) | 0, s = s + Math.imul(B2, At2) | 0, s = s + Math.imul(R3, mt2) | 0, g3 = g3 + Math.imul(R3, At2) | 0, l = l + Math.imul(u3, bt2) | 0, s = s + Math.imul(u3, yt3) | 0, s = s + Math.imul(E3, bt2) | 0, g3 = g3 + Math.imul(E3, yt3) | 0;
      var Zr2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (Zr2 >>> 26) | 0, Zr2 &= 67108863, l = Math.imul(et3, ut3), s = Math.imul(et3, ht3), s = s + Math.imul(rt3, ut3) | 0, g3 = Math.imul(rt3, ht3), l = l + Math.imul(Z2, ct3) | 0, s = s + Math.imul(Z2, lt3) | 0, s = s + Math.imul(tt3, ct3) | 0, g3 = g3 + Math.imul(tt3, lt3) | 0, l = l + Math.imul(X, dt3) | 0, s = s + Math.imul(X, pt3) | 0, s = s + Math.imul($3, dt3) | 0, g3 = g3 + Math.imul($3, pt3) | 0, l = l + Math.imul(T3, vt2) | 0, s = s + Math.imul(T3, gt3) | 0, s = s + Math.imul(q3, vt2) | 0, g3 = g3 + Math.imul(q3, gt3) | 0, l = l + Math.imul(P3, mt2) | 0, s = s + Math.imul(P3, At2) | 0, s = s + Math.imul(O3, mt2) | 0, g3 = g3 + Math.imul(O3, At2) | 0, l = l + Math.imul(B2, bt2) | 0, s = s + Math.imul(B2, yt3) | 0, s = s + Math.imul(R3, bt2) | 0, g3 = g3 + Math.imul(R3, yt3) | 0, l = l + Math.imul(u3, wt2) | 0, s = s + Math.imul(u3, xt2) | 0, s = s + Math.imul(E3, wt2) | 0, g3 = g3 + Math.imul(E3, xt2) | 0;
      var ti2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ti2 >>> 26) | 0, ti2 &= 67108863, l = Math.imul(it3, ut3), s = Math.imul(it3, ht3), s = s + Math.imul(nt3, ut3) | 0, g3 = Math.imul(nt3, ht3), l = l + Math.imul(et3, ct3) | 0, s = s + Math.imul(et3, lt3) | 0, s = s + Math.imul(rt3, ct3) | 0, g3 = g3 + Math.imul(rt3, lt3) | 0, l = l + Math.imul(Z2, dt3) | 0, s = s + Math.imul(Z2, pt3) | 0, s = s + Math.imul(tt3, dt3) | 0, g3 = g3 + Math.imul(tt3, pt3) | 0, l = l + Math.imul(X, vt2) | 0, s = s + Math.imul(X, gt3) | 0, s = s + Math.imul($3, vt2) | 0, g3 = g3 + Math.imul($3, gt3) | 0, l = l + Math.imul(T3, mt2) | 0, s = s + Math.imul(T3, At2) | 0, s = s + Math.imul(q3, mt2) | 0, g3 = g3 + Math.imul(q3, At2) | 0, l = l + Math.imul(P3, bt2) | 0, s = s + Math.imul(P3, yt3) | 0, s = s + Math.imul(O3, bt2) | 0, g3 = g3 + Math.imul(O3, yt3) | 0, l = l + Math.imul(B2, wt2) | 0, s = s + Math.imul(B2, xt2) | 0, s = s + Math.imul(R3, wt2) | 0, g3 = g3 + Math.imul(R3, xt2) | 0, l = l + Math.imul(u3, Mt2) | 0, s = s + Math.imul(u3, Et2) | 0, s = s + Math.imul(E3, Mt2) | 0, g3 = g3 + Math.imul(E3, Et2) | 0;
      var ei2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ei2 >>> 26) | 0, ei2 &= 67108863, l = Math.imul(ft2, ut3), s = Math.imul(ft2, ht3), s = s + Math.imul(ot3, ut3) | 0, g3 = Math.imul(ot3, ht3), l = l + Math.imul(it3, ct3) | 0, s = s + Math.imul(it3, lt3) | 0, s = s + Math.imul(nt3, ct3) | 0, g3 = g3 + Math.imul(nt3, lt3) | 0, l = l + Math.imul(et3, dt3) | 0, s = s + Math.imul(et3, pt3) | 0, s = s + Math.imul(rt3, dt3) | 0, g3 = g3 + Math.imul(rt3, pt3) | 0, l = l + Math.imul(Z2, vt2) | 0, s = s + Math.imul(Z2, gt3) | 0, s = s + Math.imul(tt3, vt2) | 0, g3 = g3 + Math.imul(tt3, gt3) | 0, l = l + Math.imul(X, mt2) | 0, s = s + Math.imul(X, At2) | 0, s = s + Math.imul($3, mt2) | 0, g3 = g3 + Math.imul($3, At2) | 0, l = l + Math.imul(T3, bt2) | 0, s = s + Math.imul(T3, yt3) | 0, s = s + Math.imul(q3, bt2) | 0, g3 = g3 + Math.imul(q3, yt3) | 0, l = l + Math.imul(P3, wt2) | 0, s = s + Math.imul(P3, xt2) | 0, s = s + Math.imul(O3, wt2) | 0, g3 = g3 + Math.imul(O3, xt2) | 0, l = l + Math.imul(B2, Mt2) | 0, s = s + Math.imul(B2, Et2) | 0, s = s + Math.imul(R3, Mt2) | 0, g3 = g3 + Math.imul(R3, Et2) | 0, l = l + Math.imul(u3, St2) | 0, s = s + Math.imul(u3, It2) | 0, s = s + Math.imul(E3, St2) | 0, g3 = g3 + Math.imul(E3, It2) | 0;
      var ri2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ri2 >>> 26) | 0, ri2 &= 67108863, l = Math.imul(st3, ut3), s = Math.imul(st3, ht3), s = s + Math.imul(at3, ut3) | 0, g3 = Math.imul(at3, ht3), l = l + Math.imul(ft2, ct3) | 0, s = s + Math.imul(ft2, lt3) | 0, s = s + Math.imul(ot3, ct3) | 0, g3 = g3 + Math.imul(ot3, lt3) | 0, l = l + Math.imul(it3, dt3) | 0, s = s + Math.imul(it3, pt3) | 0, s = s + Math.imul(nt3, dt3) | 0, g3 = g3 + Math.imul(nt3, pt3) | 0, l = l + Math.imul(et3, vt2) | 0, s = s + Math.imul(et3, gt3) | 0, s = s + Math.imul(rt3, vt2) | 0, g3 = g3 + Math.imul(rt3, gt3) | 0, l = l + Math.imul(Z2, mt2) | 0, s = s + Math.imul(Z2, At2) | 0, s = s + Math.imul(tt3, mt2) | 0, g3 = g3 + Math.imul(tt3, At2) | 0, l = l + Math.imul(X, bt2) | 0, s = s + Math.imul(X, yt3) | 0, s = s + Math.imul($3, bt2) | 0, g3 = g3 + Math.imul($3, yt3) | 0, l = l + Math.imul(T3, wt2) | 0, s = s + Math.imul(T3, xt2) | 0, s = s + Math.imul(q3, wt2) | 0, g3 = g3 + Math.imul(q3, xt2) | 0, l = l + Math.imul(P3, Mt2) | 0, s = s + Math.imul(P3, Et2) | 0, s = s + Math.imul(O3, Mt2) | 0, g3 = g3 + Math.imul(O3, Et2) | 0, l = l + Math.imul(B2, St2) | 0, s = s + Math.imul(B2, It2) | 0, s = s + Math.imul(R3, St2) | 0, g3 = g3 + Math.imul(R3, It2) | 0, l = l + Math.imul(u3, Nt2) | 0, s = s + Math.imul(u3, _t2) | 0, s = s + Math.imul(E3, Nt2) | 0, g3 = g3 + Math.imul(E3, _t2) | 0;
      var ii2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ii2 >>> 26) | 0, ii2 &= 67108863, l = Math.imul(st3, ct3), s = Math.imul(st3, lt3), s = s + Math.imul(at3, ct3) | 0, g3 = Math.imul(at3, lt3), l = l + Math.imul(ft2, dt3) | 0, s = s + Math.imul(ft2, pt3) | 0, s = s + Math.imul(ot3, dt3) | 0, g3 = g3 + Math.imul(ot3, pt3) | 0, l = l + Math.imul(it3, vt2) | 0, s = s + Math.imul(it3, gt3) | 0, s = s + Math.imul(nt3, vt2) | 0, g3 = g3 + Math.imul(nt3, gt3) | 0, l = l + Math.imul(et3, mt2) | 0, s = s + Math.imul(et3, At2) | 0, s = s + Math.imul(rt3, mt2) | 0, g3 = g3 + Math.imul(rt3, At2) | 0, l = l + Math.imul(Z2, bt2) | 0, s = s + Math.imul(Z2, yt3) | 0, s = s + Math.imul(tt3, bt2) | 0, g3 = g3 + Math.imul(tt3, yt3) | 0, l = l + Math.imul(X, wt2) | 0, s = s + Math.imul(X, xt2) | 0, s = s + Math.imul($3, wt2) | 0, g3 = g3 + Math.imul($3, xt2) | 0, l = l + Math.imul(T3, Mt2) | 0, s = s + Math.imul(T3, Et2) | 0, s = s + Math.imul(q3, Mt2) | 0, g3 = g3 + Math.imul(q3, Et2) | 0, l = l + Math.imul(P3, St2) | 0, s = s + Math.imul(P3, It2) | 0, s = s + Math.imul(O3, St2) | 0, g3 = g3 + Math.imul(O3, It2) | 0, l = l + Math.imul(B2, Nt2) | 0, s = s + Math.imul(B2, _t2) | 0, s = s + Math.imul(R3, Nt2) | 0, g3 = g3 + Math.imul(R3, _t2) | 0;
      var ni2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ni2 >>> 26) | 0, ni2 &= 67108863, l = Math.imul(st3, dt3), s = Math.imul(st3, pt3), s = s + Math.imul(at3, dt3) | 0, g3 = Math.imul(at3, pt3), l = l + Math.imul(ft2, vt2) | 0, s = s + Math.imul(ft2, gt3) | 0, s = s + Math.imul(ot3, vt2) | 0, g3 = g3 + Math.imul(ot3, gt3) | 0, l = l + Math.imul(it3, mt2) | 0, s = s + Math.imul(it3, At2) | 0, s = s + Math.imul(nt3, mt2) | 0, g3 = g3 + Math.imul(nt3, At2) | 0, l = l + Math.imul(et3, bt2) | 0, s = s + Math.imul(et3, yt3) | 0, s = s + Math.imul(rt3, bt2) | 0, g3 = g3 + Math.imul(rt3, yt3) | 0, l = l + Math.imul(Z2, wt2) | 0, s = s + Math.imul(Z2, xt2) | 0, s = s + Math.imul(tt3, wt2) | 0, g3 = g3 + Math.imul(tt3, xt2) | 0, l = l + Math.imul(X, Mt2) | 0, s = s + Math.imul(X, Et2) | 0, s = s + Math.imul($3, Mt2) | 0, g3 = g3 + Math.imul($3, Et2) | 0, l = l + Math.imul(T3, St2) | 0, s = s + Math.imul(T3, It2) | 0, s = s + Math.imul(q3, St2) | 0, g3 = g3 + Math.imul(q3, It2) | 0, l = l + Math.imul(P3, Nt2) | 0, s = s + Math.imul(P3, _t2) | 0, s = s + Math.imul(O3, Nt2) | 0, g3 = g3 + Math.imul(O3, _t2) | 0;
      var fi2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (fi2 >>> 26) | 0, fi2 &= 67108863, l = Math.imul(st3, vt2), s = Math.imul(st3, gt3), s = s + Math.imul(at3, vt2) | 0, g3 = Math.imul(at3, gt3), l = l + Math.imul(ft2, mt2) | 0, s = s + Math.imul(ft2, At2) | 0, s = s + Math.imul(ot3, mt2) | 0, g3 = g3 + Math.imul(ot3, At2) | 0, l = l + Math.imul(it3, bt2) | 0, s = s + Math.imul(it3, yt3) | 0, s = s + Math.imul(nt3, bt2) | 0, g3 = g3 + Math.imul(nt3, yt3) | 0, l = l + Math.imul(et3, wt2) | 0, s = s + Math.imul(et3, xt2) | 0, s = s + Math.imul(rt3, wt2) | 0, g3 = g3 + Math.imul(rt3, xt2) | 0, l = l + Math.imul(Z2, Mt2) | 0, s = s + Math.imul(Z2, Et2) | 0, s = s + Math.imul(tt3, Mt2) | 0, g3 = g3 + Math.imul(tt3, Et2) | 0, l = l + Math.imul(X, St2) | 0, s = s + Math.imul(X, It2) | 0, s = s + Math.imul($3, St2) | 0, g3 = g3 + Math.imul($3, It2) | 0, l = l + Math.imul(T3, Nt2) | 0, s = s + Math.imul(T3, _t2) | 0, s = s + Math.imul(q3, Nt2) | 0, g3 = g3 + Math.imul(q3, _t2) | 0;
      var oi2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (oi2 >>> 26) | 0, oi2 &= 67108863, l = Math.imul(st3, mt2), s = Math.imul(st3, At2), s = s + Math.imul(at3, mt2) | 0, g3 = Math.imul(at3, At2), l = l + Math.imul(ft2, bt2) | 0, s = s + Math.imul(ft2, yt3) | 0, s = s + Math.imul(ot3, bt2) | 0, g3 = g3 + Math.imul(ot3, yt3) | 0, l = l + Math.imul(it3, wt2) | 0, s = s + Math.imul(it3, xt2) | 0, s = s + Math.imul(nt3, wt2) | 0, g3 = g3 + Math.imul(nt3, xt2) | 0, l = l + Math.imul(et3, Mt2) | 0, s = s + Math.imul(et3, Et2) | 0, s = s + Math.imul(rt3, Mt2) | 0, g3 = g3 + Math.imul(rt3, Et2) | 0, l = l + Math.imul(Z2, St2) | 0, s = s + Math.imul(Z2, It2) | 0, s = s + Math.imul(tt3, St2) | 0, g3 = g3 + Math.imul(tt3, It2) | 0, l = l + Math.imul(X, Nt2) | 0, s = s + Math.imul(X, _t2) | 0, s = s + Math.imul($3, Nt2) | 0, g3 = g3 + Math.imul($3, _t2) | 0;
      var si2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (si2 >>> 26) | 0, si2 &= 67108863, l = Math.imul(st3, bt2), s = Math.imul(st3, yt3), s = s + Math.imul(at3, bt2) | 0, g3 = Math.imul(at3, yt3), l = l + Math.imul(ft2, wt2) | 0, s = s + Math.imul(ft2, xt2) | 0, s = s + Math.imul(ot3, wt2) | 0, g3 = g3 + Math.imul(ot3, xt2) | 0, l = l + Math.imul(it3, Mt2) | 0, s = s + Math.imul(it3, Et2) | 0, s = s + Math.imul(nt3, Mt2) | 0, g3 = g3 + Math.imul(nt3, Et2) | 0, l = l + Math.imul(et3, St2) | 0, s = s + Math.imul(et3, It2) | 0, s = s + Math.imul(rt3, St2) | 0, g3 = g3 + Math.imul(rt3, It2) | 0, l = l + Math.imul(Z2, Nt2) | 0, s = s + Math.imul(Z2, _t2) | 0, s = s + Math.imul(tt3, Nt2) | 0, g3 = g3 + Math.imul(tt3, _t2) | 0;
      var ai2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ai2 >>> 26) | 0, ai2 &= 67108863, l = Math.imul(st3, wt2), s = Math.imul(st3, xt2), s = s + Math.imul(at3, wt2) | 0, g3 = Math.imul(at3, xt2), l = l + Math.imul(ft2, Mt2) | 0, s = s + Math.imul(ft2, Et2) | 0, s = s + Math.imul(ot3, Mt2) | 0, g3 = g3 + Math.imul(ot3, Et2) | 0, l = l + Math.imul(it3, St2) | 0, s = s + Math.imul(it3, It2) | 0, s = s + Math.imul(nt3, St2) | 0, g3 = g3 + Math.imul(nt3, It2) | 0, l = l + Math.imul(et3, Nt2) | 0, s = s + Math.imul(et3, _t2) | 0, s = s + Math.imul(rt3, Nt2) | 0, g3 = g3 + Math.imul(rt3, _t2) | 0;
      var ui2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ui2 >>> 26) | 0, ui2 &= 67108863, l = Math.imul(st3, Mt2), s = Math.imul(st3, Et2), s = s + Math.imul(at3, Mt2) | 0, g3 = Math.imul(at3, Et2), l = l + Math.imul(ft2, St2) | 0, s = s + Math.imul(ft2, It2) | 0, s = s + Math.imul(ot3, St2) | 0, g3 = g3 + Math.imul(ot3, It2) | 0, l = l + Math.imul(it3, Nt2) | 0, s = s + Math.imul(it3, _t2) | 0, s = s + Math.imul(nt3, Nt2) | 0, g3 = g3 + Math.imul(nt3, _t2) | 0;
      var hi2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (hi2 >>> 26) | 0, hi2 &= 67108863, l = Math.imul(st3, St2), s = Math.imul(st3, It2), s = s + Math.imul(at3, St2) | 0, g3 = Math.imul(at3, It2), l = l + Math.imul(ft2, Nt2) | 0, s = s + Math.imul(ft2, _t2) | 0, s = s + Math.imul(ot3, Nt2) | 0, g3 = g3 + Math.imul(ot3, _t2) | 0;
      var ci2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      M4 = (g3 + (s >>> 13) | 0) + (ci2 >>> 26) | 0, ci2 &= 67108863, l = Math.imul(st3, Nt2), s = Math.imul(st3, _t2), s = s + Math.imul(at3, Nt2) | 0, g3 = Math.imul(at3, _t2);
      var li2 = (M4 + l | 0) + ((s & 8191) << 13) | 0;
      return M4 = (g3 + (s >>> 13) | 0) + (li2 >>> 26) | 0, li2 &= 67108863, x4[0] = Me, x4[1] = Ee2, x4[2] = Se, x4[3] = Ie2, x4[4] = Ne, x4[5] = Zr2, x4[6] = ti2, x4[7] = ei2, x4[8] = ri2, x4[9] = ii2, x4[10] = ni2, x4[11] = fi2, x4[12] = oi2, x4[13] = si2, x4[14] = ai2, x4[15] = ui2, x4[16] = hi2, x4[17] = ci2, x4[18] = li2, M4 !== 0 && (x4[19] = M4, c2.length++), c2;
    };
    Math.imul || (J = U4);
    function Bt2(b3, f3, a2) {
      a2.negative = f3.negative ^ b3.negative, a2.length = b3.length + f3.length;
      for (var c2 = 0, d2 = 0, m2 = 0; m2 < a2.length - 1; m2++) {
        var x4 = d2;
        d2 = 0;
        for (var M4 = c2 & 67108863, l = Math.min(m2, f3.length - 1), s = Math.max(0, m2 - b3.length + 1); s <= l; s++) {
          var g3 = m2 - s, k2 = b3.words[g3] | 0, u3 = f3.words[s] | 0, E3 = k2 * u3, _2 = E3 & 67108863;
          x4 = x4 + (E3 / 67108864 | 0) | 0, _2 = _2 + M4 | 0, M4 = _2 & 67108863, x4 = x4 + (_2 >>> 26) | 0, d2 += x4 >>> 26, x4 &= 67108863;
        }
        a2.words[m2] = M4, c2 = x4, x4 = d2;
      }
      return c2 !== 0 ? a2.words[m2] = c2 : a2.length--, a2._strip();
    }
    function G2(b3, f3, a2) {
      return Bt2(b3, f3, a2);
    }
    o2.prototype.mulTo = function(f3, a2) {
      var c2, d2 = this.length + f3.length;
      return this.length === 10 && f3.length === 10 ? c2 = J(this, f3, a2) : d2 < 63 ? c2 = U4(this, f3, a2) : d2 < 1024 ? c2 = Bt2(this, f3, a2) : c2 = G2(this, f3, a2), c2;
    }, o2.prototype.mul = function(f3) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f3.length), this.mulTo(f3, a2);
    }, o2.prototype.mulf = function(f3) {
      var a2 = new o2(null);
      return a2.words = new Array(this.length + f3.length), G2(this, f3, a2);
    }, o2.prototype.imul = function(f3) {
      return this.clone().mulTo(f3, this);
    }, o2.prototype.imuln = function(f3) {
      var a2 = f3 < 0;
      a2 && (f3 = -f3), i3(typeof f3 == "number"), i3(f3 < 67108864);
      for (var c2 = 0, d2 = 0; d2 < this.length; d2++) {
        var m2 = (this.words[d2] | 0) * f3, x4 = (m2 & 67108863) + (c2 & 67108863);
        c2 >>= 26, c2 += m2 / 67108864 | 0, c2 += x4 >>> 26, this.words[d2] = x4 & 67108863;
      }
      return c2 !== 0 && (this.words[d2] = c2, this.length++), a2 ? this.ineg() : this;
    }, o2.prototype.muln = function(f3) {
      return this.clone().imuln(f3);
    }, o2.prototype.sqr = function() {
      return this.mul(this);
    }, o2.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o2.prototype.pow = function(f3) {
      var a2 = D3(f3);
      if (a2.length === 0)
        return new o2(1);
      for (var c2 = this, d2 = 0; d2 < a2.length && a2[d2] === 0; d2++, c2 = c2.sqr())
        ;
      if (++d2 < a2.length)
        for (var m2 = c2.sqr(); d2 < a2.length; d2++, m2 = m2.sqr())
          a2[d2] !== 0 && (c2 = c2.mul(m2));
      return c2;
    }, o2.prototype.iushln = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a2 = f3 % 26, c2 = (f3 - a2) / 26, d2 = 67108863 >>> 26 - a2 << 26 - a2, m2;
      if (a2 !== 0) {
        var x4 = 0;
        for (m2 = 0; m2 < this.length; m2++) {
          var M4 = this.words[m2] & d2, l = (this.words[m2] | 0) - M4 << a2;
          this.words[m2] = l | x4, x4 = M4 >>> 26 - a2;
        }
        x4 && (this.words[m2] = x4, this.length++);
      }
      if (c2 !== 0) {
        for (m2 = this.length - 1; m2 >= 0; m2--)
          this.words[m2 + c2] = this.words[m2];
        for (m2 = 0; m2 < c2; m2++)
          this.words[m2] = 0;
        this.length += c2;
      }
      return this._strip();
    }, o2.prototype.ishln = function(f3) {
      return i3(this.negative === 0), this.iushln(f3);
    }, o2.prototype.iushrn = function(f3, a2, c2) {
      i3(typeof f3 == "number" && f3 >= 0);
      var d2;
      a2 ? d2 = (a2 - a2 % 26) / 26 : d2 = 0;
      var m2 = f3 % 26, x4 = Math.min((f3 - m2) / 26, this.length), M4 = 67108863 ^ 67108863 >>> m2 << m2, l = c2;
      if (d2 -= x4, d2 = Math.max(0, d2), l) {
        for (var s = 0; s < x4; s++)
          l.words[s] = this.words[s];
        l.length = x4;
      }
      if (x4 !== 0)
        if (this.length > x4)
          for (this.length -= x4, s = 0; s < this.length; s++)
            this.words[s] = this.words[s + x4];
        else
          this.words[0] = 0, this.length = 1;
      var g3 = 0;
      for (s = this.length - 1; s >= 0 && (g3 !== 0 || s >= d2); s--) {
        var k2 = this.words[s] | 0;
        this.words[s] = g3 << 26 - m2 | k2 >>> m2, g3 = k2 & M4;
      }
      return l && g3 !== 0 && (l.words[l.length++] = g3), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, o2.prototype.ishrn = function(f3, a2, c2) {
      return i3(this.negative === 0), this.iushrn(f3, a2, c2);
    }, o2.prototype.shln = function(f3) {
      return this.clone().ishln(f3);
    }, o2.prototype.ushln = function(f3) {
      return this.clone().iushln(f3);
    }, o2.prototype.shrn = function(f3) {
      return this.clone().ishrn(f3);
    }, o2.prototype.ushrn = function(f3) {
      return this.clone().iushrn(f3);
    }, o2.prototype.testn = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a2 = f3 % 26, c2 = (f3 - a2) / 26, d2 = 1 << a2;
      if (this.length <= c2)
        return false;
      var m2 = this.words[c2];
      return !!(m2 & d2);
    }, o2.prototype.imaskn = function(f3) {
      i3(typeof f3 == "number" && f3 >= 0);
      var a2 = f3 % 26, c2 = (f3 - a2) / 26;
      if (i3(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c2)
        return this;
      if (a2 !== 0 && c2++, this.length = Math.min(c2, this.length), a2 !== 0) {
        var d2 = 67108863 ^ 67108863 >>> a2 << a2;
        this.words[this.length - 1] &= d2;
      }
      return this._strip();
    }, o2.prototype.maskn = function(f3) {
      return this.clone().imaskn(f3);
    }, o2.prototype.iaddn = function(f3) {
      return i3(typeof f3 == "number"), i3(f3 < 67108864), f3 < 0 ? this.isubn(-f3) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f3 ? (this.words[0] = f3 - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f3), this.negative = 1, this) : this._iaddn(f3);
    }, o2.prototype._iaddn = function(f3) {
      this.words[0] += f3;
      for (var a2 = 0; a2 < this.length && this.words[a2] >= 67108864; a2++)
        this.words[a2] -= 67108864, a2 === this.length - 1 ? this.words[a2 + 1] = 1 : this.words[a2 + 1]++;
      return this.length = Math.max(this.length, a2 + 1), this;
    }, o2.prototype.isubn = function(f3) {
      if (i3(typeof f3 == "number"), i3(f3 < 67108864), f3 < 0)
        return this.iaddn(-f3);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(f3), this.negative = 1, this;
      if (this.words[0] -= f3, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var a2 = 0; a2 < this.length && this.words[a2] < 0; a2++)
          this.words[a2] += 67108864, this.words[a2 + 1] -= 1;
      return this._strip();
    }, o2.prototype.addn = function(f3) {
      return this.clone().iaddn(f3);
    }, o2.prototype.subn = function(f3) {
      return this.clone().isubn(f3);
    }, o2.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o2.prototype.abs = function() {
      return this.clone().iabs();
    }, o2.prototype._ishlnsubmul = function(f3, a2, c2) {
      var d2 = f3.length + c2, m2;
      this._expand(d2);
      var x4, M4 = 0;
      for (m2 = 0; m2 < f3.length; m2++) {
        x4 = (this.words[m2 + c2] | 0) + M4;
        var l = (f3.words[m2] | 0) * a2;
        x4 -= l & 67108863, M4 = (x4 >> 26) - (l / 67108864 | 0), this.words[m2 + c2] = x4 & 67108863;
      }
      for (; m2 < this.length - c2; m2++)
        x4 = (this.words[m2 + c2] | 0) + M4, M4 = x4 >> 26, this.words[m2 + c2] = x4 & 67108863;
      if (M4 === 0)
        return this._strip();
      for (i3(M4 === -1), M4 = 0, m2 = 0; m2 < this.length; m2++)
        x4 = -(this.words[m2] | 0) + M4, M4 = x4 >> 26, this.words[m2] = x4 & 67108863;
      return this.negative = 1, this._strip();
    }, o2.prototype._wordDiv = function(f3, a2) {
      var c2 = this.length - f3.length, d2 = this.clone(), m2 = f3, x4 = m2.words[m2.length - 1] | 0, M4 = this._countBits(x4);
      c2 = 26 - M4, c2 !== 0 && (m2 = m2.ushln(c2), d2.iushln(c2), x4 = m2.words[m2.length - 1] | 0);
      var l = d2.length - m2.length, s;
      if (a2 !== "mod") {
        s = new o2(null), s.length = l + 1, s.words = new Array(s.length);
        for (var g3 = 0; g3 < s.length; g3++)
          s.words[g3] = 0;
      }
      var k2 = d2.clone()._ishlnsubmul(m2, 1, l);
      k2.negative === 0 && (d2 = k2, s && (s.words[l] = 1));
      for (var u3 = l - 1; u3 >= 0; u3--) {
        var E3 = (d2.words[m2.length + u3] | 0) * 67108864 + (d2.words[m2.length + u3 - 1] | 0);
        for (E3 = Math.min(E3 / x4 | 0, 67108863), d2._ishlnsubmul(m2, E3, u3); d2.negative !== 0; )
          E3--, d2.negative = 0, d2._ishlnsubmul(m2, 1, u3), d2.isZero() || (d2.negative ^= 1);
        s && (s.words[u3] = E3);
      }
      return s && s._strip(), d2._strip(), a2 !== "div" && c2 !== 0 && d2.iushrn(c2), { div: s || null, mod: d2 };
    }, o2.prototype.divmod = function(f3, a2, c2) {
      if (i3(!f3.isZero()), this.isZero())
        return { div: new o2(0), mod: new o2(0) };
      var d2, m2, x4;
      return this.negative !== 0 && f3.negative === 0 ? (x4 = this.neg().divmod(f3, a2), a2 !== "mod" && (d2 = x4.div.neg()), a2 !== "div" && (m2 = x4.mod.neg(), c2 && m2.negative !== 0 && m2.iadd(f3)), { div: d2, mod: m2 }) : this.negative === 0 && f3.negative !== 0 ? (x4 = this.divmod(f3.neg(), a2), a2 !== "mod" && (d2 = x4.div.neg()), { div: d2, mod: x4.mod }) : this.negative & f3.negative ? (x4 = this.neg().divmod(f3.neg(), a2), a2 !== "div" && (m2 = x4.mod.neg(), c2 && m2.negative !== 0 && m2.isub(f3)), { div: x4.div, mod: m2 }) : f3.length > this.length || this.cmp(f3) < 0 ? { div: new o2(0), mod: this } : f3.length === 1 ? a2 === "div" ? { div: this.divn(f3.words[0]), mod: null } : a2 === "mod" ? { div: null, mod: new o2(this.modrn(f3.words[0])) } : { div: this.divn(f3.words[0]), mod: new o2(this.modrn(f3.words[0])) } : this._wordDiv(f3, a2);
    }, o2.prototype.div = function(f3) {
      return this.divmod(f3, "div", false).div;
    }, o2.prototype.mod = function(f3) {
      return this.divmod(f3, "mod", false).mod;
    }, o2.prototype.umod = function(f3) {
      return this.divmod(f3, "mod", true).mod;
    }, o2.prototype.divRound = function(f3) {
      var a2 = this.divmod(f3);
      if (a2.mod.isZero())
        return a2.div;
      var c2 = a2.div.negative !== 0 ? a2.mod.isub(f3) : a2.mod, d2 = f3.ushrn(1), m2 = f3.andln(1), x4 = c2.cmp(d2);
      return x4 < 0 || m2 === 1 && x4 === 0 ? a2.div : a2.div.negative !== 0 ? a2.div.isubn(1) : a2.div.iaddn(1);
    }, o2.prototype.modrn = function(f3) {
      var a2 = f3 < 0;
      a2 && (f3 = -f3), i3(f3 <= 67108863);
      for (var c2 = (1 << 26) % f3, d2 = 0, m2 = this.length - 1; m2 >= 0; m2--)
        d2 = (c2 * d2 + (this.words[m2] | 0)) % f3;
      return a2 ? -d2 : d2;
    }, o2.prototype.modn = function(f3) {
      return this.modrn(f3);
    }, o2.prototype.idivn = function(f3) {
      var a2 = f3 < 0;
      a2 && (f3 = -f3), i3(f3 <= 67108863);
      for (var c2 = 0, d2 = this.length - 1; d2 >= 0; d2--) {
        var m2 = (this.words[d2] | 0) + c2 * 67108864;
        this.words[d2] = m2 / f3 | 0, c2 = m2 % f3;
      }
      return this._strip(), a2 ? this.ineg() : this;
    }, o2.prototype.divn = function(f3) {
      return this.clone().idivn(f3);
    }, o2.prototype.egcd = function(f3) {
      i3(f3.negative === 0), i3(!f3.isZero());
      var a2 = this, c2 = f3.clone();
      a2.negative !== 0 ? a2 = a2.umod(f3) : a2 = a2.clone();
      for (var d2 = new o2(1), m2 = new o2(0), x4 = new o2(0), M4 = new o2(1), l = 0; a2.isEven() && c2.isEven(); )
        a2.iushrn(1), c2.iushrn(1), ++l;
      for (var s = c2.clone(), g3 = a2.clone(); !a2.isZero(); ) {
        for (var k2 = 0, u3 = 1; !(a2.words[0] & u3) && k2 < 26; ++k2, u3 <<= 1)
          ;
        if (k2 > 0)
          for (a2.iushrn(k2); k2-- > 0; )
            (d2.isOdd() || m2.isOdd()) && (d2.iadd(s), m2.isub(g3)), d2.iushrn(1), m2.iushrn(1);
        for (var E3 = 0, _2 = 1; !(c2.words[0] & _2) && E3 < 26; ++E3, _2 <<= 1)
          ;
        if (E3 > 0)
          for (c2.iushrn(E3); E3-- > 0; )
            (x4.isOdd() || M4.isOdd()) && (x4.iadd(s), M4.isub(g3)), x4.iushrn(1), M4.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d2.isub(x4), m2.isub(M4)) : (c2.isub(a2), x4.isub(d2), M4.isub(m2));
      }
      return { a: x4, b: M4, gcd: c2.iushln(l) };
    }, o2.prototype._invmp = function(f3) {
      i3(f3.negative === 0), i3(!f3.isZero());
      var a2 = this, c2 = f3.clone();
      a2.negative !== 0 ? a2 = a2.umod(f3) : a2 = a2.clone();
      for (var d2 = new o2(1), m2 = new o2(0), x4 = c2.clone(); a2.cmpn(1) > 0 && c2.cmpn(1) > 0; ) {
        for (var M4 = 0, l = 1; !(a2.words[0] & l) && M4 < 26; ++M4, l <<= 1)
          ;
        if (M4 > 0)
          for (a2.iushrn(M4); M4-- > 0; )
            d2.isOdd() && d2.iadd(x4), d2.iushrn(1);
        for (var s = 0, g3 = 1; !(c2.words[0] & g3) && s < 26; ++s, g3 <<= 1)
          ;
        if (s > 0)
          for (c2.iushrn(s); s-- > 0; )
            m2.isOdd() && m2.iadd(x4), m2.iushrn(1);
        a2.cmp(c2) >= 0 ? (a2.isub(c2), d2.isub(m2)) : (c2.isub(a2), m2.isub(d2));
      }
      var k2;
      return a2.cmpn(1) === 0 ? k2 = d2 : k2 = m2, k2.cmpn(0) < 0 && k2.iadd(f3), k2;
    }, o2.prototype.gcd = function(f3) {
      if (this.isZero())
        return f3.abs();
      if (f3.isZero())
        return this.abs();
      var a2 = this.clone(), c2 = f3.clone();
      a2.negative = 0, c2.negative = 0;
      for (var d2 = 0; a2.isEven() && c2.isEven(); d2++)
        a2.iushrn(1), c2.iushrn(1);
      do {
        for (; a2.isEven(); )
          a2.iushrn(1);
        for (; c2.isEven(); )
          c2.iushrn(1);
        var m2 = a2.cmp(c2);
        if (m2 < 0) {
          var x4 = a2;
          a2 = c2, c2 = x4;
        } else if (m2 === 0 || c2.cmpn(1) === 0)
          break;
        a2.isub(c2);
      } while (true);
      return c2.iushln(d2);
    }, o2.prototype.invm = function(f3) {
      return this.egcd(f3).a.umod(f3);
    }, o2.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o2.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o2.prototype.andln = function(f3) {
      return this.words[0] & f3;
    }, o2.prototype.bincn = function(f3) {
      i3(typeof f3 == "number");
      var a2 = f3 % 26, c2 = (f3 - a2) / 26, d2 = 1 << a2;
      if (this.length <= c2)
        return this._expand(c2 + 1), this.words[c2] |= d2, this;
      for (var m2 = d2, x4 = c2; m2 !== 0 && x4 < this.length; x4++) {
        var M4 = this.words[x4] | 0;
        M4 += m2, m2 = M4 >>> 26, M4 &= 67108863, this.words[x4] = M4;
      }
      return m2 !== 0 && (this.words[x4] = m2, this.length++), this;
    }, o2.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o2.prototype.cmpn = function(f3) {
      var a2 = f3 < 0;
      if (this.negative !== 0 && !a2)
        return -1;
      if (this.negative === 0 && a2)
        return 1;
      this._strip();
      var c2;
      if (this.length > 1)
        c2 = 1;
      else {
        a2 && (f3 = -f3), i3(f3 <= 67108863, "Number is too big");
        var d2 = this.words[0] | 0;
        c2 = d2 === f3 ? 0 : d2 < f3 ? -1 : 1;
      }
      return this.negative !== 0 ? -c2 | 0 : c2;
    }, o2.prototype.cmp = function(f3) {
      if (this.negative !== 0 && f3.negative === 0)
        return -1;
      if (this.negative === 0 && f3.negative !== 0)
        return 1;
      var a2 = this.ucmp(f3);
      return this.negative !== 0 ? -a2 | 0 : a2;
    }, o2.prototype.ucmp = function(f3) {
      if (this.length > f3.length)
        return 1;
      if (this.length < f3.length)
        return -1;
      for (var a2 = 0, c2 = this.length - 1; c2 >= 0; c2--) {
        var d2 = this.words[c2] | 0, m2 = f3.words[c2] | 0;
        if (d2 !== m2) {
          d2 < m2 ? a2 = -1 : d2 > m2 && (a2 = 1);
          break;
        }
      }
      return a2;
    }, o2.prototype.gtn = function(f3) {
      return this.cmpn(f3) === 1;
    }, o2.prototype.gt = function(f3) {
      return this.cmp(f3) === 1;
    }, o2.prototype.gten = function(f3) {
      return this.cmpn(f3) >= 0;
    }, o2.prototype.gte = function(f3) {
      return this.cmp(f3) >= 0;
    }, o2.prototype.ltn = function(f3) {
      return this.cmpn(f3) === -1;
    }, o2.prototype.lt = function(f3) {
      return this.cmp(f3) === -1;
    }, o2.prototype.lten = function(f3) {
      return this.cmpn(f3) <= 0;
    }, o2.prototype.lte = function(f3) {
      return this.cmp(f3) <= 0;
    }, o2.prototype.eqn = function(f3) {
      return this.cmpn(f3) === 0;
    }, o2.prototype.eq = function(f3) {
      return this.cmp(f3) === 0;
    }, o2.red = function(f3) {
      return new Y2(f3);
    }, o2.prototype.toRed = function(f3) {
      return i3(!this.red, "Already a number in reduction context"), i3(this.negative === 0, "red works only with positives"), f3.convertTo(this)._forceRed(f3);
    }, o2.prototype.fromRed = function() {
      return i3(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o2.prototype._forceRed = function(f3) {
      return this.red = f3, this;
    }, o2.prototype.forceRed = function(f3) {
      return i3(!this.red, "Already a number in reduction context"), this._forceRed(f3);
    }, o2.prototype.redAdd = function(f3) {
      return i3(this.red, "redAdd works only with red numbers"), this.red.add(this, f3);
    }, o2.prototype.redIAdd = function(f3) {
      return i3(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f3);
    }, o2.prototype.redSub = function(f3) {
      return i3(this.red, "redSub works only with red numbers"), this.red.sub(this, f3);
    }, o2.prototype.redISub = function(f3) {
      return i3(this.red, "redISub works only with red numbers"), this.red.isub(this, f3);
    }, o2.prototype.redShl = function(f3) {
      return i3(this.red, "redShl works only with red numbers"), this.red.shl(this, f3);
    }, o2.prototype.redMul = function(f3) {
      return i3(this.red, "redMul works only with red numbers"), this.red._verify2(this, f3), this.red.mul(this, f3);
    }, o2.prototype.redIMul = function(f3) {
      return i3(this.red, "redMul works only with red numbers"), this.red._verify2(this, f3), this.red.imul(this, f3);
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
    }, o2.prototype.redPow = function(f3) {
      return i3(this.red && !f3.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f3);
    };
    var H = { k256: null, p224: null, p192: null, p25519: null };
    function L2(b3, f3) {
      this.name = b3, this.p = new o2(f3, 16), this.n = this.p.bitLength(), this.k = new o2(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    L2.prototype._tmp = function() {
      var f3 = new o2(null);
      return f3.words = new Array(Math.ceil(this.n / 13)), f3;
    }, L2.prototype.ireduce = function(f3) {
      var a2 = f3, c2;
      do
        this.split(a2, this.tmp), a2 = this.imulK(a2), a2 = a2.iadd(this.tmp), c2 = a2.bitLength();
      while (c2 > this.n);
      var d2 = c2 < this.n ? -1 : a2.ucmp(this.p);
      return d2 === 0 ? (a2.words[0] = 0, a2.length = 1) : d2 > 0 ? a2.isub(this.p) : a2.strip !== void 0 ? a2.strip() : a2._strip(), a2;
    }, L2.prototype.split = function(f3, a2) {
      f3.iushrn(this.n, 0, a2);
    }, L2.prototype.imulK = function(f3) {
      return f3.imul(this.k);
    };
    function Pt2() {
      L2.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    n2(Pt2, L2), Pt2.prototype.split = function(f3, a2) {
      for (var c2 = 4194303, d2 = Math.min(f3.length, 9), m2 = 0; m2 < d2; m2++)
        a2.words[m2] = f3.words[m2];
      if (a2.length = d2, f3.length <= 9) {
        f3.words[0] = 0, f3.length = 1;
        return;
      }
      var x4 = f3.words[9];
      for (a2.words[a2.length++] = x4 & c2, m2 = 10; m2 < f3.length; m2++) {
        var M4 = f3.words[m2] | 0;
        f3.words[m2 - 10] = (M4 & c2) << 4 | x4 >>> 22, x4 = M4;
      }
      x4 >>>= 22, f3.words[m2 - 10] = x4, x4 === 0 && f3.length > 10 ? f3.length -= 10 : f3.length -= 9;
    }, Pt2.prototype.imulK = function(f3) {
      f3.words[f3.length] = 0, f3.words[f3.length + 1] = 0, f3.length += 2;
      for (var a2 = 0, c2 = 0; c2 < f3.length; c2++) {
        var d2 = f3.words[c2] | 0;
        a2 += d2 * 977, f3.words[c2] = a2 & 67108863, a2 = d2 * 64 + (a2 / 67108864 | 0);
      }
      return f3.words[f3.length - 1] === 0 && (f3.length--, f3.words[f3.length - 1] === 0 && f3.length--), f3;
    };
    function W() {
      L2.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    n2(W, L2);
    function Rt2() {
      L2.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    n2(Rt2, L2);
    function Vt2() {
      L2.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    n2(Vt2, L2), Vt2.prototype.imulK = function(f3) {
      for (var a2 = 0, c2 = 0; c2 < f3.length; c2++) {
        var d2 = (f3.words[c2] | 0) * 19 + a2, m2 = d2 & 67108863;
        d2 >>>= 26, f3.words[c2] = m2, a2 = d2;
      }
      return a2 !== 0 && (f3.words[f3.length++] = a2), f3;
    }, o2._prime = function(f3) {
      if (H[f3])
        return H[f3];
      var a2;
      if (f3 === "k256")
        a2 = new Pt2();
      else if (f3 === "p224")
        a2 = new W();
      else if (f3 === "p192")
        a2 = new Rt2();
      else if (f3 === "p25519")
        a2 = new Vt2();
      else
        throw new Error("Unknown prime " + f3);
      return H[f3] = a2, a2;
    };
    function Y2(b3) {
      if (typeof b3 == "string") {
        var f3 = o2._prime(b3);
        this.m = f3.p, this.prime = f3;
      } else
        i3(b3.gtn(1), "modulus must be greater than 1"), this.m = b3, this.prime = null;
    }
    Y2.prototype._verify1 = function(f3) {
      i3(f3.negative === 0, "red works only with positives"), i3(f3.red, "red works only with red numbers");
    }, Y2.prototype._verify2 = function(f3, a2) {
      i3((f3.negative | a2.negative) === 0, "red works only with positives"), i3(f3.red && f3.red === a2.red, "red works only with red numbers");
    }, Y2.prototype.imod = function(f3) {
      return this.prime ? this.prime.ireduce(f3)._forceRed(this) : (w2(f3, f3.umod(this.m)._forceRed(this)), f3);
    }, Y2.prototype.neg = function(f3) {
      return f3.isZero() ? f3.clone() : this.m.sub(f3)._forceRed(this);
    }, Y2.prototype.add = function(f3, a2) {
      this._verify2(f3, a2);
      var c2 = f3.add(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2._forceRed(this);
    }, Y2.prototype.iadd = function(f3, a2) {
      this._verify2(f3, a2);
      var c2 = f3.iadd(a2);
      return c2.cmp(this.m) >= 0 && c2.isub(this.m), c2;
    }, Y2.prototype.sub = function(f3, a2) {
      this._verify2(f3, a2);
      var c2 = f3.sub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2._forceRed(this);
    }, Y2.prototype.isub = function(f3, a2) {
      this._verify2(f3, a2);
      var c2 = f3.isub(a2);
      return c2.cmpn(0) < 0 && c2.iadd(this.m), c2;
    }, Y2.prototype.shl = function(f3, a2) {
      return this._verify1(f3), this.imod(f3.ushln(a2));
    }, Y2.prototype.imul = function(f3, a2) {
      return this._verify2(f3, a2), this.imod(f3.imul(a2));
    }, Y2.prototype.mul = function(f3, a2) {
      return this._verify2(f3, a2), this.imod(f3.mul(a2));
    }, Y2.prototype.isqr = function(f3) {
      return this.imul(f3, f3.clone());
    }, Y2.prototype.sqr = function(f3) {
      return this.mul(f3, f3);
    }, Y2.prototype.sqrt = function(f3) {
      if (f3.isZero())
        return f3.clone();
      var a2 = this.m.andln(3);
      if (i3(a2 % 2 === 1), a2 === 3) {
        var c2 = this.m.add(new o2(1)).iushrn(2);
        return this.pow(f3, c2);
      }
      for (var d2 = this.m.subn(1), m2 = 0; !d2.isZero() && d2.andln(1) === 0; )
        m2++, d2.iushrn(1);
      i3(!d2.isZero());
      var x4 = new o2(1).toRed(this), M4 = x4.redNeg(), l = this.m.subn(1).iushrn(1), s = this.m.bitLength();
      for (s = new o2(2 * s * s).toRed(this); this.pow(s, l).cmp(M4) !== 0; )
        s.redIAdd(M4);
      for (var g3 = this.pow(s, d2), k2 = this.pow(f3, d2.addn(1).iushrn(1)), u3 = this.pow(f3, d2), E3 = m2; u3.cmp(x4) !== 0; ) {
        for (var _2 = u3, B2 = 0; _2.cmp(x4) !== 0; B2++)
          _2 = _2.redSqr();
        i3(B2 < E3);
        var R3 = this.pow(g3, new o2(1).iushln(E3 - B2 - 1));
        k2 = k2.redMul(R3), g3 = R3.redSqr(), u3 = u3.redMul(g3), E3 = B2;
      }
      return k2;
    }, Y2.prototype.invm = function(f3) {
      var a2 = f3._invmp(this.m);
      return a2.negative !== 0 ? (a2.negative = 0, this.imod(a2).redNeg()) : this.imod(a2);
    }, Y2.prototype.pow = function(f3, a2) {
      if (a2.isZero())
        return new o2(1).toRed(this);
      if (a2.cmpn(1) === 0)
        return f3.clone();
      var c2 = 4, d2 = new Array(1 << c2);
      d2[0] = new o2(1).toRed(this), d2[1] = f3;
      for (var m2 = 2; m2 < d2.length; m2++)
        d2[m2] = this.mul(d2[m2 - 1], f3);
      var x4 = d2[0], M4 = 0, l = 0, s = a2.bitLength() % 26;
      for (s === 0 && (s = 26), m2 = a2.length - 1; m2 >= 0; m2--) {
        for (var g3 = a2.words[m2], k2 = s - 1; k2 >= 0; k2--) {
          var u3 = g3 >> k2 & 1;
          if (x4 !== d2[0] && (x4 = this.sqr(x4)), u3 === 0 && M4 === 0) {
            l = 0;
            continue;
          }
          M4 <<= 1, M4 |= u3, l++, !(l !== c2 && (m2 !== 0 || k2 !== 0)) && (x4 = this.mul(x4, d2[M4]), l = 0, M4 = 0);
        }
        s = 26;
      }
      return x4;
    }, Y2.prototype.convertTo = function(f3) {
      var a2 = f3.umod(this.m);
      return a2 === f3 ? a2.clone() : a2;
    }, Y2.prototype.convertFrom = function(f3) {
      var a2 = f3.clone();
      return a2.red = null, a2;
    }, o2.mont = function(f3) {
      return new Wt2(f3);
    };
    function Wt2(b3) {
      Y2.call(this, b3), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o2(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    n2(Wt2, Y2), Wt2.prototype.convertTo = function(f3) {
      return this.imod(f3.ushln(this.shift));
    }, Wt2.prototype.convertFrom = function(f3) {
      var a2 = this.imod(f3.mul(this.rinv));
      return a2.red = null, a2;
    }, Wt2.prototype.imul = function(f3, a2) {
      if (f3.isZero() || a2.isZero())
        return f3.words[0] = 0, f3.length = 1, f3;
      var c2 = f3.imul(a2), d2 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m2 = c2.isub(d2).iushrn(this.shift), x4 = m2;
      return m2.cmp(this.m) >= 0 ? x4 = m2.isub(this.m) : m2.cmpn(0) < 0 && (x4 = m2.iadd(this.m)), x4._forceRed(this);
    }, Wt2.prototype.mul = function(f3, a2) {
      if (f3.isZero() || a2.isZero())
        return new o2(0)._forceRed(this);
      var c2 = f3.mul(a2), d2 = c2.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m2 = c2.isub(d2).iushrn(this.shift), x4 = m2;
      return m2.cmp(this.m) >= 0 ? x4 = m2.isub(this.m) : m2.cmpn(0) < 0 && (x4 = m2.iadd(this.m)), x4._forceRed(this);
    }, Wt2.prototype.invm = function(f3) {
      var a2 = this.imod(f3._invmp(this.m).mul(this.r2));
      return a2._forceRed(this);
    };
  })(e, Kn);
})(Xn);
var K = Xn.exports;
var $n = "bignumber/5.7.0";
var Dr = K.BN;
var Ae = new z($n);
var Ni = {};
var Zn = 9007199254740991;
function Hs(e) {
  return e != null && (V.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Jt(e) || typeof e == "bigint" || nr(e));
}
var tf = false;
var V = class _V {
  constructor(t, r2) {
    t !== Ni && Ae.throwError("cannot call constructor directly; use BigNumber.from", z.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = r2, this._isBigNumber = true, Object.freeze(this);
  }
  fromTwos(t) {
    return zt(j(this).fromTwos(t));
  }
  toTwos(t) {
    return zt(j(this).toTwos(t));
  }
  abs() {
    return this._hex[0] === "-" ? _V.from(this._hex.substring(1)) : this;
  }
  add(t) {
    return zt(j(this).add(j(t)));
  }
  sub(t) {
    return zt(j(this).sub(j(t)));
  }
  div(t) {
    return _V.from(t).isZero() && $t("division-by-zero", "div"), zt(j(this).div(j(t)));
  }
  mul(t) {
    return zt(j(this).mul(j(t)));
  }
  mod(t) {
    const r2 = j(t);
    return r2.isNeg() && $t("division-by-zero", "mod"), zt(j(this).umod(r2));
  }
  pow(t) {
    const r2 = j(t);
    return r2.isNeg() && $t("negative-power", "pow"), zt(j(this).pow(r2));
  }
  and(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && $t("unbound-bitwise-result", "and"), zt(j(this).and(r2));
  }
  or(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && $t("unbound-bitwise-result", "or"), zt(j(this).or(r2));
  }
  xor(t) {
    const r2 = j(t);
    return (this.isNegative() || r2.isNeg()) && $t("unbound-bitwise-result", "xor"), zt(j(this).xor(r2));
  }
  mask(t) {
    return (this.isNegative() || t < 0) && $t("negative-width", "mask"), zt(j(this).maskn(t));
  }
  shl(t) {
    return (this.isNegative() || t < 0) && $t("negative-width", "shl"), zt(j(this).shln(t));
  }
  shr(t) {
    return (this.isNegative() || t < 0) && $t("negative-width", "shr"), zt(j(this).shrn(t));
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
      $t("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return Ae.throwError("this platform does not support BigInt", z.errors.UNSUPPORTED_OPERATION, { value: this.toString() });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? tf || (tf = true, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", z.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", z.errors.UNEXPECTED_ARGUMENT, {})), j(this).toString(10);
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
      return t.match(/^-?0x[0-9a-f]+$/i) ? new _V(Ni, mr(t)) : t.match(/^-?[0-9]+$/) ? new _V(Ni, mr(new Dr(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
    if (typeof t == "number")
      return t % 1 && $t("underflow", "BigNumber.from", t), (t >= Zn || t <= -Zn) && $t("overflow", "BigNumber.from", t), _V.from(String(t));
    const r2 = t;
    if (typeof r2 == "bigint")
      return _V.from(r2.toString());
    if (nr(r2))
      return _V.from(Kt(r2));
    if (r2)
      if (r2.toHexString) {
        const i3 = r2.toHexString();
        if (typeof i3 == "string")
          return _V.from(i3);
      } else {
        let i3 = r2._hex;
        if (i3 == null && r2.type === "BigNumber" && (i3 = r2.hex), typeof i3 == "string" && (Jt(i3) || i3[0] === "-" && Jt(i3.substring(1))))
          return _V.from(i3);
      }
    return Ae.throwArgumentError("invalid BigNumber value", "value", t);
  }
  static isBigNumber(t) {
    return !!(t && t._isBigNumber);
  }
};
function mr(e) {
  if (typeof e != "string")
    return mr(e.toString(16));
  if (e[0] === "-")
    return e = e.substring(1), e[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e), e = mr(e), e === "0x00" ? e : "-" + e;
  if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x")
    return "0x00";
  for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00"; )
    e = "0x" + e.substring(4);
  return e;
}
function zt(e) {
  return V.from(mr(e));
}
function j(e) {
  const t = V.from(e).toHexString();
  return t[0] === "-" ? new Dr("-" + t.substring(3), 16) : new Dr(t.substring(2), 16);
}
function $t(e, t, r2) {
  const i3 = { fault: e, operation: t };
  return r2 != null && (i3.value = r2), Ae.throwError(e, z.errors.NUMERIC_FAULT, i3);
}
function Ls(e) {
  return new Dr(e, 36).toString(16);
}
var Ht = new z($n);
var Ar = {};
var ef = V.from(0);
var rf = V.from(-1);
function nf(e, t, r2, i3) {
  const n2 = { fault: t, operation: r2 };
  return i3 !== void 0 && (n2.value = i3), Ht.throwError(e, z.errors.NUMERIC_FAULT, n2);
}
var br = "0";
for (; br.length < 256; )
  br += br;
function _i(e) {
  if (typeof e != "number")
    try {
      e = V.from(e).toNumber();
    } catch {
    }
  return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + br.substring(0, e) : Ht.throwArgumentError("invalid decimal size", "decimals", e);
}
function Bi(e, t) {
  t == null && (t = 0);
  const r2 = _i(t);
  e = V.from(e);
  const i3 = e.lt(ef);
  i3 && (e = e.mul(rf));
  let n2 = e.mod(r2).toString();
  for (; n2.length < r2.length - 1; )
    n2 = "0" + n2;
  n2 = n2.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const o2 = e.div(r2).toString();
  return r2.length === 1 ? e = o2 : e = o2 + "." + n2, i3 && (e = "-" + e), e;
}
function be(e, t) {
  t == null && (t = 0);
  const r2 = _i(t);
  (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht.throwArgumentError("invalid decimal value", "value", e);
  const i3 = e.substring(0, 1) === "-";
  i3 && (e = e.substring(1)), e === "." && Ht.throwArgumentError("missing value", "value", e);
  const n2 = e.split(".");
  n2.length > 2 && Ht.throwArgumentError("too many decimal points", "value", e);
  let o2 = n2[0], h3 = n2[1];
  for (o2 || (o2 = "0"), h3 || (h3 = "0"); h3[h3.length - 1] === "0"; )
    h3 = h3.substring(0, h3.length - 1);
  for (h3.length > r2.length - 1 && nf("fractional component exceeds decimals", "underflow", "parseFixed"), h3 === "" && (h3 = "0"); h3.length < r2.length - 1; )
    h3 += "0";
  const p3 = V.from(o2), A3 = V.from(h3);
  let v4 = p3.mul(r2).add(A3);
  return i3 && (v4 = v4.mul(rf)), v4;
}
var vr = class _vr {
  constructor(t, r2, i3, n2) {
    t !== Ar && Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from", z.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.signed = r2, this.width = i3, this.decimals = n2, this.name = (r2 ? "" : "u") + "fixed" + String(i3) + "x" + String(n2), this._multiplier = _i(n2), Object.freeze(this);
  }
  static from(t) {
    if (t instanceof _vr)
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
      const o2 = (h3, p3, A3) => t[h3] == null ? A3 : (typeof t[h3] !== p3 && Ht.throwArgumentError("invalid fixed format (" + h3 + " not " + p3 + ")", "format." + h3, t[h3]), t[h3]);
      r2 = o2("signed", "boolean", r2), i3 = o2("width", "number", i3), n2 = o2("decimals", "number", n2);
    }
    return i3 % 8 && Ht.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i3), n2 > 80 && Ht.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n2), new _vr(Ar, r2, i3, n2);
  }
};
var Ut = class _Ut {
  constructor(t, r2, i3, n2) {
    t !== Ar && Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from", z.errors.UNSUPPORTED_OPERATION, { operation: "new FixedFormat" }), this.format = n2, this._hex = r2, this._value = i3, this._isFixedNumber = true, Object.freeze(this);
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
    return this.isNegative() && i3 && (r2 = r2.subUnsafe(ff.toFormat(r2.format))), r2;
  }
  ceiling() {
    const t = this.toString().split(".");
    t.length === 1 && t.push("0");
    let r2 = _Ut.from(t[0], this.format);
    const i3 = !t[1].match(/^(0*)$/);
    return !this.isNegative() && i3 && (r2 = r2.addUnsafe(ff.toFormat(r2.format))), r2;
  }
  round(t) {
    t == null && (t = 0);
    const r2 = this.toString().split(".");
    if (r2.length === 1 && r2.push("0"), (t < 0 || t > 80 || t % 1) && Ht.throwArgumentError("invalid decimal count", "decimals", t), r2[1].length <= t)
      return this;
    const i3 = _Ut.from("1" + br.substring(0, t), this.format), n2 = zs.toFormat(this.format);
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
    return i3 == null && r2 != null && !Hs(r2) && (i3 = r2, r2 = null), r2 == null && (r2 = 0), i3 == null && (i3 = "fixed"), _Ut.fromString(Bi(t, r2), vr.from(i3));
  }
  static fromString(t, r2) {
    r2 == null && (r2 = "fixed");
    const i3 = vr.from(r2), n2 = be(t, i3.decimals);
    !i3.signed && n2.lt(ef) && nf("unsigned value cannot be negative", "overflow", "value", t);
    let o2 = null;
    i3.signed ? o2 = n2.toTwos(i3.width).toHexString() : (o2 = n2.toHexString(), o2 = oe(o2, i3.width / 8));
    const h3 = Bi(n2, i3.decimals);
    return new _Ut(Ar, o2, h3, i3);
  }
  static fromBytes(t, r2) {
    r2 == null && (r2 = "fixed");
    const i3 = vr.from(r2);
    if (Ot(t).length > i3.width / 8)
      throw new Error("overflow");
    let n2 = V.from(t);
    i3.signed && (n2 = n2.fromTwos(i3.width));
    const o2 = n2.toTwos((i3.signed ? 0 : 1) + i3.width).toHexString(), h3 = Bi(n2, i3.decimals);
    return new _Ut(Ar, o2, h3, i3);
  }
  static from(t, r2) {
    if (typeof t == "string")
      return _Ut.fromString(t, r2);
    if (nr(t))
      return _Ut.fromBytes(t, r2);
    try {
      return _Ut.fromValue(t, 0, r2);
    } catch (i3) {
      if (i3.code !== z.errors.INVALID_ARGUMENT)
        throw i3;
    }
    return Ht.throwArgumentError("invalid FixedNumber value", "value", t);
  }
  static isFixedNumber(t) {
    return !!(t && t._isFixedNumber);
  }
};
var ff = Ut.from(1);
var zs = Ut.from("0.5");
var js = "strings/5.7.0";
var of = new z(js);
var Fr;
(function(e) {
  e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Fr || (Fr = {}));
var fr;
(function(e) {
  e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(fr || (fr = {}));
function Qs(e, t, r2, i3, n2) {
  return of.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r2);
}
function sf(e, t, r2, i3, n2) {
  if (e === fr.BAD_PREFIX || e === fr.UNEXPECTED_CONTINUE) {
    let o2 = 0;
    for (let h3 = t + 1; h3 < r2.length && r2[h3] >> 6 === 2; h3++)
      o2++;
    return o2;
  }
  return e === fr.OVERRUN ? r2.length - t - 1 : 0;
}
function Js(e, t, r2, i3, n2) {
  return e === fr.OVERLONG ? (i3.push(n2), 0) : (i3.push(65533), sf(e, t, r2));
}
Object.freeze({ error: Qs, ignore: sf, replace: Js });
function Ci(e, t = Fr.current) {
  t != Fr.current && (of.checkNormalize(), e = e.normalize(t));
  let r2 = [];
  for (let i3 = 0; i3 < e.length; i3++) {
    const n2 = e.charCodeAt(i3);
    if (n2 < 128)
      r2.push(n2);
    else if (n2 < 2048)
      r2.push(n2 >> 6 | 192), r2.push(n2 & 63 | 128);
    else if ((n2 & 64512) == 55296) {
      i3++;
      const o2 = e.charCodeAt(i3);
      if (i3 >= e.length || (o2 & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const h3 = 65536 + ((n2 & 1023) << 10) + (o2 & 1023);
      r2.push(h3 >> 18 | 240), r2.push(h3 >> 12 & 63 | 128), r2.push(h3 >> 6 & 63 | 128), r2.push(h3 & 63 | 128);
    } else
      r2.push(n2 >> 12 | 224), r2.push(n2 >> 6 & 63 | 128), r2.push(n2 & 63 | 128);
  }
  return Ot(r2);
}
function Gs(e) {
  if (e.length % 4 !== 0)
    throw new Error("bad data");
  let t = [];
  for (let r2 = 0; r2 < e.length; r2 += 4)
    t.push(parseInt(e.substring(r2, r2 + 4), 16));
  return t;
}
function Ri(e, t) {
  t || (t = function(n2) {
    return [parseInt(n2, 16)];
  });
  let r2 = 0, i3 = {};
  return e.split(",").forEach((n2) => {
    let o2 = n2.split(":");
    r2 += parseInt(o2[0], 16), i3[r2] = t(o2[1]);
  }), i3;
}
function af(e) {
  let t = 0;
  return e.split(",").map((r2) => {
    let i3 = r2.split("-");
    i3.length === 1 ? i3[1] = "0" : i3[1] === "" && (i3[1] = "1");
    let n2 = t + parseInt(i3[0], 16);
    return t = parseInt(i3[1], 16), { l: n2, h: t };
  });
}
af("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)), Ri("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Ri("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Ri("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", Gs), af("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
var uf = "hash/5.7.0";
function Ys(e) {
  e = atob(e);
  const t = [];
  for (let r2 = 0; r2 < e.length; r2++)
    t.push(e.charCodeAt(r2));
  return Ot(t);
}
function hf(e, t) {
  t == null && (t = 1);
  const r2 = [], i3 = r2.forEach, n2 = function(o2, h3) {
    i3.call(o2, function(p3) {
      h3 > 0 && Array.isArray(p3) ? n2(p3, h3 - 1) : r2.push(p3);
    });
  };
  return n2(e, t), r2;
}
function Vs(e) {
  const t = {};
  for (let r2 = 0; r2 < e.length; r2++) {
    const i3 = e[r2];
    t[i3[0]] = i3[1];
  }
  return t;
}
function Ws(e) {
  let t = 0;
  function r2() {
    return e[t++] << 8 | e[t++];
  }
  let i3 = r2(), n2 = 1, o2 = [0, 1];
  for (let H = 1; H < i3; H++)
    o2.push(n2 += r2());
  let h3 = r2(), p3 = t;
  t += h3;
  let A3 = 0, v4 = 0;
  function w2() {
    return A3 == 0 && (v4 = v4 << 8 | e[t++], A3 = 8), v4 >> --A3 & 1;
  }
  const y5 = 31, S2 = Math.pow(2, y5), N2 = S2 >>> 1, I3 = N2 >> 1, C4 = S2 - 1;
  let D3 = 0;
  for (let H = 0; H < y5; H++)
    D3 = D3 << 1 | w2();
  let U4 = [], J = 0, Bt2 = S2;
  for (; ; ) {
    let H = Math.floor(((D3 - J + 1) * n2 - 1) / Bt2), L2 = 0, Pt2 = i3;
    for (; Pt2 - L2 > 1; ) {
      let Vt2 = L2 + Pt2 >>> 1;
      H < o2[Vt2] ? Pt2 = Vt2 : L2 = Vt2;
    }
    if (L2 == 0)
      break;
    U4.push(L2);
    let W = J + Math.floor(Bt2 * o2[L2] / n2), Rt2 = J + Math.floor(Bt2 * o2[L2 + 1] / n2) - 1;
    for (; !((W ^ Rt2) & N2); )
      D3 = D3 << 1 & C4 | w2(), W = W << 1 & C4, Rt2 = Rt2 << 1 & C4 | 1;
    for (; W & ~Rt2 & I3; )
      D3 = D3 & N2 | D3 << 1 & C4 >>> 1 | w2(), W = W << 1 ^ N2, Rt2 = (Rt2 ^ N2) << 1 | N2 | 1;
    J = W, Bt2 = 1 + Rt2 - W;
  }
  let G2 = i3 - 4;
  return U4.map((H) => {
    switch (H - G2) {
      case 3:
        return G2 + 65792 + (e[p3++] << 16 | e[p3++] << 8 | e[p3++]);
      case 2:
        return G2 + 256 + (e[p3++] << 8 | e[p3++]);
      case 1:
        return G2 + e[p3++];
      default:
        return H - 1;
    }
  });
}
function Xs(e) {
  let t = 0;
  return () => e[t++];
}
function $s(e) {
  return Xs(Ws(e));
}
function Zs(e) {
  return e & 1 ? ~e >> 1 : e >> 1;
}
function t0(e, t) {
  let r2 = Array(e);
  for (let i3 = 0; i3 < e; i3++)
    r2[i3] = 1 + t();
  return r2;
}
function cf(e, t) {
  let r2 = Array(e);
  for (let i3 = 0, n2 = -1; i3 < e; i3++)
    r2[i3] = n2 += 1 + t();
  return r2;
}
function e0(e, t) {
  let r2 = Array(e);
  for (let i3 = 0, n2 = 0; i3 < e; i3++)
    r2[i3] = n2 += Zs(t());
  return r2;
}
function Ur(e, t) {
  let r2 = cf(e(), e), i3 = e(), n2 = cf(i3, e), o2 = t0(i3, e);
  for (let h3 = 0; h3 < i3; h3++)
    for (let p3 = 0; p3 < o2[h3]; p3++)
      r2.push(n2[h3] + p3);
  return t ? r2.map((h3) => t[h3]) : r2;
}
function r0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0)
      break;
    t.push(n0(r2, e));
  }
  for (; ; ) {
    let r2 = e() - 1;
    if (r2 < 0)
      break;
    t.push(f0(r2, e));
  }
  return Vs(hf(t));
}
function i0(e) {
  let t = [];
  for (; ; ) {
    let r2 = e();
    if (r2 == 0)
      break;
    t.push(r2);
  }
  return t;
}
function lf(e, t, r2) {
  let i3 = Array(e).fill(void 0).map(() => []);
  for (let n2 = 0; n2 < t; n2++)
    e0(e, r2).forEach((o2, h3) => i3[h3].push(o2));
  return i3;
}
function n0(e, t) {
  let r2 = 1 + t(), i3 = t(), n2 = i0(t), o2 = lf(n2.length, 1 + e, t);
  return hf(o2.map((h3, p3) => {
    const A3 = h3[0], v4 = h3.slice(1);
    return Array(n2[p3]).fill(void 0).map((w2, y5) => {
      let S2 = y5 * i3;
      return [A3 + y5 * r2, v4.map((N2) => N2 + S2)];
    });
  }));
}
function f0(e, t) {
  let r2 = 1 + t();
  return lf(r2, 1 + e, t).map((n2) => [n2[0], n2.slice(1)]);
}
function o0(e) {
  let t = Ur(e).sort((i3, n2) => i3 - n2);
  return r2();
  function r2() {
    let i3 = [];
    for (; ; ) {
      let v4 = Ur(e, t);
      if (v4.length == 0)
        break;
      i3.push({ set: new Set(v4), node: r2() });
    }
    i3.sort((v4, w2) => w2.set.size - v4.set.size);
    let n2 = e(), o2 = n2 % 3;
    n2 = n2 / 3 | 0;
    let h3 = !!(n2 & 1);
    n2 >>= 1;
    let p3 = n2 == 1, A3 = n2 == 2;
    return { branches: i3, valid: o2, fe0f: h3, save: p3, check: A3 };
  }
}
function s0() {
  return $s(Ys("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
var kr = s0();
new Set(Ur(kr)), new Set(Ur(kr)), r0(kr), o0(kr), new z(uf);
var a0 = new Uint8Array(32);
a0.fill(0);
var u0 = `Ethereum Signed Message:
`;
function df(e) {
  return typeof e == "string" && (e = Ci(e)), Ii(Ds([Ci(u0), Ci(String(e.length)), e]));
}
var h0 = "rlp/5.7.0";
new z(h0);
var c0 = "address/5.7.0";
var yr = new z(c0);
function pf(e) {
  Jt(e, 20) || yr.throwArgumentError("invalid address", "address", e), e = e.toLowerCase();
  const t = e.substring(2).split(""), r2 = new Uint8Array(40);
  for (let n2 = 0; n2 < 40; n2++)
    r2[n2] = t[n2].charCodeAt(0);
  const i3 = Ot(Ii(r2));
  for (let n2 = 0; n2 < 40; n2 += 2)
    i3[n2 >> 1] >> 4 >= 8 && (t[n2] = t[n2].toUpperCase()), (i3[n2 >> 1] & 15) >= 8 && (t[n2 + 1] = t[n2 + 1].toUpperCase());
  return "0x" + t.join("");
}
var l0 = 9007199254740991;
function d0(e) {
  return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
}
var Oi = {};
for (let e = 0; e < 10; e++)
  Oi[String(e)] = String(e);
for (let e = 0; e < 26; e++)
  Oi[String.fromCharCode(65 + e)] = String(10 + e);
var vf = Math.floor(d0(l0));
function p0(e) {
  e = e.toUpperCase(), e = e.substring(4) + e.substring(0, 2) + "00";
  let t = e.split("").map((i3) => Oi[i3]).join("");
  for (; t.length >= vf; ) {
    let i3 = t.substring(0, vf);
    t = parseInt(i3, 10) % 97 + t.substring(i3.length);
  }
  let r2 = String(98 - parseInt(t, 10) % 97);
  for (; r2.length < 2; )
    r2 = "0" + r2;
  return r2;
}
function v0(e) {
  let t = null;
  if (typeof e != "string" && yr.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/))
    e.substring(0, 2) !== "0x" && (e = "0x" + e), t = pf(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && yr.throwArgumentError("bad address checksum", "address", e);
  else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (e.substring(2, 4) !== p0(e) && yr.throwArgumentError("bad icap checksum", "address", e), t = Ls(e.substring(4)); t.length < 40; )
      t = "0" + t;
    t = pf("0x" + t);
  } else
    yr.throwArgumentError("invalid address", "address", e);
  return t;
}
var g0 = "properties/5.7.0";
new z(g0);
function wr(e, t, r2) {
  Object.defineProperty(e, t, { enumerable: true, value: r2, writable: false });
}
new z(uf);
var m0 = new Uint8Array(32);
m0.fill(0), V.from(-1);
var A0 = V.from(0);
var b0 = V.from(1);
V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(b0.toHexString(), 32), oe(A0.toHexString(), 32);
var se = {};
var Q = {};
var xr = gf;
function gf(e, t) {
  if (!e)
    throw new Error(t || "Assertion failed");
}
gf.equal = function(t, r2, i3) {
  if (t != r2)
    throw new Error(i3 || "Assertion failed: " + t + " != " + r2);
};
var Pi = { exports: {} };
typeof Object.create == "function" ? Pi.exports = function(t, r2) {
  r2 && (t.super_ = r2, t.prototype = Object.create(r2.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }));
} : Pi.exports = function(t, r2) {
  if (r2) {
    t.super_ = r2;
    var i3 = function() {
    };
    i3.prototype = r2.prototype, t.prototype = new i3(), t.prototype.constructor = t;
  }
};
var y0 = xr;
var w0 = Pi.exports;
Q.inherits = w0;
function x0(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? false : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function M0(e, t) {
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
        o2 < 128 ? r2[i3++] = o2 : o2 < 2048 ? (r2[i3++] = o2 >> 6 | 192, r2[i3++] = o2 & 63 | 128) : x0(e, n2) ? (o2 = 65536 + ((o2 & 1023) << 10) + (e.charCodeAt(++n2) & 1023), r2[i3++] = o2 >> 18 | 240, r2[i3++] = o2 >> 12 & 63 | 128, r2[i3++] = o2 >> 6 & 63 | 128, r2[i3++] = o2 & 63 | 128) : (r2[i3++] = o2 >> 12 | 224, r2[i3++] = o2 >> 6 & 63 | 128, r2[i3++] = o2 & 63 | 128);
      }
  else
    for (n2 = 0; n2 < e.length; n2++)
      r2[n2] = e[n2] | 0;
  return r2;
}
Q.toArray = M0;
function E0(e) {
  for (var t = "", r2 = 0; r2 < e.length; r2++)
    t += Af(e[r2].toString(16));
  return t;
}
Q.toHex = E0;
function mf(e) {
  var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
  return t >>> 0;
}
Q.htonl = mf;
function S0(e, t) {
  for (var r2 = "", i3 = 0; i3 < e.length; i3++) {
    var n2 = e[i3];
    t === "little" && (n2 = mf(n2)), r2 += bf(n2.toString(16));
  }
  return r2;
}
Q.toHex32 = S0;
function Af(e) {
  return e.length === 1 ? "0" + e : e;
}
Q.zero2 = Af;
function bf(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q.zero8 = bf;
function I0(e, t, r2, i3) {
  var n2 = r2 - t;
  y0(n2 % 4 === 0);
  for (var o2 = new Array(n2 / 4), h3 = 0, p3 = t; h3 < o2.length; h3++, p3 += 4) {
    var A3;
    i3 === "big" ? A3 = e[p3] << 24 | e[p3 + 1] << 16 | e[p3 + 2] << 8 | e[p3 + 3] : A3 = e[p3 + 3] << 24 | e[p3 + 2] << 16 | e[p3 + 1] << 8 | e[p3], o2[h3] = A3 >>> 0;
  }
  return o2;
}
Q.join32 = I0;
function N0(e, t) {
  for (var r2 = new Array(e.length * 4), i3 = 0, n2 = 0; i3 < e.length; i3++, n2 += 4) {
    var o2 = e[i3];
    t === "big" ? (r2[n2] = o2 >>> 24, r2[n2 + 1] = o2 >>> 16 & 255, r2[n2 + 2] = o2 >>> 8 & 255, r2[n2 + 3] = o2 & 255) : (r2[n2 + 3] = o2 >>> 24, r2[n2 + 2] = o2 >>> 16 & 255, r2[n2 + 1] = o2 >>> 8 & 255, r2[n2] = o2 & 255);
  }
  return r2;
}
Q.split32 = N0;
function _0(e, t) {
  return e >>> t | e << 32 - t;
}
Q.rotr32 = _0;
function B0(e, t) {
  return e << t | e >>> 32 - t;
}
Q.rotl32 = B0;
function C0(e, t) {
  return e + t >>> 0;
}
Q.sum32 = C0;
function R0(e, t, r2) {
  return e + t + r2 >>> 0;
}
Q.sum32_3 = R0;
function O0(e, t, r2, i3) {
  return e + t + r2 + i3 >>> 0;
}
Q.sum32_4 = O0;
function P0(e, t, r2, i3, n2) {
  return e + t + r2 + i3 + n2 >>> 0;
}
Q.sum32_5 = P0;
function T0(e, t, r2, i3) {
  var n2 = e[t], o2 = e[t + 1], h3 = i3 + o2 >>> 0, p3 = (h3 < i3 ? 1 : 0) + r2 + n2;
  e[t] = p3 >>> 0, e[t + 1] = h3;
}
Q.sum64 = T0;
function D0(e, t, r2, i3) {
  var n2 = t + i3 >>> 0, o2 = (n2 < t ? 1 : 0) + e + r2;
  return o2 >>> 0;
}
Q.sum64_hi = D0;
function F0(e, t, r2, i3) {
  var n2 = t + i3;
  return n2 >>> 0;
}
Q.sum64_lo = F0;
function U0(e, t, r2, i3, n2, o2, h3, p3) {
  var A3 = 0, v4 = t;
  v4 = v4 + i3 >>> 0, A3 += v4 < t ? 1 : 0, v4 = v4 + o2 >>> 0, A3 += v4 < o2 ? 1 : 0, v4 = v4 + p3 >>> 0, A3 += v4 < p3 ? 1 : 0;
  var w2 = e + r2 + n2 + h3 + A3;
  return w2 >>> 0;
}
Q.sum64_4_hi = U0;
function k0(e, t, r2, i3, n2, o2, h3, p3) {
  var A3 = t + i3 + o2 + p3;
  return A3 >>> 0;
}
Q.sum64_4_lo = k0;
function q0(e, t, r2, i3, n2, o2, h3, p3, A3, v4) {
  var w2 = 0, y5 = t;
  y5 = y5 + i3 >>> 0, w2 += y5 < t ? 1 : 0, y5 = y5 + o2 >>> 0, w2 += y5 < o2 ? 1 : 0, y5 = y5 + p3 >>> 0, w2 += y5 < p3 ? 1 : 0, y5 = y5 + v4 >>> 0, w2 += y5 < v4 ? 1 : 0;
  var S2 = e + r2 + n2 + h3 + A3 + w2;
  return S2 >>> 0;
}
Q.sum64_5_hi = q0;
function K0(e, t, r2, i3, n2, o2, h3, p3, A3, v4) {
  var w2 = t + i3 + o2 + p3 + v4;
  return w2 >>> 0;
}
Q.sum64_5_lo = K0;
function H0(e, t, r2) {
  var i3 = t << 32 - r2 | e >>> r2;
  return i3 >>> 0;
}
Q.rotr64_hi = H0;
function L0(e, t, r2) {
  var i3 = e << 32 - r2 | t >>> r2;
  return i3 >>> 0;
}
Q.rotr64_lo = L0;
function z0(e, t, r2) {
  return e >>> r2;
}
Q.shr64_hi = z0;
function j0(e, t, r2) {
  var i3 = e << 32 - r2 | t >>> r2;
  return i3 >>> 0;
}
Q.shr64_lo = j0;
var or = {};
var yf = Q;
var Q0 = xr;
function qr() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
or.BlockHash = qr, qr.prototype.update = function(t, r2) {
  if (t = yf.toArray(t, r2), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var i3 = t.length % this._delta8;
    this.pending = t.slice(t.length - i3, t.length), this.pending.length === 0 && (this.pending = null), t = yf.join32(t, 0, t.length - i3, this.endian);
    for (var n2 = 0; n2 < t.length; n2 += this._delta32)
      this._update(t, n2, n2 + this._delta32);
  }
  return this;
}, qr.prototype.digest = function(t) {
  return this.update(this._pad()), Q0(this.pending === null), this._digest(t);
}, qr.prototype._pad = function() {
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
var sr = {};
var ae = {};
var J0 = Q;
var ue = J0.rotr32;
function G0(e, t, r2, i3) {
  if (e === 0)
    return wf(t, r2, i3);
  if (e === 1 || e === 3)
    return Mf(t, r2, i3);
  if (e === 2)
    return xf(t, r2, i3);
}
ae.ft_1 = G0;
function wf(e, t, r2) {
  return e & t ^ ~e & r2;
}
ae.ch32 = wf;
function xf(e, t, r2) {
  return e & t ^ e & r2 ^ t & r2;
}
ae.maj32 = xf;
function Mf(e, t, r2) {
  return e ^ t ^ r2;
}
ae.p32 = Mf;
function Y0(e) {
  return ue(e, 2) ^ ue(e, 13) ^ ue(e, 22);
}
ae.s0_256 = Y0;
function V0(e) {
  return ue(e, 6) ^ ue(e, 11) ^ ue(e, 25);
}
ae.s1_256 = V0;
function W0(e) {
  return ue(e, 7) ^ ue(e, 18) ^ e >>> 3;
}
ae.g0_256 = W0;
function X0(e) {
  return ue(e, 17) ^ ue(e, 19) ^ e >>> 10;
}
ae.g1_256 = X0;
var ar = Q;
var $0 = or;
var Z0 = ae;
var Ti = ar.rotl32;
var Mr = ar.sum32;
var ta = ar.sum32_5;
var ea = Z0.ft_1;
var Ef = $0.BlockHash;
var ra = [1518500249, 1859775393, 2400959708, 3395469782];
function he() {
  if (!(this instanceof he))
    return new he();
  Ef.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
}
ar.inherits(he, Ef);
var ia = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r2) {
  for (var i3 = this.W, n2 = 0; n2 < 16; n2++)
    i3[n2] = t[r2 + n2];
  for (; n2 < i3.length; n2++)
    i3[n2] = Ti(i3[n2 - 3] ^ i3[n2 - 8] ^ i3[n2 - 14] ^ i3[n2 - 16], 1);
  var o2 = this.h[0], h3 = this.h[1], p3 = this.h[2], A3 = this.h[3], v4 = this.h[4];
  for (n2 = 0; n2 < i3.length; n2++) {
    var w2 = ~~(n2 / 20), y5 = ta(Ti(o2, 5), ea(w2, h3, p3, A3), v4, i3[n2], ra[w2]);
    v4 = A3, A3 = p3, p3 = Ti(h3, 30), h3 = o2, o2 = y5;
  }
  this.h[0] = Mr(this.h[0], o2), this.h[1] = Mr(this.h[1], h3), this.h[2] = Mr(this.h[2], p3), this.h[3] = Mr(this.h[3], A3), this.h[4] = Mr(this.h[4], v4);
}, he.prototype._digest = function(t) {
  return t === "hex" ? ar.toHex32(this.h, "big") : ar.split32(this.h, "big");
};
var ur = Q;
var na = or;
var hr = ae;
var fa = xr;
var ie = ur.sum32;
var oa = ur.sum32_4;
var sa = ur.sum32_5;
var aa = hr.ch32;
var ua = hr.maj32;
var ha = hr.s0_256;
var ca = hr.s1_256;
var la = hr.g0_256;
var da = hr.g1_256;
var Sf = na.BlockHash;
var pa = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function ce() {
  if (!(this instanceof ce))
    return new ce();
  Sf.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = pa, this.W = new Array(64);
}
ur.inherits(ce, Sf);
var If = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r2) {
  for (var i3 = this.W, n2 = 0; n2 < 16; n2++)
    i3[n2] = t[r2 + n2];
  for (; n2 < i3.length; n2++)
    i3[n2] = oa(da(i3[n2 - 2]), i3[n2 - 7], la(i3[n2 - 15]), i3[n2 - 16]);
  var o2 = this.h[0], h3 = this.h[1], p3 = this.h[2], A3 = this.h[3], v4 = this.h[4], w2 = this.h[5], y5 = this.h[6], S2 = this.h[7];
  for (fa(this.k.length === i3.length), n2 = 0; n2 < i3.length; n2++) {
    var N2 = sa(S2, ca(v4), aa(v4, w2, y5), this.k[n2], i3[n2]), I3 = ie(ha(o2), ua(o2, h3, p3));
    S2 = y5, y5 = w2, w2 = v4, v4 = ie(A3, N2), A3 = p3, p3 = h3, h3 = o2, o2 = ie(N2, I3);
  }
  this.h[0] = ie(this.h[0], o2), this.h[1] = ie(this.h[1], h3), this.h[2] = ie(this.h[2], p3), this.h[3] = ie(this.h[3], A3), this.h[4] = ie(this.h[4], v4), this.h[5] = ie(this.h[5], w2), this.h[6] = ie(this.h[6], y5), this.h[7] = ie(this.h[7], S2);
}, ce.prototype._digest = function(t) {
  return t === "hex" ? ur.toHex32(this.h, "big") : ur.split32(this.h, "big");
};
var Di = Q;
var Nf = If;
function ye() {
  if (!(this instanceof ye))
    return new ye();
  Nf.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
}
Di.inherits(ye, Nf);
var va = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
  return t === "hex" ? Di.toHex32(this.h.slice(0, 7), "big") : Di.split32(this.h.slice(0, 7), "big");
};
var jt = Q;
var ga = or;
var ma = xr;
var le = jt.rotr64_hi;
var de = jt.rotr64_lo;
var _f = jt.shr64_hi;
var Bf = jt.shr64_lo;
var Be = jt.sum64;
var Fi = jt.sum64_hi;
var Ui = jt.sum64_lo;
var Aa = jt.sum64_4_hi;
var ba = jt.sum64_4_lo;
var ya = jt.sum64_5_hi;
var wa = jt.sum64_5_lo;
var Cf = ga.BlockHash;
var xa = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
function ne() {
  if (!(this instanceof ne))
    return new ne();
  Cf.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = xa, this.W = new Array(160);
}
jt.inherits(ne, Cf);
var Rf = ne;
ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t, r2) {
  for (var i3 = this.W, n2 = 0; n2 < 32; n2++)
    i3[n2] = t[r2 + n2];
  for (; n2 < i3.length; n2 += 2) {
    var o2 = Pa(i3[n2 - 4], i3[n2 - 3]), h3 = Ta(i3[n2 - 4], i3[n2 - 3]), p3 = i3[n2 - 14], A3 = i3[n2 - 13], v4 = Ra(i3[n2 - 30], i3[n2 - 29]), w2 = Oa(i3[n2 - 30], i3[n2 - 29]), y5 = i3[n2 - 32], S2 = i3[n2 - 31];
    i3[n2] = Aa(o2, h3, p3, A3, v4, w2, y5, S2), i3[n2 + 1] = ba(o2, h3, p3, A3, v4, w2, y5, S2);
  }
}, ne.prototype._update = function(t, r2) {
  this._prepareBlock(t, r2);
  var i3 = this.W, n2 = this.h[0], o2 = this.h[1], h3 = this.h[2], p3 = this.h[3], A3 = this.h[4], v4 = this.h[5], w2 = this.h[6], y5 = this.h[7], S2 = this.h[8], N2 = this.h[9], I3 = this.h[10], C4 = this.h[11], D3 = this.h[12], U4 = this.h[13], J = this.h[14], Bt2 = this.h[15];
  ma(this.k.length === i3.length);
  for (var G2 = 0; G2 < i3.length; G2 += 2) {
    var H = J, L2 = Bt2, Pt2 = Ba(S2, N2), W = Ca(S2, N2), Rt2 = Ma(S2, N2, I3, C4, D3), Vt2 = Ea(S2, N2, I3, C4, D3, U4), Y2 = this.k[G2], Wt2 = this.k[G2 + 1], b3 = i3[G2], f3 = i3[G2 + 1], a2 = ya(H, L2, Pt2, W, Rt2, Vt2, Y2, Wt2, b3, f3), c2 = wa(H, L2, Pt2, W, Rt2, Vt2, Y2, Wt2, b3, f3);
    H = Na(n2, o2), L2 = _a(n2, o2), Pt2 = Sa(n2, o2, h3, p3, A3), W = Ia(n2, o2, h3, p3, A3, v4);
    var d2 = Fi(H, L2, Pt2, W), m2 = Ui(H, L2, Pt2, W);
    J = D3, Bt2 = U4, D3 = I3, U4 = C4, I3 = S2, C4 = N2, S2 = Fi(w2, y5, a2, c2), N2 = Ui(y5, y5, a2, c2), w2 = A3, y5 = v4, A3 = h3, v4 = p3, h3 = n2, p3 = o2, n2 = Fi(a2, c2, d2, m2), o2 = Ui(a2, c2, d2, m2);
  }
  Be(this.h, 0, n2, o2), Be(this.h, 2, h3, p3), Be(this.h, 4, A3, v4), Be(this.h, 6, w2, y5), Be(this.h, 8, S2, N2), Be(this.h, 10, I3, C4), Be(this.h, 12, D3, U4), Be(this.h, 14, J, Bt2);
}, ne.prototype._digest = function(t) {
  return t === "hex" ? jt.toHex32(this.h, "big") : jt.split32(this.h, "big");
};
function Ma(e, t, r2, i3, n2) {
  var o2 = e & r2 ^ ~e & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ea(e, t, r2, i3, n2, o2) {
  var h3 = t & i3 ^ ~t & o2;
  return h3 < 0 && (h3 += 4294967296), h3;
}
function Sa(e, t, r2, i3, n2) {
  var o2 = e & r2 ^ e & n2 ^ r2 & n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ia(e, t, r2, i3, n2, o2) {
  var h3 = t & i3 ^ t & o2 ^ i3 & o2;
  return h3 < 0 && (h3 += 4294967296), h3;
}
function Na(e, t) {
  var r2 = le(e, t, 28), i3 = le(t, e, 2), n2 = le(t, e, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function _a(e, t) {
  var r2 = de(e, t, 28), i3 = de(t, e, 2), n2 = de(t, e, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ba(e, t) {
  var r2 = le(e, t, 14), i3 = le(e, t, 18), n2 = le(t, e, 9), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ca(e, t) {
  var r2 = de(e, t, 14), i3 = de(e, t, 18), n2 = de(t, e, 9), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ra(e, t) {
  var r2 = le(e, t, 1), i3 = le(e, t, 8), n2 = _f(e, t, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Oa(e, t) {
  var r2 = de(e, t, 1), i3 = de(e, t, 8), n2 = Bf(e, t, 7), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Pa(e, t) {
  var r2 = le(e, t, 19), i3 = le(t, e, 29), n2 = _f(e, t, 6), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
function Ta(e, t) {
  var r2 = de(e, t, 19), i3 = de(t, e, 29), n2 = Bf(e, t, 6), o2 = r2 ^ i3 ^ n2;
  return o2 < 0 && (o2 += 4294967296), o2;
}
var ki = Q;
var Of = Rf;
function we() {
  if (!(this instanceof we))
    return new we();
  Of.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
}
ki.inherits(we, Of);
var Da = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
  return t === "hex" ? ki.toHex32(this.h.slice(0, 12), "big") : ki.split32(this.h.slice(0, 12), "big");
}, sr.sha1 = ia, sr.sha224 = va, sr.sha256 = If, sr.sha384 = Da, sr.sha512 = Rf;
var Pf = {};
var Xe = Q;
var Fa = or;
var Kr = Xe.rotl32;
var Tf = Xe.sum32;
var Er = Xe.sum32_3;
var Df = Xe.sum32_4;
var Ff = Fa.BlockHash;
function pe() {
  if (!(this instanceof pe))
    return new pe();
  Ff.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xe.inherits(pe, Ff), Pf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, r2) {
  for (var i3 = this.h[0], n2 = this.h[1], o2 = this.h[2], h3 = this.h[3], p3 = this.h[4], A3 = i3, v4 = n2, w2 = o2, y5 = h3, S2 = p3, N2 = 0; N2 < 80; N2++) {
    var I3 = Tf(Kr(Df(i3, Uf(N2, n2, o2, h3), t[qa[N2] + r2], Ua(N2)), Ha[N2]), p3);
    i3 = p3, p3 = h3, h3 = Kr(o2, 10), o2 = n2, n2 = I3, I3 = Tf(Kr(Df(A3, Uf(79 - N2, v4, w2, y5), t[Ka[N2] + r2], ka(N2)), La[N2]), S2), A3 = S2, S2 = y5, y5 = Kr(w2, 10), w2 = v4, v4 = I3;
  }
  I3 = Er(this.h[1], o2, y5), this.h[1] = Er(this.h[2], h3, S2), this.h[2] = Er(this.h[3], p3, A3), this.h[3] = Er(this.h[4], i3, v4), this.h[4] = Er(this.h[0], n2, w2), this.h[0] = I3;
}, pe.prototype._digest = function(t) {
  return t === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Uf(e, t, r2, i3) {
  return e <= 15 ? t ^ r2 ^ i3 : e <= 31 ? t & r2 | ~t & i3 : e <= 47 ? (t | ~r2) ^ i3 : e <= 63 ? t & i3 | r2 & ~i3 : t ^ (r2 | ~i3);
}
function Ua(e) {
  return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function ka(e) {
  return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var qa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
var Ka = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
var Ha = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
var La = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
var za = Q;
var ja = xr;
function cr(e, t, r2) {
  if (!(this instanceof cr))
    return new cr(e, t, r2);
  this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(za.toArray(t, r2));
}
var Qa = cr;
cr.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), ja(t.length <= this.blockSize);
  for (var r2 = t.length; r2 < this.blockSize; r2++)
    t.push(0);
  for (r2 = 0; r2 < t.length; r2++)
    t[r2] ^= 54;
  for (this.inner = new this.Hash().update(t), r2 = 0; r2 < t.length; r2++)
    t[r2] ^= 106;
  this.outer = new this.Hash().update(t);
}, cr.prototype.update = function(t, r2) {
  return this.inner.update(t, r2), this;
}, cr.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
  var t = e;
  t.utils = Q, t.common = or, t.sha = sr, t.ripemd = Pf, t.hmac = Qa, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function lr(e, t, r2) {
  return r2 = { path: t, exports: {}, require: function(i3, n2) {
    return Ja(i3, n2 ?? r2.path);
  } }, e(r2, r2.exports), r2.exports;
}
function Ja() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var qi = kf;
function kf(e, t) {
  if (!e)
    throw new Error(t || "Assertion failed");
}
kf.equal = function(t, r2, i3) {
  if (t != r2)
    throw new Error(i3 || "Assertion failed: " + t + " != " + r2);
};
var fe = lr(function(e, t) {
  var r2 = t;
  function i3(h3, p3) {
    if (Array.isArray(h3))
      return h3.slice();
    if (!h3)
      return [];
    var A3 = [];
    if (typeof h3 != "string") {
      for (var v4 = 0; v4 < h3.length; v4++)
        A3[v4] = h3[v4] | 0;
      return A3;
    }
    if (p3 === "hex") {
      h3 = h3.replace(/[^a-z0-9]+/ig, ""), h3.length % 2 !== 0 && (h3 = "0" + h3);
      for (var v4 = 0; v4 < h3.length; v4 += 2)
        A3.push(parseInt(h3[v4] + h3[v4 + 1], 16));
    } else
      for (var v4 = 0; v4 < h3.length; v4++) {
        var w2 = h3.charCodeAt(v4), y5 = w2 >> 8, S2 = w2 & 255;
        y5 ? A3.push(y5, S2) : A3.push(S2);
      }
    return A3;
  }
  r2.toArray = i3;
  function n2(h3) {
    return h3.length === 1 ? "0" + h3 : h3;
  }
  r2.zero2 = n2;
  function o2(h3) {
    for (var p3 = "", A3 = 0; A3 < h3.length; A3++)
      p3 += n2(h3[A3].toString(16));
    return p3;
  }
  r2.toHex = o2, r2.encode = function(p3, A3) {
    return A3 === "hex" ? o2(p3) : p3;
  };
});
var Gt = lr(function(e, t) {
  var r2 = t;
  r2.assert = qi, r2.toArray = fe.toArray, r2.zero2 = fe.zero2, r2.toHex = fe.toHex, r2.encode = fe.encode;
  function i3(A3, v4, w2) {
    var y5 = new Array(Math.max(A3.bitLength(), w2) + 1);
    y5.fill(0);
    for (var S2 = 1 << v4 + 1, N2 = A3.clone(), I3 = 0; I3 < y5.length; I3++) {
      var C4, D3 = N2.andln(S2 - 1);
      N2.isOdd() ? (D3 > (S2 >> 1) - 1 ? C4 = (S2 >> 1) - D3 : C4 = D3, N2.isubn(C4)) : C4 = 0, y5[I3] = C4, N2.iushrn(1);
    }
    return y5;
  }
  r2.getNAF = i3;
  function n2(A3, v4) {
    var w2 = [[], []];
    A3 = A3.clone(), v4 = v4.clone();
    for (var y5 = 0, S2 = 0, N2; A3.cmpn(-y5) > 0 || v4.cmpn(-S2) > 0; ) {
      var I3 = A3.andln(3) + y5 & 3, C4 = v4.andln(3) + S2 & 3;
      I3 === 3 && (I3 = -1), C4 === 3 && (C4 = -1);
      var D3;
      I3 & 1 ? (N2 = A3.andln(7) + y5 & 7, (N2 === 3 || N2 === 5) && C4 === 2 ? D3 = -I3 : D3 = I3) : D3 = 0, w2[0].push(D3);
      var U4;
      C4 & 1 ? (N2 = v4.andln(7) + S2 & 7, (N2 === 3 || N2 === 5) && I3 === 2 ? U4 = -C4 : U4 = C4) : U4 = 0, w2[1].push(U4), 2 * y5 === D3 + 1 && (y5 = 1 - y5), 2 * S2 === U4 + 1 && (S2 = 1 - S2), A3.iushrn(1), v4.iushrn(1);
    }
    return w2;
  }
  r2.getJSF = n2;
  function o2(A3, v4, w2) {
    var y5 = "_" + v4;
    A3.prototype[v4] = function() {
      return this[y5] !== void 0 ? this[y5] : this[y5] = w2.call(this);
    };
  }
  r2.cachedProperty = o2;
  function h3(A3) {
    return typeof A3 == "string" ? r2.toArray(A3, "hex") : A3;
  }
  r2.parseBytes = h3;
  function p3(A3) {
    return new K(A3, "hex", "le");
  }
  r2.intFromLE = p3;
});
var Hr = Gt.getNAF;
var Ga = Gt.getJSF;
var Lr = Gt.assert;
function Ce(e, t) {
  this.type = e, this.p = new K(t.p, 16), this.red = t.prime ? K.red(t.prime) : K.mont(this.p), this.zero = new K(0).toRed(this.red), this.one = new K(1).toRed(this.red), this.two = new K(2).toRed(this.red), this.n = t.n && new K(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r2 = this.n && this.p.div(this.n);
  !r2 || r2.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
}
var $e = Ce;
Ce.prototype.point = function() {
  throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
  throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r2) {
  Lr(t.precomputed);
  var i3 = t._getDoubles(), n2 = Hr(r2, 1, this._bitLength), o2 = (1 << i3.step + 1) - (i3.step % 2 === 0 ? 2 : 1);
  o2 /= 3;
  var h3 = [], p3, A3;
  for (p3 = 0; p3 < n2.length; p3 += i3.step) {
    A3 = 0;
    for (var v4 = p3 + i3.step - 1; v4 >= p3; v4--)
      A3 = (A3 << 1) + n2[v4];
    h3.push(A3);
  }
  for (var w2 = this.jpoint(null, null, null), y5 = this.jpoint(null, null, null), S2 = o2; S2 > 0; S2--) {
    for (p3 = 0; p3 < h3.length; p3++)
      A3 = h3[p3], A3 === S2 ? y5 = y5.mixedAdd(i3.points[p3]) : A3 === -S2 && (y5 = y5.mixedAdd(i3.points[p3].neg()));
    w2 = w2.add(y5);
  }
  return w2.toP();
}, Ce.prototype._wnafMul = function(t, r2) {
  var i3 = 4, n2 = t._getNAFPoints(i3);
  i3 = n2.wnd;
  for (var o2 = n2.points, h3 = Hr(r2, i3, this._bitLength), p3 = this.jpoint(null, null, null), A3 = h3.length - 1; A3 >= 0; A3--) {
    for (var v4 = 0; A3 >= 0 && h3[A3] === 0; A3--)
      v4++;
    if (A3 >= 0 && v4++, p3 = p3.dblp(v4), A3 < 0)
      break;
    var w2 = h3[A3];
    Lr(w2 !== 0), t.type === "affine" ? w2 > 0 ? p3 = p3.mixedAdd(o2[w2 - 1 >> 1]) : p3 = p3.mixedAdd(o2[-w2 - 1 >> 1].neg()) : w2 > 0 ? p3 = p3.add(o2[w2 - 1 >> 1]) : p3 = p3.add(o2[-w2 - 1 >> 1].neg());
  }
  return t.type === "affine" ? p3.toP() : p3;
}, Ce.prototype._wnafMulAdd = function(t, r2, i3, n2, o2) {
  var h3 = this._wnafT1, p3 = this._wnafT2, A3 = this._wnafT3, v4 = 0, w2, y5, S2;
  for (w2 = 0; w2 < n2; w2++) {
    S2 = r2[w2];
    var N2 = S2._getNAFPoints(t);
    h3[w2] = N2.wnd, p3[w2] = N2.points;
  }
  for (w2 = n2 - 1; w2 >= 1; w2 -= 2) {
    var I3 = w2 - 1, C4 = w2;
    if (h3[I3] !== 1 || h3[C4] !== 1) {
      A3[I3] = Hr(i3[I3], h3[I3], this._bitLength), A3[C4] = Hr(i3[C4], h3[C4], this._bitLength), v4 = Math.max(A3[I3].length, v4), v4 = Math.max(A3[C4].length, v4);
      continue;
    }
    var D3 = [r2[I3], null, null, r2[C4]];
    r2[I3].y.cmp(r2[C4].y) === 0 ? (D3[1] = r2[I3].add(r2[C4]), D3[2] = r2[I3].toJ().mixedAdd(r2[C4].neg())) : r2[I3].y.cmp(r2[C4].y.redNeg()) === 0 ? (D3[1] = r2[I3].toJ().mixedAdd(r2[C4]), D3[2] = r2[I3].add(r2[C4].neg())) : (D3[1] = r2[I3].toJ().mixedAdd(r2[C4]), D3[2] = r2[I3].toJ().mixedAdd(r2[C4].neg()));
    var U4 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], J = Ga(i3[I3], i3[C4]);
    for (v4 = Math.max(J[0].length, v4), A3[I3] = new Array(v4), A3[C4] = new Array(v4), y5 = 0; y5 < v4; y5++) {
      var Bt2 = J[0][y5] | 0, G2 = J[1][y5] | 0;
      A3[I3][y5] = U4[(Bt2 + 1) * 3 + (G2 + 1)], A3[C4][y5] = 0, p3[I3] = D3;
    }
  }
  var H = this.jpoint(null, null, null), L2 = this._wnafT4;
  for (w2 = v4; w2 >= 0; w2--) {
    for (var Pt2 = 0; w2 >= 0; ) {
      var W = true;
      for (y5 = 0; y5 < n2; y5++)
        L2[y5] = A3[y5][w2] | 0, L2[y5] !== 0 && (W = false);
      if (!W)
        break;
      Pt2++, w2--;
    }
    if (w2 >= 0 && Pt2++, H = H.dblp(Pt2), w2 < 0)
      break;
    for (y5 = 0; y5 < n2; y5++) {
      var Rt2 = L2[y5];
      Rt2 !== 0 && (Rt2 > 0 ? S2 = p3[y5][Rt2 - 1 >> 1] : Rt2 < 0 && (S2 = p3[y5][-Rt2 - 1 >> 1].neg()), S2.type === "affine" ? H = H.mixedAdd(S2) : H = H.add(S2));
    }
  }
  for (w2 = 0; w2 < n2; w2++)
    p3[w2] = null;
  return o2 ? H : H.toP();
};
function Zt(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Zt, Zt.prototype.eq = function() {
  throw new Error("Not implemented");
}, Zt.prototype.validate = function() {
  return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r2) {
  t = Gt.toArray(t, r2);
  var i3 = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i3) {
    t[0] === 6 ? Lr(t[t.length - 1] % 2 === 0) : t[0] === 7 && Lr(t[t.length - 1] % 2 === 1);
    var n2 = this.point(t.slice(1, 1 + i3), t.slice(1 + i3, 1 + 2 * i3));
    return n2;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i3)
    return this.pointFromX(t.slice(1, 1 + i3), t[0] === 3);
  throw new Error("Unknown point format");
}, Zt.prototype.encodeCompressed = function(t) {
  return this.encode(t, true);
}, Zt.prototype._encode = function(t) {
  var r2 = this.curve.p.byteLength(), i3 = this.getX().toArray("be", r2);
  return t ? [this.getY().isEven() ? 2 : 3].concat(i3) : [4].concat(i3, this.getY().toArray("be", r2));
}, Zt.prototype.encode = function(t, r2) {
  return Gt.encode(this._encode(r2), t);
}, Zt.prototype.precompute = function(t) {
  if (this.precomputed)
    return this;
  var r2 = { doubles: null, naf: null, beta: null };
  return r2.naf = this._getNAFPoints(8), r2.doubles = this._getDoubles(4, t), r2.beta = this._getBeta(), this.precomputed = r2, this;
}, Zt.prototype._hasDoubles = function(t) {
  if (!this.precomputed)
    return false;
  var r2 = this.precomputed.doubles;
  return r2 ? r2.points.length >= Math.ceil((t.bitLength() + 1) / r2.step) : false;
}, Zt.prototype._getDoubles = function(t, r2) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var i3 = [this], n2 = this, o2 = 0; o2 < r2; o2 += t) {
    for (var h3 = 0; h3 < t; h3++)
      n2 = n2.dbl();
    i3.push(n2);
  }
  return { step: t, points: i3 };
}, Zt.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var r2 = [this], i3 = (1 << t) - 1, n2 = i3 === 1 ? null : this.dbl(), o2 = 1; o2 < i3; o2++)
    r2[o2] = r2[o2 - 1].add(n2);
  return { wnd: t, points: r2 };
}, Zt.prototype._getBeta = function() {
  return null;
}, Zt.prototype.dblp = function(t) {
  for (var r2 = this, i3 = 0; i3 < t; i3++)
    r2 = r2.dbl();
  return r2;
};
var Ki = lr(function(e) {
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
var Ya = Gt.assert;
function te(e) {
  $e.call(this, "short", e), this.a = new K(e.a, 16).toRed(this.red), this.b = new K(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Ki(te, $e);
var Va = te;
te.prototype._getEndomorphism = function(t) {
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
      this.g.mul(o2[0]).x.cmp(this.g.x.redMul(r2)) === 0 ? i3 = o2[0] : (i3 = o2[1], Ya(this.g.mul(i3).x.cmp(this.g.x.redMul(r2)) === 0));
    }
    var h3;
    return t.basis ? h3 = t.basis.map(function(p3) {
      return { a: new K(p3.a, 16), b: new K(p3.b, 16) };
    }) : h3 = this._getEndoBasis(i3), { beta: r2, lambda: i3, basis: h3 };
  }
}, te.prototype._getEndoRoots = function(t) {
  var r2 = t === this.p ? this.red : K.mont(t), i3 = new K(2).toRed(r2).redInvm(), n2 = i3.redNeg(), o2 = new K(3).toRed(r2).redNeg().redSqrt().redMul(i3), h3 = n2.redAdd(o2).fromRed(), p3 = n2.redSub(o2).fromRed();
  return [h3, p3];
}, te.prototype._getEndoBasis = function(t) {
  for (var r2 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i3 = t, n2 = this.n.clone(), o2 = new K(1), h3 = new K(0), p3 = new K(0), A3 = new K(1), v4, w2, y5, S2, N2, I3, C4, D3 = 0, U4, J; i3.cmpn(0) !== 0; ) {
    var Bt2 = n2.div(i3);
    U4 = n2.sub(Bt2.mul(i3)), J = p3.sub(Bt2.mul(o2));
    var G2 = A3.sub(Bt2.mul(h3));
    if (!y5 && U4.cmp(r2) < 0)
      v4 = C4.neg(), w2 = o2, y5 = U4.neg(), S2 = J;
    else if (y5 && ++D3 === 2)
      break;
    C4 = U4, n2 = i3, i3 = U4, p3 = o2, o2 = J, A3 = h3, h3 = G2;
  }
  N2 = U4.neg(), I3 = J;
  var H = y5.sqr().add(S2.sqr()), L2 = N2.sqr().add(I3.sqr());
  return L2.cmp(H) >= 0 && (N2 = v4, I3 = w2), y5.negative && (y5 = y5.neg(), S2 = S2.neg()), N2.negative && (N2 = N2.neg(), I3 = I3.neg()), [{ a: y5, b: S2 }, { a: N2, b: I3 }];
}, te.prototype._endoSplit = function(t) {
  var r2 = this.endo.basis, i3 = r2[0], n2 = r2[1], o2 = n2.b.mul(t).divRound(this.n), h3 = i3.b.neg().mul(t).divRound(this.n), p3 = o2.mul(i3.a), A3 = h3.mul(n2.a), v4 = o2.mul(i3.b), w2 = h3.mul(n2.b), y5 = t.sub(p3).sub(A3), S2 = v4.add(w2).neg();
  return { k1: y5, k2: S2 };
}, te.prototype.pointFromX = function(t, r2) {
  t = new K(t, 16), t.red || (t = t.toRed(this.red));
  var i3 = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n2 = i3.redSqrt();
  if (n2.redSqr().redSub(i3).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var o2 = n2.fromRed().isOdd();
  return (r2 && !o2 || !r2 && o2) && (n2 = n2.redNeg()), this.point(t, n2);
}, te.prototype.validate = function(t) {
  if (t.inf)
    return true;
  var r2 = t.x, i3 = t.y, n2 = this.a.redMul(r2), o2 = r2.redSqr().redMul(r2).redIAdd(n2).redIAdd(this.b);
  return i3.redSqr().redISub(o2).cmpn(0) === 0;
}, te.prototype._endoWnafMulAdd = function(t, r2, i3) {
  for (var n2 = this._endoWnafT1, o2 = this._endoWnafT2, h3 = 0; h3 < t.length; h3++) {
    var p3 = this._endoSplit(r2[h3]), A3 = t[h3], v4 = A3._getBeta();
    p3.k1.negative && (p3.k1.ineg(), A3 = A3.neg(true)), p3.k2.negative && (p3.k2.ineg(), v4 = v4.neg(true)), n2[h3 * 2] = A3, n2[h3 * 2 + 1] = v4, o2[h3 * 2] = p3.k1, o2[h3 * 2 + 1] = p3.k2;
  }
  for (var w2 = this._wnafMulAdd(1, n2, o2, h3 * 2, i3), y5 = 0; y5 < h3 * 2; y5++)
    n2[y5] = null, o2[y5] = null;
  return w2;
};
function Dt(e, t, r2, i3) {
  $e.BasePoint.call(this, e, "affine"), t === null && r2 === null ? (this.x = null, this.y = null, this.inf = true) : (this.x = new K(t, 16), this.y = new K(r2, 16), i3 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
}
Ki(Dt, $e.BasePoint), te.prototype.point = function(t, r2, i3) {
  return new Dt(this, t, r2, i3);
}, te.prototype.pointFromJSON = function(t, r2) {
  return Dt.fromJSON(this, t, r2);
}, Dt.prototype._getBeta = function() {
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
}, Dt.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
}, Dt.fromJSON = function(t, r2, i3) {
  typeof r2 == "string" && (r2 = JSON.parse(r2));
  var n2 = t.point(r2[0], r2[1], i3);
  if (!r2[2])
    return n2;
  function o2(p3) {
    return t.point(p3[0], p3[1], i3);
  }
  var h3 = r2[2];
  return n2.precomputed = { beta: null, doubles: h3.doubles && { step: h3.doubles.step, points: [n2].concat(h3.doubles.points.map(o2)) }, naf: h3.naf && { wnd: h3.naf.wnd, points: [n2].concat(h3.naf.points.map(o2)) } }, n2;
}, Dt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Dt.prototype.isInfinity = function() {
  return this.inf;
}, Dt.prototype.add = function(t) {
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
}, Dt.prototype.dbl = function() {
  if (this.inf)
    return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0)
    return this.curve.point(null, null);
  var r2 = this.curve.a, i3 = this.x.redSqr(), n2 = t.redInvm(), o2 = i3.redAdd(i3).redIAdd(i3).redIAdd(r2).redMul(n2), h3 = o2.redSqr().redISub(this.x.redAdd(this.x)), p3 = o2.redMul(this.x.redSub(h3)).redISub(this.y);
  return this.curve.point(h3, p3);
}, Dt.prototype.getX = function() {
  return this.x.fromRed();
}, Dt.prototype.getY = function() {
  return this.y.fromRed();
}, Dt.prototype.mul = function(t) {
  return t = new K(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
}, Dt.prototype.mulAdd = function(t, r2, i3) {
  var n2 = [this, r2], o2 = [t, i3];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2) : this.curve._wnafMulAdd(1, n2, o2, 2);
}, Dt.prototype.jmulAdd = function(t, r2, i3) {
  var n2 = [this, r2], o2 = [t, i3];
  return this.curve.endo ? this.curve._endoWnafMulAdd(n2, o2, true) : this.curve._wnafMulAdd(1, n2, o2, 2, true);
}, Dt.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Dt.prototype.neg = function(t) {
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
}, Dt.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function Ft(e, t, r2, i3) {
  $e.BasePoint.call(this, e, "jacobian"), t === null && r2 === null && i3 === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K(0)) : (this.x = new K(t, 16), this.y = new K(r2, 16), this.z = new K(i3, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Ki(Ft, $e.BasePoint), te.prototype.jpoint = function(t, r2, i3) {
  return new Ft(this, t, r2, i3);
}, Ft.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var t = this.z.redInvm(), r2 = t.redSqr(), i3 = this.x.redMul(r2), n2 = this.y.redMul(r2).redMul(t);
  return this.curve.point(i3, n2);
}, Ft.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Ft.prototype.add = function(t) {
  if (this.isInfinity())
    return t;
  if (t.isInfinity())
    return this;
  var r2 = t.z.redSqr(), i3 = this.z.redSqr(), n2 = this.x.redMul(r2), o2 = t.x.redMul(i3), h3 = this.y.redMul(r2.redMul(t.z)), p3 = t.y.redMul(i3.redMul(this.z)), A3 = n2.redSub(o2), v4 = h3.redSub(p3);
  if (A3.cmpn(0) === 0)
    return v4.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var w2 = A3.redSqr(), y5 = w2.redMul(A3), S2 = n2.redMul(w2), N2 = v4.redSqr().redIAdd(y5).redISub(S2).redISub(S2), I3 = v4.redMul(S2.redISub(N2)).redISub(h3.redMul(y5)), C4 = this.z.redMul(t.z).redMul(A3);
  return this.curve.jpoint(N2, I3, C4);
}, Ft.prototype.mixedAdd = function(t) {
  if (this.isInfinity())
    return t.toJ();
  if (t.isInfinity())
    return this;
  var r2 = this.z.redSqr(), i3 = this.x, n2 = t.x.redMul(r2), o2 = this.y, h3 = t.y.redMul(r2).redMul(this.z), p3 = i3.redSub(n2), A3 = o2.redSub(h3);
  if (p3.cmpn(0) === 0)
    return A3.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var v4 = p3.redSqr(), w2 = v4.redMul(p3), y5 = i3.redMul(v4), S2 = A3.redSqr().redIAdd(w2).redISub(y5).redISub(y5), N2 = A3.redMul(y5.redISub(S2)).redISub(o2.redMul(w2)), I3 = this.z.redMul(p3);
  return this.curve.jpoint(S2, N2, I3);
}, Ft.prototype.dblp = function(t) {
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
  var n2 = this.curve.a, o2 = this.curve.tinv, h3 = this.x, p3 = this.y, A3 = this.z, v4 = A3.redSqr().redSqr(), w2 = p3.redAdd(p3);
  for (r2 = 0; r2 < t; r2++) {
    var y5 = h3.redSqr(), S2 = w2.redSqr(), N2 = S2.redSqr(), I3 = y5.redAdd(y5).redIAdd(y5).redIAdd(n2.redMul(v4)), C4 = h3.redMul(S2), D3 = I3.redSqr().redISub(C4.redAdd(C4)), U4 = C4.redISub(D3), J = I3.redMul(U4);
    J = J.redIAdd(J).redISub(N2);
    var Bt2 = w2.redMul(A3);
    r2 + 1 < t && (v4 = v4.redMul(N2)), h3 = D3, A3 = Bt2, w2 = J;
  }
  return this.curve.jpoint(h3, w2.redMul(o2), A3);
}, Ft.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Ft.prototype._zeroDbl = function() {
  var t, r2, i3;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h3 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h3);
    p3 = p3.redIAdd(p3);
    var A3 = n2.redAdd(n2).redIAdd(n2), v4 = A3.redSqr().redISub(p3).redISub(p3), w2 = h3.redIAdd(h3);
    w2 = w2.redIAdd(w2), w2 = w2.redIAdd(w2), t = v4, r2 = A3.redMul(p3.redISub(v4)).redISub(w2), i3 = this.y.redAdd(this.y);
  } else {
    var y5 = this.x.redSqr(), S2 = this.y.redSqr(), N2 = S2.redSqr(), I3 = this.x.redAdd(S2).redSqr().redISub(y5).redISub(N2);
    I3 = I3.redIAdd(I3);
    var C4 = y5.redAdd(y5).redIAdd(y5), D3 = C4.redSqr(), U4 = N2.redIAdd(N2);
    U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), t = D3.redISub(I3).redISub(I3), r2 = C4.redMul(I3.redISub(t)).redISub(U4), i3 = this.y.redMul(this.z), i3 = i3.redIAdd(i3);
  }
  return this.curve.jpoint(t, r2, i3);
}, Ft.prototype._threeDbl = function() {
  var t, r2, i3;
  if (this.zOne) {
    var n2 = this.x.redSqr(), o2 = this.y.redSqr(), h3 = o2.redSqr(), p3 = this.x.redAdd(o2).redSqr().redISub(n2).redISub(h3);
    p3 = p3.redIAdd(p3);
    var A3 = n2.redAdd(n2).redIAdd(n2).redIAdd(this.curve.a), v4 = A3.redSqr().redISub(p3).redISub(p3);
    t = v4;
    var w2 = h3.redIAdd(h3);
    w2 = w2.redIAdd(w2), w2 = w2.redIAdd(w2), r2 = A3.redMul(p3.redISub(v4)).redISub(w2), i3 = this.y.redAdd(this.y);
  } else {
    var y5 = this.z.redSqr(), S2 = this.y.redSqr(), N2 = this.x.redMul(S2), I3 = this.x.redSub(y5).redMul(this.x.redAdd(y5));
    I3 = I3.redAdd(I3).redIAdd(I3);
    var C4 = N2.redIAdd(N2);
    C4 = C4.redIAdd(C4);
    var D3 = C4.redAdd(C4);
    t = I3.redSqr().redISub(D3), i3 = this.y.redAdd(this.z).redSqr().redISub(S2).redISub(y5);
    var U4 = S2.redSqr();
    U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), U4 = U4.redIAdd(U4), r2 = I3.redMul(C4.redISub(t)).redISub(U4);
  }
  return this.curve.jpoint(t, r2, i3);
}, Ft.prototype._dbl = function() {
  var t = this.curve.a, r2 = this.x, i3 = this.y, n2 = this.z, o2 = n2.redSqr().redSqr(), h3 = r2.redSqr(), p3 = i3.redSqr(), A3 = h3.redAdd(h3).redIAdd(h3).redIAdd(t.redMul(o2)), v4 = r2.redAdd(r2);
  v4 = v4.redIAdd(v4);
  var w2 = v4.redMul(p3), y5 = A3.redSqr().redISub(w2.redAdd(w2)), S2 = w2.redISub(y5), N2 = p3.redSqr();
  N2 = N2.redIAdd(N2), N2 = N2.redIAdd(N2), N2 = N2.redIAdd(N2);
  var I3 = A3.redMul(S2).redISub(N2), C4 = i3.redAdd(i3).redMul(n2);
  return this.curve.jpoint(y5, I3, C4);
}, Ft.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var t = this.x.redSqr(), r2 = this.y.redSqr(), i3 = this.z.redSqr(), n2 = r2.redSqr(), o2 = t.redAdd(t).redIAdd(t), h3 = o2.redSqr(), p3 = this.x.redAdd(r2).redSqr().redISub(t).redISub(n2);
  p3 = p3.redIAdd(p3), p3 = p3.redAdd(p3).redIAdd(p3), p3 = p3.redISub(h3);
  var A3 = p3.redSqr(), v4 = n2.redIAdd(n2);
  v4 = v4.redIAdd(v4), v4 = v4.redIAdd(v4), v4 = v4.redIAdd(v4);
  var w2 = o2.redIAdd(p3).redSqr().redISub(h3).redISub(A3).redISub(v4), y5 = r2.redMul(w2);
  y5 = y5.redIAdd(y5), y5 = y5.redIAdd(y5);
  var S2 = this.x.redMul(A3).redISub(y5);
  S2 = S2.redIAdd(S2), S2 = S2.redIAdd(S2);
  var N2 = this.y.redMul(w2.redMul(v4.redISub(w2)).redISub(p3.redMul(A3)));
  N2 = N2.redIAdd(N2), N2 = N2.redIAdd(N2), N2 = N2.redIAdd(N2);
  var I3 = this.z.redAdd(p3).redSqr().redISub(i3).redISub(A3);
  return this.curve.jpoint(S2, N2, I3);
}, Ft.prototype.mul = function(t, r2) {
  return t = new K(t, r2), this.curve._wnafMul(this, t);
}, Ft.prototype.eq = function(t) {
  if (t.type === "affine")
    return this.eq(t.toJ());
  if (this === t)
    return true;
  var r2 = this.z.redSqr(), i3 = t.z.redSqr();
  if (this.x.redMul(i3).redISub(t.x.redMul(r2)).cmpn(0) !== 0)
    return false;
  var n2 = r2.redMul(this.z), o2 = i3.redMul(t.z);
  return this.y.redMul(o2).redISub(t.y.redMul(n2)).cmpn(0) === 0;
}, Ft.prototype.eqXToP = function(t) {
  var r2 = this.z.redSqr(), i3 = t.toRed(this.curve.red).redMul(r2);
  if (this.x.cmp(i3) === 0)
    return true;
  for (var n2 = t.clone(), o2 = this.curve.redN.redMul(r2); ; ) {
    if (n2.iadd(this.curve.n), n2.cmp(this.curve.p) >= 0)
      return false;
    if (i3.redIAdd(o2), this.x.cmp(i3) === 0)
      return true;
  }
}, Ft.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var zr = lr(function(e, t) {
  var r2 = t;
  r2.base = $e, r2.short = Va, r2.mont = null, r2.edwards = null;
});
var jr = lr(function(e, t) {
  var r2 = t, i3 = Gt.assert;
  function n2(p3) {
    p3.type === "short" ? this.curve = new zr.short(p3) : p3.type === "edwards" ? this.curve = new zr.edwards(p3) : this.curve = new zr.mont(p3), this.g = this.curve.g, this.n = this.curve.n, this.hash = p3.hash, i3(this.g.validate(), "Invalid curve"), i3(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  r2.PresetCurve = n2;
  function o2(p3, A3) {
    Object.defineProperty(r2, p3, { configurable: true, enumerable: true, get: function() {
      var v4 = new n2(A3);
      return Object.defineProperty(r2, p3, { configurable: true, enumerable: true, value: v4 }), v4;
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
  qi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r2, i3);
}
var qf = Re;
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
  typeof r2 != "string" && (n2 = i3, i3 = r2, r2 = null), t = fe.toArray(t, r2), i3 = fe.toArray(i3, n2), qi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i3 || [])), this._reseed = 1;
}, Re.prototype.generate = function(t, r2, i3, n2) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof r2 != "string" && (n2 = i3, i3 = r2, r2 = null), i3 && (i3 = fe.toArray(i3, n2 || "hex"), this._update(i3));
  for (var o2 = []; o2.length < t; )
    this.V = this._hmac().update(this.V).digest(), o2 = o2.concat(this.V);
  var h3 = o2.slice(0, t);
  return this._update(i3), this._reseed++, fe.encode(h3, r2);
};
var Hi = Gt.assert;
function kt(e, t) {
  this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Li = kt;
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
    this.ec.curve.type === "mont" ? Hi(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Hi(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r2);
}, kt.prototype.derive = function(t) {
  return t.validate() || Hi(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt.prototype.sign = function(t, r2, i3) {
  return this.ec.sign(t, this, r2, i3);
}, kt.prototype.verify = function(t, r2) {
  return this.ec.verify(t, r2, this);
}, kt.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var Wa = Gt.assert;
function Qr(e, t) {
  if (e instanceof Qr)
    return e;
  this._importDER(e, t) || (Wa(e.r && e.s, "Signature without r or s"), this.r = new K(e.r, 16), this.s = new K(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var Jr = Qr;
function Xa() {
  this.place = 0;
}
function zi(e, t) {
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
function Kf(e) {
  for (var t = 0, r2 = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r2; )
    t++;
  return t === 0 ? e : e.slice(t);
}
Qr.prototype._importDER = function(t, r2) {
  t = Gt.toArray(t, r2);
  var i3 = new Xa();
  if (t[i3.place++] !== 48)
    return false;
  var n2 = zi(t, i3);
  if (n2 === false || n2 + i3.place !== t.length || t[i3.place++] !== 2)
    return false;
  var o2 = zi(t, i3);
  if (o2 === false)
    return false;
  var h3 = t.slice(i3.place, o2 + i3.place);
  if (i3.place += o2, t[i3.place++] !== 2)
    return false;
  var p3 = zi(t, i3);
  if (p3 === false || t.length !== p3 + i3.place)
    return false;
  var A3 = t.slice(i3.place, p3 + i3.place);
  if (h3[0] === 0)
    if (h3[1] & 128)
      h3 = h3.slice(1);
    else
      return false;
  if (A3[0] === 0)
    if (A3[1] & 128)
      A3 = A3.slice(1);
    else
      return false;
  return this.r = new K(h3), this.s = new K(A3), this.recoveryParam = null, true;
};
function ji(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r2 = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e.push(r2 | 128); --r2; )
    e.push(t >>> (r2 << 3) & 255);
  e.push(t);
}
Qr.prototype.toDER = function(t) {
  var r2 = this.r.toArray(), i3 = this.s.toArray();
  for (r2[0] & 128 && (r2 = [0].concat(r2)), i3[0] & 128 && (i3 = [0].concat(i3)), r2 = Kf(r2), i3 = Kf(i3); !i3[0] && !(i3[1] & 128); )
    i3 = i3.slice(1);
  var n2 = [2];
  ji(n2, r2.length), n2 = n2.concat(r2), n2.push(2), ji(n2, i3.length);
  var o2 = n2.concat(i3), h3 = [48];
  return ji(h3, o2.length), h3 = h3.concat(o2), Gt.encode(h3, t);
};
var $a = function() {
  throw new Error("unsupported");
};
var Hf = Gt.assert;
function ee(e) {
  if (!(this instanceof ee))
    return new ee(e);
  typeof e == "string" && (Hf(Object.prototype.hasOwnProperty.call(jr, e), "Unknown curve " + e), e = jr[e]), e instanceof jr.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var Za = ee;
ee.prototype.keyPair = function(t) {
  return new Li(this, t);
}, ee.prototype.keyFromPrivate = function(t, r2) {
  return Li.fromPrivate(this, t, r2);
}, ee.prototype.keyFromPublic = function(t, r2) {
  return Li.fromPublic(this, t, r2);
}, ee.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r2 = new qf({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || $a(this.hash.hmacStrength), entropyEnc: t.entropy && t.entropyEnc || "utf8", nonce: this.n.toArray() }), i3 = this.n.byteLength(), n2 = this.n.sub(new K(2)); ; ) {
    var o2 = new K(r2.generate(i3));
    if (!(o2.cmp(n2) > 0))
      return o2.iaddn(1), this.keyFromPrivate(o2);
  }
}, ee.prototype._truncateToN = function(t, r2) {
  var i3 = t.byteLength() * 8 - this.n.bitLength();
  return i3 > 0 && (t = t.ushrn(i3)), !r2 && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, ee.prototype.sign = function(t, r2, i3, n2) {
  typeof i3 == "object" && (n2 = i3, i3 = null), n2 || (n2 = {}), r2 = this.keyFromPrivate(r2, i3), t = this._truncateToN(new K(t, 16));
  for (var o2 = this.n.byteLength(), h3 = r2.getPrivate().toArray("be", o2), p3 = t.toArray("be", o2), A3 = new qf({ hash: this.hash, entropy: h3, nonce: p3, pers: n2.pers, persEnc: n2.persEnc || "utf8" }), v4 = this.n.sub(new K(1)), w2 = 0; ; w2++) {
    var y5 = n2.k ? n2.k(w2) : new K(A3.generate(this.n.byteLength()));
    if (y5 = this._truncateToN(y5, true), !(y5.cmpn(1) <= 0 || y5.cmp(v4) >= 0)) {
      var S2 = this.g.mul(y5);
      if (!S2.isInfinity()) {
        var N2 = S2.getX(), I3 = N2.umod(this.n);
        if (I3.cmpn(0) !== 0) {
          var C4 = y5.invm(this.n).mul(I3.mul(r2.getPrivate()).iadd(t));
          if (C4 = C4.umod(this.n), C4.cmpn(0) !== 0) {
            var D3 = (S2.getY().isOdd() ? 1 : 0) | (N2.cmp(I3) !== 0 ? 2 : 0);
            return n2.canonical && C4.cmp(this.nh) > 0 && (C4 = this.n.sub(C4), D3 ^= 1), new Jr({ r: I3, s: C4, recoveryParam: D3 });
          }
        }
      }
    }
  }
}, ee.prototype.verify = function(t, r2, i3, n2) {
  t = this._truncateToN(new K(t, 16)), i3 = this.keyFromPublic(i3, n2), r2 = new Jr(r2, "hex");
  var o2 = r2.r, h3 = r2.s;
  if (o2.cmpn(1) < 0 || o2.cmp(this.n) >= 0 || h3.cmpn(1) < 0 || h3.cmp(this.n) >= 0)
    return false;
  var p3 = h3.invm(this.n), A3 = p3.mul(t).umod(this.n), v4 = p3.mul(o2).umod(this.n), w2;
  return this.curve._maxwellTrick ? (w2 = this.g.jmulAdd(A3, i3.getPublic(), v4), w2.isInfinity() ? false : w2.eqXToP(o2)) : (w2 = this.g.mulAdd(A3, i3.getPublic(), v4), w2.isInfinity() ? false : w2.getX().umod(this.n).cmp(o2) === 0);
}, ee.prototype.recoverPubKey = function(e, t, r2, i3) {
  Hf((3 & r2) === r2, "The recovery param is more than two bits"), t = new Jr(t, i3);
  var n2 = this.n, o2 = new K(e), h3 = t.r, p3 = t.s, A3 = r2 & 1, v4 = r2 >> 1;
  if (h3.cmp(this.curve.p.umod(this.curve.n)) >= 0 && v4)
    throw new Error("Unable to find sencond key candinate");
  v4 ? h3 = this.curve.pointFromX(h3.add(this.curve.n), A3) : h3 = this.curve.pointFromX(h3, A3);
  var w2 = t.r.invm(n2), y5 = n2.sub(o2).mul(w2).umod(n2), S2 = p3.mul(w2).umod(n2);
  return this.g.mulAdd(y5, h3, S2);
}, ee.prototype.getKeyRecoveryParam = function(e, t, r2, i3) {
  if (t = new Jr(t, i3), t.recoveryParam !== null)
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
var tu = lr(function(e, t) {
  var r2 = t;
  r2.version = "6.5.4", r2.utils = Gt, r2.rand = function() {
    throw new Error("unsupported");
  }, r2.curve = zr, r2.curves = jr, r2.ec = Za, r2.eddsa = null;
});
var eu = tu.ec;
var ru = "signing-key/5.7.0";
var Qi = new z(ru);
var Ji = null;
function ve() {
  return Ji || (Ji = new eu("secp256k1")), Ji;
}
var iu = class {
  constructor(t) {
    wr(this, "curve", "secp256k1"), wr(this, "privateKey", Kt(t)), Us(this.privateKey) !== 32 && Qi.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const r2 = ve().keyFromPrivate(Ot(this.privateKey));
    wr(this, "publicKey", "0x" + r2.getPublic(false, "hex")), wr(this, "compressedPublicKey", "0x" + r2.getPublic(true, "hex")), wr(this, "_isSigningKey", true);
  }
  _addPoint(t) {
    const r2 = ve().keyFromPublic(Ot(this.publicKey)), i3 = ve().keyFromPublic(Ot(t));
    return "0x" + r2.pub.add(i3.pub).encodeCompressed("hex");
  }
  signDigest(t) {
    const r2 = ve().keyFromPrivate(Ot(this.privateKey)), i3 = Ot(t);
    i3.length !== 32 && Qi.throwArgumentError("bad digest length", "digest", t);
    const n2 = r2.sign(i3, { canonical: true });
    return Wn({ recoveryParam: n2.recoveryParam, r: oe("0x" + n2.r.toString(16), 32), s: oe("0x" + n2.s.toString(16), 32) });
  }
  computeSharedSecret(t) {
    const r2 = ve().keyFromPrivate(Ot(this.privateKey)), i3 = ve().keyFromPublic(Ot(Lf(t)));
    return oe("0x" + r2.derive(i3.getPublic()).toString(16), 32);
  }
  static isSigningKey(t) {
    return !!(t && t._isSigningKey);
  }
};
function nu(e, t) {
  const r2 = Wn(t), i3 = { r: Ot(r2.r), s: Ot(r2.s) };
  return "0x" + ve().recoverPubKey(Ot(e), i3, r2.recoveryParam).encode("hex", false);
}
function Lf(e, t) {
  const r2 = Ot(e);
  if (r2.length === 32) {
    const i3 = new iu(r2);
    return t ? "0x" + ve().keyFromPrivate(r2).getPublic(true, "hex") : i3.publicKey;
  } else {
    if (r2.length === 33)
      return t ? Kt(r2) : "0x" + ve().keyFromPublic(r2).getPublic(false, "hex");
    if (r2.length === 65)
      return t ? "0x" + ve().keyFromPublic(r2).getPublic(true, "hex") : Kt(r2);
  }
  return Qi.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
var fu = "transactions/5.7.0";
new z(fu);
var zf;
(function(e) {
  e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(zf || (zf = {}));
function ou(e) {
  const t = Lf(e);
  return v0(Vn(Ii(Vn(t, 1)), 12));
}
function su(e, t) {
  return ou(nu(Ot(e), t));
}
var au = "https://rpc.walletconnect.org/v1";
async function jf(e, t, r2, i3, n2, o2) {
  switch (r2.t) {
    case "eip191":
      return Qf(e, t, r2.s);
    case "eip1271":
      return await Jf(e, t, r2.s, i3, n2, o2);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r2.t}`);
  }
}
function Qf(e, t, r2) {
  return su(df(t), r2).toLowerCase() === e.toLowerCase();
}
async function Jf(e, t, r2, i3, n2, o2) {
  try {
    const h3 = "0x1626ba7e", p3 = "0000000000000000000000000000000000000000000000000000000000000040", A3 = "0000000000000000000000000000000000000000000000000000000000000041", v4 = r2.substring(2), w2 = df(t).substring(2), y5 = h3 + w2 + p3 + A3 + v4, S2 = await fetch(`${o2 || au}/?chainId=${i3}&projectId=${n2}`, { method: "POST", body: JSON.stringify({ id: uu(), jsonrpc: "2.0", method: "eth_call", params: [{ to: e, data: y5 }, "latest"] }) }), { result: N2 } = await S2.json();
    return N2 ? N2.slice(0, h3.length).toLowerCase() === h3.toLowerCase() : false;
  } catch (h3) {
    return console.error("isValidEip1271Signature: ", h3), false;
  }
}
function uu() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var hu = Object.defineProperty;
var cu = Object.defineProperties;
var lu = Object.getOwnPropertyDescriptors;
var Gf = Object.getOwnPropertySymbols;
var du = Object.prototype.hasOwnProperty;
var pu = Object.prototype.propertyIsEnumerable;
var Yf = (e, t, r2) => t in e ? hu(e, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[t] = r2;
var Gi = (e, t) => {
  for (var r2 in t || (t = {}))
    du.call(t, r2) && Yf(e, r2, t[r2]);
  if (Gf)
    for (var r2 of Gf(t))
      pu.call(t, r2) && Yf(e, r2, t[r2]);
  return e;
};
var Vf = (e, t) => cu(e, lu(t));
var vu = "did:pkh:";
var Gr = (e) => e == null ? void 0 : e.split(":");
var Yi = (e) => {
  const t = e && Gr(e);
  if (t)
    return e.includes(vu) ? t[3] : t[1];
};
var gu = (e) => {
  const t = e && Gr(e);
  if (t)
    return t[2] + ":" + t[3];
};
var Vi = (e) => {
  const t = e && Gr(e);
  if (t)
    return t.pop();
};
async function mu(e) {
  const { cacao: t, projectId: r2 } = e, { s: i3, p: n2 } = t, o2 = Wf(n2, n2.iss), h3 = Vi(n2.iss);
  return await jf(h3, o2, i3, Yi(n2.iss), r2);
}
var Wf = (e, t) => {
  const r2 = `${e.domain} wants you to sign in with your Ethereum account:`, i3 = Vi(t);
  if (!e.aud && !e.uri)
    throw new Error("Either `aud` or `uri` is required to construct the message");
  let n2 = e.statement || void 0;
  const o2 = `URI: ${e.aud || e.uri}`, h3 = `Version: ${e.version}`, p3 = `Chain ID: ${Yi(t)}`, A3 = `Nonce: ${e.nonce}`, v4 = `Issued At: ${e.iat}`, w2 = e.exp ? `Expiration Time: ${e.exp}` : void 0, y5 = e.nbf ? `Not Before: ${e.nbf}` : void 0, S2 = e.requestId ? `Request ID: ${e.requestId}` : void 0, N2 = e.resources ? `Resources:${e.resources.map((C4) => `
- ${C4}`).join("")}` : void 0, I3 = Vr(e.resources);
  if (I3) {
    const C4 = Oe(I3);
    n2 = $i(n2, C4);
  }
  return [r2, i3, "", n2, "", o2, h3, p3, A3, v4, w2, y5, S2, N2].filter((C4) => C4 != null).join(`
`);
};
function to(e) {
  return Buffer.from(JSON.stringify(e)).toString("base64");
}
function eo(e) {
  return JSON.parse(Buffer.from(e, "base64").toString("utf-8"));
}
function ge(e) {
  if (!e)
    throw new Error("No recap provided, value is undefined");
  if (!e.att)
    throw new Error("No `att` property found");
  const t = Object.keys(e.att);
  if (!(t != null && t.length))
    throw new Error("No resources found in `att` property");
  t.forEach((r2) => {
    const i3 = e.att[r2];
    if (Array.isArray(i3))
      throw new Error(`Resource must be an object: ${r2}`);
    if (typeof i3 != "object")
      throw new Error(`Resource must be an object: ${r2}`);
    if (!Object.keys(i3).length)
      throw new Error(`Resource object is empty: ${r2}`);
    Object.keys(i3).forEach((n2) => {
      const o2 = i3[n2];
      if (!Array.isArray(o2))
        throw new Error(`Ability limits ${n2} must be an array of objects, found: ${o2}`);
      if (!o2.length)
        throw new Error(`Value of ${n2} is empty array, must be an array with objects`);
      o2.forEach((h3) => {
        if (typeof h3 != "object")
          throw new Error(`Ability limits (${n2}) must be an array of objects, found: ${h3}`);
      });
    });
  });
}
function ro(e, t, r2, i3 = {}) {
  return r2 == null ? void 0 : r2.sort((n2, o2) => n2.localeCompare(o2)), { att: { [e]: Wi(t, r2, i3) } };
}
function Wi(e, t, r2 = {}) {
  t = t == null ? void 0 : t.sort((n2, o2) => n2.localeCompare(o2));
  const i3 = t.map((n2) => ({ [`${e}/${n2}`]: [r2] }));
  return Object.assign({}, ...i3);
}
function Yr(e) {
  return ge(e), `urn:recap:${to(e).replace(/=/g, "")}`;
}
function Oe(e) {
  const t = eo(e.replace("urn:recap:", ""));
  return ge(t), t;
}
function xu(e, t, r2) {
  const i3 = ro(e, t, r2);
  return Yr(i3);
}
function Xi(e) {
  return e && e.includes("urn:recap:");
}
function Mu(e, t) {
  const r2 = Oe(e), i3 = Oe(t), n2 = no(r2, i3);
  return Yr(n2);
}
function no(e, t) {
  ge(e), ge(t);
  const r2 = Object.keys(e.att).concat(Object.keys(t.att)).sort((n2, o2) => n2.localeCompare(o2)), i3 = { att: {} };
  return r2.forEach((n2) => {
    var o2, h3;
    Object.keys(((o2 = e.att) == null ? void 0 : o2[n2]) || {}).concat(Object.keys(((h3 = t.att) == null ? void 0 : h3[n2]) || {})).sort((p3, A3) => p3.localeCompare(A3)).forEach((p3) => {
      var A3, v4;
      i3.att[n2] = Vf(Gi({}, i3.att[n2]), { [p3]: ((A3 = e.att[n2]) == null ? void 0 : A3[p3]) || ((v4 = t.att[n2]) == null ? void 0 : v4[p3]) });
    });
  }), i3;
}
function $i(e = "", t) {
  ge(t);
  const r2 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e.includes(r2))
    return e;
  const i3 = [];
  let n2 = 0;
  Object.keys(t.att).forEach((p3) => {
    const A3 = Object.keys(t.att[p3]).map((y5) => ({ ability: y5.split("/")[0], action: y5.split("/")[1] }));
    A3.sort((y5, S2) => y5.action.localeCompare(S2.action));
    const v4 = {};
    A3.forEach((y5) => {
      v4[y5.ability] || (v4[y5.ability] = []), v4[y5.ability].push(y5.action);
    });
    const w2 = Object.keys(v4).map((y5) => (n2++, `(${n2}) '${y5}': '${v4[y5].join("', '")}' for '${p3}'.`));
    i3.push(w2.join(", ").replace(".,", "."));
  });
  const o2 = i3.join(" "), h3 = `${r2}${o2}`;
  return `${e ? e + " " : ""}${h3}`;
}
function Eu(e) {
  var t;
  const r2 = Oe(e);
  ge(r2);
  const i3 = (t = r2.att) == null ? void 0 : t.eip155;
  return i3 ? Object.keys(i3).map((n2) => n2.split("/")[1]) : [];
}
function Su(e) {
  const t = Oe(e);
  ge(t);
  const r2 = [];
  return Object.values(t.att).forEach((i3) => {
    Object.values(i3).forEach((n2) => {
      var o2;
      (o2 = n2 == null ? void 0 : n2[0]) != null && o2.chains && r2.push(n2[0].chains);
    });
  }), [...new Set(r2.flat())];
}
function Vr(e) {
  if (!e)
    return;
  const t = e == null ? void 0 : e[e.length - 1];
  return Xi(t) ? t : void 0;
}
var Zi = "base10";
var Lt = "base16";
var tn = "base64pad";
var Iu = "base64url";
var dr = "utf8";
var en = 0;
var pr = 1;
var Sr = 2;
var Nu = 0;
var oo = 1;
var Ir = 12;
var rn = 32;
function _u() {
  const e = mn.generateKeyPair();
  return { privateKey: toString(e.secretKey, Lt), publicKey: toString(e.publicKey, Lt) };
}
function Bu() {
  const e = (0, import_random.randomBytes)(rn);
  return toString(e, Lt);
}
function Cu(e, t) {
  const r2 = mn.sharedKey(fromString(e, Lt), fromString(t, Lt), true), i3 = new import_hkdf.HKDF(import_sha256.SHA256, r2).expand(rn);
  return toString(i3, Lt);
}
function Ru(e) {
  const t = (0, import_sha256.hash)(fromString(e, Lt));
  return toString(t, Lt);
}
function Ou(e) {
  const t = (0, import_sha256.hash)(fromString(e, dr));
  return toString(t, Lt);
}
function nn(e) {
  return fromString(`${e}`, Zi);
}
function Ze(e) {
  return Number(toString(e, Zi));
}
function Pu(e) {
  const t = nn(typeof e.type < "u" ? e.type : en);
  if (Ze(t) === pr && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r2 = typeof e.senderPublicKey < "u" ? fromString(e.senderPublicKey, Lt) : void 0, i3 = typeof e.iv < "u" ? fromString(e.iv, Lt) : (0, import_random.randomBytes)(Ir), n2 = new import_chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, Lt)).seal(i3, fromString(e.message, dr));
  return fn({ type: t, sealed: n2, iv: i3, senderPublicKey: r2, encoding: e.encoding });
}
function Tu(e, t) {
  const r2 = nn(Sr), i3 = (0, import_random.randomBytes)(Ir), n2 = fromString(e, dr);
  return fn({ type: r2, sealed: n2, iv: i3, encoding: t });
}
function Du(e) {
  const t = new import_chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, Lt)), { sealed: r2, iv: i3 } = Wr({ encoded: e.encoded, encoding: e == null ? void 0 : e.encoding }), n2 = t.open(i3, r2);
  if (n2 === null)
    throw new Error("Failed to decrypt");
  return toString(n2, dr);
}
function Fu(e, t) {
  const { sealed: r2 } = Wr({ encoded: e, encoding: t });
  return toString(r2, dr);
}
function fn(e) {
  const { encoding: t = tn } = e;
  if (Ze(e.type) === Sr)
    return toString(concat([e.type, e.sealed]), t);
  if (Ze(e.type) === pr) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e.type, e.senderPublicKey, e.iv, e.sealed]), t);
  }
  return toString(concat([e.type, e.iv, e.sealed]), t);
}
function Wr(e) {
  const { encoded: t, encoding: r2 = tn } = e, i3 = fromString(t, r2), n2 = i3.slice(Nu, oo), o2 = oo;
  if (Ze(n2) === pr) {
    const v4 = o2 + rn, w2 = v4 + Ir, y5 = i3.slice(o2, v4), S2 = i3.slice(v4, w2), N2 = i3.slice(w2);
    return { type: n2, sealed: N2, iv: S2, senderPublicKey: y5 };
  }
  if (Ze(n2) === Sr) {
    const v4 = i3.slice(o2), w2 = (0, import_random.randomBytes)(Ir);
    return { type: n2, sealed: v4, iv: w2 };
  }
  const h3 = o2 + Ir, p3 = i3.slice(o2, h3), A3 = i3.slice(h3);
  return { type: n2, sealed: A3, iv: p3 };
}
function Uu(e, t) {
  const r2 = Wr({ encoded: e, encoding: t == null ? void 0 : t.encoding });
  return so({ type: Ze(r2.type), senderPublicKey: typeof r2.senderPublicKey < "u" ? toString(r2.senderPublicKey, Lt) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function so(e) {
  const t = (e == null ? void 0 : e.type) || en;
  if (t === pr) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function ku(e) {
  return e.type === pr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
function qu(e) {
  return e.type === Sr;
}
function ao(e) {
  return new import_elliptic.ec("p256").keyFromPublic({ x: Buffer.from(e.x, "base64").toString("hex"), y: Buffer.from(e.y, "base64").toString("hex") }, "hex");
}
function Ku(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/");
  const r2 = t.length % 4;
  return r2 > 0 && (t += "=".repeat(4 - r2)), t;
}
function Hu(e) {
  return Buffer.from(Ku(e), "base64");
}
function Lu(e, t) {
  const [r2, i3, n2] = e.split("."), o2 = Hu(n2);
  if (o2.length !== 64)
    throw new Error("Invalid signature length");
  const h3 = o2.slice(0, 32).toString("hex"), p3 = o2.slice(32, 64).toString("hex"), A3 = `${r2}.${i3}`, v4 = new import_sha256.SHA256().update(Buffer.from(A3)).digest(), w2 = ao(t), y5 = Buffer.from(v4).toString("hex");
  if (!w2.verify(y5, { r: h3, s: p3 }))
    throw new Error("Invalid signature");
  return decodeJWT(e).payload;
}
var uo = "irn";
function zu(e) {
  return (e == null ? void 0 : e.relay) || { protocol: uo };
}
function ju(e) {
  const t = C[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var Qu = Object.defineProperty;
var Ju = Object.defineProperties;
var Gu = Object.getOwnPropertyDescriptors;
var ho = Object.getOwnPropertySymbols;
var Yu = Object.prototype.hasOwnProperty;
var Vu = Object.prototype.propertyIsEnumerable;
var co = (e, t, r2) => t in e ? Qu(e, t, { enumerable: true, configurable: true, writable: true, value: r2 }) : e[t] = r2;
var lo = (e, t) => {
  for (var r2 in t || (t = {}))
    Yu.call(t, r2) && co(e, r2, t[r2]);
  if (ho)
    for (var r2 of ho(t))
      Vu.call(t, r2) && co(e, r2, t[r2]);
  return e;
};
var Wu = (e, t) => Ju(e, Gu(t));
function po(e, t = "-") {
  const r2 = {}, i3 = "relay" + t;
  return Object.keys(e).forEach((n2) => {
    if (n2.startsWith(i3)) {
      const o2 = n2.replace(i3, ""), h3 = e[n2];
      r2[o2] = h3;
    }
  }), r2;
}
function Xu(e) {
  if (!e.includes("wc:")) {
    const A3 = xi(e);
    A3 != null && A3.includes("wc:") && (e = A3);
  }
  e = e.includes("wc://") ? e.replace("wc://", "") : e, e = e.includes("wc:") ? e.replace("wc:", "") : e;
  const t = e.indexOf(":"), r2 = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i3 = e.substring(0, t), n2 = e.substring(t + 1, r2).split("@"), o2 = typeof r2 < "u" ? e.substring(r2) : "", h3 = Br.parse(o2), p3 = typeof h3.methods == "string" ? h3.methods.split(",") : void 0;
  return { protocol: i3, topic: vo(n2[0]), version: parseInt(n2[1], 10), symKey: h3.symKey, relay: po(h3), methods: p3, expiryTimestamp: h3.expiryTimestamp ? parseInt(h3.expiryTimestamp, 10) : void 0 };
}
function vo(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function go(e, t = "-") {
  const r2 = "relay", i3 = {};
  return Object.keys(e).forEach((n2) => {
    const o2 = r2 + t + n2;
    e[n2] && (i3[o2] = e[n2]);
  }), i3;
}
function $u(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + Br.stringify(lo(Wu(lo({ symKey: e.symKey }, go(e.relay)), { expiryTimestamp: e.expiryTimestamp }), e.methods ? { methods: e.methods.join(",") } : {}));
}
function Zu(e, t, r2) {
  return `${e}?wc_ev=${r2}&topic=${t}`;
}
function tr(e) {
  const t = [];
  return e.forEach((r2) => {
    const [i3, n2] = r2.split(":");
    t.push(`${i3}:${n2}`);
  }), t;
}
function bo(e) {
  const t = [];
  return Object.values(e).forEach((r2) => {
    t.push(...tr(r2.accounts));
  }), t;
}
function yo(e, t) {
  const r2 = [];
  return Object.values(e).forEach((i3) => {
    tr(i3.accounts).includes(t) && r2.push(...i3.methods);
  }), r2;
}
function wo(e, t) {
  const r2 = [];
  return Object.values(e).forEach((i3) => {
    tr(i3.accounts).includes(t) && r2.push(...i3.events);
  }), r2;
}
function on(e) {
  return e.includes(":");
}
function xo(e) {
  return on(e) ? e.split(":")[0] : e;
}
function Mo(e) {
  const t = {};
  return e == null ? void 0 : e.forEach((r2) => {
    const [i3, n2] = r2.split(":");
    t[i3] || (t[i3] = { accounts: [], chains: [], events: [] }), t[i3].accounts.push(r2), t[i3].chains.push(`${i3}:${n2}`);
  }), t;
}
function uh(e, t) {
  t = t.map((i3) => i3.replace("did:pkh:", ""));
  const r2 = Mo(t);
  for (const [i3, n2] of Object.entries(r2))
    n2.methods ? n2.methods = me(n2.methods, e) : n2.methods = e, n2.events = ["chainChanged", "accountsChanged"];
  return r2;
}
var Eo = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var So = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function xe(e, t) {
  const { message: r2, code: i3 } = So[e];
  return { message: t ? `${r2} ${t}` : r2, code: i3 };
}
function er(e, t) {
  const { message: r2, code: i3 } = Eo[e];
  return { message: t ? `${r2} ${t}` : r2, code: i3 };
}
function Nr(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : true : false;
}
function Xr(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Pe(e) {
  return typeof e > "u";
}
function Yt(e, t) {
  return t && Pe(e) ? true : typeof e == "string" && !!e.trim().length;
}
function $r(e, t) {
  return t && Pe(e) ? true : typeof e == "number" && !isNaN(e);
}
function hh(e, t) {
  const { requiredNamespaces: r2 } = t, i3 = Object.keys(e.namespaces), n2 = Object.keys(r2);
  let o2 = true;
  return _e(n2, i3) ? (i3.forEach((h3) => {
    const { accounts: p3, methods: A3, events: v4 } = e.namespaces[h3], w2 = tr(p3), y5 = r2[h3];
    (!_e(Or(h3, y5), w2) || !_e(y5.methods, A3) || !_e(y5.events, v4)) && (o2 = false);
  }), o2) : false;
}
function _r(e) {
  return Yt(e, false) && e.includes(":") ? e.split(":").length === 2 : false;
}
function Io(e) {
  if (Yt(e, false) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r2 = t[0] + ":" + t[1];
      return !!t[2] && _r(r2);
    }
  }
  return false;
}
function ch(e) {
  function t(r2) {
    try {
      return typeof new URL(r2) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (Yt(e, false)) {
      if (t(e))
        return true;
      const r2 = xi(e);
      return t(r2);
    }
  } catch {
  }
  return false;
}
function lh(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function dh(e) {
  return e == null ? void 0 : e.topic;
}
function ph(e, t) {
  let r2 = null;
  return Yt(e == null ? void 0 : e.publicKey, false) || (r2 = xe("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r2;
}
function an(e) {
  let t = true;
  return Nr(e) ? e.length && (t = e.every((r2) => Yt(r2, false))) : t = false, t;
}
function No(e, t, r2) {
  let i3 = null;
  return Nr(t) && t.length ? t.forEach((n2) => {
    i3 || _r(n2) || (i3 = er("UNSUPPORTED_CHAINS", `${r2}, chain ${n2} should be a string and conform to "namespace:chainId" format`));
  }) : _r(e) || (i3 = er("UNSUPPORTED_CHAINS", `${r2}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i3;
}
function _o(e, t, r2) {
  let i3 = null;
  return Object.entries(e).forEach(([n2, o2]) => {
    if (i3)
      return;
    const h3 = No(n2, Or(n2, o2), `${t} ${r2}`);
    h3 && (i3 = h3);
  }), i3;
}
function Bo(e, t) {
  let r2 = null;
  return Nr(e) ? e.forEach((i3) => {
    r2 || Io(i3) || (r2 = er("UNSUPPORTED_ACCOUNTS", `${t}, account ${i3} should be a string and conform to "namespace:chainId:address" format`));
  }) : r2 = er("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r2;
}
function Co(e, t) {
  let r2 = null;
  return Object.values(e).forEach((i3) => {
    if (r2)
      return;
    const n2 = Bo(i3 == null ? void 0 : i3.accounts, `${t} namespace`);
    n2 && (r2 = n2);
  }), r2;
}
function Ro(e, t) {
  let r2 = null;
  return an(e == null ? void 0 : e.methods) ? an(e == null ? void 0 : e.events) || (r2 = er("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r2 = er("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r2;
}
function un(e, t) {
  let r2 = null;
  return Object.values(e).forEach((i3) => {
    if (r2)
      return;
    const n2 = Ro(i3, `${t}, namespace`);
    n2 && (r2 = n2);
  }), r2;
}
function vh(e, t, r2) {
  let i3 = null;
  if (e && Xr(e)) {
    const n2 = un(e, t);
    n2 && (i3 = n2);
    const o2 = _o(e, t, r2);
    o2 && (i3 = o2);
  } else
    i3 = xe("MISSING_OR_INVALID", `${t}, ${r2} should be an object with data`);
  return i3;
}
function Oo(e, t) {
  let r2 = null;
  if (e && Xr(e)) {
    const i3 = un(e, t);
    i3 && (r2 = i3);
    const n2 = Co(e, t);
    n2 && (r2 = n2);
  } else
    r2 = xe("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r2;
}
function Po(e) {
  return Yt(e.protocol, true);
}
function gh(e, t) {
  let r2 = false;
  return t && !e ? r2 = true : e && Nr(e) && e.length && e.forEach((i3) => {
    r2 = Po(i3);
  }), r2;
}
function mh(e) {
  return typeof e == "number";
}
function Ah(e) {
  return typeof e < "u" && typeof e !== null;
}
function bh(e) {
  return !(!e || typeof e != "object" || !e.code || !$r(e.code, false) || !e.message || !Yt(e.message, false));
}
function yh(e) {
  return !(Pe(e) || !Yt(e.method, false));
}
function wh(e) {
  return !(Pe(e) || Pe(e.result) && Pe(e.error) || !$r(e.id, false) || !Yt(e.jsonrpc, false));
}
function xh(e) {
  return !(Pe(e) || !Yt(e.name, false));
}
function Mh(e, t) {
  return !(!_r(t) || !bo(e).includes(t));
}
function Eh(e, t, r2) {
  return Yt(r2, false) ? yo(e, t).includes(r2) : false;
}
function Sh(e, t, r2) {
  return Yt(r2, false) ? wo(e, t).includes(r2) : false;
}
function To(e, t, r2) {
  let i3 = null;
  const n2 = Ih(e), o2 = Nh(t), h3 = Object.keys(n2), p3 = Object.keys(o2), A3 = Do(Object.keys(e)), v4 = Do(Object.keys(t)), w2 = A3.filter((y5) => !v4.includes(y5));
  return w2.length && (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w2.toString()}
      Received: ${Object.keys(t).toString()}`)), _e(h3, p3) || (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces chains don't satisfy required namespaces.
      Required: ${h3.toString()}
      Approved: ${p3.toString()}`)), Object.keys(t).forEach((y5) => {
    if (!y5.includes(":") || i3)
      return;
    const S2 = tr(t[y5].accounts);
    S2.includes(y5) || (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces accounts don't satisfy namespace accounts for ${y5}
        Required: ${y5}
        Approved: ${S2.toString()}`));
  }), h3.forEach((y5) => {
    i3 || (_e(n2[y5].methods, o2[y5].methods) ? _e(n2[y5].events, o2[y5].events) || (i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces events don't satisfy namespace events for ${y5}`)) : i3 = xe("NON_CONFORMING_NAMESPACES", `${r2} namespaces methods don't satisfy namespace methods for ${y5}`));
  }), i3;
}
function Ih(e) {
  const t = {};
  return Object.keys(e).forEach((r2) => {
    var i3;
    r2.includes(":") ? t[r2] = e[r2] : (i3 = e[r2].chains) == null || i3.forEach((n2) => {
      t[n2] = { methods: e[r2].methods, events: e[r2].events };
    });
  }), t;
}
function Do(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function Nh(e) {
  const t = {};
  return Object.keys(e).forEach((r2) => {
    if (r2.includes(":"))
      t[r2] = e[r2];
    else {
      const i3 = tr(e[r2].accounts);
      i3 == null ? void 0 : i3.forEach((n2) => {
        t[n2] = { accounts: e[r2].accounts.filter((o2) => o2.includes(`${n2}:`)), methods: e[r2].methods, events: e[r2].events };
      });
    }
  }), t;
}
function _h(e, t) {
  return $r(e, false) && e <= t.max && e >= t.min;
}
function Bh() {
  const e = We();
  return new Promise((t) => {
    switch (e) {
      case qt.browser:
        t(Fo());
        break;
      case qt.reactNative:
        t(Uo());
        break;
      case qt.node:
        t(ko());
        break;
      default:
        t(true);
    }
  });
}
function Fo() {
  return gr() && (navigator == null ? void 0 : navigator.onLine);
}
async function Uo() {
  if (rr() && typeof global < "u" && global != null && global.NetInfo) {
    const e = await (global == null ? void 0 : global.NetInfo.fetch());
    return e == null ? void 0 : e.isConnected;
  }
  return true;
}
function ko() {
  return true;
}
function Ch(e) {
  switch (We()) {
    case qt.browser:
      qo(e);
      break;
    case qt.reactNative:
      Ko(e);
      break;
    case qt.node:
      break;
  }
}
function qo(e) {
  !rr() && gr() && (window.addEventListener("online", () => e(true)), window.addEventListener("offline", () => e(false)));
}
function Ko(e) {
  rr() && typeof global < "u" && global != null && global.NetInfo && (global == null ? void 0 : global.NetInfo.addEventListener((t) => e(t == null ? void 0 : t.isConnected)));
}
var hn = {};
var Rh = class {
  static get(t) {
    return hn[t];
  }
  static set(t, r2) {
    hn[t] = r2;
  }
  static delete(t) {
    delete hn[t];
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_events3 = __toESM(require_events());

// node_modules/@walletconnect/types/dist/index.es.js
var import_events2 = __toESM(require_events());
var n = class extends IEvents {
  constructor(s) {
    super(), this.opts = s, this.protocol = "wc", this.version = 2;
  }
};
var h2 = class extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
var a = class {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
};
var g = class extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
var u = class extends IEvents {
  constructor(s) {
    super();
  }
};
var p = class {
  constructor(s, t, e, f3) {
    this.core = s, this.logger = t, this.name = e;
  }
};
var d = class extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
var x = class extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t;
  }
};
var y2 = class {
  constructor(s, t, e) {
    this.core = s, this.logger = t, this.store = e;
  }
};
var v = class {
  constructor(s, t) {
    this.projectId = s, this.logger = t;
  }
};
var C2 = class {
  constructor(s, t, e) {
    this.core = s, this.logger = t, this.telemetryEnabled = e;
  }
};
var S = class {
  constructor(s) {
    this.opts = s, this.protocol = "wc", this.version = 2;
  }
};
var M = class {
  constructor(s) {
    this.client = s;
  }
};

// node_modules/@walletconnect/core/dist/index.es.js
var import_time2 = __toESM(require_cjs());
var import_lodash = __toESM(require_lodash());
var be2 = "wc";
var fe2 = 2;
var ne2 = "core";
var O = `${be2}@2:${ne2}:`;
var Xe2 = { name: ne2, logger: "error" };
var Ze2 = { database: ":memory:" };
var Qe = "crypto";
var _e2 = "client_ed25519_seed";
var et = import_time2.ONE_DAY;
var tt = "keychain";
var it = "0.3";
var st = "messages";
var rt = "0.3";
var nt = import_time2.SIX_HOURS;
var ot = "publisher";
var at = "irn";
var ct = "error";
var Ee = "wss://relay.walletconnect.org";
var ht = "relayer";
var w = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var lt = "_subscription";
var T = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var ut = 0.1;
var oe2 = "2.17.0";
var F = { link_mode: "link_mode", relay: "relay" };
var dt = "0.3";
var gt = "WALLETCONNECT_CLIENT_ID";
var ve2 = "WALLETCONNECT_LINK_MODE_APPS";
var A2 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var pt = "subscription";
var yt = "0.3";
var Dt2 = import_time2.FIVE_SECONDS * 1e3;
var mt = "pairing";
var bt = "0.3";
var j2 = { wc_pairingDelete: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 } } };
var q = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var P = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var ft = "history";
var _t = "0.3";
var Et = "expirer";
var R = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var vt = "0.3";
var wt = "verify-api";
var Is2 = "https://verify.walletconnect.com";
var It = "https://verify.walletconnect.org";
var Z = It;
var Tt2 = `${Z}/v3`;
var Ct = [Is2, It];
var St = "echo";
var Pt = "https://echo.walletconnect.com";
var z2 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" };
var M2 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" };
var Cs2 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" };
var Ss2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" };
var Ps2 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" };
var Rs2 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" };
var Rt = 0.1;
var xt = "event-client";
var Ot2 = 86400;
var At = "https://pulse.walletconnect.org/batch";
function xs2(o2, e) {
  if (o2.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++)
    t[s] = 255;
  for (var i3 = 0; i3 < o2.length; i3++) {
    var r2 = o2.charAt(i3), n2 = r2.charCodeAt(0);
    if (t[n2] !== 255)
      throw new TypeError(r2 + " is ambiguous");
    t[n2] = i3;
  }
  var a2 = o2.length, c2 = o2.charAt(0), h3 = Math.log(a2) / Math.log(256), d2 = Math.log(256) / Math.log(a2);
  function g3(l) {
    if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))), !(l instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (l.length === 0)
      return "";
    for (var p3 = 0, E3 = 0, D3 = 0, f3 = l.length; D3 !== f3 && l[D3] === 0; )
      D3++, p3++;
    for (var N2 = (f3 - D3) * d2 + 1 >>> 0, C4 = new Uint8Array(N2); D3 !== f3; ) {
      for (var L2 = l[D3], $3 = 0, x4 = N2 - 1; (L2 !== 0 || $3 < E3) && x4 !== -1; x4--, $3++)
        L2 += 256 * C4[x4] >>> 0, C4[x4] = L2 % a2 >>> 0, L2 = L2 / a2 >>> 0;
      if (L2 !== 0)
        throw new Error("Non-zero carry");
      E3 = $3, D3++;
    }
    for (var k2 = N2 - E3; k2 !== N2 && C4[k2] === 0; )
      k2++;
    for (var ie2 = c2.repeat(p3); k2 < N2; ++k2)
      ie2 += o2.charAt(C4[k2]);
    return ie2;
  }
  function m2(l) {
    if (typeof l != "string")
      throw new TypeError("Expected String");
    if (l.length === 0)
      return new Uint8Array();
    var p3 = 0;
    if (l[p3] !== " ") {
      for (var E3 = 0, D3 = 0; l[p3] === c2; )
        E3++, p3++;
      for (var f3 = (l.length - p3) * h3 + 1 >>> 0, N2 = new Uint8Array(f3); l[p3]; ) {
        var C4 = t[l.charCodeAt(p3)];
        if (C4 === 255)
          return;
        for (var L2 = 0, $3 = f3 - 1; (C4 !== 0 || L2 < D3) && $3 !== -1; $3--, L2++)
          C4 += a2 * N2[$3] >>> 0, N2[$3] = C4 % 256 >>> 0, C4 = C4 / 256 >>> 0;
        if (C4 !== 0)
          throw new Error("Non-zero carry");
        D3 = L2, p3++;
      }
      if (l[p3] !== " ") {
        for (var x4 = f3 - D3; x4 !== f3 && N2[x4] === 0; )
          x4++;
        for (var k2 = new Uint8Array(E3 + (f3 - x4)), ie2 = E3; x4 !== f3; )
          k2[ie2++] = N2[x4++];
        return k2;
      }
    }
  }
  function b3(l) {
    var p3 = m2(l);
    if (p3)
      return p3;
    throw new Error(`Non-${e} character`);
  }
  return { encode: g3, decodeUnsafe: m2, decode: b3 };
}
var Os2 = xs2;
var As2 = Os2;
var Nt = (o2) => {
  if (o2 instanceof Uint8Array && o2.constructor.name === "Uint8Array")
    return o2;
  if (o2 instanceof ArrayBuffer)
    return new Uint8Array(o2);
  if (ArrayBuffer.isView(o2))
    return new Uint8Array(o2.buffer, o2.byteOffset, o2.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Ns2 = (o2) => new TextEncoder().encode(o2);
var Ls2 = (o2) => new TextDecoder().decode(o2);
var zs2 = class {
  constructor(e, t, s) {
    this.name = e, this.prefix = t, this.baseEncode = s;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var ks2 = class {
  constructor(e, t, s) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s;
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
    return Lt2(this, e);
  }
};
var Ms2 = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Lt2(this, e);
  }
  decode(e) {
    const t = e[0], s = this.decoders[t];
    if (s)
      return s.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Lt2 = (o2, e) => new Ms2({ ...o2.decoders || { [o2.prefix]: o2 }, ...e.decoders || { [e.prefix]: e } });
var $s2 = class {
  constructor(e, t, s, i3) {
    this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = i3, this.encoder = new zs2(e, t, s), this.decoder = new ks2(e, t, i3);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var ae2 = ({ name: o2, prefix: e, encode: t, decode: s }) => new $s2(o2, e, t, s);
var Q2 = ({ prefix: o2, name: e, alphabet: t }) => {
  const { encode: s, decode: i3 } = As2(t, e);
  return ae2({ prefix: o2, name: e, encode: s, decode: (r2) => Nt(i3(r2)) });
};
var Fs2 = (o2, e, t, s) => {
  const i3 = {};
  for (let d2 = 0; d2 < e.length; ++d2)
    i3[e[d2]] = d2;
  let r2 = o2.length;
  for (; o2[r2 - 1] === "="; )
    --r2;
  const n2 = new Uint8Array(r2 * t / 8 | 0);
  let a2 = 0, c2 = 0, h3 = 0;
  for (let d2 = 0; d2 < r2; ++d2) {
    const g3 = i3[o2[d2]];
    if (g3 === void 0)
      throw new SyntaxError(`Non-${s} character`);
    c2 = c2 << t | g3, a2 += t, a2 >= 8 && (a2 -= 8, n2[h3++] = 255 & c2 >> a2);
  }
  if (a2 >= t || 255 & c2 << 8 - a2)
    throw new SyntaxError("Unexpected end of data");
  return n2;
};
var Us2 = (o2, e, t) => {
  const s = e[e.length - 1] === "=", i3 = (1 << t) - 1;
  let r2 = "", n2 = 0, a2 = 0;
  for (let c2 = 0; c2 < o2.length; ++c2)
    for (a2 = a2 << 8 | o2[c2], n2 += 8; n2 > t; )
      n2 -= t, r2 += e[i3 & a2 >> n2];
  if (n2 && (r2 += e[i3 & a2 << t - n2]), s)
    for (; r2.length * t & 7; )
      r2 += "=";
  return r2;
};
var _ = ({ name: o2, prefix: e, bitsPerChar: t, alphabet: s }) => ae2({ prefix: e, name: o2, encode(i3) {
  return Us2(i3, s, t);
}, decode(i3) {
  return Fs2(i3, s, t, o2);
} });
var Ks2 = ae2({ prefix: "\0", name: "identity", encode: (o2) => Ls2(o2), decode: (o2) => Ns2(o2) });
var Bs2 = Object.freeze({ __proto__: null, identity: Ks2 });
var Vs2 = _({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var js2 = Object.freeze({ __proto__: null, base2: Vs2 });
var qs2 = _({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gs2 = Object.freeze({ __proto__: null, base8: qs2 });
var Hs2 = Q2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ys2 = Object.freeze({ __proto__: null, base10: Hs2 });
var Js2 = _({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Ws2 = _({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Xs2 = Object.freeze({ __proto__: null, base16: Js2, base16upper: Ws2 });
var Zs2 = _({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Qs2 = _({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var er2 = _({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var tr2 = _({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var ir2 = _({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var sr2 = _({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var rr2 = _({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var nr2 = _({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var or2 = _({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var ar2 = Object.freeze({ __proto__: null, base32: Zs2, base32upper: Qs2, base32pad: er2, base32padupper: tr2, base32hex: ir2, base32hexupper: sr2, base32hexpad: rr2, base32hexpadupper: nr2, base32z: or2 });
var cr2 = Q2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var hr2 = Q2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var lr2 = Object.freeze({ __proto__: null, base36: cr2, base36upper: hr2 });
var ur2 = Q2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var dr2 = Q2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var gr2 = Object.freeze({ __proto__: null, base58btc: ur2, base58flickr: dr2 });
var pr2 = _({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var yr2 = _({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Dr2 = _({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var mr2 = _({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var br2 = Object.freeze({ __proto__: null, base64: pr2, base64pad: yr2, base64url: Dr2, base64urlpad: mr2 });
var zt2 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var fr2 = zt2.reduce((o2, e, t) => (o2[t] = e, o2), []);
var _r2 = zt2.reduce((o2, e, t) => (o2[e.codePointAt(0)] = t, o2), []);
function Er2(o2) {
  return o2.reduce((e, t) => (e += fr2[t], e), "");
}
function vr2(o2) {
  const e = [];
  for (const t of o2) {
    const s = _r2[t.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
var wr2 = ae2({ prefix: "🚀", name: "base256emoji", encode: Er2, decode: vr2 });
var Ir2 = Object.freeze({ __proto__: null, base256emoji: wr2 });
var Tr2 = Mt;
var kt2 = 128;
var Cr2 = 127;
var Sr2 = ~Cr2;
var Pr = Math.pow(2, 31);
function Mt(o2, e, t) {
  e = e || [], t = t || 0;
  for (var s = t; o2 >= Pr; )
    e[t++] = o2 & 255 | kt2, o2 /= 128;
  for (; o2 & Sr2; )
    e[t++] = o2 & 255 | kt2, o2 >>>= 7;
  return e[t] = o2 | 0, Mt.bytes = t - s + 1, e;
}
var Rr2 = we2;
var xr2 = 128;
var $t2 = 127;
function we2(o2, s) {
  var t = 0, s = s || 0, i3 = 0, r2 = s, n2, a2 = o2.length;
  do {
    if (r2 >= a2)
      throw we2.bytes = 0, new RangeError("Could not decode varint");
    n2 = o2[r2++], t += i3 < 28 ? (n2 & $t2) << i3 : (n2 & $t2) * Math.pow(2, i3), i3 += 7;
  } while (n2 >= xr2);
  return we2.bytes = r2 - s, t;
}
var Or2 = Math.pow(2, 7);
var Ar2 = Math.pow(2, 14);
var Nr2 = Math.pow(2, 21);
var Lr2 = Math.pow(2, 28);
var zr2 = Math.pow(2, 35);
var kr2 = Math.pow(2, 42);
var Mr2 = Math.pow(2, 49);
var $r2 = Math.pow(2, 56);
var Fr2 = Math.pow(2, 63);
var Ur2 = function(o2) {
  return o2 < Or2 ? 1 : o2 < Ar2 ? 2 : o2 < Nr2 ? 3 : o2 < Lr2 ? 4 : o2 < zr2 ? 5 : o2 < kr2 ? 6 : o2 < Mr2 ? 7 : o2 < $r2 ? 8 : o2 < Fr2 ? 9 : 10;
};
var Kr2 = { encode: Tr2, decode: Rr2, encodingLength: Ur2 };
var Ft2 = Kr2;
var Ut2 = (o2, e, t = 0) => (Ft2.encode(o2, e, t), e);
var Kt2 = (o2) => Ft2.encodingLength(o2);
var Ie = (o2, e) => {
  const t = e.byteLength, s = Kt2(o2), i3 = s + Kt2(t), r2 = new Uint8Array(i3 + t);
  return Ut2(o2, r2, 0), Ut2(t, r2, s), r2.set(e, i3), new Br2(o2, t, e, r2);
};
var Br2 = class {
  constructor(e, t, s, i3) {
    this.code = e, this.size = t, this.digest = s, this.bytes = i3;
  }
};
var Bt = ({ name: o2, code: e, encode: t }) => new Vr2(o2, e, t);
var Vr2 = class {
  constructor(e, t, s) {
    this.name = e, this.code = t, this.encode = s;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? Ie(this.code, t) : t.then((s) => Ie(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
};
var Vt = (o2) => async (e) => new Uint8Array(await crypto.subtle.digest(o2, e));
var jr2 = Bt({ name: "sha2-256", code: 18, encode: Vt("SHA-256") });
var qr2 = Bt({ name: "sha2-512", code: 19, encode: Vt("SHA-512") });
var Gr2 = Object.freeze({ __proto__: null, sha256: jr2, sha512: qr2 });
var jt2 = 0;
var Hr2 = "identity";
var qt2 = Nt;
var Yr2 = (o2) => Ie(jt2, qt2(o2));
var Jr2 = { code: jt2, name: Hr2, encode: qt2, digest: Yr2 };
var Wr2 = Object.freeze({ __proto__: null, identity: Jr2 });
new TextEncoder(), new TextDecoder();
var Gt2 = { ...Bs2, ...js2, ...Gs2, ...Ys2, ...Xs2, ...ar2, ...lr2, ...gr2, ...br2, ...Ir2 };
({ ...Gr2, ...Wr2 });
function Xr2(o2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(o2) : new Uint8Array(o2);
}
function Ht2(o2, e, t, s) {
  return { name: o2, prefix: e, encoder: { name: o2, prefix: e, encode: t }, decoder: { decode: s } };
}
var Yt2 = Ht2("utf8", "u", (o2) => "u" + new TextDecoder("utf8").decode(o2), (o2) => new TextEncoder().encode(o2.substring(1)));
var Te = Ht2("ascii", "a", (o2) => {
  let e = "a";
  for (let t = 0; t < o2.length; t++)
    e += String.fromCharCode(o2[t]);
  return e;
}, (o2) => {
  o2 = o2.substring(1);
  const e = Xr2(o2.length);
  for (let t = 0; t < o2.length; t++)
    e[t] = o2.charCodeAt(t);
  return e;
});
var Zr = { utf8: Yt2, "utf-8": Yt2, hex: Gt2.base16, latin1: Te, ascii: Te, binary: Te, ...Gt2 };
function Qr2(o2, e = "utf8") {
  const t = Zr[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(o2, "utf8") : t.decoder.decode(`${t.prefix}${o2}`);
}
var Jt2 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = tt, this.version = it, this.initialized = false, this.storagePrefix = O, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = true;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, i3) => {
      this.isInitialized(), this.keychain.set(s, i3), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const i3 = this.keychain.get(s);
      if (typeof i3 > "u") {
        const { message: r2 } = xe("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(r2);
      }
      return i3;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = e, this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, cs(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ls(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Wt = class {
  constructor(e, t, s) {
    this.core = e, this.logger = t, this.name = Qe, this.randomSessionIdentifier = Bu(), this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (i3) => (this.isInitialized(), this.keychain.has(i3)), this.getClientId = async () => {
      this.isInitialized();
      const i3 = await this.getClientSeed(), r2 = generateKeyPair(i3);
      return encodeIss(r2.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i3 = _u();
      return this.setPrivateKey(i3.publicKey, i3.privateKey);
    }, this.signJWT = async (i3) => {
      this.isInitialized();
      const r2 = await this.getClientSeed(), n2 = generateKeyPair(r2), a2 = this.randomSessionIdentifier, c2 = et;
      return await signJWT(a2, i3, c2, n2);
    }, this.generateSharedKey = (i3, r2, n2) => {
      this.isInitialized();
      const a2 = this.getPrivateKey(i3), c2 = Cu(a2, r2);
      return this.setSymKey(c2, n2);
    }, this.setSymKey = async (i3, r2) => {
      this.isInitialized();
      const n2 = r2 || Ru(i3);
      return await this.keychain.set(n2, i3), n2;
    }, this.deleteKeyPair = async (i3) => {
      this.isInitialized(), await this.keychain.del(i3);
    }, this.deleteSymKey = async (i3) => {
      this.isInitialized(), await this.keychain.del(i3);
    }, this.encode = async (i3, r2, n2) => {
      this.isInitialized();
      const a2 = so(n2), c2 = safeJsonStringify(r2);
      if (qu(a2))
        return Tu(c2, n2 == null ? void 0 : n2.encoding);
      if (ku(a2)) {
        const m2 = a2.senderPublicKey, b3 = a2.receiverPublicKey;
        i3 = await this.generateSharedKey(m2, b3);
      }
      const h3 = this.getSymKey(i3), { type: d2, senderPublicKey: g3 } = a2;
      return Pu({ type: d2, symKey: h3, message: c2, senderPublicKey: g3, encoding: n2 == null ? void 0 : n2.encoding });
    }, this.decode = async (i3, r2, n2) => {
      this.isInitialized();
      const a2 = Uu(r2, n2);
      if (qu(a2)) {
        const c2 = Fu(r2, n2 == null ? void 0 : n2.encoding);
        return safeJsonParse(c2);
      }
      if (ku(a2)) {
        const c2 = a2.receiverPublicKey, h3 = a2.senderPublicKey;
        i3 = await this.generateSharedKey(c2, h3);
      }
      try {
        const c2 = this.getSymKey(i3), h3 = Du({ symKey: c2, encoded: r2, encoding: n2 == null ? void 0 : n2.encoding });
        return safeJsonParse(h3);
      } catch (c2) {
        this.logger.error(`Failed to decode message from topic: '${i3}', clientId: '${await this.getClientId()}'`), this.logger.error(c2);
      }
    }, this.getPayloadType = (i3, r2 = tn) => {
      const n2 = Wr({ encoded: i3, encoding: r2 });
      return Ze(n2.type);
    }, this.getPayloadSenderPublicKey = (i3, r2 = tn) => {
      const n2 = Wr({ encoded: i3, encoding: r2 });
      return n2.senderPublicKey ? toString(n2.senderPublicKey, Lt) : void 0;
    }, this.core = e, this.logger = E(t, this.name), this.keychain = s || new Jt2(this.core, this.logger);
  }
  get context() {
    return y(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(_e2);
    } catch {
      e = Bu(), await this.keychain.set(_e2, e);
    }
    return Qr2(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Xt = class extends a {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = st, this.version = rt, this.initialized = false, this.storagePrefix = O, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (s, i3) => {
      this.isInitialized();
      const r2 = Ou(i3);
      let n2 = this.messages.get(s);
      return typeof n2 > "u" && (n2 = {}), typeof n2[r2] < "u" || (n2[r2] = i3, this.messages.set(s, n2), await this.persist()), r2;
    }, this.get = (s) => {
      this.isInitialized();
      let i3 = this.messages.get(s);
      return typeof i3 > "u" && (i3 = {}), i3;
    }, this.has = (s, i3) => {
      this.isInitialized();
      const r2 = this.get(s), n2 = Ou(i3);
      return typeof r2[n2] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = E(e, this.name), this.core = t;
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, cs(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ls(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var en2 = class extends g {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new import_events3.EventEmitter(), this.name = ot, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = (0, import_time2.toMiliseconds)(import_time2.ONE_MINUTE), this.failedPublishTimeout = (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND), this.needsTransportRestart = false, this.publish = async (s, i3, r2) => {
      var n2;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: i3, opts: r2 } });
      const a2 = (r2 == null ? void 0 : r2.ttl) || nt, c2 = zu(r2), h3 = (r2 == null ? void 0 : r2.prompt) || false, d2 = (r2 == null ? void 0 : r2.tag) || 0, g3 = (r2 == null ? void 0 : r2.id) || getBigIntRpcId().toString(), m2 = { topic: s, message: i3, opts: { ttl: a2, relay: c2, prompt: h3, tag: d2, id: g3, attestation: r2 == null ? void 0 : r2.attestation } }, b3 = `Failed to publish payload, please try again. id:${g3} tag:${d2}`, l = Date.now();
      let p3, E3 = 1;
      try {
        for (; p3 === void 0; ) {
          if (Date.now() - l > this.publishTimeout)
            throw new Error(b3);
          this.logger.trace({ id: g3, attempts: E3 }, `publisher.publish - attempt ${E3}`), p3 = await await ms(this.rpcPublish(s, i3, a2, c2, h3, d2, g3, r2 == null ? void 0 : r2.attestation).catch((D3) => this.logger.warn(D3)), this.publishTimeout, b3), E3++, p3 || await new Promise((D3) => setTimeout(D3, this.failedPublishTimeout));
        }
        this.relayer.events.emit(w.publish, m2), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { id: g3, topic: s, message: i3, opts: r2 } });
      } catch (D3) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(D3), (n2 = r2 == null ? void 0 : r2.internal) != null && n2.throwOnFailedPublish)
          throw D3;
        this.queue.set(g3, m2);
      }
    }, this.on = (s, i3) => {
      this.events.on(s, i3);
    }, this.once = (s, i3) => {
      this.events.once(s, i3);
    }, this.off = (s, i3) => {
      this.events.off(s, i3);
    }, this.removeListener = (s, i3) => {
      this.events.removeListener(s, i3);
    }, this.relayer = e, this.logger = E(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y(this.logger);
  }
  rpcPublish(e, t, s, i3, r2, n2, a2, c2) {
    var h3, d2, g3, m2;
    const b3 = { method: ju(i3.protocol).publish, params: { topic: e, message: t, ttl: s, prompt: r2, tag: n2, attestation: c2 }, id: a2 };
    return Pe((h3 = b3.params) == null ? void 0 : h3.prompt) && ((d2 = b3.params) == null || delete d2.prompt), Pe((g3 = b3.params) == null ? void 0 : g3.tag) && ((m2 = b3.params) == null || delete m2.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: b3 }), this.relayer.request(b3);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: i3 } = e;
      await this.publish(t, s, i3);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(w.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(w.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
};
var tn2 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const s = this.get(e);
      this.exists(e, t) || this.map.set(e, [...s, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const s = this.get(e);
      if (!this.exists(e, t))
        return;
      const i3 = s.filter((r2) => r2 !== t);
      if (!i3.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, i3);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var sn = Object.defineProperty;
var rn2 = Object.defineProperties;
var nn2 = Object.getOwnPropertyDescriptors;
var Zt2 = Object.getOwnPropertySymbols;
var on2 = Object.prototype.hasOwnProperty;
var an2 = Object.prototype.propertyIsEnumerable;
var Qt = (o2, e, t) => e in o2 ? sn(o2, e, { enumerable: true, configurable: true, writable: true, value: t }) : o2[e] = t;
var ee2 = (o2, e) => {
  for (var t in e || (e = {}))
    on2.call(e, t) && Qt(o2, t, e[t]);
  if (Zt2)
    for (var t of Zt2(e))
      an2.call(e, t) && Qt(o2, t, e[t]);
  return o2;
};
var Ce2 = (o2, e) => rn2(o2, nn2(e));
var ei = class extends d {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new tn2(), this.events = new import_events3.EventEmitter(), this.name = pt, this.version = yt, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O, this.subscribeTimeout = (0, import_time2.toMiliseconds)(import_time2.ONE_MINUTE), this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId(), await this.restore()), this.initialized = true;
    }, this.subscribe = async (s, i3) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: i3 } });
      try {
        const r2 = zu(i3), n2 = { topic: s, relay: r2, transportType: i3 == null ? void 0 : i3.transportType };
        this.pending.set(s, n2);
        const a2 = await this.rpcSubscribe(s, r2, i3 == null ? void 0 : i3.transportType);
        return typeof a2 == "string" && (this.onSubscribe(a2, n2), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: i3 } })), a2;
      } catch (r2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r2), r2;
      }
    }, this.unsubscribe = async (s, i3) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i3 == null ? void 0 : i3.id) < "u" ? await this.unsubscribeById(s, i3.id, i3) : await this.unsubscribeByTopic(s, i3);
    }, this.isSubscribed = async (s) => {
      if (this.topics.includes(s))
        return true;
      const i3 = `${this.pendingSubscriptionWatchLabel}_${s}`;
      return await new Promise((r2, n2) => {
        const a2 = new import_time2.Watch();
        a2.start(i3);
        const c2 = setInterval(() => {
          !this.pending.has(s) && this.topics.includes(s) && (clearInterval(c2), a2.stop(i3), r2(true)), a2.elapsed(i3) >= Dt2 && (clearInterval(c2), a2.stop(i3), n2(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }, this.on = (s, i3) => {
      this.events.on(s, i3);
    }, this.once = (s, i3) => {
      this.events.once(s, i3);
    }, this.off = (s, i3) => {
      this.events.off(s, i3);
    }, this.removeListener = (s, i3) => {
      this.events.removeListener(s, i3);
    }, this.start = async () => {
      await this.onConnect();
    }, this.stop = async () => {
      await this.onDisconnect();
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = E(t, this.name), this.clientId = "";
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let s = false;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (i3) => await this.unsubscribeById(e, i3, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    try {
      const i3 = zu(s);
      await this.rpcUnsubscribe(e, t, i3);
      const r2 = er("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, r2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: s } });
    } catch (i3) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i3), i3;
    }
  }
  async rpcSubscribe(e, t, s = F.relay) {
    s === F.relay && await this.restartToComplete();
    const i3 = { method: ju(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 });
    try {
      const r2 = Ou(e + this.clientId);
      return s === F.link_mode ? (setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(i3).catch((n2) => this.logger.warn(n2));
      }, (0, import_time2.toMiliseconds)(import_time2.ONE_SECOND)), r2) : await await ms(this.relayer.request(i3).catch((n2) => this.logger.warn(n2)), this.subscribeTimeout) ? r2 : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(w.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, s = { method: ju(t.protocol).batchSubscribe, params: { topics: e.map((i3) => i3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await ms(this.relayer.request(s).catch((i3) => this.logger.warn(i3)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(w.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length)
      return;
    const t = e[0].relay, s = { method: ju(t.protocol).batchFetchMessages, params: { topics: e.map((r2) => r2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    let i3;
    try {
      i3 = await await ms(this.relayer.request(s).catch((r2) => this.logger.warn(r2)), this.subscribeTimeout);
    } catch {
      this.relayer.events.emit(w.connection_stalled);
    }
    return i3;
  }
  rpcUnsubscribe(e, t, s) {
    const i3 = { method: ju(s.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 }), this.relayer.request(i3);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, Ce2(ee2({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, ee2({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, s), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t);
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, ee2({}, t)), this.topicMap.set(t.topic, e), this.events.emit(A2.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(A2.deleted, Ce2(ee2({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(A2.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(s), await this.batchSubscribe(s);
      }
    }
    this.events.emit(A2.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    Nr(t) && this.onBatchSubscribe(t.map((s, i3) => Ce2(ee2({}, e[i3]), { id: s })));
  }
  async batchFetchMessages(e) {
    if (!e.length)
      return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e);
    t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r.pulse, async () => {
      await this.checkPending();
    }), this.events.on(A2.created, async (e) => {
      const t = A2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(A2.deleted, async (e) => {
      const t = A2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    !this.relayer.connected && !this.relayer.connecting && await this.relayer.transportOpen(), this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
};
var cn2 = Object.defineProperty;
var ti = Object.getOwnPropertySymbols;
var hn2 = Object.prototype.hasOwnProperty;
var ln2 = Object.prototype.propertyIsEnumerable;
var ii = (o2, e, t) => e in o2 ? cn2(o2, e, { enumerable: true, configurable: true, writable: true, value: t }) : o2[e] = t;
var un2 = (o2, e) => {
  for (var t in e || (e = {}))
    hn2.call(e, t) && ii(o2, t, e[t]);
  if (ti)
    for (var t of ti(e))
      ln2.call(e, t) && ii(o2, t, e[t]);
  return o2;
};
var si = class extends u {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new import_events3.EventEmitter(), this.name = ht, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = false, this.requestsInFlight = /* @__PURE__ */ new Map(), this.heartBeatTimeout = (0, import_time2.toMiliseconds)(import_time2.THIRTY_SECONDS + import_time2.ONE_SECOND), this.request = async (t) => {
      var s, i3;
      this.logger.debug("Publishing Request Payload");
      const r2 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        const n2 = this.provider.request(t);
        this.requestsInFlight.set(r2, { promise: n2, request: t }), this.logger.trace({ id: r2, method: t.method, topic: (s = t.params) == null ? void 0 : s.topic }, "relayer.request - attempt to publish...");
        const a2 = await new Promise(async (c2, h3) => {
          const d2 = () => {
            h3(new Error(`relayer.request - publish interrupted, id: ${r2}`));
          };
          this.provider.on(T.disconnect, d2);
          const g3 = await n2;
          this.provider.off(T.disconnect, d2), c2(g3);
        });
        return this.logger.trace({ id: r2, method: t.method, topic: (i3 = t.params) == null ? void 0 : i3.topic }, "relayer.request - published"), a2;
      } catch (n2) {
        throw this.logger.debug(`Failed to Publish Request: ${r2}`), n2;
      } finally {
        this.requestsInFlight.delete(r2);
      }
    }, this.resetPingTimeout = () => {
      if (bi())
        try {
          clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
            var t, s, i3;
            (i3 = (s = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : s.socket) == null || i3.terminate();
          }, this.heartBeatTimeout);
        } catch (t) {
          this.logger.warn(t);
        }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }, this.onConnectHandler = () => {
      this.logger.trace("relayer connected"), this.startPingTimeout(), this.events.emit(w.connect);
    }, this.onDisconnectHandler = () => {
      this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(w.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(T.payload, this.onPayloadHandler), this.provider.on(T.connect, this.onConnectHandler), this.provider.on(T.disconnect, this.onDisconnectHandler), this.provider.on(T.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? E(e.logger, this.name) : (0, import_pino.default)(k({ level: e.logger || ct })), this.messages = new Xt(this.logger, e.core), this.subscriber = new ei(this, this.logger), this.publisher = new en2(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ee, this.projectId = e.projectId, this.bundleId = ns(), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.subscriber.cached.length > 0)
      try {
        await this.transportOpen();
      } catch (e) {
        this.logger.warn(e);
      }
  }
  get context() {
    return y(this.logger);
  }
  get connected() {
    var e, t, s;
    return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 1;
  }
  get connecting() {
    var e, t, s;
    return ((s = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : s.readyState) === 0;
  }
  async publish(e, t, s) {
    this.isInitialized(), await this.publisher.publish(e, t, s), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now(), transportType: F.relay });
  }
  async subscribe(e, t) {
    var s;
    this.isInitialized(), (t == null ? void 0 : t.transportType) === "relay" && await this.toEstablishConnection();
    let i3 = ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "", r2;
    const n2 = (a2) => {
      a2.topic === e && (this.subscriber.off(A2.created, n2), r2());
    };
    return await Promise.all([new Promise((a2) => {
      r2 = a2, this.subscriber.on(A2.created, n2);
    }), new Promise(async (a2) => {
      i3 = await this.subscriber.subscribe(e, t) || i3, a2();
    })]), i3;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportDisconnect() {
    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0)
      try {
        await Promise.all(Array.from(this.requestsInFlight.values()).map((e) => e.promise));
      } catch (e) {
        this.logger.warn(e);
      }
    this.hasExperiencedNetworkDisruption || this.connected ? await ms(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e) {
    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    try {
      await new Promise(async (t, s) => {
        const i3 = () => {
          this.provider.off(T.disconnect, i3), s(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(T.disconnect, i3), await ms(this.provider.connect(), (0, import_time2.toMiliseconds)(import_time2.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r2) => {
          s(r2);
        }).finally(() => {
          clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0;
        }), this.subscriber.start().catch((r2) => {
          this.logger.error(r2), this.onDisconnectHandler();
        }), this.hasExperiencedNetworkDisruption = false, t();
      });
    } catch (t) {
      this.logger.error(t);
      const s = t;
      if (this.hasExperiencedNetworkDisruption = true, !this.isConnectionStalled(s.message))
        throw t;
    } finally {
      this.connectionAttemptInProgress = false;
    }
  }
  async restartTransport(e) {
    this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Bh())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e.sort((s, i3) => s.publishedAt - i3.publishedAt);
    this.logger.trace(`Batch of ${t.length} message events sorted`);
    for (const s of t)
      try {
        await this.onMessageEvent(s);
      } catch (i3) {
        this.logger.warn(i3);
      }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e, t) {
    const { topic: s } = e;
    if (!t.sessionExists) {
      const i3 = ws(import_time2.FIVE_MINUTES), r2 = { topic: s, expiry: i3, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(s, r2);
    }
    this.events.emit(w.message, e), await this.recordMessageEvent(e);
  }
  startPingTimeout() {
    var e, t, s, i3, r2;
    if (bi())
      try {
        (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((r2 = (i3 = (s = this.provider) == null ? void 0 : s.connection) == null ? void 0 : i3.socket) == null || r2.once("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (n2) {
        this.logger.warn(n2);
      }
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o(new f(ss({ sdkVersion: oe2, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), true;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const i3 = this.messages.has(t, s);
    return i3 && this.logger.debug(`Ignoring duplicate message: ${s}`), i3;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(lt))
        return;
      const t = e.params, { topic: s, message: i3, publishedAt: r2, attestation: n2 } = t.data, a2 = { topic: s, message: i3, publishedAt: r2, transportType: F.relay, attestation: n2 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(un2({ type: "event", event: t.id }, a2)), this.events.emit(t.id, a2), await this.acknowledgePayload(e), await this.onMessageEvent(a2);
    } else
      isJsonRpcResponse(e) && this.events.emit(w.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(w.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(T.payload, this.onPayloadHandler), this.provider.off(T.connect, this.onConnectHandler), this.provider.off(T.disconnect, this.onDisconnectHandler), this.provider.off(T.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await Bh();
    Ch(async (t) => {
      e !== t && (e = t, t ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(w.disconnect), this.connectionAttemptInProgress = false, !this.transportExplicitlyClosed && (this.reconnectTimeout || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e) => this.logger.error(e));
    }, (0, import_time2.toMiliseconds)(ut))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.connected && (clearInterval(t), e());
      }, this.connectionStatusPollingInterval);
    }), await this.transportOpen());
  }
};
var dn2 = Object.defineProperty;
var ri = Object.getOwnPropertySymbols;
var gn2 = Object.prototype.hasOwnProperty;
var pn2 = Object.prototype.propertyIsEnumerable;
var ni = (o2, e, t) => e in o2 ? dn2(o2, e, { enumerable: true, configurable: true, writable: true, value: t }) : o2[e] = t;
var oi = (o2, e) => {
  for (var t in e || (e = {}))
    gn2.call(e, t) && ni(o2, t, e[t]);
  if (ri)
    for (var t of ri(e))
      pn2.call(e, t) && ni(o2, t, e[t]);
  return o2;
};
var ai = class extends p {
  constructor(e, t, s, i3 = O, r2 = void 0) {
    super(e, t, s, i3), this.core = e, this.logger = t, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = dt, this.cached = [], this.initialized = false, this.storagePrefix = O, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n2) => {
        this.getKey && n2 !== null && !Pe(n2) ? this.map.set(this.getKey(n2), n2) : lh(n2) ? this.map.set(n2.id, n2) : dh(n2) && this.map.set(n2.topic, n2);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (n2, a2) => {
      this.isInitialized(), this.map.has(n2) ? await this.update(n2, a2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: n2, value: a2 }), this.map.set(n2, a2), await this.persist());
    }, this.get = (n2) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: n2 }), this.getData(n2)), this.getAll = (n2) => (this.isInitialized(), n2 ? this.values.filter((a2) => Object.keys(n2).every((c2) => (0, import_lodash.default)(a2[c2], n2[c2]))) : this.values), this.update = async (n2, a2) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: n2, update: a2 });
      const c2 = oi(oi({}, this.getData(n2)), a2);
      this.map.set(n2, c2), await this.persist();
    }, this.delete = async (n2, a2) => {
      this.isInitialized(), this.map.has(n2) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: n2, reason: a2 }), this.map.delete(n2), this.addToRecentlyDeleted(n2), await this.persist());
    }, this.logger = E(t, this.name), this.storagePrefix = i3, this.getKey = r2;
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: i3 } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
        throw this.logger.error(i3), new Error(i3);
      }
      const { message: s } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(s), new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var ci = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = mt, this.version = bt, this.events = new import_events3.default(), this.initialized = false, this.storagePrefix = O, this.ignoredPayloadTypes = [pr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async (s) => {
      this.isInitialized();
      const i3 = Bu(), r2 = await this.core.crypto.setSymKey(i3), n2 = ws(import_time2.FIVE_MINUTES), a2 = { protocol: at }, c2 = { topic: r2, expiry: n2, relay: a2, active: false, methods: s == null ? void 0 : s.methods }, h3 = $u({ protocol: this.core.protocol, version: this.core.version, topic: r2, symKey: i3, relay: a2, expiryTimestamp: n2, methods: s == null ? void 0 : s.methods });
      return this.events.emit(q.create, c2), this.core.expirer.set(r2, n2), await this.pairings.set(r2, c2), await this.core.relayer.subscribe(r2, { transportType: s == null ? void 0 : s.transportType }), { topic: r2, uri: h3 };
    }, this.pair = async (s) => {
      this.isInitialized();
      const i3 = this.core.eventClient.createEvent({ properties: { topic: s == null ? void 0 : s.uri, trace: [z2.pairing_started] } });
      this.isValidPair(s, i3);
      const { topic: r2, symKey: n2, relay: a2, expiryTimestamp: c2, methods: h3 } = Xu(s.uri);
      i3.props.properties.topic = r2, i3.addTrace(z2.pairing_uri_validation_success), i3.addTrace(z2.pairing_uri_not_expired);
      let d2;
      if (this.pairings.keys.includes(r2)) {
        if (d2 = this.pairings.get(r2), i3.addTrace(z2.existing_pairing), d2.active)
          throw i3.setError(M2.active_pairing_already_exists), new Error(`Pairing already exists: ${r2}. Please try again with a new connection URI.`);
        i3.addTrace(z2.pairing_not_expired);
      }
      const g3 = c2 || ws(import_time2.FIVE_MINUTES), m2 = { topic: r2, relay: a2, expiry: g3, active: false, methods: h3 };
      this.core.expirer.set(r2, g3), await this.pairings.set(r2, m2), i3.addTrace(z2.store_new_pairing), s.activatePairing && await this.activate({ topic: r2 }), this.events.emit(q.create, m2), i3.addTrace(z2.emit_inactive_pairing), this.core.crypto.keychain.has(r2) || await this.core.crypto.setSymKey(n2, r2), i3.addTrace(z2.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        i3.setError(M2.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(r2, { relay: a2 });
      } catch (b3) {
        throw i3.setError(M2.subscribe_pairing_topic_failure), b3;
      }
      return i3.addTrace(z2.subscribe_pairing_topic_success), m2;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const i3 = ws(import_time2.THIRTY_DAYS);
      this.core.expirer.set(s, i3), await this.pairings.update(s, { active: true, expiry: i3 });
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: i3 } = s;
      if (this.pairings.keys.includes(i3)) {
        const r2 = await this.sendRequest(i3, "wc_pairingPing", {}), { done: n2, resolve: a2, reject: c2 } = gs();
        this.events.once(Ms("pairing_ping", r2), ({ error: h3 }) => {
          h3 ? c2(h3) : a2();
        }), await n2();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: i3 }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: i3 });
    }, this.updateMetadata = async ({ topic: s, metadata: i3 }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: i3 });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: i3 } = s;
      this.pairings.keys.includes(i3) && (await this.sendRequest(i3, "wc_pairingDelete", er("USER_DISCONNECTED")), await this.deletePairing(i3));
    }, this.formatUriFromPairing = (s) => {
      this.isInitialized();
      const { topic: i3, relay: r2, expiry: n2, methods: a2 } = s, c2 = this.core.crypto.keychain.get(i3);
      return $u({ protocol: this.core.protocol, version: this.core.version, topic: i3, symKey: c2, relay: r2, expiryTimestamp: n2, methods: a2 });
    }, this.sendRequest = async (s, i3, r2) => {
      const n2 = formatJsonRpcRequest(i3, r2), a2 = await this.core.crypto.encode(s, n2), c2 = j2[i3].req;
      return this.core.history.set(s, n2), this.core.relayer.publish(s, a2, c2), n2.id;
    }, this.sendResult = async (s, i3, r2) => {
      const n2 = formatJsonRpcResult(s, r2), a2 = await this.core.crypto.encode(i3, n2), c2 = await this.core.history.get(i3, s), h3 = j2[c2.request.method].res;
      await this.core.relayer.publish(i3, a2, h3), await this.core.history.resolve(n2);
    }, this.sendError = async (s, i3, r2) => {
      const n2 = formatJsonRpcError(s, r2), a2 = await this.core.crypto.encode(i3, n2), c2 = await this.core.history.get(i3, s), h3 = j2[c2.request.method] ? j2[c2.request.method].res : j2.unregistered_method.res;
      await this.core.relayer.publish(i3, a2, h3), await this.core.history.resolve(n2);
    }, this.deletePairing = async (s, i3) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, er("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), i3 ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((i3) => xs(i3.expiry));
      await Promise.all(s.map((i3) => this.deletePairing(i3.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: i3, payload: r2 } = s;
      switch (r2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i3, r2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i3, r2);
        default:
          return this.onUnknownRpcMethodRequest(i3, r2);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: i3, payload: r2 } = s, n2 = (await this.core.history.get(i3, r2.id)).request.method;
      switch (n2) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i3, r2);
        default:
          return this.onUnknownRpcMethodResponse(n2);
      }
    }, this.onPairingPingRequest = async (s, i3) => {
      const { id: r2 } = i3;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(r2, s, true), this.events.emit(q.ping, { id: r2, topic: s });
      } catch (n2) {
        await this.sendError(r2, s, n2), this.logger.error(n2);
      }
    }, this.onPairingPingResponse = (s, i3) => {
      const { id: r2 } = i3;
      setTimeout(() => {
        isJsonRpcResult(i3) ? this.events.emit(Ms("pairing_ping", r2), {}) : isJsonRpcError(i3) && this.events.emit(Ms("pairing_ping", r2), { error: i3.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, i3) => {
      const { id: r2 } = i3;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(q.delete, { id: r2, topic: s });
      } catch (n2) {
        await this.sendError(r2, s, n2), this.logger.error(n2);
      }
    }, this.onUnknownRpcMethodRequest = async (s, i3) => {
      const { id: r2, method: n2 } = i3;
      try {
        if (this.registeredMethods.includes(n2))
          return;
        const a2 = er("WC_METHOD_UNSUPPORTED", n2);
        await this.sendError(r2, s, a2), this.logger.error(a2);
      } catch (a2) {
        await this.sendError(r2, s, a2), this.logger.error(a2);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(er("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s, i3) => {
      var r2;
      if (!Ah(s)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw i3.setError(M2.malformed_pairing_uri), new Error(a2);
      }
      if (!ch(s.uri)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw i3.setError(M2.malformed_pairing_uri), new Error(a2);
      }
      const n2 = Xu(s == null ? void 0 : s.uri);
      if (!((r2 = n2 == null ? void 0 : n2.relay) != null && r2.protocol)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw i3.setError(M2.malformed_pairing_uri), new Error(a2);
      }
      if (!(n2 != null && n2.symKey)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", "pair() uri#symKey");
        throw i3.setError(M2.malformed_pairing_uri), new Error(a2);
      }
      if (n2 != null && n2.expiryTimestamp && (0, import_time2.toMiliseconds)(n2 == null ? void 0 : n2.expiryTimestamp) < Date.now()) {
        i3.setError(M2.pairing_expired);
        const { message: a2 } = xe("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a2);
      }
    }, this.isValidPing = async (s) => {
      if (!Ah(s)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(r2);
      }
      const { topic: i3 } = s;
      await this.isValidPairingTopic(i3);
    }, this.isValidDisconnect = async (s) => {
      if (!Ah(s)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(r2);
      }
      const { topic: i3 } = s;
      await this.isValidPairingTopic(i3);
    }, this.isValidPairingTopic = async (s) => {
      if (!Yt(s, false)) {
        const { message: i3 } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(i3);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: i3 } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(i3);
      }
      if (xs(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: i3 } = xe("EXPIRED", `pairing topic: ${s}`);
        throw new Error(i3);
      }
    }, this.core = e, this.logger = E(t, this.name), this.pairings = new ai(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(w.message, async (e) => {
      const { topic: t, message: s, transportType: i3 } = e;
      if (!this.pairings.keys.includes(t) || i3 === F.link_mode || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const r2 = await this.core.crypto.decode(t, s);
      try {
        isJsonRpcRequest(r2) ? (this.core.history.set(t, r2), this.onRelayEventRequest({ topic: t, payload: r2 })) : isJsonRpcResponse(r2) && (await this.core.history.resolve(r2), await this.onRelayEventResponse({ topic: t, payload: r2 }), this.core.history.delete(t, r2.id));
      } catch (n2) {
        this.logger.error(n2);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(R.expired, async (e) => {
      const { topic: t } = ys(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(q.expire, { topic: t }));
    });
  }
};
var hi = class extends h2 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new import_events3.EventEmitter(), this.name = ft, this.version = _t, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (s, i3, r2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: i3, chainId: r2 }), this.records.has(i3.id))
        return;
      const n2 = { id: i3.id, topic: s, request: { method: i3.method, params: i3.params || null }, chainId: r2, expiry: ws(import_time2.THIRTY_DAYS) };
      this.records.set(n2.id, n2), this.persist(), this.events.emit(P.created, n2);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const i3 = await this.getRecord(s.id);
      typeof i3.response > "u" && (i3.response = isJsonRpcError(s) ? { error: s.error } : { result: s.result }, this.records.set(i3.id, i3), this.persist(), this.events.emit(P.updated, i3));
    }, this.get = async (s, i3) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: i3 }), await this.getRecord(i3)), this.delete = (s, i3) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i3 }), this.values.forEach((r2) => {
        if (r2.topic === s) {
          if (typeof i3 < "u" && r2.id !== i3)
            return;
          this.records.delete(r2.id), this.events.emit(P.deleted, r2);
        }
      }), this.persist();
    }, this.exists = async (s, i3) => (this.isInitialized(), this.records.has(i3) ? (await this.getRecord(i3)).topic === s : false), this.on = (s, i3) => {
      this.events.on(s, i3);
    }, this.once = (s, i3) => {
      this.events.once(s, i3);
    }, this.off = (s, i3) => {
      this.events.off(s, i3);
    }, this.removeListener = (s, i3) => {
      this.events.removeListener(s, i3);
    }, this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const s = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(s);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(P.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(P.created, (e) => {
      const t = P.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(P.updated, (e) => {
      const t = P.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.events.on(P.deleted, (e) => {
      const t = P.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e });
    }), this.core.heartbeat.on(r.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = false;
      this.records.forEach((t) => {
        (0, import_time2.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(P.deleted, t, false), e = true);
      }), e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var li = class extends x {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new import_events3.EventEmitter(), this.name = Et, this.version = vt, this.cached = [], this.initialized = false, this.storagePrefix = O, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (s) => {
      try {
        const i3 = this.formatTarget(s);
        return typeof this.getExpiration(i3) < "u";
      } catch {
        return false;
      }
    }, this.set = (s, i3) => {
      this.isInitialized();
      const r2 = this.formatTarget(s), n2 = { target: r2, expiry: i3 };
      this.expirations.set(r2, n2), this.checkExpiry(r2, n2), this.events.emit(R.created, { target: r2, expiration: n2 });
    }, this.get = (s) => {
      this.isInitialized();
      const i3 = this.formatTarget(s);
      return this.getExpiration(i3);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const i3 = this.formatTarget(s), r2 = this.getExpiration(i3);
        this.expirations.delete(i3), this.events.emit(R.deleted, { target: i3, expiration: r2 });
      }
    }, this.on = (s, i3) => {
      this.events.on(s, i3);
    }, this.once = (s, i3) => {
      this.events.once(s, i3);
    }, this.off = (s, i3) => {
      this.events.off(s, i3);
    }, this.removeListener = (s, i3) => {
      this.events.removeListener(s, i3);
    }, this.logger = E(t, this.name);
  }
  get context() {
    return y(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return As(e);
    if (typeof e == "number")
      return bs(e);
    const { message: t } = xe("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(R.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = xe("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.warn(s), new Error(s);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    (0, import_time2.toMiliseconds)(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(R.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r.pulse, () => this.checkExpirations()), this.events.on(R.created, (e) => {
      const t = R.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(R.expired, (e) => {
      const t = R.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(R.deleted, (e) => {
      const t = R.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = xe("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var y3 = {};
Object.defineProperty(y3, "__esModule", { value: true }), y3.getLocalStorage = y3.getLocalStorageOrThrow = y3.getCrypto = y3.getCryptoOrThrow = y3.getLocation = y3.getLocationOrThrow = y3.getNavigator = y3.getNavigatorOrThrow = ui = y3.getDocument = y3.getDocumentOrThrow = y3.getFromWindowOrThrow = y3.getFromWindow = void 0;
function U2(o2) {
  let e;
  return typeof window < "u" && typeof window[o2] < "u" && (e = window[o2]), e;
}
y3.getFromWindow = U2;
function G(o2) {
  const e = U2(o2);
  if (!e)
    throw new Error(`${o2} is not defined in Window`);
  return e;
}
y3.getFromWindowOrThrow = G;
function yn() {
  return G("document");
}
y3.getDocumentOrThrow = yn;
function Dn() {
  return U2("document");
}
var ui = y3.getDocument = Dn;
function mn2() {
  return G("navigator");
}
y3.getNavigatorOrThrow = mn2;
function bn() {
  return U2("navigator");
}
y3.getNavigator = bn;
function fn2() {
  return G("location");
}
y3.getLocationOrThrow = fn2;
function _n() {
  return U2("location");
}
y3.getLocation = _n;
function En2() {
  return G("crypto");
}
y3.getCryptoOrThrow = En2;
function vn2() {
  return U2("crypto");
}
y3.getCrypto = vn2;
function wn() {
  return G("localStorage");
}
y3.getLocalStorageOrThrow = wn;
function In2() {
  return U2("localStorage");
}
y3.getLocalStorage = In2;
var di2 = class extends y2 {
  constructor(e, t, s) {
    super(e, t, s), this.core = e, this.logger = t, this.store = s, this.name = wt, this.verifyUrlV3 = Tt2, this.storagePrefix = O, this.version = fe2, this.init = async () => {
      var i3;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_time2.toMiliseconds)((i3 = this.publicKey) == null ? void 0 : i3.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }, this.register = async (i3) => {
      if (!gr() || this.isDevEnv)
        return;
      const r2 = window.location.origin, { id: n2, decryptedId: a2 } = i3, c2 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r2}&id=${n2}&decryptedId=${a2}`;
      try {
        const h3 = ui(), d2 = this.startAbortTimer(import_time2.ONE_SECOND * 5), g3 = await new Promise((m2, b3) => {
          const l = () => {
            window.removeEventListener("message", E3), h3.body.removeChild(p3), b3("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", l);
          const p3 = h3.createElement("iframe");
          p3.src = c2, p3.style.display = "none", p3.addEventListener("error", l, { signal: this.abortController.signal });
          const E3 = (D3) => {
            if (D3.data && typeof D3.data == "string")
              try {
                const f3 = JSON.parse(D3.data);
                if (f3.type === "verify_attestation") {
                  if (decodeJWT(f3.attestation).payload.id !== n2)
                    return;
                  clearInterval(d2), h3.body.removeChild(p3), this.abortController.signal.removeEventListener("abort", l), window.removeEventListener("message", E3), m2(f3.attestation === null ? "" : f3.attestation);
                }
              } catch (f3) {
                this.logger.warn(f3);
              }
          };
          h3.body.appendChild(p3), window.addEventListener("message", E3, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", g3), g3;
      } catch (h3) {
        this.logger.warn(h3);
      }
      return "";
    }, this.resolve = async (i3) => {
      if (this.isDevEnv)
        return "";
      const { attestationId: r2, hash: n2, encryptedId: a2 } = i3;
      if (r2 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (r2) {
        if (decodeJWT(r2).payload.id !== a2)
          return;
        const h3 = await this.isValidJwtAttestation(r2);
        if (h3) {
          if (!h3.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h3;
        }
      }
      if (!n2)
        return;
      const c2 = this.getVerifyUrl(i3 == null ? void 0 : i3.verifyUrl);
      return this.fetchAttestation(n2, c2);
    }, this.fetchAttestation = async (i3, r2) => {
      this.logger.debug(`resolving attestation: ${i3} from url: ${r2}`);
      const n2 = this.startAbortTimer(import_time2.ONE_SECOND * 5), a2 = await fetch(`${r2}/attestation/${i3}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(n2), a2.status === 200 ? await a2.json() : void 0;
    }, this.getVerifyUrl = (i3) => {
      let r2 = i3 || Z;
      return Ct.includes(r2) || (this.logger.info(`verify url: ${r2}, not included in trusted list, assigning default: ${Z}`), r2 = Z), r2;
    }, this.fetchPublicKey = async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const i3 = this.startAbortTimer(import_time2.FIVE_SECONDS), r2 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(i3), await r2.json();
      } catch (i3) {
        this.logger.warn(i3);
      }
    }, this.persistPublicKey = async (i3) => {
      this.logger.debug("persisting public key to local storage", i3), await this.store.setItem(this.storeKey, i3), this.publicKey = i3;
    }, this.removePublicKey = async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }, this.isValidJwtAttestation = async (i3) => {
      const r2 = await this.getPublicKey();
      try {
        if (r2)
          return this.validateAttestation(i3, r2);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
      const n2 = await this.fetchAndPersistPublicKey();
      try {
        if (n2)
          return this.validateAttestation(i3, n2);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
    }, this.getPublicKey = async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async () => {
      if (this.fetchPromise)
        return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (r2) => {
        const n2 = await this.fetchPublicKey();
        n2 && (await this.persistPublicKey(n2), r2(n2));
      });
      const i3 = await this.fetchPromise;
      return this.fetchPromise = void 0, i3;
    }, this.validateAttestation = (i3, r2) => {
      const n2 = Lu(i3, r2.publicKey), a2 = { hasExpired: (0, import_time2.toMiliseconds)(n2.exp) < Date.now(), payload: n2 };
      if (a2.hasExpired)
        throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a2.payload.origin, isScam: a2.payload.isScam, isVerified: a2.payload.isVerified };
    }, this.logger = E(t, this.name), this.abortController = new AbortController(), this.isDevEnv = _s(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time2.toMiliseconds)(e));
  }
};
var gi = class extends v {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.context = St, this.registerDeviceToken = async (s) => {
      const { clientId: i3, token: r2, notificationType: n2, enableEncrypted: a2 = false } = s, c2 = `${Pt}/${this.projectId}/clients`;
      await fetch(c2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i3, type: n2, token: r2, always_raw: a2 }) });
    }, this.logger = E(t, this.context);
  }
};
var Tn = Object.defineProperty;
var pi2 = Object.getOwnPropertySymbols;
var Cn2 = Object.prototype.hasOwnProperty;
var Sn2 = Object.prototype.propertyIsEnumerable;
var yi2 = (o2, e, t) => e in o2 ? Tn(o2, e, { enumerable: true, configurable: true, writable: true, value: t }) : o2[e] = t;
var te2 = (o2, e) => {
  for (var t in e || (e = {}))
    Cn2.call(e, t) && yi2(o2, t, e[t]);
  if (pi2)
    for (var t of pi2(e))
      Sn2.call(e, t) && yi2(o2, t, e[t]);
  return o2;
};
var Di2 = class extends C2 {
  constructor(e, t, s = true) {
    super(e, t, s), this.core = e, this.logger = t, this.context = xt, this.storagePrefix = O, this.storageVersion = Rt, this.events = /* @__PURE__ */ new Map(), this.shouldPersist = false, this.init = async () => {
      if (!_s())
        try {
          const i3 = { eventId: Ns(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Pn(this.core.relayer.protocol, this.core.relayer.version, oe2) } } };
          await this.sendEvent([i3]);
        } catch (i3) {
          this.logger.warn(i3);
        }
    }, this.createEvent = (i3) => {
      const { event: r2 = "ERROR", type: n2 = "", properties: { topic: a2, trace: c2 } } = i3, h3 = Ns(), d2 = this.core.projectId || "", g3 = Date.now(), m2 = te2({ eventId: h3, timestamp: g3, props: { event: r2, type: n2, properties: { topic: a2, trace: c2 } }, bundleId: d2, domain: this.getAppDomain() }, this.setMethods(h3));
      return this.telemetryEnabled && (this.events.set(h3, m2), this.shouldPersist = true), m2;
    }, this.getEvent = (i3) => {
      const { eventId: r2, topic: n2 } = i3;
      if (r2)
        return this.events.get(r2);
      const a2 = Array.from(this.events.values()).find((c2) => c2.props.properties.topic === n2);
      if (a2)
        return te2(te2({}, a2), this.setMethods(a2.eventId));
    }, this.deleteEvent = (i3) => {
      const { eventId: r2 } = i3;
      this.events.delete(r2), this.shouldPersist = true;
    }, this.setEventListeners = () => {
      this.core.heartbeat.on(r.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((i3) => {
          (0, import_time2.fromMiliseconds)(Date.now()) - (0, import_time2.fromMiliseconds)(i3.timestamp) > Ot2 && (this.events.delete(i3.eventId), this.shouldPersist = true);
        });
      });
    }, this.setMethods = (i3) => ({ addTrace: (r2) => this.addTrace(i3, r2), setError: (r2) => this.setError(i3, r2) }), this.addTrace = (i3, r2) => {
      const n2 = this.events.get(i3);
      n2 && (n2.props.properties.trace.push(r2), this.events.set(i3, n2), this.shouldPersist = true);
    }, this.setError = (i3, r2) => {
      const n2 = this.events.get(i3);
      n2 && (n2.props.type = r2, n2.timestamp = Date.now(), this.events.set(i3, n2), this.shouldPersist = true);
    }, this.persist = async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }, this.restore = async () => {
      try {
        const i3 = await this.core.storage.getItem(this.storageKey) || [];
        if (!i3.length)
          return;
        i3.forEach((r2) => {
          this.events.set(r2.eventId, te2(te2({}, r2), this.setMethods(r2.eventId)));
        });
      } catch (i3) {
        this.logger.warn(i3);
      }
    }, this.submit = async () => {
      if (!this.telemetryEnabled || this.events.size === 0)
        return;
      const i3 = [];
      for (const [r2, n2] of this.events)
        n2.props.type && i3.push(n2);
      if (i3.length !== 0)
        try {
          if ((await this.sendEvent(i3)).ok)
            for (const r2 of i3)
              this.events.delete(r2.eventId), this.shouldPersist = true;
        } catch (r2) {
          this.logger.warn(r2);
        }
    }, this.sendEvent = async (i3) => {
      const r2 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${At}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${oe2}${r2}`, { method: "POST", body: JSON.stringify(i3) });
    }, this.getAppDomain = () => fs().url, this.logger = E(t, this.context), this.telemetryEnabled = s, s ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var Pn2 = Object.defineProperty;
var mi = Object.getOwnPropertySymbols;
var Rn2 = Object.prototype.hasOwnProperty;
var xn = Object.prototype.propertyIsEnumerable;
var bi2 = (o2, e, t) => e in o2 ? Pn2(o2, e, { enumerable: true, configurable: true, writable: true, value: t }) : o2[e] = t;
var fi = (o2, e) => {
  for (var t in e || (e = {}))
    Rn2.call(e, t) && bi2(o2, t, e[t]);
  if (mi)
    for (var t of mi(e))
      xn.call(e, t) && bi2(o2, t, e[t]);
  return o2;
};
var ce2 = class _ce extends n {
  constructor(e) {
    var t;
    super(e), this.protocol = be2, this.version = fe2, this.name = ne2, this.events = new import_events3.EventEmitter(), this.initialized = false, this.on = (n2, a2) => this.events.on(n2, a2), this.once = (n2, a2) => this.events.once(n2, a2), this.off = (n2, a2) => this.events.off(n2, a2), this.removeListener = (n2, a2) => this.events.removeListener(n2, a2), this.dispatchEnvelope = ({ topic: n2, message: a2, sessionExists: c2 }) => {
      if (!n2 || !a2)
        return;
      const h3 = { topic: n2, message: a2, publishedAt: Date.now(), transportType: F.link_mode };
      this.relayer.onLinkMessageEvent(h3, { sessionExists: c2 });
    }, this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ee, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const s = k({ level: typeof (e == null ? void 0 : e.logger) == "string" && e.logger ? e.logger : Xe2.logger }), { logger: i3, chunkLoggerController: r2 } = A({ opts: s, maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes, loggerOverride: e == null ? void 0 : e.logger });
    this.logChunkController = r2, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var n2, a2;
      (n2 = this.logChunkController) != null && n2.downloadLogsBlobInBrowser && ((a2 = this.logChunkController) == null || a2.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E(i3, this.name), this.heartbeat = new i(), this.crypto = new Wt(this, this.logger, e == null ? void 0 : e.keychain), this.history = new hi(this, this.logger), this.expirer = new li(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h(fi(fi({}, Ze2), e == null ? void 0 : e.storageOptions)), this.relayer = new si({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new ci(this, this.logger), this.verify = new di2(this, this.logger, this.storage), this.echoClient = new gi(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Di2(this, this.logger, e == null ? void 0 : e.telemetryEnabled);
  }
  static async init(e) {
    const t = new _ce(e);
    await t.initialize();
    const s = await t.crypto.getClientId();
    return await t.storage.setItem(gt, s), t;
  }
  get context() {
    return y(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(ve2, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.eventClient.init(), this.linkModeSupportedApps = await this.storage.getItem(ve2) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
var On2 = ce2;

// node_modules/@walletconnect/sign-client/dist/index.es.js
var import_events4 = __toESM(require_events());
var import_time3 = __toESM(require_cjs());
var be3 = "wc";
var Ce3 = 2;
var Le = "client";
var ye2 = `${be3}@${Ce3}:${Le}:`;
var we3 = { name: Le, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" };
var xe2 = "WALLETCONNECT_DEEPLINK_CHOICE";
var st2 = "proposal";
var it2 = "Proposal expired";
var rt2 = "session";
var z3 = import_time3.SEVEN_DAYS;
var nt2 = "engine";
var v2 = { wc_sessionPropose: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time3.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time3.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1119 } } };
var me2 = { min: import_time3.FIVE_MINUTES, max: import_time3.SEVEN_DAYS };
var x2 = { idle: "IDLE", active: "ACTIVE" };
var ot2 = "request";
var at2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
var ct2 = "wc";
var lt2 = "auth";
var pt2 = "authKeys";
var ht2 = "pairingTopics";
var dt2 = "requests";
var oe3 = `${ct2}@${1.5}:${lt2}:`;
var ae3 = `${oe3}:PUB_KEY`;
var ys2 = Object.defineProperty;
var ws2 = Object.defineProperties;
var ms2 = Object.getOwnPropertyDescriptors;
var ut2 = Object.getOwnPropertySymbols;
var _s2 = Object.prototype.hasOwnProperty;
var Es2 = Object.prototype.propertyIsEnumerable;
var gt2 = (q3, o2, e) => o2 in q3 ? ys2(q3, o2, { enumerable: true, configurable: true, writable: true, value: e }) : q3[o2] = e;
var I2 = (q3, o2) => {
  for (var e in o2 || (o2 = {}))
    _s2.call(o2, e) && gt2(q3, e, o2[e]);
  if (ut2)
    for (var e of ut2(o2))
      Es2.call(o2, e) && gt2(q3, e, o2[e]);
  return q3;
};
var D = (q3, o2) => ws2(q3, ms2(o2));
var Rs3 = class extends M {
  constructor(o2) {
    super(o2), this.name = nt2, this.events = new import_events4.default(), this.initialized = false, this.requestQueue = { state: x2.idle, queue: [] }, this.sessionRequestQueue = { state: x2.idle, queue: [] }, this.requestQueueDelay = import_time3.ONE_SECOND, this.expectedPairingMethodMap = /* @__PURE__ */ new Map(), this.recentlyDeletedMap = /* @__PURE__ */ new Map(), this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(v2) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay)));
    }, this.connect = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const t = D(I2({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(t);
      const { pairingTopic: s, requiredNamespaces: i3, optionalNamespaces: r2, sessionProperties: n2, relays: a2 } = t;
      let c2 = s, h3, p3 = false;
      try {
        c2 && (p3 = this.client.core.pairing.pairings.get(c2).active);
      } catch (E3) {
        throw this.client.logger.error(`connect() -> pairing.get(${c2}) failed`), E3;
      }
      if (!c2 || !p3) {
        const { topic: E3, uri: S2 } = await this.client.core.pairing.create();
        c2 = E3, h3 = S2;
      }
      if (!c2) {
        const { message: E3 } = xe("NO_MATCHING_KEY", `connect() pairing topic: ${c2}`);
        throw new Error(E3);
      }
      const d2 = await this.client.core.crypto.generateKeyPair(), l = v2.wc_sessionPropose.req.ttl || import_time3.FIVE_MINUTES, w2 = ws(l), m2 = I2({ requiredNamespaces: i3, optionalNamespaces: r2, relays: a2 ?? [{ protocol: at }], proposer: { publicKey: d2, metadata: this.client.metadata }, expiryTimestamp: w2, pairingTopic: c2 }, n2 && { sessionProperties: n2 }), { reject: y5, resolve: _2, done: R3 } = gs(l, it2);
      this.events.once(Ms("session_connect"), async ({ error: E3, session: S2 }) => {
        if (E3)
          y5(E3);
        else if (S2) {
          S2.self.publicKey = d2;
          const M4 = D(I2({}, S2), { pairingTopic: m2.pairingTopic, requiredNamespaces: m2.requiredNamespaces, optionalNamespaces: m2.optionalNamespaces, transportType: F.relay });
          await this.client.session.set(S2.topic, M4), await this.setExpiry(S2.topic, S2.expiry), c2 && await this.client.core.pairing.updateMetadata({ topic: c2, metadata: S2.peer.metadata }), this.cleanupDuplicatePairings(M4), _2(M4);
        }
      });
      const V2 = await this.sendRequest({ topic: c2, method: "wc_sessionPropose", params: m2, throwOnFailedPublish: true });
      return await this.setProposal(V2, I2({ id: V2 }, m2)), { uri: h3, approval: R3 };
    }, this.pair = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(e);
      } catch (t) {
        throw this.client.logger.error("pair() failed"), t;
      }
    }, this.approve = async (e) => {
      var t, s, i3;
      const r2 = this.client.core.eventClient.createEvent({ properties: { topic: (t = e == null ? void 0 : e.id) == null ? void 0 : t.toString(), trace: [Cs2.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (N2) {
        throw r2.setError(Ss2.no_internet_connection), N2;
      }
      try {
        await this.isValidProposalId(e == null ? void 0 : e.id);
      } catch (N2) {
        throw this.client.logger.error(`approve() -> proposal.get(${e == null ? void 0 : e.id}) failed`), r2.setError(Ss2.proposal_not_found), N2;
      }
      try {
        await this.isValidApprove(e);
      } catch (N2) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r2.setError(Ss2.session_approve_namespace_validation_failure), N2;
      }
      const { id: n2, relayProtocol: a2, namespaces: c2, sessionProperties: h3, sessionConfig: p3 } = e, d2 = this.client.proposal.get(n2);
      this.client.core.eventClient.deleteEvent({ eventId: r2.eventId });
      const { pairingTopic: l, proposer: w2, requiredNamespaces: m2, optionalNamespaces: y5 } = d2;
      let _2 = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({ topic: l });
      _2 || (_2 = (i3 = this.client.core.eventClient) == null ? void 0 : i3.createEvent({ type: Cs2.session_approve_started, properties: { topic: l, trace: [Cs2.session_approve_started, Cs2.session_namespaces_validation_success] } }));
      const R3 = await this.client.core.crypto.generateKeyPair(), V2 = w2.publicKey, E3 = await this.client.core.crypto.generateSharedKey(R3, V2), S2 = I2(I2({ relay: { protocol: a2 ?? "irn" }, namespaces: c2, controller: { publicKey: R3, metadata: this.client.metadata }, expiry: ws(z3) }, h3 && { sessionProperties: h3 }), p3 && { sessionConfig: p3 }), M4 = F.relay;
      _2.addTrace(Cs2.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(E3, { transportType: M4 });
      } catch (N2) {
        throw _2.setError(Ss2.subscribe_session_topic_failure), N2;
      }
      _2.addTrace(Cs2.subscribe_session_topic_success);
      const W = D(I2({}, S2), { topic: E3, requiredNamespaces: m2, optionalNamespaces: y5, pairingTopic: l, acknowledged: false, self: S2.controller, peer: { publicKey: w2.publicKey, metadata: w2.metadata }, controller: R3, transportType: F.relay });
      await this.client.session.set(E3, W), _2.addTrace(Cs2.store_session);
      try {
        _2.addTrace(Cs2.publishing_session_settle), await this.sendRequest({ topic: E3, method: "wc_sessionSettle", params: S2, throwOnFailedPublish: true }).catch((N2) => {
          throw _2 == null ? void 0 : _2.setError(Ss2.session_settle_publish_failure), N2;
        }), _2.addTrace(Cs2.session_settle_publish_success), _2.addTrace(Cs2.publishing_session_approve), await this.sendResult({ id: n2, topic: l, result: { relay: { protocol: a2 ?? "irn" }, responderPublicKey: R3 }, throwOnFailedPublish: true }).catch((N2) => {
          throw _2 == null ? void 0 : _2.setError(Ss2.session_approve_publish_failure), N2;
        }), _2.addTrace(Cs2.session_approve_publish_success);
      } catch (N2) {
        throw this.client.logger.error(N2), this.client.session.delete(E3, er("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(E3), N2;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: _2.eventId }), await this.client.core.pairing.updateMetadata({ topic: l, metadata: w2.metadata }), await this.client.proposal.delete(n2, er("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }), await this.setExpiry(E3, ws(z3)), { topic: E3, acknowledged: () => Promise.resolve(this.client.session.get(E3)) };
    }, this.reject = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(e);
      } catch (r2) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r2;
      }
      const { id: t, reason: s } = e;
      let i3;
      try {
        i3 = this.client.proposal.get(t).pairingTopic;
      } catch (r2) {
        throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r2;
      }
      i3 && (await this.sendError({ id: t, topic: i3, error: s, rpcOpts: v2.wc_sessionPropose.reject }), await this.client.proposal.delete(t, er("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(e);
      } catch (p3) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), p3;
      }
      const { topic: t, namespaces: s } = e, { done: i3, resolve: r2, reject: n2 } = gs(), a2 = payloadId(), c2 = getBigIntRpcId().toString(), h3 = this.client.session.get(t).namespaces;
      return this.events.once(Ms("session_update", a2), ({ error: p3 }) => {
        p3 ? n2(p3) : r2();
      }), await this.client.session.update(t, { namespaces: s }), await this.sendRequest({ topic: t, method: "wc_sessionUpdate", params: { namespaces: s }, throwOnFailedPublish: true, clientRpcId: a2, relayRpcId: c2 }).catch((p3) => {
        this.client.logger.error(p3), this.client.session.update(t, { namespaces: h3 }), n2(p3);
      }), { acknowledged: i3 };
    }, this.extend = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(e);
      } catch (a2) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a2;
      }
      const { topic: t } = e, s = payloadId(), { done: i3, resolve: r2, reject: n2 } = gs();
      return this.events.once(Ms("session_extend", s), ({ error: a2 }) => {
        a2 ? n2(a2) : r2();
      }), await this.setExpiry(t, ws(z3)), this.sendRequest({ topic: t, method: "wc_sessionExtend", params: {}, clientRpcId: s, throwOnFailedPublish: true }).catch((a2) => {
        n2(a2);
      }), { acknowledged: i3 };
    }, this.request = async (e) => {
      this.isInitialized();
      try {
        await this.isValidRequest(e);
      } catch (w2) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), w2;
      }
      const { chainId: t, request: s, topic: i3, expiry: r2 = v2.wc_sessionRequest.req.ttl } = e, n2 = this.client.session.get(i3);
      (n2 == null ? void 0 : n2.transportType) === F.relay && await this.confirmOnlineStateOrThrow();
      const a2 = payloadId(), c2 = getBigIntRpcId().toString(), { done: h3, resolve: p3, reject: d2 } = gs(r2, "Request expired. Please try again.");
      this.events.once(Ms("session_request", a2), ({ error: w2, result: m2 }) => {
        w2 ? d2(w2) : p3(m2);
      });
      const l = this.getAppLinkIfEnabled(n2.peer.metadata, n2.transportType);
      return l ? (await this.sendRequest({ clientRpcId: a2, relayRpcId: c2, topic: i3, method: "wc_sessionRequest", params: { request: D(I2({}, s), { expiryTimestamp: ws(r2) }), chainId: t }, expiry: r2, throwOnFailedPublish: true, appLink: l }).catch((w2) => d2(w2)), this.client.events.emit("session_request_sent", { topic: i3, request: s, chainId: t, id: a2 }), await h3()) : await Promise.all([new Promise(async (w2) => {
        await this.sendRequest({ clientRpcId: a2, relayRpcId: c2, topic: i3, method: "wc_sessionRequest", params: { request: D(I2({}, s), { expiryTimestamp: ws(r2) }), chainId: t }, expiry: r2, throwOnFailedPublish: true }).catch((m2) => d2(m2)), this.client.events.emit("session_request_sent", { topic: i3, request: s, chainId: t, id: a2 }), w2();
      }), new Promise(async (w2) => {
        var m2;
        if (!((m2 = n2.sessionConfig) != null && m2.disableDeepLink)) {
          const y5 = await Ss(this.client.core.storage, xe2);
          await Es({ id: a2, topic: i3, wcDeepLink: y5 });
        }
        w2();
      }), h3()]).then((w2) => w2[2]);
    }, this.respond = async (e) => {
      this.isInitialized(), await this.isValidRespond(e);
      const { topic: t, response: s } = e, { id: i3 } = s, r2 = this.client.session.get(t);
      r2.transportType === F.relay && await this.confirmOnlineStateOrThrow();
      const n2 = this.getAppLinkIfEnabled(r2.peer.metadata, r2.transportType);
      isJsonRpcResult(s) ? await this.sendResult({ id: i3, topic: t, result: s.result, throwOnFailedPublish: true, appLink: n2 }) : isJsonRpcError(s) && await this.sendError({ id: i3, topic: t, error: s.error, appLink: n2 }), this.cleanupAfterResponse(e);
    }, this.ping = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(e);
      } catch (s) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s;
      }
      const { topic: t } = e;
      if (this.client.session.keys.includes(t)) {
        const s = payloadId(), i3 = getBigIntRpcId().toString(), { done: r2, resolve: n2, reject: a2 } = gs();
        this.events.once(Ms("session_ping", s), ({ error: c2 }) => {
          c2 ? a2(c2) : n2();
        }), await Promise.all([this.sendRequest({ topic: t, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s, relayRpcId: i3 }), r2()]);
      } else
        this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({ topic: t });
    }, this.emit = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e);
      const { topic: t, event: s, chainId: i3 } = e, r2 = getBigIntRpcId().toString();
      await this.sendRequest({ topic: t, method: "wc_sessionEvent", params: { event: s, chainId: i3 }, throwOnFailedPublish: true, relayRpcId: r2 });
    }, this.disconnect = async (e) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e);
      const { topic: t } = e;
      if (this.client.session.keys.includes(t))
        await this.sendRequest({ topic: t, method: "wc_sessionDelete", params: er("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: t, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(t))
        await this.client.core.pairing.disconnect({ topic: t });
      else {
        const { message: s } = xe("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
        throw new Error(s);
      }
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((t) => hh(t, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (e, t) => {
      var s;
      this.isInitialized(), this.isValidAuthenticate(e);
      const i3 = t && this.client.core.linkModeSupportedApps.includes(t) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), r2 = i3 ? F.link_mode : F.relay;
      r2 === F.relay && await this.confirmOnlineStateOrThrow();
      const { chains: n2, statement: a2 = "", uri: c2, domain: h3, nonce: p3, type: d2, exp: l, nbf: w2, methods: m2 = [], expiry: y5 } = e, _2 = [...e.resources || []], { topic: R3, uri: V2 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r2 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: R3, uri: V2 } });
      const E3 = await this.client.core.crypto.generateKeyPair(), S2 = Ru(E3);
      if (await Promise.all([this.client.auth.authKeys.set(ae3, { responseTopic: S2, publicKey: E3 }), this.client.auth.pairingTopics.set(S2, { topic: S2, pairingTopic: R3 })]), await this.client.core.relayer.subscribe(S2, { transportType: r2 }), this.client.logger.info(`sending request to new pairing topic: ${R3}`), m2.length > 0) {
        const { namespace: O3 } = An(n2[0]);
        let T3 = xu(O3, "request", m2);
        Vr(_2) && (T3 = Mu(T3, _2.pop())), _2.push(T3);
      }
      const M4 = y5 && y5 > v2.wc_sessionAuthenticate.req.ttl ? y5 : v2.wc_sessionAuthenticate.req.ttl, W = { authPayload: { type: d2 ?? "caip122", chains: n2, statement: a2, aud: c2, domain: h3, version: "1", nonce: p3, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: l, nbf: w2, resources: _2 }, requester: { publicKey: E3, metadata: this.client.metadata }, expiryTimestamp: ws(M4) }, N2 = { eip155: { chains: n2, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m2])], events: ["chainChanged", "accountsChanged"] } }, De = { requiredNamespaces: {}, optionalNamespaces: N2, relays: [{ protocol: "irn" }], pairingTopic: R3, proposer: { publicKey: E3, metadata: this.client.metadata }, expiryTimestamp: ws(v2.wc_sessionPropose.req.ttl) }, { done: wt2, resolve: Ve, reject: Ee2 } = gs(M4, "Request expired"), ce3 = async ({ error: O3, session: T3 }) => {
        if (this.events.off(Ms("session_request", G2), Re3), O3)
          Ee2(O3);
        else if (T3) {
          T3.self.publicKey = E3, await this.client.session.set(T3.topic, T3), await this.setExpiry(T3.topic, T3.expiry), R3 && await this.client.core.pairing.updateMetadata({ topic: R3, metadata: T3.peer.metadata });
          const le3 = this.client.session.get(T3.topic);
          await this.deleteProposal(Z2), Ve({ session: le3 });
        }
      }, Re3 = async (O3) => {
        var T3, le3, Me;
        if (await this.deletePendingAuthRequest(G2, { message: "fulfilled", code: 0 }), O3.error) {
          const te3 = er("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return O3.error.code === te3.code ? void 0 : (this.events.off(Ms("session_connect"), ce3), Ee2(O3.error.message));
        }
        await this.deleteProposal(Z2), this.events.off(Ms("session_connect"), ce3);
        const { cacaos: ke, responder: j4 } = O3.result, Ie2 = [], $e2 = [];
        for (const te3 of ke) {
          await mu({ cacao: te3, projectId: this.client.core.projectId }) || (this.client.logger.error(te3, "Signature verification failed"), Ee2(er("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: fe3 } = te3, ve3 = Vr(fe3.resources), Ke = [gu(fe3.iss)], mt2 = Vi(fe3.iss);
          if (ve3) {
            const qe = Eu(ve3), _t2 = Su(ve3);
            Ie2.push(...qe), Ke.push(..._t2);
          }
          for (const qe of Ke)
            $e2.push(`${qe}:${mt2}`);
        }
        const ee3 = await this.client.core.crypto.generateSharedKey(E3, j4.publicKey);
        let pe2;
        Ie2.length > 0 && (pe2 = { topic: ee3, acknowledged: true, self: { publicKey: E3, metadata: this.client.metadata }, peer: j4, controller: j4.publicKey, expiry: ws(z3), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: R3, namespaces: uh([...new Set(Ie2)], [...new Set($e2)]), transportType: r2 }, await this.client.core.relayer.subscribe(ee3, { transportType: r2 }), await this.client.session.set(ee3, pe2), R3 && await this.client.core.pairing.updateMetadata({ topic: R3, metadata: j4.metadata }), pe2 = this.client.session.get(ee3)), (T3 = this.client.metadata.redirect) != null && T3.linkMode && (le3 = j4.metadata.redirect) != null && le3.linkMode && (Me = j4.metadata.redirect) != null && Me.universal && t && (this.client.core.addLinkModeSupportedApp(j4.metadata.redirect.universal), this.client.session.update(ee3, { transportType: F.link_mode })), Ve({ auths: ke, session: pe2 });
      }, G2 = payloadId(), Z2 = payloadId();
      this.events.once(Ms("session_connect"), ce3), this.events.once(Ms("session_request", G2), Re3);
      let Se;
      try {
        if (i3) {
          const O3 = formatJsonRpcRequest("wc_sessionAuthenticate", W, G2);
          this.client.core.history.set(R3, O3);
          const T3 = await this.client.core.crypto.encode("", O3, { type: Sr, encoding: Iu });
          Se = Zu(t, R3, T3);
        } else
          await Promise.all([this.sendRequest({ topic: R3, method: "wc_sessionAuthenticate", params: W, expiry: e.expiry, throwOnFailedPublish: true, clientRpcId: G2 }), this.sendRequest({ topic: R3, method: "wc_sessionPropose", params: De, expiry: v2.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: Z2 })]);
      } catch (O3) {
        throw this.events.off(Ms("session_connect"), ce3), this.events.off(Ms("session_request", G2), Re3), O3;
      }
      return await this.setProposal(Z2, I2({ id: Z2 }, De)), await this.setAuthRequest(G2, { request: D(I2({}, W), { verifyContext: {} }), pairingTopic: R3, transportType: r2 }), { uri: Se ?? V2, response: wt2 };
    }, this.approveSessionAuthenticate = async (e) => {
      const { id: t, auths: s } = e, i3 = this.client.core.eventClient.createEvent({ properties: { topic: t.toString(), trace: [Ps2.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (y5) {
        throw i3.setError(Rs2.no_internet_connection), y5;
      }
      const r2 = this.getPendingAuthRequest(t);
      if (!r2)
        throw i3.setError(Rs2.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t}`);
      const n2 = r2.transportType || F.relay;
      n2 === F.relay && await this.confirmOnlineStateOrThrow();
      const a2 = r2.requester.publicKey, c2 = await this.client.core.crypto.generateKeyPair(), h3 = Ru(a2), p3 = { type: pr, receiverPublicKey: a2, senderPublicKey: c2 }, d2 = [], l = [];
      for (const y5 of s) {
        if (!await mu({ cacao: y5, projectId: this.client.core.projectId })) {
          i3.setError(Rs2.invalid_cacao);
          const S2 = er("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: t, topic: h3, error: S2, encodeOpts: p3 }), new Error(S2.message);
        }
        i3.addTrace(Ps2.cacaos_verified);
        const { p: _2 } = y5, R3 = Vr(_2.resources), V2 = [gu(_2.iss)], E3 = Vi(_2.iss);
        if (R3) {
          const S2 = Eu(R3), M4 = Su(R3);
          d2.push(...S2), V2.push(...M4);
        }
        for (const S2 of V2)
          l.push(`${S2}:${E3}`);
      }
      const w2 = await this.client.core.crypto.generateSharedKey(c2, a2);
      i3.addTrace(Ps2.create_authenticated_session_topic);
      let m2;
      if ((d2 == null ? void 0 : d2.length) > 0) {
        m2 = { topic: w2, acknowledged: true, self: { publicKey: c2, metadata: this.client.metadata }, peer: { publicKey: a2, metadata: r2.requester.metadata }, controller: a2, expiry: ws(z3), authentication: s, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r2.pairingTopic, namespaces: uh([...new Set(d2)], [...new Set(l)]), transportType: n2 }, i3.addTrace(Ps2.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(w2, { transportType: n2 });
        } catch (y5) {
          throw i3.setError(Rs2.subscribe_authenticated_session_topic_failure), y5;
        }
        i3.addTrace(Ps2.subscribe_authenticated_session_topic_success), await this.client.session.set(w2, m2), i3.addTrace(Ps2.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r2.pairingTopic, metadata: r2.requester.metadata });
      }
      i3.addTrace(Ps2.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: h3, id: t, result: { cacaos: s, responder: { publicKey: c2, metadata: this.client.metadata } }, encodeOpts: p3, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r2.requester.metadata, n2) });
      } catch (y5) {
        throw i3.setError(Rs2.authenticated_session_approve_publish_failure), y5;
      }
      return await this.client.auth.requests.delete(t, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r2.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i3.eventId }), { session: m2 };
    }, this.rejectSessionAuthenticate = async (e) => {
      this.isInitialized();
      const { id: t, reason: s } = e, i3 = this.getPendingAuthRequest(t);
      if (!i3)
        throw new Error(`Could not find pending auth request with id ${t}`);
      i3.transportType === F.relay && await this.confirmOnlineStateOrThrow();
      const r2 = i3.requester.publicKey, n2 = await this.client.core.crypto.generateKeyPair(), a2 = Ru(r2), c2 = { type: pr, receiverPublicKey: r2, senderPublicKey: n2 };
      await this.sendError({ id: t, topic: a2, error: s, encodeOpts: c2, rpcOpts: v2.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i3.requester.metadata, i3.transportType) }), await this.client.auth.requests.delete(t, { message: "rejected", code: 0 }), await this.client.proposal.delete(t, er("USER_DISCONNECTED"));
    }, this.formatAuthMessage = (e) => {
      this.isInitialized();
      const { request: t, iss: s } = e;
      return Wf(t, s);
    }, this.processRelayMessageCache = () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0)
          for (; this.relayMessageCache.length > 0; )
            try {
              const e = this.relayMessageCache.shift();
              e && await this.onRelayMessage(e);
            } catch (e) {
              this.client.logger.error(e);
            }
      }, 50);
    }, this.cleanupDuplicatePairings = async (e) => {
      if (e.pairingTopic)
        try {
          const t = this.client.core.pairing.pairings.get(e.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i3) => {
            var r2, n2;
            return ((r2 = i3.peerMetadata) == null ? void 0 : r2.url) && ((n2 = i3.peerMetadata) == null ? void 0 : n2.url) === e.peer.metadata.url && i3.topic && i3.topic !== t.topic;
          });
          if (s.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i3) => this.client.core.pairing.disconnect({ topic: i3.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (t) {
          this.client.logger.error(t);
        }
    }, this.deleteSession = async (e) => {
      var t;
      const { topic: s, expirerHasDeleted: i3 = false, emitEvent: r2 = true, id: n2 = 0 } = e, { self: a2 } = this.client.session.get(s);
      await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, er("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(a2.publicKey) && await this.client.core.crypto.deleteKeyPair(a2.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), i3 || this.client.core.expirer.del(s), this.client.core.storage.removeItem(xe2).catch((c2) => this.client.logger.warn(c2)), this.getPendingSessionRequests().forEach((c2) => {
        c2.topic === s && this.deletePendingSessionRequest(c2.id, er("USER_DISCONNECTED"));
      }), s === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = x2.idle), r2 && this.client.events.emit("session_delete", { id: n2, topic: s });
    }, this.deleteProposal = async (e, t) => {
      if (t)
        try {
          const s = this.client.proposal.get(e), i3 = this.client.core.eventClient.getEvent({ topic: s.pairingTopic });
          i3 == null ? void 0 : i3.setError(Ss2.proposal_expired);
        } catch {
        }
      await Promise.all([this.client.proposal.delete(e, er("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal");
    }, this.deletePendingSessionRequest = async (e, t, s = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i3) => i3.id !== e), s && (this.sessionRequestQueue.state = x2.idle, this.client.events.emit("session_request_expire", { id: e }));
    }, this.deletePendingAuthRequest = async (e, t, s = false) => {
      await Promise.all([this.client.auth.requests.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.setExpiry = async (e, t) => {
      this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, { expiry: t }));
    }, this.setProposal = async (e, t) => {
      this.client.core.expirer.set(e, ws(v2.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t);
    }, this.setAuthRequest = async (e, t) => {
      const { request: s, pairingTopic: i3, transportType: r2 = F.relay } = t;
      this.client.core.expirer.set(e, s.expiryTimestamp), await this.client.auth.requests.set(e, { authPayload: s.authPayload, requester: s.requester, expiryTimestamp: s.expiryTimestamp, id: e, pairingTopic: i3, verifyContext: s.verifyContext, transportType: r2 });
    }, this.setPendingSessionRequest = async (e) => {
      const { id: t, topic: s, params: i3, verifyContext: r2 } = e, n2 = i3.request.expiryTimestamp || ws(v2.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(t, n2), await this.client.pendingRequest.set(t, { id: t, topic: s, params: i3, verifyContext: r2 });
    }, this.sendRequest = async (e) => {
      const { topic: t, method: s, params: i3, expiry: r2, relayRpcId: n2, clientRpcId: a2, throwOnFailedPublish: c2, appLink: h3 } = e, p3 = formatJsonRpcRequest(s, i3, a2);
      let d2;
      const l = !!h3;
      try {
        const y5 = l ? Iu : tn;
        d2 = await this.client.core.crypto.encode(t, p3, { encoding: y5 });
      } catch (y5) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), y5;
      }
      let w2;
      if (at2.includes(s)) {
        const y5 = Ou(JSON.stringify(p3)), _2 = Ou(d2);
        w2 = await this.client.core.verify.register({ id: _2, decryptedId: y5 });
      }
      const m2 = v2[s].req;
      if (m2.attestation = w2, r2 && (m2.ttl = r2), n2 && (m2.id = n2), this.client.core.history.set(t, p3), l) {
        const y5 = Zu(h3, t, d2);
        await global.Linking.openURL(y5, this.client.name);
      } else {
        const y5 = v2[s].req;
        r2 && (y5.ttl = r2), n2 && (y5.id = n2), c2 ? (y5.internal = D(I2({}, y5.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, d2, y5)) : this.client.core.relayer.publish(t, d2, y5).catch((_2) => this.client.logger.error(_2));
      }
      return p3.id;
    }, this.sendResult = async (e) => {
      const { id: t, topic: s, result: i3, throwOnFailedPublish: r2, encodeOpts: n2, appLink: a2 } = e, c2 = formatJsonRpcResult(t, i3);
      let h3;
      const p3 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const l = p3 ? Iu : tn;
        h3 = await this.client.core.crypto.encode(s, c2, D(I2({}, n2 || {}), { encoding: l }));
      } catch (l) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), l;
      }
      let d2;
      try {
        d2 = await this.client.core.history.get(s, t);
      } catch (l) {
        throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`), l;
      }
      if (p3) {
        const l = Zu(a2, s, h3);
        await global.Linking.openURL(l, this.client.name);
      } else {
        const l = v2[d2.request.method].res;
        r2 ? (l.internal = D(I2({}, l.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s, h3, l)) : this.client.core.relayer.publish(s, h3, l).catch((w2) => this.client.logger.error(w2));
      }
      await this.client.core.history.resolve(c2);
    }, this.sendError = async (e) => {
      const { id: t, topic: s, error: i3, encodeOpts: r2, rpcOpts: n2, appLink: a2 } = e, c2 = formatJsonRpcError(t, i3);
      let h3;
      const p3 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const l = p3 ? Iu : tn;
        h3 = await this.client.core.crypto.encode(s, c2, D(I2({}, r2 || {}), { encoding: l }));
      } catch (l) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), l;
      }
      let d2;
      try {
        d2 = await this.client.core.history.get(s, t);
      } catch (l) {
        throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`), l;
      }
      if (p3) {
        const l = Zu(a2, s, h3);
        await global.Linking.openURL(l, this.client.name);
      } else {
        const l = n2 || v2[d2.request.method].res;
        this.client.core.relayer.publish(s, h3, l);
      }
      await this.client.core.history.resolve(c2);
    }, this.cleanup = async () => {
      const e = [], t = [];
      this.client.session.getAll().forEach((s) => {
        let i3 = false;
        xs(s.expiry) && (i3 = true), this.client.core.crypto.keychain.has(s.topic) || (i3 = true), i3 && e.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        xs(s.expiryTimestamp) && t.push(s.id);
      }), await Promise.all([...e.map((s) => this.deleteSession({ topic: s })), ...t.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (e) => {
      this.requestQueue.queue.push(e), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === x2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = x2.active;
        const e = this.requestQueue.queue.shift();
        if (e)
          try {
            await this.processRequest(e);
          } catch (t) {
            this.client.logger.warn(t);
          }
      }
      this.requestQueue.state = x2.idle;
    }, this.processRequest = async (e) => {
      const { topic: t, payload: s, attestation: i3, transportType: r2, encryptedId: n2 } = e, a2 = s.method;
      if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: a2 }))
        switch (a2) {
          case "wc_sessionPropose":
            return await this.onSessionProposeRequest({ topic: t, payload: s, attestation: i3, encryptedId: n2 });
          case "wc_sessionSettle":
            return await this.onSessionSettleRequest(t, s);
          case "wc_sessionUpdate":
            return await this.onSessionUpdateRequest(t, s);
          case "wc_sessionExtend":
            return await this.onSessionExtendRequest(t, s);
          case "wc_sessionPing":
            return await this.onSessionPingRequest(t, s);
          case "wc_sessionDelete":
            return await this.onSessionDeleteRequest(t, s);
          case "wc_sessionRequest":
            return await this.onSessionRequest({ topic: t, payload: s, attestation: i3, encryptedId: n2, transportType: r2 });
          case "wc_sessionEvent":
            return await this.onSessionEventRequest(t, s);
          case "wc_sessionAuthenticate":
            return await this.onSessionAuthenticateRequest({ topic: t, payload: s, attestation: i3, encryptedId: n2, transportType: r2 });
          default:
            return this.client.logger.info(`Unsupported request method ${a2}`);
        }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: t, payload: s, transportType: i3 } = e, r2 = (await this.client.core.history.get(t, s.id)).request.method;
      switch (r2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(t, s, i3);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(t, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(t, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(t, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(t, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(t, s);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(t, s);
        default:
          return this.client.logger.info(`Unsupported response method ${r2}`);
      }
    }, this.onRelayEventUnknownPayload = (e) => {
      const { topic: t } = e, { message: s } = xe("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.shouldIgnorePairingRequest = (e) => {
      const { topic: t, requestMethod: s } = e, i3 = this.expectedPairingMethodMap.get(t);
      return !i3 || i3.includes(s) ? false : !!(i3.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }, this.onSessionProposeRequest = async (e) => {
      const { topic: t, payload: s, attestation: i3, encryptedId: r2 } = e, { params: n2, id: a2 } = s;
      try {
        const c2 = this.client.core.eventClient.getEvent({ topic: t });
        this.isValidConnect(I2({}, s.params));
        const h3 = n2.expiryTimestamp || ws(v2.wc_sessionPropose.req.ttl), p3 = I2({ id: a2, pairingTopic: t, expiryTimestamp: h3 }, n2);
        await this.setProposal(a2, p3);
        const d2 = await this.getVerifyContext({ attestationId: i3, hash: Ou(JSON.stringify(s)), encryptedId: r2, metadata: p3.proposer.metadata });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), c2 == null ? void 0 : c2.setError(M2.proposal_listener_not_found)), c2 == null ? void 0 : c2.addTrace(z2.emit_session_proposal), this.client.events.emit("session_proposal", { id: a2, params: p3, verifyContext: d2 });
      } catch (c2) {
        await this.sendError({ id: a2, topic: t, error: c2, rpcOpts: v2.wc_sessionPropose.autoReject }), this.client.logger.error(c2);
      }
    }, this.onSessionProposeResponse = async (e, t, s) => {
      const { id: i3 } = t;
      if (isJsonRpcResult(t)) {
        const { result: r2 } = t;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r2 });
        const n2 = this.client.proposal.get(i3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n2 });
        const a2 = n2.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a2 });
        const c2 = r2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: c2 });
        const h3 = await this.client.core.crypto.generateSharedKey(a2, c2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h3 });
        const p3 = await this.client.core.relayer.subscribe(h3, { transportType: s });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p3 }), await this.client.core.pairing.activate({ topic: e });
      } else if (isJsonRpcError(t)) {
        await this.client.proposal.delete(i3, er("USER_DISCONNECTED"));
        const r2 = Ms("session_connect");
        if (this.events.listenerCount(r2) === 0)
          throw new Error(`emitting ${r2} without any listeners, 954`);
        this.events.emit(Ms("session_connect"), { error: t.error });
      }
    }, this.onSessionSettleRequest = async (e, t) => {
      const { id: s, params: i3 } = t;
      try {
        this.isValidSessionSettleRequest(i3);
        const { relay: r2, controller: n2, expiry: a2, namespaces: c2, sessionProperties: h3, sessionConfig: p3 } = t.params, d2 = D(I2(I2({ topic: e, relay: r2, expiry: a2, namespaces: c2, acknowledged: true, pairingTopic: "", requiredNamespaces: {}, optionalNamespaces: {}, controller: n2.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: n2.publicKey, metadata: n2.metadata } }, h3 && { sessionProperties: h3 }), p3 && { sessionConfig: p3 }), { transportType: F.relay }), l = Ms("session_connect");
        if (this.events.listenerCount(l) === 0)
          throw new Error(`emitting ${l} without any listeners 997`);
        this.events.emit(Ms("session_connect"), { session: d2 }), await this.sendResult({ id: t.id, topic: e, result: true, throwOnFailedPublish: true });
      } catch (r2) {
        await this.sendError({ id: s, topic: e, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionSettleResponse = async (e, t) => {
      const { id: s } = t;
      isJsonRpcResult(t) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(Ms("session_approve", s), {})) : isJsonRpcError(t) && (await this.client.session.delete(e, er("USER_DISCONNECTED")), this.events.emit(Ms("session_approve", s), { error: t.error }));
    }, this.onSessionUpdateRequest = async (e, t) => {
      const { params: s, id: i3 } = t;
      try {
        const r2 = `${e}_session_update`, n2 = Rh.get(r2);
        if (n2 && this.isRequestOutOfSync(n2, i3)) {
          this.client.logger.info(`Discarding out of sync request - ${i3}`), this.sendError({ id: i3, topic: e, error: er("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(I2({ topic: e }, s));
        try {
          Rh.set(r2, i3), await this.client.session.update(e, { namespaces: s.namespaces }), await this.sendResult({ id: i3, topic: e, result: true, throwOnFailedPublish: true });
        } catch (a2) {
          throw Rh.delete(r2), a2;
        }
        this.client.events.emit("session_update", { id: i3, topic: e, params: s });
      } catch (r2) {
        await this.sendError({ id: i3, topic: e, error: r2 }), this.client.logger.error(r2);
      }
    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
      const { id: s } = t, i3 = Ms("session_update", s);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(Ms("session_update", s), {}) : isJsonRpcError(t) && this.events.emit(Ms("session_update", s), { error: t.error });
    }, this.onSessionExtendRequest = async (e, t) => {
      const { id: s } = t;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, ws(z3)), await this.sendResult({ id: s, topic: e, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s, topic: e });
      } catch (i3) {
        await this.sendError({ id: s, topic: e, error: i3 }), this.client.logger.error(i3);
      }
    }, this.onSessionExtendResponse = (e, t) => {
      const { id: s } = t, i3 = Ms("session_extend", s);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(Ms("session_extend", s), {}) : isJsonRpcError(t) && this.events.emit(Ms("session_extend", s), { error: t.error });
    }, this.onSessionPingRequest = async (e, t) => {
      const { id: s } = t;
      try {
        this.isValidPing({ topic: e }), await this.sendResult({ id: s, topic: e, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s, topic: e });
      } catch (i3) {
        await this.sendError({ id: s, topic: e, error: i3 }), this.client.logger.error(i3);
      }
    }, this.onSessionPingResponse = (e, t) => {
      const { id: s } = t, i3 = Ms("session_ping", s);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      setTimeout(() => {
        isJsonRpcResult(t) ? this.events.emit(Ms("session_ping", s), {}) : isJsonRpcError(t) && this.events.emit(Ms("session_ping", s), { error: t.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, t) => {
      const { id: s } = t;
      try {
        this.isValidDisconnect({ topic: e, reason: t.params }), Promise.all([new Promise((i3) => {
          this.client.core.relayer.once(w.publish, async () => {
            i3(await this.deleteSession({ topic: e, id: s }));
          });
        }), this.sendResult({ id: s, topic: e, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: e, error: er("USER_DISCONNECTED") })]).catch((i3) => this.client.logger.error(i3));
      } catch (i3) {
        this.client.logger.error(i3);
      }
    }, this.onSessionRequest = async (e) => {
      var t, s, i3;
      const { topic: r2, payload: n2, attestation: a2, encryptedId: c2, transportType: h3 } = e, { id: p3, params: d2 } = n2;
      try {
        await this.isValidRequest(I2({ topic: r2 }, d2));
        const l = this.client.session.get(r2), w2 = await this.getVerifyContext({ attestationId: a2, hash: Ou(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", d2, p3))), encryptedId: c2, metadata: l.peer.metadata, transportType: h3 }), m2 = { id: p3, topic: r2, params: d2, verifyContext: w2 };
        await this.setPendingSessionRequest(m2), h3 === F.link_mode && (t = l.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s = l.peer.metadata.redirect) == null ? void 0 : s.universal), (i3 = this.client.signConfig) != null && i3.disableRequestQueue ? this.emitSessionRequest(m2) : (this.addSessionRequestToSessionRequestQueue(m2), this.processSessionRequestQueue());
      } catch (l) {
        await this.sendError({ id: p3, topic: r2, error: l }), this.client.logger.error(l);
      }
    }, this.onSessionRequestResponse = (e, t) => {
      const { id: s } = t, i3 = Ms("session_request", s);
      if (this.events.listenerCount(i3) === 0)
        throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(Ms("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit(Ms("session_request", s), { error: t.error });
    }, this.onSessionEventRequest = async (e, t) => {
      const { id: s, params: i3 } = t;
      try {
        const r2 = `${e}_session_event_${i3.event.name}`, n2 = Rh.get(r2);
        if (n2 && this.isRequestOutOfSync(n2, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(I2({ topic: e }, i3)), this.client.events.emit("session_event", { id: s, topic: e, params: i3 }), Rh.set(r2, s);
      } catch (r2) {
        await this.sendError({ id: s, topic: e, error: r2 }), this.client.logger.error(r2);
      }
    }, this.onSessionAuthenticateResponse = (e, t) => {
      const { id: s } = t;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e, payload: t }), isJsonRpcResult(t) ? this.events.emit(Ms("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit(Ms("session_request", s), { error: t.error });
    }, this.onSessionAuthenticateRequest = async (e) => {
      var t;
      const { topic: s, payload: i3, attestation: r2, encryptedId: n2, transportType: a2 } = e;
      try {
        const { requester: c2, authPayload: h3, expiryTimestamp: p3 } = i3.params, d2 = await this.getVerifyContext({ attestationId: r2, hash: Ou(JSON.stringify(i3)), encryptedId: n2, metadata: c2.metadata, transportType: a2 }), l = { requester: c2, pairingTopic: s, id: i3.id, authPayload: h3, verifyContext: d2, expiryTimestamp: p3 };
        await this.setAuthRequest(i3.id, { request: l, pairingTopic: s, transportType: a2 }), a2 === F.link_mode && (t = c2.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(c2.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s, params: i3.params, id: i3.id, verifyContext: d2 });
      } catch (c2) {
        this.client.logger.error(c2);
        const h3 = i3.params.requester.publicKey, p3 = await this.client.core.crypto.generateKeyPair(), d2 = this.getAppLinkIfEnabled(i3.params.requester.metadata, a2), l = { type: pr, receiverPublicKey: h3, senderPublicKey: p3 };
        await this.sendError({ id: i3.id, topic: s, error: c2, encodeOpts: l, rpcOpts: v2.wc_sessionAuthenticate.autoReject, appLink: d2 });
      }
    }, this.addSessionRequestToSessionRequestQueue = (e) => {
      this.sessionRequestQueue.queue.push(e);
    }, this.cleanupAfterResponse = (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = x2.idle, this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: e, error: t }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((i3) => i3.topic === e && i3.request.method === "wc_sessionRequest").forEach((i3) => {
        const r2 = i3.request.id, n2 = Ms("session_request", r2);
        if (this.events.listenerCount(n2) === 0)
          throw new Error(`emitting ${n2} without any listeners`);
        this.events.emit(Ms("session_request", i3.request.id), { error: t });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === x2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.sessionRequestQueue.queue[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = x2.active, this.emitSessionRequest(e);
      } catch (t) {
        this.client.logger.error(t);
      }
    }, this.emitSessionRequest = (e) => {
      this.client.events.emit("session_request", e);
    }, this.onPairingCreated = (e) => {
      if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active)
        return;
      const t = this.client.proposal.getAll().find((s) => s.pairingTopic === e.topic);
      t && this.onSessionProposeRequest({ topic: e.topic, payload: formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: t.requiredNamespaces, optionalNamespaces: t.optionalNamespaces, relays: t.relays, proposer: t.proposer, sessionProperties: t.sessionProperties }, t.id) });
    }, this.isValidConnect = async (e) => {
      if (!Ah(e)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(a2);
      }
      const { pairingTopic: t, requiredNamespaces: s, optionalNamespaces: i3, sessionProperties: r2, relays: n2 } = e;
      if (Pe(t) || await this.isValidPairingTopic(t), !gh(n2, true)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `connect() relays: ${n2}`);
        throw new Error(a2);
      }
      !Pe(s) && Xr(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Pe(i3) && Xr(i3) !== 0 && this.validateNamespaces(i3, "optionalNamespaces"), Pe(r2) || this.validateSessionProps(r2, "sessionProperties");
    }, this.validateNamespaces = (e, t) => {
      const s = vh(e, "connect()", t);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (e) => {
      if (!Ah(e))
        throw new Error(xe("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: t, namespaces: s, relayProtocol: i3, sessionProperties: r2 } = e;
      this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
      const n2 = this.client.proposal.get(t), a2 = Oo(s, "approve()");
      if (a2)
        throw new Error(a2.message);
      const c2 = To(n2.requiredNamespaces, s, "approve()");
      if (c2)
        throw new Error(c2.message);
      if (!Yt(i3, true)) {
        const { message: h3 } = xe("MISSING_OR_INVALID", `approve() relayProtocol: ${i3}`);
        throw new Error(h3);
      }
      Pe(r2) || this.validateSessionProps(r2, "sessionProperties");
    }, this.isValidReject = async (e) => {
      if (!Ah(e)) {
        const { message: i3 } = xe("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i3);
      }
      const { id: t, reason: s } = e;
      if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !bh(s)) {
        const { message: i3 } = xe("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i3);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!Ah(e)) {
        const { message: c2 } = xe("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(c2);
      }
      const { relay: t, controller: s, namespaces: i3, expiry: r2 } = e;
      if (!Po(t)) {
        const { message: c2 } = xe("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c2);
      }
      const n2 = ph(s, "onSessionSettleRequest()");
      if (n2)
        throw new Error(n2.message);
      const a2 = Oo(i3, "onSessionSettleRequest()");
      if (a2)
        throw new Error(a2.message);
      if (xs(r2)) {
        const { message: c2 } = xe("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c2);
      }
    }, this.isValidUpdate = async (e) => {
      if (!Ah(e)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: t, namespaces: s } = e;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const i3 = this.client.session.get(t), r2 = Oo(s, "update()");
      if (r2)
        throw new Error(r2.message);
      const n2 = To(i3.requiredNamespaces, s, "update()");
      if (n2)
        throw new Error(n2.message);
    }, this.isValidExtend = async (e) => {
      if (!Ah(e)) {
        const { message: s } = xe("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(s);
      }
      const { topic: t } = e;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
    }, this.isValidRequest = async (e) => {
      if (!Ah(e)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: t, request: s, chainId: i3, expiry: r2 } = e;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const { namespaces: n2 } = this.client.session.get(t);
      if (!Mh(n2, i3)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() chainId: ${i3}`);
        throw new Error(a2);
      }
      if (!yh(s)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(a2);
      }
      if (!Eh(n2, i3, s.method)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(a2);
      }
      if (r2 && !_h(r2, me2)) {
        const { message: a2 } = xe("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${me2.min} and ${me2.max}`);
        throw new Error(a2);
      }
    }, this.isValidRespond = async (e) => {
      var t;
      if (!Ah(e)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(r2);
      }
      const { topic: s, response: i3 } = e;
      try {
        await this.isValidSessionTopic(s);
      } catch (r2) {
        throw (t = e == null ? void 0 : e.response) != null && t.id && this.cleanupAfterResponse(e), r2;
      }
      if (!wh(i3)) {
        const { message: r2 } = xe("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i3)}`);
        throw new Error(r2);
      }
    }, this.isValidPing = async (e) => {
      if (!Ah(e)) {
        const { message: s } = xe("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(s);
      }
      const { topic: t } = e;
      await this.isValidSessionOrPairingTopic(t);
    }, this.isValidEmit = async (e) => {
      if (!Ah(e)) {
        const { message: n2 } = xe("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(n2);
      }
      const { topic: t, event: s, chainId: i3 } = e;
      await this.isValidSessionTopic(t);
      const { namespaces: r2 } = this.client.session.get(t);
      if (!Mh(r2, i3)) {
        const { message: n2 } = xe("MISSING_OR_INVALID", `emit() chainId: ${i3}`);
        throw new Error(n2);
      }
      if (!xh(s)) {
        const { message: n2 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(n2);
      }
      if (!Sh(r2, i3, s.name)) {
        const { message: n2 } = xe("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(n2);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!Ah(e)) {
        const { message: s } = xe("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(s);
      }
      const { topic: t } = e;
      await this.isValidSessionOrPairingTopic(t);
    }, this.isValidAuthenticate = (e) => {
      const { chains: t, uri: s, domain: i3, nonce: r2 } = e;
      if (!Array.isArray(t) || t.length === 0)
        throw new Error("chains is required and must be a non-empty array");
      if (!Yt(s, false))
        throw new Error("uri is required parameter");
      if (!Yt(i3, false))
        throw new Error("domain is required parameter");
      if (!Yt(r2, false))
        throw new Error("nonce is required parameter");
      if ([...new Set(t.map((a2) => An(a2).namespace))].length > 1)
        throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: n2 } = An(t[0]);
      if (n2 !== "eip155")
        throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }, this.getVerifyContext = async (e) => {
      const { attestationId: t, hash: s, encryptedId: i3, metadata: r2, transportType: n2 } = e, a2 = { verified: { verifyUrl: r2.verifyUrl || Z, validation: "UNKNOWN", origin: r2.url || "" } };
      try {
        if (n2 === F.link_mode) {
          const h3 = this.getAppLinkIfEnabled(r2, n2);
          return a2.verified.validation = h3 && new URL(h3).origin === new URL(r2.url).origin ? "VALID" : "INVALID", a2;
        }
        const c2 = await this.client.core.verify.resolve({ attestationId: t, hash: s, encryptedId: i3, verifyUrl: r2.verifyUrl });
        c2 && (a2.verified.origin = c2.origin, a2.verified.isScam = c2.isScam, a2.verified.validation = c2.origin === new URL(r2.url).origin ? "VALID" : "INVALID");
      } catch (c2) {
        this.client.logger.warn(c2);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a2)}`), a2;
    }, this.validateSessionProps = (e, t) => {
      Object.values(e).forEach((s) => {
        if (!Yt(s, false)) {
          const { message: i3 } = xe("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(i3);
        }
      });
    }, this.getPendingAuthRequest = (e) => {
      const t = this.client.auth.requests.get(e);
      return typeof t == "object" ? t : void 0;
    }, this.addToRecentlyDeleted = (e, t) => {
      if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s = 0;
        const i3 = this.recentlyDeletedLimit / 2;
        for (const r2 of this.recentlyDeletedMap.keys()) {
          if (s++ >= i3)
            break;
          this.recentlyDeletedMap.delete(r2);
        }
      }
    }, this.checkRecentlyDeleted = (e) => {
      const t = this.recentlyDeletedMap.get(e);
      if (t) {
        const { message: s } = xe("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
        throw new Error(s);
      }
    }, this.isLinkModeEnabled = (e, t) => {
      var s, i3, r2, n2, a2, c2, h3, p3, d2;
      return !e || t !== F.link_mode ? false : ((i3 = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : i3.linkMode) === true && ((n2 = (r2 = this.client.metadata) == null ? void 0 : r2.redirect) == null ? void 0 : n2.universal) !== void 0 && ((c2 = (a2 = this.client.metadata) == null ? void 0 : a2.redirect) == null ? void 0 : c2.universal) !== "" && ((h3 = e == null ? void 0 : e.redirect) == null ? void 0 : h3.universal) !== void 0 && ((p3 = e == null ? void 0 : e.redirect) == null ? void 0 : p3.universal) !== "" && ((d2 = e == null ? void 0 : e.redirect) == null ? void 0 : d2.linkMode) === true && this.client.core.linkModeSupportedApps.includes(e.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }, this.getAppLinkIfEnabled = (e, t) => {
      var s;
      return this.isLinkModeEnabled(e, t) ? (s = e == null ? void 0 : e.redirect) == null ? void 0 : s.universal : void 0;
    }, this.handleLinkModeMessage = ({ url: e }) => {
      if (!e || !e.includes("wc_ev") || !e.includes("topic"))
        return;
      const t = Is(e, "topic") || "", s = decodeURIComponent(Is(e, "wc_ev") || ""), i3 = this.client.session.keys.includes(t);
      i3 && this.client.session.update(t, { transportType: F.link_mode }), this.client.core.dispatchEnvelope({ topic: t, message: s, sessionExists: i3 });
    }, this.registerLinkModeListeners = async () => {
      var e;
      if (_s() || rr() && (e = this.client.metadata.redirect) != null && e.linkMode) {
        const t = global == null ? void 0 : global.Linking;
        if (typeof t < "u") {
          t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s = await t.getInitialURL();
          s && setTimeout(() => {
            this.handleLinkModeMessage({ url: s });
          }, 50);
        }
      }
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: o2 } = xe("NOT_INITIALIZED", this.name);
      throw new Error(o2);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(w.message, (o2) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(o2) : this.onRelayMessage(o2);
    });
  }
  async onRelayMessage(o2) {
    const { topic: e, message: t, attestation: s, transportType: i3 } = o2, { publicKey: r2 } = this.client.auth.authKeys.keys.includes(ae3) ? this.client.auth.authKeys.get(ae3) : { responseTopic: void 0, publicKey: void 0 }, n2 = await this.client.core.crypto.decode(e, t, { receiverPublicKey: r2, encoding: i3 === F.link_mode ? Iu : tn });
    try {
      isJsonRpcRequest(n2) ? (this.client.core.history.set(e, n2), this.onRelayEventRequest({ topic: e, payload: n2, attestation: s, transportType: i3, encryptedId: Ou(t) })) : isJsonRpcResponse(n2) ? (await this.client.core.history.resolve(n2), await this.onRelayEventResponse({ topic: e, payload: n2, transportType: i3 }), this.client.core.history.delete(e, n2.id)) : this.onRelayEventUnknownPayload({ topic: e, payload: n2, transportType: i3 });
    } catch (a2) {
      this.client.logger.error(a2);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(R.expired, async (o2) => {
      const { topic: e, id: t } = ys(o2.target);
      if (t && this.client.pendingRequest.keys.includes(t))
        return await this.deletePendingSessionRequest(t, xe("EXPIRED"), true);
      if (t && this.client.auth.requests.keys.includes(t))
        return await this.deletePendingAuthRequest(t, xe("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession({ topic: e, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e })) : t && (await this.deleteProposal(t, true), this.client.events.emit("proposal_expire", { id: t }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(q.create, (o2) => this.onPairingCreated(o2)), this.client.core.pairing.events.on(q.delete, (o2) => {
      this.addToRecentlyDeleted(o2.topic, "pairing");
    });
  }
  isValidPairingTopic(o2) {
    if (!Yt(o2, false)) {
      const { message: e } = xe("MISSING_OR_INVALID", `pairing topic should be a string: ${o2}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(o2)) {
      const { message: e } = xe("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o2}`);
      throw new Error(e);
    }
    if (xs(this.client.core.pairing.pairings.get(o2).expiry)) {
      const { message: e } = xe("EXPIRED", `pairing topic: ${o2}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(o2) {
    if (!Yt(o2, false)) {
      const { message: e } = xe("MISSING_OR_INVALID", `session topic should be a string: ${o2}`);
      throw new Error(e);
    }
    if (this.checkRecentlyDeleted(o2), !this.client.session.keys.includes(o2)) {
      const { message: e } = xe("NO_MATCHING_KEY", `session topic doesn't exist: ${o2}`);
      throw new Error(e);
    }
    if (xs(this.client.session.get(o2).expiry)) {
      await this.deleteSession({ topic: o2 });
      const { message: e } = xe("EXPIRED", `session topic: ${o2}`);
      throw new Error(e);
    }
    if (!this.client.core.crypto.keychain.has(o2)) {
      const { message: e } = xe("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o2}`);
      throw await this.deleteSession({ topic: o2 }), new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(o2) {
    if (this.checkRecentlyDeleted(o2), this.client.session.keys.includes(o2))
      await this.isValidSessionTopic(o2);
    else if (this.client.core.pairing.pairings.keys.includes(o2))
      this.isValidPairingTopic(o2);
    else if (Yt(o2, false)) {
      const { message: e } = xe("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o2}`);
      throw new Error(e);
    } else {
      const { message: e } = xe("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o2}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(o2) {
    if (!mh(o2)) {
      const { message: e } = xe("MISSING_OR_INVALID", `proposal id should be a number: ${o2}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(o2)) {
      const { message: e } = xe("NO_MATCHING_KEY", `proposal id doesn't exist: ${o2}`);
      throw new Error(e);
    }
    if (xs(this.client.proposal.get(o2).expiryTimestamp)) {
      await this.deleteProposal(o2);
      const { message: e } = xe("EXPIRED", `proposal id: ${o2}`);
      throw new Error(e);
    }
  }
};
var Ss3 = class extends ai {
  constructor(o2, e) {
    super(o2, e, st2, ye2), this.core = o2, this.logger = e;
  }
};
var yt2 = class extends ai {
  constructor(o2, e) {
    super(o2, e, rt2, ye2), this.core = o2, this.logger = e;
  }
};
var Is3 = class extends ai {
  constructor(o2, e) {
    super(o2, e, ot2, ye2, (t) => t.id), this.core = o2, this.logger = e;
  }
};
var fs2 = class extends ai {
  constructor(o2, e) {
    super(o2, e, pt2, oe3, () => ae3), this.core = o2, this.logger = e;
  }
};
var vs = class extends ai {
  constructor(o2, e) {
    super(o2, e, ht2, oe3), this.core = o2, this.logger = e;
  }
};
var qs3 = class extends ai {
  constructor(o2, e) {
    super(o2, e, dt2, oe3, (t) => t.id), this.core = o2, this.logger = e;
  }
};
var Ts2 = class {
  constructor(o2, e) {
    this.core = o2, this.logger = e, this.authKeys = new fs2(this.core, this.logger), this.pairingTopics = new vs(this.core, this.logger), this.requests = new qs3(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var _e3 = class __e extends S {
  constructor(o2) {
    super(o2), this.protocol = be3, this.version = Ce3, this.name = we3.name, this.events = new import_events4.EventEmitter(), this.on = (t, s) => this.events.on(t, s), this.once = (t, s) => this.events.once(t, s), this.off = (t, s) => this.events.off(t, s), this.removeListener = (t, s) => this.events.removeListener(t, s), this.removeAllListeners = (t) => this.events.removeAllListeners(t), this.connect = async (t) => {
      try {
        return await this.engine.connect(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.pair = async (t) => {
      try {
        return await this.engine.pair(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approve = async (t) => {
      try {
        return await this.engine.approve(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.reject = async (t) => {
      try {
        return await this.engine.reject(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.update = async (t) => {
      try {
        return await this.engine.update(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.extend = async (t) => {
      try {
        return await this.engine.extend(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.request = async (t) => {
      try {
        return await this.engine.request(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.respond = async (t) => {
      try {
        return await this.engine.respond(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.ping = async (t) => {
      try {
        return await this.engine.ping(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.emit = async (t) => {
      try {
        return await this.engine.emit(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.disconnect = async (t) => {
      try {
        return await this.engine.disconnect(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.find = (t) => {
      try {
        return this.engine.find(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.authenticate = async (t, s) => {
      try {
        return await this.engine.authenticate(t, s);
      } catch (i3) {
        throw this.logger.error(i3.message), i3;
      }
    }, this.formatAuthMessage = (t) => {
      try {
        return this.engine.formatAuthMessage(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approveSessionAuthenticate = async (t) => {
      try {
        return await this.engine.approveSessionAuthenticate(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.rejectSessionAuthenticate = async (t) => {
      try {
        return await this.engine.rejectSessionAuthenticate(t);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (o2 == null ? void 0 : o2.name) || we3.name, this.metadata = (o2 == null ? void 0 : o2.metadata) || fs(), this.signConfig = o2 == null ? void 0 : o2.signConfig;
    const e = typeof (o2 == null ? void 0 : o2.logger) < "u" && typeof (o2 == null ? void 0 : o2.logger) != "string" ? o2.logger : (0, import_pino.default)(k({ level: (o2 == null ? void 0 : o2.logger) || we3.logger }));
    this.core = (o2 == null ? void 0 : o2.core) || new On2(o2), this.logger = E(e, this.name), this.session = new yt2(this.core, this.logger), this.proposal = new Ss3(this.core, this.logger), this.pendingRequest = new Is3(this.core, this.logger), this.engine = new Rs3(this), this.auth = new Ts2(this.core, this.logger);
  }
  static async init(o2) {
    const e = new __e(o2);
    return await e.initialize(), e;
  }
  get context() {
    return y(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), this.engine.processRelayMessageCache();
    } catch (o2) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o2.message), o2;
    }
  }
};

// node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events5 = __toESM(require_events());
var ya2 = "error";
var Yg = "wss://relay.walletconnect.org";
var Zg = "wc";
var Xg = "universal_provider";
var Sa2 = `${Zg}@2:${Xg}:`;
var Oa2 = "https://rpc.walletconnect.org/v1/";
var ze = "generic";
var Qg = `${Oa2}bundler`;
var Tt3 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var _n2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var qi2 = { exports: {} };
(function(P3, s) {
  (function() {
    var i3, p3 = "4.17.21", w2 = 200, I3 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", y5 = "Expected a function", J = "Invalid `variable` option passed into `_.template`", Ht3 = "__lodash_hash_undefined__", Ke = 500, Ie2 = "__lodash_placeholder__", Dt3 = 1, Bt2 = 2, xe3 = 4, Ee2 = 1, mn3 = 2, vt2 = 1, he3 = 2, Gi2 = 4, Nt2 = 8, ye3 = 16, $t3 = 32, Se = 64, Gt3 = 128, Je = 256, gr3 = 512, Ma2 = 30, Ba2 = "...", Ga2 = 800, za2 = 16, zi2 = 1, Ka2 = 2, Ja2 = 3, le3 = 1 / 0, ee3 = 9007199254740991, Ya2 = 17976931348623157e292, wn2 = 0 / 0, Ut3 = 4294967295, Za2 = Ut3 - 1, Xa2 = Ut3 >>> 1, Qa2 = [["ary", Gt3], ["bind", vt2], ["bindKey", he3], ["curry", Nt2], ["curryRight", ye3], ["flip", gr3], ["partial", $t3], ["partialRight", Se], ["rearg", Je]], Oe2 = "[object Arguments]", Pn3 = "[object Array]", Va2 = "[object AsyncFunction]", Ye = "[object Boolean]", Ze4 = "[object Date]", ka2 = "[object DOMException]", Cn3 = "[object Error]", An2 = "[object Function]", Ki2 = "[object GeneratorFunction]", Et2 = "[object Map]", Xe3 = "[object Number]", ja2 = "[object Null]", zt3 = "[object Object]", Ji2 = "[object Promise]", to2 = "[object Proxy]", Qe2 = "[object RegExp]", yt3 = "[object Set]", Ve = "[object String]", In3 = "[object Symbol]", eo2 = "[object Undefined]", ke = "[object WeakMap]", no2 = "[object WeakSet]", je = "[object ArrayBuffer]", Re3 = "[object DataView]", vr3 = "[object Float32Array]", _r3 = "[object Float64Array]", mr3 = "[object Int8Array]", wr3 = "[object Int16Array]", Pr2 = "[object Int32Array]", Cr3 = "[object Uint8Array]", Ar3 = "[object Uint8ClampedArray]", Ir3 = "[object Uint16Array]", xr3 = "[object Uint32Array]", ro2 = /\b__p \+= '';/g, io = /\b(__p \+=) '' \+/g, so2 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yi2 = /&(?:amp|lt|gt|quot|#39);/g, Zi2 = /[&<>"']/g, uo2 = RegExp(Yi2.source), ao2 = RegExp(Zi2.source), oo2 = /<%-([\s\S]+?)%>/g, co2 = /<%([\s\S]+?)%>/g, Xi2 = /<%=([\s\S]+?)%>/g, fo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ho2 = /^\w*$/, lo2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Er3 = /[\\^$.*+?()[\]{}|]/g, po2 = RegExp(Er3.source), yr3 = /^\s+/, go2 = /\s/, vo2 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _o2 = /\{\n\/\* \[wrapped with (.+)\] \*/, mo = /,? & /, wo2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Po2 = /[()=,{}\[\]\/\s]/, Co2 = /\\(\\)?/g, Ao = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Qi2 = /\w*$/, Io2 = /^[-+]0x[0-9a-f]+$/i, xo2 = /^0b[01]+$/i, Eo2 = /^\[object .+?Constructor\]$/, yo2 = /^0o[0-7]+$/i, So2 = /^(?:0|[1-9]\d*)$/, Oo2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xn2 = /($^)/, Ro2 = /['\n\r\u2028\u2029\\]/g, En3 = "\\ud800-\\udfff", bo2 = "\\u0300-\\u036f", To2 = "\\ufe20-\\ufe2f", Lo2 = "\\u20d0-\\u20ff", Vi2 = bo2 + To2 + Lo2, ki3 = "\\u2700-\\u27bf", ji2 = "a-z\\xdf-\\xf6\\xf8-\\xff", Ho = "\\xac\\xb1\\xd7\\xf7", Do2 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", No2 = "\\u2000-\\u206f", $o = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ts3 = "A-Z\\xc0-\\xd6\\xd8-\\xde", es3 = "\\ufe0e\\ufe0f", ns2 = Ho + Do2 + No2 + $o, Sr3 = "['’]", Uo2 = "[" + En3 + "]", rs = "[" + ns2 + "]", yn2 = "[" + Vi2 + "]", is2 = "\\d+", qo2 = "[" + ki3 + "]", ss3 = "[" + ji2 + "]", us = "[^" + En3 + ns2 + is2 + ki3 + ji2 + ts3 + "]", Or3 = "\\ud83c[\\udffb-\\udfff]", Fo2 = "(?:" + yn2 + "|" + Or3 + ")", as = "[^" + En3 + "]", Rr3 = "(?:\\ud83c[\\udde6-\\uddff]){2}", br3 = "[\\ud800-\\udbff][\\udc00-\\udfff]", be4 = "[" + ts3 + "]", os = "\\u200d", cs2 = "(?:" + ss3 + "|" + us + ")", Wo2 = "(?:" + be4 + "|" + us + ")", fs3 = "(?:" + Sr3 + "(?:d|ll|m|re|s|t|ve))?", hs = "(?:" + Sr3 + "(?:D|LL|M|RE|S|T|VE))?", ls2 = Fo2 + "?", ps = "[" + es3 + "]?", Mo2 = "(?:" + os + "(?:" + [as, Rr3, br3].join("|") + ")" + ps + ls2 + ")*", Bo2 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Go = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ds = ps + ls2 + Mo2, zo2 = "(?:" + [qo2, Rr3, br3].join("|") + ")" + ds, Ko2 = "(?:" + [as + yn2 + "?", yn2, Rr3, br3, Uo2].join("|") + ")", Jo = RegExp(Sr3, "g"), Yo = RegExp(yn2, "g"), Tr3 = RegExp(Or3 + "(?=" + Or3 + ")|" + Ko2 + ds, "g"), Zo2 = RegExp([be4 + "?" + ss3 + "+" + fs3 + "(?=" + [rs, be4, "$"].join("|") + ")", Wo2 + "+" + hs + "(?=" + [rs, be4 + cs2, "$"].join("|") + ")", be4 + "?" + cs2 + "+" + fs3, be4 + "+" + hs, Go, Bo2, is2, zo2].join("|"), "g"), Xo = RegExp("[" + os + En3 + Vi2 + es3 + "]"), Qo2 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Vo = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], ko2 = -1, G2 = {};
    G2[vr3] = G2[_r3] = G2[mr3] = G2[wr3] = G2[Pr2] = G2[Cr3] = G2[Ar3] = G2[Ir3] = G2[xr3] = true, G2[Oe2] = G2[Pn3] = G2[je] = G2[Ye] = G2[Re3] = G2[Ze4] = G2[Cn3] = G2[An2] = G2[Et2] = G2[Xe3] = G2[zt3] = G2[Qe2] = G2[yt3] = G2[Ve] = G2[ke] = false;
    var B2 = {};
    B2[Oe2] = B2[Pn3] = B2[je] = B2[Re3] = B2[Ye] = B2[Ze4] = B2[vr3] = B2[_r3] = B2[mr3] = B2[wr3] = B2[Pr2] = B2[Et2] = B2[Xe3] = B2[zt3] = B2[Qe2] = B2[yt3] = B2[Ve] = B2[In3] = B2[Cr3] = B2[Ar3] = B2[Ir3] = B2[xr3] = true, B2[Cn3] = B2[An2] = B2[ke] = false;
    var jo2 = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, tc = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ec = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, nc = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, rc = parseFloat, ic = parseInt, gs2 = typeof _n2 == "object" && _n2 && _n2.Object === Object && _n2, sc = typeof self == "object" && self && self.Object === Object && self, j4 = gs2 || sc || Function("return this")(), Lr3 = s && !s.nodeType && s, pe2 = Lr3 && true && P3 && !P3.nodeType && P3, vs2 = pe2 && pe2.exports === Lr3, Hr3 = vs2 && gs2.process, _t2 = function() {
      try {
        var h3 = pe2 && pe2.require && pe2.require("util").types;
        return h3 || Hr3 && Hr3.binding && Hr3.binding("util");
      } catch {
      }
    }(), _s3 = _t2 && _t2.isArrayBuffer, ms3 = _t2 && _t2.isDate, ws3 = _t2 && _t2.isMap, Ps3 = _t2 && _t2.isRegExp, Cs3 = _t2 && _t2.isSet, As3 = _t2 && _t2.isTypedArray;
    function ft2(h3, g3, d2) {
      switch (d2.length) {
        case 0:
          return h3.call(g3);
        case 1:
          return h3.call(g3, d2[0]);
        case 2:
          return h3.call(g3, d2[0], d2[1]);
        case 3:
          return h3.call(g3, d2[0], d2[1], d2[2]);
      }
      return h3.apply(g3, d2);
    }
    function uc(h3, g3, d2, A3) {
      for (var R3 = -1, U4 = h3 == null ? 0 : h3.length; ++R3 < U4; ) {
        var Q4 = h3[R3];
        g3(A3, Q4, d2(Q4), h3);
      }
      return A3;
    }
    function mt2(h3, g3) {
      for (var d2 = -1, A3 = h3 == null ? 0 : h3.length; ++d2 < A3 && g3(h3[d2], d2, h3) !== false; )
        ;
      return h3;
    }
    function ac(h3, g3) {
      for (var d2 = h3 == null ? 0 : h3.length; d2-- && g3(h3[d2], d2, h3) !== false; )
        ;
      return h3;
    }
    function Is4(h3, g3) {
      for (var d2 = -1, A3 = h3 == null ? 0 : h3.length; ++d2 < A3; )
        if (!g3(h3[d2], d2, h3))
          return false;
      return true;
    }
    function ne3(h3, g3) {
      for (var d2 = -1, A3 = h3 == null ? 0 : h3.length, R3 = 0, U4 = []; ++d2 < A3; ) {
        var Q4 = h3[d2];
        g3(Q4, d2, h3) && (U4[R3++] = Q4);
      }
      return U4;
    }
    function Sn3(h3, g3) {
      var d2 = h3 == null ? 0 : h3.length;
      return !!d2 && Te2(h3, g3, 0) > -1;
    }
    function Dr3(h3, g3, d2) {
      for (var A3 = -1, R3 = h3 == null ? 0 : h3.length; ++A3 < R3; )
        if (d2(g3, h3[A3]))
          return true;
      return false;
    }
    function z4(h3, g3) {
      for (var d2 = -1, A3 = h3 == null ? 0 : h3.length, R3 = Array(A3); ++d2 < A3; )
        R3[d2] = g3(h3[d2], d2, h3);
      return R3;
    }
    function re2(h3, g3) {
      for (var d2 = -1, A3 = g3.length, R3 = h3.length; ++d2 < A3; )
        h3[R3 + d2] = g3[d2];
      return h3;
    }
    function Nr3(h3, g3, d2, A3) {
      var R3 = -1, U4 = h3 == null ? 0 : h3.length;
      for (A3 && U4 && (d2 = h3[++R3]); ++R3 < U4; )
        d2 = g3(d2, h3[R3], R3, h3);
      return d2;
    }
    function oc(h3, g3, d2, A3) {
      var R3 = h3 == null ? 0 : h3.length;
      for (A3 && R3 && (d2 = h3[--R3]); R3--; )
        d2 = g3(d2, h3[R3], R3, h3);
      return d2;
    }
    function $r3(h3, g3) {
      for (var d2 = -1, A3 = h3 == null ? 0 : h3.length; ++d2 < A3; )
        if (g3(h3[d2], d2, h3))
          return true;
      return false;
    }
    var cc = Ur3("length");
    function fc(h3) {
      return h3.split("");
    }
    function hc(h3) {
      return h3.match(wo2) || [];
    }
    function xs3(h3, g3, d2) {
      var A3;
      return d2(h3, function(R3, U4, Q4) {
        if (g3(R3, U4, Q4))
          return A3 = U4, false;
      }), A3;
    }
    function On3(h3, g3, d2, A3) {
      for (var R3 = h3.length, U4 = d2 + (A3 ? 1 : -1); A3 ? U4-- : ++U4 < R3; )
        if (g3(h3[U4], U4, h3))
          return U4;
      return -1;
    }
    function Te2(h3, g3, d2) {
      return g3 === g3 ? Ic(h3, g3, d2) : On3(h3, Es3, d2);
    }
    function lc(h3, g3, d2, A3) {
      for (var R3 = d2 - 1, U4 = h3.length; ++R3 < U4; )
        if (A3(h3[R3], g3))
          return R3;
      return -1;
    }
    function Es3(h3) {
      return h3 !== h3;
    }
    function ys3(h3, g3) {
      var d2 = h3 == null ? 0 : h3.length;
      return d2 ? Fr3(h3, g3) / d2 : wn2;
    }
    function Ur3(h3) {
      return function(g3) {
        return g3 == null ? i3 : g3[h3];
      };
    }
    function qr3(h3) {
      return function(g3) {
        return h3 == null ? i3 : h3[g3];
      };
    }
    function Ss4(h3, g3, d2, A3, R3) {
      return R3(h3, function(U4, Q4, M4) {
        d2 = A3 ? (A3 = false, U4) : g3(d2, U4, Q4, M4);
      }), d2;
    }
    function pc(h3, g3) {
      var d2 = h3.length;
      for (h3.sort(g3); d2--; )
        h3[d2] = h3[d2].value;
      return h3;
    }
    function Fr3(h3, g3) {
      for (var d2, A3 = -1, R3 = h3.length; ++A3 < R3; ) {
        var U4 = g3(h3[A3]);
        U4 !== i3 && (d2 = d2 === i3 ? U4 : d2 + U4);
      }
      return d2;
    }
    function Wr3(h3, g3) {
      for (var d2 = -1, A3 = Array(h3); ++d2 < h3; )
        A3[d2] = g3(d2);
      return A3;
    }
    function dc(h3, g3) {
      return z4(g3, function(d2) {
        return [d2, h3[d2]];
      });
    }
    function Os3(h3) {
      return h3 && h3.slice(0, Ls3(h3) + 1).replace(yr3, "");
    }
    function ht3(h3) {
      return function(g3) {
        return h3(g3);
      };
    }
    function Mr3(h3, g3) {
      return z4(g3, function(d2) {
        return h3[d2];
      });
    }
    function tn3(h3, g3) {
      return h3.has(g3);
    }
    function Rs4(h3, g3) {
      for (var d2 = -1, A3 = h3.length; ++d2 < A3 && Te2(g3, h3[d2], 0) > -1; )
        ;
      return d2;
    }
    function bs3(h3, g3) {
      for (var d2 = h3.length; d2-- && Te2(g3, h3[d2], 0) > -1; )
        ;
      return d2;
    }
    function gc(h3, g3) {
      for (var d2 = h3.length, A3 = 0; d2--; )
        h3[d2] === g3 && ++A3;
      return A3;
    }
    var vc = qr3(jo2), _c = qr3(tc);
    function mc(h3) {
      return "\\" + nc[h3];
    }
    function wc(h3, g3) {
      return h3 == null ? i3 : h3[g3];
    }
    function Le2(h3) {
      return Xo.test(h3);
    }
    function Pc(h3) {
      return Qo2.test(h3);
    }
    function Cc(h3) {
      for (var g3, d2 = []; !(g3 = h3.next()).done; )
        d2.push(g3.value);
      return d2;
    }
    function Br3(h3) {
      var g3 = -1, d2 = Array(h3.size);
      return h3.forEach(function(A3, R3) {
        d2[++g3] = [R3, A3];
      }), d2;
    }
    function Ts3(h3, g3) {
      return function(d2) {
        return h3(g3(d2));
      };
    }
    function ie2(h3, g3) {
      for (var d2 = -1, A3 = h3.length, R3 = 0, U4 = []; ++d2 < A3; ) {
        var Q4 = h3[d2];
        (Q4 === g3 || Q4 === Ie2) && (h3[d2] = Ie2, U4[R3++] = d2);
      }
      return U4;
    }
    function Rn3(h3) {
      var g3 = -1, d2 = Array(h3.size);
      return h3.forEach(function(A3) {
        d2[++g3] = A3;
      }), d2;
    }
    function Ac(h3) {
      var g3 = -1, d2 = Array(h3.size);
      return h3.forEach(function(A3) {
        d2[++g3] = [A3, A3];
      }), d2;
    }
    function Ic(h3, g3, d2) {
      for (var A3 = d2 - 1, R3 = h3.length; ++A3 < R3; )
        if (h3[A3] === g3)
          return A3;
      return -1;
    }
    function xc(h3, g3, d2) {
      for (var A3 = d2 + 1; A3--; )
        if (h3[A3] === g3)
          return A3;
      return A3;
    }
    function He(h3) {
      return Le2(h3) ? yc(h3) : cc(h3);
    }
    function St2(h3) {
      return Le2(h3) ? Sc(h3) : fc(h3);
    }
    function Ls3(h3) {
      for (var g3 = h3.length; g3-- && go2.test(h3.charAt(g3)); )
        ;
      return g3;
    }
    var Ec = qr3(ec);
    function yc(h3) {
      for (var g3 = Tr3.lastIndex = 0; Tr3.test(h3); )
        ++g3;
      return g3;
    }
    function Sc(h3) {
      return h3.match(Tr3) || [];
    }
    function Oc(h3) {
      return h3.match(Zo2) || [];
    }
    var Rc = function h3(g3) {
      g3 = g3 == null ? j4 : De.defaults(j4.Object(), g3, De.pick(j4, Vo));
      var d2 = g3.Array, A3 = g3.Date, R3 = g3.Error, U4 = g3.Function, Q4 = g3.Math, M4 = g3.Object, Gr3 = g3.RegExp, bc = g3.String, wt2 = g3.TypeError, bn2 = d2.prototype, Tc = U4.prototype, Ne = M4.prototype, Tn2 = g3["__core-js_shared__"], Ln2 = Tc.toString, W = Ne.hasOwnProperty, Lc = 0, Hs3 = function() {
        var t = /[^.]+$/.exec(Tn2 && Tn2.keys && Tn2.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Hn2 = Ne.toString, Hc = Ln2.call(M4), Dc = j4._, Nc = Gr3("^" + Ln2.call(W).replace(Er3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Dn2 = vs2 ? g3.Buffer : i3, se3 = g3.Symbol, Nn2 = g3.Uint8Array, Ds2 = Dn2 ? Dn2.allocUnsafe : i3, $n2 = Ts3(M4.getPrototypeOf, M4), Ns3 = M4.create, $s3 = Ne.propertyIsEnumerable, Un2 = bn2.splice, Us3 = se3 ? se3.isConcatSpreadable : i3, en3 = se3 ? se3.iterator : i3, de2 = se3 ? se3.toStringTag : i3, qn2 = function() {
        try {
          var t = we4(M4, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), $c = g3.clearTimeout !== j4.clearTimeout && g3.clearTimeout, Uc = A3 && A3.now !== j4.Date.now && A3.now, qc = g3.setTimeout !== j4.setTimeout && g3.setTimeout, Fn = Q4.ceil, Wn2 = Q4.floor, zr3 = M4.getOwnPropertySymbols, Fc = Dn2 ? Dn2.isBuffer : i3, qs4 = g3.isFinite, Wc = bn2.join, Mc = Ts3(M4.keys, M4), V2 = Q4.max, et3 = Q4.min, Bc = A3.now, Gc = g3.parseInt, Fs3 = Q4.random, zc = bn2.reverse, Kr3 = we4(g3, "DataView"), nn3 = we4(g3, "Map"), Jr3 = we4(g3, "Promise"), $e2 = we4(g3, "Set"), rn3 = we4(g3, "WeakMap"), sn2 = we4(M4, "create"), Mn = rn3 && new rn3(), Ue = {}, Kc = Pe3(Kr3), Jc = Pe3(nn3), Yc = Pe3(Jr3), Zc = Pe3($e2), Xc = Pe3(rn3), Bn2 = se3 ? se3.prototype : i3, un3 = Bn2 ? Bn2.valueOf : i3, Ws3 = Bn2 ? Bn2.toString : i3;
      function a2(t) {
        if (Y2(t) && !b3(t) && !(t instanceof N2)) {
          if (t instanceof Pt2)
            return t;
          if (W.call(t, "__wrapped__"))
            return Mu2(t);
        }
        return new Pt2(t);
      }
      var qe = function() {
        function t() {
        }
        return function(e) {
          if (!K3(e))
            return {};
          if (Ns3)
            return Ns3(e);
          t.prototype = e;
          var n2 = new t();
          return t.prototype = i3, n2;
        };
      }();
      function Gn2() {
      }
      function Pt2(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = i3;
      }
      a2.templateSettings = { escape: oo2, evaluate: co2, interpolate: Xi2, variable: "", imports: { _: a2 } }, a2.prototype = Gn2.prototype, a2.prototype.constructor = a2, Pt2.prototype = qe(Gn2.prototype), Pt2.prototype.constructor = Pt2;
      function N2(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Ut3, this.__views__ = [];
      }
      function Qc() {
        var t = new N2(this.__wrapped__);
        return t.__actions__ = ut3(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ut3(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ut3(this.__views__), t;
      }
      function Vc() {
        if (this.__filtered__) {
          var t = new N2(this);
          t.__dir__ = -1, t.__filtered__ = true;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function kc() {
        var t = this.__wrapped__.value(), e = this.__dir__, n2 = b3(t), r2 = e < 0, u3 = n2 ? t.length : 0, o2 = hh2(0, u3, this.__views__), c2 = o2.start, f3 = o2.end, l = f3 - c2, v4 = r2 ? f3 : c2 - 1, _2 = this.__iteratees__, m2 = _2.length, C4 = 0, x4 = et3(l, this.__takeCount__);
        if (!n2 || !r2 && u3 == l && x4 == l)
          return fu2(t, this.__actions__);
        var S2 = [];
        t:
          for (; l-- && C4 < x4; ) {
            v4 += e;
            for (var L2 = -1, O3 = t[v4]; ++L2 < m2; ) {
              var D3 = _2[L2], $3 = D3.iteratee, dt3 = D3.type, st3 = $3(O3);
              if (dt3 == Ka2)
                O3 = st3;
              else if (!st3) {
                if (dt3 == zi2)
                  continue t;
                break t;
              }
            }
            S2[C4++] = O3;
          }
        return S2;
      }
      N2.prototype = qe(Gn2.prototype), N2.prototype.constructor = N2;
      function ge2(t) {
        var e = -1, n2 = t == null ? 0 : t.length;
        for (this.clear(); ++e < n2; ) {
          var r2 = t[e];
          this.set(r2[0], r2[1]);
        }
      }
      function jc() {
        this.__data__ = sn2 ? sn2(null) : {}, this.size = 0;
      }
      function tf2(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e;
      }
      function ef2(t) {
        var e = this.__data__;
        if (sn2) {
          var n2 = e[t];
          return n2 === Ht3 ? i3 : n2;
        }
        return W.call(e, t) ? e[t] : i3;
      }
      function nf2(t) {
        var e = this.__data__;
        return sn2 ? e[t] !== i3 : W.call(e, t);
      }
      function rf2(t, e) {
        var n2 = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n2[t] = sn2 && e === i3 ? Ht3 : e, this;
      }
      ge2.prototype.clear = jc, ge2.prototype.delete = tf2, ge2.prototype.get = ef2, ge2.prototype.has = nf2, ge2.prototype.set = rf2;
      function Kt3(t) {
        var e = -1, n2 = t == null ? 0 : t.length;
        for (this.clear(); ++e < n2; ) {
          var r2 = t[e];
          this.set(r2[0], r2[1]);
        }
      }
      function sf2() {
        this.__data__ = [], this.size = 0;
      }
      function uf2(t) {
        var e = this.__data__, n2 = zn2(e, t);
        if (n2 < 0)
          return false;
        var r2 = e.length - 1;
        return n2 == r2 ? e.pop() : Un2.call(e, n2, 1), --this.size, true;
      }
      function af2(t) {
        var e = this.__data__, n2 = zn2(e, t);
        return n2 < 0 ? i3 : e[n2][1];
      }
      function of2(t) {
        return zn2(this.__data__, t) > -1;
      }
      function cf2(t, e) {
        var n2 = this.__data__, r2 = zn2(n2, t);
        return r2 < 0 ? (++this.size, n2.push([t, e])) : n2[r2][1] = e, this;
      }
      Kt3.prototype.clear = sf2, Kt3.prototype.delete = uf2, Kt3.prototype.get = af2, Kt3.prototype.has = of2, Kt3.prototype.set = cf2;
      function Jt3(t) {
        var e = -1, n2 = t == null ? 0 : t.length;
        for (this.clear(); ++e < n2; ) {
          var r2 = t[e];
          this.set(r2[0], r2[1]);
        }
      }
      function ff2() {
        this.size = 0, this.__data__ = { hash: new ge2(), map: new (nn3 || Kt3)(), string: new ge2() };
      }
      function hf2(t) {
        var e = nr3(this, t).delete(t);
        return this.size -= e ? 1 : 0, e;
      }
      function lf2(t) {
        return nr3(this, t).get(t);
      }
      function pf2(t) {
        return nr3(this, t).has(t);
      }
      function df2(t, e) {
        var n2 = nr3(this, t), r2 = n2.size;
        return n2.set(t, e), this.size += n2.size == r2 ? 0 : 1, this;
      }
      Jt3.prototype.clear = ff2, Jt3.prototype.delete = hf2, Jt3.prototype.get = lf2, Jt3.prototype.has = pf2, Jt3.prototype.set = df2;
      function ve3(t) {
        var e = -1, n2 = t == null ? 0 : t.length;
        for (this.__data__ = new Jt3(); ++e < n2; )
          this.add(t[e]);
      }
      function gf2(t) {
        return this.__data__.set(t, Ht3), this;
      }
      function vf2(t) {
        return this.__data__.has(t);
      }
      ve3.prototype.add = ve3.prototype.push = gf2, ve3.prototype.has = vf2;
      function Ot3(t) {
        var e = this.__data__ = new Kt3(t);
        this.size = e.size;
      }
      function _f2() {
        this.__data__ = new Kt3(), this.size = 0;
      }
      function mf2(t) {
        var e = this.__data__, n2 = e.delete(t);
        return this.size = e.size, n2;
      }
      function wf2(t) {
        return this.__data__.get(t);
      }
      function Pf2(t) {
        return this.__data__.has(t);
      }
      function Cf2(t, e) {
        var n2 = this.__data__;
        if (n2 instanceof Kt3) {
          var r2 = n2.__data__;
          if (!nn3 || r2.length < w2 - 1)
            return r2.push([t, e]), this.size = ++n2.size, this;
          n2 = this.__data__ = new Jt3(r2);
        }
        return n2.set(t, e), this.size = n2.size, this;
      }
      Ot3.prototype.clear = _f2, Ot3.prototype.delete = mf2, Ot3.prototype.get = wf2, Ot3.prototype.has = Pf2, Ot3.prototype.set = Cf2;
      function Ms3(t, e) {
        var n2 = b3(t), r2 = !n2 && Ce4(t), u3 = !n2 && !r2 && fe3(t), o2 = !n2 && !r2 && !u3 && Be2(t), c2 = n2 || r2 || u3 || o2, f3 = c2 ? Wr3(t.length, bc) : [], l = f3.length;
        for (var v4 in t)
          (e || W.call(t, v4)) && !(c2 && (v4 == "length" || u3 && (v4 == "offset" || v4 == "parent") || o2 && (v4 == "buffer" || v4 == "byteLength" || v4 == "byteOffset") || Qt2(v4, l))) && f3.push(v4);
        return f3;
      }
      function Bs3(t) {
        var e = t.length;
        return e ? t[ri2(0, e - 1)] : i3;
      }
      function Af2(t, e) {
        return rr3(ut3(t), _e4(e, 0, t.length));
      }
      function If2(t) {
        return rr3(ut3(t));
      }
      function Yr3(t, e, n2) {
        (n2 !== i3 && !Rt2(t[e], n2) || n2 === i3 && !(e in t)) && Yt3(t, e, n2);
      }
      function an3(t, e, n2) {
        var r2 = t[e];
        (!(W.call(t, e) && Rt2(r2, n2)) || n2 === i3 && !(e in t)) && Yt3(t, e, n2);
      }
      function zn2(t, e) {
        for (var n2 = t.length; n2--; )
          if (Rt2(t[n2][0], e))
            return n2;
        return -1;
      }
      function xf2(t, e, n2, r2) {
        return ue3(t, function(u3, o2, c2) {
          e(r2, u3, n2(u3), c2);
        }), r2;
      }
      function Gs3(t, e) {
        return t && Ft3(e, k2(e), t);
      }
      function Ef2(t, e) {
        return t && Ft3(e, ot3(e), t);
      }
      function Yt3(t, e, n2) {
        e == "__proto__" && qn2 ? qn2(t, e, { configurable: true, enumerable: true, value: n2, writable: true }) : t[e] = n2;
      }
      function Zr2(t, e) {
        for (var n2 = -1, r2 = e.length, u3 = d2(r2), o2 = t == null; ++n2 < r2; )
          u3[n2] = o2 ? i3 : Oi2(t, e[n2]);
        return u3;
      }
      function _e4(t, e, n2) {
        return t === t && (n2 !== i3 && (t = t <= n2 ? t : n2), e !== i3 && (t = t >= e ? t : e)), t;
      }
      function Ct2(t, e, n2, r2, u3, o2) {
        var c2, f3 = e & Dt3, l = e & Bt2, v4 = e & xe3;
        if (n2 && (c2 = u3 ? n2(t, r2, u3, o2) : n2(t)), c2 !== i3)
          return c2;
        if (!K3(t))
          return t;
        var _2 = b3(t);
        if (_2) {
          if (c2 = ph2(t), !f3)
            return ut3(t, c2);
        } else {
          var m2 = nt3(t), C4 = m2 == An2 || m2 == Ki2;
          if (fe3(t))
            return pu2(t, f3);
          if (m2 == zt3 || m2 == Oe2 || C4 && !u3) {
            if (c2 = l || C4 ? {} : Lu2(t), !f3)
              return l ? nh(t, Ef2(c2, t)) : eh(t, Gs3(c2, t));
          } else {
            if (!B2[m2])
              return u3 ? t : {};
            c2 = dh2(t, m2, f3);
          }
        }
        o2 || (o2 = new Ot3());
        var x4 = o2.get(t);
        if (x4)
          return x4;
        o2.set(t, c2), aa2(t) ? t.forEach(function(O3) {
          c2.add(Ct2(O3, e, n2, O3, t, o2));
        }) : sa2(t) && t.forEach(function(O3, D3) {
          c2.set(D3, Ct2(O3, e, n2, D3, t, o2));
        });
        var S2 = v4 ? l ? di3 : pi3 : l ? ot3 : k2, L2 = _2 ? i3 : S2(t);
        return mt2(L2 || t, function(O3, D3) {
          L2 && (D3 = O3, O3 = t[D3]), an3(c2, D3, Ct2(O3, e, n2, D3, t, o2));
        }), c2;
      }
      function yf2(t) {
        var e = k2(t);
        return function(n2) {
          return zs3(n2, t, e);
        };
      }
      function zs3(t, e, n2) {
        var r2 = n2.length;
        if (t == null)
          return !r2;
        for (t = M4(t); r2--; ) {
          var u3 = n2[r2], o2 = e[u3], c2 = t[u3];
          if (c2 === i3 && !(u3 in t) || !o2(c2))
            return false;
        }
        return true;
      }
      function Ks3(t, e, n2) {
        if (typeof t != "function")
          throw new wt2(y5);
        return dn3(function() {
          t.apply(i3, n2);
        }, e);
      }
      function on3(t, e, n2, r2) {
        var u3 = -1, o2 = Sn3, c2 = true, f3 = t.length, l = [], v4 = e.length;
        if (!f3)
          return l;
        n2 && (e = z4(e, ht3(n2))), r2 ? (o2 = Dr3, c2 = false) : e.length >= w2 && (o2 = tn3, c2 = false, e = new ve3(e));
        t:
          for (; ++u3 < f3; ) {
            var _2 = t[u3], m2 = n2 == null ? _2 : n2(_2);
            if (_2 = r2 || _2 !== 0 ? _2 : 0, c2 && m2 === m2) {
              for (var C4 = v4; C4--; )
                if (e[C4] === m2)
                  continue t;
              l.push(_2);
            } else
              o2(e, m2, r2) || l.push(_2);
          }
        return l;
      }
      var ue3 = mu2(qt3), Js3 = mu2(Qr3, true);
      function Sf2(t, e) {
        var n2 = true;
        return ue3(t, function(r2, u3, o2) {
          return n2 = !!e(r2, u3, o2), n2;
        }), n2;
      }
      function Kn2(t, e, n2) {
        for (var r2 = -1, u3 = t.length; ++r2 < u3; ) {
          var o2 = t[r2], c2 = e(o2);
          if (c2 != null && (f3 === i3 ? c2 === c2 && !pt3(c2) : n2(c2, f3)))
            var f3 = c2, l = o2;
        }
        return l;
      }
      function Of2(t, e, n2, r2) {
        var u3 = t.length;
        for (n2 = T3(n2), n2 < 0 && (n2 = -n2 > u3 ? 0 : u3 + n2), r2 = r2 === i3 || r2 > u3 ? u3 : T3(r2), r2 < 0 && (r2 += u3), r2 = n2 > r2 ? 0 : ca2(r2); n2 < r2; )
          t[n2++] = e;
        return t;
      }
      function Ys3(t, e) {
        var n2 = [];
        return ue3(t, function(r2, u3, o2) {
          e(r2, u3, o2) && n2.push(r2);
        }), n2;
      }
      function tt3(t, e, n2, r2, u3) {
        var o2 = -1, c2 = t.length;
        for (n2 || (n2 = vh2), u3 || (u3 = []); ++o2 < c2; ) {
          var f3 = t[o2];
          e > 0 && n2(f3) ? e > 1 ? tt3(f3, e - 1, n2, r2, u3) : re2(u3, f3) : r2 || (u3[u3.length] = f3);
        }
        return u3;
      }
      var Xr3 = wu(), Zs3 = wu(true);
      function qt3(t, e) {
        return t && Xr3(t, e, k2);
      }
      function Qr3(t, e) {
        return t && Zs3(t, e, k2);
      }
      function Jn2(t, e) {
        return ne3(e, function(n2) {
          return Vt2(t[n2]);
        });
      }
      function me3(t, e) {
        e = oe4(e, t);
        for (var n2 = 0, r2 = e.length; t != null && n2 < r2; )
          t = t[Wt2(e[n2++])];
        return n2 && n2 == r2 ? t : i3;
      }
      function Xs3(t, e, n2) {
        var r2 = e(t);
        return b3(t) ? r2 : re2(r2, n2(t));
      }
      function rt3(t) {
        return t == null ? t === i3 ? eo2 : ja2 : de2 && de2 in M4(t) ? fh(t) : Ih2(t);
      }
      function Vr3(t, e) {
        return t > e;
      }
      function Rf2(t, e) {
        return t != null && W.call(t, e);
      }
      function bf2(t, e) {
        return t != null && e in M4(t);
      }
      function Tf2(t, e, n2) {
        return t >= et3(e, n2) && t < V2(e, n2);
      }
      function kr3(t, e, n2) {
        for (var r2 = n2 ? Dr3 : Sn3, u3 = t[0].length, o2 = t.length, c2 = o2, f3 = d2(o2), l = 1 / 0, v4 = []; c2--; ) {
          var _2 = t[c2];
          c2 && e && (_2 = z4(_2, ht3(e))), l = et3(_2.length, l), f3[c2] = !n2 && (e || u3 >= 120 && _2.length >= 120) ? new ve3(c2 && _2) : i3;
        }
        _2 = t[0];
        var m2 = -1, C4 = f3[0];
        t:
          for (; ++m2 < u3 && v4.length < l; ) {
            var x4 = _2[m2], S2 = e ? e(x4) : x4;
            if (x4 = n2 || x4 !== 0 ? x4 : 0, !(C4 ? tn3(C4, S2) : r2(v4, S2, n2))) {
              for (c2 = o2; --c2; ) {
                var L2 = f3[c2];
                if (!(L2 ? tn3(L2, S2) : r2(t[c2], S2, n2)))
                  continue t;
              }
              C4 && C4.push(S2), v4.push(x4);
            }
          }
        return v4;
      }
      function Lf2(t, e, n2, r2) {
        return qt3(t, function(u3, o2, c2) {
          e(r2, n2(u3), o2, c2);
        }), r2;
      }
      function cn3(t, e, n2) {
        e = oe4(e, t), t = $u2(t, e);
        var r2 = t == null ? t : t[Wt2(It2(e))];
        return r2 == null ? i3 : ft2(r2, t, n2);
      }
      function Qs3(t) {
        return Y2(t) && rt3(t) == Oe2;
      }
      function Hf2(t) {
        return Y2(t) && rt3(t) == je;
      }
      function Df2(t) {
        return Y2(t) && rt3(t) == Ze4;
      }
      function fn3(t, e, n2, r2, u3) {
        return t === e ? true : t == null || e == null || !Y2(t) && !Y2(e) ? t !== t && e !== e : Nf2(t, e, n2, r2, fn3, u3);
      }
      function Nf2(t, e, n2, r2, u3, o2) {
        var c2 = b3(t), f3 = b3(e), l = c2 ? Pn3 : nt3(t), v4 = f3 ? Pn3 : nt3(e);
        l = l == Oe2 ? zt3 : l, v4 = v4 == Oe2 ? zt3 : v4;
        var _2 = l == zt3, m2 = v4 == zt3, C4 = l == v4;
        if (C4 && fe3(t)) {
          if (!fe3(e))
            return false;
          c2 = true, _2 = false;
        }
        if (C4 && !_2)
          return o2 || (o2 = new Ot3()), c2 || Be2(t) ? Ru2(t, e, n2, r2, u3, o2) : oh(t, e, l, n2, r2, u3, o2);
        if (!(n2 & Ee2)) {
          var x4 = _2 && W.call(t, "__wrapped__"), S2 = m2 && W.call(e, "__wrapped__");
          if (x4 || S2) {
            var L2 = x4 ? t.value() : t, O3 = S2 ? e.value() : e;
            return o2 || (o2 = new Ot3()), u3(L2, O3, n2, r2, o2);
          }
        }
        return C4 ? (o2 || (o2 = new Ot3()), ch2(t, e, n2, r2, u3, o2)) : false;
      }
      function $f(t) {
        return Y2(t) && nt3(t) == Et2;
      }
      function jr3(t, e, n2, r2) {
        var u3 = n2.length, o2 = u3, c2 = !r2;
        if (t == null)
          return !o2;
        for (t = M4(t); u3--; ) {
          var f3 = n2[u3];
          if (c2 && f3[2] ? f3[1] !== t[f3[0]] : !(f3[0] in t))
            return false;
        }
        for (; ++u3 < o2; ) {
          f3 = n2[u3];
          var l = f3[0], v4 = t[l], _2 = f3[1];
          if (c2 && f3[2]) {
            if (v4 === i3 && !(l in t))
              return false;
          } else {
            var m2 = new Ot3();
            if (r2)
              var C4 = r2(v4, _2, l, t, e, m2);
            if (!(C4 === i3 ? fn3(_2, v4, Ee2 | mn3, r2, m2) : C4))
              return false;
          }
        }
        return true;
      }
      function Vs3(t) {
        if (!K3(t) || mh2(t))
          return false;
        var e = Vt2(t) ? Nc : Eo2;
        return e.test(Pe3(t));
      }
      function Uf2(t) {
        return Y2(t) && rt3(t) == Qe2;
      }
      function qf2(t) {
        return Y2(t) && nt3(t) == yt3;
      }
      function Ff2(t) {
        return Y2(t) && cr3(t.length) && !!G2[rt3(t)];
      }
      function ks3(t) {
        return typeof t == "function" ? t : t == null ? ct3 : typeof t == "object" ? b3(t) ? eu2(t[0], t[1]) : tu2(t) : Pa2(t);
      }
      function ti2(t) {
        if (!pn3(t))
          return Mc(t);
        var e = [];
        for (var n2 in M4(t))
          W.call(t, n2) && n2 != "constructor" && e.push(n2);
        return e;
      }
      function Wf2(t) {
        if (!K3(t))
          return Ah2(t);
        var e = pn3(t), n2 = [];
        for (var r2 in t)
          r2 == "constructor" && (e || !W.call(t, r2)) || n2.push(r2);
        return n2;
      }
      function ei2(t, e) {
        return t < e;
      }
      function js3(t, e) {
        var n2 = -1, r2 = at3(t) ? d2(t.length) : [];
        return ue3(t, function(u3, o2, c2) {
          r2[++n2] = e(u3, o2, c2);
        }), r2;
      }
      function tu2(t) {
        var e = vi(t);
        return e.length == 1 && e[0][2] ? Du2(e[0][0], e[0][1]) : function(n2) {
          return n2 === t || jr3(n2, t, e);
        };
      }
      function eu2(t, e) {
        return mi2(t) && Hu2(e) ? Du2(Wt2(t), e) : function(n2) {
          var r2 = Oi2(n2, t);
          return r2 === i3 && r2 === e ? Ri2(n2, t) : fn3(e, r2, Ee2 | mn3);
        };
      }
      function Yn2(t, e, n2, r2, u3) {
        t !== e && Xr3(e, function(o2, c2) {
          if (u3 || (u3 = new Ot3()), K3(o2))
            Mf2(t, e, c2, n2, Yn2, r2, u3);
          else {
            var f3 = r2 ? r2(Pi2(t, c2), o2, c2 + "", t, e, u3) : i3;
            f3 === i3 && (f3 = o2), Yr3(t, c2, f3);
          }
        }, ot3);
      }
      function Mf2(t, e, n2, r2, u3, o2, c2) {
        var f3 = Pi2(t, n2), l = Pi2(e, n2), v4 = c2.get(l);
        if (v4) {
          Yr3(t, n2, v4);
          return;
        }
        var _2 = o2 ? o2(f3, l, n2 + "", t, e, c2) : i3, m2 = _2 === i3;
        if (m2) {
          var C4 = b3(l), x4 = !C4 && fe3(l), S2 = !C4 && !x4 && Be2(l);
          _2 = l, C4 || x4 || S2 ? b3(f3) ? _2 = f3 : Z2(f3) ? _2 = ut3(f3) : x4 ? (m2 = false, _2 = pu2(l, true)) : S2 ? (m2 = false, _2 = du2(l, true)) : _2 = [] : gn3(l) || Ce4(l) ? (_2 = f3, Ce4(f3) ? _2 = fa2(f3) : (!K3(f3) || Vt2(f3)) && (_2 = Lu2(l))) : m2 = false;
        }
        m2 && (c2.set(l, _2), u3(_2, l, r2, o2, c2), c2.delete(l)), Yr3(t, n2, _2);
      }
      function nu2(t, e) {
        var n2 = t.length;
        if (n2)
          return e += e < 0 ? n2 : 0, Qt2(e, n2) ? t[e] : i3;
      }
      function ru2(t, e, n2) {
        e.length ? e = z4(e, function(o2) {
          return b3(o2) ? function(c2) {
            return me3(c2, o2.length === 1 ? o2[0] : o2);
          } : o2;
        }) : e = [ct3];
        var r2 = -1;
        e = z4(e, ht3(E3()));
        var u3 = js3(t, function(o2, c2, f3) {
          var l = z4(e, function(v4) {
            return v4(o2);
          });
          return { criteria: l, index: ++r2, value: o2 };
        });
        return pc(u3, function(o2, c2) {
          return th(o2, c2, n2);
        });
      }
      function Bf2(t, e) {
        return iu2(t, e, function(n2, r2) {
          return Ri2(t, r2);
        });
      }
      function iu2(t, e, n2) {
        for (var r2 = -1, u3 = e.length, o2 = {}; ++r2 < u3; ) {
          var c2 = e[r2], f3 = me3(t, c2);
          n2(f3, c2) && hn3(o2, oe4(c2, t), f3);
        }
        return o2;
      }
      function Gf2(t) {
        return function(e) {
          return me3(e, t);
        };
      }
      function ni2(t, e, n2, r2) {
        var u3 = r2 ? lc : Te2, o2 = -1, c2 = e.length, f3 = t;
        for (t === e && (e = ut3(e)), n2 && (f3 = z4(t, ht3(n2))); ++o2 < c2; )
          for (var l = 0, v4 = e[o2], _2 = n2 ? n2(v4) : v4; (l = u3(f3, _2, l, r2)) > -1; )
            f3 !== t && Un2.call(f3, l, 1), Un2.call(t, l, 1);
        return t;
      }
      function su2(t, e) {
        for (var n2 = t ? e.length : 0, r2 = n2 - 1; n2--; ) {
          var u3 = e[n2];
          if (n2 == r2 || u3 !== o2) {
            var o2 = u3;
            Qt2(u3) ? Un2.call(t, u3, 1) : ui2(t, u3);
          }
        }
        return t;
      }
      function ri2(t, e) {
        return t + Wn2(Fs3() * (e - t + 1));
      }
      function zf2(t, e, n2, r2) {
        for (var u3 = -1, o2 = V2(Fn((e - t) / (n2 || 1)), 0), c2 = d2(o2); o2--; )
          c2[r2 ? o2 : ++u3] = t, t += n2;
        return c2;
      }
      function ii2(t, e) {
        var n2 = "";
        if (!t || e < 1 || e > ee3)
          return n2;
        do
          e % 2 && (n2 += t), e = Wn2(e / 2), e && (t += t);
        while (e);
        return n2;
      }
      function H(t, e) {
        return Ci2(Nu2(t, e, ct3), t + "");
      }
      function Kf2(t) {
        return Bs3(Ge(t));
      }
      function Jf2(t, e) {
        var n2 = Ge(t);
        return rr3(n2, _e4(e, 0, n2.length));
      }
      function hn3(t, e, n2, r2) {
        if (!K3(t))
          return t;
        e = oe4(e, t);
        for (var u3 = -1, o2 = e.length, c2 = o2 - 1, f3 = t; f3 != null && ++u3 < o2; ) {
          var l = Wt2(e[u3]), v4 = n2;
          if (l === "__proto__" || l === "constructor" || l === "prototype")
            return t;
          if (u3 != c2) {
            var _2 = f3[l];
            v4 = r2 ? r2(_2, l, f3) : i3, v4 === i3 && (v4 = K3(_2) ? _2 : Qt2(e[u3 + 1]) ? [] : {});
          }
          an3(f3, l, v4), f3 = f3[l];
        }
        return t;
      }
      var uu2 = Mn ? function(t, e) {
        return Mn.set(t, e), t;
      } : ct3, Yf2 = qn2 ? function(t, e) {
        return qn2(t, "toString", { configurable: true, enumerable: false, value: Ti2(e), writable: true });
      } : ct3;
      function Zf(t) {
        return rr3(Ge(t));
      }
      function At2(t, e, n2) {
        var r2 = -1, u3 = t.length;
        e < 0 && (e = -e > u3 ? 0 : u3 + e), n2 = n2 > u3 ? u3 : n2, n2 < 0 && (n2 += u3), u3 = e > n2 ? 0 : n2 - e >>> 0, e >>>= 0;
        for (var o2 = d2(u3); ++r2 < u3; )
          o2[r2] = t[r2 + e];
        return o2;
      }
      function Xf(t, e) {
        var n2;
        return ue3(t, function(r2, u3, o2) {
          return n2 = e(r2, u3, o2), !n2;
        }), !!n2;
      }
      function Zn2(t, e, n2) {
        var r2 = 0, u3 = t == null ? r2 : t.length;
        if (typeof e == "number" && e === e && u3 <= Xa2) {
          for (; r2 < u3; ) {
            var o2 = r2 + u3 >>> 1, c2 = t[o2];
            c2 !== null && !pt3(c2) && (n2 ? c2 <= e : c2 < e) ? r2 = o2 + 1 : u3 = o2;
          }
          return u3;
        }
        return si2(t, e, ct3, n2);
      }
      function si2(t, e, n2, r2) {
        var u3 = 0, o2 = t == null ? 0 : t.length;
        if (o2 === 0)
          return 0;
        e = n2(e);
        for (var c2 = e !== e, f3 = e === null, l = pt3(e), v4 = e === i3; u3 < o2; ) {
          var _2 = Wn2((u3 + o2) / 2), m2 = n2(t[_2]), C4 = m2 !== i3, x4 = m2 === null, S2 = m2 === m2, L2 = pt3(m2);
          if (c2)
            var O3 = r2 || S2;
          else
            v4 ? O3 = S2 && (r2 || C4) : f3 ? O3 = S2 && C4 && (r2 || !x4) : l ? O3 = S2 && C4 && !x4 && (r2 || !L2) : x4 || L2 ? O3 = false : O3 = r2 ? m2 <= e : m2 < e;
          O3 ? u3 = _2 + 1 : o2 = _2;
        }
        return et3(o2, Za2);
      }
      function au2(t, e) {
        for (var n2 = -1, r2 = t.length, u3 = 0, o2 = []; ++n2 < r2; ) {
          var c2 = t[n2], f3 = e ? e(c2) : c2;
          if (!n2 || !Rt2(f3, l)) {
            var l = f3;
            o2[u3++] = c2 === 0 ? 0 : c2;
          }
        }
        return o2;
      }
      function ou2(t) {
        return typeof t == "number" ? t : pt3(t) ? wn2 : +t;
      }
      function lt3(t) {
        if (typeof t == "string")
          return t;
        if (b3(t))
          return z4(t, lt3) + "";
        if (pt3(t))
          return Ws3 ? Ws3.call(t) : "";
        var e = t + "";
        return e == "0" && 1 / t == -le3 ? "-0" : e;
      }
      function ae4(t, e, n2) {
        var r2 = -1, u3 = Sn3, o2 = t.length, c2 = true, f3 = [], l = f3;
        if (n2)
          c2 = false, u3 = Dr3;
        else if (o2 >= w2) {
          var v4 = e ? null : uh2(t);
          if (v4)
            return Rn3(v4);
          c2 = false, u3 = tn3, l = new ve3();
        } else
          l = e ? [] : f3;
        t:
          for (; ++r2 < o2; ) {
            var _2 = t[r2], m2 = e ? e(_2) : _2;
            if (_2 = n2 || _2 !== 0 ? _2 : 0, c2 && m2 === m2) {
              for (var C4 = l.length; C4--; )
                if (l[C4] === m2)
                  continue t;
              e && l.push(m2), f3.push(_2);
            } else
              u3(l, m2, n2) || (l !== f3 && l.push(m2), f3.push(_2));
          }
        return f3;
      }
      function ui2(t, e) {
        return e = oe4(e, t), t = $u2(t, e), t == null || delete t[Wt2(It2(e))];
      }
      function cu2(t, e, n2, r2) {
        return hn3(t, e, n2(me3(t, e)), r2);
      }
      function Xn2(t, e, n2, r2) {
        for (var u3 = t.length, o2 = r2 ? u3 : -1; (r2 ? o2-- : ++o2 < u3) && e(t[o2], o2, t); )
          ;
        return n2 ? At2(t, r2 ? 0 : o2, r2 ? o2 + 1 : u3) : At2(t, r2 ? o2 + 1 : 0, r2 ? u3 : o2);
      }
      function fu2(t, e) {
        var n2 = t;
        return n2 instanceof N2 && (n2 = n2.value()), Nr3(e, function(r2, u3) {
          return u3.func.apply(u3.thisArg, re2([r2], u3.args));
        }, n2);
      }
      function ai2(t, e, n2) {
        var r2 = t.length;
        if (r2 < 2)
          return r2 ? ae4(t[0]) : [];
        for (var u3 = -1, o2 = d2(r2); ++u3 < r2; )
          for (var c2 = t[u3], f3 = -1; ++f3 < r2; )
            f3 != u3 && (o2[u3] = on3(o2[u3] || c2, t[f3], e, n2));
        return ae4(tt3(o2, 1), e, n2);
      }
      function hu2(t, e, n2) {
        for (var r2 = -1, u3 = t.length, o2 = e.length, c2 = {}; ++r2 < u3; ) {
          var f3 = r2 < o2 ? e[r2] : i3;
          n2(c2, t[r2], f3);
        }
        return c2;
      }
      function oi2(t) {
        return Z2(t) ? t : [];
      }
      function ci2(t) {
        return typeof t == "function" ? t : ct3;
      }
      function oe4(t, e) {
        return b3(t) ? t : mi2(t, e) ? [t] : Wu2(q3(t));
      }
      var Qf2 = H;
      function ce3(t, e, n2) {
        var r2 = t.length;
        return n2 = n2 === i3 ? r2 : n2, !e && n2 >= r2 ? t : At2(t, e, n2);
      }
      var lu2 = $c || function(t) {
        return j4.clearTimeout(t);
      };
      function pu2(t, e) {
        if (e)
          return t.slice();
        var n2 = t.length, r2 = Ds2 ? Ds2(n2) : new t.constructor(n2);
        return t.copy(r2), r2;
      }
      function fi2(t) {
        var e = new t.constructor(t.byteLength);
        return new Nn2(e).set(new Nn2(t)), e;
      }
      function Vf2(t, e) {
        var n2 = e ? fi2(t.buffer) : t.buffer;
        return new t.constructor(n2, t.byteOffset, t.byteLength);
      }
      function kf2(t) {
        var e = new t.constructor(t.source, Qi2.exec(t));
        return e.lastIndex = t.lastIndex, e;
      }
      function jf2(t) {
        return un3 ? M4(un3.call(t)) : {};
      }
      function du2(t, e) {
        var n2 = e ? fi2(t.buffer) : t.buffer;
        return new t.constructor(n2, t.byteOffset, t.length);
      }
      function gu2(t, e) {
        if (t !== e) {
          var n2 = t !== i3, r2 = t === null, u3 = t === t, o2 = pt3(t), c2 = e !== i3, f3 = e === null, l = e === e, v4 = pt3(e);
          if (!f3 && !v4 && !o2 && t > e || o2 && c2 && l && !f3 && !v4 || r2 && c2 && l || !n2 && l || !u3)
            return 1;
          if (!r2 && !o2 && !v4 && t < e || v4 && n2 && u3 && !r2 && !o2 || f3 && n2 && u3 || !c2 && u3 || !l)
            return -1;
        }
        return 0;
      }
      function th(t, e, n2) {
        for (var r2 = -1, u3 = t.criteria, o2 = e.criteria, c2 = u3.length, f3 = n2.length; ++r2 < c2; ) {
          var l = gu2(u3[r2], o2[r2]);
          if (l) {
            if (r2 >= f3)
              return l;
            var v4 = n2[r2];
            return l * (v4 == "desc" ? -1 : 1);
          }
        }
        return t.index - e.index;
      }
      function vu2(t, e, n2, r2) {
        for (var u3 = -1, o2 = t.length, c2 = n2.length, f3 = -1, l = e.length, v4 = V2(o2 - c2, 0), _2 = d2(l + v4), m2 = !r2; ++f3 < l; )
          _2[f3] = e[f3];
        for (; ++u3 < c2; )
          (m2 || u3 < o2) && (_2[n2[u3]] = t[u3]);
        for (; v4--; )
          _2[f3++] = t[u3++];
        return _2;
      }
      function _u2(t, e, n2, r2) {
        for (var u3 = -1, o2 = t.length, c2 = -1, f3 = n2.length, l = -1, v4 = e.length, _2 = V2(o2 - f3, 0), m2 = d2(_2 + v4), C4 = !r2; ++u3 < _2; )
          m2[u3] = t[u3];
        for (var x4 = u3; ++l < v4; )
          m2[x4 + l] = e[l];
        for (; ++c2 < f3; )
          (C4 || u3 < o2) && (m2[x4 + n2[c2]] = t[u3++]);
        return m2;
      }
      function ut3(t, e) {
        var n2 = -1, r2 = t.length;
        for (e || (e = d2(r2)); ++n2 < r2; )
          e[n2] = t[n2];
        return e;
      }
      function Ft3(t, e, n2, r2) {
        var u3 = !n2;
        n2 || (n2 = {});
        for (var o2 = -1, c2 = e.length; ++o2 < c2; ) {
          var f3 = e[o2], l = r2 ? r2(n2[f3], t[f3], f3, n2, t) : i3;
          l === i3 && (l = t[f3]), u3 ? Yt3(n2, f3, l) : an3(n2, f3, l);
        }
        return n2;
      }
      function eh(t, e) {
        return Ft3(t, _i3(t), e);
      }
      function nh(t, e) {
        return Ft3(t, bu(t), e);
      }
      function Qn2(t, e) {
        return function(n2, r2) {
          var u3 = b3(n2) ? uc : xf2, o2 = e ? e() : {};
          return u3(n2, t, E3(r2, 2), o2);
        };
      }
      function Fe(t) {
        return H(function(e, n2) {
          var r2 = -1, u3 = n2.length, o2 = u3 > 1 ? n2[u3 - 1] : i3, c2 = u3 > 2 ? n2[2] : i3;
          for (o2 = t.length > 3 && typeof o2 == "function" ? (u3--, o2) : i3, c2 && it3(n2[0], n2[1], c2) && (o2 = u3 < 3 ? i3 : o2, u3 = 1), e = M4(e); ++r2 < u3; ) {
            var f3 = n2[r2];
            f3 && t(e, f3, r2, o2);
          }
          return e;
        });
      }
      function mu2(t, e) {
        return function(n2, r2) {
          if (n2 == null)
            return n2;
          if (!at3(n2))
            return t(n2, r2);
          for (var u3 = n2.length, o2 = e ? u3 : -1, c2 = M4(n2); (e ? o2-- : ++o2 < u3) && r2(c2[o2], o2, c2) !== false; )
            ;
          return n2;
        };
      }
      function wu(t) {
        return function(e, n2, r2) {
          for (var u3 = -1, o2 = M4(e), c2 = r2(e), f3 = c2.length; f3--; ) {
            var l = c2[t ? f3 : ++u3];
            if (n2(o2[l], l, o2) === false)
              break;
          }
          return e;
        };
      }
      function rh(t, e, n2) {
        var r2 = e & vt2, u3 = ln3(t);
        function o2() {
          var c2 = this && this !== j4 && this instanceof o2 ? u3 : t;
          return c2.apply(r2 ? n2 : this, arguments);
        }
        return o2;
      }
      function Pu2(t) {
        return function(e) {
          e = q3(e);
          var n2 = Le2(e) ? St2(e) : i3, r2 = n2 ? n2[0] : e.charAt(0), u3 = n2 ? ce3(n2, 1).join("") : e.slice(1);
          return r2[t]() + u3;
        };
      }
      function We2(t) {
        return function(e) {
          return Nr3(ma2(_a2(e).replace(Jo, "")), t, "");
        };
      }
      function ln3(t) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new t();
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3]);
            case 5:
              return new t(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var n2 = qe(t.prototype), r2 = t.apply(n2, e);
          return K3(r2) ? r2 : n2;
        };
      }
      function ih(t, e, n2) {
        var r2 = ln3(t);
        function u3() {
          for (var o2 = arguments.length, c2 = d2(o2), f3 = o2, l = Me(u3); f3--; )
            c2[f3] = arguments[f3];
          var v4 = o2 < 3 && c2[0] !== l && c2[o2 - 1] !== l ? [] : ie2(c2, l);
          if (o2 -= v4.length, o2 < n2)
            return Eu2(t, e, Vn2, u3.placeholder, i3, c2, v4, i3, i3, n2 - o2);
          var _2 = this && this !== j4 && this instanceof u3 ? r2 : t;
          return ft2(_2, this, c2);
        }
        return u3;
      }
      function Cu2(t) {
        return function(e, n2, r2) {
          var u3 = M4(e);
          if (!at3(e)) {
            var o2 = E3(n2, 3);
            e = k2(e), n2 = function(f3) {
              return o2(u3[f3], f3, u3);
            };
          }
          var c2 = t(e, n2, r2);
          return c2 > -1 ? u3[o2 ? e[c2] : c2] : i3;
        };
      }
      function Au(t) {
        return Xt2(function(e) {
          var n2 = e.length, r2 = n2, u3 = Pt2.prototype.thru;
          for (t && e.reverse(); r2--; ) {
            var o2 = e[r2];
            if (typeof o2 != "function")
              throw new wt2(y5);
            if (u3 && !c2 && er3(o2) == "wrapper")
              var c2 = new Pt2([], true);
          }
          for (r2 = c2 ? r2 : n2; ++r2 < n2; ) {
            o2 = e[r2];
            var f3 = er3(o2), l = f3 == "wrapper" ? gi2(o2) : i3;
            l && wi(l[0]) && l[1] == (Gt3 | Nt2 | $t3 | Je) && !l[4].length && l[9] == 1 ? c2 = c2[er3(l[0])].apply(c2, l[3]) : c2 = o2.length == 1 && wi(o2) ? c2[f3]() : c2.thru(o2);
          }
          return function() {
            var v4 = arguments, _2 = v4[0];
            if (c2 && v4.length == 1 && b3(_2))
              return c2.plant(_2).value();
            for (var m2 = 0, C4 = n2 ? e[m2].apply(this, v4) : _2; ++m2 < n2; )
              C4 = e[m2].call(this, C4);
            return C4;
          };
        });
      }
      function Vn2(t, e, n2, r2, u3, o2, c2, f3, l, v4) {
        var _2 = e & Gt3, m2 = e & vt2, C4 = e & he3, x4 = e & (Nt2 | ye3), S2 = e & gr3, L2 = C4 ? i3 : ln3(t);
        function O3() {
          for (var D3 = arguments.length, $3 = d2(D3), dt3 = D3; dt3--; )
            $3[dt3] = arguments[dt3];
          if (x4)
            var st3 = Me(O3), gt3 = gc($3, st3);
          if (r2 && ($3 = vu2($3, r2, u3, x4)), o2 && ($3 = _u2($3, o2, c2, x4)), D3 -= gt3, x4 && D3 < v4) {
            var X = ie2($3, st3);
            return Eu2(t, e, Vn2, O3.placeholder, n2, $3, X, f3, l, v4 - D3);
          }
          var bt2 = m2 ? n2 : this, jt3 = C4 ? bt2[t] : t;
          return D3 = $3.length, f3 ? $3 = xh2($3, f3) : S2 && D3 > 1 && $3.reverse(), _2 && l < D3 && ($3.length = l), this && this !== j4 && this instanceof O3 && (jt3 = L2 || ln3(jt3)), jt3.apply(bt2, $3);
        }
        return O3;
      }
      function Iu2(t, e) {
        return function(n2, r2) {
          return Lf2(n2, t, e(r2), {});
        };
      }
      function kn2(t, e) {
        return function(n2, r2) {
          var u3;
          if (n2 === i3 && r2 === i3)
            return e;
          if (n2 !== i3 && (u3 = n2), r2 !== i3) {
            if (u3 === i3)
              return r2;
            typeof n2 == "string" || typeof r2 == "string" ? (n2 = lt3(n2), r2 = lt3(r2)) : (n2 = ou2(n2), r2 = ou2(r2)), u3 = t(n2, r2);
          }
          return u3;
        };
      }
      function hi2(t) {
        return Xt2(function(e) {
          return e = z4(e, ht3(E3())), H(function(n2) {
            var r2 = this;
            return t(e, function(u3) {
              return ft2(u3, r2, n2);
            });
          });
        });
      }
      function jn2(t, e) {
        e = e === i3 ? " " : lt3(e);
        var n2 = e.length;
        if (n2 < 2)
          return n2 ? ii2(e, t) : e;
        var r2 = ii2(e, Fn(t / He(e)));
        return Le2(e) ? ce3(St2(r2), 0, t).join("") : r2.slice(0, t);
      }
      function sh(t, e, n2, r2) {
        var u3 = e & vt2, o2 = ln3(t);
        function c2() {
          for (var f3 = -1, l = arguments.length, v4 = -1, _2 = r2.length, m2 = d2(_2 + l), C4 = this && this !== j4 && this instanceof c2 ? o2 : t; ++v4 < _2; )
            m2[v4] = r2[v4];
          for (; l--; )
            m2[v4++] = arguments[++f3];
          return ft2(C4, u3 ? n2 : this, m2);
        }
        return c2;
      }
      function xu2(t) {
        return function(e, n2, r2) {
          return r2 && typeof r2 != "number" && it3(e, n2, r2) && (n2 = r2 = i3), e = kt3(e), n2 === i3 ? (n2 = e, e = 0) : n2 = kt3(n2), r2 = r2 === i3 ? e < n2 ? 1 : -1 : kt3(r2), zf2(e, n2, r2, t);
        };
      }
      function tr3(t) {
        return function(e, n2) {
          return typeof e == "string" && typeof n2 == "string" || (e = xt2(e), n2 = xt2(n2)), t(e, n2);
        };
      }
      function Eu2(t, e, n2, r2, u3, o2, c2, f3, l, v4) {
        var _2 = e & Nt2, m2 = _2 ? c2 : i3, C4 = _2 ? i3 : c2, x4 = _2 ? o2 : i3, S2 = _2 ? i3 : o2;
        e |= _2 ? $t3 : Se, e &= ~(_2 ? Se : $t3), e & Gi2 || (e &= ~(vt2 | he3));
        var L2 = [t, e, u3, x4, m2, S2, C4, f3, l, v4], O3 = n2.apply(i3, L2);
        return wi(t) && Uu2(O3, L2), O3.placeholder = r2, qu2(O3, t, e);
      }
      function li2(t) {
        var e = Q4[t];
        return function(n2, r2) {
          if (n2 = xt2(n2), r2 = r2 == null ? 0 : et3(T3(r2), 292), r2 && qs4(n2)) {
            var u3 = (q3(n2) + "e").split("e"), o2 = e(u3[0] + "e" + (+u3[1] + r2));
            return u3 = (q3(o2) + "e").split("e"), +(u3[0] + "e" + (+u3[1] - r2));
          }
          return e(n2);
        };
      }
      var uh2 = $e2 && 1 / Rn3(new $e2([, -0]))[1] == le3 ? function(t) {
        return new $e2(t);
      } : Di3;
      function yu(t) {
        return function(e) {
          var n2 = nt3(e);
          return n2 == Et2 ? Br3(e) : n2 == yt3 ? Ac(e) : dc(e, t(e));
        };
      }
      function Zt3(t, e, n2, r2, u3, o2, c2, f3) {
        var l = e & he3;
        if (!l && typeof t != "function")
          throw new wt2(y5);
        var v4 = r2 ? r2.length : 0;
        if (v4 || (e &= ~($t3 | Se), r2 = u3 = i3), c2 = c2 === i3 ? c2 : V2(T3(c2), 0), f3 = f3 === i3 ? f3 : T3(f3), v4 -= u3 ? u3.length : 0, e & Se) {
          var _2 = r2, m2 = u3;
          r2 = u3 = i3;
        }
        var C4 = l ? i3 : gi2(t), x4 = [t, e, n2, r2, u3, _2, m2, o2, c2, f3];
        if (C4 && Ch2(x4, C4), t = x4[0], e = x4[1], n2 = x4[2], r2 = x4[3], u3 = x4[4], f3 = x4[9] = x4[9] === i3 ? l ? 0 : t.length : V2(x4[9] - v4, 0), !f3 && e & (Nt2 | ye3) && (e &= ~(Nt2 | ye3)), !e || e == vt2)
          var S2 = rh(t, e, n2);
        else
          e == Nt2 || e == ye3 ? S2 = ih(t, e, f3) : (e == $t3 || e == (vt2 | $t3)) && !u3.length ? S2 = sh(t, e, n2, r2) : S2 = Vn2.apply(i3, x4);
        var L2 = C4 ? uu2 : Uu2;
        return qu2(L2(S2, x4), t, e);
      }
      function Su2(t, e, n2, r2) {
        return t === i3 || Rt2(t, Ne[n2]) && !W.call(r2, n2) ? e : t;
      }
      function Ou2(t, e, n2, r2, u3, o2) {
        return K3(t) && K3(e) && (o2.set(e, t), Yn2(t, e, i3, Ou2, o2), o2.delete(e)), t;
      }
      function ah(t) {
        return gn3(t) ? i3 : t;
      }
      function Ru2(t, e, n2, r2, u3, o2) {
        var c2 = n2 & Ee2, f3 = t.length, l = e.length;
        if (f3 != l && !(c2 && l > f3))
          return false;
        var v4 = o2.get(t), _2 = o2.get(e);
        if (v4 && _2)
          return v4 == e && _2 == t;
        var m2 = -1, C4 = true, x4 = n2 & mn3 ? new ve3() : i3;
        for (o2.set(t, e), o2.set(e, t); ++m2 < f3; ) {
          var S2 = t[m2], L2 = e[m2];
          if (r2)
            var O3 = c2 ? r2(L2, S2, m2, e, t, o2) : r2(S2, L2, m2, t, e, o2);
          if (O3 !== i3) {
            if (O3)
              continue;
            C4 = false;
            break;
          }
          if (x4) {
            if (!$r3(e, function(D3, $3) {
              if (!tn3(x4, $3) && (S2 === D3 || u3(S2, D3, n2, r2, o2)))
                return x4.push($3);
            })) {
              C4 = false;
              break;
            }
          } else if (!(S2 === L2 || u3(S2, L2, n2, r2, o2))) {
            C4 = false;
            break;
          }
        }
        return o2.delete(t), o2.delete(e), C4;
      }
      function oh(t, e, n2, r2, u3, o2, c2) {
        switch (n2) {
          case Re3:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return false;
            t = t.buffer, e = e.buffer;
          case je:
            return !(t.byteLength != e.byteLength || !o2(new Nn2(t), new Nn2(e)));
          case Ye:
          case Ze4:
          case Xe3:
            return Rt2(+t, +e);
          case Cn3:
            return t.name == e.name && t.message == e.message;
          case Qe2:
          case Ve:
            return t == e + "";
          case Et2:
            var f3 = Br3;
          case yt3:
            var l = r2 & Ee2;
            if (f3 || (f3 = Rn3), t.size != e.size && !l)
              return false;
            var v4 = c2.get(t);
            if (v4)
              return v4 == e;
            r2 |= mn3, c2.set(t, e);
            var _2 = Ru2(f3(t), f3(e), r2, u3, o2, c2);
            return c2.delete(t), _2;
          case In3:
            if (un3)
              return un3.call(t) == un3.call(e);
        }
        return false;
      }
      function ch2(t, e, n2, r2, u3, o2) {
        var c2 = n2 & Ee2, f3 = pi3(t), l = f3.length, v4 = pi3(e), _2 = v4.length;
        if (l != _2 && !c2)
          return false;
        for (var m2 = l; m2--; ) {
          var C4 = f3[m2];
          if (!(c2 ? C4 in e : W.call(e, C4)))
            return false;
        }
        var x4 = o2.get(t), S2 = o2.get(e);
        if (x4 && S2)
          return x4 == e && S2 == t;
        var L2 = true;
        o2.set(t, e), o2.set(e, t);
        for (var O3 = c2; ++m2 < l; ) {
          C4 = f3[m2];
          var D3 = t[C4], $3 = e[C4];
          if (r2)
            var dt3 = c2 ? r2($3, D3, C4, e, t, o2) : r2(D3, $3, C4, t, e, o2);
          if (!(dt3 === i3 ? D3 === $3 || u3(D3, $3, n2, r2, o2) : dt3)) {
            L2 = false;
            break;
          }
          O3 || (O3 = C4 == "constructor");
        }
        if (L2 && !O3) {
          var st3 = t.constructor, gt3 = e.constructor;
          st3 != gt3 && "constructor" in t && "constructor" in e && !(typeof st3 == "function" && st3 instanceof st3 && typeof gt3 == "function" && gt3 instanceof gt3) && (L2 = false);
        }
        return o2.delete(t), o2.delete(e), L2;
      }
      function Xt2(t) {
        return Ci2(Nu2(t, i3, zu2), t + "");
      }
      function pi3(t) {
        return Xs3(t, k2, _i3);
      }
      function di3(t) {
        return Xs3(t, ot3, bu);
      }
      var gi2 = Mn ? function(t) {
        return Mn.get(t);
      } : Di3;
      function er3(t) {
        for (var e = t.name + "", n2 = Ue[e], r2 = W.call(Ue, e) ? n2.length : 0; r2--; ) {
          var u3 = n2[r2], o2 = u3.func;
          if (o2 == null || o2 == t)
            return u3.name;
        }
        return e;
      }
      function Me(t) {
        var e = W.call(a2, "placeholder") ? a2 : t;
        return e.placeholder;
      }
      function E3() {
        var t = a2.iteratee || Li2;
        return t = t === Li2 ? ks3 : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function nr3(t, e) {
        var n2 = t.__data__;
        return _h2(e) ? n2[typeof e == "string" ? "string" : "hash"] : n2.map;
      }
      function vi(t) {
        for (var e = k2(t), n2 = e.length; n2--; ) {
          var r2 = e[n2], u3 = t[r2];
          e[n2] = [r2, u3, Hu2(u3)];
        }
        return e;
      }
      function we4(t, e) {
        var n2 = wc(t, e);
        return Vs3(n2) ? n2 : i3;
      }
      function fh(t) {
        var e = W.call(t, de2), n2 = t[de2];
        try {
          t[de2] = i3;
          var r2 = true;
        } catch {
        }
        var u3 = Hn2.call(t);
        return r2 && (e ? t[de2] = n2 : delete t[de2]), u3;
      }
      var _i3 = zr3 ? function(t) {
        return t == null ? [] : (t = M4(t), ne3(zr3(t), function(e) {
          return $s3.call(t, e);
        }));
      } : Ni2, bu = zr3 ? function(t) {
        for (var e = []; t; )
          re2(e, _i3(t)), t = $n2(t);
        return e;
      } : Ni2, nt3 = rt3;
      (Kr3 && nt3(new Kr3(new ArrayBuffer(1))) != Re3 || nn3 && nt3(new nn3()) != Et2 || Jr3 && nt3(Jr3.resolve()) != Ji2 || $e2 && nt3(new $e2()) != yt3 || rn3 && nt3(new rn3()) != ke) && (nt3 = function(t) {
        var e = rt3(t), n2 = e == zt3 ? t.constructor : i3, r2 = n2 ? Pe3(n2) : "";
        if (r2)
          switch (r2) {
            case Kc:
              return Re3;
            case Jc:
              return Et2;
            case Yc:
              return Ji2;
            case Zc:
              return yt3;
            case Xc:
              return ke;
          }
        return e;
      });
      function hh2(t, e, n2) {
        for (var r2 = -1, u3 = n2.length; ++r2 < u3; ) {
          var o2 = n2[r2], c2 = o2.size;
          switch (o2.type) {
            case "drop":
              t += c2;
              break;
            case "dropRight":
              e -= c2;
              break;
            case "take":
              e = et3(e, t + c2);
              break;
            case "takeRight":
              t = V2(t, e - c2);
              break;
          }
        }
        return { start: t, end: e };
      }
      function lh2(t) {
        var e = t.match(_o2);
        return e ? e[1].split(mo) : [];
      }
      function Tu2(t, e, n2) {
        e = oe4(e, t);
        for (var r2 = -1, u3 = e.length, o2 = false; ++r2 < u3; ) {
          var c2 = Wt2(e[r2]);
          if (!(o2 = t != null && n2(t, c2)))
            break;
          t = t[c2];
        }
        return o2 || ++r2 != u3 ? o2 : (u3 = t == null ? 0 : t.length, !!u3 && cr3(u3) && Qt2(c2, u3) && (b3(t) || Ce4(t)));
      }
      function ph2(t) {
        var e = t.length, n2 = new t.constructor(e);
        return e && typeof t[0] == "string" && W.call(t, "index") && (n2.index = t.index, n2.input = t.input), n2;
      }
      function Lu2(t) {
        return typeof t.constructor == "function" && !pn3(t) ? qe($n2(t)) : {};
      }
      function dh2(t, e, n2) {
        var r2 = t.constructor;
        switch (e) {
          case je:
            return fi2(t);
          case Ye:
          case Ze4:
            return new r2(+t);
          case Re3:
            return Vf2(t, n2);
          case vr3:
          case _r3:
          case mr3:
          case wr3:
          case Pr2:
          case Cr3:
          case Ar3:
          case Ir3:
          case xr3:
            return du2(t, n2);
          case Et2:
            return new r2();
          case Xe3:
          case Ve:
            return new r2(t);
          case Qe2:
            return kf2(t);
          case yt3:
            return new r2();
          case In3:
            return jf2(t);
        }
      }
      function gh2(t, e) {
        var n2 = e.length;
        if (!n2)
          return t;
        var r2 = n2 - 1;
        return e[r2] = (n2 > 1 ? "& " : "") + e[r2], e = e.join(n2 > 2 ? ", " : " "), t.replace(vo2, `{
/* [wrapped with ` + e + `] */
`);
      }
      function vh2(t) {
        return b3(t) || Ce4(t) || !!(Us3 && t && t[Us3]);
      }
      function Qt2(t, e) {
        var n2 = typeof t;
        return e = e ?? ee3, !!e && (n2 == "number" || n2 != "symbol" && So2.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }
      function it3(t, e, n2) {
        if (!K3(n2))
          return false;
        var r2 = typeof e;
        return (r2 == "number" ? at3(n2) && Qt2(e, n2.length) : r2 == "string" && e in n2) ? Rt2(n2[e], t) : false;
      }
      function mi2(t, e) {
        if (b3(t))
          return false;
        var n2 = typeof t;
        return n2 == "number" || n2 == "symbol" || n2 == "boolean" || t == null || pt3(t) ? true : ho2.test(t) || !fo.test(t) || e != null && t in M4(e);
      }
      function _h2(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
      }
      function wi(t) {
        var e = er3(t), n2 = a2[e];
        if (typeof n2 != "function" || !(e in N2.prototype))
          return false;
        if (t === n2)
          return true;
        var r2 = gi2(n2);
        return !!r2 && t === r2[0];
      }
      function mh2(t) {
        return !!Hs3 && Hs3 in t;
      }
      var wh2 = Tn2 ? Vt2 : $i2;
      function pn3(t) {
        var e = t && t.constructor, n2 = typeof e == "function" && e.prototype || Ne;
        return t === n2;
      }
      function Hu2(t) {
        return t === t && !K3(t);
      }
      function Du2(t, e) {
        return function(n2) {
          return n2 == null ? false : n2[t] === e && (e !== i3 || t in M4(n2));
        };
      }
      function Ph(t) {
        var e = ar3(t, function(r2) {
          return n2.size === Ke && n2.clear(), r2;
        }), n2 = e.cache;
        return e;
      }
      function Ch2(t, e) {
        var n2 = t[1], r2 = e[1], u3 = n2 | r2, o2 = u3 < (vt2 | he3 | Gt3), c2 = r2 == Gt3 && n2 == Nt2 || r2 == Gt3 && n2 == Je && t[7].length <= e[8] || r2 == (Gt3 | Je) && e[7].length <= e[8] && n2 == Nt2;
        if (!(o2 || c2))
          return t;
        r2 & vt2 && (t[2] = e[2], u3 |= n2 & vt2 ? 0 : Gi2);
        var f3 = e[3];
        if (f3) {
          var l = t[3];
          t[3] = l ? vu2(l, f3, e[4]) : f3, t[4] = l ? ie2(t[3], Ie2) : e[4];
        }
        return f3 = e[5], f3 && (l = t[5], t[5] = l ? _u2(l, f3, e[6]) : f3, t[6] = l ? ie2(t[5], Ie2) : e[6]), f3 = e[7], f3 && (t[7] = f3), r2 & Gt3 && (t[8] = t[8] == null ? e[8] : et3(t[8], e[8])), t[9] == null && (t[9] = e[9]), t[0] = e[0], t[1] = u3, t;
      }
      function Ah2(t) {
        var e = [];
        if (t != null)
          for (var n2 in M4(t))
            e.push(n2);
        return e;
      }
      function Ih2(t) {
        return Hn2.call(t);
      }
      function Nu2(t, e, n2) {
        return e = V2(e === i3 ? t.length - 1 : e, 0), function() {
          for (var r2 = arguments, u3 = -1, o2 = V2(r2.length - e, 0), c2 = d2(o2); ++u3 < o2; )
            c2[u3] = r2[e + u3];
          u3 = -1;
          for (var f3 = d2(e + 1); ++u3 < e; )
            f3[u3] = r2[u3];
          return f3[e] = n2(c2), ft2(t, this, f3);
        };
      }
      function $u2(t, e) {
        return e.length < 2 ? t : me3(t, At2(e, 0, -1));
      }
      function xh2(t, e) {
        for (var n2 = t.length, r2 = et3(e.length, n2), u3 = ut3(t); r2--; ) {
          var o2 = e[r2];
          t[r2] = Qt2(o2, n2) ? u3[o2] : i3;
        }
        return t;
      }
      function Pi2(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
          return t[e];
      }
      var Uu2 = Fu2(uu2), dn3 = qc || function(t, e) {
        return j4.setTimeout(t, e);
      }, Ci2 = Fu2(Yf2);
      function qu2(t, e, n2) {
        var r2 = e + "";
        return Ci2(t, gh2(r2, Eh2(lh2(r2), n2)));
      }
      function Fu2(t) {
        var e = 0, n2 = 0;
        return function() {
          var r2 = Bc(), u3 = za2 - (r2 - n2);
          if (n2 = r2, u3 > 0) {
            if (++e >= Ga2)
              return arguments[0];
          } else
            e = 0;
          return t.apply(i3, arguments);
        };
      }
      function rr3(t, e) {
        var n2 = -1, r2 = t.length, u3 = r2 - 1;
        for (e = e === i3 ? r2 : e; ++n2 < e; ) {
          var o2 = ri2(n2, u3), c2 = t[o2];
          t[o2] = t[n2], t[n2] = c2;
        }
        return t.length = e, t;
      }
      var Wu2 = Ph(function(t) {
        var e = [];
        return t.charCodeAt(0) === 46 && e.push(""), t.replace(lo2, function(n2, r2, u3, o2) {
          e.push(u3 ? o2.replace(Co2, "$1") : r2 || n2);
        }), e;
      });
      function Wt2(t) {
        if (typeof t == "string" || pt3(t))
          return t;
        var e = t + "";
        return e == "0" && 1 / t == -le3 ? "-0" : e;
      }
      function Pe3(t) {
        if (t != null) {
          try {
            return Ln2.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Eh2(t, e) {
        return mt2(Qa2, function(n2) {
          var r2 = "_." + n2[0];
          e & n2[1] && !Sn3(t, r2) && t.push(r2);
        }), t.sort();
      }
      function Mu2(t) {
        if (t instanceof N2)
          return t.clone();
        var e = new Pt2(t.__wrapped__, t.__chain__);
        return e.__actions__ = ut3(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
      }
      function yh2(t, e, n2) {
        (n2 ? it3(t, e, n2) : e === i3) ? e = 1 : e = V2(T3(e), 0);
        var r2 = t == null ? 0 : t.length;
        if (!r2 || e < 1)
          return [];
        for (var u3 = 0, o2 = 0, c2 = d2(Fn(r2 / e)); u3 < r2; )
          c2[o2++] = At2(t, u3, u3 += e);
        return c2;
      }
      function Sh2(t) {
        for (var e = -1, n2 = t == null ? 0 : t.length, r2 = 0, u3 = []; ++e < n2; ) {
          var o2 = t[e];
          o2 && (u3[r2++] = o2);
        }
        return u3;
      }
      function Oh() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var e = d2(t - 1), n2 = arguments[0], r2 = t; r2--; )
          e[r2 - 1] = arguments[r2];
        return re2(b3(n2) ? ut3(n2) : [n2], tt3(e, 1));
      }
      var Rh2 = H(function(t, e) {
        return Z2(t) ? on3(t, tt3(e, 1, Z2, true)) : [];
      }), bh2 = H(function(t, e) {
        var n2 = It2(e);
        return Z2(n2) && (n2 = i3), Z2(t) ? on3(t, tt3(e, 1, Z2, true), E3(n2, 2)) : [];
      }), Th = H(function(t, e) {
        var n2 = It2(e);
        return Z2(n2) && (n2 = i3), Z2(t) ? on3(t, tt3(e, 1, Z2, true), i3, n2) : [];
      });
      function Lh(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        return r2 ? (e = n2 || e === i3 ? 1 : T3(e), At2(t, e < 0 ? 0 : e, r2)) : [];
      }
      function Hh(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        return r2 ? (e = n2 || e === i3 ? 1 : T3(e), e = r2 - e, At2(t, 0, e < 0 ? 0 : e)) : [];
      }
      function Dh(t, e) {
        return t && t.length ? Xn2(t, E3(e, 3), true, true) : [];
      }
      function Nh2(t, e) {
        return t && t.length ? Xn2(t, E3(e, 3), true) : [];
      }
      function $h(t, e, n2, r2) {
        var u3 = t == null ? 0 : t.length;
        return u3 ? (n2 && typeof n2 != "number" && it3(t, e, n2) && (n2 = 0, r2 = u3), Of2(t, e, n2, r2)) : [];
      }
      function Bu2(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        if (!r2)
          return -1;
        var u3 = n2 == null ? 0 : T3(n2);
        return u3 < 0 && (u3 = V2(r2 + u3, 0)), On3(t, E3(e, 3), u3);
      }
      function Gu2(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        if (!r2)
          return -1;
        var u3 = r2 - 1;
        return n2 !== i3 && (u3 = T3(n2), u3 = n2 < 0 ? V2(r2 + u3, 0) : et3(u3, r2 - 1)), On3(t, E3(e, 3), u3, true);
      }
      function zu2(t) {
        var e = t == null ? 0 : t.length;
        return e ? tt3(t, 1) : [];
      }
      function Uh(t) {
        var e = t == null ? 0 : t.length;
        return e ? tt3(t, le3) : [];
      }
      function qh(t, e) {
        var n2 = t == null ? 0 : t.length;
        return n2 ? (e = e === i3 ? 1 : T3(e), tt3(t, e)) : [];
      }
      function Fh(t) {
        for (var e = -1, n2 = t == null ? 0 : t.length, r2 = {}; ++e < n2; ) {
          var u3 = t[e];
          r2[u3[0]] = u3[1];
        }
        return r2;
      }
      function Ku2(t) {
        return t && t.length ? t[0] : i3;
      }
      function Wh(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        if (!r2)
          return -1;
        var u3 = n2 == null ? 0 : T3(n2);
        return u3 < 0 && (u3 = V2(r2 + u3, 0)), Te2(t, e, u3);
      }
      function Mh2(t) {
        var e = t == null ? 0 : t.length;
        return e ? At2(t, 0, -1) : [];
      }
      var Bh2 = H(function(t) {
        var e = z4(t, oi2);
        return e.length && e[0] === t[0] ? kr3(e) : [];
      }), Gh = H(function(t) {
        var e = It2(t), n2 = z4(t, oi2);
        return e === It2(n2) ? e = i3 : n2.pop(), n2.length && n2[0] === t[0] ? kr3(n2, E3(e, 2)) : [];
      }), zh = H(function(t) {
        var e = It2(t), n2 = z4(t, oi2);
        return e = typeof e == "function" ? e : i3, e && n2.pop(), n2.length && n2[0] === t[0] ? kr3(n2, i3, e) : [];
      });
      function Kh(t, e) {
        return t == null ? "" : Wc.call(t, e);
      }
      function It2(t) {
        var e = t == null ? 0 : t.length;
        return e ? t[e - 1] : i3;
      }
      function Jh(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        if (!r2)
          return -1;
        var u3 = r2;
        return n2 !== i3 && (u3 = T3(n2), u3 = u3 < 0 ? V2(r2 + u3, 0) : et3(u3, r2 - 1)), e === e ? xc(t, e, u3) : On3(t, Es3, u3, true);
      }
      function Yh(t, e) {
        return t && t.length ? nu2(t, T3(e)) : i3;
      }
      var Zh = H(Ju2);
      function Ju2(t, e) {
        return t && t.length && e && e.length ? ni2(t, e) : t;
      }
      function Xh(t, e, n2) {
        return t && t.length && e && e.length ? ni2(t, e, E3(n2, 2)) : t;
      }
      function Qh(t, e, n2) {
        return t && t.length && e && e.length ? ni2(t, e, i3, n2) : t;
      }
      var Vh = Xt2(function(t, e) {
        var n2 = t == null ? 0 : t.length, r2 = Zr2(t, e);
        return su2(t, z4(e, function(u3) {
          return Qt2(u3, n2) ? +u3 : u3;
        }).sort(gu2)), r2;
      });
      function kh(t, e) {
        var n2 = [];
        if (!(t && t.length))
          return n2;
        var r2 = -1, u3 = [], o2 = t.length;
        for (e = E3(e, 3); ++r2 < o2; ) {
          var c2 = t[r2];
          e(c2, r2, t) && (n2.push(c2), u3.push(r2));
        }
        return su2(t, u3), n2;
      }
      function Ai(t) {
        return t == null ? t : zc.call(t);
      }
      function jh(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        return r2 ? (n2 && typeof n2 != "number" && it3(t, e, n2) ? (e = 0, n2 = r2) : (e = e == null ? 0 : T3(e), n2 = n2 === i3 ? r2 : T3(n2)), At2(t, e, n2)) : [];
      }
      function tl(t, e) {
        return Zn2(t, e);
      }
      function el(t, e, n2) {
        return si2(t, e, E3(n2, 2));
      }
      function nl(t, e) {
        var n2 = t == null ? 0 : t.length;
        if (n2) {
          var r2 = Zn2(t, e);
          if (r2 < n2 && Rt2(t[r2], e))
            return r2;
        }
        return -1;
      }
      function rl(t, e) {
        return Zn2(t, e, true);
      }
      function il(t, e, n2) {
        return si2(t, e, E3(n2, 2), true);
      }
      function sl(t, e) {
        var n2 = t == null ? 0 : t.length;
        if (n2) {
          var r2 = Zn2(t, e, true) - 1;
          if (Rt2(t[r2], e))
            return r2;
        }
        return -1;
      }
      function ul(t) {
        return t && t.length ? au2(t) : [];
      }
      function al(t, e) {
        return t && t.length ? au2(t, E3(e, 2)) : [];
      }
      function ol(t) {
        var e = t == null ? 0 : t.length;
        return e ? At2(t, 1, e) : [];
      }
      function cl(t, e, n2) {
        return t && t.length ? (e = n2 || e === i3 ? 1 : T3(e), At2(t, 0, e < 0 ? 0 : e)) : [];
      }
      function fl(t, e, n2) {
        var r2 = t == null ? 0 : t.length;
        return r2 ? (e = n2 || e === i3 ? 1 : T3(e), e = r2 - e, At2(t, e < 0 ? 0 : e, r2)) : [];
      }
      function hl(t, e) {
        return t && t.length ? Xn2(t, E3(e, 3), false, true) : [];
      }
      function ll(t, e) {
        return t && t.length ? Xn2(t, E3(e, 3)) : [];
      }
      var pl = H(function(t) {
        return ae4(tt3(t, 1, Z2, true));
      }), dl = H(function(t) {
        var e = It2(t);
        return Z2(e) && (e = i3), ae4(tt3(t, 1, Z2, true), E3(e, 2));
      }), gl = H(function(t) {
        var e = It2(t);
        return e = typeof e == "function" ? e : i3, ae4(tt3(t, 1, Z2, true), i3, e);
      });
      function vl(t) {
        return t && t.length ? ae4(t) : [];
      }
      function _l(t, e) {
        return t && t.length ? ae4(t, E3(e, 2)) : [];
      }
      function ml(t, e) {
        return e = typeof e == "function" ? e : i3, t && t.length ? ae4(t, i3, e) : [];
      }
      function Ii2(t) {
        if (!(t && t.length))
          return [];
        var e = 0;
        return t = ne3(t, function(n2) {
          if (Z2(n2))
            return e = V2(n2.length, e), true;
        }), Wr3(e, function(n2) {
          return z4(t, Ur3(n2));
        });
      }
      function Yu2(t, e) {
        if (!(t && t.length))
          return [];
        var n2 = Ii2(t);
        return e == null ? n2 : z4(n2, function(r2) {
          return ft2(e, i3, r2);
        });
      }
      var wl = H(function(t, e) {
        return Z2(t) ? on3(t, e) : [];
      }), Pl = H(function(t) {
        return ai2(ne3(t, Z2));
      }), Cl = H(function(t) {
        var e = It2(t);
        return Z2(e) && (e = i3), ai2(ne3(t, Z2), E3(e, 2));
      }), Al = H(function(t) {
        var e = It2(t);
        return e = typeof e == "function" ? e : i3, ai2(ne3(t, Z2), i3, e);
      }), Il = H(Ii2);
      function xl(t, e) {
        return hu2(t || [], e || [], an3);
      }
      function El(t, e) {
        return hu2(t || [], e || [], hn3);
      }
      var yl = H(function(t) {
        var e = t.length, n2 = e > 1 ? t[e - 1] : i3;
        return n2 = typeof n2 == "function" ? (t.pop(), n2) : i3, Yu2(t, n2);
      });
      function Zu2(t) {
        var e = a2(t);
        return e.__chain__ = true, e;
      }
      function Sl(t, e) {
        return e(t), t;
      }
      function ir3(t, e) {
        return e(t);
      }
      var Ol = Xt2(function(t) {
        var e = t.length, n2 = e ? t[0] : 0, r2 = this.__wrapped__, u3 = function(o2) {
          return Zr2(o2, t);
        };
        return e > 1 || this.__actions__.length || !(r2 instanceof N2) || !Qt2(n2) ? this.thru(u3) : (r2 = r2.slice(n2, +n2 + (e ? 1 : 0)), r2.__actions__.push({ func: ir3, args: [u3], thisArg: i3 }), new Pt2(r2, this.__chain__).thru(function(o2) {
          return e && !o2.length && o2.push(i3), o2;
        }));
      });
      function Rl() {
        return Zu2(this);
      }
      function bl() {
        return new Pt2(this.value(), this.__chain__);
      }
      function Tl() {
        this.__values__ === i3 && (this.__values__ = oa2(this.value()));
        var t = this.__index__ >= this.__values__.length, e = t ? i3 : this.__values__[this.__index__++];
        return { done: t, value: e };
      }
      function Ll() {
        return this;
      }
      function Hl(t) {
        for (var e, n2 = this; n2 instanceof Gn2; ) {
          var r2 = Mu2(n2);
          r2.__index__ = 0, r2.__values__ = i3, e ? u3.__wrapped__ = r2 : e = r2;
          var u3 = r2;
          n2 = n2.__wrapped__;
        }
        return u3.__wrapped__ = t, e;
      }
      function Dl() {
        var t = this.__wrapped__;
        if (t instanceof N2) {
          var e = t;
          return this.__actions__.length && (e = new N2(this)), e = e.reverse(), e.__actions__.push({ func: ir3, args: [Ai], thisArg: i3 }), new Pt2(e, this.__chain__);
        }
        return this.thru(Ai);
      }
      function Nl() {
        return fu2(this.__wrapped__, this.__actions__);
      }
      var $l = Qn2(function(t, e, n2) {
        W.call(t, n2) ? ++t[n2] : Yt3(t, n2, 1);
      });
      function Ul(t, e, n2) {
        var r2 = b3(t) ? Is4 : Sf2;
        return n2 && it3(t, e, n2) && (e = i3), r2(t, E3(e, 3));
      }
      function ql(t, e) {
        var n2 = b3(t) ? ne3 : Ys3;
        return n2(t, E3(e, 3));
      }
      var Fl = Cu2(Bu2), Wl = Cu2(Gu2);
      function Ml(t, e) {
        return tt3(sr3(t, e), 1);
      }
      function Bl(t, e) {
        return tt3(sr3(t, e), le3);
      }
      function Gl(t, e, n2) {
        return n2 = n2 === i3 ? 1 : T3(n2), tt3(sr3(t, e), n2);
      }
      function Xu2(t, e) {
        var n2 = b3(t) ? mt2 : ue3;
        return n2(t, E3(e, 3));
      }
      function Qu2(t, e) {
        var n2 = b3(t) ? ac : Js3;
        return n2(t, E3(e, 3));
      }
      var zl = Qn2(function(t, e, n2) {
        W.call(t, n2) ? t[n2].push(e) : Yt3(t, n2, [e]);
      });
      function Kl(t, e, n2, r2) {
        t = at3(t) ? t : Ge(t), n2 = n2 && !r2 ? T3(n2) : 0;
        var u3 = t.length;
        return n2 < 0 && (n2 = V2(u3 + n2, 0)), fr3(t) ? n2 <= u3 && t.indexOf(e, n2) > -1 : !!u3 && Te2(t, e, n2) > -1;
      }
      var Jl = H(function(t, e, n2) {
        var r2 = -1, u3 = typeof e == "function", o2 = at3(t) ? d2(t.length) : [];
        return ue3(t, function(c2) {
          o2[++r2] = u3 ? ft2(e, c2, n2) : cn3(c2, e, n2);
        }), o2;
      }), Yl = Qn2(function(t, e, n2) {
        Yt3(t, n2, e);
      });
      function sr3(t, e) {
        var n2 = b3(t) ? z4 : js3;
        return n2(t, E3(e, 3));
      }
      function Zl(t, e, n2, r2) {
        return t == null ? [] : (b3(e) || (e = e == null ? [] : [e]), n2 = r2 ? i3 : n2, b3(n2) || (n2 = n2 == null ? [] : [n2]), ru2(t, e, n2));
      }
      var Xl = Qn2(function(t, e, n2) {
        t[n2 ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function Ql(t, e, n2) {
        var r2 = b3(t) ? Nr3 : Ss4, u3 = arguments.length < 3;
        return r2(t, E3(e, 4), n2, u3, ue3);
      }
      function Vl(t, e, n2) {
        var r2 = b3(t) ? oc : Ss4, u3 = arguments.length < 3;
        return r2(t, E3(e, 4), n2, u3, Js3);
      }
      function kl(t, e) {
        var n2 = b3(t) ? ne3 : Ys3;
        return n2(t, or3(E3(e, 3)));
      }
      function jl(t) {
        var e = b3(t) ? Bs3 : Kf2;
        return e(t);
      }
      function tp(t, e, n2) {
        (n2 ? it3(t, e, n2) : e === i3) ? e = 1 : e = T3(e);
        var r2 = b3(t) ? Af2 : Jf2;
        return r2(t, e);
      }
      function ep(t) {
        var e = b3(t) ? If2 : Zf;
        return e(t);
      }
      function np(t) {
        if (t == null)
          return 0;
        if (at3(t))
          return fr3(t) ? He(t) : t.length;
        var e = nt3(t);
        return e == Et2 || e == yt3 ? t.size : ti2(t).length;
      }
      function rp(t, e, n2) {
        var r2 = b3(t) ? $r3 : Xf;
        return n2 && it3(t, e, n2) && (e = i3), r2(t, E3(e, 3));
      }
      var ip = H(function(t, e) {
        if (t == null)
          return [];
        var n2 = e.length;
        return n2 > 1 && it3(t, e[0], e[1]) ? e = [] : n2 > 2 && it3(e[0], e[1], e[2]) && (e = [e[0]]), ru2(t, tt3(e, 1), []);
      }), ur3 = Uc || function() {
        return j4.Date.now();
      };
      function sp(t, e) {
        if (typeof e != "function")
          throw new wt2(y5);
        return t = T3(t), function() {
          if (--t < 1)
            return e.apply(this, arguments);
        };
      }
      function Vu2(t, e, n2) {
        return e = n2 ? i3 : e, e = t && e == null ? t.length : e, Zt3(t, Gt3, i3, i3, i3, i3, e);
      }
      function ku2(t, e) {
        var n2;
        if (typeof e != "function")
          throw new wt2(y5);
        return t = T3(t), function() {
          return --t > 0 && (n2 = e.apply(this, arguments)), t <= 1 && (e = i3), n2;
        };
      }
      var xi2 = H(function(t, e, n2) {
        var r2 = vt2;
        if (n2.length) {
          var u3 = ie2(n2, Me(xi2));
          r2 |= $t3;
        }
        return Zt3(t, r2, e, n2, u3);
      }), ju2 = H(function(t, e, n2) {
        var r2 = vt2 | he3;
        if (n2.length) {
          var u3 = ie2(n2, Me(ju2));
          r2 |= $t3;
        }
        return Zt3(e, r2, t, n2, u3);
      });
      function ta2(t, e, n2) {
        e = n2 ? i3 : e;
        var r2 = Zt3(t, Nt2, i3, i3, i3, i3, i3, e);
        return r2.placeholder = ta2.placeholder, r2;
      }
      function ea2(t, e, n2) {
        e = n2 ? i3 : e;
        var r2 = Zt3(t, ye3, i3, i3, i3, i3, i3, e);
        return r2.placeholder = ea2.placeholder, r2;
      }
      function na2(t, e, n2) {
        var r2, u3, o2, c2, f3, l, v4 = 0, _2 = false, m2 = false, C4 = true;
        if (typeof t != "function")
          throw new wt2(y5);
        e = xt2(e) || 0, K3(n2) && (_2 = !!n2.leading, m2 = "maxWait" in n2, o2 = m2 ? V2(xt2(n2.maxWait) || 0, e) : o2, C4 = "trailing" in n2 ? !!n2.trailing : C4);
        function x4(X) {
          var bt2 = r2, jt3 = u3;
          return r2 = u3 = i3, v4 = X, c2 = t.apply(jt3, bt2), c2;
        }
        function S2(X) {
          return v4 = X, f3 = dn3(D3, e), _2 ? x4(X) : c2;
        }
        function L2(X) {
          var bt2 = X - l, jt3 = X - v4, Ca2 = e - bt2;
          return m2 ? et3(Ca2, o2 - jt3) : Ca2;
        }
        function O3(X) {
          var bt2 = X - l, jt3 = X - v4;
          return l === i3 || bt2 >= e || bt2 < 0 || m2 && jt3 >= o2;
        }
        function D3() {
          var X = ur3();
          if (O3(X))
            return $3(X);
          f3 = dn3(D3, L2(X));
        }
        function $3(X) {
          return f3 = i3, C4 && r2 ? x4(X) : (r2 = u3 = i3, c2);
        }
        function dt3() {
          f3 !== i3 && lu2(f3), v4 = 0, r2 = l = u3 = f3 = i3;
        }
        function st3() {
          return f3 === i3 ? c2 : $3(ur3());
        }
        function gt3() {
          var X = ur3(), bt2 = O3(X);
          if (r2 = arguments, u3 = this, l = X, bt2) {
            if (f3 === i3)
              return S2(l);
            if (m2)
              return lu2(f3), f3 = dn3(D3, e), x4(l);
          }
          return f3 === i3 && (f3 = dn3(D3, e)), c2;
        }
        return gt3.cancel = dt3, gt3.flush = st3, gt3;
      }
      var up = H(function(t, e) {
        return Ks3(t, 1, e);
      }), ap = H(function(t, e, n2) {
        return Ks3(t, xt2(e) || 0, n2);
      });
      function op(t) {
        return Zt3(t, gr3);
      }
      function ar3(t, e) {
        if (typeof t != "function" || e != null && typeof e != "function")
          throw new wt2(y5);
        var n2 = function() {
          var r2 = arguments, u3 = e ? e.apply(this, r2) : r2[0], o2 = n2.cache;
          if (o2.has(u3))
            return o2.get(u3);
          var c2 = t.apply(this, r2);
          return n2.cache = o2.set(u3, c2) || o2, c2;
        };
        return n2.cache = new (ar3.Cache || Jt3)(), n2;
      }
      ar3.Cache = Jt3;
      function or3(t) {
        if (typeof t != "function")
          throw new wt2(y5);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, e[0]);
            case 2:
              return !t.call(this, e[0], e[1]);
            case 3:
              return !t.call(this, e[0], e[1], e[2]);
          }
          return !t.apply(this, e);
        };
      }
      function cp(t) {
        return ku2(2, t);
      }
      var fp = Qf2(function(t, e) {
        e = e.length == 1 && b3(e[0]) ? z4(e[0], ht3(E3())) : z4(tt3(e, 1), ht3(E3()));
        var n2 = e.length;
        return H(function(r2) {
          for (var u3 = -1, o2 = et3(r2.length, n2); ++u3 < o2; )
            r2[u3] = e[u3].call(this, r2[u3]);
          return ft2(t, this, r2);
        });
      }), Ei2 = H(function(t, e) {
        var n2 = ie2(e, Me(Ei2));
        return Zt3(t, $t3, i3, e, n2);
      }), ra2 = H(function(t, e) {
        var n2 = ie2(e, Me(ra2));
        return Zt3(t, Se, i3, e, n2);
      }), hp = Xt2(function(t, e) {
        return Zt3(t, Je, i3, i3, i3, e);
      });
      function lp(t, e) {
        if (typeof t != "function")
          throw new wt2(y5);
        return e = e === i3 ? e : T3(e), H(t, e);
      }
      function pp(t, e) {
        if (typeof t != "function")
          throw new wt2(y5);
        return e = e == null ? 0 : V2(T3(e), 0), H(function(n2) {
          var r2 = n2[e], u3 = ce3(n2, 0, e);
          return r2 && re2(u3, r2), ft2(t, this, u3);
        });
      }
      function dp(t, e, n2) {
        var r2 = true, u3 = true;
        if (typeof t != "function")
          throw new wt2(y5);
        return K3(n2) && (r2 = "leading" in n2 ? !!n2.leading : r2, u3 = "trailing" in n2 ? !!n2.trailing : u3), na2(t, e, { leading: r2, maxWait: e, trailing: u3 });
      }
      function gp(t) {
        return Vu2(t, 1);
      }
      function vp(t, e) {
        return Ei2(ci2(e), t);
      }
      function _p() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return b3(t) ? t : [t];
      }
      function mp(t) {
        return Ct2(t, xe3);
      }
      function wp(t, e) {
        return e = typeof e == "function" ? e : i3, Ct2(t, xe3, e);
      }
      function Pp(t) {
        return Ct2(t, Dt3 | xe3);
      }
      function Cp(t, e) {
        return e = typeof e == "function" ? e : i3, Ct2(t, Dt3 | xe3, e);
      }
      function Ap(t, e) {
        return e == null || zs3(t, e, k2(e));
      }
      function Rt2(t, e) {
        return t === e || t !== t && e !== e;
      }
      var Ip = tr3(Vr3), xp = tr3(function(t, e) {
        return t >= e;
      }), Ce4 = Qs3(function() {
        return arguments;
      }()) ? Qs3 : function(t) {
        return Y2(t) && W.call(t, "callee") && !$s3.call(t, "callee");
      }, b3 = d2.isArray, Ep = _s3 ? ht3(_s3) : Hf2;
      function at3(t) {
        return t != null && cr3(t.length) && !Vt2(t);
      }
      function Z2(t) {
        return Y2(t) && at3(t);
      }
      function yp(t) {
        return t === true || t === false || Y2(t) && rt3(t) == Ye;
      }
      var fe3 = Fc || $i2, Sp = ms3 ? ht3(ms3) : Df2;
      function Op(t) {
        return Y2(t) && t.nodeType === 1 && !gn3(t);
      }
      function Rp(t) {
        if (t == null)
          return true;
        if (at3(t) && (b3(t) || typeof t == "string" || typeof t.splice == "function" || fe3(t) || Be2(t) || Ce4(t)))
          return !t.length;
        var e = nt3(t);
        if (e == Et2 || e == yt3)
          return !t.size;
        if (pn3(t))
          return !ti2(t).length;
        for (var n2 in t)
          if (W.call(t, n2))
            return false;
        return true;
      }
      function bp(t, e) {
        return fn3(t, e);
      }
      function Tp(t, e, n2) {
        n2 = typeof n2 == "function" ? n2 : i3;
        var r2 = n2 ? n2(t, e) : i3;
        return r2 === i3 ? fn3(t, e, i3, n2) : !!r2;
      }
      function yi3(t) {
        if (!Y2(t))
          return false;
        var e = rt3(t);
        return e == Cn3 || e == ka2 || typeof t.message == "string" && typeof t.name == "string" && !gn3(t);
      }
      function Lp(t) {
        return typeof t == "number" && qs4(t);
      }
      function Vt2(t) {
        if (!K3(t))
          return false;
        var e = rt3(t);
        return e == An2 || e == Ki2 || e == Va2 || e == to2;
      }
      function ia2(t) {
        return typeof t == "number" && t == T3(t);
      }
      function cr3(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ee3;
      }
      function K3(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function");
      }
      function Y2(t) {
        return t != null && typeof t == "object";
      }
      var sa2 = ws3 ? ht3(ws3) : $f;
      function Hp(t, e) {
        return t === e || jr3(t, e, vi(e));
      }
      function Dp(t, e, n2) {
        return n2 = typeof n2 == "function" ? n2 : i3, jr3(t, e, vi(e), n2);
      }
      function Np(t) {
        return ua2(t) && t != +t;
      }
      function $p(t) {
        if (wh2(t))
          throw new R3(I3);
        return Vs3(t);
      }
      function Up(t) {
        return t === null;
      }
      function qp(t) {
        return t == null;
      }
      function ua2(t) {
        return typeof t == "number" || Y2(t) && rt3(t) == Xe3;
      }
      function gn3(t) {
        if (!Y2(t) || rt3(t) != zt3)
          return false;
        var e = $n2(t);
        if (e === null)
          return true;
        var n2 = W.call(e, "constructor") && e.constructor;
        return typeof n2 == "function" && n2 instanceof n2 && Ln2.call(n2) == Hc;
      }
      var Si2 = Ps3 ? ht3(Ps3) : Uf2;
      function Fp(t) {
        return ia2(t) && t >= -ee3 && t <= ee3;
      }
      var aa2 = Cs3 ? ht3(Cs3) : qf2;
      function fr3(t) {
        return typeof t == "string" || !b3(t) && Y2(t) && rt3(t) == Ve;
      }
      function pt3(t) {
        return typeof t == "symbol" || Y2(t) && rt3(t) == In3;
      }
      var Be2 = As3 ? ht3(As3) : Ff2;
      function Wp(t) {
        return t === i3;
      }
      function Mp(t) {
        return Y2(t) && nt3(t) == ke;
      }
      function Bp(t) {
        return Y2(t) && rt3(t) == no2;
      }
      var Gp = tr3(ei2), zp = tr3(function(t, e) {
        return t <= e;
      });
      function oa2(t) {
        if (!t)
          return [];
        if (at3(t))
          return fr3(t) ? St2(t) : ut3(t);
        if (en3 && t[en3])
          return Cc(t[en3]());
        var e = nt3(t), n2 = e == Et2 ? Br3 : e == yt3 ? Rn3 : Ge;
        return n2(t);
      }
      function kt3(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = xt2(t), t === le3 || t === -le3) {
          var e = t < 0 ? -1 : 1;
          return e * Ya2;
        }
        return t === t ? t : 0;
      }
      function T3(t) {
        var e = kt3(t), n2 = e % 1;
        return e === e ? n2 ? e - n2 : e : 0;
      }
      function ca2(t) {
        return t ? _e4(T3(t), 0, Ut3) : 0;
      }
      function xt2(t) {
        if (typeof t == "number")
          return t;
        if (pt3(t))
          return wn2;
        if (K3(t)) {
          var e = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = K3(e) ? e + "" : e;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Os3(t);
        var n2 = xo2.test(t);
        return n2 || yo2.test(t) ? ic(t.slice(2), n2 ? 2 : 8) : Io2.test(t) ? wn2 : +t;
      }
      function fa2(t) {
        return Ft3(t, ot3(t));
      }
      function Kp(t) {
        return t ? _e4(T3(t), -ee3, ee3) : t === 0 ? t : 0;
      }
      function q3(t) {
        return t == null ? "" : lt3(t);
      }
      var Jp = Fe(function(t, e) {
        if (pn3(e) || at3(e)) {
          Ft3(e, k2(e), t);
          return;
        }
        for (var n2 in e)
          W.call(e, n2) && an3(t, n2, e[n2]);
      }), ha2 = Fe(function(t, e) {
        Ft3(e, ot3(e), t);
      }), hr3 = Fe(function(t, e, n2, r2) {
        Ft3(e, ot3(e), t, r2);
      }), Yp = Fe(function(t, e, n2, r2) {
        Ft3(e, k2(e), t, r2);
      }), Zp = Xt2(Zr2);
      function Xp(t, e) {
        var n2 = qe(t);
        return e == null ? n2 : Gs3(n2, e);
      }
      var Qp = H(function(t, e) {
        t = M4(t);
        var n2 = -1, r2 = e.length, u3 = r2 > 2 ? e[2] : i3;
        for (u3 && it3(e[0], e[1], u3) && (r2 = 1); ++n2 < r2; )
          for (var o2 = e[n2], c2 = ot3(o2), f3 = -1, l = c2.length; ++f3 < l; ) {
            var v4 = c2[f3], _2 = t[v4];
            (_2 === i3 || Rt2(_2, Ne[v4]) && !W.call(t, v4)) && (t[v4] = o2[v4]);
          }
        return t;
      }), Vp = H(function(t) {
        return t.push(i3, Ou2), ft2(la2, i3, t);
      });
      function kp(t, e) {
        return xs3(t, E3(e, 3), qt3);
      }
      function jp(t, e) {
        return xs3(t, E3(e, 3), Qr3);
      }
      function td(t, e) {
        return t == null ? t : Xr3(t, E3(e, 3), ot3);
      }
      function ed(t, e) {
        return t == null ? t : Zs3(t, E3(e, 3), ot3);
      }
      function nd(t, e) {
        return t && qt3(t, E3(e, 3));
      }
      function rd(t, e) {
        return t && Qr3(t, E3(e, 3));
      }
      function id(t) {
        return t == null ? [] : Jn2(t, k2(t));
      }
      function sd(t) {
        return t == null ? [] : Jn2(t, ot3(t));
      }
      function Oi2(t, e, n2) {
        var r2 = t == null ? i3 : me3(t, e);
        return r2 === i3 ? n2 : r2;
      }
      function ud(t, e) {
        return t != null && Tu2(t, e, Rf2);
      }
      function Ri2(t, e) {
        return t != null && Tu2(t, e, bf2);
      }
      var ad = Iu2(function(t, e, n2) {
        e != null && typeof e.toString != "function" && (e = Hn2.call(e)), t[e] = n2;
      }, Ti2(ct3)), od = Iu2(function(t, e, n2) {
        e != null && typeof e.toString != "function" && (e = Hn2.call(e)), W.call(t, e) ? t[e].push(n2) : t[e] = [n2];
      }, E3), cd = H(cn3);
      function k2(t) {
        return at3(t) ? Ms3(t) : ti2(t);
      }
      function ot3(t) {
        return at3(t) ? Ms3(t, true) : Wf2(t);
      }
      function fd(t, e) {
        var n2 = {};
        return e = E3(e, 3), qt3(t, function(r2, u3, o2) {
          Yt3(n2, e(r2, u3, o2), r2);
        }), n2;
      }
      function hd(t, e) {
        var n2 = {};
        return e = E3(e, 3), qt3(t, function(r2, u3, o2) {
          Yt3(n2, u3, e(r2, u3, o2));
        }), n2;
      }
      var ld = Fe(function(t, e, n2) {
        Yn2(t, e, n2);
      }), la2 = Fe(function(t, e, n2, r2) {
        Yn2(t, e, n2, r2);
      }), pd = Xt2(function(t, e) {
        var n2 = {};
        if (t == null)
          return n2;
        var r2 = false;
        e = z4(e, function(o2) {
          return o2 = oe4(o2, t), r2 || (r2 = o2.length > 1), o2;
        }), Ft3(t, di3(t), n2), r2 && (n2 = Ct2(n2, Dt3 | Bt2 | xe3, ah));
        for (var u3 = e.length; u3--; )
          ui2(n2, e[u3]);
        return n2;
      });
      function dd(t, e) {
        return pa2(t, or3(E3(e)));
      }
      var gd = Xt2(function(t, e) {
        return t == null ? {} : Bf2(t, e);
      });
      function pa2(t, e) {
        if (t == null)
          return {};
        var n2 = z4(di3(t), function(r2) {
          return [r2];
        });
        return e = E3(e), iu2(t, n2, function(r2, u3) {
          return e(r2, u3[0]);
        });
      }
      function vd(t, e, n2) {
        e = oe4(e, t);
        var r2 = -1, u3 = e.length;
        for (u3 || (u3 = 1, t = i3); ++r2 < u3; ) {
          var o2 = t == null ? i3 : t[Wt2(e[r2])];
          o2 === i3 && (r2 = u3, o2 = n2), t = Vt2(o2) ? o2.call(t) : o2;
        }
        return t;
      }
      function _d(t, e, n2) {
        return t == null ? t : hn3(t, e, n2);
      }
      function md(t, e, n2, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, t == null ? t : hn3(t, e, n2, r2);
      }
      var da2 = yu(k2), ga2 = yu(ot3);
      function wd(t, e, n2) {
        var r2 = b3(t), u3 = r2 || fe3(t) || Be2(t);
        if (e = E3(e, 4), n2 == null) {
          var o2 = t && t.constructor;
          u3 ? n2 = r2 ? new o2() : [] : K3(t) ? n2 = Vt2(o2) ? qe($n2(t)) : {} : n2 = {};
        }
        return (u3 ? mt2 : qt3)(t, function(c2, f3, l) {
          return e(n2, c2, f3, l);
        }), n2;
      }
      function Pd(t, e) {
        return t == null ? true : ui2(t, e);
      }
      function Cd(t, e, n2) {
        return t == null ? t : cu2(t, e, ci2(n2));
      }
      function Ad(t, e, n2, r2) {
        return r2 = typeof r2 == "function" ? r2 : i3, t == null ? t : cu2(t, e, ci2(n2), r2);
      }
      function Ge(t) {
        return t == null ? [] : Mr3(t, k2(t));
      }
      function Id(t) {
        return t == null ? [] : Mr3(t, ot3(t));
      }
      function xd(t, e, n2) {
        return n2 === i3 && (n2 = e, e = i3), n2 !== i3 && (n2 = xt2(n2), n2 = n2 === n2 ? n2 : 0), e !== i3 && (e = xt2(e), e = e === e ? e : 0), _e4(xt2(t), e, n2);
      }
      function Ed(t, e, n2) {
        return e = kt3(e), n2 === i3 ? (n2 = e, e = 0) : n2 = kt3(n2), t = xt2(t), Tf2(t, e, n2);
      }
      function yd(t, e, n2) {
        if (n2 && typeof n2 != "boolean" && it3(t, e, n2) && (e = n2 = i3), n2 === i3 && (typeof e == "boolean" ? (n2 = e, e = i3) : typeof t == "boolean" && (n2 = t, t = i3)), t === i3 && e === i3 ? (t = 0, e = 1) : (t = kt3(t), e === i3 ? (e = t, t = 0) : e = kt3(e)), t > e) {
          var r2 = t;
          t = e, e = r2;
        }
        if (n2 || t % 1 || e % 1) {
          var u3 = Fs3();
          return et3(t + u3 * (e - t + rc("1e-" + ((u3 + "").length - 1))), e);
        }
        return ri2(t, e);
      }
      var Sd = We2(function(t, e, n2) {
        return e = e.toLowerCase(), t + (n2 ? va2(e) : e);
      });
      function va2(t) {
        return bi3(q3(t).toLowerCase());
      }
      function _a2(t) {
        return t = q3(t), t && t.replace(Oo2, vc).replace(Yo, "");
      }
      function Od(t, e, n2) {
        t = q3(t), e = lt3(e);
        var r2 = t.length;
        n2 = n2 === i3 ? r2 : _e4(T3(n2), 0, r2);
        var u3 = n2;
        return n2 -= e.length, n2 >= 0 && t.slice(n2, u3) == e;
      }
      function Rd(t) {
        return t = q3(t), t && ao2.test(t) ? t.replace(Zi2, _c) : t;
      }
      function bd(t) {
        return t = q3(t), t && po2.test(t) ? t.replace(Er3, "\\$&") : t;
      }
      var Td = We2(function(t, e, n2) {
        return t + (n2 ? "-" : "") + e.toLowerCase();
      }), Ld = We2(function(t, e, n2) {
        return t + (n2 ? " " : "") + e.toLowerCase();
      }), Hd = Pu2("toLowerCase");
      function Dd(t, e, n2) {
        t = q3(t), e = T3(e);
        var r2 = e ? He(t) : 0;
        if (!e || r2 >= e)
          return t;
        var u3 = (e - r2) / 2;
        return jn2(Wn2(u3), n2) + t + jn2(Fn(u3), n2);
      }
      function Nd(t, e, n2) {
        t = q3(t), e = T3(e);
        var r2 = e ? He(t) : 0;
        return e && r2 < e ? t + jn2(e - r2, n2) : t;
      }
      function $d(t, e, n2) {
        t = q3(t), e = T3(e);
        var r2 = e ? He(t) : 0;
        return e && r2 < e ? jn2(e - r2, n2) + t : t;
      }
      function Ud(t, e, n2) {
        return n2 || e == null ? e = 0 : e && (e = +e), Gc(q3(t).replace(yr3, ""), e || 0);
      }
      function qd(t, e, n2) {
        return (n2 ? it3(t, e, n2) : e === i3) ? e = 1 : e = T3(e), ii2(q3(t), e);
      }
      function Fd() {
        var t = arguments, e = q3(t[0]);
        return t.length < 3 ? e : e.replace(t[1], t[2]);
      }
      var Wd = We2(function(t, e, n2) {
        return t + (n2 ? "_" : "") + e.toLowerCase();
      });
      function Md(t, e, n2) {
        return n2 && typeof n2 != "number" && it3(t, e, n2) && (e = n2 = i3), n2 = n2 === i3 ? Ut3 : n2 >>> 0, n2 ? (t = q3(t), t && (typeof e == "string" || e != null && !Si2(e)) && (e = lt3(e), !e && Le2(t)) ? ce3(St2(t), 0, n2) : t.split(e, n2)) : [];
      }
      var Bd = We2(function(t, e, n2) {
        return t + (n2 ? " " : "") + bi3(e);
      });
      function Gd(t, e, n2) {
        return t = q3(t), n2 = n2 == null ? 0 : _e4(T3(n2), 0, t.length), e = lt3(e), t.slice(n2, n2 + e.length) == e;
      }
      function zd(t, e, n2) {
        var r2 = a2.templateSettings;
        n2 && it3(t, e, n2) && (e = i3), t = q3(t), e = hr3({}, e, r2, Su2);
        var u3 = hr3({}, e.imports, r2.imports, Su2), o2 = k2(u3), c2 = Mr3(u3, o2), f3, l, v4 = 0, _2 = e.interpolate || xn2, m2 = "__p += '", C4 = Gr3((e.escape || xn2).source + "|" + _2.source + "|" + (_2 === Xi2 ? Ao : xn2).source + "|" + (e.evaluate || xn2).source + "|$", "g"), x4 = "//# sourceURL=" + (W.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ko2 + "]") + `
`;
        t.replace(C4, function(O3, D3, $3, dt3, st3, gt3) {
          return $3 || ($3 = dt3), m2 += t.slice(v4, gt3).replace(Ro2, mc), D3 && (f3 = true, m2 += `' +
__e(` + D3 + `) +
'`), st3 && (l = true, m2 += `';
` + st3 + `;
__p += '`), $3 && (m2 += `' +
((__t = (` + $3 + `)) == null ? '' : __t) +
'`), v4 = gt3 + O3.length, O3;
        }), m2 += `';
`;
        var S2 = W.call(e, "variable") && e.variable;
        if (!S2)
          m2 = `with (obj) {
` + m2 + `
}
`;
        else if (Po2.test(S2))
          throw new R3(J);
        m2 = (l ? m2.replace(ro2, "") : m2).replace(io, "$1").replace(so2, "$1;"), m2 = "function(" + (S2 || "obj") + `) {
` + (S2 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (f3 ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m2 + `return __p
}`;
        var L2 = wa2(function() {
          return U4(o2, x4 + "return " + m2).apply(i3, c2);
        });
        if (L2.source = m2, yi3(L2))
          throw L2;
        return L2;
      }
      function Kd(t) {
        return q3(t).toLowerCase();
      }
      function Jd(t) {
        return q3(t).toUpperCase();
      }
      function Yd(t, e, n2) {
        if (t = q3(t), t && (n2 || e === i3))
          return Os3(t);
        if (!t || !(e = lt3(e)))
          return t;
        var r2 = St2(t), u3 = St2(e), o2 = Rs4(r2, u3), c2 = bs3(r2, u3) + 1;
        return ce3(r2, o2, c2).join("");
      }
      function Zd(t, e, n2) {
        if (t = q3(t), t && (n2 || e === i3))
          return t.slice(0, Ls3(t) + 1);
        if (!t || !(e = lt3(e)))
          return t;
        var r2 = St2(t), u3 = bs3(r2, St2(e)) + 1;
        return ce3(r2, 0, u3).join("");
      }
      function Xd(t, e, n2) {
        if (t = q3(t), t && (n2 || e === i3))
          return t.replace(yr3, "");
        if (!t || !(e = lt3(e)))
          return t;
        var r2 = St2(t), u3 = Rs4(r2, St2(e));
        return ce3(r2, u3).join("");
      }
      function Qd(t, e) {
        var n2 = Ma2, r2 = Ba2;
        if (K3(e)) {
          var u3 = "separator" in e ? e.separator : u3;
          n2 = "length" in e ? T3(e.length) : n2, r2 = "omission" in e ? lt3(e.omission) : r2;
        }
        t = q3(t);
        var o2 = t.length;
        if (Le2(t)) {
          var c2 = St2(t);
          o2 = c2.length;
        }
        if (n2 >= o2)
          return t;
        var f3 = n2 - He(r2);
        if (f3 < 1)
          return r2;
        var l = c2 ? ce3(c2, 0, f3).join("") : t.slice(0, f3);
        if (u3 === i3)
          return l + r2;
        if (c2 && (f3 += l.length - f3), Si2(u3)) {
          if (t.slice(f3).search(u3)) {
            var v4, _2 = l;
            for (u3.global || (u3 = Gr3(u3.source, q3(Qi2.exec(u3)) + "g")), u3.lastIndex = 0; v4 = u3.exec(_2); )
              var m2 = v4.index;
            l = l.slice(0, m2 === i3 ? f3 : m2);
          }
        } else if (t.indexOf(lt3(u3), f3) != f3) {
          var C4 = l.lastIndexOf(u3);
          C4 > -1 && (l = l.slice(0, C4));
        }
        return l + r2;
      }
      function Vd(t) {
        return t = q3(t), t && uo2.test(t) ? t.replace(Yi2, Ec) : t;
      }
      var kd = We2(function(t, e, n2) {
        return t + (n2 ? " " : "") + e.toUpperCase();
      }), bi3 = Pu2("toUpperCase");
      function ma2(t, e, n2) {
        return t = q3(t), e = n2 ? i3 : e, e === i3 ? Pc(t) ? Oc(t) : hc(t) : t.match(e) || [];
      }
      var wa2 = H(function(t, e) {
        try {
          return ft2(t, i3, e);
        } catch (n2) {
          return yi3(n2) ? n2 : new R3(n2);
        }
      }), jd = Xt2(function(t, e) {
        return mt2(e, function(n2) {
          n2 = Wt2(n2), Yt3(t, n2, xi2(t[n2], t));
        }), t;
      });
      function tg(t) {
        var e = t == null ? 0 : t.length, n2 = E3();
        return t = e ? z4(t, function(r2) {
          if (typeof r2[1] != "function")
            throw new wt2(y5);
          return [n2(r2[0]), r2[1]];
        }) : [], H(function(r2) {
          for (var u3 = -1; ++u3 < e; ) {
            var o2 = t[u3];
            if (ft2(o2[0], this, r2))
              return ft2(o2[1], this, r2);
          }
        });
      }
      function eg(t) {
        return yf2(Ct2(t, Dt3));
      }
      function Ti2(t) {
        return function() {
          return t;
        };
      }
      function ng(t, e) {
        return t == null || t !== t ? e : t;
      }
      var rg = Au(), ig = Au(true);
      function ct3(t) {
        return t;
      }
      function Li2(t) {
        return ks3(typeof t == "function" ? t : Ct2(t, Dt3));
      }
      function sg(t) {
        return tu2(Ct2(t, Dt3));
      }
      function ug(t, e) {
        return eu2(t, Ct2(e, Dt3));
      }
      var ag = H(function(t, e) {
        return function(n2) {
          return cn3(n2, t, e);
        };
      }), og = H(function(t, e) {
        return function(n2) {
          return cn3(t, n2, e);
        };
      });
      function Hi2(t, e, n2) {
        var r2 = k2(e), u3 = Jn2(e, r2);
        n2 == null && !(K3(e) && (u3.length || !r2.length)) && (n2 = e, e = t, t = this, u3 = Jn2(e, k2(e)));
        var o2 = !(K3(n2) && "chain" in n2) || !!n2.chain, c2 = Vt2(t);
        return mt2(u3, function(f3) {
          var l = e[f3];
          t[f3] = l, c2 && (t.prototype[f3] = function() {
            var v4 = this.__chain__;
            if (o2 || v4) {
              var _2 = t(this.__wrapped__), m2 = _2.__actions__ = ut3(this.__actions__);
              return m2.push({ func: l, args: arguments, thisArg: t }), _2.__chain__ = v4, _2;
            }
            return l.apply(t, re2([this.value()], arguments));
          });
        }), t;
      }
      function cg() {
        return j4._ === this && (j4._ = Dc), this;
      }
      function Di3() {
      }
      function fg(t) {
        return t = T3(t), H(function(e) {
          return nu2(e, t);
        });
      }
      var hg = hi2(z4), lg = hi2(Is4), pg = hi2($r3);
      function Pa2(t) {
        return mi2(t) ? Ur3(Wt2(t)) : Gf2(t);
      }
      function dg(t) {
        return function(e) {
          return t == null ? i3 : me3(t, e);
        };
      }
      var gg = xu2(), vg = xu2(true);
      function Ni2() {
        return [];
      }
      function $i2() {
        return false;
      }
      function _g() {
        return {};
      }
      function mg() {
        return "";
      }
      function wg() {
        return true;
      }
      function Pg(t, e) {
        if (t = T3(t), t < 1 || t > ee3)
          return [];
        var n2 = Ut3, r2 = et3(t, Ut3);
        e = E3(e), t -= Ut3;
        for (var u3 = Wr3(r2, e); ++n2 < t; )
          e(n2);
        return u3;
      }
      function Cg(t) {
        return b3(t) ? z4(t, Wt2) : pt3(t) ? [t] : ut3(Wu2(q3(t)));
      }
      function Ag(t) {
        var e = ++Lc;
        return q3(t) + e;
      }
      var Ig = kn2(function(t, e) {
        return t + e;
      }, 0), xg = li2("ceil"), Eg = kn2(function(t, e) {
        return t / e;
      }, 1), yg = li2("floor");
      function Sg(t) {
        return t && t.length ? Kn2(t, ct3, Vr3) : i3;
      }
      function Og(t, e) {
        return t && t.length ? Kn2(t, E3(e, 2), Vr3) : i3;
      }
      function Rg(t) {
        return ys3(t, ct3);
      }
      function bg(t, e) {
        return ys3(t, E3(e, 2));
      }
      function Tg(t) {
        return t && t.length ? Kn2(t, ct3, ei2) : i3;
      }
      function Lg(t, e) {
        return t && t.length ? Kn2(t, E3(e, 2), ei2) : i3;
      }
      var Hg = kn2(function(t, e) {
        return t * e;
      }, 1), Dg = li2("round"), Ng = kn2(function(t, e) {
        return t - e;
      }, 0);
      function $g(t) {
        return t && t.length ? Fr3(t, ct3) : 0;
      }
      function Ug(t, e) {
        return t && t.length ? Fr3(t, E3(e, 2)) : 0;
      }
      return a2.after = sp, a2.ary = Vu2, a2.assign = Jp, a2.assignIn = ha2, a2.assignInWith = hr3, a2.assignWith = Yp, a2.at = Zp, a2.before = ku2, a2.bind = xi2, a2.bindAll = jd, a2.bindKey = ju2, a2.castArray = _p, a2.chain = Zu2, a2.chunk = yh2, a2.compact = Sh2, a2.concat = Oh, a2.cond = tg, a2.conforms = eg, a2.constant = Ti2, a2.countBy = $l, a2.create = Xp, a2.curry = ta2, a2.curryRight = ea2, a2.debounce = na2, a2.defaults = Qp, a2.defaultsDeep = Vp, a2.defer = up, a2.delay = ap, a2.difference = Rh2, a2.differenceBy = bh2, a2.differenceWith = Th, a2.drop = Lh, a2.dropRight = Hh, a2.dropRightWhile = Dh, a2.dropWhile = Nh2, a2.fill = $h, a2.filter = ql, a2.flatMap = Ml, a2.flatMapDeep = Bl, a2.flatMapDepth = Gl, a2.flatten = zu2, a2.flattenDeep = Uh, a2.flattenDepth = qh, a2.flip = op, a2.flow = rg, a2.flowRight = ig, a2.fromPairs = Fh, a2.functions = id, a2.functionsIn = sd, a2.groupBy = zl, a2.initial = Mh2, a2.intersection = Bh2, a2.intersectionBy = Gh, a2.intersectionWith = zh, a2.invert = ad, a2.invertBy = od, a2.invokeMap = Jl, a2.iteratee = Li2, a2.keyBy = Yl, a2.keys = k2, a2.keysIn = ot3, a2.map = sr3, a2.mapKeys = fd, a2.mapValues = hd, a2.matches = sg, a2.matchesProperty = ug, a2.memoize = ar3, a2.merge = ld, a2.mergeWith = la2, a2.method = ag, a2.methodOf = og, a2.mixin = Hi2, a2.negate = or3, a2.nthArg = fg, a2.omit = pd, a2.omitBy = dd, a2.once = cp, a2.orderBy = Zl, a2.over = hg, a2.overArgs = fp, a2.overEvery = lg, a2.overSome = pg, a2.partial = Ei2, a2.partialRight = ra2, a2.partition = Xl, a2.pick = gd, a2.pickBy = pa2, a2.property = Pa2, a2.propertyOf = dg, a2.pull = Zh, a2.pullAll = Ju2, a2.pullAllBy = Xh, a2.pullAllWith = Qh, a2.pullAt = Vh, a2.range = gg, a2.rangeRight = vg, a2.rearg = hp, a2.reject = kl, a2.remove = kh, a2.rest = lp, a2.reverse = Ai, a2.sampleSize = tp, a2.set = _d, a2.setWith = md, a2.shuffle = ep, a2.slice = jh, a2.sortBy = ip, a2.sortedUniq = ul, a2.sortedUniqBy = al, a2.split = Md, a2.spread = pp, a2.tail = ol, a2.take = cl, a2.takeRight = fl, a2.takeRightWhile = hl, a2.takeWhile = ll, a2.tap = Sl, a2.throttle = dp, a2.thru = ir3, a2.toArray = oa2, a2.toPairs = da2, a2.toPairsIn = ga2, a2.toPath = Cg, a2.toPlainObject = fa2, a2.transform = wd, a2.unary = gp, a2.union = pl, a2.unionBy = dl, a2.unionWith = gl, a2.uniq = vl, a2.uniqBy = _l, a2.uniqWith = ml, a2.unset = Pd, a2.unzip = Ii2, a2.unzipWith = Yu2, a2.update = Cd, a2.updateWith = Ad, a2.values = Ge, a2.valuesIn = Id, a2.without = wl, a2.words = ma2, a2.wrap = vp, a2.xor = Pl, a2.xorBy = Cl, a2.xorWith = Al, a2.zip = Il, a2.zipObject = xl, a2.zipObjectDeep = El, a2.zipWith = yl, a2.entries = da2, a2.entriesIn = ga2, a2.extend = ha2, a2.extendWith = hr3, Hi2(a2, a2), a2.add = Ig, a2.attempt = wa2, a2.camelCase = Sd, a2.capitalize = va2, a2.ceil = xg, a2.clamp = xd, a2.clone = mp, a2.cloneDeep = Pp, a2.cloneDeepWith = Cp, a2.cloneWith = wp, a2.conformsTo = Ap, a2.deburr = _a2, a2.defaultTo = ng, a2.divide = Eg, a2.endsWith = Od, a2.eq = Rt2, a2.escape = Rd, a2.escapeRegExp = bd, a2.every = Ul, a2.find = Fl, a2.findIndex = Bu2, a2.findKey = kp, a2.findLast = Wl, a2.findLastIndex = Gu2, a2.findLastKey = jp, a2.floor = yg, a2.forEach = Xu2, a2.forEachRight = Qu2, a2.forIn = td, a2.forInRight = ed, a2.forOwn = nd, a2.forOwnRight = rd, a2.get = Oi2, a2.gt = Ip, a2.gte = xp, a2.has = ud, a2.hasIn = Ri2, a2.head = Ku2, a2.identity = ct3, a2.includes = Kl, a2.indexOf = Wh, a2.inRange = Ed, a2.invoke = cd, a2.isArguments = Ce4, a2.isArray = b3, a2.isArrayBuffer = Ep, a2.isArrayLike = at3, a2.isArrayLikeObject = Z2, a2.isBoolean = yp, a2.isBuffer = fe3, a2.isDate = Sp, a2.isElement = Op, a2.isEmpty = Rp, a2.isEqual = bp, a2.isEqualWith = Tp, a2.isError = yi3, a2.isFinite = Lp, a2.isFunction = Vt2, a2.isInteger = ia2, a2.isLength = cr3, a2.isMap = sa2, a2.isMatch = Hp, a2.isMatchWith = Dp, a2.isNaN = Np, a2.isNative = $p, a2.isNil = qp, a2.isNull = Up, a2.isNumber = ua2, a2.isObject = K3, a2.isObjectLike = Y2, a2.isPlainObject = gn3, a2.isRegExp = Si2, a2.isSafeInteger = Fp, a2.isSet = aa2, a2.isString = fr3, a2.isSymbol = pt3, a2.isTypedArray = Be2, a2.isUndefined = Wp, a2.isWeakMap = Mp, a2.isWeakSet = Bp, a2.join = Kh, a2.kebabCase = Td, a2.last = It2, a2.lastIndexOf = Jh, a2.lowerCase = Ld, a2.lowerFirst = Hd, a2.lt = Gp, a2.lte = zp, a2.max = Sg, a2.maxBy = Og, a2.mean = Rg, a2.meanBy = bg, a2.min = Tg, a2.minBy = Lg, a2.stubArray = Ni2, a2.stubFalse = $i2, a2.stubObject = _g, a2.stubString = mg, a2.stubTrue = wg, a2.multiply = Hg, a2.nth = Yh, a2.noConflict = cg, a2.noop = Di3, a2.now = ur3, a2.pad = Dd, a2.padEnd = Nd, a2.padStart = $d, a2.parseInt = Ud, a2.random = yd, a2.reduce = Ql, a2.reduceRight = Vl, a2.repeat = qd, a2.replace = Fd, a2.result = vd, a2.round = Dg, a2.runInContext = h3, a2.sample = jl, a2.size = np, a2.snakeCase = Wd, a2.some = rp, a2.sortedIndex = tl, a2.sortedIndexBy = el, a2.sortedIndexOf = nl, a2.sortedLastIndex = rl, a2.sortedLastIndexBy = il, a2.sortedLastIndexOf = sl, a2.startCase = Bd, a2.startsWith = Gd, a2.subtract = Ng, a2.sum = $g, a2.sumBy = Ug, a2.template = zd, a2.times = Pg, a2.toFinite = kt3, a2.toInteger = T3, a2.toLength = ca2, a2.toLower = Kd, a2.toNumber = xt2, a2.toSafeInteger = Kp, a2.toString = q3, a2.toUpper = Jd, a2.trim = Yd, a2.trimEnd = Zd, a2.trimStart = Xd, a2.truncate = Qd, a2.unescape = Vd, a2.uniqueId = Ag, a2.upperCase = kd, a2.upperFirst = bi3, a2.each = Xu2, a2.eachRight = Qu2, a2.first = Ku2, Hi2(a2, function() {
        var t = {};
        return qt3(a2, function(e, n2) {
          W.call(a2.prototype, n2) || (t[n2] = e);
        }), t;
      }(), { chain: false }), a2.VERSION = p3, mt2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        a2[t].placeholder = a2;
      }), mt2(["drop", "take"], function(t, e) {
        N2.prototype[t] = function(n2) {
          n2 = n2 === i3 ? 1 : V2(T3(n2), 0);
          var r2 = this.__filtered__ && !e ? new N2(this) : this.clone();
          return r2.__filtered__ ? r2.__takeCount__ = et3(n2, r2.__takeCount__) : r2.__views__.push({ size: et3(n2, Ut3), type: t + (r2.__dir__ < 0 ? "Right" : "") }), r2;
        }, N2.prototype[t + "Right"] = function(n2) {
          return this.reverse()[t](n2).reverse();
        };
      }), mt2(["filter", "map", "takeWhile"], function(t, e) {
        var n2 = e + 1, r2 = n2 == zi2 || n2 == Ja2;
        N2.prototype[t] = function(u3) {
          var o2 = this.clone();
          return o2.__iteratees__.push({ iteratee: E3(u3, 3), type: n2 }), o2.__filtered__ = o2.__filtered__ || r2, o2;
        };
      }), mt2(["head", "last"], function(t, e) {
        var n2 = "take" + (e ? "Right" : "");
        N2.prototype[t] = function() {
          return this[n2](1).value()[0];
        };
      }), mt2(["initial", "tail"], function(t, e) {
        var n2 = "drop" + (e ? "" : "Right");
        N2.prototype[t] = function() {
          return this.__filtered__ ? new N2(this) : this[n2](1);
        };
      }), N2.prototype.compact = function() {
        return this.filter(ct3);
      }, N2.prototype.find = function(t) {
        return this.filter(t).head();
      }, N2.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, N2.prototype.invokeMap = H(function(t, e) {
        return typeof t == "function" ? new N2(this) : this.map(function(n2) {
          return cn3(n2, t, e);
        });
      }), N2.prototype.reject = function(t) {
        return this.filter(or3(E3(t)));
      }, N2.prototype.slice = function(t, e) {
        t = T3(t);
        var n2 = this;
        return n2.__filtered__ && (t > 0 || e < 0) ? new N2(n2) : (t < 0 ? n2 = n2.takeRight(-t) : t && (n2 = n2.drop(t)), e !== i3 && (e = T3(e), n2 = e < 0 ? n2.dropRight(-e) : n2.take(e - t)), n2);
      }, N2.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, N2.prototype.toArray = function() {
        return this.take(Ut3);
      }, qt3(N2.prototype, function(t, e) {
        var n2 = /^(?:filter|find|map|reject)|While$/.test(e), r2 = /^(?:head|last)$/.test(e), u3 = a2[r2 ? "take" + (e == "last" ? "Right" : "") : e], o2 = r2 || /^find/.test(e);
        u3 && (a2.prototype[e] = function() {
          var c2 = this.__wrapped__, f3 = r2 ? [1] : arguments, l = c2 instanceof N2, v4 = f3[0], _2 = l || b3(c2), m2 = function(D3) {
            var $3 = u3.apply(a2, re2([D3], f3));
            return r2 && C4 ? $3[0] : $3;
          };
          _2 && n2 && typeof v4 == "function" && v4.length != 1 && (l = _2 = false);
          var C4 = this.__chain__, x4 = !!this.__actions__.length, S2 = o2 && !C4, L2 = l && !x4;
          if (!o2 && _2) {
            c2 = L2 ? c2 : new N2(this);
            var O3 = t.apply(c2, f3);
            return O3.__actions__.push({ func: ir3, args: [m2], thisArg: i3 }), new Pt2(O3, C4);
          }
          return S2 && L2 ? t.apply(this, f3) : (O3 = this.thru(m2), S2 ? r2 ? O3.value()[0] : O3.value() : O3);
        });
      }), mt2(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var e = bn2[t], n2 = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", r2 = /^(?:pop|shift)$/.test(t);
        a2.prototype[t] = function() {
          var u3 = arguments;
          if (r2 && !this.__chain__) {
            var o2 = this.value();
            return e.apply(b3(o2) ? o2 : [], u3);
          }
          return this[n2](function(c2) {
            return e.apply(b3(c2) ? c2 : [], u3);
          });
        };
      }), qt3(N2.prototype, function(t, e) {
        var n2 = a2[e];
        if (n2) {
          var r2 = n2.name + "";
          W.call(Ue, r2) || (Ue[r2] = []), Ue[r2].push({ name: e, func: n2 });
        }
      }), Ue[Vn2(i3, he3).name] = [{ name: "wrapper", func: i3 }], N2.prototype.clone = Qc, N2.prototype.reverse = Vc, N2.prototype.value = kc, a2.prototype.at = Ol, a2.prototype.chain = Rl, a2.prototype.commit = bl, a2.prototype.next = Tl, a2.prototype.plant = Hl, a2.prototype.reverse = Dl, a2.prototype.toJSON = a2.prototype.valueOf = a2.prototype.value = Nl, a2.prototype.first = a2.prototype.head, en3 && (a2.prototype[en3] = Ll), a2;
    }, De = Rc();
    pe2 ? ((pe2.exports = De)._ = De, Lr3._ = De) : j4._ = De;
  }).call(_n2);
})(qi2, qi2.exports);
var Vg = Object.defineProperty;
var kg = Object.defineProperties;
var jg = Object.getOwnPropertyDescriptors;
var Ra2 = Object.getOwnPropertySymbols;
var tv = Object.prototype.hasOwnProperty;
var ev = Object.prototype.propertyIsEnumerable;
var ba2 = (P3, s, i3) => s in P3 ? Vg(P3, s, { enumerable: true, configurable: true, writable: true, value: i3 }) : P3[s] = i3;
var lr3 = (P3, s) => {
  for (var i3 in s || (s = {}))
    tv.call(s, i3) && ba2(P3, i3, s[i3]);
  if (Ra2)
    for (var i3 of Ra2(s))
      ev.call(s, i3) && ba2(P3, i3, s[i3]);
  return P3;
};
var nv = (P3, s) => kg(P3, jg(s));
function Lt3(P3, s, i3) {
  var p3;
  const w2 = An(P3);
  return ((p3 = s.rpcMap) == null ? void 0 : p3[w2.reference]) || `${Oa2}?chainId=${w2.namespace}:${w2.reference}&projectId=${i3}`;
}
function Ae2(P3) {
  return P3.includes(":") ? P3.split(":")[1] : P3;
}
function Ta2(P3) {
  return P3.map((s) => `${s.split(":")[0]}:${s.split(":")[1]}`);
}
function rv(P3, s) {
  const i3 = Object.keys(s.namespaces).filter((w2) => w2.includes(P3));
  if (!i3.length)
    return [];
  const p3 = [];
  return i3.forEach((w2) => {
    const I3 = s.namespaces[w2].accounts;
    p3.push(...I3);
  }), p3;
}
function Fi2(P3 = {}, s = {}) {
  const i3 = La2(P3), p3 = La2(s);
  return qi2.exports.merge(i3, p3);
}
function La2(P3) {
  var s, i3, p3, w2;
  const I3 = {};
  if (!Xr(P3))
    return I3;
  for (const [y5, J] of Object.entries(P3)) {
    const Ht3 = on(y5) ? [y5] : J.chains, Ke = J.methods || [], Ie2 = J.events || [], Dt3 = J.rpcMap || {}, Bt2 = xo(y5);
    I3[Bt2] = nv(lr3(lr3({}, I3[Bt2]), J), { chains: me(Ht3, (s = I3[Bt2]) == null ? void 0 : s.chains), methods: me(Ke, (i3 = I3[Bt2]) == null ? void 0 : i3.methods), events: me(Ie2, (p3 = I3[Bt2]) == null ? void 0 : p3.events), rpcMap: lr3(lr3({}, Dt3), (w2 = I3[Bt2]) == null ? void 0 : w2.rpcMap) });
  }
  return I3;
}
function iv(P3) {
  return P3.includes(":") ? P3.split(":")[2] : P3;
}
function Ha2(P3) {
  const s = {};
  for (const [i3, p3] of Object.entries(P3)) {
    const w2 = p3.methods || [], I3 = p3.events || [], y5 = p3.accounts || [], J = on(i3) ? [i3] : p3.chains ? p3.chains : Ta2(p3.accounts);
    s[i3] = { chains: J, methods: w2, events: I3, accounts: y5 };
  }
  return s;
}
function Wi2(P3) {
  return typeof P3 == "number" ? P3 : P3.includes("0x") ? parseInt(P3, 16) : (P3 = P3.includes(":") ? P3.split(":")[1] : P3, isNaN(Number(P3)) ? P3 : Number(P3));
}
var Da2 = {};
var F2 = (P3) => Da2[P3];
var Mi3 = (P3, s) => {
  Da2[P3] = s;
};
var sv = class {
  constructor(s) {
    this.name = "polkadot", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(s, i3), this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s}`);
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w2 = Ae2(i3);
      s[w2] = this.createHttpProvider(w2, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
};
var uv = Object.defineProperty;
var av = Object.defineProperties;
var ov = Object.getOwnPropertyDescriptors;
var Na2 = Object.getOwnPropertySymbols;
var cv = Object.prototype.hasOwnProperty;
var fv = Object.prototype.propertyIsEnumerable;
var $a2 = (P3, s, i3) => s in P3 ? uv(P3, s, { enumerable: true, configurable: true, writable: true, value: i3 }) : P3[s] = i3;
var Ua2 = (P3, s) => {
  for (var i3 in s || (s = {}))
    cv.call(s, i3) && $a2(P3, i3, s[i3]);
  if (Na2)
    for (var i3 of Na2(s))
      fv.call(s, i3) && $a2(P3, i3, s[i3]);
  return P3;
};
var qa2 = (P3, s) => av(P3, ov(s));
var hv = class {
  constructor(s) {
    this.name = "eip155", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(s) {
    switch (s.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(s);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(s);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(s);
    }
    return this.namespace.methods.includes(s.request.method) ? await this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(parseInt(s), i3), this.chainId = parseInt(s), this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(`${this.name}:${s}`, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w2 = parseInt(Ae2(i3));
      s[w2] = this.createHttpProvider(w2, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const s = this.chainId, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  async handleSwitchChain(s) {
    var i3, p3;
    let w2 = s.request.params ? (i3 = s.request.params[0]) == null ? void 0 : i3.chainId : "0x0";
    w2 = w2.startsWith("0x") ? w2 : `0x${w2}`;
    const I3 = parseInt(w2, 16);
    if (this.isChainApproved(I3))
      this.setDefaultChain(`${I3}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: s.topic, request: { method: s.request.method, params: [{ chainId: w2 }] }, chainId: (p3 = this.namespace.chains) == null ? void 0 : p3[0] }), this.setDefaultChain(`${I3}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${I3}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(s) {
    return this.namespace.chains.includes(`${this.name}:${s}`);
  }
  async getCapabilities(s) {
    var i3, p3, w2;
    const I3 = (p3 = (i3 = s.request) == null ? void 0 : i3.params) == null ? void 0 : p3[0];
    if (!I3)
      throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const y5 = this.client.session.get(s.topic), J = ((w2 = y5 == null ? void 0 : y5.sessionProperties) == null ? void 0 : w2.capabilities) || {};
    if (J != null && J[I3])
      return J == null ? void 0 : J[I3];
    const Ht3 = await this.client.request(s);
    try {
      await this.client.session.update(s.topic, { sessionProperties: qa2(Ua2({}, y5.sessionProperties || {}), { capabilities: qa2(Ua2({}, J || {}), { [I3]: Ht3 }) }) });
    } catch (Ke) {
      console.warn("Failed to update session with capabilities", Ke);
    }
    return Ht3;
  }
  async getCallStatus(s) {
    var i3, p3;
    const w2 = this.client.session.get(s.topic), I3 = (i3 = w2.sessionProperties) == null ? void 0 : i3.bundler_name;
    if (I3) {
      const J = this.getBundlerUrl(s.chainId, I3);
      try {
        return await this.getUserOperationReceipt(J, s);
      } catch (Ht3) {
        console.warn("Failed to fetch call status from bundler", Ht3, J);
      }
    }
    const y5 = (p3 = w2.sessionProperties) == null ? void 0 : p3.bundler_url;
    if (y5)
      try {
        return await this.getUserOperationReceipt(y5, s);
      } catch (J) {
        console.warn("Failed to fetch call status from custom bundler", J, y5);
      }
    if (this.namespace.methods.includes(s.request.method))
      return await this.client.request(s);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(s, i3) {
    var p3;
    const w2 = new URL(s), I3 = await fetch(w2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(p3 = i3.request.params) == null ? void 0 : p3[0]])) });
    if (!I3.ok)
      throw new Error(`Failed to fetch user operation receipt - ${I3.status}`);
    return await I3.json();
  }
  getBundlerUrl(s, i3) {
    return `${Qg}?projectId=${this.client.core.projectId}&chainId=${s}&bundler=${i3}`;
  }
};
var lv = class {
  constructor(s) {
    this.name = "solana", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(s, i3), this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w2 = Ae2(i3);
      s[w2] = this.createHttpProvider(w2, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
};
var pv = class {
  constructor(s) {
    this.name = "cosmos", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(s, i3), this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w2 = Ae2(i3);
      s[w2] = this.createHttpProvider(w2, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
};
var dv = class {
  constructor(s) {
    this.name = "algorand", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    if (!this.httpProviders[s]) {
      const p3 = i3 || Lt3(`${this.name}:${s}`, this.namespace, this.client.core.projectId);
      if (!p3)
        throw new Error(`No RPC url provided for chainId: ${s}`);
      this.setHttpProvider(s, p3);
    }
    this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      s[i3] = this.createHttpProvider(i3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace, this.client.core.projectId);
    return typeof p3 > "u" ? void 0 : new o(new f2(p3, F2("disableProviderPing")));
  }
};
var gv = class {
  constructor(s) {
    this.name = "cip34", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(s, i3), this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      const p3 = this.getCardanoRPCUrl(i3), w2 = Ae2(i3);
      s[w2] = this.createHttpProvider(w2, p3);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  getCardanoRPCUrl(s) {
    const i3 = this.namespace.rpcMap;
    if (i3)
      return i3[s];
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || this.getCardanoRPCUrl(s);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
};
var vv = class {
  constructor(s) {
    this.name = "elrond", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(s, i3), this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w2 = Ae2(i3);
      s[w2] = this.createHttpProvider(w2, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
};
var _v = class {
  constructor(s) {
    this.name = "multiversx", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(s, i3), this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      const w2 = Ae2(i3);
      s[w2] = this.createHttpProvider(w2, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
};
var mv = class {
  constructor(s) {
    this.name = "near", this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace = Object.assign(this.namespace, s);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider().request(s.request);
  }
  setDefaultChain(s, i3) {
    if (this.chainId = s, !this.httpProviders[s]) {
      const p3 = i3 || Lt3(`${this.name}:${s}`, this.namespace);
      if (!p3)
        throw new Error(`No RPC url provided for chainId: ${s}`);
      this.setHttpProvider(s, p3);
    }
    this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const s = {};
    return this.namespace.chains.forEach((i3) => {
      var p3;
      s[i3] = this.createHttpProvider(i3, (p3 = this.namespace.rpcMap) == null ? void 0 : p3[i3]);
    }), s;
  }
  getHttpProvider() {
    const s = `${this.name}:${this.chainId}`, i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace);
    return typeof p3 > "u" ? void 0 : new o(new f2(p3, F2("disableProviderPing")));
  }
};
var wv = class {
  constructor(s) {
    this.name = ze, this.namespace = s.namespace, this.events = F2("events"), this.client = F2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(s) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(s.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(s.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(s.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(s.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(s) {
    return this.namespace.methods.includes(s.request.method) ? this.client.request(s) : this.getHttpProvider(s.chainId).request(s.request);
  }
  setDefaultChain(s, i3) {
    this.httpProviders[s] || this.setHttpProvider(s, i3), this.chainId = s, this.events.emit(Tt3.DEFAULT_CHAIN_CHANGED, `${this.name}:${s}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const s = this.namespace.chains[0];
    if (!s)
      throw new Error("ChainId not found");
    return s.split(":")[1];
  }
  getAccounts() {
    const s = this.namespace.accounts;
    return s ? [...new Set(s.filter((i3) => i3.split(":")[1] === this.chainId.toString()).map((i3) => i3.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var s, i3;
    const p3 = {};
    return (i3 = (s = this.namespace) == null ? void 0 : s.accounts) == null || i3.forEach((w2) => {
      const I3 = An(w2);
      p3[`${I3.namespace}:${I3.reference}`] = this.createHttpProvider(w2);
    }), p3;
  }
  getHttpProvider(s) {
    const i3 = this.httpProviders[s];
    if (typeof i3 > "u")
      throw new Error(`JSON-RPC provider for ${s} not found`);
    return i3;
  }
  setHttpProvider(s, i3) {
    const p3 = this.createHttpProvider(s, i3);
    p3 && (this.httpProviders[s] = p3);
  }
  createHttpProvider(s, i3) {
    const p3 = i3 || Lt3(s, this.namespace, this.client.core.projectId);
    if (!p3)
      throw new Error(`No RPC url provided for chainId: ${s}`);
    return new o(new f2(p3, F2("disableProviderPing")));
  }
};
var Pv = Object.defineProperty;
var Cv = Object.defineProperties;
var Av = Object.getOwnPropertyDescriptors;
var Fa2 = Object.getOwnPropertySymbols;
var Iv = Object.prototype.hasOwnProperty;
var xv = Object.prototype.propertyIsEnumerable;
var Wa2 = (P3, s, i3) => s in P3 ? Pv(P3, s, { enumerable: true, configurable: true, writable: true, value: i3 }) : P3[s] = i3;
var pr3 = (P3, s) => {
  for (var i3 in s || (s = {}))
    Iv.call(s, i3) && Wa2(P3, i3, s[i3]);
  if (Fa2)
    for (var i3 of Fa2(s))
      xv.call(s, i3) && Wa2(P3, i3, s[i3]);
  return P3;
};
var Bi2 = (P3, s) => Cv(P3, Av(s));
var dr3 = class _dr {
  constructor(s) {
    this.events = new import_events5.default(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = s, this.logger = typeof (s == null ? void 0 : s.logger) < "u" && typeof (s == null ? void 0 : s.logger) != "string" ? s.logger : (0, import_pino.default)(k({ level: (s == null ? void 0 : s.logger) || ya2 })), this.disableProviderPing = (s == null ? void 0 : s.disableProviderPing) || false;
  }
  static async init(s) {
    const i3 = new _dr(s);
    return await i3.initialize(), i3;
  }
  async request(s, i3, p3) {
    const [w2, I3] = this.validateChain(i3);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(w2).request({ request: pr3({}, s), chainId: `${w2}:${I3}`, topic: this.session.topic, expiry: p3 });
  }
  sendAsync(s, i3, p3, w2) {
    const I3 = (/* @__PURE__ */ new Date()).getTime();
    this.request(s, p3, w2).then((y5) => i3(null, formatJsonRpcResult(I3, y5))).catch((y5) => i3(y5, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var s;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (s = this.session) == null ? void 0 : s.topic, reason: er("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(s) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(s), await this.cleanupPendingPairings(), !s.skipPairing)
      return await this.pair(s.pairingTopic);
  }
  async authenticate(s, i3) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    this.setNamespaces(s), await this.cleanupPendingPairings();
    const { uri: p3, response: w2 } = await this.client.authenticate(s, i3);
    p3 && (this.uri = p3, this.events.emit("display_uri", p3));
    const I3 = await w2();
    if (this.session = I3.session, this.session) {
      const y5 = Ha2(this.session.namespaces);
      this.namespaces = Fi2(this.namespaces, y5), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return I3;
  }
  on(s, i3) {
    this.events.on(s, i3);
  }
  once(s, i3) {
    this.events.once(s, i3);
  }
  removeListener(s, i3) {
    this.events.removeListener(s, i3);
  }
  off(s, i3) {
    this.events.off(s, i3);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(s) {
    this.shouldAbortPairingAttempt = false;
    let i3 = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (i3 >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: p3, approval: w2 } = await this.client.connect({ pairingTopic: s, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      p3 && (this.uri = p3, this.events.emit("display_uri", p3)), await w2().then((I3) => {
        this.session = I3;
        const y5 = Ha2(I3.namespaces);
        this.namespaces = Fi2(this.namespaces, y5), this.persist("namespaces", this.namespaces);
      }).catch((I3) => {
        if (I3.message !== it2)
          throw I3;
        i3++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(s, i3) {
    try {
      if (!this.session)
        return;
      const [p3, w2] = this.validateChain(s), I3 = this.getProvider(p3);
      I3.name === ze ? I3.setDefaultChain(`${p3}:${w2}`, i3) : I3.setDefaultChain(w2, i3);
    } catch (p3) {
      if (!/Please call connect/.test(p3.message))
        throw p3;
    }
  }
  async cleanupPendingPairings(s = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i3 = this.client.pairing.getAll();
    if (Nr(i3)) {
      for (const p3 of i3)
        s.deletePairings ? this.client.core.expirer.set(p3.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(p3.topic);
      this.logger.info(`Inactive pairings cleared: ${i3.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const s = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[s]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await _e3.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || ya2, relayUrl: this.providerOpts.relayUrl || Yg, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const s = [...new Set(Object.keys(this.session.namespaces).map((i3) => xo(i3)))];
    Mi3("client", this.client), Mi3("events", this.events), Mi3("disableProviderPing", this.disableProviderPing), s.forEach((i3) => {
      if (!this.session)
        return;
      const p3 = rv(i3, this.session), w2 = Ta2(p3), I3 = Fi2(this.namespaces, this.optionalNamespaces), y5 = Bi2(pr3({}, I3[i3]), { accounts: p3, chains: w2 });
      switch (i3) {
        case "eip155":
          this.rpcProviders[i3] = new hv({ namespace: y5 });
          break;
        case "algorand":
          this.rpcProviders[i3] = new dv({ namespace: y5 });
          break;
        case "solana":
          this.rpcProviders[i3] = new lv({ namespace: y5 });
          break;
        case "cosmos":
          this.rpcProviders[i3] = new pv({ namespace: y5 });
          break;
        case "polkadot":
          this.rpcProviders[i3] = new sv({ namespace: y5 });
          break;
        case "cip34":
          this.rpcProviders[i3] = new gv({ namespace: y5 });
          break;
        case "elrond":
          this.rpcProviders[i3] = new vv({ namespace: y5 });
          break;
        case "multiversx":
          this.rpcProviders[i3] = new _v({ namespace: y5 });
          break;
        case "near":
          this.rpcProviders[i3] = new mv({ namespace: y5 });
          break;
        default:
          this.rpcProviders[ze] ? this.rpcProviders[ze].updateNamespace(y5) : this.rpcProviders[ze] = new wv({ namespace: y5 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (s) => {
      this.events.emit("session_ping", s);
    }), this.client.on("session_event", (s) => {
      const { params: i3 } = s, { event: p3 } = i3;
      if (p3.name === "accountsChanged") {
        const w2 = p3.data;
        w2 && Nr(w2) && this.events.emit("accountsChanged", w2.map(iv));
      } else if (p3.name === "chainChanged") {
        const w2 = i3.chainId, I3 = i3.event.data, y5 = xo(w2), J = Wi2(w2) !== Wi2(I3) ? `${y5}:${Wi2(I3)}` : w2;
        this.onChainChanged(J);
      } else
        this.events.emit(p3.name, p3.data);
      this.events.emit("session_event", s);
    }), this.client.on("session_update", ({ topic: s, params: i3 }) => {
      var p3;
      const { namespaces: w2 } = i3, I3 = (p3 = this.client) == null ? void 0 : p3.session.get(s);
      this.session = Bi2(pr3({}, I3), { namespaces: w2 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: s, params: i3 });
    }), this.client.on("session_delete", async (s) => {
      await this.cleanup(), this.events.emit("session_delete", s), this.events.emit("disconnect", Bi2(pr3({}, er("USER_DISCONNECTED")), { data: s.topic }));
    }), this.on(Tt3.DEFAULT_CHAIN_CHANGED, (s) => {
      this.onChainChanged(s, true);
    });
  }
  getProvider(s) {
    return this.rpcProviders[s] || this.rpcProviders[ze];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((s) => {
      var i3;
      this.getProvider(s).updateNamespace((i3 = this.session) == null ? void 0 : i3.namespaces[s]);
    });
  }
  setNamespaces(s) {
    const { namespaces: i3, optionalNamespaces: p3, sessionProperties: w2 } = s;
    i3 && Object.keys(i3).length && (this.namespaces = i3), p3 && Object.keys(p3).length && (this.optionalNamespaces = p3), this.sessionProperties = w2, this.persist("namespaces", i3), this.persist("optionalNamespaces", p3);
  }
  validateChain(s) {
    const [i3, p3] = (s == null ? void 0 : s.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [i3, p3];
    if (i3 && !Object.keys(this.namespaces || {}).map((y5) => xo(y5)).includes(i3))
      throw new Error(`Namespace '${i3}' is not configured. Please call connect() first with namespace config.`);
    if (i3 && p3)
      return [i3, p3];
    const w2 = xo(Object.keys(this.namespaces)[0]), I3 = this.rpcProviders[w2].getDefaultChain();
    return [w2, I3];
  }
  async requestAccounts() {
    const [s] = this.validateChain();
    return await this.getProvider(s).requestAccounts();
  }
  onChainChanged(s, i3 = false) {
    if (!this.namespaces)
      return;
    const [p3, w2] = this.validateChain(s);
    w2 && (i3 || this.getProvider(p3).setDefaultChain(w2), this.namespaces[p3] ? this.namespaces[p3].defaultChain = w2 : this.namespaces[`${p3}:${w2}`] ? this.namespaces[`${p3}:${w2}`].defaultChain = w2 : this.namespaces[`${p3}:${w2}`] = { defaultChain: w2 }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", w2));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(s, i3) {
    this.client.core.storage.setItem(`${Sa2}/${s}`, i3);
  }
  async getFromStore(s) {
    return await this.client.core.storage.getItem(`${Sa2}/${s}`);
  }
};
var Ev = dr3;

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var R2 = "wc";
var T2 = "ethereum_provider";
var $2 = `${R2}@2:${T2}:`;
var j3 = "https://rpc.walletconnect.org/v1/";
var u2 = ["eth_sendTransaction", "personal_sign"];
var y4 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"];
var g2 = ["chainChanged", "accountsChanged"];
var b2 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var q2 = Object.defineProperty;
var N = Object.defineProperties;
var D2 = Object.getOwnPropertyDescriptors;
var M3 = Object.getOwnPropertySymbols;
var U3 = Object.prototype.hasOwnProperty;
var Q3 = Object.prototype.propertyIsEnumerable;
var O2 = (r2, t, s) => t in r2 ? q2(r2, t, { enumerable: true, configurable: true, writable: true, value: s }) : r2[t] = s;
var p2 = (r2, t) => {
  for (var s in t || (t = {}))
    U3.call(t, s) && O2(r2, s, t[s]);
  if (M3)
    for (var s of M3(t))
      Q3.call(t, s) && O2(r2, s, t[s]);
  return r2;
};
var E2 = (r2, t) => N(r2, D2(t));
function m(r2) {
  return Number(r2[0].split(":")[1]);
}
function v3(r2) {
  return `0x${r2.toString(16)}`;
}
function L(r2) {
  const { chains: t, optionalChains: s, methods: i3, optionalMethods: e, events: n2, optionalEvents: o2, rpcMap: c2 } = r2;
  if (!Nr(t))
    throw new Error("Invalid chains");
  const a2 = { chains: t, methods: i3 || u2, events: n2 || g2, rpcMap: p2({}, t.length ? { [m(t)]: c2[m(t)] } : {}) }, h3 = n2 == null ? void 0 : n2.filter((l) => !g2.includes(l)), d2 = i3 == null ? void 0 : i3.filter((l) => !u2.includes(l));
  if (!s && !o2 && !e && !(h3 != null && h3.length) && !(d2 != null && d2.length))
    return { required: t.length ? a2 : void 0 };
  const w2 = (h3 == null ? void 0 : h3.length) && (d2 == null ? void 0 : d2.length) || !s, I3 = { chains: [...new Set(w2 ? a2.chains.concat(s || []) : s)], methods: [...new Set(a2.methods.concat(e != null && e.length ? e : y4))], events: [...new Set(a2.events.concat(o2 != null && o2.length ? o2 : b2))], rpcMap: c2 };
  return { required: t.length ? a2 : void 0, optional: s.length ? I3 : void 0 };
}
var C3 = class _C {
  constructor() {
    this.events = new import_events6.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $2, this.on = (t, s) => (this.events.on(t, s), this), this.once = (t, s) => (this.events.once(t, s), this), this.removeListener = (t, s) => (this.events.removeListener(t, s), this), this.off = (t, s) => (this.events.off(t, s), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s = new _C();
    return await s.initialize(t), s;
  }
  async request(t, s) {
    return await this.signer.request(t, this.formatChainId(this.chainId), s);
  }
  sendAsync(t, s, i3) {
    this.signer.sendAsync(t, s, this.formatChainId(this.chainId), i3);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s, optional: i3 } = L(this.rpc);
    try {
      const e = await new Promise(async (o2, c2) => {
        var a2;
        this.rpc.showQrModal && ((a2 = this.modal) == null || a2.subscribeModal((h3) => {
          !h3.open && !this.signer.session && (this.signer.abortPairingAttempt(), c2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(E2(p2({ namespaces: p2({}, s && { [this.namespace]: s }) }, i3 && { optionalNamespaces: { [this.namespace]: i3 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((h3) => {
          o2(h3);
        }).catch((h3) => {
          c2(new Error(h3.message));
        });
      });
      if (!e)
        return;
      const n2 = Wo(e.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n2), this.setAccounts(n2), this.events.emit("connect", { chainId: v3(this.chainId) });
    } catch (e) {
      throw this.signer.logger.error(e), e;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t, s) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const i3 = await new Promise(async (n2, o2) => {
        var c2;
        this.rpc.showQrModal && ((c2 = this.modal) == null || c2.subscribeModal((a2) => {
          !a2.open && !this.signer.session && (this.signer.abortPairingAttempt(), o2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(E2(p2({}, t), { chains: this.rpc.chains }), s).then((a2) => {
          n2(a2);
        }).catch((a2) => {
          o2(new Error(a2.message));
        });
      }), e = i3.session;
      if (e) {
        const n2 = Wo(e.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n2), this.setAccounts(n2), this.events.emit("connect", { chainId: v3(this.chainId) });
      }
      return i3;
    } catch (i3) {
      throw this.signer.logger.error(i3), i3;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s } = t, { event: i3 } = s;
      i3.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i3.data), this.events.emit("accountsChanged", this.accounts)) : i3.name === "chainChanged" ? this.setChainId(this.formatChainId(i3.data)) : this.events.emit(i3.name, i3.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s = parseInt(t);
      this.chainId = s, this.events.emit("chainChanged", v3(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", E2(p2({}, er("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s, i3;
      this.rpc.showQrModal && ((s = this.modal) == null || s.closeModal(), (i3 = this.modal) == null || i3.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s = t.filter((i3) => this.isCompatibleChainId(i3)).map((i3) => this.parseChainId(i3));
    s.length && (this.chainId = s[0], this.events.emit("chainChanged", v3(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s = this.parseChainId(t);
      this.chainId = s, this.switchEthereumChain(s);
    }
  }
  parseAccountId(t) {
    const [s, i3, e] = t.split(":");
    return { chainId: `${s}:${i3}`, address: e };
  }
  setAccounts(t) {
    this.accounts = t.filter((s) => this.parseChainId(this.parseAccountId(s).chainId) === this.chainId).map((s) => this.parseAccountId(s).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s, i3;
    const e = (s = t == null ? void 0 : t.chains) != null ? s : [], n2 = (i3 = t == null ? void 0 : t.optionalChains) != null ? i3 : [], o2 = e.concat(n2);
    if (!o2.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const c2 = e.length ? (t == null ? void 0 : t.methods) || u2 : [], a2 = e.length ? (t == null ? void 0 : t.events) || g2 : [], h3 = (t == null ? void 0 : t.optionalMethods) || [], d2 = (t == null ? void 0 : t.optionalEvents) || [], w2 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(o2, t.projectId), I3 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: e == null ? void 0 : e.map((l) => this.formatChainId(l)), optionalChains: n2.map((l) => this.formatChainId(l)), methods: c2, events: a2, optionalMethods: h3, optionalEvents: d2, rpcMap: w2, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: I3, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s) {
    const i3 = {};
    return t.forEach((e) => {
      i3[e] = this.getRpcUrl(e, s);
    }), i3;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? m(this.rpc.chains) : m(this.rpc.optionalChains), this.signer = await Ev.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions, customStoragePrefix: t.customStoragePrefix, telemetryEnabled: t.telemetryEnabled }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s;
      try {
        const { WalletConnectModal: i3 } = await import("./dist-FS46KNZB.js");
        s = i3;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s)
        try {
          this.modal = new s(p2({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
        } catch (i3) {
          throw this.signer.logger.error(i3), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: s, optionalChains: i3, rpcMap: e } = t;
    s && Nr(s) && (this.rpc.chains = s.map((n2) => this.formatChainId(n2)), s.forEach((n2) => {
      this.rpc.rpcMap[n2] = (e == null ? void 0 : e[n2]) || this.getRpcUrl(n2);
    })), i3 && Nr(i3) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i3 == null ? void 0 : i3.map((n2) => this.formatChainId(n2)), i3.forEach((n2) => {
      this.rpc.rpcMap[n2] = (e == null ? void 0 : e[n2]) || this.getRpcUrl(n2);
    }));
  }
  getRpcUrl(t, s) {
    var i3;
    return ((i3 = this.rpc.rpcMap) == null ? void 0 : i3[t]) || `${j3}?chainId=eip155:${t}&projectId=${s || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session)
      try {
        const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
        this.setChainIds(t ? [this.formatChainId(t)] : s == null ? void 0 : s.accounts), this.setAccounts(s == null ? void 0 : s.accounts);
      } catch (t) {
        this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((s) => this.signer.logger.warn(s));
      }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s) => this.parseAccount(s));
  }
};
var x3 = C3;
export {
  x3 as EthereumProvider,
  b2 as OPTIONAL_EVENTS,
  y4 as OPTIONAL_METHODS,
  g2 as REQUIRED_EVENTS,
  u2 as REQUIRED_METHODS,
  C3 as default
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
*/
//# sourceMappingURL=index.es-QC4H33EA.js.map
