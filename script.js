window.addEventListener("load", sidenVises);


"use strict";
let score = 0;
let life = 3;


let showSettingsEffektSound = true;
let showSettingsMusic = true;



function sidenVises() {
    console.log("siden vises");
    showStart();

    document.querySelector("#settings_music").addEventListener("click", toggleMusic);
    document.querySelector("#settings_sound_effects").addEventListener("click", toggleSounds);

}

function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settings").addEventListener("click", showSettingOpen);

}

function hideStart() {
    console.log("hide start")
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#pop").play();

    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game");



    document.querySelector("#element1").classList.add("hide");
    setTimeout(element1Up, 1000);
    document.querySelector("#element2").classList.add("hide");
    setTimeout(element2Up, 1500);
    document.querySelector("#element3").classList.add("hide");
    setTimeout(element3Up, 1200);
    document.querySelector("#element4").classList.add("hide");
    setTimeout(element4Up, 1700);
    document.querySelector("#element5").classList.add("hide");
    setTimeout(element5Up, 1500);
    document.querySelector("#element6").classList.add("hide");
    setTimeout(element6Up, 1200);
    document.querySelector("#element7").classList.add("hide");
    setTimeout(element7Up, 1200);
    document.querySelector("#element8").classList.add("hide");
    setTimeout(element8Up, 1000);
    document.querySelector("#element9").classList.add("hide");
    setTimeout(element9Up, 1600);
    document.querySelector("#element1").addEventListener("click", clickElement);
    document.querySelector("#element2").addEventListener("click", clickElement);
    document.querySelector("#element3").addEventListener("click", clickElement);
    document.querySelector("#element4").addEventListener("click", clickElement);
    document.querySelector("#element5").addEventListener("click", clickElement);
    document.querySelector("#element6").addEventListener("click", clickElement);
    document.querySelector("#element7").addEventListener("click", clickElement);
    document.querySelector("#element8").addEventListener("click", clickElement);
    document.querySelector("#element9").addEventListener("click", clickElement);

    document.querySelector("#musik").play();
    document.querySelector("#musik").volume = 0.3;
    document.querySelector("#musik").loop = true;



    document.querySelector("#score1").innerHTML = ": " + score;
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");


    document.querySelector("#start").classList.add("hide");

}

function element1Up() {;
    document.querySelector("#element1").classList.remove("hide")
    document.querySelector("#element1").classList.add("up_down");
}

function element2Up() {;
    document.querySelector("#element2").classList.remove("hide")
    document.querySelector("#element2").classList.add("up_down");
}

function element3Up() {;
    document.querySelector("#element3").classList.remove("hide")
    document.querySelector("#element3").classList.add("up_down");
}

function element4Up() {;
    document.querySelector("#element4").classList.remove("hide")
    document.querySelector("#element4").classList.add("up_down");
}

function element5Up() {;
    document.querySelector("#element5").classList.remove("hide")
    document.querySelector("#element5").classList.add("up_down");
}

function element6Up() {;
    document.querySelector("#element6").classList.remove("hide")
    document.querySelector("#element6").classList.add("up_down");
}

function element7Up() {;
    document.querySelector("#element7").classList.remove("hide")
    document.querySelector("#element7").classList.add("up_down");
}

function element8Up() {;
    document.querySelector("#element8").classList.remove("hide")
    document.querySelector("#element8").classList.add("up_down");
}

function element9Up() {;
    document.querySelector("#element9").classList.remove("hide")
    document.querySelector("#element9").classList.add("up_down");
}




function clickElement() {
    console.log("click element");

    if (this.classList.contains("type1")) {
        document.querySelector("#meow").currentTime = 0;
        document.querySelector("#meow").play();
        console.log("type1");
        document.querySelector("#heart" + life).classList.add("hide");
        life--;


    } else if (this.classList.contains("type2")) {
        document.querySelector("#haps").currentTime = 0;
        document.querySelector("#haps").play();
        console.log("type2");
        score++;
        document.querySelector("#score1").innerHTML = score;

    }

    this.classList.add("dissappear");
    this.addEventListener("animationend", newElement);

    gameStatus();
}



function newElement() {
    console.log("new element");
    this.className = "";
    this.classList.add("type" + Math.floor((Math.random() * 3) + 1));
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
        gameOver();

    } else if (score == 10) {
        levelCompleted();
    }

}


function gameOver() {
    console.log("gameOver");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#game").classList.add("blur");

    document.querySelector("#score1").classList.add("hide");
    document.querySelector("#score2").innerHTML = " " + score;

    //document.querySelector("#game").addEventListener("animationend");
    //document.querySelector("#score1").addEventListener("animationend");

    document.querySelector("#retrytxt1").addEventListener("click", retry);

}

function levelCompleted() {
    console.log("levelCompleted");
    document.querySelector("#victory").classList.remove("hide");
    document.querySelector("#game").classList.add("blur");

    document.querySelector("#score1").classList.add("hide");
    document.querySelector("#score2").innerHTML = " " + score;

    // document.querySelector("#game").addEventListener("animationend");
    document.querySelector("#retrytxt2").addEventListener("click", retry);

}

function retry() {
    console.log("retry");

}









function showSettingOpen() {
    console.log("show settings_open");
    document.querySelector("#settings_open").classList.remove("hide");
    document.querySelector("#pop").currentTime = 0;
    document.querySelector("#pop").play();
    document.querySelector("#close").addEventListener("click", hideSettingOpen);


}

function hideSettingOpen() {
    console.log("hide settings_open");
    document.querySelector("#pop").currentTime = 0;
    document.querySelector("#pop").play();
    document.querySelector("#settings_open").classList.add("hide");


}





function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    showSettingsMusic = !showSettingsMusic;


    if (showSettingsMusic == false) {
        showSettingsEffektMusik = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);


        //        musicOn();

    } else {
        showSettingsEffektSound = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("oon");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);


        //        musicOff();
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsEffektSound);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");
    //    her slukkes for musik
    document.querySelector("#musik").muted = true;

    //document.querySelector("#musik").pause();
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");
    //    her tændes for musik
    document.querySelector("#musik").muted = false;

    //document.querySelector("#musik").play();
}







function toggleSounds() {
    console.log("toggleSounds");
    //showSettingsEffektSound = !showSettingsEffektSound;

    if (showSettingsEffektSound == false) {
        //her klikker vi lyden på
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);

    } else {
        //her klikker vi lyden af - slukker den
        showSettingsEffektSound = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff);
    }
}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#pop").muted = true;
    document.querySelector("#haps").muted = true;
    document.querySelector("#meow").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#pop").muted = true;
    document.querySelector("#haps").muted = true;
    document.querySelector("#meow").muted = true;
}









//husk at fjern animationen af switch
