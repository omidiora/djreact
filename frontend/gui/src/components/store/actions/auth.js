import * as actionTypes from './actionTypes';


export const authStart= () =>{
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess= token =>{
    return {
        type:actionTypes.AUTH_Success,
        token:token
    }
}

export const authFail= error =>{
    return {
        type:actionTypes.AUTH_Fail
    }
}

export const authFail= error =>{
    return {
        type:actionTypes.AUTH_Fail,
        error:error
    }
}

export const authLogin= (username , password) =>{
    return dispatch=>{
        dispatch(authStart())
    }
}
