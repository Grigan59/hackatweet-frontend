import styles from '../styles/Lasttweets.module.css'
import Tweet from './Tweet';
import { useState, useEffect } from 'react'

function Lasttweets() {
  const urlBackEnd = 'http://localhost:3000';
  const [dataTweets,setDataTweets]=useState([]);

  useEffect(() => {
    fetch(`${urlBackEnd}/tweets`)
      .then(response => response.json())
      .then(data => {
        /* console.log(data.tweets) */
        if (data.result){
          setDataTweets(data.tweets);
        }
      });

  }, [])

  const tweets = dataTweets.map((e,i)=> {
    return <Tweet key={i} firstname={e.user.firstname} nickname={e.user.nickname} message={e.message}/>
  })

  return (
    <div>
      {tweets}
    </div>
  );
}

export default Lasttweets;