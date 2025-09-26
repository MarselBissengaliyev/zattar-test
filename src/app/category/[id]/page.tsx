import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryMenu from "@/components/CategoryMenu";
import Breadcrumbs from "@/components/Breadcrumbs";
import FiltersSidebar from "@/components/FiltersSidebar";
import { Category, Product } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductBar";

interface Props {
  params: { id: string };
}

function findCategoryPath(categories: Category[], id: number, path: Category[] = []): Category[] | null {
  for (const cat of categories) {
    const newPath = [...path, cat];
    if (cat.id === id) return newPath;
    if (cat.children) {
      const found = findCategoryPath(cat.children, id, newPath);
      if (found) return found;
    }
  }
  return null;
}

export default async function CategoryPage({ params }: Props) {
  const categoriesPath = path.join(process.cwd(), "mock/categories.json");
  const productsPath = path.join(process.cwd(), "mock/products.json");

  const categories: Category[] = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));
  const products: Product[] = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

  const categoryId = parseInt(params.id, 10);
  const categoryPath = findCategoryPath(categories, categoryId) || [];
  const categoryProducts = products.filter(p => p.categoryId === categoryId);

  const filters = ["Фильтр 1", "Фильтр 2", "Фильтр 3"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 gap-6">
        <aside className="w-full lg:w-64 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto space-y-6 bg-white border rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold mb-3">Категории</h3>
          <CategoryMenu categories={categories} />
          <FiltersSidebar filters={filters} />
        </aside>

        <main className="flex-1 space-y-6">

          <div className="text-sm text-gray-500">
            <Breadcrumbs path={categoryPath} />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h1 className="text-2xl font-bold text-gray-800">
              {categoryPath[categoryPath.length - 1]?.name || "Категория"}
            </h1>
            <span className="text-gray-500">{categoryProducts.length} товаров</span>
          </div>

          <div className="mb-4">
            <div className="inline-block bg-white border rounded-lg shadow-sm p-2">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">По цене</SelectItem>
                  <SelectItem value="popularity">По популярности</SelectItem>
                  <SelectItem value="new">По новизне</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map(p => (
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
