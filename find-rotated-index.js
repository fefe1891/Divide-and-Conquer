function findRotatedIndex(array, num) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (array[mid] === num) {
            return mid;
        }
        if (array[start] <= array[mid]) {
            if (num >= array[start] && num <= array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (num >= array[mid] && num <= array[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    // Number not found
    return -1;
}

module.exports = findRotatedIndex