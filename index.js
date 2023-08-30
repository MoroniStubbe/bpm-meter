var startTime = 0;
var time;
var beats = 0;

function bpm() {
    if (startTime == 0) {
        startTime = new Date().getTime();
    }
    else {
        beats++;
        time = new Date().getTime();
        document.getElementById('bpm').innerHTML = Math.round(60000 / ((time - startTime) / beats));
    }
}

function reset() {
    startTime = 0;
    beats = 0;
    document.getElementById('bpm').innerHTML = 0;
}

document.getElementById('button').addEventListener('click', bpm);
document.getElementById('reset').addEventListener('click', reset);