const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]

    console.log(fruits[0].number + ' ' + fruits[0].title) 
// VM472:1 1 레드향
// undefined
console.log(fruits[1].number + ' ' + fruits[1].title) 
// VM614:1 2 샤인머스켓
// undefined
console.log(fruits[2].number + ' ' + fruits[2].title) 
// VM686:1 3 산청딸기
// undefined
console.log(fruits[3].number + ' ' + fruits[3].title) 
// VM892:1 4 한라봉
// undefined
console.log(fruits[4].number + ' ' + fruits[4].title) 
// VM960:1 5 사과
// undefined
console.log(fruits[5].number + ' ' + fruits[5].title) 
// VM1033:1 6 애플망고
// undefined
console.log(fruits[6].number + ' ' + fruits[6].title) 
// VM1105:1 7 딸기
// undefined
console.log(fruits[7].number + ' ' + fruits[7].title) 
// VM1186:1 8 천혜향
// undefined
console.log(fruits[8].number + ' ' + fruits[8].title) 
// VM1263:1 9 과일선물세트
// undefined
console.log(fruits[9].number + ' ' + fruits[9].title) 
// VM1343:1 10 귤
// undefined



for (let i =0; i <fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM2903:2 1레드향
// VM2903:2 2샤인머스켓
// VM2903:2 3산청딸기
// VM2903:2 4한라봉
// VM2903:2 5사과
// VM2903:2 6애플망고
// VM2903:2 7딸기
// VM2903:2 8천혜향
// VM2903:2 9과일선물세트
// VM2903:2 10귤