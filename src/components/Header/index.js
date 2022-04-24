import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      h="60px"
      bg="white"
      alignItems="center"
      justifyContent="center"
      border="1px solid black"
    >
      <Text fontSize="30px">Agendamento</Text>
    </Flex>
  );
}
