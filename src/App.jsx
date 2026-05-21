import React, { useState } from "react";
import DataImage, { socialMediaLinks } from "./data";
import { listTools, listProjects, porfolioInfo } from "./data";
import "../src/index.css";
import { Truck } from "lucide-react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 text-black dark:text-white transition-colors duration-300"
        id="Home"
      >
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-200 text-black dark:bg-zinc-700 dark:text-white w-fit p-4 rounded-2xl">
            <img
              src={DataImage.DinoImage}
              alt="Dino Image"
              className="w-7 rounded-md sm:block hidden"
              loading="lazy"
            />
            <img
              src={DataImage.HeroImage}
              alt="Dino Image"
              className="w-7 rounded-xl sm:hidden block"
              loading="lazy"
            />
            <q>
              Front End Developer | Website Developer | IT Enthusiast
              <span className="animate-wiggle inline-block">💻</span>
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            HI, I'M GERALDI NATHAN TOMMY SAPUTRA
          </h1>
          <p className="text-base/loose mb-6 text-justify">
            I'm a Web Developer. I have a a experience in building websites and
            web applications using various technologies such as React.js, and
            more. I enjoy creating user friendly and visually appealing websites
            that provide a seamless user experience.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={porfolioInfo.cv}
              target="_blank"
              className="bg-zinc-200 text-black dark:bg-zinc-700 dark:text-white 
              dark:hover:bg-zinc-600 hover:bg-gray-300 p-4 rounded-2xl"
            >
              View CV <i class="ri-download-cloud-2-line"></i>
            </a>
            <a
              href={porfolioInfo.portoPdf}
              target="_blank"
              className="bg-zinc-200 text-black dark:bg-zinc-700 dark:text-white 
              dark:hover:bg-zinc-600 hover:bg-gray-300 p-4 rounded-2xl"
            >
              View Portfolio in PDF <i class="ri-file-text-line"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Main Image"
          className="w-[500px] hidden md:block md:ml-auto"
          loading="lazy"
        />
      </div>
      {/* Hero Section */}

      {/* Project Section */}
      <div className="project mt-32 py-10" id="Project">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="project-box mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {listProjects.map((project) => (
            <div
              key={project.id}
              className="border border-zinc-600 rounded-4xl flex flex-col h-full overflow-hidden"
            >
              <img
                src={project.image}
                alt="gambar"
                className="h-72 w-full overflow-hidden object-cover rounded-t-4xl"
              />
              <div className="p-4 flex flex-col flex-1">
                <h1 className="text-2xl font-bold my-4">{project.name}</h1>
                <p className="text-base/loose mb-4 text-justify flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tools, index) => (
                    <img
                      src={tools}
                      key={index}
                      alt="Tech Stack"
                      className=" border-zinc-500 rounded-md font-semibold w-6"
                      loading="lazy"
                    ></img>
                  ))}
                </div>

                <div className="mt-8 text-center flex gap-2">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                    href="#"
                    className="dark:bg-zinc-800 dark:text-white text-black p-3 rounded-lg block border border-zinc-700 hover:bg-zinc-700 hover:text-white"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.src}
                    target="_blank"
                    className="dark:bg-zinc-800 dark:text-white text-black p-3 rounded-lg block border border-zinc-700 hover:bg-zinc-700 hover:text-white"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project Section */}

      {/* About Section */}
      <div className="tools mt-32" id="Skill">
        <h1 className="text-4xl/snug font-bold mb-4">Skills</h1>
        <div className="tools-box mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listTools.map((tool) => (
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
              key={tool.id}
            >
              <img
                src={tool.image}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                loading="eager"
                fetchPriority="high"
              />
              <div>
                <h4 className="font-medium">{tool.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About Section */}

      {/* Contact Section */}
      <div className="contact mt-32 mb-10" id="Contact">
        {/* Contact Headline */}
        <div className="mb-10 text-black dark:text-white">
          <h2 className="text-4xl/snug font-bold mb-4">Get In Touch</h2>
          <p className="ml-1">
            Feel free to reach out - Open for discussions new opportunities,
            projects etc!
          </p>
        </div>
        {/* Contact Headline */}

        {/* Contact Info */}
        <div className=" gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 p-4 rounded-2xl text-white border border-zinc-600 ">
              <div className="">
                <h1 className="text-4xl font-bold text-black dark:text-white">
                  Connect With Me
                </h1>
                <p className="text-black dark:text-white">
                  Find me on this platform
                </p>
              </div>

              <div className="grid gap-4 grid-cols-1 w-full h-full">
                <a
                  href={socialMediaLinks.github}
                  className="border border-zinc-600 rounded-md p-3 text-black dark:text-white items-center flex gap-4 dark:hover:bg-zinc-800 hover:bg-gray-300"
                  target="_blank"
                >
                  <i className="ri-github-line"></i>
                  Github
                </a>
                <a
                  href={socialMediaLinks.linkedin}
                  className="border border-zinc-600  rounded-md p-3 text-black dark:text-white items-center flex gap-4 dark:hover:bg-zinc-800 hover:bg-gray-300"
                  target="_blank"
                >
                  <i className="ri-linkedin-line"></i>
                  Linkedin
                </a>
                <a
                  href={socialMediaLinks.instagram}
                  className="border border-zinc-600  rounded-md p-3 text-black dark:text-white items-center flex gap-4 dark:hover:bg-zinc-800 hover:bg-gray-300"
                  target="_blank"
                >
                  <i className="ri-instagram-line"></i>
                  Instagram
                </a>
              </div>

              <div className="border border-zinc-600 p-4 rounded-md text-black dark:text-white">
                <div className="flex items-center gap-4">
                  <div>
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <div>
                      <h1 className="font-medium text-sm">Prefer Email?</h1>
                    </div>

                    <div className="text-sm mt-1">
                      <p>reach out me at</p>
                      <p className="hover:underline cursor-pointer">
                        gnathansaputra@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Info */}

            {/* Message Form */}
            <div className="flex flex-col h-auto p-4 border border-zinc-600 rounded-2xl">
              <div className="text-black dark:text-white p-6">
                <div className="text-4xl font-bold gap-2 flex items-center">
                  <i className="ri-send-plane-line"></i>
                  Send Message
                </div>
                <div>I'll get back to you soon!</div>
              </div>

              <div className="text-black dark:text-white p-6">
                <div className="">
                  <div className="grid">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="email@example.com"
                      className="border border-zinc-700 p-3 rounded-md w-full"
                    />
                  </div>

                  <div className="grid mt-6">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="border border-zinc-700 p-3 rounded-md w-full"
                    />
                  </div>
                </div>

                <div className="grid mt-6">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message here..."
                    className="border border-zinc-700 p-3 rounded-md w-full resize-none"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    onClick={() => setShowModal(true)}
                    className="bg-dark text-white hover:bg-zinc-700 dark:text-black dark:bg-white dark:hover:bg-gray-200 p-2 rounded flex items-center gap-2"
                  >
                    <i className="ri-send-plane-line"></i>
                    Send Message
                  </button>

                  {/* Modal */}
                  <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    title="Sorry, this feature is currently unavailable!"
                    desc="feel free to reach out to me through email or social media. Thank you for your understanding!"
                  />
                  {/* Modal */}
                </div>
              </div>
            </div>
            {/* Message Form */}
          </div>
        </div>
      </div>
      {/* Contact Section */}
    </>
  );
}

export default App;
