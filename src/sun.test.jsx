import {expect,test} from "vitest";
import {sun} from "./sun.jsx";

test("sun", () => {
    expect(sun(1, 2)).toBe(3);
} );