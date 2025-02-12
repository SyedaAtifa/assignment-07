import Header from "@/components/Header";
import React from "react";

interface Books {
  id: number;
  name: string;
  type: string,
  available: string;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");

  const parsedResponse: Books[] = await response.json();

  console.log("books >>>", parsedResponse);

  return (
    <div className="bg-[#85c1e4]">
        <Header />

        <h2 className="w-screen h-16 flex items-center justify-center font-bold text-4xl mt-8 text-[#978686]">Server Side</h2>
      {parsedResponse.map ((books) => (
       <div key={book.id} className="h-[180px] border rounded-[10px] m-6 flex flex-col gap-2 justify-center items-center text-[#474747] text-xl bg-[#e6dddd] transition-transform duration-100 hover:scale-110 shadow-xl">
          <div  className="h-[180px] border rounded-[10px] m-6 flex flex-col gap-2 justify-center items-center">
            <p>Book: {books.id}</p>
            <p className="font-bold text-3xl text-[#2e4a7e]">{books.name}</p>
            <p>{books.type}</p>
            <p>available: {`${books.available}`}</p>
        </div>
       </div>
      ))}
    </div>
  );
};

export default Page;
