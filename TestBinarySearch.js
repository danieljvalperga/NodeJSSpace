const search = require('./BinarySearch.js')

let arr1 = [1, 3, 5, 7, 8, 9]
let arr2 = [0, 1, 3, 5, 8, 9]
let arr3 = [1, 2, 3, 4, 5, 7, 8, 9]

console.log(search.search(arr1, 5, 0, arr1.length))
console.log(search.search(arr2, 6, 0, arr2.length))
console.log(search.search(arr3, 12, 0, arr3.length))
