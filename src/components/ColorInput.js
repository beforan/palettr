import React from "react";
import { Stack, Input, Flex } from "@chakra-ui/core";

const ColorInput = ({ baseColor, setBaseColor }) => (
  <Stack isInline align="center">
    <Flex borderRadius={5} bg={baseColor} width="100px" height="60px" />
    <Flex>
      <Input
        value={baseColor}
        onChange={({ target: { value } }) => setBaseColor(value)}
      />
    </Flex>
  </Stack>
);

export default ColorInput;
