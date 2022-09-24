function findFloor(arr: number[], num: number): number {
  const left = 0;
  const right = arr.length - 1;
  const middle = Math.floor((left + right) / 2);

  if (arr[left] > num) return -1;

  if (arr[middle] === num) return num;
  if (arr[middle] > num && arr[middle - 1] < num) return arr[middle - 1];
  if ((arr[middle] < num && arr[middle + 1] > num) || !arr[middle + 1])
    return arr[middle];
  if (arr[middle] > num) return findFloor(arr.slice(left, middle), num);
  if (arr[middle] < num)
    return findFloor(arr.slice(middle + 1, right + 1), num);
}

export default findFloor;
