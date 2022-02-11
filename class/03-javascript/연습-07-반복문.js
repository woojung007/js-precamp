let students = ["철수","영희","말포이","도비","자스민"]
// undefined
for(let i = 0; i < students.length; i++) {
    console.log(students[i]+ " 님 안녕하세요?")}
// VM693:2 Uncaught SyntaxError: missing ) after argument list
for(let i = 0; i < students.length; i++) {
    console.log(students[i]+ " 님 안녕하세요?")
}
// VM713:2 철수 님 안녕하세요?
// VM713:2 영희 님 안녕하세요?
// VM713:2 말포이 님 안녕하세요?
// VM713:2 도비 님 안녕하세요?
// VM713:2 자스민 님 안녕하세요?



let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
    ]

// VM1587:3 영희님은 성인입니다.
// undefined
for (let n =0; n < persons.length; n++){
    if(persons[n].age > 18) {
        console.log(persons[n].name + '님은 성인입니다.')
    }else {
    console.log(persons[n].name + '님은 미성년자입니다')
    }
}
// VM1826:5 철수님은 미성년자입니다
// VM1826:3 영희님은 성인입니다.
// VM1826:5 도우너님은 미성년자입니다
// VM1826:5 말포이님은 미성년자입니다
// VM1826:5 도비님은 미성년자입니다