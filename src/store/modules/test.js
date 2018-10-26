import '@tarojs/taro';
import '@tarojs/async-await';

export default {
  state: 0,
  reducers: {
    increment: s => s + 1,
    decrement: s => s - 1,
    up: (s, num) => s + num
  },
  effects: dispatch => {
    return {
      async handleIncrement(data, rootState) {
        await new Promise(resolve => {
          setTimeout(resolve, 1000)
        });
        console.log(...arguments);
        console.log(rootState);
        dispatch.test.increment();
      },
    }
  },
}
