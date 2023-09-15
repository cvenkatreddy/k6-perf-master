export interface IRequestPayload<I> {
  url: string;
  query: string;
  variables?: I;
  headers?: Record<string, unknown>;
  tags?: {
    name: string;
  };
}

export interface IResponsePayload<T> {
  data?: T;
  errors?: Object[];
  status: number;
}

/**
 * Given the response object of a GraphQL request, it extracts `data` prop
 * and returns. It will throw an error if `data` is undefined
 * @param operationName string
 * @param payload Generic
 */
export function extractResponseData<T>(
  operationName: string,
  payload: IResponsePayload<T>,
): T {
  try {
    const { data, status, errors } = payload;
    if (
      status !== 200 ||
      (errors !== undefined && errors?.length !== 0) ||
      data === undefined
    ) {
      throw new Error(
        `Error occurred while extracting data from ${operationName} response object`,
      );
    }
    return data;
  } catch (error) {
    throw error;
  }
}
