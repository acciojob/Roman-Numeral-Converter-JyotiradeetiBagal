function convertToRoman(num) {
  	 if (num < 0 || num > 100000) {
        return "Input out of range. Please provide a number between 0 and 100000.";
    }

    const symbols = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    // Extended array to include subtractive combinations
    const romanSymbols = [
        symbols[0], // M
        ['CM', 900], 
        symbols[1], // D
        ['CD', 400], 
        symbols[2], // C
        ['XC', 90], 
        symbols[3], // L
        ['XL', 40], 
        symbols[4], // X
        ['IX', 9], 
        symbols[5], // V
        ['IV', 4], 
        symbols[6]  // I
    ];

    let result = "";

    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman
