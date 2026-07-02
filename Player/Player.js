export class Player {
    constructor(name , id){
        this.name = name;
        this.id = id;
    }

    #startTime = undefined;
    #endTime = undefined;
    #stars = 0;
    #steps = [];
    #labirints = [];

    //get info
    //all set

    set setStartTime(time){ // milliSek
        if (!time) return
        this.#startTime = time;
    }

    set setEndTime(time){  // milliSek
        if (!time) return
        this.#endTime = time;
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
        this.#labirints = map;
    }

    get getInfo(){
        return new Map([
            ['startTime', this.#startTime],
            ['endTime', this.#endTime],
            ['stars', this.#stars],
            ['steps', this.#steps],
            ['labirints', this.#labirints]
        ])
    }
}


