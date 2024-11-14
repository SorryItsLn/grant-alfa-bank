import React from "react";

const Contacts = () => {
  const numbers = new Map([
    ["Екатеринбург", "+7 (343) 211-28-72"],
    ["Санкт-Петербург", "+7 (812) 665-10-11"],
    ["Воронеж", "+7 (473) 200-05-26"],
    ["Краснодар", "+7 (861) 212-09-98"],
    ["Самара", "+7 (846) 233-43-40"],
    ["Новосибирск", "+7 (846) 233-43-40"],
    ["Новосибирск", "+7 (383) 322-53-62"],
    ["Казань", "+7 (843) 599-52-05"],
    ["Волгоград", "+7 (844) 245-98-80"],
    ["Общий", "+8 (800) 775-34-60"],
  ]);
  return (
    <div className="my-12 w-full">
      <div>
        <h1 className="text-6xl">Контакты</h1>
      </div>
      <div className="mt-6">
        <div>
          <span className="text-xl">
            С нами можно связаться позвонив по одному из региональных номеров
            телефона:
          </span>
        </div>
        <div className="mt-3 flex justify-start flex-wrap gap-4">
          <a
            className="flex hover:bg-white/30  cursor-pointer  hover:scale-[1.06]  flex-col items-start p-2 bg-white/15  backdrop-blur rounded-md duration-500 shadow-md"
            href="tel:8(800)775-34-60"
          >
            <div>
              <span className="font-bold "> Общий </span>
            </div>
            <span>8(800)775-34-60</span>
          </a>
          {[...numbers]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map((el) => {
              return (
                <a
                  className="flex hover:bg-white/30  cursor-pointer  hover:scale-[1.06]  flex-col items-start p-2 bg-white/15  backdrop-blur rounded-md duration-500 shadow-md"
                  key={el}
                  href={"tel:" + el[1]}
                >
                  <div>
                    <span className="font-bold "> {el[0]} </span>
                  </div>
                  <span>{el[1]}</span>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
