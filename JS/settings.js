var gameTime;
var numOfBalls;

var upArrow;
var dowArrow;
var rightArrow;
var leftArrow;

var upArrowName;
var downArrowName;
var rightArrowName;
var leftArrowName;


var numberOfMonsters = 0;
var monsters = new Map([["ElmoMonster", false], ["BigBirdMonster", false], ["IrvineMonster", false], ["GroverMonster", false]])

function settingsStartGame() {
    gameTime = Number($("#TimeInput").val());
    numOfBalls = Number($("#BallsInput").val());
    upArrowName = $("#UPKey").val();
    downArrowName = $("#DOWNKey").val();
    rightArrowName = $("#RIGHTKey").val();
    leftArrowName = $("#LEFTKey").val();

    // chcek at list one monster was chosen
    if (numberOfMonsters == 0) {
        alert("Please select at list one pursuer.");
        return;
    }
    // check no button is the same
    if (upArrowName == downArrowName || upArrowName == rightArrowName || upArrowName == leftArrowName || downArrowName == rightArrowName || downArrowName == leftArrowName || leftArrowName == rightArrowName) {
        alert("Please select diffrent keys.");
        return;
    }

    $("setting_page").hide();
    $("game_page").show()
    Start();
}


function settingsRandom() {
    //set values
    //start game:
    // $("#setting_page").hide();
    // $("#game_page").show();
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
        numberOfMonsters = numberOfMonsters - 1;
    }
    else {
        monster.alt = "selected";
        monster.style.border = "1px solid grey";
        monsters.set(name, true);
        numberOfMonsters = numberOfMonsters + 1;
    }
    console.log("Map Values:" + Array.from(monsters.entries(), ([k, v]) => `\n  ${k}: ${v}`).join("") + "\n");
    console.log("Number Of Monsters:" + numberOfMonsters)
}


//set arrows
function setUpKey(key, event) {
    $(key).val(event.code);
    upArrow = event.which
    upArrowName = event.code;

}

function setDOWNKey(key, event) {
    $(key).val(event.code);
    dowArrow = event.which
    downArrowName = event.code;
}

function setRIGHTKey(key, event) {
    $(key).val(event.code);
    rightArrow = event.which
    rightArrowName = event.code;
}

function setLEFTKey(key, event) {
    $(key).val(event.code);
    leftArrow = event.which
    leftArrowName = event.code;
}
