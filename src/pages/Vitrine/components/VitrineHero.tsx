export function VitrineHero() {
  return (
    <header className="relative pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[80vh] bg-delaris-yellow-light">
      {/* Background Organic Shapes */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-[800px] h-[800px] fill-delaris-red">
          <path d="M45.7,-76.3C58.6,-69.1,68,-53.4,75.3,-37.8C82.6,-22.2,87.7,-6.6,83.9,7.5C80.1,21.6,67.3,34.2,54.8,45.4C42.3,56.6,30.1,66.4,15.6,70.9C1.1,75.4,-15.7,74.6,-30.7,69.1C-45.7,63.6,-58.9,53.4,-67.2,40.1C-75.5,26.8,-78.9,10.4,-77,-5.4C-75.1,-21.2,-67.9,-36.4,-57.4,-48.6C-46.9,-60.8,-33.1,-70,-18.2,-74.6C-3.3,-79.2,12.7,-79.2,28.7,-74.7C34.4,-73.2,40.1,-74.8,45.7,-76.3Z" transform="translate(250 250)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 opacity-30 pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-[600px] h-[600px] fill-delaris-yellow">
          <path d="M51.9,-75.4C66.5,-66.1,77.1,-49.6,83,-31.6C88.9,-13.6,90,5.9,82.9,21.9C75.8,37.9,60.5,50.4,44.7,59.3C28.9,68.2,12.5,73.5,-3.6,78.2C-19.7,82.9,-35.5,87,-50.2,80.7C-64.9,74.4,-78.5,57.7,-84.9,40.1C-91.3,22.5,-90.5,4.1,-83.4,-11.1C-76.3,-26.3,-62.9,-38.3,-48.9,-47.9C-34.9,-57.5,-20.3,-64.7,-3.7,-59.8C12.9,-54.9,25.8,-37.9,38,-28.9C50.2,-19.9,61.6,-18.9,51.9,-75.4Z" transform="translate(250 250)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-delaris-red-dark font-sansita leading-tight">
          Sabor e praticidade <br className="hidden md:block"/>
          para quem não tem <br className="hidden md:block"/>
          <span className="text-delaris-red">tempo a perder.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-delaris-red-dark/80 font-muli max-w-2xl mx-auto leading-relaxed">
          Nossas linhas completas de salgados, massas e praticidade levam o conforto da comida de verdade para a sua mesa, rapidinho.
        </p>
        
        <div className="pt-8">
          <button 
            onClick={() => document.getElementById('vitrine-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="rounded-full bg-delaris-red text-white hover:bg-delaris-red-dark h-16 px-12 font-sansita text-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Novidades 
          </button>
        </div>
      </div>
    </header>
  );
}
