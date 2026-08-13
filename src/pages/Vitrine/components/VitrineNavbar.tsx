import { Search, ShoppingBag, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logoBranco from "../../../assets/LogoBranco.png";
import { useCart } from "../../../contexts/CartContext";

interface VitrineNavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function VitrineNavbar({ searchQuery, setSearchQuery }: VitrineNavbarProps) {
  const { items, setIsCartOpen } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  // Focar o input automaticamente quando a busca for aberta
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery(""); // Limpa a busca ao fechar
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    // Rola suavemente até a grade de produtos para o usuário ver o filtro acontecendo
    const gridEl = document.getElementById("vitrine-grid");
    if (gridEl) {
      // Pequeno timeout para dar tempo da animação de abertura do input começar
      setTimeout(() => {
        gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b-2 border-delaris-yellow z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center z-10">
          <img src={logoBranco} alt="Delaris Logo" className="h-14 object-contain mix-blend-multiply" />
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center justify-end relative h-10 w-10 md:w-auto">
            {/* Campo de Input Expansível */}
            <div 
              className={`absolute right-0 flex items-center bg-delaris-yellow-light rounded-full overflow-hidden transition-all duration-300 ease-in-out z-20 ${
                isSearchOpen ? "w-[45vw] sm:w-[50vw] md:w-80 opacity-100 shadow-inner" : "w-10 opacity-0 pointer-events-none"
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent pl-4 pr-8 md:pr-10 py-2 outline-none font-muli text-delaris-red-dark placeholder:text-delaris-red-dark/50 text-sm md:text-base"
              />
              <button 
                onClick={closeSearch}
                className="absolute right-2 text-delaris-red-dark/70 hover:text-delaris-red transition-colors p-1"
                aria-label="Fechar busca"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Lupa (Botão de abrir) */}
            <button 
              onClick={openSearch}
              className={`text-delaris-red-dark hover:text-delaris-red transition-all duration-300 p-2 bg-delaris-yellow-light rounded-full absolute right-0 ${
                isSearchOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
              }`}
              aria-label="Abrir busca"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-delaris-red-dark hover:text-delaris-red transition-colors relative group p-2 bg-delaris-yellow-light rounded-full"
            aria-label="Abrir sacola"
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
