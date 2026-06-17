import AboutPage from "../pages/About";
import ServicesPage from "../pages/Services";

const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
]);

export default function RouterConfig() {
 
  return <RouterProvider router={router} />;
}