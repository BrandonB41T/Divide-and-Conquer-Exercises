function findRotationPoint(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else if (arr[low] <= arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

function searchArray(arr, num, low, high) {
    if (arr.length === 0) return -1;
    if (num < arr[low] || num > arr[high]) return -1;

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1
}

function findRotatedIndex(arr, num) {
    const rotationPoint = findRotationPoint(arr);
    if (rotationPoint > 0 && num >= arr[0] && num <= arr[rotationPoint - 1]) {
        return searchArray(arr, num, 0, rotationPoint - 1);
    } else {
        return searchArray(arr, num, rotationPoint, arr.length - 1);
    }
}

module.exports = findRotatedIndex