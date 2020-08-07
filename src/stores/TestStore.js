import { action, observable } from 'mobx';
import Base from './Base';

class TestStore extends Base {
  // 倒计时时间
  @observable amount = 0;

  // 数量累加
  @action counterAmount(value) {
    this.amount = value;
  }
}

export default TestStore;
