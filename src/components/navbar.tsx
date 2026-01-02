import {
  Search,
  MapPin,
  Heart,
  ShoppingCart,
  ChevronDown,
  UserRound,
  Phone,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "@/context/SearchContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { query, setQuery } = useSearch();
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  return (
    <header className="w-full relative top-0">
      <div className="bg-[#141414] px-6 py-4 flex justify-between items-center">
        <ul className="hidden md:flex gap-10 text-white mont">
          <Link to="/onas">О нас</Link>
          <li>Оплата и доставка</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setOpenMenu(true)}
        >
          <Menu size={28} />
        </button>

        <div className="hidden md:flex items-center gap-2 text-white">
          <UserRound />
          <span className="mont font-semibold">Личный кабинет</span>
        </div>
      </div>

      <nav className="bg-[#f8f9fa] border-b">
        <div className="flex items-center justify-between px-6 md:px-10 py-3">
          <div className="flex items-center gap-5">
            <img
              src={logo}
              className="h-10 cursor-pointer"
              onClick={() => navigate("/")}
            />

            <div className="hidden sm:block relative w-[250px] md:w-[380px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск"
                className="w-full pl-10 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              Москва <ChevronDown size={16} />
            </div>

            <div>
              <a className="flex items-center gap-2 font-semibold">
                <Phone size={18} />
                +998 90 123 45 67
              </a>
              <span className="text-xs text-[#d6a65a]">Заказать звонок</span>
            </div>

            <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
              <Heart />
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
            </div>

            <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
              <ShoppingCart />
              {cart.length > 0 && (
                <span className="badge">{cart.length}</span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="hidden md:flex bg-[#141414] px-[90px] py-5 gap-10">
        {[
          ["Каталог ножей", "/katalog"],
          ["Клинковое оружие", "/orujiya"],
          ["Сувенирные изделия", "/izdeleniyaa"],
          ["Фонари ARMYTEK", "/fonari"],
          ["Сопуствующие товары", "/sopustvuyushiy"],
        ].map(([title, link]) => (
          <Link
            key={title}
            to={link}
            className="text-white mont hover:text-[#E8AA31]"
          >
            {title}
          </Link>
        ))}
      </div>

      {openMenu && (
        <div className="fixed inset-0 bg-black/60 z-50">
          <div className="bg-[#141414] w-[60%] h-full p-6 text-white space-y-6">
            <button className="cursor-pointer" onClick={() => setOpenMenu(false)}>
              <X size={28} />
            </button>

            <div className="flex flex-col gap-6 text-lg mont">
              <Link to="/katalog" onClick={() => setOpenMenu(false)}>Каталог ножей</Link>
              <Link to="/orujiya" onClick={() => setOpenMenu(false)}>Клинковое оружие</Link>
              <Link to="/izdeleniyaa" onClick={() => setOpenMenu(false)}>Сувенирные изделия</Link>
              <Link to="/fonari" onClick={() => setOpenMenu(false)}>Фонари ARMYTEK</Link>
              <Link to="/sopustvuyushiy" onClick={() => setOpenMenu(false)}>Сопуствующие товары</Link>
            </div>

            <div className="pt-6 border-t flex gap-2">
              <UserRound /> Личный кабинет
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
