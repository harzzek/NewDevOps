import {makeObservable, observable} from "mobx";

class GiraffeStore
{
    constructor()
    {
        makeObservable(this, {
            giraffes: observable,
        })
    }
    giraffes = ["Marius","Melman","Man"];

    addGiraffe = (giraffe)=> {
        this.giraffes.push(giraffe);
    }
}

export const giraffeStore = new GiraffeStore();

