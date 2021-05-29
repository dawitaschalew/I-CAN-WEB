import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback,
} from "react";
import Router from "next/router";
import axios from "../utils/Axios";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [users, setUsers] = useState();
  const [searchedUsers, setSearchedUsers] = useState();

  useEffect(() => {
    autoSignIn();
  }, []);

  /////////////////////////// SIGN IN /////////////////////////////////

  // AUTO-SIGNIN
  const autoSignIn = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const authToken = localStorage.getItem("authToken");
      const userId = localStorage.getItem("userId");

      if (!authToken || !userId) {
        setUser(null);
        setLoading(false);
        return;
      }

      axios.defaults.headers.Authorization = `Bearer ${authToken}`;
      const res = await axios.get(`/auth/users/${userId}`);
      setUser(res.data.user);
      // console.log(res.data.user);
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setUser(null);
      localStorage.clear();
      axios.defaults.headers.Authorization = "";
      setError(error.message || "Error occured please try again.");
      setLoading(false);
    }
  }, []);

  // SIGN-IN
  const signIn = useCallback(async (data) => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post("/auth/sign-in", data);
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
      setUser(res.data.user);
      setLoading(false);
      if (res.data.user.role == "Admin") {
        Router.replace("/admin");
      } else {
        Router.replace("/");
      }
    } catch (error) {
      if (error.response) {
        if (!error.response.status) {
          setError("NETWORK_ERROR");
        } else {
          if (error.response.data.message) {
            // console.log(error.response.data.message);
            setError(error.response.data.message);
          } else {
            setError(`${error.response.status} : no message recieved`);
          }
        }
      } else if (error.request) {
        if (!error.status) {
          setError("NETWORK_ERROR");
        } else {
          // console.log(error.request);
          // console.log(error.config);
          // console.log(error.message);
          // console.log(error.status);
        }
      } else {
        // console.log("Error : ", error.message);
        setError(`Error : ${error.message} `);
      }
      setLoading(false);
    }
  }, []);

  /////////////////////////////////////////////////////////////////////

  /////////////////////////// SIGN UP /////////////////////////////////

  const signUp = useCallback(
    async (data) => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.post("/auth/sign-up", data);
        setLoading(false);
        alert(
          "Signed up successfully ... you can now login to your account with your username and password."
        );
      } catch (error) {
        if (error.response) {
          if (!error.response.status) {
            setError({ message: "NETWORK_ERROR" });
          } else {
            if (error.response.data.message) {
              setError({ message: error.response.data.message });
            } else {
              setError({
                message: `${error.response.status} : no message recieved`,
              });
            }
          }
        } else if (error.request) {
          if (!error.status) {
            setError({ message: "NETWORK_ERROR" });
          } else {
            // console.log(error.request);
            // console.log(error.config);
            // console.log(error.message);
            // console.log(error.status);
          }
        } else {
          // console.log("Error : ", error.message);
          setError({ message: `Error : ${error.message} ` });
        }
        setLoading(false);
        alert(error.message);
      }
    },
    [user]
  );

  /////////////////////////////////////////////////////////////////////

  /////////////////////////// SIGN OUT /////////////////////////////////

  const signOut = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      localStorage.removeItem("authToken");
      localStorage.removeItem("userId");
      setUser(null);
      setLoading(false);
    } catch (error) {}
  }, [user]);

  /////////////////////////////////////////////////////////////////////

  /////////////////////////// User Data /////////////////////////////////

  const getAllUsers = useCallback(async () => {
    try {
      setError(null);
      const res = await axios.get("/auth/users");
      setUsers(res.data.users);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  ////////////////////////////////////////////////////////////////////

  /////////////////////////// DELETE USER /////////////////////////////////

  const deleteUser = useCallback(async () => {
    // try {
    //   setLoading(true);
    //   setError(null);
    //   const res = await axios.get("/users");
    //   setUsers(res.data.users);
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   setError(error);
    // }
  }, []);

  ////////////////////////////////////////////////////////////////////

  /////////////////////////// SEARCH USER /////////////////////////////////

  const searchUsers = useCallback(async (query) => {
    try {
      setError(null);
      // setLoading(true);
      const res = await axios.get(`/auth/users/search`, { searchQuery: query });
      setSearchedUsers(res.data.users);
      // setLoading(false);
    } catch (error) {
      setError(error.message || "Error occured please try again.");
      // setLoading(false);
      return;
    }
  }, []);

  ////////////////////////////////////////////////////////////////////

  /////////////////////////// SEARCH USER /////////////////////////////////

  const updateUser = useCallback(async (userID, data) => {
    try {
      setError(null);
      // setLoading(true);
      const res = await axios.patch(`/users/${userID}`, data);
      getAllUsers();
      // setLoading(false);
    } catch (error) {
      setError(error.message || "Error occured please try again.");
      // setLoading(false);
      return;
    }
  }, []);

  const clearSearch = () => {
    setSearchedUsers(null);
  };

  ////////////////////////////////////////////////////////////////////
  useEffect(() => {}, []);

  const contextValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signIn,
      signUp,
      signOut,
      setError,
      users,
      getAllUsers,
      deleteUser,
      searchUsers,
      searchedUsers,
      clearSearch,
    }),
    [
      user,
      loading,
      error,
      signIn,
      signUp,
      signOut,
      users,
      getAllUsers,
      deleteUser,
      searchUsers,
      searchedUsers,
      clearSearch,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
