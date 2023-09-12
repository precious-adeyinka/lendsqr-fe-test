import React, { FC } from "react";
// styles
import styles from "./Preloader.module.scss";

const Preloader: FC = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.skFoldingCube}>
                <div className={`${styles.skCube1} ${styles.skCube}`}></div>
				<div className={`${styles.skCube2} ${styles.skCube}`}></div>
				<div className={`${styles.skCube4} ${styles.skCube}`}></div>
				<div className={`${styles.skCube3} ${styles.skCube}`}></div>
			</div>
		</div>
	);
};

export default Preloader;
