import styles from '../styles/Signup.module.css';
import { useState} from 'react'
import { useDispatch } from 'react-redux';
import {logInUser} from '../reducers/user'
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { showModal } from '@fortawesome/free-solid-svg-icons' */

function Signup() {

    //pour distribuer aux reducers
    const dispatch = useDispatch();

    // pour basculer vers une autre page (autre composant)
    const router = useRouter()
    
    // declarations des états (interrogés par d'autres composants)
    const [signupFirstname, setSignupFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignupPassword] = useState('');

    function handleSignup() {
        fetch('https://hackatweet-backend-deon5jdtr-grigans-projects.vercel.app/users/signup', {
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

    function showModal(){
        setIsSignUpVisible(false)
    }


    return  (
    <div className={styles.main}>

        <img src='/twitterLogo.png' className={styles.twitterIcon}/>
        {/* <FontAwesomeIcon onClick={showModal} className={styles.userSection} icon={faXmark} /> */}
        <p className={styles.SignUpTitle}>Create your hackatweet account</p>
        <p></p>
        <input
            className='={'
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

    </div>
    )
}

export default Signup;
