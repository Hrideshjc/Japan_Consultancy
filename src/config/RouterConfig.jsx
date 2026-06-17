import AboutPage from "../pages/about";
import ServicesPage from "../pages/services";

const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
]);

export default function RouterConfig() {
 
  return <RouterProvider router={router} />;
}