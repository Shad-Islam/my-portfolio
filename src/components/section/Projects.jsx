import RevealOnScroll from "../RevealOnScroll";

const Projects = ({ isDarkMode }) => {
  return (
    <section
      id="projects"
      className={`min-h-screen flex items-center justify-center py-20 ${
        isDarkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first project */}
            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "border-white/10 bg-black/50"
                  : "border-gray-300 bg-white"
              } hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">Ecommerce Website</h3>
              <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
                cart management,promo code interation, persistent cart data
                ,dynamically calculate total amount and responsive design.
              </p>

              <div className="flex flex-wrap">
                {["JavaScript", "HTML", "CSS"].map((skill, key) => (
                  <span
                    key={key}
                    className={`py-1 px-3 rounded-full text-sm font-medium mr-2 mt-2 transition ${
                      isDarkMode
                        ? "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20"
                        : "bg-teal-500/20 text-teal-700 hover:bg-teal-500/30"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <a
                  href="https://shad-islam.github.io/shopping-cart-with-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* second project */}
            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "border-white/10 bg-black/50"
                  : "border-gray-300 bg-white"
              } hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">Online Dice Game </h3>
              <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
                The project is organized into multiple React components, each
                component has a specific responsibility and maintainable code
                structure.
              </p>

              <div className="flex flex-wrap">
                {["React", "JavaScript", "HTML", "CSS"].map((skill, key) => (
                  <span
                    key={key}
                    className={`py-1 px-3 rounded-full text-sm font-medium mr-2 mt-2 transition ${
                      isDarkMode
                        ? "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20"
                        : "bg-teal-500/20 text-teal-700 hover:bg-teal-500/30"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <a
                  href="https://shad-islam.github.io/Dice-Game/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* third project */}

            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "border-white/10 bg-black/50"
                  : "border-gray-300 bg-white"
              } hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">Note App </h3>
              <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
                CRUD, searching, filtering (all, selected, unselected), and
                managing notes efficiently. It uses React for state management
                and prioritizes user-friendly design and teamwork.
              </p>

              <div className="flex flex-wrap">
                {["React", "JavaScript", "HTML", "CSS"].map((skill, key) => (
                  <span
                    key={key}
                    className={`py-1 px-3 rounded-full text-sm font-medium mr-2 mt-2 transition ${
                      isDarkMode
                        ? "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20"
                        : "bg-teal-500/20 text-teal-700 hover:bg-teal-500/30"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <a
                  href="https://shad-islam.github.io/Note-pad-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* fourth project */}

            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "border-white/10 bg-black/50"
                  : "border-gray-300 bg-white"
              } hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">
                Student Management System
              </h3>
              <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
                This project allows users to perform CRUD operations on student
                data with a responsive layout and dynamic success/error
                messages. It highlights key Django features, such as models,
                views, and templates, making it a useful tool for learning
                full-stack web development.
              </p>

              <div className="flex flex-wrap">
                {["Django", "Pyhton", "Tailwind CSS", "HTML", "CSS"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm font-medium mr-2 mt-2 hover:bg-teal-500/20 
                   hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-2">
                <a
                  href="https://student-management-65p0.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
