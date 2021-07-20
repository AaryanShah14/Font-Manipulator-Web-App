leftwristx=0;
rightwristx=0;
difference=0;


function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,500);
canvas.position(560,120);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    console.log("leftWristx- " + leftwristx +" rightWristx- " + rightwristx);

    difference=leftwristx - rightwristx;
    console.log("difference- " + difference);
}
}