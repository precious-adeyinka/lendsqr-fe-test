import React, { FC, useState, useEffect } from "react";
import styles from "./DashboardScreen.module.scss";
import classNames from "classnames";

// icons
import { FiChevronDown } from "react-icons/fi";

const TableFilter = () => {
	return (
		<div className={styles.tableFilterWrapper}>
			<div className={styles.tableFilter}>
				<div className={styles.tableFilterLabel}>Organization</div>
				<div className={styles.tableFilterFieldSelect}>
					<span className={styles.tableFilterSelectLabel}>
						Select
					</span>
					<FiChevronDown className={styles.tableFilterSelectIcon} />
				</div>
			</div>

			<div className={styles.tableFilter}>
				<div className={styles.tableFilterLabel}>Username</div>
				<div className={styles.tableFilterField}>
					<input
						type="text"
						placeholder="User"
						className={styles.tableFilterInput}
					/>
				</div>
			</div>

			<div className={styles.tableFilter}>
				<div className={styles.tableFilterLabel}>Email</div>
				<div className={styles.tableFilterField}>
					<input
						type="text"
						placeholder="Email"
						className={styles.tableFilterInput}
					/>
				</div>
			</div>

			<div className={styles.tableFilter}>
				<div className={styles.tableFilterLabel}>Date</div>
				<div className={styles.tableFilterField}>
					<input
						type="date"
						placeholder="Date"
						className={styles.tableFilterInput}
					/>
				</div>
			</div>

			<div className={styles.tableFilter}>
				<div className={styles.tableFilterLabel}>Phone Number</div>
				<div className={styles.tableFilterField}>
					<input
						type="text"
						placeholder="Phone Number"
						className={styles.tableFilterInput}
					/>
				</div>
			</div>

			<div className={styles.tableFilter}>
				<div className={styles.tableFilterLabel}>Status</div>
				<div className={styles.tableFilterFieldSelect}>
					<span className={styles.tableFilterSelectLabel}>
						Select
					</span>
					<FiChevronDown className={styles.tableFilterSelectIcon} />
				</div>
			</div>

			{/* btns */}
			<div className={styles.tableFilterBtns}>
				<button
					type="button"
					onClick={() => {}}
					className={styles.tableFilterBtnOutline}
				>
					Reset
				</button>
				<button
					type="button"
					onClick={() => {}}
					className={styles.tableFilterBtnSolid}
				>
					Filter
				</button>
			</div>
		</div>
	);
};

export default TableFilter;
