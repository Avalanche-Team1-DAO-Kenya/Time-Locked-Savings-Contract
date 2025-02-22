import "./chunk-SAZZEXVD.js";
import "./chunk-HXHZZBCW.js";
import {
  ConstantsUtil,
  getTransport
} from "./chunk-HGYZCZWG.js";
import "./chunk-LDYBCKWB.js";
import {
  W3mFrameProvider
} from "./chunk-FAF7M4S3.js";
import "./chunk-2PYUBLP3.js";
import "./chunk-UOQSISIW.js";
import "./chunk-5RGLIFIF.js";
import "./chunk-6ZROGB7D.js";
import "./chunk-RZICIBFF.js";
import "./chunk-WMH57NS6.js";
import "./chunk-HRQFO3FK.js";
import {
  ChainNotConfiguredError,
  ProviderNotFoundError,
  createConfig,
  createConnector,
  extractRpcUrls,
  injected
} from "./chunk-5KAHHIA3.js";
import {
  withRetry,
  withTimeout
} from "./chunk-QRKWAH57.js";
import "./chunk-RD5623SA.js";
import "./chunk-A2QNBEI4.js";
import "./chunk-UIMCO67C.js";
import {
  ResourceUnavailableRpcError,
  SwitchChainError,
  UserRejectedRequestError,
  getAddress,
  hexToNumber,
  numberToHex
} from "./chunk-K5GJ5XQN.js";
import "./chunk-CRFN57AP.js";
import "./chunk-GIZG7J7H.js";

