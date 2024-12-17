"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const products = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/images/image-1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/images/image-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-4.png",
  },
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/images/image-5.png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/images/image-6.png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-7.png",
  },
  {
    id: 8,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
];

export default function OurProducts() {
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});
  const [cart, setCart] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleCart = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full border-b-2 py-16 flex flex-col justify-center bg-[#F4F5F7] px-4">
      <div className="flex flex-col gap-[32px] w-fit mx-auto">
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-gray-800">Our Products</h1>
        </div>

        <div className="flex gap-[21px] overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {products.map((product) => (
            <div className="bg-white group relative overflow-hidden w-[285px]" key={product.id}>
              <div
                className="w-full h-[301px] flex bg-no-repeat bg-center relative group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {[3, 5, 7].includes(product.id) && (
                  <div className="h-[48px] w-[48px] bg-green-500 rounded-full flex items-center justify-center absolute top-6 right-6">
                    <p className="text-[16px] font-medium text-white">NEW</p>
                  </div>
                )}
                {[1, 3, 7].includes(product.id) && (
                  <div className="h-[48px] w-[48px] bg-red-500 rounded-full flex items-center justify-center absolute top-6 right-6">
                    <p className="text-[16px] font-medium text-white">{product.discount}</p>
                  </div>
                )}
              </div>

              <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                <h2 className="text-[24px] font-semibold text-gray-800">{product.name}</h2>
                <h4 className="text-[16px] font-medium text-gray-600">{product.fullname}</h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-gray-800">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-[16px] font-normal text-gray-500 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    className="flex items-center gap-1 text-[16px] font-semibold"
                    onClick={() => toggleLike(product.id)}
                  >
                    <Icon
                      icon={likedProducts[product.id] ? "mingcute:heart-fill" : "mingcute:heart-line"}
                      className={likedProducts[product.id] ? "text-red-500" : ""}
                    />
                    {likedProducts[product.id] ? "Liked" : "Like"}
                  </button>
                  <button
                    className="flex items-center gap-1 text-[16px] font-semibold text-blue-600"
                    onClick={() => toggleCart(product.id)}
                  >
                    <Icon
                     // icon={cart[product.id] ? "material-symbols:shopping-cart" : "material-symbols:add-shopping-cart"}
                      className={cart[product.id] ? "text-green-500" : ""}
                    />
                    {cart[product.id] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
