import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {

      const { user, loading } = useContext(AuthContext);
      if (loading) {
            return <span className="loading loading-spinner lg:ml-[900px] md:w-0 ml-48 w-[100px] flex justify-center text-center text-black"></span>;
      }

      if (user) {
            return children;
      }





      return <Navigate to="/login"></Navigate>;

};

export default PrivateRoutes;
