import Header from "@/component/header/Header";
import styles from "@/styles/Home.module.css";

import { useState } from "react";

export default function Home() {
	const [value, setValue] = useState(0);

	function addValue() {
		setValue(prev => prev + 1);
	}
	function minusValue() {
		setValue(oldValue => --oldValue);
	}

	return (
		<>
			<button className={styles.button} onClick={minusValue}>
				Minus
			</button>
			<p className={styles.text}>{value}</p>
			<button className={styles.button} onClick={addValue}>
				Plus
			</button>
		</>
	);

	return <></>;
}
