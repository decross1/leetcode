let dateOnly = (string) => {
    if (string.length === 10 && /^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/.test(string) === true) {
        return true;
    }

    return false;
}

// === Simple Tests for Regex Date Matching ===
// console.log(dateOnly('2017-12-31')); // true
// console.log(dateOnly('2017/12/31')); // true
// console.log(dateOnly('2017-12-45')); // false
// console.log(dateOnly('the date was 2017-12-31')); // false

let lettersOnly = (string) => {
    let numbers = '0123456789+-'
    let split = string.toLowerCase().split('');

    for (let i = 0; i < split.length; i++) {
        let character = split[i];

        if (numbers.indexOf(character) !== -1) {
            return false;
        };
    }

    return true;
}

// === Simple Tests for Letters Only ===
// console.log(lettersOnly('abc'));
// console.log(lettersOnly('abc def'));
// console.log(lettersOnly('abc123'));

let numbersOnly = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let split = string.toLowerCase().split('');

    for (let i = 0; i < split.length; i++) {
        let character = split[i];

        if (alpha.indexOf(character) !== -1 || dateOnly(string) === true) {
            return false;
        };
    }

    return true;
}

// === Simple Tests for Numbers Only ===
// console.log(numbersOnly('123'));
// console.log(numbersOnly('123456'));
// console.log(numbersOnly('abc123'));


function sortStrings(strings) {
    // Create seperate arrays for each of the primitive types
    let dates = strings.filter(string => dateOnly(string));
    let numbers = strings.filter(string => numbersOnly(string));
    let words = strings.filter(string => lettersOnly(string));

    // Collator for how native sort will work, handles concatination
    let collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

    // Check if the original array contained only numbers
    if (dates.length === 0 && words.length === 0 && numbers.length !== 0) {
        // if only numbers, sort original array smallest to largest
        strings = numbers.sort(collator.compare);
        // Check if the original array contained only dates
    } else if (dates.length !== 0 && words.length === 0 && numbers.length === 0) {
        // if only dates, sort original array by oldest to newest
        strings = dates.sort(collator.compare);
        // Check if the original array contained only words
    } else if (dates.length === 0 && words.length !== 0 && numbers.length === 0) {
        // if only words, sort original array alphabetically
        strings = words.sort(collator.compare);
    } else {
        strings = strings.sort(collator.compare);
    }

    return strings;
}


// console.log(sortStrings(["2017/10/18", "2016-10-01", "2018-01-01"]));
// console.log(sortStrings(["1", "14", "8"]));
// console.log(sortStrings(['cheese', 'wine', 'apples']));
// console.log(sortStrings(["a1","a2016-01-01","a3"]));
// console.log(sortStrings(["Ended on 2016-01-05", "ended on 2017-01-02", "ended ON 2016-02-05", "started on 2016-01-02"]));

