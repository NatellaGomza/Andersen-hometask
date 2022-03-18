function curry(func) {
    let args = [];
    let isFlagToReset = false;

    let selfRetFunc = function(...str) {

        if (isFlagToReset) {
            isFlagToReset = false;
            args = [];
        }

        args.push(str);

        return selfRetFunc;
    }

    let getResult = function(isOrdinaryCall = false) {

        if (isOrdinaryCall) return Function.prototype.toString.call(selfRetFunc);

        isFlagToReset = true;

        return func(args);
    }

    selfRetFunc.valueOf = getResult;
    selfRetFunc.toString = getResult;

    return selfRetFunc;
}

function isValidValues(strs) {

    let repeats = "";
    let result = "";

    for (let str of strs) {
        if (typeof str[0] !== "string") return result;

        result += str[0];

        if (str[1]) repeats += str[1];

        result += repeats;
    }

    return result;
}

let concatStrings = curry(isValidValues);

console.log(''+ concatStrings('first')('second')('third')());
console.log(''+ concatStrings('first', null)('second')());
console.log(''+ concatStrings('first', '123')('second')('third')());
console.log(''+ concatStrings('some-value')('')('')(null));
console.log(''+ concatStrings('some-value')(2));
console.log(''+ concatStrings('some-value')('333')(123n));