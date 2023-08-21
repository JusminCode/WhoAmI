import {it, expect} from 'vitest';
import Social from "../Social.jsx";

it("Social", () => {
    expect(<Social />).toMatchSnapshot('<Social />');
} );