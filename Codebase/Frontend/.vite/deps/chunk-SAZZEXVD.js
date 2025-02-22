import {
  require_jsx_runtime
} from "./chunk-HXHZZBCW.js";
import {
  BaseError,
  call,
  connect,
  deepEqual,
  deployContract,
  disconnect,
  estimateFeesPerGas,
  estimateGas,
  estimateMaxPriorityFeePerGas,
  getAccount,
  getBalance,
  getBlock,
  getBlockNumber,
  getBlockTransactionCount,
  getBytecode,
  getChainId,
  getChains,
  getClient,
  getConnections,
  getConnectorClient,
  getConnectors,
  getEnsAddress,
  getEnsAvatar,
  getEnsName,
  getEnsResolver,
  getEnsText,
  getFeeHistory,
  getGasPrice,
  getProof,
  getPublicClient,
  getStorageAt,
  getToken,
  getTransaction,
  getTransactionConfirmations,
  getTransactionCount,
  getTransactionReceipt,
  getWalletClient,
  hydrate,
  prepareTransactionRequest,
  readContract,
  readContracts,
  reconnect,
  sendTransaction,
  signMessage,
  signTypedData,
  simulateContract,
  switchAccount,
  switchChain,
  verifyMessage,
  verifyTypedData,
  waitForTransactionReceipt,
  watchAccount,
  watchAsset,
  watchBlockNumber,
  watchBlocks,
  watchChainId,
  watchClient,
  watchConnections,
  watchConnectors,
  watchContractEvent,
  watchPendingTransactions,
  watchPublicClient,
  writeContract
} from "./chunk-5KAHHIA3.js";
import {
  require_react
} from "./chunk-CRFN57AP.js";
import {
  __commonJS,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __toESM
} from "./chunk-GIZG7J7H.js";

// node_modules/wagmi/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/wagmi/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React11.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState6({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect17(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React11 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState6 = React11.useState, useEffect17 = React11.useEffect, useLayoutEffect = React11.useLayoutEffect, useDebugValue = React11.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React11.useSyncExternalStore ? React11.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/wagmi/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/wagmi/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/wagmi/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/wagmi/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React11 = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore10 = shim.useSyncExternalStore, useRef7 = React11.useRef, useEffect17 = React11.useEffect, useMemo5 = React11.useMemo, useDebugValue = React11.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef7(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else
          inst = instRef.current;
        instRef = useMemo5(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore10(subscribe, instRef[0], instRef[1]);
        useEffect17(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/wagmi/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/wagmi/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/wagmi/dist/esm/context.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/wagmi/dist/esm/hydrate.js
var import_react = __toESM(require_react(), 1);
function Hydrate(parameters) {
  const { children, config, initialState, reconnectOnMount = true } = parameters;
  const { onMount } = hydrate(config, {
    initialState,
    reconnectOnMount
  });
  if (!config._internal.ssr)
    onMount();
  const active = (0, import_react.useRef)(true);
  (0, import_react.useEffect)(() => {
    if (!active.current)
      return;
    if (!config._internal.ssr)
      return;
    onMount();
    return () => {
      active.current = false;
    };
  }, []);
  return children;
}

// node_modules/wagmi/dist/esm/context.js
var WagmiContext = (0, import_react2.createContext)(void 0);
function WagmiProvider(parameters) {
  const { children, config } = parameters;
  const props = { value: config };
  return (0, import_react2.createElement)(Hydrate, parameters, (0, import_react2.createElement)(WagmiContext.Provider, props, children));
}

// node_modules/wagmi/dist/esm/version.js
var version = "2.14.8";

// node_modules/wagmi/dist/esm/utils/getVersion.js
var getVersion = () => `wagmi@${version}`;

// node_modules/wagmi/dist/esm/errors/base.js
var BaseError2 = class extends BaseError {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiError"
    });
  }
  get docsBaseUrl() {
    return "https://wagmi.sh/react";
  }
  get version() {
    return getVersion();
  }
};

// node_modules/wagmi/dist/esm/errors/context.js
var WagmiProviderNotFoundError = class extends BaseError2 {
  constructor() {
    super("`useConfig` must be used within `WagmiProvider`.", {
      docsPath: "/api/WagmiProvider"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiProviderNotFoundError"
    });
  }
};

// node_modules/wagmi/dist/esm/hooks/useConfig.js
var import_react3 = __toESM(require_react(), 1);
function useConfig(parameters = {}) {
  const config = parameters.config ?? (0, import_react3.useContext)(WagmiContext);
  if (!config)
    throw new WagmiProviderNotFoundError();
  return config;
}

// node_modules/@wagmi/core/dist/esm/actions/watchChains.js
function watchChains(config, parameters) {
  const { onChange } = parameters;
  return config._internal.chains.subscribe((chains, prevChains) => {
    onChange(chains, prevChains);
  });
}

// node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js
var import_react4 = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var isPlainObject = (obj) => typeof obj === "object" && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = deepEqual) {
  const trackedKeys = (0, import_react4.useRef)([]);
  const result = (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getServerSnapshot, (x) => x, (a, b) => {
    if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
      for (const key of trackedKeys.current) {
        const equal = isEqual(a[key], b[key]);
        if (!equal)
          return false;
      }
      return true;
    }
    return isEqual(a, b);
  });
  return (0, import_react4.useMemo)(() => {
    if (isPlainObject(result)) {
      const trackedResult = { ...result };
      let properties = {};
      for (const [key, value] of Object.entries(trackedResult)) {
        properties = {
          ...properties,
          [key]: {
            configurable: false,
            enumerable: true,
            get: () => {
              if (!trackedKeys.current.includes(key)) {
                trackedKeys.current.push(key);
              }
              return value;
            }
          }
        };
      }
      Object.defineProperties(trackedResult, properties);
      return trackedResult;
    }
    return result;
  }, [result]);
}

// node_modules/wagmi/dist/esm/hooks/useAccount.js
function useAccount(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStoreWithTracked((onChange) => watchAccount(config, { onChange }), () => getAccount(config));
}

// node_modules/wagmi/dist/esm/hooks/useAccountEffect.js
var import_react5 = __toESM(require_react(), 1);
function useAccountEffect(parameters = {}) {
  const { onConnect, onDisconnect } = parameters;
  const config = useConfig(parameters);
  (0, import_react5.useEffect)(() => {
    return watchAccount(config, {
      onChange(data, prevData) {
        if ((prevData.status === "reconnecting" || prevData.status === "connecting" && prevData.address === void 0) && data.status === "connected") {
          const { address, addresses, chain, chainId, connector } = data;
          const isReconnected = prevData.status === "reconnecting" || // if `previousAccount.status` is `undefined`, the connector connected immediately.
          prevData.status === void 0;
          onConnect == null ? void 0 : onConnect({
            address,
            addresses,
            chain,
            chainId,
            connector,
            isReconnected
          });
        } else if (prevData.status === "connected" && data.status === "disconnected")
          onDisconnect == null ? void 0 : onDisconnect();
      }
    });
  }, [config, onConnect, onDisconnect]);
}

// node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

