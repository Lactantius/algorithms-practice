import findRotationCount from "./find-rotation-count";

function findRotatedIndex(arr: number[], num: number): number {
  // Why do it the hard way?
  const rotations = findRotationCount(arr);
  const sorted = [
    ...arr.slice(rotations, arr.length),
    ...arr.slice(0, rotations),
  ];

  //const idx = sorted.findIndex((n) => n === num);
  const idx = findIndex(sorted, num);

  return idx < 0
    ? idx
    : idx > rotations
    ? (idx as number) - rotations
    : (idx as number) + rotations;
}

function findIndex(arr: number[], num: number): number {
  const left = 0;
  const right = arr.length - 1;
  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === num) return middle;
  if (num < arr[middle]) {
    return findIndex(arr.slice(left, middle), num);
  }
  if (arr[middle] < num) {
    const next = findIndex(arr.slice(middle + 1, right + 1), num);
    return next < 0 ? -1 : next + middle + 1;
  }

  return -1;
}

export default findRotatedIndex;
