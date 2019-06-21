
class MyPromise {
    constructor(executor) {
        executor((result) => {
            if (this.thenCallback) {
                if (result instanceof MyPromise) {
                    console.log("Result is a promise");
                    result.then(this.thenCallback);
                } else {
                    this.thenCallback(result);
                }
            } else {
                this.resolved = true;
                this.resolvedValue = result;
            }
        }, (err) => {
        });
    }

    then(baseCallback) {
        let resolveCallback;
        let newPromise = new MyPromise((resolve, reject) => {
            resolveCallback = (val) => {
                if (val instanceof MyPromise) {
                    val.then((val) => {
                        resolve(val);
                    });
                } else {
                    resolve(val);
                }
            }
        });


        let callback = (val) => {
            let newVal = baseCallback(val);

            if (newVal) {
                resolveCallback(newVal);
            } else {
                resolveCallback(val);
            }
        };

        if (this.resolved) {
            callback(this.resolvedValue);
        } else {
            this.thenCallback = callback;
        }

        return newPromise;
    }
}

module.exports = MyPromise;

