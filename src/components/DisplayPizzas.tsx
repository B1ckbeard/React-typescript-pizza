import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from '../components/SinglePizza';

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            key={pizza.id}
            pizza={pizza}
            updatePizza={updatePizza}
          />)
      })}
    </div>
  )
}

export default DisplayPizzas;