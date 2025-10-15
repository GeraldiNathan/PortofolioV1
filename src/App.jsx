import DataImage from "./data";

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
              className="w-7 rounded-md"
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
          alt="Hero Image"
          className="w-[500px] rounded-4xl md:ml-auto"
        />
      </div>
      {/* Hero Section */}
    </>
  );
}

export default App;
