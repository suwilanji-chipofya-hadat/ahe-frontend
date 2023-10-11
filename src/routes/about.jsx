import { Card } from 'flowbite-react';
export default function About() {
	return (
		<div className="flex flex-col items-center overflow-y-scroll scrollbar-hide h-screen">
			<div className="">
				<img src="/logo.png" alt="" className="w-[250px] rounded-[50%] border-2 border-black"/>
			</div>
			<div className="flex flex-col">
				<Card className="flex flex-col text-center">
					<h1 className="font-bold text-2xl">Our Mission</h1>
					<p className="flex text-center font-semibold">At Angel Heartly Enterprise, we are more than just builders; we are creators of spaces that inspire and elevate living experiences. With a commitment to excellence and an unwavering passion for craftsmanship, we have become a trusted name in the construction and interior design industry.</p>
				</Card>
				
			</div>		
		</div>
	)
}