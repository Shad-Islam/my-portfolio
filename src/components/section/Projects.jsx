export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first project */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Ecommerce Website</h3>
            <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
              cart management,promo code interation, persistent cart data
              ,dynamically calculate total amount and responsive design.
            </p>

            <div>
                {["JavaScript","HTML","CSS"].map((skill, key) => (
                   <span
                   key={key}
                   className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-teal-500/20 
                   hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition"
                 >
                   {skill}
                 </span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-2">
                <a href="https://shad-islam.github.io/shopping-cart-with-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block">
                View Project → </a>
            </div>
          </div>
          {/* second project */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Online Dice Game </h3>
            <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
                 The project is organized into multiple React components, each component has a specific responsibility and maintainable code structure.
            </p>

            <div>
                {["React","JavaScript","HTML","CSS"].map((skill, key) => (
                   <span
                   key={key}
                   className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-teal-500/20 
                   hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition"
                 >
                   {skill}
                 </span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-2">
                <a href="https://shad-islam.github.io/Dice-Game/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block">
                View Project → </a>
            </div>
          </div>
            {/* third project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">QR Code Generator </h3>
            <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
                This project showcases fundamental DOM manipulation, API integration, and effective user feedback handling.
            </p>

            <div>
                {["JavaScript","SCSS","HTML","CSS"].map((skill, key) => (
                   <span
                   key={key}
                   className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-teal-500/20 
                   hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition"
                 >
                   {skill}
                 </span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-2">
                <a href="https://shad-islam.github.io/QR-code-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block">
                View Project → </a>
            </div>
          </div>
            {/* fourth project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Weather App </h3>
            <p className="text-gray-400 mb-4">
                <strong>Key features: </strong>
                CRUD, searching, filtering (all, selected, unselected), and managing notes efficiently. It uses React for state management and prioritizes user-friendly design and teamwork.
            </p>

            <div>
                {["React","JavaScript","HTML","CSS"].map((skill, key) => (
                   <span
                   key={key}
                   className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-teal-500/20 
                   hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition"
                 >
                   {skill}
                 </span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-2">
                <a href="https://shad-islam.github.io/Note-pad-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 transition duration-200 mt-4 inline-block">
                View Project → </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
