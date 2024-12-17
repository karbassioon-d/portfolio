import { motion } from "framer-motion";
import { initialVariants, animateVariants, transition1, transition2 } from "./MotionVariants";
import { useState } from "react";
import pug from "../assets/pug.gif";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      const response = await fetch("https://formspree.io/f/xgvejlla", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }, // Ensure correct content negotiation
      });

      // Check response from Formspree
      if (response.ok) {
        setFeedback("Message sent successfully! 🎉");
        setIsSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const errorData = await response.json(); // Parse the error details
        setFeedback(
          errorData?.error || "Oops! Something went wrong. Please try again."
        );
        setIsSuccess(false);
      }
    } catch (error) {
      setFeedback("An error occurred. Please check your connection and try again.");
      setIsSuccess(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6 flex flex-col items-center pt-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20, filter: "drop-shadow(0 0 0px transparent)" }}
        animate={{ opacity: 1, y: 0, filter: "drop-shadow(0 0 0px transparent)" }}
        whileHover={{ filter: "drop-shadow(0 0 8px #32CD32)" }}
        transition={{ duration: 0.5 }}
        className="text-green-500 font-josefin text-4xl md:text-5xl mb-6"
      >
        Contact
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-[600px] bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={initialVariants}
        animate={animateVariants}
        transition={transition2}
        onSubmit={handleSubmit}
      >
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Your Name</label>
            <input
              className="h-12 px-4 rounded border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Email</label>
            <input
              className="h-12 px-4 rounded border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              name="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-300">Subject</label>
          <input
            className="h-12 px-4 rounded border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            name="subject"
            placeholder="I want to give you my money"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-300">Message</label>
          <textarea
            className="h-32 px-4 py-2 rounded border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            name="message"
            placeholder="Your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full h-12 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300"
          type="submit"
        >
          Send
        </motion.button>

        {/* Feedback */}
        {feedback && (
          <div className={`flex items-center gap-4 mt-6 ${isSuccess ? "text-green-400" : "text-red-400"}`}>
            <p>{feedback}</p>
            <img className="w-12 rounded-xl" src={pug} alt="Feedback gif" />
          </div>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
