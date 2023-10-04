import Plateau from './Plateau';

describe('Test Plateau', () => {
    it('Initialise and get values', () => {
        const testPlateau = new Plateau(10, 12);
        expect(testPlateau.width).toEqual(10);
        expect(testPlateau.height).toEqual(12);
    })
})