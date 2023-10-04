import InputHandler from './InputHandler';


console.log('Welcome to Mars Rover');
InputHandler.moveRobotWithUserInput()
    .then(result => {
        console.log(result.x, result.y, result.cardinalDirection);
    })



