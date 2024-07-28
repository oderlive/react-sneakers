// Card.jsx
import React, { useContext, useEffect, useState } from 'react';
import unliked from '../../img/heart-unliked.svg';
import liked from '../../img/heart-liked.svg';
import card from '../../img/card.svg';
import addSvg from '../../img/add.svg';
import axios from 'axios';
import AppContext from '../../context';

const Card = ({ id, title, price, image, removeItem, cartItem, setCartItem, items, favorited, onAddFavorite, favorites = false }) => {
    const { isItemAdded } = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(favorited);

    useEffect(() => {
   
        if (favorites) {
            setIsFavorite(favorites.some(item => Number(item.id) === Number(id)));
        }
    }, [cartItem, id, favorited]);

    const handleAddDrawer = () => {
        const obj = { id, title, price, image };
        if (isItemAdded(id)) {
            axios
                .delete(`https://65b5327c41db5efd286769bb.mockapi.io/lolDrawer/${obj.id}`)
                .then(() => {
                    setCartItem((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
                })
                .catch((error) => {
                    console.error("Ошибка при удалении элемента:", error);
                });
        }
        else {
            axios.post('https://65b5327c41db5efd286769bb.mockapi.io/lolDrawer', obj)
                .then(response => {
                    setCartItem(prev => [...prev, obj]);
                })
                .catch(error => {
                    console.error('Error adding to drawer:', error);
                });
        }
    }


    const handleFavorite = () => {
        const obj = { id, title, price, image };
        onAddFavorite(obj);
    };

    return (
        <div className="card">
            <div className="favorite">
                <img onClick={handleFavorite} src={isFavorite ? liked : unliked} alt="" />
            </div>
            <img width={150} height={150} src={image} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img onClick={handleAddDrawer} src={isItemAdded(id) ? addSvg : card} alt="" />
            </div>

        </div>
    );
};

export default Card;
