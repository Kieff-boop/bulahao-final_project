import React from 'react';

const experiences = [
  {
    title: 'Personal Portfolio Website',
    type: 'Personal Project',
    date: '2025',
    description: 'Built a multi-page portfolio using HTML, CSS, and JavaScript with glassmorphism styling.',
  },
  {
    title: 'IT Coursework & Lab Work',
    type: 'University of the Cordilleras',
    date: '2023 – Present',
    description: 'Academic projects majoring in Networks Security, covering networking basics, web development, programming fundamentals, and databases.',
  },
];

const Experience = ({ darkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-[#228B22]';

  const cardStyle = darkMode
    ? 'bg-white/10 border-white/30'
    : 'bg-black/10 border-black/20';

  return (
    <section className="flex-1 px-[5%] py-[50px] flex flex-col gap-[20px]">

      <h2
        className="text-[40px] font-bold text-center mb-2"
        style={{ color: darkMode ? 'white' : '#228B22' }}
      >
        Experience
      </h2>

      {experiences.map((exp) => (
        <div
          key={exp.title}
          className={`${cardStyle} backdrop-blur-[10px] border rounded-[20px] p-[25px] transition-all duration-300 hover:-translate-y-1`}
        >
          <div className="flex justify-between items-start">

            <h3
              className="text-[20px] font-bold"
              style={{ color: darkMode ? 'white' : '#228B22' }}
            >
              {exp.title}
            </h3>

            <span
              className="text-[13px] ml-4"
              style={{ color: darkMode ? 'white' : '#228B22', opacity: 0.6 }}
            >
              {exp.date}
            </span>
          </div>

          <p
            className="text-[14px] mt-1 mb-3 font-medium"
            style={{ color: darkMode ? 'white' : '#228B22', opacity: 0.7 }}
          >
            {exp.type}
          </p>

          <p
            className="text-[16px] leading-relaxed"
            style={{ color: darkMode ? 'white' : '#228B22' }}
          >
            {exp.description}
          </p>

        </div>
      ))}

    </section>
  );
};

export default Experience;