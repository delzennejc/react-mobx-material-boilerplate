import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './style.css'
import cssObj from './style.oss'

const Home = (props) => (
	<div className={styles.textContainer}>
		<p>{props.storeX.text}</p>
		<div>
			<RaisedButton
				label="Welcome"
				secondary
				buttonStyle={cssObj.button}
				onClick={() => (props.storeX.text = 'Hello World !')}
			/>
		</div>
	</div>
)

export default Home
