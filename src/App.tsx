import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/Button";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import { faCaretDown, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className="w-[940px]">
        <div className="flex p-4">
          <div className="">
            <h3 className="text-2xl pb-[16px]">Hey! I'm Will.</h3>
            <h1 className="font-bold text-5xl pb-[16px]">
              I'm a fullstack web developer.
            </h1>
            <p className="text-2xl">
              I'm currently the Director of Engineering at{" "}
              <a href="https://suturehealth.com">Suture Health</a>.
            </p>
            <div className="flex pt-10 space-x-2">
              <Tooltip
                elementToHover={
                  <Button primary={false} onClick={() => null}>
                    <FontAwesomeIcon size="xl" icon={faGithub} />
                  </Button>
                }
                tooltip={"Github"}
              />
              <Tooltip
                elementToHover={
                  <Button primary={false} onClick={() => null}>
                    <FontAwesomeIcon size="xl" icon={faLinkedin} />
                  </Button>
                }
                tooltip={"Linkedin"}
              />
              <Tooltip
                elementToHover={
                  <Button primary={false} onClick={() => null}>
                    <FontAwesomeIcon size="xl" icon={faFile} />
                  </Button>
                }
                tooltip={"Resume"}
              />
            </div>
          </div>
          <div className="relative flex w-full justify-center items-center">
            <div className="absolute top-5 right-24">
              <Badge badgeText="Me" />
            </div>
            <div className="absolute top-12 right-36 rotate-[39deg]">
              <FontAwesomeIcon size="lg" icon={faCaretDown} />
            </div>
            <div className="absolute top-12 z-99 left-36 bg-[#62aba1] p-2 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              <FontAwesomeIcon size="2xl" icon={faChartLine} />
            </div>
            <div className="absolute bottom-12 z-99 right-32 bg-[#f1d063] p-2 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
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
}

export default App;
