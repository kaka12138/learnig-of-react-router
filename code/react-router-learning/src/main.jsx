import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import ErrorPage from './error-page'
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact'
import EditContact, { action as editAction } from './routes/edit'
import { action as destroyAction } from "./routes/destroy"
import IndexPage from './routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // root route
    errorElement: <ErrorPage />, // error route
    loader: rootLoader, // loader for getting data before rendering the route
    action: rootAction, // action for handling side effects before rendering the route??
    // nested routes
    children: [
      {
        // pathless route
        errorElement: <ErrorPage />,
        children: [
          // when there is no child route match, rendering the index route
          {
            index: true,
            element: <IndexPage />,
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            // capture the error of current route instead of useing global or parent error-page
            errorElement: <div>Oops! There was an error.</div>,
          }
        ]
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
