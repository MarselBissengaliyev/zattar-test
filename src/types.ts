export interface Category {
  id: number;
  name: string;
  children?: Category[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  image: string;
}
