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
    <section className="py-20 bg-[#e9f2ff]" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact Information</h2>

          <div className="flex items-center gap-4">
            <Lottie animationData={call} loop={true} style={{ height: 50, width: 50 }} />
            <a href="tel:+8801731875066" className="text-slate-700 hover:text-green-500 font-medium">
              +880 1731 875066
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Lottie animationData={wapp} loop={true} style={{ height: 50, width: 50 }} />
            <a href="https://wa.me/8801731875066" target="_blank" rel="noopener noreferrer"
              className="text-slate-700 hover:text-green-500 font-medium">
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Lottie animationData={emailAnim} loop={true} style={{ height: 50, width: 50 }} />
            <span className="text-slate-700 font-medium">azharchowdhury075@gmail.com</span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-2xl shadow space-y-5">
          <h3 className="text-xl font-semibold text-indigo-700">Send Me a Message</h3>

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
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
          {success && <p className="text-green-500 font-medium">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
