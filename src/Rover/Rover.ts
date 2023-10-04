import RoverVector from "./RoverVector";
import {CardinalDirections} from "./CardinalDIrections";

class Rover{
    private x: number;
    private y: number;
    private cardinalDirection: CardinalDirections;

    constructor() {
        this.x = 1;
        this.y = 1;
        this.cardinalDirection = CardinalDirections.NORTH;
    }

    getRoverVector(): RoverVector{
        return {x: this.x, y: this.y, cardinalDirection: this.cardinalDirection}
    }
}

export default Rover;