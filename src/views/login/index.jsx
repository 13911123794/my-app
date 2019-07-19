import React, { Component } from 'react'
import '../../static/css/login.scss'
import request from '../../utils/request'
import Cookeis from 'js-cookie'
export default class Login extends Component {
    state={
        time:3,
        checkCodeBtn:true,
        tip:'获取验证码',
        phone:'',
        password:'',
        checkcode:''
    }
    render() {
        let {checkCodeBtn,tip,phone,password,checkcode} = this.state
        return (
            <div className='wrap loginWrap'>
                <div className='container'>
                <div className='loginWrap-left'>
                    <h2>Welcome</h2>
                    <p>赚赚金融 开创信贷“1+N”模式的综合互联网金融服务共享平台</p>
                </div>
                <div className='loginWrap-right'>
                    <div className='loginbox'>
                        <dl className='login-logo'>
                            <dt className='iconfont iconzhuan logo-icon'></dt>
                            <dd>赚赚金融娶到管理系统</dd>
                        </dl>
                        <ul>
                            <li>
                                <input type="text" placeholder='
                                请输入手机号' value={phone} 
                                onChange={e=>this.setState({phone:e.target.value})}/>
                            </li>
                            <li>
                                <input type="password" placeholder='
                                请输入密码'  value={password}
                                onChange={e=>this.setState({password:e.target.value})}/>
                            </li>
                            <li>
                                <input type="text" placeholder='请输入验证码' value={checkcode}
                                onChange={e=>this.setState({checkcode:e.target.value})}/>
                                <span className={`checkcodebtn ${
                                    !checkCodeBtn?'active':''
                                }`}
                                onClick={this.checkcode}>{tip}</span>
                            </li>
                        </ul>
                        <button onClick={this.login} className='loginbtn'>登录</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    login=()=>{
        let {history} = this.props;
        let {phone,password,checkcode} = this.state;
        request.post("/api/login",{
            phone,password,checkcode,
        }).then(data=>{
            console.log(data)
            let {code,message} = data
            if(code){
                alert(message)
            }else{
                console.log(data.sessionId);
                Cookeis.set('sessionid',data.sessionId,{
                    expires:5
                })
                history.push('/home')
            }
        })
    }
    checkcode=()=>{
        let {checkCodeBtn,time} = this.state
        this.setState({
            checkCodeBtn:false,
            tip:`${time}秒后获取`
        })
        this.timer = setInterval(()=>{
            time--;
            if(time <= 0){
                
                request.get('/api/checkCode').then(data=>{
                    this.setState({tip:data.Verification,
                    checkCodeBtn:true,
                    time:3
                })
                })
                clearInterval(this.timer);
                return;
            }
            this.setState({
                time:time,
                tip:`${time}秒后获取`
                // checkCodeBtn:true
            })
        },1000)
        
    }
}
