import Head from "next/head";
import styles from "@/styles/Home.module.scss";

// components
import UserScreen from "@/component/views/user/UserScreen";

export default function UserDetailsPage() {
	return (
		<>
			<Head>
				<title>Users Details | LendSqr Test App</title>
				<meta
					name="description"
					content="A management platform for lenders"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<UserScreen />
			</main>
		</>
	);
}
