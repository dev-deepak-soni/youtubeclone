import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./src/component/Dashboard";
import Error from "./src/component/Error";
import Header from "./src/component/Header";
import Sidebar from "./src/component/Sidebar";

const App = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />)