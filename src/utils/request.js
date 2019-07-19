import Cookie from 'js-cookie'

const format = (obj)=>{
    return Object.entries(obj).map(item=>
        `${item[0]}=${typeof item[1] ==='object' ? 
        JSON.stringify(item[1]):item[1]}`).join("&")
}
const baseOptions = {
    headers:{
        'content-type':'application/x-www-form-urlencoded;charset=utf-8',
        'authorization':Cookie.get('sessionid')
    }
}
const request = (url,method,data)=>{
    let options = {...baseOptions}
    if(method==='GET'){
        url = `${url}?${format(data) ? '?'+format(data) : ''}`
    }else{
        options.body = format(data)
    }
    options.method = method
    return fetch(url,options).then(response=>{
        if(response.ok){
            return response.json()
        }else{
            return Promise.reject(response)
        }
    })
}

export default {
    get(url,data={}){
        // console.log(url)
        return request(url,"GET",data)
    },
    post(url,data){ 
        // console.log(url,data)
        return request(url,"POST",data)
        
    }
}