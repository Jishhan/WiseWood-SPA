import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
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
                <CiLocationOn className="text-3xl text-red-900" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Address</h2>
                <p>J 202, Labham Residency, Scheme 140, Indore.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                <IoCallOutline className="text-2xl text-red-900" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Phone</h2>
                <p>+91 7999650475</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                <MdOutlineMailOutline className="text-2xl text-red-900" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Email</h2>
                <p>email@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md">
            <form id="messageFormId" className="w-full">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">
                Send Message
              </h2>

              <input
                className="border border-gray-400 mb-3 p-2 w-full rounded"
                type="text"
                id="nameId"
                placeholder="Name"
                required
              />

              <input
                className="border border-gray-400 mb-3 p-2 w-full rounded"
                type="email"
                id="emailId"
                placeholder="Email"
                required
              />

              <input
                className="border border-gray-400 mb-3 p-2 w-full rounded"
                type="text"
                id="mblNumberId"
                placeholder="Phone Number"
                required
              />

              <textarea
                className="border border-gray-400 mb-4 p-2 w-full rounded h-28"
                placeholder="Message"
                id="messageId"
                required
              ></textarea>

              <button
                id="sendButton"
                className="w-full bg-rose-900 hover:bg-rose-800 transition text-white p-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="map mt-10">
        <div id="googleMap" className="w-full h-[350px] md:h-[450px]"></div>
      </div>
    </div>
  );
};

export default ContactUs;
