import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../components/Tooltip";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className="md:w-[940px]">
        <div className="flex p-4">
          <div className="">
            <h3 className="text-2xl pb-[16px]">Hey! I'm Will.</h3>
            <h1 className="font-bold text-5xl pb-[16px]">
              I'm a fullstack web developer.
            </h1>
            <p className="text-2xl">
              I'm currently the Director of Engineering at{" "}
              <a className="relative z-2" href="https://suturehealth.com">
                Suture Health{" "}
                <span className="absolute bottom-1 left-0 w-full h-[20%] md:h-[25%] bg-purple opacity-30 z-1 rounded-sm"></span>
              </a>
              .
            </p>
            <div className="flex pt-10 space-x-2">
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
          <div className="relative hidden md:flex w-full justify-center items-center">
            <div className="absolute top-5 right-24">
              <Badge badgeText="Me" />
            </div>
            <div className="absolute top-12 right-36 rotate-[39deg]">
              <FontAwesomeIcon size="lg" icon={faCaretDown} />
            </div>
            <div className="absolute top-12 z-99 left-36 bg-[#62aba1] p-2 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              <FontAwesomeIcon size="2xl" icon={faChartLine} />
            </div>
            <div className="absolute bottom-12 z-99 right-32 bg-[#F4E76E] p-2 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              <FontAwesomeIcon
                className="animate-spin-slow"
                size="2xl"
                icon={faReact}
              />
            </div>
            <Avatar imageUrl="https://i.imgur.com/t4w3vfK.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
