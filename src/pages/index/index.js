import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.scss'

import { test } from '../../service/index';

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props);
    this.state = {
      swiperInfo: []
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
    this.getData();
  }

  async getData() {
    const { status, data } = await test.getBanners({
      city_no: '020',
      platform: 16
    });
    if(status === 0) this.setState({swiperInfo: data})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleRoute() {
    Taro.navigateTo({url: '/pages/test/index'});
  }

  render () {
    const { handleIncrement } = this.props;
    const { swiperInfo } = this.state;

    return (
      <View className='index'>
        <Swiper>
          {swiperInfo.map((item, idx) =>
            <SwiperItem key={idx}>
              <Image src={`https://admin.360gst.com/data/upload/${item.img_url}`} />
            </SwiperItem>
          )}
        </Swiper>
        <Text>num:{this.props.count}</Text>
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={this.handleRoute}>跳转Test页</Button>
      </View>
    )
  }
}

const mapState = (state) => {
  return {
    count: state.test
  }
};

const mapDispatch = ({test: {handleIncrement}}) => {
  return {
    handleIncrement: () => handleIncrement()
  }
}

export default connect(mapState, mapDispatch)(Index);

