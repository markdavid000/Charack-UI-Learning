import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icon";

const ListItem = (props) => {
  return (
    <HStack as={"li"} spacing={"20px"} alignItems={"start"}>
      <Icon as={CheckIcon} w={"22px"} h={"22px"} />
      <Text textAlign={"left"}>{props.children}</Text>
    </HStack>
  );
};

export default ListItem;
