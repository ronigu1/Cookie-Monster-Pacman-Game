    import {welcomeToSignUp,welcomeToLogIn} from "./welcome.js"
    
    $(document).ready(function(){
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
        //$("#liSubmit").click(logInToSettings);

        //triggers in settings:
        $("#setReset").click(settingsReset);
        $("#setRandom").click(settingsRandom);
        //$("#setStart").click(settingsStart);

        //settings - set arrows:
        $("#UPKey").click(setUpKey);
        $("#DOWNKey").click(setDOWNKey);
        $("#RIGHTKey").click(setRIGHTKey);
        $("#LEFTKey").click(setLEFTKey);
    });