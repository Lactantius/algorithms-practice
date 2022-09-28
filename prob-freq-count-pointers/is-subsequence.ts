function isSubsequence(subStr: string, str: string): boolean {
  let idx: number = 0;
  for (let char of subStr) {
    idx = getIdxAfter(char, str, idx);
    if (idx >= str.length) return false;
  }
  return true;
}

function getIdxAfter(char: string, str: string, idx: number): number {
  for (let i = idx; i < str.length; i++) {
    if (str[i] === char) return i;
  }
  return Infinity;
}

export default isSubsequence;
