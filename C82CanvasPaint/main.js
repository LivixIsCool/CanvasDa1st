var mouseEvent="empty";
var lastX;
var lastY;
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
line_Width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_Width=document.getElementById("Width").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_Width;
        console.log("Last Position Of X = "+lastX+"Last Position Of Y = "+lastY);
        ctx.moveTo(lastX,lastY);
        console.log("Current Position Of X = "+currentX+"Current Position Of Y = "+currentY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}