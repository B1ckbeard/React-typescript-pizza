import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pizza from '../models/Pizza';

const PizzaFeature : FC = () => {
  const [pizza, setPizza] = useState<Pizza|null>(null);
  const { id } = useParams();
  console.log('Id>>>', id);

  useEffect (() => {
    const pizzasState = localStorage.getItem('pizzasState');

    if (pizzasState && id) {
      const pizzasList = JSON.parse(pizzasState);
      const searchId = parseInt(id);
      const currentPizza = pizzasList.find((p:Pizza) => p.id === searchId);
      setPizza(currentPizza);
    }
  }, []);

  return (
    <>
      <span className="heading">Пицца</span>
      <div className="pizza pizza-page">
        <img src={`/images/${pizza?.img}`} alt={pizza?.title} />
        <h2>{pizza?.title}</h2>
        <span>{pizza?.price} руб.</span>
        <p>Лучшая в городе!</p>
      </div>
    </>
  )
};

export default PizzaFeature;