// node_modules/@tanstack/query-core/build/modern/utils.js
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject2(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (array || isPlainObject2(a) && isPlainObject2(b)) {
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b[key] === void 0) {
        copy[key] = void 0;
        equalItems++;
      } else {
        copy[key] = replaceEqualDeep(a[key], b[key]);
        if (copy[key] === a[key] && a[key] !== void 0) {
          equalItems++;
        }
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function shallowEqualObjects(a, b) {
  if (!b || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject2(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    if (true) {
      try {
        return replaceEqualDeep(prevData, data);
      } catch (error) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
        );
      }
    }
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (true) {
    if (options.queryFn === skipToken) {
      console.error(
        `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`
      );
    }
  }
  if (!options.queryFn && (fetchOptions == null ? void 0 : fetchOptions.initialPromise)) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}

// node_modules/@tanstack/query-core/build/modern/focusManager.js
var _focused, _cleanup, _setup, _a;
var FocusManager = (_a = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _focused, void 0);
    __privateAdd(this, _cleanup, void 0);
    __privateAdd(this, _setup, void 0);
    __privateSet(this, _setup, (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup)) {
      this.setEventListener(__privateGet(this, _setup));
    }
  }
  onUnsubscribe() {
    var _a5;
    if (!this.hasListeners()) {
      (_a5 = __privateGet(this, _cleanup)) == null ? void 0 : _a5.call(this);
      __privateSet(this, _cleanup, void 0);
    }
  }
  setEventListener(setup) {
    var _a5;
    __privateSet(this, _setup, setup);
    (_a5 = __privateGet(this, _cleanup)) == null ? void 0 : _a5.call(this);
    __privateSet(this, _cleanup, setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    }));
  }
  setFocused(focused) {
    const changed = __privateGet(this, _focused) !== focused;
    if (changed) {
      __privateSet(this, _focused, focused);
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    var _a5;
    if (typeof __privateGet(this, _focused) === "boolean") {
      return __privateGet(this, _focused);
    }
    return ((_a5 = globalThis.document) == null ? void 0 : _a5.visibilityState) !== "hidden";
  }
}, _focused = new WeakMap(), _cleanup = new WeakMap(), _setup = new WeakMap(), _a);
var focusManager = new FocusManager();

// node_modules/@tanstack/query-core/build/modern/onlineManager.js
var _online, _cleanup2, _setup2, _a2;
var OnlineManager = (_a2 = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _online, true);
    __privateAdd(this, _cleanup2, void 0);
    __privateAdd(this, _setup2, void 0);
    __privateSet(this, _setup2, (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup2)) {
      this.setEventListener(__privateGet(this, _setup2));
    }
  }
  onUnsubscribe() {
    var _a5;
    if (!this.hasListeners()) {
      (_a5 = __privateGet(this, _cleanup2)) == null ? void 0 : _a5.call(this);
      __privateSet(this, _cleanup2, void 0);
    }
  }
  setEventListener(setup) {
    var _a5;
    __privateSet(this, _setup2, setup);
    (_a5 = __privateGet(this, _cleanup2)) == null ? void 0 : _a5.call(this);
    __privateSet(this, _cleanup2, setup(this.setOnline.bind(this)));
  }
  setOnline(online) {
    const changed = __privateGet(this, _online) !== online;
    if (changed) {
      __privateSet(this, _online, online);
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return __privateGet(this, _online);
  }
}, _online = new WeakMap(), _cleanup2 = new WeakMap(), _setup2 = new WeakMap(), _a2);
var onlineManager = new OnlineManager();

// node_modules/@tanstack/query-core/build/modern/thenable.js
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}

// node_modules/@tanstack/query-core/build/modern/retryer.js
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}

// node_modules/@tanstack/query-core/build/modern/notifyManager.js
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = (cb) => setTimeout(cb, 0);
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();

// node_modules/@tanstack/query-core/build/modern/query.js
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}

// node_modules/@tanstack/query-core/build/modern/mutation.js
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}

