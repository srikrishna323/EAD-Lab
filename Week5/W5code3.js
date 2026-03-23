function isPalindrome(n) {
        let s = n.toString();
        let r = s.split('').reverse().join('');
        return s === r;
    }

    function isArmstrong(n) {
        let s = n.toString();
        let len = s.length;
        let sum = 0;
        for (let char of s) {
            sum += Math.pow(parseInt(char), len);
        }
        return sum === n;
    }

    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function getFactorial(n) {
        if (n < 0) return "Undefined";
        if (n === 0) return 1;
        let res = 1;
        for (let i = 1; i <= n; i++) res *= i;
        return res;
    }

    function analyze() {
        let val = parseInt(document.getElementById('numInput').value);
        let display = document.getElementById('results');

        if (isNaN(val)) {
            display.innerHTML = "Please enter a valid number.";
            return;
        }

        display.innerHTML = `
            <strong>Results for ${val}:</strong><br>
            Is Palindrome: ${isPalindrome(val) ? "Yes" : "No"}<br>
            Is Armstrong: ${isArmstrong(val) ? "Yes" : "No"}<br>
            Is Prime: ${isPrime(val) ? "Yes" : "No"}<br>
            Factorial: ${getFactorial(val)}
        `;
    }