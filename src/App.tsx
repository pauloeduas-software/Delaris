import { VitrinePage } from "./pages/Vitrine";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <VitrinePage />
    </CartProvider>
  );
}

export default App;
