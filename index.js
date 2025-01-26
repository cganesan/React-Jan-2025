import {StrictMode} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import App from './App';
import './index.css'
import About from './src/Components/About';
import Products from './src/Components/Products';
import Contact from './src/Components/Contact';
import Body from './src/Components/Body';

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path:'/',
                element: <Body/>,
            },
            {
                path:'/about',
                element: <About/>,
            },
            {
                path:'/products',
                element: <Products/>,
            },
            {
                path:'/contact',
                element: <Contact/>,
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>
    <RouterProvider router={appRouter} />
</StrictMode>)