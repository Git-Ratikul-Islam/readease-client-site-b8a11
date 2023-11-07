import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { AiOutlineCheck } from 'react-icons/ai';




const SIgnUp = () => {
      const { createUser } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleSignUp = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, email, password);

            // create user 
            const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).*$/;
            if (password.length < 6) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password should be at least 6 characters ',
                  });
                  e.target.reset();
                  return;

            } else if (!passwordRegex.test(password)) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password must contain at least one capital letter and one special character',
                  });
                  e.target.reset();
                  return;
            }


            createUser(email, password)
                  .then(result => {
                        console.log(result.user);
                        e.target.reset();
                        Swal.fire(
                              'Login Successful!',
                              'User logged in successfully!',
                              'success'
                        );
                        navigate('/');

                  })
                  .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                              Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Email is already in use. Please choose another email address.',
                              });
                        }
                  });


      };



      return (
            <div>
                  <section className="flex flex-col md:flex-row min-h-screen items-center w-5/6 mx-auto">
                        <div className="  lg:block w-full md:w-1/2 xl:w-1/2">
                              <img src="https://i.ibb.co/LCsvdQG/Blue-Flat-Color-Ui-Login-Page-Desktop-Prototype.png" className=" object-cover" />
                        </div>
                        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                              <div className="w-full pb-[500px] md:pb-0 lg:pb-0">
                                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create an account</h1>

                                    {/* here form starts  */}
                                    <form className="mt-6" onSubmit={handleSignUp}>
                                          <div>
                                                <label className="block text-gray-700">Name</label>
                                                <input
                                                      type="text"
                                                      name="name"
                                                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                      autoFocus
                                                      autoComplete
                                                      required
                                                />
                                          </div>
                                          <div className="mt-4">
                                                <label className="block text-gray-700">Email</label>
                                                <input
                                                      type="email"
                                                      name="email"
                                                      placeholder="your@gmail.com"
                                                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                      required
                                                />
                                          </div>
                                          <div className="mt-4">
                                                <label className="block text-gray-700">Password</label>
                                                <input
                                                      type="password"
                                                      name="password"
                                                      placeholder="Enter Password"
                                                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                      required
                                                />

                                          </div>
                                          <div className="mt-4">
                                                <p className="mt-2">Password must be 6 character</p>
                                                <p className="mt-2">Password must have special character</p>
                                          </div>
                                          <div className="text-right mt-2">
                                                <a className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                                                      Forgot Password?
                                                </a>
                                          </div>
                                          <button
                                                type="submit"
                                                className="w-full  bg-[#abc7cb] hover:bg-[#cbe4eb] focus:bg-[#cbe4eb] text-[#1f2937] font-semibold rounded-lg px-4 py-3 mt-6"
                                          >
                                                Sign up
                                          </button>
                                    </form>
                                    <hr className="my-6 border-gray-300 w-full" />

                                    <p className="mt-8">
                                          Already have account? <Link to="/login"><a className="text-[#1f2937] hover:text-blue-700 font-semibold">Log in</a></Link>
                                    </p>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default SIgnUp;