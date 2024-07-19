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
        if (data.result){
          setDataTweets(data.tweets);
        }
      });

  }, [])

  return (
    <div>
      <Tweet firstname="test"/>
    </div>
  );
}

export default Lasttweets;