import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Topbar from "./Topbar";
import WikiContainer from "./WikiContainer";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header/>
      <Topbar selected = {selected} setSelected={setSelected}/>
      <WikiContainer selected={selected}/>
      <Footer/>
    </>
  );
}

export default App
