import React, {useContext, useRef} from 'react'
import GuestContext from '../guestContext/GuestContext'
const GuestSearch = () => {
  const { searchGuest, clearSerach } = useContext(GuestContext)
  const searchValue = useRef('')
  const handlechange = e => {
    if (searchValue.current.value !== '') {
      searchGuest(e.target.value)
    } else {
      clearSerach()
    }
  }
  return (
     <div>
      <input ref={searchValue} onChange={handlechange} type="text" placeholder="Search Guest by name..." className="search" />
      <i className="fas fa-search search-icon" />
    </div>
  )
}

export default GuestSearch
