"use client";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";

import AlbaTech from "./assets/alba-test.jpg";
import BosenJomblo from "./assets/bosen-jomblo.jpg";
import CirebonEats from "./assets/cirebon-culinary.jpg";
import GaryGram from "./assets/gary-gram.jpg";
import Getflix from "./assets/getflix.jpg";
import JouleApp from "./assets/joule-app.jpg";
import Nutech from "./assets/nutech-test.jpg";

function Projects() {
  const projects = [
    {
      name: "Sun Education Test (React)",
      category: "website",
      description:
        "Slicing figma with authentication & API request. Example Credentials: Email: eve.holt@reqres.in, Password: anything",
      img: AlbaTech,
      site: "https://sun-education-test.vercel.app/",
      git: "https://github.com/geraldnic/SunEducationTest",
    },
    {
      name: "Bosen Jomblo (Ionic)",
      category: "hybrid",
      description:
        "Dating App to find your soul mate. Just slide your crush to the left to make him/her yours",
      img: BosenJomblo,
      site: "https://bosenjomblo-dating.vercel.app/home",
      git: "https://github.com/geraldnic/Bosen-Jomblo-Ionic-",
    },
    {
      name: "Cirebon Eats (MERN Stack)",
      category: "website",
      description:
        "A system to find typical Cirebon foods / restaurants recommendation that fit your preferences and priority",
      img: CirebonEats,
      site: "https://cirebon-eats.vercel.app/",
      git: "https://github.com/geraldnic/Cirebon-Culinary",
    },
    {
      name: "Getflix (React)",
      category: "website",
      description:
        "Find popular, top rated, or trending movies / series and see their details & reviews",
      img: Getflix,
      site: "https://gary-getflix.vercel.app/",
      git: "https://github.com/geraldnic/GETFLIX",
    },
    {
      name: "GaryGram (React)",
      category: "website",
      description: "Basic social media website using Dummy API",
      img: GaryGram,
      site: "https://garygram.vercel.app/",
      git: "https://github.com/geraldnic/GaryGram",
    },
    {
      name: "Joule App Duplication (Ionic)",
      category: "hybrid",
      description:
        "An UI duplication of Joule Application from Play Store / App Store",
      img: JouleApp,
      site: "https://joule-app-duplication.vercel.app/home",
      git: "https://github.com/geraldnic/Ionic-Project-Joule-App-Duplication-",
    },
    {
      name: "Nutech Integrasi Test (React)",
      category: "website",
      description:
        "Basic CRUD and simple auth implementation using React and Redux. Admin Credentials: username: admin, password: admin123. User Credentials: username: user, password: user123",
      img: Nutech,
      site: "https://nutech-integrasi-test.vercel.app/",
      git: "https://github.com/geraldnic/NutechIntegrasiTest",
    },
  ];
  return (
    <Box width={["90%","80%","70%"]} mx={"auto"} my={20}>
      <Tabs isFitted colorScheme="green" variant="enclosed-colored">
        <TabList>
          <Tab>All</Tab>
          <Tab>Web</Tab>
          <Tab>Web App (Hybrid)</Tab>
        </TabList>
        <TabPanels borderX={"1px"} borderBottom={"1px"}>
          <TabPanel>
            <SimpleGrid
              columns={[1,2,3]}
              spacing={10}
              mx={"auto"}
              alignItems={"center"}
              textAlign={"center"}
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  img={project.img.src}
                  site={project.site}
                  git={project.git}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={[1,2,3]}
              spacing={10}
              mx={"auto"}
              alignItems={"center"}
              textAlign={"center"}
            >
              {projects
                .filter((obj) => obj.category === "website")
                .map((project) => (
                  <ProjectCard
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    img={project.img.src}
                    site={project.site}
                    git={project.git}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={[1,2,3]}
              spacing={10}
              mx={"auto"}
              alignItems={"center"}
              textAlign={"center"}
            >
              {projects
                .filter((obj) => obj.category === "hybrid")
                .map((project) => (
                  <ProjectCard
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    img={project.img.src}
                    site={project.site}
                    git={project.git}
                  />
                ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Projects;
