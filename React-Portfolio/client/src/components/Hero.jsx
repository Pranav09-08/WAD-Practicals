import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">Hi, I'm Abhishek Deshpande</h1>
          <p className="text-xl mt-4">Full Stack Developer</p>
          <p className="mt-4 text-gray-200">
            I design and build scalable, modern web applications with clean
            UI/UX.
          </p>
          <a href="#contact">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold">
              Hire Me
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
