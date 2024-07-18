import styles from '../styles/Home.module.css';
//importer images depuis dossier public

function Login() {


    function handlesignup() {}

    function handlesignin() {}

    
  return (
    <div>
        <pageContainer className={styles.main} >
            <div className={styles.imgContainer}>
                <img src='twitterBackground' className={styles.loginBackground}></img>
                <img src='twitterLogo' className={styles.twitterIcon}></img>
            </div>  
            <div className={styles.loginContainer}>
                <img src='twitterLogo' className={styles.twitterIcon}></img>
                <h1 className={styles.title}>See what's happening</h1>
                <h2 className={styles.underTitle}>Join hacketweet today.</h2>
                <button id="signup" onClick={() => handlesignup()}>Sign up</button>
                <p className={styles.SigninInvit}>Already have an account ?</p>
                <button id="signup" onClick={() => handlesignin()}>Sign up</button>
            </div>
        </pageContainer>
    </div>
  );
}

export default Login;
