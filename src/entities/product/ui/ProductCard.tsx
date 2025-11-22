import { Link } from "react-router-dom";
import type { Product } from "../model/types";
import { useAddProductToCartMutation } from "../../../feature/cart/useAddProduct/api/useAddProduct";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [addProductToCart, { isLoading, isError, error }] = useAddProductToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addProductToCart(product.id).unwrap();
      console.log("Product added to cart:", product.id);
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  return (
    <div key={product.id} className="border p-4 m-4">
      <Link to={`/cars/${product.id}`}>
        <h2 className="text-xl font-semibold">{product.title}</h2>
      </Link>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <img
        // src={product.imageUrl ?? ""}
        alt={product.title}
        className="w-32 h-32 object-cover mt-2"
      />
      <button
        onClick={handleAddToCart}
        className="bg-red-500 text-white p-5 rounded-2xl mt-2"
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add to cart"}
      </button>
      {isError && <p className="text-red-500">Error: {JSON.stringify(error)}</p>}
    </div>
  );
}
