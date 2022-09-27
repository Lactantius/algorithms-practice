function bubbleSort<T>(arr: T[]): T[] {
  for (let rightIdx = arr.length - 1; rightIdx >= 0; rightIdx--) {
    arr.forEach((leftVal: T, leftIdx: number) => {
      while (leftIdx <= rightIdx && leftVal > arr[leftIdx + 1]) {
        arr[leftIdx] = arr[leftIdx + 1];
        arr[leftIdx + 1] = leftVal;
        leftIdx++;
      }
    });
  }
  return arr;
}

export default bubbleSort;
