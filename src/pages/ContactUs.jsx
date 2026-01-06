import React from "react";
import emailjs from "@emailjs/browser";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams();
    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("phone", formData.phone);
    formBody.append("message", formData.message);

    try {
      // ✅ Existing Google Sheet code (UNCHANGED)
      await fetch(
        "https://script.google.com/macros/s/AKfycbw-DhGP_xBCYg5nsCmP11CqVyJ6GdWqmaHOWa6Z-_0_KnyMoYN1z8YuzJJtLJWwK3JFtA/exec",
        {
          method: "POST",
          body: formBody,
        }
      );

      // ✅ NEW: Auto-reply email (ONLY ADDITION)
      await emailjs.send(
        "service_tv4ij6i",
        "template_iu1cqu6",
        {
          name: formData.name,
          email: formData.email,
        },
        "4VzG6EjHwszQ0kY_x"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send");
    }
  };
  return (
    <div className="wrapper w-full">
      <div className="contactUsWrap p-6 md:p-16 backdrop-brightness-50 bg-[url('/Images/darkSecret-1.png')] bg-cover bg-center bg-no-repeat">
        {/* Heading */}
        <div className="text-center text-white mb-10">
          <h1 className="mb-4 text-3xl">Contact Us</h1>
          <p className="text-xl md:text-2xl">
            For all project inquiries, email <b />
            email@gmail.com
            <br /> with the subject NEW PROJECT
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {/* Left Info Section */}
          <div className="flex flex-col justify-center gap-8 text-white max-w-sm">
            {/* Address */}
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                <CiLocationOn className="text-3xl text-[#7D1128]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Address</h2>
                <p>J 202, Labham Residency, Scheme 140, Indore.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                <IoCallOutline className="text-2xl text-[#7D1128]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Phone</h2>
                <p>+91 7999650475</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                <MdOutlineMailOutline className="text-2xl text-[#7D1128]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Email</h2>
                <p>email@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md">
            <form onSubmit={handleSubmit} className="w-full">
              <h2 className="text-2xl font-semibold text-[#7D1128] mb-4">
                Submit Your Message
              </h2>

              <input
                className="border border-[#7D1128] mb-3 p-2 w-full rounded"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />

              <input
                className="border border-[#7D1128] mb-3 p-2 w-full rounded"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />

              <input
                className="border border-[#7D1128] mb-3 p-2 w-full rounded"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />

              <textarea
                className="border border-[#7D1128] mb-4 p-2 w-full rounded h-28"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>

              <button
                id="sendButton"
                className="w-full bg-[#7D1128] hover:bg-rose-800 transition text-white p-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=J%20202%20Labham%20Residency%20Scheme%20140%20Indore&output=embed"
          className="w-full h-[400px] md:h-[450px] shadow-lg border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
