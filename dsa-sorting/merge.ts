function merge<T>(arr1: T[], arr2: T[]): T[] {
  const merged: T[] = [];
  let i: number = 0;
  let j: number = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  const remainder = i === arr1.length ? arr2.slice(j) : arr1.slice(i);
  return merged.concat(remainder);
}

function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;
  const midPoint: number = Math.floor(arr.length / 2);
  const left: T[] = mergeSort(arr.slice(0, midPoint));
  const right: T[] = mergeSort(arr.slice(midPoint));
  return merge<T>(left, right);
}

export { merge, mergeSort };
