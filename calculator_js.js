
var displayScreen = document.getElementById('display-screen');

function display(num){
    displayScreen.value += num;
}

function calculate(){
    try{
        displayScreen.value = eval(displayScreen.value);
    }
    catch(err){
        alert("Invalid!");
    }
}

function Clear(){
   displayScreen.value = "";
}

function sign(s){
    displayScreen.value = '-'+displayScreen.value;
}

function dot(d){
     displayScreen.value = displayScreen.value+'.';
}