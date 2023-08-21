import { expect, it } from 'vitest'
import Overlay from "../Overlay.jsx";

it("Overlay", () => {
    expect(<Overlay />).toMatchSnapshot('<Overlay />');
} );