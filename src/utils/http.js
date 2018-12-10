import Taro from '@tarojs/taro';

const defaultHeader = {
  'content-type': 'application/json'
};

const http = {
  get({url, data, header}) {
    return Taro.request({
      method: 'GET',
      url,
      data,
      header: header || defaultHeader
    }).then(responseProxy)
  },
  post({url, data, header}) {
    Taro.request({
      method: 'POST',
      url,
      data,
      header: header || defaultHeader
    }).then(responseProxy)
  }
};

/**
 * @desc 处理http返回的请求。
 * @param response
 */
async function responseProxy(response) {
  let status = response.status || response.statusCode;
  let json = await response.data;
  let msg = json.message || response.statusText;
  if (100 <= status && status < 200) {
    throw new Error(`${msg}`);
  } else if (200 <= status && status < 300) {
    //服务正常
    return json;
  } else if (300 <= status && status < 400) {
    throw new Error(`${msg}`);
  } else if (400 <= status && status < 500) {
    //未找到服务
    throw new Error(`${msg}`);
  } else if (500 <= status && status < 600) {
    //服务出错
    throw new Error(`${msg}`);
  } else {
    throw new Error(`${msg}`);
  }
}

export default http;
