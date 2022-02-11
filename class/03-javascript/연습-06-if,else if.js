const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
if(profile.age >= 20) {
    console.log("성인입니다.")
} else if (8 <= profile.age && 19 >= profile.age) {   // && 19 >= profile.age 는 불필요 (코드 최적화)
    console.log("학생입니다.")
} else if (profile.age <= 7) {
        console.log("어린이입니다.")
}
// VM1013:4 학생입니다.