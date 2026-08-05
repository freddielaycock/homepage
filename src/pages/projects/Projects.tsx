import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import type { FC } from "react";

import { Page } from "../../components/page/Page";

export const Projects: FC = () => (
  <Page heading="Projects" id="projects">
    <Box maxW="80%" mx="auto" textAlign="center">
      <Text>
        This page houses a collection of my personal projects, which I have
        built to explore new technologies and ideas. These projects are a
        reflection of my curiosity and passion for learning, and I hope they
        inspire others to pursue their own creative endeavors.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="6" pt={4}>
        <GridItem>
          <Box borderWidth="2px" borderRadius="lg" p={4}>
            <Text fontSize="lg" fontWeight="bold">
              Projects to be added!
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  </Page>
);
