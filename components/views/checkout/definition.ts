export interface ICart {
    name: string;
    price: number;
    quantity: number;
    image?: string;
    description?: string;
}


export interface ICartManager {
    cart: ICart[];
    totalItems: number;
    AddToCart(item: ICart): void;
    DelFromCart(index: number): void;
}