"use client";
import React, { FC, ReactNode, useState } from "react";
import styles from "./LayoutScreen.module.scss";
import classNames from "classnames";

// components
import Nav from "@/component/global/nav/Nav";
import Sidebar from "@/component/global/sidebar/Sidebar";

// icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface LayoutProps {
	children: ReactNode;
}

const LayoutScreen: FC<LayoutProps> = ({ children }) => {
	const [toggleSidebar, setToggleSideBar] = useState(false);
	const toggleDrawer = () => setToggleSideBar((prev) => !prev);

	return (
		<section className={styles.wrapper}>
			<header className={styles.header}>
				<Nav />
			</header>
			<div className={styles.row}>
				<div
					className={classNames(
						styles.colLeft,
						toggleSidebar ? styles.colLeftActive : ""
					)}
				>
					<Sidebar />
					{/* handler */}
					<div
						onClick={toggleDrawer}
						className={styles.sidebarHandler}
					>
						{toggleSidebar ? (
							<FiChevronLeft className={styles.toggleIcon} />
						) : (
							<FiChevronRight className={styles.toggleIcon} />
						)}
					</div>
				</div>
				<div className={styles.colRight}>{children}</div>
			</div>
		</section>
	);
};

export default LayoutScreen;
