noseX=0;
noseY=0;
function preload()
{
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 500);    
}

function take_snapshot(){
    save('myFilterImage.png')
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{

    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-13;
        noseY = results[0].pose.nose.y-13;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}