import styles from '../styles/Lasttweets.module.css'
import Tweet from './Tweet';
import { useState, useEffect } from 'react'

function Lasttweets(props) {
  const tweets = props.dataTweets.map((e,i)=> {
    return <Tweet key={i} firstname={e.user.firstname} nickname={e.user.nickname} message={e.message}/>
  })

  return (
    <div>
      {tweets}
    </div>
  );
}

export default Lasttweets;