import {createStore} from 'redux';
import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QTY} from './actions/cartAction'

let initState = {
    cartgoods:[{}]
}
let reducer = (state=initState,{type,payload})=>{
    switch (type) {
        // 添加商品到购物车
        case ADD_TO_CART:
            return {
                ...state,
                cartgoods:[...state.cartgoods,payload]
            }
        // 删除商品
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartgoods:state.cartgoods.filter(item=>item.id!=payload.id)
            }
        // 更改数量
        case CHANGE_QTY:
            return {
                cartgoods:state.cartgoods.map(cartgoods=>{
                    if(cartgoods.id === payload.id){
                        cartgoods.qty = payload.qty
                    }
                })
            }
        default:
            return state;

    }
}
let store = createStore(reducer);

export default store;
