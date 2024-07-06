import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { BeatLoader } from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext';

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const { currentQuantity } = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db, 'productos', productId)
            const response = await getDoc(queryRef)
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem)
            setLoading(false)
        }
        getData()

    },[]) 

    return (
        <>
            {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                    <BeatLoader color="#28193D" />
                </Flex>   
                : 
                <ItemDetail {...producto} currentQuantity={currentQuantity(productId)} /> 
            }
        </>
    )
}

export default ItemDetailContainer
