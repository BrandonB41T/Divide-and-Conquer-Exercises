function sortedFrequency(arr, val) {
    const first = findFirstOccurence(arr, val);
    const last = findLastOccurence(arr, val);

    if (first === -1) return -1;

    return last - first + 1;
}

function findFirstOccurence(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let midIdx = Math.floor((low + high)/2);
        if (arr[midIdx] === val) {
            result = midIdx;
            high = midIdx - 1;
        } else if (arr[midIdx] < val) {
            low = midIdx + 1;
        } else {
            high = midIdx - 1
        }
    }
    
    return result;
}

function findLastOccurence(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let midIdx = Math.floor((low + high)/2);
        if (arr[midIdx] === val) {
            result = midIdx;
            low = midIdx + 1;
        } else if (arr[midIdx] < val) {
            low = midIdx + 1;
        } else {
            high = midIdx - 1
        }
    }

    return result;
}

let x = sortedFrequency([1,1,2,2,2,2,3],2) // 4
let d = sortedFrequency([1,1,2,2,2,2,3],3) // 1
let o = sortedFrequency([1,1,2,2,2,2,3],1) // 2
let r = sortedFrequency([1,1,2,2,2,2,3],4) // -1

module.exports = sortedFrequency