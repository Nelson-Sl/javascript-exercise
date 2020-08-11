function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(num => num % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  // Note: filter第二项为索引项，可以调用
  return collection.filter((num, index) => collection.indexOf(num) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
