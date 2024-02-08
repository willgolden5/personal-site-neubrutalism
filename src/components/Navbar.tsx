import { RefObject } from "react";

interface NavbarProps {
  projectsRef: RefObject<HTMLElement>;
  homeRef: RefObject<HTMLElement>;
}

const Navbar = ({ projectsRef, homeRef }: NavbarProps) => {
  const handleProjectsClick = () => {
    if (projectsRef.current) {
      const elementRect = projectsRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle =
        absoluteElementTop -
        window.innerHeight / 2 +
        elementRect.height / 2 -
        60;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (homeRef.current) {
      const elementRect = homeRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.screenY;
      const middle =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-white px-5 m500:h-16">
      <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
        <a
          className="text-3xl font-bold m500:text-xl capitalize cursor-pointer"
          onClick={handleHomeClick}
        >
          GLDN
        </a>
        <div className="flex space-x-8 px-8">
          {/* <a
            target="_blank"
            href="#about"
            className="flex items-center justify-center font-bold text-2xl m500:text-xl"
          >
            About
          </a> */}
          <p
            onClick={handleHomeClick}
            className="flex items-center justify-center font-bold text-2xl m500:text-xl cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={handleProjectsClick}
            className="flex items-center justify-center font-bold text-2xl m500:text-xl cursor-pointer"
          >
            Projects
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
