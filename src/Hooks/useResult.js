import React, { useState, useEffect } from "react";
import yelp from "../Api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "ENG",
        },
      });
      setResult(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something Went Wrong!!");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, result, errorMessage];
};
