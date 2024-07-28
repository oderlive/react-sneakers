import InfoBlock from '../../InfoBlock'
import sneaker from '../../../img/sneaker.jpg'

const DrawerNotFound = () => {
    return (
        <div >
          <InfoBlock title='Корзина пустая' description='Добавьте понравившиеся кроссовки' image={sneaker}/>
        </div>

    )
}

export default DrawerNotFound