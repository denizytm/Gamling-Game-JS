
var balance = document.getElementById("balance");

var box1 = document.getElementById("box1");

var box2 = document.getElementById("box2");

var box3 = document.getElementById("box3");

var deposited = document.getElementById("deposited");

var button = document.getElementById("button");

var time;

function stop() {
    window.clearInterval(time);
}

function control () {
    if(box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML){
        balance.innerHTML=parseInt(balance.innerHTML) + 5*deposited.value;
        alert("You won !");
    }
    else { 
        alert("You lost.");
    }    
}

function rollNumbers(a) {

    setTimeout("stop()",4000);

    box1.innerHTML=parseInt(Math.random()*10);
    box2.innerHTML=parseInt(Math.random()*10);
    box3.innerHTML=parseInt(Math.random()*10);

}

console.log(balance.innerHTML);

button.addEventListener("click",function rollNumbers() {

    console.log(deposited.value);

    if(deposited.value>0 && deposited.value<=parseInt(balance.innerHTML)) {
        balance.innerHTML=parseInt(balance.innerHTML) - deposited.value;
        time = window.setInterval("rollNumbers()",100);
        setTimeout("control()",5000);
    }
    else {
        alert("Please enter a valid value !!");
    }

    

})





