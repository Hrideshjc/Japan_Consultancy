import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from "../pages/about";
import ServicesPage from "../pages/services";

const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
]);

export default function RouterConfig() {
 
  return <RouterProvider router={router} />;
}