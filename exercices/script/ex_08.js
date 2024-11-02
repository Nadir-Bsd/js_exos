const div = document.getElementsByTagName("div")[2];
const canvas = div.querySelectorAll("canvas");
var color1 = getComputedStyle(canvas[0], "backgroundColor");
var color2 = getComputedStyle(canvas[1], "backgroundColor");
var color3 = getComputedStyle(canvas[2], "backgroundColor");
var color4 = getComputedStyle(canvas[3], "backgroundColor");

var noir = [];
var orange = [];
var olive = [];
var violet = [];

canvas.forEach(element =>  {

    var BG = getComputedStyle(element, "backgroundColor");
    var color = BG.backgroundColor;

    if (color === color1.backgroundColor){
        noir.push(color);
    }
    else if(color === color2.backgroundColor){
        orange.push(color);
    }
    else if(color === color3.backgroundColor){
        olive.push(color);
    }
    else {
        violet.push(color);
    }
}); 

var FinaleArray = [];
var array = []

FinaleArray.push(orange, violet, noir, olive);
array = FinaleArray.flat(1);

var num = 0;

array.forEach(element => {

    canvas[num].style.backgroundColor = element;
    num++;
});