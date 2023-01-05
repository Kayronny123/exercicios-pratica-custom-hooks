import { useState } from "react";
import useCounter from "../Hooks/useCounter";
import { Item } from "./Item";

export const Cart = () => {
  const { value, onIncrement, onDecrement, onReset } = useCounter({
    min: 0,
    max: 10,
    initial: 0
  });

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
      />
    </div>
  );
};
