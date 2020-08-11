// TODO 17: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  // eslint-disable-next-line no-useless-constructor
  constructor(name, age) {
    super(name, age);
  }

  // eslint-disable-next-line class-methods-use-this
  introduce() {
    return super.introduce().concat(' I am a Worker. I have a job.');
  }
}
