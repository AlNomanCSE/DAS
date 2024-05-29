function generateRandomArray(
  length: number,
  min: number,
  max: number
): number[] {
  const randomArray: number[] = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

const ARray: Array<number> = generateRandomArray(10, 0, 20);

for (let x of ARray) {
  if (x == 12) {
    console.log("Yes");
  }
}
