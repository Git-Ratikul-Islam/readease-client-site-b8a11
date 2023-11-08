import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const AllBooks = () => {
      const books = useLoaderData();
      const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending order

      const handleFilterClick = () => {
            // Toggle sorting order between ascending and descending
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      };

      return (
            <>
                  <div className="w-5/6 mx-auto text-center min-h-screen">
                        <h1 className="mt-10 text-4xl font-semibold w-4/6 mx-auto">
                              Collection of all books
                        </h1>
                        <hr className="w-4/6 mx-auto mt-5 h-[2px] bg-[#cbe4eb]" />
                        <div className="items-start justify-start flex pt-5">
                              <button
                                    className="before:ease relative h-12 w-28 overflow-hidden border-2 border-[#cbe4eb] text-black shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#cbe4eb] before:duration-300 hover:text-black hover:shadow-[#cbe4eb] hover:before:h-64 hover:before:-translate-y-32"
                                    onClick={handleFilterClick}
                              >
                                    <span className="relative z-10">Filter</span>
                              </button>
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                              {books
                                    .slice()
                                    .sort((a, b) =>
                                          sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
                                    )
                                    .map((book) => (
                                          <BookCard key={book._id} book={book}></BookCard>
                                    ))}
                        </div>
                  </div>
            </>
      );
};

export default AllBooks;
