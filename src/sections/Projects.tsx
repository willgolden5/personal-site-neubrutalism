import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageCard from "../components/ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../components/Tooltip";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col w-full h-screen">
      <div className="flex flex-col align-middle justify-center w-full text-left space-y-8">
        <p className="font-bold text-4xl px-10">Recent Projects</p>

        <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-12">
          <ImageCard
            imageUrl="../../public/blackboxLogo.png"
            children={
              <>
                <p className="border-t-2 border-black text-md p-4 font-light text-center">
                  Blackbox is an algorithmic trading application that allows
                  users to trade custom strategies without writing any code. I
                  used Next.js, TypeScript, and Tailwind CSS for the client
                  application and Nest.js, Typscript, Prisma, and PostgreSQL for
                  the server application.
                </p>
                <div className="flex justify-center pb-4">
                  <Tooltip
                    elementToHover={
                      <a href="https://github.com/willgolden5/blackbox-react">
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          size="2xl"
                          icon={faGithub}
                        />
                      </a>
                    }
                    tooltip={"Github"}
                  />
                  <Tooltip
                    elementToHover={
                      <a href="https://www.blackboxquant.com/">
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          size="2xl"
                          icon={faChrome}
                        />
                      </a>
                    }
                    tooltip={"Website"}
                  />
                </div>
              </>
            }
          />
          <ImageCard
            imageUrl="../../public/planeLogo.jpg"
            children={
              <>
                <p className="border-t-2 border-black font-light text-md p-4 text-center">
                  Flight plan is an hour sharing application that allows
                  licensed pilots to share the cost of flying with with other
                  licensed pilots in an FAA compliant manner. I used Next.js,
                  TypeScript, and Chakra UI for the client application and Go
                  with Gin for the server application.
                </p>
                <div className="flex justify-center pb-4 space-x-4">
                  <Tooltip
                    elementToHover={
                      <a href="https://www.flightplan.tech/">
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          size="2xl"
                          icon={faChrome}
                        />
                      </a>
                    }
                    tooltip={"Website"}
                  />
                </div>
              </>
            }
            padding={false}
          />
          <ImageCard
            imageUrl="../../public/qlsticoLogo.png"
            children={
              <>
                <p className="border-t-2 border-black font-light text-md p-4 text-center">
                  An easy-to-use desktop application that redefines Postgres
                  database access and visualization through an intuitive UI and
                  the power of GraphQL. Built with Electron.
                </p>
                <div className="flex justify-center space-x-4">
                  <Tooltip
                    elementToHover={
                      <a href="https://github.com/qlstico/parcelQL">
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          size="2xl"
                          icon={faGithub}
                        />
                      </a>
                    }
                    tooltip={"Github"}
                  />
                </div>
              </>
            }
          />
        </div>
        <a
          href="https://github.com/willgolden5"
          className="cursor-pointer flex w-full justify-center"
        >
          <h3 className="font-thin text-lg pb-4">
            Check out my other projects on{" "}
            {<FontAwesomeIcon size="xl" icon={faGithub} />}
          </h3>
          <div className="px-2">
            {<FontAwesomeIcon size="sm" icon={faArrowRight} />}
          </div>
        </a>
      </div>
    </div>
  );
});

export default Projects;
