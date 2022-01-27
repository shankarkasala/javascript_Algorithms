const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(val, arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (val === arr[mid]) {
      return mid;
    }
    if (val < arr[mid]) {
      right = mid - 1;
    } else if (val > arr[mid]) {
      left = mid + 1;
    }
  }
  return mid;
}
console.log(binarySearch(8, Array));
