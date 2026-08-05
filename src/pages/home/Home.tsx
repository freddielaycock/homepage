import { Box, Text } from "@chakra-ui/react";
import type { FC } from "react";

import { Page } from "../../components/page/Page";

export const Home: FC = () => (
  <Page heading="Homepage" id="home">
    <Box maxW="80%" mx="auto" textAlign="center">
      <Text>
        Hello! Welcome to my personal homepage. This is a work in progress, so
        please excuse the mess. I am using this site to experiment with new
        technologies and ideas, and to showcase some of my work. Please feel
        free to explore and check back often for updates!
      </Text>
    </Box>
  </Page>
);
