import { useState } from "react";
import { VitrineNavbar } from "./components/VitrineNavbar";
import { VitrineHero } from "./components/VitrineHero";
import { ProductGrid } from "./components/ProductGrid";
import { CartSidebar } from "./components/CartSidebar";
import { PartnersMarquee } from "./components/PartnersMarquee";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function VitrinePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <VitrineNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <VitrineHero />
      <PartnersMarquee />
      <ProductGrid searchQuery={searchQuery} />
      <CartSidebar />
      <WhatsAppButton />
    </div>
  );
}
