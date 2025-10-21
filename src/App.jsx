import DataImage from "./data";
import { listTools } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-700 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.DinoImage}
              alt="Dino Image"
              className="w-7 rounded-md sm:block hidden"
            />
            <img
              src={DataImage.HeroImage}
              alt="Dino Image"
              className="w-7 rounded-xl sm:hidden block"
            />
            <q>Lorem ipsum dolor sit amet👏</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Halo, Saya Geraldi Nathan Tommy Saputra
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel
            at asperiores aliquam hic tenetur illum iste. Amet consequatur
            deleniti odio possimus non quis sit at asperiores fugit illo
            nesciunt, quia, numquam quibusdam enim laborum sunt quo ex minus
            dignissimos. Accusantium magni placeat autem ipsam, fuga laborum
            corrupti eius recusandae?
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Main Image"
          className="w-[500px] rounded-[350px] hidden md:block md:ml-auto"
        />
      </div>
      {/* Hero Section */}

      {/* About Section */}
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Skills</h1>
        {/* <p className="w-full sm:w-3/4 md:w-2/3 lg:w/24 xl:w-2/5 text-base/loose opacity-50">
            Tech Stack and Tools
          </p> */}
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
              />
              <div>
                <h4 className="font-bold">{tool.name}</h4>
                <p className="opacity-50">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About Section */}
    </>
  );
}

export default App;
