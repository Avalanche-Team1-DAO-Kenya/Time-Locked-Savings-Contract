import {
  concat,
  fromString,
  require_binary,
  require_cjs,
  require_random,
  require_wipe,
  toString
} from "./chunk-2PYUBLP3.js";
import {
  require_events
} from "./chunk-WMH57NS6.js";
import {
  __commonJS,
  __esm,
  __export,
  __reExport,
  __toCommonJS,
  __toESM
} from "./chunk-GIZG7J7H.js";

// node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o5) {
      try {
        return JSON.stringify(o5);
      } catch (e2) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f4, args, opts) {
      var ss = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f4 === "object" && f4 !== null) {
        var len = args.length + offset;
        if (len === 1)
          return f4;
        var objects = new Array(len);
        objects[0] = ss(f4);
        for (var index = 1; index < len; index++) {
          objects[index] = ss(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f4 !== "string") {
        return f4;
      }
      var argLen = args.length;
      if (argLen === 0)
        return f4;
      var str = "";
      var a3 = 1 - offset;
      var lastPos = -1;
      var flen = f4 && f4.length || 0;
      for (var i3 = 0; i3 < flen; ) {
        if (f4.charCodeAt(i3) === 37 && i3 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f4.charCodeAt(i3 + 1)) {
            case 100:
            case 102:
              if (a3 >= argLen)
                break;
              if (args[a3] == null)
                break;
              if (lastPos < i3)
                str += f4.slice(lastPos, i3);
              str += Number(args[a3]);
              lastPos = i3 + 2;
              i3++;
              break;
            case 105:
              if (a3 >= argLen)
                break;
              if (args[a3] == null)
                break;
              if (lastPos < i3)
                str += f4.slice(lastPos, i3);
              str += Math.floor(Number(args[a3]));
              lastPos = i3 + 2;
              i3++;
              break;
            case 79:
            case 111:
            case 106:
              if (a3 >= argLen)
                break;
              if (args[a3] === void 0)
                break;
              if (lastPos < i3)
                str += f4.slice(lastPos, i3);
              var type = typeof args[a3];
              if (type === "string") {
                str += "'" + args[a3] + "'";
                lastPos = i3 + 2;
                i3++;
                break;
              }
              if (type === "function") {
                str += args[a3].name || "<anonymous>";
                lastPos = i3 + 2;
                i3++;
                break;
              }
              str += ss(args[a3]);
              lastPos = i3 + 2;
              i3++;
              break;
            case 115:
              if (a3 >= argLen)
                break;
              if (lastPos < i3)
                str += f4.slice(lastPos, i3);
              str += String(args[a3]);
              lastPos = i3 + 2;
              i3++;
              break;
            case 37:
              if (lastPos < i3)
                str += f4.slice(lastPos, i3);
              str += "%";
              lastPos = i3 + 2;
              i3++;
              a3--;
              break;
          }
          ++a3;
        }
        ++i3;
      }
      if (lastPos === -1)
        return f4;
      else if (lastPos < flen) {
        str += f4.slice(lastPos);
      }
      return str;
    }
  }
});

