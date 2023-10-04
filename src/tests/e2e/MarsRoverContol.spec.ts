import RoverCommander from '../../MarsRover/RoverCommander';
import MarsRover from '../../MarsRover/MarsRover';
import Plateau from '../../MarsRover/Plateau';

describe('End to end tests for moving rovers', () =>{
    it('A 5x10 Platau moving FFFRFFRFFLF', () => {
        const testRover = new MarsRover(new Plateau(5, 10));
        const roverCommander = new RoverCommander(testRover);
        roverCommander.moveRover('FFFRFFRFFLF')

        expect(testRover.getRoverVector()).toEqual({x: 4, y: 2, cardinalDirection: 'East'});
    });

    it('A 1x55 Platau moving RFFFFFFFF', () => {
        const testRover = new MarsRover(new Plateau(1, 55));
        const roverCommander = new RoverCommander(testRover);
        roverCommander.moveRover('RFFFFFFFF')

        expect(testRover.getRoverVector()).toEqual({x: 9, y: 1, cardinalDirection: 'East'});
    });

})