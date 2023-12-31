import process from 'process';
import Plateau from './MarsRover/Plateau';
import MarsRover from './MarsRover/MarsRover';
import {RoverVector} from './MarsRover/@types';
import RoverCommander from './MarsRover/RoverCommander';


export default class InputHandler{

    static async moveRobotWithUserInput():Promise<RoverVector>{
        const plateauSize =  await this.asyncReadline('How big is the plateau?');
        const splitPlateauString = plateauSize.split('x');

        const marsPlateau = new Plateau(parseInt(splitPlateauString[0]),parseInt(splitPlateauString[1]));
        const marsRover = new MarsRover(marsPlateau);

        const roverInstructions = await this.asyncReadline('What are the instructions for the rover?');
        const roverController = new RoverCommander(marsRover);
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

