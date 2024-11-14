import React from "react";

const Cases = () => {
  const cases = [
    "Финансы",
    "HR",
    "Недвижимость",
    "Образование",
    "Инфобизнес",
    "B2B",
    "Авто",
    "Медицина",
    "Онлайн площадки",
    "Мероприятия",
    "Рестораны и доставки",
    "Ритейл",
    "Фитнес",
    "Юредичский услугу",
    "Продажи",
    "Лидоргенерация",
    "Автоматизация",
    "Информирование",
    "Опросы",
  ];
  return (
    <div className="my-12 w-full">
      <div>
        <h1 className="text-6xl ">Области применения </h1>
      </div>

      <div className=" mt-6 flex gap-4 flex-wrap justify-center items-center">
        {cases.map((el) => {
          return (
            <div
              key={el}
              className="p-4 hover:bg-white/30  hover:scale-[1.06] duration-500 cursor-pointer rounded-lg bg-white/15"
            >
              <span>{el}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cases;
