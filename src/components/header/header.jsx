import React from "react";
import "./header.css";
const HeaderComponent = () => {
  return (
    <div className="mt-12 w-full flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">
          Отправьте <span className="text-blue-400">звонок</span> или
          <span className="text-blue-400"> SMS </span>
        </h1>
        <h1 className="text-6xl font-bold text-white">
          из любого уголка мира!
        </h1>
      </div>
      <div className="text-center">
        <p className="text-xl font-medium  text-white/80">
          Мы предлагаем вам
          <span className="font-bold text-white"> уникальную</span> возможность
          для отправки промо-рассылок по всему миру
        </p>
      </div>
      <div className="text-center ">
        <div className=" shadow-lg gouda font-bold text-6xl  p-4 rounded-2xl mx-64  m-8   duration-500 cursor-pointer">
          <p>Начните прямо сейчас!</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
