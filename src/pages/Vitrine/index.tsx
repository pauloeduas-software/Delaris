import { VitrineNavbar } from "./components/VitrineNavbar";
import { VitrineHero } from "./components/VitrineHero";
import { ProductGrid } from "./components/ProductGrid";
import { CartSidebar } from "./components/CartSidebar";
import { PartnersMarquee } from "./components/PartnersMarquee";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function VitrinePage() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <VitrineNavbar />
      <VitrineHero />
      <PartnersMarquee />
      <ProductGrid />
      <CartSidebar />
      <WhatsAppButton />
    </div>
  );
}