// node_modules/pino/browser.js
var require_browser = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k3) {
          return k3 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write)
        opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1)
        stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false)
        opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log)
        logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2)
        logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set2(setOpts, logger, "error", "log");
        set2(setOpts, logger, "fatal", "error");
        set2(setOpts, logger, "warn", "error");
        set2(setOpts, logger, "info", "log");
        set2(setOpts, logger, "debug", "log");
        set2(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set2(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop)
        return;
      logger[level] = function(write) {
        return function LOG() {
          const ts = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i3 = 0; i3 < args.length; i3++)
            args[i3] = arguments[i3];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject)
            write.call(proto, asObject(this, level, args, ts));
          else
            write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue)
              return;
            transmit(this, {
              ts,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      }(logger[level]);
    }
    function asObject(logger, level, args, ts) {
      if (logger._serialize)
        applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o5 = {};
      if (ts) {
        o5.time = ts;
      }
      o5.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1)
        lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o5, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string")
        msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0)
        o5.msg = msg;
      return o5;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i3 in args) {
        if (stdErrSerialize && args[i3] instanceof Error) {
          args[i3] = pino.stdSerializers.err(args[i3]);
        } else if (typeof args[i3] === "object" && !Array.isArray(args[i3])) {
          for (const k3 in args[i3]) {
            if (serialize && serialize.indexOf(k3) > -1 && k3 in serializers) {
              args[i3][k3] = serializers[k3](args[i3][k3]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i3 = 1; i3 < args.length; i3++) {
          args[i3] = arguments[i3 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a3) {
      return a3;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o5) {
        return typeof o5 !== "undefined" && o5;
      }
      try {
        if (typeof globalThis !== "undefined")
          return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e2) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/@stablelib/sha512/lib/sha512.js
var require_sha512 = __commonJS({
  "node_modules/@stablelib/sha512/lib/sha512.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 64;
    exports.BLOCK_SIZE = 128;
    var SHA512 = (
      /** @class */
      function() {
        function SHA5122() {
          this.digestLength = exports.DIGEST_LENGTH;
          this.blockSize = exports.BLOCK_SIZE;
          this._stateHi = new Int32Array(8);
          this._stateLo = new Int32Array(8);
          this._tempHi = new Int32Array(16);
          this._tempLo = new Int32Array(16);
          this._buffer = new Uint8Array(256);
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          this.reset();
        }
        SHA5122.prototype._initState = function() {
          this._stateHi[0] = 1779033703;
          this._stateHi[1] = 3144134277;
          this._stateHi[2] = 1013904242;
          this._stateHi[3] = 2773480762;
          this._stateHi[4] = 1359893119;
          this._stateHi[5] = 2600822924;
          this._stateHi[6] = 528734635;
          this._stateHi[7] = 1541459225;
          this._stateLo[0] = 4089235720;
          this._stateLo[1] = 2227873595;
          this._stateLo[2] = 4271175723;
          this._stateLo[3] = 1595750129;
          this._stateLo[4] = 2917565137;
          this._stateLo[5] = 725511199;
          this._stateLo[6] = 4215389547;
          this._stateLo[7] = 327033209;
        };
        SHA5122.prototype.reset = function() {
          this._initState();
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._tempHi);
          wipe_1.wipe(this._tempLo);
          this.reset();
        };
        SHA5122.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
              this._buffer[this._bufferLength++] = data[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          return this;
        };
        SHA5122.prototype.finish = function(out) {
          if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 536870912 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 128 < 112 ? 128 : 256;
            this._buffer[left] = 128;
            for (var i3 = left + 1; i3 < padLength - 8; i3++) {
              this._buffer[i3] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
          }
          for (var i3 = 0; i3 < this.digestLength / 8; i3++) {
            binary_1.writeUint32BE(this._stateHi[i3], out, i3 * 8);
            binary_1.writeUint32BE(this._stateLo[i3], out, i3 * 8 + 4);
          }
          return this;
        };
        SHA5122.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        SHA5122.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
          }
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        };
        SHA5122.prototype.restoreState = function(savedState) {
          this._stateHi.set(savedState.stateHi);
          this._stateLo.set(savedState.stateLo);
          this._bufferLength = savedState.bufferLength;
          if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
          }
          this._bytesHashed = savedState.bytesHashed;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.stateHi);
          wipe_1.wipe(savedState.stateLo);
          if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
          }
          savedState.bufferLength = 0;
          savedState.bytesHashed = 0;
        };
        return SHA5122;
      }()
    );
    exports.SHA512 = SHA512;
    var K2 = new Int32Array([
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
    ]);
    function hashBlocks(wh, wl, hh, hl, m3, pos, len) {
      var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
      var h4, l5;
      var th, tl;
      var a3, b3, c5, d3;
      while (len >= 128) {
        for (var i3 = 0; i3 < 16; i3++) {
          var j3 = 8 * i3 + pos;
          wh[i3] = binary_1.readUint32BE(m3, j3);
          wl[i3] = binary_1.readUint32BE(m3, j3 + 4);
        }
        for (var i3 = 0; i3 < 80; i3++) {
          var bh0 = ah0;
          var bh1 = ah1;
          var bh2 = ah2;
          var bh3 = ah3;
          var bh4 = ah4;
          var bh5 = ah5;
          var bh6 = ah6;
          var bh7 = ah7;
          var bl0 = al0;
          var bl1 = al1;
          var bl2 = al2;
          var bl3 = al3;
          var bl4 = al4;
          var bl5 = al5;
          var bl6 = al6;
          var bl7 = al7;
          h4 = ah7;
          l5 = al7;
          a3 = l5 & 65535;
          b3 = l5 >>> 16;
          c5 = h4 & 65535;
          d3 = h4 >>> 16;
          h4 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
          l5 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
          a3 += l5 & 65535;
          b3 += l5 >>> 16;
          c5 += h4 & 65535;
          d3 += h4 >>> 16;
          h4 = ah4 & ah5 ^ ~ah4 & ah6;
          l5 = al4 & al5 ^ ~al4 & al6;
          a3 += l5 & 65535;
          b3 += l5 >>> 16;
          c5 += h4 & 65535;
          d3 += h4 >>> 16;
          h4 = K2[i3 * 2];
          l5 = K2[i3 * 2 + 1];
          a3 += l5 & 65535;
          b3 += l5 >>> 16;
          c5 += h4 & 65535;
          d3 += h4 >>> 16;
          h4 = wh[i3 % 16];
          l5 = wl[i3 % 16];
          a3 += l5 & 65535;
          b3 += l5 >>> 16;
          c5 += h4 & 65535;
          d3 += h4 >>> 16;
          b3 += a3 >>> 16;
          c5 += b3 >>> 16;
          d3 += c5 >>> 16;
          th = c5 & 65535 | d3 << 16;
          tl = a3 & 65535 | b3 << 16;
          h4 = th;
          l5 = tl;
          a3 = l5 & 65535;
          b3 = l5 >>> 16;
          c5 = h4 & 65535;
          d3 = h4 >>> 16;
          h4 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
          l5 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
          a3 += l5 & 65535;
          b3 += l5 >>> 16;
          c5 += h4 & 65535;
          d3 += h4 >>> 16;
          h4 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
          l5 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
          a3 += l5 & 65535;
          b3 += l5 >>> 16;
          c5 += h4 & 65535;
          d3 += h4 >>> 16;
          b3 += a3 >>> 16;
          c5 += b3 >>> 16;
          d3 += c5 >>> 16;
          bh7 = c5 & 65535 | d3 << 16;
          bl7 = a3 & 65535 | b3 << 16;
          h4 = bh3;
          l5 = bl3;
          a3 = l5 & 65535;
          b3 = l5 >>> 16;
          c5 = h4 & 65535;
          d3 = h4 >>> 16;
          h4 = th;
          l5 = tl;
          a3 += l5 & 65535;
          b3 += l5 >>> 16;
          c5 += h4 & 65535;
          d3 += h4 >>> 16;
          b3 += a3 >>> 16;
          c5 += b3 >>> 16;
          d3 += c5 >>> 16;
          bh3 = c5 & 65535 | d3 << 16;
          bl3 = a3 & 65535 | b3 << 16;
          ah1 = bh0;
          ah2 = bh1;
          ah3 = bh2;
          ah4 = bh3;
          ah5 = bh4;
          ah6 = bh5;
          ah7 = bh6;
          ah0 = bh7;
          al1 = bl0;
          al2 = bl1;
          al3 = bl2;
          al4 = bl3;
          al5 = bl4;
          al6 = bl5;
          al7 = bl6;
          al0 = bl7;
          if (i3 % 16 === 15) {
            for (var j3 = 0; j3 < 16; j3++) {
              h4 = wh[j3];
              l5 = wl[j3];
              a3 = l5 & 65535;
              b3 = l5 >>> 16;
              c5 = h4 & 65535;
              d3 = h4 >>> 16;
              h4 = wh[(j3 + 9) % 16];
              l5 = wl[(j3 + 9) % 16];
              a3 += l5 & 65535;
              b3 += l5 >>> 16;
              c5 += h4 & 65535;
              d3 += h4 >>> 16;
              th = wh[(j3 + 1) % 16];
              tl = wl[(j3 + 1) % 16];
              h4 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
              l5 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
              a3 += l5 & 65535;
              b3 += l5 >>> 16;
              c5 += h4 & 65535;
              d3 += h4 >>> 16;
              th = wh[(j3 + 14) % 16];
              tl = wl[(j3 + 14) % 16];
              h4 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
              l5 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
              a3 += l5 & 65535;
              b3 += l5 >>> 16;
              c5 += h4 & 65535;
              d3 += h4 >>> 16;
              b3 += a3 >>> 16;
              c5 += b3 >>> 16;
              d3 += c5 >>> 16;
              wh[j3] = c5 & 65535 | d3 << 16;
              wl[j3] = a3 & 65535 | b3 << 16;
            }
          }
        }
        h4 = ah0;
        l5 = al0;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[0];
        l5 = hl[0];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[0] = ah0 = c5 & 65535 | d3 << 16;
        hl[0] = al0 = a3 & 65535 | b3 << 16;
        h4 = ah1;
        l5 = al1;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[1];
        l5 = hl[1];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[1] = ah1 = c5 & 65535 | d3 << 16;
        hl[1] = al1 = a3 & 65535 | b3 << 16;
        h4 = ah2;
        l5 = al2;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[2];
        l5 = hl[2];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[2] = ah2 = c5 & 65535 | d3 << 16;
        hl[2] = al2 = a3 & 65535 | b3 << 16;
        h4 = ah3;
        l5 = al3;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[3];
        l5 = hl[3];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[3] = ah3 = c5 & 65535 | d3 << 16;
        hl[3] = al3 = a3 & 65535 | b3 << 16;
        h4 = ah4;
        l5 = al4;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[4];
        l5 = hl[4];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[4] = ah4 = c5 & 65535 | d3 << 16;
        hl[4] = al4 = a3 & 65535 | b3 << 16;
        h4 = ah5;
        l5 = al5;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[5];
        l5 = hl[5];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[5] = ah5 = c5 & 65535 | d3 << 16;
        hl[5] = al5 = a3 & 65535 | b3 << 16;
        h4 = ah6;
        l5 = al6;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[6];
        l5 = hl[6];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[6] = ah6 = c5 & 65535 | d3 << 16;
        hl[6] = al6 = a3 & 65535 | b3 << 16;
        h4 = ah7;
        l5 = al7;
        a3 = l5 & 65535;
        b3 = l5 >>> 16;
        c5 = h4 & 65535;
        d3 = h4 >>> 16;
        h4 = hh[7];
        l5 = hl[7];
        a3 += l5 & 65535;
        b3 += l5 >>> 16;
        c5 += h4 & 65535;
        d3 += h4 >>> 16;
        b3 += a3 >>> 16;
        c5 += b3 >>> 16;
        d3 += c5 >>> 16;
        hh[7] = ah7 = c5 & 65535 | d3 << 16;
        hl[7] = al7 = a3 & 65535 | b3 << 16;
        pos += 128;
        len -= 128;
      }
      return pos;
    }
    function hash(data) {
      var h4 = new SHA512();
      h4.update(data);
      var digest = h4.digest();
      h4.clean();
      return digest;
    }
    exports.hash = hash;
  }
});

