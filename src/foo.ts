export function sum(...numbers: number[]) {
  const x = 1;
  return numbers.reduce((acc, val) => acc + val, 0);
}
