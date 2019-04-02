import React, {Component} from 'react';

import './classify.css';

import ProductWrapper from './ProductWrapper';

import axios from 'axios';

class Classify extends Component {
	constructor(){
		super();
		this.state = {
			navs: []
		};
	}


	componentWillMount(){
		axios.get('http://localhost:8000/classify').then((res)=>{
			// console.log(res.data[0]);
			res.data[0].length = 5;
			var arr = Array.from(res.data[0]);
			this.setState({
				navs: [...arr]
			})
			console.log(this.state.navs)
		});
	}

    render(){
        return (
            <div className="classify">
				<header>
					<div className="seaInput">
						<input type="text" placeholder="药品、品牌或症状"/>
						<span></span>
					</div>
				</header>
				<div className="level_nav">
					<ul>
						<li><a href="javascript:;" className="active">人群找药</a></li>
					</ul>
				</div>
				<ProductWrapper/>
			</div>
        );
    }
}


export default Classify;
