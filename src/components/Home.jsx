import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => { 
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <h1 className="text-2xl">This is Home for: {authInfo.name}</h1>
    </div>
  );
};

export default Home;
