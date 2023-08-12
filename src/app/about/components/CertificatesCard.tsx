import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

import ITSpecialist from "../assets/ITSpecialist.jpg";
import Dicoding from "../assets/Dicoding.jpg";
import DQLab from "../assets/DQLab.jpg";
import Aslab from "../assets/Aslab.jpg";
import Link from "next/link";

function CertificatesCard() {
  const certificates = [
    {
      name: "IT Specialist (JavaScript) Sertification",
      img: ITSpecialist,
      institution: "Certiport",
      url: "https://drive.google.com/file/d/1YlZKWEZ7hnhxUNng8BR7f2hNbSdsmaCl/view?usp=sharing",
    },
    {
      name: "Basic Web Programming Class",
      img: Dicoding,
      institution: "Dicoding",
      url: "https://drive.google.com/file/d/1SikPQjdqaJ-xGQ3ZvqSo2ehwINwyeqhR/view?usp=sharing",
    },
    {
      name: "Fundamental SQL Using SELECT Statement Class",
      img: DQLab,
      institution: "DQLab",
      url: "https://drive.google.com/file/d/1g5GG4LrR5X8CoM03Zgf77UplXqOYAtBq/view?usp=sharing",
    },
    {
      name: "Asisten Laboratorium",
      img: Aslab,
      institution: "Universitas Multimedia Nusantara",
      url: "https://drive.google.com/file/d/1-wTlhqkbnA1-Xlu3ZiCM6hcBVqz2v8Ve/view?usp=sharing",
    },
  ];
  return (
    <Box maxW={"800px"} alignItems="center" mx={"auto"}>
      {certificates.map((certificate) => (
        <Card
          key={certificate.name}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mb={10}
          _hover={{
            borderColor: "#FFCE07",
            borderWidth: "2px",
          }}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px", md: "300px" }}
            src={certificate.img.src}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{certificate.name}</Heading>

              <Text py="2">{certificate.institution}</Text>
            </CardBody>

            <CardFooter>
              <Link href={certificate.url} target="_blank">
                <Button variant="solid" colorScheme="blue">
                  View Certificate
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Box>
  );
}

export default CertificatesCard;
