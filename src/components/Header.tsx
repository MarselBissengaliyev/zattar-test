"use client";

import { HomeIcon, PhoneIcon, TagIcon, XIcon, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Каталог", href: "/catalog", icon: <HomeIcon className="w-4 h-4 mr-1" /> },
    { label: "Акции", href: "/promotions", icon: <TagIcon className="w-4 h-4 mr-1" /> },
    { label: "Контакты", href: "/contacts", icon: <PhoneIcon className="w-4 h-4 mr-1" /> },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 sm:px-8 sm:py-4">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-blue-700 cursor-pointer hover:text-blue-600 transition">
          Zattar
        </Link>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex sm:items-center sm:gap-6">
          <Select>
            <SelectTrigger className="w-40 flex items-center justify-between border rounded-md px-3 py-2">
              <SelectValue placeholder="Выберите город" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Almaty">Алматы</SelectItem>
              <SelectItem value="Astana">Нур-Султан</SelectItem>
            </SelectContent>
          </Select>

          <nav className="flex items-center gap-6 text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center font-medium px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-blue-100 text-blue-700"
                    : "hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md border-t">
          <div className="flex flex-col gap-2 p-4">
            <Select>
              <SelectTrigger className="w-full flex items-center justify-between border rounded-md px-3 py-2 mb-2">
                <SelectValue placeholder="Выберите город" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Almaty">Алматы</SelectItem>
                <SelectItem value="Astana">Нур-Султан</SelectItem>
              </SelectContent>
            </Select>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center font-medium px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-700"
                      : "hover:text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
