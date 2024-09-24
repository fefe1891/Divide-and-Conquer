function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // We found the min element
        if (arr[mid] < arr[mid - 1]) return mid;

        if (arr[start] <= arr[mid]) {
            // Left half is sorted, so the pivot is in right half
            start = mid + 1;
        } else {
            // Right half is sorted, so the pivot is in the left half
            end = mid - 1;
        }
    }

    return 0; // If not rotated at all
}

module.exports = findRotationCount