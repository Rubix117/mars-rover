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
}

export default Rover;