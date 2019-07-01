
/*
 * [1, 3, 5]
 *
 * [2]
 *
 * []
 *
 */

const findValue = (arr, timestamp) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid].timestamp == timestamp) {
            return arr[mid].value;
        } else if (arr[mid].timestamp < timestamp) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    if (end >= 0) {
        return arr[end].value;
    }
};

class HistoryMap {
    constructor() {
        this.map = new Map();
    }

    get(key, timestamp) {
        let arr = this.map.get(key);
        if (arr) {
            if (timestamp) {
                return findValue(arr, timestamp);
            } else {
                return arr[arr.length - 1].value;
            }
        }
    }

    set(key, value) {
        let timestamp = new Date();

        let arr = this.map.get(key)
        if (arr) {
            arr.push({value, timestamp});
        } else {
            this.map.set(key, [{value, timestamp}]);
        }
    }
};

module.exports = HistoryMap;

