import { Box, HStack, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiBiome,
  SiChakraui,
  SiGrafana,
  SiJest,
  SiPnpm,
  SiTypescript,
} from "react-icons/si";

import { Bold } from "../../components/bold/Bold";
import { Page } from "../../components/page/Page";

export const Home: FC = () => (
  <Page heading="Welcome" id="home">
    <Box
      maxW={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
      mx="auto"
      textAlign="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Text>
        My name is Freddie Laycock, and this is my website! I am a{" "}
        <Bold>Senior Software Engineer</Bold> currently working at{" "}
        <Bold>Sky</Bold> in <Bold>Leeds, UK</Bold>. I have a passion for
        building software that is both <Bold>scalable</Bold> and{" "}
        <Bold>maintainable</Bold>, and I enjoy working on projects that
        challenge me to learn new things.
      </Text>
      <Image
        height="300px"
        src="/public/images/website-photo.webp"
        alt="Freddie Laycock"
        rounded="full"
        marginY={4}
      />
      <Text>
        A little about me; I am a{" "}
        <Bold>
          1st-class Mathematics graduate from the University of Sheffield
        </Bold>
        , and have worked as both a <Bold>full-stack</Bold> and{" "}
        <Bold>front-end developer</Bold> for 7 years. I have experience in
        <Bold> web-design</Bold>, setting up <Bold>backends and frontends</Bold>
        , <Bold>CI/CD pipelines</Bold>, as well as{" "}
        <Bold>SEO optimisation </Bold>
        and <Bold>experimentation</Bold>.
      </Text>
      <HStack
        gap={4}
        marginY={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <SiTypescript size={30} />
        <FaReact size={30} />
        <FaNodeJs size={30} />
        <SiJest size={30} />
        <SiPnpm size={30} />
        <SiGrafana size={30} />
        <SiBiome size={30} />
        <FaPython size={30} />
        <SiChakraui size={30} />
      </HStack>
      <Text>
        Most of my recent work has been in <Bold>ecommerce</Bold>, working with{" "}
        <Bold>legacy systems</Bold> as well as{" "}
        <Bold>cutting-edge technologies</Bold>, with particular focuses on{" "}
        <Bold>performance optimisation</Bold>, <Bold>user experience</Bold> and{" "}
        <Bold>modernising old platforms</Bold>.
      </Text>
    </Box>
  </Page>
);
