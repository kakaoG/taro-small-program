import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleRoute() {
    Taro.navigateTo({url: '/pages/test/index'});
  }

  render () {
    const { handleIncrement } = this.props;
    return (
      <View className='index'>
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

