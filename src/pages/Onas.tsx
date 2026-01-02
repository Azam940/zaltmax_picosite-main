import { ShieldCheck, Truck, Users, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";


const Onas = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">О нас</h1>

            <p className="text-gray-600 max-w-3xl mb-12 leading-relaxed">
                Мы — специализированный интернет-магазин клинкового оружия и тактических
                аксессуаров. Наша миссия — предоставлять качественные, надежные и
                оригинальные изделия для охоты, туризма, коллекционирования и
                повседневного использования.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                <Card
                    icon={<ShieldCheck size={30} />}
                    title="Гарантия качества"
                    text="Вся продукция проходит проверку перед отправкой"
                />
                <Card
                    icon={<Truck size={30} />}
                    title="Быстрая доставка"
                    text="Доставка по всему Узбекистану"
                />
                <Card
                    icon={<ThumbsUp size={30} />}
                    title="Честные цены"
                    text="Работаем без посредников"
                />
                <Card
                    icon={<Users size={30} />}
                    title="Поддержка клиентов"
                    text="Консультация до и после покупки"
                />
            </div>

            {/* PRODUCTS */}
            <div className="bg-gray-100 rounded-3xl p-8 mb-16">
                <h2 className="text-2xl font-semibold mb-4">Наш ассортимент</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Клинковое оружие</li>
                    <li>Сувенирные ножи</li>
                    <li>Фонари ARMYTEK</li>
                    <li>Сопутствующие товары и аксессуары</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <Stat number="5+" text="лет опыта" />
                <Stat number="3000+" text="выполненных заказов" />
                <Stat number="1500+" text="довольных клиентов" />
            </div>

            <div className="bg-black text-white rounded-3xl p-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Готовы выбрать надежный инструмент?
                </h2>
                <p className="text-gray-300 mb-6">
                    Ознакомьтесь с нашим каталогом и подберите товар под свои задачи
                </p>
                <button className="bg-[#d6a65a] hover:bg-[#c99743] text-black px-8 py-3 rounded-xl font-semibold">
                    <Link to="/katalog">Перейти в каталог</Link>
                </button>
            </div>
        </div>
    );
};

const Card = ({ icon, title, text }: any) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="text-[#d6a65a] mb-4">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
    </div>
);

const Stat = ({ number, text }: any) => (
    <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
        <div className="text-4xl font-bold text-[#d6a65a] mb-2">{number}</div>
        <div className="text-gray-600">{text}</div>
    </div>
);

export default Onas;
