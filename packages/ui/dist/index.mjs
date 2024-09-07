// src/button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ children, className, appName }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className,
      onClick: () => alert(`Hello from your ${appName} app!`),
      children
    }
  );
};

// src/card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Card({
  className,
  title,
  children,
  href
}) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      className,
      href: `${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`,
      rel: "noopener noreferrer",
      target: "_blank",
      children: [
        /* @__PURE__ */ jsxs("h2", { children: [
          title,
          " ",
          /* @__PURE__ */ jsx2("span", { children: "->" })
        ] }),
        /* @__PURE__ */ jsx2("p", { children })
      ]
    }
  );
}
export {
  Button,
  Card
};
//# sourceMappingURL=index.mjs.map