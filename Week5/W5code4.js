function analyzeString() {
    let text = document.getElementById("inputText").value;
    let reverseString = function(str) {
        return str.split("").reverse().join("");
    };
    let countVowels = (str) => {
        let vowels = "aeiouAEIOU";
        return str.split("").filter(ch => vowels.includes(ch)).length;
    };
    let longestWord = function(str) {
        let words = str.split(" ");
        return words.reduce((longest, current) =>
            current.length > longest.length ? current : longest
        , "");
    };
    document.getElementById("reverse").innerText =
        "Reversed String: " + reverseString(text);
    document.getElementById("vowels").innerText =
        "Vowel Count: " + countVowels(text);
    document.getElementById("longest").innerText =
        "Longest Word: " + longestWord(text);
    document.getElementById("uppercase").innerText =
        "Uppercase: " + text.toUpperCase();
}