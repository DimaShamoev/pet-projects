let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let milliseconds = document.querySelector(".milliseconds");

let hr, min, sec, milli;
let hourCnt = 0;
let minuteCnt = 0;
let secondCnt = 0;
let millisecondsCnt = 0;

let resetLoop = () => {
    hourCnt = 0;
    minuteCnt = 0;
    secondCnt = 0;
    millisecondsCnt = 0;

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milliseconds.innerHTML = "000";
};

let innerCircle = document.querySelector(".inner-circle")

let startLoop = () => {

    innerCircle.classList.add("pulse-anim")

    clearInterval(hr);
    clearInterval(min);
    clearInterval(sec);
    clearInterval(milli);
    
    hr = setInterval(() => {
        hourCnt++;
        hours.innerHTML = hourCnt < 10 ? `0${hourCnt}` : hourCnt;
    }, 3600000);

    min = setInterval(() => {
        minuteCnt++;
        minutes.innerHTML = minuteCnt < 10 ? `0${minuteCnt}` : minuteCnt;

        if (minuteCnt >= 60) {
            minuteCnt = 0;
        }
    }, 60000);

    sec = setInterval(() => {
        secondCnt++;
        seconds.innerHTML = secondCnt < 10 ? `0${secondCnt}` : secondCnt;

        if (secondCnt >= 60) {
            secondCnt = 0;
        }
    }, 1000);

    milli = setInterval(() => {
        millisecondsCnt++;
        if (millisecondsCnt < 10) {
            milliseconds.innerHTML = `00${millisecondsCnt}`;
        } else if (millisecondsCnt < 100) {
            milliseconds.innerHTML = `0${millisecondsCnt}`;
        } else {
            milliseconds.innerHTML = millisecondsCnt;
        }

        if (millisecondsCnt >= 100) {
            millisecondsCnt = 0;
        }
    }, 1);
};

let stopLoop = () => {
    innerCircle.classList.remove("pulse-anim")

    clearInterval(hr);
    clearInterval(min);
    clearInterval(sec);
    clearInterval(milli);
};

let lapList = document.querySelector(".lap-list");
let lapNum = 1;

let addLap = () => {
    let lapBLock = document.createElement("div");
    lapBLock.classList.add("list-block");
    lapBLock.innerHTML = 
                    `
                    <div class="lap-number">#${lapNum}</div>  
                    <div class="lap-timer">${hourCnt} : ${minuteCnt} : ${secondCnt} : ${millisecondsCnt}</div>  
                `
    lapList.appendChild(lapBLock)
    lapNum++
    
}

let clearLapList = () => {
    lapList.innerHTML = "";
    lapNum = 1;
}

document.querySelector(".start-btn").addEventListener("click", startLoop);
document.querySelector(".reset-btn").addEventListener("click", resetLoop);
document.querySelector(".stop-btn").addEventListener("click", stopLoop);
document.querySelector(".lap-btn").addEventListener("click", addLap)
document.querySelector(".clear-lap").addEventListener("click", clearLapList)