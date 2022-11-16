import React, { useState } from "react";
import * as Components from './LoginElements.js';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

function AppLog({ setToken }) {
    const [signIn, toggle] = useState(true);

    //Custom hooks for login
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();


    const [regNo, setRegNo] = useState();
    const [block, setBlock] = useState();
    const [room, setRoom] = useState();
    const [gender, setGender] = useState();
    const [emailsignup, setEmailSignup] = useState();
    const [passsignup, setPassSignup] = useState();
    const [passconfirmsignup, setPassConfirmSignup] = useState();

    // function checkPass(id) {
    //     var pass = document.getElementById(id);
    //     // console.log(pass.value);
    //     // console.log(id);
    //     var password = pass.value;
    //     var passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //     if (!passReg.test(password)) {
    //       pass.classList.add('invalid');
    //     }
    //   }


    function handleLoginEmail(event) {
        setEmail(event.target.value);
    }
    function handleLoginPass(event) {
        setPass(event.target.value);
    }

    //Custom hooks for signup


    function handleRegNo(event) {
        setRegNo(event.target.value);
    }
    function handleBlock(event) {
        setBlock(event.target.value);
    }
    function handleRoom(event) {
        setRoom(event.target.value);
    }
    function handleGender(event) {
        setGender(event.target.value);
    }

    function handleSignupEmail(event) {
        setEmailSignup(event.target.value);
    }
    function handleSignupPass(event) {
        setPassSignup(event.target.value);
    }
    function handleConfirmSignupPass(event) {
        setPassConfirmSignup(event.target.value);
    }



    const loginUser = (event) => {

        event.preventDefault(event);
        const formData = new FormData();
        formData.append("email", event.target.emaillogin.value);
        formData.append("password", event.target.passwordlogin.value);
        // console.log(formData);
        // console.log(event.target.emaillogin.value);
        // console.log(event.target.passwordlogin.value);
        axios.post('http://localhost/laundashphp/loginphp.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            response = response.data;
            // console.log(response);
            if (response.token === "invalid") {
                alert("Invalid Credentials");
                setEmail("");
                setPass("");
            } else {
                // console.log(response);
                setToken(response);
                // console.log(response.userid);
            }
        });
    }

    const userSignup = (event) => {
        event.preventDefault(event);
        // console.log("User Signup");
        // console.log(event.target);
        const formData = new FormData();
        formData.append("regNo", event.target.regNo.value);
        formData.append("block", event.target.block.value);
        formData.append("room", event.target.room.value);
        formData.append("gender", event.target.gender.value);
        formData.append("email", event.target.email.value);
        formData.append("password", event.target.password.value);
        axios.post('http://localhost/laundashphp/signupphp.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            response = response.data;
            // console.log(response);
            if (response.token === "invalid") {
                alert("Invalid Credentials");
                setEmailSignup("");
                setPassSignup("");
                setPassConfirmSignup("");
                setRoom("");
                setBlock("");
                setRegNo("");
                setGender("");
            } else {
                setToken(response);
            }
        });
    }


    return (
        <Components.BodyContainer>
            <Components.Container>

                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={userSignup}>
                        <Components.H1SignUp><LocalLaundryServiceIcon/>LaundrEasy</Components.H1SignUp>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Registration Number' id="regNo" value={regNo} onChange={handleRegNo} required />
                        <Components.Input type='text' placeholder='Block' id="block" value={block} onChange={handleBlock} required />
                        <Components.Input type='text' placeholder='Room Number' id="room" value={room} onChange={handleRoom} required />
                        <Components.Input type='text' placeholder='Gender' id="gender" value={gender} onChange={handleGender} required />
                        <Components.Input type='email' placeholder='Email' id="email" value={emailsignup} onChange={handleSignupEmail} required />
                        <Components.Input type='password' placeholder='Password' id="password" autocomplete="new-password" value={passsignup} onChange={handleSignupPass} required  />
                        <Components.Input type='password' placeholder='Confirm Password' autocomplete="new-password" id="passwordconfirm" value={passconfirmsignup} onChange={handleConfirmSignupPass} required />
                        <Components.Button type="submit">Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.H1SignIn><LocalLaundryServiceIcon/> LaundrEasy</Components.H1SignIn>
                    <Components.Form onSubmit={loginUser}>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='text' placeholder='Registration Number' autocomplete="username" id="emaillogin" value={email} onChange={handleLoginEmail} required />
                        <Components.Input type='password' placeholder='Password' autocomplete="current-password" id="passwordlogin" value={pass} onChange={handleLoginPass} required />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button type="submit" >Sign In</Components.Button>
                    </Components.Form>

                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To stay connected with us, please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, VITian!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </Components.BodyContainer>
    )
}
AppLog.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default AppLog;