import {
  require_jsx_runtime
} from "./chunk-HXHZZBCW.js";
import {
  require_react
} from "./chunk-CRFN57AP.js";
import {
  __toESM
} from "./chunk-GIZG7J7H.js";

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var DirectionContext = React.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

export {
  composeEventHandlers,
  useDirection
};
//# sourceMappingURL=chunk-JN5UDL7V.js.map
