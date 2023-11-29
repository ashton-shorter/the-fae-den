import { ICart } from "../../definition";

export interface IService {
    name: string;
    desc: string;
    price: number;
    group?: boolean;
}

export interface IServiceManager {
    services: IService[];
    AddToCart(item: ICart): void;
}