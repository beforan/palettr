import React from "react";
import { Grid, Text, useColorMode } from "@chakra-ui/core";

const PaletteData = ({ palette, chakra }) => {
  const { colorMode } = useColorMode();
  const style = { light: { bg: "blue.200" }, dark: { bg: "blue.700" } };

  return (
    <Grid gap={5} templateColumns="1fr 1fr" width="500px">
      <Text p={5} borderRadius={5} {...style[colorMode]} as="pre">
        {JSON.stringify(palette, null, 2)}
      </Text>
      <Text p={5} borderRadius={5} {...style[colorMode]} as="pre">
        {JSON.stringify(chakra, null, 2)}
      </Text>
    </Grid>
  );
};

export default PaletteData;
