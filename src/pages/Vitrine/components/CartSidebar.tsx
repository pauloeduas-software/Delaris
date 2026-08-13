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
            <div className="flex justify-between items-center mb-6">
              <span className="font-muli font-bold text-delaris-red-dark">Total Simulado</span>
              <span className="font-sansita font-bold text-3xl text-delaris-red">
                {formatBRL(cartTotal)}
              </span>
            </div>

            <a
              href={`https://wa.me/5562982492654?text=${encodeURIComponent(
                `Olá! Gostaria de fazer um pedido. Seguem os itens que selecionei:\n${items
                  .map((item) => `- ${item.quantity}x ${item.name}`)
                  .join("\n")}\n\n- Total simulado ${formatBRL(cartTotal)}\n\nQuero seguir para pagamento e entrega.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-muli font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg active:scale-95 group"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                fill="currentColor"
                className="group-hover:animate-pulse"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Finalizar Pedido
            </a>
          </div>
        )}
      </div>
    </>
  );
}
