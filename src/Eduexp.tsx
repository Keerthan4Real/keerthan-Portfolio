import portfolioData from "./Data";
import work from "./assets/work.png";
import internship from "./assets/internship.png";

const Eduexp = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#f0f4ff] w-full min-h-screen scroll-mt-14 overflow-hidden"
    >
      {/* Background Pulses */}
      <div className="absolute top-[-100px] right-[-100px] sm:w-[300px] w-[200px] h-[200px] sm:h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] sm:w-[300px] w-[200px] h-[200px] sm:h-[300px] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Heading */}
      <h2 className="relative z-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mt-10 sm:mt-16 md:mt-20 mb-4 text-center md:text-left px-4 md:px-16">
        EXPERIENCE
      </h2>

      {/* Underline */}
      {/* <div className="relative z-10 h-2 sm:h-3 bg-pink-500 rounded-full mb-12 mx-4 md:ml-16 w-full sm:w-60 md:w-72 lg:w-[300px] xl:w-[320px] max-w-full" /> */}

      {/* Experience Cards */}
      <div className="relative z-10 py-10 sm:py-20 flex flex-wrap gap-10 justify-center items-start px-4 sm:px-6">
        {portfolioData.experience.map((item, idx) => (
          <div
            key={idx}
            className="w-[300px] sm:w-[380px] md:w-[420px] bg-white/20 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_4px_60px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-400/50 flex flex-col p-6 text-center overflow-hidden"
          >
            {/* Icon with glow effect */}
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-blue-200 via-indigo-300 to-indigo-400 shadow-lg flex items-center justify-center">
              <img
                src={item.type === "work" ? work : internship}
                alt={item.type}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Title, Company, Date */}
            <h3 className="text-xl font-bold text-black mb-1">{item.title}</h3>
            <p className="text-sm font-medium text-gray-600">{item.company}</p>
            <p className="text-xs text-indigo-500 mt-1">{item.date}</p>

            {/* Details */}
            <p className="mt-6 text-sm text-gray-800 leading-relaxed px-2 text-justify max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-transparent">
              {item.details[0]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eduexp;
