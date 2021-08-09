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
    background('#c24400');
    textSize(difference);
    fill('#120001')
    text('Aaryan', 260, 250)
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference= floor(leftwristx = rightwristx)
   
}
}