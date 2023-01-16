var isPalindrome = (input: any): boolean => {
 var string = input.toString();
    for (let i = 0, j = string.length - 1; i < j; ++i, --j) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("shubham"));
console.log(isPalindrome("NPPN"));
console.log(isPalindrome("Bhake"));
console.log(isPalindrome("abba"));

