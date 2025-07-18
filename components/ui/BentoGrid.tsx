'use client';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./Gradientbg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCheckmarkDoneSharp, IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

const icon = [
  { src: "/icons/html5.svg", name: "HTML5" },
  { src: "/icons/css3.svg", name: "CSS3" },
  { src: "/icons/javascript.svg", name: "JavaScript" },
  { src: "/icons/typescript.svg", name: "TypeScript" },
  { src: "/icons/react.svg", name: "React" },
  { src: "/icons/nextjs.svg", name: "NextJS" },
  { src: "/icons/nodejs.svg", name: "NodeJS" },
  { src: "/icons/Express.svg", name: "ExpressJS" },
  { src: "/icons/mongodb.svg", name: "MongoDB" },
  { src: "/icons/tailwind.svg", name: "Tailwind CSS" },
  { src: "/icons/bootstrap.svg", name: "Bootstrap" },
  { src: "/icons/git.svg", name: "Git" },
  { src: "/icons/github.svg", name: "GitHub" },
  { src: "/icons/php.svg", name: "PHP" },
  { src: "/icons/figma.png", name: "Figma" },
  { src: "/icons/vscode.svg", name: "VS Code" },
  { src: "/icons/mysql.svg", name: "MySQL" },
  { src: "/icons/android-studio.svg", name: "Android Studio" },
  { src: "/icons/java.svg", name: "Java" },
  { src: "/icons/django.svg", name: "Django" },
  { src: "/icons/python.svg", name: "Python" },

];

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  id?: number;
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
}) => {

  const [copied, setCopied] = useState(false)

    const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const email = "rohit123@gmail.com"
    navigator.clipboard.writeText(email);
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(64, 64, 125, 1) 32%, rgba(8, 1, 1, 1) 100%)',
      }}
    >

      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />)}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />)}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 1 && Array.isArray(icon) && (
            <div className="flex flex-wrap md:gap-4 gap-3 items-start justify-center md:p-5 p-2 mt-5">
              {icon.map((icons, index) => (
                <div key={index} className="group flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center rounded-2xl bg-gradient-to-t from-blue-700 via-blue-400 to-blue-900 lg:w-16 lg:h-16 w-10 h-10 hover:scale-120 transition-transform duration-200">
                    <img src={icons.src} alt={icons.name} className="lg:w-12 lg:h-12 md:hover:w-13 md:hover:h-13 p-1 w-10 h-10" />
                  </div>
                  {/* Name under icon, appears on hover with slide-up */}
                  <span className="hidden md:block text-sm font-extrabold text-slate-200 mt-2 opacity-0 translate-y-0 group-hover:opacity-100 group-hover:translate-y-2 
                        transition-all duration-400">
                    {icons.name}
                  </span>
                </div>
              ))}
            </div>
          )}


          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

          {id === 5 && (
            <div className="flex items-center justify-center mt-5">
              <MagicButton
                title="Download Resume"
                icon={<IoCheckmarkDoneSharp />}
                position="left"
                handleClick={() => window.open("/Rohit_Vishwakarma_Resume.pdf", "_blank")}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
