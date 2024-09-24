function findFloor(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) return arr[mid];
        if (arr[mid] > num) {
            end = mid - 1;
        } else {
            floor = arr[mid];
            start = mid + 1;
        }
    }
    return floor;
}

module.exports = findFloor