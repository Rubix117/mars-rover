import Rover from "./Rover";

describe('Rover tests', () => {
    describe('Rover turning', () => {
        let testRover: Rover;
        beforeEach(() => {
            testRover = new Rover({x: 10, y: 10});
        })
        it('Initialise rover', () => {
            expect(testRover).toBeInstanceOf(Rover);
        });

        it('Initialise rover with starting position 1, 1, North', () => {
            const roverVector = testRover.getRoverVector();
            expect(roverVector).toEqual({x: 1, y: 1, cardinalDirection: "North"})
        });

        it('Turn Rover left once from starting vector and end facing west', () => {
            testRover.turnLeft();
            const roverVector = testRover.getRoverVector();
            expect(roverVector).toEqual({x: 1, y: 1, cardinalDirection: "West"})
        });

        it('Turn Rover left Twice from starting vector and end facing south', () => {
            testRover.turnLeft();
            testRover.turnLeft();
            const roverVector = testRover.getRoverVector();
            expect(roverVector).toEqual({x: 1, y: 1, cardinalDirection: "South"})
        });

        it('Turn Rover Right from starting vector and end facing East', () => {
            testRover.turnRight();
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 1, cardinalDirection: "East"})
        });

        it('Turn Rover Right twice from starting vector and end face South', () => {
            testRover.turnRight();
            testRover.turnRight();
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 1, cardinalDirection: "South"})
        });

        it('Turn LLRRLLRLRL from starting vector and end face South', () => {
            testRover.turnLeft();
            testRover.turnLeft();
            testRover.turnRight();
            testRover.turnRight();
            testRover.turnLeft();
            testRover.turnLeft();
            testRover.turnRight();
            testRover.turnLeft();
            testRover.turnRight();
            testRover.turnLeft();

            expect(testRover.getRoverVector()).toEqual({x: 1, y: 1, cardinalDirection: "South"})
        });
    });
});