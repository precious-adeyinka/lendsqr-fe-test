import React from "react";
import classNames from "classnames";
import styles from "./UserScreen.module.scss";

// components
import LayoutScreen from "@/component/layout/LayoutScreen";

import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { AiOutlineStar, AiTwotoneStar, AiOutlineUser } from "react-icons/ai";

import {useRouter} from 'next/navigation'

const UserScreen = () => {
    const router = useRouter()

	return (
		<LayoutScreen>
			<section className={styles.wrapper}>
				{/* header */}
				<header className={styles.header}>
					<div 
                    onClick={() => {
                        router.back()
                    }}
                    className={styles.headerBackBtn}>
						<HiOutlineArrowLongLeft className={styles.backBtn} />
						<span className={styles.backText}>Back to Users</span>
					</div>
					<div className={styles.headerRow}>
						<h1 className={styles.title}>Users Details</h1>
						<div className={styles.headerBtns}>
							<button className={styles.headerBtnRed}>
								Blacklist User
							</button>
							<button className={styles.headerBtnBlue}>
								Activate User
							</button>
						</div>
					</div>
				</header>

				{/* profile tab wrapper */}
				<section className={styles.profileTabWrapper}>
                    {/* user info */}
					<div className={styles.profileTabCol}>
						<div className={styles.user}>
							<div className={styles.userImage}>
								<AiOutlineUser className={styles.userIcon} />
							</div>
							<div className={styles.infoCol}>
								<h3 className={styles.userName}>
									Grace Effiom
								</h3>
								<p className={styles.userId}>LSQFf587g90</p>
							</div>
						</div>
						<div className={styles.tier}>
							<h3 className={styles.tierTitle}>User's Tier</h3>
							<p className={styles.tierIcons}>
								<AiTwotoneStar className={styles.tierIcon} />
								<AiOutlineStar className={styles.tierIcon} />
								<AiOutlineStar className={styles.tierIcon} />
							</p>
						</div>
						<div className={styles.payment}>
							<h3 className={styles.paymentAmount}>
								N200,000.00
							</h3>
							<p className={styles.paymentAccount}>
								9912345678/Providus Bank
							</p>
						</div>
					</div>

					<div className={styles.profileTabPills}>
						<div
							className={classNames(
								styles.profileTabPill,
								styles.profileTabPillActive
							)}
						>
							General Details
						</div>
						<div className={styles.profileTabPill}>Documents</div>
						<div className={styles.profileTabPill}>
							Bank Details
						</div>
						<div className={styles.profileTabPill}>Loans</div>
						<div className={styles.profileTabPill}>Savings</div>
						<div className={styles.profileTabPill}>
							App and System
						</div>
					</div>
				</section>

				{/* details */}
				<div className={styles.profileDetailsWrapper}>
					<section className={styles.profileDetailsSection}>
						<h2 className={styles.profileDetailsSectionTitle}>
							Personal Information
						</h2>
						<div className={styles.profileDetailsSectionRow}>
							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Full Name
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Grace Effiom
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Phone Number
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									07060780922
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Email Address
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									grace@gmail.com
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									BVN
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									07060780922
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Gender
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Female
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Marital Status
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Single
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Children
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									None
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Type of Residence
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Parent&lsquo;s Apartment
								</p>
							</div>
						</div>
					</section>

					<section className={styles.profileDetailsSection}>
						<h2 className={styles.profileDetailsSectionTitle}>
							Education and Employment
						</h2>
						<div
							className={classNames(
								styles.profileDetailsSectionRow,
								styles.grid4
							)}
						>
							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Level of Education
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									B.Sc
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Employment Status
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Employed
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Sector of Employment
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									FinTech
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Duration of Employment
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									2 years
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Official Email
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									grace@lendsqr.com
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Monthly Income
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									N200,000.00 - N400,000.00
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Loan Repayment
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									40,000
								</p>
							</div>
						</div>
					</section>

					<section className={styles.profileDetailsSection}>
						<h2 className={styles.profileDetailsSectionTitle}>
							Socials
						</h2>
						<div
							className={classNames(
								styles.profileDetailsSectionRow,
								styles.grid3
							)}
						>
							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Twitter
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									@grace_effiom
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Facebook
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Grace Effiom
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Instagram
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									@grace_effiom
								</p>
							</div>
						</div>
					</section>

					<section className={styles.profileDetailsSection}>
						<h2 className={styles.profileDetailsSectionTitle}>
							Guarantor
						</h2>
						<div
							className={classNames(
								styles.profileDetailsSectionRow,
								styles.grid4
							)}
						>
							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Full Name
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Debby Ogana
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Phone Number
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									07060780922
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Email Address
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									debby@gmail.com
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Relationship
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Sister
								</p>
							</div>
						</div>
					</section>

					<section
						className={classNames(
							styles.profileDetailsSection,
							styles.profileDetailsSectionLast
						)}
					>
						<h2 className={styles.profileDetailsSectionTitle}></h2>
						<div
							className={classNames(
								styles.profileDetailsSectionRow,
								styles.grid4
							)}
						>
							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Full Name
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Debby Ogana
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Phone Number
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									07060780922
								</p>
							</div>

							<div className={styles.profileDetailsSectionCol}>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Email Address
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									debby@gmail.com
								</p>
							</div>

							<div
								className={classNames(
									styles.profileDetailsSectionCol,
									styles.profileDetailsSectionColLast
								)}
							>
								<h2
									className={
										styles.profileDetailsSectionColTitle
									}
								>
									Relationship
								</h2>
								<p
									className={
										styles.profileDetailsSectionColDesc
									}
								>
									Sister
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>
		</LayoutScreen>
	);
};

export default UserScreen;
