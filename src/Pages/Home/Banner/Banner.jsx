
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
      return (
            <>
                  <div className='h-[100vh]'>
                        <Swiper
                              spaceBetween={30}
                              centeredSlides={true}
                              autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                              }}
                              pagination={{
                                    clickable: true,
                              }}


                              modules={[Autoplay, Pagination]}
                              className="mySwiper"
                        >
                              <SwiperSlide >
                                    <div className=' bg-[#cbe4eb] lg:mt-auto mt-auto lg:h-[450px] h-[600px] w-full'>
                                          <div className="hero min-h-screen absolute">
                                                <div className="hero-content flex-col lg:flex-row ">
                                                      <img src="https://i.ibb.co/PTDLLSM/Art-history-mockup1.png" className="test lg:max-w-md max-w-xs rounded-lg shadow-2xl relative lg:bottom-[530px] bottom-72  lg:mr-0 w-1/2" />
                                                      <div data-aos="fade-down"
                                                            data-aos-easing="linear"
                                                            data-aos-duration="1000" className='relative bottom-[280px] ml-7 lg:right-0 right-20  lg:bottom-[450px] w-1/2'>
                                                            <h1 className="lg:text-5xl text-4xl lg:pb-40 pb-4 lg:text-start  lg:ml-20 ml-28 font-bold">Borrow Your Book  Now!</h1>
                                                            <div className='text-start lg:ml-20 pl-28 lg:pl-0'>
                                                                  <p className='text-[#6a6a6b]  text-center lg:text-start '>See all of the available books</p>
                                                                  <div className='mt-7 lg:ml-0 ml-2'>
                                                                        <Link to="/allBooks">  <a className='border border-black px-2 py-2 hover:bg-[#47848e] hover:text-white hover:border-none'>All Books</a></Link>
                                                                  </div>


                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                    </div>



                              </SwiperSlide>

                              {/* slider number 2 */}

                              <SwiperSlide>

                                    <div className=' bg-[#cbe4eb] lg:mt-auto mt-auto lg:h-[450px] h-[600px] w-full'>
                                          <div className="hero min-h-screen absolute">
                                                <div className="hero-content flex-col lg:flex-row ">
                                                      <img src="https://i.ibb.co/dKkGTfT/village-mockup3.png" className="test lg:max-w-md max-w-xs rounded-lg shadow-2xl relative lg:bottom-[530px] bottom-72  lg:mr-0 w-1/2" />
                                                      <div className='relative bottom-[280px] ml-7 lg:right-0 right-20  lg:bottom-[450px] w-1/2'>
                                                            <h1 className="lg:text-5xl text-4xl lg:pb-40 pb-4 lg:text-start  lg:ml-20 ml-28 font-bold">Borrow Your Book  Now!</h1>
                                                            <div className='text-start lg:ml-20 pl-28 lg:pl-0'>
                                                                  <p className='text-[#6a6a6b]  text-center lg:text-start '>See all of the available books</p>
                                                                  <div className='mt-7 lg:ml-0 ml-2'>
                                                                        <Link to="/allBooks">  <a className='border border-black px-2 py-2 hover:bg-[#47848e] hover:text-white hover:border-none'>All Books</a></Link>
                                                                  </div>


                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </SwiperSlide>

                              {/* slider number 3 */}
                              <SwiperSlide>
                                    <div className=' bg-[#cbe4eb] lg:mt-auto mt-auto lg:h-[450px] h-[600px] w-full'>
                                          <div className="hero min-h-screen absolute">
                                                <div className="hero-content flex-col lg:flex-row ">
                                                      <img src="https://i.ibb.co/569FbKZ/Ancient-History-Mockup4.png" className="test lg:max-w-md max-w-xs rounded-lg shadow-2xl relative lg:bottom-[530px] bottom-72  lg:mr-0 w-1/2" />
                                                      <div className='relative bottom-[280px] ml-7 lg:right-0 right-20  lg:bottom-[450px] w-1/2'>
                                                            <h1 className="lg:text-5xl text-4xl lg:pb-40 pb-4 lg:text-start  lg:ml-20 ml-28 font-bold">Borrow Your Book  Now!</h1>
                                                            <div className='text-start lg:ml-20 pl-28 lg:pl-0'>
                                                                  <p className='text-[#6a6a6b]  text-center lg:text-start '>See all of the available books</p>
                                                                  <div className='mt-7 lg:ml-0 ml-2'>
                                                                        <Link to="/allBooks">  <a className='border border-black px-2 py-2 hover:bg-[#47848e] hover:text-white hover:border-none'>All Books</a></Link>
                                                                  </div>


                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </SwiperSlide>

                              {/* slider number 4 */}
                              <SwiperSlide>
                                    <div className=' bg-[#cbe4eb] lg:mt-auto mt-auto lg:h-[450px] h-[600px] w-full'>
                                          <div className="hero min-h-screen absolute">
                                                <div className="hero-content flex-col lg:flex-row ">
                                                      <img src="https://i.ibb.co/1QxQ5Mq/Greeta-self-help-mockup1.png" className="test lg:max-w-md max-w-xs rounded-lg shadow-2xl relative lg:bottom-[530px] bottom-72  lg:mr-0 w-1/2" />
                                                      <div className='relative bottom-[280px] ml-7 lg:right-0 right-20  lg:bottom-[450px] w-1/2'>
                                                            <h1 className="lg:text-5xl text-4xl lg:pb-40 pb-4 lg:text-start  lg:ml-20 ml-28 font-bold">Borrow Your Book  Now!</h1>
                                                            <div className='text-start lg:ml-20 pl-28 lg:pl-0'>
                                                                  <p className='text-[#6a6a6b]  text-center lg:text-start '>See all of the available books</p>
                                                                  <div className='mt-7 lg:ml-0 ml-2'>
                                                                        <Link to="/allBooks">  <a className='border border-black px-2 py-2 hover:bg-[#47848e] hover:text-white hover:border-none'>All Books</a></Link>
                                                                  </div>


                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </SwiperSlide>

                        </Swiper>
                  </div>
            </>
      );
};

export default Banner;