
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
      return (
            <>
                  <div className='h-[100vh]'>
                        <Swiper
                              spaceBetween={30}
                              centeredSlides={true}
                              autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                              }}


                              modules={[Autoplay,]}
                              className="mySwiper"
                        >
                              <SwiperSlide >
                                    <div className=' bg-[#cbe4eb] lg:mt-auto mt-auto lg:h-[450px] h-[600px] w-full'>
                                          <div className="hero min-h-screen absolute">
                                                <div className="hero-content flex-col lg:flex-row ">
                                                      <img src="https://i.ibb.co/PTDLLSM/Art-history-mockup1.png" className="test lg:max-w-md max-w-xs rounded-lg shadow-2xl relative lg:bottom-[530px] bottom-72 mr-40 lg:mr-0 w-1/2" />
                                                      <div className='relative bottom-[280px] lg:right-0 right-20 lg:bottom-[450px] w-1/2'>
                                                            <h1 className="lg:text-5xl text-4xl pb-40 lg:text-start lg:ml-20 font-bold">Borrow Your Book  Now!</h1>
                                                            <div className='text-start ml-20'>
                                                                  <p className='text-[#6a6a6b]'>See all of the books available</p>
                                                                  <div className='mt-7'>
                                                                        <Link to="/allBooks">  <a className='border border-black px-2 py-2 hover:bg-[#47848e] hover:text-white hover:border-none'>All Books</a></Link>
                                                                  </div>


                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                    </div>



                              </SwiperSlide>
                              <div className='bg-red-600 h-72 absolute'>

                              </div>
                              {/* <SwiperSlide>

                                    <div>
                                          <img src="https://i.ibb.co/1LrnYck/Body-Bhai-Eita.jpg" alt="" />
                                    </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                    <div>
                                          <img src="https://i.ibb.co/1LrnYck/Body-Bhai-Eita.jpg" alt="" />
                                    </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                    <div>
                                          <img src="https://i.ibb.co/1LrnYck/Body-Bhai-Eita.jpg" alt="" />
                                    </div>
                              </SwiperSlide> */}

                        </Swiper>
                  </div>
            </>
      );
};

export default Banner;