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

    let separator = "";
    let result = "";

    for (let str of strs) {
        if (typeof str[0] !== "string") return result;

        result += str[0];

        if (str[1]) separator += str[1];

        result += separator;
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


class Calculator {
    constructor(...args) {
      this.arguments = args;
      this.firstValue = args[0];
      this.secondValue = args[1];
      this.invalidValues = this.checkingArgs();
      this.setX = this.setX.bind(this);
      this.setY = this.setY.bind(this);
      this.logSum = this.logSum.bind(this);
      this.logMul = this.logMul.bind(this);
      this.logSub = this.logSub.bind(this);
      this.logDiv = this.logDiv.bind(this);
    }
  
    checkingArgs() {
      let isValidNumbers = true;
      
      for (let i = 0; i < this.arguments.length; i++) {
        if (typeof this.arguments[i] !== 'number' || !isFinite(this.arguments[i])) {
          isValidNumbers = false;
          break;
        }
      }
  
      if (this.arguments.length !== 2 || !isValidNumbers) throw new Error('Неверный формат переданных значений');
    }
  
    setX(num) {
      if (typeof num !== 'number' || !isFinite(num)) {
        throw new Error('Не число');
      }

      this.firstValue = num;
    }
  
    setY(num) {
      if (typeof num !== 'number' || !isFinite(num)) {
        throw new Error('Не число');
      }

      this.secondValue = num;
    }
  
    logSum() {
      console.log(this.firstValue + this.secondValue);
    }
  
    logMul() {
      console.log(this.firstValue * this.secondValue);
    }
  
    logSub() {
      console.log(this.firstValue - this.secondValue);
    }
  
    logDiv() {
      if (this.secondValue === 0) throw new Error('На ноль делить нельзя!');
      
      console.log(this.firstValue / this.secondValue);
    }
  }
  
  const calculator = new Calculator(12, 3);
  calculator.logSum(); // 15
  calculator.logDiv(); // 4
  calculator.setX(15);
  calculator.logDiv(); // 5
  const logCalculatorDiv = calculator.logDiv;
  logCalculatorDiv(); // 5
  calculator.setY(444n); // Ошибка!