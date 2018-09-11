import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/shopcart/shopcart',
      'pages/index/index',
      'pages/goodsDetails/goodsDetails',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor: '#F7F7F7'
    },
    tabBar: {
      color: '#676767',
      selectedColor: '#63BA74',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './asset/tabbar/home.png',
          selectedIconPath: './asset/tabbar/homed.png'
        },
        {
          pagePath: 'pages/shopcart/shopcart',
          text: '购物车',
          iconPath: './asset/tabbar/shop.png',
          selectedIconPath: './asset/tabbar/shopd.png'
        },
        {
          pagePath: 'pages/index/index',
          text: '我的',
          iconPath: './asset/tabbar/mine.png',
          selectedIconPath: './asset/tabbar/mined.png'
        }
      ]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
