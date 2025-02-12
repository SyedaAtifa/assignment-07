"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

const page = () => {
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
        <img src={product.image} alt={product.title}  style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
            }}
          />
          <p className="font-">title: {product.category}</p>
          <h3 className="text-lg m-">{product.title}</h3>
          <p className="text-[14px]">title: {product.description}</p>
          <p>${product.price}</p>
      </div>
       ))}
    </div>
  </div>
  );
};

export default page; 




// w-[350px] m-12 flex flex-col ites-center justify-center gap-5 border-[5px] border-slate-600 rounded-[10px] p-8
{/* <div className="flex flex-wrap gap-5 p-5 bg-[#F9F9F9]">
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            background: "#fff",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
            }}
          />
          <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.title}</h3>
          <p>{product.description}</p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              margin: "10px 0",
            }}
          >
            ${product.price}
          </p>
          <p style={{ color: "#f39c12", fontWeight: "bold", marginBottom: "10px" }}>
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button
            style={{
              width: "100%",
              padding: "10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div> */}