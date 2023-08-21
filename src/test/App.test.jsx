import {expect,it} from "vitest";
import App from "../App.jsx";

it("App", () => {
    expect(<App />).toMatchSnapshot('<App />');
} );