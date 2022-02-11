Math.random()
// 0.7488796449498731 

Math.random() * 1000000
// 410976.90554217837

Math.floor( Math.random() * 1000000)
// 498205

String(Math.floor(Math.random() * 1000000))
// '100803'

String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '243731'

const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined

token
// '729416'