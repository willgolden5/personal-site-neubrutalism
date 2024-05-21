import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGolang,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../components/Tooltip";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col h-screen w-full items-center justify-center"
    >
      <div className="md:w-[940px]">
        <div className="flex p-4">
          <div className="">
            <h3 className="text-3xl pb-[.2em]">Hey! I'm Will Golden.</h3>
            <h1 className="font-bold text-4xl pb-[16px]">
              I build things for the web.
            </h1>
            <p className="text-xl">
              I'm a senior fullstack web developer with a passion for building
              performant applications. I'm currently Director of Engineering at{" "}
              <a className="relative z-2" href="https://suturehealth.com">
                Suture Health
                <span className="absolute bottom-1 left-0 w-full h-[20%] md:h-[18%] bg-purple opacity-30 z-1 rounded-sm"></span>
              </a>
              .
            </p>
            <div className="flex pt-10 space-x-6">
              <Tooltip
                elementToHover={
                  <Button
                    onClick={() =>
                      window.open("https://github.com/willgolden5", "_blank")
                    }
                  >
                    <FontAwesomeIcon size="xl" icon={faGithub} />
                  </Button>
                }
                tooltip={"Github"}
              />
              <Tooltip
                elementToHover={
                  <Button
                    primary={3}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/williamgolden5/",
                        "_blank"
                      )
                    }
                  >
                    <FontAwesomeIcon size="xl" icon={faLinkedin} />
                  </Button>
                }
                tooltip={"LinkedIn"}
              />
              <Tooltip
                elementToHover={
                  <a href="/resume.pdf" download>
                    <Button primary={2} onClick={() => null}>
                      <FontAwesomeIcon size="xl" icon={faFile} />
                    </Button>
                  </a>
                }
                tooltip={"Resume"}
              />
            </div>
          </div>
          <div className="hidden md:flex w-full justify-center items-center">
            <Avatar
              styles="relative"
              imageUrl="https://i.imgur.com/t4w3vfK.png"
            >
              <div className="absolute left-[274px] bottom-[280px]">
                <Badge badgeText="Will" fontSize="lg" />
              </div>
              <div className="absolute left-[260px] rotate-[39deg]">
                <FontAwesomeIcon size="xl" icon={faCaretDown} />
              </div>
              <div className="absolute z-99 right-[240px] bg-[#F4E76E] p-2 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                <FontAwesomeIcon
                  className="animate-spin-slow"
                  size="2xl"
                  icon={faReact}
                />
              </div>
              <div className="absolute bottom-1 z-99 left-[240px] bg-[#5188B8] p-2 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                <FontAwesomeIcon size="2xl" icon={faGolang} />
              </div>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Hero;
