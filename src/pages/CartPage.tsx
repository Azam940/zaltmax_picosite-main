import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, p) => sum + p.qty * parseInt(p.price), 0);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Корзина</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Корзина пуста.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-4 shadow rounded-xl flex gap-4">
                <img src={item.img} className="w-32 h-32 object-contain" />

                <div className="flex flex-col grow">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>

                  <div className="flex items-center gap-2 mt-3">
                    <button onClick={() => decreaseQty(item.id)} className="px-3 py-1 bg-gray-200 rounded">-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)} className="px-3 py-1 bg-gray-200 rounded">+</button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-auto text-red-500 font-semibold"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Итого: {total} р.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
