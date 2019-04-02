import React, {Component} from 'react';

class LoginWrapper extends Component {
    constructor(){
        super();
        this.state = {
            showId: 0
        }
    }

    loginType = (e)=>{
        // console.log(this.refs.logintype.children)
        // console.log(this.refs.loginCon.children[2].className);
        for(var i = 0; i < this.refs.logintype.children.length; i++){
            this.refs.logintype.children[i].children[0].className = '';
        }
        e.target.className = 'active';
        for(var i = 0; i < this.refs.logintype.children.length; i++){
            if(this.refs.logintype.children[i].children[0].classList.contains('active')){
                this.setState({
                    showId: i
                });
            }
        }
    }

    componentDidMount(){
        // console.log(this.props)
        console.log(this.refs.loginwrapper);
        if(this.props.isshow){
            this.refs.loginwrapper.style.display = 'block';
        }else{
            this.refs.loginwrapper.style.display = 'none';
        }
    }

    render(){
        return (
            <div className="login_wrapper" ref="loginwrapper">
                <header>
                    <span className="header_left">
                        <img src={require('../../assets/img/back.png')} alt=""/>
                    </span>
                    <span className="header_right">
                        <a href="javscript:;">客服</a>
                    </span>
                </header>
                <section>
                    <h2 className="login_title">
                        <ul onClick={this.loginType} ref="logintype">
                            <li><a href="javascript:;" className="active">验证码登录</a></li>
                            <li><a href="javascript:;">密码登录</a></li>
                        </ul>
                    </h2>
                    <div className="login_con" style={{display: this.state.showId == 0 ? 'block' : 'none'}}>
                        <ul>
                            <li><span>手机号</span><input type="text" placeholder="请输入您的手机号"/><a href="javscript:;" className="sendmsg">发送验证码</a></li>
                            <li><span>图文验证码</span><input type="text" placeholder="图文验证码"/><a href="javascript:;" className="yzm"></a></li>
                            <li><span>短信验证码</span><input type="text" placeholder="短信验证码"/></li>
                        </ul>
                        <div className="login_btn">
                            <a href="javascript:;">确认</a>
                        </div>
                        <div className="zcmsg">
                            未注册的手机号验证后将<b>自动注册</b>111医药馆账号且代表您已同意<a href="javacsript:;">《111医药馆用户注册协议》</a>
                        </div>
                    </div>
                    <div className="login_con1" style={{display: this.state.showId == 1 ? 'block' : 'none'}}>
                        <ul>
                            <li><span>账号</span><input type="text" placeholder="手机号/昵称/邮箱"/></li>
                            <li><span>密码</span><input type="password" placeholder="登录密码"/></li>
                        </ul>
                        <div className="login_btn">
                            <a href="javascript:;">登录</a>
                        </div>
                        <div className="login_msg">
                            <a href="javascript:;">新用户注册</a>
                            <a href="javascript:;">忘记密码?</a>
                            <span></span>
                        </div>
                    </div>
                    <div className="ortherway">
                        <a href="javascript:;">其他登录方式</a>
                    </div>
                    <div className="login_cont">
                        <a href="javascript:;">
                            <img src={require('../../assets/img/otherway4.png')} alt=""/>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}


export default LoginWrapper;