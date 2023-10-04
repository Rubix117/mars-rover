import RoverVector from './RoverVector';

export default interface RoverInterface{
    getRoverVector(): RoverVector
    turnLeft(): void;
    turnRight(): void;
    moveForward(): void;
}