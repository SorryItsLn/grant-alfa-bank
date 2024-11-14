import React from "react";
import { default as zvonobot2 } from "../../images/2.svg";

const Hero = () => {
  return (
    <div className=" relative my-12 flex justify-start gap-24">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col gap-4 justify-start  ">
          <div className=" text-xl  bg-white/15 p-4 font-medium  rounded-md ">
            Мы разработали омниканальную платформу, позволяющую отправлять
            рекламные звонки и SMS из единого личного кабинета в любую точку
            мира.
          </div>
          <div className=" text-xl  bg-white/15 p-4 font-medium  rounded-md ">
            Наши технологии позволяют роботу охватывать многотысячную аудиторию
            и вести осознанный диалог с каждым клиентом одновременно. Он
            отвечает на вопрос любого клиента, переводит на оператора, а также
            отображает информацию по звонкам в отчёте и заносит данные в CRM.
          </div>
        </div>
      </div>
      <img src={zvonobot2} width={"420px"} alt="" />
    </div>
  );
};

export default Hero;
