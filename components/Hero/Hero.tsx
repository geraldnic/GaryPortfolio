"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import HeroDark from "./assets/HeroDark.gif";
import { useSelector } from "react-redux";

import "animate.css/animate.css";

export default function Hero() {
  let mode = useSelector((state: any) => state.dark.value);
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 6, md: 8 }}
        pt={{ base: 20, md: 28 }}
        height={"100%"}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)"
        >
          <Text
            as={"span"}
            textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)"
            color={"orange.400"}
          >
            {"Hello," + " "}
          </Text>
          <Text as={"span"} textShadow="0px 3px 2px rgba(0, 0, 0, 0.50)">
            I&apos;m Gerald
          </Text>
        </Heading>
        <Text maxW={"3xl"} fontSize={"xl"}>
          A fresh graduate with an interest in web development. With several
          projects under my belt, I am ready to contribute directly to other web
          development projects.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link href="/projects">
            <Button rounded={"full"} px={6}>
              Projects
            </Button>
          </Link>
          <Link href="/about">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              About
            </Button>
          </Link>
        </Stack>
        <Flex w={"full"}>
          {mode === "light" ? (
            <Image
              mx={"auto"}
              height={{ sm: "26rem", lg: "33rem" }}
              src={HeroDark.src}
              className="animate__animated animate__zoomIn animate__slow"
            />
          ) : (
            <Image
              mx={"auto"}
              height={{ sm: "26rem", lg: "33rem" }}
              className="animate__animated animate__bounceInLeft animate__fast"
              src={
                "https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966"
              }
            />
          )}
        </Flex>
      </Stack>
    </Container>
  );
}
