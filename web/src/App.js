import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login/>,
  },
  {
    path: "/auth/signup",
    element: <Signup/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
