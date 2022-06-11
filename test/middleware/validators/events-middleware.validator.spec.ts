import { NextFunction } from "express";
import { getMockRequest, getMockResponse } from "../../stubs/test.stubs";
import { eventsValidator } from '../../../src/middleware/validators/events-middleware.validator';

describe('eventValidator', () => {
  it('should pass', () => {
    const result = {} as any;
    const mockRequest = getMockRequest();
    const mockResponse = getMockResponse(result);
    const nextFunction: NextFunction = jest.fn();

    eventsValidator(mockRequest, mockResponse, nextFunction);

    expect(nextFunction).toBeCalledTimes(1);
  });
})