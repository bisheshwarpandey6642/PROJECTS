import React, {useReducer} from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import setToken from '../../../utils/setToken'
import authReducer from './authReducer'
    import { SUCCESS_REGISTER, FAILED_REGISTER,  SUCCESS_LOGIN,
        FAILED_LOGIN, SET_ERROR,SET_USER,AUTH_USER, CLEAR_ERROR, LOG_OUT} from '../Type'
export const AuthState = (props) => {
    const initialState={
        user:null,
        userAuth:null,
        errors:null
    }
    const [state, dispatch]= useReducer(authReducer,initialState)
    
    const getUser = async() => {
        if(localStorage.token){
            setToken(localStorage.token)
          }
          try{
            const res = await axios.get('/auth')
            dispatch({
             type: SET_USER,
             payload: res.data 

            })
          }catch (err)
          {
            dispatch({
                type: AUTH_USER,
                payload: err
             
            })
          }
    }
    const registerUser = async userData => {
  const config = {
      header: {
          'Content=Type':'application/json'
      }
    }
      try {
          const res = await axios.post('/register', userData, config)
          dispatch({
            type: SUCCESS_REGISTER,
            payload: res.data
          })

      }catch(err){
           dispatch({
               type:FAILED_REGISTER,
               payload:err.response.data
           })
      }

    
    }


    const loginUser = async userData => {
        const config = {
            header: {
                'Content=Type':'application/json'
            }
          }
            try {
                const res = await axios.post('/auth', userData, config)
                dispatch({
                  type: SUCCESS_LOGIN,
                  payload: res.data
                })
      
            }catch(err){
                 dispatch({
                     type:FAILED_LOGIN,
                     payload:err.response.data
                 })
            }
      
          
          }
      


          const logout = () =>
          {
              dispatch({
                  type:LOG_OUT
              })
          }



    const setError = err =>
    {
        dispatch({
         type:SET_ERROR,
         payload:err
        })
    }


    const clearError = err =>
    {
        dispatch({
         type:CLEAR_ERROR
         
        })
    }

    return (
    <AuthContext.Provider value={{
        user: state.user,
        userAuth:state.userAuth,
        errors:state.errors,
        getUser: getUser,
        clearError,
        logout,
        setError,
        registerUser,
        loginUser
    }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthState