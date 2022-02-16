function isLogin(){
    var token = localStorage.getItem('token')
    if(token){
        if (token !== ''){
            return true
        }else{
            return false
        }
    }
    return false
}

export {isLogin}