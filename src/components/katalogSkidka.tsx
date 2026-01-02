import type { FC } from "react";
import { ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import pico from "@/assets/pico.png";
import { Autoplay, Pagination } from "swiper/modules";
import toast from "react-hot-toast";

import { useSearch } from "@/context/SearchContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

import "swiper/css";
import "swiper/css/pagination";

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

const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "Нож lisa",
  size: "95х18",
  material: "Орех, Алюминий",
  price: "2 019 р.",
  img: pico,
  reviews: 12,
  rating: 5,
}));

const KatalogSkidka: FC = () => {
  const { query } = useSearch();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.size.toLowerCase().includes(query.toLowerCase()) ||
      p.material.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[95px] py-10 select-none">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mont">
          Акции
        </h1>

        <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-70 transition">
          <p className="font-medium text-sm sm:text-base text-[#14141494] mont">
            Все акции
          </p>
          <ChevronRight color="#E8AA31" size={20} />
        </div>
      </div>

      <Swiper
        loop
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        spaceBetween={15}
        breakpoints={{
          340: { slidesPerView: 1.2 },
          460: { slidesPerView: 2 },
          760: { slidesPerView: 3 },
          1090: { slidesPerView: 4 },
          1440: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {filtered.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="bg-white border rounded-xl p-4 sm:p-5 shadow hover:shadow-lg transition flex flex-col h-full">

              {/* IMAGE */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 sm:h-44 object-contain mb-4"
              />

              {/* INFO */}
              <h3 className="font-semibold text-base sm:text-lg">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">{p.size}</p>
              <p className="text-xs sm:text-sm text-gray-500">{p.material}</p>

              {/* RATING */}
              <div className="flex items-center gap-1 text-yellow-400 text-sm sm:text-base mt-2">
                {"★".repeat(p.rating)}
              </div>
              <p className="text-xs text-gray-400">{p.reviews} отзывов</p>

              {/* PRICE + ICONS */}
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-base sm:text-lg">
                  {p.price}
                </span>

                <div className="flex items-center gap-3 text-lg">

                  {/* LIKE */}
                  <button
                    onClick={() => {
                      if (isInWishlist(p.id)) {
                        removeFromWishlist(p.id);
                        toast("Like olib tashlandi 💔");
                      } else {
                        addToWishlist(p);
                        toast.success("Like qo‘shildi ❤️");
                      }
                    }}
                    className={`transition ${
                      isInWishlist(p.id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    <Heart
                      size={22}
                      fill={isInWishlist(p.id) ? "red" : "none"}
                    />
                  </button>

                  {/* CART ICON */}
                  <button
                    onClick={() => {
                      addToCart(p);
                      toast.success("Savatga qo‘shildi 🛒");
                    }}
                    className="text-gray-400 hover:text-yellow-500 transition"
                  >
                    <ShoppingCart size={22} />
                  </button>

                </div>
              </div>

              {/* ADD TO CART */}
              <button
                onClick={() => {
                  addToCart(p);
                  toast.success("Savatga qo‘shildi 🛒");
                }}
                className="w-full bg-[#E8AA31] text-white rounded-md py-2 mt-4 hover:bg-[#c98f26] transition font-semibold text-sm sm:text-base"
              >
                В корзину
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default KatalogSkidka;
