

const NewCollection = () => {
      return (
            <div>
                  <div className="mx-auto min-h-[70vh]  px-4 text-gray-600 md:max-w-screen-lg">
                        <div className="mb-10 flex flex-col border-t-4 border-[#cbe4eb] pt-4 md:flex-row">
                              <h2 className="mr-auto mb-4 text-4xl font-medium lg:text-3xl">Library since <span className="whitespace-nowrap text-blue-600 md:text-gray-600">2 Decades</span></h2>
                              <a href="#" className="text-lg font-medium underline hover:text-blue-600">Read our Story</a>
                        </div>
                        <div className="flex flex-col md:flex-row">
                              <div>
                                    <p className="mb-4 md:pr-10 text-[#a58c8c] md:text-xl md:leading-relaxed lg:pr-28"> For the past two decades, Readease has stood as a beacon of knowledge and a hub for community engagement. We take great pride in our rich history and the invaluable role we've played in the lives of our patrons.</p>
                                    <p className="md:pr-10 text-[#a58c8c] md:text-xl md:leading-relaxed lg:pr-28"> Founded in 2003, our library embarked on a journey of transformation and growth, evolving from a conventional repository of books into a dynamic, digitally empowered institution. Over the years, we've adapted to the changing needs of our community, always striving to provide an enriching and accessible experience for all.</p>
                              </div>
                              <p className="hidden uppercase md:block md:text-7xl">
                                    Since <br />
                                    <span className="whitespace-nowrap text-[#cbe4eb]">20 Years</span>



                              </p>
                        </div>
                  </div>

            </div>
      );
};

export default NewCollection;