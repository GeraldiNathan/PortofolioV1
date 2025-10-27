import HeroImage from "/assets/nathan.webp";
import DinoImage from "/assets/dino.webp";

const Image = {
  HeroImage,
  DinoImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/canva.png";
import Tools10 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    image: Tools1,
    name: "Visual Studio Code",
    desc: "Code Editor",
  },
  {
    id: 2,
    image: Tools2,
    name: "React JS",
    desc: "Framework",
  },
  {
    id: 3,
    image: Tools3,
    name: "Next JS",
    desc: "Framework",
  },
  {
    id: 4,
    image: Tools4,
    name: "Tailwind CSS",
    desc: "Framework",
  },
  {
    id: 5,
    image: Tools5,
    name: "Bootstrap",
    desc: "Framework",
  },
  {
    id: 6,
    image: Tools6,
    name: "Javascript",
    desc: "Language",
  },
  {
    id: 7,
    image: Tools7,
    name: "Node JS",
    desc: "Javascript Runtime",
  },
  {
    id: 8,
    image: Tools8,
    name: "Github",
    desc: "Repository",
  },
  {
    id: 9,
    image: Tools9,
    name: "Canva",
    desc: "Design App",
  },
  {
    id: 10,
    image: Tools10,
    name: "Figma",
    desc: "Design App",
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
    tools: ["React JS", "Tailwind CSS", "Laravel 10"],
  },
  {
    id: 2,
    image: Project2,
    name: "Ala Rumah",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["React JS", "Tailwind CSS", "Laravel 9"],
  },
  {
    id: 3,
    image: Project3,
    name: "NovaTech Company Profile",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Figma"],
  },
  {
    id: 4,
    image: Project4,
    name: "Go Hike App",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Figma"],
  },
  {
    id: 5,
    image: Project5,
    name: "Website Portfolio v1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["React JS", "Vite JS", "Tailwind CSS"],
  },
];

export const porfolioInfo = {
  cv: "https://drive.google.com/file/d/17F7WvJBkBKA5jnzS-ABddtYBLkODKi4X/view?usp=sharing",
  portoPdf: "https://drive.google.com/file/d/1ZmOkycYtTDMNYvGNu2R7DJITjqlKE7f8/view?usp=sharing"
};