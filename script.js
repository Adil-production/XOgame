document.getElementById("1").disabled = true;
document.getElementById("2").disabled = true;
document.getElementById("3").disabled = true;
document.getElementById("4").disabled = true;
document.getElementById("5").disabled = true;
document.getElementById("6").disabled = true;
document.getElementById("7").disabled = true;
document.getElementById("8").disabled = true;
document.getElementById("9").disabled = true;


var XO = "x";
function chosex(){
    document.getElementById("1").disabled = false;
document.getElementById("2").disabled = false;
document.getElementById("3").disabled = false;
document.getElementById("4").disabled = false;
document.getElementById("5").disabled = false;
document.getElementById("6").disabled = false;
document.getElementById("7").disabled = false;
document.getElementById("8").disabled = false;
document.getElementById("9").disabled = false;




    var audio = document.getElementById("audio");
        audio.play();
    XO = "x";
    document.getElementById("chose-x").disabled = true;
    
    
    document.getElementById("chose-x").style.opacity = "0%";
    document.getElementById("chose-o").style.opacity = "0%";
    document.getElementById("chose-x").style.transition = "all 1s";
}
function choseo(){
    document.getElementById("1").disabled = false;
document.getElementById("2").disabled = false;
document.getElementById("3").disabled = false;
document.getElementById("4").disabled = false;
document.getElementById("5").disabled = false;
document.getElementById("6").disabled = false;
document.getElementById("7").disabled = false;
document.getElementById("8").disabled = false;
document.getElementById("9").disabled = false;


    
    var audio = document.getElementById("audio");
        audio.play();
    XO = "o";
    document.getElementById("chose-o").disabled = true;
    document.getElementById("chose-x").style.opacity = "0%";
    document.getElementById("chose-o").style.opacity = "0%";
    document.getElementById("chose-x").style.transition = "all 1s";
    
}
function neww(){
    var audio = document.getElementById("audio");
        audio.play();
    location.reload();
}

function one(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("1").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("1").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function two(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("2").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("2").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function three(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("3").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("3").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function four(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("4").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("4").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function five(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("5").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("5").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function six(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("6").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("6").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function seven(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("7").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("7").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function eight(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("8").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("8").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function nine(){
    var audio = document.getElementById("audio");
        audio.play();
    document.getElementById("9").innerHTML = XO;
    if(XO == "x"){
        XO = "o"
    }
    else{
        XO = "x";
    }
    document.getElementById("9").disabled = true;
    //vertical
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" && document.getElementById("3").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        var win = document.getElementById("win");
        win.play();
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
