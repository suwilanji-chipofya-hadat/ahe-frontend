import ServiceCard from "../components/card"
import { Card } from 'flowbite-react';
import { Carousel } from "@material-tailwind/react";
import Contact from "../components/contact"
import React, { useState, useEffect, useRef } from 'react';
import { elementRefAtom } from "../recoil/atom/elements"
import { Button } from 'flowbite-react';
import HorizontalGallery from "../components/carousel"
import { useRecoilState } from "recoil"
export default function Home() {
	  const [imageFiles, setImageFiles] = useState([]);
	  const [_, setElementRefs] = useRecoilState(elementRefAtom)
	  const about = useRef(null)
	  const services = useRef(null)
	  const consultation = useRef(null)
	  const contact = useRef(null)
	  const top = useRef(null)
	  const portfolio = useRef(null)
	  useEffect(() => {
	    fetch('http://localhost:3001/api/images/names')
	      .then((response) => response.json())
	      .then((data) => {
	        setImageFiles(data.filenames);
	      })
	      .catch((error) => {
	        console.error('Error fetching image filenames:', error);
	      });
	  }, []);

	  useEffect(() => {
	  	setElementRefs({
	  		top: top,
	  		about: about,
	  		services: services,
	  		consultation: consultation,
	  		contact: contact,
	  		portfolio: portfolio
	  	})
	  }, [])

	return (
		<div className="h-screen overflow-y-scroll scrollbar-hide pb-[100px]">
		<div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[url('/bg-4.webp')] flex flex-col justify-center items-center space-y-6 bg-blur">
			<div className="w-full h-full bg-gray-100 bg-clip-padding backdrop-filter bg-opacity-20 text-black font-bold p-10">
			<div className="" id="top" ref={top}>
				<p class="text-4xl font-bold text-black">Building Excellence, Delivering Quality</p>
			</div>
			<div className="flex text-center text-lg font-semibold text-black-800">
				<p className="">Discover how our commitment to craftmanship and top-notch services sets us apart in the world of construction</p>
			</div>
			<div className="flex space-x-5">
				<Button className="bg-orange-500 font-bold"><a href="#contact" className="">CONTACT US</a></Button>
				<Button className="font-bold"><a href="#services">OUR SERVICES</a></Button>
			</div>
			</div>
		</div>
		<div className="flex flex-col py-2 space-y-4 md:flex-row md:space-y-0 md:space-x-3">
			<div className="min-h-[200px]" id="portfolio" ref={portfolio}>
			<HorizontalGallery/>
		</div>
			<div className="flex flex-col text-center items-center">
					<h1 className="font-bold text-xl sm:text-2xl">Why Choose Angel Heartly Enterprise</h1>
					<div className="p-2 space-y-4 md:space-y-0 md:flex md:space-x-3">
						<Card className="flex flex-col text-center shadow-sm">
							<h1 className="font-bold text-2xl">Affordability</h1>
							<p className="flex text-center font-semibold">We offer competitive pricing without compromising on quality.</p>
						</Card>
						<Card className="flex flex-col text-center shadow-sm">
							<h1 className="font-bold text-2xl">Quality</h1>
							<p className="flex text-center font-semibold">We are committed to delivering the highest quality craftsmanship, using premium materials and innovative techniques.</p>
						</Card>
						<Card className="flex flex-col text-center shadow-sm">
							<h1 className="font-bold text-2xl">Customisation</h1>
							<p className="flex text-center font-semibold">Every project is unique, and we tailor our services to meet your specific needs and preferences.</p>
						</Card>
						<Card className="flex flex-col text-center shadow-sm">
							<h1 className="font-bold text-2xl">Timeliness</h1>
							<p className="flex text-center font-semibold">We understand the importance of deadlines and ensure that projects are completed on schedule.</p>
						</Card>
						<Card className="flex flex-col text-center shadow-sm">
							<h1 className="font-bold text-2xl">Client-Centric Approach</h1>
							<p className="flex text-center font-semibold">Your satisfaction is our priority, and we maintain open communication throughout the project.</p>
						</Card>
						</div>				
				</div>
		</div>
		<div className="" id="about" ref={about}>
		<div className="text-center mx-autobg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[url('/bg-4.webp')] flex flex-col justify-center items-center p-10 space-y-6 bg-blur">
			<div className="w-full h-full bg-gray-100 bg-clip-padding backdrop-filter bg-opacity-20 text-black font-bold p-10">
			<h1 className="text-2xl font-bold">ABOUT US</h1>
			<div className="">
				<p className="text-md font-semibold">At Angel Heartly Enterprise, we are more than just builders; we are creators of spaces that inspire and elevate living experiences. With a commitment to excellence and an unwavering passion for craftsmanship, we have become a trusted name in the construction and interior design industry.</p>
			</div>
			</div>
		</div>
		</div>
		<div className="items-center text-center" id="services" ref={services}>
			<h1 className="text-3xl font-bold">OUR SERVICES</h1>
			<div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 p-2 space-y-4 md:space-y-0">
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Construction</h1>
				<p className="flex text-center font-semibold">Our team of skilled professionals brings dreams to life by constructing homes, offices, and spaces that stand the test of time. From foundation to finishing touches, we ensure every detail is executed to perfection.</p>
			</Card>
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Interior design</h1>
				<p className="flex text-center font-semibold">We believe that the heart of any space is its interior. Our interior designers blend creativity and functionality to transform spaces into captivating works of art that reflect your unique style.</p>
			</Card>
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Tiling</h1>
				<p className="flex text-center font-semibold">Precision and artistry come together in our tiling services. Whether it's floor tiles, wall tiles, or intricate mosaic work, we masterfully bring beauty to surfaces.</p>
			</Card>
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Ceilings</h1>
				<p className="flex text-center font-semibold">From elegant suspended ceilings to intricate plasterwork, we create ceilings that not only shelter but also embellish your space.</p>
			</Card>
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Pavings</h1>
				<p className="flex text-center font-semibold">Our paving solutions not only enhance the aesthetics of your outdoor areas but also ensure durability and ease of maintenance.</p>
			</Card>
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Fitting Cabinets</h1>
				<p className="flex text-center font-semibold">We craft custom-designed cabinets that optimize space and seamlessly integrate with your interior, providing both functionality and aesthetics.</p>
			</Card>
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Kitchens</h1>
				<p className="flex text-center font-semibold">Our kitchen designs are a blend of modern convenience and timeless elegance. We create spaces that inspire culinary creativity.</p>
			</Card>
			<Card className="flex flex-col text-center shadow-sm">
				<h1 className="font-bold text-2xl">Floating TV Stands</h1>
				<p className="flex text-center font-semibold">Elevate your entertainment experience with our sleek and space-saving
 floating TV stands.
 These stands are not just functional but also add a touch of sophistication to your living room.</p>
			</Card>
			</div>
		</div>
		<div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 bg-[url('/bg-1.jpg')] flex flex-col items-center bg-blur-sm" ref={consultation}>
			<div className="w-full h-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 text-black font-bold p-10">
			<h1 className="text-2xl text-white text-center">FREE CONSULTATION WITH EXCEPTIONAL QUALITY</h1>
			<div className="w-full text-center">
				<p className="text-gray-100">Email: <a href="mailto:angelheartlyent@gmail.com" className="">angelheartlyent@gmail.com</a></p>
				<p className="text-gray-100">Phone: +260970379567</p>
			</div>
			</div>
		</div>
		
		<div className="bg-white p-2" id="contact" ref={contact}>
			<Contact/>
		</div>
		</div>
	)
}
