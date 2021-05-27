function preload(){
    lipstick = loadImage("lips-removebg-preview.png");
    glasses = loadImage("glass3-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(400,350);
    canvas.position(485,235);
    video = createCapture(VIDEO);
    video.size(400,350);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',getPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video,0,0,400,350);
}
function glasses_filter(){
    console.log("inside glasses_filter")
    image(glasses,eyesX,eyesY,85,30);

}
function Add_Lipstick_filter(){
    image(lipstick,noseX,noseY,45,15);
}
function take_snapshot(){
    save("my_image.png");
}
var noseX;
var noseY;
var eyesX;
var eyesY;
function getPoses(results){
    console.log(results);
    noseX = results[0].pose.nose.x-20;
    noseY = results[0].pose.nose.y+18;
    console.log("nose x :"+noseX);
    console.log("nose y :"+noseY);
    eyesX = results[0].pose.leftEye.x-63;
    eyesY = results[0].pose.leftEye.y-11;
    console.log("eyes x :"+eyesX);
    console.log("eyes y :"+eyesY);
}
