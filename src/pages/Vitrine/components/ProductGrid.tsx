import { ImageIcon, Plus } from "lucide-react";
import { CATALOG_MOCK } from "../../../mocks/products";
import { useCart } from "../../../contexts/CartContext";

export function ProductGrid() {
  const { addItem } = useCart();
  // Extrai as categorias únicas do mock
  const categories = Array.from(new Set(CATALOG_MOCK.map((p) => p.category)));

  // Função para fazer o scroll suave até a categoria
  const scrollToCategory = (category: string) => {
    const el = document.getElementById(category);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="vitrine-grid" className="w-full bg-white relative z-10 py-16 scroll-mt-10">
      <main className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-delaris-red font-sansita mb-4">
            Nossas Especialidades
          </h2>
          <div className="w-24 h-1 bg-delaris-yellow rounded-full mb-8"></div>
          
          {/* Category Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className="px-6 py-3 rounded-full bg-delaris-yellow-light text-delaris-red-dark font-bold font-muli hover:bg-delaris-red hover:text-white transition-all shadow-sm active:scale-95"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {categories.map((category) => {
            const categoryProducts = CATALOG_MOCK.filter((p) => p.category === category);
            
            return (
              <div key={category} id={category} className="scroll-mt-32">
                <div className="flex items-center gap-6 mb-10">
                  <h3 className="text-4xl font-bold text-delaris-red font-sansita whitespace-nowrap">
                    {category}
                  </h3>
                  <div className="flex-1 h-0.5 bg-delaris-yellow-light"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {categoryProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="group flex flex-col rounded-[2rem] bg-white border-2 border-delaris-yellow-light overflow-hidden hover:shadow-2xl hover:border-delaris-yellow transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Imagem Placeholder */}
                      <div className="aspect-[4/3] relative overflow-hidden bg-delaris-yellow-light flex flex-col items-center justify-center text-delaris-red/40 group-hover:bg-delaris-yellow/20 transition-colors">
                        <ImageIcon className="w-16 h-16 mb-2" strokeWidth={1} />
                        <span className="font-muli font-bold uppercase tracking-widest text-sm">Foto do Produto</span>
                      </div>
                      
                      {/* Informações do Produto */}
                      <div className="p-8 flex flex-col flex-1 relative bg-white">
                        <h3 className="text-2xl font-bold text-delaris-red-dark group-hover:text-delaris-red transition-colors font-sansita mb-3 line-clamp-2 leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-delaris-red-dark/70 font-muli mb-4 line-clamp-3 flex-1">
                          {product.description}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t-2 border-delaris-yellow-light flex items-center justify-between">
                          <span className="font-bold text-delaris-red font-muli text-xl">
                            {(product as any).value || "R$ --,--"}
                          </span>
                          <button 
                            onClick={() => addItem({ id: product.id, name: product.name, price: (product as any).value || "R$ --,--" })}
                            className="bg-delaris-yellow text-delaris-red-dark hover:bg-delaris-red hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}
