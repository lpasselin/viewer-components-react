/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import React, { useCallback, useState } from "react";
import { useResizeObserver } from "@itwin/core-react";

export interface Size {
  width: number;
  height: number;
}

export interface AutoSizerProps {
  children: (size: Size) => React.ReactElement | null;
}

export const AutoSizer = (props: AutoSizerProps) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const handleResize = useCallback((w: number, h: number) => {
    setHeight(h);
    setWidth(w);
  }, []);
  const ref = useResizeObserver<HTMLDivElement>(handleResize);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {props.children({ width, height })}
    </div>
  );
};
