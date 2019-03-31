import React, { Component } from 'react';
// import logo from './logo.svg';
import './assets/css/base.css';
import './App.css';

import {HashRouter,NavLink, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Classify from './pages/Classify';
import Counsel from './pages/Counsel';
import Cart from './pages/Cart';
import Mine from './pages/Mine';

class App extends Component {
	constructor(){
        super();

        this.state = {
            navs: [{
                name: 'home',
                text: '首页',
                path: '/home',
                src: require('./assets/img/home1.png')
            },{
                name: 'classify',
                text: '分类',
                path: '/classify',
                src: require('./assets/img/classify.png')
            },{
                name: 'counsel',
                text: '咨询',
                path: '/counsel',
                src: require('./assets/img/counsel.png')
            },{
                name: 'cart',
                text: '清单',
                path: '/cart',
                src: require('./assets/img/cart.png')
            },{
                name: 'mine',
                text: '我的',
                path: '/mine',
                src: require('./assets/img/mine.png')
			}],
			showcon: 'block'
        }
	}
	
	showFooter = (isOk)=>{
		if(isOk){
			this.setState({
				showcon: 'none'
			});
		}
	}

	render(){
		return (
			<div className="App">
				<HashRouter>
					<Switch>
						<Route path="/home" component={Home}/>
						<Route path="/classify" component={Classify}/>
						<Route path="/counsel" component={Counsel}/>
						<Route path="/cart" component={Cart}/>
						<Route path="/mine" component={Mine}/>
						<Redirect to="/home"/>
					</Switch>
					<footer>
						<ul>
						{
							this.state.navs.map(nav=>{
								return (
									<NavLink to={nav.path} key={nav.name} style={{textDecoration: 'none'}}>
										<li>
											<div><img src={nav.src} alt=""/><p>{nav.text}</p></div>
										</li>
									</NavLink>
								)
							})
						}
						</ul>
					</footer>
				</HashRouter>
			</div>
		);
	}
}

export default App;
