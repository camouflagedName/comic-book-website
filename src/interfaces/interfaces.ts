export interface ICartItem extends IComicBook{
    quantity: number;
}

export interface IComicBook {
    title: string;
    short?: string;
    imgSrc: string;
    price: number;
    description?: string;
}

export interface ICartContext {
    cart: ICartItem[];
    add: (newItem: ICartItem) => void;
    remove: () => void;
    update: (updatedCart: ICartItem[]) => void;
}