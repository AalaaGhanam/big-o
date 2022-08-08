function nLogN(n) {
    var y = n;
    while (n > 1) {
        n = Math.floor(n / 2);
        for (var i = 0; i < y; i++) {
            console.log(i);
        }
    }
}
nLogN(4);
/**
 * Merge Sort - Sort array in asc order using merge-sort O(n log n).
 * Divide the array recursively until the elements are two or less.
 * Sort two items iteratively (base case).
 * The final step is merging: we merge in taking one by one from each array such that they are in ascending order.
 * @example mergeSort([3, 2, 1]) => [1, 2, 3].
 * @param {array} array
 * @returns {array} sorted arrays in asc order.
 */

function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    var midIndex = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, midIndex);
    var rightArr = arr.slice(midIndex, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
/**
 * Merge two arrays in asc order.
 * @example
 *    merge([2,5,9], [1,6,7]) => [1, 2, 5, 6, 7, 9]
 * @param {array} leftArr
 * @param {array} rightArr
 * @returns {array} merged arrays in asc order.
 */
function merge(leftArr, rightArr) {
    var resultArr = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex = leftIndex + 1;
        }
        else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex = rightIndex + 1;
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}
console.log(mergeSort([9, 5, 1, 3]));

/**
 * Quick two arrays in asc order.
 * @example
 *    merge([2,5,9], [1,6,7]) => [1, 2, 5, 6, 7, 9]
 * @param {array} arr
 * @returns {array} sorted array in asc order.
 */
 function quickSort(arr) {
    console.log(arr)
    if (arr.length === 1) return arr;
    const pivot = arr[arr.length -1];
    var leftArr = [];
    var rightArr = [];
    for (let i=0; i < arr.length -1; i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)];
    }
}
console.log(quickSort([9, 54, 51, 37, 65, 14, 8, 6, ]));