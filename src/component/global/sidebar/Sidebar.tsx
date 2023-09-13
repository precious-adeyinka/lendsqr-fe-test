import React, { FC, useState } from "react";
import styles from "./Sidebar.module.scss";

// icons
import { FiChevronDown, FiUserX } from "react-icons/fi";
import { FaHome, FaBriefcase, FaHandHoldingUsd } from "react-icons/fa";
import { RiEqualizerLine, RiTodoFill } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { BsPeople, BsBriefcase } from "react-icons/bs";
import { FaPeopleGroup, FaRegHandshake, FaChartSimple } from "react-icons/fa6";
import { TbMoneybag, TbUserCog } from "react-icons/tb";
import { BiSolidUserCheck } from "react-icons/bi";
import { MdOutlineSavings, MdReceiptLong } from "react-icons/md";
import { PiCoins, PiSpinnerFill } from "react-icons/pi";
import { SiKeepassxc } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineTransaction } from "react-icons/ai";

const Sidebar: FC = () => {
	const [sections, setSections] = useState([
		{
			title: "CUSTOMERS",
			data: [
				{
					icon: (
						<BsPeople className={styles.sectionSegmentOptionIcon} />
					),
					label: "Users",
					url: "",
				},
				{
					icon: (
						<FaPeopleGroup
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Guarantors",
					url: "",
				},
				{
					icon: (
						<TbMoneybag
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Loans",
					url: "",
				},
				{
					icon: (
						<FaRegHandshake
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Decision Models",
					url: "",
				},
				{
					icon: (
						<MdOutlineSavings
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Savings",
					url: "",
				},
				{
					icon: (
						<FaHandHoldingUsd
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Loans Requests",
					url: "",
				},
				{
					icon: (
						<BiSolidUserCheck
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Whitelist",
					url: "",
				},
				{
					icon: (
						<FiUserX className={styles.sectionSegmentOptionIcon} />
					),
					label: "Karma",
					url: "",
				},
			],
		},
		{
			title: "BUSINESSES",
			data: [
				{
					icon: (
						<BsBriefcase
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Organization",
					url: "",
				},
				{
					icon: (
						<FaHandHoldingUsd
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Loan Products",
					url: "",
				},
				{
					icon: (
						<SiKeepassxc
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Savings Products",
					url: "",
				},
				{
					icon: (
						<PiCoins className={styles.sectionSegmentOptionIcon} />
					),
					label: "Fees and Charges",
					url: "",
				},
				{
					icon: (
						<AiOutlineTransaction
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Transactions",
					url: "",
				},
				{
					icon: (
						<PiSpinnerFill
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Services",
					url: "",
				},
				{
					icon: (
						<TbUserCog
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Service Account",
					url: "",
				},
				{
					icon: (
						<MdReceiptLong
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Settlements",
					url: "",
				},
				{
					icon: (
						<FaChartSimple
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Reports",
					url: "",
				},
			],
		},
		{
			title: "SETTINGS",
			data: [
				{
					icon: (
						<RiEqualizerLine
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Preferences",
					url: "",
				},
				{
					icon: (
						<CiDiscount1
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Fees and Pricing",
					url: "",
				},
				{
					icon: (
						<RiTodoFill
							className={styles.sectionSegmentOptionIcon}
						/>
					),
					label: "Audit Logs",
					url: "",
				},
			],
		},
	]);

	const renderIcon = (icon: any) => {
		return icon;
	};

	return (
		<section className={styles.wrapper}>
			<div className={styles.innerWrapper}>
				<div className={styles.dropdown}>
					{/* icon */}
					<FaBriefcase className={styles.dropdownIconLeft} />
					{/* label */}
					<span className={styles.dropdownLabel}>
						Switch Organization
					</span>
					{/* icon */}
					<FiChevronDown className={styles.dropdownIconRight} />
				</div>

				{/* dashboard */}
				<div className={styles.menuLink}>
					{/* icon */}
					<FaHome className={styles.menuLinkIcon} />
					{/* label */}
					<span className={styles.menuLinkLabel}>Dashboard</span>
				</div>

				{/* sections */}
				<div className={styles.section}>
					{sections &&
						sections?.map((section, index) => {
							return (
								<div
									key={`${section?.title}-${index}`}
									className={styles.sectionSegment}
								>
									<h3 className={styles.sectionSegmentTitle}>
										{section?.title}
									</h3>

									{/* options */}
									<div
										className={styles.sectionSegmentOptions}
									>
										{/* option */}
										{section?.data.map((item, index) => {
											return (
												<div
													key={`${item?.label}-${index}`}
													className={
														styles.sectionSegmentOption
													}
												>
													{/* icon */}
													{renderIcon(item.icon)}
													<span
														className={
															styles.sectionSegmentOptionLabel
														}
													>
														{item?.label}
													</span>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
