import { useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddBooks = () => {
      const formRef = useRef(null);

      const handleFormData = e => {
            e.preventDefault();
            const form = e.target;
            const image = form.image.value;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const author = form.author.value;
            const category = form.category.value;
            const description = form.description.value;
            const rating = form.rating.value;
            const newBook = { image, name, quantity, author, category, description, rating };
            console.log(newBook);

            // send data to the server
            fetch('http://localhost:5000/book', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newBook)

            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        formRef.current.reset('');
                        if (data.insertedId) {
                              Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Book added successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }
                  });

      };


      return (
            <div className="min-h-screen p-6  flex items-center justify-center">
                  <div className="container max-w-screen-lg mx-auto">
                        <div>
                              <div className="bg-[#cbe4eb] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                          <div className="text-gray-600">
                                                <p className="font-medium text-lg">Add books</p>
                                                <p>Please fill out all the fields.</p>
                                          </div>

                                          <div className="lg:col-span-2">
                                                <form onSubmit={handleFormData} ref={formRef}>
                                                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">



                                                            <div className="md:col-span-3">
                                                                  <label htmlFor="address">Image</label>
                                                                  <input
                                                                        required
                                                                        type="text"
                                                                        name="image"
                                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                  />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                  <label htmlFor="city">Name</label>
                                                                  <input
                                                                        required
                                                                        type="text"
                                                                        name="name"
                                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                  />
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                  <label htmlFor="full_name">Quantity of book</label>
                                                                  <input
                                                                        required
                                                                        type="number"
                                                                        name="quantity"
                                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                  />
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                  <label htmlFor="email">Author Name</label>
                                                                  <input
                                                                        required
                                                                        type="text"
                                                                        name="author"
                                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                  />
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                  <label htmlFor="email">Category</label>
                                                                  <input
                                                                        required
                                                                        type="text"
                                                                        name="category"
                                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                  />
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                  <label htmlFor="email"> Short description
                                                                  </label>
                                                                  <input
                                                                        required
                                                                        type="text"
                                                                        name="description"
                                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                  />
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                  <label htmlFor="email">Rating</label>
                                                                  <input
                                                                        required
                                                                        type="text"
                                                                        name="rating"
                                                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                  />
                                                            </div>




                                                            <div className="md:col-span-5 text-right mt-3">
                                                                  <div className="inline-flex items-end">
                                                                        <Link to="/"> <button className="bg-[#abc7cb]  drop-shadow mr-4 hover:bg-[#bbdadf] text-[#1f2937] font-bold py-2 px-4 rounded">
                                                                              Go Home
                                                                        </button></Link>
                                                                        <button type="submit" className="bg-[#abc7cb] drop-shadow mr-4 hover:bg-[#bbdadf] text-[#1f2937] font-bold py-2 px-4 rounded">
                                                                              Submit
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AddBooks;