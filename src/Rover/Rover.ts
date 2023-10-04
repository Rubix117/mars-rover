import RoverVector from "./RoverVector";
import {CardinalDirections} from "./CardinalDIrections";

class Rover{
    private x: number;
    private y: number;
    private cardinalDirection: number;

    constructor() {
        this.x = 1;
        this.y = 1;
        this.cardinalDirection = 0;
    }

    getRoverVector(): RoverVector{
        return {x: this.x, y: this.y, cardinalDirection: CardinalDirections[this.cardinalDirection]}
    }

    turnLeft(){
        // As % is a remainder operator not a modulo operator we have to add the total first otherwise
        // you get can get a negative number being returned
        this.cardinalDirection = (((this.cardinalDirection - 1) + 4) % 4);
    }
}

export default Rover;