import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Error sending message, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 px-4 ${
        isDarkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <RevealOnScroll>
        <div
          className={`w-full max-w-lg p-6 rounded-xl shadow-lg ${
            isDarkMode ? "bg-black/50 border-white/10" : "bg-white border-gray-300"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6 " onSubmit={handelSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full bg-white/5 border rounded px-4 py-3 transition focus:outline-none focus:border-teal-500 ${
                  isDarkMode
                    ? "border-white/10 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full bg-white/5 border rounded px-4 py-3 transition focus:outline-none focus:border-teal-500 ${
                  isDarkMode
                    ? "border-white/10 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="abc@xyz.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`w-full bg-white/5 border rounded px-4 py-3 transition focus:outline-none focus:border-teal-500 ${
                  isDarkMode
                    ? "border-white/10 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
