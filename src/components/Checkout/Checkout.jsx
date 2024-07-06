import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Center,
    Heading,
    Button,
    Box,
    Card

  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        lastName: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [ error, setError ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()
    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name = "Tenés que agregar un nombre"
        }else if(user.name.length < 3) {
            errors.name = "El nombre debe tener al menos 3 caracteres"
        }
        
        if(!user.lastName) {
            errors.lastName = "Tenés que agregar un apellido"
        }else if(user.lastName.length < 3) {
            errors.lastName = "El apellido debe tener al menos 3 caracteres"
        }

        if(!user.email){
            errors.email = "Tenés que agregar un email"
        }else if(!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = "El email no es válido"
        }

        if (!user.repeatedEmail){
            errors.repeatedEmail = "Tenés que repetir el email"
        }else if (user.email !== user.repeatedEmail){
            errors.repeatedEmail = "Los emails no coinciden"
        }

        if(!user.phone){
            errors.phone="Tenés que agregar un numero de telefono"
        }else if (user.phone.length < 8){
            errors.phone= "El numero telefonico debe tener al menos 8 caracteres"
        }


        setError(errors)
        return Object.keys(errors).length === 0

    }

    const getOrder = async () => {
        if(!validateForm()){
            return
        }

        if(cart.length === 0){
            Swal.fire({
                title: "Carrito Vacio",
                text: `No puede finalizar la compra sin productos seleccionados`,
                icon: "error",
                confirmButtonText: "Ir al inicio",
                background: "#D9D8D9",
                color:"#28193D",
                confirmButtonColor:"#28193D"
              }).then(() => {
                 navigate('/')
              });
            return
        }

        const coleccion = collection(db, 'orders')
        try {
            for(const item of cart){
                const docRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc(docRef)
            }

            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }

            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                title: "Gracias por su compra",
                text: `El número de orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Ir al inicio",
                background: "#D9D8D9",
                color:"#28193D",
                confirmButtonColor:"#28193D"
              }).then(() => {
                 clearCart()
                 navigate('/')
              });
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <Center mt={5}>
        <Flex direction={'column'} align={'center'} justify={'center'}>
            <Heading color={'#28193D'}>Datos de facturación</Heading>
            <Flex w={'100%'} justify={'center'} align={'center'}>
                <FormControl>
                    <FormLabel><Box color={'#68507b'}>Nombre</Box></FormLabel>
                    <Input bg={'#D9d8d9'}
                        type='text' 
                        name='name'
                        placeholder='Valentina'
                        onChange={updateUser}
                        />
                    <Box color='red'>{error.name}</Box>

                    <FormLabel> <Box color={'#68507b'} mt='4'>Apellido</Box></FormLabel>
                    <Input bg={'#D9d8d9'}
                        type='text' 
                        name='lastName'
                        placeholder='Canosa'
                        onChange={updateUser}
                        />
                    <Box color='red'>{error.lastName}</Box>

                    <FormLabel><Box color={'#68507b'} mt='4'>Email</Box></FormLabel>
                    <Input bg={'#D9d8d9'}
                        type='email' 
                        name='email'
                        placeholder='valentinacanosa@email.com'
                        onChange={updateUser}
                        />
                    <Box color='red'>{error.email}</Box>

                    <FormLabel> <Box color={'#68507b'} mt='4'>Repetir email</Box></FormLabel>
                    <Input bg={'#D9d8d9'}
                        type='email' 
                        name='repeatedEmail'
                        placeholder='valentinacanosa@email.com'
                        onChange={updateUser}
                        />
                    <Box color='red'>{error.repeatedEmail}</Box> 

                    <FormLabel><Box color={'#68507b'} mt='4'>Teléfono</Box></FormLabel>
                    <Input bg={'#D9d8d9'}
                        type='text' 
                        name='phone'
                        placeholder='11223344'
                        onChange={updateUser}
                        />
                    <Box color='red'>{error.phone}</Box> 
                </FormControl>
            </Flex>
            <Button 
            bg={'#28193D'} 
            color={'#fff'}
            _hover={{ bg: '#46315C', color: '#fff' }}
            mt={4} 
            onClick={getOrder}>
                Finalizar compra
            </Button>
        </Flex>
    </Center>
  )
}

export default Checkout
