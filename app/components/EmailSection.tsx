"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    // Set button to "Sending..."
    setButtonText("Sending...");

    const data = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };
    console.log("Form data:", data); // Debugging log
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      console.log("Response data:", resData); // Debugging log

      if (response.status === 200) {
        console.log("Message sent.");
        setButtonText("Message sent!");

        // Clear the form inputs right away
        target.email.value = "";
        target.subject.value = "";
        target.message.value = "";

        // Switch back to "Send Message" after 2 seconds
        setTimeout(() => {
          setButtonText("Send Message");
        }, 2000);
      } else {
        console.error("Failed to send message:", resData);
        setButtonText("Send Message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonText("Send Message");
    }
  };

  return (
    <section
      id="contact"
      className="font-sans grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Get in Touch
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          get back to you as soon as possible!
        </p>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 transition-opacity duration-500 opacity-100"
              placeholder="abc@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 transition-opacity duration-500 opacity-100"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 transition-opacity duration-500 opacity-100"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="inline-block py-0.5 px-0.5 rounded-full bg-gradient-to-br bg-neutral-400 hover:bg-neutral-200 hover:scale-105 transition-transform duration-200 text-white"
          >
            <span className="block bg-[black] hover:bg-neutral-900 rounded-full px-5 py-2 text-center">
              {buttonText}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
