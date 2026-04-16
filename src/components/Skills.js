import React from 'react';

const skillsData = [
  { name: 'Cisco IOS CLI', level: 30 },
  { name: 'React JS', level: 10 },
  { name: 'Tailwind CSS', level: 10 },
  { name: 'JavaScript', level: 10 },
  { name: 'HTML & CSS', level: 50 },
  { name: 'Python', level: 40 },
  { name: 'Git & GitHub', level: 30 },
];

const certificates = [
  {
    name: 'Cisco Networking Basics',
    image: '/cert1.jpg',
    description: 'Fundamentals of networking and Cisco CLI operations.'
  },
  {
    name: 'Web Development Basics',
    image: '/cert2.jpg',
    description: 'HTML, CSS, and JavaScript foundational certificate.'
  },
  {
    name: 'React Basics',
    image: '/cert3.jpg',
    description: 'Introduction to React components, props, and state.'
  },
  {
    name: 'JavaScript Basics',
    image: '/cert4.jpg',
    description: 'Core JavaScript fundamentals including variables, functions, and loops.'
  }
];

const Skills = ({ darkMode }) => {

  const textColor = darkMode ? '#ffffff' : '#228B22';

  const cardStyle = darkMode
    ? 'bg-white/10 border-white/30'
    : 'bg-black/10 border-black/20';

  const barBg = darkMode ? 'bg-white/20' : 'bg-black/20';

  return (
    <section className="flex-1 px-[5%] py-[50px] flex flex-col gap-[30px]">

      {/* SKILLS */}
      <div className={`${cardStyle} backdrop-blur-[10px] border rounded-[20px] p-[30px]`}>
        <h2 className="text-[40px] font-bold mb-[30px] text-center" style={{ color: textColor }}>
          Skills
        </h2>

        <div className="flex flex-col gap-5">
          {skillsData.map(({ name, level }) => (
            <div key={name}>
              <div className="flex justify-between mb-2">
                <span className="text-[18px] font-medium" style={{ color: textColor }}>
                  {name}
                </span>
                <span className="text-[14px]" style={{ color: textColor, opacity: 0.7 }}>
                  {level}%
                </span>
              </div>

              <div className={`w-full h-[8px] ${barBg} rounded-full overflow-hidden`}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${level}%`,
                    backgroundColor: textColor
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATES */}
      <div>

        <h2 className="text-[30px] font-bold mb-[20px] text-center" style={{ color: textColor }}>
          Certificates
        </h2>

        <div className="carousel-wrapper">
          <div className="carousel-track">

            {[...certificates, ...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className={`${cardStyle} backdrop-blur-[10px] border rounded-[20px] overflow-hidden flex-shrink-0 w-[280px] flex flex-col transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
              >

                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-[18px]">

                  <h3 className="text-[17px] font-semibold mb-[6px]" style={{ color: textColor }}>
                    {cert.name}
                  </h3>

                  <p className="text-[14px] leading-relaxed" style={{ color: textColor, opacity: 0.85 }}>
                    {cert.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;