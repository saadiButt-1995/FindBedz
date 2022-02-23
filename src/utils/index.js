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

// async function isLogin(){
//     var token = localStorage.getItem('token')
//     var user = localStorage.getItem('user')
//     var user_data = await JSON.parse(localStorage.getItem('user_data'))
//     if(token){
//         if (token !== ''){
//             if(user_data && user){
//                 return true
//             }
//         }
//     }
//     return false
// }
export {isLogin}