module.exports = function toReadable(number) {
    
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const prefixes = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 const findNumber = number.toString();
    let result;
    if (number === 0) {
        return 'zero';
    } else if (findNumber.length === 1) {
        result = ones[number];
        return result.trim();
    } else if (number > 10 && number < 20) {
        result = tens[findNumber[1]];
        return result.trim();
    } else if (findNumber.length === 2 && Number(findNumber[1]) === 0) {
        result =  prefixes[findNumber[0]];
        return result.trim();
    } else if (findNumber.length === 2) {
        result = `${prefixes[findNumber[0]]} ${ones[findNumber[1]]}`;
        return result.trim();
    } else if (findNumber.length === 3 && Number(findNumber[2]) === 0) {
        result = `${ones[findNumber[0]]} hundred ${prefixes[findNumber[1]]}`;
        return result.trim();
    } else if (findNumber.length === 3 && Number(findNumber[1]) === 1) {
        result = `${ones[findNumber[0]]} hundred ${tens[findNumber[2]]}`;
        return result.trim();
    } else if (findNumber.length === 3 && Number(findNumber[1]) === 0) {
        result = `${ones[findNumber[0]]} hundred ${ones[findNumber[2]]}`;
        return result.trim();
    } else if (findNumber.length === 3) {
        result = `${ones[findNumber[0]]} hundred ${prefixes[findNumber[1]]} ${ones[findNumber[2]]}`;
        return result.trim();
    }
  
};
