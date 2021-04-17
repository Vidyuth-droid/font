leftwrist=0;
rightwrist=0;
difference=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500)
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function draw(){
background("#fed8b1");
textSize(difference);
fill("#ffd9f9");
text("Name", 50,400);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    leftwrist=results[0].pose.leftWrist.x;
    rightwrist=results[0].pose.rightWrist.x;
difference=leftwrist-rightwrist;
console.log("The difference between left wrist and right wrist is "+difference);
console.log("The left wrist is "+leftwrist+" The right wrist is "+rightwrist);
}
}