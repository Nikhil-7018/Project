import React from "react";
import Image from "next/image";
import SearchBar from "./components/search"

export default function Home() {
  return (
    <>
    <div className="h-screen">
      <div className="flex justify-center py-2 text-black text-xl">
      <SearchBar/>
      </div>
    </div>
    
    </>
  );
}
