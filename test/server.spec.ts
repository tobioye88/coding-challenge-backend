import { Server } from "http";
import {start} from "../src/server";

describe('start', () => {
    it('starts server and returns server instance', async () => {
        let app: Server = await start()
        expect(() => app.close()).not.toThrow()
    });
});
