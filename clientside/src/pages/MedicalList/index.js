import React, {Component} from 'react';

// 样式
import './medicallist.css';
import '../../font_yewqaysxnh/iconfont.css';
import {withRouter} from 'react-router-dom';
import withAxios from '../../hoc/withAxios';

class MedicalList extends Component {
    constructor() {
        super();
        this.state = {
            goodsList: []
        }
    }

    componentWillMount() {
        // console.log(window.location.hash.split('?')[1])
        let search = window.location.hash.split('?')[1];
        let goodsId = search.split('=')[1];
        // console.log(goodsId);
        // console.log(this.props)
        this.props.axios.get('http://router.111yao.com//sltRouter', {
            params: {
                method: 'getCategoryGoodsByOtoFirst',
                platformType: 'wap',
                cId: goodsId,
                ptype: 1,
                pageNo: 1,
                pageSize: 6,
                storeid: '',
                keyword: ''
            }
        }).then((res)=>{
            // console.log(res)
            this.setState({
                goodsList: [...res.data.list]
            })
            console.log(this.state.goodsList)
        })

    }

    handleClick = (pid, e)=>{
		console.log(this.props)
		console.log(pid)
		this.props.history.push({
			pathname: '/detail',
			search: 'pid=' + pid
		})
	}

    render() {
        return (
            <div className="medicallist">
                <header>
                    <a href="javascript:;" className="iconfont icon-iconfront- top-left-btn"></a>
                    <div className="newseasearch">
                        <input type="text" alt=""/>
                        <a href="javascript:;"></a>
                    </div>
                    <a href="javascript:;" className="iconfont icon-zhuye top-right-btn"></a>
                </header>
                <ul className="search_nav">
                    <li><a href="javascript:;" className="active">默认</a></li>
                    <li><a href="javascript:;">价格</a></li>
                    <li><a href="javascript:;">仅药士达</a></li>
                    <span></span>                 
                </ul>
                <div className="product_all">
                    <div className="rank_content">
                        <ul id="new_goods_list_1">
                            {
                                this.state.goodsList.map(item => {
                                    return <li className="rank_list" key={item.pid} onClick={this.handleClick.bind(this,item.pid)}>
                                    <dl className="act_list">
                                        <dt>
                                            <img src={'http://img.zdfei.com/'+item.image} alt=""/>
                                        </dt>
                                        <dd>
                                            <p className="rank_name">{item.name}</p>
                                            <p className="rank_msg">{item.indication}</p>
                                            <p className="rank_spec">{item.spec}</p>
                                            <p className="rank_price">￥{item.price}</p>
                                            <span className="bill_btn"></span>
                                            <div className="hd-tags">
                                                <div className="no_ysd_jsd_class">
                                                    一日后到家
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
MedicalList = withRouter(MedicalList)
MedicalList = withAxios(MedicalList);

export default MedicalList;
