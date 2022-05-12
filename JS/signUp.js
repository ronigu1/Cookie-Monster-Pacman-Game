function signUpToLogIn(){
    //validion
    var userName = $("#lbUsernameInput").val();
    var password = $("#lbPasswordInput").val();
    var rePassword = $("#lbPasswordConInput").val();
    var fullName = $("lbFullNameInput").val();
    var email = $("lbEmailInput").val();
    var bDate = $("lbDateOfBirthInput").val();
    //userName:

    if(password.search(/\d/) == -1){
        alert("Password must contains numbers" );
        return;
    }

    else if(password.search(/[a-zA-Z]/) == -1){
        alert("Password must contains letters" );  
        return;
    }

    else if(password!=rePassword){
        alert("Password must contains letters" );  
        return;
    }

    if(fullName.search(/\d/) == 1){
        alert("Password must contains letters and numbers" );
        return;
    }
    //add to list
    // $("#signup_page").hide();
    // $("#login_page").show();
}

function showHideFunc()
{
    var firstPass = $("#lbPasswordInput").attr("type");
    if (firstPass == "password")
    {
        $("#lbPasswordInput").attr("type","text");
    }
    else{
        $("#lbPasswordInput").attr("type","password");
    }
}

function showHideFuncConfirm()
{
    var confirmPass = $("#lbPasswordConInput").attr("type");
    if (confirmPass == "password")
    {
        $("#lbPasswordConInput").attr("type","text");
    }
    else{
        $("#lbPasswordConInput").attr("type","password");
    }
}

// showHideFuncConfirm(){
//     var x = $("#lbPasswordConInput").attr("type");
//     if (x == "password")
//     {
//         $("#lbPasswordConInput").attr("type","text");
//     }
//     else{
//         $("#lbPasswordInput").attr("type","password");
//     }
// }

function signUpReset(){
    //reset all cells
}

