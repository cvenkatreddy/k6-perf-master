import { Options } from "k6/options";
import { configs } from "./configs";

/**
 * This object contains the default options that a K6 test can export.
 * Read more about the available options here:
 * https://k6.io/docs/using-k6/options
 * The most important option is `projectID` which we need to pass as
 * `K6_CLOUD_PROJECT_ID` environment variable. Read more about it here:
 * https://k6.io/docs/cloud/creating-and-running-a-test/cloud-tests-from-the-cli#running-tests-under-a-different-project-than-your-default-one
 * Individual tests can import this base object, expand it, update it,
 * add test name to it and export it.
 */
export const defaultK6Options: Options = {
  stages: [{ duration: "0.01m", target: 1 }],
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<200"], // 95% of requests should be below 200ms
  },
  ext: {
    loadimpact: {
      projectID: configs.projectId,
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
};
