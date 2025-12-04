export const Navbar = () => {
  return (
    <div className="navbar md:py-4 flex items-center justify-between sticky top-0 md:backdrop-blur-3xl">
      <div className="logo">
        <h1
          className="text-3xl font-bold p-1 
        md:bg-transparent md:text-white md:opacity-100 md:top-0 hidden md:block"
        >
          N/G
        </h1>
      </div>
      <ul
        className="menu bg-zinc-800 flex flex-wrap justify-between fixed bottom-0 left-1/2 -translate-x-1/2 md:-translate-0 
        md:sticky md:top-0 items-center md:gap-10 md:opacity-100 w-full md:w-fit px-4 py-2 md:py-4 rounded-tl-2xl rounded-tr-2xl 
        md:bg-transparent transition-all md:transition-none"
      >
        <li className="grid">
          <a href="#Home" aria-label="Home Section">
            <i className="ri-home-5-line ri-2x cursor-pointer block sm:hidden"></i>
          </a>
          <a
            href="#Home"
            className="sm:text-lg text-xs font-medium"
            aria-label="Home Section"
          >
            Home
          </a>
        </li>
        <li className="grid">
          <a href="#Project" aria-label="Project Section">
            <i className="ri-drinks-line ri-2x cursor-pointer block sm:hidden"></i>
          </a>
          <a
            href="#Project"
            className="sm:text-lg text-xs font-medium"
            aria-label="Project Section"
          >
            Projects
          </a>
        </li>
        <li className="grid">
          <a href="#Skill" aria-label="Skill Section">
            <i className="ri-apps-line ri-2x cursor-pointer block sm:hidden"></i>
          </a>
          <a
            href="#Skill"
            className="sm:text-lg text-xs font-medium"
            aria-label="Skill Section"
          >
            Skills
          </a>
        </li>
        <li className="grid">
          <a href="#Contact" aria-label="Contact Section">
            <i className="ri-contacts-line ri-2x cursor-pointer block sm:hidden"></i>
          </a>
          <a
            href="#Contact"
            className="sm:text-lg text-xs font-medium"
            aria-label="Contact Section"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
