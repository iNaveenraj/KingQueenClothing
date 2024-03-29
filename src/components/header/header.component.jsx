import React from "react";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import './header.styles.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth}  from '../../firebase/firebase.utils'
const Header =({currentUser}) =>(

    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/shop'> CONTACT</Link>
            <Link className='option' to='/shop'> ABOUT US </Link>
            {console.log("Current User : " + currentUser)}
            {
                
                currentUser ?
                 <div className='option' onClick={()=>{auth.signOut()}}>SIGN OUT</div> 
                 :  <Link className='option' to='/SignIn'> SIGN IN </Link> 
            }
           
        </div>
    </div>
);

const mapStateToProps = state =>({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);