import { useContext } from "react"
import Card from "../components/Card/Card"
import Loading from "../components/Loading/index"
import AppContext from "../context"

const Home = ({ setCartItem, cartItem, removeItem, items, searchValue, setSearchValue, remove, inputValue, search, onAddFavorite, favorites, loading }) => {
    const renderItem = () => {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (loading ? [...Array(8)] : filteredItems).map((sneaker, index) => (
            <Card
                key={index}
                id={sneaker.id}
                items={items}
                title={sneaker.title}
                price={sneaker.price}
                image={sneaker.image}
                removeItem={removeItem}
                cartItem={cartItem}
                setCartItem={setCartItem}
                favorites={favorites}
                favorited={favorites.find(object => Number(object.id) === Number(sneaker.id))}
                onAddFavorite={onAddFavorite}
            />
        ))
    }

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1 >Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src={search} alt="search" />
                    <input
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={inputValue}
                    />
                    {searchValue && (
                        <img
                            className="cu-p"
                            src={remove}
                            onClick={() => setSearchValue('')}
                        />
                    )}
                </div>
            </div>
            {items.length === 0 ? (
                <div className="d-flex justify-between flex-wrap ">
                    {[...Array(8)].map((_, i) => {
                        return (
                            <div key={i} className="mt-10 mb-20 mr-30">
                                <Loading />
                            </div>
                        );
                    })}
                </div>
            )
                :
                (<div className="d-flex" style={{ flexWrap: "wrap" }}>
                    {
                        renderItem()
                    }

                </div>)
            }
        </div>
    )
}

export default Home