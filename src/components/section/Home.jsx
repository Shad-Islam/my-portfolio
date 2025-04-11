import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
            Hi, I'm Momshad Islam
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a Software Engineer and an Open Source Enthusiast. I love to
            learn and share my knowledge with others. I am passionate about
            building and contributing to open source projects.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-teal-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-teal-500/50 rounded text-teal-500 py-3 px-6 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:bg-teal-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
