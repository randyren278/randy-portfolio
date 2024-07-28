"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };
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
        setEmailSubmitted(true);

        // Clear the form inputs after a delay
        setTimeout(() => {
          target.email.value = "";
          target.subject.value = "";
          target.message.value = "";

          // Switch back to "Send Message" after another delay
          setTimeout(() => {
            setEmailSubmitted(false);
          }, 2000);
        }, 2000); // Adjust the delay as needed
      } else {
        console.error("Failed to send message:", resData);
      }
    } catch (error) {
      console.error("Error sending message:", error);
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
              className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 transition-colors duration-1000 ${
                emailSubmitted ? "text-transparent" : "text-gray-100"
              }`}
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
              className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 transition-colors duration-1000 ${
                emailSubmitted ? "text-transparent" : "text-gray-100"
              }`}
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
              className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 transition-colors duration-1000 ${
                emailSubmitted ? "text-transparent" : "text-gray-100"
              }`}
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-blue-800 to-purple-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-800 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-opacity duration-1000"
          >
            {emailSubmitted ? "Message sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
