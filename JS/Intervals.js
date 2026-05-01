let counter = 1;
let IntervalId = setInterval(function () {
    console.log(counter++);
}, 2000);

setTimeout(function () {
    clearInterval(IntervalId)
}, 20000);