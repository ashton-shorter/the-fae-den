import { ICart, IProducts } from "../../definition";

export interface IHome {
    featuredProducts: IProducts[];
    AddToCart(item: ICart): void;
}