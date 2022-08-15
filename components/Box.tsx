import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import React from "react";

import { MediaQuery } from "../styles/media";

const MediaBox = styled.div<{
  w: string;
  widthSmall: string;
  widthMedium: string;
  widthLarge: string;
  widthXLarge: string;
  padding: string;
  margin: string;
  defaultHidden: boolean;
}>`
  position: relative;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ defaultHidden, w }) => (defaultHidden ? "auto" : w)};
  display: ${({ defaultHidden }) => (defaultHidden ? "hidden" : "block")};

  ${MediaQuery.minSmall} {
    width: ${({ widthSmall }) => widthSmall};
  }
  ${MediaQuery.minMedium} {
    width: ${({ widthMedium }) => widthMedium};
  }
  ${MediaQuery.minLarge} {
    width: ${({ widthLarge }) => widthLarge};
  }
  ${MediaQuery.minXLarge} {
    width: ${({ widthXLarge }) => widthXLarge};
  }
`;

const Box: FunctionComponent<{
  widths: number[];
  padding?: number;
  paddingX?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingY?: number;
  paddingTop?: number;
  paddingBottom?: number;
  margin?: number;
  marginX?: number;
  marginLeft?: number;
  marginRight?: number;
  marginY?: number;
  marginTop?: number;
  marginBottom?: number;
  className?: string; // recursive styled components
  defaultHidden?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}> = React.memo(function Box({
  widths,
  padding,
  paddingX,
  paddingLeft,
  paddingRight,
  paddingY,
  paddingTop,
  paddingBottom,
  margin,
  marginX,
  marginLeft,
  marginRight,
  marginY,
  marginTop,
  marginBottom,
  onClick,
  className,
  children,
}) {
  const [width, widthSmall, widthMedium, widthLarge, widthXLarge] = widths.map(
    (e) => `${e * 100}%`
  );

  const p = `${paddingTop || paddingY || padding || 0}rem ${
    paddingRight || paddingX || padding || 0
  }rem ${paddingBottom || paddingY || padding || 0}rem ${
    paddingLeft || paddingX || padding || 0
  }rem `;

  const m = `${marginTop || marginY || margin || 0}rem ${
    marginRight || marginX || margin || 0
  }rem ${marginBottom || marginY || margin || 0}rem ${
    marginLeft || marginX || margin || 0
  }rem `;

  return (
    <MediaBox
      w={width}
      widthSmall={widthSmall}
      widthMedium={widthMedium}
      widthLarge={widthLarge}
      widthXLarge={widthXLarge}
      padding={p}
      margin={m}
      onClick={onClick}
      className={className}
      defaultHidden={widths[0] <= 0}
    >
      {children}
    </MediaBox>
  );
});

export default Box;
