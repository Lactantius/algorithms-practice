function constructNote(msg: string, chars: string): boolean {
  const msgFrequencies: Map<string, number> = frequencyCounter(msg);
  const charFrequencies: Map<string, number> = frequencyCounter(chars);

  for (let [char, freq] of msgFrequencies) {
    const charFreq: number | undefined = charFrequencies.get(char);
    if (!charFreq || charFreq < freq)
      return false;
  }
  return true;
}

function frequencyCounter(str: string): Map<string, number> {
  let frequencies = new Map<string, number>();

  for (let char of str) {
    let charCount: number = frequencies.get(char) || 0;
    frequencies.set(char, charCount + 1);
  }

  return frequencies;
}

export default constructNote;
