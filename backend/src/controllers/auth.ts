
type data = {
    username: string;
    password: string;
}

export default function authController(){
    return async ({username, password}:data) =>{
        if(!username) return
        if(!password) return
    }
}