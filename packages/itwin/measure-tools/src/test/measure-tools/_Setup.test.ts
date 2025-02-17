/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import { NoRenderApp } from "@itwin/core-frontend";
import { MeasureTools } from "../../MeasureTools";

// Before all tests, initialize any global services
before(async () => {
  await NoRenderApp.startup();
  await MeasureTools.startup();
});
