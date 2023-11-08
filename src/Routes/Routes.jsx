import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddBooks from "../Pages/Home/AddBooks/AddBooks";
import AllBooks from "../Pages/Home/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/Home/BorrowedBooks/BorrowedBooks";
import ErrorElement from "../Pages/Home/ErrorElement/ErrorElement";
import Route404 from "../Pages/Home/Route404/Route404";
import Login from "../Pages/Home/Authentication/Login";
import SIgnUp from "../Pages/Home/Authentication/SIgnUp";
import PrivateRoutes from "../Pages/Routes/PrivateRoutes";
import Update from "../Pages/Home/Update/Update";

const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            errorElement: <ErrorElement></ErrorElement>,
            children: [{
                  path: "/",
                  element: <Home></Home>
            },
            {
                  path: "/addBooks",
                  element: <PrivateRoutes><AddBooks></AddBooks></PrivateRoutes>
            },
            {
                  path: "/allBooks",
                  element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>,
                  loader: () => fetch('https://readease-server.vercel.app/book')

            },
            {
                  path: "/borrowedBooks",
                  element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>
            },
            {
                  path: "/updateBook/:id",
                  element: <Update></Update>,
                  loader: ({ params }) => fetch(`https://readease-server.vercel.app/book/${params.id}`)
            },
            {
                  path: "/login",
                  element: <Login></Login>
            },
            {
                  path: "/signUp",
                  element: <SIgnUp></SIgnUp>
            }
            ],

      },
      {
            path: "*",
            element: <Route404></Route404>
      }
]);
export default router;