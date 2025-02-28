import {
  __commonJS,
  __require
} from "./chunk-GIZG7J7H.js";

// node_modules/es6-promise/dist/es6-promise.js
var require_es6_promise = __commonJS({
  "node_modules/es6-promise/dist/es6-promise.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.ES6Promise = factory();
    })(exports, function() {
      "use strict";
      function objectOrFunction(x) {
        var type = typeof x;
        return x !== null && (type === "object" || type === "function");
      }
      function isFunction(x) {
        return typeof x === "function";
      }
      var _isArray = void 0;
      if (Array.isArray) {
        _isArray = Array.isArray;
      } else {
        _isArray = function(x) {
          return Object.prototype.toString.call(x) === "[object Array]";
        };
      }
      var isArray = _isArray;
      var len = 0;
      var vertxNext = void 0;
      var customSchedulerFn = void 0;
      var asap = function asap2(callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
          if (customSchedulerFn) {
            customSchedulerFn(flush);
          } else {
            scheduleFlush();
          }
        }
      };
      function setScheduler(scheduleFn) {
        customSchedulerFn = scheduleFn;
      }
      function setAsap(asapFn) {
        asap = asapFn;
      }
      var browserWindow = typeof window !== "undefined" ? window : void 0;
      var browserGlobal = browserWindow || {};
      var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
      var isNode = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
      var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
      function useNextTick() {
        return function() {
          return process.nextTick(flush);
        };
      }
      function useVertxTimer() {
        if (typeof vertxNext !== "undefined") {
          return function() {
            vertxNext(flush);
          };
        }
        return useSetTimeout();
      }
      function useMutationObserver() {
        var iterations = 0;
        var observer = new BrowserMutationObserver(flush);
        var node = document.createTextNode("");
        observer.observe(node, { characterData: true });
        return function() {
          node.data = iterations = ++iterations % 2;
        };
      }
      function useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function() {
          return channel.port2.postMessage(0);
        };
      }
      function useSetTimeout() {
        var globalSetTimeout = setTimeout;
        return function() {
          return globalSetTimeout(flush, 1);
        };
      }
      var queue = new Array(1e3);
      function flush() {
        for (var i = 0; i < len; i += 2) {
          var callback = queue[i];
          var arg = queue[i + 1];
          callback(arg);
          queue[i] = void 0;
          queue[i + 1] = void 0;
        }
        len = 0;
      }
      function attemptVertx() {
        try {
          var vertx = Function("return this")().require("vertx");
          vertxNext = vertx.runOnLoop || vertx.runOnContext;
          return useVertxTimer();
        } catch (e) {
          return useSetTimeout();
        }
      }
      var scheduleFlush = void 0;
      if (isNode) {
        scheduleFlush = useNextTick();
      } else if (BrowserMutationObserver) {
        scheduleFlush = useMutationObserver();
      } else if (isWorker) {
        scheduleFlush = useMessageChannel();
      } else if (browserWindow === void 0 && typeof __require === "function") {
        scheduleFlush = attemptVertx();
      } else {
        scheduleFlush = useSetTimeout();
      }
      function then(onFulfillment, onRejection) {
        var parent = this;
        var child = new this.constructor(noop);
        if (child[PROMISE_ID] === void 0) {
          makePromise(child);
        }
        var _state = parent._state;
        if (_state) {
          var callback = arguments[_state - 1];
          asap(function() {
            return invokeCallback(_state, child, callback, parent._result);
          });
        } else {
          subscribe(parent, child, onFulfillment, onRejection);
        }
        return child;
      }
      function resolve$1(object) {
        var Constructor = this;
        if (object && typeof object === "object" && object.constructor === Constructor) {
          return object;
        }
        var promise = new Constructor(noop);
        resolve(promise, object);
        return promise;
      }
      var PROMISE_ID = Math.random().toString(36).substring(2);
      function noop() {
      }
      var PENDING = void 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      function selfFulfillment() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function cannotReturnOwn() {
        return new TypeError("A promises callback cannot return that same promise.");
      }
      function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
        try {
          then$$1.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
          return e;
        }
      }
      function handleForeignThenable(promise, thenable, then$$1) {
        asap(function(promise2) {
          var sealed = false;
          var error = tryThen(then$$1, thenable, function(value) {
            if (sealed) {
              return;
            }
            sealed = true;
            if (thenable !== value) {
              resolve(promise2, value);
            } else {
              fulfill(promise2, value);
            }
          }, function(reason) {
            if (sealed) {
              return;
            }
            sealed = true;
            reject(promise2, reason);
          }, "Settle: " + (promise2._label || " unknown promise"));
          if (!sealed && error) {
            sealed = true;
            reject(promise2, error);
          }
        }, promise);
      }
      function handleOwnThenable(promise, thenable) {
        if (thenable._state === FULFILLED) {
          fulfill(promise, thenable._result);
        } else if (thenable._state === REJECTED) {
          reject(promise, thenable._result);
        } else {
          subscribe(thenable, void 0, function(value) {
            return resolve(promise, value);
          }, function(reason) {
            return reject(promise, reason);
          });
        }
      }
      function handleMaybeThenable(promise, maybeThenable, then$$1) {
        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
          handleOwnThenable(promise, maybeThenable);
        } else {
          if (then$$1 === void 0) {
            fulfill(promise, maybeThenable);
          } else if (isFunction(then$$1)) {
            handleForeignThenable(promise, maybeThenable, then$$1);
          } else {
            fulfill(promise, maybeThenable);
          }
        }
      }
      function resolve(promise, value) {
        if (promise === value) {
          reject(promise, selfFulfillment());
        } else if (objectOrFunction(value)) {
          var then$$1 = void 0;
          try {
            then$$1 = value.then;
          } catch (error) {
            reject(promise, error);
            return;
          }
          handleMaybeThenable(promise, value, then$$1);
        } else {
          fulfill(promise, value);
        }
      }
      function publishRejection(promise) {
        if (promise._onerror) {
          promise._onerror(promise._result);
        }
        publish(promise);
      }
      function fulfill(promise, value) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._result = value;
        promise._state = FULFILLED;
        if (promise._subscribers.length !== 0) {
          asap(publish, promise);
        }
      }
      function reject(promise, reason) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._state = REJECTED;
        promise._result = reason;
        asap(publishRejection, promise);
      }
      function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers;
        var length = _subscribers.length;
        parent._onerror = null;
        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;
        if (length === 0 && parent._state) {
          asap(publish, parent);
        }
      }
      function publish(promise) {
        var subscribers = promise._subscribers;
        var settled = promise._state;
        if (subscribers.length === 0) {
          return;
        }
        var child = void 0, callback = void 0, detail = promise._result;
        for (var i = 0; i < subscribers.length; i += 3) {
          child = subscribers[i];
          callback = subscribers[i + settled];
          if (child) {
            invokeCallback(settled, child, callback, detail);
          } else {
            callback(detail);
          }
        }
        promise._subscribers.length = 0;
      }
      function invokeCallback(settled, promise, callback, detail) {
        var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
        if (hasCallback) {
          try {
            value = callback(detail);
          } catch (e) {
            succeeded = false;
            error = e;
          }
          if (promise === value) {
            reject(promise, cannotReturnOwn());
            return;
          }
        } else {
          value = detail;
        }
        if (promise._state !== PENDING) {
        } else if (hasCallback && succeeded) {
          resolve(promise, value);
        } else if (succeeded === false) {
          reject(promise, error);
        } else if (settled === FULFILLED) {
          fulfill(promise, value);
        } else if (settled === REJECTED) {
          reject(promise, value);
        }
      }
      function initializePromise(promise, resolver) {
        try {
          resolver(function resolvePromise(value) {
            resolve(promise, value);
          }, function rejectPromise(reason) {
            reject(promise, reason);
          });
        } catch (e) {
          reject(promise, e);
        }
      }
      var id = 0;
      function nextId() {
        return id++;
      }
      function makePromise(promise) {
        promise[PROMISE_ID] = id++;
        promise._state = void 0;
        promise._result = void 0;
        promise._subscribers = [];
      }
      function validationError() {
        return new Error("Array Methods must be provided an Array");
      }
      var Enumerator = function() {
        function Enumerator2(Constructor, input) {
          this._instanceConstructor = Constructor;
          this.promise = new Constructor(noop);
          if (!this.promise[PROMISE_ID]) {
            makePromise(this.promise);
          }
          if (isArray(input)) {
            this.length = input.length;
            this._remaining = input.length;
            this._result = new Array(this.length);
            if (this.length === 0) {
              fulfill(this.promise, this._result);
            } else {
              this.length = this.length || 0;
              this._enumerate(input);
              if (this._remaining === 0) {
                fulfill(this.promise, this._result);
              }
            }
          } else {
            reject(this.promise, validationError());
          }
        }
        Enumerator2.prototype._enumerate = function _enumerate(input) {
          for (var i = 0; this._state === PENDING && i < input.length; i++) {
            this._eachEntry(input[i], i);
          }
        };
        Enumerator2.prototype._eachEntry = function _eachEntry(entry, i) {
          var c = this._instanceConstructor;
          var resolve$$1 = c.resolve;
          if (resolve$$1 === resolve$1) {
            var _then = void 0;
            var error = void 0;
            var didError = false;
            try {
              _then = entry.then;
            } catch (e) {
              didError = true;
              error = e;
            }
            if (_then === then && entry._state !== PENDING) {
              this._settledAt(entry._state, i, entry._result);
            } else if (typeof _then !== "function") {
              this._remaining--;
              this._result[i] = entry;
            } else if (c === Promise$1) {
              var promise = new c(noop);
              if (didError) {
                reject(promise, error);
              } else {
                handleMaybeThenable(promise, entry, _then);
              }
              this._willSettleAt(promise, i);
            } else {
              this._willSettleAt(new c(function(resolve$$12) {
                return resolve$$12(entry);
              }), i);
            }
          } else {
            this._willSettleAt(resolve$$1(entry), i);
          }
        };
        Enumerator2.prototype._settledAt = function _settledAt(state, i, value) {
          var promise = this.promise;
          if (promise._state === PENDING) {
            this._remaining--;
            if (state === REJECTED) {
              reject(promise, value);
            } else {
              this._result[i] = value;
            }
          }
          if (this._remaining === 0) {
            fulfill(promise, this._result);
          }
        };
        Enumerator2.prototype._willSettleAt = function _willSettleAt(promise, i) {
          var enumerator = this;
          subscribe(promise, void 0, function(value) {
            return enumerator._settledAt(FULFILLED, i, value);
          }, function(reason) {
            return enumerator._settledAt(REJECTED, i, reason);
          });
        };
        return Enumerator2;
      }();
      function all(entries) {
        return new Enumerator(this, entries).promise;
      }
      function race(entries) {
        var Constructor = this;
        if (!isArray(entries)) {
          return new Constructor(function(_, reject2) {
            return reject2(new TypeError("You must pass an array to race."));
          });
        } else {
          return new Constructor(function(resolve2, reject2) {
            var length = entries.length;
            for (var i = 0; i < length; i++) {
              Constructor.resolve(entries[i]).then(resolve2, reject2);
            }
          });
        }
      }
      function reject$1(reason) {
        var Constructor = this;
        var promise = new Constructor(noop);
        reject(promise, reason);
        return promise;
      }
      function needsResolver() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
      }
      function needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      var Promise$1 = function() {
        function Promise2(resolver) {
          this[PROMISE_ID] = nextId();
          this._result = this._state = void 0;
          this._subscribers = [];
          if (noop !== resolver) {
            typeof resolver !== "function" && needsResolver();
            this instanceof Promise2 ? initializePromise(this, resolver) : needsNew();
          }
        }
        Promise2.prototype.catch = function _catch(onRejection) {
          return this.then(null, onRejection);
        };
        Promise2.prototype.finally = function _finally(callback) {
          var promise = this;
          var constructor = promise.constructor;
          if (isFunction(callback)) {
            return promise.then(function(value) {
              return constructor.resolve(callback()).then(function() {
                return value;
              });
            }, function(reason) {
              return constructor.resolve(callback()).then(function() {
                throw reason;
              });
            });
          }
          return promise.then(callback, callback);
        };
        return Promise2;
      }();
      Promise$1.prototype.then = then;
      Promise$1.all = all;
      Promise$1.race = race;
      Promise$1.resolve = resolve$1;
      Promise$1.reject = reject$1;
      Promise$1._setScheduler = setScheduler;
      Promise$1._setAsap = setAsap;
      Promise$1._asap = asap;
      function polyfill() {
        var local = void 0;
        if (typeof global !== "undefined") {
          local = global;
        } else if (typeof self !== "undefined") {
          local = self;
        } else {
          try {
            local = Function("return this")();
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }
        }
        var P = local.Promise;
        if (P) {
          var promiseToString = null;
          try {
            promiseToString = Object.prototype.toString.call(P.resolve());
          } catch (e) {
          }
          if (promiseToString === "[object Promise]" && !P.cast) {
            return;
          }
        }
        local.Promise = Promise$1;
      }
      Promise$1.polyfill = polyfill;
      Promise$1.Promise = Promise$1;
      return Promise$1;
    });
  }
});

// node_modules/es6-promise/auto.js
var require_auto = __commonJS({
  "node_modules/es6-promise/auto.js"(exports, module) {
    module.exports = require_es6_promise().polyfill();
  }
});
export default require_auto();
/*! Bundled license information:

es6-promise/dist/es6-promise.js:
  (*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
   * @version   v4.2.8+1e68dce6
   *)
*/
//# sourceMappingURL=es6-promise_auto.js.map
