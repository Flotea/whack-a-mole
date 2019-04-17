window.onload= function(){
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("sound");
    var sound2 = document.getElementById("sound2");
    var grid = document.getElementById("dirt-box");
    var sidemole=document.getElementById("sideMole");
    var reset = document.getElementById("reset");
    var time = 60;

    var score = 0;
    for(let i=0;i<dirt.length;i++ ){
        dirt[i].addEventListener("click", function clickMole(){
        
        if (dirt[i].innerHTML){
            sound.play();
            dirt[i].innerHTML = "";
            score++;
            document.getElementById("score").innerHTML = "Score: " + score;
            document.getElementById("timer").innerHTML = "Time: " + time;
            }
        else{
                sound2.play();
                console.log ("nothing is there");
                score-=1;
                document.getElementById("score").innerHTML = "Score: " + score;
            }

            }
        )
    }

    sidemole.addEventListener("click", function wrong(){
        sound2.play();
        score -=600;
        document.getElementById("score").innerHTML = "Score: " + score;

    })  

    reset.addEventListener("click", function res(){
        score=0;
        document.getElementById("score").innerHTML = "";
        time=60;

    })

        


    setInterval(function setMole(){
        var mole = document.createElement("DIV");
        mole.setAttribute("id", "mole");
        var rando = Math.floor(Math.random() * Math.floor(dirt.length));

        if (dirt[rando].innerHTML == ""){
            dirt[rando].appendChild(mole);
            console.log("working");
        }
        else{
            console.log("there are too many moles!");
        }

    }, 3000);

    setInterval(function timer(){
        if (time==0){
            document.getElementById("timer").innerHTML = "Game Over. You have " + score + " points, loser.";
            
        }
        else {
            time -=1;
            console.log(time);
            document.getElementById("timer").innerHTML = "Time: " + time;

        }

    }, 1000)




}

