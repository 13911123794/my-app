//按需加载组件
import islogin from '../components/islogin'
import {Login,Home,HomeIndex,HomeOrder} from '../views/'
// console.log(islogin('abc'))
const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:"/login",component:Login
    },
    {
        path:"/home",component:islogin(Home),//home
        children:[
            {path:'/home/index',component:HomeIndex},//首页
            {path:'/home/order/:name',component:HomeOrder},//订单
            {path:'/home',redirect:'/home/index'}
        ]
    }
]

export default routes