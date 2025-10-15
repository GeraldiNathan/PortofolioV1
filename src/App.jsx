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
          alt="Main Image"
          className="w-[500px] rounded-4xl md:ml-auto"
        />
      </div>
      {/* Hero Section */}

      {/* About Section */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rouded-lg">
          <img
            src={DataImage.DinoImage}
            alt=""
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10 opacity-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            corporis odio neque et eligendi saepe omnis autem? Temporibus, error
            ex inventore dolorum aspernatur minus quas, optio pariatur ut
            corporis asperiores recusandae, fugiat assumenda qui neque? Nihil
            iste ipsa error dicta minima. Maxime fuga expedita vitae placeat
            mollitia aliquam, quam hic.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.DinoImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10 <span className="text-rose-600">+</span>
                </h1>
                <p>Proyek selesai</p>
              </div>
              <div className="felx items-center gap-6">
                <h1 className="text-4xl mb-1">
                  1 <span className="text-rose-600">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
    </>
  );
}

export default App;
