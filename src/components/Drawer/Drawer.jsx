
import remove from '../../img/delete.svg'
import arrow from '../../img/Arrow.svg'
import completeSvg from '../../img/sneaker.jpg'
import DrawerNotFound from './DrawerNotFound/DrawerNotFound'
import { useContext, useState } from 'react'
import AppContext from '../../context'
import InfoBlock from '../InfoBlock'
import { useCart } from '../../hooks/useCart'

const Drawer = ({ onDrawerClose, removeItem }) => {
    const [complete, setComplete] = useState(false)
 
    const {totalPrice,cartItem, setCartItem } = useCart()
    const handleComplete = () => {
        setComplete(true)
        setCartItem([])
    }
    return (
        <div className="overlay">
            <div className="drawer">
                <div className=' d-flex justify-between'>
                    <h2 className='mb-20'>Корзина</h2>
                    <img
                        onClick={onDrawerClose}
                        className='removeBtn cu-p'
                        src={remove} alt=""
                    />
                </div>
                <div className="items">
                    {cartItem.length ?
                        cartItem.map(obj =>
                            <div key={obj.id} className="cartItem p-20">
                                <img
                                    height={70}
                                    width={70}
                                    src={obj.image} alt="" />
                                <div>
                                    <p className='mb-5'>{obj.title}</p>
                                    <b>{obj.price}</b>
                                </div>
                                <img
                                    className='removeBtn'
                                    src={remove} alt=""
                                    onClick={() => removeItem(obj)}
                                />
                            </div>
                        )
                        : (
                                <InfoBlock title={complete ? 'Заказ зарегистрирован' : 'Корзина пустая'} description={complete ? 'Наши операторы уже бьются за ваш заказ':'Добавьте понравившиеся кроссовки'} image={completeSvg} />
                        )

                    }
                </div>
                <div className='cartTotalBlock'>
                    <ul>
                        <li className='d-flex'>
                            <span>Итого</span>
                            <div></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                        <li className='d-flex'>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>{totalPrice*0.05} руб.</b>
                        </li>
                    </ul>
                    <button onClick={handleComplete} className='greenBtn'>Оформить заказ <img src={arrow} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer