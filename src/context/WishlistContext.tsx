import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

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

interface WishlistContextType {
    wishlist: Product[];
    addToWishlist: (item: Product) => void;
    removeFromWishlist: (id: number) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Product[]>([]);

    const addToWishlist = (item: Product) => {
        setWishlist(prev => {
            if (prev.find(p => p.id === item.id)) return prev;
            return [...prev, item];
        });
    };

    const removeFromWishlist = (id: number) => {
        setWishlist(prev => prev.filter(p => p.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
    return ctx;
};
