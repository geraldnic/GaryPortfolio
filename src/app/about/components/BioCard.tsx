"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
  Box,
  Tooltip,
} from "@chakra-ui/react";

import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { ReactElement } from "react";
import Photo from "../assets/about.jpg";
import Link from "next/link";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};

export default function BioCard() {
  return (
    <Container
      maxW={"5xl"}
      p={10}
      borderRadius="10px"
      border={"1px solid black"}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Contact
          </Text>
          <Heading>Gerald Nicholas Chandra</Heading>
          <Text
            color={useColorModeValue("gray.500", "gray.200")}
            fontSize={"lg"}
          >
            Web Developer
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor="black" />}>
            <Feature
              icon={
                <Icon as={HiOutlineMail} color={"yellow.900"} w={5} h={5} />
              }
              iconBg={"yellow.400"}
              text={"geraldnicholas.hp@gmail.com"}
            />
            <Feature
              icon={
                <Icon as={IoLogoWhatsapp} color={"green.900"} w={5} h={5} />
              }
              iconBg={"green.400"}
              text={"085890525555"}
            />
            <Flex>
              <Tooltip hasArrow label="Instagram" bg="gray.300" color="black">
                <Link
                  href="https://www.instagram.com/geraldnic"
                  target="_blank"
                >
                  <IoLogoInstagram size={30} />
                </Link>
              </Tooltip>
              <Tooltip hasArrow label="Github" bg="gray.300" color="black">
                <Link href="https://github.com/geraldnic" target="_blank">
                  <IoLogoGithub size={30} />
                </Link>
              </Tooltip>
              <Tooltip hasArrow label="LinkedIn" bg="gray.300" color="black">
                <Link
                  href="https://www.linkedin.com/in/gerald-nicholas-b13413202/"
                  target="_blank"
                >
                  <IoLogoLinkedin size={30} />
                </Link>
              </Tooltip>
            </Flex>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={Photo.src}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
