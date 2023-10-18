import React from "react";
import { Box, HStack, Icon, Text, Stack } from "@chakra-ui/react";
import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icon";

const Feature = (props) => {
  return (
    <HStack spacing={"24px"}>
      <Icon as={props.icon} boxSize={"48px"} />
      <Text
        textAlign={"left"}
        fontSize={["16px", "16px", "18px"]}
        fontWeight={["600", "600", "700"]}
      >
        {props.children}
      </Text>
    </HStack>
  );
};

export const Features = () => {
  return (
    <Box maxW={"1024px"} m={"auto"} pt={"60px"} pb={"32px"}>
      <Stack
        px={"48px"}
        spacing={"20px"}
        direction={["column", "column", "column", "row"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fee 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};
