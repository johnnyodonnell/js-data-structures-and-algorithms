
class MyPromise {
    constructor(executor) {
        executor((result) => {
            if (this.thenCallbacks) {
                let currPromise = this;
                for (let callback of this.thenCallbacks) {
                    if (currPromise === this) {
                        result = callback(result);
                        if (result instanceof MyPromise) {
                            currPromise = result;
                        }
                    } else {
                        currPromise.then(callback);
                    }
                }
            } else {
                this.resolved = result;
            }
        }, (err) => {
        });
    }

    then(callback) {
        if (this.resolved) {
            this.resolved = callback(this.resolved);
            if (this.resolved instanceof MyPromise) {
                return this.resolved;
            }
        } else if (this.thenCallbacks) {
            this.thenCallbacks.push(callback);
        } else {
            this.thenCallbacks = [callback];
        }

        return this;
    }
}

module.exports = MyPromise;

