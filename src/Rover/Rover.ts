import RoverVector from "./RoverVector";
import {CardinalDirectionsEnum} from "./CardinalDirectionsEnum";
import {Plateau} from "./Plateau";

class Rover{
    private x: number;
    private y: number;
    private cardinalDirection: number;
    private plateau: Plateau;
    constructor(plateau: Plateau) {
        this.x = 1;
        this.y = 1;
        this.cardinalDirection = 0;
        this.plateau = plateau;
    }

    getRoverVector(): RoverVector{
        return {x: this.x, y: this.y, cardinalDirection: CardinalDirectionsEnum[this.cardinalDirection]}
    }

    turnLeft(){
        // As the cardinal direct can be zero if we mod -1 we get -1 so we have to add
        // the total number of directions first to prevent this: (0 - 1) % 4 = -1 not the 3 we expect.
        this.cardinalDirection = (((this.cardinalDirection - 1) + 4) % 4);
    }

    turnRight() {
        this.cardinalDirection = (this.cardinalDirection + 1) % 4;
    }

    moveForward(){
        if(this.cardinalDirection === CardinalDirectionsEnum.North && this.y !== this.plateau.height){
            this.y++;
        }
        else if(this.cardinalDirection === CardinalDirectionsEnum.South && this.y !== 1){
            this.y--;
        }
        else if(this.cardinalDirection === CardinalDirectionsEnum.East && this.x !== this.plateau.width){
            this.x++;
        }
        else if(this.cardinalDirection === CardinalDirectionsEnum.West && this.x !== 1){
            this.x--;
        }
    }
}

export default Rover;