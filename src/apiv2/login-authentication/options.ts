import { Options } from "k6/options";
import { defaultK6Options } from "../../common/options";
import { mainFunc } from ".";

/**
 * This object contains the K6 test options for this test case. It imports
 * the default options object and adjust it according to this test case.
 */
export const options: Options = {
  ...defaultK6Options,
  stages: [{ duration: "1s", target: 1 }],
  ext: {
    loadimpact: {
      ...(defaultK6Options.ext &&
        defaultK6Options.ext.loadimpact && {
          ...defaultK6Options.ext.loadimpact,
        }),
      // This is going to be the name of our test case and it shows up on
      // K6 Cloud GUI
      name: mainFunc,
    },
  },
};
