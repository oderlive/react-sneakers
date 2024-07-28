import React from 'react'
import { useContext } from 'react'
import AppContext from '../context'
import arrow from '../img/Arrow.svg'

const InfoBlock = ({title, description, image}) => {
const {setIsDrawer} =useContext(AppContext)
  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={()=>setIsDrawer(false)} className='greenBtn'>
            Вернуться назад
            <img src={arrow} alt="Arrow" />
        </button>
    </div>
  )
}

export default InfoBlock