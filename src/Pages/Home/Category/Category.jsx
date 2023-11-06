import './styles.css';

const Category = () => {


      return (<>
            <div className='min-h-[80vh]'>
                  <div className='w-5/6 mx-auto mb-10 text-center'>
                        <h1 className='text-6xl'>Category</h1>
                        <h4 className='text-lg mt-4 ml-2'>Popular category of books visit now to borrow</h4>
                  </div>
                  <div className="min-h-[40vh] grid grid-cols-4 gap-3 w-5/6 mx-auto place-items-center">
                        {/* Card Number 1 */}
                        <div className="rounded-md bg-[#cbe4eb] shadow-lg hover-effect " >
                              <div className="md:flex px-4 leading-none max-w-sm">
                                    <div className="flex-none">
                                          <img
                                                src="https://i.ibb.co/pnhQWnP/Black-And-Grey-Mystery-Movie-Poster-1.png"
                                                alt="pic"
                                                className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-[#47848e] shadow-lg"
                                          />
                                    </div>

                                    <div className="flex-col text-[#1f2937]">
                                          <p className="pt-4 text-xl text-center font-bold">Art & Music</p>
                                          <hr className="hr-text" data-content="" />

                                          <p className="hidden md:block px-4 text-sm text-left">
                                                Explore the world of art and music with our curated collection of books. Learn about famous artists, musicians, and their works.
                                          </p>
                                    </div>
                              </div>
                        </div>

                        {/* Card Number 2 */}
                        <div className="rounded-md bg-[#cbe4eb] shadow-lg hover-effect" >
                              <div className="md:flex px-4 leading-none max-w-sm">
                                    <div className="flex-none">
                                          <img
                                                src="https://i.ibb.co/YRwzSPw/Brown-Vintage-Scrapbook-Cover-Project-History-Document-A4.png"
                                                alt="pic"
                                                className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-[#47848e] shadow-lg"
                                          />
                                    </div>

                                    <div className="flex-col text-[#1f2937]">
                                          <p className="pt-4 text-xl text-center font-bold">History</p>
                                          <hr className="hr-text" data-content="" />

                                          <p className="hidden md:block px-4  text-sm text-left">
                                                Dive into the pages of history with our historical book collection. Discover events, figures, and their impact on the world.
                                          </p>
                                    </div>
                              </div>
                        </div>
                        {/* Card Number 3 */}
                        <div className="rounded-md bg-[#cbe4eb] hover-effect shadow-lg" >
                              <div className="md:flex px-4 leading-none max-w-sm">
                                    <div className="flex-none">
                                          <img
                                                src="https://i.ibb.co/n8FdXzK/Black-And-Grey-Mystery-Movie-Poster.png"
                                                alt="pic"
                                                className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-[#47848e] shadow-lg"
                                          />
                                    </div>

                                    <div className="flex-col text-[#1f2937]">
                                          <p className="pt-4 text-xl text-center font-bold">Mysterious</p>
                                          <hr className="hr-text" data-content="" />

                                          <p className="hidden md:block px-4  text-sm text-left">
                                                Delve into the world of mysteries and enigmas. Unravel the secrets hidden within our mysterious book collection.
                                          </p>
                                    </div>
                              </div>
                        </div>
                        {/* Card Number 4 */}
                        <div className="rounded-md bg-[#cbe4eb] hover-effect shadow-lg" >
                              <div className="md:flex px-4 leading-none max-w-sm">
                                    <div className="flex-none">
                                          <img
                                                src="https://i.ibb.co/5WZ6kz3/Yellow-Blue-Playful-Illustration-Self-Care-Mind-Map-2.png"
                                                alt="pic"
                                                className="h-72 w-56 object-cover rounded-md transform -translate-y-4 border-4 border-[#47848e] shadow-lg"
                                          />
                                    </div>

                                    <div className="flex-col text-[#1f2937]">
                                          <p className="pt-4 text-xl text-center font-bold">Self Help</p>
                                          <hr className="hr-text" data-content="" />

                                          <p className="hidden md:block px-4  text-sm text-left">
                                                Empower yourself with our self-help book collection. Discover personal growth, motivation, and well-being.
                                          </p>
                                    </div>
                              </div>
                        </div>




                  </div>
            </div>
      </>
      );
};

export default Category;