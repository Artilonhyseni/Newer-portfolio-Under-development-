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
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Loop roles
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 70 : speed); // Smooth deletion is slightly faster
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, speed]);

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Head>
        <title>Portfolio | Artilon Hyseni</title>
        <meta name="description" content="Portfolio of Artilon Hyseni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-4xl font-bold">Artismedia</h1>
        <span className="text-white">Front-End Developer</span>
      </header>

    
      <section className="flex flex-col items-center justify-center h-[50vh] text-center">
        <h1 className="text-9xl font-extrabold mb-4">Artilon Hyseni</h1>
        <p className="text-2xl text-white">
          {displayText}
          <span className="blinking-cursor">|</span>
        </p>
      </section>

    
      <section className="py-16 px-8">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-4">
              <div className="h-48 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">
                  Placeholder for Project {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-16 px-8 border-t border-gray-800">
        <h2 className="text-2xl font-semibold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-400">
              HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Typescript
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Design</h3>
            <p className="text-gray-400">
              Figma, Adobe Photoshop, Adobe Illustrator, Adobe After Effects,
              Canva, Adobe Creative Cloud
            </p>
          </div>
        </div>
      </section>

  
      <footer className="py-8 px-8 border-t border-gray-800 text-center">
        <p className="text-gray-500">
          Designed and built by Artilon Hyseni. © 2024
        </p>
      </footer>
    </div>
  );
};

export default Home;
