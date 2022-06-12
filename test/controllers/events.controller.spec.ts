import { EventsController } from "../../src/controllers/events.controller";
import { EventsService } from "../../src/services/events.service";
import {
  getMockEventsData,
  getMockRequest,
  getMockResponse,
} from "../stubs/test.stubs";

describe("EventsController", () => {
  it("should return a message for getEvents", async () => {
    const result = {} as any;
    const mockRequest = getMockRequest();
    const mockResponse = getMockResponse(result);
    jest
      .spyOn(EventsService, "getAllEvents")
      .mockResolvedValue({ events: [] as any, totalResult: 0 });
    await EventsController.getEvents(mockRequest, mockResponse);

    expect(result.data.message).toBe("success");
    expect(result.data.data).toEqual([]);
  });

  it("should return a message for getEvent", async () => {
    const result = {} as any;
    const mockRequest = getMockRequest({}, {}, { id: 3 });
    const mockResponse = getMockResponse(result);
    jest
      .spyOn(EventsService, "getEventById")
      .mockResolvedValue(getMockEventsData()[0]);
    await EventsController.getEvent(mockRequest, mockResponse);
    console.log(result);

    expect(result.data.message).toBe("success");
  });

  it("should return 400 if exception is thrown for getEvent", async () => {
    const result = {} as any;
    const mockRequest = getMockRequest({}, {}, { id: 3 });
    const mockResponse = getMockResponse(result);
    jest.spyOn(EventsService, "getEventById").mockImplementation(() => {
      throw new Error(`Event with the id of ${3} does not exist`);
    });
    await EventsController.getEvent(mockRequest, mockResponse);
    console.log(result);

    expect(result.status).toEqual(400);
  });
});
