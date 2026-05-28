import { useState } from 'react';

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const projects = [
  {
    title: 'Cleaning Website',
    description: 'A fully functional Cleaning platform built with modern web technologies. Features include a giving a five-star rating, inquiry for bookings, contact information and services provided.',
    image: 'https://placehold.co/600x400/374151/9ca3af?text=Project+One',
    url: 'https://arnoldkhamisi.github.io/fifo-kleen/',
  },
  {
    title: 'Movie Web App',
    description: 'A responsive web application for watching movies. It allows users to watch trailers, view movie details, and read reviews. It also allows users to search for movies and be able to save their favorites.',
    image: 'https://placehold.co/600x400/374151/9ca3af?text=Project+Two',
    url: 'https://movie-bass.vercel.app/movie/1304313',
  },
  {
    title: 'eCommerce',
    description: 'An online  store that allows customers purchase goods online, place orders and be able  to track  their items',
    image: 'https://placehold.co/600x400/374151/9ca3af?text=Project+Three',
    url: 'https://arnoldkhamisi.github.io/eComerce/',
  },
  {
    title: "Trevor's Kitchen",
    description: "Trevor's Kitchen is a modern restaurant website showcasing menu, online orders, and customer reviews. Built with clean UI and smooth animations.",
    image: "https://placehold.co/600x400/374151/9ca3af?text=Project+Four",
    url: "./assets/Trevor's.png",
  },
  {
    title: 'Sunrise Cafe',
    description: 'A vibrant, modern café poster crafted to capture attention with warm tones, playful typography, and inviting imagery.',
    image: 'https://placehold.co/600x400/374151/9ca3af?text=Project+Five',
    url: './assets/sunrise cafe.png',
  },
  {
    title: 'Trade Fare Exhibition',
    description: 'This poster was designed for the TNNP Annual Trade Fair Tech Expo. It features a split-color layout, hexagonal tech imagery, modern fonts, and strong contrasts to highlight event activities, venue, and dates.',
    image: 'https://placehold.co/600x400/374151/9ca3af?text=Project+Six',
    url: './assets/trade fare exhibition.png',
  },
];

