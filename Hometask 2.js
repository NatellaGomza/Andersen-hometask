function makeObjectDeepCopy(obj) {
    const cloneObj = Object.assign({}, obj);

    Object.keys(cloneObj).forEach( (key) => {
        cloneObj[key] = typeof obj[key] === "object" ? makeObjectDeepCopy(obj[key]) : obj[key];   
    });

    return cloneObj;
}

function selectFromInterval(arr, firstValue, secondValue) {
    const isValidArr = Array.isArray(arr) && arr.every( (item) => typeof item === 'number' );
    const resultArr = arr.filter( (el) => el <= firstValue && el >= secondValue );

    if (!isValidArr) {
        throw new Error('Ошибка!');
    }
    
    return resultArr;
}

const myIterable = {
    from: 1,
    to: 5,

    isValidInterval() {
        const intervalHasTwoValues = myIterable.hasOwnProperty('from') && myIterable.hasOwnProperty('to');
        const intervalValuesAreNumbers = typeof myIterable.from === 'number' && typeof myIterable.to === 'number';
        const intervalIsCorrect = myIterable.from < myIterable.to;

        return intervalHasTwoValues && intervalValuesAreNumbers && intervalIsCorrect;
    },

    [Symbol.iterator]() {
        if (this.isValidInterval()) {
            this.current = this.from;
            return this;
        }

            throw new Error('Ошибка!');
    },

    next() {
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            return {
                done: true
            };
        }
    }
};