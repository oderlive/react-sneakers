import React, { useContext } from 'react'
import logo from '../img/logo.svg'
import cart from '../img/cart.svg'
import health from '../img/health.svg'
import user from '../img/user.svg'
import { Link } from 'react-router-dom'
import AppContext from '../context'
import { useCart } from '../hooks/useCart'

const Header = ({ onDrawerOpen }) => {
    const { totalPrice } = useCart()
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className="d-flex align-center">

                    <img src={logo} alt="" />
                    <div>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p className='opacity-5'>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <div className="d-flex">
                <Link to='/drawer' onClick={onDrawerOpen}>
                    <li className='mr-30 cu-p'>
                        <img src={cart} alt="" />
                        <span>{totalPrice} руб.</span>
                    </li>
                </Link>
                <Link to='/favorites'>
                    <li className='mr-30 cu-p'>
                        <img src={health} alt="" />
                        <span>Закладки</span>
                    </li>
                </Link>
                <Link to='/orders'>
                    <li className='cu-p'>
                        <img src={user} alt="" />
                        <span>Профиль</span>
                    </li>
                </Link>
            </div>
        </header>
    )
}

export default Header