import { check } from "k6";

export const CheckRequest = (
  operationName: string,
  payload: any,
  login = 0,
) => {
  const { body, status, error } = payload;

  const statusKey = `${operationName} response status code is 200`;
  const dataKey = `${operationName} response has data`;
  // const errorKey = `${operationName} response has error`;

  check(status, {
    [statusKey]: (s: number): boolean => s === 200,
  });

  check<any | undefined>(body, {
    [dataKey]: (d): boolean => d !== undefined && d !== null,
  });

  // check<any | undefined>(error, {
  //   [errorKey]: (e): boolean => e === undefined || e === null || e === "",
  // });

  if (status !== 200) {
    console.error(
      `operation ${operationName} login: ${login} returned ${status}:`,
      JSON.stringify(body),
    );
  }
};
