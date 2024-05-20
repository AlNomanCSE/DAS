type MainCategory = "Lifestyle" | "Electronics" | "Food and Baby Gallery";

type SubCategories =
  | "Man"
  | "Woman"
  | "Mobile"
  | "Laptop"
  | "Baby Gallery"
  | "Foods"
  | "Others";

type SubSubCategory =
  | "Baby Boy"
  | "Baby Girl"
  | "Pants"
  | "Shirts"
  | "Panjabi"
  | "Poloshirt"
  | "T-Shirts"
  | "Footware"
  | "Accessories"
  | "Tops and T-shirts"
  | "Kammez/Kurta"
  | "Sharee"
  | "Smartphones"
  | "AirPods"
  | "Earphones"
  | "Charges"
  | "Cables"
  | "OthersP"
  | "Laptop"
  | "Mouse"
  | "Keyboard"
  | "Pendrive"
  | "Router"
  | "Baby accessories"
  | "Baby foods"
  | "Spices"
  | "Chips"
  | "Softdrinks";

interface Size {
  size: string;
  quantity: number;
}

interface Color {
  color: string;
  quantity: number;
}

interface Product {
  name: string;
  description: string;
  images: string[];
  price: number;
  tags: string[];
  collections: string[];
  quantity: number;
  expense: number;
  discountPrice?: number;
  category: MainCategory;
  subCategory: SubCategories;
  subSubCategory?: SubSubCategory;
  sizes?: Size[];
  colors?: Color[];
}
const newProduct: Product = {
  name: "VIVO Y17S",
  description:
    "Explore a wide range of vivo products including smartphones, earphones. Shop now at vivo for the latest phone technology and innovative features.",
  images: [],
  price: 0,
  tags: [],
  collections: [],
  quantity: 0,
  expense: 0,
  category: "Lifestyle",
  subCategory: "Mobile",
};