// node_modules/@wagmi/connectors/dist/esm/coinbaseWallet.js
coinbaseWallet.type = "coinbaseWallet";
function coinbaseWallet(parameters = {}) {
  if (parameters.version === "3" || parameters.headlessMode)
    return version3(parameters);
  return version4(parameters);
}
function version4(parameters) {
  let walletProvider;
  let accountsChanged;
  let chainChanged;
  let disconnect;
  return createConnector((config) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    rdns: "com.coinbase.wallet",
    type: coinbaseWallet.type,
    async connect({ chainId, ...rest } = {}) {
      try {
        const provider = await this.getProvider();
        const accounts = (await provider.request({
          method: "eth_requestAccounts",
          params: "instantOnboarding" in rest && rest.instantOnboarding ? [{ onboarding: "instant" }] : []
        })).map((x) => getAddress(x));
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect) {
          disconnect = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect);
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = (chain == null ? void 0 : chain.id) ?? currentChainId;
        }
        return { accounts, chainId: currentChainId };
      } catch (error) {
        if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        throw error;
      }
    },
    async disconnect() {
      var _a;
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
      provider.disconnect();
      (_a = provider.close) == null ? void 0 : _a.call(provider);
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return (await provider.request({
        method: "eth_accounts"
      })).map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const chainId = await provider.request({
        method: "eth_chainId"
      });
      return Number(chainId);
    },
    async getProvider() {
      if (!walletProvider) {
        const preference = (() => {
          var _a;
          if (typeof parameters.preference === "string")
            return { options: parameters.preference };
          return {
            ...parameters.preference,
            options: ((_a = parameters.preference) == null ? void 0 : _a.options) ?? "all"
          };
        })();
        const { createCoinbaseWalletSDK } = await import("./dist-GETU5WHQ.js");
        const sdk = createCoinbaseWalletSDK({
          ...parameters,
          appChainIds: config.chains.map((x) => x.id),
          preference
        });
        walletProvider = sdk.getProvider();
      }
      return walletProvider;
    },
    async isAuthorized() {
      try {
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      var _a, _b, _c, _d;
      const chain = config.chains.find((chain2) => chain2.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const provider = await this.getProvider();
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: numberToHex(chain.id) }]
        });
        return chain;
      } catch (error) {
        if (error.code === 4902) {
          try {
            let blockExplorerUrls;
            if (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.blockExplorerUrls)
              blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
            else
              blockExplorerUrls = ((_a = chain.blockExplorers) == null ? void 0 : _a.default.url) ? [(_b = chain.blockExplorers) == null ? void 0 : _b.default.url] : [];
            let rpcUrls;
            if ((_c = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.rpcUrls) == null ? void 0 : _c.length)
              rpcUrls = addEthereumChainParameter.rpcUrls;
            else
              rpcUrls = [((_d = chain.rpcUrls.default) == null ? void 0 : _d.http[0]) ?? ""];
            const addEthereumChain = {
              blockExplorerUrls,
              chainId: numberToHex(chainId),
              chainName: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.chainName) ?? chain.name,
              iconUrls: addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.iconUrls,
              nativeCurrency: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.nativeCurrency) ?? chain.nativeCurrency,
              rpcUrls
            };
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [addEthereumChain]
            });
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        throw new SwitchChainError(error);
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect(_error) {
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
    }
  }));
}
function version3(parameters) {
  const reloadOnDisconnect = false;
  let sdk;
  let walletProvider;
  let accountsChanged;
  let chainChanged;
  let disconnect;
  return createConnector((config) => ({
    id: "coinbaseWalletSDK",
    name: "Coinbase Wallet",
    type: coinbaseWallet.type,
    async connect({ chainId } = {}) {
      try {
        const provider = await this.getProvider();
        const accounts = (await provider.request({
          method: "eth_requestAccounts"
        })).map((x) => getAddress(x));
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect) {
          disconnect = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect);
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = (chain == null ? void 0 : chain.id) ?? currentChainId;
        }
        return { accounts, chainId: currentChainId };
      } catch (error) {
        if (/(user closed modal|accounts received is empty|user denied account)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
      provider.disconnect();
      provider.close();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return (await provider.request({
        method: "eth_accounts"
      })).map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const chainId = await provider.request({
        method: "eth_chainId"
      });
      return Number(chainId);
    },
    async getProvider() {
      var _a;
      if (!walletProvider) {
        const CoinbaseWalletSDK = await (async () => {
          const { default: SDK } = await import("./dist-JBMBLEMF.js");
          if (typeof SDK !== "function" && typeof SDK.default === "function")
            return SDK.default;
          return SDK;
        })();
        sdk = new CoinbaseWalletSDK({ ...parameters, reloadOnDisconnect });
        const walletExtensionChainId = (_a = sdk.walletExtension) == null ? void 0 : _a.getChainId();
        const chain = config.chains.find((chain2) => parameters.chainId ? chain2.id === parameters.chainId : chain2.id === walletExtensionChainId) || config.chains[0];
        const chainId = parameters.chainId || (chain == null ? void 0 : chain.id);
        const jsonRpcUrl = parameters.jsonRpcUrl || (chain == null ? void 0 : chain.rpcUrls.default.http[0]);
        walletProvider = sdk.makeWeb3Provider(jsonRpcUrl, chainId);
      }
      return walletProvider;
    },
    async isAuthorized() {
      try {
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      var _a, _b, _c, _d;
      const chain = config.chains.find((chain2) => chain2.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const provider = await this.getProvider();
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: numberToHex(chain.id) }]
        });
        return chain;
      } catch (error) {
        if (error.code === 4902) {
          try {
            let blockExplorerUrls;
            if (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.blockExplorerUrls)
              blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
            else
              blockExplorerUrls = ((_a = chain.blockExplorers) == null ? void 0 : _a.default.url) ? [(_b = chain.blockExplorers) == null ? void 0 : _b.default.url] : [];
            let rpcUrls;
            if ((_c = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.rpcUrls) == null ? void 0 : _c.length)
              rpcUrls = addEthereumChainParameter.rpcUrls;
            else
              rpcUrls = [((_d = chain.rpcUrls.default) == null ? void 0 : _d.http[0]) ?? ""];
            const addEthereumChain = {
              blockExplorerUrls,
              chainId: numberToHex(chainId),
              chainName: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.chainName) ?? chain.name,
              iconUrls: addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.iconUrls,
              nativeCurrency: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.nativeCurrency) ?? chain.nativeCurrency,
              rpcUrls
            };
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [addEthereumChain]
            });
            return chain;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        throw new SwitchChainError(error);
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect(_error) {
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
    }
  }));
}

