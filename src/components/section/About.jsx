export const About = () => {
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
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-200">
          <p className="text-gray-300 mb-6">
            I'm a passionate software engineer with a strong interest in open
            source development. I enjoy building innovative solutions and
            contributing to projects that make a difference. My journey in tech
            has been fueled by a desire to learn and grow, and I'm always
            excited to take on new challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* frontend skills start*/}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-teal-500/20 
                    hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* frontend skills end*/}

            {/* backend skills start*/}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm font-medium hover:bg-teal-500/20 
                    hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* backend skills end */}
          </div>
        </div>
        {/* education & work part start */}
        <div className="grid grid-col-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.Sc. in Computer Science</strong> - Stamford University
                Bangladesh (2021 - 2025)
              </li>
              <li>
                Relevant Courses: Data Structures & Algorithms, Web Development,
                Database Management Systems, Software Engineering
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
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
        {/* education & work part end */}
      </div>
    </section>
  );
};
