import{
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
    GET_GUEST,
    GUESTS_ERROR,
    CLEAR_GUEST
} from './Type'

export default (state, { type, payload }) => {
    switch (type) {
    case GET_GUEST:
      return{
        ...state,
         guests:payload
      }
    case ADD_GUEST:
      return{
          ...state,
          guests:[...state.guests, payload]

       }

       case REMOVE_GUEST:
         return {
           ...state,
           guests: state.guests.filter(guest => guest._id !== payload)
         }
        
        case UPDATE_GUEST:
          return{
            ...state,
            guests : state.guests.map(guest => guest._id === payload.id ? payload: guest)
          }
      case EDIT_GUEST:
        return{
          ...state,
          editAble:payload
        }

      case CLEAR_EDIT:
        return{
          ...state,
          editAble: null
        }  
      case TOGGLE_FILTER:
        return {
          ...state,
          filterGuest: !state.filterGuest
        }
        case GUESTS_ERROR:
          return{
            ...state,
            guests:[],
            errors: payload
          }
        case SEARCH_GUEST:
          const regex = new RegExp(`${payload}`, 'gi')
          return {
            ...state,
            searchGuest: state.guests.filter(guest => guest.name.match(regex))
          }
        case CLEAR_SEARCH:
          return {
            ...state,
            searchGuest: null
          }
          case CLEAR_GUEST:
            return {
              ...state,
              // guestFilter: false,
              // editGuest: null,
              guests:[]
              // errors: payload
            }
      default:
        return state
    }
  }