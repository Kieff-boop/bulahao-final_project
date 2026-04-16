import React from 'react';

const educationData = [
  {
    school: 'University of the Cordilleras',
    degree: 'Bachelor of Science in Information Technology',
    period: '2023 – Present',
    location: 'Baguio City, Philippines',
  },
  {
    school: 'St. Pauls Academy of Sayangan Inc.',
    degree: 'STEM Strand',
    period: 'June 2018 - May 2024',
    location: 'Sayangan, Paoay, Atok, Benguet, Philippines',
  },
  {
    school: 'Bosleng Elementary School',
    degree: 'Primary Education',
    period: 'June 2010 - March 2018',
    location: 'Bosleng, Paoay, Atok, Benguet, Philippines',
  }
];

const Education = ({ darkMode }) => {
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
        Education
      </h2>

      {educationData.map((edu) => (
        <div
          key={edu.school}
          className={`${cardStyle} backdrop-blur-[10px] border rounded-[20px] p-[25px] transition-all duration-300 hover:-translate-y-1`}
        >
          <h3
            className="text-[22px] font-bold"
            style={{ color: darkMode ? 'white' : '#228B22' }}
          >
            {edu.school}
          </h3>

          <p
            className="text-[17px] mt-1"
            style={{ color: darkMode ? 'white' : '#228B22', opacity: 0.9 }}
          >
            {edu.degree}
          </p>

          <div
            className="flex justify-between mt-3 text-[14px]"
            style={{ color: darkMode ? 'white' : '#228B22', opacity: 0.6 }}
          >
            <span>📍 {edu.location}</span>
            <span>🗓 {edu.period}</span>
          </div>
        </div>
      ))}

    </section>
  );
};

export default Education;