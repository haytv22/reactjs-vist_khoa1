import axios from './axiot.cusstum';

const CreateUser =(fullName,email,password,phone)=>{
    const URLBACKEND = "api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone,
    }
    return axios.post(URLBACKEND, data)
}

const FetchAllUserAPI = ()=>{
    const URLBACKEND = "api/v1/user";
    return axios.get(URLBACKEND)
}
export{
    CreateUser,FetchAllUserAPI
}