function findRotationCount(arr: number[]): number {
  const left = 0;
  const right = arr.length - 1;
  const middle = Math.floor((left + right) / 2);

  // No rotations
  if (arr[left] < arr[right]) return 0;

  // Rotation at middle
  if (arr[middle - 1] > arr[middle]) return middle;
  if (arr[middle] > arr[middle + 1]) return middle + 1;

  // Recurse
  if (arr[left] > arr[middle]) {
    return findRotationCount(arr.slice(left, middle));
  }
  if (arr[middle] > arr[right]) {
    return middle + findRotationCount(arr.slice(middle, right + 1));
  }
}

export default findRotationCount;
