function countPairs(nums: number[], target: number): number {
  const sorted: number[] = nums.sort((a: number, b: number) => a - b);
  let left: number = 0;
  let right: number = sorted.length - 1;
  let count: number = 0;

  while (left < right) {
    const sum: number = sorted[left] + sorted[right];
    if (sum === target) {
      count++;
      left++;
      right--;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return count;
}

export default countPairs;
