import {ADDTOPNAV,GETNAVDATA,REMOVETOPNAV} from '../actionType'

import data from '../../mock/nav'
const nav = (state={
    data,
    selectedData:[
        {   //默认显示首页
            path:"/home/index",
            name:'首页'
        }
    ],
    curdata:[]
},action)=>{
    // console.log(action)
    switch(action.type){
        case GETNAVDATA:
            return state;
        case ADDTOPNAV:
        {
            let {path,name} = action
            let newState = {...state,selectedData:[...state.selectedData]}
            // console.log(newState)
            let index = newState.selectedData.findIndex(item=>item.path===path)
            if(index!==-1){
                let target = newState.selectedData[index]
                newState.selectedData.splice(index,1)
                newState.selectedData.unshift(target)
            }else{
                newState.selectedData.unshift({
                    path,
                    name
                })
            }
            return newState;
        }
        case REMOVETOPNAV:
            {
                let {path} = action;
                let newState = {...state,selectedData:[...state.selectedData]}
                let index = newState.selectedData.findIndex(item=>item.path===path)
                newState.selectedData.splice(index,1)
                return newState;
            }
            
        default :
            return state;
    }
    return state
}

export default nav