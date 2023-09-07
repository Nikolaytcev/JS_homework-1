const timer = document.getElementById('timer');
const timer2 = document.getElementById('timer2');
const time = timer.textContent;
const time2 = time;
let a = document.createElement("a");
let text = JSON.stringify({example: "пример"});
let file = new Blob([text], {type: 'application/json'});


function inToDim(digit) {
    return parseInt(digit / 10) != 0 ?`${digit}`:`0${digit}`
}

function diffTime(sec) {

    let hour = parseInt(sec / 3600);
    let minute = parseInt((sec - hour * 3600) / 60);
    let second = inToDim(sec - hour * 3600 - minute * 60);
    minute = inToDim(minute);
    hour = inToDim(hour)
    return `${hour}:${minute}:${second}`

};

function downloadFile() {
    a.href = URL.createObjectURL(file);
    a.download = "file.json";
    a.click();
}

setInterval(() => {
    if (Number(timer.textContent) === 0) {
        alert("Вы победили в конкурсе!");
        timer.textContent = time;
        downloadFile();
    };
    timer.textContent = Number(timer.textContent) - 1;
    timer2.textContent = diffTime(Number(timer.textContent));
},  1000);
    

