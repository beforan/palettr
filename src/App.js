import React, { useState, useEffect } from "react";
import {
  Stack,
  useColorMode,
  IconButton,
  Button,
  Link,
  Icon,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/core";
import ColorInput from "./components/ColorInput";
import { createShades, buildPalette } from "./tools/palettes";
import PaletteDisplay from "./components/PaletteDisplay";
import PaletteData from "./components/PaletteData";
import SampleComponents from "./components/SampleComponents";
import ExternalLink from "./components/ExternalLink";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [baseColor, setBaseColor] = useState("#f00");
  const [palette, setPalette] = useState([]);
  const [chakra, setChakra] = useState({});

  useEffect(() => {
    try {
      const p = createShades(baseColor);
      setPalette(p);
      setChakra(buildPalette(p));
    } catch {}
  }, [baseColor]);

  return (
    <Stack p={2} shouldWrapChildren align="center">
      <Stack
        isInline
        align="center"
        mb={10}
        boxShadow="0 2px 5px rgba(0,0,0,0.6)"
        p={10}
      >
        <Flex direction="column" align="left" pr={10}>
          <Heading as="h1">Palettr</Heading>
          <Heading as="h4" size="sm\">
            Generate paletted theme colors for{" "}
            <ExternalLink color="blue.500" href="https://chakra-ui.com">
              Chakra UI
            </ExternalLink>
          </Heading>
        </Flex>
        <Button
          onClick={toggleColorMode}
          leftIcon={colorMode === "light" ? "moon" : "sun"}
        >
          {colorMode === "light" ? "Dark" : "Light"} mode
        </Button>

        <Text>
          See also:
          <ExternalLink
            color="blue.500"
            m={2}
            href="https://smart-swatch.netlify.app/"
          >
            SmartSwatch
          </ExternalLink>
        </Text>
      </Stack>

      <ColorInput baseColor={baseColor} setBaseColor={setBaseColor} />
      <PaletteDisplay palette={palette} />
      <SampleComponents chakra={chakra} />
      <PaletteData palette={palette} chakra={chakra} />
    </Stack>
  );
}

export default App;
