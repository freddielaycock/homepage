import {
  Box,
  Button,
  ScrollArea,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { type ComponentType, createElement, type FC, useState } from "react";

import { Page } from "../../components/page/Page";
import { TestComponent } from "../../components/test-component/TestComponent";
import { ThemeToggle } from "../../components/theme-toggle/ThemeToggle";

type PlaygroundEntry<P extends object = object> = {
  name: string;
  component: ComponentType<P>;
  id: string;
  props: P;
};

const components: PlaygroundEntry[] = [
  {
    name: "Page",
    component: Page,
    id: "page",
    props: {
      heading: "Test Page",
      id: "test-page",
    },
  },
  {
    name: "Test Component",
    component: TestComponent,
    id: "test-component",
    props: {
      text: "This is a test component",
    },
  },
  {
    name: "Theme Toggle",
    component: ThemeToggle,
    id: "theme-toggle",
    props: {},
  },
] as PlaygroundEntry[];

export const Playground: FC = () => {
  const [selectedComponent, setSelectedComponent] = useState(components[0]);

  return (
    <Page heading="Component Playground" id="playground">
      <Text>
        This is a page I have used for development that allows me to configure
        components in isolation, before then integrating them into pages.
      </Text>
      <Separator my={4} />
      <VStack
        align="left"
        gap={2}
        position="fixed"
        left={4}
        top={56}
        maxH="80vh"
        overflowY="auto"
      >
        <Text fontSize="lg">Components</Text>
        <ScrollArea.Root variant="hover">
          <ScrollArea.Viewport>
            <ScrollArea.Content paddingEnd="3" spaceY="4" textStyle="sm">
              {components.map(({ name, component, id, props }) => (
                <Box key={id} gap={2}>
                  <Button
                    colorPalette="gray"
                    data-test-id={`playground-${id}-button`}
                    onClick={() =>
                      setSelectedComponent({ name, component, id, props })
                    }
                    variant="surface"
                    {...(selectedComponent.id === id && {
                      variant: "solid",
                      colorPalette: { _light: "cyan", _dark: "green" },
                    })}
                  >
                    {name}
                  </Button>
                </Box>
              ))}
            </ScrollArea.Content>
          </ScrollArea.Viewport>
        </ScrollArea.Root>
      </VStack>

      {createElement(selectedComponent.component, selectedComponent.props)}
    </Page>
  );
};