// node_modules/@stablelib/ed25519/lib/ed25519.js
var require_ed25519 = __commonJS({
  "node_modules/@stablelib/ed25519/lib/ed25519.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
    var random_1 = require_random();
    var sha512_1 = require_sha512();
    var wipe_1 = require_wipe();
    exports.SIGNATURE_LENGTH = 64;
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 64;
    exports.SEED_LENGTH = 32;
    function gf(init) {
      const r3 = new Float64Array(16);
      if (init) {
        for (let i3 = 0; i3 < init.length; i3++) {
          r3[i3] = init[i3];
        }
      }
      return r3;
    }
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf();
    var gf1 = gf([1]);
    var D2 = gf([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]);
    var D22 = gf([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]);
    var X = gf([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]);
    var Y = gf([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]);
    var I2 = gf([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function set25519(r3, a3) {
      for (let i3 = 0; i3 < 16; i3++) {
        r3[i3] = a3[i3] | 0;
      }
    }
    function car25519(o5) {
      let c5 = 1;
      for (let i3 = 0; i3 < 16; i3++) {
        let v3 = o5[i3] + c5 + 65535;
        c5 = Math.floor(v3 / 65536);
        o5[i3] = v3 - c5 * 65536;
      }
      o5[0] += c5 - 1 + 37 * (c5 - 1);
    }
    function sel25519(p3, q, b3) {
      const c5 = ~(b3 - 1);
      for (let i3 = 0; i3 < 16; i3++) {
        const t = c5 & (p3[i3] ^ q[i3]);
        p3[i3] ^= t;
        q[i3] ^= t;
      }
    }
    function pack25519(o5, n4) {
      const m3 = gf();
      const t = gf();
      for (let i3 = 0; i3 < 16; i3++) {
        t[i3] = n4[i3];
      }
      car25519(t);
      car25519(t);
      car25519(t);
      for (let j3 = 0; j3 < 2; j3++) {
        m3[0] = t[0] - 65517;
        for (let i3 = 1; i3 < 15; i3++) {
          m3[i3] = t[i3] - 65535 - (m3[i3 - 1] >> 16 & 1);
          m3[i3 - 1] &= 65535;
        }
        m3[15] = t[15] - 32767 - (m3[14] >> 16 & 1);
        const b3 = m3[15] >> 16 & 1;
        m3[14] &= 65535;
        sel25519(t, m3, 1 - b3);
      }
      for (let i3 = 0; i3 < 16; i3++) {
        o5[2 * i3] = t[i3] & 255;
        o5[2 * i3 + 1] = t[i3] >> 8;
      }
    }
    function verify32(x3, y4) {
      let d3 = 0;
      for (let i3 = 0; i3 < 32; i3++) {
        d3 |= x3[i3] ^ y4[i3];
      }
      return (1 & d3 - 1 >>> 8) - 1;
    }
    function neq25519(a3, b3) {
      const c5 = new Uint8Array(32);
      const d3 = new Uint8Array(32);
      pack25519(c5, a3);
      pack25519(d3, b3);
      return verify32(c5, d3);
    }
    function par25519(a3) {
      const d3 = new Uint8Array(32);
      pack25519(d3, a3);
      return d3[0] & 1;
    }
    function unpack25519(o5, n4) {
      for (let i3 = 0; i3 < 16; i3++) {
        o5[i3] = n4[2 * i3] + (n4[2 * i3 + 1] << 8);
      }
      o5[15] &= 32767;
    }
    function add(o5, a3, b3) {
      for (let i3 = 0; i3 < 16; i3++) {
        o5[i3] = a3[i3] + b3[i3];
      }
    }
    function sub(o5, a3, b3) {
      for (let i3 = 0; i3 < 16; i3++) {
        o5[i3] = a3[i3] - b3[i3];
      }
    }
    function mul(o5, a3, b3) {
      let v3, c5, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
      v3 = a3[0];
      t0 += v3 * b0;
      t1 += v3 * b1;
      t2 += v3 * b22;
      t3 += v3 * b32;
      t4 += v3 * b4;
      t5 += v3 * b5;
      t6 += v3 * b6;
      t7 += v3 * b7;
      t8 += v3 * b8;
      t9 += v3 * b9;
      t10 += v3 * b10;
      t11 += v3 * b11;
      t12 += v3 * b12;
      t13 += v3 * b13;
      t14 += v3 * b14;
      t15 += v3 * b15;
      v3 = a3[1];
      t1 += v3 * b0;
      t2 += v3 * b1;
      t3 += v3 * b22;
      t4 += v3 * b32;
      t5 += v3 * b4;
      t6 += v3 * b5;
      t7 += v3 * b6;
      t8 += v3 * b7;
      t9 += v3 * b8;
      t10 += v3 * b9;
      t11 += v3 * b10;
      t12 += v3 * b11;
      t13 += v3 * b12;
      t14 += v3 * b13;
      t15 += v3 * b14;
      t16 += v3 * b15;
      v3 = a3[2];
      t2 += v3 * b0;
      t3 += v3 * b1;
      t4 += v3 * b22;
      t5 += v3 * b32;
      t6 += v3 * b4;
      t7 += v3 * b5;
      t8 += v3 * b6;
      t9 += v3 * b7;
      t10 += v3 * b8;
      t11 += v3 * b9;
      t12 += v3 * b10;
      t13 += v3 * b11;
      t14 += v3 * b12;
      t15 += v3 * b13;
      t16 += v3 * b14;
      t17 += v3 * b15;
      v3 = a3[3];
      t3 += v3 * b0;
      t4 += v3 * b1;
      t5 += v3 * b22;
      t6 += v3 * b32;
      t7 += v3 * b4;
      t8 += v3 * b5;
      t9 += v3 * b6;
      t10 += v3 * b7;
      t11 += v3 * b8;
      t12 += v3 * b9;
      t13 += v3 * b10;
      t14 += v3 * b11;
      t15 += v3 * b12;
      t16 += v3 * b13;
      t17 += v3 * b14;
      t18 += v3 * b15;
      v3 = a3[4];
      t4 += v3 * b0;
      t5 += v3 * b1;
      t6 += v3 * b22;
      t7 += v3 * b32;
      t8 += v3 * b4;
      t9 += v3 * b5;
      t10 += v3 * b6;
      t11 += v3 * b7;
      t12 += v3 * b8;
      t13 += v3 * b9;
      t14 += v3 * b10;
      t15 += v3 * b11;
      t16 += v3 * b12;
      t17 += v3 * b13;
      t18 += v3 * b14;
      t19 += v3 * b15;
      v3 = a3[5];
      t5 += v3 * b0;
      t6 += v3 * b1;
      t7 += v3 * b22;
      t8 += v3 * b32;
      t9 += v3 * b4;
      t10 += v3 * b5;
      t11 += v3 * b6;
      t12 += v3 * b7;
      t13 += v3 * b8;
      t14 += v3 * b9;
      t15 += v3 * b10;
      t16 += v3 * b11;
      t17 += v3 * b12;
      t18 += v3 * b13;
      t19 += v3 * b14;
      t20 += v3 * b15;
      v3 = a3[6];
      t6 += v3 * b0;
      t7 += v3 * b1;
      t8 += v3 * b22;
      t9 += v3 * b32;
      t10 += v3 * b4;
      t11 += v3 * b5;
      t12 += v3 * b6;
      t13 += v3 * b7;
      t14 += v3 * b8;
      t15 += v3 * b9;
      t16 += v3 * b10;
      t17 += v3 * b11;
      t18 += v3 * b12;
      t19 += v3 * b13;
      t20 += v3 * b14;
      t21 += v3 * b15;
      v3 = a3[7];
      t7 += v3 * b0;
      t8 += v3 * b1;
      t9 += v3 * b22;
      t10 += v3 * b32;
      t11 += v3 * b4;
      t12 += v3 * b5;
      t13 += v3 * b6;
      t14 += v3 * b7;
      t15 += v3 * b8;
      t16 += v3 * b9;
      t17 += v3 * b10;
      t18 += v3 * b11;
      t19 += v3 * b12;
      t20 += v3 * b13;
      t21 += v3 * b14;
      t22 += v3 * b15;
      v3 = a3[8];
      t8 += v3 * b0;
      t9 += v3 * b1;
      t10 += v3 * b22;
      t11 += v3 * b32;
      t12 += v3 * b4;
      t13 += v3 * b5;
      t14 += v3 * b6;
      t15 += v3 * b7;
      t16 += v3 * b8;
      t17 += v3 * b9;
      t18 += v3 * b10;
      t19 += v3 * b11;
      t20 += v3 * b12;
      t21 += v3 * b13;
      t22 += v3 * b14;
      t23 += v3 * b15;
      v3 = a3[9];
      t9 += v3 * b0;
      t10 += v3 * b1;
      t11 += v3 * b22;
      t12 += v3 * b32;
      t13 += v3 * b4;
      t14 += v3 * b5;
      t15 += v3 * b6;
      t16 += v3 * b7;
      t17 += v3 * b8;
      t18 += v3 * b9;
      t19 += v3 * b10;
      t20 += v3 * b11;
      t21 += v3 * b12;
      t22 += v3 * b13;
      t23 += v3 * b14;
      t24 += v3 * b15;
      v3 = a3[10];
      t10 += v3 * b0;
      t11 += v3 * b1;
      t12 += v3 * b22;
      t13 += v3 * b32;
      t14 += v3 * b4;
      t15 += v3 * b5;
      t16 += v3 * b6;
      t17 += v3 * b7;
      t18 += v3 * b8;
      t19 += v3 * b9;
      t20 += v3 * b10;
      t21 += v3 * b11;
      t22 += v3 * b12;
      t23 += v3 * b13;
      t24 += v3 * b14;
      t25 += v3 * b15;
      v3 = a3[11];
      t11 += v3 * b0;
      t12 += v3 * b1;
      t13 += v3 * b22;
      t14 += v3 * b32;
      t15 += v3 * b4;
      t16 += v3 * b5;
      t17 += v3 * b6;
      t18 += v3 * b7;
      t19 += v3 * b8;
      t20 += v3 * b9;
      t21 += v3 * b10;
      t22 += v3 * b11;
      t23 += v3 * b12;
      t24 += v3 * b13;
      t25 += v3 * b14;
      t26 += v3 * b15;
      v3 = a3[12];
      t12 += v3 * b0;
      t13 += v3 * b1;
      t14 += v3 * b22;
      t15 += v3 * b32;
      t16 += v3 * b4;
      t17 += v3 * b5;
      t18 += v3 * b6;
      t19 += v3 * b7;
      t20 += v3 * b8;
      t21 += v3 * b9;
      t22 += v3 * b10;
      t23 += v3 * b11;
      t24 += v3 * b12;
      t25 += v3 * b13;
      t26 += v3 * b14;
      t27 += v3 * b15;
      v3 = a3[13];
      t13 += v3 * b0;
      t14 += v3 * b1;
      t15 += v3 * b22;
      t16 += v3 * b32;
      t17 += v3 * b4;
      t18 += v3 * b5;
      t19 += v3 * b6;
      t20 += v3 * b7;
      t21 += v3 * b8;
      t22 += v3 * b9;
      t23 += v3 * b10;
      t24 += v3 * b11;
      t25 += v3 * b12;
      t26 += v3 * b13;
      t27 += v3 * b14;
      t28 += v3 * b15;
      v3 = a3[14];
      t14 += v3 * b0;
      t15 += v3 * b1;
      t16 += v3 * b22;
      t17 += v3 * b32;
      t18 += v3 * b4;
      t19 += v3 * b5;
      t20 += v3 * b6;
      t21 += v3 * b7;
      t22 += v3 * b8;
      t23 += v3 * b9;
      t24 += v3 * b10;
      t25 += v3 * b11;
      t26 += v3 * b12;
      t27 += v3 * b13;
      t28 += v3 * b14;
      t29 += v3 * b15;
      v3 = a3[15];
      t15 += v3 * b0;
      t16 += v3 * b1;
      t17 += v3 * b22;
      t18 += v3 * b32;
      t19 += v3 * b4;
      t20 += v3 * b5;
      t21 += v3 * b6;
      t22 += v3 * b7;
      t23 += v3 * b8;
      t24 += v3 * b9;
      t25 += v3 * b10;
      t26 += v3 * b11;
      t27 += v3 * b12;
      t28 += v3 * b13;
      t29 += v3 * b14;
      t30 += v3 * b15;
      t0 += 38 * t16;
      t1 += 38 * t17;
      t2 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t22;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c5 = 1;
      v3 = t0 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t0 = v3 - c5 * 65536;
      v3 = t1 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t1 = v3 - c5 * 65536;
      v3 = t2 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t2 = v3 - c5 * 65536;
      v3 = t3 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t3 = v3 - c5 * 65536;
      v3 = t4 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t4 = v3 - c5 * 65536;
      v3 = t5 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t5 = v3 - c5 * 65536;
      v3 = t6 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t6 = v3 - c5 * 65536;
      v3 = t7 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t7 = v3 - c5 * 65536;
      v3 = t8 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t8 = v3 - c5 * 65536;
      v3 = t9 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t9 = v3 - c5 * 65536;
      v3 = t10 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t10 = v3 - c5 * 65536;
      v3 = t11 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t11 = v3 - c5 * 65536;
      v3 = t12 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t12 = v3 - c5 * 65536;
      v3 = t13 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t13 = v3 - c5 * 65536;
      v3 = t14 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t14 = v3 - c5 * 65536;
      v3 = t15 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t15 = v3 - c5 * 65536;
      t0 += c5 - 1 + 37 * (c5 - 1);
      c5 = 1;
      v3 = t0 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t0 = v3 - c5 * 65536;
      v3 = t1 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t1 = v3 - c5 * 65536;
      v3 = t2 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t2 = v3 - c5 * 65536;
      v3 = t3 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t3 = v3 - c5 * 65536;
      v3 = t4 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t4 = v3 - c5 * 65536;
      v3 = t5 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t5 = v3 - c5 * 65536;
      v3 = t6 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t6 = v3 - c5 * 65536;
      v3 = t7 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t7 = v3 - c5 * 65536;
      v3 = t8 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t8 = v3 - c5 * 65536;
      v3 = t9 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t9 = v3 - c5 * 65536;
      v3 = t10 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t10 = v3 - c5 * 65536;
      v3 = t11 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t11 = v3 - c5 * 65536;
      v3 = t12 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t12 = v3 - c5 * 65536;
      v3 = t13 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t13 = v3 - c5 * 65536;
      v3 = t14 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t14 = v3 - c5 * 65536;
      v3 = t15 + c5 + 65535;
      c5 = Math.floor(v3 / 65536);
      t15 = v3 - c5 * 65536;
      t0 += c5 - 1 + 37 * (c5 - 1);
      o5[0] = t0;
      o5[1] = t1;
      o5[2] = t2;
      o5[3] = t3;
      o5[4] = t4;
      o5[5] = t5;
      o5[6] = t6;
      o5[7] = t7;
      o5[8] = t8;
      o5[9] = t9;
      o5[10] = t10;
      o5[11] = t11;
      o5[12] = t12;
      o5[13] = t13;
      o5[14] = t14;
      o5[15] = t15;
    }
    function square(o5, a3) {
      mul(o5, a3, a3);
    }
    function inv25519(o5, i3) {
      const c5 = gf();
      let a3;
      for (a3 = 0; a3 < 16; a3++) {
        c5[a3] = i3[a3];
      }
      for (a3 = 253; a3 >= 0; a3--) {
        square(c5, c5);
        if (a3 !== 2 && a3 !== 4) {
          mul(c5, c5, i3);
        }
      }
      for (a3 = 0; a3 < 16; a3++) {
        o5[a3] = c5[a3];
      }
    }
    function pow2523(o5, i3) {
      const c5 = gf();
      let a3;
      for (a3 = 0; a3 < 16; a3++) {
        c5[a3] = i3[a3];
      }
      for (a3 = 250; a3 >= 0; a3--) {
        square(c5, c5);
        if (a3 !== 1) {
          mul(c5, c5, i3);
        }
      }
      for (a3 = 0; a3 < 16; a3++) {
        o5[a3] = c5[a3];
      }
    }
    function edadd(p3, q) {
      const a3 = gf(), b3 = gf(), c5 = gf(), d3 = gf(), e2 = gf(), f4 = gf(), g3 = gf(), h4 = gf(), t = gf();
      sub(a3, p3[1], p3[0]);
      sub(t, q[1], q[0]);
      mul(a3, a3, t);
      add(b3, p3[0], p3[1]);
      add(t, q[0], q[1]);
      mul(b3, b3, t);
      mul(c5, p3[3], q[3]);
      mul(c5, c5, D22);
      mul(d3, p3[2], q[2]);
      add(d3, d3, d3);
      sub(e2, b3, a3);
      sub(f4, d3, c5);
      add(g3, d3, c5);
      add(h4, b3, a3);
      mul(p3[0], e2, f4);
      mul(p3[1], h4, g3);
      mul(p3[2], g3, f4);
      mul(p3[3], e2, h4);
    }
    function cswap(p3, q, b3) {
      for (let i3 = 0; i3 < 4; i3++) {
        sel25519(p3[i3], q[i3], b3);
      }
    }
    function pack(r3, p3) {
      const tx = gf(), ty = gf(), zi = gf();
      inv25519(zi, p3[2]);
      mul(tx, p3[0], zi);
      mul(ty, p3[1], zi);
      pack25519(r3, ty);
      r3[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p3, q, s3) {
      set25519(p3[0], gf0);
      set25519(p3[1], gf1);
      set25519(p3[2], gf1);
      set25519(p3[3], gf0);
      for (let i3 = 255; i3 >= 0; --i3) {
        const b3 = s3[i3 / 8 | 0] >> (i3 & 7) & 1;
        cswap(p3, q, b3);
        edadd(q, p3);
        edadd(p3, p3);
        cswap(p3, q, b3);
      }
    }
    function scalarbase(p3, s3) {
      const q = [gf(), gf(), gf(), gf()];
      set25519(q[0], X);
      set25519(q[1], Y);
      set25519(q[2], gf1);
      mul(q[3], X, Y);
      scalarmult(p3, q, s3);
    }
    function generateKeyPairFromSeed2(seed) {
      if (seed.length !== exports.SEED_LENGTH) {
        throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
      }
      const d3 = (0, sha512_1.hash)(seed);
      d3[0] &= 248;
      d3[31] &= 127;
      d3[31] |= 64;
      const publicKey = new Uint8Array(32);
      const p3 = [gf(), gf(), gf(), gf()];
      scalarbase(p3, d3);
      pack(publicKey, p3);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey, 32);
      return {
        publicKey,
        secretKey
      };
    }
    exports.generateKeyPairFromSeed = generateKeyPairFromSeed2;
    function generateKeyPair2(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed2(seed);
      (0, wipe_1.wipe)(seed);
      return result;
    }
    exports.generateKeyPair = generateKeyPair2;
    function extractPublicKeyFromSecretKey(secretKey) {
      if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
      }
      return new Uint8Array(secretKey.subarray(32));
    }
    exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
    var L3 = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function modL(r3, x3) {
      let carry;
      let i3;
      let j3;
      let k3;
      for (i3 = 63; i3 >= 32; --i3) {
        carry = 0;
        for (j3 = i3 - 32, k3 = i3 - 12; j3 < k3; ++j3) {
          x3[j3] += carry - 16 * x3[i3] * L3[j3 - (i3 - 32)];
          carry = Math.floor((x3[j3] + 128) / 256);
          x3[j3] -= carry * 256;
        }
        x3[j3] += carry;
        x3[i3] = 0;
      }
      carry = 0;
      for (j3 = 0; j3 < 32; j3++) {
        x3[j3] += carry - (x3[31] >> 4) * L3[j3];
        carry = x3[j3] >> 8;
        x3[j3] &= 255;
      }
      for (j3 = 0; j3 < 32; j3++) {
        x3[j3] -= carry * L3[j3];
      }
      for (i3 = 0; i3 < 32; i3++) {
        x3[i3 + 1] += x3[i3] >> 8;
        r3[i3] = x3[i3] & 255;
      }
    }
    function reduce(r3) {
      const x3 = new Float64Array(64);
      for (let i3 = 0; i3 < 64; i3++) {
        x3[i3] = r3[i3];
      }
      for (let i3 = 0; i3 < 64; i3++) {
        r3[i3] = 0;
      }
      modL(r3, x3);
    }
    function sign2(secretKey, message) {
      const x3 = new Float64Array(64);
      const p3 = [gf(), gf(), gf(), gf()];
      const d3 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d3[0] &= 248;
      d3[31] &= 127;
      d3[31] |= 64;
      const signature = new Uint8Array(64);
      signature.set(d3.subarray(32), 32);
      const hs = new sha512_1.SHA512();
      hs.update(signature.subarray(32));
      hs.update(message);
      const r3 = hs.digest();
      hs.clean();
      reduce(r3);
      scalarbase(p3, r3);
      pack(signature, p3);
      hs.reset();
      hs.update(signature.subarray(0, 32));
      hs.update(secretKey.subarray(32));
      hs.update(message);
      const h4 = hs.digest();
      reduce(h4);
      for (let i3 = 0; i3 < 32; i3++) {
        x3[i3] = r3[i3];
      }
      for (let i3 = 0; i3 < 32; i3++) {
        for (let j3 = 0; j3 < 32; j3++) {
          x3[i3 + j3] += h4[i3] * d3[j3];
        }
      }
      modL(signature.subarray(32), x3);
      return signature;
    }
    exports.sign = sign2;
    function unpackneg(r3, p3) {
      const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
      set25519(r3[2], gf1);
      unpack25519(r3[1], p3);
      square(num, r3[1]);
      mul(den, num, D2);
      sub(num, num, r3[2]);
      add(den, r3[2], den);
      square(den2, den);
      square(den4, den2);
      mul(den6, den4, den2);
      mul(t, den6, num);
      mul(t, t, den);
      pow2523(t, t);
      mul(t, t, num);
      mul(t, t, den);
      mul(t, t, den);
      mul(r3[0], t, den);
      square(chk, r3[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        mul(r3[0], r3[0], I2);
      }
      square(chk, r3[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        return -1;
      }
      if (par25519(r3[0]) === p3[31] >> 7) {
        sub(r3[0], gf0, r3[0]);
      }
      mul(r3[3], r3[0], r3[1]);
      return 0;
    }
    function verify2(publicKey, message, signature) {
      const t = new Uint8Array(32);
      const p3 = [gf(), gf(), gf(), gf()];
      const q = [gf(), gf(), gf(), gf()];
      if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
      }
      if (unpackneg(q, publicKey)) {
        return false;
      }
      const hs = new sha512_1.SHA512();
      hs.update(signature.subarray(0, 32));
      hs.update(publicKey);
      hs.update(message);
      const h4 = hs.digest();
      reduce(h4);
      scalarmult(p3, q, h4);
      scalarbase(q, signature.subarray(32));
      edadd(p3, q);
      pack(t, p3);
      if (verify32(signature, t)) {
        return false;
      }
      return true;
    }
    exports.verify = verify2;
    function convertPublicKeyToX25519(publicKey) {
      let q = [gf(), gf(), gf(), gf()];
      if (unpackneg(q, publicKey)) {
        throw new Error("Ed25519: invalid public key");
      }
      let a3 = gf();
      let b3 = gf();
      let y4 = q[1];
      add(a3, gf1, y4);
      sub(b3, gf1, y4);
      inv25519(b3, b3);
      mul(a3, a3, b3);
      let z3 = new Uint8Array(32);
      pack25519(z3, a3);
      return z3;
    }
    exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
    function convertSecretKeyToX25519(secretKey) {
      const d3 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d3[0] &= 248;
      d3[31] &= 127;
      d3[31] |= 64;
      const o5 = new Uint8Array(d3.subarray(0, 32));
      (0, wipe_1.wipe)(d3);
      return o5;
    }
    exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
  }
});

// node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d3, b3) {
  extendStatics(d3, b3);
  function __() {
    this.constructor = d3;
  }
  d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
}
function __rest(s3, e2) {
  var t = {};
  for (var p3 in s3)
    if (Object.prototype.hasOwnProperty.call(s3, p3) && e2.indexOf(p3) < 0)
      t[p3] = s3[p3];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
      if (e2.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
        t[p3[i3]] = s3[p3[i3]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c5 = arguments.length, r3 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r3 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i3 = decorators.length - 1; i3 >= 0; i3--)
      if (d3 = decorators[i3])
        r3 = (c5 < 3 ? d3(r3) : c5 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
  return c5 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f4, y4, t, g3;
  return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
    return this;
  }), g3;
  function verb(n4) {
    return function(v3) {
      return step([n4, v3]);
    };
  }
  function step(op) {
    if (f4)
      throw new TypeError("Generator is already executing.");
    while (_3)
      try {
        if (f4 = 1, y4 && (t = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t = y4["return"]) && t.call(y4), 0) : y4.next) && !(t = t.call(y4, op[1])).done)
          return t;
        if (y4 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y4 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e2) {
        op = [6, e2];
        y4 = 0;
      } finally {
        f4 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o5, m3, k3, k22) {
  if (k22 === void 0)
    k22 = k3;
  o5[k22] = m3[k3];
}
function __exportStar(m3, exports) {
  for (var p3 in m3)
    if (p3 !== "default" && !exports.hasOwnProperty(p3))
      exports[p3] = m3[p3];
}
function __values(o5) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o5[s3], i3 = 0;
  if (m3)
    return m3.call(o5);
  if (o5 && typeof o5.length === "number")
    return {
      next: function() {
        if (o5 && i3 >= o5.length)
          o5 = void 0;
        return { value: o5 && o5[i3++], done: !o5 };
      }
    };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o5, n4) {
  var m3 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m3)
    return o5;
  var i3 = m3.call(o5), r3, ar = [], e2;
  try {
    while ((n4 === void 0 || n4-- > 0) && !(r3 = i3.next()).done)
      ar.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m3 = i3["return"]))
        m3.call(i3);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
    ar = ar.concat(__read(arguments[i3]));
  return ar;
}
function __spreadArrays() {
  for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++)
    s3 += arguments[i3].length;
  for (var r3 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
    for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
      r3[k3] = a3[j3];
  return r3;
}
function __await(v3) {
  return this instanceof __await ? (this.v = v3, this) : new __await(v3);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g3 = generator.apply(thisArg, _arguments || []), i3, q = [];
  return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3;
  function verb(n4) {
    if (g3[n4])
      i3[n4] = function(v3) {
        return new Promise(function(a3, b3) {
          q.push([n4, v3, a3, b3]) > 1 || resume(n4, v3);
        });
      };
  }
  function resume(n4, v3) {
    try {
      step(g3[n4](v3));
    } catch (e2) {
      settle(q[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f4, v3) {
    if (f4(v3), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o5) {
  var i3, p3;
  return i3 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i3[Symbol.iterator] = function() {
    return this;
  }, i3;
  function verb(n4, f4) {
    i3[n4] = o5[n4] ? function(v3) {
      return (p3 = !p3) ? { value: __await(o5[n4](v3)), done: n4 === "return" } : f4 ? f4(v3) : v3;
    } : f4;
  }
}
function __asyncValues(o5) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m3 = o5[Symbol.asyncIterator], i3;
  return m3 ? m3.call(o5) : (o5 = typeof __values === "function" ? __values(o5) : o5[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3);
  function verb(n4) {
    i3[n4] = o5[n4] && function(v3) {
      return new Promise(function(resolve, reject) {
        v3 = o5[n4](v3), settle(resolve, reject, v3.done, v3.value);
      });
    };
  }
  function settle(resolve, reject, d3, v3) {
    Promise.resolve(v3).then(function(v4) {
      resolve({ value: v4, done: d3 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k3 in mod)
      if (Object.hasOwnProperty.call(mod, k3))
        result[k3] = mod[k3];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d3, b3) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
        d4.__proto__ = b4;
      } || function(d4, b4) {
        for (var p3 in b4)
          if (b4.hasOwnProperty(p3))
            d4[p3] = b4[p3];
      };
      return extendStatics(d3, b3);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s3, i3 = 1, n4 = arguments.length; i3 < n4; i3++) {
          s3 = arguments[i3];
          for (var p3 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p3))
              t[p3] = s3[p3];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/environment/dist/cjs/crypto.js
var require_crypto = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
    function getBrowerCrypto() {
      return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
    }
    exports.getBrowerCrypto = getBrowerCrypto;
    function getSubtleCrypto() {
      const browserCrypto = getBrowerCrypto();
      return browserCrypto.subtle || browserCrypto.webkitSubtle;
    }
    exports.getSubtleCrypto = getSubtleCrypto;
    function isBrowserCryptoAvailable() {
      return !!getBrowerCrypto() && !!getSubtleCrypto();
    }
    exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/env.js
var require_env = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
    function isReactNative() {
      return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
    }
    exports.isReactNative = isReactNative;
    function isNode2() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    }
    exports.isNode = isNode2;
    function isBrowser() {
      return !isReactNative() && !isNode2();
    }
    exports.isBrowser = isBrowser;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_crypto(), exports);
    tslib_1.__exportStar(require_env(), exports);
  }
});

// node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    var __globalThis__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
      }
      F.prototype = __global__;
      return new F();
    }();
    (function(globalThis2) {
      var irrelevant = function(exports2) {
        var g3 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
        typeof global !== "undefined" && global || {};
        var support = {
          searchParams: "URLSearchParams" in g3,
          iterable: "Symbol" in g3 && "iterator" in Symbol,
          blob: "FileReader" in g3 && "Blob" in g3 && function() {
            try {
              new Blob();
              return true;
            } catch (e2) {
              return false;
            }
          }(),
          formData: "FormData" in g3,
          arrayBuffer: "ArrayBuffer" in g3
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
            throw new TypeError('Invalid character in header field name: "' + name + '"');
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              if (header.length != 2) {
                throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
              }
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body._noBody)
            return;
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
          var encoding = match ? match[1] : "utf-8";
          reader.readAsText(blob, encoding);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i3 = 0; i3 < view.length; i3++) {
            chars[i3] = String.fromCharCode(view[i3]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._noBody = true;
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
          }
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                  )
                );
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else if (support.blob) {
              return this.blob().then(readBlobAsArrayBuffer);
            } else {
              throw new Error("could not read as ArrayBuffer");
            }
          };
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          if (!(this instanceof Request)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal || function() {
            if ("AbortController" in g3) {
              var ctrl = new AbortController();
              return ctrl.signal;
            }
          }();
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              try {
                headers.append(key, value);
              } catch (error) {
                console.warn("Response " + error.message);
              }
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!(this instanceof Response)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          if (this.status < 200 || this.status > 599) {
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          }
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 200, statusText: "" });
          response.ok = false;
          response.status = 0;
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = g3.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                options.status = 200;
              } else {
                options.status = xhr.status;
              }
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request timed out"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url) {
              try {
                return url === "" && g3.location.href ? g3.location.href : url;
              } catch (e2) {
                return url;
              }
            }
            xhr.open(request.method, fixUrl(request.url), true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g3.Headers && init.headers instanceof g3.Headers)) {
              var names = [];
              Object.getOwnPropertyNames(init.headers).forEach(function(name) {
                names.push(normalizeName(name));
                xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
              });
              request.headers.forEach(function(value, name) {
                if (names.indexOf(name) === -1) {
                  xhr.setRequestHeader(name, value);
                }
              });
            } else {
              request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
              });
            }
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch.polyfill = true;
        if (!g3.fetch) {
          g3.fetch = fetch;
          g3.Headers = Headers;
          g3.Request = Request;
          g3.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__globalThis__);
    __globalThis__.fetch.ponyfill = true;
    delete __globalThis__.fetch.polyfill;
    var ctx = __global__.fetch ? __global__ : __globalThis__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/ws/browser.js
