function twoArrayObject<T>(
  keys: string[],
  vals: T[]
): Record<string, T | null> {
  return keys.reduce((obj, key, idx) => {
    obj[key] = vals[idx] ? vals[idx] : null;
    return obj;
  }, {} as Record<string, T | null>);
}

export default twoArrayObject;
