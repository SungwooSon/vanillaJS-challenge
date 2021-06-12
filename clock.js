const colckDiv = document.querySelector("#clock");

function getDateTime() {
    const now = new Date();
    const year  = now.getFullYear();
    const month = now.getMonth()+1;
    const day   = now.getDate();
    const hour  = now.getHours();
    const min   = now.getMinutes();
    const sec   = now.getSeconds();

    const nowExp = `${year}년 ${month}월 ${day}일 ${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`;
    colckDiv.innerHTML = nowExp;
}

function init() {
    getDateTime();
    setInterval(getDateTime, 1000);
}

init();