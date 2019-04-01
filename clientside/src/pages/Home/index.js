import React,{Component} from 'react';
import './home.css';
import { Carousel } from 'antd';

class Home extends  Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
               <header className='headers headers-action'>
                   <div className='header-box header-box-action'>
                        <h2>送至  定位失败...</h2>
                   </div>
                   <div className="header-search">
                        <input type='search' placeholder='药品/症状/品牌' autoComplete='off' readOnly='readonly' className='search-input'/>
                   </div>
               </header>
               <div id="outer-qckuj">
                    <Carousel autoplay>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Carousel>
                </div>
            </div>
        )
        
    }
}


export default Home;