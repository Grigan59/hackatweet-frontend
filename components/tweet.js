import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

function Tweet(props) {
    const urlBackEnd = 'https://hackatweet-backend-lake.vercel.app';
    /* const [newLike,setNewLike] = useState(props.dataUser.nbLike); */
    const message = props.dataUser.message;
    const dataMessage = message.split(' ').map((word, i) => {
        if (word[0] === '#') {
            return <span>{word}</span>;
        }
        else {
            return word;
        }
    })

    for(let i = 0; i < dataMessage.length;i++) {
        if (i%2!==0) {
            dataMessage.splice(i,0,' ');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.profil}>
                <Image src="/profil.png"
                    alt="Photo Profil"
                    width={50}
                    height={50}
                    style={{ borderRadius: '50%' }}
                />
                <h3 className={styles.firstname}>{props.dataUser.user.firstname}</h3>
                <p className={styles.nickname}>{props.dataUser.user.nickname} •</p>
                {/* <p className={styles.nickname}>{props.dataUser.date}</p> */}
                <p className={styles.nickname}>{moment(props.dataUser.date).fromNow()}</p>
            </div>
            <div className={styles.message}>
                {/* <p>{props.dataUser.message}</p> */}
                <p>{dataMessage}</p>
            </div>
            <div className={styles.edit}>
                <FontAwesomeIcon icon={faHeart} className={styles.like} style={(props.dataUser.nbLike>0)?{color:'red'}:{color:'white'}} onClick={() => props.like(props.dataUser._id)} />
                <p>{props.dataUser.nbLike}</p>
                {(props.dataUser.user.firstname === props.firstname)&&<FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={() => props.deleteTweet(props.dataUser._id)}/>}
            </div>
        </div>
    );
}

export default Tweet;