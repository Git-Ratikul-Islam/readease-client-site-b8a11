import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const AllBooks = () => {
      const books = useLoaderData();
      return (
            <div className="w-5/6 mx-auto text-center min-h-screen">
                  <h1 className="mt-10 text-4xl font-semibold  w-4/6 mx-auto">Collection of all books</h1>
                  <hr className="w-4/6 mx-auto mt-5 h-[2px] bg-[#cbe4eb]" />

                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                        {
                              books.map(book => <BookCard key={book._id}
                                    book={book}></BookCard>)
                        }

                  </div>

            </div>
      );
};

export default AllBooks;