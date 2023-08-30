/* export interface ICartItem extends IComicBook{
    quantity: number;
}
 */

export interface IItem {
    [key: string]: number;
}

export interface ICart {
    products: IItem
    total: number;
}

export interface IComicBookCollection {
    [id: number]: IComicBook;
}

export interface IComicBook {
    id: number;
    title: string;
    short?: string;
    imgSrc: string;
    price: number;
    description?: string;
}

export interface ICartContext {
    cart: ICart;
    add: Add;
    remove: Remove;
    update: Update;
}


/* CART WRAPPER FUNCTIONS */

export type Add = (newItem: IItem) => void;
export type Remove =  (newItem: IItem) => void;
export type Update = (updatedCart: ICart) => void;
