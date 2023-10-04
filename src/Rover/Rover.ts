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
        // As the cardinal direct can be zero if we mod -1 we get -1 so we have to add
        // the total number of directions first to prevent this: (0 - 1) % 4 = -1 not the 3 we expect.
        this.cardinalDirection = (((this.cardinalDirection - 1) + 4) % 4);
    }
}

export default Rover;