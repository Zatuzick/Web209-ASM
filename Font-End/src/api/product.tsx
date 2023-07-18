import instance from "./instance";
interface IProduct {
    _id: number | string,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryId: number | null,

}
const getAllProduct = () => {
    return instance.get("/products");
}
const getOneProduct = (id: any) => {
    return instance.get('/products/' + id)
}
const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id)
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
const updateProduct = (product: IProduct) => {
    return instance.put('/products/' + product._id, product)
}
export { getAllProduct, getOneProduct, deleteProduct, addProduct, updateProduct }