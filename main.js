canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var mouse_x, mouse_y;
color = "red";
width_of_the_line = 2;
radius = 50;
canvas.addEventListener("mousedown", my_MouseDown);
function my_MouseDown (e) {
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_MouseMove);
function my_MouseMove (e) {
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.arc(mouse_x, mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_MouseUp);
function my_MouseUp (e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_MouseLeave);
function my_MouseLeave (e) {
    mouseEvent = "mouseleave";
}
function clearArea () {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}