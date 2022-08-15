// typescript does not know about the sass variables
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  // @ts-ignore
  borderRadius,
} from "./borders.module.scss";

export const radius = borderRadius;
