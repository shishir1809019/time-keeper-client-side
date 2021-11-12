import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [isAdminStatusLoad, setIsAdminStatusLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");

  //email and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  /***************/

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerNewUser = (email, password, name) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const processLogin = () => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      // Profile updated!
    });
  };

  /**************************************/

  //observe whether user auth state change or not
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
          // console.log(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  //save login info to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://calm-headland-36489.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  //admin role load
  useEffect(() => {
    fetch(`https://calm-headland-36489.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);

  return {
    name,
    admin,
    isAdminStatusLoad,
    token,
    user,
    error,
    email,
    password,
    isLoading,
    setUser,
    setUserName,
    setError,
    setIsLoading,

    signInUsingGoogle,
    logOut,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    saveUser,

    registerNewUser,
    processLogin,
  };
};

export default useFirebase;
