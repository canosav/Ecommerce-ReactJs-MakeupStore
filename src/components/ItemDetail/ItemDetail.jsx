import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image,  Avatar,  IconButton, Button, Center, Stack, Divider} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';


const ItemDetail = ({categoria, descripcion, imagen, nombre, precio, id, stock, currentQuantity}) => {
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(Context)
    const maxAvailable = stock - currentQuantity

    const onAdd = (quantity) => {   
        const item = {
            id,
            nombre,
            precio, 
            stock
        }
        addItem(item, quantity)
        toast(`Agregaste ${quantity} unidades`)
        setCantidad(quantity)
    }

    return (
        <Center m={10}>
            <Card maxW='md' border='3px' borderColor='#243F4D'  backgroundColor={'#D9D8D9'}>
                <CardBody>
                    <Flex justifyContent="center">
                        <Image
                        src={imagen}
                        alt={nombre}
                        borderRadius='md'
                        boxSize='100%'
                        objectFit='cover' 
                        w={'300px'}
                        h={'300px'}
                        />
                    </Flex>
                    <Stack mt='6' spacing='3' justifyContent={'center'} align={'center'}>
                        <Heading size='md'>{nombre}</Heading>
                        <Text color={'#10091D'} textAlign={'center'}>
                            {descripcion}
                        </Text>
                        <Text color={'#28193D'} fontSize='2xl'>
                            ${precio}
                        </Text>
                        <Text color={'#28193D'} >
                            Stock disponible: {maxAvailable}
                        </Text>
                        <Text color={'#28193D'} >
                            Cantidad actual en el carrito: {currentQuantity}
                        </Text>
                    </Stack>
                </CardBody>
                <Center height='2px' bg={'#28193D'}>
                </Center>
                <Divider color={'#28193D'} />
                <CardFooter>
                    <Flex>
                        {
                            cantidad > 0 ?
                                <Flex justify={'space-between'} align={'center'} w={'100%'}>
                                    <Button 
                                        bg={'#28193D'} 
                                        color={'#fff'}
                                        _hover={{ bg: '#46315C', color: '#fff' }} 
                                        w={'100%'}
                                        h={'5vh'}
                                        m={5}
                                        borderRadius={5}
                                        p={7}
                                    >
                                        <Link to='/cart'>Ir al carrito</Link> 
                                    </Button>
                                    <Button 
                                        bg={'#28193D'} 
                                        color={'#fff'}
                                        _hover={{ bg: '#46315C', color: '#fff' }}
                                        w={'100%'}
                                        h={'5vh'}
                                        m={5}
                                        borderRadius={5}
                                        p={7}
                                    >
                                        <Link to='/'>Seguir comprando</Link> 
                                    </Button>
                                    
                                </Flex>
                                            
                            :
                                <ItemCount stock={stock} initialValue={1} onAdd={onAdd} maxAvailable={maxAvailable} />
                        }

                    </Flex>
                </CardFooter>
            </Card>
        </Center>
    )
}

export default ItemDetail