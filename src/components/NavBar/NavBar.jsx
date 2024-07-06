import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    Image
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex 
        h={'15vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#68507B'}
        >
        <Link to='/'>
        <Image
            objectFit='cover'
            m={5}
            maxW={{ base: '100%', sm: '50px' }}
            src="https://cdn-icons-png.flaticon.com/256/1024/1024505.png"
        />
        </Link>
        
        {/* <ChakraLink as={Link} width={'30%'} to='/'>
          <Image w={'60%'} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Flapiz-labial_1024505&psig=AOvVaw3uanOHl13K_JIJJIP1Ip8s&ust=1718141044698000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDi-aj80YYDFQAAAAAdAAAAABAE"/>
        </ChakraLink> */}
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />} backgroundColor={'#8D769A'} >
                Productos
            </MenuButton>
                
            <MenuList>
                <MenuItem>
                <Link to='/categoria/rostro'> Rostro </Link> 
                </MenuItem>
                <MenuItem>
                <Link to='/categoria/ojos'>Ojos</Link>
                </MenuItem>
                <MenuItem> <Link to='/categoria/labios'> Labios </Link>
                </MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar