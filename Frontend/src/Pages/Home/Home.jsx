import React from "react";
import { useState } from "react";
import AppDownload from "../../Components/AppDownload/AppDownload";
import ExploreMenu from "../../Components/ExploreMenu.jsx/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Header from "../../Components/Header/Header";
import "./Home.css";

const Home = () => {

   const [category,setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
