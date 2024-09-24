function sortedFrequency(arr, num) {
    let firstIdx = firstOccurrence(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = lastOccurrence(arr, num);
    return lastIdx - firstIdx + 1;
}

function firstOccurrence(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < num) {
            start = mid + 1;
        }
        else if (arr[mid] > num) {
            end = mid - 1;
        }
        else {
            if (mid === 0 || arr[mid - 1] !== num) return mid;
            else end = mid - 1;
        }
    }
    return -1;
}

function lastOccurrence(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < num) {
            start = mid + 1;
        }
        else if (arr[mid] > num) {
            end = mid - 1;
        }
        else {
            if (mid === arr.length - 1 || arr[mid + 1] !== num) return mid;
            else start = mid + 1;
        }
    }
    return -1;
}

module.exports = sortedFrequency;