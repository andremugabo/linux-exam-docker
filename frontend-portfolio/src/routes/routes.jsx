import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import * as Layouts from '../layouts/index';
import * as Pages from '../pages/index';

export const routes = createBrowserRouter([
{
    path:'/',
    element:<Layouts.RootLayout/>,
    children: [
        {index:true, element:<Pages.HomePage/>}
    ]
}
]);
