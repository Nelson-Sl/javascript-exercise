export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const serialObject = {
    serialNumber: '12345'
  };
  const result = Object.assign(serialObject, source);
  result.properties.status = 'processed';
  return result;
}
