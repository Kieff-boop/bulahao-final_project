import React from 'react';

const pub = process.env.PUBLIC_URL;

const hobbies = [
  { name: 'Gym', description: 'Staying fit and building strength through consistent training.', image: `${pub}/gym.jpg` },
  { name: 'Hiking', description: 'Exploring trails and mountains around the Cordilleras.', image: `${pub}/hiking.jpg` },
  { name: 'Nature', description: 'Appreciating the beauty of the natural world around us.', image: `${pub}/nature.jpg` },
  { name: 'Motorcycles', description: 'Riding through mountain roads and exploring new routes.', image: `${pub}/motorcycle.jpg` },
];

const AboutMe = ({ darkMode }) => {

  const textColor = darkMode ? '#ffffff' : '#228B22';

  const cardStyle = darkMode
    ? 'bg-white/10 border-white/30'
    : 'bg-black/10 border-black/20';

  return (
    <section className="flex-1 px-[5%] py-[50px] flex flex-col gap-[30px]">

      <div className={`${cardStyle} backdrop-blur-[10px] border rounded-[20px] p-[30px] text-center`}>

        <h2 className="text-[40px] font-bold mb-[20px]" style={{ color: textColor }}>
          About Me
        </h2>

        <p className="text-[18px] leading-relaxed" style={{ color: textColor }}>
          I'm <strong style={{ color: textColor }}>Kieffer Kyle Bulahao</strong>, an Information Technology student from the University of the Cordilleras. Proud Igorot and proud Rawet!
        </p>

      </div>

      <div className="flex-1 flex flex-col">

        <h2 className="text-[30px] font-bold mb-[20px] text-center" style={{ color: textColor }}>
          Hobbies
        </h2>

        <div className="carousel-wrapper">
          <div className="carousel-track">

            {[...hobbies, ...hobbies].map((hobby, index) => (
              <div
                key={index}
                className={`${cardStyle} backdrop-blur-[10px] border rounded-[20px] overflow-hidden flex-shrink-0 w-[280px] flex flex-col hover:scale-105 transition-transform duration-300`}
              >

                <div className="w-full h-[200px] overflow-hidden">
                  <img src={hobby.image} alt={hobby.name} className="w-full h-full object-cover" />
                </div>

                <div className="p-[18px]">
                  <h3 className="text-[17px] font-semibold mb-[6px]" style={{ color: textColor }}>
                    {hobby.name}
                  </h3>

                  <p className="text-[14px] leading-relaxed" style={{ color: textColor, opacity: 0.85 }}>
                    {hobby.description}
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

export default AboutMe;