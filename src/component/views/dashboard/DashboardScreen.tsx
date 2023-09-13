import React from "react";

import styles from "./DashboardScreen.module.scss";

// components
import LayoutScreen from "@/component/layout/LayoutScreen";

const DashboardScreen = () => {
	return (
		<LayoutScreen>
			<section className={styles.wrapper}>Dashboard Screen!</section>
		</LayoutScreen>
	);
};

export default DashboardScreen;
