import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";

export const useAuth = () => {

    let dispatch = useDispatch()

  let navigate = useNavigate();

  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("User Registered")
  };
  const loginForm = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if(!user){
        toast.error("Invalid Credentials or User Not Found")
    }

    dispatch(addUser(user))
    localStorage.setItem("loggedInUser", JSON.stringify(user))
    toast.success("User Logged in Successfully")
    reset()

  };

  return {
    navigate,
    register,
    reset,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
  };
};
