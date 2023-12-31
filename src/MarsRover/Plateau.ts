export default class Plateau {
    private _width: number;
    private _height: number;

    constructor(height: number, width: number) {
        this._width = width;
        this._height = height;
    }
    public get width(){
        return this._width;
    }

    public get height(){
        return this._height;
    }
}