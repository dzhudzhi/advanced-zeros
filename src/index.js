module.exports = function getZerosCount(number, base) {
    let multipliers = {}, rest = base;
    for (let i = 2; i <= rest; i++) {
        if ((rest % i) == 0) {
            multipliers[i] ? multipliers[i]++ : multipliers[i] = 1;
            rest = rest / i;
            i--;
        }
    }
    let result = 0;
    for (i in multipliers) {
        let delimeter = i, sum = 0, power = multipliers[i];
        while (delimeter <= number) {
            sum += Math.floor(number / delimeter);
            delimeter *= i;
        }
        sum = Math.floor(sum / power);
        if (result == 0 || sum < result) {
            result = sum;
        } 
    }
    return result;
}