// 전화번호 입력창 포커스
function changeFocus1(){

    const phone1 = document.getElementById("phone1").value;

    if(phone1.length === 3 ) {
        document.getElementById("phone2").focus()
    }
}

function changeFocus2(){

    const phone2 = document.getElementById("phone2").value;

    if(phone2.length === 4 ) {
        document.getElementById("phone3").focus()
    }
}

function changeFocus3(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    if(phone1.length === 3 && phone2.length === 4 && phone3.length ===4){
        document.getElementById("submit").style = "background-color : #fff; color : #0068FF; cursor : pointer;"
        document.getElementById("submit").removeAttribute("disabled")
    }

}


//인증번호 전송버튼을 눌렀을 때
function getToken() {

    //6자리 랜덤번호 만들기
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6 , "0")
    document.getElementById("token").innerText = token

    //인증번호 전송버튼 누르면 인증번호 전송버튼 비활성화
    document.getElementById("submit").style = "background-color : #fff; cursor : default;"
    document.getElementById("submit").setAttribute("disabled","true")

    //인증번호 전송버튼 누르면 인증완료 버튼 활성화
    document.getElementById("done").style = "background-color : #0068FF; cursor : pointer; color : #fff;"
    document.getElementById("done").removeAttribute("disabled")
    getTokenTimer()

}
    //타이머 작동시키기
    //getTokenTimer() 기능 만들기 
    let interval;
    function getTokenTimer() {
        let time = 180
        interval = setInterval(() => {
            if(time >= 0){
                const min = Math.floor(time/60)
                const sec = String(time % 60).padStart(2, "0")

                document.getElementById("countdown").innerText = min + ":" + sec
                time = time - 1

            } else{
                document.getElementById("token").innerText = "000000"
                document.getElementById("submit").style = ""
                document.getElementById("submit").setAttribute("disabled","true")
                document.getElementById("countdown").innerText = "3:00"
                document.getElementById("done").style = ""
                document.getElementById("done").setAttribute = ("disabled","true")

                clearInterval(interval)
            }
        },1000)
    }


//인증완료 버튼 눌렀을 때  알림창 뜨게하기
//signup 버튼 활성화
//getTimerConfirm()
function getTokenTimerConfirm() {
    clearInterval(interval)
    document.getElementById("done").style = "background-color : #fff; cursor : default;"
    document.getElementById("done").setAttribute("disabled","true")
    document.getElementById("done").innerText = "인증완료"
    alert("인증이 완료되었습니다.")

    document.getElementById("signupBtn").style = "border: 1px solid #0068FF; color: #0068FF; cursor: pointer;"
    document.getElementById("signupBtn").removeAttribute("disabled")
}

//빈칸일 때 경고하기
function signup(){
    const email = document.getElementById("input__email").value
    const name = document.getElementById("input__name").value
    const psw1 = document.getElementById("input__psw1").value
    const psw2 = document.getElementById("input__psw2").value
    const location = document.getElementById("location").value
    const genderW = document.getElementById("gender__w").checked
    const genderM = document.getElementById("gender__m").checked
    
    let isValid = true
    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    }else {
        document.getElementById("error__email").innerText = ""
    }

    if(name === "") {
        document.getElementById("error__name").innerText = "이름이 올바르지 않습니다."
        isValid = false
    }else {
        document.getElementById("error__name").innerText = ""
    }

    if(psw1 === "") {
        document.getElementById("error__psw1").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    }else {
        document.getElementById("error__psw1").innerText = ""
    }

    if(psw2 === "") {
        document.getElementById("error__psw2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    }else {
        document.getElementById("error__psw2").innerText = ""
    }

    if(psw2 !== psw1) {
        document.getElementById("error__psw2").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__psw1").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    }

    if(location !== "서울" && location !== "경기" && location !== "인천") {
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }


    if(genderW === false && genderM ===false) {
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요"
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(isValid === true){
        alert("코드캠프 가입을 축하합니다.")
    }

}
