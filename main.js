var mouse_event = "empty";
var last_positionOfX;
var last_postionOfY;
canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


color="black";
width_of_line=1;
radius1 = 40;


canvas.addEventListener("mousedown",MymouseDown);

function MymouseDown(e){
   color=document.getElementById("color_input").value;
   width_of_line=document.getElementById("width_input").value;
   radius1=document.getElementById("radius_input").value;
   mouse_event="mouse_Down";
};


canvas.addEventListener("mousemove",MymouseMove);


function MymouseMove(e){
currentPositionOfMouseX=e.clientX-canvas.offsetLeft;
currentPositionOfMouseY=e.clientY-canvas.offsetTop;


if (mouse_event == "mouse_Down"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(currentPositionOfMouseX,currentPositionOfMouseY,radius1,0,2 * Math.PI);
    ctx.stroke();


    console.log ("Last Position Of X,Y Cordinates=")
    console.log("x = "+ last_positionOfX+ " y = "+ last_postionOfY);
    
    

    console.log ("Current Position Of X,Y Cordinates=")
    console.log("x = "+ currentPositionOfMouseX+" y = "+ currentPositionOfMouseY);
    
    
} 

    last_positionOfX=currentPositionOfMouseX;
    last_postionOfY=currentPositionOfMouseY;
}

canvas.addEventListener("mouseup",Mymouseup);

function Mymouseup(){
    mouse_event="mouseUp";

}

canvas.addEventListener("mouseLeave",Mymouseleave);

function Mymouseleave(){
    mouse_event="mouseLeave";

}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}



