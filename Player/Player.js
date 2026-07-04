import {labirint} from "../data/labirint.js"
export class Player {
    constructor(name , id){
        this.name = name;
        this.id = id;
    }

    #location = [12,11]
    #startTime = undefined;
    #timeToPath = undefined;
    #stars = 0;
    #steps = [];
    #labirint = labirint;

    //get info
    //all set

    set setStartTime(time){ // milliSek
        if (!time) return
        this.#startTime = time;
    }

    set setTimeToPath(time){  // milliSek
        if (!time) return
        this.#timeToPath = time;
    }

    set addStars(starsCount = 0){
        if (!starsCount) return
        this.#stars = starsCount;
    }

    set setSteps(stepsCount){
        if (!stepsCount) return
        this.#steps = stepsCount;
    }

    set setLabirint(map){
        if (!map.length) return
        this.#labirint = map;
    }

    set setLocation(arr){
        try {
        if (!arr.length) return;
        } catch {
            return;
        } 
        this.#location = arr;
    }

    get getStartTime(){
        return this.#startTime
    }

    get getInfo(){
        return new Map([
            ['startTime', this.#startTime],
            ['timeToPath', this.#timeToPath],
            ['stars', this.#stars],
            ['steps', this.#steps],
            ['labirint', this.#labirint],
            ['location', this.#location]
            ])
    }
}


