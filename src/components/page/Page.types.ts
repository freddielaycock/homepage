import type { HeadingProps } from "@chakra-ui/react";

export type PageProps = {
  heading?: string;
  headingSize?: HeadingProps["size"];
  id?: string;
  children?: React.ReactNode;
};
