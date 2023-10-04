import {RoverVector} from "./@types";
import {CardinalDirectionsEnum} from "./Enums/CardinalDirectionsEnum";
import Plateau from "./Plateau";
import RoverInterface from './RoverInterface';

class MarsRover implements RoverInterface{
    private xCord: number;
    private yCord: number;
    private cardinalDirection: number;
    private plateau: Plateau;
    constructor(plateau: Plateau) {
        this.xCord = 1;
        this.yCord = 1;
        this.cardinalDirection = 0;
        this.plateau = plateau;
    }

    getRoverVector(): RoverVector{
        return {x: this.xCord, y: this.yCord, cardinalDirection: CardinalDirectionsEnum[this.cardinalDirection]}
    }

    turnLeft(){
        // As the cardinal direct can be zero if we mod -1 we get -1, so we have to add
        // the total number of directions first to prevent this: (0 - 1) % 4 = -1 not the 3 we expect.
        this.cardinalDirection = (((this.cardinalDirection - 1) + 4) % 4);
    }

    turnRight() {
        this.cardinalDirection = (this.cardinalDirection + 1) % 4;
    }

    moveForward(){
        if(this.cardinalDirection === CardinalDirectionsEnum.North && this.yCord !== this.plateau.width){
            this.yCord++;
        }
        else if(this.cardinalDirection === CardinalDirectionsEnum.South && this.yCord !== 1){
            this.yCord--;
        }
        else if(this.cardinalDirection === CardinalDirectionsEnum.East && this.xCord !== this.plateau.height){
            this.xCord++;
        }
        else if(this.cardinalDirection === CardinalDirectionsEnum.West && this.xCord !== 1){
            this.xCord--;
        }
    }
}

export default MarsRover;