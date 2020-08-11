export default function numberMapToWord(collection) {
  const alphabetList = 'abcdefghijklmnopqrstuvwxyz';
  return collection.map(num => alphabetList.charAt(num - 1));
  // TODO 3: 在这里写实现代码
}
