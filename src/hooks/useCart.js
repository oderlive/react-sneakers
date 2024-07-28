import React, { useContext } from 'react'
import AppContext from '../context'

export const useCart = () => {

    const { cartItem, setCartItem } = useContext(AppContext)
    const totalPrice = cartItem.reduce((acc, obj) => acc + Number(obj.price), 0)

    return { totalPrice, cartItem, setCartItem }
}