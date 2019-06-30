
/*
 * [10, 3, 4, 7, 8, 3, 4, 8, 5, 6, 3, 1, 1, 0]
 *   0  1  2  3  4  5  6  7  8  9 10 11 12 13
 *
 */

const getParentIndex = (index) => {
    return Math.floor((index - 1) / 2);
};

const getChildrenIndices = (index) => {
    let base = (index + 1) * 2;
    return [base - 1, base];
};

class Heap {
    constructor() {
        this.array = [];
        this.length = 0;
    };

    push(val) {
        if (this.length < this.array.length) {
            this.array[this.length] = val;
        } else {
            this.array.push(val);
        }

        this.siftUp(this.length);
        ++this.length;
    }

    peak() {
        return this.array[0];
    }

    pop() {
        let result = this.array[0];

        this.array[0] = this.array[this.length - 1];
        --this.length;
        this.siftDown(0);

        return result;
    }

    empty() {
        return this.length == 0;
    }

    // Should be private

    siftUp(index) {
        let val = this.array[index];

        let parentIndex = getParentIndex(index);

        if (parentIndex >= 0) {
            let parent = this.array[parentIndex];

            if (val < parent) {
                this.swap(index, parentIndex);
                this.siftUp(parentIndex);
            }
        }
    }

    siftDown(index) {
        let val = this.array[index];

        let [leftChildIndex, rightChildIndex] = getChildrenIndices(index);

        if ((leftChildIndex < this.length)
                && (rightChildIndex < this.length)) {
            let leftChild = this.array[leftChildIndex];
            let rightChild = this.array[rightChildIndex];

            if ((val > leftChild) && (val > rightChild)) {
                if (leftChild < rightChild) {
                    this.swap(index, leftChildIndex);
                    this.siftDown(leftChildIndex);
                } else {
                    this.swap(index, rightChildIndex);
                    this.siftDown(rightChildIndex);
                }
            } else if (val > leftChild) {
                this.swap(index, leftChildIndex);
                this.siftDown(leftChildIndex);
            } else if (val > rightChild) {
                this.swap(index, rightChildIndex);
                this.siftDown(rightChildIndex);
            }
        } else if (leftChildIndex < this.length) {
            let leftChild = this.array[leftChildIndex];

            if (val > leftChild) {
                this.swap(index, leftChildIndex);
                this.siftDown(leftChildIndex);
            }
        }
    }

    swap(indexA, indexB) {
        let temp = this.array[indexA];
        this.array[indexA] = this.array[indexB];
        this.array[indexB] = temp;
    }
};

module.exports = Heap;

