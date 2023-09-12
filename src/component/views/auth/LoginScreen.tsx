"use client";
import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import styles from "./Login.module.scss";
// classes
// import classNames from "classnames";

// components
import Image from "next/image";
import Link from "next/link";
import Preloader from "@/component/global/preloader/Preloader";

const LoginScreen: FC = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const togglePasswordVisibility = () =>
		setIsPasswordVisible((prev) => !prev);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		if (validateForm()) {
			const user = {
				email,
				password,
			};
			console.log(user);
		} else {
			setLoading(false);
		}
	};

	const validateForm = () => {
		let status = false;

		if (email.length === 0) {
			status = false;
			setError("email is required");
		} else if (!isValidEmail(email)) {
			setError("Email is invalid!");
			status = false;
		} else if (password.length === 0) {
			status = false;
			setError("password is required");
		} else if (password.length < 5) {
			status = false;
			setError("password too short");
		} else {
			status = true;
			setError("");
		}
		return status;
	};

	const isValidEmail = (s: string) => {
		return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			s
		);
	};

	return (
		<div className={styles.wrapper}>
			{/* logo */}
			<div className={styles.logoWrapper}>
				<Image
					className={styles.logo}
					src={"/assets/images/logo.png"}
					alt={"Login Background"}
					fill
				/>
			</div>

			<section className={styles.row}>
				{/* left */}
				<div className={styles.colLeft}>
					<div className={styles.imageWrapper}>
						<Image
							className={styles.loginBg}
							src={"/assets/images/auth/login-bg.png"}
							alt={"Login Background"}
							fill
						/>
					</div>
				</div>

				{/* right */}
				<div className={styles.colRight}>
					<h2 className={styles.title}>Welcome!</h2>
					<h3 className={styles.caption}>Enter details to login.</h3>

					{/* error */}
					<span className={styles.errorText}>{error}</span>

					<form
						className={styles.formWrapper}
						onSubmit={handleSubmit}
					>
						{/* email */}
						<div className={styles.field}>
							<input
								type="email"
								placeholder={"Email"}
								value={email}
								onChange={handleEmail}
								className={styles.input}
							/>
						</div>

						{/* password */}
						<div className={styles.field}>
							<input
								type={isPasswordVisible ? "text" : "password"}
								placeholder={"Password"}
								value={password}
								onChange={handlePassword}
								className={styles.input}
							/>
							<button
								type="button"
								className={styles.passwordVisibility}
								onClick={togglePasswordVisibility}
							>
								{isPasswordVisible ? "hide" : "show"}
							</button>
						</div>

						{/* forgot password */}
						<div className={styles.forgotPasswordWrapper}>
							<Link href="#" className={styles.forgotPassword}>
								<p className={styles.forgotPassword}>
									Forgot password?
								</p>
							</Link>
						</div>

						{/* cta */}
						<button type="submit" className={styles.cta}>
							{loading ? "loading..." : "LOG IN"}
						</button>
					</form>
				</div>
			</section>

			{/* prelaoder */}
			{loading ? <Preloader /> : null}
		</div>
	);
};
export default LoginScreen;
