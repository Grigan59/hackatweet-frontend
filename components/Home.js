import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Login from './Login'
import Lasttweets from './Lasttweets'
import Trends from './Trends'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {logOutUser} from '../reducers/user'
import {useRouter} from 'next/router'

function Home() {
  const dispatch = useDispatch();
  const router = useRouter()

  const urlBackEnd = 'http://localhost:3000';
  const [newTweet, setNewTweet] = useState('');
  const [userInfos, setUserInfos] = useState({});
  const user = useSelector((state) => state.user.value);

  const addTweet = async (token, message) => {
    const listeTrends = [];
    message.split(' ').map(word => {
      if (word[0] === '#') {
        listeTrends.push(word.toLowerCase());
      }
    });

    for (const element of listeTrends) {
      const response = await fetch(`${urlBackEnd}/trends/%23${element.slice(1)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json();
    }

    fetch(`${urlBackEnd}/tweets/new/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message,
        trends: listeTrends,
      })
    }).then(response => response.json())
      .then(data => {
        loadTweets();
        loadTrends();
        setNewTweet('');
      });
  }

  const [dataTrends, setDataTrends] = useState([]);
  console.log(dataTrends)
  const loadTrends = () => {
    fetch(`${urlBackEnd}/trends`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setDataTrends(data.trends);
        }
      });
  }

  const [dataTweets, setDataTweets] = useState([]);
  const loadTweets = () => {
    fetch(`${urlBackEnd}/tweets`)
      .then(response => response.json())
      .then(data => {
        if (data.result){
          setDataTweets(data.tweets);
        }
      });
  }

  useEffect(() => {
    loadTrends();
    loadTweets();
    fetch(`${urlBackEnd}/users/${user.token}`)
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          setUserInfos({
            firstname: data.user.firstname,
            nickname: data.user.nickname,
          });
        }
        else {
          setUserInfos({
            firstname: '',
            nickname: ''
          });
        }
      });

  }, [])

  function handlelougout(token){
    router.push('/Login')
    dispatch(logOutUser(token))
  }

  return (
    <div className={styles.main}>
      <div className={styles.leftfield}>
        <Image src="/twitterLogo.png"
          alt="Logo Twitter"
          width={50}
          height={50}
          style={{ transform: "rotate(180deg)" }}
        />
        <div className={styles.menu}>
          <div className={styles.profil}>
            <Image src="/profil.png"
              alt="Photo Profil"
              width={50}
              height={50}
              style={{ borderRadius: '50%' }}
            />
            <div className={styles.profilfield}>
              <h3>{userInfos.firstname}</h3>
              <p>{userInfos.nickname}</p>
            </div>
          </div>
           <button onClick={() => handlelougout(user.token)} className={styles.profilfield} >Logout</button>       {/*bouton LOGOUT ! */}
        </div>
      </div>
      <div className={styles.centerfield}>
        <h2 className={styles.title}>Home</h2>
        <div className={styles.inputfield}>
          <p>What's up?</p>
          <input type="text" maxLength="280" className={styles.newtweet} onChange={(e) => setNewTweet(e.target.value)} value={newTweet} placeholder='New Message' />
        </div>
        <div className={styles.validfield}>
          <p>{newTweet.length} /280</p>
          <button onClick={() => addTweet(user.token, newTweet)}>Tweet</button>
        </div>
        <Lasttweets dataTweets={dataTweets} />
      </div>
      <div className={styles.rightfield}>
        <h2 className={styles.title}>Trends</h2>
        <Trends dataTrends={dataTrends} />
      </div>
    </div>
  );
}

export default Home;
