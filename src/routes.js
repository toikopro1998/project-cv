import React from 'react';
import ProductsDetail from './component/ProductsDetail';
import QuanAo from './component/QuanAo';
import NewProducts from './component/NewProducts';
import MainPage from './component/MainPage';
import ChuyenTrang from './component/ChuyenTrang';

const routes = [
    {
        path: '/',
        exact: true,
        main: (match) => <MainPage match={match}></MainPage>
    },
    {
        path: '/newproducts',
        exact: true,
        main: (match) => <NewProducts match={match}></NewProducts>
    },
    {
        path: '/newproducts/:id',
        exact: true,
        main: (match) => <ProductsDetail match={match}></ProductsDetail>
    },
    {
        path: '/sellingproducts/:id',
        exact: true,
        main: (match) => <ProductsDetail match={match}></ProductsDetail>
    },
    {
        path: '/bosuutap',
        exact: false,
        main: () => <QuanAo></QuanAo>
    },

]
export default routes