export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source).reduce((total, num) => {
    // eslint-disable-next-line no-param-reassign
    total += Number(num);
    return total;
  }, 0);
}
