var XO = "x";
function chosex(){
    XO = "x";
    document.getElementById("chose-x").disabled = true;
    
    
    document.getElementById("chose-x").style.opacity = "0%";
    document.getElementById("chose-o").style.opacity = "0%";
    document.getElementById("chose-x").style.transition = "all 1s";
}
function choseo(){
    XO = "o";
    document.getElementById("chose-o").disabled = true;
    document.getElementById("chose-x").style.opacity = "0%";
    document.getElementById("chose-o").style.opacity = "0%";
    document.getElementById("chose-x").style.transition = "all 1s";
    
}
function neww(){
    location.reload();
}

function one(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function two(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function three(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function four(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function five(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function six(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function seven(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function eight(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}
function nine(){
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
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" && document.getElementById("3").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("4").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //vertical



    //horizantal
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("2").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //horizantal


    //two
    if(document.getElementById("1").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
        
    }
    else if(document.getElementById("1").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "x" && document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x"){
        document.getElementById("x-player").style.transition = "all 1s";
        document.getElementById("x-player").style.display = "block";
        document.getElementById("x-player").style.fontSize = "30px";
    }
    else if(document.getElementById("3").innerHTML == "o" && document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o"){
        document.getElementById("o-player").style.transition = "all 1s";
        document.getElementById("o-player").style.display = "block";
        document.getElementById("o-player").style.fontSize = "30px";
    }
    //two
}