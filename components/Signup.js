import styles from '../styles/Signup.module.css';

function Signup() {
//logo
//create your hackatweet account
//name
//username
//password
//btn : Sign up 

function setSignUpUsername() {}

    return = (
        <div className={styles.main}>
            <img src='twitterLogo' className={styles.twitterIcon}></img>
            <p className={styles.title}>create your hackatweet account</p>
            <input type="text" placeholder="name" id="username" onChange={(e) => setSignUpUsername(e.target.value)} value={SignUpUsername} />
        </div>
    )

}




export default Signup;
