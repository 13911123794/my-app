import React from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
function RouterView ({routes=[]}){
    const RedirectS = routes.filter(item=>item.redirect)
    return <Switch>
    {
    routes.map((item,index)=>!item.redirect ? 
         <Route path={item.path} key={index} render={props=>{
            return React.createElement(item.component,{
                ...props,
                routes:item.children
            })
            }}/>:null)
    }
    {
        RedirectS.map((item,key)=><Redirect key={key} from={item.path} to={item.redirect} />)
    }
    
</Switch>
}
export default RouterView