import styles from '../styles/Home.module.css';
import logo from 'twitterLogo.png'

function Login() {


    function handlesignup() {
        //show signup
    }

    function handlesignin() {
        //show signin
    }

  return (
    <div>
        <div className={styles.main} >
            <div className={styles.imgContainer}>
                <img alt="background image" src='twitterBackground' className={styles.loginBackground}></img>
                <img src={twitterLogo.png} alt="Main logo" className={styles.twitterIcon} />
            </div>  
            <div className={styles.loginContainer}>
                <img src='logo' className={styles.twitterIcon}></img>
                <h1 className={styles.title}>See what's happening</h1>
                <h2 className={styles.underTitle}>Join hacketweet today.</h2>
                <input type="text" placeholder="name" id="username" onChange={(e) => setSignUpSignupFirstname(e.target.value)} value={SignupFirstname} />
                <input type="text" placeholder="name" id="firstname" onChange={(e) => setSignUpUsername(e.target.value)} value={SignUpUsername} />
                <input type="password" placeholder="name" id="firstname" onChange={(e) => setSignupPassword(e.target.value)} value={SignupPassword} />
                <button id="signup" onClick={() => handlesignup()}>Sign up</button>
                <p className={styles.SigninInvit}>Already have an account ?</p>
                <button id="signup" onClick={() => handleLogin()}>Sign up</button>
            </div>
        </div>
    </div>
  );
}

export default Login;
