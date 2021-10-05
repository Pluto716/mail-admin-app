// 用户接口的管理
import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
