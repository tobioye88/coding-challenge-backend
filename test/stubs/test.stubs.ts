import { Request, Response } from "express";

export function getMockRequest(body = {}, query = {}) {
  const mockRequest = {} as any;
  mockRequest.query = query;
  mockRequest.body = body;
  return mockRequest as Request;
}

export function getMockResponse(returnObject: any) {
  const mockResponse = {
    status: (status: number) => {
      returnObject.status = status;
      return {
        json: (data) => {
          returnObject.data = data;
        },
      };
    },
    json: (data) => {
      returnObject.data = data;
    },
  } as Response;
  return mockResponse;
}
