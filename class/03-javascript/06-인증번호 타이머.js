let isStarted = false;

function pressedBtn() {

    if(isStarted === false){

        isStarted = true;

        const num = String(Math.floor(Math.random() * 1000000)).padStart(6 , "0")
        document.getElementById("numBox").innerText = num

        let time = 10
        let timer = null         

        timer = setInterval(function(){

                if(time >= 0){
                    document.getElementById("countdown").innerText = time;
                    time = time - 1
                    console.log(time)
            }else{
                document.getElementById("done").disabled = true;
                isStarted = false;
                clearInterval(timer)
            }
        },1000)

    }else {
        alert("타이머가 이미 동작중입니다")
    }

}

