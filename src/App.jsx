import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import search from "./img/search.svg";
import remove from "./img/delete.svg";
import AppContext from './context'
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [isDrawer, setIsDrawer] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setIsLoading]=useState(false)

  useEffect(() => {
    async function fetchResponce() {
      setIsLoading(true)
      const itemResponse = await axios.get("https://65b5327c41db5efd286769bb.mockapi.io/lol")
      const cartItemResponse = await axios.get("https://65b5327c41db5efd286769bb.mockapi.io/lolDrawer")
      setIsLoading(false)
      setCartItem(cartItemResponse.data)
      setItems(itemResponse.data)
    }

    fetchResponce()
  }, [favorites]);

  const inputValue = (e) => {
    setSearchValue(e.target.value);
  };

  const removeItem = (item) => {
    const itemId = item.id;
    axios
      .delete(`https://65b5327c41db5efd286769bb.mockapi.io/lolDrawer/${itemId}`)
      .then(() => {
        setCartItem((prev) => prev.filter((item) => Number(item.id) !== Number(itemId)));
      })
      .catch((error) => {
        console.error("Ошибка при удалении элемента:", error);
      });
  };

  const onAddFavorite = (obj) => {
    if (favorites.find(object => Number(object.id) === Number(obj.id))) {
      setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      console.log('remove fav')
    } else {
      setFavorites((prev) => [...prev, obj]);
      console.log('add fav');
      console.log(favorites)
    }
  };

 
  const isItemAdded = (id) => {
    cartItem.some((obj)=>Number(obj.id)=== Number(id))
  }

  return (
    <AppContext.Provider value={{items,cartItem,favorites,isItemAdded,setIsDrawer,setCartItem}}>
          <div className="wrapper clear">
      {isDrawer && <Drawer onDrawerClose={() => setIsDrawer(false)} removeItem={removeItem} />}
      <Header onDrawerOpen={() => setIsDrawer(!isDrawer)} />
      <Routes>
        <Route
          path="/"
          element={<Home loading={loading} favorites={favorites} onAddFavorite={onAddFavorite} search={search} inputValue={inputValue} remove={remove} setSearchValue={setSearchValue} searchValue={searchValue} items={items} setCartItem={setCartItem} cartItem={cartItem} removeItem={removeItem} />}
        />
        <Route path="/favorites" element={<Favorites loading={loading}  onAddFavorite={onAddFavorite} />} />
        <Route path="/orders" element={<Orders loading={loading} />} />
      </Routes>
    </div>
    </AppContext.Provider>

  );
}

export default App;
