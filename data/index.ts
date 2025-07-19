export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-6 md:col-span-6 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/bg.png",
    spareImg: "",
  },
  {
    id: 5,
    title: "You can download my resume here",
    description: "My Resume",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Xmart - Ecommerce Store",
    des: "A fully functional e-commerce store with a modern design, built with Next.js and Tailwind CSS.",
    img: "/xmart_screen.png",
    iconLists: ["/icons/react.svg", "/icons/tail.svg", "/icons/Javascript.svg", "/icons/express.svg", "/icons/mongodb.svg"],
    link: "https://xmart-1uzw.onrender.com/",
  },
  {
    id: 2,
    title: "MedAI - AI Medical Assistant (Not Live)",
    des: "An AI-powered medical assistant that provides health-related information and advice.",
    img: "/MedAI.png",
    iconLists: ["/icons/nextjs.svg", "/icons/tail.svg", "/icons/typescript.svg", "/icons/express.svg", "/icons/mongodb.svg", "/icons/python.svg"],
    link: "https://github.com/Shad0wcoder/medai1",
  },
];



export const workExperience = [
  {
    id: 1,
    title: "Trainee Web Developer  (Internship at Learn To Upgrade)",
    desc: "Gained hands-on experience in front-end and back-end web development \n Worked with technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB \n Built responsive and interactive web applications under mentorship.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Shad0wcoder",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rohit-vishwakarma-726b86264/",
  },
];