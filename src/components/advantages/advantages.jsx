import React from "react";

const Advantages = () => {
  return (
    <div className="my-12 w-full">
      <div>
        <h1 className="text-6xl ">Наши преимущества </h1>
      </div>
      <div className="flex gap-4 mt-6">
        <div className="flex flex-col gap-2 border-r-2  w-1/3">
          <div className="flex  justify-start gap-2">
            <img
              color="text-white"
              alt="[eq"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtdXNlciI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PHBhdGggZD0iTTcgMjAuNjYyVjE5YTIgMiAwIDAgMSAyLTJoNmEyIDIgMCAwIDEgMiAydjEuNjYyIi8+PC9zdmc+"
            />
            <h1 className="text-2xl"> Универсальный личный кабинет. </h1>
          </div>
          <p className="text-lg">
            Управляйте отправкой любых промо-материалов всего из одной учетной
            записи.
          </p>
        </div>
        <div className=" flex flex-col gap-2 border-r-2   w-1/3">
          <div className="flex gap-2  justify-start">
            <img
              color="text-white"
              alt=""
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1nbG9iZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTIgMmExNC41IDE0LjUgMCAwIDAgMCAyMCAxNC41IDE0LjUgMCAwIDAgMC0yMCIvPjxwYXRoIGQ9Ik0yIDEyaDIwIi8+PC9zdmc+"
            />
            <h1 className="text-2xl"> Глобальная доступность. </h1>
          </div>
          <div>
            <p className="text-lg">
              Отправляйте сообщения и материалы в любую страну мира.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-2  w-1/3">
          <div className="flex gap-2  justify-start ">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oYW5kLWNvaW5zIj48cGF0aCBkPSJNMTEgMTVoMmEyIDIgMCAxIDAgMC00aC0zYy0uNiAwLTEuMS4yLTEuNC42TDMgMTciLz48cGF0aCBkPSJtNyAyMSAxLjYtMS40Yy4zLS40LjgtLjYgMS40LS42aDRjMS4xIDAgMi4xLS40IDIuOC0xLjJsNC42LTQuNGEyIDIgMCAwIDAtMi43NS0yLjkxbC00LjIgMy45Ii8+PHBhdGggZD0ibTIgMTYgNiA2Ii8+PGNpcmNsZSBjeD0iMTYiIGN5PSI5IiByPSIyLjkiLz48Y2lyY2xlIGN4PSI2IiBjeT0iNSIgcj0iMyIvPjwvc3ZnPg=="
              alt=""
            />
            <h1 className="text-2xl"> Выгодные условия.</h1>
          </div>
          <div>
            <p className="text-lg">
              Наслаждайтесь самыми низкими ценами на рынке.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
