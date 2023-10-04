import RoverInterface from './RoverInterface';

class RoverTextController implements RoverControllerInterface{

    private rover;
    constructor(rover: RoverInterface) {
        this.rover = rover;
    }

    moveRover(controlInput: string){
        let inputSteps = controlInput.split('');
        inputSteps.forEach((step) => {
            switch (step) {
                case 'L':
                    this.rover.turnLeft();
                    break;
                case 'R':
                    this.rover.turnRight();
                    break;
                case 'F':
                    this.rover.moveForward();
                    break;
            }
        });
    }
}

export default RoverTextController;