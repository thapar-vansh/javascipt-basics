//to print factors of a no
var givenNo = 6
var i = 1
const arr = new Array()
for (i; i <= givenNo; i++)
  if (givenNo % i === 0) {
    arr.push(i)
  }
console.log('The factors of the numbers. are ', arr)
