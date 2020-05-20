import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test';
import Bell from './Bell.js';
import Profile from './components/Profile';
import {connect} from 'react-redux'
import {fetchUserAction} from './actions/myaction'
function App(props) {
  useEffect(()=>{
     props.fetch_user()
  },[])
  return (
   <BrowserRouter>
     <Header />
     <Route exact path="/" component={Home} />
     <Route path="/bell" component={Bell} />
     <Route path="/profile" component={Profile} />
     <Test />
   </BrowserRouter>
  );
}

const mapDispathToProps = (dispatch)=>{
  return {
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}

export default connect(null,mapDispathToProps)(App);
