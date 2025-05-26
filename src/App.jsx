
"use client";
import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  const images = [
    // Place
    { name: "Bhopal", src: "./gallery/Bhopal.png", category: "place" },
    { name: "Delhi", src: "./gallery/Delhi.png", category: "place" },
    { name: "indore", src: "./gallery/indore.png", category: "place" },
    { name: "Mumbai", src: "./gallery/Mumbai.png", category: "place" },
    { name: "pune", src: "./gallery/pune.jpg", category: "place" },
    
    
    // Founder
    { name: "founder", src: "./gallery/founder.jpg", category: "founder" },
    { name: "founder1", src: "./gallery/founder1.jpg", category: "founder" },
    { name: "founder2", src: "./gallery/founder2.jpg", category: "founder" },
    { name: "founder3", src: "./gallery/founder3.jpg", category: "founder" },
    { name: "founder4", src: "./gallery/founder4.jpg", category: "founder" },
    { name: "founder5", src: "./gallery/founder5.png", category: "founder" },
    
    // Team
    { name: "life", src: "./gallery/life.jpg", category: "team" },
    { name: "life4", src: "./gallery/life4.jpg", category: "team" },
    { name: "life5", src: "./gallery/life5.jpg", category: "team" },
    { name: "team5", src: "./gallery/team5.jpg", category: "team" },
    { name: "team7", src: "./gallery/team7.png", category: "team" },
    // Life
    { name: "life2", src: "./gallery/life2.jpg", category: "life" },
    { name: "life3", src: "./gallery/life3.jpg", category: "life" },
    { name: "life6", src: "./gallery/life6.png", category: "life" },
    { name: "life7", src: "./gallery/life7.png", category: "life" },
    { name: "life8", src: "./gallery/life8.png", category: "life" },
    { name: "team2", src: "./gallery/team2.jpg", category: "life" },
    { name: "team3", src: "./gallery/team3.jpg", category: "life" },
    { name: "team4", src: "./gallery/team4.jpg", category: "life" },
    { name: "team6", src: "./gallery/team6.jpg", category: "life" },
    
    // BTS
    { name: "bts1", src: "./gallery/bts1.png", category: "bts" },
    { name: "bts2", src: "./gallery/bts2.png", category: "bts" },
    { name: "bts3", src: "./gallery/bts3.png", category: "bts" },
    { name: "bts4", src: "./gallery/bts4.png", category: "bts" },
    { name: "bts5", src: "./gallery/bts5.png", category: "bts" },
    { name: "bts6", src: "./gallery/bts6.png", category: "bts" },
    { name: "bts7", src: "./gallery/bts7.png", category: "bts" },
    
  ];
  

  const [Filter, setFilter] = useState("all");

  const cate = ["all", "life", "bts", "founder", "place", "team"];

  const filteredImg = Filter === "all" ? images : images.filter((img) => img.category === Filter);

  return (
    <div>
      <h1 className="rubik text-8xl text-center  mt-5 pb-4 text-[#FFD909] tracking-wider md:text-6xl lg:text-8xl sm:text-3xl
">
        GALLERY
      </h1>
      <p className="text-center dancing-script tracking-wide text-[#9CDA3F] animate-pulse">Glimpse of us...📸</p>
      <div className="border-t-1 mt-4 border-[#FFD909]"></div>
      
      <div className="w-full sm:max-w-full  flex flex-wrap justify-center gap-4 mb-5 border-b border-[#FFD909] pb-7 pt-7 dosis bg-[#9CDA3F]">
  {cate.map((category) => (
    <button
      className={`${Filter === category ? "bg-gray-300" : "bg-gray-100"} rounded-sm px-3.5 py-1 cursor-pointer hover:bg-[#FFD909] hover:text-white transition-transform duration-400 hover:scale-105 capitalize text-md hover:rounded-2xl text-[#9CDA3F] font-bold tracking-wide`}
      onClick={() => setFilter(category)}
      key={category}
    >
      {category}
    </button>
  ))}
</div>

      <Gallery images={filteredImg} />
    </div>
  );
}

export default App;


