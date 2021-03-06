// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cdVKiTYzMMSnNzWrPzZ5qn
// Component: hUCtg4szAho2YI
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: UKkIqo7bx-OmDK/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: cdVKiTYzMMSnNzWrPzZ5qn/projectcss
import sty from "./PlasmicBanner.module.css"; // plasmic-import: hUCtg4szAho2YI/css

export const PlasmicBanner__VariantProps = new Array();

export const PlasmicBanner__ArgProps = new Array("left", "image");

function PlasmicBanner__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(projectcss.all, sty.right)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"100%"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          src={
            args.image !== undefined
              ? args.image
              : {
                  src: "/plasmic/generic_landing_page/images/sunglassesMale.jpeg",
                  fullWidth: 2851,
                  fullHeight: 1900,
                  aspectRatio: undefined
                }
          }
        />

        {true ? (
          <div
            data-plasmic-name={"gradient"}
            data-plasmic-override={overrides.gradient}
            className={classNames(projectcss.all, sty.gradient)}
          />
        ) : null}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        hasGap={true}
        className={classNames(projectcss.all, sty.left)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i6Tk6
                )}
              >
                {"Sunglasses Collection"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zqKAc
                )}
              >
                {"Get 25% off on selected items"}
              </div>

              <Button>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eAvk
                  )}
                >
                  {"Go to collection ->"}
                </div>
              </Button>
            </React.Fragment>
          ),

          value: args.left
        })}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "right", "img", "gradient", "left"],
  right: ["right", "img", "gradient"],
  img: ["img"],
  gradient: ["gradient"],
  left: ["left"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBanner__ArgProps,
      internalVariantPropNames: PlasmicBanner__VariantProps
    });

    return PlasmicBanner__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBanner";
  } else {
    func.displayName = `PlasmicBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicBanner = Object.assign(
  // Top-level PlasmicBanner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    right: makeNodeComponent("right"),
    img: makeNodeComponent("img"),
    gradient: makeNodeComponent("gradient"),
    left: makeNodeComponent("left"),
    // Metadata about props expected for PlasmicBanner
    internalVariantProps: PlasmicBanner__VariantProps,
    internalArgProps: PlasmicBanner__ArgProps
  }
);

export default PlasmicBanner;
/* prettier-ignore-end */
