import request from '../../utils/request'
import {GETUSERINFO} from '../actionType'
export const getuserInfo = (that)=>{
    return (dispatch)=> request.get('/api/islogin').then(res=>{
        // console.log(res.info)
        dispatch({
            type:GETUSERINFO,
            info:res.info
        })
        that.setState({
            loginOpen:true
        })
    }).catch(res=>{
        if(res.status === 401){
            that.props.history.push('/login')
        }
    })
}