import {expect,test} from "vitest";
import {App} from "./App";

test("App", () => {
    expect(App(1, 2)).toBe(3);
} );