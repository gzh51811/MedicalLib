import React,{Component} from 'react';
import './bottommenu.css'
import cartAction from '../../actions/cartAction'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class BottomMenu extends Component{


    render(){
        let {add2cart} = this.props;
        let cartgoods = this.props.msg;
        console.log(this)
        return(

            <div className="bottom-menu">
                <div className='_f_list _w46'>
                    <ul className='_left_menu clearfix'>
                        <li className='_detail_list'>
                            <img src='http://img.zdfei.com/static/image/temp/20171102/573727552e36064ea04a57494f93a44e.png' />
                            <p>咨询</p>
                        </li>
                        <li className='_detail_list'>
                            <img src='http://img.zdfei.com/static/image/temp/20171102/ce310a4f6feeb6067f61d3654b820e06.png' />
                            <p>关注</p>
                        </li>
                        <li className='_detail_list'>
                            <img src='http://img.zdfei.com/static/image/temp/20171103/472dd8fc9889cc754b86372a7499ab44.png' />
                            <p>清单</p>
                        </li>
                    </ul>
                </div>
                <div className='_f_list _w54 jrqd_btn'>
                    <div id='jrqd' onClick={add2cart.bind(this,cartgoods)}>加入清单</div>
                    <div id='ljgm'>立即购买</div>
                </div>
            </div>
        )
    }

}

BottomMenu = connect(()=>{
    return{}
},(dispatch)=>{
    return{
        add2cart(cartgoods){
            // console.log(cartgoods)
            dispatch(cartAction.add(cartgoods));
            this.props.history.push('/cart')
        }
    }
})(BottomMenu)

BottomMenu = withRouter(BottomMenu);

export default BottomMenu
