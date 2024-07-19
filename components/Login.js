import styles from '../styles/Login.module.css';
import Image from 'next/image';
import background from '../public/background.png'; 
import twitterIcon from '../public/twitter-icon-white-transparent.png';
import { useState} from 'react'
import { useDispatch } from 'react-redux';
import {logInUser} from '../reducers/user'
import {Home} from './Home'
import {useRouter} from 'next/router'

function Login() {
    const dispatch = useDispatch();
    const router = useRouter()

    const [signupFirstname, setSignupFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignupPassword] = useState('');

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    function handleSignup() {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname:signupFirstname, username: signUpUsername, password: signUpPassword }),
        })
        .then(response => response.json())
        .then(data=> {
            if(data.result){
                dispatch(logInUser(data.token));
                setSignupFirstname(''),
                setSignUpUsername('');
                setSignupPassword('');
            }
        })  
    };

    function handleSignin() {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  username: signInUsername, password: signInPassword }),
        })
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            if(data.result){
                dispatch(logInUser(data.token));
                setSignInUsername('');
                setSignInPassword('');
                router.push('/tweets')
            }
        })
    }

    return (
        <div className={styles.main}>
            <div className={styles.imgContainer}>
                <img src='/twitter-icon-white-transparent.png' className={styles.backgroundIcon} alt='Twitter Icon' />
            </div>
            <div className={styles.loginContainer}>
                <h1 className={styles.title}>See what's happening</h1>
                <h2 className={styles.underTitle}>Join hacketweet today.</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    onChange={(e) => setSignupFirstname(e.target.value)}
                    value={signupFirstname}
                />
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={(e) => setSignUpUsername(e.target.value)}
                    value={signUpUsername}
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => setSignupPassword(e.target.value)}
                    value={signUpPassword}
                />
                <button id="signup" onClick={handleSignup}>Sign up</button>
                <p className={styles.signinInvit}>Already have an account?</p>

                <input
                    type="text"
                    placeholder="username"
                    id="firstname"
                    onChange={(e) => setSignInUsername(e.target.value)}
                    value={signInUsername}
                />

                <input
                    type="text"
                    placeholder="password"
                    id="firstname"
                    onChange={(e) => setSignInPassword(e.target.value)}
                    value={signInPassword}
                />

                <button id="signin" onClick={handleSignin}>Sign in</button>
            </div>
        </div>
    );
}

export default Login;
