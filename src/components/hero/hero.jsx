import React from "react";

const Hero = () => {
  return (
    <div className="w-full my-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl">Что мы умеем?</h1>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div className="flex justify-start  ">
          <div className="w-1/2 text-xl  bg-white/15 p-4 font-medium  rounded-md ">
            Мы разработали омниканальную платформу, позволяющую отправлять
            рекламные звонки и SMS из единого личного кабинета в любую точку
            мира.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
