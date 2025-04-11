import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
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
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-lg  p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-green-500/5 "
                placeholder="Name..."
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-green-500/5 "
                placeholder="abc@xyz.com"
              />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-green-500/5 "
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
