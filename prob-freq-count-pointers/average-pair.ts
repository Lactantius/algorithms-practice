/* averagePair: takes a sorted array and a number, and checks if there is a pair that averages to the number */
function averagePair(arr: number[], num: number): boolean {
  let i: number = 0;
  let j: number = arr.length - 1;
  while (i < j) {
    let avg: number = (arr[i] + arr[j]) / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

export default averagePair;
