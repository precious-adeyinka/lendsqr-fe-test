import Head from "next/head";
import styles from "@/styles/Home.module.scss";

// components
import DashboardScreen from "@/component/views/dashboard/DashboardScreen";

export default function UserPage() {
	return (
		<>
			<Head>
				<title>Users Dashboard | LendSqr Test App</title>
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
				<DashboardScreen />
			</main>
		</>
	);
}
