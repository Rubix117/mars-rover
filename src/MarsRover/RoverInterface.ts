import RoverVector from './@types';

export default interface RoverInterface{
    getRoverVector(): RoverVector
    turnLeft(): void;
    turnRight(): void;
    moveForward(): void;
}