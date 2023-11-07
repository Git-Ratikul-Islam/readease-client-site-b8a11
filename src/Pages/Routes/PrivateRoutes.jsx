import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {

      const { user, loading } = useContext(AuthContext);

      if (user) {
            return children;
      }
      if (loading) {
            <span className="loading loading-spinner loading-lg text-center text-black"></span>;
      }




      return <Navigate to="/login"></Navigate>;

};

export default PrivateRoutes;
