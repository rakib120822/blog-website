import React from "react";
import Hero from "./Hero";
import Feature from "./feature/Container";
import Explore from "./explore/Container";
import Resource from "./resource/Container";

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Explore />
      <Resource />
    </>
  );
}

export default Home;
