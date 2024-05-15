import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  /* webpackChunkName: LazyLayout */ () =>
    import("../01-lazyload/layout/LazyLayout")
);
const Lazy2 = lazy(
  /* webpackChunkName: LazyPage2 */ () =>
    import("../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  /* webpackChunkName: LazyPage3 */ () =>
    import("../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "no Lazy",
  },
];
