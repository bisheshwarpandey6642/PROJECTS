import React, {useContext, useEffect} from 'react'
import AuthContext from  '../../components/guestContext/authContext/authContext'
import GuestForm from '../guests/GuestForm'
import GuestCounter from '../guests/GuestCounter'
import GuestFilter from '../guests/GuestFilter'
import Guests from '../guests/Guests'


const Home = () => {
  const {getUser} = useContext(AuthContext)
  useEffect(() => {
    getUser()
     //eslint disabled
  }, [])
  return (
    <div className="app-container">
      <div className="main">
        <div className="filter">
          <GuestFilter />
     
        </div>
        <GuestForm />
        <GuestCounter />
      </div>
      <Guests />
    </div>
  )
}

export default Home
