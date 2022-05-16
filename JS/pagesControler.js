var users_passwords = new Map([["k", "k"]]), emailList = [""];
var emailList = [""];

$(document).ready(function () {
    $("#signup_page").hide();
    $("#login_page").hide();
    $("#setting_page").hide();
    $("#game_page").hide();


    //triggers in welcome page:
    $("#WSignUpButton").click(welcomeToSignUp);
    $("#WLogInButton").click(welcomeToLogIn);

    //triggers in SignUp page:
    $("#suSubmit").click(signUpToLogIn);
    $("#suReset").click(signUpReset);
    $("#showHide").click(showHideFunc);
    $("#showHideConfirm").click(showHideFuncConfirm);

    //triggers in logIn page:
    $("#liSubmit").click(logInToSettings);
    $("#showHideLogin").click(showHideLoginFunc);

    //triggers in settings:
    $("#setStart").click(settingsStartGame);
    $("#setRandom").click(settingsRandom);

    //settings - set monsters:
    // $("#ElmoInput").click(selectMonster(this));
    // $("#BigBirdInput").click(selectMonster(this));
    // $("#IrvineInput").click(selectMonster(this));
    // $("#GroverInput").click(selectMonster(this));

    //settings - set arrows:
    $("#UPKey").keydown(function (event) { setUpKey(this, event); });
    $("#DOWNKey").keydown(function (event) { setDOWNKey(this, event); });
    $("#RIGHTKey").keydown(function (event) { setRIGHTKey(this, event); });
    $("#LEFTKey").keydown(function (event) { setLEFTKey(this, event); });
});