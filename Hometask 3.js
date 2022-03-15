function myFilter(arr, callback, thisArg) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        const callbackWithCalledThis = callback.call(thisArg, arr[i], i, arr);
        if (callbackWithCalledThis) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

function myForEach(arr, callback, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }
}

function myReduce(arr, callback, startValue) {
    let result = startValue;

    for (let i = 0; i < arr.length; i++) {
        result = callback.call(null, result, arr[i], i, arr);
    }

    return result;
}