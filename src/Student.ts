import { Person } from "./Person.js";

export class Student extends Person{
    private _name: string;

    constructor(){
        super();
        this._name = "";
    }

    get name() {
        return this._name;
    }
    set name(x) {
        this._name = x;
    }
}