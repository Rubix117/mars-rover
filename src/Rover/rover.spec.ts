import { CardinalDirections } from "./CardinalDIrections";
import Rover from "./Rover";

describe('Rover test', () => {
    let testRover: Rover;
    beforeEach(() => {
        testRover = new Rover();
    })
    it('Initialise rover', () => {
        expect(testRover).toBeInstanceOf(Rover);
    });

    it('Initialise rover with starting position 1, 1, North', () => {
        const roverVector = testRover.getRoverVector();
        expect(roverVector).toEqual({x: 1, y: 1, cardinalDirection: "North"})
    });

    it('Turn Rover left once from starting vector', () => {
        testRover.turnLeft();
        const roverVector = testRover.getRoverVector();
        expect(roverVector).toEqual({x: 1, y: 1, cardinalDirection: "West"})
    });

    it('Turn Rover left Twice from starting vector', () => {
        testRover.turnLeft();
        testRover.turnLeft();
        const roverVector = testRover.getRoverVector();
        expect(roverVector).toEqual({x: 1, y: 1, cardinalDirection: "South"})
    });

});