import Head from "next/head";
import { FC, useEffect, useState } from "react";

const roles = ["Frontend Developer", "Digital Designer"];

const Home: FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  const handleTyping = () => {
    const role = roles[currentRoleIndex];
    setDisplayText(role);
    setIsDeleting(false);
  };

  useEffect(() => {
    handleTyping();
  }, [currentRoleIndex]);

  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Portfolio | Artilon Hyseni</title>
        <meta name="description" content="Portfolio of Artilon Hyseni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center">
        <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4">
          <h1 className="text-4xl font-bold">Artismedia</h1>
          <span className="text-white">Front-End Developer</span>
        </header>

        <div>
          <h1 className="text-9xl font-extrabold mb-4">Artilon Hyseni</h1>
          <p className="text-2xl">
            {displayText}
            <span className="blinking-cursor">|</span>
          </p>
        </div>
        <div className="absolute bottom-8 animate-bounce text-gray-400">
          <p>Scroll Down</p>
          <span>↓</span>
        </div>
      </section>

      {/* Kompetencer Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-900">
        <h2 className="text-6xl font-semibold mb-16 text-center">Kompetencer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 px-8 w-full max-w-4xl">
          {/* Programmering */}
          <div className="flex flex-col text-left">
            <h3 className="text-3xl font-bold mb-4">Programmering</h3>
            <p className="text-gray-400">
              Jeg har erfaring med frontend webudvikling, ved brug af diverse værktøjer som HTML, CSS og React. Disse værktøjer bruger jeg for at skabe brugervenlige digitale løsninger og webapplikationer.
            </p>
          </div>

          {/* UX/UI Design */}
          <div className="flex flex-col text-left">
            <h3 className="text-3xl font-bold mb-4">UX/UI Design</h3>
            <p className="text-gray-400">
              Med arbejde i UX/UI sikrer jeg, at brugeren altid er hovedpunktet. Jeg har stor passion for at skabe en skarp informationsarkitektur og attraktive interfaces.
            </p>
          </div>

          {/* Responsivt Design */}
          <div className="flex flex-col text-left">
            <h3 className="text-3xl font-bold mb-4">Responsivt Design</h3>
            <p className="text-gray-400">
              Med responsivt design kan mit arbejde bidrage med at gøre hjemmesiden mobilvenlig for at opnå den bedste brugeroplevelse.
            </p>
          </div>

          {/* Grafisk Design */}
          <div className="flex flex-col text-left">
            <h3 className="text-3xl font-bold mb-4">Grafisk Design</h3>
            <p className="text-gray-400">
              Med en stor viden for Adobe After Effects og Creative Cloud kan jeg skabe visuelt attraktive illustrationer.
            </p>
          </div>
        </div>
      </section>

    {/* Mine Projekter Section */}
<section className="h-auto flex flex-col items-center bg-gray-800 py-16">
  <h2 className="text-6xl font-semibold mb-16 text-center text-white">Mine Projekter</h2>

  {/* Webdesign Sektion */}
  <div className="flex flex-wrap md:flex-nowrap w-full max-w-6xl mb-16">
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-4xl font-bold text-white mb-4">Webdesign</h3>
      <p className="text-gray-400 mb-6">
        Jeg skaber moderne, responsivt webdesign med fokus på brugervenlighed og æstetik. Projekterne inkluderer
        kreative løsninger designet i Figma og kodet med HTML, CSS og React. Dette projekt er en hjemmeside for et musik projekt, som jeg har arbejdet med.
      </p>
      <a
        href="https://mortenkirch.github.io/u-music-webapp/"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Se Projekt
      </a>
    </div>
    <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
      <div className="relative group w-full h-auto bg-gray-700 rounded overflow-hidden">
        <img
          src="Music.png"
          alt="Webdesign projekt"
          className="w-full h-auto object-contain group-hover:opacity-75 transition"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-lg">Umusic</p>
        </div>
      </div>
    </div>
  </div>

  {/* Logo Design Sektion */}
  <div className="flex flex-wrap md:flex-nowrap w-full max-w-6xl mb-16">
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-4xl font-bold text-white mb-4">Logo Design</h3>
      <p className="text-gray-400 mb-6">
        Jeg laver kreative logoer, til diverse projekter. Ligenu er jeg i gang med at lave logo til en salon. Dette projekt er blevet udført i Adobe Illustrator og ville offentliggøres senere.
      </p>
      <a
        href="#"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Se Projekt
      </a>
    </div>
    <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
      <div className="relative group w-full h-64 bg-gray-700 rounded overflow-hidden">
        <img
          src="/path/to/logo-design.jpg"
          alt="Logo design projekt"
          className="w-full h-full object-cover group-hover:opacity-75 transition"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-lg">Kreative Logoer</p>
        </div>
      </div>
    </div>
  </div>

  {/* Grafisk Design Sektion */}
  <div className="flex flex-wrap md:flex-nowrap w-full max-w-6xl mb-16">
    <div className="w-full md:w-1/2 p-4">
      <h3 className="text-4xl font-bold text-white mb-4">Grafisk Design</h3>
      <p className="text-gray-400 mb-6">
        Jeg laver meget grafisk design ved siden af studiet. Det seneste jeg har lavet, er til en artist og hans single som nu er blevet publiceret. Jeg har også lavet Grafisk Design, som er blevet set og liket af artisten "Kesi". Du kan fimde meget mere på min Instagram. 
      </p>
      <a
        href="https://www.instagram.com/artismediia/"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Gå til Artismedia her!
      </a>
    </div>
    <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
      <div className="relative group w-full h-auto bg-gray-700 rounded overflow-hidden">
        <img
          src="OLIVER.jpg"
          alt="Arcaa single cover"
          className="w-full h-auto object-contain group-hover:opacity-75 transition"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <p className="text-white text-lg">Music posters!</p>
        </div>
      </div>
    </div>
  </div>
