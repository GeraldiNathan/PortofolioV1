import HeroImage from "/assets/nathan.webp";
import DinoImage from "/assets/dino.webp";

const Image = {
  HeroImage,
  DinoImage,
};

export default Image;

import VSCode from "/assets/tools/vscode.png";
import ReactJS from "/assets/tools/reactjs.png";
import NextJS from "/assets/tools/nextjs.png";
import TailwindCSS from "/assets/tools/tailwind.png";
import Bootstrap from "/assets/tools/bootstrap.png";
import Javascript from "/assets/tools/js.png";
import NodeJS from "/assets/tools/nodejs.png";
import Github from "/assets/tools/github.png";
import Canva from "/assets/tools/canva.png";
import Figma from "/assets/tools/figma.png";
import Laravel from "/assets/tools/laravel.png";
import ViteJS from "/assets/tools/vite.png";

export const listTools = [
  {
    id: 1,
    image: VSCode,
    name: "Visual Studio Code",
    desc: "Code Editor",
  },
  {
    id: 2,
    image: ReactJS,
    name: "React JS",
    desc: "Framework",
  },
  {
    id: 3,
    image: NextJS,
    name: "Next JS",
    desc: "Framework",
  },
  {
    id: 4,
    image: TailwindCSS,
    name: "Tailwind CSS",
    desc: "Framework",
  },
  {
    id: 5,
    image: Bootstrap,
    name: "Bootstrap",
    desc: "Framework",
  },
  {
    id: 6,
    image: Javascript,
    name: "Javascript",
    desc: "Language",
  },
  {
    id: 7,
    image: NodeJS,
    name: "Node JS",
    desc: "Javascript Runtime",
  },
  {
    id: 8,
    image: Github,
    name: "Github",
    desc: "Repository",
  },
  {
    id: 9,
    image: Canva,
    name: "Canva",
    desc: "Design App",
  },
  {
    id: 10,
    image: Figma,
    name: "Figma",
    desc: "Design App",
  },
  {
    id: 11,
    image: Laravel,
    name: "Laravel",
    desc: "Framework",
  },
  {
    id: 12,
    image: ViteJS,
    name: "Vite JS",
    desc: "Framework",
  },
];

import Project1 from "/assets/projects/project1.webp";
import Project2 from "/assets/projects/project2.webp";
import Project3 from "/assets/projects/project3.webp";
import Project4 from "/assets/projects/project4.webp";

export const listProjects = [
  {
    id: 1,
    image: Project1,
    name: "Pawspital",
    desc: "A veterinary clinic management system developed as a final project at PT Otak Kanan.",
    tools: [ReactJS, TailwindCSS, Laravel],
    src: "https://github.com/GeraldiNathan/Pawspital",
  },
  {
    id: 2,
    image: Project2,
    name: "Ala Rumah",
    desc: "A web based culinary platform built as a final college project at Universitas Muhammadiyah Malang, enabling users to share, explore, and manage homemade recipes efficiently.",
    tools: [ReactJS, TailwindCSS, Laravel],
    src: "https://github.com/orgs/zippweb/repositories",
  },
  {
    id: 3,
    image: Project3,
    name: "NovaTech Company Profile",
    desc: "UI/UX design for NovaTech’s company profile website, focusing on visual branding consistency and user-friendly navigation using Figma.",
    tools: [Figma],
  },
  {
    id: 4,
    image: Project4,
    name: "Website Portfolio v1",
    desc: "A personal web portfolio built with React and Tailwind CSS to showcase projects, technical skills, and professional background in a modern, responsive design.",
    tools: [ReactJS, ViteJS, TailwindCSS],
    src: "https://github.com/GeraldiNathan/PortofolioV1",
  },
];

import Labit from "/assets/company/labit.svg";
import PTOK from "/assets/company/ptok.jpg";
import GTM from "/assets/company/gtm.png";

export const workExperience = [
  {
    id: 1,
    company: "Informatics Laboratory Assistant - Part Time",
    title: "Research and Development",
    logo: [Labit],
    period: "August 2022 - August 2025",
  },
  {
    id: 2,
    company: "PT OTAK KANAN - Apprentice",
    title: "Web Developer",
    logo: [PTOK],
    period: "Feb 2024 - June 2024",
  },
  {
    id: 3,
    company: "Hotel Grand Tiga Mustika - Full Time",
    title: "Information Technology Staff",
    logo: [GTM],
    period: "April 2026 - Present",
  },
  // {
  //   id: 3,
  //   company: "Hotel Grand Tiga Mustika - Full Time",
  //   title: "Information Technology Staff",
  //   logo: [GTM],
  //   period: "April 2026 - Present",
  // },
  // {
  //   id: 3,
  //   company: "Hotel Grand Tiga Mustika - Full Time",
  //   title: "Information Technology Staff",
  //   logo: [GTM],
  //   period: "April 2026 - Present",
  // },
];

export const porfolioInfo = {
  cv: "https://drive.google.com/file/d/1grxsXPoS9gGzYaZpVi82EeAE8qr_U34-/view?usp=sharing",
  portoPdf:
    "https://drive.google.com/file/d/1KmnxSED28sCUaS45QD65J8cl-LYV7u6k/view?usp=sharing",
};

export const socialMediaLinks = {
  github: "https://github.com/geraldinathan",
  linkedin: "https://www.linkedin.com/in/geraldinathan/",
  instagram: "https://www.instagram.com/geraldinathan_/",
};
