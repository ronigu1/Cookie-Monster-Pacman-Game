var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var canvasHeight;
var canvasWidth;
var canvasCell;
var canvasCellCenterOffset;
var canvasCellRadius;
var canvasSquare;
var sizeOfBoard
var halfOfBoard;
var higestScore;
var lostLife = false;
var firstTime;
var gameRuning;


//settingsDefine:
var settingsCanvas;
var gameTime; //get time
//monsters, moved to pacman
var monstersNum;
var choseenMonster; //get array of images
var monsterXYcenter;
var monsterLastMoveArr;
var monsterIntervalToWait;
var monsterIntervalCount;
//Static balls(5,15,25)
var ballsNum; 
var color5Ball; 
var colo15rBall;
var color25Ball;
var color25Remain;
var color15Remain;
var color5Remain;
//moved cookie (randomlly) (+50)
var bonusCoockieEaten;
var bonusCoockieRemain;
var bonusCoockieIntervalToWait;
var bonusCoockieIntervalCount;
var bonusCoockieI;
var bonusCoockieJ;
var bonusCoockieImage;

//static sruprise ( +/- 70 )
var surprideEaten;
var surprideRemain;
var surprideI;
var surprideJ;
var surprideImage;

//life cookie:
var cookieLifeEaten;
var cookieLifeRemain;
var cookieLifeI;
var cookieLifeJ;
var cookieLifeImage;

//buttons:
var leftButtonCode;
var upButtonCode;
var righttButtonCode;
var downButtonCode;

//setting in the side:
var userName;
//music&sound:
//pacman:
var pacmanLifes;
var lifesCancas;
var pacmanLives;


// $(document).ready(function() {
// 	context = canvas.getContext("2d");
// 	Start();
// });

