import Head from "next/head";
import { FC, useEffect, useState } from "react";

const roles = ["Frontend Developer", "Digital Designer"];

const Home: FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const role = roles[currentRoleIndex];
      if (!isDeleting) {
        setDisplayText((prev) => role.slice(0, prev.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText((prev) => role.slice(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 70 : speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, speed]);

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
    </div>
  );
};

export default Home;

