
const BookCard = ({ book }) => {
      const { image, name, author, category, rating } = book;
      return (
            <div className="grid grid-cols-4">
                  <div className=" w-96 border border-[#abc7cb] mt-14 mb-4">
                        <figure className="px-10 pt-10">
                              <img data-aos="zoom-out-down" data-aos-easing="linear"
                                    data-aos-duration="500" src={image} alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-start text-start ml-3">
                              <h2 className="card-title font-semibold text-3xl text-[#1f2937bc]">{category}</h2>
                              <h2 className="card-title font-semibold text-sm text-[#1f2937bc]">{author}</h2>
                              <h2 className="card-title">{name}</h2>
                              <p className="">Rating: {rating}</p>

                              <div className="card-actions justify-between">
                                    <button className="before:ease relative h-12 w-28 overflow-hidden border-2 border-[#cbe4eb] text-black shadow-2xl  transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#cbe4eb] before:duration-300 hover:text-black hover:shadow-[#cbe4eb] hover:before:h-64 hover:before:-translate-y-32">
                                          <span className="relative z-10">Update</span>
                                    </button>
                                    <button className="before:ease relative h-12 w-28 overflow-hidden border-2 border-[#cbe4eb] text-black shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#cbe4eb] before:duration-300 hover:text-black hover:shadow-[#cbe4eb] hover:before:h-64 hover:before:-translate-y-32">
                                          <span className="relative z-10">Filter</span>
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BookCard;