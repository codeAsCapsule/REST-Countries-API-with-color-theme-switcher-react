import Header from "./components/Header";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import {  Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes >
      <Countries />
      </Routes>
        <Filter />
    </>
  );
}

export default App;
