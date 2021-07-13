import React, { useState } from "react";
import spinner from "../assets/images/spinner.gif";
// import spinner from "../assets/images/loader.svg";


const useLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading,
    loading ? <img src={spinner} alt="loading-spinner" style={{width:"100px", height:"100px"}} /> : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
};

export default useLoader;
