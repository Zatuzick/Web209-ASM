export interface IProduct {
    id: number | string,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryId: string | number
}