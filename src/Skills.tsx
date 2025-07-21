import css from "./assets/css.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import tsx from "./assets/tsx.png";
import reactjs from "./assets/reactjs.png";
import python from "./assets/python.png";
import github from "./assets/github.png";
import tailwind from "./assets/tailwind.png";

const img_items = [
  { img: css, sName: "CSS" },
  { img: html, sName: "HTML" },
  { img: js, sName: "JavaScript" },
  { img: tsx, sName: "TypeScript" },
  { img: reactjs, sName: "React.js" },
  { img: python, sName: "Python" },
  { img: tailwind, sName: "Tailwind CSS" },
  { img: github, sName: "GitHub" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className=" bg-[#f0f4ff] relative px-6 pt-10 w-full min-h-screen   overflow-hidden flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🔵 Animated background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Heading - gradient inline */}
      <h2 className="text-5xl sm:text-7xl font-extrabold  bg-clip-text text-black drop-shadow-md z-10 text-center mb-12">
        SKILLS
      </h2>

      {/* Skills Grid */}
      <div className="relative z-10 max-w-7xl h-full">
        <ul className="mt-4 px-6 flex flex-wrap gap-10 items-center justify-center">
          {img_items.map((image, i) => (
            <li key={i}>
              <div
                className="group rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 md:border-white/30 shadow-xl flex flex-col items-center justify-center text-black relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-indigo-300
  size-24 sm:size-28 md:size-36 lg:size-40"
              >
                <img
                  src={image.img}
                  alt={image.sName}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                />

                <span className="absolute bottom-2 pt-4 font-bold text-xs sm:text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:inline">
                  {image.sName}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
