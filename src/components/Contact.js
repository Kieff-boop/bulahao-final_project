import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const textColor = darkMode ? 'text-white' : 'text-[#228B22]';

  const cardStyle = darkMode
    ? 'bg-white/10 border-white/30'
    : 'bg-black/10 border-black/20';

  const inputStyle = darkMode
    ? 'bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-white'
    : 'bg-black/10 border-black/20 text-[#228B22] placeholder-[#228B22]/50 focus:border-[#228B22]';

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return;
    setSent(true);
  };

  return (
    <section className="flex-1 px-[5%] py-[50px] flex flex-col gap-[25px]">

      <h2 className={`text-[40px] font-bold text-center ${textColor}`}>
        Contact Me
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {[
          {
            label: 'Facebook',
            icon: 'ri-facebook-box-line',
            handle: 'Kieffer Kyle Bulahao',
            href: 'https://www.facebook.com/kiefferkyle.bulahao'
          },
          {
            label: 'Instagram',
            icon: 'ri-instagram-line',
            handle: '@kiepkiep_',
            href: 'https://www.instagram.com/kiepkiep_/'
          },
          {
            label: 'LinkedIn',
            icon: 'ri-linkedin-box-line',
            handle: 'Kieffer Kyle Bulahao',
            href: 'https://www.linkedin.com/in/kieffer-kyle-bulahao-7b5a77378/'
          },
          {
            label: 'GitHub',
            icon: 'ri-github-line',
            handle: 'github.com/Kieff-boop',
            href: 'https://github.com/Kieff-boop'
          },
        ].map(({ label, icon, handle, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-4 ${cardStyle} backdrop-blur border rounded-[20px] p-[18px] no-underline transition-all duration-300 hover:-translate-y-1`}
          >
            <i className={`${icon} text-[28px] ${textColor}`}></i>

            <div>
              <p className={`text-[13px] opacity-60 font-medium uppercase tracking-wider ${textColor}`}>
                {label}
              </p>
              <p className={`text-[15px] font-semibold ${textColor}`}>
                {handle}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className={`${cardStyle} backdrop-blur border rounded-[20px] p-[30px]`}>
        <h3 className={`text-[24px] font-bold mb-5 ${textColor}`}>
          Send a Message
        </h3>

        {sent ? (
          <div className="text-center py-8">
            <p className={`text-[20px] font-semibold ${textColor}`}>
              Message sent!
            </p>
            <p className={`opacity-70 mt-1 ${textColor}`}>
              Thanks for reaching out!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

            {[
              { name: 'name', placeholder: 'Your full name', type: 'text' },
              { name: 'email', placeholder: 'you@email.com', type: 'email' },
            ].map(({ name, placeholder, type }) => (
              <div key={name}>
                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={handleChange}
                  className={`w-full border rounded-[12px] px-4 py-3 text-[15px] outline-none transition-all ${inputStyle} ${errors[name] ? 'border-red-400' : ''}`}
                />
                {errors[name] && (
                  <p className="text-red-400 text-[13px] mt-1">
                    {errors[name]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className={`w-full border rounded-[12px] px-4 py-3 text-[15px] outline-none transition-all resize-none ${inputStyle} ${errors.message ? 'border-red-400' : ''}`}
              />
              {errors.message && (
                <p className="text-red-400 text-[13px] mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`px-[30px] py-[12px] bg-white/20 border-2 border-white/50 rounded-[40px] font-semibold text-[16px] cursor-pointer transition-all duration-300 hover:bg-white/30 hover:border-white hover:-translate-y-1 ${textColor}`}
            >
              Send Message
            </button>

          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;