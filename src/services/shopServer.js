import axios from '_src/dataProxy';
import URL from '_constants/URL';

/**
 * 测试服务
 */
const shopServer = {
  /**
   * 登录服务
   * @param {*} param - 参数
   */
  async login(params) {
    return axios.post(URL.shop.login, { params });
  },
};

export default shopServer;
