import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const Header = (props)=>{
   const rederContect = ()=>{
       switch(props.user){
           case null:
               return <li><a href="/">LOADING.....</a></li>
           case false:  
               return  <li><a href="/auth/google">SIGNIN</a></li> 
               
           default:
                return(
                    <React.Fragment>
                      <li><a href="/api/logout">LOGOUT</a></li>
                      <li><Link to="/profile">PROFILE</Link></li>
                    </React.Fragment>
                )    
       }
   }

    return (
        <div className="navbar-fixed">
         <nav className="nav-extended">
            <div className="nav-wrapper teal">
            <Link to={props.user ? '/profile' : '/'} className="brand-logo left">GLOPS</Link>
            <ul id="nav-mobile" className="right">
               {rederContect()}
            </ul>
            </div>
        </nav>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        user:state.auth
    }
}


export default connect(mapStateToProps)(Header);