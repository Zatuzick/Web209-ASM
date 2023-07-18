import instance from "./instance";
interface ICate {
    id: number,
    name: string,
}

export const getAllCate = () => {
    return instance.get("/category");
}
export const deleteCate = (id: number) => {
    return instance.delete('/category/' + id)
}
export const addCate = (category: ICate) => {
    return instance.post('/category', category)
}
export const updateCate = (category: ICate) => {
    return instance.put('/category/' + category.id, category)
}
