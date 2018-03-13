'use strict';
document.getElementById('click').onclick = click;

let x;

function click (){
    x =(Math.ceil(Math.random()*2) == 1);
    if (x){
        flip("Heads");
    }else{
        flip("Tails");
    }
};

function flip(coin){
    document.getElementById("result").innerHTML = coin;
};