// node_modules/@wagmi/connectors/dist/esm/metaMask.js
metaMask.type = "metaMask";
function metaMask(parameters = {}) {
  let sdk;
  let provider;
  let providerPromise;
  let accountsChanged;
  let chainChanged;
  let connect;
  let displayUri;
  let disconnect;
  return createConnector((config) => ({
    id: "metaMaskSDK",
    name: "MetaMask",
    rdns: ["io.metamask", "io.metamask.mobile"],
    type: metaMask.type,
    async setup() {
      const provider2 = await this.getProvider();
      if (provider2 == null ? void 0 : provider2.on) {
        if (!connect) {
          connect = this.onConnect.bind(this);
          provider2.on("connect", connect);
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider2.on("accountsChanged", accountsChanged);
        }
      }
    },
    async connect({ chainId, isReconnecting } = {}) {
      const provider2 = await this.getProvider();
      if (!displayUri) {
        displayUri = this.onDisplayUri;
        provider2.on("display_uri", displayUri);
      }
      let accounts = [];
      if (isReconnecting)
        accounts = await this.getAccounts().catch(() => []);
      try {
        let signResponse;
        let connectWithResponse;
        if (!(accounts == null ? void 0 : accounts.length)) {
          if (parameters.connectAndSign || parameters.connectWith) {
            if (parameters.connectAndSign)
              signResponse = await sdk.connectAndSign({
                msg: parameters.connectAndSign
              });
            else if (parameters.connectWith)
              connectWithResponse = await sdk.connectWith({
                method: parameters.connectWith.method,
                params: parameters.connectWith.params
              });
            accounts = await this.getAccounts();
          } else {
            const requestedAccounts = await sdk.connect();
            accounts = requestedAccounts.map((x) => getAddress(x));
          }
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = (chain == null ? void 0 : chain.id) ?? currentChainId;
        }
        if (displayUri) {
          provider2.removeListener("display_uri", displayUri);
          displayUri = void 0;
        }
        if (signResponse)
          provider2.emit("connectAndSign", {
            accounts,
            chainId: currentChainId,
            signResponse
          });
        else if (connectWithResponse)
          provider2.emit("connectWith", {
            accounts,
            chainId: currentChainId,
            connectWithResponse
          });
        if (connect) {
          provider2.removeListener("connect", connect);
          connect = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider2.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider2.on("chainChanged", chainChanged);
        }
        if (!disconnect) {
          disconnect = this.onDisconnect.bind(this);
          provider2.on("disconnect", disconnect);
        }
        return { accounts, chainId: currentChainId };
      } catch (err) {
        const error = err;
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        if (error.code === ResourceUnavailableRpcError.code)
          throw new ResourceUnavailableRpcError(error);
        throw error;
      }
    },
    async disconnect() {
      const provider2 = await this.getProvider();
      if (chainChanged) {
        provider2.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider2.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
      if (!connect) {
        connect = this.onConnect.bind(this);
        provider2.on("connect", connect);
      }
      await sdk.terminate();
    },
    async getAccounts() {
      const provider2 = await this.getProvider();
      const accounts = await provider2.request({
        method: "eth_accounts"
      });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider2 = await this.getProvider();
      const chainId = provider2.getChainId() || await (provider2 == null ? void 0 : provider2.request({ method: "eth_chainId" }));
      return Number(chainId);
    },
    async getProvider() {
      async function initProvider() {
        var _a, _b, _c, _d, _e;
        const MetaMaskSDK = await (async () => {
          const { default: SDK } = await import("./metamask-sdk-O5HATW56.js");
          if (typeof SDK !== "function" && typeof SDK.default === "function")
            return SDK.default;
          return SDK;
        })();
        const readonlyRPCMap = {};
        for (const chain of config.chains)
          readonlyRPCMap[numberToHex(chain.id)] = (_a = extractRpcUrls({
            chain,
            transports: config.transports
          })) == null ? void 0 : _a[0];
        sdk = new MetaMaskSDK({
          _source: "wagmi",
          forceDeleteProvider: false,
          forceInjectProvider: false,
          injectProvider: false,
          // Workaround cast since MetaMask SDK does not support `'exactOptionalPropertyTypes'`
          ...parameters,
          readonlyRPCMap,
          dappMetadata: {
            ...parameters.dappMetadata,
            // Test if name and url are set AND not empty
            name: ((_b = parameters.dappMetadata) == null ? void 0 : _b.name) ? (_c = parameters.dappMetadata) == null ? void 0 : _c.name : "wagmi",
            url: ((_d = parameters.dappMetadata) == null ? void 0 : _d.url) ? (_e = parameters.dappMetadata) == null ? void 0 : _e.url : typeof window !== "undefined" ? window.location.origin : "https://wagmi.sh"
          },
          useDeeplink: parameters.useDeeplink ?? true
        });
        const result = await sdk.init();
        const provider2 = (() => {
          if (result == null ? void 0 : result.activeProvider)
            return result.activeProvider;
          return sdk.getProvider();
        })();
        if (!provider2)
          throw new ProviderNotFoundError();
        return provider2;
      }
      if (!provider) {
        if (!providerPromise)
          providerPromise = initProvider();
        provider = await providerPromise;
      }
      return provider;
    },
    async isAuthorized() {
      try {
        const timeout = 200;
        const accounts = await withRetry(() => withTimeout(() => this.getAccounts(), { timeout }), {
          delay: timeout + 1,
          retryCount: 3
        });
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      const provider2 = await this.getProvider();
      const chain = config.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const isDefaultChain = (() => {
        const metaMaskDefaultChains = [
          1,
          11155111,
          59144,
          59141
        ];
        return metaMaskDefaultChains.find((x) => x === chainId);
      })();
      try {
        if (!isDefaultChain)
          await provider2.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                blockExplorerUrls: (() => {
                  const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
                  if (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.blockExplorerUrls)
                    return addEthereumChainParameter.blockExplorerUrls;
                  if (blockExplorer)
                    return [
                      blockExplorer.url,
                      ...Object.values(blockExplorers).map((x) => x.url)
                    ];
                  return;
                })(),
                chainId: numberToHex(chainId),
                chainName: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.chainName) ?? chain.name,
                iconUrls: addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.iconUrls,
                nativeCurrency: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.nativeCurrency) ?? chain.nativeCurrency,
                rpcUrls: (() => {
                  var _a, _b;
                  if ((_a = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.rpcUrls) == null ? void 0 : _a.length)
                    return addEthereumChainParameter.rpcUrls;
                  return [((_b = chain.rpcUrls.default) == null ? void 0 : _b.http[0]) ?? ""];
                })()
              }
            ]
          });
        else
          await provider2.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: numberToHex(chainId) }]
          });
        await waitForChainIdToSync();
        await sendAndWaitForChangeEvent(chainId);
        async function waitForChainIdToSync() {
          await withRetry(async () => {
            const value = hexToNumber(
              // `'eth_chainId'` is cached by the MetaMask SDK side to avoid unnecessary deeplinks
              await provider2.request({ method: "eth_chainId" })
            );
            if (value !== chainId)
              throw new Error("User rejected switch after adding network.");
            return value;
          }, {
            delay: 50,
            retryCount: 20
            // android device encryption is slower
          });
        }
        async function sendAndWaitForChangeEvent(chainId2) {
          await new Promise((resolve) => {
            const listener = (data) => {
              if ("chainId" in data && data.chainId === chainId2) {
                config.emitter.off("change", listener);
                resolve();
              }
            };
            config.emitter.on("change", listener);
            config.emitter.emit("change", { chainId: chainId2 });
          });
        }
        return chain;
      } catch (err) {
        const error = err;
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        throw new SwitchChainError(error);
      }
    },
    async onAccountsChanged(accounts) {
      if (accounts.length === 0) {
        if (sdk.isExtensionActive())
          this.onDisconnect();
        else
          return;
      } else if (config.emitter.listenerCount("connect")) {
        const chainId = (await this.getChainId()).toString();
        this.onConnect({ chainId });
      } else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const accounts = await this.getAccounts();
      if (accounts.length === 0)
        return;
      const chainId = Number(connectInfo.chainId);
      config.emitter.emit("connect", { accounts, chainId });
      const provider2 = await this.getProvider();
      if (connect) {
        provider2.removeListener("connect", connect);
        connect = void 0;
      }
      if (!accountsChanged) {
        accountsChanged = this.onAccountsChanged.bind(this);
        provider2.on("accountsChanged", accountsChanged);
      }
      if (!chainChanged) {
        chainChanged = this.onChainChanged.bind(this);
        provider2.on("chainChanged", chainChanged);
      }
      if (!disconnect) {
        disconnect = this.onDisconnect.bind(this);
        provider2.on("disconnect", disconnect);
      }
    },
    async onDisconnect(error) {
      const provider2 = await this.getProvider();
      if (error && error.code === 1013) {
        if (provider2 && !!(await this.getAccounts()).length)
          return;
      }
      config.emitter.emit("disconnect");
      if (chainChanged) {
        provider2.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider2.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
      if (!connect) {
        connect = this.onConnect.bind(this);
        provider2.on("connect", connect);
      }
    },
    onDisplayUri(uri) {
      config.emitter.emit("message", { type: "display_uri", data: uri });
    }
  }));
}

