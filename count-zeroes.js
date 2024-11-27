function countZeroes(arr) {
    const idx = findFirstZero(arr, 0);
    if (idx === -1) return -1;

    let zeroes = arr.splice(idx);
    return zeroes.length;
}

function findFirstZero(arr) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
  
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
    
        if (arr[mid] === 0) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] === 1) {
            low = mid + 1;
        }
    }
  
    return result;
}

module.exports = countZeroes