var require_browser2 = __commonJS({
  "node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n4, iteratee) {
      var index = -1, result = Array(n4);
      while (++index < n4) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView2 = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser());
var import_pino2 = __toESM(require_browser());

// node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}

// node_modules/@walletconnect/logger/dist/index.es.js
var c = { level: "info" };
var n = "custom_context";
var l = 1e3 * 1024;
var O = class {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var d = class {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t = new O(e2);
    if (t.size > this.maxSizeInBytes)
      throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; )
      this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head)
      return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t = this.head;
    for (; t !== null; )
      e2.push(t.value), t = t.next;
    return e2;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e2 = this.head;
    return { next: () => {
      if (!e2)
        return { done: true, value: null };
      const t = e2.value;
      return e2 = e2.next, { done: false, value: t };
    } };
  }
};
var L = class {
  constructor(e2, t = l) {
    this.level = e2 ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t) {
    t === import_pino.levels.values.error ? console.error(e2) : t === import_pino.levels.values.warn ? console.warn(e2) : t === import_pino.levels.values.debug ? console.debug(e2) : t === import_pino.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t >= this.levelValue && this.forwardToConsole(e2, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
  }
};
var m = class {
  constructor(e2, t = l) {
    this.baseChunkLogger = new L(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t = URL.createObjectURL(this.logsToBlob(e2)), o5 = document.createElement("a");
    o5.href = t, o5.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o5), o5.click(), document.body.removeChild(o5), URL.revokeObjectURL(t);
  }
};
var B = class {
  constructor(e2, t = l) {
    this.baseChunkLogger = new L(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x = Object.defineProperty;
var S = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty;
var z = Object.prototype.propertyIsEnumerable;
var f = (r3, e2, t) => e2 in r3 ? x(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var i = (r3, e2) => {
  for (var t in e2 || (e2 = {}))
    T.call(e2, t) && f(r3, t, e2[t]);
  if (p)
    for (var t of p(e2))
      z.call(e2, t) && f(r3, t, e2[t]);
  return r3;
};
var g = (r3, e2) => S(r3, _(e2));
function k(r3) {
  return g(i({}, r3), { level: (r3 == null ? void 0 : r3.level) || c.level });
}
function v(r3, e2 = n) {
  return r3[e2] || "";
}
function b(r3, e2, t = n) {
  return r3[t] = e2, r3;
}
function y(r3, e2 = n) {
  let t = "";
  return typeof r3.bindings > "u" ? t = v(r3, e2) : t = r3.bindings().context || "", t;
}
function w(r3, e2, t = n) {
  const o5 = y(r3, t);
  return o5.trim() ? `${o5}/${e2}` : e2;
}
function E(r3, e2, t = n) {
  const o5 = w(r3, e2, t), a3 = r3.child({ context: o5 });
  return b(a3, o5, t);
}
function C(r3) {
  var e2, t;
  const o5 = new m((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i({}, r3.opts), { level: "trace", browser: g(i({}, (t = r3.opts) == null ? void 0 : t.browser), { write: (a3) => o5.write(a3) }) })), chunkLoggerController: o5 };
}
function I(r3) {
  var e2;
  const t = new B((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i({}, r3.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A(r3) {
  return typeof r3.loggerOverride < "u" && typeof r3.loggerOverride != "string" ? { logger: r3.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C(r3) : I(r3);
}

// node_modules/@walletconnect/relay-auth/dist/esm/constants.js
var JWT_IRIDIUM_ALG = "EdDSA";
var JWT_IRIDIUM_TYP = "JWT";
var JWT_DELIMITER = ".";
var JWT_ENCODING = "base64url";
var JSON_ENCODING = "utf8";
var DATA_ENCODING = "utf8";
var DID_DELIMITER = ":";
var DID_PREFIX = "did";
var DID_METHOD = "key";
var MULTICODEC_ED25519_ENCODING = "base58btc";
var MULTICODEC_ED25519_BASE = "z";
var MULTICODEC_ED25519_HEADER = "K36";
var KEY_PAIR_SEED_LENGTH = 32;

// node_modules/@walletconnect/relay-auth/dist/esm/utils.js
function decodeJSON(str) {
  return safeJsonParse(toString(fromString(str, JWT_ENCODING), JSON_ENCODING));
}
function encodeJSON(val) {
  return toString(fromString(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString(bytes, JWT_ENCODING);
}
function decodeSig(encoded) {
  return fromString(encoded, JWT_ENCODING);
}
function encodeData(params) {
  return fromString([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}
function decodeJWT(jwt) {
  const params = jwt.split(JWT_DELIMITER);
  const header = decodeJSON(params[0]);
  const payload = decodeJSON(params[1]);
  const signature = decodeSig(params[2]);
  const data = fromString(params.slice(0, 2).join(JWT_DELIMITER), DATA_ENCODING);
  return { header, payload, signature, data };
}

// node_modules/@walletconnect/relay-auth/dist/esm/api.js
var ed25519 = __toESM(require_ed25519());
var import_random = __toESM(require_random());
var import_time = __toESM(require_cjs());
function generateKeyPair(seed = (0, import_random.randomBytes)(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = (0, import_time.fromMiliseconds)(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
var PARSE_ERROR = "PARSE_ERROR";
var INVALID_REQUEST = "INVALID_REQUEST";
var METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
var INVALID_PARAMS = "INVALID_PARAMS";
var INTERNAL_ERROR = "INTERNAL_ERROR";
var SERVER_ERROR = "SERVER_ERROR";
var RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
var SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
var STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
var DEFAULT_ERROR = SERVER_ERROR;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js
function isServerErrorCode(code) {
  return code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code) {
  return RESERVED_ERROR_CODES.includes(code);
}
function isValidErrorCode(code) {
  return typeof code === "number";
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return { valid: false, error: "Missing code for JSON-RPC error" };
  }
  if (typeof response.error.message === "undefined") {
    return { valid: false, error: "Missing message for JSON-RPC error" };
  }
  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }
  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);
    if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }
  return { valid: true };
}
function parseConnectionError(e2, url, type) {
  return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e2;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DEFAULT_ERROR: () => DEFAULT_ERROR,
  IBaseJsonRpcProvider: () => n2,
  IEvents: () => e,
  IJsonRpcConnection: () => o,
  IJsonRpcProvider: () => r,
  INTERNAL_ERROR: () => INTERNAL_ERROR,
  INVALID_PARAMS: () => INVALID_PARAMS,
  INVALID_REQUEST: () => INVALID_REQUEST,
  METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
  PARSE_ERROR: () => PARSE_ERROR,
  RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
  SERVER_ERROR: () => SERVER_ERROR,
  SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
  STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
  formatErrorMessage: () => formatErrorMessage,
  formatJsonRpcError: () => formatJsonRpcError,
  formatJsonRpcRequest: () => formatJsonRpcRequest,
  formatJsonRpcResult: () => formatJsonRpcResult,
  getBigIntRpcId: () => getBigIntRpcId,
  getError: () => getError,
  getErrorByCode: () => getErrorByCode,
  isHttpUrl: () => isHttpUrl,
  isJsonRpcError: () => isJsonRpcError,
  isJsonRpcPayload: () => isJsonRpcPayload,
  isJsonRpcRequest: () => isJsonRpcRequest,
  isJsonRpcResponse: () => isJsonRpcResponse,
  isJsonRpcResult: () => isJsonRpcResult,
  isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
  isLocalhostUrl: () => isLocalhostUrl,
  isNodeJs: () => isNodeJs,
  isReservedErrorCode: () => isReservedErrorCode,
  isServerErrorCode: () => isServerErrorCode,
  isValidDefaultRoute: () => isValidDefaultRoute,
  isValidErrorCode: () => isValidErrorCode,
  isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
  isValidRoute: () => isValidRoute,
  isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
  isValidWildcardRoute: () => isValidWildcardRoute,
  isWsUrl: () => isWsUrl,
  parseConnectionError: () => parseConnectionError,
  payloadId: () => payloadId,
  validateJsonRpcError: () => validateJsonRpcError
});

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js
var env_exports = {};
__export(env_exports, {
  isNodeJs: () => isNodeJs
});
var import_environment = __toESM(require_cjs2());
__reExport(env_exports, __toESM(require_cjs2()));
var isNodeJs = import_environment.isNode;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
__reExport(esm_exports, env_exports);

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js
function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }
  if (/\W/g.test(route)) {
    return false;
  }
  return true;
}
function isValidDefaultRoute(route) {
  return route === "*";
}
function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }
  if (!route.includes("*")) {
    return false;
  }
  if (route.split("*").length !== 2) {
    return false;
  }
  if (route.split("*").filter((x3) => x3.trim() === "").length !== 1) {
    return false;
  }
  return true;
}
function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

// node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
var e = class {
};
var o = class extends e {
  constructor(c5) {
    super();
  }
};
var n2 = class extends e {
  constructor() {
    super();
  }
};
var r = class extends n2 {
  constructor(c5) {
    super();
  }
};

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
var HTTP_REGEX = "^https?:";
var WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}

// node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var import_events = __toESM(require_events());
var o2 = class extends r {
  constructor(t) {
    super(t), this.events = new import_events.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async request(t, e2) {
    return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e2);
  }
  async requestStrict(t, e2) {
    return new Promise(async (i3, s3) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (n4) {
          s3(n4);
        }
      this.events.on(`${t.id}`, (n4) => {
        isJsonRpcError(n4) ? s3(n4.error) : i3(n4.result);
      });
      try {
        await this.connection.send(t, e2);
      } catch (n4) {
        s3(n4);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};

// node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var import_events2 = __toESM(require_events());
var import_cross_fetch = __toESM(require_browser_ponyfill());
var P = Object.defineProperty;
var w2 = Object.defineProperties;
var E2 = Object.getOwnPropertyDescriptors;
var c3 = Object.getOwnPropertySymbols;
var L2 = Object.prototype.hasOwnProperty;
var O2 = Object.prototype.propertyIsEnumerable;
var l2 = (r3, t, e2) => t in r3 ? P(r3, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : r3[t] = e2;
var p2 = (r3, t) => {
  for (var e2 in t || (t = {}))
    L2.call(t, e2) && l2(r3, e2, t[e2]);
  if (c3)
    for (var e2 of c3(t))
      O2.call(t, e2) && l2(r3, e2, t[e2]);
  return r3;
};
var v2 = (r3, t) => w2(r3, E2(t));
var j = { Accept: "application/json", "Content-Type": "application/json" };
var T2 = "POST";
var d2 = { headers: j, method: T2 };
var g2 = 10;
var f2 = class {
  constructor(t, e2 = false) {
    if (this.url = t, this.disableProviderPing = e2, this.events = new import_events2.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = e2;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable)
      throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e2 = safeJsonStringify(t), s3 = await (await (0, import_cross_fetch.default)(this.url, v2(p2({}, d2), { body: e2 }))).json();
      this.onPayload({ data: s3 });
    } catch (e2) {
      this.onError(t.id, e2);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e2 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e2 || this.events.listenerCount("open") >= e2) && this.events.setMaxListeners(e2 + 1), new Promise((s3, i3) => {
        this.events.once("register_error", (n4) => {
          this.resetMaxListeners(), i3(n4);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u")
            return i3(new Error("HTTP connection is missing or invalid"));
          s3();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e2 = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await (0, import_cross_fetch.default)(t, v2(p2({}, d2), { body: e2 }));
      }
      this.onOpen();
    } catch (e2) {
      const s3 = this.parseError(e2);
      throw this.events.emit("register_error", s3), this.onClose(), s3;
    }
  }
  onOpen() {
    this.isAvailable = true, this.registering = false, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false, this.registering = false, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u")
      return;
    const e2 = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
    this.events.emit("payload", e2);
  }
  onError(t, e2) {
    const s3 = this.parseError(e2), i3 = s3.message || s3.toString(), n4 = formatJsonRpcError(t, i3);
    this.events.emit("payload", n4);
  }
  parseError(t, e2 = this.url) {
    return parseConnectionError(t, e2, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g2 && this.events.setMaxListeners(g2);
  }
};

// node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// node_modules/unstorage/dist/shared/unstorage.BqzpVTXx.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c5) => c5.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  var _a;
  if (!key) {
    return "";
  }
  return ((_a = key.split("?")[0]) == null ? void 0 : _a.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}

// node_modules/unstorage/dist/index.mjs
function defineDriver(factory) {
  return factory;
}
var DRIVER_NAME = "memory";
var memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r3) => r3.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r3) => r3.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p3) => fullKey.startsWith(p3))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p3) => !p3.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter(
        (key) => key.startsWith(base) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m3) => {
          if (m3.driver.clear) {
            return asyncCall(m3.driver.clear, m3.relativeBase, opts);
          }
          if (m3.driver.removeItem) {
            const keys2 = await m3.driver.getKeys(m3.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m3.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a3, b3) => b3.length - a3.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      var _a, _b;
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        (_b = (_a = context.unwatch)[base]) == null ? void 0 : _b.call(_a);
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m3 = getMount(key);
      return {
        driver: m3.driver,
        base: m3.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m3) => ({
        driver: m3.driver,
        base: m3.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

// node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}

// node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
var x2 = "idb-keyval";
var z2 = (i3 = {}) => {
  const t = i3.base && i3.base.length > 0 ? `${i3.base}:` : "", e2 = (s3) => t + s3;
  let n4;
  return i3.dbName && i3.storeName && (n4 = createStore(i3.dbName, i3.storeName)), { name: x2, options: i3, async hasItem(s3) {
    return !(typeof await get(e2(s3), n4) > "u");
  }, async getItem(s3) {
    return await get(e2(s3), n4) ?? null;
  }, setItem(s3, a3) {
    return set(e2(s3), a3, n4);
  }, removeItem(s3) {
    return del(e2(s3), n4);
  }, getKeys() {
    return keys(n4);
  }, clear() {
    return clear(n4);
  } };
};
var D = "WALLET_CONNECT_V2_INDEXED_DB";
var E3 = "keyvaluestorage";
var _2 = class {
  constructor() {
    this.indexedDb = createStorage({ driver: z2({ dbName: D, storeName: E3 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e2 = await this.indexedDb.getItem(t);
    if (e2 !== null)
      return e2;
  }
  async setItem(t, e2) {
    await this.indexedDb.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var c4 = { exports: {} };
(function() {
  let i3;
  function t() {
  }
  i3 = t, i3.prototype.getItem = function(e2) {
    return this.hasOwnProperty(e2) ? String(this[e2]) : null;
  }, i3.prototype.setItem = function(e2, n4) {
    this[e2] = String(n4);
  }, i3.prototype.removeItem = function(e2) {
    delete this[e2];
  }, i3.prototype.clear = function() {
    const e2 = this;
    Object.keys(e2).forEach(function(n4) {
      e2[n4] = void 0, delete e2[n4];
    });
  }, i3.prototype.key = function(e2) {
    return e2 = e2 || 0, Object.keys(this)[e2];
  }, i3.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l3 < "u" && l3.localStorage ? c4.exports = l3.localStorage : typeof window < "u" && window.localStorage ? c4.exports = window.localStorage : c4.exports = new t();
})();
function k2(i3) {
  var t;
  return [i3[0], safeJsonParse((t = i3[1]) != null ? t : "")];
}
var K = class {
  constructor() {
    this.localStorage = c4.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k2);
  }
  async getItem(t) {
    const e2 = this.localStorage.getItem(t);
    if (e2 !== null)
      return safeJsonParse(e2);
  }
  async setItem(t, e2) {
    this.localStorage.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
var N = "wc_storage_version";
var y2 = 1;
var O3 = async (i3, t, e2) => {
  const n4 = N, s3 = await t.getItem(n4);
  if (s3 && s3 >= y2) {
    e2(t);
    return;
  }
  const a3 = await i3.getKeys();
  if (!a3.length) {
    e2(t);
    return;
  }
  const m3 = [];
  for (; a3.length; ) {
    const r3 = a3.shift();
    if (!r3)
      continue;
    const o5 = r3.toLowerCase();
    if (o5.includes("wc@") || o5.includes("walletconnect") || o5.includes("wc_") || o5.includes("wallet_connect")) {
      const f4 = await i3.getItem(r3);
      await t.setItem(r3, f4), m3.push(r3);
    }
  }
  await t.setItem(n4, y2), e2(t), j2(i3, m3);
};
var j2 = async (i3, t) => {
  t.length && t.forEach(async (e2) => {
    await i3.removeItem(e2);
  });
};
var h2 = class {
  constructor() {
    this.initialized = false, this.setInitialized = (e2) => {
      this.storage = e2, this.initialized = true;
    };
    const t = new K();
    this.storage = t;
    try {
      const e2 = new _2();
      O3(t, e2, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e2) {
    return await this.initialize(), this.storage.setItem(t, e2);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e2 = setInterval(() => {
        this.initialized && (clearInterval(e2), t());
      }, 20);
    });
  }
};

// node_modules/@walletconnect/events/dist/esm/events.js
var IEvents = class {
};

// node_modules/@walletconnect/heartbeat/dist/index.es.js
var import_events3 = __toESM(require_events());
var import_time2 = __toESM(require_cjs());
var n3 = class extends IEvents {
  constructor(e2) {
    super();
  }
};
var s2 = import_time2.FIVE_SECONDS;
var r2 = { pulse: "heartbeat_pulse" };
var i2 = class _i extends n3 {
  constructor(e2) {
    super(e2), this.events = new import_events3.EventEmitter(), this.interval = s2, this.interval = (e2 == null ? void 0 : e2.interval) || s2;
  }
  static async init(e2) {
    const t = new _i(e2);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), (0, import_time2.toMiliseconds)(this.interval));
  }
  pulse() {
    this.events.emit(r2.pulse);
  }
};

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var import_events5 = __toESM(require_events());
var w3 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser2();
var b2 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var a2 = (c5) => c5.split("?")[0];
var h3 = 10;
var S2 = w3();
var f3 = class {
  constructor(e2) {
    if (this.url = e2, this.events = new import_events5.EventEmitter(), this.registering = false, !isWsUrl(e2))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    this.url = e2;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async open(e2 = this.url) {
    await this.register(e2);
  }
  async close() {
    return new Promise((e2, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n4) => {
        this.onClose(n4), e2();
      }, this.socket.close();
    });
  }
  async send(e2) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e2));
    } catch (t) {
      this.onError(e2.id, t);
    }
  }
  register(e2 = this.url) {
    if (!isWsUrl(e2))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n4, o5) => {
        this.events.once("register_error", (s3) => {
          this.resetMaxListeners(), o5(s3);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return o5(new Error("WebSocket connection is missing or invalid"));
          n4(this.socket);
        });
      });
    }
    return this.url = e2, this.registering = true, new Promise((t, n4) => {
      const o5 = new URLSearchParams(e2).get("origin"), s3 = (0, esm_exports.isReactNative)() ? { headers: { origin: o5 } } : { rejectUnauthorized: !isLocalhostUrl(e2) }, i3 = new S2(e2, [], s3);
      b2() ? i3.onerror = (r3) => {
        const l5 = r3;
        n4(this.emitError(l5.error));
      } : i3.on("error", (r3) => {
        n4(this.emitError(r3));
      }), i3.onopen = () => {
        this.onOpen(i3), t(i3);
      };
    });
  }
  onOpen(e2) {
    e2.onmessage = (t) => this.onPayload(t), e2.onclose = (t) => this.onClose(t), this.socket = e2, this.registering = false, this.events.emit("open");
  }
  onClose(e2) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e2);
  }
  onPayload(e2) {
    if (typeof e2.data > "u")
      return;
    const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
    this.events.emit("payload", t);
  }
  onError(e2, t) {
    const n4 = this.parseError(t), o5 = n4.message || n4.toString(), s3 = formatJsonRpcError(e2, o5);
    this.events.emit("payload", s3);
  }
  parseError(e2, t = this.url) {
    return parseConnectionError(e2, a2(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h3 && this.events.setMaxListeners(h3);
  }
  emitError(e2) {
    const t = this.parseError(new Error((e2 == null ? void 0 : e2.message) || `WebSocket connection failed for host: ${a2(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};

export {
  safeJsonParse,
  safeJsonStringify,
  h2 as h,
  IEvents,
  r2 as r,
  i2 as i,
  import_pino2 as import_pino,
  k,
  y,
  E,
  A,
  encodeIss,
  decodeJWT,
  generateKeyPair,
  signJWT,
  payloadId,
  getBigIntRpcId,
  formatJsonRpcRequest,
  formatJsonRpcResult,
  formatJsonRpcError,
  isJsonRpcRequest,
  isJsonRpcResponse,
  isJsonRpcResult,
  isJsonRpcError,
  esm_exports,
  o2 as o,
  f3 as f,
  require_lodash,
  f2
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=chunk-LDYBCKWB.js.map
