import React, { useState } from 'react';
import './index.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const pub = process.env.PUBLIC_URL;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat p-[20px_5%] md:p-[50px_5%]"
        style={{
          backgroundImage: darkMode ? `url(${pub}/bg.jpg)` : `url(${pub}/bg-light.jpg)`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          className="relative min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-100px)] rounded-[30px] flex flex-col backdrop-blur"
          style={{
            background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
          }}
        >
          <header
            className={`w-full px-[5%] py-[15px] flex justify-between items-center z-20 sticky top-0 rounded-t-[30px] border-b-2 backdrop-blur-xl
            ${darkMode ? 'bg-white/10 border-white/30' : 'bg-black/10 border-black/20'}`}
          >
            <button
              onClick={() => { setActivePage('home'); setMenuOpen(false); }}
              className={`text-[24px] md:text-[30px] font-semibold cursor-pointer bg-transparent border-none ${darkMode ? 'text-white' : 'text-green-800'}`}
            >
              Portfolio!
            </button>

            <nav className="hidden md:flex items-center">
              {['home', 'about', 'skills', 'education', 'experience', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`text-[16px] font-medium ml-[25px] border-b-2 transition-all duration-300 capitalize bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer
                    ${darkMode ? 'text-white' : 'text-green-800'}
                    ${activePage === page ? 'border-current' : 'border-transparent hover:border-current'}`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-[25px] px-[16px] py-[6px] border-2 rounded-[30px] text-[14px] font-medium cursor-pointer
                ${darkMode
                  ? 'bg-white/20 border-white/50 text-white hover:bg-white/30'
                  : 'bg-black/10 border-black/30 text-green-800 hover:bg-black/20'
                }`}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </nav>

            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-[12px] py-[5px] border-2 rounded-[30px] text-[12px] font-medium cursor-pointer
                ${darkMode
                  ? 'bg-white/20 border-white/50 text-white'
                  : 'bg-black/10 border-black/30 text-green-800'
                }`}
              >
                {darkMode ? 'Light' : 'Dark'}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`text-[28px] bg-transparent border-none cursor-pointer ${darkMode ? 'text-white' : 'text-green-800'}`}
              >
                <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
              </button>
            </div>
          </header>

          {menuOpen && (
            <div className={`md:hidden flex flex-col z-10 px-[5%] py-[15px] gap-3 border-b-2
              ${darkMode ? 'bg-white/10 border-white/30' : 'bg-black/10 border-black/20'}`}
            >
              {['home', 'about', 'skills', 'education', 'experience', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => { setActivePage(page); setMenuOpen(false); }}
                  className={`text-[16px] font-medium text-left capitalize bg-transparent border-none cursor-pointer py-1
                    ${darkMode ? 'text-white' : 'text-green-800'}
                    ${activePage === page ? 'font-bold underline' : ''}`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </div>
          )}

          <div className="flex-1 flex flex-col">
            {activePage === 'home' && (
              <section className="flex flex-col-reverse md:flex-row items-center flex-1 gap-[30px] md:gap-[50px] px-[5%] py-[40px] md:py-[50px]">
                <div className="flex-1 text-center md:text-left">
                  <h1
                    className="text-[36px] md:text-[55px] leading-tight font-bold"
                    style={{ color: darkMode ? 'white' : 'forestgreen' }}
                  >
                    Kieffer Kyle Bulahao
                  </h1>

                  <h2
                    className="text-[20px] md:text-[30px] font-semibold mt-1"
                    style={{ color: darkMode ? 'white' : 'forestgreen' }}
                  >
                    Information Technology Student
                  </h2>

                  <p
                    className="mt-[10px] mb-[20px] text-[15px] md:text-base"
                    style={{ color: darkMode ? 'white' : 'forestgreen' }}
                  >
                    I am a student from the University of the Cordilleras, proud Igorot and proud Rawet.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                    <button
                      onClick={() => {}}
                      className="px-[30px] py-[10px] bg-white/20 backdrop-blur border-2 border-white/50 rounded-[40px] font-medium transition-all duration-300 hover:bg-white/30 hover:border-white hover:-translate-y-1 cursor-pointer"
                      style={{ color: darkMode ? 'white' : 'forestgreen' }}
                    >
                      Download CV
                    </button>

                    <div className="flex gap-3">
                      <a href="https://www.facebook.com/kiefferkyle.bulahao" className="p-2 bg-white/15 border-2 border-white/40 rounded-full text-[20px] text-white no-underline hover:bg-white/30">
                        <i className="ri-facebook-box-line"></i>
                      </a>
                      <a href="https://www.instagram.com/kiepkiep_/" className="p-2 bg-white/15 border-2 border-white/40 rounded-full text-[20px] text-white no-underline hover:bg-white/30">
                        <i className="ri-instagram-line"></i>
                      </a>
                      <a href="https://github.com/Kieff-boop" className="p-2 bg-white/15 border-2 border-white/40 rounded-full text-[20px] text-white no-underline hover:bg-white/30">
                        <i className="ri-github-line"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/kieffer-kyle-bulahao-7b5a77378/" className="p-2 bg-white/15 border-2 border-white/40 rounded-full text-[20px] text-white no-underline hover:bg-white/30">
                        <i className="ri-linkedin-box-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-[220px] h-[220px] md:w-[28vw] md:h-[28vw] border-2 border-white rounded-full shadow-[0_0_20px_white] overflow-hidden relative">
                    <img
                      src={darkMode ? `${pub}/imgp.jpg` : `${pub}/imgp-light.jpg`}
                      alt="Profile"
                      className="absolute bottom-0 w-full object-cover"
                    />
                  </div>
                </div>
              </section>
            )}

            {activePage === 'about' && <AboutMe darkMode={darkMode} />}
            {activePage === 'skills' && <Skills darkMode={darkMode} />}
            {activePage === 'education' && <Education darkMode={darkMode} />}
            {activePage === 'experience' && <Experience darkMode={darkMode} />}
            {activePage === 'contact' && <Contact darkMode={darkMode} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;