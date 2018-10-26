import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';

import './index.scss'

class Test extends Component {

  config = {
    navigationBarTitleText: '测试页'
  }

  constructor(props) {
    super(props);
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='test'>
        <Text>num: {this.props.count}</Text>
      </View>
    )
  }
}

const mapState = (state) => {
  return {
    count: state.test
  }
};


export default connect(mapState)(Test);

