import thenFs from 'then-fs'

const promiseArr = [
  thenFs.readFile('./files/1.txt', 'utf-8'),
  thenFs.readFile('./files/2.txt', 'utf-8'),
  thenFs.readFile('./files/3.txt', 'utf-8')
]

Promise.all(promiseArr).then((result) => {
  console.log(result)
})
Promise.race(promiseArr).then((result) => {
  console.log('race 赛跑机制')
  console.log(result)
})
