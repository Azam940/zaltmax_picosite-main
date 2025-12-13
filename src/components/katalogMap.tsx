import { categories } from "@/data/categories";
import { useSearch } from "@/context/SearchContext";

export const KatalogMap = () => {
  const { query } = useSearch();

  const filtered = categories.filter((cat) =>
    cat.title.toLowerCase().includes(query.toLowerCase()) ||
    cat.items.some((i) => i.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="
      container mx-auto
      px-4 sm:px-6 lg:px-0
      mt-10 mb-24
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
    ">
      {filtered.map((cat) => (
        <div
          key={cat.id}
          className="
            bg-white
            rounded-[14px]
            shadow-md
            p-5 sm:p-6
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-5
            hover:shadow-lg
            transition
          "
        >
          {/* TEXT */}
          <div className="flex-1">
            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-3 mont">
              {cat.title}
            </h3>

            <ul className="space-y-2">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-700 mont text-sm sm:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E1A22F]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE */}
          <img
            src={cat.image}
            alt={cat.title}
            className="
              w-[120px]
              sm:w-[130px]
              lg:w-[140px]
              object-contain
              mx-auto
              sm:mx-0
            "
          />
        </div>
      ))}
    </div>
  );
};
