import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box pb={"112px"} as="section">
      <Box
        color={"gray.50"}
        bg={"purple.600"}
        pt={"90px"}
        pb={"198px"}
        px={"32px"}
        textAlign={["left", "left", "center"]}
      >
        <Heading fontWeight={"800"} fontSize={["30px", "30px", "48px"]}>
          Simple pricing for your business
        </Heading>
        <Text
          fontWeight={"500"}
          fontSize={["18px", "18px", "24px"]}
          pt={"16px"}
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
