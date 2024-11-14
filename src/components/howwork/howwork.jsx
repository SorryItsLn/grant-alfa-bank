import React from "react";
import ArrowImage from "./arrowImage";

const Howwork = () => {
  return (
    <div className="my-12 w-full">
      <div>
        <h1 className="text-6xl">Как это работает?</h1>
      </div>
      <div className="flex items-stretch gap-2 text-center mt-6 ">
        <div className="w-1/5  bg-white/15 p-4 font-medium shadow-lg  rounded-md">
          <div className="flex justify-center border-b-2 pb-2  border-blue-200 gap-2">
            <h1 className="text-xl font-medium">Аудио клип</h1>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLXZvbHVtZSI+PHBhdGggZD0iTTExIDExYTUgNSAwIDAgMSAwIDYiLz48cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCIvPjxwYXRoIGQ9Ik00IDYuNzY1VjRhMiAyIDAgMCAxIDItMmg5bDUgNXYxM2EyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLS45My0uMjMiLz48cGF0aCBkPSJNNyAxMC41MWEuNS41IDAgMCAwLS44MjYtLjM4bC0xLjg5MyAxLjYyOEExIDEgMCAwIDEgMy42MyAxMkgyLjVhLjUuNSAwIDAgMC0uNS41djNhLjUuNSAwIDAgMCAuNS41aDEuMTI5YTEgMSAwIDAgMSAuNjUyLjI0MmwxLjg5MyAxLjYzYS41LjUgMCAwIDAgLjgyNi0uMzh6Ii8+PC9zdmc+"
              alt=""
            />
          </div>
          <div className="mt-2 text-start">
            Cоздай запоминающийся аудиоролик для привлечения клиентов
          </div>
        </div>
        <ArrowImage />
        <div className="  w-1/5  bg-white/15 p-4 font-medium  shadow-lg rounded-md">
          <div className="flex justify-center border-b-2 pb-2  border-blue-200 gap-2">
            <h1 className="text-xl font-medium">База контактов</h1>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kYXRhYmFzZSI+PGVsbGlwc2UgY3g9IjEyIiBjeT0iNSIgcng9IjkiIHJ5PSIzIi8+PHBhdGggZD0iTTMgNVYxOUE5IDMgMCAwIDAgMjEgMTlWNSIvPjxwYXRoIGQ9Ik0zIDEyQTkgMyAwIDAgMCAyMSAxMiIvPjwvc3ZnPg=="
              alt=""
            />
          </div>

          <div className="mt-2">
            <p className="text-start">
              Cобери данные клиентов для эффективной рассылки.
            </p>
          </div>
        </div>
        <ArrowImage />
        <div className=" w-2/5  bg-white/15 p-4 font-medium  shadow-lg rounded-md">
          <div className="flex justify-center border-b-2 pb-2 gap-2 border-blue-200">
            <h1 className="text-xl font-medium">Сценарий звонка</h1>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zY3JvbGwtdGV4dCI+PHBhdGggZD0iTTE1IDEyaC01Ii8+PHBhdGggZD0iTTE1IDhoLTUiLz48cGF0aCBkPSJNMTkgMTdWNWEyIDIgMCAwIDAtMi0ySDQiLz48cGF0aCBkPSJNOCAyMWgxMmEyIDIgMCAwIDAgMi0ydi0xYTEgMSAwIDAgMC0xLTFIMTFhMSAxIDAgMCAwLTEgMXYxYTIgMiAwIDEgMS00IDBWNWEyIDIgMCAxIDAtNCAwdjJhMSAxIDAgMCAwIDEgMWgzIi8+PC9zdmc+"
              alt=""
            />
          </div>
          <div className="mt-2">
            <p className="text-start">
              Разработай автоматизированного помощника для звонков по
              индивидуальному сценарию
            </p>
          </div>
        </div>
        <ArrowImage />
        <div className="w-1/5  bg-white/15 p-4 font-medium  shadow-lg rounded-md">
          <div className="flex justify-center border-b-2 pb-2 gap-2 border-blue-200">
            <h1 className="text-xl font-medium text-nowrap">
              Пополнение счета
            </h1>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1waWdneS1iYW5rIj48cGF0aCBkPSJNMTkgNWMtMS41IDAtMi44IDEuNC0zIDItMy41LTEuNS0xMS0uMy0xMSA1IDAgMS44IDAgMyAyIDQuNVYyMGg0di0yaDN2Mmg0di00YzEtLjUgMS43LTEgMi0yaDJ2LTRoLTJjMC0xLS41LTEuNS0xLTJWNXoiLz48cGF0aCBkPSJNMiA5djFjMCAxLjEuOSAyIDIgMmgxIi8+PHBhdGggZD0iTTE2IDExaC4wMSIvPjwvc3ZnPg=="
              alt=""
            />
          </div>
          <div className="mt-2">
            <p className="text-start">Внеси средства для начала рассылки</p>
          </div>
        </div>
        <ArrowImage />
        <div className="bg-white/15 p-4  w-1/5 font-medium  shadow-lg rounded-md">
          <div className="flex justify-center border-b-2 pb-2 gap-2 border-blue-200">
            <h1 className="text-xl font-medium">Первая рассылка</h1>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1waG9uZS1jYWxsIj48cGF0aCBkPSJNMjIgMTYuOTJ2M2EyIDIgMCAwIDEtMi4xOCAyIDE5Ljc5IDE5Ljc5IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02IDE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42N0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTIuODQgMTIuODQgMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MnoiLz48cGF0aCBkPSJNMTQuMDUgMmE5IDkgMCAwIDEgOCA3Ljk0Ii8+PHBhdGggZD0iTTE0LjA1IDZBNSA1IDAgMCAxIDE4IDEwIi8+PC9zdmc+"
              alt=""
            />
          </div>

          <div className="mt-2">
            <p className="text-start">
              Отправь первое сообщение своим клиентам.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howwork;
