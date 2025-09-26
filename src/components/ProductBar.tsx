import { Product } from "@/types";
import { ShoppingCartIcon, EyeIcon } from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group border rounded-xl p-3 bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-44 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <ShoppingCartIcon className="w-5 h-5 text-blue-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <EyeIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <h3 className="mt-3 text-sm font-semibold line-clamp-2 text-gray-800">
        {product.name}
      </h3>

      <div className="flex items-center justify-between mt-2">
        <p className="text-red-600 font-bold text-base">{product.price} ₸</p>
        <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center gap-1 text-sm font-medium">
          <ShoppingCartIcon className="w-4 h-4" /> Купить
        </button>
      </div>
    </div>
  );
}
