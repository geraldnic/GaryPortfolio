"use client";

import HTML from "../assets/icons/html.png";
import CSS from "../assets/icons/css.png";
import JavaScript from "../assets/icons/javascript.png";
import React from "../assets/icons/react.png";
import Express from "../assets/icons/express.png";
import MongoDB from "../assets/icons/mongo.png";
import Node from "../assets/icons/node.png";
import Ionic from "../assets/icons/ionic.png";
import Bootstrap from "../assets/icons/bootstrap.png";
import Tailwind from "../assets/icons/tailwind.png";
import Chakra from "../assets/icons/chakra.png";
import Next from "../assets/icons/next.png";
import MySQL from "../assets/icons/mysql.png";
import Redux from "../assets/icons/redux.png";
import Remix from "../assets/icons/remix.png";

import { Image, SimpleGrid, Tooltip } from "@chakra-ui/react";

function Skills() {
  const technologies = [
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "JavaScript", img: JavaScript },
    { name: "React", img: React },
    { name: "Redux", img: Redux },
    { name: "Express", img: Express },
    { name: "Next", img: Next },
    { name: "MySQL", img: MySQL },
    { name: "MongoDB", img: MongoDB },
    { name: "Node", img: Node },
    { name: "Ionic", img: Ionic },
    { name: "Remix", img: Remix },
    { name: "Bootstrap", img: Bootstrap },
    { name: "Tailwind", img: Tailwind },
    { name: "Chakra", img: Chakra },
  ];
  return (
    <SimpleGrid columns={[1, 3, 5]} spacing="10px" w="100%" mb={10}>
      {technologies.map((tech) => (
        <Tooltip
          hasArrow
          label={tech.name}
          bg="gray.300"
          color="black"
          key={tech.name}
        >
          <Image
            src={tech.img.src}
            alt={tech.name}
            textAlign="center"
            align="center"
            alignItems="center"
            mx="auto"
            mb={"40px"}
            width={"120px"}
            _hover={{
                width: "110px",
                transition: "0.4s"
            }}
          />
        </Tooltip>
      ))}
    </SimpleGrid>
  );
}

export default Skills;
