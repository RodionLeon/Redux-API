import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Layout from './routes/Layout';
import PageNotFound from './routes/PageNotFound';
import MainPage from "./routes/MainPage";
import Users from "./routes/Users/Users";
import User from "./routes/Users/User";
import Albums from "./routes/Albums/Albums";
import Album from './routes/Albums/Album';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "/",
                element: <MainPage />,
                index: true,
            },
            {
                path: "pageNotFound",
                element: <PageNotFound />
            },
            {
                path: "users/",
                children: [
                    {
                        path: "",
                        element: <Users />,
                        index: true
                    },
                    {
                        path: ":id/",
                        element: <User />,
                        errorElement: <PageNotFound />
                    }
                ]
            },
            {
                path: "albums/",
                children: [
                    {
                        path: "",
                        element: <Albums/>,
                        index: true,
                    },
                    {
                        path: ":id/",
                        element: <Album />,
                        errorElement: <PageNotFound />
                    }
                ]
            }
        ]
    },
])

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}

export default App;
