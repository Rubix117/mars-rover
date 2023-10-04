import Rover from "./Rover";
import RoverTextController from "./RoverTextController";

describe('Test the rover controller', () => {
        let roverController: RoverTextController;
        let testRover: Rover;
        beforeAll(() => {
            jest.spyOn(Rover.prototype, 'turnLeft');
            jest.spyOn(Rover.prototype, 'turnRight');
            jest.spyOn(Rover.prototype, 'moveForward');
            testRover = new Rover({maxWidth: 5, maxHeight: 5});
           roverController = new RoverTextController(testRover)
        });
        afterEach(() =>{
            jest.resetAllMocks();
        })
        it('Turn rover left should be called once', () => {
            roverController.moveRoverByInput('L');
            expect(testRover.turnLeft).toHaveBeenCalledTimes(1);
        });

        it('Turn rover right should be called once', () => {
            roverController.moveRoverByInput('R');
            expect(testRover.turnRight).toHaveBeenCalledTimes(1);
        });

        it('Move rover forward should be called once', () => {
            roverController.moveRoverByInput('F');
            expect(testRover.moveForward).toHaveBeenCalledTimes(1);
        });

        it('Test with user input FFRFLFLF and call each function right: 1, left:2, forward: 5', () => {
            roverController.moveRoverByInput('FFRFLFLF');
            expect(testRover.moveForward).toHaveBeenCalledTimes(5);
            expect(testRover.turnLeft).toHaveBeenCalledTimes(2);
            expect(testRover.turnRight).toHaveBeenCalledTimes(1);
        })
});