const skillCategories = [
  {
    title: 'Mobile Development',
    items: ['React Native', 'Android Studio (Kotlin & Java)', 'Responsive Design', 'Firebase'],
  },
  {
    title: 'Backend & Database',
    items: ['Node.js', 'PHP', 'MySQL', 'MongoDB', 'phpMyAdmin', 'XAMPP', 'REST APIs'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Responsive UI'],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git & GitHub', 'Slack', 'Canva', 'Photoshop', 'Excel & Google Sheets'],
  },
  {
    title: 'Network Infrastructure',
    items: ['Routing & Switching', 'Network Configuration', 'Network Security', 'Network Monitoring', 'Network Troubleshooting', 'Network Administration', 'Cable Termination & Crimping'],
  },
  {
    title: 'Graphics Designing',
    items: ['Canva', 'Photoshop', 'Figma', 'Illustrator', 'Adobe Lightroom'],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const sendContactEmail = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${contactName || contactEmail || 'Website'}`);
    const body = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\n\n${contactMessage}`);
    const mailto = `mailto:arnold45khamisi@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setContactOpen(false);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  const scrollToSection = (sectionId) => (event) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="#about" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Khamisi Arnold
          </a>

          <div className="space-x-4 hidden md:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={scrollToSection(item.id)}
                className="hover:text-pink-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="text-white md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        <div className={`${menuOpen ? '' : 'hidden'} md:hidden bg-gray-800 mt-2 rounded-md shadow-lg p-4`}>
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={scrollToSection(item.id)}
              className="block py-2 hover:bg-gray-700 transition-colors rounded-lg text-center"
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section id="about" className="section-padding flex flex-col items-center text-center">
          <div className="max-w-xl mx-auto">
            <img
              src="./assets/1763395154231.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-pink-500 shadow-lg hover:scale-105 transform transition-transform"
            />
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Khamisi Arnold
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed max-w-lg mx-auto">
              Full-Stack Developer &amp; IT Professional passionate about building clean, scalable web applications and robust technical infrastructure. I bridge the gap between great code and reliable systems — from crafting modern UIs to configuring networks and managing databases.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-500 mb-2">
              <span>📧 arnold45khamisi@gmail.com</span>
              <span>📞 +254 790 243 011</span>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-block bg-pink-600 text-white font-bold text-xl py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition-colors transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </section>

        <section id="projects" className="section-padding bg-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-700 rounded-2xl overflow-hidden shadow-xl p-6 transform transition-transform hover:scale-105">
                <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition-colors shadow-lg"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-padding bg-slate-950 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Skills &amp; Expertise</h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                Here are some of the key skills I have developed across full-stack development and IT infrastructure.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {skillCategories.map((category) => (
                <div key={category.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-sm text-gray-200 hover:border-cyan-500 hover:text-cyan-300 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CV section removed per user request */}

        <section id="contact" className="section-padding text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on social media.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="inline-block bg-pink-600 text-white font-bold text-xl py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition-colors transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
          <div className="socials flex gap-4">
            <a
              className="social linkedin"
              href="https://ke.linkedin.com/in/arnold-khamisi-0b02472b5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.9h4.54V24H.2V8.9zM9.7 8.9h4.35v2.06h.06c.6-1.14 2.08-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.56v-7.4c0-1.76-.03-4.03-2.46-4.03-2.47 0-2.85 1.93-2.85 3.9V24H9.7V8.9z"
                />
              </svg>
            </a>
            <a
              className="social github"
              href="https://github.com/arnoldkhamisi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.7 3.07 8.68 7.33 10.08.54.1.74-.23.74-.52 0-.26-.01-1-.02-1.96-2.98.65-3.6-1.44-3.6-1.44-.49-1.26-1.2-1.6-1.2-1.6-.98-.67.07-.66.07-.66 1.08.08 1.65 1.11 1.65 1.11.96 1.64 2.51 1.17 3.12.9.1-.7.38-1.17.69-1.44-2.38-.27-4.88-1.19-4.88-5.29 0-1.16.41-2.11 1.08-2.86-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.88 1.08A9.8 9.8 0 0112 6.8c.89.00 1.79.12 2.63.36 2-.36 2.88-1.08 2.88-1.08.57 1.48.21 2.57.11 2.84.67.75 1.08 1.7 1.08 2.86 0 4.11-2.51 5.02-4.9 5.29.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.63.75.52C20.94 20.18 24 16.2 24 11.5 24 5.24 19.27.5 12 .5z"
                />
              </svg>
            </a>
            <a
              className="social instagram"
              href="https://www.instagram.com/@705schwartz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Instagram profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm6.4-2.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM12 9.8a2.2 2.2 0 110 4.4 2.2 2.2 0 010-4.4z"
                />
              </svg>
            </a>
            <a
              className="social whatsapp"
              href="https://wa.me/254790243011"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with me on WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setContactOpen(false)} />
          <form onSubmit={sendContactEmail} className="relative w-full max-w-xl mx-4 rounded-2xl bg-white/5 border border-slate-700 p-6 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-white">Send a message</h3>
            <label className="block text-sm text-gray-300 mb-2">Name</label>
            <input
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full mb-4 rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-white"
              placeholder="Your name"
            />
            <label className="block text-sm text-gray-300 mb-2">Your Email</label>
            <input
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full mb-4 rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-white"
              placeholder="your@email.com"
            />
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              className="w-full mb-4 rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-white min-h-[120px]"
              placeholder="Write your message..."
            />
            <div className="flex gap-3 justify-end">
              <button type="button" onClick={() => setContactOpen(false)} className="px-4 py-2 rounded-md bg-gray-600 text-white">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-md bg-pink-600 text-white">Send</button>
            </div>
          </form>
        </div>
      )}

      <footer className="bg-gray-900 text-gray-500 text-center py-6 border-t border-gray-700">
        <p>&copy; 2025 Khamisi Arnold. All rights reserved.</p>
      </footer>
    </div>
  );
}
