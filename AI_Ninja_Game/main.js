function preload() {
	ninja_gameover = loadSound("gameover.wav");
	ninja_jump = loadSound("jump.wav");
	ninja_coin = loadSound("coin.wav");
	ninja_kick = loadSound("kick.wav");
	ninja_die = loadSound("ninjadie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	NinjaAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(ninja);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
   
function draw() {
	game();
}






