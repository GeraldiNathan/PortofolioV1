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
import Project4 from "/assets/projects/project2.webp";
import Project5 from "/assets/projects/project5.webp";

export const listProjects = [
  {
    id: 1,
    image: Project1,
    name: "Pawspital",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [ReactJS, TailwindCSS, Laravel],
  },
  {
    id: 2,
    image: Project2,
    name: "Ala Rumah",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [ReactJS, TailwindCSS, Laravel],
  },
  {
    id: 3,
    image: Project3,
    name: "NovaTech Company Profile",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [Figma],
  },
  {
    id: 4,
    image: Project4,
    name: "Go Hike App",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [Figma],
  },
  {
    id: 5,
    image: Project5,
    name: "Website Portfolio v1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: [ReactJS, ViteJS, TailwindCSS],
  },
];

export const porfolioInfo = {
  cv: "https://drive.google.com/file/d/17F7WvJBkBKA5jnzS-ABddtYBLkODKi4X/view?usp=sharing",
  portoPdf:
    "https://drive.google.com/file/d/1ZmOkycYtTDMNYvGNu2R7DJITjqlKE7f8/view?usp=sharing",
};

export const socialMediaLinks = {
  github: "https://github.com/geraldinathan",
  linkedin: "https://www.linkedin.com/in/geraldinathan/",
  instagram: "https://www.instagram.com/geraldinathan_/",
};
