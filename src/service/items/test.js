import http from '../../utils/http';

const test = {
  getBanners(params) {
    return http.get({url: 'https://weixin.gstyun.cn/api/admin.360gst.com/Interface/getbanner', data: params})
  }
};

export default test;
