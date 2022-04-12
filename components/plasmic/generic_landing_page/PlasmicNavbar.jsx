// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cdVKiTYzMMSnNzWrPzZ5qn
// Component: Dj91JQ7X980yJd
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: oeGkFmNQDqMjLO/component
import Button from "../../Button"; // plasmic-import: UKkIqo7bx-OmDK/component
import { useScreenVariants as useScreenVariantshyNfIPb8UuAl03 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HyNfIPb8uuAl03/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: cdVKiTYzMMSnNzWrPzZ5qn/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: Dj91JQ7X980yJd/css

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

function PlasmicNavbar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshyNfIPb8UuAl03()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___8MEhw)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pYCur)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__evzyQ)}
            color={"navLink"}
            link={"/services"}
          >
            {"Services"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__c2MIy)}
            color={"navLink"}
          >
            {"Features"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__xh5Pn)}
            color={"navLink"}
          >
            {"Company"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__bV8W3)}
            color={"navLink"}
          >
            {"Contact"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__mYcPb)}
            color={"navLink"}
          >
            {"Log in"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button___7BgdN)}
            color={"darkGray"}
          >
            {"Sign up"}
          </Button>
        </p.Stack>

        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__eFpm6)}>
            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.button__weror
              )}
            >
              {"Sign up"}
            </button>

            <Button className={classNames("__wab_instance", sty.button__k8Ds)}>
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavbar__ArgProps,
      internalVariantPropNames: PlasmicNavbar__VariantProps
    });

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */