"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Card: () => Card
});
module.exports = __toCommonJS(src_exports);

// src/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ children, className, appName }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      className,
      onClick: () => alert(`Hello from your ${appName} app!`),
      children
    }
  );
};

// src/card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Card({
  className,
  title,
  children,
  href
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "a",
    {
      className,
      href: `${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`,
      rel: "noopener noreferrer",
      target: "_blank",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h2", { children: [
          title,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "->" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card
});
//# sourceMappingURL=index.js.map