import {main} from "./index";

describe('my application', () => {
    it('runs', () => {
        expect(() => main()).not.toThrow()
    });
});
