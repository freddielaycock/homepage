import {
  Box,
  Button,
  HStack,
  ScrollArea,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { createElement, type FC, useState } from "react";

import { Page } from "../../components/page/Page";
import { PLAYGROUND_COMPONENTS } from "./constants";
import type { PlaygroundEntry } from "./Playground.types";

export const Playground: FC = () => {
  const [selectedComponent, setSelectedComponent] = useState(
    PLAYGROUND_COMPONENTS[0],
  );

  return (
    <Page heading="Component Playground" id="playground">
      <Text>
        This is a page I have used for development that allows me to configure
        components in isolation, before then integrating them into pages.
      </Text>
      <Separator my={4} />
      <VStack gap={2} textAlign="left" align="start">
        <Text fontSize="lg">Components</Text>
        <HStack gap={4} align="start" width="100%" height="80vh">
          <ScrollArea.Root variant="hover" width="200px" height="100%">
            <ScrollArea.Viewport>
              <ScrollArea.Content paddingEnd="3" spaceY="4" textStyle="sm">
                {PLAYGROUND_COMPONENTS.map(
                  ({ name, component, id, props }: PlaygroundEntry) => (
                    <Box key={id} gap={2}>
                      <Button
                        colorPalette="gray"
                        data-test-id={`playground-${id}-button`}
                        onClick={() =>
                          setSelectedComponent({ name, component, id, props })
                        }
                        variant="surface"
                        width="100%"
                        {...(selectedComponent.id === id && {
                          variant: "solid",
                          colorPalette: "orange",
                        })}
                      >
                        {name}
                      </Button>
                    </Box>
                  ),
                )}
              </ScrollArea.Content>
            </ScrollArea.Viewport>
          </ScrollArea.Root>
          <Box
            flex="1"
            overflowY="auto"
            paddingX={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {createElement(
              selectedComponent.component,
              selectedComponent.props,
              ...[selectedComponent.children],
            )}
          </Box>
        </HStack>
      </VStack>
    </Page>
  );
};
