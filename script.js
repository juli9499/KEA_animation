window.addEventListener("load", sidenVises);


"use strict";
let score = 0;
let life = 3;


function sidenVises() {
    console.log("siden vises");
    showStart();
}





function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#setting").addEventListener("click", showSettingOpen);

}

function hideStart() {
    console.log("hide start")
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");

    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game");
    document.querySelector("#element1").classList.add("up_down");
    document.querySelector("#element2").classList.add("up_down");
    document.querySelector("#element3").classList.add("up_down");
    document.querySelector("#element4").classList.add("up_down");
    document.querySelector("#element5").classList.add("up_down");
    document.querySelector("#element6").classList.add("up_down");
    document.querySelector("#element7").classList.add("up_down");
    document.querySelector("#element8").classList.add("up_down");
    document.querySelector("#element9").classList.add("up_down");
    document.querySelector("#element1").addEventListener("click", clickElement);
    document.querySelector("#element2").addEventListener("click", clickElement);
    document.querySelector("#element3").addEventListener("click", clickElement);
    document.querySelector("#element4").addEventListener("click", clickElement);
    document.querySelector("#element5").addEventListener("click", clickElement);
    document.querySelector("#element6").addEventListener("click", clickElement);
    document.querySelector("#element7").addEventListener("click", clickElement);
    document.querySelector("#element8").addEventListener("click", clickElement);
    document.querySelector("#element9").addEventListener("click", clickElement);



    document.querySelector("#score").innerHTML = ": " + score;
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");


    document.querySelector("#start").classList.add("hide");

}




function clickElement() {
    console.log("click element");

    if (this.classList.contains("type1")) {
        console.log("type1");
        document.querySelector("#heart" + life).classList.add("hide");
        life--;

    } else if (this.classList.contains("type2")) {
        console.log("type2");
        score++;
        document.querySelector("#score").innerHTML = score;
    }

    this.classList.add("dissappear");
    this.addEventListener("animationend", newElement);

    gameStatus();
}

function newElement() {
    console.log("new element");
    this.className = "";
    this.classList.add("type" + Math.floor((Math.random() * 2) + 1));
    this.classList.add("position" + Math.floor((Math.random() * 9) + 1));
    document.querySelector("#element1").classList.add("up_down");
    document.querySelector("#element2").classList.add("up_down");
    document.querySelector("#element3").classList.add("up_down");
    document.querySelector("#element4").classList.add("up_down");
    document.querySelector("#element5").classList.add("up_down");
    document.querySelector("#element6").classList.add("up_down");
    document.querySelector("#element7").classList.add("up_down");
    document.querySelector("#element8").classList.add("up_down");
    document.querySelector("#element9").classList.add("up_down");

}

function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
    } else if (score == 10) {

        document.querySelector("#victory").classList.remove("hide");
    }


}

function gameOver() {


}

function levelCompleted() {

}









function showSettingOpen() {
    console.log("show setting_open");
    document.querySelector("#setting_open").classList.remove("hide");
    document.querySelector("#close").addEventListener("click", hideSettingOpen);

    document.querySelector("#switch1").addEventListener("click", showSwitch1);
    document.querySelector("#switch2").addEventListener("click", showSwitch2);

}

function hideSettingOpen() {
    console.log("hide setting_open");
    document.querySelector("#setting_open").classList.add("hide");


}


function showSwitch1() {
    console.log("slide switch1");
    document.querySelector("#switch1").classList.add("slide");

}

function showSwitch2() {
    console.log("slide switch2");
    document.querySelector("#switch2").classList.add("slide");

}

//husk at fjern animationen af switch
