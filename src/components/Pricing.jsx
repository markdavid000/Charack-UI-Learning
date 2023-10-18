import React from "react";
import { Box, Flex, Heading, Text, Button, Stack } from "@chakra-ui/react";
import ListItem from "./ListItem";

const Pricing = () => {
  return (
    <Box mx={"24px"}>
      <Box
        maxW={"994px"}
        m={"auto"}
        mt={"-256px"}
        borderRadius={"12px"}
        overflow={"hidden"}
        boxShadow={
          "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
      >
        <Flex direction={["column", "column", "column", "row"]}>
          <Box bg={"purple.50"} p={"60px"}>
            <Text fontSize={"24px"} fontWeight={"800"}>
              Premium PRO
            </Text>
            <Heading as={"h3"} fontSize={["48px", "48px", "60px"]}>
              $329
            </Heading>
            <Text
              color={"gray.900"}
              fontSize={"16px"}
              fontWeight={"500"}
              mt={"8px"}
            >
              billed just once
            </Text>
            <Button colorScheme="purple" size={"lg"} w={"282px"} mt={"24px"}>
              Get Started
            </Button>
          </Box>
          <Box p={"60px"} fontSize={"18px"} bg={"#fff"}>
            <Text textAlign={"left"}>
              Access these features when you get this pricing package for your
              business
            </Text>
            <Stack as={"ul"} spacing={"20px"} pt={"24px"}>
              <ListItem>International calling and message API</ListItem>
              <ListItem>Additional phone number</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
