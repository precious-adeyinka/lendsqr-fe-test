import React, { FC, useState, useEffect } from "react";
import styles from "./DashboardScreen.module.scss";
import classNames from "classnames";

// icons
import { LiaEllipsisVSolid } from "react-icons/lia";
import { FiEye } from "react-icons/fi";
import { BiUserCheck, BiSolidUserX } from "react-icons/bi";

import { useRouter } from "next/navigation";

interface Props {
	tableData: number[];
	id: number;
}

const TableRow: FC<Props> = ({ tableData, id }) => {
	const router = useRouter();

	const [showMoreContext, setShowMoreContext] = useState(false);

	const toggleMoreContext = () => {
		setShowMoreContext((prev) => !prev);
	};

	const generateStatusBgColor = (color: string) => {
		switch (color.toLowerCase()) {
			case "active":
				return styles.activeBg;
			case "inactive":
				return styles.inactiveBg;
			case "pending":
				return styles.pendingBg;
			case "blacklisted":
				return styles.blacklistedBg;
			default:
				return styles.defaultBg;
		}
	};

	const generateStatusColor = (color: string) => {
		switch (color.toLowerCase()) {
			case "active":
				return styles.activeColor;
			case "inactive":
				return styles.inactiveColor;
			case "pending":
				return styles.pendingColor;
			case "blacklisted":
				return styles.blacklistedColor;
			default:
				return styles.defaultColor;
		}
	};

	return (
		<div
			className={classNames(
				styles.tableRow,
				id === tableData.length - 1 ? styles.tableRowLast : ""
			)}
		>
			<div
				onClick={() => {
					router.push(`/admin/users/details/${id}`);
				}}
				className={styles.tableCell}
			>
				<div className={styles.tableCellData}>Lendsqr</div>
			</div>
			<div className={styles.tableCell}>
				<div className={styles.tableCellData}>Adedeji</div>
			</div>
			<div className={styles.tableCell}>
				<div className={styles.tableCellData}>adedeji@lendsqr.com</div>
			</div>
			<div className={styles.tableCell}>
				<div className={styles.tableCellData}>08078903721</div>
			</div>
			<div className={styles.tableCell}>
				<div className={styles.tableCellData}>
					May 15, 2020 10:00 AM
				</div>
			</div>
			<div className={styles.tableCell}>
				<div
					className={classNames(
						styles.tableCellData,
						styles.bubble,
						generateStatusBgColor("active")
					)}
				>
					<span className={classNames(generateStatusColor("active"))}>
						Inactive
					</span>
				</div>
				<div className={styles.tableCellData}>
					<LiaEllipsisVSolid
						onClick={toggleMoreContext}
						className={styles.tableRowMoreIcon}
					/>
					{/* dropdown */}
					{showMoreContext ? (
						<div className={styles.tableCellDataDropdown}>
							<div className={styles.tableCellDataDropdownItem}>
								<div
									className={styles.tableCellDataIconWrapper}
								>
									<FiEye
										className={styles.tableCellDataIcon}
									/>
								</div>
								<div className={styles.tableCellDataLabel}>
									View Details
								</div>
							</div>

							<div className={styles.tableCellDataDropdownItem}>
								<div
									className={styles.tableCellDataIconWrapper}
								>
									<BiSolidUserX
										className={styles.tableCellDataIcon}
									/>
								</div>
								<div className={styles.tableCellDataLabel}>
									Blacklist User
								</div>
							</div>

							<div className={styles.tableCellDataDropdownItem}>
								<div
									className={styles.tableCellDataIconWrapper}
								>
									<BiUserCheck
										className={styles.tableCellDataIcon}
									/>
								</div>
								<div className={styles.tableCellDataLabel}>
									Activate User
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default TableRow;
