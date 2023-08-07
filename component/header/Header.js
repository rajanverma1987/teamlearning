import styles from "./styles/header.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<img src='./R.jpeg' height={70} width={90} />
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Fuck you</li>
			</ul>
		</div>
	);
}
