"use client";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>
        <img
          className="w-[360px]" 
          // src="/ocean-mountain.jpg" 
          src="https://images.unsplash.com/photo-1785237426516-16de35228eef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Image
          // loader={({ src, quality, width }) => {
          //   return "anurag";
          // }}
          // src="/ocean-mountain.jpg"
          src="https://images.unsplash.com/photo-1785237426516-16de35228eef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"
          width={360}
          height={270}
          alt="ocean-mountain"
          quality={55}
          // unoptimized
        />
      </div>
    </>
  );
};

export default Home;