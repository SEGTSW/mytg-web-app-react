import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../hooks/useTelegram";

const products = [
    { id: '1', title: 'Джинси', price: 1500, description: 'Сірі джинси, теплі' },
    { id: '2', title: 'Куртка', price: 3200, description: 'Зимова куртка з капюшоном' },
    { id: '3', title: 'Кросівки', price: 2800, description: 'Зручні кросівки для щоденного носіння' },
    { id: '4', title: 'Светр', price: 1200, description: 'В’язаний светр з бавовни' },
    { id: '5', title: 'Футболка', price: 600, description: 'Біла футболка з принтом' },
    { id: '6', title: 'Шорти', price: 700, description: 'Літні шорти з льону' },
    { id: '7', title: 'Ремінь', price: 500, description: 'Шкіряний ремінь коричневого кольору' },
    { id: '8', title: 'Кепка', price: 450, description: 'Бавовняна кепка з логотипом' },
    { id: '9', title: 'Куртка-дощовик', price: 1600, description: 'Легка водонепроникна куртка' },
    { id: '10', title: 'Рюкзак', price: 2300, description: 'Міський рюкзак з багатьма кишенями' }
];

const getTotalPrice = (items = []) =>
    items.reduce((acc, item) => acc + item.price, 0);

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const { tg } = useTelegram();

    const onAdd = (product) => {
        const isAlreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems;

        if (isAlreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купити ${getTotalPrice(newItems)} грн`,
            });
        }
    };

    return (
        <div className="list">
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className="item"
                />
            ))}
        </div>
    );
};

export default ProductList;
