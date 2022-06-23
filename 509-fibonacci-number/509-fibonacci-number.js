/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    const arr = [0, 1]
    function fib(n){
    if(arr[n] !== undefined){
      return arr[n]
    }
    arr[n] = fib(n-2) + fib(n-1)
    return arr[n] 
  }
  return fib(n)
};