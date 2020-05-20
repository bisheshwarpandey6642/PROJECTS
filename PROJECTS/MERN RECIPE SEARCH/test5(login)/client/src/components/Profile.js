import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import './profile.css'
const Profile = (props)=>{
    const [userdata,setUserData] = useState({
        name:"loading",
        picture:"",
        content:"hello"
    })
    useEffect(()=>{
        if(props.user){
            setUserData({
           name:props.user.username,
           picture:props.user.picture,
           content:props.user.content
       })
        }
       
    },[])
    if(!props.user){
        props.history.push('/')
    }
    return (
        <div id="card">
	<h1>{userdata.name}</h1>
	<div class="image-crop">
		<img id="avatar" src={userdata.picture} style={{height:170, width: 200}} alt="/"></img>
	</div>
	<div id="bio">
    <p>Hello, {userdata.name}! GLOPS welcomes you to our website. </p>
	</div>
	<div id="buttons">
		<button>VEGAN</button>
		<button id="msg">NON-VEG</button>
	</div>
</div>
    )
}

const mapStateToProps = (state)=>{
   return {
       user:state.auth
   }
}

export default connect(mapStateToProps)(Profile);