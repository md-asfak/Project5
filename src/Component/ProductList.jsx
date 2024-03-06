import React, { useContext } from "react";
import Image from "./images/img_1.png";
import image2 from "./images/img_2.png";
import { cartContext } from "./Product";

export default function ProductList() {
  const { addtoCart, state } = useContext(cartContext);

  const Products = [
    {
      id: 1,
      image: Image,
      title: "Bersache Sports Walking Gym  ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      price: 599,
    },
    {
      id: 2,
      image: image2,
      title: "Bersache Sports Walking ",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit..",
      price: 599,
    },

    {
      id: 3,
      image: Image,
      title: "Bersache Sports Walking Gym  ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet.",
      price: 599,
    },
    {
      id: 4,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, .",
      price: 599,
    },
    {
      id: 5,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers  ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,.",
      price: 599,
    },
    {
      id: 6,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,",
      price: 599,
    },
    {
      id: 7,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers  ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ",
      price: 599,
    },
    {
      id: 8,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers  ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. .",
      price: 599,
    },
    {
      id: 9,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit..",
      price: 599,
    },
    {
      id: 10,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,",
      price: 599,
    },
    {
      id: 11,
      image: Image,
      title: "Bersache Sports Walking Gym  ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,",
      price: 599,
    },
    {
      id: 12,
      image: Image,
      title: "Bersache Sports Walking Gym ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, facilis amet!",
      price: 599,
    },
    {
      id: 13,
      image: Image,
      title: "Bersache Sports Walking Gym  ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, facilis amet! ",
      price: 599,
    },
    {
      id: 14,
      image: Image,
      title: "Bersache Sports Walking Gym sneakers ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, facilis amet! Obcaecati",
      price: 599,
    },
    {
      id: 15,
      image: Image,
      title: "Bersache Sports Walking  ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing amet! Obcaecati numquam",
      price: 599,
    },
    {
      id: 16,
      image: Image,
      title: "Bersache Sports Walking Gym sneaker ",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, facilis amet! Obcaecati",
      price: 599,
    },
  ];
  return (
    <div className="mt-5">
      <h1>Add To Cart</h1>
      <h1 className="bg-red-500 text-white rounded-[50%] w-10 h-10 mt-3">
        {state}
      </h1>
      <div className="grid grid-cols-4">
        {Products.map((el) => {
          return (
            <div key={el.id} className=" h-72 w-72 bg-neutral-300  my-5 mx-5 ">
              <img src={el.image} alt="Image" className="w-full h-32" />
              <span className="text-sm">{el.title}</span>
              <p className="text-sm">{el.description}</p>
              <p className="text-lg">RS-{el.price}</p>
              <button
                className="py-2 px-5 text-sm bg-amber-800 text-white"
                onClick={() => addtoCart(el)}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
