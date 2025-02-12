"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

const Page = () => {
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const parsedResponse: Products[] = await response.json();
      console.log("todos >>>", parsedResponse);
      setData(parsedResponse);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="h-screen bg-slate-700 font-bold text-5xl flex items-center justify-center">Loading...</div>;
  }


  return (
    <div>
      <Header />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {data.map((product, index) => (
      <div key={index} className="w-[350px] m-12 flex flex-col ites-center justify-center gap-5 border-[5px] border-slate-600 rounded-[10px] p-8">
        <Image 
          src={product.image} 
          alt={product.title}
          width={200}
          height={300}
          />
          <p className="font-">{product.category}</p>
          <h3 className="text-lg m-">{product.title}</h3>
          <p className="text-[14px]">{product.description}</p>
          <p>${product.price}</p>
      </div>
       ))}
    </div>
  </div>
  );
};

export default Page; 