function Start() {
	context = canvas.getContext("2d");

	// var imgMonster = document.createElement("img");
	// img1.src = ".\.\Media\Images\ElmoMonster.png";
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	//if the surprides is good ++, else :  --
	surpride = 0;
	monstersNum = 0;
	bonusCoockieEaten = 0;
	var ballRemain = 50;
	//לשנות!!!!!!!!!!!!!!!
	color5Remain = Math.floor(ballRemain * 0.1);
	color15Remain = Math.floor(ballRemain * 0.3);
	color25Remain = Math.floor(ballRemain * 0.6);
	var pacmanRemain = 1;
	start_time = new Date();
	sizeOfBoard = 10;
	halfOfBoard = 6;
	firstTime = true;
	higestScore = 50*bonusCoockieEaten + 70*surpride + 25*color5Remain + 15*color15Remain + 5*color25Remain -10*monstersNum;
	canvasHeight = canvas.height;
	canvasWidth = canvas.width;
	canvasCell = canvasWidth/sizeOfBoard;
	canvasCellCenterOffset = canvasSquare/2;
	canvasCellRadius = canvasSquare/2;
	let randomNum_0_to_7_1 = Math.floor(Math.random() * 8);
	let randomNum_0_to_7_2 = Math.floor(Math.random() * 8);
	let randomNum_0_to_7_3 = Math.floor(Math.random() * 8);
	bonusCoockieRemain = 5;
	surprideRemain = 5;
	cookieLifeRemain = 5;	
	for (var i = 0; i < sizeOfBoard; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < sizeOfBoard; j++) {
			//walls
			if (
				// RANDOM:
				(i == (randomNum_0_to_7_1) && j == 1 ) ||
				(i == (randomNum_0_to_7_2) && j == 1) ||
				(i == (randomNum_0_to_7_3) && j == 1) ||
				//spaciel wall
				(i == 2 && j == 4) ||
				(i == 3 && j == 4) ||
				(i == 4 && j == 4) ||
				(i == 5 && j == 4) ||
				(i == 6 && j == 4) ||
				(i == 7 && j == 4) ||
				(i == 8 && j == 4) ||
				(i == 9 && j == 4) ||
		
				(i == (sizeOfBoard-4) && j == halfOfBoard-2) ||
				(i == (sizeOfBoard-4) && j == halfOfBoard-1) ||
				(i == (sizeOfBoard-4) && j == halfOfBoard) ||
				(i == halfOfBoard-3 && j == halfOfBoard-2) ||
				(i == halfOfBoard-3 && j == halfOfBoard-1) ||
				(i == halfOfBoard-3 && j == halfOfBoard) ||
				//button wall
				(i == 1 && j == (sizeOfBoard-2)) ||
				(i == 2 && j == (sizeOfBoard-2)) ||
				(i == 3 && j == (sizeOfBoard-2)) ||
				(i == 4 && j == (sizeOfBoard-2)) ||
				(i == 5 && j == (sizeOfBoard-2)) ||
				// (i == 6 && j == (sizeOfBoard-2)) ||
				(i == 7 && j == (sizeOfBoard-2))
				// (i == 8 && j == (sizeOfBoard-2)) ||

			) {
				board[i][j] = "wall";//wall 4
			} 
			//monsters
			else if(
				(i == 0 && j == 0)||
				(i == 0 && j == (sizeOfBoard-1))||
				(i == (sizeOfBoard-1) && j == 0)||
				(i == (sizeOfBoard-1) && j == (sizeOfBoard-1)))
				{
				board[i][j] = "monsterHere";
			}

			else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * ballRemain) / cnt) {
					let randomNum_0_to_9 = Math.floor(Math.random() * 10);
					//maby 9
					if(randomNum_0_to_9 >= 8 && color25Remain > 0){
						ballRemain--;
						color25Remain--;
						// board[i][j] = 1;
						board[i][j] = "color25Ball";
					}
					//maby 7
					else if(randomNum_0_to_9 >= 6 && color15Remain > 0){
						ballRemain--;
						color15Remain--;
						board[i][j] = "colo15rBall";
						// board[i][j] = 1;
					}
					else if(randomNum_0_to_9 > 3 && color5Remain > 0){
						ballRemain--;
						color5Remain--;
						board[i][j] = "color5Ball";
						// board[i][j] = 1;
					}
					else if(randomNum_0_to_9 >= 3 && bonusCoockieRemain > 0){
						bonusCoockieRemain--;
						bonusCoockieI = i;
						bonusCoockieIJ = j;
						board[i][j] = "bonusCoockie";
					}			
					else if(randomNum_0_to_9 >= 2 && cookieLifeRemain > 0){
						cookieLifeRemain--;
						cookieLifeI = i;
						cookieLifeJ = j;
						board[i][j] = "cookieLife";
					}
					else if(randomNum_0_to_9 >= 1 && surprideRemain > 0){
						surprideRemain--;
						surprideI = i;
						surprideJ = j;
						board[i][j] = "surpride";
					}
					else{
						board[i][j] = "empty";

					}

				}
				else if (randomNum < (1.0 * (pacmanRemain + ballRemain)) / cnt) {
					shape.i = i;
					shape.j = j;
					shape.faceSide = "Right";
					shape.open = true;
					pacmanRemain--;
					board[i][j] = "pacman"; //pacman
				}else {
					board[i][j] = "empty"; //empty
				}
				cnt--;
			}
		}
	}
	while ( pacmanRemain > 0){
		var emptyCellForPacman = findRandomEmptyCell(board);
		shape.i = emptyCellForPacman[0];
		shape.j = emptyCellForPacman[1];
		shape.faceSide = "Right";
		shape.open = true;
		pacmanRemain--;
		board[shape.i][shape.j] = "pacman";
	}
	while (ballRemain > 0) {
		var emptyCellForBall = findRandomEmptyCell(board);
		if ( color25Ball > 0){
			board[emptyCellForBall[0]][emptyCellForBall[1]] = "color25Ball";
			color25Remain--;
		}	
		else if ( color15Ball > 0){
			board[emptyCellForBall[0]][emptyCellForBall[1]] = "color15Ball";
			color15Remain--;
		}	
		else if ( color5Ball > 0){
			board[emptyCellForBall[0]][emptyCellForBall[1]] = "color5Ball";
			color5Remain--;
		}
		ballRemain--;	
	}

	// while (ballRemain > 0) {
	// 	let emptyCell_for_pacman = findRandomEmptyCell(board);
	// 	shape.i = emptyCell_for_pacman[0];
	// 	shape.j = emptyCell_for_pacman[1];
	// 	shape.faceSide = "Right";
	// 	shape.open = true;
	// 	pacmanRemain--;
	// 	// board[shape.i][shape.j] = "pacman";
	// 	board[shape.i][shape.j] = 1;

	// }
	// function findRandomEmptyCell(board) {
	// 	var i = Math.floor(Math.random() * (sizeOfBoard-1) + 1);
	// 	var j = Math.floor(Math.random() * (sizeOfBoard-1) + 1);
	// 	while (board[i][j] != 0) {

	// 	// while (board[i][j] != "empty") {
	// 		i = Math.floor(Math.random() * (sizeOfBoard-1) + 1);
	// 		j = Math.floor(Math.random() * (sizeOfBoard-1) + 1);
	// 	}
	// 	return [i, j];
	// }



	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 250);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	//to add setting area
	//need to DrawBorders();
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == "pacman") {
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == "colo15rBall") {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == "wall") {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
			// else if ( board[i][j] == "monster"){
			// 	drawMonster(i, j);
			// }
		}
	}
}

// function drawMonster(i, j){

// }
function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != "wall") {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != "wall") {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != "wall") {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != "wall") {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == colo15rBall) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}
