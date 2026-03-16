// Simple TypeScript array examples demonstrating common operations

// 1) Typed arrays
const nums: number[] = [1, 2, 3];
nums.push(4);
console.log('nums:', nums);

// 2) Readonly arrays
const readonlyNums: ReadonlyArray<number> = [10, 20, 30];
console.log('readonlyNums:', readonlyNums);

// 3) Generic helper: first element
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log('first number:', first(nums));

// 4) map / filter / reduce
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log('doubled:', doubled, 'evens:', evens, 'sum:', sum);

// 5) Tuple
const user: [string, number] = ['Alice', 30];
const [name, age] = user;
console.log('user:', name, age);

// 6) Union-typed arrays
const mixed: (string | number)[] = [1, 'two', 3];
console.log('mixed:', mixed.map(x => String(x)));

// 7) Multi-dimensional arrays
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log('matrix[1][0]:', matrix[1][0]);

// 8) Array of objects with interface
interface Person { name: string; age: number }
const people: Person[] = [
  { name: 'Bob', age: 25 },
  { name: 'Carol', age: 28 }
];
console.log('names:', people.map(p => p.name));

// 9) Immutability pattern and spread
const base = [1, 2] as const;
const extended = [...base, 3];
console.log('extended:', extended);

// 10) Functional chaining
const result = people
  .filter(p => p.age >= 26)
  .map(p => p.name.toUpperCase())
  .join(', ');
console.log('result:', result);

export {};