// node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      var _a5, _b, _c, _d, _e;
      const options = context.options;
      const direction = (_c = (_b = (_a5 = context.fetchOptions) == null ? void 0 : _a5.meta) == null ? void 0 : _b.fetchMore) == null ? void 0 : _c.direction;
      const oldPages = ((_d = context.state.data) == null ? void 0 : _d.pages) || [];
      const oldPageParams = ((_e = context.state.data) == null ? void 0 : _e.pageParams) || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            direction: previous ? "backward" : "forward",
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const page = await queryFn(
            queryFnContext
          );
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          var _a6, _b2;
          return (_b2 = (_a6 = context.options).persister) == null ? void 0 : _b2.call(
            _a6,
            fetchFn,
            {
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  var _a5;
  return pages.length > 0 ? (_a5 = options.getPreviousPageParam) == null ? void 0 : _a5.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
  if (!data)
    return false;
  return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
  if (!data || !options.getPreviousPageParam)
    return false;
  return getPreviousPageParam(options, data) != null;
}

// node_modules/@tanstack/query-core/build/modern/queryObserver.js
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _executeFetch, executeFetch_fn, _updateStaleTimeout, updateStaleTimeout_fn, _computeRefetchInterval, computeRefetchInterval_fn, _updateRefetchInterval, updateRefetchInterval_fn, _updateTimers, updateTimers_fn, _clearStaleTimeout, clearStaleTimeout_fn, _clearRefetchInterval, clearRefetchInterval_fn, _updateQuery, updateQuery_fn, _notify, notify_fn, _a3;
var QueryObserver = (_a3 = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _executeFetch);
    __privateAdd(this, _updateStaleTimeout);
    __privateAdd(this, _computeRefetchInterval);
    __privateAdd(this, _updateRefetchInterval);
    __privateAdd(this, _updateTimers);
    __privateAdd(this, _clearStaleTimeout);
    __privateAdd(this, _clearRefetchInterval);
    __privateAdd(this, _updateQuery);
    __privateAdd(this, _notify);
    __privateAdd(this, _client, void 0);
    __privateAdd(this, _currentQuery, void 0);
    __privateAdd(this, _currentQueryInitialState, void 0);
    __privateAdd(this, _currentResult, void 0);
    __privateAdd(this, _currentResultState, void 0);
    __privateAdd(this, _currentResultOptions, void 0);
    __privateAdd(this, _currentThenable, void 0);
    __privateAdd(this, _selectError, void 0);
    __privateAdd(this, _selectFn, void 0);
    __privateAdd(this, _selectResult, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData, void 0);
    __privateAdd(this, _staleTimeoutId, void 0);
    __privateAdd(this, _refetchIntervalId, void 0);
    __privateAdd(this, _currentRefetchInterval, void 0);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client, client);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    if (!this.options.experimental_prefetchInRender) {
      __privateGet(this, _currentThenable).reject(
        new Error("experimental_prefetchInRender feature flag is not enabled")
      );
    }
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, _executeFetch, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, _updateTimers, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, _clearStaleTimeout, clearStaleTimeout_fn).call(this);
    __privateMethod(this, _clearRefetchInterval, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options, notifyOptions) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, _updateQuery, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, _executeFetch, executeFetch_fn).call(this);
    }
    this.updateResult(notifyOptions);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, _updateStaleTimeout, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, _computeRefetchInterval, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, _updateRefetchInterval, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    const trackedResult = {};
    Object.keys(result).forEach((key) => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.trackProp(key);
          onPropTracked == null ? void 0 : onPropTracked(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }
  trackProp(key) {
    __privateGet(this, _trackedProps).add(key);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client).defaultQueryOptions(options);
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return __privateMethod(this, _executeFetch, executeFetch_fn).call(this, {
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a5;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    if (options.select && newState.data !== void 0) {
      if (prevResult && newState.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(newState.data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    } else {
      data = newState.data;
    }
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a5 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a5.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
        ) : options.placeholderData;
        if (options.select && placeholderData !== void 0) {
          try {
            placeholderData = options.select(placeholderData);
            __privateSet(this, _selectError, null);
          } catch (selectError) {
            __privateSet(this, _selectError, selectError);
          }
        }
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable)
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const finalizeThenableIfPossible = (thenable) => {
        if (nextResult.status === "error") {
          thenable.reject(nextResult.error);
        } else if (nextResult.data !== void 0) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = __privateGet(this, _currentThenable);
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult(notifyOptions) {
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const defaultNotifyOptions = {};
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key) => {
        const typedKey = key;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && shouldNotifyListeners()) {
      defaultNotifyOptions.listeners = true;
    }
    __privateMethod(this, _notify, notify_fn).call(this, { ...defaultNotifyOptions, ...notifyOptions });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, _updateTimers, updateTimers_fn).call(this);
    }
  }
}, _client = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), _executeFetch = new WeakSet(), executeFetch_fn = function(fetchOptions) {
  __privateMethod(this, _updateQuery, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop);
  }
  return promise;
}, _updateStaleTimeout = new WeakSet(), updateStaleTimeout_fn = function() {
  __privateMethod(this, _clearStaleTimeout, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (isServer || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout = time + 1;
  __privateSet(this, _staleTimeoutId, setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout));
}, _computeRefetchInterval = new WeakSet(), computeRefetchInterval_fn = function() {
  return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) ?? false;
}, _updateRefetchInterval = new WeakSet(), updateRefetchInterval_fn = function(nextInterval) {
  __privateMethod(this, _clearRefetchInterval, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (isServer || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, _executeFetch, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, _updateTimers = new WeakSet(), updateTimers_fn = function() {
  __privateMethod(this, _updateStaleTimeout, updateStaleTimeout_fn).call(this);
  __privateMethod(this, _updateRefetchInterval, updateRefetchInterval_fn).call(this, __privateMethod(this, _computeRefetchInterval, computeRefetchInterval_fn).call(this));
}, _clearStaleTimeout = new WeakSet(), clearStaleTimeout_fn = function() {
  if (__privateGet(this, _staleTimeoutId)) {
    clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, _clearRefetchInterval = new WeakSet(), clearRefetchInterval_fn = function() {
  if (__privateGet(this, _refetchIntervalId)) {
    clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, _updateQuery = new WeakSet(), updateQuery_fn = function() {
  const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, _notify = new WeakSet(), notify_fn = function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, _a3);
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false) {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

// node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
var InfiniteQueryObserver = class extends QueryObserver {
  constructor(client, options) {
    super(client, options);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(options, notifyOptions) {
    super.setOptions(
      {
        ...options,
        behavior: infiniteQueryBehavior()
      },
      notifyOptions
    );
  }
  getOptimisticResult(options) {
    options.behavior = infiniteQueryBehavior();
    return super.getOptimisticResult(options);
  }
  fetchNextPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(query, options) {
    var _a5, _b;
    const { state } = query;
    const parentResult = super.createResult(query, options);
    const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
    const fetchDirection = (_b = (_a5 = state.fetchMeta) == null ? void 0 : _a5.fetchMore) == null ? void 0 : _b.direction;
    const isFetchNextPageError = isError && fetchDirection === "forward";
    const isFetchingNextPage = isFetching && fetchDirection === "forward";
    const isFetchPreviousPageError = isError && fetchDirection === "backward";
    const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
    const result = {
      ...parentResult,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: hasNextPage(options, state.data),
      hasPreviousPage: hasPreviousPage(options, state.data),
      isFetchNextPageError,
      isFetchingNextPage,
      isFetchPreviousPageError,
      isFetchingPreviousPage,
      isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
    return result;
  }
};

// node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var _client2, _currentResult2, _currentMutation, _mutateOptions, _updateResult, updateResult_fn, _notify2, notify_fn2, _a4;
var MutationObserver = (_a4 = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _updateResult);
    __privateAdd(this, _notify2);
    __privateAdd(this, _client2, void 0);
    __privateAdd(this, _currentResult2, void 0);
    __privateAdd(this, _currentMutation, void 0);
    __privateAdd(this, _mutateOptions, void 0);
    __privateSet(this, _client2, client);
    this.setOptions(options);
    this.bindMethods();
    __privateMethod(this, _updateResult, updateResult_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a5;
    const prevOptions = this.options;
    this.options = __privateGet(this, _client2).defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client2).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _currentMutation),
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a5 = __privateGet(this, _currentMutation)) == null ? void 0 : _a5.state.status) === "pending") {
      __privateGet(this, _currentMutation).setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a5;
    if (!this.hasListeners()) {
      (_a5 = __privateGet(this, _currentMutation)) == null ? void 0 : _a5.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    __privateMethod(this, _updateResult, updateResult_fn).call(this);
    __privateMethod(this, _notify2, notify_fn2).call(this, action);
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult2);
  }
  reset() {
    var _a5;
    (_a5 = __privateGet(this, _currentMutation)) == null ? void 0 : _a5.removeObserver(this);
    __privateSet(this, _currentMutation, void 0);
    __privateMethod(this, _updateResult, updateResult_fn).call(this);
    __privateMethod(this, _notify2, notify_fn2).call(this);
  }
  mutate(variables, options) {
    var _a5;
    __privateSet(this, _mutateOptions, options);
    (_a5 = __privateGet(this, _currentMutation)) == null ? void 0 : _a5.removeObserver(this);
    __privateSet(this, _currentMutation, __privateGet(this, _client2).getMutationCache().build(__privateGet(this, _client2), this.options));
    __privateGet(this, _currentMutation).addObserver(this);
    return __privateGet(this, _currentMutation).execute(variables);
  }
}, _client2 = new WeakMap(), _currentResult2 = new WeakMap(), _currentMutation = new WeakMap(), _mutateOptions = new WeakMap(), _updateResult = new WeakSet(), updateResult_fn = function() {
  var _a5;
  const state = ((_a5 = __privateGet(this, _currentMutation)) == null ? void 0 : _a5.state) ?? getDefaultState();
  __privateSet(this, _currentResult2, {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    isIdle: state.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, _notify2 = new WeakSet(), notify_fn2 = function(action) {
  notifyManager.batch(() => {
    var _a5, _b, _c, _d, _e, _f, _g, _h;
    if (__privateGet(this, _mutateOptions) && this.hasListeners()) {
      const variables = __privateGet(this, _currentResult2).variables;
      const context = __privateGet(this, _currentResult2).context;
      if ((action == null ? void 0 : action.type) === "success") {
        (_b = (_a5 = __privateGet(this, _mutateOptions)).onSuccess) == null ? void 0 : _b.call(_a5, action.data, variables, context);
        (_d = (_c = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _d.call(_c, action.data, null, variables, context);
      } else if ((action == null ? void 0 : action.type) === "error") {
        (_f = (_e = __privateGet(this, _mutateOptions)).onError) == null ? void 0 : _f.call(_e, action.error, variables, context);
        (_h = (_g = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _h.call(
          _g,
          void 0,
          action.error,
          variables,
          context
        );
      }
    }
    this.listeners.forEach((listener) => {
      listener(__privateGet(this, _currentResult2));
    });
  });
}, _a4);

// node_modules/@tanstack/query-core/build/modern/types.js
var dataTagSymbol = Symbol("dataTagSymbol");
var dataTagErrorSymbol = Symbol("dataTagErrorSymbol");
var unsetMarker = Symbol("unsetMarker");

// node_modules/@wagmi/core/dist/esm/query/utils.js
function structuralSharing(oldData, newData) {
  return replaceEqualDeep(oldData, newData);
}
function hashFn(queryKey) {
  return JSON.stringify(queryKey, (_, value) => {
    if (isPlainObject3(value))
      return Object.keys(value).sort().reduce((result, key) => {
        result[key] = value[key];
        return result;
      }, {});
    if (typeof value === "bigint")
      return value.toString();
    return value;
  });
}
function isPlainObject3(value) {
  if (!hasObjectPrototype2(value)) {
    return false;
  }
  const ctor = value.constructor;
  if (typeof ctor === "undefined")
    return true;
  const prot = ctor.prototype;
  if (!hasObjectPrototype2(prot))
    return false;
  if (!prot.hasOwnProperty("isPrototypeOf"))
    return false;
  return true;
}
function hasObjectPrototype2(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function filterQueryOptions(options) {
  const {
    // import('@tanstack/query-core').QueryOptions
    _defaulted,
    behavior,
    gcTime,
    initialData,
    initialDataUpdatedAt,
    maxPages,
    meta,
    networkMode,
    queryFn,
    queryHash,
    queryKey,
    queryKeyHashFn,
    retry,
    retryDelay,
    structuralSharing: structuralSharing2,
    // import('@tanstack/query-core').InfiniteQueryObserverOptions
    getPreviousPageParam: getPreviousPageParam2,
    getNextPageParam: getNextPageParam2,
    initialPageParam,
    // import('@tanstack/react-query').UseQueryOptions
    _optimisticResults,
    enabled,
    notifyOnChangeProps,
    placeholderData,
    refetchInterval,
    refetchIntervalInBackground,
    refetchOnMount,
    refetchOnReconnect,
    refetchOnWindowFocus,
    retryOnMount,
    select,
    staleTime,
    suspense,
    throwOnError,
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    config,
    connector,
    query,
    ...rest
  } = options;
  return rest;
}

// node_modules/@wagmi/core/dist/esm/query/call.js
function callQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { scopeKey: _, ...parameters } = queryKey[1];
      const data = await call(config, {
        ...parameters
      });
      return data ?? null;
    },
    queryKey: callQueryKey(options)
  };
}
function callQueryKey(options) {
  return ["call", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/connect.js
function connectMutationOptions(config) {
  return {
    mutationFn(variables) {
      return connect(config, variables);
    },
    mutationKey: ["connect"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/deployContract.js
function deployContractMutationOptions(config) {
  return {
    mutationFn(variables) {
      return deployContract(config, variables);
    },
    mutationKey: ["deployContract"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/disconnect.js
function disconnectMutationOptions(config) {
  return {
    mutationFn(variables) {
      return disconnect(config, variables);
    },
    mutationKey: ["disconnect"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/estimateFeesPerGas.js
function estimateFeesPerGasQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { scopeKey: _, ...parameters } = queryKey[1];
      return estimateFeesPerGas(config, parameters);
    },
    queryKey: estimateFeesPerGasQueryKey(options)
  };
}
function estimateFeesPerGasQueryKey(options = {}) {
  return ["estimateFeesPerGas", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/estimateGas.js
function estimateGasQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { connector } = options;
      const { account, scopeKey: _, ...parameters } = queryKey[1];
      if (!account && !connector)
        throw new Error("account or connector is required");
      return estimateGas(config, { account, connector, ...parameters });
    },
    queryKey: estimateGasQueryKey(options)
  };
}
function estimateGasQueryKey(options = {}) {
  const { connector: _, ...rest } = options;
  return ["estimateGas", filterQueryOptions(rest)];
}

// node_modules/@wagmi/core/dist/esm/query/estimateMaxPriorityFeePerGas.js
function estimateMaxPriorityFeePerGasQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { scopeKey: _, ...parameters } = queryKey[1];
      return estimateMaxPriorityFeePerGas(config, parameters);
    },
    queryKey: estimateMaxPriorityFeePerGasQueryKey(options)
  };
}
function estimateMaxPriorityFeePerGasQueryKey(options = {}) {
  return ["estimateMaxPriorityFeePerGas", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBalance.js
function getBalanceQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      const balance = await getBalance(config, {
        ...parameters,
        address
      });
      return balance ?? null;
    },
    queryKey: getBalanceQueryKey(options)
  };
}
function getBalanceQueryKey(options = {}) {
  return ["balance", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBlock.js
function getBlockQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { scopeKey: _, ...parameters } = queryKey[1];
      const block = await getBlock(config, parameters);
      return block ?? null;
    },
    queryKey: getBlockQueryKey(options)
  };
}
function getBlockQueryKey(options = {}) {
  return ["block", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBlockNumber.js
function getBlockNumberQueryOptions(config, options = {}) {
  return {
    gcTime: 0,
    async queryFn({ queryKey }) {
      const { scopeKey: _, ...parameters } = queryKey[1];
      const blockNumber = await getBlockNumber(config, parameters);
      return blockNumber ?? null;
    },
    queryKey: getBlockNumberQueryKey(options)
  };
}
function getBlockNumberQueryKey(options = {}) {
  return ["blockNumber", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBlockTransactionCount.js
function getBlockTransactionCountQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { scopeKey: _, ...parameters } = queryKey[1];
      const blockTransactionCount = await getBlockTransactionCount(config, parameters);
      return blockTransactionCount ?? null;
    },
    queryKey: getBlockTransactionCountQueryKey(options)
  };
}
function getBlockTransactionCountQueryKey(options = {}) {
  return ["blockTransactionCount", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBytecode.js
function getBytecodeQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      const bytecode = await getBytecode(config, { ...parameters, address });
      return bytecode ?? null;
    },
    queryKey: getBytecodeQueryKey(options)
  };
}
function getBytecodeQueryKey(options) {
  return ["getBytecode", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getConnectorClient.js
function getConnectorClientQueryOptions(config, options = {}) {
  return {
    gcTime: 0,
    async queryFn({ queryKey }) {
      const { connector } = options;
      const { connectorUid: _, scopeKey: _s, ...parameters } = queryKey[1];
      return getConnectorClient(config, {
        ...parameters,
        connector
      });
    },
    queryKey: getConnectorClientQueryKey(options)
  };
}
function getConnectorClientQueryKey(options = {}) {
  const { connector, ...parameters } = options;
  return [
    "connectorClient",
    { ...filterQueryOptions(parameters), connectorUid: connector == null ? void 0 : connector.uid }
  ];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsAddress.js
function getEnsAddressQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { name, scopeKey: _, ...parameters } = queryKey[1];
      if (!name)
        throw new Error("name is required");
      return getEnsAddress(config, { ...parameters, name });
    },
    queryKey: getEnsAddressQueryKey(options)
  };
}
function getEnsAddressQueryKey(options = {}) {
  return ["ensAddress", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js
function getEnsAvatarQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { name, scopeKey: _, ...parameters } = queryKey[1];
      if (!name)
        throw new Error("name is required");
      return getEnsAvatar(config, { ...parameters, name });
    },
    queryKey: getEnsAvatarQueryKey(options)
  };
}
function getEnsAvatarQueryKey(options = {}) {
  return ["ensAvatar", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsName.js
function getEnsNameQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      return getEnsName(config, { ...parameters, address });
    },
    queryKey: getEnsNameQueryKey(options)
  };
}
function getEnsNameQueryKey(options = {}) {
  return ["ensName", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsResolver.js
function getEnsResolverQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { name, scopeKey: _, ...parameters } = queryKey[1];
      if (!name)
        throw new Error("name is required");
      return getEnsResolver(config, { ...parameters, name });
    },
    queryKey: getEnsResolverQueryKey(options)
  };
}
function getEnsResolverQueryKey(options = {}) {
  return ["ensResolver", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsText.js
function getEnsTextQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { key, name, scopeKey: _, ...parameters } = queryKey[1];
      if (!key || !name)
        throw new Error("key and name are required");
      return getEnsText(config, { ...parameters, key, name });
    },
    queryKey: getEnsTextQueryKey(options)
  };
}
function getEnsTextQueryKey(options = {}) {
  return ["ensText", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getFeeHistory.js
function getFeeHistoryQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { blockCount, rewardPercentiles, scopeKey: _, ...parameters } = queryKey[1];
      if (!blockCount)
        throw new Error("blockCount is required");
      if (!rewardPercentiles)
        throw new Error("rewardPercentiles is required");
      const feeHistory = await getFeeHistory(config, {
        ...parameters,
        blockCount,
        rewardPercentiles
      });
      return feeHistory ?? null;
    },
    queryKey: getFeeHistoryQueryKey(options)
  };
}
function getFeeHistoryQueryKey(options = {}) {
  return ["feeHistory", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getGasPrice.js
function getGasPriceQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { scopeKey: _, ...parameters } = queryKey[1];
      const gasPrice = await getGasPrice(config, parameters);
      return gasPrice ?? null;
    },
    queryKey: getGasPriceQueryKey(options)
  };
}
function getGasPriceQueryKey(options = {}) {
  return ["gasPrice", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getProof.js
function getProofQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, storageKeys, ...parameters } = queryKey[1];
      if (!address || !storageKeys)
        throw new Error("address and storageKeys are required");
      return getProof(config, { ...parameters, address, storageKeys });
    },
    queryKey: getProofQueryKey(options)
  };
}
function getProofQueryKey(options) {
  return ["getProof", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getStorageAt.js
function getStorageAtQueryOptions(config, options = {}) {
  return {
    queryFn({ queryKey }) {
      const { address, slot, scopeKey: _, ...parameters } = queryKey[1];
      if (!address || !slot)
        throw new Error("address and slot are required");
      return getStorageAt(config, { ...parameters, address, slot });
    },
    queryKey: getStorageAtQueryKey(options)
  };
}
function getStorageAtQueryKey(options) {
  return ["getStorageAt", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getToken.js
function getTokenQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      return getToken(config, { ...parameters, address });
    },
    queryKey: getTokenQueryKey(options)
  };
}
function getTokenQueryKey(options = {}) {
  return ["token", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransaction.js
function getTransactionQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { blockHash, blockNumber, blockTag, hash, index } = queryKey[1];
      if (!blockHash && !blockNumber && !blockTag && !hash)
        throw new Error("blockHash, blockNumber, blockTag, or hash is required");
      if (!hash && !index)
        throw new Error("index is required for blockHash, blockNumber, or blockTag");
      const { scopeKey: _, ...rest } = queryKey[1];
      return getTransaction(config, rest);
    },
    queryKey: getTransactionQueryKey(options)
  };
}
function getTransactionQueryKey(options = {}) {
  return ["transaction", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransactionConfirmations.js
function getTransactionConfirmationsQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { hash, transactionReceipt, scopeKey: _, ...parameters } = queryKey[1];
      if (!hash && !transactionReceipt)
        throw new Error("hash or transactionReceipt is required");
      const confirmations = await getTransactionConfirmations(config, {
        hash,
        transactionReceipt,
        ...parameters
      });
      return confirmations ?? null;
    },
    queryKey: getTransactionConfirmationsQueryKey(options)
  };
}
function getTransactionConfirmationsQueryKey(options = {}) {
  return ["transactionConfirmations", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransactionCount.js
function getTransactionCountQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      const transactionCount = await getTransactionCount(config, {
        ...parameters,
        address
      });
      return transactionCount ?? null;
    },
    queryKey: getTransactionCountQueryKey(options)
  };
}
function getTransactionCountQueryKey(options = {}) {
  return ["transactionCount", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransactionReceipt.js
function getTransactionReceiptQueryOptions(config, options = {}) {
  return {
    queryFn({ queryKey }) {
      const { hash, scopeKey: _, ...parameters } = queryKey[1];
      if (!hash)
        throw new Error("hash is required");
      return getTransactionReceipt(config, { ...parameters, hash });
    },
    queryKey: getTransactionReceiptQueryKey(options)
  };
}
function getTransactionReceiptQueryKey(options) {
  return ["getTransactionReceipt", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getWalletClient.js
function getWalletClientQueryOptions(config, options = {}) {
  return {
    gcTime: 0,
    async queryFn({ queryKey }) {
      const { connector } = options;
      const { connectorUid: _, scopeKey: _s, ...parameters } = queryKey[1];
      return getWalletClient(config, { ...parameters, connector });
    },
    queryKey: getWalletClientQueryKey(options)
  };
}
function getWalletClientQueryKey(options = {}) {
  const { connector, ...parameters } = options;
  return [
    "walletClient",
    { ...filterQueryOptions(parameters), connectorUid: connector == null ? void 0 : connector.uid }
  ];
}

// node_modules/@wagmi/core/dist/esm/query/infiniteReadContracts.js
function infiniteReadContractsQueryOptions(config, options) {
  return {
    ...options.query,
    async queryFn({ pageParam, queryKey }) {
      const { contracts } = options;
      const { cacheKey: _, scopeKey: _s, ...parameters } = queryKey[1];
      return await readContracts(config, {
        ...parameters,
        contracts: contracts(pageParam)
      });
    },
    queryKey: infiniteReadContractsQueryKey(options)
  };
}
function infiniteReadContractsQueryKey(options) {
  const { contracts: _, query: _q, ...parameters } = options;
  return ["infiniteReadContracts", filterQueryOptions(parameters)];
}

// node_modules/@wagmi/core/dist/esm/query/prepareTransactionRequest.js
function prepareTransactionRequestQueryOptions(config, options = {}) {
  return {
    queryFn({ queryKey }) {
      const { scopeKey: _, to, ...parameters } = queryKey[1];
      if (!to)
        throw new Error("to is required");
      return prepareTransactionRequest(config, {
        to,
        ...parameters
      });
    },
    queryKey: prepareTransactionRequestQueryKey(options)
  };
}
function prepareTransactionRequestQueryKey(options) {
  return ["prepareTransactionRequest", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/readContract.js
function readContractQueryOptions(config, options = {}) {
  return {
    // TODO: Support `signal` once Viem actions allow passthrough
    // https://tkdodo.eu/blog/why-you-want-react-query#bonus-cancellation
    async queryFn({ queryKey }) {
      const abi = options.abi;
      if (!abi)
        throw new Error("abi is required");
      const { functionName, scopeKey: _, ...parameters } = queryKey[1];
      const addressOrCodeParams = (() => {
        const params = queryKey[1];
        if (params.address)
          return { address: params.address };
        if (params.code)
          return { code: params.code };
        throw new Error("address or code is required");
      })();
      if (!functionName)
        throw new Error("functionName is required");
      return readContract(config, {
        abi,
        functionName,
        args: parameters.args,
        ...addressOrCodeParams,
        ...parameters
      });
    },
    queryKey: readContractQueryKey(options)
  };
}
function readContractQueryKey(options = {}) {
  const { abi: _, ...rest } = options;
  return ["readContract", filterQueryOptions(rest)];
}

// node_modules/@wagmi/core/dist/esm/query/readContracts.js
function readContractsQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      var _a5;
      const contracts = [];
      const length = queryKey[1].contracts.length;
      for (let i = 0; i < length; i++) {
        const contract = queryKey[1].contracts[i];
        const abi = ((_a5 = options.contracts) == null ? void 0 : _a5[i]).abi;
        contracts.push({ ...contract, abi });
      }
      const { scopeKey: _, ...parameters } = queryKey[1];
      return readContracts(config, {
        ...parameters,
        contracts
      });
    },
    queryKey: readContractsQueryKey(options)
  };
}
function readContractsQueryKey(options = {}) {
  const contracts = [];
  for (const contract of options.contracts ?? []) {
    const { abi: _, ...rest } = contract;
    contracts.push({ ...rest, chainId: rest.chainId ?? options.chainId });
  }
  return [
    "readContracts",
    filterQueryOptions({ ...options, contracts })
  ];
}

// node_modules/@wagmi/core/dist/esm/query/reconnect.js
function reconnectMutationOptions(config) {
  return {
    mutationFn(variables) {
      return reconnect(config, variables);
    },
    mutationKey: ["reconnect"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/sendTransaction.js
function sendTransactionMutationOptions(config) {
  return {
    mutationFn(variables) {
      return sendTransaction(config, variables);
    },
    mutationKey: ["sendTransaction"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/signMessage.js
function signMessageMutationOptions(config) {
  return {
    mutationFn(variables) {
      return signMessage(config, variables);
    },
    mutationKey: ["signMessage"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/signTypedData.js
function signTypedDataMutationOptions(config) {
  return {
    mutationFn(variables) {
      return signTypedData(config, variables);
    },
    mutationKey: ["signTypedData"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/switchAccount.js
function switchAccountMutationOptions(config) {
  return {
    mutationFn(variables) {
      return switchAccount(config, variables);
    },
    mutationKey: ["switchAccount"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/simulateContract.js
function simulateContractQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { abi, connector } = options;
      if (!abi)
        throw new Error("abi is required");
      const { scopeKey: _, ...parameters } = queryKey[1];
      const { address, functionName } = parameters;
      if (!address)
        throw new Error("address is required");
      if (!functionName)
        throw new Error("functionName is required");
      return simulateContract(config, {
        abi,
        connector,
        ...parameters
      });
    },
    queryKey: simulateContractQueryKey(options)
  };
}
function simulateContractQueryKey(options = {}) {
  const { abi: _, connector: _c, ...rest } = options;
  return ["simulateContract", filterQueryOptions(rest)];
}

// node_modules/@wagmi/core/dist/esm/query/switchChain.js
function switchChainMutationOptions(config) {
  return {
    mutationFn(variables) {
      return switchChain(config, variables);
    },
    mutationKey: ["switchChain"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/verifyMessage.js
function verifyMessageQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, message, signature } = queryKey[1];
      if (!address || !message || !signature)
        throw new Error("address, message, and signature are required");
      const { scopeKey: _, ...parameters } = queryKey[1];
      const verified = await verifyMessage(config, parameters);
      return verified ?? null;
    },
    queryKey: verifyMessageQueryKey(options)
  };
}
function verifyMessageQueryKey(options) {
  return ["verifyMessage", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/verifyTypedData.js
function verifyTypedDataQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, message, primaryType, signature, types, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      if (!message)
        throw new Error("message is required");
      if (!primaryType)
        throw new Error("primaryType is required");
      if (!signature)
        throw new Error("signature is required");
      if (!types)
        throw new Error("types is required");
      const verified = await verifyTypedData(config, {
        ...parameters,
        address,
        message,
        primaryType,
        signature,
        types
      });
      return verified ?? null;
    },
    queryKey: verifyTypedDataQueryKey(options)
  };
}
function verifyTypedDataQueryKey(options) {
  return ["verifyTypedData", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/waitForTransactionReceipt.js
function waitForTransactionReceiptQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { hash, ...parameters } = queryKey[1];
      if (!hash)
        throw new Error("hash is required");
      return waitForTransactionReceipt(config, {
        ...parameters,
        onReplaced: options.onReplaced,
        hash
      });
    },
    queryKey: waitForTransactionReceiptQueryKey(options)
  };
}
function waitForTransactionReceiptQueryKey(options = {}) {
  const { onReplaced: _, ...rest } = options;
  return ["waitForTransactionReceipt", filterQueryOptions(rest)];
}

// node_modules/@wagmi/core/dist/esm/query/watchAsset.js
function watchAssetMutationOptions(config) {
  return {
    mutationFn(variables) {
      return watchAsset(config, variables);
    },
    mutationKey: ["watchAsset"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/writeContract.js
function writeContractMutationOptions(config) {
  return {
    mutationFn(variables) {
      return writeContract(config, variables);
    },
    mutationKey: ["writeContract"]
  };
}

// node_modules/@tanstack/react-query/build/modern/useQueries.js
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var QueryClientContext = React.createContext(
  void 0
);
var useQueryClient = (queryClient) => {
  const client = React.useContext(QueryClientContext);
  if (queryClient) {
    return queryClient;
  }
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
};

// node_modules/@tanstack/react-query/build/modern/isRestoring.js
var React2 = __toESM(require_react(), 1);
var IsRestoringContext = React2.createContext(false);
var useIsRestoring = () => React2.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

// node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
var React3 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = React3.createContext(createValue());
var useQueryErrorResetBoundary = () => React3.useContext(QueryErrorResetBoundaryContext);

// node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
var React4 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/utils.js
function shouldThrowError(throwError, params) {
  if (typeof throwError === "function") {
    return throwError(...params);
  }
  return !!throwError;
}
function noop2() {
}

// node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  React4.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && shouldThrowError(throwOnError, [result.error, query]);
};

// node_modules/@tanstack/react-query/build/modern/suspense.js
var ensureSuspenseTimers = (defaultedOptions) => {
  const originalStaleTime = defaultedOptions.staleTime;
  if (defaultedOptions.suspense) {
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => Math.max(originalStaleTime(...args), 1e3) : Math.max(originalStaleTime ?? 1e3, 1e3);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, 1e3);
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});

// node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
var React6 = __toESM(require_react(), 1);
function useBaseQuery(options, Observer, queryClient) {
  var _a5, _b, _c, _d, _e;
  if (true) {
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new Error(
        'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
      );
    }
  }
  const client = useQueryClient(queryClient);
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedOptions = client.defaultQueryOptions(options);
  (_b = (_a5 = client.getDefaultOptions().queries) == null ? void 0 : _a5._experimental_beforeQuery) == null ? void 0 : _b.call(
    _a5,
    defaultedOptions
  );
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = React6.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  React6.useSyncExternalStore(
    React6.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop2;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React6.useEffect(() => {
    observer.setOptions(defaultedOptions, { listeners: false });
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query: client.getQueryCache().get(defaultedOptions.queryHash)
  })) {
    throw result.error;
  }
  ;
  (_d = (_c = client.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null ? void 0 : _d.call(
    _c,
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !isServer && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (_e = client.getQueryCache().get(defaultedOptions.queryHash)) == null ? void 0 : _e.promise
    );
    promise == null ? void 0 : promise.catch(noop2).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

// node_modules/@tanstack/react-query/build/modern/useQuery.js
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver, queryClient);
}

// node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js
var React7 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var React8 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var React9 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/modern/useMutation.js
var React10 = __toESM(require_react(), 1);
function useMutation(options, queryClient) {
  const client = useQueryClient(queryClient);
  const [observer] = React10.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  React10.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = React10.useSyncExternalStore(
    React10.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = React10.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop2);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}

// node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
function useInfiniteQuery(options, queryClient) {
  return useBaseQuery(
    options,
    InfiniteQueryObserver,
    queryClient
  );
}

// node_modules/wagmi/dist/esm/utils/query.js
function useQuery2(parameters) {
  const result = useQuery({
    ...parameters,
    queryKeyHashFn: hashFn
    // for bigint support
  });
  result.queryKey = parameters.queryKey;
  return result;
}
function useInfiniteQuery2(parameters) {
  const result = useInfiniteQuery({
    ...parameters,
    queryKeyHashFn: hashFn
    // for bigint support
  });
  result.queryKey = parameters.queryKey;
  return result;
}

// node_modules/wagmi/dist/esm/hooks/useChainId.js
var import_react6 = __toESM(require_react(), 1);
function useChainId(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react6.useSyncExternalStore)((onChange) => watchChainId(config, { onChange }), () => getChainId(config), () => getChainId(config));
}

// node_modules/wagmi/dist/esm/hooks/useBalance.js
function useBalance(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBalanceQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useWatchBlocks.js
var import_react7 = __toESM(require_react(), 1);
function useWatchBlocks(parameters = {}) {
  const { enabled = true, onBlock, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  (0, import_react7.useEffect)(() => {
    if (!enabled)
      return;
    if (!onBlock)
      return;
    return watchBlocks(config, {
      ...rest,
      chainId,
      onBlock
    });
  }, [
    chainId,
    config,
    enabled,
    onBlock,
    ///
    rest.blockTag,
    rest.emitMissed,
    rest.emitOnBegin,
    rest.includeTransactions,
    rest.onError,
    rest.poll,
    rest.pollingInterval,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useBlock.js
function useBlock(parameters = {}) {
  const { query = {}, watch } = parameters;
  const config = useConfig(parameters);
  const queryClient = useQueryClient();
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const options = getBlockQueryOptions(config, {
    ...parameters,
    chainId
  });
  const enabled = Boolean(query.enabled ?? true);
  useWatchBlocks({
    ...{
      config: parameters.config,
      chainId: parameters.chainId,
      ...typeof watch === "object" ? watch : {}
    },
    enabled: Boolean(enabled && (typeof watch === "object" ? watch.enabled : watch)),
    onBlock(block) {
      queryClient.setQueryData(options.queryKey, block);
    }
  });
  return useQuery2({
    ...query,
    ...options,
    enabled
  });
}

// node_modules/wagmi/dist/esm/hooks/useWatchBlockNumber.js
var import_react8 = __toESM(require_react(), 1);
function useWatchBlockNumber(parameters = {}) {
  const { enabled = true, onBlockNumber, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  (0, import_react8.useEffect)(() => {
    if (!enabled)
      return;
    if (!onBlockNumber)
      return;
    return watchBlockNumber(config, {
      ...rest,
      chainId,
      onBlockNumber
    });
  }, [
    chainId,
    config,
    enabled,
    onBlockNumber,
    ///
    rest.onError,
    rest.emitMissed,
    rest.emitOnBegin,
    rest.poll,
    rest.pollingInterval,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useBlockNumber.js
function useBlockNumber(parameters = {}) {
  const { query = {}, watch } = parameters;
  const config = useConfig(parameters);
  const queryClient = useQueryClient();
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const options = getBlockNumberQueryOptions(config, {
    ...parameters,
    chainId
  });
  useWatchBlockNumber({
    ...{
      config: parameters.config,
      chainId: parameters.chainId,
      ...typeof watch === "object" ? watch : {}
    },
    enabled: Boolean((query.enabled ?? true) && (typeof watch === "object" ? watch.enabled : watch)),
    onBlockNumber(blockNumber) {
      queryClient.setQueryData(options.queryKey, blockNumber);
    }
  });
  return useQuery2({ ...query, ...options });
}

// node_modules/wagmi/dist/esm/hooks/useBlockTransactionCount.js
function useBlockTransactionCount(parameters = {}) {
  const { query = {} } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const options = getBlockTransactionCountQueryOptions(config, {
    ...parameters,
    chainId
  });
  return useQuery2({ ...query, ...options });
}

// node_modules/wagmi/dist/esm/hooks/useBytecode.js
function useBytecode(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBytecodeQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useCall.js
function useCall(parameters = {}) {
  const { query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = callQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2({ ...query, ...options });
}

// node_modules/wagmi/dist/esm/hooks/useChains.js
var import_react9 = __toESM(require_react(), 1);
function useChains(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react9.useSyncExternalStore)((onChange) => watchChains(config, { onChange }), () => getChains(config), () => getChains(config));
}

// node_modules/wagmi/dist/esm/hooks/useClient.js
var import_with_selector2 = __toESM(require_with_selector(), 1);
function useClient(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_with_selector2.useSyncExternalStoreWithSelector)((onChange) => watchClient(config, { onChange }), () => getClient(config, parameters), () => getClient(config, parameters), (x) => x, (a, b) => (a == null ? void 0 : a.uid) === (b == null ? void 0 : b.uid));
}

// node_modules/wagmi/dist/esm/hooks/useConnect.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/wagmi/dist/esm/hooks/useConnectors.js
var import_react10 = __toESM(require_react(), 1);
function useConnectors(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react10.useSyncExternalStore)((onChange) => watchConnectors(config, { onChange }), () => getConnectors(config), () => getConnectors(config));
}

// node_modules/wagmi/dist/esm/hooks/useConnect.js
function useConnect(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = connectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  (0, import_react11.useEffect)(() => {
    return config.subscribe(({ status }) => status, (status, previousStatus) => {
      if (previousStatus === "connected" && status === "disconnected")
        result.reset();
    });
  }, [config, result.reset]);
  return {
    ...result,
    connect: mutate,
    connectAsync: mutateAsync,
    connectors: useConnectors({ config })
  };
}

// node_modules/wagmi/dist/esm/hooks/useConnections.js
var import_react12 = __toESM(require_react(), 1);
function useConnections(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react12.useSyncExternalStore)((onChange) => watchConnections(config, { onChange }), () => getConnections(config), () => getConnections(config));
}

// node_modules/wagmi/dist/esm/hooks/useConnectorClient.js
var import_react13 = __toESM(require_react(), 1);
function useConnectorClient(parameters = {}) {
  const { query = {}, ...rest } = parameters;
  const config = useConfig(rest);
  const queryClient = useQueryClient();
  const { address, connector, status } = useAccount({ config });
  const chainId = useChainId({ config });
  const activeConnector = parameters.connector ?? connector;
  const { queryKey, ...options } = getConnectorClientQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId,
    connector: activeConnector
  });
  const enabled = Boolean((status === "connected" || status === "reconnecting" && (activeConnector == null ? void 0 : activeConnector.getProvider)) && (query.enabled ?? true));
  const addressRef = (0, import_react13.useRef)(address);
  (0, import_react13.useEffect)(() => {
    const previousAddress = addressRef.current;
    if (!address && previousAddress) {
      queryClient.removeQueries({ queryKey });
      addressRef.current = void 0;
    } else if (address !== previousAddress) {
      queryClient.invalidateQueries({ queryKey });
      addressRef.current = address;
    }
  }, [address, queryClient]);
  return useQuery2({
    ...query,
    ...options,
    queryKey,
    enabled,
    staleTime: Number.POSITIVE_INFINITY
  });
}

// node_modules/wagmi/dist/esm/hooks/useDeployContract.js
function useDeployContract(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = deployContractMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    deployContract: mutate,
    deployContractAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useDisconnect.js
function useDisconnect(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = disconnectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    connectors: useConnections({ config }).map((connection) => connection.connector),
    disconnect: mutate,
    disconnectAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useEnsAddress.js
function useEnsAddress(parameters = {}) {
  const { name, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsAddressQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(name && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useEnsAvatar.js
function useEnsAvatar(parameters = {}) {
  const { name, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsAvatarQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(name && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useEnsName.js
function useEnsName(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsNameQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useEnsResolver.js
function useEnsResolver(parameters = {}) {
  const { name, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsResolverQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(name && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useEnsText.js
function useEnsText(parameters = {}) {
  const { key, name, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsTextQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(key && name && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useEstimateFeesPerGas.js
function useEstimateFeesPerGas(parameters = {}) {
  const { query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = estimateFeesPerGasQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2({ ...query, ...options });
}

// node_modules/wagmi/dist/esm/hooks/useEstimateGas.js
function useEstimateGas(parameters = {}) {
  const { connector, query = {} } = parameters;
  const config = useConfig(parameters);
  const { data: connectorClient } = useConnectorClient({
    config,
    connector,
    query: { enabled: parameters.account === void 0 }
  });
  const account = parameters.account ?? (connectorClient == null ? void 0 : connectorClient.account);
  const chainId = useChainId({ config });
  const options = estimateGasQueryOptions(config, {
    ...parameters,
    account,
    chainId: parameters.chainId ?? chainId,
    connector
  });
  const enabled = Boolean((account || connector) && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useEstimateMaxPriorityFeePerGas.js
function useEstimateMaxPriorityFeePerGas(parameters = {}) {
  const { query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = estimateMaxPriorityFeePerGasQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2({ ...query, ...options });
}

// node_modules/wagmi/dist/esm/hooks/useFeeHistory.js
function useFeeHistory(parameters = {}) {
  const { blockCount, rewardPercentiles, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getFeeHistoryQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(blockCount && rewardPercentiles && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useGasPrice.js
function useGasPrice(parameters = {}) {
  const { query = {} } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const options = getGasPriceQueryOptions(config, {
    ...parameters,
    chainId
  });
  return useQuery2({ ...query, ...options });
}

// node_modules/wagmi/dist/esm/hooks/useInfiniteReadContracts.js
function useInfiniteReadContracts(parameters) {
  const { contracts = [], query } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = infiniteReadContractsQueryOptions(config, {
    ...parameters,
    chainId,
    contracts,
    query
  });
  return useInfiniteQuery2({
    ...query,
    ...options,
    initialPageParam: options.initialPageParam,
    structuralSharing: query.structuralSharing ?? structuralSharing
  });
}

// node_modules/wagmi/dist/esm/hooks/usePrepareTransactionRequest.js
function usePrepareTransactionRequest(parameters = {}) {
  const { to, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = prepareTransactionRequestQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(to && (query.enabled ?? true));
  return useQuery2({
    ...query,
    ...options,
    enabled
  });
}

// node_modules/wagmi/dist/esm/hooks/useProof.js
function useProof(parameters = {}) {
  const { address, storageKeys, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getProofQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && storageKeys && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/usePublicClient.js
var import_with_selector3 = __toESM(require_with_selector(), 1);
function usePublicClient(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_with_selector3.useSyncExternalStoreWithSelector)((onChange) => watchPublicClient(config, { onChange }), () => getPublicClient(config, parameters), () => getPublicClient(config, parameters), (x) => x, (a, b) => (a == null ? void 0 : a.uid) === (b == null ? void 0 : b.uid));
}

// node_modules/wagmi/dist/esm/hooks/useReadContract.js
function useReadContract(parameters = {}) {
  const { abi, address, functionName, query = {} } = parameters;
  const code = parameters.code;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = readContractQueryOptions(config, { ...parameters, chainId: parameters.chainId ?? chainId });
  const enabled = Boolean((address || code) && abi && functionName && (query.enabled ?? true));
  return useQuery2({
    ...query,
    ...options,
    enabled,
    structuralSharing: query.structuralSharing ?? structuralSharing
  });
}

// node_modules/wagmi/dist/esm/hooks/useReadContracts.js
var import_react14 = __toESM(require_react(), 1);
function useReadContracts(parameters = {}) {
  const { contracts = [], query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = readContractsQueryOptions(config, { ...parameters, chainId });
  const enabled = (0, import_react14.useMemo)(() => {
    let isContractsValid = false;
    for (const contract of contracts) {
      const { abi, address, functionName } = contract;
      if (!abi || !address || !functionName) {
        isContractsValid = false;
        break;
      }
      isContractsValid = true;
    }
    return Boolean(isContractsValid && (query.enabled ?? true));
  }, [contracts, query.enabled]);
  return useQuery2({
    ...options,
    ...query,
    enabled,
    structuralSharing: query.structuralSharing ?? structuralSharing
  });
}

// node_modules/wagmi/dist/esm/hooks/useReconnect.js
function useReconnect(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = reconnectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    connectors: config.connectors,
    reconnect: mutate,
    reconnectAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSendTransaction.js
function useSendTransaction(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = sendTransactionMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    sendTransaction: mutate,
    sendTransactionAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSignMessage.js
function useSignMessage(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = signMessageMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    signMessage: mutate,
    signMessageAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSignTypedData.js
function useSignTypedData(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = signTypedDataMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    signTypedData: mutate,
    signTypedDataAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSimulateContract.js
function useSimulateContract(parameters = {}) {
  const { abi, address, connector, functionName, query = {} } = parameters;
  const config = useConfig(parameters);
  const { data: connectorClient } = useConnectorClient({
    config,
    connector,
    query: { enabled: parameters.account === void 0 }
  });
  const chainId = useChainId({ config });
  const options = simulateContractQueryOptions(config, {
    ...parameters,
    account: parameters.account ?? (connectorClient == null ? void 0 : connectorClient.account),
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(abi && address && functionName && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useStorageAt.js
function useStorageAt(parameters = {}) {
  const { address, slot, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getStorageAtQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && slot && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useSwitchAccount.js
function useSwitchAccount(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = switchAccountMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    connectors: useConnections({ config }).map((connection) => connection.connector),
    switchAccount: mutate,
    switchAccountAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSwitchChain.js
function useSwitchChain(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = switchChainMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    chains: useChains({ config }),
    switchChain: mutate,
    switchChainAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useToken.js
function useToken(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTokenQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useTransaction.js
function useTransaction(parameters = {}) {
  const { blockHash, blockNumber, blockTag, hash, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(!(blockHash && blockNumber && blockTag && hash) && (query.enabled ?? true));
  return useQuery2({
    ...query,
    ...options,
    enabled
  });
}

// node_modules/wagmi/dist/esm/hooks/useTransactionConfirmations.js
function useTransactionConfirmations(parameters = {}) {
  const { hash, transactionReceipt, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionConfirmationsQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(!(hash && transactionReceipt) && (hash || transactionReceipt) && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useTransactionCount.js
function useTransactionCount(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionCountQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useTransactionReceipt.js
function useTransactionReceipt(parameters = {}) {
  const { hash, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionReceiptQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(hash && (query.enabled ?? true));
  return useQuery2({
    ...query,
    ...options,
    enabled
  });
}

// node_modules/wagmi/dist/esm/hooks/useVerifyMessage.js
function useVerifyMessage(parameters = {}) {
  const { address, message, signature, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = verifyMessageQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && message && signature && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useVerifyTypedData.js
function useVerifyTypedData(parameters = {}) {
  const { address, message, primaryType, signature, types, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = verifyTypedDataQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && message && primaryType && signature && types && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// node_modules/wagmi/dist/esm/hooks/useWalletClient.js
var import_react15 = __toESM(require_react(), 1);
function useWalletClient(parameters = {}) {
  const { query = {}, ...rest } = parameters;
  const config = useConfig(rest);
  const queryClient = useQueryClient();
  const { address, connector, status } = useAccount({ config });
  const chainId = useChainId({ config });
  const activeConnector = parameters.connector ?? connector;
  const { queryKey, ...options } = getWalletClientQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId,
    connector: parameters.connector ?? connector
  });
  const enabled = Boolean((status === "connected" || status === "reconnecting" && (activeConnector == null ? void 0 : activeConnector.getProvider)) && (query.enabled ?? true));
  const addressRef = (0, import_react15.useRef)(address);
  (0, import_react15.useEffect)(() => {
    const previousAddress = addressRef.current;
    if (!address && previousAddress) {
      queryClient.removeQueries({ queryKey });
      addressRef.current = void 0;
    } else if (address !== previousAddress) {
      queryClient.invalidateQueries({ queryKey });
      addressRef.current = address;
    }
  }, [address, queryClient]);
  return useQuery2({
    ...query,
    ...options,
    queryKey,
    enabled,
    staleTime: Number.POSITIVE_INFINITY
  });
}

// node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js
function useWaitForTransactionReceipt(parameters = {}) {
  const { hash, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = waitForTransactionReceiptQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(hash && (query.enabled ?? true));
  return useQuery2({
    ...query,
    ...options,
    enabled
  });
}

// node_modules/wagmi/dist/esm/hooks/useWatchAsset.js
function useWatchAsset(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = watchAssetMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    watchAsset: mutate,
    watchAssetAsync: mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js
var import_react16 = __toESM(require_react(), 1);
function useWatchContractEvent(parameters = {}) {
  const { enabled = true, onLogs, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  (0, import_react16.useEffect)(() => {
    if (!enabled)
      return;
    if (!onLogs)
      return;
    return watchContractEvent(config, {
      ...rest,
      chainId,
      onLogs
    });
  }, [
    chainId,
    config,
    enabled,
    onLogs,
    ///
    rest.abi,
    rest.address,
    rest.args,
    rest.batch,
    rest.eventName,
    rest.fromBlock,
    rest.onError,
    rest.poll,
    rest.pollingInterval,
    rest.strict,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useWatchPendingTransactions.js
var import_react17 = __toESM(require_react(), 1);
function useWatchPendingTransactions(parameters = {}) {
  const { enabled = true, onTransactions, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  (0, import_react17.useEffect)(() => {
    if (!enabled)
      return;
    if (!onTransactions)
      return;
    return watchPendingTransactions(config, {
      ...rest,
      chainId,
      onTransactions
    });
  }, [
    chainId,
    config,
    enabled,
    onTransactions,
    ///
    rest.batch,
    rest.onError,
    rest.poll,
    rest.pollingInterval,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useWriteContract.js
function useWriteContract(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = writeContractMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    writeContract: mutate,
    writeContractAsync: mutateAsync
  };
}

export {
  Hydrate,
  WagmiContext,
  WagmiProvider,
  version,
  BaseError2 as BaseError,
  WagmiProviderNotFoundError,
  useConfig,
  useAccount,
  useAccountEffect,
  useChainId,
  useBalance,
  useWatchBlocks,
  useBlock,
  useWatchBlockNumber,
  useBlockNumber,
  useBlockTransactionCount,
  useBytecode,
  useCall,
  useChains,
  useClient,
  useConnectors,
  useConnect,
  useConnections,
  useConnectorClient,
  useDeployContract,
  useDisconnect,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  useEnsText,
  useEstimateFeesPerGas,
  useEstimateGas,
  useEstimateMaxPriorityFeePerGas,
  useFeeHistory,
  useGasPrice,
  useInfiniteReadContracts,
  usePrepareTransactionRequest,
  useProof,
  usePublicClient,
  useReadContract,
  useReadContracts,
  useReconnect,
  useSendTransaction,
  useSignMessage,
  useSignTypedData,
  useSimulateContract,
  useStorageAt,
  useSwitchAccount,
  useSwitchChain,
  useToken,
  useTransaction,
  useTransactionConfirmations,
  useTransactionCount,
  useTransactionReceipt,
  useVerifyMessage,
  useVerifyTypedData,
  useWalletClient,
  useWaitForTransactionReceipt,
  useWatchAsset,
  useWatchContractEvent,
  useWatchPendingTransactions,
  useWriteContract
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-SAZZEXVD.js.map
