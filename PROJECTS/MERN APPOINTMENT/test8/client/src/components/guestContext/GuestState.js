import React, { useReducer }from 'react'
import GuestContext from './GuestContext';
import axios from 'axios'
import GuestReducer from './GuestReducer';
import{
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    GET_GUEST,
    GUESTS_ERROR,
    CLEAR_EDIT,
    CLEAR_GUEST
} from './Type'


export const GuestState = (props) => {

const initialState = {
    filterGuest: false,
    search: null,
    editAble:null, 
    guests: [],
    errors:null
}
 const [state, dispatch] = useReducer(GuestReducer, initialState);
     

const getGuest = async() => {
    try{
        const res = await axios.get('/guests')
        dispatch({
            type:GET_GUEST,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type:GUESTS_ERROR,
            payload:err.response.msg
        })
    }
}

const addGuest = async (guest) => {
    //guest.id = Date.now()
    const config = {
        'Content-Type':'application/json'
    }
    try{
        // guest.isconfirmed = false
        const res = await axios.post('/guests',guest, config)
        dispatch({
            type: ADD_GUEST,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type:GUESTS_ERROR,
            payload:err.response.msg
        })
    }
   
}

const removeGuest = async (id) => {
   try{
    await axios.delete(`/guests/${id}`)
    dispatch({
        type: REMOVE_GUEST,
        payload: id
    })
   }catch(err){
    dispatch({
        type:GUESTS_ERROR,
        payload:err.response.msg
    })
   }
   
}

const updateGuest = async(guest) => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        const res = await axios.put(`/guests/${guest._id}`, guest, config)
        dispatch({
          type: UPDATE_GUEST,
          payload: res.data
        })
        getGuest()
  
      } catch (err) {
        dispatch({
          type: GUESTS_ERROR,
          payload: err.response
        })
      }
}


const editGuest = (guest) => {
    dispatch({
        type: EDIT_GUEST,
        payload: guest
    })
}

const clearEdit = () => {
    dispatch({
        type: CLEAR_EDIT
       
    })
}




const toggleFilter = () =>{
    dispatch({
        type: TOGGLE_FILTER
    })
}
// console.log(state.filterGuest)

const searchGuest = (guest) => {
    dispatch({
        type:SEARCH_GUEST,
        payload: guest
    })
}

const clearSerach = () => {
    dispatch({
        type:CLEAR_SEARCH,
    
    })
}
const clearGuests = () => {
    dispatch({
      type: CLEAR_GUEST
    })

  }

    return (
       <GuestContext.Provider
       value={{
           guests: state.guests,
           filterGuest:state.filterGuest,
           editAble:state.editAble,
           addGuest,
           removeGuest, 
           updateGuest,
           editGuest,
           getGuest,
           clearEdit,
           search:state.search,
           toggleFilter,
           searchGuest,
           clearSerach,
           clearGuests
           
       }}
    >{props.children}</GuestContext.Provider>
    );
}

export default GuestState
