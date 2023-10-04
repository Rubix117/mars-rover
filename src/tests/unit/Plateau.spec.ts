import Plateau from '../../MarsRover/Plateau';

describe('Test Plateau', () => {
    it('Initialise and get values', () => {
        const testPlateau = new Plateau(10, 12);
        expect(testPlateau.width).toEqual(12);
        expect(testPlateau.height).toEqual(10);
    })
})