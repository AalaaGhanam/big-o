
function factorial(n) {
    for (let i=0; i < n; i++) {
        factorial(n-1);
    }
}