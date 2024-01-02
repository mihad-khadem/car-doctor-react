import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
//   baseURL: "https://car-dr-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  console.log(navigate);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        // console.log(res);
        return res;
      },
      (error) => {
        console.log("Error Response from interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, [logout, navigate]);

  return axiosSecure;
};

export default useAxios;
