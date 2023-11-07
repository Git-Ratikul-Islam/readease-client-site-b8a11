import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddBooks from "../Pages/Home/AddBooks/AddBooks";
import AllBooks from "../Pages/Home/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/Home/BorrowedBooks/BorrowedBooks";
import ErrorElement from "../Pages/Home/ErrorElement/ErrorElement";
import Route404 from "../Pages/Home/Route404/Route404";

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
                  element: <AddBooks></AddBooks>
            },
            {
                  path: "/allBooks",
                  element: <AllBooks></AllBooks>,
                  loader: () => fetch('http://localhost:5000/book')

            },
            {
                  path: "/borrowedBooks",
                  element: <BorrowedBooks></BorrowedBooks>
            }
            ],

      },
      {
            path: "*",
            element: <Route404></Route404>
      }
]);
export default router;