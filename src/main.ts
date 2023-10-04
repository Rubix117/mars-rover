import Rover from "./Rover/Rover";
import * as process from "process";
import RoverTextController from "./Rover/RoverTextController";
import RoverVector from "./Rover/RoverVector";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Welcome to Mars Rover');
controlRover()
    .then(result => {
        console.log(result.x, result.y, result.cardinalDirection);
    })
    .finally(() =>{
        readline.close();
        process.exit(1)
    })


async function controlRover():Promise<RoverVector>{
    const plateauSize =  await asyncReadline('How big is the plateau?');
    const roverInstructions = await asyncReadline('What are the instructions for the rover?');
    let splitPlateauString = plateauSize.split('x');
    const marsRover = new Rover({maxWidth: parseInt(splitPlateauString[0]) , maxHeight: parseInt(splitPlateauString[1])});
    const roverController = new RoverTextController(marsRover);
    roverController.moveRoverByInput(roverInstructions);
    return marsRover.getRoverVector();
}

function asyncReadline(question: string): Promise<string> {
    return new Promise((resolve) => {
        readline.question(question, (userInput:string) => {
            resolve(userInput);
        });
    })
}