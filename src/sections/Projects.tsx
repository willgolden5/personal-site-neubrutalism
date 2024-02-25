import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageCard from "../components/ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../components/Tooltip";
import { forwardRef } from "react";
import Badge from "../components/Badge";

const Projects = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div ref={ref} className="flex flex-col w-full h-screen pt-8">
      <div className="flex flex-col align-middle justify-center w-full text-left space-y-8">
        <p className="font-bold text-4xl px-10">Projects</p>

        <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-12">
          <ImageCard
            imageUrl="/blackboxLogo.png"
            children={
              <>
                <p className="border-t-2 border-black text-lg px-4 pt-4 pb-2 font-semibold">
                  About:
                </p>
                <p className=" text-md px-4 font-light text-center pb-2">
                  Blackbox is an algorithmic trading application that allows
                  users to trade custom strategies without writing any code.
                </p>
                <div className="px-4">
                  <p className="pb-2 text-lg font-semibold">Technologies:</p>
                  <div className="flex space-x-2 flex-wrap p-1 w-full align-middle justify-center pb-6">
                    {[
                      { badgeText: "Next.js", color: "#A682FF" },
                      { badgeText: "Nest.js", color: "#F4E76E" },
                      { badgeText: "TypeScript", color: "#A682FF" },
                      { badgeText: "TailwindCSS", color: "#F4E76E" },
                      { badgeText: "Prisma", color: "#62aba1" },
                      { badgeText: "tRPC", color: "#F4E76E" },
                      { badgeText: "Postgres", color: "#A682FF" },
                    ].map(({ badgeText, color }, index) => (
                      <Badge key={index} badgeText={badgeText} color={color} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center pb-4 space-x-4">
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
                    margin={{
                      bottom: "mb-2",
                      left: "-ml-4",
                    }}
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
                    margin={{
                      bottom: "mb-2",
                      left: "-ml-4",
                    }}
                  />
                </div>
              </>
            }
          />
          <ImageCard
            imageUrl="/planeLogo.jpg"
            children={
              <>
                <p className="border-t-2 border-black text-lg px-4 pt-4 pb-2 font-semibold">
                  About:
                </p>
                <p className=" text-md px-4 font-light text-center pb-2">
                  Flight Plan is an hour sharing application that allows
                  licensed pilots to share the cost of flying with with other
                  licensed pilots for the purpose of building hours in an FAA
                  compliant manner.
                </p>
                <div className="px-4">
                  <p className="pb-2 text-lg font-semibold">Technologies:</p>
                  <div className="flex space-x-2 flex-wrap p-1 w-full align-middle justify-center pb-6">
                    {[
                      { badgeText: "Next.js", color: "#A682FF" },
                      { badgeText: "TypeScript", color: "#A682FF" },
                      { badgeText: "ChakraUI", color: "#F4E76E" },
                      { badgeText: "tRPC", color: "#F4E76E" },
                      { badgeText: "Prisma", color: "#62aba1" },
                      { badgeText: "Go", color: "#F4E76E" },
                      { badgeText: "Gin", color: "#A682FF" },
                    ].map(({ badgeText, color }, index) => (
                      <Badge key={index} badgeText={badgeText} color={color} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center pb-4">
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
                    margin={{
                      bottom: "mb-2",
                      left: "-ml-5",
                    }}
                  />
                </div>
              </>
            }
            padding={false}
          />
          <ImageCard
            imageUrl="/qlsticoLogo.png"
            children={
              <>
                <p className="border-t-2 border-black text-lg px-4 pt-4 pb-2 font-semibold">
                  About:
                </p>
                <p className=" text-md px-4 font-light text-center pb-2">
                  QLstico is an easy-to-use desktop application that redefines
                  Postgres database access and visualization through an
                  intuitive UI and the power of GraphQL. Built with Electron.
                </p>
                <div className="px-4">
                  <p className="pb-2 text-lg font-semibold">Technologies:</p>
                  <div className="flex space-x-2 flex-wrap p-1 w-full align-middle justify-center pb-6">
                    {[
                      { badgeText: "Electron", color: "#A682FF" },
                      { badgeText: "MaterialUI", color: "#F4E76E" },
                      { badgeText: "GraphQL", color: "#F4E76E" },
                      { badgeText: "Prisma", color: "#62aba1" },
                    ].map(({ badgeText, color }, index) => (
                      <Badge key={index} badgeText={badgeText} color={color} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center pb-4">
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
                    margin={{
                      bottom: "mb-2",
                      left: "-ml-4",
                    }}
                  />
                </div>
              </>
            }
          />
        </div>
        <a
          href="https://github.com/willgolden5"
          className="cursor-pointer flex w-full justify-center pt-4"
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
