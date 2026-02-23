const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Bootstrap",
  "Figma",
  "Python",
  "DSA",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white py-3 rounded-xl text-center font-semibold shadow hover:bg-blue-500 hover:text-white transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
