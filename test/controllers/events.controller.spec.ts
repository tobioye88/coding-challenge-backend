import { EventsController } from "../../src/controllers/events.controller";
import { EventsService } from "../../src/services/events.service";
import { getMockRequest, getMockResponse } from "../stubs/test.stubs";

describe("EventsController", () => {
  it("should return a message", async () => {
    const result = {} as any;
    const mockRequest = getMockRequest();
    const mockResponse = getMockResponse(result);
    jest
      .spyOn(EventsService, "getAllEvents")
      .mockResolvedValue({ events: [] as any, totalResult: 0 });
    await EventsController.getEvents(mockRequest, mockResponse);
    console.log(result);

    expect(result.data.message).toBe("success");
  });
});
