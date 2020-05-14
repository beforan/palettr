import React from "react";
import { Link, Icon } from "@chakra-ui/core";

const ExternalLink = ({ children, ...p }) => (
  <Link isExternal {...p}>
    {children}
    <sup>
      <Icon name="external-link" ml={1} />
    </sup>
  </Link>
);

export default ExternalLink;
