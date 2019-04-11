import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ProductWrapper extends Component {
	constructor(){
		super();
	}

	componentDidMount(){
		window.onscroll = (e)=>{
			// console.log(e);
			// console.log(this.refs.navslist);
			// console.log(window.scrollY)
			for(var i = 0; i < this.refs.navslist.children.length; i++){
				// console.log(this.refs.navslist.children[i].offsetTop);
				if(window.scrollY >= this.refs.navslist.children[i].offsetTop - 104 && window.scrollY < this.refs.navslist.children[i].offsetTop + this.refs.navslist.children[i].offsetHeight - 104){
					this.props.scrollChangeActiveId(i)
				}
			}
		}
	}

	handleClick = (pid, e)=>{
		console.log(this.props)
		console.log(pid)
		this.props.history.push({
			pathname: '/medicallist',
			search: 'pid=' + pid
		})
	}

	render(){
		return (
			<div className="productwrapper" ref="navslist">
			{
				this.props.navs.map(nav=>{
					return <div className="nav_cont" key={nav.pid}>
						{
							nav.plist.map(nav_con=>{
								return	<div className="classcont" key={nav_con.pid}>
									<h2 className="conttitle"><img src={'http://img.zdfei.com/'+nav_con.imgs} alt=""/></h2>
									<ul className="contcontent">
									{
										nav_con.plist.map(ul_con=>{
											return <li key={ul_con.pid} onClick={this.handleClick.bind(this,ul_con.pid)}>
												<a href="javascript:;">{ul_con.name}</a>
											</li>
										})
									}
									</ul>
								</div>
							})
						}
					</div>
				})
			}

			</div>
		);
	}
}

ProductWrapper = withRouter(ProductWrapper);
export default ProductWrapper;
