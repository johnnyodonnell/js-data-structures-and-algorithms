const Heap = require("../Heap");


const heapsort = (arr) => {
    let result = [];

    const heap = new Heap();
    for (let n of arr) {
        heap.push(n);
    }

    while (!heap.empty()) {
        result.push(heap.pop());
    }

    return result;
};


const testCases = [
    [],
    [1],
    [2, 1],
    [1, 2],
    [3, 1, 2],
    [8, 3, 8, 2, 10, 8, 4, 1, 0 -3]
];

for (let a of testCases) {
    console.log(a);
    console.log(heapsort(a));
    console.log();
}

