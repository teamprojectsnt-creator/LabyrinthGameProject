export {
    diffTime, timeStart
};

function timeStart(){
    const date = Date.now();
    return date;
};

function diffTime(timeStart){
    const date = Date.now();
    return Math.floor((date - start) / 1000);
};



