const MyPromise = require("../MyPromise");


new MyPromise((resolve, reject) => {
    resolve(0);
}).then((result) => {
    console.log(result);
}).then((result) => {
    console.log(result);
});

new MyPromise((resolve, reject) => {
    resolve(1);
}).then((result) => {
    console.log(result);
    return result + 1;
}).then((result) => {
    console.log(result);
    return result + 1;
});

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 1000);
}).then((result) => {
    console.log(result);
    return result + 1;
}).then((result) => {
    console.log(result);
    return result + 1;
});

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
}).then((result) => {
    console.log(result);
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(result + 1);
        }, 1000);
    });
}).then((result) => {
    console.log(result);
    return result + 1;
});

setTimeout(() => {
    new MyPromise((resolve, reject) => {
        resolve(7);
    }).then((result) => {
        console.log(result);
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                resolve(result + 1);
            }, 1000);
        });
    }).then((result) => {
        console.log(result);
        return result + 1;
    });
}, 4000);

