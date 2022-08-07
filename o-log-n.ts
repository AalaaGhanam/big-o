function logN(n) {
    if (n=== 0) return 'Done';
    n = Math.floor(n/2);
    return logN(n);
}
console.log(logN(8));

/**
 * Binary Search O(log N)
 * @sorted array
 * @start index
 * @end index
 * @target value
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = arr.length - 1;
let target = 6;

function binarySearch(arr, start, end, target) {
    if (start > end) return false;
    let midIndex = Math.floor((start+ end) /2);
    if (arr[midIndex] === target) return midIndex;
    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target);
    else return binarySearch(arr, midIndex + 1, end, target);
}
console.log(binarySearch(arr, start, end, target));