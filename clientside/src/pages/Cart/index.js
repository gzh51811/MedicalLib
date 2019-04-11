import React, {Component} from 'react';
import './cart.css'
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom'
// import store from '../../store.js'
import {connect} from 'react-redux';
import Gundong from './Gundong'
import {bindActionCreators} from 'redux';
import cartAction from '../../actions/cartAction';
// 多选
const CheckboxGroup = Checkbox.Group;

class Cart extends Component {

    constructor (){
        super();
        this.state = {
            // cartgoods:[]
        }
    }


    render(){
        let {cartgoods} = this.props
        console.log('cart',this);
        console.log(cartgoods);
        return (
            <div id="cart">
                <header className='_activity_header'>
                    <a className='_personal_centers'>
                        <img src='http://img.zdfei.com/static/image/htmls/single/2017-07-19/596eea3c79050.png' />
                    </a>
                    <p className='_header_title'>药品清单</p>
                    <a className='_first_page'>编辑</a>
                </header>
                <article className='_activity_wraper'>
                    <div id='isb2c'>
                        <div className='_b2c_line'>
                            <span className='_b2c_log'>
                                <img src="http://img.zdfei.com/static/image/htmls/single/2017-08-24/599e62a097e82.png" />
                            </span>
                            <span className='_b2c_text'>111医药馆商城 · 1日后到家</span>
                            <span className='_free_freight'>满99元免运费</span>
                        </div>
                        <div className='isb2c-list'>
                            <Gundong/>
                            <div className='_activity_cont'>
                                <ul>
                                    <li className='_activity_list'>
                                        <dl className='_act_list'>
                                            <Checkbox />
                                            <dd className='_act_img'>
                                                <img src={cartgoods[1].goods_img} />
                                                <span className='bg-icon'></span>
                                            </dd>
                                            <dd className='_act_text'>
                                                <p className='_product_name'>{cartgoods[1].goods_name}</p>
                                                <p className='_limit_number'></p>
                                                <p className='_product_standard'>
                                                    <span className='_standard_num'>{cartgoods[1].spec}</span>
                                                </p>
                                                <p className='_buy_price'>
                                                    ￥<span className='_price_number'>{cartgoods[1].price}</span>
                                                    <span className='_del_price'>￥</span>
                                                </p>

                                            </dd>
                                        </dl>
                                        <div className='_cart_product_count'>
                                            <div className='_minus_one'></div>
                                            <input type='number' className='_cart_input' value={1} min='1' readOnly/>
                                            <div className='_add_one'></div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='_actvity_foot'>
                            <div className='_sel_all'>
                            <Checkbox />
                            <span className='_act_all'>全选</span>
                            </div>
                            <div className='_count_box'>
                                <p className='_count_top'>
                                    <span className='_count_num'>¥35.90</span>
                                    <span className='_count_all'>总计</span>
                                </p>
                                <p className='_count_notice'>不含运费，已优惠-￥0</p>

                            </div>
                            <input type='button' className='_submit_btn' value='结算（1）'/>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}


Cart = withRouter(Cart)
Cart = connect(
    state=>({
        cartgoods:state.cartgoods,
        // total:state.cart.goodslist.reduce((prev,current)=>prev+current.goods_price*current.qty,0)
    }),
    dispatch=>bindActionCreators(cartAction,dispatch)
)(Cart)



export default Cart;