// node_modules/@wagmi/connectors/dist/esm/safe.js
safe.type = "safe";
function safe(parameters = {}) {
  const { shimDisconnect = false } = parameters;
  let provider_;
  let disconnect;
  return createConnector((config) => ({
    id: "safe",
    name: "Safe",
    type: safe.type,
    async connect() {
      var _a;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const accounts = await this.getAccounts();
      const chainId = await this.getChainId();
      if (!disconnect) {
        disconnect = this.onDisconnect.bind(this);
        provider.on("disconnect", disconnect);
      }
      if (shimDisconnect)
        await ((_a = config.storage) == null ? void 0 : _a.removeItem("safe.disconnected"));
      return { accounts, chainId };
    },
    async disconnect() {
      var _a;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      if (disconnect) {
        provider.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
      if (shimDisconnect)
        await ((_a = config.storage) == null ? void 0 : _a.setItem("safe.disconnected", true));
    },
    async getAccounts() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      return (await provider.request({ method: "eth_accounts" })).map(getAddress);
    },
    async getProvider() {
      const isIframe = typeof window !== "undefined" && (window == null ? void 0 : window.parent) !== window;
      if (!isIframe)
        return;
      if (!provider_) {
        const { default: SDK } = await import("./esm-B5272BF5.js");
        const sdk = new SDK(parameters);
        const safe2 = await withTimeout(() => sdk.safe.getInfo(), {
          timeout: parameters.unstable_getInfoTimeout ?? 10
        });
        if (!safe2)
          throw new Error("Could not load Safe information");
        const SafeAppProvider = await (async () => {
          const Provider = await import("./dist-JV57XJ65.js");
          if (typeof Provider.SafeAppProvider !== "function" && typeof Provider.default.SafeAppProvider === "function")
            return Provider.default.SafeAppProvider;
          return Provider.SafeAppProvider;
        })();
        provider_ = new SafeAppProvider(safe2, sdk);
      }
      return provider_;
    },
    async getChainId() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      return Number(provider.chainId);
    },
    async isAuthorized() {
      var _a;
      try {
        const isDisconnected = shimDisconnect && // If shim exists in storage, connector is disconnected
        await ((_a = config.storage) == null ? void 0 : _a.getItem("safe.disconnected"));
        if (isDisconnected)
          return false;
        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    onAccountsChanged() {
    },
    onChainChanged() {
    },
    onDisconnect() {
      config.emitter.emit("disconnect");
    }
  }));
}

// node_modules/@wagmi/connectors/dist/esm/walletConnect.js
walletConnect.type = "walletConnect";
function walletConnect(parameters) {
  const isNewChainsStale = parameters.isNewChainsStale ?? true;
  let provider_;
  let providerPromise;
  const NAMESPACE = "eip155";
  let accountsChanged;
  let chainChanged;
  let connect;
  let displayUri;
  let sessionDelete;
  let disconnect;
  return createConnector((config) => ({
    id: "walletConnect",
    name: "WalletConnect",
    type: walletConnect.type,
    async setup() {
      const provider = await this.getProvider().catch(() => null);
      if (!provider)
        return;
      if (!connect) {
        connect = this.onConnect.bind(this);
        provider.on("connect", connect);
      }
      if (!sessionDelete) {
        sessionDelete = this.onSessionDelete.bind(this);
        provider.on("session_delete", sessionDelete);
      }
    },
    async connect({ chainId, ...rest } = {}) {
      var _a, _b;
      try {
        const provider = await this.getProvider();
        if (!provider)
          throw new ProviderNotFoundError();
        if (!displayUri) {
          displayUri = this.onDisplayUri;
          provider.on("display_uri", displayUri);
        }
        let targetChainId = chainId;
        if (!targetChainId) {
          const state = await ((_a = config.storage) == null ? void 0 : _a.getItem("state")) ?? {};
          const isChainSupported = config.chains.some((x) => x.id === state.chainId);
          if (isChainSupported)
            targetChainId = state.chainId;
          else
            targetChainId = (_b = config.chains[0]) == null ? void 0 : _b.id;
        }
        if (!targetChainId)
          throw new Error("No chains found on connector.");
        const isChainsStale = await this.isChainsStale();
        if (provider.session && isChainsStale)
          await provider.disconnect();
        if (!provider.session || isChainsStale) {
          const optionalChains = config.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
          await provider.connect({
            optionalChains: [targetChainId, ...optionalChains],
            ..."pairingTopic" in rest ? { pairingTopic: rest.pairingTopic } : {}
          });
          this.setRequestedChainsIds(config.chains.map((x) => x.id));
        }
        const accounts = (await provider.enable()).map((x) => getAddress(x));
        const currentChainId = await this.getChainId();
        if (displayUri) {
          provider.removeListener("display_uri", displayUri);
          displayUri = void 0;
        }
        if (connect) {
          provider.removeListener("connect", connect);
          connect = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect) {
          disconnect = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect);
        }
        if (!sessionDelete) {
          sessionDelete = this.onSessionDelete.bind(this);
          provider.on("session_delete", sessionDelete);
        }
        return { accounts, chainId: currentChainId };
      } catch (error) {
        if (/(user rejected|connection request reset)/i.test(error == null ? void 0 : error.message)) {
          throw new UserRejectedRequestError(error);
        }
        throw error;
      }
    },
    async disconnect() {
      const provider = await this.getProvider();
      try {
        await (provider == null ? void 0 : provider.disconnect());
      } catch (error) {
        if (!/No matching key/i.test(error.message))
          throw error;
      } finally {
        if (chainChanged) {
          provider == null ? void 0 : provider.removeListener("chainChanged", chainChanged);
          chainChanged = void 0;
        }
        if (disconnect) {
          provider == null ? void 0 : provider.removeListener("disconnect", disconnect);
          disconnect = void 0;
        }
        if (!connect) {
          connect = this.onConnect.bind(this);
          provider == null ? void 0 : provider.on("connect", connect);
        }
        if (accountsChanged) {
          provider == null ? void 0 : provider.removeListener("accountsChanged", accountsChanged);
          accountsChanged = void 0;
        }
        if (sessionDelete) {
          provider == null ? void 0 : provider.removeListener("session_delete", sessionDelete);
          sessionDelete = void 0;
        }
        this.setRequestedChainsIds([]);
      }
    },
    async getAccounts() {
      const provider = await this.getProvider();
      return provider.accounts.map((x) => getAddress(x));
    },
    async getProvider({ chainId } = {}) {
      var _a;
      async function initProvider() {
        const optionalChains = config.chains.map((x) => x.id);
        if (!optionalChains.length)
          return;
        const { EthereumProvider } = await import("./index.es-QC4H33EA.js");
        return await EthereumProvider.init({
          ...parameters,
          disableProviderPing: true,
          optionalChains,
          projectId: parameters.projectId,
          rpcMap: Object.fromEntries(config.chains.map((chain) => {
            const [url] = extractRpcUrls({
              chain,
              transports: config.transports
            });
            return [chain.id, url];
          })),
          showQrModal: parameters.showQrModal ?? true
        });
      }
      if (!provider_) {
        if (!providerPromise)
          providerPromise = initProvider();
        provider_ = await providerPromise;
        provider_ == null ? void 0 : provider_.events.setMaxListeners(Number.POSITIVE_INFINITY);
      }
      if (chainId)
        await ((_a = this.switchChain) == null ? void 0 : _a.call(this, { chainId }));
      return provider_;
    },
    async getChainId() {
      const provider = await this.getProvider();
      return provider.chainId;
    },
    async isAuthorized() {
      try {
        const [accounts, provider] = await Promise.all([
          this.getAccounts(),
          this.getProvider()
        ]);
        if (!accounts.length)
          return false;
        const isChainsStale = await this.isChainsStale();
        if (isChainsStale && provider.session) {
          await provider.disconnect().catch(() => {
          });
          return false;
        }
        return true;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      var _a, _b, _c;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const chain = config.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new SwitchChainError(new ChainNotConfiguredError());
      try {
        await Promise.all([
          new Promise((resolve) => {
            const listener = ({ chainId: currentChainId }) => {
              if (currentChainId === chainId) {
                config.emitter.off("change", listener);
                resolve();
              }
            };
            config.emitter.on("change", listener);
          }),
          provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: numberToHex(chainId) }]
          })
        ]);
        const requestedChains = await this.getRequestedChainsIds();
        this.setRequestedChainsIds([...requestedChains, chainId]);
        return chain;
      } catch (err) {
        const error = err;
        if (/(user rejected)/i.test(error.message))
          throw new UserRejectedRequestError(error);
        try {
          let blockExplorerUrls;
          if (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.blockExplorerUrls)
            blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
          else
            blockExplorerUrls = ((_a = chain.blockExplorers) == null ? void 0 : _a.default.url) ? [(_b = chain.blockExplorers) == null ? void 0 : _b.default.url] : [];
          let rpcUrls;
          if ((_c = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.rpcUrls) == null ? void 0 : _c.length)
            rpcUrls = addEthereumChainParameter.rpcUrls;
          else
            rpcUrls = [...chain.rpcUrls.default.http];
          const addEthereumChain = {
            blockExplorerUrls,
            chainId: numberToHex(chainId),
            chainName: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.chainName) ?? chain.name,
            iconUrls: addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.iconUrls,
            nativeCurrency: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.nativeCurrency) ?? chain.nativeCurrency,
            rpcUrls
          };
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [addEthereumChain]
          });
          const requestedChains = await this.getRequestedChainsIds();
          this.setRequestedChainsIds([...requestedChains, chainId]);
          return chain;
        } catch (error2) {
          throw new UserRejectedRequestError(error2);
        }
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const chainId = Number(connectInfo.chainId);
      const accounts = await this.getAccounts();
      config.emitter.emit("connect", { accounts, chainId });
    },
    async onDisconnect(_error) {
      this.setRequestedChainsIds([]);
      config.emitter.emit("disconnect");
      const provider = await this.getProvider();
      if (accountsChanged) {
        provider.removeListener("accountsChanged", accountsChanged);
        accountsChanged = void 0;
      }
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect) {
        provider.removeListener("disconnect", disconnect);
        disconnect = void 0;
      }
      if (sessionDelete) {
        provider.removeListener("session_delete", sessionDelete);
        sessionDelete = void 0;
      }
      if (!connect) {
        connect = this.onConnect.bind(this);
        provider.on("connect", connect);
      }
    },
    onDisplayUri(uri) {
      config.emitter.emit("message", { type: "display_uri", data: uri });
    },
    onSessionDelete() {
      this.onDisconnect();
    },
    getNamespaceChainsIds() {
      var _a, _b, _c;
      if (!provider_)
        return [];
      const chainIds = (_c = (_b = (_a = provider_.session) == null ? void 0 : _a.namespaces[NAMESPACE]) == null ? void 0 : _b.accounts) == null ? void 0 : _c.map((account) => Number.parseInt(account.split(":")[1] || ""));
      return chainIds ?? [];
    },
    async getRequestedChainsIds() {
      var _a;
      return await ((_a = config.storage) == null ? void 0 : _a.getItem(this.requestedChainsStorageKey)) ?? [];
    },
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     */
    async isChainsStale() {
      if (!isNewChainsStale)
        return false;
      const connectorChains = config.chains.map((x) => x.id);
      const namespaceChains = this.getNamespaceChainsIds();
      if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id)))
        return false;
      const requestedChains = await this.getRequestedChainsIds();
      return !connectorChains.every((id) => requestedChains.includes(id));
    },
    async setRequestedChainsIds(chains) {
      var _a;
      await ((_a = config.storage) == null ? void 0 : _a.setItem(this.requestedChainsStorageKey, chains));
    },
    get requestedChainsStorageKey() {
      return `${this.id}.requestedChains`;
    }
  }));
}

