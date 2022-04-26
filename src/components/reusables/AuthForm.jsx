import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutesObject } from "../../routes/AllRoutes";
import { validEmail } from "../../utils/Util_functions";
import logo from "../../assets/images/AlphaGen.png";
import { LockClosedIcon } from "@heroicons/react/solid";
import Navbar from "../../routes/Navbar";
import { BsGoogle } from "react-icons/bs";
export default function AuthForm({ title, type, onFinalize }) {
	const [email, setemail] = useState("");
	const [passw, setpassw] = useState("");
	const [passw2, setpassw2] = useState("");
	const [isDis, setisDis] = useState(true);
	const [errorMsg, seterrorMsg] = useState("");

	function checkEmail(e) {
		setemail(e.target.value);
		let isVal = validEmail(e.target.value);
		console.log("????", isVal);

		if (isVal) {
			seterrorMsg("");
		} else {
			seterrorMsg("Email is incorrect format");
		}
	}

	function cPass(e) {
		setpassw(e);
		if (e.length < 5) {
			console.log("password must be minimum of 6 chacters long");
			seterrorMsg("password must be minimum of 6 chacters long");
			setisDis(true);
		} else {
			console.log("password is 6 chacters long");
			seterrorMsg("");
			setisDis(false);
		}
	}

	function checkPassw(e) {
		setpassw2(e);

		if (e === passw) {
			console.log("passwords match");
			seterrorMsg("");
			setisDis(false);
		} else {
			console.log("passwords do not match");
			seterrorMsg("passwords do not match");
			setisDis(true);
		}
	}
	return (
		<>
        <div>
            <Navbar/>
          <h2 className="mt-6 text-center text-3xl font-bold text-red-500">{title}</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
          </p>
        </div>
			<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					{/* Form Starts */}
					<div className="mt-8 space-y-6">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								{/* Email */}
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									value={email}
									onChange={(e) => checkEmail(e)}
									name="email"
									type="email"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								{/* password */}
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									value={passw}
									onChange={(e) => {
										cPass(e.target.value);
									}}
									name="password"
									type="password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
							</div>
							{/* confirm password */}
							{title === 'Sign in' ? "" : <div>
								<label htmlFor="Confirm-password" className="sr-only">
									Confirm Password
								</label>
								<input
									value={passw2}
									type="password"
									onChange={(e) => checkPassw(e.target.value)}
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
									placeholder=" Confirm Password"
								/>
							</div>}

						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center"></div>

							<div className="text-sm">
								<p className="font-medium text-black-600 hover:text-indigo-500">
									<NavLink to={RoutesObject.visual.Forgot_pass.path}>
										{RoutesObject.visual.Forgot_pass.name}
									</NavLink>
								</p>
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled={isDis}
								onClick={() => onFinalize(email, passw)}
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-900"
							>
								{type}
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<LockClosedIcon
										className="h-5 w-5 text-white-500 group-hover:text-red-400"
										aria-hidden="true"
									/>
								</span>
							</button>
							<p>
								Don't have an account?{" "}
								<NavLink to={RoutesObject.visual.sign_up.path}>
									{RoutesObject.visual.sign_up.name}
								</NavLink>
							</p>

							<br />
							<br />
							{errorMsg.length > 0 ? (
								<p style={{ fontSize: "20px", color: "red" }}>{errorMsg}</p>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
