import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import keerthan from "./assets/keerthan.jpeg";
import resumePDF from "./assets/resume-keerthan.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#f0f4ff] z-10 px-4 sm:px-6 md:px-12 md:py-10 w-full min-h-screen flex items-center justify-center flex-col md:flex-row overflow-hidden"
    >
      {/* 🔵 Animated background blobs */}
      <div className="absolute top-[-80px] sm:top-[-100px] right-[-80px] sm:right-[-100px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-80px] sm:bottom-[-100px] left-[-80px] sm:left-[-100px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Profile Image Area */}
      <div className="w-full h-auto md:h-full md:w-1/2 flex items-center justify-center my-0 md:my-0">
        <div className="relative w-[250px] sm:w-[350px] md:w-[550px] h-[250px] sm:h-[350px] md:h-[550px] flex items-center justify-center">
          <div className="absolute w-[200px] sm:w-[300px] md:w-[550px] h-[200px] sm:h-[300px] md:h-[550px] rounded-full border-[10px] sm:border-[15px] md:border-[20px] border-gray-600 z-0"></div>
          <div className="relative w-[180px] sm:w-[270px] md:w-[500px] h-[180px] sm:h-[270px] md:h-[500px] rounded-full overflow-hidden z-20">
            <img
              src={keerthan}
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* Text Area */}
      <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-4 sm:px-10">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          About Me
        </h2>
        <h4 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
          Hi, I'm <span className="text-blue-600">Keerthan</span>
        </h4>
        <p className="text-gray-700 font-semibold text-justify mt-4 text-sm sm:text-base md:text-lg max-w-xl">
          I'm a B.E. graduate from Vivekananda College of Engineering &
          Technology, Puttur. I'm a passionate front-end developer with
          experience in creating dynamic and responsive web applications using
          HTML, CSS, JavaScript, TypeScript, and React.js. I enjoy solving
          problems and building user-centric solutions. Currently, I'm exploring
          full-stack development and backend technologies.
        </p>

        <div className="mt-6 sm:mt-8 w-fit px-4 py-2 cursor-pointer bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform text-sm sm:text-base">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            Resume
            <span className="ml-2">
              <OpenInNewIcon fontSize="small" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
