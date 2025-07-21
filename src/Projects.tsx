import project1 from "./assets/project1.png";
import portfolio1 from "./assets/portfolio1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const cardData = [
  {
    title: "Portfolio Clone",
    description:
      "Learn how to build responsive and dynamic user interfaces using modern JavaScript frameworks.",
    img: portfolio1,
    link: "https://keerthan4real.github.io/",
  },
  {
    title: "Embedded Systems",
    description:
      "Worked on microcontrollers, sensor data, and real-time communication using C and IoT protocols.",
    img: project1,
    link: "",
  },
  {
    title: "UI/UX Design",
    description:
      "Explore design principles and tools to create intuitive and beautiful interfaces.",
    img: project1,
    link: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#f0f4ff] px-6 py-10   w-full h-screen overflow-hidden"
    >
      <div className="absolute top-[-100px] left-[-100px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-extrabold my-12 sm:my-16 md:my-20">
        PROJECTS
      </h2>

      <div className="w-full flex justify-center items-center py-10 px-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={5}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full max-w-[350px] sm:max-w-[400px] h-60 sm:h-72 md:h-80 bg-white rounded-xl overflow-hidden shadow-lg group mx-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
