import background from "@/assets/background2.png";
import { Link } from "react-router-dom";
import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pico from "@/assets/pico.png";
import { Autoplay, Pagination } from "swiper/modules";
import { useSearch } from "@/context/SearchContext";



interface Product {
    id: number;
    title: string;
    size: string;
    material: string;
    price: string;
    img: string;
    reviews: number;
    rating: number;
}

const products: Product[] = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: "Нож Lisa",
    size: "95х18",
    material: "Орех, Алюминий",
    price: "(-2 719 p.) 2 019 р.",
    img: pico,
    reviews: 12,
    rating: 5,
}));

const KatalogNew: FC = () => {
    const { query } = useSearch();

    const filtered = products.filter(
        (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.size.toLowerCase().includes(query.toLowerCase()) ||
            p.material.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div
            className="w-full py-12 px-[90px] bg-cover bg-center mb-[100px]"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="container mx-auto flex gap-16 items-start">
                <div className="w-[330px] text-white">
                    <h1 className="text-[32px] font-bold mb-6 mont">Новинки</h1>

                    <p className="leading-[22px] text-[15px] opacity-90 mb-6 mont">
                        Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
                        представлен наиболее широкий выбор Златоустовских ножей от
                        Златоустовских Оружейных Фабрик и компаний, мы являемся
                        официальными поставщиками.
                    </p>

                    <Link
                        to={"/novinok"}
                        className="mont text-[#E8AA31] font-semibold text-[17px] hover:opacity-80 transition"
                    >
                        Больше новинок →
                    </Link>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}
                    autoplay={{ delay: 2200, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="pb-14  w-full products-swiper"
                >
                    {filtered.map((p) => (
                        <SwiperSlide key={p.id}>
                            <div className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition cursor-pointer">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-44 object-contain mb-4"
                                />

                                <h3 className="font-semibold text-lg">{p.title}</h3>
                                <p className="text-sm text-gray-500">{p.size}</p>
                                <p className="text-sm text-gray-500">{p.material}</p>

                                <div className="flex items-center gap-1 text-yellow-400 text-lg mt-2">
                                    {"★".repeat(p.rating)}
                                </div>

                                <p className="text-xs text-gray-400">{p.reviews} отзывов</p>

                                <div className="flex justify-between items-center mt-3">
                                    <span className="font-bold text-lg">{p.price}</span>

                                    <div className="flex items-center gap-3 text-gray-500 text-xl">
                                        <span className="hover:text-yellow-500 transition">⚖</span>
                                        <span className="hover:text-red-500 transition">♡</span>
                                    </div>
                                </div>

                                <button className="w-full bg-[#E8AA31] text-white rounded-md py-2 mt-4 hover:bg-[#c98f26] transition font-semibold">
                                    В корзину
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default KatalogNew;
