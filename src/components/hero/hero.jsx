import React from "react";
import { default as zvonobot2 } from "../../images/2.svg";

const Hero = () => {
  return (
    <div className=" relative my-12 flex justify-start gap-24">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-4 justify-start  ">
          <div className="flex  gap-4 text-xl  bg-white/15 p-4 font-medium  rounded-md ">
            <img
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb25pdG9yLWNvZyI+PHBhdGggZD0iTTEyIDE3djQiLz48cGF0aCBkPSJtMTUuMiA0LjktLjktLjQiLz48cGF0aCBkPSJtMTUuMiA3LjEtLjkuNCIvPjxwYXRoIGQ9Im0xNi45IDMuMi0uNC0uOSIvPjxwYXRoIGQ9Im0xNi45IDguOC0uNC45Ii8+PHBhdGggZD0ibTE5LjUgMi4zLS40LjkiLz48cGF0aCBkPSJtMTkuNSA5LjctLjQtLjkiLz48cGF0aCBkPSJtMjEuNyA0LjUtLjkuNCIvPjxwYXRoIGQ9Im0yMS43IDcuNS0uOS0uNCIvPjxwYXRoIGQ9Ik0yMiAxM3YyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg3Ii8+PHBhdGggZD0iTTggMjFoOCIvPjxjaXJjbGUgY3g9IjE4IiBjeT0iNiIgcj0iMyIvPjwvc3ZnPg=="
            />
            Мы разработали омниканальную платформу, позволяющую отправлять
            рекламные звонки и SMS из единого личного кабинета в любую точку
            мира.
          </div>
          <div className=" text-xl flex  gap-4  bg-white/15 p-4 font-medium  rounded-md ">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VycyI+PHBhdGggZD0iTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINmE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iNyIgcj0iNCIvPjxwYXRoIGQ9Ik0yMiAyMXYtMmE0IDQgMCAwIDAtMy0zLjg3Ii8+PHBhdGggZD0iTTE2IDMuMTNhNCA0IDAgMCAxIDAgNy43NSIvPjwvc3ZnPg=="
              alt=""
            />
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
