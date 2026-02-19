import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  const defaultForm = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset on mount
  useEffect(() => {
    setFormData(defaultForm);
    setStatusMessage("");
    setIsSuccess(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const formBody = new URLSearchParams();
    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("phone", formData.phone);
    formBody.append("message", formData.message);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw-DhGP_xBCYg5nsCmP11CqVyJ6GdWqmaHOWa6Z-_0_KnyMoYN1z8YuzJJtLJWwK3JFtA/exec",
        {
          method: "POST",
          body: formBody,
        }
      );

      await emailjs.send(
        "service_tv4ij6i",
        "template_iu1cqu6",
        {
          name: formData.name,
          email: formData.email,
        },
        "4VzG6EjHwszQ0kY_x"
      );

      setIsSuccess(true);
      setStatusMessage(
        "Thank you. Your inquiry has been successfully submitted. We will get back to you shortly."
      );

      setFormData(defaultForm);

      // Auto remove message
      setTimeout(() => {
        setStatusMessage("");
        setIsSuccess(false);
      }, 4000);

    } catch (err) {
      setIsSuccess(false);
      setStatusMessage(
        "Something went wrong. Please try again."
      );

      setTimeout(() => {
        setStatusMessage("");
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">

      {/* Background Section */}
      <div className="relative bg-[url('/Images/darkSecret-1.png')] bg-cover bg-center bg-no-repeat">

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-16">

          {/* Heading */}
          <div className="text-center text-white mb-16">
            <h1 className="text-4xl md:text-5xl tracking-wide mb-6">
              Contact Us
            </h1>

            <p className="text-lg md:text-xl text-[#EAE6DF] max-w-2xl mx-auto">
              For all project inquiries, please email{" "}
              <span className="text-[#A1866F] font-medium">
                email@gmail.com
              </span>
              with the subject <b>NEW PROJECT</b>.
            </p>
          </div>

          {/* Info + Form */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">

            {/* LEFT CONTACT INFO */}
            <div className="flex flex-col justify-center gap-10 text-white max-w-sm">

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F5F3EF] rounded-lg">
                  <CiLocationOn className="text-2xl text-[#A1866F]" />
                </div>
                <div>
                  <h2 className="text-xl font-medium">Address</h2>
                  <p className="text-[#EAE6DF]">
                    J 202, Labham Residency, Scheme 140, Indore.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F5F3EF] rounded-lg">
                  <IoCallOutline className="text-2xl text-[#A1866F]" />
                </div>
                <div>
                  <h2 className="text-xl font-medium">Phone</h2>
                  <p className="text-[#EAE6DF]">+91 7999650475</p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F5F3EF] rounded-lg">
                  <MdOutlineMailOutline className="text-2xl text-[#A1866F]" />
                </div>
                <div>
                  <h2 className="text-xl font-medium">Email</h2>
                  <p className="text-[#EAE6DF]">email@gmail.com</p>
                </div>
              </div>

            </div>

            {/* FORM */}
            <div className="bg-[#F5F3EF] p-8 rounded-sm shadow-2xl w-full max-w-md">

              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-medium text-[#1C1C1C] mb-6 tracking-wide">
                  Submit Your Inquiry
                </h2>

                <input
                  className="border border-[#D6CEC3] focus:border-[#A1866F] mb-4 p-3 w-full bg-white outline-none transition"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />

                <input
                  className="border border-[#D6CEC3] focus:border-[#A1866F] mb-4 p-3 w-full bg-white outline-none transition"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />

                <input
                  className="border border-[#D6CEC3] focus:border-[#A1866F] mb-4 p-3 w-full bg-white outline-none transition"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />

                <textarea
                  className="border border-[#D6CEC3] focus:border-[#A1866F] mb-6 p-3 w-full bg-white outline-none transition h-28"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                ></textarea>

                <button
                  disabled={loading}
                  className="w-full bg-[#A1866F] hover:bg-[#8C735C] transition text-white py-3 tracking-wide disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {statusMessage && (
                  <p
                    className={`mt-4 text-sm ${
                      isSuccess ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>

            </div>

          </div>
        </div>
      </div>

      {/* Google Map */}
      <iframe
        title="Office Location"
        src="https://www.google.com/maps?q=J%20202%20Labham%20Residency%20Scheme%20140%20Indore&output=embed"
        className="w-full h-[400px] md:h-[450px]"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactUs;
