
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Components/Home'
import Product from '../src/Components/Product'
import AddProduct from '../src/Components/AddProduct'
import Loing from '../src/Components/Login'
import EditPage from '../src/Components/Edit'

function AllRoutrs() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/editpage" element={<EditPage/>}></Route>
        <Route path="/login" element={<Loing/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutrs
