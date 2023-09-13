import React, { useState } from "react";
import styles from "./DashboardScreen.module.scss";
import classNames from "classnames";

// components
import LayoutScreen from "@/component/layout/LayoutScreen";
import TableRow from "./TableRow";
import TableFilter from "./TableFilter";

// icons
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { BsPeople, BsFilter } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineSavings } from "react-icons/md";

const DashboardScreen = () => {
	const [shouldShowTableFilter, setShouldShowTableFilter] =
		useState<boolean>(false);
	const toggleTableFilter = () => setShouldShowTableFilter((prev) => !prev);

	const [tableData, setTableData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	return (
		<LayoutScreen>
			<section className={styles.wrapper}>
				{/* header */}
				<header className={styles.header}>
					<h1 className={styles.title}>Users</h1>
				</header>

				{/* statistics */}
				<section className={styles.statsRow}>
					<div className={styles.statsCard}>
						<div
							className={classNames(
								styles.statsIconWrapper,
								styles.pinkBg
							)}
						>
							<BsPeople
								className={classNames(
									styles.statsIcon,
									styles.pinkColor
								)}
							/>
						</div>
						<p className={styles.statsDesc}>Users</p>
						<h2 className={styles.statsNum}>2,453</h2>
					</div>

					<div className={styles.statsCard}>
						<div
							className={classNames(
								styles.statsIconWrapper,
								styles.purpleBg
							)}
						>
							<FaPeopleGroup
								className={classNames(
									styles.statsIcon,
									styles.purpleColor
								)}
							/>
						</div>
						<p className={styles.statsDesc}>Active Users</p>
						<h2 className={styles.statsNum}>2,453</h2>
					</div>

					<div className={styles.statsCard}>
						<div
							className={classNames(
								styles.statsIconWrapper,
								styles.orangeBg
							)}
						>
							<MdOutlineSavings
								className={classNames(
									styles.statsIcon,
									styles.orangeColor
								)}
							/>
						</div>
						<p className={styles.statsDesc}>Users With Loans</p>
						<h2 className={styles.statsNum}>12,453</h2>
					</div>

					<div className={styles.statsCard}>
						<div
							className={classNames(
								styles.statsIconWrapper,
								styles.redBg
							)}
						>
							<LiaCoinsSolid
								className={classNames(
									styles.statsIcon,
									styles.redColor
								)}
							/>
						</div>
						<p className={styles.statsDesc}>Users With Savings</p>
						<h2 className={styles.statsNum}>102,453</h2>
					</div>
				</section>

				{/* table */}
				<div className={styles.tableWrapper}>
					<section className={styles.table}>
						{/* table header */}
						<div className={styles.tableHeader}>
							{/* organization */}
							<div
								className={styles.tableHeaderWrapper}
								onClick={toggleTableFilter}
							>
								<div className={styles.tableHeaderTitle}>
									organization
								</div>
								<BsFilter className={styles.tableHeaderIcon} />
							</div>
							{/* username */}
							<div
								className={styles.tableHeaderWrapper}
								onClick={toggleTableFilter}
							>
								<div className={styles.tableHeaderTitle}>
									username
								</div>
								<BsFilter className={styles.tableHeaderIcon} />
							</div>
							{/* email */}
							<div
								className={styles.tableHeaderWrapper}
								onClick={toggleTableFilter}
							>
								<div className={styles.tableHeaderTitle}>
									email
								</div>
								<BsFilter className={styles.tableHeaderIcon} />
							</div>
							{/* phone number */}
							<div
								className={styles.tableHeaderWrapper}
								onClick={toggleTableFilter}
							>
								<div className={styles.tableHeaderTitle}>
									phone number
								</div>
								<BsFilter className={styles.tableHeaderIcon} />
							</div>
							{/* date joined */}
							<div
								className={styles.tableHeaderWrapper}
								onClick={toggleTableFilter}
							>
								<div className={styles.tableHeaderTitle}>
									date joined
								</div>
								<BsFilter className={styles.tableHeaderIcon} />
							</div>
							{/* status */}
							<div
								className={styles.tableHeaderWrapper}
								onClick={toggleTableFilter}
							>
								<div className={styles.tableHeaderTitle}>
									status
								</div>
								<BsFilter className={styles.tableHeaderIcon} />
							</div>
						</div>

						{/* table body */}
						<div className={styles.tableBody}>
							{tableData &&
								tableData.map((record, id, arr) => {
									return (
										<TableRow
											key={id}
											tableData={tableData}
											id={id}
										/>
									);
								})}
						</div>
					</section>
					{/* pagination */}
					<div className={styles.tablePagination}>
						<div className={styles.tablePaginationPerPage}>
							<p className={styles.tablePaginationPerPageLabel}>
								Showing
							</p>
							<div
								className={
									styles.tablePaginationPerPageDropDown
								}
							>
								<p
									className={
										styles.tablePaginationPerPageDropDownLabel
									}
								>
									100
								</p>
								<FiChevronDown
									className={
										styles.tablePaginationPerPageDropDownIcon
									}
								/>
							</div>
							<p className={styles.tablePaginationPerPageLabel}>
								out of 100
							</p>
						</div>
						{/* buttons */}
						<div className={styles.tablePaginationBtns}>
							<div className={styles.tablePaginationBtnPrev}>
								<FiChevronLeft
									className={
										styles.tablePaginationPerPageDropDownIcon
									}
								/>
							</div>
							<div className={styles.tablePaginationBtn}>1</div>
							<div className={styles.tablePaginationBtnInactive}>
								2
							</div>
							<div className={styles.tablePaginationBtnInactive}>
								3
							</div>
							<div className={styles.tablePaginationBtnInactive}>
								...
							</div>
							<div className={styles.tablePaginationBtnInactive}>
								15
							</div>
							<div className={styles.tablePaginationBtnInactive}>
								16
							</div>
							<div className={styles.tablePaginationBtnNext}>
								<FiChevronRight
									className={
										styles.tablePaginationPerPageDropDownIcon
									}
								/>
							</div>
						</div>
					</div>
					{/* table filter */}
					{shouldShowTableFilter ? <TableFilter /> : null}
				</div>
			</section>
		</LayoutScreen>
	);
};

export default DashboardScreen;
