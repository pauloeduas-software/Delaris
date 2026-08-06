import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../../../contexts/CartContext";

// Função auxiliar para converter "R$ 4,10" em número
const parsePrice = (priceStr: string) => {
  if (!priceStr) return 0;
  const numericStr = priceStr.replace(/[^\d,-]/g, '').replace(',', '.');
  return parseFloat(numericStr) || 0;
};

// Função para formatar número para moeda BRL
const formatBRL = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

export function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem } = useCart();

  if (!isCartOpen) return null;

  const cartTotal = items.reduce((acc, item) => acc + (parsePrice(item.price) * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right border-l-4 border-delaris-yellow">
        <div className="p-6 border-b-2 border-delaris-yellow-light flex items-center justify-between bg-white">
          <h2 className="text-3xl font-sansita text-delaris-red font-bold">Sua Sacola</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-delaris-yellow-light text-delaris-red-dark transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
          <div className="bg-delaris-yellow/20 text-delaris-red-dark font-muli text-sm px-4 py-3 rounded-xl border border-delaris-yellow-light text-center shadow-sm">
            <strong>Aviso:</strong> Nossos produtos são vendidos em pacotes. Cada pacote contem <strong>10 unidades</strong>.
          </div>

          {items.length === 0 ? (
            <div className="text-center text-delaris-red-dark/60 font-muli mt-10">
              Sua sacola está vazia. <br/> Adicione algumas especialidades!
            </div>
          ) : (
            items.map((item) => {
              const unitPriceNum = parsePrice(item.price);
              const subtotal = unitPriceNum * item.quantity;
              
              return (
                <div key={item.id} className="flex flex-col bg-delaris-yellow-light/30 rounded-2xl p-4 border border-delaris-yellow-light">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold font-sansita text-lg text-delaris-red-dark leading-tight pr-4">
                      {item.name}
                    </h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-delaris-red/50 hover:text-delaris-red transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="font-bold text-delaris-red font-muli text-lg">
                        {formatBRL(subtotal)}
                      </span>
                      <span className="text-xs text-delaris-red-dark/60 font-muli">
                        {item.price} a unidade
                      </span>
                    </div>
                    
                    <div className="flex items-center bg-white rounded-full border border-delaris-yellow shadow-sm h-9">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 10)}
                        className="w-9 h-full flex items-center justify-center text-delaris-red-dark hover:text-delaris-red transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-bold text-sm text-delaris-red-dark select-none">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 10)}
                        className="w-9 h-full flex items-center justify-center text-delaris-red-dark hover:text-delaris-red transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {items.length > 0 && (
          <div className="p-6 border-t-2 border-delaris-yellow-light bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center">
              <span className="font-muli font-bold text-delaris-red-dark">Total Simulado</span>
              <span className="font-sansita font-bold text-3xl text-delaris-red">
                {formatBRL(cartTotal)}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
