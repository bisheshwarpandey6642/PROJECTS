import React,{ useState, useContext, useEffect }from 'react'
import GuestContext from '../guestContext/GuestContext'

const GuestForm = () => {
  const {addGuest, editAble, updateGuest, clearEdit} = useContext(GuestContext)
  useEffect(()=> {
    if(editAble !== null){
      setGuest(editAble)
    }else{
      setGuest({
        name: '',
        phone:'',
        dietary: 'Non-Veg'
      })
    }
  },[editAble])
  const[guest , setGuest] = useState({
    name: '',
    phone:'',
    dietary: 'Non-Veg'
  })

  // if(editAble !== null){
  //   console.log(editAble)
  // }

const {name , phone , dietary } = guest

const handleChange = e => {
  setGuest({
    ...guest,
    [e.target.name] : e.target.value
  })
}


const onsubmit = e => {
  e.preventDefault()
  if(editAble !== null){
    updateGuest(guest)
    clearEdit()
  }else{
  addGuest(guest)
  setGuest({
    name: '',
    phone:'',
    dietary: 'Non-Veg'
  })
}
}


  return (
    <div className="invite-section">
      <h1>{editAble !== null ? 'UPDATE GUEST INFO.' : 'INVITE GUESTS'}</h1>
      <form onSubmit={onsubmit}>
        <input type="text" placeholder="Name" name="name" value ={name} onChange ={handleChange}/>
        <input type="text" placeholder="Phone" name="phone" value = {phone} onChange ={handleChange} />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">Non-veg
        <input type="radio" name="dietary" value='Non-Veg' checked ={dietary === 'Non-Veg'} onChange ={handleChange} />
            <span className="checkmark"></span>
          </label>
          <label className="container">Vegan
        <input type="radio" name="dietary" value='Vegan'  onChange ={handleChange} checked ={dietary === 'Vegan'}/>
            <span className="checkmark"></span>
          </label>
          <label className="container">Pescetarians
        <input type="radio" name="dietary" value='Pescetarians' onChange ={handleChange} checked ={dietary === 'Pescetarians'}/>
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value={editAble !== null ? 'UPDATE GUEST' : 'INVITE GUESTS'} className="btn" />
        {editAble !== null ? <input onClick={clearEdit} value = "CANCEL" type="button" className="btn clear" /> : null}
      </form>
    </div>
  )
}

export default GuestForm
