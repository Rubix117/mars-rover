import RoverInterface from './RoverInterface';
import RoverCommanderInterface from './RoverCommanderInterface';

class RoverCommander implements RoverCommanderInterface{

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

export default RoverCommander;