import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryMenu from "@/components/CategoryMenu";
import { Category, Product } from "@/types";
import ProductCard from "@/components/ProductBar";

export default async function HomePage() {
  const categoriesPath = path.join(process.cwd(), "mock/categories.json");
  const productsPath = path.join(process.cwd(), "mock/products.json");

  const categories: Category[] = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));
  const products: Product[] = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 gap-6">

        <aside className="w-full lg:w-64 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto bg-white border rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold mb-3">Категории</h3>
          <CategoryMenu categories={categories} />
        </aside>

        <main className="flex-1 space-y-6">
          <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl h-48 flex flex-col items-center justify-center text-white overflow-hidden shadow-lg p-4">
            <div className="text-center space-y-2 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold">Супер скидки этой недели!</h2>
              <p className="text-sm sm:text-base">Не пропусти лучшие предложения на наши продукты</p>
              <button className="mt-3 bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                Смотреть акции
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="transform transition duration-300 hover:scale-105 hover:shadow-lg rounded-lg bg-white overflow-hidden"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
