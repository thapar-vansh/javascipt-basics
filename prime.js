//to check whether a no. is prime
var given_No = 8
var i = 2
var isPrime = true
for (i; i < given_No; i++)
  if (given_No % i === 0) {
    isPrime = false
    break
  }
if (isPrime == true) {
  console.log('is prime')
} else {
  console.log('not a prime')
}
