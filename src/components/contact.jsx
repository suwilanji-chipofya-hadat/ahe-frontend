import { Card, Label, Textarea, TextInput, Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { BsPersonCircle } from 'react-icons/bs'
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://angel-heartly-ent-server-blue.vercel.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending the email:', error);
    }
  };
  return (
    <Card
      className="max-w-2xl mx-auto space-y-4 text-center shadow-sm"
      id="textarea"
    >
      <h1 className="text-2xl font-bold">CONTACT US</h1>
      <div className="space-y-4 sm:items-center sm:justify-between sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
      <TextInput
        id="firstname"
        placeholder="First Name"
        required
        name="first_name"
        rightIcon={BsPersonCircle}
        type="text"
        name="firstname"
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextInput
        id="lastname"
        name="last_name"
        placeholder="Last Name"
        required
        rightIcon={BsPersonCircle}
        type="text"
        name="lastname"
        value={formData.lastName}
        onChange={handleChange}
      />
      </div>
      <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
      <TextInput
        id="email"
        placeholder="Email"
        name="email"
        required
        rightIcon={HiMail}
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextInput
        id="phone"
        placeholder="Phone Number"
        required
        rightIcon={HiMail}
        name="phone"
        type="text"
        value={formData.phone}
        onChange={handleChange}
      />
      </div>
      <div className="space-y-4">
      <Textarea
        id="address"
        placeholder="Address"
        name="address"
        required
        rows={4}
        value={formData.address}
        onChange={handleChange}
      />
      <Textarea
        id="message"
        name="message"
        placeholder="Type your message here"
        required
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />
      </div>
      <Button className="font-bold text-2xl" onClick={handleSubmit}>SUBMIT</Button>
    </Card>
  )
}


