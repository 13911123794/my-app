import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import RouterView from '../../router/routerviews'
import { Layout , Menu} from 'antd';
import '../../static/css/home.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as navAction from '../../store/Nav/nav.action'
const {SubMenu} = Menu
const { Header, Sider, Content } = Layout;
class Homewrap extends Component {
    render() {
        let {routes,data,info,selectedData} = this.props;
        console.log(this.props)
        return (
            <Layout className='homewrap'>
                <Sider>
                    <dl className='userInfo'>
                        <dt>
                            <img src={info.facePhoto} alt=""/>
                        </dt>
                        <dd>
                            北京乐智慧代理
                        </dd>
                    </dl>
                    <div  onClick={this.handleTitle.bind(this,'/home/index','首页')}>
                        <NavLink to='/home/index'>首页</NavLink>
                    </div>
                    <Menu mode="inline">
                        {
                            data.map((item,key)=>{
                            return <SubMenu
                                key={item.name}
                                title={
                                <span>
                                    <i></i>
                                    {item.name}
                                </span>
                                }
                                >
                                {
                                    item.children.map((item,index)=>
                                    <Menu.Item key={item.path}
                                    onClick={this.handleTitle.bind(this,item.path,item.name)}>
                                       <NavLink to={item.path}>{item.name}</NavLink> 
                                    </Menu.Item>
                                    )
                                }
                        </SubMenu>})
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header className='navtop'>
                        {
                            selectedData.map(item=><span style={{marginLeft:20}} key={item.name}>
                            <NavLink to={item.path}>
                                {item.name}
                            </NavLink>
                            <b
                            onClick={this.removeNav.bind(this,item.path)}>&times;</b>
                            </span>)
                        }
                    </Header>
                    <Content>
                        <RouterView routes={routes}/>
                    </Content>
                </Layout>

            </Layout>
        )
    }
    componentDidMount(){  
        console.log(this.props.location)
    }
    handleTitle(path,name){
        this.props.addTopNav(path,name)
    }
    removeNav(path){
        console.log(path)
        this.props.removeNav(path)
    }
}
export default connect(
    state=>{
        return {...state.nav,...state.user}
    },
    dispatch=>bindActionCreators(navAction,dispatch)
)(Homewrap)
