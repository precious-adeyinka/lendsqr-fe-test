"use client";
import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import styles from "./Nav.module.scss";

// icons
import { FiBell, FiChevronDown, FiSearch } from "react-icons/fi";

// components
import Link from "next/link";
import Image from "next/image";

const Nav: FC = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		if (validateForm()) {
			const user = {
				searchTerm,
			};
			console.log(user);
		} else {
			setLoading(false);
		}
	};

	const validateForm = () => {
		let status = false;

		if (searchTerm.length === 0) {
			status = false;
			setError("type something first");
		} else {
			status = true;
			setError("");
		}
		return status;
	};

	return (
		<nav className={styles.navigation}>
			<section className={styles.row}>
				<div className={styles.colLeft}>
					{/* logo */}
					<Link href="/dashboard" className={styles.linkWrapper}>
						<div className={styles.logoWrapper}>
							<Image
								className={styles.logo}
								src={"/assets/images/logo.png"}
								alt={"Login Background"}
								fill
							/>
						</div>
					</Link>
					<div className={styles.searchFormWrapper}>
						<form
							className={styles.searchForm}
							onSubmit={handleSubmit}
						>
							<div className={styles.field}>
								<input
									type="search"
									placeholder="Search for anything"
									value={searchTerm}
									onChange={handleSearchTerm}
									className={styles.input}
								/>
								{/* button */}
								<button type="submit" className={styles.cta}>
									<FiSearch className={styles.ctaIcon} />
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className={styles.colRight}>
					{/* hamburger */}
					<div className={styles.hamburger}>
						<span className={styles.hamburgerBar}></span>
						<span className={styles.hamburgerBar}></span>
						<span className={styles.hamburgerBar}></span>
					</div>

					{/* actions */}
					<div className={styles.actionWrapper}>
						{/* docs */}
						<button className={styles.actionDoc}>Docs</button>
						{/* notifications */}
						<button className={styles.actionNotification}>
							<FiBell className={styles.actionNotificationIcon} />
						</button>
						{/* avatar */}
						<div className={styles.avatarWrapper}>
							<div className={styles.avatarCircle}>
								<Image
									fill
									src={"/assets/images/avatar.jpg"}
									alt="avatar"
									className={styles.avatar}
								/>
							</div>
							<div className={styles.avatarDropdown}>
								<div className={styles.avatarDropdownBtn}>
									{/* label */}
									<span
										className={
											styles.avatarDropdownBtnLabel
										}
									>
										Adedeji
									</span>
									{/* icon */}
									<div
										className={
											styles.avatarDropdownIconWrapper
										}
									>
										<FiChevronDown
											className={
												styles.avatarDropdownIcon
											}
										/>
									</div>
								</div>
								{/* dropdown */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</nav>
	);
};

export default Nav;
