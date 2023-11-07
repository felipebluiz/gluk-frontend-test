import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'

import Root from './routes/Root'
import NewSale from './routes/NewSale'
import { client } from '@/lib/apollo'

import { GlobalStyles } from '@/styles/global'
import 'react-datepicker/dist/react-datepicker.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        loader: () => redirect('/sales/new'),
      },
      {
        path: 'sales/new',
        element: <NewSale />,
      },
      {
        path: '*',
        loader: () => redirect('/'),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
