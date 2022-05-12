function showWelcome(){
    if (document.getElementById("welcome_page").style.display == "none"){
        $(signup_page).hide();
        $(login_page).hide();
        $(setting_page).hide();
        $(game_page).hide();
        $(welcome_page).show();
        // stopGame();
    }

}
function showSignup(){
    if (document.getElementById("signup_page").style.display == "none"){
        $(welcome_page).hide();
        $(login_page).hide();
        $(setting_page).hide();
        $(game_page).hide();
        $(signup_page).show();
        // stopGame();
    }
}
function showLogin(){
    if (document.getElementById("login_page").style.display == "none"){
        $(welcome_page).hide();
        $(signup_page).hide();
        $(setting_page).hide();
        $(game_page).hide();
        $(login_page).show();
        // stopGame();
    }
}
function showSetting(){
    if (document.getElementById("setting_page").style.display == "none"){
        $(welcome_page).hide();
        $(signup_page).hide();
        $(login_page).hide();
        $(game_page).hide();
        $(setting_page).show();
        // stopGame();
    }
}
function showGame(){
    if (document.getElementById("game_page").style.display == "none"){
        $(welcome_page).hide();
        $(signup_page).hide();
        $(login_page).hide();
        $(setting_page).hide();
        $(game_page).show();
        // stopGame();
    }
}
