import React from "react";
import { theme, Button, ThemeProvider } from "@chakra-ui/core";
import merge from "lodash-es/merge";

const generateTheme = (colors) => merge(theme, { colors: { sample: colors } });

const SampleComponents = ({ chakra: colors }) => {
  const sampleTheme = generateTheme(colors);

  return (
    <ThemeProvider theme={sampleTheme}>
      <Button variantColor="sample">Sample button</Button>
    </ThemeProvider>
  );
};

export default SampleComponents;
