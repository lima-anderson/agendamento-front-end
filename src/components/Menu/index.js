import { Box, Text } from "@chakra-ui/react";

export function Menu({ page, setPage }) {
  return (
    <Box
      borderRight="1px solid black"
      p="30px"
      fontSize="20px"
      fontFamily="sans-serif"
      w="300px"
      h="100vh"
    >
      <Text onClick={() => setPage("cadastrar")}>Cadastrar</Text>
      <Text onClick={() => setPage("alterar")}>Alterar estudante</Text>
      <Text onClick={() => setPage("listar")}>Listar</Text>
      <Text onClick={() => setPage("deletar")}>Deletar esturante</Text>
    </Box>
  );
}
