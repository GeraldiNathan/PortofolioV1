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
    dad: "100",
  },
  {
    id: 2,
    image: Tools2,
    name: "React JS",
    desc: "Framework",
    dad: "200",
  },
  {
    id: 3,
    image: Tools3,
    name: "Next JS",
    desc: "Framework",
    dad: "300",
  },
  {
    id: 4,
    image: Tools4,
    name: "Tailwind CSS",
    desc: "Framework",
    dad: "400",
  },
  {
    id: 5,
    image: Tools5,
    name: "Bootstrap",
    desc: "Framework",
    dad: "500",
  },
  {
    id: 6,
    image: Tools6,
    name: "Javascript",
    desc: "Language",
    dad: "600",
  },
  {
    id: 7,
    image: Tools7,
    name: "Node JS",
    desc: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    image: Tools8,
    name: "Github",
    desc: "Repository",
    dad: "800",
  },
  {
    id: 9,
    image: Tools9,
    name: "Canva",
    desc: "Design App",
    dad: "1000",
  },
  {
    id: 10,
    image: Tools10,
    name: "Figma",
    desc: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    name: "Klinik Hewan",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["React JS", "Tailwind CSS", "Laravel 10", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    image: Proyek2,
    name: "Ala Rumah Makan",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["React JS", "Tailwind CSS", "Laravel 9", "AOS"],
    dad: "300",
  },
];
