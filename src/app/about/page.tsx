"use client";

import { Box, Center, Heading, useColorModeValue } from "@chakra-ui/react";
import BioCard from "./components/BioCard";
import Skills from "./components/Skills";
import CertificatesCard from "./components/CertificatesCard";

function About() {
  return (
    <div>
      <Box>
        <Box width={"70%"} mx={"auto"} pb={20}>
          <Center>
            <Heading
              pt={16}
              pb={10}
              textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)"
            >
              Bio
            </Heading>
          </Center>
          <BioCard />
        </Box>
        <Box bg={useColorModeValue("gray.200", "gray.500")} pb={10}>
          <Box width={"70%"} mx={"auto"}>
            <Center>
              <Heading
                pt={16}
                pb={10}
                textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)"
                color={useColorModeValue("gray.800", "gray.800")}
              >
                Skills
              </Heading>
            </Center>
            <Skills />
          </Box>
        </Box>
        <Box width={"70%"} mx={"auto"}>
          <Center>
            <Heading
              pt={16}
              pb={10}
              textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)"
            >
              Certificates
            </Heading>
          </Center>
          <CertificatesCard />
        </Box>
      </Box>
    </div>
  );
}

export default About;
