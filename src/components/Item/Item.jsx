import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading, Center, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre, precio, imagen, id, stock}) => {
  return (
    <Box>
      <Card maxW="md" border="3px" borderColor="#243F4D" boxShadow="2xl" backgroundColor="#D9D8D9">
        <CardBody>
          <Image
            src={imagen}
            alt={nombre}
            borderRadius="md"
            boxSize="90%"
            objectFit="cover"
            w={"300px"}
            h={"300px"}
          />
          <Stack mt="6" spacing="3" justifyContent="center" align="center">
            <Heading size="md">{nombre}</Heading>
            <Text color="#28193D" fontSize="2xl">
              ${precio}
            </Text>
          </Stack>
        </CardBody>
        <Center height="2px" bg="#28193D"></Center>
        <Divider color="#28193D" />
        <CardFooter>
          <Flex spacing="2" justifyContent="center" align="center" w={"100%"}>
            {stock === 0 ? (
              <Button
                variant="solid"
                bg="#28193D"
                color="#fff"
                _hover={{ bg: "#28193D", color: "#fff" }}
              >
                Sin Stock
              </Button>
            ) : (
              <Button
                variant="solid"
                bg="#28193D"
                color="#fff"
                _hover={{ bg: "#28193D", color: "#fff" }}
              >
                <Link to={`/producto/${id}`}>Ver detalle</Link>
              </Button>
            )}
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  )   
}

export default Item
