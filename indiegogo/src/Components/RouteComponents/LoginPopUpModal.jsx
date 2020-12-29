import React, { Component } from 'react';
import styles from './LoginPage.module.css'
import axios from "axios"
import AppContext from "./AppContextProvider"



class LoginPopUpModal extends Component {
    constructor(props){
        super(props)
        this.state ={
            email:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAuthentication  = this.handleAuthentication.bind(this)
    }
    handleChange(e){
        const {value,name} = e.target;
        this.setState({
            [name]: value
        })
    }
    handleAuthentication(){
        const {email,password} = this.state;
        console.log(this.context)
        const {handleAuthentication} = this.context

        handleAuthentication({email,password})
     
     

    }
    render() {
        const {email,password} = this.state;
        return (
            <div className = {styles.container}>
                <div className ={styles.centerdisplay}>
                <h1 className = {styles.header}>Welcome back</h1>
                </div>
                <div className ={styles.centerdisplay}>
                <div className = {styles.subheader}>Log in to Continue</div>
                </div>
              
           
                <div className = {styles.label}>Your Email</div>
                <input  type = "text" name = "email" 
                onChange = {this.handleChange}
                value = {email} placeholder = "Your Email"/>
                
                <div className = {styles.label}>Your Password</div>
                <input  type = "text" name = "password"
                 onChange = {this.handleChange} value = {password} placeholder = "Your Password"/>
                <div>
                <span className = {styles.floatdisplay}>Forgot your Password</span> 
                    </div>
                <button  className = {styles.loginbtn}>LOG IN</button>
                <div className = {styles.option}>OR</div>
            <div className = {styles.bluebtn}>
                
                    <img src = "https://www.flaticon.com/svg/static/icons/svg/174/174848.svg" alt ="logo" height = "30px"/>
               
                <span>CONTINUE WITH FACEBOOK</span>
            </div>
                <br></br>
               
                <div className = {styles.postdetails}>No Posts without your Permission</div>
               <br></br>
               <br></br>
               
                <div className = {styles.signupredirect}>New to Indiegogo? <span className = {styles.signup}>Sign Up</span></div>
            </div>
        );
    }
}
LoginPopUpModal.contextType = AppContext
export default LoginPopUpModal;