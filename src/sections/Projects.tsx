import ImageCard from "../components/ImageCard";

const Projects = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <h1>Projects</h1>
      <div className="flex flex-row w-full space-x-4">
        <ImageCard
          imageUrl="https://www.williamgolden.dev/_astro/flight-plan_ZzhE8I.png"
          children="Flight Plan"
        />
        <ImageCard
          imageUrl="https://www.williamgolden.dev/_astro/flight-plan_ZzhE8I.png"
          children="Blackbox"
        />
        <ImageCard
          imageUrl="https://www.williamgolden.dev/_astro/flight-plan_ZzhE8I.png"
          children="Stealth"
        />
      </div>
      <h3>Check out my other projects on Github</h3>
    </div>
  );
};

export default Projects;
// "SQL",
// "AWS",
// "Azure",
// "Vercel",
// "Docker",
// "Functional Programming",
