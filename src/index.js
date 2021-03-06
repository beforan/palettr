import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, ColorModeProvider, theme, CSSReset } from "@chakra-ui/core";

const Bootstrap = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <App />
        </ColorModeProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Bootstrap />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
