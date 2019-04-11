import React,{Component} from 'react';
import './home.css';
import { Carousel ,List, message, Avatar, Spin} from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import InfiniteScroll from 'react-infinite-scroller';



class Home extends  Component{
    constructor(){
        super();
        this.state = {
            data: [],
           loading: false,
           hasMore: true,
           hotlist:[]

        }
    }


  componentDidMount() {
    this.fetchData((res) => {
      this.setState({
        data: res.data,
      });
    });

    // 热门商品渲染
    axios.get('http://localhost:8000/home/hot')
    .then( response => {
      response.data[0].length = 10;
      var arr = Array.from(response.data[0]);
      this.setState({
        hotlist: [...arr],
      });
    })

  }
  fetchData = (callback) => {
          axios.get('http://localhost:8000/home/care')
     .then(function (response) {
       callback(response);
     })
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 8) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
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

                  {
                    this.state.hotlist.map(item=>{
                      return <div className='goods-item' key={item.goods_id}>
          								<div>
          									<img src={'http://img.zdfei.com/'+item.abbreviation_picture}/>
          									<p className='item_title'>{item.short_name}</p>
          									<p className='item_price'>￥{item.price}</p>
          								</div>
          							</div>
                    })
                  }




      						</div>
      					</div>
      			   </div>
                   <div className='fangan-box'>
                        <h2>健康照顾方案</h2>
                        <div className="fangan-list-ul">
                            <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta/>
                <div className="care-item">
                    <img src={item.imgUrl}/>
                </div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
                        </div>
                   </div>
            </div>
        )

    }
}


export default Home;
