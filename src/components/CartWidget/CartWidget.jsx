import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex m={10} justify={'center'} align={'center'}>
      <Link to='/cart'>< IoCartOutline size={30}/></Link>
      <Box mt={5} ml={0.5} fontSize={'sm'}>
        <span>{ getQuantity() > 0 && getQuantity() }</span>
      </Box>
    </Flex>
  )
}

export default CartWidget