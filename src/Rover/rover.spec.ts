import { CardinalDirections } from "./CardinalDIrections";
import Rover from "./Rover";

describe('Rover test', () => {
    it('Initialise rover', () => {
        const testRover = new Rover();
        expect(testRover).toBeInstanceOf(Rover);
    });

    it('Initialise rover with starting position 1, 1, North', () => {
        const testRover = new Rover();
        const roverVector = testRover.getRoverVector();
        expect(roverVector).toEqual({x: 1, y: 1, cardinalDirection: CardinalDirections.NORTH})
    });
});