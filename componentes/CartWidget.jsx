// src/components/CartWidget.jsx
import { FaShoppingCart } from 'react-icons/fa'; // o cualquier icono

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart />
      <span>3</span> {/* Número de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
