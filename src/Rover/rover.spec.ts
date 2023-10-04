import Rover from "./Rover";

describe('Rover tests', () => {
    describe('Rover turning', () => {
        let testRover: Rover;
        beforeEach(() => {
            testRover = new Rover({maxWidth: 10, maxHeight: 10});
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

            expect(testRover.getRoverVector()).toEqual({x: 1, y: 1, cardinalDirection: "South"});
        });
    });

    describe('Moving the rover', () => {
        let testRover: Rover;
        beforeEach(() => {
            testRover = new Rover({maxWidth: 10, maxHeight: 10});
        })
        it('Move the rover forward from the starting location', () => {
            testRover.moveForward();
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 2, cardinalDirection: "North"});
        });

        it('Move the rover forward twice ending at 1,3 facing North', () => {
            testRover.moveForward();
            testRover.moveForward();
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 3, cardinalDirection: "North"});
        });

        it('Turn right and move forward facing east and at (2,1)', () => {
            testRover.turnRight();
            testRover.moveForward();
            expect(testRover.getRoverVector()).toEqual({x: 2, y: 1, cardinalDirection: "East"});
        });

        it('Turn to face south then move forward ending at 1,1 south', () => {
            testRover.turnRight();
            testRover.turnRight();
            testRover.moveForward();
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 1, cardinalDirection: "South"});
        });

        it('Move forward 10 times from start ending at 1,10 North', () => {
            for(let i = 0; i < 10; i++){
                testRover.moveForward();
            }
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 10, cardinalDirection: "North"});
        });

        it('Turn Right and Move forward 10 times from start ending at 10,1 East', () => {
            testRover.turnRight();
            for(let i = 0; i < 10; i++){
                testRover.moveForward();
            }
            expect(testRover.getRoverVector()).toEqual({x: 10, y: 1, cardinalDirection: "East"});
        });
        it('From start Turn left and Move forward 10 times from start ending at 1,1 West', () => {
            testRover.turnLeft();
            testRover.moveForward();
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 1, cardinalDirection: "West"});
        });

    });

    describe('Moving and turing tests', () => {
        it('On a 5x5 plateau move FFRFLFLF ending at 1,4,West', () => {
            const testRover = new Rover({maxWidth: 5, maxHeight: 5});
            testRover.moveForward();
            testRover.moveForward();
            testRover.turnRight();
            testRover.moveForward();
            testRover.turnLeft();
            testRover.moveForward();
            testRover.turnLeft();
            testRover.moveForward();
            expect(testRover.getRoverVector()).toEqual({x: 1, y: 4, cardinalDirection: 'West'})
        })
    })

});