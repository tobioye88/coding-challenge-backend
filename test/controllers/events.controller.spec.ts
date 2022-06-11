import { EventsController } from '../../src/controllers/events.controller';
import { getMockRequest, getMockResponse } from '../stubs/test.stubs';

describe('EventsController', () => {
  it('should return a message', async () => {
    const result = {} as any;
    const mockRequest = getMockRequest();
    const mockResponse = getMockResponse(result);
    await EventsController.getEvents(mockRequest, mockResponse);

    expect(result.data.message).toBe('hello world');
  });
});
