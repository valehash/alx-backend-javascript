export default function setFromArray(arr) {
  const set1 = new Set();
  for (const i of arr) {
    set1.add(i);
  }
  return set1;
}
