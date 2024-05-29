function preload(){
}
function setup(){
    canvas=createCanvas(640, 480);
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    ellipse(80, 400, -24, -80);
    ellipse(80, 320, -24, -80);
    ellipse(80, 240, -24, -80);
    ellipse(80, 160, -24, -80);
    rect(170, 290, -80, -24);
    ellipse(170, 400, -24, -80);
    ellipse(170, 320, -24, -80);
    ellipse(170, 240, -24, -80);
    ellipse(170, 160, -24, -80);
    rect(300, 430, -30, -250);
    circle(285, 130, 50);
}

function take_snapshot(){
    save('student_name.png');
}


