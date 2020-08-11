// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return this.klass === undefined
      ? super.introduce().concat(` I am a Teacher. I teach No Class.`)
      : super.introduce().concat(` I am a Teacher. I teach Class ${this.klass}.`);
  }
}
