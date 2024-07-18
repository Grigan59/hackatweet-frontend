import styles from '../styles/Tweet.module.css';
import {faHeart} from '@fortawesome/free-solid-svg-icons'

function Tweet() {

    return (
        <div className={styles.main}>
            <div className={styles.profil}>
                <Image src="/profil.png"
                    alt="Photo Profil"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%' }}
                />
                <h3>{user.firstname}</h3>
                <p>{user.nickname}</p>
            </div>
            <div className={styles.tweet}>
                <p>{user.nickname}</p>
            </div>
            <FontAwesomeIcon icon={faHeart} />

        </div>
    );
}

export default Tweet;