import styles from '../styles/Signup.module.css';

function Signup() {

    

function setSignUpUsername() {}


    return = (
        <div className={styles.main}>
            <img src='twitterLogo' className={styles.twitterIcon}></img>
            <p className={styles.title}>create your hackatweet account</p>
            <input type="text" placeholder="name" id="username" onChange={(e) => setSignUpSignupFirstname(e.target.value)} value={SignupFirstname} />
            <input type="text" placeholder="name" id="firstname" onChange={(e) => setSignUpUsername(e.target.value)} value={SignUpUsername} />
            <input type="password" placeholder="name" id="firstname" onChange={(e) => setSignupPassword(e.target.value)} value={SignupPassword} />
        </div>
    )

}




export default Signup;
