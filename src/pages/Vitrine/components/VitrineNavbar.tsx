import { Search, ShoppingBag } from "lucide-react";
import logoBranco from "../../../assets/LogoBranco.png";
import { useCart } from "../../../contexts/CartContext";

export function VitrineNavbar() {
  const { items, setIsCartOpen } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-white border-b-2 border-delaris-yellow z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoBranco} alt="Delaris Logo" className="h-14 object-contain mix-blend-multiply" />
        </div>
        <div className="flex items-center gap-6">
          <button className="text-delaris-red-dark hover:text-delaris-red transition-colors p-2 bg-delaris-yellow-light rounded-full">
            <Search className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-delaris-red-dark hover:text-delaris-red transition-colors relative group p-2 bg-delaris-yellow-light rounded-full"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-delaris-red text-white text-xs font-bold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
