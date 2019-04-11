import React,{Component} from 'react';
import './home.css';
import { Carousel ,List, message, Avatar, Spin} from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
class Home extends  Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div id="homepage">
               <header className='headers headers-action'>
                   <div className='header-box header-box-action'>
                        <h2>送至  定位失败...</h2>
                   </div>
                   <div className="header-search">
                        <input type='search' placeholder='药品/症状/品牌' autoComplete='off' readOnly='readonly' className='search-input'/>
                   </div>
               </header>
      			   <div className="bannertop"></div>
                   <div id="outer-qckuj">
                        <Carousel autoplay>
                            <div><img src={require('../../assets/img/banner1.jpg')}/></div>
                            <div><img src={require('../../assets/img/banner2.jpg')}/></div>
                            <div><img src={require('../../assets/img/banner3.jpg')}/></div>
                            <div><img src={require('../../assets/img/banner4.jpg')}/></div>
    						<div><img src={require('../../assets/img/banner5.jpg')}/></div>
                        </Carousel>
                   </div>
      			   <div className="home-class">
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class1.png')} />
      								<span className='classspan-info'>感冒</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class2.png')} />
      								<span className='classspan-info'>妇科</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class3.png')} />
      								<span className='classspan-info'>儿科</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class4.png')} />
      								<span className='classspan-info'>男科</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class5.png')} />
      								<span className='classspan-info'>五官</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class6.png')} />
      								<span className='classspan-info'>高血压</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class7.png')} />
      								<span className='classspan-info'>消化</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class8.png')} />
      								<span className='classspan-info'>鼻炎</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class9.png')} />
      								<span className='classspan-info'>糖尿病</span>
      							</a>
      						</div>
      						<div className="home-col">
      							<a href='javascript:;'>
      								<img src={require('../../assets/img/class10.png')} />
      								<span className='classspan-info'>更多</span>
      							</a>
      						</div>
      			   </div>
      			   <div className='home-store'>
      					<img src={require('../../assets/img/home-store.png')} />
      					<div className="store-info">
      						<h2>111医药馆网上商城
      							<img src={require('../../assets/img/home-store-arro.png')}/>
      							<p className="store-name">1日后到家</p>
      						</h2>
      					</div>
      			   </div>

      			   <div className="toutiao-box">
      					<div className="toutiao_option">
      						<img src={require('../../assets/img/jktt.png')} />
      					</div>
      					<div className="toutiao_option-right">
      						<Carousel vertical dots="false" autoplay>
      							<div><h3>抓住大脑发育黄金期，别让孩子慢人一步！</h3></div>
      							<div><h3>得了糖尿病，饭、菜、肉、汤，先吃哪个？这里有终极答案</h3></div>
      							<div><h3>一套简单的颈部锻炼操，让你的颈椎年轻10岁！</h3></div>
      							<div><h3>春暖花开，过敏性鼻炎高发，一定要记住这些！</h3></div>
      						</Carousel>
      					</div>
      			   </div>
      			   <div className='hotgoods-box'>
      					<h2>热销商品</h2>
      					<div className='hotgoods-list'>
      						<div className="list-goods">


      							<div className='goods-item'>
      								<div>
      									<img src='http://img.zdfei.com//static/image/goods//201806/2cf505d2bd1572d2c6d948531939befc.jpg'/>
      									<p className='item_title'>扬子江 伏立康唑分散片</p>
      									<p className='item_price'>￥1251</p>
      								</div>
      							</div>



      						</div>
      					</div>
      			   </div>
                   <div className='fangan-box'>
                        <h2>健康照顾方案</h2>
                        <ul className="fangan-list-ul">

                        </ul>
                   </div>
            </div>
        )

    }
}


export default Home;
