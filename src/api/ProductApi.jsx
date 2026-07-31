import { useEffect } from "react";
import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataApi = async () => {
    try {
      let res = await axiosInstance.get("/products");
      return res.data.products
    } catch (error) {
      console.log(error);
    }
  };

