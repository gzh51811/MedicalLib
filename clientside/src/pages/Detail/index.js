import React, {Component} from 'react';
import BottomMenu from './BottomMenu.js'
import Main from './main.js'
import axios from 'axios'
import {connect} from 'react-redux';

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            goodsimages:[],
            goods:[],
            goodsprice:[],
            cartgoods:[]
        }
    }
    componentWillMount(){
        axios.get('http://router.111yao.com//sltRouter',{
               params:{
                   method:'goodsDetailWapMINAUse',
                   platFormType:'wap',
                   goodsId:654,
                   storeId:''
               }
           }).then((response)=> {
             // console.log(response.data.goods.id);
             var arr = response.data.goods;
             var goodsprice = response.data.goodsPrice
             // console.log(arr);
             var cartgoods={
                 goods_name:arr.goods_name,
                 price:goodsprice.price,
                 oldprice:goodsprice.oldPrice,
                 goods_img:'http://img.zdfei.com/'+response.data.goodsImages[0].images,
                 spec:arr.spec,
                 qty:1,
                 id:arr.id
             }
             // console.log(cartgoods)
             this.setState({
                 data:response.data,
                 goodsimages:[...response.data.goodsImages],
                 goods:arr,
                 goodsprice:goodsprice,
                 cartgoods:cartgoods
             })

           })
    }

    render(){
         // console.log(this)
        return(

            <div>
                <Main msg={this.state}/>
                <BottomMenu msg={this.state.cartgoods}/>
            </div>
        )
    }
}

export default Detail;