</section>

      

{/* Footer Section */}
<footer className="bg-gray-900 py-8 text-white">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
   {/* Venstre Sektion - Sociale medier */}
{/* Venstre Sektion - Sociale medier */}
<div>
  <h3 className="text-xl font-bold mb-4">Find mig på sociale medier</h3>
  <div className="flex space-x-6 justify-center md:justify-start">
    {/* Instagram Ikon */}
    <a
      href="https://www.instagram.com/artismediia/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-600 transition"
      aria-label="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <g fill="white" stroke="#303c42" strokeLinecap="round" strokeLinejoin="round">
          <rect width="21" height="21" x="1.5" y="1.5" rx="5.48" ry="5.48"></rect>
          <circle cx="12" cy="12" r="5.5"></circle>
          <circle cx="18" cy="5" r=".5"></circle>
        </g>
      </svg>
    </a>
    {/* LinkedIn Ikon */}
    <a
      href="https://www.linkedin.com/in/artilon-hyseni-02b076278/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-600 transition"
      aria-label="LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm-4.16 24.24h-3.8v-12h3.8zm-1.88-13.68a2.21 2.21 0 1 1 2.21-2.21 2.21 2.21 0 0 1-2.21 2.21zm14.08 13.68h-3.8v-5.92c0-1.41-.52-2.38-1.82-2.38-1 0-1.59.68-1.85 1.35-.1.25-.12.6-.12.95v6h-3.8s.05-9.72 0-12h3.8v1.7a3.79 3.79 0 0 1 3.43-1.88c2.51 0 4.39 1.64 4.39 5.17z"></path>
      </svg>
    </a>
  </div>
</div>



    {/* Midten - Kontaktoplysninger */}
    <div>
      <h3 className="text-xl font-bold mb-4">Kontakt</h3>
      <p>Har du spørgsmål eller ønsker at samarbejde? Kontakt mig via email.</p>
      <a
        href="mailto:Artismediia@gmail.com"
        className="text-blue-500 hover:underline"
      >
        Artismediia@gmail.com
      </a>
    </div>

    {/* Højre Sektion - Download CV */}
    <div>
      <h3 className="text-xl font-bold mb-4">Hent mit CV</h3>
      <p>Er jeg den rette du leder efter? så klik og hent mit CV! Jeg er pt. I gang med at lede efter en praktikplads, fra Januar til Marts, så lyder jeg som den perfekte kanditat for dig, så tøv ikke med at kontakte mig..</p>
      <a
        href="CV Artilon - Kopi.pdf" 
        download="Artismediia_CV.pdf"
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition inline-block mt-4"
      >
        Download CV
      </a>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-8 text-gray-500 text-sm text-center">
    © {new Date().getFullYear()} Artismedia. Alle rettigheder forbeholdes.
  </div>
</footer>
</div>
  );
};

export default Home;

