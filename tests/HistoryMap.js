const HistoryMap = require("../HistoryMap");

let hm = new HistoryMap();

console.log(hm.get("hello"));
console.log();

let aDate = new Date();

hm.set("hello", "world");
console.log(hm.get("hello"));
console.log(hm.get("hello", aDate));
console.log();

setTimeout(() => {
    let bDate = new Date();

    hm.set("hello", "johnny");
    console.log(hm.get("hello"));
    console.log(hm.get("hello", bDate));
    console.log(hm.get("hello", aDate));
    console.log();
}, 100);

setTimeout(() => {
    let cDate = new Date();

    hm.set("hello", "javascript");
    console.log(hm.get("hello"));
    console.log(hm.get("hello", cDate));

    setTimeout(() => {
        console.log(hm.get("hello", new Date()));
    }, 100);
}, 200);

