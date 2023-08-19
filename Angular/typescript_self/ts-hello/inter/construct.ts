import {interfaces} from './interfaces';


class pradeep{

    constructor(public name?: string){
    }

    set Name(val:string){
        if(val.length > 10){
            throw new Error("cant be more");
        }

        this.name = val;
    }
}

let p = new Point();
console.log(p.draw());

let obj2 = new pradeep("linga");
console.log(obj2.name);