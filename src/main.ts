import InputHandler from './InputHandler/InputHandler';


console.log('Welcome to Mars Rover');
InputHandler.getUserInput()
    .then(result => {
        console.log(result.x, result.y, result.cardinalDirection);
    })



