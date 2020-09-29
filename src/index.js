module.exports = function toReadable (number) {
    let upTwenty = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 
        12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    };
    let upHundred = {
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
    };

    if (number === 0) return 'zero';
    if (number < 20) return upTwenty[number];
    let str = number.toString();

    if (str.length < 3) {
        if (number % 10 === 0) return upHundred[number];
        return `${upHundred[str[0] * 10]} ${upTwenty[str[1]]}`
    }
    if (str.length < 4) {
       if (number % 100 === 0) return `${upTwenty[str[0]]} hundred`;
       if (str[1] === '0') return `${upTwenty[str[0]]} hundred ${upTwenty[str[2]]}`;
       if (str[1] === '1') return `${upTwenty[str[0]]} hundred ${upTwenty[parseInt(str[2])+10]}`;
       if (number % 10 === 0) return `${upTwenty[str[0]]} hundred ${upHundred[str[1] * 10]}`;
       return `${upTwenty[str[0]]} hundred ${upHundred[str[1] * 10]} ${upTwenty[str[2]]}`;
    }
}
