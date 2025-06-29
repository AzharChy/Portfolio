import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";

import call from '../src/assets/lottie/call.json';
import wapp from '../src/assets/lottie/wapp.json';
import emailAnim from '../src/assets/lottie/email.json'; 

const ContactMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9z8750g",
      "template_heso5z2",
      form.current,
      "QwzNGN9ufgwZ-On7d"
    )
    .then(() => {
      setSuccess(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setSuccess(false);
    });
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-12" id="contact">
      <div className="max-w-6xl mx-auto bg-[#252525] rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Contact Info */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>

          <div className="flex items-center gap-4">
            <Lottie animationData={call} loop={true} style={{ height: 60, width: 60 }} />
            <a href="tel:+8801731875066" className="hover:text-green-400 transition">
              +880 1731 875066
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Lottie animationData={wapp} loop={true} style={{ height: 60, width: 60 }} />
            <a href="https://wa.me/8801731875066" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-4">
            {emailAnim ? (
              <Lottie animationData={emailAnim} loop={true} style={{ height: 60, width: 60 }} />
            ) : (
              <span className="text-white font-semibold">✉️</span> // fallback icon
            )}
            <span>azharchowdhury075@gmail.com</span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-base-100 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-primary mb-2">Send Me a Message</h2>

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="input input-bordered w-full"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="textarea textarea-bordered w-full"
          />

          <input
            type="file"
            name="attachment"
            className="file-input file-input-bordered w-full"
          />

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>

          {success && <p className="text-green-400 font-medium pt-2">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
