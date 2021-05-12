export interface Product {
    id: string;
    name: string;
    categoryId: string;
    imagePath: string;
    availableQty: string[];
    unit: string;
    price: number;
    currency: string;
    status: boolean;
}