import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import GuestState from './components/guestContext/GuestState'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import AuthState from './components/guestContext/authContext/authState'
import PrivateRoutes from './components/pages/routes/PrivateRoutes'
import setToken from './utils/setToken'

if(localStorage.token){
  setToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
   <GuestState>
     <Router>
    <div >
      <Navbar />
      <Switch>
        <PrivateRoutes exact path ='/' component={Home} />
        <Route exact path ='/register' component={Register} />
        <Route exact path ='/login' component={Login} />
      </Switch>
    </div>
    </Router>
    </GuestState>
    </AuthState>   
  );
}

export default App;
