//This is the function to find the factorial of a single given number;

function factorial(n) {
    let sum = n;
    if(n <= 1) {
        return sum;
    } else {
        return sum = n * factorial(n - 1);
    }
}
//This is a funtion to find the combination of two numbers:
function combinations(n, r) {
    if (n > r) {
        return (factorial(n) / ((n - r) * factorial(r)));
    } else {
        return 0;
    }
}
console.log(combinations(5,3))

//This is a function to find the permutation of two numbers;
function permutations(n, r) {
    if (n > r) {
        return (factorial (n)) / (factorial(n - r));
    } else {
        return 0;
    }
}
console.log(permutations(5,3))

//      n > r ? console.log((factorial (n)) / (factorial(n - r))): console.log(0); === Using ternary format(permutations):
//      n > r ? console.log(factorial(n)) / ((n - r) * factorial(r)): console.log(0); === Using ternary format(combinations):