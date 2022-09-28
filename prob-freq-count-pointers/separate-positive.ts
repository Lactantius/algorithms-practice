function separatePositive(arr: number[]): number[] {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] < 0 && arr[right] > 0) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    } else if (arr[left] > 0) {
      left++;
    } else {
      right--;
    }
  }
  return arr;
}

export default separatePositive;
