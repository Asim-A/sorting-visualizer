export function randomArrayWithRange(min, max, amount) {
  let randomArray = [];

  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i < amount; i++) {
    const randomFloat = Math.random() * (max - min + 1) + min;
    const randomInt = Math.floor(randomFloat);

    randomArray.push(randomInt);
  }

  return randomArray;
}
