import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Button,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export function Form({
  initalValues,
  method,
  isOpen,
  onClose,
  setUpdateTable,
}) {
  const [id, setId] = useState(
    initalValues ? (initalValues.id ? initalValues.id : undefined) : undefined
  );
  const [nome, setNome] = useState(
    initalValues ? (initalValues.nome ? initalValues.nome : "") : ""
  );
  const [email, setEmail] = useState(
    initalValues ? (initalValues.email ? initalValues.email : "") : ""
  );
  const [senha, setSenha] = useState(
    initalValues ? (initalValues.senha ? initalValues.senha : "") : ""
  );
  const [curso, setCurso] = useState(
    initalValues ? (initalValues.curso ? initalValues.curso : "") : ""
  );
  const model = {
    id,
    nome,
    email,
    senha,
    curso,
  };
  function handleSubmit() {
    if (method === "editar") {
      axios
        .put(`http://localhost:8080/administrador/estudante/${model.id}`, model)
        .then(() => setUpdateTable((state) => state + 1));
    }
    if (method === "criar") {
      axios
        .post(`http://localhost:8080/administrador/estudante/`, model)
        .then(() => setUpdateTable((state) => state + 1));
    }
  }

  return (
    <ModalContentCustom isOpen={isOpen} onClose={onClose}>
      <Stack spacing="12px" p="30px" w="500px">
        <Input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Input
          placeholder="Curso"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
        <Button
          type="submit"
          onClick={() => {
            handleSubmit();
            onClose();
          }}
          mt="25px"
          textTransform="capitalize"
        >
          {method}
        </Button>
      </Stack>
    </ModalContentCustom>
  );
}

function ModalContentCustom({
  isOpen,
  onClose,
  withoutCloseButton,
  children,
  backdropFilter = null,
  ...rest
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={backdropFilter} />
      <ModalContent minW="500px" mt={"12vh"} mb="auto" mx="0" {...rest}>
        <ModalHeader p="0">
          {withoutCloseButton ? null : (
            <ModalCloseButton
              size="32px"
              color="white"
              top={"-8%"}
              right={"-1.5%"}
            />
          )}
        </ModalHeader>
        <ModalBody p="0">
          <Flex justifyContent="center">{children}</Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
