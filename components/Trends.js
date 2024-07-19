import styles from '../styles/Trends.module.css';
import { useState, useEffect } from 'react'

function Trends() {
    const urlBackEnd = 'http://localhost:3000';
    const [dataTrends, setDataTrends] = useState([]);

    useEffect(() => {
        fetch(`${urlBackEnd}/trends`)
          .then(response => response.json())
          .then(data => {
            if (data) {
              setDataTrends(data.trends);
            }
          });
    
      }, [])
    
    const trends = dataTrends.map((e, i) => {
        return (
            <div key= {i} className={styles.trend}>
                <div className={styles.title}>{e.name}</div>
                <div className={styles.nbtweets}>2 Tweets</div>
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