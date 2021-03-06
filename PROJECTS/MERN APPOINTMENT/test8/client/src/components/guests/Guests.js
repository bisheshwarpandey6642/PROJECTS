import React, {useContext, useEffect} from 'react'
import GuestContext from '../guestContext/GuestContext';
import Guest from './Guest'

const Guests = () => {
  const { guests, filterGuest, search, getGuest } = useContext(GuestContext)
  useEffect(() => {
    getGuest()
    // esLint
  }, [])
  return (
    <div className="guests">
      { search !== null ? search.map(guest => <Guest key={guest._id} guest={guest} />)
        :guests.filter(guest => !filterGuest || guest.isconfirmed).map(guest => <Guest key={guest._id} guest={guest} />)}
      
    </div>
  );
}
export default Guests
    