import styles from '../styles/Lasttweets.module.css'
import Tweet from './Tweet';

function Lasttweets(props) {
  const tweets = props.dataTweets.map((e, i) => {
    return <Tweet key={i} dataUser={e} deleteTweet={props.deleteTweet} like={props.like} firstname={props.firstname}/>
  });

  return (
    <div className={styles.container}>
      {tweets}
    </div>
  );
}

export default Lasttweets;