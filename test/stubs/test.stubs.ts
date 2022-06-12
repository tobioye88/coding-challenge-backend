import { Request, Response } from "express";
import { IEvent } from "../../src/interfaces/entities.interface";

export function getMockRequest(body = {}, query = {}, params = {}) {
  const mockRequest = {} as any;
  mockRequest.query = query;
  mockRequest.body = body;
  mockRequest.params = params;
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

export function getMockEventsData() {
  return [
    {
      id: 3,
      name: "Peter & Lucy wedding!",
      isOutside: true,
      date: "2022-06-16",
      location: "THA|BANGKOK",
      createdAt: "2022-06-12T12:41:06.000Z",
      organizer: {
        id: 1,
        name: "Harriet Smith",
        createdAt: "2022-06-12T12:41:06.000Z",
      },
      attendees: [],
    },
  ] as unknown as IEvent[];
}
