// function pressedBtn() {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("auth").innerText = token
// }

// const pressedBtn = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("auth").innerText = token
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.getElementById("auth").style.color = "#" + randomColor;
// }

//reference code
const pressedBtn = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("auth").innerText = token
    document.getElementById("auth").style.color = "#" + token;
}