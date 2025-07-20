'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const importantLinks = [
  { name: "GitHub", logo: "/git.svg", url: "https://github.com/Shad0wcoder" },
  { name: "LinkedIn", logo: "/link.svg", url: "https://www.linkedin.com/in/rohit-vishwakarma-726b86264/" },
];

const HeaderLinks = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 right-4 z-[9999] transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }  px-3 py-1 rounded-xl shadow-md flex gap-4 items-center`}
    >
      {importantLinks.map((link, index) => (
        <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <Image src={link.logo} alt={link.name} width={24} height={24} />
            <span className="hidden sm:inline text-sm font-medium">{link.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HeaderLinks;
