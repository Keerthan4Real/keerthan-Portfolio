import React from "react";
import portfolioData from "./Data";

const Certificates = () => {
  return (
    <section id="certificates" className="px-6 py-10  w-full h-50 bg-blue-500">
      <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
      <ul className="list-disc ml-6 text-gray-700">
        {portfolioData.certificates.map((cert, idx) => (
          <li key={idx}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
