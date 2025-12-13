import { useWishlist } from "@/context/WishlistContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Избранное</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Список избранного пуст.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow">
              <img src={item.img} className="w-full h-40 object-contain mb-3" />

              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>

              <button
                className="w-full bg-red-500 text-white py-2 rounded mt-3"
                onClick={() => removeFromWishlist(item.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
