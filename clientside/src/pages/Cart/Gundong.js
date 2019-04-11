import React , {Component}from 'react';
import './cart.css'

class Gundong extends Component {
    constructor (){
        super();
        this.state = {
            left:0
        }
    }
    changeLeft = () =>{
        var left = this.state.left;
        left = left - 2.6;
        this.setState({
          left: left,
        });
        if(left <= -500){
            this.setState({
              left: 0,
            });
        }
        // console.log(this.state.left);
    }
    componentDidMount(){
        // console.log(store);
        this.interval = setInterval(this.changeLeft,50);
    }

    componentWillUnmount() {
       // 清除定时器
       clearInterval(this.interval);
    }

    render(){
        return(
            <div className='coupon_box'>
                <div className='youhui'>优惠</div>
                <div className='testS'>
                    <div className='dowebokB str_wrap noStop'>
                        <div className='str_move str_origin' style={{left:this.state.left+'px'}}>
                            <span>满99减5、满199减10、满299减15、满399减20、满499减25、满599减30</span>
                            <div className='str_move_clone'>
                                <span>满99减5、满199减10、满299减15、满399减20、满499减25、满599减30</span>
                            </div>
                            <div className='str_move_clone' style={{left:'auto',right:'100%'}}>
                                <span>满99减5、满199减10、满299减15、满399减20、满499减25、满599减30</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lingquan'>
                    去领券
                </div>
            </div>
        )
    }

}

export default Gundong
