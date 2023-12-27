import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.0.1/remixicon.min.css"
					integrity="sha512-dTsohxprpcruDm4sjU92K0/Gf1nTKVVskNHLOGMqxmokBSkfOAyCzYSB6+5Z9UlDafFRpy5xLhvpkOImeFbX6A=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				<link rel="icon" href="/icon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
