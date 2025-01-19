import {
  ConfigCtrl,
  ModalCtrl,
  OptionsCtrl,
  ThemeCtrl
} from "./chunk-CQOCDFVT.js";
import "./chunk-RZICIBFF.js";
import "./chunk-GIZG7J7H.js";

// node_modules/@walletconnect/modal/dist/index.js
var WalletConnectModal = class {
  constructor(config) {
    this.openModal = ModalCtrl.open;
    this.closeModal = ModalCtrl.close;
    this.subscribeModal = ModalCtrl.subscribe;
    this.setTheme = ThemeCtrl.setThemeConfig;
    ThemeCtrl.setThemeConfig(config);
    ConfigCtrl.setConfig(config);
    this.initUi();
  }
  async initUi() {
    if (typeof window !== "undefined") {
      await import("./dist-UXFIWS6H.js");
      const modal = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", modal);
      OptionsCtrl.setIsUiLoaded(true);
    }
  }
};
export {
  WalletConnectModal
};
//# sourceMappingURL=dist-FS46KNZB.js.map
