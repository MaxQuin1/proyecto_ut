import React from "react";
import logoUt from "../img/Logo UT Cancún BIS_oficial.svg";
import { Avatar, WrapItem, Flex, Text} from "@chakra-ui/react";
import {
  BellIcon,
  ChatIcon,
  EmailIcon,
} from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Flex alignItems="center">
      <img src={logoUt} alt="Logo" className="max-w-xs p-5 m-1" />
      <Flex ml='auto'>
        <Flex direction="column" justifyContent="center" m="1" p="1">
          <Text className="text-xl">Carlos Maximo Quintero Escobar</Text>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="10"
            mt="2"
          >
            <BellIcon w={26} h={26} color="gray" />
            <ChatIcon w={20} h={20} color="gray" />
            <EmailIcon w={24} h={24} color="gray" />
          </Flex>
        </Flex>
        <Flex>
          <WrapItem px='20'>
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              className="rounded-full overflow-hidden"
              boxSize={90}
            />
          </WrapItem>
        </Flex>
      </Flex>
    </Flex>
  );
}
