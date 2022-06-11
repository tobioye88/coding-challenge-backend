import { NextFunction } from "express";
import { getMockRequest, getMockResponse } from "../../stubs/test.stubs";
import { eventsValidator } from "../../../src/middleware/validators/events-middleware.validator";

describe("eventValidator", () => {
  it("should pass", () => {
    const result = {} as any;
    const mockRequest = getMockRequest();
    const mockResponse = getMockResponse(result);
    const nextFunction: NextFunction = jest.fn();

    eventsValidator(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toBeCalledTimes(1);
  });

  it("should fail if bad from and until dates", () => {
    const result = {} as any;
    const mockRequest = getMockRequest(
      {},
      { form: "2021-21-32", until: "2021-21-32" }
    );
    const mockResponse = getMockResponse(result);
    const nextFunction: NextFunction = jest.fn();

    eventsValidator(mockRequest, mockResponse, nextFunction);

    expect(result.status).toBe(400);
    expect(result.data.message).toBe("Invalid Request");
  });

  it("should fail if page or string is not a number", () => {
    const result = {} as any;
    const mockRequest = getMockRequest({}, { page: "string", size: "string" });
    const mockResponse = getMockResponse(result);
    const nextFunction: NextFunction = jest.fn();

    eventsValidator(mockRequest, mockResponse, nextFunction);

    expect(result.status).toBe(400);
    expect(result.data.message).toBe("Invalid Request");
  });
});
