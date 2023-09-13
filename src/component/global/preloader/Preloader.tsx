import React, { FC } from "react";
// styles
import styles from "./Preloader.module.scss";
import classNames from "classnames";

const Preloader: FC = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.skFoldingCube}>
				<div
					className={classNames(styles.skCube1, styles.skCube)}
				></div>
				<div
					className={classNames(styles.skCube2, styles.skCube)}
				></div>
				<div
					className={classNames(styles.skCube3, styles.skCube)}
				></div>
				<div
					className={classNames(styles.skCube4, styles.skCube)}
				></div>
			</div>
		</div>
	);
};

export default Preloader;
