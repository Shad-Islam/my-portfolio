import RevealOnScroll from "../RevealOnScroll";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const About = () => {
  const { isDarkMode } = useContext(AppContext);
  const frontendSkills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
  ];
  const backendSkills = ["Python", "Django", "Mysql"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div
            className={`glass rounded-xl p-8 border ${
              isDarkMode
                ? "border-white/10 bg-black/50 text-gray-300"
                : "border-gray-300 bg-white text-gray-800"
            } hover:-translate-y-1 transition-all duration-200`}
          >
            <p className="mb-6">
              I'm a passionate software engineer with a strong interest in open
              source development. I enjoy building innovative solutions and
              contributing to projects that make a difference. My journey in
              tech has been fueled by a desire to learn and grow, and I'm always
              excited to take on new challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm font-medium transition ${
                        isDarkMode
                          ? "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)]"
                          : "bg-teal-500/20 text-teal-700 hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm font-medium transition ${
                        isDarkMode
                          ? "bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)]"
                          : "bg-teal-500/20 text-teal-700 hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "border-white/10 bg-black/50 text-gray-300"
                  : "border-gray-300 bg-white text-gray-800"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>B.Sc. in Computer Science</strong> - Stamford
                  University Bangladesh (2021 - 2025)
                </li>
                <li>
                  Relevant Courses: Data Structures & Algorithms, Web
                  Development, Database Management Systems, Software
                  Engineering
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "border-white/10 bg-black/50 text-gray-300"
                  : "border-gray-300 bg-white text-gray-800"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    Web Developer at SVC (2023-2024)
                  </h4>
                  <p>
                    I worked as a Web Developer at SVC, where I was responsible
                    for developing and maintaining web applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern at Jukto Digital (2022)
                  </h4>
                  <p>
                    Assisted in developing front-end components and creating a
                    user-friendly interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;