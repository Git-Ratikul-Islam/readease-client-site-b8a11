import { Link, NavLink } from 'react-router-dom';
import img from '../../../assets/ReadEase.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {

      const { user, logOut } = useContext(AuthContext);

      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        console.log('User logged out');
                        Swal.fire(
                              'Logout Successful!',
                              'User logged out successfully!',
                              'success'
                        );
                  })
                  .catch(error => {
                        console.error(error);
                        Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Something went wrong try again!',
                        });
                  });
      };



      const links = <>
            <div className='lg:flex gap-10 lg:ml-2 '>
                  <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                  }><a>Home</a></NavLink></li>
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

            <div className="navbar bg-base-100 py-4 lg:w-5/6 lg:mx-auto ">
                  <div className="navbar-center">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[50] px-4 py-10 space-y-4 shadow bg-base-100 w-56 rounded-box text-start">

                                    <li><NavLink to="/" className={({ isActive }) =>
                                          isActive ? " border-[#abc7cb] border   px-2 py-2 text-[#abc7cb] font-bold " : " hover:border-[#abc7cb] hover:border  md:px-2 px-2 py-2 hover:text-[#abc7cb] hover:font-bold text-[#1f2937] font-bold"
                                    }><a>Home</a></NavLink></li>
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

                  {user ? <div className="navbar-end z-50">
                        <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-20 rounded-full">
                                          <img src={user.photoURL} />
                                    </div>
                              </label>
                              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                          <a className="justify-between">
                                                {user.displayName}
                                          </a>
                                          <p><small>{user.email}</small></p>
                                    </li>
                                    <hr />
                                    <li ><a onClick={handleLogOut}>Logout</a></li>
                              </ul>
                        </div>
                  </div> : <div className='navbar-end'>
                        <Link to="/login"> <button className='btn btn-primary bg-[#abc7cb] border-none text-[#1f2937] hover:bg-[#abc7cbc7]'>  Log in</button></Link>
                  </div>}



            </div>
      );
};

export default Navbar;