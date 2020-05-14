import React from "react";
import { Stack, Flex, Text, SimpleGrid } from "@chakra-ui/core";
import { getContrastColor } from "../tools/colors";

const PaletteDisplay = ({ palette }) => {
  const paletteRender = palette.reduce((a, c, i, p) => {
    const color = getContrastColor(c, p[9], p[0]);
    return [
      ...a,
      <Flex
        key={c}
        width="100px"
        height="200px"
        bg={c}
        direction="column"
        align="center"
        justify="space-between"
        color={color}
        py={3}
      >
        <Text>Color {i+1}</Text>
        <Text>{c}</Text>
      </Flex>,
    ];
  }, []);
  return (
    <Flex wrap="wrap">
      {paletteRender}
    </Flex>
  );
};

export default PaletteDisplay;
