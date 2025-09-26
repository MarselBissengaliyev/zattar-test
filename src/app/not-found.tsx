"use client";

import Link from "next/link";
import { HomeIcon, TagIcon } from "lucide-react";

export default function NotFoundPage() {
  // Примеры популярных категорий
  const categories = [
    { id: 111, name: "iPhone" },
    { id: 12, name: "Ноутбуки" },
    { id: 11, name: "Смартфоны" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Страница не найдена
      </h2>
      <p className="text-gray-500 mb-6 text-center">
        К сожалению, запрашиваемая страница не существует или была удалена.
      </p>

      {/* Ссылка на главную */}
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mb-4"
      >
        <HomeIcon className="w-5 h-5 mr-2" />
        На главную
      </Link>

      {/* Ссылки на категории */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="inline-flex items-center px-4 py-2 bg-white border rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <TagIcon className="w-4 h-4 mr-1" />
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
