



export class Player {
    constructor(name , id){
        this.name = name;
        this.id = id;
    }

    #location = []
    #startTime = undefined;
    #timeToPath = undefined;
    #labirint = [];
    #history = [];

    //get info
    //all set

    set setLabirint(labirint){
        this.#labirint = structuredClone(labirint)
    }

    set setStartTime(time){ // milliSek
        if (!time) return
        this.#startTime = time;
    }

    set setTimeToPath(time){  // milliSek
        if (!time) return
        this.#timeToPath = time;
    }

    set setLocation(arr){
        try{
        if (arr.length === 2)
            this.#location = arr;
        } catch(err) {
            console.log('Error on setLocation, ', err);
        } 
    }

    get getStartTime(){
        return this.#startTime
    }

    set setHistory(arr){
        try{
        if (arr.length)
            this.#history.push(arr.flat(1));
        } catch(err) {
            console.log('Error on setHistory, ', err);
        } 
    }

    set addToHistory(arr){
    try{
        if (arr.length)
            if (this.#history.length > 4){
                this.#history.shift()
            }
            this.#history.push(arr);
        } catch(err) {
            console.log('Error on setHistory, ', err);
        } 
    }

    get getInfo(){
        return new Map([
            ['name', this.name],
            ['id', this.id],
            ['startTime', this.#startTime],
            ['timeToPath', this.#timeToPath],
            ['labirint', this.#labirint],
            ['location', this.#location],
            ['history', this.#history]
            ])
    }
}


