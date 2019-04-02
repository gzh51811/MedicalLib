import React, {Component} from 'react';

import LoginWrapper from './LoginWrapper'
// css
import './mine.css';


class Mine extends Component {
    constructor(){
        super();
        this.state = {
            isshow: false
        }
    }
    componentWillMount(){
        // console.log(document.cookie)
        if(!document.cookie){
            this.setState({
                isshow: true
            });
        }
    }

    render(){
        return (
            <div className="mine">
                <LoginWrapper isshow={this.state.isshow}/>
            </div>
        );
    }
}


export default Mine;