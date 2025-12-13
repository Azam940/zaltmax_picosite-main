import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// CONTEXTLAR
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <WishlistProvider>
          <CartProvider>
            <App />
            <Toaster position="top-right" />
          </CartProvider>
        </WishlistProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
