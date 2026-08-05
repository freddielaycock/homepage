import { Heading } from "@chakra-ui/react";
import type { FC } from "react";
import styled from "styled-components";

import type { PageProps } from "./Pages.types";

const PageWrapper = styled.div`
  margin: auto;
  padding: 16px;
  text-align: center;
`;

export const Page: FC<PageProps> = ({ heading, headingSize = "2xl", id, children }) => (
  <PageWrapper data-test-id={`${id}-page`}>
    {heading && <Heading size={headingSize}>{heading}</Heading>}
    {children}
  </PageWrapper>
);
