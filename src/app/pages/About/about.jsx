import React from 'react'
import styles from './style.css'

const Home = (props) => (
	<div className={styles.textContainer}>
		<p>{props.storeX.about}</p>
	</div>
)

export default Home
