'use client';

import { Button, Navbar } from 'flowbite-react';
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { elementRefAtom } from "../recoil/atom/elements"
export default function UINavbar() {
  const elements = useRecoilValue(elementRefAtom)
  return (
    <Navbar
      fluid
      rounded
      className="bg-transparent"
    >
      <Navbar.Brand href="/">
        <img src="/logo.png" alt="" className="w-[70px]"/>
      </Navbar.Brand>
      <div className="flex md:order-2 space-x-3">
        <Button className="font-semibold">
          <a href="#contact">CONTACT US</a>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link className="font-bold text-lg"
          active
          onClick={() => elements.top.current?.scrollIntoView({behaviour: "smooth"})}
        >
          <p>
            Home
          </p>
        </Link>
        <Link className="font-bold text-lg" onClick={() => elements.about.current?.scrollIntoView({behaviour: "smooth"})}>
          About
        </Link>
        <Link className="font-bold text-lg" onClick={() => elements.services.current?.scrollIntoView({behaviour: "smooth"})}>
          Services
        </Link>
        <Link className="font-bold text-lg" onClick={() => elements.consultation.current?.scrollIntoView({behaviour: "smooth"})}>
          Consultation
        </Link>
        <Link className="font-bold text-lg" onClick={() => elements.contact.current?.scrollIntoView({behaviour: "smooth"})}>
          Contact
        </Link>
        <Link className="font-bold text-lg" onClick={() => elements.portfolio.current?.scrollIntoView({behaviour: "smooth"})}>
          Recent Work
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


