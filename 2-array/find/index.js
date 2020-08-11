export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const year = new Date();
  return collection.find(person => person.age < year.getFullYear() - 2000).name;
}
