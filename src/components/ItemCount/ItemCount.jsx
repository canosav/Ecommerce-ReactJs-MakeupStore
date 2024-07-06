// 
import React, { useState } from 'react'
import { Box, Button, Flex, Heading, Text} from '@chakra-ui/react'
import './ItemCount'
import Swal from 'sweetalert2'

const ItemCount = ({stock, initialValue, onAdd, maxAvailable}) => {
    const [ count, setCount ] = useState(initialValue)
    const incrementar = () => {
        count < maxAvailable && setCount(count + 1)
        if(count === stock){
          Swal.fire({
            title: "Llego al limite de stock",
            confirmButtonText: "Aceptar",
            background: "#D9D8D9",
            color:"#28193D",
            confirmButtonColor:"#28193D"
          })
        }
    }

    const decrementar = () => {
        count > initialValue && setCount(count - 1)
    }

  return (
    <Flex>
        <Button m={5} 
          variant='solid' 
          bg={'#28193D'} 
          color={'#fff'}
          _hover={{ bg: '#46315C', color: '#fff' }} 
          onClick={decrementar}> 
            - 
          </Button>
          <Text m={6}>
            {count}
          </Text>

        <Button m={5} 
          variant='solid' 
          bg={'#28193D'} 
          color={'#fff'}
          _hover={{ bg: '#46315C', color: '#fff' }} 
          onClick={incrementar}>
             +
        </Button>

        <Button m={5} 
          variant='solid' 
          bg={'#28193D'} 
          color={'#fff'}
          _hover={{ bg: '#46315C', color: '#fff' }} 
          onClick={() => onAdd(count)}>
             Agregar al carrito 
        </Button>
    </Flex>
  )
}

export default ItemCount