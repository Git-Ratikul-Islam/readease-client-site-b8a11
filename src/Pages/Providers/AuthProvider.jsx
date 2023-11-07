import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);


      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      const signIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };
      const signInWithGoogle = () => {
            setLoading(true);
            return signInWithPopup(auth, googleAuthProvider);
      };


      const logOut = () => {
            return signOut(auth);
      };



      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  console.log('User in the auth state change ', currentUser);
                  setUser(currentUser);
                  setLoading(false);
            });
            return () => {
                  unSubscribe();
            };
      }, []);



      const authInfo = {
            user,
            createUser,
            signIn,
            signInWithGoogle,
            logOut,
            loading


      };

      return (



            <AuthContext.Provider value={authInfo}>
                  {children}

            </AuthContext.Provider>
      );
};

export default AuthProvider;