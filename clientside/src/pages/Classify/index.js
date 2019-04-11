import React, {Component} from 'react';

import './classify.css';

import ProductWrapper from './ProductWrapper';

import axios from 'axios';

class Classify extends Component {
	constructor(){
		super();
		this.state = {
			navs: [],
			nav_cont: [],
			activeId: 0,
			currentTop: 0
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
			// console.log(this.state.navs)
		});
	}

	activeNav = (idx)=>{
		this.setState({
			activeId: idx
		},()=>{
			this.refs.navs.style.left = -idx * ((375-320)/4) + 'px';
			var pw = document.querySelector('.productwrapper');
			// console.log(pw)
			window.scrollTo(0, pw.children[idx].offsetTop - 104)
		});
	}

	scrollChangeActiveId = (i)=>{
		this.setState({
			activeId: i
		},()=>{
			this.refs.navs.style.left = -i * ((375-320)/4) + 'px';
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
					<ul ref="navs">
					{
						this.state.navs.map((nav,idx)=>{
							return <li key={nav.pid}>
								<a href="javascript:;" className={this.state.activeId==idx?'active':''} onClick={this.activeNav.bind(this,idx)}>
									{nav.name}
								</a>
							</li>
						})
					}
					</ul>
				</div>
				<ProductWrapper navs={this.state.navs} scrollChangeActiveId={this.scrollChangeActiveId}/>
			</div>
        );
    }
}


export default Classify;
