export interface Product {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    imagePath: string;
    availableQty: string[];
    unit: string;
    pricePerUnit: number;
    calculatedPrice: number;
    currency: string;
    status: boolean;
}