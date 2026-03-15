import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Product from '../Pages/Product'
import Category from '../Pages/Category'
import Customer from '../Pages/Customer'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/category' element={<Category />}></Route>
                <Route path='/customer' element={<Customer />}></Route>
            </Routes>
        </main>
    )
}

export default Main
