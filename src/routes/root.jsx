import { Outlet } from "react-router-dom"
import UINavbar from "../components/navbar"
import { Analytics } from '@vercel/analytics/react';
export default function Root() {
	return (
		<div className="bg-[#f6f6ef] h-screen fixed w-full text-black">
			<section className=""></section>
			<section className="">
				<UINavbar/>
				<div className="">
					<Analytics />
					<Outlet/>
				</div>
			</section>
		</div>
	)
}
