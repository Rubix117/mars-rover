import Rover from "./Rover";

class RoverController{

    private rover;
    constructor(rover: Rover) {
        this.rover = rover;
    }

    moveRoverByInput(userInput: string){
        let inputSteps = userInput.split('');
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

export default RoverController;