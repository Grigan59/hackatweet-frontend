import styles from '../styles/Trends.module.css';

function Trends(props) {
    const trends = props.dataTrends.map((e, i) => {
        return (
            <div key= {i} className={styles.trend}>
                <div className={styles.title}>{e.name}</div>
                <div className={styles.nbtweets}>{e.nbTweets} {(e.nbTweets>1)?"Tweets":"Tweet"}</div>
            </div>
        );
    })

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {trends}
            </div>
        </div>
    );
}

export default Trends;