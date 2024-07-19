import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import {faHeart} from '@fortawesome/free-solid-svg-icons'

function Tweet(props) {

    const message = props.message;
    const dataMessage = message.split(' ').map(word=>{
        if (word[0] === '#') {
            return <span>word</span>;
        }
        else {
            return word;
        }
    })

    /* console.log(...dataMessage) */

    return (
        <div className={styles.main}>
            <div className={styles.profil}>
                <Image src="/profil.png"
                    alt="Photo Profil"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%' }}
                />
                <h3>{props.firstname}</h3>
                <p>{props.nickname}</p>
            </div>
            <div className={styles.message}>
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default Tweet;