// node_modules/@web3modal/wagmi/dist/esm/src/connectors/AuthConnector.js
function authConnector(parameters) {
  return createConnector((config) => ({
    id: ConstantsUtil.AUTH_CONNECTOR_ID,
    name: "Web3Modal Auth",
    type: "w3mAuth",
    socials: parameters.socials,
    email: parameters.email,
    showWallets: parameters.showWallets,
    async connect(options = {}) {
      const provider = await this.getProvider();
      const { address, chainId } = await provider.connect({ chainId: options.chainId });
      await provider.getSmartAccountEnabledNetworks();
      return {
        accounts: [address],
        account: address,
        chainId,
        chain: {
          id: chainId,
          unsuported: false
        }
      };
    },
    async disconnect() {
      const provider = await this.getProvider();
      await provider.disconnect();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      const { address } = await provider.connect();
      config.emitter.emit("change", { accounts: [address] });
      return [address];
    },
    async getProvider() {
      if (!this.provider) {
        this.provider = new W3mFrameProvider(parameters.options.projectId);
      }
      return Promise.resolve(this.provider);
    },
    async getChainId() {
      const provider = await this.getProvider();
      const { chainId } = await provider.getChainId();
      return chainId;
    },
    async isAuthorized() {
      const provider = await this.getProvider();
      const { isConnected } = await provider.isConnected();
      return isConnected;
    },
    async switchChain({ chainId }) {
      try {
        const chain = config.chains.find((c) => c.id === chainId);
        if (!chain) {
          throw new SwitchChainError(new Error("chain not found on connector."));
        }
        const provider = await this.getProvider();
        await provider.switchNetwork(chainId);
        config.emitter.emit("change", { chainId: Number(chainId) });
        return chain;
      } catch (error) {
        if (error instanceof Error) {
          throw new SwitchChainError(error);
        }
        throw error;
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0) {
        this.onDisconnect();
      } else {
        config.emitter.emit("change", { accounts: accounts.map(getAddress) });
      }
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const chainId = Number(connectInfo.chainId);
      const accounts = await this.getAccounts();
      config.emitter.emit("connect", { accounts, chainId });
    },
    async onDisconnect(_error) {
      const provider = await this.getProvider();
      await provider.disconnect();
    }
  }));
}

