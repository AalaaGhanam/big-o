
function factorial(n) {
    for (let i=0; i < n; i++) {
        factorial(n-1);
    }
}

/**
 * getPermutations() computes all the different words that can be formed given a string.
 * @example getPermutations('abc')
 * @param {*} str 
 * @param {*} prefix 
 * @returns [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */
function getPermutations(str, prefix = '') {
    if (str.length <= 1) {
      return [prefix + str];
    }
  
    return Array.from(str).reduce((result, char, index) => {
      const reminder = str.slice(0, index) + str.slice(index+1);
      result = result.concat(getPermutations(reminder, prefix + char));
      return result;
    }, []);
}

console.log(getPermutations('abc'))