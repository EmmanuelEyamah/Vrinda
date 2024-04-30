import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SiteLayout } from "./components/Layouts";
import { 
  AboutUs, 
  Home, 
  Blogs, 
  Community, 
  ContactUs, 
  Legals, 
  Policy, 
  Terms, 
  TokenSales 
} from "./pages";


function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <SiteLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <AboutUs /> },
          { path: "/blogs", element: <Blogs /> },
          { path: "/community", element: <Community /> },
          { path: "/contact-us", element: <ContactUs /> },
          { path: "/legals", element: <Legals /> },
          { path: "/policy", element: <Policy /> },
          { path: "/terms", element: <Terms /> },
          { path: "/token-sales", element: <TokenSales /> },
        ],
      },
    ]);
  
    return <RouterProvider router={router} />;
}

export default App
