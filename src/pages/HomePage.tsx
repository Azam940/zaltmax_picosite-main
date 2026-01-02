import { Link } from "react-router-dom";
import { PocketKnife, ShieldCheck, Truck, ThumbsUp } from "lucide-react";

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#d6a65a]/30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d6a65a]/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10">
              Премиальное качество
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Надёжные ножи <br />
              <span className="text-[#d6a65a]">
                для настоящих задач
              </span>
            </h1>

            <p className="text-gray-300 max-w-xl mb-10 leading-relaxed">
              Клинковое оружие, сувенирные изделия и тактические фонари
              ARMYTEK для охоты, туризма и коллекционирования.
            </p>

            <div className="flex gap-4">
              <Link
                to="/catalog"
                className="bg-[#d6a65a] hover:bg-[#c99743] text-black px-8 py-4 rounded-xl font-semibold"
              >
                Перейти в каталог
              </Link>

              <Link
                to="/about"
                className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white/10"
              >
                О компании
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <PocketKnife size={32} className="text-[#d6a65a]" />
                <h3 className="text-xl font-semibold">
                  Почему выбирают нас
                </h3>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <ShieldCheck className="text-[#d6a65a]" />
                  Проверенные и оригинальные товары
                </li>
                <li className="flex gap-3">
                  <Truck className="text-[#d6a65a]" />
                  Быстрая доставка по Узбекистану
                </li>
                <li className="flex gap-3">
                  <ThumbsUp className="text-[#d6a65a]" />
                  Тысячи довольных клиентов
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card
            title="Качество"
            text="Контроль каждой позиции"
          />
          <Card
            title="Ассортимент"
            text="Ножи, фонари, аксессуары"
          />
          <Card
            title="Доставка"
            text="Быстро и надёжно"
          />
          <Card
            title="Поддержка"
            text="Помогаем с выбором"
          />
        </div>
      </section>
    </div>
  );
};

const Card = ({ title, text }: any) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

export default Home;
