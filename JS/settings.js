var loggedUser;
var upArrowName;
var downArrowName;
var rightArrowName;
var leftArrowName;

var monsters = new Map([["ElmoMonster", false], ["BigBirdMonster", false], ["IrvineMonster", false], ["GroverMonster", false]])
var monstersInputs = new Map([["ElmoMonster", "ElmoInput"], ["BigBirdMonster", "BigBirdInput"], ["IrvineMonster", "IrvineInput"], ["GroverMonster", "GroverInput"]])

function settingsStartGame() {

    gameTime = Number($("#TimeInput").val());
    ballsNum = Number($("#BallsInput").val());
    upArrowName = $("#UPKey").val();
    downArrowName = $("#DOWNKey").val();
    rightArrowName = $("#RIGHTKey").val();
    leftArrowName = $("#LEFTKey").val();
    color5Ball = $("#5Color").val();
    color15Ball = $("#15Color").val();
    color25Ball = $("#25Color").val();

    // chcek at list one monster was chosen
    if (monstersNum == 0) {
        alert("Please select at list one pursuer.");
        return;
    }
    // check no button is the same
    if (upArrowName == downArrowName || upArrowName == rightArrowName || upArrowName == leftArrowName || downArrowName == rightArrowName || downArrowName == leftArrowName || leftArrowName == rightArrowName) {
        alert("Please select diffrent keys.");
        return;
    }

    if (color5Ball == color15Ball || color5Ball == color25Ball || color15Ball == color25Ball) {
        alert("Please select diffrent colors.");
        return;
    }
    goToGame();
    return;
}


function settingsRandom() {
    //reset values
    resetSettings();
    // Set randome game time
    gameTime = Math.floor(Math.random() * (121)) + 60;
    $("#TimeInput").attr("value", gameTime);
    // Set randome number of balls
    ballsNum = Math.floor(Math.random() * (41)) + 50;
    $("#BallsInput").attr("value", ballsNum);

    // Set game keys
    upArrowName = $("#UPKey").val();
    downArrowName = $("#DOWNKey").val();
    rightArrowName = $("#RIGHTKey").val();
    leftArrowName = $("#LEFTKey").val();

    // Set Random Balls colors 
    color5Ball = getRandomColor();
    $("#5Color").attr("value", color5Ball);
    color15Ball = getRandomColor();
    while (color15Ball == color5Ball) {
        color15Ball = getRandomColor();
    }
    $("#15Color").attr("value", color15Ball);
    color25Ball = getRandomColor();
    while (color25Ball == color15Ball || color25Ball == color5Ball) {
        color25Ball = getRandomColor();

    }
    $("#25Color").attr("value", color25Ball);

    // Set Random Monsters number
    monstersNum = Math.floor(Math.random() * 4) + 1;
    var counter = monstersNum;
    for (let [key, value] of monsters.entries()) {
        if (counter > 0) {
            monsterTagId = monstersInputs.get(key);
            document.getElementById(monsterTagId).style.border = "1px solid grey";
            $("#" + monsterTagId).attr("alt", "attr");
            monsters.set(key, true);
            counter--;
        }
        else {
            break;
        }
    }
    leftButtonCode = 37;
    upButtonCode = 38;
    righttButtonCode = 39;
    downButtonCode = 40;
    //start game:
    setTimeout(goToGame, 150);
    return;
}

function goToGame() {
    var startGameCon = confirm("Would you like the start the game with the chosen settings?");
    if (startGameCon == true) {
        // Update Finale app setting 
        updateGamePage();
        // resetSettings();
        $("#setting_page").hide();
        $("#game_page").show();
        Start();
        return;
    }
    return;
}

function updateGamePage() {
    choseenMonster = monsters;
    lbUsername.value = loggedUser;
    lbHighScore.value = users_highScore.get(loggedUser);
    higestScore = users_highScore.get(loggedUser);
    $("#timeSet").attr("value", gameTime);
    $("#Balls").attr("value", ballsNum);
    document.getElementById('5BallColor').style.backgroundColor = color5Ball;
    document.getElementById('15BallColor').style.backgroundColor = color15Ball;
    document.getElementById('25BallColor').style.backgroundColor = color25Ball;
    $("#UPKeySet").attr("value", upArrowName);
    $("#DOWNKeySet").attr("value", downArrowName);
    $("#RIGHTKeySet").attr("value", rightArrowName);
    $("#LEFTKeySet").attr("value", leftArrowName);

    var counter = 1
    monstersImgs = new Map();
    for (let [key, value] of monsters.entries()) {
        if (value == true) {
            monstersImgs.set(counter, document.getElementById(key));
            var imgSrc = $("#" + key).attr("src");
            $("#monster" + counter).attr("src", imgSrc);
            document.getElementById("monster" + counter).style.display = "block";
            counter++;
        }
    }

}

function resetSettings() {
    // reset game setting input
    document.getElementById('setting_form').reset();
    $("#TimeInput").attr("value", 60);
    $("#BallsInput").attr("value", 50);
    // rest colors
    $("#5Color").attr("value", "#9D6538");
    $("#15Color").attr("value", "#CF9F6E");
    $("#25Color").attr("value", "#DABE99");
    // reset ElmoInput
    document.getElementById('ElmoInput').style.border = "none";
    $("#ElmoInput").attr("alt", "notSelected");
    // reset BigBirdInput
    document.getElementById('BigBirdInput').style.border = "none";
    $("#BigBirdInput").attr("alt", "notSelected");
    // reset IrvineInput
    document.getElementById('IrvineInput').style.border = "none";
    $("#IrvineInput").attr("alt", "notSelected");
    // reset GroverInput
    document.getElementById('GroverInput').style.border = "none";
    $("#GroverInput").attr("alt", "notSelected");
    // reset monsters counter to 0
    monstersNum = 0;
}


function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}


function selectMonster(monster) {
    var isSelected = monster.alt;
    var name = monster.src.split("/").pop().split(".")[0];
    console.log("Monster name:" + name);
    // var monsterSrc = 
    if (isSelected == "selected") {
        monster.alt = "notSelected";
        monster.style.border = "none";
        monsters.set(name, false);
        monstersNum = monstersNum - 1;
    }
    else {
        monster.alt = "selected";
        monster.style.border = "1px solid grey";
        monsters.set(name, true);
        monstersNum = monstersNum + 1;
    }
    console.log("Map Values:" + Array.from(monsters.entries(), ([k, v]) => `\n  ${k}: ${v}`).join("") + "\n");
    console.log("Number Of Monsters:" + monstersNum)
}


//set arrows
function setUpKey(key, event) {
    $(key).val(event.code);
    upButtonCode = event.which;
    upArrowName = event.code;
}

function setDOWNKey(key, event) {
    $(key).val(event.code);
    downButtonCode = event.which;
    downArrowName = event.code;
}

function setRIGHTKey(key, event) {
    $(key).val(event.code);
    righttButtonCode = event.which;
    rightArrowName = event.code;
}

function setLEFTKey(key, event) {
    $(key).val(event.code);
    leftButtonCode = event.which;
    leftArrowName = event.code;
}
