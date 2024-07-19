import styles from '../styles/Login.module.css';
import Image from 'next/image';
import background from '../public/background.png'; 
import twitterIcon from '../public/twitter-icon-white-transparent.png';
import { useState} from 'react'
import { useDispatch } from 'react-redux';
import {logInUser} from '../reducers/user'
import {useRouter} from 'next/router'
import Signup from './Signup';

function Login() {
    const dispatch = useDispatch();
    const router = useRouter()

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const [IsSignUpVisible, setIsSignUpVisible] = useState(false);

     function showSignup() {
        setIsSignUpVisible(!IsSignUpVisible);
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
                console.log(data.token.payload)
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
                <img src='/twitterLogo.png' className={styles.backgroundIcon} alt='Twitter Icon' />
            </div>
        <div className={styles.loginContainer}>

            <div className={styles.signUpContainer}>
                <h1 className={styles.title}>See what's happening</h1>
                <h2 className={styles.underTitle}>Join hacketweet today.</h2>
                <button id="signup" onClick={showSignup}>Sign up</button>
                {IsSignUpVisible && <Signup/>}
            </div>
                
                <div className={styles.signInContainer}>
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
        </div>
    );
}

export default Login;
