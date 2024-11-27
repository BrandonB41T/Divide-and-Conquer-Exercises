function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (high < 0) return -1;
    if (num >= arr[high]) {
        return arr[high];
    }
    let answer = -1;

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (arr[mid] === num) {
            answer = arr[mid];
            return arr[mid];
        } else if (arr[mid] < num) {
            low = mid + 1;
            // Check if arr[mid] is closer to num than previous answer
            let closer = checkIfCloser(arr[mid], answer, num);
            if (closer) {
                answer = arr[mid];
            }
        } else if (arr[mid] > num) {
            high = mid - 1;
            let closer = checkIfCloser(arr[mid], answer, num);
            if (closer) {
                answer = arr[mid];
            }
        }
    }

    return answer;
}

function checkIfCloser(newAns, currentAns, desiredNum) {
    // if we already found the number, return false
    if (desiredNum - currentAns === 0) return false;
    // check if the new number is closer, and check if it's less than or equal to desiredNum
    if ((desiredNum - newAns) < (desiredNum - currentAns) && newAns <= desiredNum) {
        return true;
    }
    return false;
}

module.exports = findFloor