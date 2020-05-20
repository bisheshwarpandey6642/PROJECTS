import { SUCCESS_REGISTER, FAILED_REGISTER,  SUCCESS_LOGIN,
    FAILED_LOGIN, SET_ERROR,SET_USER, AUTH_USER, CLEAR_ERROR, LOG_OUT, CLEAR_GUEST } from '../Type'


    export default (state, action) => {
        switch(action.type){
            case SET_USER:
                return {
                    ...state,
                    user:action.payload,
                    userAuth:true,
                    errors: null
                }
            case SUCCESS_REGISTER:
            case SUCCESS_LOGIN:
                localStorage.setItem('token' , action.payload.token)
                return {
                    ...state,
                    userAuth:true,
                    errors:null
                }
            case FAILED_REGISTER:
            case FAILED_LOGIN:
            case LOG_OUT:
            case AUTH_USER:
            case CLEAR_GUEST:
                localStorage.removeItem('token')
                return{
                    ...state,
                    guests:null,
                    userAuth:null,
                    user: null,
                    errors: action.payload
                }
            case SET_ERROR:
                return{
                    ...state,
                    errors: action.payload
                }
            
          
            case CLEAR_ERROR:
                return{
                    ...state,
                    errors: null
                }
            default:
                return state
        }
    }