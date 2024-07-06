import { Box, Button, Center, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Card
  } from '@chakra-ui/react'
import { RiDeleteBin5Line } from "react-icons/ri";
import {Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal, incrementarItem, decrementarItem } = useContext(Context)
    console.log('Carrito', cart)
    if(cart.length === 0) {
        return (
            <Center mt={10}>
                <Card border='3px' borderColor='#243F4D' backgroundColor={'#D9D8D9'} >
                    <Flex direction={'column'} justify={'center'} align={'center'} p={20}>
                        <Heading >Todavía no agregaste productos al carrito</Heading>
                        <Button 
                        bg={'#28193D'} 
                        color={'#fff'}
                        _hover={{ bg: '#46315C', color: '#fff' }}
                        w={'30%'}
                        h={'5vh'}
                        borderRadius={5}
                        mt={20}
                        >
                            <Link to='/'>Ver productos</Link>
                        </Button>
                    </Flex>
                </Card>
            </Center>
        )
    }else {

  return (

        <TableContainer >
            <Table>
                <Thead>
                <Tr backgroundColor={'#D9D8D9'}>
                    <Th color={'#46315C'} >Nombre</Th>
                    <Th color={'#46315C'} >Cantidad</Th>
                    <Th color={'#46315C'}>Precio</Th>
                    <Th color={'#46315C'}>Subtotal</Th>
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                    {
                        cart.map((prod) => (
                            <Tr key={prod.id}>
                                <Td color={'#46315C'}>{prod.nombre}</Td>
                                <Td>
                                    <Button backgroundColor={'#D9D8D9'} mr='3'  size='sm' onClick={() => decrementarItem(prod.id)}> - </Button>
                                        {prod.quantity}
                                    <Button backgroundColor={'#D9D8D9'} ml='3' size='sm' onClick={() => incrementarItem(prod.id, prod.stock)}> + </Button>
                                </Td>
                                <Td color={'#46315C'}>${prod.precio}</Td>
                                <Td color={'#46315C'}>${prod.precio * prod.quantity}</Td>
                                <Td color={'#46315C'}>
                                    <Button backgroundColor={'#D9D8D9'} onClick={()=>removeItem(prod.id)}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
                
                        <Tfoot>
                            <Tr>
                                <Th><Button bg={'#28193D'} color={'#fff'}  _hover={{ bg: '#46315C', color: '#fff' }} onClick={() => clearCart()}>Vaciar carrito </Button></Th>
                                <Th><Heading fontSize={'xl'} color={'#46315C'}>${getTotal()}</Heading></Th>
                                <Th>
                                    <Button bg={'#B3A3BA'} color={'#10091D'}  _hover={{ bg: '#D9D8D9', color: '#10091D' }}>
                                        <Link to='/checkout'>Finalizar compra</Link>
                                    </Button>
                                </Th>
                            </Tr>

                        </Tfoot>
            </Table>
            </TableContainer>
        
    )
}

}

export default Cart
