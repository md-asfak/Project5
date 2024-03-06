import React, { useContext } from "react";
import { cartContext } from "./Product";

export default function CartItem() {
  const { cart, removeCart, state } = useContext(cartContext);
  const totalValue = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <h1>Cart From Remove</h1>
      <h1 className="bg-red-500 text-white rounded-[50%] w-10 h-10 mt-5 ">
        {state}
      </h1>
      <div>
        {cart.map((el) => {
          return (
            <div
              key={el.id}
              className=" h-auto w-72 bg-neutral-300  my-5 mx-5 "
            >
              <img src={el.image} alt="Image" className="w-full h-32" />
              <span className="text-sm">{el.title}</span>
              <p className="text-sm">{el.description}</p>
              <p className="text-lg">RS-{el.price}</p>

              <div className="flex flex-col gap-3 px-7 pb-4">
                <button
                  className="py-2 px-5 text-sm bg-amber-800 text-white"
                  onClick={() => removeCart(el)}
                >
                  Remove
                </button>
                <button
                  className="py-2 px-5 text-sm bg-amber-800 text-white"
                  onClick={() => removeCart(el)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        <p>{totalValue}</p>
      </div>
    </div>
  );
}
