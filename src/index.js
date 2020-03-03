module.exports = function check(str, bracketsConfig) {

    let lengthOfString = str.length;
    let arrayOfStrings = bracketsConfig.map((item) => item.join(''));

    for (let i = 1; i <= lengthOfString; ++i) {
        for (let j = 0; j <= arrayOfStrings.length; ++j) {
            str = str.replace(arrayOfStrings[j], '');
        }
    }

    let result = str.length === 0 ? true : false;
    return result;
};
