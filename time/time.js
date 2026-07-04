export {
    diffTime, timeStart
};

function timeStart(){
    const date = Date.now();
    return date;
};

function diffTime(timeStart){
    const date = Date.now();
    return Math.floor((date - timeStart) / 1000);
};



