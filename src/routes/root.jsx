import { Outlet } from "react-router-dom"
import UINavbar from "../components/navbar"
import { Analytics } from '@vercel/analytics/react';
export default function Root() {
	return (
		<div className="bg-[#f6f6ef] h-screen fixed w-full text-black">
			<section className=""></section>
			<section className="">
				<div class="border-b border-gray-400">
                                  <p class="">Visit <a href="https://hadat-hq.vercel.app" class="border-b border-black font-bold">Hadat HQ</a> For web development services</p>
                                </div>
				<UINavbar/>
				<div className="">
					<Analytics />
					<Outlet/>
				</div>
			</section>
		</div>
	)
}
