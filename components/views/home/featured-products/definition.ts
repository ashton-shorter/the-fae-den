import { ICart, IProduct } from '../../../definition';

export interface IFeaturedProducts {
    products: IProduct[];
    AddToCart(item: ICart): void;
}
