function checkValidation() {

    const email = document.getElementById("email").value
    const pw1 = document.getElementById("password1").value
    const pw2 = document.getElementById("password2").value

    if(email !== "" && pw1 !== "" && pw2 !== ""){
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").setAttribute("style","background-color : yellow")
    } else {
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").setAttribute("style","background-color : none")
    }
}