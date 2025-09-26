"use client";

import { useState } from "react";
import Link from "next/link";
import { Category } from "@/types";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

interface Props {
  categories: Category[];
  level?: number;
}

export default function CategoryMenu({ categories, level = 0 }: Props) {
  return (
    <ul className={`space-y-1 ${level > 0 ? "pl-2 border-l border-gray-200" : ""}`}>
      {categories.map((cat) => (
        <CategoryItem key={cat.id} category={cat} level={level} />
      ))}
    </ul>
  );
}

interface CategoryItemProps {
  category: Category;
  level: number;
}

function CategoryItem({ category, level }: CategoryItemProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault(); 
      setOpen(!open);
    }
  };

  return (
    <li>
      <Link
        href={`/category/${category.id}`}
        className={`flex items-center justify-between px-2 py-1 rounded-md hover:bg-blue-50 hover:text-blue-600 transition`}
        style={{ paddingLeft: `${level * 12}px` }}
        onClick={handleClick}
      >
        <span>{category.name}</span>
        {hasChildren && (
          <span className="ml-2">
            {open ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}
          </span>
        )}
      </Link>
      {hasChildren && open && (
        <CategoryMenu categories={category.children!} level={level + 1} />
      )}
    </li>
  );
}
