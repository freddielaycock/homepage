import { Accordion, Box, Span, Text } from "@chakra-ui/react";
import type { FC } from "react";

import { Page } from "../../components/page/Page";
import type { CareerAccordionItem } from "./Career.types";
import { CAREER_ACCORDION_ITEMS } from "./constants";

export const Career: FC = () => (
  <Page heading="Career" id="career">
    <Box maxW="80%" mx="auto" textAlign="center">
      <Text p={4}>
        Below is a collection of my career history, including my work experience
        and education. I have also included a brief summary of my skills and
        interests. Please feel free to explore and learn more about my
        professional background.
      </Text>
      <Accordion.Root collapsible>
        {CAREER_ACCORDION_ITEMS.map(
          ({ title, value, content }: CareerAccordionItem) => (
            <Accordion.Item key={value} value={value}>
              <Accordion.ItemTrigger>
                <Span fontWeight="bold" py={2}>
                  {title}
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Text pb={4}>{content}</Text>
              </Accordion.ItemContent>
            </Accordion.Item>
          ),
        )}
      </Accordion.Root>
    </Box>
  </Page>
);
