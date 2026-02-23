import { motion } from "framer-motion";

const projects = [
  {
    title: "Carbon Footprint Tracker",
    desc: "Tracks individual carbon emissions from daily activities.",
  },
  {
    title: "MentorTrack",
    desc: "Android app connecting mentors and students.",
  },
  {
    title: "Emergency QR Code System",
    desc: "Instant medical data access via QR scan.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-gray-600">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
