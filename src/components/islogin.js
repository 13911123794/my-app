import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userAction from '../store/user/user.action'
const islogin = (Home)=>{ //判断是否登录 
    class isLogin extends React.Component{
        state = {
            loginOpen:false
        }
        render(){
            let {loginOpen} = this.state
            return loginOpen && <Home {...this.props}/>
        }
        componentDidMount(){
            this.props.getuserInfo(this)
        }
    }
    return connect(
        (state)=>state.user,
        dispatch=>bindActionCreators(userAction,dispatch)
    )(isLogin)
}

export default islogin