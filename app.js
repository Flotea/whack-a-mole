window.onload= function(){
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("sound");
    var sound2 = document.getElementById("sound2");
    var grid = document.getElementById("dirt-box");
    var scoreboard = document.getElementById("scoreboard");
    for(let i=0;i<dirt.length;i++ ){
        dirt[i].addEventListener("click", function clickMole(){
        var score = 0;
        if (dirt[i].innerHTML){
            sound.play();
            dirt[i].innerHTML = "";

            }
        else{
                sound2.play();
                console.log ("nothing is there");
            }
            }
        )
    }

    setInterval(function setMole(){
        var mole = document.createElement("DIV");
        mole.setAttribute("id", "mole");
        var rando = Math.floor(Math.random() * Math.floor(dirt.length));

        if (dirt[rando].innerHTML == ""){
            dirt[rando].appendChild(mole);
        }
        else{
            console.log("there are too many moles!");
        }

    }, 3000);




}

