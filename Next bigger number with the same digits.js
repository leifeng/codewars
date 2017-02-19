//https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
/*
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
 */
function nextBigger(n) {
    if (n < 10) return -1
    var arr = n.toString().split('').reverse()
    if (arr[0] == arr[1]) return -1;
    if (arr[0] < arr[1]) return -1;
    var tmp = arr[0];
    arr[0] = arr[1];
    arr[1] = tmp;
    return +arr.reverse().join('')

}
console.log(nextBigger(132))