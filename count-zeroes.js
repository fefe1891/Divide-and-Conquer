function countZeroes(arr) {
  let left = 0;
  let right = arr.length -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    // If middle element is 0, and the previous (mid -1) is not 0, then we found the turning point
    if ( (arr[middle] === 0) && (arr[middle - 1] === 1 || middle == 0) ) {
        return arr.length - middle;
    } else if (arr[middle] === 1) {
        // If middle element is 1, skip the left half
        left = middle + 1;
    } else {
        // If middle element is 0, but the previous element is also 0, skip the right half
        right = middle - 1;
    }
  }

  // If no 0 is found, return 0
  return 0;
}

module.exports = countZeroes