import http, { RefinedResponse } from "k6/http";
import { sleep } from "k6";
import totp from "totp-generator";

import { CheckRequest } from "../../common/checks";
import { configs } from "../../common/configs";

export { options } from "./options";

export const mainFunc = "APIv2 | Login | Get token";

const totpToken = totp(`${configs.accountSecret}`, { digits: 6 });
console.log(totpToken);

export function Login(
  email: string,
  password: string,
  totp = totpToken,
): { response: RefinedResponse<any>; token: string } {
  const response = http.post(
    `${configs.apiV2Url}/authentication`,
    JSON.stringify({
      email,
      password,
      recaptcha: configs.reCaptchaKey,
      strategy: "local",
      totp,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  // console.log(`${mainFunc} | response:`, JSON.stringify(response));
  const body = JSON.parse(response.body as string);
  console.log(body);

  const token = `Bearer ${JSON.parse(response.body as string).accessToken}`;

  return { response, token };
}

export default function (): any {
  try {
    const response = Login(configs.accountEmail2fa, configs.accountPassword2fa);
    CheckRequest(mainFunc, response.response);
  } catch (error) {
    console.error(`${mainFunc} | error:`, JSON.stringify(error));
    return error;
  }

  sleep(2);
}
