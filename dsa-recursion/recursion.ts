/** product: calculate the product of an array of numbers. */

function product(nums: number[], idx = 0): number {
  if (idx === nums.length) return 1;

  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words: string[]): number {
  console.log(words);
  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  if (str.length === 0) return "";
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  return str === revString(str);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr: any[], val: any, idx = 0): number {
  if (idx === arr.length - 1) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  if (str.length === 1) return str[0];
  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj: Object): string[] {
  return Object.values(obj)
    .map((val) => {
      if (typeof val === "object") return gatherStrings(val);
      if (typeof val === "string") return val;
    })
    .flat();
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr: any[], val: any): number {
  const left = 0;
  const right = arr.length - 1;
  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) return middle;
  if (val < arr[middle]) {
    return binarySearch(arr.slice(left, middle), val);
  }
  if (arr[middle] < val) {
    const next = binarySearch(arr.slice(middle + 1, right + 1), val);
    return next < 0 ? -1 : next + middle + 1;
  }

  return -1;
}

export {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
