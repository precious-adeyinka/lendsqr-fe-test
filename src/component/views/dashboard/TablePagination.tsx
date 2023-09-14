import React, {
	FC,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";
import styles from "./DashboardScreen.module.scss";
import classNames from "classnames";

import axios from "axios";

import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";

interface Props {
	visiblePages: number;
	changeLimit: (limit: number) => void;
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}
const TablePagination: FC<Props> = ({
	visiblePages,
	changeLimit,
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const maxPages = Math.ceil(totalPages / visiblePages);

	const [showLimit, setShowLimit] = useState<boolean>(false);
	const [limit, setLimit] = useState<number>(10);

	const toggleLimit = () => setShowLimit((prev) => !prev);

	const renderLimits = (n: number) => {
		let limitBtns = [];

		if (n >= 10) {
			for (let i = 10; i <= n; i++) {
				limitBtns.push(
					<div
						key={i}
						onClick={() => {
							handlePageLimitChange(i);
						}}
						className={
							styles.tablePaginationPerPageDropDownCardItem
						}
					>
						{i}
					</div>
				);
			}
		}

		return limitBtns;
	};

	// set the limit of the table data displayed per page
	const handlePageLimitChange = (limit: number) => {
		changeLimit(limit);
		setLimit(limit);
		setShowLimit((prev) => !prev);
	};

	// show page buttons based on table data
	const renderPageNumbers = () => {
		const pageNumbers = [];
		const maxVisiblePages = Math.ceil(totalPages / visiblePages);

		for (let i = 1; i <= maxVisiblePages; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => onPageChange(i)}
					className={classNames(
						i === currentPage
							? styles.tablePaginationBtn
							: styles.tablePaginationBtnInactive
					)}
				>
					{i}
				</button>
			);
		}

		return pageNumbers;
	};

	useEffect(() => {}, [limit, visiblePages]);

	return (
		<div className={styles.tablePagination}>
			{/* table limit */}
			<div className={styles.tablePaginationPerPage}>
				<p className={styles.tablePaginationPerPageLabel}>Showing</p>
				<div className={styles.tablePaginationPerPageDropDown}>
					<div
						className={styles.tablePaginationPerPageDropDownInner}
						onClick={toggleLimit}
					>
						<p
							className={
								styles.tablePaginationPerPageDropDownLabel
							}
						>
							{limit}
						</p>
						<FiChevronDown
							className={
								styles.tablePaginationPerPageDropDownIcon
							}
						/>
					</div>
					{/* dropdown */}
					{showLimit ? (
						<div
							className={
								styles.tablePaginationPerPageDropDownCard
							}
						>
							{renderLimits(100)}
						</div>
					) : null}
				</div>
				<p className={styles.tablePaginationPerPageLabel}>
					out of {totalPages}
				</p>
			</div>
			{/* buttons */}
			<div className={styles.tablePaginationBtns}>
				{/* prev btn */}
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className={
						currentPage === 1
							? styles.tablePaginationBtnDisabled
							: styles.tablePaginationBtnPrev
					}
				>
					<FiChevronLeft
						className={styles.tablePaginationPerPageDropDownIcon}
					/>
				</button>

				{/* pages buttons */}
				{renderPageNumbers()}

				{/* next btn */}
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === maxPages}
					className={
						currentPage === maxPages
							? styles.tablePaginationBtnDisabled
							: styles.tablePaginationBtnNext
					}
				>
					<FiChevronRight
						className={styles.tablePaginationPerPageDropDownIcon}
					/>
				</button>
			</div>
		</div>
	);
};

export default TablePagination;
