import Header from "@/component/header/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<div className='container'>
			<Header />
			<div className='appContainer'>
				<div className='sideBar'></div>
				<div className='mainContainer'>
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}
