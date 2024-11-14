import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="my-12 w-full">
      <div>
        <h1 className="text-6xl ">Отзывы клиентов</h1>
      </div>
      <div className="mt-6 grid  grid-cols-12 gap-2 ">
        <div className="col-span-3 ">
          <ReviewCard
            name={"Вячеслав"}
            work={"профессиональный авитолог"}
            description={
              "«Остался под сильным впечатлением. Сервисом очень доволен: за два часа потратил 2000 рублей, а заработал 70000! Сервис очень крутой, буду пользоваться и всем рекомендовать к работе»."
            }
            img={require("../../images/xreview__image-1.webp.pagespeed.ic.OOIRf6Gdob.webp")}
          />
        </div>
        <div className="col-span-3">
          <ReviewCard
            name={"Руководитель проекта бизнес-блока"}
            work={"УБРиР"}
            description={
              "«Благодаря практичному мышлению и гибкости в решении задач, которые требовались выполнить в сжатые сроки, команда голосового робота  смогла высоко проявить свою компетентность и эффективность»"
            }
            img={require("../../images/xreview__image-2.webp.pagespeed.ic.td24wUWqRw.webp")}
          />
        </div>
        <div className="col-span-3">
          <ReviewCard
            name={"Руслан Ларин"}
            work={"директор по маркетингу платформы MyGig"}
            description={
              "«У нас с внедрением голосового робота выросло количество сотрудников в 2 раза, что позволило и самим расти в качестве, а также в самых лучших показателях, которые можно придумать»."
            }
            img={require("../../images/xreview__image-3.webp.pagespeed.ic.GgonaYg5Jo.webp")}
          />
        </div>
        <div className="col-span-3">
          <ReviewCard
            name={"Олег Гордиенко"}
            work={"Руководитель call-центра ОРТЕКА"}
            description={
              "«Полностью довольны результатом рассылок. Продолжим плодотворное сотрудничество ежемесячно»."
            }
            img={require("../../images/xreview__image-6.webp.pagespeed.ic.LO5ymDUcBN.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
