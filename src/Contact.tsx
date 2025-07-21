import { motion } from "framer-motion";
import communication from "./assets/communication.png";
import linkedin from "./assets/linkedin.png";
import git from "./assets/github-sign.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#f0f4ff] w-full flex flex-col items-center justify-center py-16 px-4   overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute  w-[300px] h-[300px] bg-purple-300 opacity-10 rounded-full bottom-[-100px] left-0 blur-3xl animate-pulse" />
      <div className="absolute  w-[300px] h-[300px] bg-blue-300 opacity-10 rounded-full top-[-100px] right-[-100px] blur-3xl animate-pulse" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg z-10"
      >
        LET'S CONNECT
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 mt-4 mb-10 text-center z-10"
      >
        Feel free to reach out via any platform below
      </motion.p>

      {/* Icons */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-row gap-10 flex-wrap justify-center z-10"
      >
        {/* Email */}
        <li>
          <a
            href="mailto:keerthangowda7647@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
              className="p-6 bg-white shadow-xl hover:shadow-blue-400 rounded-2xl transition-all"
            >
              <img src={communication} alt="Email" className="w-16 h-16" />
            </motion.div>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
              className="p-6 bg-white shadow-xl hover:shadow-indigo-400 rounded-2xl transition-all"
            >
              <img src={linkedin} alt="LinkedIn" className="w-16 h-16" />
            </motion.div>
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
              className="p-6 bg-white shadow-xl hover:shadow-black rounded-2xl transition-all"
            >
              <img src={git} alt="GitHub" className="w-16 h-16" />
            </motion.div>
          </a>
        </li>
      </motion.ul>
    </section>
  );
};

export default Contact;
