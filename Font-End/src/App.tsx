import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { addProduct, deleteProduct, getAllProduct, getOneProduct, updateProduct } from './api/product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import DashboardPage from './pages/admin/Dashboard'
import RegisterForm from './pages/admin/RegisterForm'
import LoginForm from './pages/admin/LoginForm'
import AddCategory from './pages/admin/Category'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd';
import { addCate, getAllCate } from './api/category'
import { ICate } from './types/category'

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data.products.docs))
  }, [])




  const onHandleRemove = (id: number) => {
    deleteProduct(id)
      .then(() => {
        const newProducts = products.filter((product) => product._id !== id);
        setProducts(newProducts);
        message.success('Xóa sản phẩm thành công!')
      })
      .catch((err) => {
        console.log('Error deleting product:', err);
      });
  };
  const onHandleAdd = (product: IProduct) => {
    addProduct(product)
      .then(() => {
        getAllProduct().then(({ data }) => setProducts(data.products.docs));
        message.success("Thêm sản phẩm thành công!")
        navigate("/admin/products")
      })


      .catch((err) => {
        message.success("Thêm sản phẩm thất bại!")
      });
  };
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product)
      .then(() => {
        getAllProduct().then(({ data }) => setProducts(data.products.docs));
        message.success("Cập nhật sản phẩm thành công!")
        navigate("/admin/products")
      })
      .catch((err) => {
        message.success("Cập nhật sản phẩm thất bại!")
      });


  };
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage products={products} />} />
          <Route path='products' >
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage products={products} />} />
          </Route>
        </Route>
        <Route path='/admin'>
          <Route index element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />
          <Route path='dash' element={<DashboardPage />} />
          <Route path='category' element={<AddCategory />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
