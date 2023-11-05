import { NavLink } from 'react-router-dom';
import img from '../../../assets/ReadEase.png';
const Navbar = () => {

      const links = <>
            <div className='lg:flex gap-10 lg:ml-2'>
                  <li><NavLink to="/addBooks" className={({ isActive }) =>
                        isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                  }><a>Add Book</a></NavLink></li>
                  <li><NavLink to="/allBooks" className={({ isActive }) =>
                        isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                  }><a>All Books</a></NavLink></li>
                  <li><NavLink to="/borrowedBooks" className={({ isActive }) =>
                        isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                  }><a>Borrowed Books</a></NavLink></li>
            </div>
      </>;


      return (

            <div className="navbar bg-base-100 py-4 lg:w-5/6 lg:mx-auto">
                  <div className="navbar-center">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] px-4 py-10 space-y-4 shadow bg-base-100 w-56 rounded-box text-start">


                                    <li><NavLink to="/addBooks" className={({ isActive }) =>
                                          isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                                    }><a>Add Book</a></NavLink></li>
                                    <li><NavLink to="/allBooks" className={({ isActive }) =>
                                          isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                                    }><a>All Books</a></NavLink></li>
                                    <li><NavLink to="/borrowedBooks" className={({ isActive }) =>
                                          isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                                    }><a>Borrowed Books</a></NavLink></li>

                              </ul>
                        </div>

                  </div>
                  <div className="navbar-start hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                              {links}
                        </ul>
                  </div>
                  <div className='navbar-center'>
                        <img src={img} className='w-14' alt="" />
                        <span className='ml-3 text-3xl font-semibold'>ReadEase</span>
                  </div>

                  {/* <div className="navbar-end  ">
                        <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                              </label>
                              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                          <a className="justify-between">
                                                User Name
                                          </a>
                                          <p><small>Email@gmail.com</small></p>
                                    </li>
                                    <hr />
                                    <li><a>Logout</a></li>
                              </ul>
                        </div>
                  </div> */}
                  <div className='navbar-end'>
                        <button className='btn btn-primary bg-[#abc7cb] border-none text-[#1f2937] hover:bg-[#abc7cbc7]'>  Log in</button>
                  </div>
            </div>
      );
};

export default Navbar;