import { VitrineNavbar } from "./components/VitrineNavbar";
import { VitrineHero } from "./components/VitrineHero";
import { ProductGrid } from "./components/ProductGrid";
import { CartSidebar } from "./components/CartSidebar";

export function VitrinePage() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <VitrineNavbar />
      <VitrineHero />
      <ProductGrid />
      <CartSidebar />
    </div>
  );
}
