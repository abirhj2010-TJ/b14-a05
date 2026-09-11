import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { TechnologyType } from "./Types/technologyType";

const technologyFetch = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/data.json");

  const data:TechnologyType[] = await res.json();

  return data;
};

function App() {
  const [technologyPromise] = useState(() => technologyFetch());

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading Technologies...</h2>}>
        <Technologies technologyPromise = {technologyPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
