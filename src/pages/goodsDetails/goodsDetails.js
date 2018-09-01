import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, Button } from '@tarojs/components'
import { AtFloatLayout, AtInputNumber } from 'taro-ui'

import './goodsDetails.scss'

export default class goodsDetails extends Component {
    config = {
        navigationBarTitleText: '商品详情'
    }

    constructor() {
        super();
        this.state = {
            goodDetails: {},
            isOpened: false,
            sellNum: 1
        }
    }

    componentWillMount() {
        const goodId = this.$router.params.goodid;
        Taro.request({
            url: 'http://localhost:7001/getGoodDetails',
            method: 'POST',
            data: {
                goodId: goodId
            }
        }).then(res => {
            console.log(res.data);
            this.setState({
                goodDetails: res.data[0]
            })
        })
    }

    sellButton() {
        this.setState({
            isOpened: true
        })
    }
    sellNumChange(value) {
        this.setState({
            sellNum: value
        })
    }
    sellNowButton(e) {
        console.log(this.state.sellNum);
        console.log(this.state.goodDetails);
        alert('请等待支付接口！');
        Taro.request({
            url: 'http://localhost:7001/sellHandle',
            method: 'POST',
            data: {
                sellNum: this.state.sellNum,
                goodDetails: this.state.goodDetails
            }
        }).then(res => {
            console.log(res);
        })
    }


    render() {
        return (
            <View>
                <View>123</View>
                <AtFloatLayout
                    isOpened={this.state.isOpened}
                    title='请输入购买量'
                    onClose={this.handleClose} >
                    <AtInputNumber
                        min={1}
                        value={this.state.sellNum}
                        onChange={this.sellNumChange}
                    />
                    <Button onClick={this.sellNowButton}>立即购买</Button>
                </AtFloatLayout>
                <View className='details-tab'>
                    <View className='tab-button'>
                        <View>首页</View>
                        <View>购物车</View>
                    </View>
                    <View className='shop-button'>加入购物车</View>
                    <View onClick={this.sellButton} className='sell-button'>立即购买</View>
                </View>

            </View>
        )
    }
}