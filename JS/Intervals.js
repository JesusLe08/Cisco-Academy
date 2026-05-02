let counter = 1;
let IntervalId = setInterval(function () {
    console.log(counter++);
}, 2000);

setTimeout(function () {
    clearInterval(IntervalId)
}, 20000);

let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
};

let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));

console.log(fibbRec(4));
console.log(fibb(4))