import { GlassesIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="p-4 border-b bg-white">
      <div className="relative max-w-lg mx-auto">
        {/* Иконка поиска */}
        <GlassesIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Искать товары"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-400 shadow-sm hover:shadow-md"
        />
      </div>
    </div>
  );
}
