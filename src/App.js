import "./App.css";
import HeaderComponent from "./components/header/header";
import Hero from "./components/hero/hero";
import Advantages from "./components/advantages/advantages";
import Howwork from "./components/howwork/howwork";
import Reviews from "./components/Reviews/Reviews";
import Cases from "./components/cases/cases";
import Contacts from "./components/contacts/contacts";

function App() {
  return (
    <div className="rounded-xl flex  justify-center bg-gradient-to-r from-gray-400 to-gray-700 m-2">
      <section className="w-10/12   mt-4 p-4 rounded-xl flex flex-col gap-4 justify-center items-center ">
        <HeaderComponent />
        <div className="bg-gradient-to-r from-white/30 to-transparent h-[1px] w-full" />
        <Hero />
        <div className="bg-gradient-to-r from-white/30 to-transparent h-[1px] w-full" />
        <Advantages />
        <div className="bg-gradient-to-r from-white/30 to-transparent h-[1px] w-full" />
        <Howwork />
        <div className="bg-gradient-to-r from-white/30 to-transparent h-[1px] w-full" />
        <Cases />
        <div className="bg-gradient-to-r from-white/30 to-transparent h-[1px] w-full" />
        <Reviews />
        <div className="bg-gradient-to-r from-white/30 to-transparent h-[1px] w-full" />
        <Contacts />
      </section>
    </div>
  );
}

export default App;
