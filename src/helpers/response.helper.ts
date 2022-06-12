import { IResponseHelper } from "../interfaces/response.interface";

export class ResponseHelper {
  static success<T>(data: T, message = "success"): IResponseHelper<T> {
    return { message, data };
  }

  static error<T>(data: T, message = "error"): IResponseHelper<T> {
    return { message, data };
  }

  static paged<T>(
    data: T,
    page: number,
    size: number,
    totalResults: number,
    message = "success"
  ): IResponseHelper<T> {
    return { message, data, page, size, totalResults };
  }
}
