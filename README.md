# Zattar.kz — Frontend Test Project

## 📦 Технологии

- **Next.js 13+ (App Router)** — Server-Side Rendering
- **TypeScript**
- **TailwindCSS**
- **shadcn/ui** — компоненты UI
- **lucide-react / @radix-ui/react-icons** — иконки
- **Mock JSON** для категорий и товаров

---

## 🗂 Структура проекта
```yaml
/mock
├─ categories.json
└─ products.json
/src
/app
├─ page.tsx # Главная страница
/category
└─ [id]
    └─ page.tsx # Страница категории
/components
├─ Header.tsx
├─ SearchBar.tsx
├─ CategoryMenu.tsx
├─ ProductCard.tsx
├─ Breadcrumbs.tsx
├─ FiltersSidebar.tsx
└─ ...
├─ index.ts # Типы Category, Product
```

---

## 🖥 Страницы

### 1️⃣ Главная страница (`/`)

- Хедер с логотипом, выбором города и навигацией  
- Строка поиска с иконкой и анимацией  
- Многоуровневое меню категорий (3 уровня)  
- Промо-баннер (заглушка)  
- Популярные категории  
- Сетка карточек товаров с hover-эффектами, кнопкой "Купить", скидками

### 2️⃣ Страница категории (`/category/[id]`)

- Breadcrumbs  
- Заголовок категории  
- Сортировка товаров (по цене, популярности, новизне)  
- Сайдбар фильтров с чекбоксами и сворачиванием секций  
- Сетка товаров с hover-эффектами, скидками и описанием при наведении  

---

## 🚀 Запуск проекта

1. Установить зависимости:

```bash
npm install
# или
yarn
Запустить проект:

npm run dev
# или
yarn dev
Открыть в браузере: http://localhost:3000

⚙ Mock данные
Файлы mock/categories.json и mock/products.json содержат данные для категорий и товаров.
Используются для отображения списка категорий и сетки товаров без API.

💡 Особенности реализации
Server-Side Rendering (SSR) через Next.js

Адаптивная верстка: mobile + desktop

Компонентный подход: Header, SearchBar, CategoryMenu, ProductCard и др.

UX/UI улучшения:

Hover эффекты, тени и анимации

Раскрывающиеся подкатегории

Плавное увеличение карточек товаров

Dropdown города и сортировки
---