import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
      const { signIn, signInWithGoogle } = useContext(AuthContext);
      const navigate = useNavigate();
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).*$/;


      const handleLogIn = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            signIn(email, password)
                  .then(result => {
                        console.log(result.user);
                        Swal.fire(
                              'Login Successful!',
                              'User logged in successfully!',
                              'success'
                        );
                        e.target.reset();
                        navigate('/');
                  })
                  .catch(error => {
                        console.error(error);
                        if (!passwordRegex.test(password)) {
                              Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Password must contain at least one capital letter and one special character',
                              });
                              e.target.reset();
                              return;
                        }
                        else if (error.code === "auth/invalid-login-credentials") {
                              Swal.fire({
                                    icon: 'error',
                                    title: 'Login Failed',
                                    text: "Password or Email dosen't exist",
                              });
                        }
                        else if (error.code === "auth/user-not-found") {
                              Swal.fire({
                                    icon: 'error',
                                    title: 'Login Failed',
                                    text: 'User with this email does not exist.',
                              });
                        }
                  });
      };
      const handleGoogleSignIn = () => {
            signInWithGoogle()
                  .then(result => {
                        console.log(result.user);
                        Swal.fire(
                              'login Success!',
                              'User logged in succesfully!',
                              'success'
                        );

                        navigate('/');
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




      return (
            <div>
                  <section className="flex flex-col md:flex-row min-h-screen items-center w-5/6 mx-auto">
                        <div className="  lg:block w-full md:w-1/2 xl:w-1/2">
                              <img src="https://i.ibb.co/LCsvdQG/Blue-Flat-Color-Ui-Login-Page-Desktop-Prototype.png" className=" object-cover" />
                        </div>
                        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                              <div className="w-full pb-[500px] md:pb-0 lg:pb-0">
                                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                                    <form className="mt-6" onSubmit={handleLogIn}>
                                          <div>
                                                <label className="block text-gray-700">Email Address</label>
                                                <input
                                                      type="email"
                                                      name="email"
                                                      placeholder="Enter Email Address"
                                                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                      autoFocus
                                                      autoComplete
                                                      required
                                                />
                                          </div>
                                          <div className="mt-4">
                                                <label className="block text-gray-700">Password</label>
                                                <input
                                                      type="password"
                                                      name="password"
                                                      placeholder="Enter Password"
                                                      minLength="6"
                                                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                      required
                                                />
                                          </div>
                                          <div className="text-right mt-2">
                                                <a className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                                                      Forgot Password?
                                                </a>
                                          </div>
                                          <button
                                                type="submit"
                                                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                                          >
                                                Log In
                                          </button>
                                    </form>
                                    <hr className="my-6 border-gray-300 w-full" />
                                    <button
                                          type="button"
                                          className="w-full block bg-white hover-bg-gray-100 focus-bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                                    >
                                          <div className="flex items-center justify-center" onClick={handleGoogleSignIn}>
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                                      className="w-6 h-6"
                                                      viewBox="0 0 48 48"
                                                >
                                                      <defs>
                                                            <path
                                                                  id="a"
                                                                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                                            />
                                                      </defs>
                                                      <clipPath id="b">
                                                            <use xlinkHref="#a" overflow="visible" />
                                                      </clipPath>
                                                      <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                                      <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                                      <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                                      <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                                </svg>
                                                <span className="ml-4">Log in with Google</span>
                                          </div>
                                    </button>
                                    <p className="mt-8">
                                          Need an account?
                                          <Link to="/signUp"><a className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</a></Link>
                                    </p>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default Login;

