import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Form } from "components/Form";
import { Fragment, useEffect, useState } from "react";

export function Content() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [initalValues, setInitalValues] = useState(null);
  const [method, setMethod] = useState("");
  const [content, setContent] = useState();
  const [updateTable, setUpdateTable] = useState(0);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:8080/administrador/estudante/${id}`)
      .then(() => setUpdateTable((state) => state + 1));
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/administrador/estudante/")
      .then((response) => setContent(response.data));
  }, [updateTable]);

  return (
    <>
      <Box w="100%" color="black" p="60px">
        <Button
          onClick={() => {
            onOpen();
            setInitalValues(null);
            setMethod("criar");
          }}
          rightIcon={<AddIcon w="12px" h="12px" />}
        >
          Novo Cadastro
        </Button>
        <Grid
          bg="transparent"
          gap="20px"
          color="black"
          p="30px 50px"
          templateColumns="repeat(6, 1fr)"
          borderRadius="20px"
        >
          <Text>id</Text>
          <Text>Nome</Text>
          <Text>Email</Text>
          <Text>Senha</Text>
          <Text>Curso</Text>
          <Text mx="auto">Opções</Text>
          {Array.isArray(content)
            ? content.map((item, index) => {
                return (
                  <Fragment key={`${item.id}`}>
                    <Text>{item.id}</Text>
                    <Text>{item.nome}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.senha}</Text>
                    <Text>{item.curso}</Text>
                    <HStack justifyContent="center" spacing="10px">
                      <IconButton
                        onClick={() => {
                          onOpen();
                          setInitalValues(item);
                          setMethod("editar");
                        }}
                        bg="transparent"
                        _hover={{ color: "black", bg: "gray.200" }}
                        icon={<EditIcon />}
                      />
                      <IconButton
                        onClick={() => handleDelete(item.id)}
                        bg="transparent"
                        _hover={{ color: "black", bg: "gray.200" }}
                        icon={<DeleteIcon />}
                      />
                    </HStack>
                  </Fragment>
                );
              })
            : null}
        </Grid>
      </Box>
      {isOpen ? (
        <Form
          initalValues={initalValues}
          isOpen={isOpen}
          onClose={onClose}
          method={method}
          setUpdateTable={setUpdateTable}
        />
      ) : null}
    </>
  );
}
// {
//     "id": 1,
//     "nome": "Toner",
//     "email": "toner@mail.com",
//     "senha": "123456",
//     "curso": "letras"
//   },
