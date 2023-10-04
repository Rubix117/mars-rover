import RoverTextController from "./RoverTextController";
import RoverInterface from './RoverInterface';

describe('Test the rover controller', () => {
        let roverController: RoverTextController;
        let mockRover: RoverInterface = {
            turnLeft: jest.fn(() => {}),
            turnRight: jest.fn(() => {}),
            moveForward: jest.fn(() => {}),
            getRoverVector: jest.fn(() => {
                return {
                    x:1, y:1, cardinalDirection:'West'
                }
        })};
        beforeAll(() => {
            jest.spyOn(mockRover, 'turnLeft');
            jest.spyOn(mockRover, 'turnRight');
            jest.spyOn(mockRover, 'moveForward');
           roverController = new RoverTextController(mockRover)
        });
        afterEach(() =>{
            jest.resetAllMocks();
        })
        it('Turn rover left should be called once', () => {
            roverController.moveRover('L');
            expect(mockRover.turnLeft).toHaveBeenCalledTimes(1);
        });

        it('Turn rover right should be called once', () => {
            roverController.moveRover('R');
            expect(mockRover.turnRight).toHaveBeenCalledTimes(1);
        });

        it('Move rover forward should be called once', () => {
            roverController.moveRover('F');
            expect(mockRover.moveForward).toHaveBeenCalledTimes(1);
        });

        it('Test with user input FFRFLFLF and call each function right: 1, left:2, forward: 5', () => {
            roverController.moveRover('FFRFLFLF');
            expect(mockRover.moveForward).toHaveBeenCalledTimes(5);
            expect(mockRover.turnLeft).toHaveBeenCalledTimes(2);
            expect(mockRover.turnRight).toHaveBeenCalledTimes(1);
        })
});