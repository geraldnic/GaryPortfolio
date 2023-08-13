"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleDark } from "@/features/dark";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const handleToggle = () => {
    toggleColorMode();
    dispatch(toggleDark(colorMode));
  }
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} maxW={"60%"} mx={"auto"}>
          <Link href={"/"}>
            <Box mx={5}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Gerald&apos;s Portfolio
              </Text>
            </Box>
          </Link>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={handleToggle}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
