
//出口

import React from 'react'
import loabable from 'react-loadable'

function Loading(){
    return <div>loading...</div>
}

export const Login = loabable({
    loading:Loading,
    loader:()=>import("./login/index.jsx")
})

export const Home = loabable({
    loading:Loading,
    loader:()=>import('./home/index.jsx')
})

export const HomeIndex = loabable({
    loading:Loading,
    loader:()=>import('./home/components/index.jsx')
})

export const HomeOrder = loabable({
    loading:Loading,
    loader:()=>import('./home/components/order.jsx')
})