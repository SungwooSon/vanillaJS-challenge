const body = document.querySelector("body");
const refreshBgBtn = document.querySelector("#refreshBg");

const IMG_CNT = 4;

function handleRefreshBg() {
  
    const background = new Image();
    const num = genRandom();
    console.log(num);
    background.src = `images/${num+1}.jpeg`;
    body.prepend(background);
    background.classList.add("background");
}

function genRandom() {
    return Math.floor(Math.random()* IMG_CNT);
}

function init() {
    //refreshBgBtn.addEventListener("click", handleRefreshBg);
    handleRefreshBg();
}

init();