// node_modules/@web3modal/wagmi/dist/esm/src/utils/defaultWagmiReactConfig.js
function defaultWagmiConfig({ projectId, chains, metadata, enableCoinbase, enableEmail, enableInjected, auth = {
  showWallets: true
}, enableWalletConnect, enableEIP6963, ...wagmiConfig }) {
  const connectors = [];
  const transportsArr = chains.map((chain) => [
    chain.id,
    getTransport({ chainId: chain.id, projectId })
  ]);
  const transports = Object.fromEntries(transportsArr);
  if (enableWalletConnect !== false) {
    connectors.push(walletConnect({ projectId, metadata, showQrModal: false }));
  }
  if (enableInjected !== false) {
    connectors.push(injected({ shimDisconnect: true }));
  }
  if (enableCoinbase !== false) {
    connectors.push(coinbaseWallet({
      version: "4",
      appName: (metadata == null ? void 0 : metadata.name) ?? "Unknown",
      appLogoUrl: (metadata == null ? void 0 : metadata.icons[0]) ?? "Unknown",
      preference: wagmiConfig.coinbasePreference || "all"
    }));
  }
  if (enableEmail || (auth == null ? void 0 : auth.socials)) {
    connectors.push(authConnector({
      chains: [...chains],
      options: { projectId },
      socials: auth == null ? void 0 : auth.socials,
      email: enableEmail,
      showWallets: auth.showWallets
    }));
  }
  return createConfig({
    chains,
    multiInjectedProviderDiscovery: enableEIP6963 !== false,
    transports,
    ...wagmiConfig,
    connectors
  });
}
export {
  defaultWagmiConfig
};
//# sourceMappingURL=@web3modal_wagmi_react_config.js.map
