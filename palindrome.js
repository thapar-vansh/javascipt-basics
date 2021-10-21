//to check whether a palindrome
var given_No = 12321
var x = given_No
var y = 0

function palindrome() {
  while (given_No > 0) {
    p = given_No % 10
    q = parseInt(given_No / 10)
    y = y * 10 + p
  }
      if (y == x) {
           console.log('no is a palindrome')
  }   else {
           console.log('not a palindrome ')
  }
}
palindrome(12321)
