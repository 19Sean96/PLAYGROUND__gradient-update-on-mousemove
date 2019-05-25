//Create div elements
var div = document.querySelector('div');

        
//Give div height
div.style.height = '500vh';
//Append Div to document
document.body.appendChild(div);

//Event Listener for  mouse movement
div.addEventListener('mousemove', function() {
    console.log(event);
    var x1 = event.clientX;
    var y1 = event.clientY;

    var x2 = event.screenX;
    var y2 = event.screenY

    if(x2 < 0) {
        x2 = x2  * (-1);
    }
    console.log(x2);
    div.style.background = "linear-gradient( to top right, rgb(" + x1/3 + "," + y1/3 + ",100), rgb(" + x2/5 + "," + y2/4 + ",200))";
})

