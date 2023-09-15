/**
 * This object contains global configs and variables
 */
export const configs = {
  projectId: process.env.K6_CLOUD_PROJECT_ID,
  apiV2Url: process.env.APIV2_URL,
  accountEmail2fa: process.env.ACCOUNT_2FA_EMAIL,
  accountPassword2fa: process.env.ACCOUNT_2FA_PASSWORD,
  accountSecret: process.env.ACCOUNT_2FA_SECRET,
  reCaptchaKey: process.env.RECAPTCHA_KEY,
};
