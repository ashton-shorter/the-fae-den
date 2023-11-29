import { ICart } from "../../definition";

export interface IProduct {
    name: string;
    price: number;
    description: string;
    image: string;
    title?: string;
}

export interface IProducts {
    type: string;
    products: IProduct[];
}

export interface IProductManager {
    allProducts: IProducts[];
    AddToCart(item: ICart): void;
    // AddProduct(product: IProduct, index: number):void;
    // RemoveProduct(index: number): void;
}