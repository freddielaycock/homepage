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
  <Page
    heading="Welcome (NOTE: This website is still under construction)"
    id="home"
  >
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
        <Bold text="Senior Software Engineer" /> currently working at{" "}
        <Bold text="Sky" /> in <Bold text="Leeds, UK" />. I have a passion for
        building software that is both <Bold text="scalable" /> and{" "}
        <Bold text="maintainable" />, and I enjoy working on projects that
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
        <Bold text="1st-class Mathematics graduate from the University of Sheffield" />
        , and have worked as both a <Bold text="full-stack" /> and{" "}
        <Bold text="front-end developer" /> for 7 years. I have experience in
        <Bold text="web-design" />, setting up{" "}
        <Bold text="backends and frontends" />, <Bold text="CI/CD pipelines" />,
        as well as <Bold text="SEO optimisation" />
        and <Bold text="experimentation" />.
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
        Most of my recent work has been in <Bold text="ecommerce" />, working
        with <Bold text="legacy systems" /> as well as{" "}
        <Bold text="cutting-edge technologies" />, with particular focuses on{" "}
        <Bold text="performance optimisation" />,{" "}
        <Bold text="user experience" /> and{" "}
        <Bold text="modernising old platforms" />.
      </Text>
    </Box>
  </Page>
);
