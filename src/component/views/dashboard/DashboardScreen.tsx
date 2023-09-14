"use client";
import React, { useState, useEffect } from "react";
import styles from "./DashboardScreen.module.scss";
import classNames from "classnames";

import axios from "axios";

// components
import LayoutScreen from "@/component/layout/LayoutScreen";
import TableRow from "./TableRow";
import TableFilter from "./TableFilter";
import TablePagination from "./TablePagination";

// icons
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { BsPeople, BsFilter } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineSavings } from "react-icons/md";

interface Data {
	id: string;
	organization: string;
	username: string;
	email: string;
	phone_number: string;
	date_joined: string;
	status: string;
}

const DashboardScreen = () => {
	const [shouldShowTableFilter, setShouldShowTableFilter] =
		useState<boolean>(false);
	const toggleTableFilter = () => setShouldShowTableFilter((prev) => !prev);

	const [tableData, setTableData] = useState<Data[] | null>(null);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);
	const [loading, setLoading] = useState<boolean>(false);
	const [maxedOut, setMaxedOut] = useState<boolean>(false);

	const fetchData = async (page: number, perPage: number) => {
		setLoading(true);

		try {
			const result = await axios.get(
				`/api/data?page=${page}&perPage=${perPage}}`
			);
			console.log(result?.data)
			if (result?.data?.data.length > 0) {
				setTableData(result?.data?.data);
				setPage(result?.data?.page);
				setTotalPages(result?.data?.total);
			} else {
				setMaxedOut(true);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};

	const handlePageChange = (page: number): void => {
		// update current page
		setPage(page + 1);
		// fetch data from the db
		fetchData(page, perPage);
	};

	const handleLimitChange = (limit: number): void => {
		// update current limit
		setPerPage(limit);
		// fetch data from the db
		fetchData(1, limit);
	};

	useEffect(() => {
		fetchData(page, perPage);
	}, [perPage]);

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
											record={record}
											id={id}
										/>
									);
								})}

							{/* loading */}
							{loading ? (
								<div className={styles.loadingSpinner}>
									Loading...
								</div>
							) : null}

							{/* no more data */}
							{maxedOut ? (
								<div className={styles.loadingSpinner}>
									No more data found!
								</div>
							) : null}
						</div>
					</section>
					{/* pagination */}
					<TablePagination
						visiblePages={perPage}
						changeLimit={handleLimitChange}
						currentPage={page}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
					{/* table filter */}
					{shouldShowTableFilter ? <TableFilter /> : null}
				</div>
			</section>
		</LayoutScreen>
	);
};

export default DashboardScreen;
