import { ICart } from "../../definition";

export interface ISupport {
    AddToCart(item: ICart): void;
}