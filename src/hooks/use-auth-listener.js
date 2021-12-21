import { useState, useEffect, useContext } from "react";

import FirebaseContext from "../context/firebase";

const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      //We have a user..Store it in localStorage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
        //We don't have an auth user so we clear out the localstorage
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
  }, [firebase]);
  return { user };
};

export default useAuthListener;
