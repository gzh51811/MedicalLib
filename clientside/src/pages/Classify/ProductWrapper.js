import React, {Component} from 'react';

import ContTitle from './ContTitle';
import ContContent from './ContContent';

class ProductWrapper extends Component {
	constructor(){
		super();
	}
	
	render(){
		return (
			<div className="productwrapper">
				<div className="classcont">
					<ContTitle/>
					<ContContent/>
				</div>
			</div>
		);
	}
}

export default ProductWrapper;