import process from 'process';
import Plateau from './Rover/Plateau';
import MarsRover from './Rover/MarsRover';
import RoverTextController from './Rover/RoverTextController';
import RoverVector from './Rover/RoverVector';


export default class InputHandler{

    static async getUserInput():Promise<RoverVector>{
        const plateauSize =  await this.asyncReadline('How big is the plateau?');
        const splitPlateauString = plateauSize.split('x');

        const marsPlateau = new Plateau(parseInt(splitPlateauString[0]),parseInt(splitPlateauString[1]));
        const marsRover = new MarsRover(marsPlateau);

        const roverInstructions = await this.asyncReadline('What are the instructions for the rover?');
        const roverController = new RoverTextController(marsRover);
        roverController.moveRover(roverInstructions);
        return marsRover.getRoverVector();
    }
    private static asyncReadline(question: string): Promise<string> {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return new Promise((resolve) => {
            readline.question(question, (userInput:string) => {
                resolve(userInput);
                readline.close();
            });
        })
    }
}

