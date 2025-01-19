import {
  ne,
  p,
  se,
  y
} from "./chunk-PBOYKPPK.js";
import "./chunk-RZICIBFF.js";
import "./chunk-GIZG7J7H.js";

// node_modules/@web3modal/wagmi/node_modules/@walletconnect/modal/dist/index.js
var d = class {
  constructor(e) {
    this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./dist-SUURX2WT.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), p.setIsUiLoaded(true);
    }
  }
};
export {
  d as WalletConnectModal
};
//# sourceMappingURL=dist-6L35JIAH.js.map
