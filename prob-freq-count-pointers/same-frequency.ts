import { frequencyCounter } from "./construct-note";
function sameFrequency(num1: number, num2: number): boolean {
  const num1Frequencies: Map<string, number> = frequencyCounter(String(num1));
  const num2Frequencies: Map<string, number> = frequencyCounter(String(num2));

  for (let [digit, freq] of num1Frequencies) {
    if (num2Frequencies.get(digit) !== freq) return false;
  }
  return true;
}

export default sameFrequency;
