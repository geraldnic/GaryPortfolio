import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
} from "@chakra-ui/react";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  img: string;
  site: string;
  git: string;
}

function ProjectCard({
  name,
  description,
  img,
  site,
  git,
}: ProjectCardProps) {
  return (
    <Card maxW="sm" height={"480px"}>
      <CardBody>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={"350px"}
          h={"200px"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href={site} target="_blank">
            <Button variant="solid" colorScheme="blue">
              View Site
            </Button>
          </Link>
          <Link href={git} target="_blank">
            <Button variant="ghost" colorScheme="blue">
              Repository
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
