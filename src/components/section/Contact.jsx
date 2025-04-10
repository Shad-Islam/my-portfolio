import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-green-500/5 mb-4"
                placeholder="Name..."
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-green-500/5 mb-4"
                placeholder="abc@xyz.com"
              />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-green-500/5 mb-4"
                placeholder="Write your message here..."
              />
            </div>

            <button type="submit" className="w-full bg-teal-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] cursor-pointer">Send Message</button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
