import { Heading } from "@chakra-ui/react";
import type { FC } from "react";
import styled from "styled-components";

import type { PageProps } from "./Page.types";

const PageWrapper = styled.div<{ $padding: string }>`
  margin: auto;
  padding: ${({ $padding }) => $padding};
  text-align: center;
`;

export const Page: FC<PageProps> = ({
  heading,
  headingSize = "2xl",
  id,
  children,
}) => (
  <PageWrapper
    data-test-id={`${id}-page`}
    $padding={heading ? "16px" : "32px 16px"}
  >
    {heading && (
      <Heading p={4} size={headingSize}>
        {heading}
      </Heading>
    )}
    {children}
  </PageWrapper>
);
