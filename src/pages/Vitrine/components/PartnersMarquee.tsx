import { PARTNERS_MOCK } from "../../../mocks/partners";

export function PartnersMarquee() {
  // Duplicamos a lista para que a animação infinita tenha conteúdo suficiente para não "quebrar"
  // Multiplicamos por 4 para garantir que preenchemos muito além da tela, pois a animação usa -50%
  const duplicatedPartners = [...PARTNERS_MOCK, ...PARTNERS_MOCK, ...PARTNERS_MOCK, ...PARTNERS_MOCK, ...PARTNERS_MOCK, ...PARTNERS_MOCK];

  return (
    <section className="w-full bg-white relative z-10 py-16 overflow-hidden flex flex-col items-center">
      <div className="flex flex-col items-center mb-8 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-delaris-red font-sansita mb-4">
          Nossos Parceiros
        </h2>
        <div className="w-24 h-1 bg-delaris-yellow rounded-full mb-8"></div>
      </div>
      
      <div className="w-full relative flex overflow-hidden group py-4 mask-image-gradient">
        {/* Adicionando um mask com CSS inline para suavizar as bordas se desejado, 
            mas o overflow-hidden no pai já cuida do corte. Vamos fazer o flex contínuo. */}
        <div 
          className="flex animate-marquee-right whitespace-nowrap items-center w-max"
          style={{
            // O estilo abaixo é para um gradiente nas laterais que esconde as pontas (fade out)
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`}
              className="flex items-center justify-center px-10 md:px-16 gap-4"
            >
              {/* Onde as futuras logos entrarão */}
              {partner.image && (
                <img src={partner.image} alt={`Logo ${partner.name}`} className="h-12 object-contain" />
              )}
              
              <span className="text-3xl md:text-5xl font-sansita font-bold text-delaris-red-dark/30 hover:text-delaris-red transition-colors duration-300 select-none cursor-default">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
