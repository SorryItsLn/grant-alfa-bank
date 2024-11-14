import React from "react";
import ArrowImage from "./arrowImage";

const Howwork = () => {
  return (
    <div className="my-12 w-full">
      <div>
        <h1 className="text-6xl">Как это работает?</h1>
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex justify-center text-start  gap-2  mt-6 ">
          <div className="w-1/3  bg-white/15 p-4 font-medium shadow-lg  rounded-md">
            <div className="flex justify-start border-b-2 pb-2  border-blue-200 gap-2">
              <h1 className="text-xl font-medium">Аудио клип</h1>
            </div>
            <div className="mt-2 text-start">
              Cоздай запоминающийся аудиоролик для привлечения клиентов
            </div>
          </div>
          <ArrowImage />
          <div className="  w-1/3  bg-white/15 p-4 font-medium  shadow-lg rounded-md">
            <div className="flex justify-start border-b-2 pb-2  border-blue-200 gap-2">
              <h1 className="text-xl font-medium">База контактов</h1>
            </div>

            <div className="mt-2">
              <p className="text-start">
                Cобери данные клиентов для эффективной рассылки.
              </p>
            </div>
          </div>
          <ArrowImage />
          <div className=" w-1/3  bg-white/15 p-4 font-medium  shadow-lg rounded-md">
            <div className="flex justify-start border-b-2 pb-2 gap-2 border-blue-200">
              <h1 className="text-xl font-medium ">Сценарий звонка</h1>
            </div>
            <div className="mt-2">
              <p className="text-start">
                Разработай автоматизированного помощника для звонков по
                индивидуальному сценарию
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-1/3  bg-white/15 p-4 font-medium  shadow-lg rounded-md">
            <div className="flex justify-start border-b-2 pb-2 gap-2 border-blue-200">
              <h1 className="text-xl font-medium ">Пополнение счета</h1>
            </div>
            <div className="mt-2">
              <p className="text-start">Внеси средства для начала рассылки</p>
            </div>
          </div>
          <ArrowImage />
          <div className="bg-white/15 p-4  w-1/3  font-medium  shadow-lg rounded-md">
            <div className="flex justify-start border-b-2 pb-2 gap-2 border-blue-200">
              <h1 className="text-xl font-medium ">Первая рассылка</h1>
            </div>

            <div className="mt-2">
              <p className="text-start">
                Отправь первое сообщение своим клиентам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howwork;
