var me= "empty";
var lx,ly;
var cpx,cpy;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="black";
width_of_line=3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    me="mousedown";
    console.log(me);
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    me="mouseleave";
    console.log(me);
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    me="mouseup";
    console.log(me);
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    
    cpx= e.clientX-canvas.offsetLeft;
    cpy= e.clientY-canvas.offsetTop;
    if(me=="mousedown"){
    ctx.beginPath();

    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last position of X = "+lx+"last position of Y = "+ly);
    ctx.moveTo(lx,ly);

    console.log("Current position of X = "+cpx+"Current position of Y = "+cpy);
    ctx.lineTo(cpx,cpy);

        ctx.stroke();
    }
    lx=cpx;
    ly=cpy;
}




