import type { FC } from "react";
import { Text } from "@chakra-ui/react";

import { Page } from "../../components/page/Page";

export const Playground: FC = () => (
  <Page heading="Component Playground" id="playground">
    <Text>This is a page I have used for development that allows me to configure components in isolation, before then integrating them into pages.</Text>
  </Page>
);
