// typescript does not know about the sass variables
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  // @ts-ignore
  backgroundLight as backgroundLightColor,
  // @ts-ignore
  backgroundDark as backgroundDarkColor,
  // @ts-ignore
  foregroundLight as foregroundLightColor,
  // @ts-ignore
  foregroundDark as foregroundDarkColor,
} from "./colors.module.scss";

export const backgroundLight = backgroundLightColor;
export const backgroundDark = backgroundDarkColor;

export const foregroundLight = foregroundLightColor;
export const foregroundDark = foregroundDarkColor;
